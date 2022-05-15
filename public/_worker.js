var __create = Object.create;
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));

// node_modules/itty-router-extras/middleware/withContent.js
var require_withContent = __commonJS({
  "node_modules/itty-router-extras/middleware/withContent.js"(exports, module) {
    var withContent = async (t3) => {
      let n4 = t3.headers.get("content-type");
      t3.content = void 0;
      try {
        n4 && n4.includes("application/json") && (t3.content = await t3.json());
      } catch (t4) {
      }
    };
    module.exports = { withContent };
  }
});

// node_modules/itty-router-extras/middleware/withCookies.js
var require_withCookies = __commonJS({
  "node_modules/itty-router-extras/middleware/withCookies.js"(exports, module) {
    var withCookies = (o3) => {
      o3.cookies = {};
      try {
        o3.cookies = (o3.headers.get("Cookie") || "").split(/;\s*/).map((o4) => o4.split("=")).reduce((o4, [e2, i3]) => (o4[e2] = i3, o4), {});
      } catch (o4) {
      }
    };
    module.exports = { withCookies };
  }
});

// node_modules/itty-router-extras/middleware/withParams.js
var require_withParams = __commonJS({
  "node_modules/itty-router-extras/middleware/withParams.js"(exports, module) {
    var withParams2 = (a3) => {
      for (const s3 in a3.params || {})
        a3[s3] = a3.params[s3];
    };
    module.exports = { withParams: withParams2 };
  }
});

// node_modules/itty-router-extras/middleware/index.js
var require_middleware = __commonJS({
  "node_modules/itty-router-extras/middleware/index.js"(exports, module) {
    module.exports = { ...require_withContent(), ...require_withCookies(), ...require_withParams() };
  }
});

// node_modules/itty-router-extras/response/createResponseType.js
var require_createResponseType = __commonJS({
  "node_modules/itty-router-extras/response/createResponseType.js"(exports, module) {
    var createResponseType = (e2 = "text/plain; charset=utf-8") => (s3, t3 = {}) => {
      const { headers: n4 = {}, ...o3 } = t3;
      return typeof s3 == "object" ? new Response(JSON.stringify(s3), { headers: { "Content-Type": e2, ...n4 }, ...o3 }) : new Response(s3, t3);
    };
    module.exports = { createResponseType };
  }
});

// node_modules/itty-router-extras/response/json.js
var require_json = __commonJS({
  "node_modules/itty-router-extras/response/json.js"(exports, module) {
    var { createResponseType } = require_createResponseType();
    var json = createResponseType("application/json; charset=utf-8");
    module.exports = { json };
  }
});

// node_modules/itty-router-extras/response/error.js
var require_error = __commonJS({
  "node_modules/itty-router-extras/response/error.js"(exports, module) {
    var { json } = require_json();
    var error = (r3 = 500, o3 = "Internal Server Error.") => json({ ...typeof o3 == "object" ? o3 : { status: r3, error: o3 } }, { status: r3 });
    module.exports = { error };
  }
});

// node_modules/itty-router-extras/response/missing.js
var require_missing = __commonJS({
  "node_modules/itty-router-extras/response/missing.js"(exports, module) {
    var { error } = require_error();
    var missing = (r3 = "Not found.") => error(404, r3);
    module.exports = { missing };
  }
});

// node_modules/itty-router-extras/response/status.js
var require_status = __commonJS({
  "node_modules/itty-router-extras/response/status.js"(exports, module) {
    var { json } = require_json();
    var status = (s3, t3) => t3 ? json({ ...typeof t3 == "object" ? t3 : { status: s3, message: t3 } }, { status: s3 }) : new Response(null, { status: s3 });
    module.exports = { status };
  }
});

// node_modules/itty-router-extras/response/text.js
var require_text = __commonJS({
  "node_modules/itty-router-extras/response/text.js"(exports, module) {
    var text = (e2, t3 = {}) => new Response(e2, t3);
    module.exports = { text };
  }
});

// node_modules/itty-router-extras/response/index.js
var require_response = __commonJS({
  "node_modules/itty-router-extras/response/index.js"(exports, module) {
    module.exports = { ...require_error(), ...require_json(), ...require_missing(), ...require_status(), ...require_text() };
  }
});

// node_modules/itty-router/dist/itty-router.min.js
var require_itty_router_min = __commonJS({
  "node_modules/itty-router/dist/itty-router.min.js"(exports, module) {
    module.exports = { Router: function({ base: t3 = "", routes: n4 = [] } = {}) {
      return { __proto__: new Proxy({}, { get: (e2, a3, o3) => (e3, ...r3) => n4.push([a3.toUpperCase(), RegExp(`^${(t3 + e3).replace(/(\/?)\*/g, "($1.*)?").replace(/\/$/, "").replace(/:(\w+)(\?)?(\.)?/g, "$2(?<$1>[^/]+)$2$3").replace(/\.(?=[\w(])/, "\\.").replace(/\)\.\?\(([^\[]+)\[\^/g, "?)\\.?($1(?<=\\.)[^\\.")}/*$`), r3]) && o3 }), routes: n4, async handle(e2, ...r3) {
        let a3, o3, t4 = new URL(e2.url);
        e2.query = Object.fromEntries(t4.searchParams);
        for (var [p2, s3, u3] of n4)
          if ((p2 === e2.method || p2 === "ALL") && (o3 = t4.pathname.match(s3))) {
            e2.params = o3.groups;
            for (var c3 of u3)
              if ((a3 = await c3(e2.proxy || e2, ...r3)) !== void 0)
                return a3;
          }
      } };
    } };
  }
});

