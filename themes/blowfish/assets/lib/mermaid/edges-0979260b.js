import { l as b, k as _, g as v, f as L, b as rt } from "./config-e567ef17.js";
import { p as K } from "./mermaidAPI-04b5c286.js";
import { p as Z } from "./svgDraw-c034b55e.js";
import { u as U, E as z } from "./utils-aa888deb.js";
import { l as at } from "./isPlainObject-a5cb4071.js";
const et = (a, t, r, n) => {
  t.forEach((e) => {
    pt[e](a, r, n);
  });
}, st = (a, t, r) => {
  b.trace("Making markers for ", r), a.append("defs").append("marker").attr("id", t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), a.append("defs").append("marker").attr("id", t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, it = (a, t) => {
  a.append("defs").append("marker").attr("id", t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), a.append("defs").append("marker").attr("id", t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, nt = (a, t) => {
  a.append("defs").append("marker").attr("id", t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), a.append("defs").append("marker").attr("id", t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, lt = (a, t) => {
  a.append("defs").append("marker").attr("id", t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), a.append("defs").append("marker").attr("id", t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, ct = (a, t) => {
  a.append("defs").append("marker").attr("id", t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "white").attr("cx", 6).attr("cy", 7).attr("r", 6);
}, ht = (a, t) => {
  a.append("marker").attr("id", t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 12 20").attr("refX", 10).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), a.append("marker").attr("id", t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 0).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, ot = (a, t) => {
  a.append("marker").attr("id", t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), a.append("marker").attr("id", t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, ft = (a, t) => {
  a.append("marker").attr("id", t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), a.append("marker").attr("id", t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, dt = (a, t) => {
  a.append("defs").append("marker").attr("id", t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, pt = {
  extension: st,
  composition: it,
  aggregation: nt,
  dependency: lt,
  lollipop: ct,
  point: ht,
  circle: ot,
  cross: ft,
  barb: dt
}, Kt = et;
function xt(a, t) {
  t && a.attr("style", t);
}
function gt(a) {
  const t = L(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), r = t.append("xhtml:div"), n = a.label, e = a.isNode ? "nodeLabel" : "edgeLabel";
  return r.html(
    '<span class="' + e + '" ' + (a.labelStyle ? 'style="' + a.labelStyle + '"' : "") + ">" + n + "</span>"
  ), xt(r, a.labelStyle), r.style("display", "inline-block"), r.style("white-space", "nowrap"), r.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
const bt = (a, t, r, n) => {
  let e = a || "";
  if (typeof e == "object" && (e = e[0]), _(v().flowchart.htmlLabels)) {
    e = e.replace(/\\n|\n/g, "<br />"), b.info("vertexText" + e);
    const s = {
      isNode: n,
      label: K(e).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (l) => `<i class='${l.replace(":", " ")}'></i>`
      ),
      labelStyle: t.replace("fill:", "color:")
    };
    return gt(s);
  } else {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "text");
    s.setAttribute("style", t.replace("color:", "fill:"));
    let i = [];
    typeof e == "string" ? i = e.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(e) ? i = e : i = [];
    for (const l of i) {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), c.setAttribute("dy", "1em"), c.setAttribute("x", "0"), r ? c.setAttribute("class", "title-row") : c.setAttribute("class", "row"), c.textContent = l.trim(), s.appendChild(c);
    }
    return s;
  }
}, R = bt, S = (a, t, r, n) => {
  let e;
  r ? e = r : e = "node default";
  const s = a.insert("g").attr("class", e).attr("id", t.domId || t.id), i = s.insert("g").attr("class", "label").attr("style", t.labelStyle);
  let l;
  t.labelText === void 0 ? l = "" : l = typeof t.labelText == "string" ? t.labelText : t.labelText[0];
  const c = i.node().appendChild(
    R(
      rt(K(l), v()),
      t.labelStyle,
      !1,
      n
    )
  );
  let o = c.getBBox();
  if (_(v().flowchart.htmlLabels)) {
    const d = c.children[0], x = L(c);
    o = d.getBoundingClientRect(), x.attr("width", o.width), x.attr("height", o.height);
  }
  const h = t.padding / 2;
  return i.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), { shapeSvg: s, bbox: o, halfPadding: h, label: i };
}, w = (a, t) => {
  const r = t.node().getBBox();
  a.width = r.width, a.height = r.height;
};
function N(a, t, r, n) {
  return a.insert("polygon", ":first-child").attr(
    "points",
    n.map(function(e) {
      return e.x + "," + e.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
function yt(a, t) {
  return a.intersect(t);
}
function G(a, t, r, n) {
  var e = a.x, s = a.y, i = e - n.x, l = s - n.y, c = Math.sqrt(t * t * l * l + r * r * i * i), o = Math.abs(t * r * i / c);
  n.x < e && (o = -o);
  var h = Math.abs(t * r * l / c);
  return n.y < s && (h = -h), { x: e + o, y: s + h };
}
function ut(a, t, r) {
  return G(a, t, t, r);
}
function wt(a, t, r, n) {
  var e, s, i, l, c, o, h, d, x, f, p, g, y, m, T;
  if (e = t.y - a.y, i = a.x - t.x, c = t.x * a.y - a.x * t.y, x = e * r.x + i * r.y + c, f = e * n.x + i * n.y + c, !(x !== 0 && f !== 0 && Q(x, f)) && (s = n.y - r.y, l = r.x - n.x, o = n.x * r.y - r.x * n.y, h = s * a.x + l * a.y + o, d = s * t.x + l * t.y + o, !(h !== 0 && d !== 0 && Q(h, d)) && (p = e * l - s * i, p !== 0)))
    return g = Math.abs(p / 2), y = i * o - l * c, m = y < 0 ? (y - g) / p : (y + g) / p, y = s * c - e * o, T = y < 0 ? (y - g) / p : (y + g) / p, { x: m, y: T };
}
function Q(a, t) {
  return a * t > 0;
}
function mt(a, t, r) {
  var n = a.x, e = a.y, s = [], i = Number.POSITIVE_INFINITY, l = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(p) {
    i = Math.min(i, p.x), l = Math.min(l, p.y);
  }) : (i = Math.min(i, t.x), l = Math.min(l, t.y));
  for (var c = n - a.width / 2 - i, o = e - a.height / 2 - l, h = 0; h < t.length; h++) {
    var d = t[h], x = t[h < t.length - 1 ? h + 1 : 0], f = wt(
      a,
      r,
      { x: c + d.x, y: o + d.y },
      { x: c + x.x, y: o + x.y }
    );
    f && s.push(f);
  }
  return s.length ? (s.length > 1 && s.sort(function(p, g) {
    var y = p.x - r.x, m = p.y - r.y, T = Math.sqrt(y * y + m * m), $ = g.x - r.x, M = g.y - r.y, W = Math.sqrt($ * $ + M * M);
    return T < W ? -1 : T === W ? 0 : 1;
  }), s[0]) : a;
}
const kt = (a, t) => {
  var r = a.x, n = a.y, e = t.x - r, s = t.y - n, i = a.width / 2, l = a.height / 2, c, o;
  return Math.abs(s) * i > Math.abs(e) * l ? (s < 0 && (l = -l), c = s === 0 ? 0 : l * e / s, o = l) : (e < 0 && (i = -i), c = i, o = e === 0 ? 0 : i * s / e), { x: r + c, y: n + o };
}, vt = kt, u = {
  node: yt,
  circle: ut,
  ellipse: G,
  polygon: mt,
  rect: vt
}, Lt = (a, t) => {
  const { shapeSvg: r, bbox: n, halfPadding: e } = S(a, t, "node " + t.classes, !0);
  b.info("Classes = ", t.classes);
  const s = r.insert("rect", ":first-child");
  return s.attr("rx", t.rx).attr("ry", t.ry).attr("x", -n.width / 2 - e).attr("y", -n.height / 2 - e).attr("width", n.width + t.padding).attr("height", n.height + t.padding), w(t, s), t.intersect = function(i) {
    return u.rect(t, i);
  }, r;
}, St = Lt, V = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.width + t.padding, s = n.height + t.padding, i = e + s, l = [
    { x: i / 2, y: 0 },
    { x: i, y: -i / 2 },
    { x: i / 2, y: -i },
    { x: 0, y: -i / 2 }
  ];
  b.info("Question main (Circle)");
  const c = N(r, i, i, l);
  return c.attr("style", t.style), w(t, c), t.intersect = function(o) {
    return b.warn("Intersect called"), u.polygon(t, l, o);
  }, r;
}, Et = (a, t) => {
  const r = a.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = 28, e = [
    { x: 0, y: n / 2 },
    { x: n / 2, y: 0 },
    { x: 0, y: -n / 2 },
    { x: -n / 2, y: 0 }
  ];
  return r.insert("polygon", ":first-child").attr(
    "points",
    e.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), t.width = 28, t.height = 28, t.intersect = function(i) {
    return u.circle(t, 14, i);
  }, r;
}, Mt = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = 4, s = n.height + t.padding, i = s / e, l = n.width + 2 * i + t.padding, c = [
    { x: i, y: 0 },
    { x: l - i, y: 0 },
    { x: l, y: -s / 2 },
    { x: l - i, y: -s },
    { x: i, y: -s },
    { x: 0, y: -s / 2 }
  ], o = N(r, l, s, c);
  return o.attr("style", t.style), w(t, o), t.intersect = function(h) {
    return u.polygon(t, c, h);
  }, r;
}, Bt = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.width + t.padding, s = n.height + t.padding, i = [
    { x: -s / 2, y: 0 },
    { x: e, y: 0 },
    { x: e, y: -s },
    { x: -s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  return N(r, e, s, i).attr("style", t.style), t.width = e + s, t.height = s, t.intersect = function(c) {
    return u.polygon(t, i, c);
  }, r;
}, Ct = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.width + t.padding, s = n.height + t.padding, i = [
    { x: -2 * s / 6, y: 0 },
    { x: e - s / 6, y: 0 },
    { x: e + 2 * s / 6, y: -s },
    { x: s / 6, y: -s }
  ], l = N(r, e, s, i);
  return l.attr("style", t.style), w(t, l), t.intersect = function(c) {
    return u.polygon(t, i, c);
  }, r;
}, Rt = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.width + t.padding, s = n.height + t.padding, i = [
    { x: 2 * s / 6, y: 0 },
    { x: e + s / 6, y: 0 },
    { x: e - 2 * s / 6, y: -s },
    { x: -s / 6, y: -s }
  ], l = N(r, e, s, i);
  return l.attr("style", t.style), w(t, l), t.intersect = function(c) {
    return u.polygon(t, i, c);
  }, r;
}, Tt = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.width + t.padding, s = n.height + t.padding, i = [
    { x: -2 * s / 6, y: 0 },
    { x: e + 2 * s / 6, y: 0 },
    { x: e - s / 6, y: -s },
    { x: s / 6, y: -s }
  ], l = N(r, e, s, i);
  return l.attr("style", t.style), w(t, l), t.intersect = function(c) {
    return u.polygon(t, i, c);
  }, r;
}, It = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.width + t.padding, s = n.height + t.padding, i = [
    { x: s / 6, y: 0 },
    { x: e - s / 6, y: 0 },
    { x: e + 2 * s / 6, y: -s },
    { x: -2 * s / 6, y: -s }
  ], l = N(r, e, s, i);
  return l.attr("style", t.style), w(t, l), t.intersect = function(c) {
    return u.polygon(t, i, c);
  }, r;
}, _t = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.width + t.padding, s = n.height + t.padding, i = [
    { x: 0, y: 0 },
    { x: e + s / 2, y: 0 },
    { x: e, y: -s / 2 },
    { x: e + s / 2, y: -s },
    { x: 0, y: -s }
  ], l = N(r, e, s, i);
  return l.attr("style", t.style), w(t, l), t.intersect = function(c) {
    return u.polygon(t, i, c);
  }, r;
}, Nt = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.width + t.padding, s = e / 2, i = s / (2.5 + e / 50), l = n.height + i + t.padding, c = "M 0," + i + " a " + s + "," + i + " 0,0,0 " + e + " 0 a " + s + "," + i + " 0,0,0 " + -e + " 0 l 0," + l + " a " + s + "," + i + " 0,0,0 " + e + " 0 l 0," + -l, o = r.attr("label-offset-y", i).insert("path", ":first-child").attr("style", t.style).attr("d", c).attr("transform", "translate(" + -e / 2 + "," + -(l / 2 + i) + ")");
  return w(t, o), t.intersect = function(h) {
    const d = u.rect(t, h), x = d.x - t.x;
    if (s != 0 && (Math.abs(x) < t.width / 2 || Math.abs(x) == t.width / 2 && Math.abs(d.y - t.y) > t.height / 2 - i)) {
      let f = i * i * (1 - x * x / (s * s));
      f != 0 && (f = Math.sqrt(f)), f = i - f, h.y - t.y > 0 && (f = -f), d.y += f;
    }
    return d;
  }, r;
}, $t = (a, t) => {
  const { shapeSvg: r, bbox: n, halfPadding: e } = S(a, t, "node " + t.classes, !0);
  b.trace("Classes = ", t.classes);
  const s = r.insert("rect", ":first-child"), i = n.width + t.padding, l = n.height + t.padding;
  if (s.attr("class", "basic label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", -n.width / 2 - e).attr("y", -n.height / 2 - e).attr("width", i).attr("height", l), t.props) {
    const c = new Set(Object.keys(t.props));
    t.props.borders && (P(s, t.props.borders, i, l), c.delete("borders")), c.forEach((o) => {
      b.warn(`Unknown node property ${o}`);
    });
  }
  return w(t, s), t.intersect = function(c) {
    return u.rect(t, c);
  }, r;
}, Ht = (a, t) => {
  const { shapeSvg: r } = S(a, t, "label", !0);
  b.trace("Classes = ", t.classes);
  const n = r.insert("rect", ":first-child"), e = 0, s = 0;
  if (n.attr("width", e).attr("height", s), r.attr("class", "label edgeLabel"), t.props) {
    const i = new Set(Object.keys(t.props));
    t.props.borders && (P(n, t.props.borders, e, s), i.delete("borders")), i.forEach((l) => {
      b.warn(`Unknown node property ${l}`);
    });
  }
  return w(t, n), t.intersect = function(i) {
    return u.rect(t, i);
  }, r;
};
function P(a, t, r, n) {
  const e = [], s = (l) => {
    e.push(l, 0);
  }, i = (l) => {
    e.push(0, l);
  };
  t.includes("t") ? (b.debug("add top border"), s(r)) : i(r), t.includes("r") ? (b.debug("add right border"), s(n)) : i(n), t.includes("b") ? (b.debug("add bottom border"), s(r)) : i(r), t.includes("l") ? (b.debug("add left border"), s(n)) : i(n), a.attr("stroke-dasharray", e.join(" "));
}
const Xt = (a, t) => {
  let r;
  t.classes ? r = "node " + t.classes : r = "node default";
  const n = a.insert("g").attr("class", r).attr("id", t.domId || t.id), e = n.insert("rect", ":first-child"), s = n.insert("line"), i = n.insert("g").attr("class", "label"), l = t.labelText.flat ? t.labelText.flat() : t.labelText;
  let c = "";
  typeof l == "object" ? c = l[0] : c = l, b.info("Label text abc79", c, l, typeof l == "object");
  const o = i.node().appendChild(R(c, t.labelStyle, !0, !0));
  let h = { width: 0, height: 0 };
  if (_(v().flowchart.htmlLabels)) {
    const g = o.children[0], y = L(o);
    h = g.getBoundingClientRect(), y.attr("width", h.width), y.attr("height", h.height);
  }
  b.info("Text 2", l);
  const d = l.slice(1, l.length);
  let x = o.getBBox();
  const f = i.node().appendChild(
    R(d.join ? d.join("<br/>") : d, t.labelStyle, !0, !0)
  );
  if (_(v().flowchart.htmlLabels)) {
    const g = f.children[0], y = L(f);
    h = g.getBoundingClientRect(), y.attr("width", h.width), y.attr("height", h.height);
  }
  const p = t.padding / 2;
  return L(f).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width > x.width ? 0 : (x.width - h.width) / 2) + ", " + (x.height + p + 5) + ")"
  ), L(o).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width < x.width ? 0 : -(x.width - h.width) / 2) + ", " + 0 + ")"
  ), h = i.node().getBBox(), i.attr(
    "transform",
    "translate(" + -h.width / 2 + ", " + (-h.height / 2 - p + 3) + ")"
  ), e.attr("class", "outer title-state").attr("x", -h.width / 2 - p).attr("y", -h.height / 2 - p).attr("width", h.width + t.padding).attr("height", h.height + t.padding), s.attr("class", "divider").attr("x1", -h.width / 2 - p).attr("x2", h.width / 2 + p).attr("y1", -h.height / 2 - p + x.height + p).attr("y2", -h.height / 2 - p + x.height + p), w(t, e), t.intersect = function(g) {
    return u.rect(t, g);
  }, n;
}, Wt = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.height + t.padding, s = n.width + e / 4 + t.padding, i = r.insert("rect", ":first-child").attr("style", t.style).attr("rx", e / 2).attr("ry", e / 2).attr("x", -s / 2).attr("y", -e / 2).attr("width", s).attr("height", e);
  return w(t, i), t.intersect = function(l) {
    return u.rect(t, l);
  }, r;
}, Yt = (a, t) => {
  const { shapeSvg: r, bbox: n, halfPadding: e } = S(a, t, void 0, !0), s = r.insert("circle", ":first-child");
  return s.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n.width / 2 + e).attr("width", n.width + t.padding).attr("height", n.height + t.padding), b.info("Circle main"), w(t, s), t.intersect = function(i) {
    return b.info("Circle intersect", t, n.width / 2 + e, i), u.circle(t, n.width / 2 + e, i);
  }, r;
}, Ut = (a, t) => {
  const { shapeSvg: r, bbox: n, halfPadding: e } = S(a, t, void 0, !0), s = 5, i = r.insert("g", ":first-child"), l = i.insert("circle"), c = i.insert("circle");
  return l.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n.width / 2 + e + s).attr("width", n.width + t.padding + s * 2).attr("height", n.height + t.padding + s * 2), c.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n.width / 2 + e).attr("width", n.width + t.padding).attr("height", n.height + t.padding), b.info("DoubleCircle main"), w(t, l), t.intersect = function(o) {
    return b.info("DoubleCircle intersect", t, n.width / 2 + e + s, o), u.circle(t, n.width / 2 + e + s, o);
  }, r;
}, At = (a, t) => {
  const { shapeSvg: r, bbox: n } = S(a, t, void 0, !0), e = n.width + t.padding, s = n.height + t.padding, i = [
    { x: 0, y: 0 },
    { x: e, y: 0 },
    { x: e, y: -s },
    { x: 0, y: -s },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: e + 8, y: 0 },
    { x: e + 8, y: -s },
    { x: -8, y: -s },
    { x: -8, y: 0 }
  ], l = N(r, e, s, i);
  return l.attr("style", t.style), w(t, l), t.intersect = function(c) {
    return u.polygon(t, i, c);
  }, r;
}, Ot = (a, t) => {
  const r = a.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = r.insert("circle", ":first-child");
  return n.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), w(t, n), t.intersect = function(e) {
    return u.circle(t, 7, e);
  }, r;
}, J = (a, t, r) => {
  const n = a.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let e = 70, s = 10;
  r === "LR" && (e = 10, s = 70);
  const i = n.append("rect").attr("x", -1 * e / 2).attr("y", -1 * s / 2).attr("width", e).attr("height", s).attr("class", "fork-join");
  return w(t, i), t.height = t.height + t.padding / 2, t.width = t.width + t.padding / 2, t.intersect = function(l) {
    return u.rect(t, l);
  }, n;
}, jt = (a, t) => {
  const r = a.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = r.insert("circle", ":first-child"), e = r.insert("circle", ":first-child");
  return e.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), n.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), w(t, e), t.intersect = function(s) {
    return u.circle(t, 7, s);
  }, r;
}, Dt = (a, t) => {
  const r = t.padding / 2, n = 4, e = 8;
  let s;
  t.classes ? s = "node " + t.classes : s = "node default";
  const i = a.insert("g").attr("class", s).attr("id", t.domId || t.id), l = i.insert("rect", ":first-child"), c = i.insert("line"), o = i.insert("line");
  let h = 0, d = n;
  const x = i.insert("g").attr("class", "label");
  let f = 0;
  const p = t.classData.annotations && t.classData.annotations[0], g = t.classData.annotations[0] ? "«" + t.classData.annotations[0] + "»" : "", y = x.node().appendChild(R(g, t.labelStyle, !0, !0));
  let m = y.getBBox();
  if (_(v().flowchart.htmlLabels)) {
    const E = y.children[0], B = L(y);
    m = E.getBoundingClientRect(), B.attr("width", m.width), B.attr("height", m.height);
  }
  t.classData.annotations[0] && (d += m.height + n, h += m.width);
  let T = t.classData.label;
  t.classData.type !== void 0 && t.classData.type !== "" && (v().flowchart.htmlLabels ? T += "&lt;" + t.classData.type + "&gt;" : T += "<" + t.classData.type + ">");
  const $ = x.node().appendChild(R(T, t.labelStyle, !0, !0));
  L($).attr("class", "classTitle");
  let M = $.getBBox();
  if (_(v().flowchart.htmlLabels)) {
    const E = $.children[0], B = L($);
    M = E.getBoundingClientRect(), B.attr("width", M.width), B.attr("height", M.height);
  }
  d += M.height + n, M.width > h && (h = M.width);
  const W = [];
  t.classData.members.forEach((E) => {
    const B = Z(E);
    let H = B.displayText;
    v().flowchart.htmlLabels && (H = H.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const I = x.node().appendChild(
      R(
        H,
        B.cssStyle ? B.cssStyle : t.labelStyle,
        !0,
        !0
      )
    );
    let C = I.getBBox();
    if (_(v().flowchart.htmlLabels)) {
      const j = I.children[0], Y = L(I);
      C = j.getBoundingClientRect(), Y.attr("width", C.width), Y.attr("height", C.height);
    }
    C.width > h && (h = C.width), d += C.height + n, W.push(I);
  }), d += e;
  const D = [];
  if (t.classData.methods.forEach((E) => {
    const B = Z(E);
    let H = B.displayText;
    v().flowchart.htmlLabels && (H = H.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const I = x.node().appendChild(
      R(
        H,
        B.cssStyle ? B.cssStyle : t.labelStyle,
        !0,
        !0
      )
    );
    let C = I.getBBox();
    if (_(v().flowchart.htmlLabels)) {
      const j = I.children[0], Y = L(I);
      C = j.getBoundingClientRect(), Y.attr("width", C.width), Y.attr("height", C.height);
    }
    C.width > h && (h = C.width), d += C.height + n, D.push(I);
  }), d += e, p) {
    let E = (h - m.width) / 2;
    L(y).attr(
      "transform",
      "translate( " + (-1 * h / 2 + E) + ", " + -1 * d / 2 + ")"
    ), f = m.height + n;
  }
  let tt = (h - M.width) / 2;
  return L($).attr(
    "transform",
    "translate( " + (-1 * h / 2 + tt) + ", " + (-1 * d / 2 + f) + ")"
  ), f += M.height + n, c.attr("class", "divider").attr("x1", -h / 2 - r).attr("x2", h / 2 + r).attr("y1", -d / 2 - r + e + f).attr("y2", -d / 2 - r + e + f), f += e, W.forEach((E) => {
    L(E).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * d / 2 + f + e / 2) + ")"
    ), f += M.height + n;
  }), f += e, o.attr("class", "divider").attr("x1", -h / 2 - r).attr("x2", h / 2 + r).attr("y1", -d / 2 - r + e + f).attr("y2", -d / 2 - r + e + f), f += e, D.forEach((E) => {
    L(E).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * d / 2 + f) + ")"
    ), f += M.height + n;
  }), l.attr("class", "outer title-state").attr("x", -h / 2 - r).attr("y", -(d / 2) - r).attr("width", h + t.padding).attr("height", d + t.padding), w(t, l), t.intersect = function(E) {
    return u.rect(t, E);
  }, i;
}, q = {
  rhombus: V,
  question: V,
  rect: $t,
  labelRect: Ht,
  rectWithTitle: Xt,
  choice: Et,
  circle: Yt,
  doublecircle: Ut,
  stadium: Wt,
  hexagon: Mt,
  rect_left_inv_arrow: Bt,
  lean_right: Ct,
  lean_left: Rt,
  trapezoid: Tt,
  inv_trapezoid: It,
  rect_right_inv_arrow: _t,
  cylinder: Nt,
  start: Ot,
  end: jt,
  note: St,
  subroutine: At,
  fork: J,
  join: J,
  class_box: Dt
};
let X = {};
const Gt = (a, t, r) => {
  let n, e;
  if (t.link) {
    let s;
    v().securityLevel === "sandbox" ? s = "_top" : t.linkTarget && (s = t.linkTarget || "_blank"), n = a.insert("svg:a").attr("xlink:href", t.link).attr("target", s), e = q[t.shape](n, t, r);
  } else
    e = q[t.shape](a, t, r), n = e;
  return t.tooltip && e.attr("title", t.tooltip), t.class && e.attr("class", "node default " + t.class), X[t.id] = n, t.haveCallback && X[t.id].attr("class", X[t.id].attr("class") + " clickable"), n;
}, Pt = (a, t) => {
  X[t.id] = a;
}, tr = () => {
  X = {};
}, rr = (a) => {
  const t = X[a.id];
  b.trace(
    "Transforming node",
    a.diff,
    a,
    "translate(" + (a.x - a.width / 2 - 5) + ", " + a.width / 2 + ")"
  );
  const r = 8, n = a.diff || 0;
  return a.clusterNode ? t.attr(
    "transform",
    "translate(" + (a.x + n - a.width / 2) + ", " + (a.y - a.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + a.x + ", " + a.y + ")"), n;
};
let O = {}, k = {};
const ar = () => {
  O = {}, k = {};
}, er = (a, t) => {
  const r = R(t.label, t.labelStyle), n = a.insert("g").attr("class", "edgeLabel"), e = n.insert("g").attr("class", "label");
  e.node().appendChild(r);
  let s = r.getBBox();
  if (_(v().flowchart.htmlLabels)) {
    const l = r.children[0], c = L(r);
    s = l.getBoundingClientRect(), c.attr("width", s.width), c.attr("height", s.height);
  }
  e.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")"), O[t.id] = n, t.width = s.width, t.height = s.height;
  let i;
  if (t.startLabelLeft) {
    const l = R(t.startLabelLeft, t.labelStyle), c = a.insert("g").attr("class", "edgeTerminals"), o = c.insert("g").attr("class", "inner");
    i = o.node().appendChild(l);
    const h = l.getBBox();
    o.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), k[t.id] || (k[t.id] = {}), k[t.id].startLeft = c, A(i, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const l = R(t.startLabelRight, t.labelStyle), c = a.insert("g").attr("class", "edgeTerminals"), o = c.insert("g").attr("class", "inner");
    i = c.node().appendChild(l), o.node().appendChild(l);
    const h = l.getBBox();
    o.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), k[t.id] || (k[t.id] = {}), k[t.id].startRight = c, A(i, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const l = R(t.endLabelLeft, t.labelStyle), c = a.insert("g").attr("class", "edgeTerminals"), o = c.insert("g").attr("class", "inner");
    i = o.node().appendChild(l);
    const h = l.getBBox();
    o.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), c.node().appendChild(l), k[t.id] || (k[t.id] = {}), k[t.id].endLeft = c, A(i, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const l = R(t.endLabelRight, t.labelStyle), c = a.insert("g").attr("class", "edgeTerminals"), o = c.insert("g").attr("class", "inner");
    i = o.node().appendChild(l);
    const h = l.getBBox();
    o.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), c.node().appendChild(l), k[t.id] || (k[t.id] = {}), k[t.id].endRight = c, A(i, t.endLabelRight);
  }
  return r;
};
function A(a, t) {
  v().flowchart.htmlLabels && a && (a.style.width = t.length * 9 + "px", a.style.height = "12px");
}
const sr = (a, t) => {
  b.info("Moving label abc78 ", a.id, a.label, O[a.id]);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  if (a.label) {
    const n = O[a.id];
    let e = a.x, s = a.y;
    if (r) {
      const i = U.calcLabelPosition(r);
      b.info(
        "Moving label " + a.label + " from (",
        e,
        ",",
        s,
        ") to (",
        i.x,
        ",",
        i.y,
        ") abc78"
      ), t.updatedPath && (e = i.x, s = i.y);
    }
    n.attr("transform", "translate(" + e + ", " + s + ")");
  }
  if (a.startLabelLeft) {
    const n = k[a.id].startLeft;
    let e = a.x, s = a.y;
    if (r) {
      const i = U.calcTerminalLabelPosition(a.arrowTypeStart ? 10 : 0, "start_left", r);
      e = i.x, s = i.y;
    }
    n.attr("transform", "translate(" + e + ", " + s + ")");
  }
  if (a.startLabelRight) {
    const n = k[a.id].startRight;
    let e = a.x, s = a.y;
    if (r) {
      const i = U.calcTerminalLabelPosition(
        a.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      e = i.x, s = i.y;
    }
    n.attr("transform", "translate(" + e + ", " + s + ")");
  }
  if (a.endLabelLeft) {
    const n = k[a.id].endLeft;
    let e = a.x, s = a.y;
    if (r) {
      const i = U.calcTerminalLabelPosition(a.arrowTypeEnd ? 10 : 0, "end_left", r);
      e = i.x, s = i.y;
    }
    n.attr("transform", "translate(" + e + ", " + s + ")");
  }
  if (a.endLabelRight) {
    const n = k[a.id].endRight;
    let e = a.x, s = a.y;
    if (r) {
      const i = U.calcTerminalLabelPosition(a.arrowTypeEnd ? 10 : 0, "end_right", r);
      e = i.x, s = i.y;
    }
    n.attr("transform", "translate(" + e + ", " + s + ")");
  }
}, Zt = (a, t) => {
  const r = a.x, n = a.y, e = Math.abs(t.x - r), s = Math.abs(t.y - n), i = a.width / 2, l = a.height / 2;
  return e >= i || s >= l;
}, zt = (a, t, r) => {
  b.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${a.x} y:${a.y} w:${a.width} h:${a.height}`);
  const n = a.x, e = a.y, s = Math.abs(n - r.x), i = a.width / 2;
  let l = r.x < t.x ? i - s : i + s;
  const c = a.height / 2, o = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(e - t.y) * i > Math.abs(n - t.x) * c) {
    let d = r.y < t.y ? t.y - c - e : e - c - t.y;
    l = h * d / o;
    const x = {
      x: r.x < t.x ? r.x + l : r.x - h + l,
      y: r.y < t.y ? r.y + o - d : r.y - o + d
    };
    return l === 0 && (x.x = t.x, x.y = t.y), h === 0 && (x.x = t.x), o === 0 && (x.y = t.y), b.warn(`abc89 topp/bott calc, Q ${o}, q ${d}, R ${h}, r ${l}`, x), x;
  } else {
    r.x < t.x ? l = t.x - i - n : l = n - i - t.x;
    let d = o * l / h, x = r.x < t.x ? r.x + h - l : r.x - h + l, f = r.y < t.y ? r.y + d : r.y - d;
    return b.warn(`sides calc abc89, Q ${o}, q ${d}, R ${h}, r ${l}`, { _x: x, _y: f }), l === 0 && (x = t.x, f = t.y), h === 0 && (x = t.x), o === 0 && (f = t.y), { x, y: f };
  }
}, F = (a, t) => {
  b.warn("abc88 cutPathAtIntersect", a, t);
  let r = [], n = a[0], e = !1;
  return a.forEach((s) => {
    if (b.info("abc88 checking point", s, t), !Zt(t, s) && !e) {
      const i = zt(t, n, s);
      b.warn("abc88 inside", s, n, i), b.warn("abc88 intersection", i);
      let l = !1;
      r.forEach((c) => {
        l = l || c.x === i.x && c.y === i.y;
      }), r.some((c) => c.x === i.x && c.y === i.y) ? b.warn("abc88 no intersect", i, r) : r.push(i), e = !0;
    } else
      b.warn("abc88 outside", s, n), n = s, e || r.push(s);
  }), b.warn("abc88 returning points", r), r;
}, ir = function(a, t, r, n, e, s) {
  let i = r.points, l = !1;
  const c = s.node(t.v);
  var o = s.node(t.w);
  b.info("abc88 InsertEdge: ", r), o.intersect && c.intersect && (i = i.slice(1, r.points.length - 1), i.unshift(c.intersect(i[0])), b.info(
    "Last point",
    i[i.length - 1],
    o,
    o.intersect(i[i.length - 1])
  ), i.push(o.intersect(i[i.length - 1]))), r.toCluster && (b.info("to cluster abc88", n[r.toCluster]), i = F(r.points, n[r.toCluster].node), l = !0), r.fromCluster && (b.info("from cluster abc88", n[r.fromCluster]), i = F(i.reverse(), n[r.fromCluster].node).reverse(), l = !0);
  const h = i.filter((m) => !Number.isNaN(m.y));
  let d;
  e === "graph" || e === "flowchart" ? d = r.curve || z : d = z;
  const x = at().x(function(m) {
    return m.x;
  }).y(function(m) {
    return m.y;
  }).curve(d);
  let f;
  switch (r.thickness) {
    case "normal":
      f = "edge-thickness-normal";
      break;
    case "thick":
      f = "edge-thickness-thick";
      break;
    case "invisible":
      f = "edge-thickness-thick";
      break;
    default:
      f = "";
  }
  switch (r.pattern) {
    case "solid":
      f += " edge-pattern-solid";
      break;
    case "dotted":
      f += " edge-pattern-dotted";
      break;
    case "dashed":
      f += " edge-pattern-dashed";
      break;
  }
  const p = a.append("path").attr("d", x(h)).attr("id", r.id).attr("class", " " + f + (r.classes ? " " + r.classes : "")).attr("style", r.style);
  let g = "";
  switch ((v().flowchart.arrowMarkerAbsolute || v().state.arrowMarkerAbsolute) && (g = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, g = g.replace(/\(/g, "\\("), g = g.replace(/\)/g, "\\)")), b.info("arrowTypeStart", r.arrowTypeStart), b.info("arrowTypeEnd", r.arrowTypeEnd), r.arrowTypeStart) {
    case "arrow_cross":
      p.attr("marker-start", "url(" + g + "#" + e + "-crossStart)");
      break;
    case "arrow_point":
      p.attr("marker-start", "url(" + g + "#" + e + "-pointStart)");
      break;
    case "arrow_barb":
      p.attr("marker-start", "url(" + g + "#" + e + "-barbStart)");
      break;
    case "arrow_circle":
      p.attr("marker-start", "url(" + g + "#" + e + "-circleStart)");
      break;
    case "aggregation":
      p.attr("marker-start", "url(" + g + "#" + e + "-aggregationStart)");
      break;
    case "extension":
      p.attr("marker-start", "url(" + g + "#" + e + "-extensionStart)");
      break;
    case "composition":
      p.attr("marker-start", "url(" + g + "#" + e + "-compositionStart)");
      break;
    case "dependency":
      p.attr("marker-start", "url(" + g + "#" + e + "-dependencyStart)");
      break;
    case "lollipop":
      p.attr("marker-start", "url(" + g + "#" + e + "-lollipopStart)");
      break;
  }
  switch (r.arrowTypeEnd) {
    case "arrow_cross":
      p.attr("marker-end", "url(" + g + "#" + e + "-crossEnd)");
      break;
    case "arrow_point":
      p.attr("marker-end", "url(" + g + "#" + e + "-pointEnd)");
      break;
    case "arrow_barb":
      p.attr("marker-end", "url(" + g + "#" + e + "-barbEnd)");
      break;
    case "arrow_circle":
      p.attr("marker-end", "url(" + g + "#" + e + "-circleEnd)");
      break;
    case "aggregation":
      p.attr("marker-end", "url(" + g + "#" + e + "-aggregationEnd)");
      break;
    case "extension":
      p.attr("marker-end", "url(" + g + "#" + e + "-extensionEnd)");
      break;
    case "composition":
      p.attr("marker-end", "url(" + g + "#" + e + "-compositionEnd)");
      break;
    case "dependency":
      p.attr("marker-end", "url(" + g + "#" + e + "-dependencyEnd)");
      break;
    case "lollipop":
      p.attr("marker-end", "url(" + g + "#" + e + "-lollipopEnd)");
      break;
  }
  let y = {};
  return l && (y.updatedPath = i), y.originalPath = r.points, y;
};
export {
  Kt as a,
  tr as b,
  R as c,
  ar as d,
  Gt as e,
  er as f,
  ir as g,
  sr as h,
  vt as i,
  rr as p,
  Pt as s,
  w as u
};
//# sourceMappingURL=edges-0979260b.js.map
