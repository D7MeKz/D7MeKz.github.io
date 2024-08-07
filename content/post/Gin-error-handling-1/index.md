---
title: "Gin 예외처리 - 1. Go Error"
date: 2024-04-03
slug: gin-error-handling-1
tags:
  - Go
  - Gin
  - Web
categories:
  - TodoPoint
---

## Go와 예외처리

### Go에서의 예외처리

Go에서는 함수에서 반환된 [에러 객체(error)](https://go.dev/blog/error-handling-and-go)로 처리한다. 다행히도 multi-return이 가능하기에 에러 반환을 더욱 수월하게 해줄 수 있다.

```go
f, err := Sqrt(-1)
if err != nil {
    fmt.Println(err)
}
```

### try ~ catch가 없는 이유

[공식 문서](https://go.dev/doc/faq#exceptions)에 의하면 try ~ catch는 난해한 코드를 생성하며, 개발자에게 너무많은 일반적인 예외를 처리하도록 장려한다고 한다.

> We believe that coupling exceptions to a control structure, as in the `try-catch-finally` idiom, results in convoluted code. It also tends to encourage programmers to label too many ordinary errors, such as failing to open a file, as exceptional.

다른 언어처럼 try ~ catch 를 어렴풋이 구현할 수 있다. 중간에 실행의 흐름을 끊는 `panic` 함수를 사용하는 것이다. 하지만 반대로 생각하자면 **모든 에러들을 panic으로 처리해야 할까?** Go에서는 그것이 아니라는 것이다.
이런 이유로 Go는 시의적절하기 예외처리할 수 있도록 error를 반환하는 방식으로 처리하게 된다.

### Error - Wrapping

Go에서는 에러처리할 때 Error 객체를 넘겨준다고 한다. 물론 일반 에러 객체를 넘겨줄 수 있지만 개발자가 직접 만든 에러를 만들어서 넘겨줄 수 있다. Error Wrapping이란 쉽게 말하자면 error 객체를 감싸는 또다른 구조체를 만드는 것이라고 보면 된다.

gin에서의 Error를 봐보자. gin의 Error 내에 필드로 error가 존재한다. 이러한 과정을 Error Wrapping이라고 보면 된다.

```go
// Error represents a error's specification.
type Error struct {
    Err  error
    Type ErrorType
    Meta any
}
```

그럼 예를 들어보자. ctx.Error를 실행했는데 의도치 않게 errors.As가 적절하게 실행되지 않는다고 가정해보자. error.As는 Error Type을 확인하는 함수인데, 만약에 타입이 적절하지 않는다면, 입력한 error을 감싼 Error를 반환하게 된다.

```go
func (c *Context) Error(err error) *Error {
    if err == nil {
       panic("err is nil")
    }

    var parsedError *Error
    ok := errors.As(err, &parsedError)
    if !ok {
       parsedError = &Error{
          Err:  err,
          Type: ErrorTypePrivate,
       }
    }

    c.Errors = append(c.Errors, parsedError)
    return parsedError
}
```

그럼 원본 에러(error)에 접근할 수 있을까? 바로 Unwrap를 통해 얻을 수 있은 것이다.

```go
// Unwrap returns the wrapped error, to allow interoperability with errors.Is(), errors.As() and errors.Unwrap()
func (msg *Error) Unwrap() error {
    return msg.Err
}
```

그림으로 표현하면 아래와 같다.

![](img1.png)

## 기존의 문제점

### Gin Context의 잘못된 활용법

[공식 문서](https://pkg.go.dev/context#pkg-overview)에서 말하는 Context는 데드라인, 취소 시그널, API에 대한 경계값을 가지는 값으로 정의된다. 그래서 조건에 따라 실행이 중단될 수 있다는 것으로 이해했다.
gin은 자체적인 Context를 가지고 있으며, context를 중단시킬 수 있는 여러 함수들이 존재한다.

Service Layer에서 커스텀 에러 타입으로 반환하도록 구현했다.

```go
func (controller *MemberController) RegisterMember(ctx *gin.Context, req request.RegisterReq) {
	req = request.RegisterReq{}
	err := ctx.ShouldBindJSON(req)
	// ...
	// Create member
	err2 := controller.service.CreateMember(ctx, req)
	if err2 != nil {
		errorutils.ErrorFunc(ctx, err2)
		return
	}
	webutils.Success(ctx)
}
```

커스텀 에러 타입을 자세히 보면, 자체적으로 제작한 에러 코드와 error을 담을 Err 필드가 존재한다.

```go
type Error struct {
	// Code is a custom error codes
	ErrorType ErrorType
	// Err is a error string
	Err error
	// Description is a human-friendly message.
	Description string
}
```

애플리케이션에 오류 발생시 현재 실행을 멈추고, 응답값을 보내는 ErrorFunc도 만들었다.

```go
func ErrorFunc(ctx *gin.Context, err *Error) {
	res := getCode(err.ErrorType)

	ctx.AbortWithStatusJSON(res.Code, res)
	return
}
```

[공식 문서](https://pkg.go.dev/github.com/gin-gonic/gin#Context.Abort) 에 의하면`AbortWithStatusJSON`에는 내부적으로 Context를 중단시킬 수 있는`Abort` 함수를 사용한다. 구체적으로 [Abort 함수](https://pkg.go.dev/github.com/gin-gonic/gin#Context.Abort)는 현재의 handler는 그대로 남지만, 그 이후의 handler를 처리하지 않겠다는 것이다.

> Abort prevents pending handlers from being called. Note that this will not stop the current handler. Let's say you have an authorization middleware that validates that the current request is authorized. If the authorization fails (ex: the password does not match), call Abort to ensure the remaining handlers for this request are not called.

문장을 보면서 내가 Gin 프레임워크의 에러처리를 완전히 잘못했음을 깨닫게 되었다.

### Gin Error 미사용

[공식 문서](https://pkg.go.dev/github.com/gin-gonic/gin#Context.Error)에 의하면 Gin은 자신들의 Error를 사용하는 것을 권장하며, middleware가 이를 처리하여 오류 response를 처리하라고 명시되어 있다.

> Error attaches an error to the current context. The error is pushed to a list of errors. It's a good idea to call Error for each error that occurred during the resolution of a request. A middleware can be used to collect all the errors and push them to a database together, print a log, or append it in the HTTP response. Error will panic if err is nil.

즉, 오류가 발생할때마다 gin의 Context에서 제공해주는 Error로 감싸며, Middleware에 있는 Handler가 이를 순차적으로 처리해야 한다는 것이다.

## 2부에서는

지금까지는 내가 만들었던 예외처리에는 어떠한 문제점이 있는지 확인해봤다. 2부에서는 위에서 설명한 잘못된 에러처리를 공식문서에서 제시한 올바른 에러처리를 구현하고자 한다.

- Middleware에 Handler 구현
- gin.Error를 활용하여 Error를 wrapping하고, Middleware에서 처리하기