// node_modules/itty-router-extras/router/ThrowableRouter.js
var require_ThrowableRouter = __commonJS({
  "node_modules/itty-router-extras/router/ThrowableRouter.js"(exports, module) {
    "use strict";
    var { Router: Router2 } = require_itty_router_min();
    var { error } = require_response();
    var ThrowableRouter2 = (r3 = {}) => {
      const { stack: e2 = false } = r3;
      return new Proxy(Router2(r3), { get: (r4, t3) => (...o3) => t3 === "handle" ? r4[t3](...o3).catch((r5) => error(r5.status || 500, { status: r5.status || 500, error: r5.message, stack: e2 && r5.stack || void 0 })) : r4[t3](...o3) });
    };
    module.exports = { ThrowableRouter: ThrowableRouter2 };
  }
});

// node_modules/itty-router-extras/router/index.js
var require_router = __commonJS({
  "node_modules/itty-router-extras/router/index.js"(exports, module) {
    module.exports = { ...require_ThrowableRouter() };
  }
});

// node_modules/itty-router-extras/classes/StatusError.js
var require_StatusError = __commonJS({
  "node_modules/itty-router-extras/classes/StatusError.js"(exports, module) {
    var StatusError = class extends Error {
      constructor(r3 = 500, t3 = "Internal Error.") {
        super(t3), this.name = "StatusError", this.status = r3;
      }
    };
    module.exports = { StatusError };
  }
});

// node_modules/itty-router-extras/classes/index.js
var require_classes = __commonJS({
  "node_modules/itty-router-extras/classes/index.js"(exports, module) {
    module.exports = { ...require_StatusError() };
  }
});

// node_modules/itty-router-extras/index.js
var require_itty_router_extras = __commonJS({
  "node_modules/itty-router-extras/index.js"(exports, module) {
    module.exports = { ...require_middleware(), ...require_response(), ...require_router(), ...require_classes() };
  }
});

// src/lib/router.js
var import_itty_router_extras = __toESM(require_itty_router_extras(), 1);

