---
title: "Go-DB에 마그이션하기"
date: 2024-03-09
slug: go-db-migration
tags:
  - Go
  - ORM
  - Project
categories:
  - TodoPoint
---

Java 진영에서 자주 사용되는 ORM은 JPA이다. 하지만 Go에서는 대표적인 ORM은 없는듯하다. 그런탓에 이런저런 라이브러리가 많은데, 상황에 맞게 라이브러리를 쓰세요 식의 Go스러움을 많이 볼 수 있다.

# 어떤 라이브러리를 사용할 것인가?

## gorm

과거에는 gorm이 많이 쓰인다고 하던데, 여러 문제점이 존재한다고 한다.[^1]개인적으로 최악의 기능은 설정들을 struct tag로 관리하는 것이라고 생각한다.

## ent

요즘 뜨고 있는 라이브러리는 FaceBook에서 자체적으로 개발한 [ent](https://entgo.io/docs/getting-started/)이다. GO 코드로 스키마를 작성하면 DB에 모델링을 해주며, 특히 Graph 탐색에 특화되어 있다.

## 나의 선택은

나의 선택은 ent이다. 일단 대기업이 개발했다는 점에서 1차적으로 신뢰가 간다. [sqlboiler](https://github.com/volatiletech/sqlboiler)가 화려한 벤치마크 결과를 보여줘서 궁금하긴 하지만 문서화가 잘된 ent를 우선적으로 해보고자 한다.

### ORM 꼭 필요한 것인가?

웹개발 자체를 얕게 해오면서 ORM에 익숙해졌다. 그러면서 ORM은 선택이 아닌 필수라고 여기면서 사용했던 것 같다. 하지만 ORM 추천글을 읽으면서 꼭 필요한가에 대해 생각하게 된 계기가 되었던 것 같다.[^2]
개발자 입장에서는 CRUD를 추상화된 방법으로 사용할 수 있으며 구현이 용이하고, 가독성이 있는 코드를 사용할 수 있다. 하지만 ORM에 대한 부정적인 입장의 대부분의 과다하게 사용했을 때를 가정한다.
개인적으로는 어떠한 라이브러리든 과다하게 사용하는 것은 오버헤드가 따른다고 생각한다. 또한 DB 설계 자체가 잘못되어서 일 수 있다.
나와 같은 소규모 프로젝트를 사용하는 경우라면 기존 라이브러리에 있는 모든 기능을 쓸 일이 없다. 그러므로 ORM을 쓰려고 한다. 그리고 개발자가 쓰기 편해야 유지보수하기 편할 것 같다는 생각이 더 많이 든다.

[^1]: https://umi0410.github.io/blog/golang/how-to-backend-in-go-db/
[^2]: https://www.reddit.com/r/golang/comments/t3bp79/a_good_orm_for_golang/