// node_modules/htm/dist/htm.module.js
var n = function(t3, s3, r3, e2) {
  var u3;
  s3[0] = 0;
  for (var h3 = 1; h3 < s3.length; h3++) {
    var p2 = s3[h3++], a3 = s3[h3] ? (s3[0] |= p2 ? 1 : 2, r3[s3[h3++]]) : s3[++h3];
    p2 === 3 ? e2[0] = a3 : p2 === 4 ? e2[1] = Object.assign(e2[1] || {}, a3) : p2 === 5 ? (e2[1] = e2[1] || {})[s3[++h3]] = a3 : p2 === 6 ? e2[1][s3[++h3]] += a3 + "" : p2 ? (u3 = t3.apply(a3, n(t3, a3, r3, ["", null])), e2.push(u3), a3[0] ? s3[0] |= 2 : (s3[h3 - 2] = 0, s3[h3] = u3)) : e2.push(a3);
  }
  return e2;
};
var t = /* @__PURE__ */ new Map();
function htm_module_default(s3) {
  var r3 = t.get(this);
  return r3 || (r3 = /* @__PURE__ */ new Map(), t.set(this, r3)), (r3 = n(this, r3.get(s3) || (r3.set(s3, r3 = function(n4) {
    for (var t3, s4, r4 = 1, e2 = "", u3 = "", h3 = [0], p2 = function(n5) {
      r4 === 1 && (n5 || (e2 = e2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h3.push(0, n5, e2) : r4 === 3 && (n5 || e2) ? (h3.push(3, n5, e2), r4 = 2) : r4 === 2 && e2 === "..." && n5 ? h3.push(4, n5, 0) : r4 === 2 && e2 && !n5 ? h3.push(5, 0, true, e2) : r4 >= 5 && ((e2 || !n5 && r4 === 5) && (h3.push(r4, 0, e2, s4), r4 = 6), n5 && (h3.push(r4, n5, 0, s4), r4 = 6)), e2 = "";
    }, a3 = 0; a3 < n4.length; a3++) {
      a3 && (r4 === 1 && p2(), p2(a3));
      for (var l3 = 0; l3 < n4[a3].length; l3++)
        t3 = n4[a3][l3], r4 === 1 ? t3 === "<" ? (p2(), h3 = [h3], r4 = 3) : e2 += t3 : r4 === 4 ? e2 === "--" && t3 === ">" ? (r4 = 1, e2 = "") : e2 = t3 + e2[0] : u3 ? t3 === u3 ? u3 = "" : e2 += t3 : t3 === '"' || t3 === "'" ? u3 = t3 : t3 === ">" ? (p2(), r4 = 1) : r4 && (t3 === "=" ? (r4 = 5, s4 = e2, e2 = "") : t3 === "/" && (r4 < 5 || n4[a3][l3 + 1] === ">") ? (p2(), r4 === 3 && (h3 = h3[0]), r4 = h3, (h3 = h3[0]).push(2, 0, r4), r4 = 0) : t3 === " " || t3 === "	" || t3 === "\n" || t3 === "\r" ? (p2(), r4 = 2) : e2 += t3), r4 === 3 && e2 === "!--" && (r4 = 4, h3 = h3[0]);
    }
    return p2(), h3;
  }(s3)), r3), arguments, [])).length > 1 ? r3 : r3[0];
}

// node_modules/preact/dist/preact.module.js
var n2;
var l;
var u;
var i;
var t2;
var o;
var r;
var f;
var e = {};
var c = [];
var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n4, l3) {
  for (var u3 in l3)
    n4[u3] = l3[u3];
  return n4;
}
function h(n4) {
  var l3 = n4.parentNode;
  l3 && l3.removeChild(n4);
}
function v(l3, u3, i3) {
  var t3, o3, r3, f3 = {};
  for (r3 in u3)
    r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n2.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
    for (r3 in l3.defaultProps)
      f3[r3] === void 0 && (f3[r3] = l3.defaultProps[r3]);
  return y(l3, f3, t3, o3, null);
}
function y(n4, i3, t3, o3, r3) {
  var f3 = { type: n4, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
  return r3 == null && l.vnode != null && l.vnode(f3), f3;
}
function d(n4) {
  return n4.children;
}
function _(n4, l3) {
  this.props = n4, this.context = l3;
}
function k(n4, l3) {
  if (l3 == null)
    return n4.__ ? k(n4.__, n4.__.__k.indexOf(n4) + 1) : null;
  for (var u3; l3 < n4.__k.length; l3++)
    if ((u3 = n4.__k[l3]) != null && u3.__e != null)
      return u3.__e;
  return typeof n4.type == "function" ? k(n4) : null;
}
function b(n4) {
  var l3, u3;
  if ((n4 = n4.__) != null && n4.__c != null) {
    for (n4.__e = n4.__c.base = null, l3 = 0; l3 < n4.__k.length; l3++)
      if ((u3 = n4.__k[l3]) != null && u3.__e != null) {
        n4.__e = n4.__c.base = u3.__e;
        break;
      }
    return b(n4);
  }
}
function m(n4) {
  (!n4.__d && (n4.__d = true) && t2.push(n4) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
}
function g() {
  for (var n4; g.__r = t2.length; )
    n4 = t2.sort(function(n5, l3) {
      return n5.__v.__b - l3.__v.__b;
    }), t2 = [], n4.some(function(n5) {
      var l3, u3, i3, t3, o3, r3;
      n5.__d && (o3 = (t3 = (l3 = n5).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u3, o3 == null ? k(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && b(t3)));
    });
}
function w(n4, l3, u3, i3, t3, o3, r3, f3, s3, a3) {
  var h3, v3, p2, _3, b2, m3, g3, w2 = i3 && i3.__k || c, A = w2.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if ((_3 = u3.__k[h3] = (_3 = l3[h3]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
      if (_3.__ = u3, _3.__b = u3.__b + 1, (p2 = w2[h3]) === null || p2 && _3.key == p2.key && _3.type === p2.type)
        w2[h3] = void 0;
      else
        for (v3 = 0; v3 < A; v3++) {
          if ((p2 = w2[v3]) && _3.key == p2.key && _3.type === p2.type) {
            w2[v3] = void 0;
            break;
          }
          p2 = null;
        }
      j(n4, _3, p2 = p2 || e, t3, o3, r3, f3, s3, a3), b2 = _3.__e, (v3 = _3.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _3), g3.push(v3, _3.__c || b2, _3)), b2 != null ? (m3 == null && (m3 = b2), typeof _3.type == "function" && _3.__k === p2.__k ? _3.__d = s3 = x(_3, s3, n4) : s3 = P(n4, _3, p2, w2, b2, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p2.__e == s3 && s3.parentNode != n4 && (s3 = k(p2));
    }
  for (u3.__e = m3, h3 = A; h3--; )
    w2[h3] != null && (typeof u3.type == "function" && w2[h3].__e != null && w2[h3].__e == u3.__d && (u3.__d = k(i3, h3 + 1)), N(w2[h3], w2[h3]));
  if (g3)
    for (h3 = 0; h3 < g3.length; h3++)
      M(g3[h3], g3[++h3], g3[++h3]);
}
function x(n4, l3, u3) {
  for (var i3, t3 = n4.__k, o3 = 0; t3 && o3 < t3.length; o3++)
    (i3 = t3[o3]) && (i3.__ = n4, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function P(n4, l3, u3, i3, t3, o3) {
  var r3, f3, e2;
  if (l3.__d !== void 0)
    r3 = l3.__d, l3.__d = void 0;
  else if (u3 == null || t3 != o3 || t3.parentNode == null)
    n:
      if (o3 == null || o3.parentNode !== n4)
        n4.appendChild(t3), r3 = null;
      else {
        for (f3 = o3, e2 = 0; (f3 = f3.nextSibling) && e2 < i3.length; e2 += 2)
          if (f3 == t3)
            break n;
        n4.insertBefore(t3, o3), r3 = o3;
      }
  return r3 !== void 0 ? r3 : t3.nextSibling;
}
function C(n4, l3, u3, i3, t3) {
  var o3;
  for (o3 in u3)
    o3 === "children" || o3 === "key" || o3 in l3 || H(n4, o3, null, u3[o3], i3);
  for (o3 in l3)
    t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l3[o3] || H(n4, o3, l3[o3], u3[o3], i3);
}
function $(n4, l3, u3) {
  l3[0] === "-" ? n4.setProperty(l3, u3) : n4[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
}
function H(n4, l3, u3, i3, t3) {
  var o3;
  n:
    if (l3 === "style")
      if (typeof u3 == "string")
        n4.style.cssText = u3;
      else {
        if (typeof i3 == "string" && (n4.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n4.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n4.style, l3, u3[l3]);
      }
    else if (l3[0] === "o" && l3[1] === "n")
      o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n4 ? l3.toLowerCase().slice(2) : l3.slice(2), n4.l || (n4.l = {}), n4.l[l3 + o3] = u3, u3 ? i3 || n4.addEventListener(l3, o3 ? T : I, o3) : n4.removeEventListener(l3, o3 ? T : I, o3);
    else if (l3 !== "dangerouslySetInnerHTML") {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n4)
        try {
          n4[l3] = u3 == null ? "" : u3;
          break n;
        } catch (n5) {
        }
      typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n4.setAttribute(l3, u3) : n4.removeAttribute(l3));
    }
}
function I(n4) {
  this.l[n4.type + false](l.event ? l.event(n4) : n4);
}
function T(n4) {
  this.l[n4.type + true](l.event ? l.event(n4) : n4);
}
function j(n4, u3, i3, t3, o3, r3, f3, e2, c3) {
  var s3, h3, v3, y2, p2, k2, b2, m3, g3, x3, A, P2 = u3.type;
  if (u3.constructor !== void 0)
    return null;
  i3.__h != null && (c3 = i3.__h, e2 = u3.__e = i3.__e, u3.__h = null, r3 = [e2]), (s3 = l.__b) && s3(u3);
  try {
    n:
      if (typeof P2 == "function") {
        if (m3 = u3.props, g3 = (s3 = P2.contextType) && t3[s3.__c], x3 = s3 ? g3 ? g3.props.value : s3.__ : t3, i3.__c ? b2 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h3 = new P2(m3, x3) : (u3.__c = h3 = new _(m3, x3), h3.constructor = P2, h3.render = O), g3 && g3.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = x3, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), h3.__s == null && (h3.__s = h3.state), P2.getDerivedStateFromProps != null && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, P2.getDerivedStateFromProps(m3, h3.__s))), y2 = h3.props, p2 = h3.state, v3)
          P2.getDerivedStateFromProps == null && h3.componentWillMount != null && h3.componentWillMount(), h3.componentDidMount != null && h3.__h.push(h3.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && m3 !== y2 && h3.componentWillReceiveProps != null && h3.componentWillReceiveProps(m3, x3), !h3.__e && h3.shouldComponentUpdate != null && h3.shouldComponentUpdate(m3, h3.__s, x3) === false || u3.__v === i3.__v) {
            h3.props = m3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n5) {
              n5 && (n5.__ = u3);
            }), h3.__h.length && f3.push(h3);
            break n;
          }
          h3.componentWillUpdate != null && h3.componentWillUpdate(m3, h3.__s, x3), h3.componentDidUpdate != null && h3.__h.push(function() {
            h3.componentDidUpdate(y2, p2, k2);
          });
        }
        h3.context = x3, h3.props = m3, h3.state = h3.__s, (s3 = l.__r) && s3(u3), h3.__d = false, h3.__v = u3, h3.__P = n4, s3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s, h3.getChildContext != null && (t3 = a(a({}, t3), h3.getChildContext())), v3 || h3.getSnapshotBeforeUpdate == null || (k2 = h3.getSnapshotBeforeUpdate(y2, p2)), A = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n4, Array.isArray(A) ? A : [A], u3, i3, t3, o3, r3, f3, e2, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b2 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
    (s3 = l.diffed) && s3(u3);
  } catch (n5) {
    u3.__v = null, (c3 || r3 != null) && (u3.__e = e2, u3.__h = !!c3, r3[r3.indexOf(e2)] = null), l.__e(n5, u3, i3);
  }
}
function z(n4, u3) {
  l.__c && l.__c(u3, n4), n4.some(function(u4) {
    try {
      n4 = u4.__h, u4.__h = [], n4.some(function(n5) {
        n5.call(u4);
      });
    } catch (n5) {
      l.__e(n5, u4.__v);
    }
  });
}
function L(l3, u3, i3, t3, o3, r3, f3, c3) {
  var s3, a3, v3, y2 = i3.props, p2 = u3.props, d3 = u3.type, _3 = 0;
  if (d3 === "svg" && (o3 = true), r3 != null) {
    for (; _3 < r3.length; _3++)
      if ((s3 = r3[_3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : s3.nodeType === 3)) {
        l3 = s3, r3[_3] = null;
        break;
      }
  }
  if (l3 == null) {
    if (d3 === null)
      return document.createTextNode(p2);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p2.is && p2), r3 = null, c3 = false;
  }
  if (d3 === null)
    y2 === p2 || c3 && l3.data === p2 || (l3.data = p2);
  else {
    if (r3 = r3 && n2.call(l3.childNodes), a3 = (y2 = i3.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c3) {
      if (r3 != null)
        for (y2 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
          y2[l3.attributes[_3].name] = l3.attributes[_3].value;
      (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p2, y2, o3, c3), v3)
      u3.__k = [];
    else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, o3 && d3 !== "foreignObject", r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
      for (_3 = r3.length; _3--; )
        r3[_3] != null && h(r3[_3]);
    c3 || ("value" in p2 && (_3 = p2.value) !== void 0 && (_3 !== l3.value || d3 === "progress" && !_3 || d3 === "option" && _3 !== y2.value) && H(l3, "value", _3, y2.value, false), "checked" in p2 && (_3 = p2.checked) !== void 0 && _3 !== l3.checked && H(l3, "checked", _3, y2.checked, false));
  }
  return l3;
}
function M(n4, u3, i3) {
  try {
    typeof n4 == "function" ? n4(u3) : n4.current = u3;
  } catch (n5) {
    l.__e(n5, i3);
  }
}
function N(n4, u3, i3) {
  var t3, o3;
  if (l.unmount && l.unmount(n4), (t3 = n4.ref) && (t3.current && t3.current !== n4.__e || M(t3, null, u3)), (t3 = n4.__c) != null) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n5) {
        l.__e(n5, u3);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = n4.__k)
    for (o3 = 0; o3 < t3.length; o3++)
      t3[o3] && N(t3[o3], u3, typeof n4.type != "function");
  i3 || n4.__e == null || h(n4.__e), n4.__e = n4.__d = void 0;
}
function O(n4, l3, u3) {
  return this.constructor(n4, u3);
}
n2 = c.slice, l = { __e: function(n4, l3, u3, i3) {
  for (var t3, o3, r3; l3 = l3.__; )
    if ((t3 = l3.__c) && !t3.__)
      try {
        if ((o3 = t3.constructor) && o3.getDerivedStateFromError != null && (t3.setState(o3.getDerivedStateFromError(n4)), r3 = t3.__d), t3.componentDidCatch != null && (t3.componentDidCatch(n4, i3 || {}), r3 = t3.__d), r3)
          return t3.__E = t3;
      } catch (l4) {
        n4 = l4;
      }
  throw n4;
} }, u = 0, i = function(n4) {
  return n4 != null && n4.constructor === void 0;
}, _.prototype.setState = function(n4, l3) {
  var u3;
  u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n4 == "function" && (n4 = n4(a({}, u3), this.props)), n4 && a(u3, n4), n4 != null && this.__v && (l3 && this.__h.push(l3), m(this));
}, _.prototype.forceUpdate = function(n4) {
  this.__v && (this.__e = true, n4 && this.__h.push(n4), m(this));
}, _.prototype.render = d, t2 = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

// node_modules/preact-render-to-string/dist/index.mjs
var r2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
var n3 = /[&<>"]/;
function o2(e2) {
  var t3 = String(e2);
  return n3.test(t3) ? t3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t3;
}
var a2 = function(e2, t3) {
  return String(e2).replace(/(\n+)/g, "$1" + (t3 || "	"));
};
var i2 = function(e2, t3, r3) {
  return String(e2).length > (t3 || 40) || !r3 && String(e2).indexOf("\n") !== -1 || String(e2).indexOf("<") !== -1;
};
var l2 = {};
function s2(e2) {
  var t3 = "";
  for (var n4 in e2) {
    var o3 = e2[n4];
    o3 != null && o3 !== "" && (t3 && (t3 += " "), t3 += n4[0] == "-" ? n4 : l2[n4] || (l2[n4] = n4.replace(/([A-Z])/g, "-$1").toLowerCase()), t3 += ": ", t3 += o3, typeof o3 == "number" && r2.test(n4) === false && (t3 += "px"), t3 += ";");
  }
  return t3 || void 0;
}
function f2(e2, t3) {
  for (var r3 in t3)
    e2[r3] = t3[r3];
  return e2;
}
function u2(e2, t3) {
  return Array.isArray(t3) ? t3.reduce(u2, e2) : t3 != null && t3 !== false && e2.push(t3), e2;
}
var c2 = { shallow: true };
var p = [];
var _2 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
var d2 = /[\s\n\\/='"\0<>]/;
function v2() {
  this.__d = true;
}
m2.render = m2;
var g2 = function(e2, t3) {
  return m2(e2, t3, c2);
};
var h2 = [];
function m2(t3, r3, n4) {
  r3 = r3 || {}, n4 = n4 || {};
  var o3 = l.__s;
  l.__s = true;
  var a3 = x2(t3, r3, n4);
  return l.__c && l.__c(t3, h2), h2.length = 0, l.__s = o3, a3;
}
function x2(r3, n4, l3, c3, g3, h3) {
  if (r3 == null || typeof r3 == "boolean")
    return "";
  if (typeof r3 != "object")
    return o2(r3);
  var m3 = l3.pretty, y2 = m3 && typeof m3 == "string" ? m3 : "	";
  if (Array.isArray(r3)) {
    for (var b2 = "", S = 0; S < r3.length; S++)
      m3 && S > 0 && (b2 += "\n"), b2 += x2(r3[S], n4, l3, c3, g3, h3);
    return b2;
  }
  var w2, k2 = r3.type, O2 = r3.props, C2 = false;
  if (typeof k2 == "function") {
    if (C2 = true, !l3.shallow || !c3 && l3.renderRootComponent !== false) {
      if (k2 === d) {
        var A = [];
        return u2(A, r3.props.children), x2(A, n4, l3, l3.shallowHighOrder !== false, g3, h3);
      }
      var H2, j2 = r3.__c = { __v: r3, context: n4, props: r3.props, setState: v2, forceUpdate: v2, __d: true, __h: [] };
      l.__b && l.__b(r3);
      var F = l.__r;
      if (k2.prototype && typeof k2.prototype.render == "function") {
        var M2 = k2.contextType, T2 = M2 && n4[M2.__c], $2 = M2 != null ? T2 ? T2.props.value : M2.__ : n4;
        (j2 = r3.__c = new k2(O2, $2)).__v = r3, j2._dirty = j2.__d = true, j2.props = O2, j2.state == null && (j2.state = {}), j2._nextState == null && j2.__s == null && (j2._nextState = j2.__s = j2.state), j2.context = $2, k2.getDerivedStateFromProps ? j2.state = f2(f2({}, j2.state), k2.getDerivedStateFromProps(j2.props, j2.state)) : j2.componentWillMount && (j2.componentWillMount(), j2.state = j2._nextState !== j2.state ? j2._nextState : j2.__s !== j2.state ? j2.__s : j2.state), F && F(r3), H2 = j2.render(j2.props, j2.state, j2.context);
      } else
        for (var L2 = k2.contextType, E = L2 && n4[L2.__c], D = L2 != null ? E ? E.props.value : L2.__ : n4, N2 = 0; j2.__d && N2++ < 25; )
          j2.__d = false, F && F(r3), H2 = k2.call(r3.__c, O2, D);
      return j2.getChildContext && (n4 = f2(f2({}, n4), j2.getChildContext())), l.diffed && l.diffed(r3), x2(H2, n4, l3, l3.shallowHighOrder !== false, g3, h3);
    }
    k2 = (w2 = k2).displayName || w2 !== Function && w2.name || function(e2) {
      var t3 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t3) {
        for (var r4 = -1, n5 = p.length; n5--; )
          if (p[n5] === e2) {
            r4 = n5;
            break;
          }
        r4 < 0 && (r4 = p.push(e2) - 1), t3 = "UnnamedComponent" + r4;
      }
      return t3;
    }(w2);
  }
  var P2, R, U = "<" + k2;
  if (O2) {
    var W = Object.keys(O2);
    l3 && l3.sortAttributes === true && W.sort();
    for (var q = 0; q < W.length; q++) {
      var z2 = W[q], I2 = O2[z2];
      if (z2 !== "children") {
        if (!d2.test(z2) && (l3 && l3.allAttributes || z2 !== "key" && z2 !== "ref" && z2 !== "__self" && z2 !== "__source")) {
          if (z2 === "defaultValue")
            z2 = "value";
          else if (z2 === "className") {
            if (O2.class !== void 0)
              continue;
            z2 = "class";
          } else
            g3 && z2.match(/^xlink:?./) && (z2 = z2.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if (z2 === "htmlFor") {
            if (O2.for)
              continue;
            z2 = "for";
          }
          z2 === "style" && I2 && typeof I2 == "object" && (I2 = s2(I2)), z2[0] === "a" && z2[1] === "r" && typeof I2 == "boolean" && (I2 = String(I2));
          var V = l3.attributeHook && l3.attributeHook(z2, I2, n4, l3, C2);
          if (V || V === "")
            U += V;
          else if (z2 === "dangerouslySetInnerHTML")
            R = I2 && I2.__html;
          else if (k2 === "textarea" && z2 === "value")
            P2 = I2;
          else if ((I2 || I2 === 0 || I2 === "") && typeof I2 != "function") {
            if (!(I2 !== true && I2 !== "" || (I2 = z2, l3 && l3.xml))) {
              U += " " + z2;
              continue;
            }
            if (z2 === "value") {
              if (k2 === "select") {
                h3 = I2;
                continue;
              }
              k2 === "option" && h3 == I2 && O2.selected === void 0 && (U += " selected");
            }
            U += " " + z2 + '="' + o2(I2) + '"';
          }
        }
      } else
        P2 = I2;
    }
  }
  if (m3) {
    var Z = U.replace(/\n\s*/, " ");
    Z === U || ~Z.indexOf("\n") ? m3 && ~U.indexOf("\n") && (U += "\n") : U = Z;
  }
  if (U += ">", d2.test(k2))
    throw new Error(k2 + " is not a valid HTML tag name in " + U);
  var B, G = _2.test(k2) || l3.voidElements && l3.voidElements.test(k2), J = [];
  if (R)
    m3 && i2(R) && (R = "\n" + y2 + a2(R, y2)), U += R;
  else if (P2 != null && u2(B = [], P2).length) {
    for (var K = m3 && ~U.indexOf("\n"), Q = false, X = 0; X < B.length; X++) {
      var Y = B[X];
      if (Y != null && Y !== false) {
        var ee = x2(Y, n4, l3, true, k2 === "svg" || k2 !== "foreignObject" && g3, h3);
        if (m3 && !K && i2(ee) && (K = true), ee)
          if (m3) {
            var te = ee.length > 0 && ee[0] != "<";
            Q && te ? J[J.length - 1] += ee : J.push(ee), Q = te;
          } else
            J.push(ee);
      }
    }
    if (m3 && K)
      for (var re = J.length; re--; )
        J[re] = "\n" + y2 + a2(J[re], y2);
  }
  if (J.length || R)
    U += J.join("");
  else if (l3 && l3.xml)
    return U.substring(0, U.length - 1) + " />";
  return !G || B || R ? (m3 && ~U.indexOf("\n") && (U += "\n"), U += "</" + k2 + ">") : U = U.replace(/>$/, " />"), U;
}
m2.shallowRender = g2;

// src/lib/html.js
var html_default = htm_module_default.bind(v);
function render(node) {
  return m2(node);
}

// src/lib/constants.js
var SECURITY_HEADERS = {
  "strict-transport-security": "max-age=63072000; includeSubdomains; preload",
  "content-security-policy": "default-src 'none'; connect-src 'self'; img-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "x-xss-protection": "1; mode=block"
};
var TEXT_HTML = "text/html";
var APPLICATION_JSON = "application/json";

// src/pages/404.js
function PageNotFound() {
  return html_default` <h1>Page not found</h1> `;
}

// src/pages/_document.js
var HtmlPage = ({ head: head4, content }) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bill Beckelman</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href="/site.css" />
        ${head4 || ""}
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};

// src/components/Header.js
var Header = () => {
  return html_default`
    <div class="site-header bg-blue-500">
      <nav class="flex pl-8 py-4 gap-4">
        <a href="/">Home</a> 
        <a href="/posts">Posts</a>
        <a href="/htmx">Htmx</a>
      </nav>
    </div>
  `;
};

// src/components/Main.js
var Main = ({ children }) => {
  return html_default`<div class="wrapper">
    <main class="my-8">${children}</main>
  </div> `;
};

// src/components/Footer.js
var Footer = () => {
  return html_default` <footer class="pl-8 py-4 bg-gray-900 text-white">The footer</footer> `;
};

// src/lib/renderer.js
var isFunction = (fn) => {
  return typeof fn === "function";
};
function createRenderer({ request, env }) {
  return async (Layout, Page, params) => {
    let data = {};
    let headers4 = {
      ...SECURITY_HEADERS
    };
    const wantsJson = request.headers.has("accept") && request.headers.get("accept").split(",").find((x3) => x3 === APPLICATION_JSON);
    if (wantsJson) {
      headers4["content-type"] = APPLICATION_JSON;
      if (isFunction(Page.api)) {
        data = await Page.api({ request, env, params });
        if (data.errorCode) {
          return new Response(JSON.stringify({}), {
            status: data.errorCode,
            headers: headers4
          });
        }
        return new Response(JSON.stringify(data), { headers: headers4 });
      }
      {
        return new Response(JSON.stringify({}), { status: 404, headers: headers4 });
      }
    }
    let head4 = "";
    headers4["content-type"] = TEXT_HTML;
    if (isFunction(Page.api)) {
      data = await Page.api({ request, env, params });
      if (data.errorCode) {
        const content2 = render(PageNotFound());
        return new Response(HtmlPage({ content: content2 }), {
          status: data.errorCode,
          headers: headers4
        });
      }
    }
    if (isFunction(Page.headers)) {
      headers4 = { ...headers4, ...Page.headers({ request, env, props: data }) };
    }
    if (isFunction(Page.head)) {
      head4 = render(Page.head({ request, env, props: data }));
    }
    const header = render(html_default`<${Header} />`);
    const main = render(html_default`<${Main}>${Page.default({ request, env, params, props: data })}<//>`);
    const footer = render(html_default`<${Footer} />`);
    const content = Layout({ content: `${header}
${main}
${footer}`, head: head4 });
    return new Response(content, { headers: headers4 });
  };
}

// src/pages/robots.js
function Robots() {
  return new Response(`User-agent: *
Disallow: /`, {
    headers: { "content-type": "text/plain" }
  });
}

// src/pages/htmx.js
var htmx_exports = {};
__export(htmx_exports, {
  actions: () => actions,
  default: () => Htmx,
  head: () => head,
  headers: () => headers
});

// src/components/Quote.js
var Quote_default = ({ children, link }) => {
  return html_default`
    <figure class="p-4 border-l-4 mb-4 border-l-green-500 bg-gray-200">
      <blockquote class="before:content-['“'] after:content-['”']">
        ${children}
      </blockquote>
      <figcaption class="text-right">
        – <cite><a href="${link}">${link}</a></cite>
      </figcaption>
    </figure>
  `;
};

// src/pages/htmx.js
function headers() {
  return {
    "x-whatever": "12345"
  };
}
var _a;
function head() {
  return html_default(_a || (_a = __template([' <script src="/js/htmx.min.js" defer><\/script> '])));
}
var Content = () => {
  const date = new Date();
  return html_default`<div id="htmx">
    <h1>${"</>"} htmx</h1>
    <${Quote_default} link="https://htmx.org/">
      htmx gives you access to AJAX, CSS Transitions, WebSockets and Server Sent
      Events directly in HTML, using attributes, so you can build modern user
      interfaces with the simplicity and power of hypertext
    <//>
    <div class="mb-8">Rendered at ${date.toLocaleTimeString()}</div>

    <div class="mb-8 pb-8 border-b-2 border-b-blue-500">
      <h3>Loading a new server rendered fragment</h2>
      <button
        class="px-4 py-2 text-white bg-blue-500 rounded"
        hx-post="/htmx/fragment"
        hx-trigger="click"
        hx-target="#parent-div"
        hx-swap="innerHTML"
      >
        New fragment
      </button>

      <div id="parent-div"></div>
    </div>

    <div class="mb-8 pb-8 border-b-2 border-b-blue-500">
      <h3>Refreshing all content in main element</h2>
      <p>Rendered at ${date.toLocaleTimeString()}</p>
      <button
        class="px-4 py-2 text-white bg-green-500 rounded"
        hx-get="/htmx/refresh"
        hx-trigger="click"
        hx-target="#htmx"
        hx-swap="outerHTML"
      >
        Server refresh
      </button>
    </div>

    <form hx-boost="true" action="/htmx/submit" method="POST">
      <h3>Form example</h2>
      <label for="name">Enter your name: </label>
      <input
        class="px-2 py-1 border rounded"
        type="text"
        id="name"
        name="name"
      />
      <div>
        <button class="px-4 py-2 text-white bg-blue-500 rounded" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>`;
};
function Htmx() {
  return html_default` <${Content} /> `;
}
function send(content) {
  return new Response(content, { headers: { "content-type": "text/html" } });
}
var actions = {
  fragment: () => {
    const date = new Date();
    const result = render(html_default`<div>Fragment: ${date.toLocaleTimeString()}</div>`);
    return send(result);
  },
  refresh: () => {
    const result = render(html_default`<${Content} />`);
    return send(result);
  },
  submit: async (request) => {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405
      });
    }
    const body = await request.formData();
    const { name } = Object.fromEntries(body);
    return new Response(204, {
      headers: { "HX-Redirect": `/greeting/${name}` }
    });
  }
};

// src/pages/about.js
var about_exports = {};
__export(about_exports, {
  default: () => About,
  head: () => head2,
  headers: () => headers2
});
function headers2() {
  return {
    "x-whatever": "12345"
  };
}
function head2() {
  return html_default` <meta name="author" content="Bill Beckelman" /> `;
}
function About() {
  return html_default` <h1>About</h1> `;
}

// src/pages/index.js
var pages_exports = {};
__export(pages_exports, {
  api: () => api,
  default: () => Index,
  head: () => head3,
  headers: () => headers3
});

// src/components/PostList.js
var PostList = ({ posts }) => {
  return html_default`<ul class="list-disc list-inside">
    ${posts.map((i3) => html_default`<li>
        <a href="/post/${i3.id}">${i3.title}</a>
      </li>`)}
  </ul>`;
};

// src/pages/index.js
function headers3() {
  return {
    "x-whatever": "12345"
  };
}
function head3() {
  return html_default` <meta name="author" content="Bill Beckelman" /> `;
}
async function api() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { posts: data.slice(0, 10) };
}
function Index({ props }) {
  const { posts } = props;
  return html_default`
    <h1>Latest Posts</h1>
    <${PostList} posts=${posts} />
  `;
}

// src/pages/posts.js
var posts_exports = {};
__export(posts_exports, {
  api: () => api2,
  default: () => Posts
});
async function api2({ env }) {
  await env.SITE.put("test.json", JSON.stringify({ test: "1" }));
  const site = await env.SITE.get("test.json", "json");
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { posts: data, site };
}
function Posts({ props }) {
  const { posts } = props;
  return html_default`
    <h1>Posts</h1>
    <ul class="list-disc list-inside">
      ${posts.map((i3) => html_default`<li>
          <a href="/post/${i3.id}">${i3.title}</a>
        </li>`)}
    </ul>
  `;
}

// src/pages/greeting/[name].js
var name_exports = {};
__export(name_exports, {
  default: () => Post
});
function Post({ params }) {
  const { name } = params;
  const result = html_default`
    <h1>Hello ${decodeURI(name)}!</h1>
  `;
  return result;
}

// src/pages/post/[id].js
var id_exports = {};
__export(id_exports, {
  api: () => api3,
  default: () => Post2
});
async function api3({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return { errorCode: res.status };
  }
  const data = await res.json();
  return { post: data };
}
function Post2({ props }) {
  const { post } = props;
  const result = html_default`
    <h1>${post.title}</h1>
    <div>${post.body}</div>
  `;
  return result;
}

// src/lib/routes.js
var routes = [
  { path: "/about", code: about_exports, hasActions: false },
  { path: "/htmx", code: htmx_exports, hasActions: true },
  { path: "/", code: pages_exports, hasActions: false },
  { path: "/posts", code: posts_exports, hasActions: false },
  { path: "/greeting/:name", code: name_exports, hasActions: false },
  { path: "/post/:id", code: id_exports, hasActions: false }
];

// src/lib/router.js
function Router(context) {
  const { request, env } = context;
  const render2 = createRenderer(context);
  const router = (0, import_itty_router_extras.ThrowableRouter)();
  for (const route of routes) {
    router.get(route.path, import_itty_router_extras.withParams, ({ params }) => {
      return render2(HtmlPage, route.code, params);
    });
    if (route.hasActions) {
      router.all(`${route.path}/:action`, import_itty_router_extras.withParams, (req) => {
        return route.code.actions[req.params.action](req);
      });
    }
  }
  router.all("/robots.txt", Robots).get("*", () => {
    return env.ASSETS.fetch(request);
  });
  return router;
}

// src/index.js
var src_default = {
  async fetch(request, env) {
    const router = Router({ request, env });
    return router.handle(request);
  }
};
export {
  src_default as default
};
