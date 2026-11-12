// C:/Users/wonde/AppData/Local/Programs/cursor/resources/app/out/vs/workbench/react-runtime/chunk-22Z4B4NT.js
!(function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e2.Error().stack;
    n && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n] = "b54b27a1-a4f9-53f5-98a5-594647b2a39e");
  } catch (e3) {
  }
})();
var F = Object.getOwnPropertyNames;
var d = (u, a) => function() {
  return a || (0, u[F(u)[0]])((a = { exports: {} }).exports, a), a.exports;
};
var x = d({ "react.production.js"(u) {
  "use strict";
  var a = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), q = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), G = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), W = Symbol.for("react.view_transition"), w = Symbol.iterator;
  function b(t) {
    return t === null || typeof t != "object" ? null : (t = w && t[w] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var g = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O2 = Object.assign, P = {};
  function l(t, e2, n) {
    this.props = t, this.context = e2, this.refs = P, this.updater = n || g;
  }
  l.prototype.isReactComponent = {}, l.prototype.setState = function(t, e2) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e2, "setState");
  }, l.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function j() {
  }
  j.prototype = l.prototype;
  function p(t, e2, n) {
    this.props = t, this.context = e2, this.refs = P, this.updater = n || g;
  }
  var y = p.prototype = new j();
  y.constructor = p, O2(y, l.prototype), y.isPureReactComponent = true;
  var H = Array.isArray;
  function T() {
  }
  var i = { H: null, A: null, T: null, S: null }, N = Object.prototype.hasOwnProperty;
  function R(t, e2, n) {
    var r = n.ref;
    return { $$typeof: a, type: t, key: e2, ref: r !== void 0 ? r : null, props: n };
  }
  function B(t, e2) {
    return R(t.type, e2, t.props);
  }
  function m(t) {
    return typeof t == "object" && t !== null && t.$$typeof === a;
  }
  function J(t) {
    var e2 = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(n) {
      return e2[n];
    });
  }
  var h = /\/+/g;
  function C(t, e2) {
    return typeof t == "object" && t !== null && t.key != null ? J("" + t.key) : e2.toString(36);
  }
  function Q(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(T, T) : (t.status = "pending", t.then(function(e2) {
          t.status === "pending" && (t.status = "fulfilled", t.value = e2);
        }, function(e2) {
          t.status === "pending" && (t.status = "rejected", t.reason = e2);
        })), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function v(t, e2, n, r, o) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var f = false;
    if (t === null) f = true;
    else switch (s) {
      case "bigint":
      case "string":
      case "number":
        f = true;
        break;
      case "object":
        switch (t.$$typeof) {
          case a:
          case A:
            f = true;
            break;
          case S:
            return f = t._init, v(f(t._payload), e2, n, r, o);
        }
    }
    if (f) return o = o(t), f = r === "" ? "." + C(t, 0) : r, H(o) ? (n = "", f != null && (n = f.replace(h, "$&/") + "/"), v(o, e2, n, "", function(V) {
      return V;
    })) : o != null && (m(o) && (o = B(o, n + (o.key == null || t && t.key === o.key ? "" : ("" + o.key).replace(h, "$&/") + "/") + f)), e2.push(o)), 1;
    f = 0;
    var _ = r === "" ? "." : r + ":";
    if (H(t)) for (var c = 0; c < t.length; c++) r = t[c], s = _ + C(r, c), f += v(r, e2, n, s, o);
    else if (c = b(t), typeof c == "function") for (t = c.call(t), c = 0; !(r = t.next()).done; ) r = r.value, s = _ + C(r, c++), f += v(r, e2, n, s, o);
    else if (s === "object") {
      if (typeof t.then == "function") return v(Q(t), e2, n, r, o);
      throw e2 = String(t), Error("Objects are not valid as a React child (found: " + (e2 === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e2) + "). If you meant to render a collection of children, use an array instead.");
    }
    return f;
  }
  function E2(t, e2, n) {
    if (t == null) return t;
    var r = [], o = 0;
    return v(t, r, "", "", function(s) {
      return e2.call(n, s, o++);
    }), r;
  }
  function X(t) {
    if (t._status === -1) {
      var e2 = t._result, n = e2();
      n.then(function(r) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = r, n.status === void 0 && (n.status = "fulfilled", n.value = r));
      }, function(r) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = r, n.status === void 0 && (n.status = "rejected", n.reason = r));
      }), t._status === -1 && (t._status = 0, t._result = n);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var $ = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e2 = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e2)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function I(t) {
    var e2 = i.T, n = {};
    n.types = e2 !== null ? e2.types : null, i.T = n;
    try {
      var r = t(), o = i.S;
      o !== null && o(n, r), typeof r == "object" && r !== null && typeof r.then == "function" && r.then(T, $);
    } catch (s) {
      $(s);
    } finally {
      e2 !== null && n.types !== null && (e2.types = n.types), i.T = e2;
    }
  }
  function Y(t) {
    var e2 = i.T;
    if (e2 !== null) {
      var n = e2.types;
      n === null ? e2.types = [t] : n.indexOf(t) === -1 && n.push(t);
    } else I(Y.bind(null, t));
  }
  var Z = { map: E2, forEach: function(t, e2, n) {
    E2(t, function() {
      e2.apply(this, arguments);
    }, n);
  }, count: function(t) {
    var e2 = 0;
    return E2(t, function() {
      e2++;
    }), e2;
  }, toArray: function(t) {
    return E2(t, function(e2) {
      return e2;
    }) || [];
  }, only: function(t) {
    if (!m(t)) throw Error("React.Children.only expected to receive a single React element child.");
    return t;
  } };
  u.Activity = K, u.Children = Z, u.Component = l, u.Fragment = M, u.Profiler = U, u.PureComponent = p, u.StrictMode = L, u.Suspense = z, u.ViewTransition = W, u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, u.__COMPILER_RUNTIME = { __proto__: null, c: function(t) {
    return i.H.useMemoCache(t);
  } }, u.addTransitionType = Y, u.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, u.cacheSignal = function() {
    return null;
  }, u.cloneElement = function(t, e2, n) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var r = O2({}, t.props), o = t.key;
    if (e2 != null) for (s in e2.key !== void 0 && (o = "" + e2.key), e2) !N.call(e2, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && e2.ref === void 0 || (r[s] = e2[s]);
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
      for (var f = Array(s), _ = 0; _ < s; _++) f[_] = arguments[_ + 2];
      r.children = f;
    }
    return R(t.type, o, r);
  }, u.createContext = function(t) {
    return t = { $$typeof: q, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }, t.Provider = t, t.Consumer = { $$typeof: k, _context: t }, t;
  }, u.createElement = function(t, e2, n) {
    var r, o = {}, s = null;
    if (e2 != null) for (r in e2.key !== void 0 && (s = "" + e2.key), e2) N.call(e2, r) && r !== "key" && r !== "__self" && r !== "__source" && (o[r] = e2[r]);
    var f = arguments.length - 2;
    if (f === 1) o.children = n;
    else if (1 < f) {
      for (var _ = Array(f), c = 0; c < f; c++) _[c] = arguments[c + 2];
      o.children = _;
    }
    if (t && t.defaultProps) for (r in f = t.defaultProps, f) o[r] === void 0 && (o[r] = f[r]);
    return R(t, s, o);
  }, u.createRef = function() {
    return { current: null };
  }, u.forwardRef = function(t) {
    return { $$typeof: D, render: t };
  }, u.isValidElement = m, u.lazy = function(t) {
    return { $$typeof: S, _payload: { _status: -1, _result: t }, _init: X };
  }, u.memo = function(t, e2) {
    return { $$typeof: G, type: t, compare: e2 === void 0 ? null : e2 };
  }, u.startTransition = I, u.unstable_useCacheRefresh = function() {
    return i.H.useCacheRefresh();
  }, u.use = function(t) {
    return i.H.use(t);
  }, u.useActionState = function(t, e2, n) {
    return i.H.useActionState(t, e2, n);
  }, u.useCallback = function(t, e2) {
    return i.H.useCallback(t, e2);
  }, u.useContext = function(t) {
    return i.H.useContext(t);
  }, u.useDebugValue = function() {
  }, u.useDeferredValue = function(t, e2) {
    return i.H.useDeferredValue(t, e2);
  }, u.useEffect = function(t, e2) {
    return i.H.useEffect(t, e2);
  }, u.useEffectEvent = function(t) {
    return i.H.useEffectEvent(t);
  }, u.useId = function() {
    return i.H.useId();
  }, u.useImperativeHandle = function(t, e2, n) {
    return i.H.useImperativeHandle(t, e2, n);
  }, u.useInsertionEffect = function(t, e2) {
    return i.H.useInsertionEffect(t, e2);
  }, u.useLayoutEffect = function(t, e2) {
    return i.H.useLayoutEffect(t, e2);
  }, u.useMemo = function(t, e2) {
    return i.H.useMemo(t, e2);
  }, u.useOptimistic = function(t, e2) {
    return i.H.useOptimistic(t, e2);
  }, u.useReducer = function(t, e2, n) {
    return i.H.useReducer(t, e2, n);
  }, u.useRef = function(t) {
    return i.H.useRef(t);
  }, u.useState = function(t) {
    return i.H.useState(t);
  }, u.useSyncExternalStore = function(t, e2, n) {
    return i.H.useSyncExternalStore(t, e2, n);
  }, u.useTransition = function() {
    return i.H.useTransition();
  }, u.version = "19.3.0";
} });
var tt = d({ "index.js"(u, a) {
  a.exports = x();
} });

// C:/Users/wonde/AppData/Local/Programs/cursor/resources/app/out/vs/workbench/react-runtime/react/esm-index-production.js
!(function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e2.Error().stack;
    n && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n] = "0d628667-4177-5953-a4b0-d2c9ff47fb02");
  } catch (e3) {
  }
})();
var e = tt();
var Activity = e.Activity;
var Children = e.Children;
var Component = e.Component;
var Fragment = e.Fragment;
var Profiler = e.Profiler;
var PureComponent = e.PureComponent;
var StrictMode = e.StrictMode;
var Suspense = e.Suspense;
var SuspenseList = e.SuspenseList;
var ViewTransition = e.ViewTransition;
var addTransitionType = e.addTransitionType;
var cloneElement = e.cloneElement;
var createContext = e.createContext;
var createElement = e.createElement;
var createFactory = e.createFactory;
var createRef = e.createRef;
var forwardRef = e.forwardRef;
var isValidElement = e.isValidElement;
var lazy = e.lazy;
var memo = e.memo;
var startTransition = e.startTransition;
var use = e.use;
var useActionState = e.useActionState;
var useCallback = e.useCallback;
var useContext = e.useContext;
var useDebugValue = e.useDebugValue;
var useDeferredValue = e.useDeferredValue;
var useEffect = e.useEffect;
var useEffectEvent = e.useEffectEvent;
var useId = e.useId;
var useImperativeHandle = e.useImperativeHandle;
var useInsertionEffect = e.useInsertionEffect;
var useLayoutEffect = e.useLayoutEffect;
var useMemo = e.useMemo;
var useOptimistic = e.useOptimistic;
var useReducer = e.useReducer;
var useRef = e.useRef;
var useState = e.useState;
var useSyncExternalStore = e.useSyncExternalStore;
var useTransition = e.useTransition;
var version = e.version;
var esm_index_production_default = e;

// C:/Users/wonde/AppData/Local/Programs/cursor/resources/app/out/vs/workbench/react-runtime/chunk-IEW52OSV.js
!(function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e2.Error().stack;
    n && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n] = "1a584fc0-113b-5760-b992-d78274743bba");
  } catch (e3) {
  }
})();
var E = d({ "react-dom.production.js"(i) {
  "use strict";
  var d2 = tt();
  function a(r) {
    var e2 = "https://react.dev/errors/" + r;
    if (1 < arguments.length) {
      e2 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++) e2 += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + r + "; visit " + e2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var n = { d: { f, r: function() {
    throw Error(a(522));
  }, D: f, C: f, L: f, m: f, X: f, S: f, M: f }, p: 0, findDOMNode: null }, o = Symbol.for("react.portal"), m = Symbol.for("react.recoverable"), g = Symbol.for("react.optimistic_key");
  function s(r, e2, t) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: o, key: c == null ? null : c === g ? g : "" + c, children: r, containerInfo: e2, implementation: t };
  }
  var u = d2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(r, e2) {
    if (r === "font") return "";
    if (typeof e2 == "string") return e2 === "use-credentials" ? e2 : "";
  }
  i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, i.browser = function(r) {
    return { $$typeof: m, _reason: r };
  }, i.createPortal = function(r, e2) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e2 || e2.nodeType !== 1 && e2.nodeType !== 9 && e2.nodeType !== 11) throw Error(a(299));
    return s(r, e2, null, t);
  }, i.flushSync = function(r) {
    var e2 = u.T, t = n.p;
    try {
      if (u.T = null, n.p = 2, r) return r();
    } finally {
      u.T = e2, n.p = t, n.d.f();
    }
  }, i.preconnect = function(r, e2) {
    typeof r == "string" && (e2 ? (e2 = e2.crossOrigin, e2 = typeof e2 == "string" ? e2 === "use-credentials" ? e2 : "" : void 0) : e2 = null, n.d.C(r, e2));
  }, i.prefetchDNS = function(r) {
    typeof r == "string" && n.d.D(r);
  }, i.preinit = function(r, e2) {
    if (typeof r == "string" && e2 && typeof e2.as == "string") {
      var t = e2.as, c = y(t, e2.crossOrigin), l = typeof e2.integrity == "string" ? e2.integrity : void 0, _ = typeof e2.fetchPriority == "string" ? e2.fetchPriority : void 0;
      t === "style" ? n.d.S(r, typeof e2.precedence == "string" ? e2.precedence : void 0, { crossOrigin: c, integrity: l, fetchPriority: _ }) : t === "script" && n.d.X(r, { crossOrigin: c, integrity: l, fetchPriority: _, nonce: typeof e2.nonce == "string" ? e2.nonce : void 0 });
    }
  }, i.preinitModule = function(r, e2) {
    if (typeof r == "string") if (typeof e2 == "object" && e2 !== null) {
      if (e2.as == null || e2.as === "script") {
        var t = y(e2.as, e2.crossOrigin);
        n.d.M(r, { crossOrigin: t, integrity: typeof e2.integrity == "string" ? e2.integrity : void 0, nonce: typeof e2.nonce == "string" ? e2.nonce : void 0, fetchPriority: typeof e2.fetchPriority == "string" ? e2.fetchPriority : void 0 });
      }
    } else e2 == null && n.d.M(r);
  }, i.preload = function(r, e2) {
    if (typeof r == "string" && typeof e2 == "object" && e2 !== null && typeof e2.as == "string") {
      var t = e2.as, c = y(t, e2.crossOrigin);
      n.d.L(r, t, { crossOrigin: c, integrity: typeof e2.integrity == "string" ? e2.integrity : void 0, nonce: typeof e2.nonce == "string" ? e2.nonce : void 0, type: typeof e2.type == "string" ? e2.type : void 0, fetchPriority: typeof e2.fetchPriority == "string" ? e2.fetchPriority : void 0, referrerPolicy: typeof e2.referrerPolicy == "string" ? e2.referrerPolicy : void 0, imageSrcSet: typeof e2.imageSrcSet == "string" ? e2.imageSrcSet : void 0, imageSizes: typeof e2.imageSizes == "string" ? e2.imageSizes : void 0, media: typeof e2.media == "string" ? e2.media : void 0 });
    }
  }, i.preloadModule = function(r, e2) {
    if (typeof r == "string") if (e2) {
      var t = y(e2.as, e2.crossOrigin);
      n.d.m(r, { as: typeof e2.as == "string" && e2.as !== "script" ? e2.as : void 0, crossOrigin: t, integrity: typeof e2.integrity == "string" ? e2.integrity : void 0, nonce: typeof e2.nonce == "string" ? e2.nonce : void 0, fetchPriority: typeof e2.fetchPriority == "string" ? e2.fetchPriority : void 0 });
    } else n.d.m(r);
  }, i.requestFormReset = function(r) {
    n.d.r(r);
  }, i.unstable_batchedUpdates = function(r, e2) {
    return r(e2);
  }, i.useFormState = function(r, e2, t) {
    return u.H.useFormState(r, e2, t);
  }, i.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, i.version = "19.3.0";
} });
var O = d({ "index.js"(i, d2) {
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
    } catch (f) {
      console.error(f);
    }
  }
  a(), d2.exports = E();
} });

// C:/Users/wonde/AppData/Local/Programs/cursor/resources/app/out/vs/workbench/react-runtime/react-dom/esm-client-production.js
!(function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e2.Error().stack;
    n && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n] = "950ddc9a-67de-5d9b-9043-cd8301edad5e");
  } catch (e3) {
  }
})();
var jo = d({ "scheduler.production.js"(K) {
  "use strict";
  function w(b, H) {
    var D = b.length;
    b.push(H);
    l: for (; 0 < D; ) {
      var k = D - 1 >>> 1, ul = b[k];
      if (0 < S(ul, H)) b[k] = H, b[D] = ul, D = k;
      else break l;
    }
  }
  function Ol(b) {
    return b.length === 0 ? null : b[0];
  }
  function pt(b) {
    if (b.length === 0) return null;
    var H = b[0], D = b.pop();
    if (D !== H) {
      b[0] = D;
      l: for (var k = 0, ul = b.length, Gl = ul >>> 1; k < Gl; ) {
        var Wt = 2 * (k + 1) - 1, ka = b[Wt], Ct = Wt + 1, Ft = b[Ct];
        if (0 > S(ka, D)) Ct < ul && 0 > S(Ft, ka) ? (b[k] = Ft, b[Ct] = D, k = Ct) : (b[k] = ka, b[Wt] = D, k = Wt);
        else if (Ct < ul && 0 > S(Ft, D)) b[k] = Ft, b[Ct] = D, k = Ct;
        else break l;
      }
    }
    return H;
  }
  function S(b, H) {
    var D = b.sortIndex - H.sortIndex;
    return D !== 0 ? D : b.id - H.id;
  }
  K.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function" ? (Wa = performance, K.unstable_now = function() {
    return Wa.now();
  }) : (_t = Date, Fa = _t.now(), K.unstable_now = function() {
    return _t.now() - Fa;
  });
  var Wa, _t, Fa, $l = [], et = [], Bf = 1, Al = null, Q = 3, nt = false, wt = false, $t = false, Iu = false, tl = typeof setTimeout == "function" ? setTimeout : null, Dt = typeof clearTimeout == "function" ? clearTimeout : null, ku = typeof setImmediate < "u" ? setImmediate : null;
  function Pu(b) {
    for (var H = Ol(et); H !== null; ) {
      if (H.callback === null) pt(et);
      else if (H.startTime <= b) pt(et), H.sortIndex = H.expirationTime, w($l, H);
      else break;
      H = Ol(et);
    }
  }
  function Ia(b) {
    if ($t = false, Pu(b), !wt) if (Ol($l) !== null) wt = true, Mt || (Mt = true, Yl());
    else {
      var H = Ol(et);
      H !== null && ua(Ia, H.startTime - b);
    }
  }
  var Mt = false, Ut = -1, Z = 5, We = -1;
  function Du() {
    return Iu ? true : !(K.unstable_now() - We < Z);
  }
  function Ht() {
    if (Iu = false, Mt) {
      var b = K.unstable_now();
      We = b;
      var H = true;
      try {
        l: {
          wt = false, $t && ($t = false, Dt(Ut), Ut = -1), nt = true;
          var D = Q;
          try {
            t: {
              for (Pu(b), Al = Ol($l); Al !== null && !(Al.expirationTime > b && Du()); ) {
                var k = Al.callback;
                if (typeof k == "function") {
                  Al.callback = null, Q = Al.priorityLevel;
                  var ul = k(Al.expirationTime <= b);
                  if (b = K.unstable_now(), typeof ul == "function") {
                    Al.callback = ul, Pu(b), H = true;
                    break t;
                  }
                  Al === Ol($l) && pt($l), Pu(b);
                } else pt($l);
                Al = Ol($l);
              }
              if (Al !== null) H = true;
              else {
                var Gl = Ol(et);
                Gl !== null && ua(Ia, Gl.startTime - b), H = false;
              }
            }
            break l;
          } finally {
            Al = null, Q = D, nt = false;
          }
          H = void 0;
        }
      } finally {
        H ? Yl() : Mt = false;
      }
    }
  }
  var Yl;
  typeof ku == "function" ? Yl = function() {
    ku(Ht);
  } : typeof MessageChannel < "u" ? (la = new MessageChannel(), ta = la.port2, la.port1.onmessage = Ht, Yl = function() {
    ta.postMessage(null);
  }) : Yl = function() {
    tl(Ht, 0);
  };
  var la, ta;
  function ua(b, H) {
    Ut = tl(function() {
      b(K.unstable_now());
    }, H);
  }
  K.unstable_IdlePriority = 5, K.unstable_ImmediatePriority = 1, K.unstable_LowPriority = 4, K.unstable_NormalPriority = 3, K.unstable_Profiling = null, K.unstable_UserBlockingPriority = 2, K.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, K.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < b ? Math.floor(1e3 / b) : 5;
  }, K.unstable_getCurrentPriorityLevel = function() {
    return Q;
  }, K.unstable_next = function(b) {
    switch (Q) {
      case 1:
      case 2:
      case 3:
        var H = 3;
        break;
      default:
        H = Q;
    }
    var D = Q;
    Q = H;
    try {
      return b();
    } finally {
      Q = D;
    }
  }, K.unstable_requestPaint = function() {
    Iu = true;
  }, K.unstable_runWithPriority = function(b, H) {
    switch (b) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        b = 3;
    }
    var D = Q;
    Q = b;
    try {
      return H();
    } finally {
      Q = D;
    }
  }, K.unstable_scheduleCallback = function(b, H, D) {
    var k = K.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? k + D : k) : D = k, b) {
      case 1:
        var ul = -1;
        break;
      case 2:
        ul = 250;
        break;
      case 5:
        ul = 1073741823;
        break;
      case 4:
        ul = 1e4;
        break;
      default:
        ul = 5e3;
    }
    return ul = D + ul, b = { id: Bf++, callback: H, priorityLevel: b, startTime: D, expirationTime: ul, sortIndex: -1 }, D > k ? (b.sortIndex = D, w(et, b), Ol($l) === null && b === Ol(et) && ($t ? (Dt(Ut), Ut = -1) : $t = true, ua(Ia, D - k))) : (b.sortIndex = ul, w($l, b), wt || nt || (wt = true, Mt || (Mt = true, Yl()))), b;
  }, K.unstable_shouldYield = Du, K.unstable_wrapCallback = function(b) {
    var H = Q;
    return function() {
      var D = Q;
      Q = H;
      try {
        return b.apply(this, arguments);
      } finally {
        Q = D;
      }
    };
  };
} });
var Zo = d({ "index.js"(K, w) {
  "use strict";
  w.exports = jo();
} });
var Vo = d({ "react-dom-client.production.js"(K) {
  "use strict";
  var w = Zo(), Ol = tt(), pt = O();
  function S(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++) t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Wa(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function _t(l) {
    for (var t = l, u = t; u && !u.alternate; ) t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function Fa(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function $l(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function et(l) {
    if (_t(l) !== l) throw Error(S(188));
  }
  function Bf(l) {
    var t = l.alternate;
    if (!t) {
      if (t = _t(l), t === null) throw Error(S(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e2 = u.return;
      if (e2 === null) break;
      var n = e2.alternate;
      if (n === null) {
        if (a = e2.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e2.child === n.child) {
        for (n = e2.child; n; ) {
          if (n === u) return et(e2), l;
          if (n === a) return et(e2), t;
          n = n.sibling;
        }
        throw Error(S(188));
      }
      if (u.return !== a.return) u = e2, a = n;
      else {
        for (var f = false, c = e2.child; c; ) {
          if (c === u) {
            f = true, u = e2, a = n;
            break;
          }
          if (c === a) {
            f = true, a = e2, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = true, u = n, a = e2;
              break;
            }
            if (c === a) {
              f = true, a = n, u = e2;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(S(189));
        }
      }
      if (u.alternate !== a) throw Error(S(190));
    }
    if (u.tag !== 3) throw Error(S(188));
    return u.stateNode.current === u ? l : t;
  }
  function Al(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = Al(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function Q(l, t, u, a, e2, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, a, e2, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && Q(l.child, t, u, a, e2, n)) return true;
      l = l.sibling;
    }
    return false;
  }
  function nt(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function wt(l) {
    var t = false;
    for (l = l.return; l !== null && (l.tag === 4 && (t = true), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); ) l = l.return;
    return t;
  }
  function $t(l) {
    var t = [null, null], u = nt(l);
    return u === null || Iu(t, l, u.child, { foundSelf: false }), t;
  }
  function Iu(l, t, u, a) {
    for (; u !== null; ) {
      if (u === t) a.foundSelf = true;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (a.foundSelf) return l[1] = u, true;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && Iu(l, t, u.child, a)) return true;
      u = u.sibling;
    }
    return false;
  }
  function tl(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(S(559));
    }
  }
  var Dt = null, ku = null;
  function Pu(l, t, u) {
    return l === u ? true : l === t ? (Dt = l, true) : false;
  }
  function Ia(l, t, u) {
    return l === u ? (ku = l, false) : l === t ? (ku !== null && (Dt = l), true) : false;
  }
  function Mt(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function Ut(l, t, u) {
    for (var a = 0, e2 = l; e2; e2 = u(e2)) a++;
    e2 = 0;
    for (var n = t; n; n = u(n)) e2++;
    for (; 0 < a - e2; ) l = u(l), a--;
    for (; 0 < e2 - a; ) t = u(t), e2--;
    for (; a--; ) {
      if (l === t || t !== null && l === t.alternate) return l;
      l = u(l), t = u(t);
    }
    return null;
  }
  var Z = Object.assign, We = Symbol.for("react.element"), Du = Symbol.for("react.transitional.element"), Ht = Symbol.for("react.portal"), Yl = Symbol.for("react.fragment"), la = Symbol.for("react.strict_mode"), ta = Symbol.for("react.profiler"), ua = Symbol.for("react.consumer"), b = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), ul = Symbol.for("react.memo"), Gl = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  var Wt = Symbol.for("react.activity"), ka = Symbol.for("react.legacy_hidden");
  Symbol.for("react.tracing_marker");
  var Ct = Symbol.for("react.memo_cache_sentinel"), Ft = Symbol.for("react.view_transition"), Zy = Symbol.for("react.recoverable"), dv = Symbol.iterator;
  function Pa(l) {
    return l === null || typeof l != "object" ? null : (l = dv && l[dv] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Vy = Symbol.for("react.client.reference");
  function Rf(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Vy ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Yl:
        return "Fragment";
      case ta:
        return "Profiler";
      case la:
        return "StrictMode";
      case D:
        return "Suspense";
      case k:
        return "SuspenseList";
      case Wt:
        return "Activity";
      case Ft:
        return "ViewTransition";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case Ht:
        return "Portal";
      case b:
        return l.displayName || "Context";
      case ua:
        return (l._context.displayName || "Context") + ".Consumer";
      case H:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case ul:
        return t = l.displayName || null, t !== null ? t : Rf(l.type) || "Memo";
      case Gl:
        t = l._payload, l = l._init;
        try {
          return Rf(l(t));
        } catch {
        }
    }
    return null;
  }
  var le = Array.isArray, _ = Ol.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Mu = { pending: false, data: null, method: null, action: null }, qf = [], aa = -1;
  function ht(l) {
    return { current: l };
  }
  function gl(l) {
    0 > aa || (l.current = qf[aa], qf[aa] = null, aa--);
  }
  function W(l, t) {
    aa++, qf[aa] = l.current, l.current = t;
  }
  var dt = ht(null), te = ht(null), It = ht(null), Fe = ht(null);
  function Ie(l, t) {
    switch (W(It, t), W(te, l), W(dt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? $1(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = $1(t), l = W1(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    gl(dt), W(dt, l);
  }
  function ea() {
    gl(dt), gl(te), gl(It);
  }
  function Yf(l) {
    var t = l.memoizedState;
    t !== null && (pa._currentValue = t.memoizedState, W(Fe, l)), t = dt.current;
    var u = W1(t, l.type);
    t !== u && (W(te, l), W(dt, u));
  }
  function ke(l) {
    te.current === l && (gl(dt), gl(te)), Fe.current === l && (gl(Fe), pa._currentValue = Mu);
  }
  var Gf, ov;
  function kt(l) {
    if (Gf === void 0) try {
      throw Error();
    } catch (u) {
      var t = u.stack.trim().match(/\n( *(at )?)/);
      Gf = t && t[1] || "", ov = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Gf + l + ov;
  }
  var Qf = false;
  function Xf(l, t) {
    if (!l || Qf) return "";
    Qf = true;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var T = function() {
              throw Error();
            };
            if (Object.defineProperty(T.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(T, []);
              } catch (s) {
                var m = s;
              }
              Reflect.construct(l, [], T);
            } else {
              try {
                T.call();
              } catch (s) {
                m = s;
              }
              T = false;
              try {
                var o = Object.getOwnPropertyDescriptor(l.prototype, "props");
                Object.defineProperty(l.prototype, "props", { configurable: true, set: function() {
                  throw Error();
                } }), T = true, new l();
              } finally {
                T && (o !== void 0 ? Object.defineProperty(l.prototype, "props", o) : delete l.prototype.props);
              }
            }
          } else {
            try {
              throw Error();
            } catch (s) {
              m = s;
            }
            (T = l()) && typeof T.catch == "function" && T.catch(function() {
            });
          }
        } catch (s) {
          if (s && m && typeof s.stack == "string") return [s.stack, m.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e2 = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      e2 && e2.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), h = c.split(`
`);
        for (e2 = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; e2 < h.length && !h[e2].includes("DetermineComponentFrameRoot"); ) e2++;
        if (a === i.length || e2 === h.length) for (a = i.length - 1, e2 = h.length - 1; 1 <= a && 0 <= e2 && i[a] !== h[e2]; ) e2--;
        for (; 1 <= a && 0 <= e2; a--, e2--) if (i[a] !== h[e2]) {
          if (a !== 1 || e2 !== 1) do
            if (a--, e2--, 0 > e2 || i[a] !== h[e2]) {
              var g = `
` + i[a].replace(" at new ", " at ");
              return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
            }
          while (1 <= a && 0 <= e2);
          break;
        }
      }
    } finally {
      Qf = false, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? kt(u) : "";
  }
  function Ky(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return kt(l.type);
      case 16:
        return kt("Lazy");
      case 13:
        return l.child !== t && t !== null ? kt("Suspense Fallback") : kt("Suspense");
      case 19:
        return kt("SuspenseList");
      case 0:
      case 15:
        return Xf(l.type, false);
      case 11:
        return Xf(l.type.render, false);
      case 1:
        return Xf(l.type, true);
      case 31:
        return kt("Activity");
      case 30:
        return kt("ViewTransition");
      default:
        return "";
    }
  }
  function gv(l) {
    try {
      var t = "", u = null;
      do
        t += Ky(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var jf = Object.prototype.hasOwnProperty, Zf = w.unstable_scheduleCallback, Vf = w.unstable_cancelCallback, xy = w.unstable_shouldYield, Ly = w.unstable_requestPaint, Ql = w.unstable_now, Jy = w.unstable_getCurrentPriorityLevel, Sv = w.unstable_ImmediatePriority, zv = w.unstable_UserBlockingPriority, Pe = w.unstable_NormalPriority, py = w.unstable_LowPriority, Tv = w.unstable_IdlePriority, wy = w.log, $y = w.unstable_setDisableYieldValue, ue = null, Xl = null;
  function Pt(l) {
    if (typeof wy == "function" && $y(l), Xl && typeof Xl.setStrictMode == "function") try {
      Xl.setStrictMode(ue, l);
    } catch {
    }
  }
  var jl = Math.clz32 ? Math.clz32 : Iy, Wy = Math.log, Fy = Math.LN2;
  function Iy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Wy(l) / Fy | 0) | 0;
  }
  var ln = 256, tn = 262144, un = 4194304;
  function Uu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function an(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e2 = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e2 = Uu(a) : (f &= c, f !== 0 ? e2 = Uu(f) : u || (u = c & ~l, u !== 0 && (e2 = Uu(u))))) : (c = a & ~n, c !== 0 ? e2 = Uu(c) : f !== 0 ? e2 = Uu(f) : u || (u = a & ~l, u !== 0 && (e2 = Uu(u)))), e2 === 0 ? 0 : t !== 0 && t !== e2 && (t & n) === 0 && (n = e2 & -e2, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e2;
  }
  function ae(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function sv(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0) for (l = l.entanglements, u &= t; 0 < u; ) {
      var a = 31 - jl(u), e2 = 1 << a;
      t |= l[a], u &= ~e2;
    }
    return t;
  }
  function ky(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bv() {
    var l = un;
    return un <<= 1, (un & 62914560) === 0 && (un = 4194304), l;
  }
  function Kf(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function ee(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Py(l, t, u, a, e2, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - jl(u), T = 1 << g;
      c[g] = 0, i[g] = -1;
      var m = h[g];
      if (m !== null) for (h[g] = null, g = 0; g < m.length; g++) {
        var o = m[g];
        o !== null && (o.lane &= -536870913);
      }
      u &= ~T;
    }
    a !== 0 && Ev(l, a, 0), n !== 0 && e2 === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Ev(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - jl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Ov(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - jl(u), e2 = 1 << a;
      e2 & t | l[a] & t && (l[a] |= t), u &= ~e2;
    }
  }
  function Nv(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : xf(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function xf(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Lf(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Av() {
    var l = X.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ry(l.type));
  }
  function _v(l, t) {
    var u = X.p;
    try {
      return X.p = l, t();
    } finally {
      X.p = u;
    }
  }
  var rt = Math.random().toString(36).slice(2), Sl = "__reactFiber$" + rt, Hl = "__reactProps$" + rt, na = "__reactContainer$" + rt, Dv = "__reactEvents$" + rt, lh = "__reactListeners$" + rt, th = "__reactHandles$" + rt, Mv = "__reactResources$" + rt, ne = "__reactMarker$" + rt, en = "__reactLoad$" + rt;
  function nn(l) {
    delete l[Sl], delete l[Hl], delete l[lh], delete l[th];
  }
  function Hu(l) {
    var t;
    if (t = l[Sl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[na] || u[Sl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null) for (l = dy(l); l !== null; ) {
          if (u = l[Sl]) return u;
          l = dy(l);
        }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function fa(l) {
    if (l = l[Sl] || l[na]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function fe(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(S(33));
  }
  function ca(l) {
    var t = l[Mv];
    return t || (t = l[Mv] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function yl(l) {
    l[ne] = true;
  }
  function Uv(l) {
    l[en] = void 0;
  }
  var Hv = /* @__PURE__ */ new Set(), Cv = {};
  function Cu(l, t) {
    ia(l, t), ia(l + "Capture", t);
  }
  function ia(l, t) {
    for (Cv[l] = t, l = 0; l < t.length; l++) Hv.add(t[l]);
  }
  var uh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rv = {}, Bv = {};
  function ah(l) {
    return jf.call(Bv, l) ? true : jf.call(rv, l) ? false : uh.test(l) ? Bv[l] = true : (rv[l] = true, false);
  }
  var G = false;
  function Rv() {
    var l = G;
    return G = false, l;
  }
  function fn(l, t, u) {
    if (ah(t)) if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, u);
    }
  }
  function cn(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, u);
    }
  }
  function Bt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, a);
    }
  }
  function Zl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function qv(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function eh(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e2 = a.get, n = a.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return e2.call(this);
      }, set: function(f) {
        u = "" + f, n.call(this, f);
      } }), Object.defineProperty(l, t, { enumerable: a.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(f) {
        u = "" + f;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function Jf(l) {
    if (!l._valueTracker) {
      var t = qv(l) ? "checked" : "value";
      l._valueTracker = eh(l, t, "" + l[t]);
    }
  }
  function Yv(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var u = t.getValue(), a = "";
    return l && (a = qv(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), true) : false;
  }
  var nh = /[\n"\\]/g;
  function Wl(l) {
    return l.replace(nh, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function pf(l, t, u, a, e2, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Zl(t)) : l.value !== "" + Zl(t) && (l.value = "" + Zl(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? wf(l, Zl(l.value)) : wf(l, Zl(t)) : u != null ? wf(l, Zl(u)) : a != null && l.removeAttribute("value"), e2 == null && n != null && (l.defaultChecked = !!n), e2 != null && (l.checked = e2 && typeof e2 != "function" && typeof e2 != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Zl(c) : l.removeAttribute("name");
  }
  function Gv(l, t, u, a, e2, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Jf(l);
        return;
      }
      u = u != null ? "" + Zl(u) : "", t = t != null ? "" + Zl(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e2, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), Jf(l);
  }
  function wf(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function va(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e2 = 0; e2 < u.length; e2++) t["$" + u[e2]] = true;
      for (u = 0; u < l.length; u++) e2 = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e2 && (l[u].selected = e2), e2 && a && (l[u].defaultSelected = true);
    } else {
      for (u = "" + Zl(u), t = null, e2 = 0; e2 < l.length; e2++) {
        if (l[e2].value === u) {
          l[e2].selected = true, a && (l[e2].defaultSelected = true);
          return;
        }
        t !== null || l[e2].disabled || (t = l[e2]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Qv(l, t, u) {
    if (t != null && (t = "" + Zl(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + Zl(u) : "";
  }
  function Xv(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(S(92));
        if (le(a)) {
          if (1 < a.length) throw Error(S(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = Zl(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), Jf(l);
  }
  function ma(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var fh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function jv(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || fh.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Zv(l, t, u) {
    if (t != null && typeof t != "object") throw Error(S(62));
    if (l = l.style, u != null) {
      for (var a in u) !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", G = true);
      for (var e2 in t) a = t[e2], t.hasOwnProperty(e2) && u[e2] !== a && (jv(l, e2, a), G = true);
    } else for (var n in t) t.hasOwnProperty(n) && jv(l, n, t[n]);
  }
  function $f(l) {
    if (l.indexOf("-") === -1) return false;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var ch = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["maskType", "mask-type"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), ih = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vn(l) {
    return ih.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function ot() {
  }
  var Wf = null;
  function Ff(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ya = null, ha = null;
  function Vv(l) {
    var t = fa(l);
    if (t && (l = t.stateNode)) {
      var u = l[Hl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (pf(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll('input[name="' + Wl("" + t) + '"][type="radio"]'), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e2 = a[Hl] || null;
                if (!e2) throw Error(S(90));
                pf(a, e2.value, e2.defaultValue, e2.defaultValue, e2.checked, e2.defaultChecked, e2.type, e2.name);
              }
            }
            for (t = 0; t < u.length; t++) a = u[t], a.form === l.form && Yv(a);
          }
          break l;
        case "textarea":
          Qv(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && va(l, !!u.multiple, t, false);
      }
    }
  }
  var If = false;
  function Kv(l, t, u) {
    if (If) return l(t, u);
    If = true;
    try {
      var a = l(t);
      return a;
    } finally {
      if (If = false, (ya !== null || ha !== null) && (yf(), ya && (t = ya, l = ha, ha = ya = null, Vv(t), l))) for (t = 0; t < l.length; t++) Vv(l[t]);
    }
  }
  function ce(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Hl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = false;
    }
    if (l) return null;
    if (u && typeof u != "function") throw Error(S(231, t, typeof u));
    return u;
  }
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kf = false;
  if (Rt) try {
    da = {}, Object.defineProperty(da, "passive", { get: function() {
      kf = true;
    } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
  } catch {
    kf = false;
  }
  var da, lu = null, Pf = null, mn = null;
  function xv() {
    if (mn) return mn;
    var l, t = Pf, u = t.length, a, e2 = "value" in lu ? lu.value : lu.textContent, n = e2.length;
    for (l = 0; l < u && t[l] === e2[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e2[n - a]; a++) ;
    return mn = e2.slice(l, 1 < a ? 1 - a : void 0);
  }
  function yn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function hn() {
    return true;
  }
  function Lv() {
    return false;
  }
  function _l(l) {
    function t(u, a, e2, n, f) {
      this._reactName = u, this._targetInst = e2, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? hn : Lv, this.isPropagationStopped = Lv, this;
    }
    return Z(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = false), this.isDefaultPrevented = hn);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = true), this.isPropagationStopped = hn);
    }, persist: function() {
    }, isPersistent: hn }), t;
  }
  var tu = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, dn = _l(tu), ie = Z({}, tu, { view: 0, detail: 0 }), vh = _l(ie), lc, tc, ve, on = Z({}, ie, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ac, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== ve && (ve && l.type === "mousemove" ? (lc = l.screenX - ve.screenX, tc = l.screenY - ve.screenY) : tc = lc = 0, ve = l), lc);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : tc;
  } }), Jv = _l(on), mh = Z({}, on, { dataTransfer: 0 }), yh = _l(mh), hh = Z({}, ie, { relatedTarget: 0 }), uc = _l(hh), dh = Z({}, tu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oh = _l(dh), gh = Z({}, tu, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), Sh = _l(gh), zh = Z({}, tu, { data: 0 }), pv = _l(zh), Th = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, sh = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, bh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Eh(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = bh[l]) ? !!t[l] : false;
  }
  function ac() {
    return Eh;
  }
  var Oh = Z({}, ie, { key: function(l) {
    if (l.key) {
      var t = Th[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = yn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? sh[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ac, charCode: function(l) {
    return l.type === "keypress" ? yn(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? yn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), Nh = _l(Oh), Ah = Z({}, on, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wv = _l(Ah), _h = Z({}, tu, { submitter: 0 }), Dh = _l(_h), Mh = Z({}, ie, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ac }), Uh = _l(Mh), Hh = Z({}, tu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ch = _l(Hh), rh = Z({}, on, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Bh = _l(rh), Rh = Z({}, tu, { newState: 0, oldState: 0, source: 0 }), qh = _l(Rh), Yh = [9, 13, 27, 32], ec = Rt && "CompositionEvent" in window, me = null;
  Rt && "documentMode" in document && (me = document.documentMode);
  var Gh = Rt && "TextEvent" in window && !me, $v = Rt && (!ec || me && 8 < me && 11 >= me), Wv = " ", Fv = false;
  function Iv(l, t) {
    switch (l) {
      case "keyup":
        return Yh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function kv(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var oa = false;
  function Qh(l, t) {
    switch (l) {
      case "compositionend":
        return kv(t);
      case "keypress":
        return t.which !== 32 ? null : (Fv = true, Wv);
      case "textInput":
        return l = t.data, l === Wv && Fv ? null : l;
      default:
        return null;
    }
  }
  function Xh(l, t) {
    if (oa) return l === "compositionend" || !ec && Iv(l, t) ? (l = xv(), mn = Pf = lu = null, oa = false, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return $v && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var jh = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Pv(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!jh[l.type] : t === "textarea";
  }
  function l0(l, t, u, a) {
    ya ? ha ? ha.push(a) : ha = [a] : ya = a, t = sf(t, "onChange"), 0 < t.length && (u = new dn("onChange", "change", null, u, a), l.push({ event: u, listeners: t }));
  }
  var ye = null, he = null;
  function Zh(l) {
    K1(l, 0);
  }
  function gn(l) {
    var t = fe(l);
    if (Yv(t)) return l;
  }
  function t0(l, t) {
    if (l === "change") return t;
  }
  var u0 = false;
  Rt && (Rt ? (Sn = "oninput" in document, Sn || (fc = document.createElement("div"), fc.setAttribute("oninput", "return;"), Sn = typeof fc.oninput == "function"), nc = Sn) : nc = false, u0 = nc && (!document.documentMode || 9 < document.documentMode));
  var nc, Sn, fc;
  function a0() {
    ye && (ye.detachEvent("onpropertychange", e0), he = ye = null);
  }
  function e0(l) {
    if (l.propertyName === "value" && gn(he)) {
      var t = [];
      l0(t, he, l, Ff(l)), Kv(Zh, t);
    }
  }
  function Vh(l, t, u) {
    l === "focusin" ? (a0(), ye = t, he = u, ye.attachEvent("onpropertychange", e0)) : l === "focusout" && a0();
  }
  function Kh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return gn(he);
  }
  function xh(l, t) {
    if (l === "click") return gn(t);
  }
  function Lh(l, t) {
    if (l === "input" || l === "change") return gn(t);
  }
  function Jh(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Vl = typeof Object.is == "function" ? Object.is : Jh;
  function de(l, t) {
    if (Vl(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return false;
    for (a = 0; a < u.length; a++) {
      var e2 = u[a];
      if (!jf.call(t, e2) || !Vl(l[e2], t[e2])) return false;
    }
    return true;
  }
  function cc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function n0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function f0(l, t) {
    var u = n0(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t) return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = n0(u);
    }
  }
  function c0(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? c0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function i0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = cc(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = false;
      }
      if (u) l = t.contentWindow;
      else break;
      t = cc(l.document);
    }
    return t;
  }
  function ic(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var ph = Rt && "documentMode" in document && 11 >= document.documentMode, ga = null, vc = null, oe = null, mc = false;
  function v0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    mc || ga == null || ga !== cc(a) || (a = ga, "selectionStart" in a && ic(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), oe && de(oe, a) || (oe = a, a = sf(vc, "onSelect"), 0 < a.length && (t = new dn("onSelect", "select", null, t, u), l.push({ event: t, listeners: a }), t.target = ga)));
  }
  function ru(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Sa = { animationend: ru("Animation", "AnimationEnd"), animationiteration: ru("Animation", "AnimationIteration"), animationstart: ru("Animation", "AnimationStart"), transitionrun: ru("Transition", "TransitionRun"), transitionstart: ru("Transition", "TransitionStart"), transitioncancel: ru("Transition", "TransitionCancel"), transitionend: ru("Transition", "TransitionEnd") }, yc = {}, m0 = {};
  Rt && (m0 = document.createElement("div").style, "AnimationEvent" in window || (delete Sa.animationend.animation, delete Sa.animationiteration.animation, delete Sa.animationstart.animation), "TransitionEvent" in window || delete Sa.transitionend.transition);
  function Bu(l) {
    if (yc[l]) return yc[l];
    if (!Sa[l]) return l;
    var t = Sa[l], u;
    for (u in t) if (t.hasOwnProperty(u) && u in m0) return yc[l] = t[u];
    return l;
  }
  var y0 = Bu("animationend"), h0 = Bu("animationiteration"), d0 = Bu("animationstart"), wh = Bu("transitionrun"), $h = Bu("transitionstart"), Wh = Bu("transitioncancel"), o0 = Bu("transitionend"), g0 = /* @__PURE__ */ new Map(), hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  hc.push("scrollEnd");
  function ft(l, t) {
    g0.set(l, t), Cu(t, [l]);
  }
  var Fh = 0;
  function qt(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = mt.identifierPrefix;
    var u = Fh++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function S0(l) {
    if (l == null || typeof l == "string") return l;
    var t = null, u = Ga;
    if (u !== null) for (var a = 0; a < u.length; a++) {
      var e2 = l[u[a]];
      if (e2 != null) {
        if (e2 === "none") return "none";
        t = t == null ? e2 : t + (" " + e2);
      }
    }
    return t ?? l.default;
  }
  function Yt(l, t) {
    return l = S0(l), t = S0(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var zn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Fl = [], za = 0, dc = 0;
  function Tn() {
    for (var l = za, t = dc = za = 0; t < l; ) {
      var u = Fl[t];
      Fl[t++] = null;
      var a = Fl[t];
      Fl[t++] = null;
      var e2 = Fl[t];
      Fl[t++] = null;
      var n = Fl[t];
      if (Fl[t++] = null, a !== null && e2 !== null) {
        var f = a.pending;
        f === null ? e2.next = e2 : (e2.next = f.next, f.next = e2), a.pending = e2;
      }
      n !== 0 && z0(u, e2, n);
    }
  }
  function sn(l, t, u, a) {
    Fl[za++] = l, Fl[za++] = t, Fl[za++] = u, Fl[za++] = a, dc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function oc(l, t, u, a) {
    return sn(l, t, u, a), bn(l);
  }
  function Ru(l, t) {
    return sn(l, null, null, t), bn(l);
  }
  function z0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e2 = false, n = l.return; n !== null; ) n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e2 = true)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e2 && t !== null && (e2 = 31 - jl(u), l = n.hiddenUpdates, a = l[e2], a === null ? l[e2] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function bn(l) {
    if (50 < Ge) throw Ge = 0, mf = null, Error(S(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ta = {};
  function Ih(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Cl(l, t, u, a) {
    return new Ih(l, t, u, a);
  }
  function gc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Gt(l, t) {
    var u = l.alternate;
    return u === null ? (u = Cl(l.tag, t, l.key, l.mode), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 1206910976, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function T0(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function En(l, t, u, a, e2, n) {
    var f = 0;
    if (a = l, typeof a == "function") gc(a) && (f = 1);
    else if (typeof a == "string") f = Ao(l, u, dt.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (a) {
      case Wt:
        return l = Cl(31, u, t, e2), l.elementType = Wt, l.lanes = n, l;
      case Yl:
        return qu(u.children, e2, n, t);
      case la:
        f = 8, e2 |= 24;
        break;
      case ta:
        return l = Cl(12, u, t, e2 | 2), l.elementType = ta, l.lanes = n, l;
      case D:
        return l = Cl(13, u, t, e2), l.elementType = D, l.lanes = n, l;
      case k:
        return l = Cl(19, u, t, e2), l.elementType = k, l.lanes = n, l;
      case ka:
      case Ft:
        return l = e2 | 32, l = Cl(30, u, t, l), l.elementType = Ft, l.lanes = n, l.stateNode = { autoName: null, paired: null, clones: null, ref: null }, l;
      default:
        if (typeof a == "object" && a !== null) switch (a.$$typeof) {
          case b:
            f = 10;
            break l;
          case ua:
            f = 9;
            break l;
          case H:
            f = 11;
            break l;
          case ul:
            f = 14;
            break l;
          case Gl:
            f = 16, a = null;
            break l;
        }
        f = 29, u = Error(S(130, l === null ? "null" : typeof l, "")), a = null;
    }
    return t = Cl(f, u, t, e2), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function qu(l, t, u, a) {
    return l = Cl(7, l, a, t), l.lanes = u, l;
  }
  function Sc(l, t, u) {
    return l = Cl(6, l, null, t), l.lanes = u, l;
  }
  function s0(l) {
    var t = Cl(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function zc(l, t, u) {
    return t = Cl(4, l.children !== null ? l.children : [], l.key, t), t.lanes = u, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var b0 = /* @__PURE__ */ new WeakMap();
  function Il(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = b0.get(l);
      return u !== void 0 ? u : (t = { value: l, source: t, stack: gv(t) }, b0.set(l, t), t);
    }
    return { value: l, source: t, stack: gv(t) };
  }
  var sa = [], ba = 0, On = null, ge = 0, kl = [], Pl = 0, uu = null, gt = 1, St = "";
  function Qt(l, t) {
    sa[ba++] = ge, sa[ba++] = On, On = l, ge = t;
  }
  function E0(l, t, u) {
    kl[Pl++] = gt, kl[Pl++] = St, kl[Pl++] = uu, uu = l;
    var a = gt;
    l = St;
    var e2 = 32 - jl(a) - 1;
    a &= ~(1 << e2), u += 1;
    var n = 32 - jl(t) + e2;
    if (30 < n) {
      var f = e2 - e2 % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e2 -= f, gt = 1 << 32 - jl(t) + e2 | u << e2 | a, St = n + l;
    } else gt = 1 << n | u << e2 | a, St = l;
  }
  function Nn(l) {
    l.return !== null && (Qt(l, 1), E0(l, 1, 0));
  }
  function Tc(l) {
    for (; l === On; ) On = sa[--ba], sa[ba] = null, ge = sa[--ba], sa[ba] = null;
    for (; l === uu; ) uu = kl[--Pl], kl[Pl] = null, St = kl[--Pl], kl[Pl] = null, gt = kl[--Pl], kl[Pl] = null;
  }
  function O0(l, t) {
    kl[Pl++] = gt, kl[Pl++] = St, kl[Pl++] = uu, gt = t.id, St = t.overflow, uu = l;
  }
  var hl = null, F2 = null, C = false, au = null, lt = false, sc = Error(S(519));
  function eu(l) {
    var t = Error(S(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Se(Il(t, l)), sc;
  }
  function N0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Sl] = l, t[Hl] = a, u) {
      case "dialog":
        B("cancel", t), B("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        B("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Xe.length; u++) B(Xe[u], t);
        break;
      case "source":
        B("error", t);
        break;
      case "img":
      case "image":
      case "link":
        B("error", t), B("load", t);
        break;
      case "details":
        B("toggle", t);
        break;
      case "input":
        B("invalid", t), Gv(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        B("invalid", t);
        break;
      case "textarea":
        B("invalid", t), Xv(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === true || p1(t.textContent, u) ? (a.popover != null && (B("beforetoggle", t), B("toggle", t)), a.onScroll != null && B("scroll", t), a.onScrollEnd != null && B("scrollend", t), a.onClick != null && (t.onclick = ot), t = true) : t = false, t || eu(l, true);
  }
  function An(l) {
    for (hl = l.return; hl; ) switch (hl.tag) {
      case 5:
      case 31:
      case 13:
        lt = false;
        return;
      case 27:
      case 3:
        lt = true;
        return;
      default:
        hl = hl.return;
    }
  }
  function Ea(l) {
    if (l !== hl) return false;
    if (!C) return An(l), C = true, false;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || wi(l.type, l.memoizedProps)), u = !u), u && F2 && eu(l), An(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      F2 = hy(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      F2 = hy(l);
    } else t === 27 ? (t = F2, bu(l.type) ? (l = uv, uv = null, F2 = l) : F2 = t) : F2 = hl ? ut(l.stateNode.nextSibling) : null;
    return true;
  }
  function Yu() {
    F2 = hl = null, C = false;
  }
  function bc() {
    var l = au;
    return l !== null && (Rl === null ? Rl = l : Rl.push.apply(Rl, l), au = null), l;
  }
  function Se(l) {
    au === null ? au = [l] : au.push(l);
  }
  var Ec = ht(null), Gu = null, Xt = null;
  function nu(l, t, u) {
    W(Ec, t._currentValue), t._currentValue = u;
  }
  function jt(l) {
    l._currentValue = Ec.current, gl(Ec);
  }
  function _n(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Oc(l, t, u, a) {
    var e2 = l.child;
    for (e2 !== null && (e2.return = l); e2 !== null; ) {
      var n = e2.dependencies;
      if (n !== null) {
        var f = e2.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e2;
          for (var i = 0; i < t.length; i++) if (c.context === t[i]) {
            n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), _n(n.return, u, l), a || (f = null);
            break l;
          }
          n = c.next;
        }
      } else if (e2.tag === 18) {
        if (f = e2.return, f === null) throw Error(S(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), _n(f, u, l), f = null;
      } else e2.tag === 13 && e2.memoizedState !== null && e2.memoizedState.dehydrated === null ? (e2.lanes |= u, f = e2.alternate, f !== null && (f.lanes |= u), _n(e2.return, u, l), f = e2.child, f = f !== null ? f.sibling : null) : f = e2.child;
      if (f !== null) f.return = e2;
      else for (f = e2; f !== null; ) {
        if (f === l) {
          f = null;
          break;
        }
        if (e2 = f.sibling, e2 !== null) {
          e2.return = f.return, f = e2;
          break;
        }
        f = f.return;
      }
      e2 = f;
    }
  }
  function Qu(l, t, u, a) {
    l = null;
    for (var e2 = t, n = false; e2 !== null; ) {
      if (!n) {
        if ((e2.flags & 524288) !== 0) n = true;
        else if ((e2.flags & 262144) !== 0) break;
      }
      if (e2.tag === 10) {
        var f = e2.alternate;
        if (f === null) throw Error(S(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e2.type;
          Vl(e2.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e2 === Fe.current) {
        if (f = e2.alternate, f === null) throw Error(S(387));
        f.memoizedState.memoizedState !== e2.memoizedState.memoizedState && (l !== null ? l.push(pa) : l = [pa]);
      }
      e2 = e2.return;
    }
    return l !== null && Oc(t, l, u, a), t.flags |= 262144, l !== null;
  }
  function Dn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Vl(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function Xu(l) {
    Gu = l, Xt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function zl(l) {
    return A0(Gu, l);
  }
  function Mn(l, t) {
    return Gu === null && Xu(l), A0(l, t);
  }
  function A0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Xt === null) {
      if (l === null) throw Error(S(308));
      Xt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Xt = Xt.next = t;
    return u;
  }
  var kh = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(u, a) {
      l.push(a);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(u) {
        return u();
      });
    };
  }, Ph = w.unstable_scheduleCallback, ld = w.unstable_NormalPriority, fl = { $$typeof: b, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Nc() {
    return { controller: new kh(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function ze(l) {
    l.refCount--, l.refCount === 0 && Ph(ld, function() {
      l.controller.abort();
    });
  }
  function _0(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var Te = null;
  function td(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var se = null, Ac = 0, ju = 0, Oa = null;
  function ud(l, t) {
    if (se === null) {
      var u = se = [];
      Ac = 0, ju = Zi(), Oa = { status: "pending", value: void 0, then: function(a) {
        u.push(a);
      } };
    }
    return Ac++, t.then(D0, D0), t;
  }
  function D0() {
    if (--Ac === 0 && (Te = null, se !== null)) {
      Oa !== null && (Oa.status = "fulfilled");
      var l = se;
      se = null, ju = 0, Oa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function ad(l, t) {
    var u = [], a = { status: "pending", value: null, reason: null, then: function(e2) {
      u.push(e2);
    } };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var e2 = 0; e2 < u.length; e2++) (0, u[e2])(t);
    }, function(e2) {
      for (a.status = "rejected", a.reason = e2, e2 = 0; e2 < u.length; e2++) (0, u[e2])(void 0);
    }), a;
  }
  var M0 = _.S;
  _.S = function(l, t) {
    if (s1 = Ql(), typeof t == "object" && t !== null && typeof t.then == "function" && ud(l, t), Te !== null) for (var u = Za; u !== null; ) _0(u, Te), u = u.next;
    if (u = l.types, u !== null) {
      for (var a = Za; a !== null; ) _0(a, u), a = a.next;
      if (ju !== 0) {
        a = Te, a === null && (a = Te = []);
        for (var e2 = 0; e2 < u.length; e2++) {
          var n = u[e2];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    M0 !== null && M0(l, t);
  };
  var Zu = ht(null);
  function _c() {
    var l = Zu.current;
    return l !== null ? l : $.pooledCache;
  }
  function Un(l, t) {
    t === null ? W(Zu, Zu.current) : W(Zu, t.pool);
  }
  function U0() {
    var l = _c();
    return l === null ? null : { parent: fl._currentValue, pool: l };
  }
  var Na = Error(S(460)), Dc = Error(S(474)), Hn = Error(S(542)), Cn = { then: function() {
  } };
  function H0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function C0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(ot, ot), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, B0(l), l === void 0 && !("reason" in t) ? Error(S(600)) : l;
      default:
        if (typeof t.status == "string") t.then(ot, ot);
        else {
          if (l = $, l !== null && 100 < l.shellSuspendCounter) throw Error(S(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var e2 = t;
              e2.status = "fulfilled", e2.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var e2 = t;
              e2.status = "rejected", e2.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, B0(l), l;
        }
        throw Ku = t, Na;
    }
  }
  function Vu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ku = u, Na) : u;
    }
  }
  var Ku = null;
  function r0() {
    if (Ku === null) throw Error(S(459));
    var l = Ku;
    return Ku = null, l;
  }
  function B0(l) {
    if (l === Na || l === Hn) throw Error(S(483));
  }
  var Aa = null, be = 0;
  function rn(l) {
    var t = be;
    return be += 1, Aa === null && (Aa = []), C0(Aa, l, t);
  }
  function fu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Bn(l, t) {
    throw t.$$typeof === We ? Error(S(525)) : (l = Object.prototype.toString.call(t), Error(S(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function R0(l) {
    function t(y, v) {
      if (l) {
        var d2 = y.deletions;
        d2 === null ? (y.deletions = [v], y.flags |= 16) : d2.push(v);
      }
    }
    function u(y, v) {
      if (!l) return null;
      for (; v !== null; ) t(y, v), v = v.sibling;
      return null;
    }
    function a(y) {
      for (var v = /* @__PURE__ */ new Map(); y !== null; ) y.key === null ? v.set(y.index, y) : v.set(y.key, y), y = y.sibling;
      return v;
    }
    function e2(y, v) {
      return y = Gt(y, v), y.index = 0, y.sibling = null, y;
    }
    function n(y, v, d2) {
      return y.index = d2, l ? (d2 = y.alternate, d2 !== null ? (d2 = d2.index, d2 < v ? (y.flags |= 2, v) : d2) : (y.flags |= 134217730, v)) : (y.flags |= 1048576, v);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 134217730), y;
    }
    function c(y, v, d2, z) {
      return v === null || v.tag !== 6 ? (v = Sc(d2, y.mode, z), v.return = y, v) : (v = e2(v, d2), v.return = y, v);
    }
    function i(y, v, d2, z) {
      var E2 = d2.type;
      return E2 === Yl ? (y = g(y, v, d2.props.children, z, d2.key), fu(y, d2), y) : v !== null && (v.elementType === E2 || typeof E2 == "object" && E2 !== null && E2.$$typeof === Gl && Vu(E2) === v.type) ? (v = e2(v, d2.props), fu(v, d2), v.return = y, v) : (v = En(d2.type, d2.key, d2.props, null, y.mode, z), fu(v, d2), v.return = y, v);
    }
    function h(y, v, d2, z) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== d2.containerInfo || v.stateNode.implementation !== d2.implementation ? (v = zc(d2, y.mode, z), v.return = y, v) : (v = e2(v, d2.children || []), v.return = y, v);
    }
    function g(y, v, d2, z, E2) {
      return v === null || v.tag !== 7 ? (v = qu(d2, y.mode, z, E2), v.return = y, v) : (v = e2(v, d2), v.return = y, v);
    }
    function T(y, v, d2) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return v = Sc("" + v, y.mode, d2), v.return = y, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Du:
            return d2 = En(v.type, v.key, v.props, null, y.mode, d2), fu(d2, v), d2.return = y, d2;
          case Ht:
            return v = zc(v, y.mode, d2), v.return = y, v;
          case Gl:
            return v = Vu(v), T(y, v, d2);
        }
        if (le(v) || Pa(v)) return v = qu(v, y.mode, d2, null), v.return = y, v;
        if (typeof v.then == "function") return T(y, rn(v), d2);
        if (v.$$typeof === b) return T(y, Mn(y, v), d2);
        Bn(y, v);
      }
      return null;
    }
    function m(y, v, d2, z) {
      var E2 = v !== null ? v.key : null;
      if (typeof d2 == "string" && d2 !== "" || typeof d2 == "number" || typeof d2 == "bigint") return E2 !== null ? null : c(y, v, "" + d2, z);
      if (typeof d2 == "object" && d2 !== null) {
        switch (d2.$$typeof) {
          case Du:
            return d2.key === E2 ? i(y, v, d2, z) : null;
          case Ht:
            return d2.key === E2 ? h(y, v, d2, z) : null;
          case Gl:
            return d2 = Vu(d2), m(y, v, d2, z);
        }
        if (le(d2) || Pa(d2)) return E2 !== null ? null : g(y, v, d2, z, null);
        if (typeof d2.then == "function") return m(y, v, rn(d2), z);
        if (d2.$$typeof === b) return m(y, v, Mn(y, d2), z);
        Bn(y, d2);
      }
      return null;
    }
    function o(y, v, d2, z, E2) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return y = y.get(d2) || null, c(v, y, "" + z, E2);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Du:
            return y = y.get(z.key === null ? d2 : z.key) || null, i(v, y, z, E2);
          case Ht:
            return y = y.get(z.key === null ? d2 : z.key) || null, h(v, y, z, E2);
          case Gl:
            return z = Vu(z), o(y, v, d2, z, E2);
        }
        if (le(z) || Pa(z)) return y = y.get(d2) || null, g(v, y, z, E2, null);
        if (typeof z.then == "function") return o(y, v, d2, rn(z), E2);
        if (z.$$typeof === b) return o(y, v, d2, Mn(v, z), E2);
        Bn(v, z);
      }
      return null;
    }
    function s(y, v, d2, z) {
      for (var E2 = null, q = null, N = v, A = v = 0, vl = null; N !== null && A < d2.length; A++) {
        N.index > A ? (vl = N, N = null) : vl = N.sibling;
        var Y = m(y, N, d2[A], z);
        if (Y === null) {
          N === null && (N = vl);
          break;
        }
        l && N && Y.alternate === null && t(y, N), v = n(Y, v, A), q === null ? E2 = Y : q.sibling = Y, q = Y, N = vl;
      }
      if (A === d2.length) return u(y, N), C && Qt(y, A), E2;
      if (N === null) {
        for (; A < d2.length; A++) N = T(y, d2[A], z), N !== null && (v = n(N, v, A), q === null ? E2 = N : q.sibling = N, q = N);
        return C && Qt(y, A), E2;
      }
      for (N = a(N); A < d2.length; A++) vl = o(N, y, A, d2[A], z), vl !== null && (l && (Y = vl.alternate, Y !== null && N.delete(Y.key === null ? A : Y.key)), v = n(vl, v, A), q === null ? E2 = vl : q.sibling = vl, q = vl);
      return l && N.forEach(function(_u) {
        return t(y, _u);
      }), C && Qt(y, A), E2;
    }
    function O2(y, v, d2, z) {
      if (d2 == null) throw Error(S(151));
      for (var E2 = null, q = null, N = v, A = v = 0, vl = null, Y = d2.next(); N !== null && !Y.done; A++, Y = d2.next()) {
        N.index > A ? (vl = N, N = null) : vl = N.sibling;
        var _u = m(y, N, Y.value, z);
        if (_u === null) {
          N === null && (N = vl);
          break;
        }
        l && N && _u.alternate === null && t(y, N), v = n(_u, v, A), q === null ? E2 = _u : q.sibling = _u, q = _u, N = vl;
      }
      if (Y.done) return u(y, N), C && Qt(y, A), E2;
      if (N === null) {
        for (; !Y.done; A++, Y = d2.next()) Y = T(y, Y.value, z), Y !== null && (v = n(Y, v, A), q === null ? E2 = Y : q.sibling = Y, q = Y);
        return C && Qt(y, A), E2;
      }
      for (N = a(N); !Y.done; A++, Y = d2.next()) Y = o(N, y, A, Y.value, z), Y !== null && (l && (vl = Y.alternate, vl !== null && N.delete(vl.key === null ? A : vl.key)), v = n(Y, v, A), q === null ? E2 = Y : q.sibling = Y, q = Y);
      return l && N.forEach(function(Go) {
        return t(y, Go);
      }), C && Qt(y, A), E2;
    }
    function U(y, v, d2, z) {
      if (typeof d2 == "object" && d2 !== null && d2.type === Yl && d2.key === null && d2.props.ref === void 0 && (d2 = d2.props.children), typeof d2 == "object" && d2 !== null) {
        switch (d2.$$typeof) {
          case Du:
            l: {
              for (var E2 = d2.key; v !== null; ) {
                if (v.key === E2) {
                  if (E2 = d2.type, E2 === Yl) {
                    if (v.tag === 7) {
                      u(y, v.sibling), z = e2(v, d2.props.children), fu(z, d2), z.return = y, y = z;
                      break l;
                    }
                  } else if (v.elementType === E2 || typeof E2 == "object" && E2 !== null && E2.$$typeof === Gl && Vu(E2) === v.type) {
                    u(y, v.sibling), z = e2(v, d2.props), fu(z, d2), z.return = y, y = z;
                    break l;
                  }
                  u(y, v);
                  break;
                } else t(y, v);
                v = v.sibling;
              }
              d2.type === Yl ? (z = qu(d2.props.children, y.mode, z, d2.key), fu(z, d2), z.return = y, y = z) : (z = En(d2.type, d2.key, d2.props, null, y.mode, z), fu(z, d2), z.return = y, y = z);
            }
            return f(y);
          case Ht:
            l: {
              for (E2 = d2.key; v !== null; ) {
                if (v.key === E2) if (v.tag === 4 && v.stateNode.containerInfo === d2.containerInfo && v.stateNode.implementation === d2.implementation) {
                  u(y, v.sibling), z = e2(v, d2.children || []), z.return = y, y = z;
                  break l;
                } else {
                  u(y, v);
                  break;
                }
                else t(y, v);
                v = v.sibling;
              }
              z = zc(d2, y.mode, z), z.return = y, y = z;
            }
            return f(y);
          case Gl:
            return d2 = Vu(d2), U(y, v, d2, z);
        }
        if (le(d2)) return s(y, v, d2, z);
        if (Pa(d2)) {
          if (E2 = Pa(d2), typeof E2 != "function") throw Error(S(150));
          return d2 = E2.call(d2), O2(y, v, d2, z);
        }
        if (typeof d2.then == "function") return U(y, v, rn(d2), z);
        if (d2.$$typeof === b) return U(y, v, Mn(y, d2), z);
        Bn(y, d2);
      }
      return typeof d2 == "string" && d2 !== "" || typeof d2 == "number" || typeof d2 == "bigint" ? (d2 = "" + d2, v !== null && v.tag === 6 ? (u(y, v.sibling), z = e2(v, d2), z.return = y, y = z) : (u(y, v), z = Sc(d2, y.mode, z), z.return = y, y = z), f(y)) : u(y, v);
    }
    return function(y, v, d2, z) {
      try {
        be = 0;
        var E2 = U(y, v, d2, z);
        return Aa = null, E2;
      } catch (N) {
        if (N === Na || N === Hn) throw N;
        var q = Cl(29, N, null, y.mode);
        return q.lanes = z, q.return = y, q;
      } finally {
      }
    };
  }
  var xu = R0(true), q0 = R0(false), cu = false;
  function Mc(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Uc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function iu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function vu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (j & 2) !== 0) {
      var e2 = a.pending;
      return e2 === null ? t.next = t : (t.next = e2.next, e2.next = t), a.pending = t, t = bn(l), z0(l, null, u), t;
    }
    return sn(l, a, t, u), bn(l);
  }
  function Ee(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ov(l, u);
    }
  }
  function Hc(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e2 = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = { lane: u.lane, tag: u.tag, payload: u.payload, callback: null, next: null };
          n === null ? e2 = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e2 = n = t : n = n.next = t;
      } else e2 = n = t;
      u = { baseState: a.baseState, firstBaseUpdate: e2, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Cc = false;
  function Oe() {
    if (Cc) {
      var l = Oa;
      if (l !== null) throw l;
    }
  }
  function Ne(l, t, u, a) {
    Cc = false;
    var e2 = l.updateQueue;
    cu = false;
    var n = e2.firstBaseUpdate, f = e2.lastBaseUpdate, c = e2.shared.pending;
    if (c !== null) {
      e2.shared.pending = null;
      var i = c, h = i.next;
      i.next = null, f === null ? n = h : f.next = h, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = h : c.next = h, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e2.baseState;
      f = 0, g = h = i = null, c = n;
      do {
        var m = c.lane & -536870913, o = m !== c.lane;
        if (o ? (R & m) === m : (a & m) === m) {
          m !== 0 && m === ju && (Cc = true), g !== null && (g = g.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
          l: {
            var s = l, O2 = c;
            m = t;
            var U = u;
            switch (O2.tag) {
              case 1:
                if (s = O2.payload, typeof s == "function") {
                  T = s.call(U, T, m);
                  break l;
                }
                T = s;
                break l;
              case 3:
                s.flags = s.flags & -65537 | 128;
              case 0:
                if (s = O2.payload, m = typeof s == "function" ? s.call(U, T, m) : s, m == null) break l;
                T = Z({}, T, m);
                break l;
              case 2:
                cu = true;
            }
          }
          m = c.callback, m !== null && (l.flags |= 64, o && (l.flags |= 8192), o = e2.callbacks, o === null ? e2.callbacks = [m] : o.push(m));
        } else o = { lane: m, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, g === null ? (h = g = o, i = T) : g = g.next = o, f |= m;
        if (c = c.next, c === null) {
          if (c = e2.shared.pending, c === null) break;
          o = c, c = o.next, o.next = null, e2.lastBaseUpdate = o, e2.shared.pending = null;
        }
      } while (true);
      g === null && (i = T), e2.baseState = i, e2.firstBaseUpdate = h, e2.lastBaseUpdate = g, n === null && (e2.shared.lanes = 0), Su |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function Y0(l, t) {
    if (typeof l != "function") throw Error(S(191, l));
    l.call(t);
  }
  function G0(l, t) {
    var u = l.callbacks;
    if (u !== null) for (l.callbacks = null, l = 0; l < u.length; l++) Y0(u[l], t);
  }
  var mu = ht(null), Rn = ht(0);
  function Q0(l, t) {
    l = Lt, W(Rn, l), W(mu, t), Lt = l | t.baseLanes;
  }
  function rc() {
    W(Rn, Lt), W(mu, mu.current);
  }
  function Bc() {
    Lt = Rn.current, gl(mu), gl(Rn);
  }
  var Tl = ht(null), Nl = null;
  function yu(l) {
    var t = l.alternate;
    W(sl, sl.current & 1), W(Tl, l), Nl === null && (t === null || mu.current !== null || t.memoizedState !== null) && (Nl = l);
  }
  function Rc(l) {
    W(sl, sl.current), W(Tl, l), Nl === null && (Nl = l);
  }
  function X0(l) {
    l.tag === 22 ? (W(sl, sl.current), W(Tl, l), Nl === null && (Nl = l)) : hu();
  }
  function hu() {
    W(sl, sl.current), W(Tl, Tl.current);
  }
  function Kl(l) {
    gl(Tl), Nl === l && (Nl = null), gl(sl);
  }
  var sl = ht(0);
  function Ae(l, t) {
    W(Tl, Tl.current), W(sl, t);
  }
  function qc(l) {
    gl(sl), gl(Tl), Nl === l && (Nl = null);
  }
  function qn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || lv(u) || tv(u))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Zt = 0, M = null, p = null, cl = null, Yn = false, _a = false, Lu = false, Gn = 0, _e = 0, Da = null, ed = 0;
  function al() {
    throw Error(S(321));
  }
  function Yc(l, t) {
    if (t === null) return false;
    for (var u = 0; u < t.length && u < l.length; u++) if (!Vl(l[u], t[u])) return false;
    return true;
  }
  function Gc(l, t, u, a, e2, n) {
    return Zt = n, M = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = l === null || l.memoizedState === null ? Em : Om, Lu = false, n = u(a, e2), Lu = false, _a && (n = Z0(t, u, a, e2)), j0(l), n;
  }
  function j0(l) {
    _.H = xn;
    var t = p !== null && p.next !== null;
    if (Zt = 0, cl = p = M = null, Yn = false, _e = 0, Da = null, t) throw Error(S(300));
    l === null || il || (l = l.dependencies, l !== null && Dn(l) && (il = true));
  }
  function Z0(l, t, u, a) {
    M = l;
    var e2 = 0;
    do {
      if (_a && (Da = null), _e = 0, _a = false, 25 <= e2) throw Error(S(301));
      if (e2 += 1, cl = p = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      _.H = hd, n = t(u, a);
    } while (_a);
    return n;
  }
  function nd() {
    var l = _.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? De(t) : t, l = l.useState()[0], (p !== null ? p.memoizedState : null) !== l && (M.flags |= 1024), t;
  }
  function Qc() {
    var l = Gn !== 0;
    return Gn = 0, l;
  }
  function Xc(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function jc(l) {
    if (Yn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Yn = false;
    }
    Zt = 0, cl = p = M = null, _a = false, _e = Gn = 0, Da = null;
  }
  function Dl() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return cl === null ? M.memoizedState = cl = l : cl = cl.next = l, cl;
  }
  function nl() {
    if (p === null) {
      var l = M.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = p.next;
    var t = cl === null ? M.memoizedState : cl.next;
    if (t !== null) cl = t, p = l;
    else {
      if (l === null) throw M.alternate === null ? Error(S(467)) : Error(S(310));
      p = l, l = { memoizedState: p.memoizedState, baseState: p.baseState, baseQueue: p.baseQueue, queue: p.queue, next: null }, cl === null ? M.memoizedState = cl = l : cl = cl.next = l;
    }
    return cl;
  }
  function Qn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function De(l) {
    var t = _e;
    return _e += 1, Da === null && (Da = []), l = C0(Da, l, t), t = M, (cl === null ? t.memoizedState : cl.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? Em : Om), l;
  }
  function Xn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return De(l);
      if (l.$$typeof === Zy) return;
      if (l.$$typeof === b) return zl(l);
    }
    throw Error(S(438, String(l)));
  }
  function Zc(l) {
    var t = null, u = M.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = M.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(e2) {
        return e2.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Qn(), M.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0) for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = Ct;
    return t.index++, u;
  }
  function Vt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function jn(l) {
    var t = nl();
    return Vc(t, p, l);
  }
  function Vc(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(S(311));
    a.lastRenderedReducer = u;
    var e2 = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e2 !== null) {
        var f = e2.next;
        e2.next = n.next, n.next = f;
      }
      t.baseQueue = e2 = n, a.pending = null;
    }
    if (n = l.baseState, e2 === null) l.memoizedState = n;
    else {
      t = e2.next;
      var c = f = null, i = null, h = t, g = false;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (R & T) === T : (Zt & T) === T) {
          var m = h.revertLane;
          if (m === 0) i !== null && (i = i.next = { lane: 0, revertLane: 0, gesture: null, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), T === ju && (g = true);
          else if ((Zt & m) === m) {
            h = h.next, m === ju && (g = true);
            continue;
          } else T = { lane: 0, revertLane: h.revertLane, gesture: null, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }, i === null ? (c = i = T, f = n) : i = i.next = T, M.lanes |= m, Su |= m;
          T = h.action, Lu && u(n, T), n = h.hasEagerState ? h.eagerState : u(n, T);
        } else m = { lane: T, revertLane: h.revertLane, gesture: h.gesture, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }, i === null ? (c = i = m, f = n) : i = i.next = m, M.lanes |= T, Su |= T;
        h = h.next;
      } while (h !== null && h !== t);
      if (i === null ? f = n : i.next = c, !Vl(n, l.memoizedState) && (il = true, g && (u = Oa, u !== null))) throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e2 === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Kc(l) {
    var t = nl(), u = t.queue;
    if (u === null) throw Error(S(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e2 = u.pending, n = t.memoizedState;
    if (e2 !== null) {
      u.pending = null;
      var f = e2 = e2.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e2);
      Vl(n, t.memoizedState) || (il = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function V0(l, t, u) {
    var a = M, e2 = nl(), n = C;
    if (n) {
      if (u === void 0) throw Error(S(407));
      u = u();
    } else u = t();
    var f = !Vl((p || e2).memoizedState, u);
    if (f && (e2.memoizedState = u, il = true), e2 = e2.queue, Jc(L0.bind(null, a, e2, l), [l]), l = e2.getSnapshot !== t || f || cl !== null && (cl.memoizedState.tag & 1) !== 0, Ma(l ? 9 : 8, { destroy: void 0 }, x0.bind(null, a, e2, u, t), null), l) {
      if (a.flags |= 2048, $ === null) throw Error(S(349));
      n || (Zt & 127) !== 0 || K0(a, t, u);
    }
    return u;
  }
  function K0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = M.updateQueue, t === null ? (t = Qn(), M.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function x0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, J0(t) && p0(l);
  }
  function L0(l, t, u) {
    return u(function() {
      J0(t) && p0(l);
    });
  }
  function J0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Vl(l, u);
    } catch {
      return true;
    }
  }
  function p0(l) {
    var t = Ru(l, 2);
    t !== null && ql(t, l, 2);
  }
  function xc(l) {
    var t = Dl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Lu) {
        Pt(true);
        try {
          u();
        } finally {
          Pt(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vt, lastRenderedState: l }, t;
  }
  function w0(l, t, u, a) {
    return l.baseState = u, Vc(l, p, typeof a == "function" ? a : Vt);
  }
  function fd(l, t, u, a, e2) {
    if (Kn(l)) throw Error(S(485));
    if (l = t.action, l !== null) {
      var n = { payload: e2, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(f) {
        n.listeners.push(f);
      } };
      _.T !== null ? u(true) : n.isTransition = false, a(n), u = t.pending, u === null ? (n.next = t.pending = n, $0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function $0(l, t) {
    var u = t.action, a = t.payload, e2 = l.state;
    if (t.isTransition) {
      var n = _.T, f = {};
      f.types = n !== null ? n.types : null, _.T = f;
      try {
        var c = u(e2, a), i = _.S;
        i !== null && i(f, c), W0(l, t, c);
      } catch (h) {
        Lc(l, t, h);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), _.T = n;
      }
    } else try {
      n = u(e2, a), W0(l, t, n);
    } catch (h) {
      Lc(l, t, h);
    }
  }
  function W0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(function(a) {
      F0(l, t, a);
    }, function(a) {
      return Lc(l, t, a);
    }) : F0(l, t, u);
  }
  function F0(l, t, u) {
    t.status = "fulfilled", t.value = u, I0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, $0(l, u)));
  }
  function Lc(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, I0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function I0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function k0(l, t) {
    return t;
  }
  function P0(l, t) {
    if (C) {
      var u = $.formState;
      if (u !== null) {
        l: {
          var a = M;
          if (C) {
            if (F2) {
              t: {
                for (var e2 = F2, n = lt; e2.nodeType !== 8; ) {
                  if (!n) {
                    e2 = null;
                    break t;
                  }
                  if (e2 = ut(e2.nextSibling), e2 === null) {
                    e2 = null;
                    break t;
                  }
                }
                n = e2.data, e2 = n === "F!" || n === "F" ? e2 : null;
              }
              if (e2) {
                F2 = ut(e2.nextSibling), a = e2.data === "F!";
                break l;
              }
            }
            eu(a);
          }
          a = false;
        }
        a && (t = u[0]);
      }
    }
    return u = Dl(), u.memoizedState = u.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: k0, lastRenderedState: t }, u.queue = a, u = Tm.bind(null, M, a), a.dispatch = u, a = xc(false), n = Fc.bind(null, M, false, a.queue), a = Dl(), e2 = { state: t, dispatch: null, action: l, pending: null }, a.queue = e2, u = fd.bind(null, M, e2, n, u), e2.dispatch = u, a.memoizedState = l, [t, u, false];
  }
  function lm(l) {
    var t = nl();
    return tm(t, p, l);
  }
  function tm(l, t, u) {
    if (t = Vc(l, t, k0)[0], l = jn(Vt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = De(t);
    } catch (f) {
      throw f === Na ? Hn : f;
    }
    else a = t;
    t = nl();
    var e2 = t.queue, n = e2.dispatch;
    return u !== t.memoizedState && (M.flags |= 2048, Ma(9, { destroy: void 0 }, cd.bind(null, e2, u), null)), [a, n, l];
  }
  function cd(l, t) {
    l.action = t;
  }
  function um(l) {
    var t = nl(), u = p;
    if (u !== null) return tm(t, u, l);
    nl(), t = t.memoizedState, u = nl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, false];
  }
  function Ma(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = M.updateQueue, t === null && (t = Qn(), M.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function am() {
    return nl().memoizedState;
  }
  function Zn(l, t, u, a) {
    var e2 = Dl();
    M.flags |= l, e2.memoizedState = Ma(1 | t, { destroy: void 0 }, u, a === void 0 ? null : a);
  }
  function Vn(l, t, u, a) {
    var e2 = nl();
    a = a === void 0 ? null : a;
    var n = e2.memoizedState.inst;
    p !== null && a !== null && Yc(a, p.memoizedState.deps) ? e2.memoizedState = Ma(t, n, u, a) : (M.flags |= l, e2.memoizedState = Ma(1 | t, n, u, a));
  }
  function em(l, t) {
    Zn(8390656, 8, l, t);
  }
  function Jc(l, t) {
    Vn(2048, 8, l, t);
  }
  function id(l) {
    M.flags |= 4;
    var t = M.updateQueue;
    if (t === null) t = Qn(), M.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function nm(l) {
    var t = nl().memoizedState;
    return id({ ref: t, nextImpl: l }), function() {
      if ((j & 2) !== 0) throw Error(S(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function fm(l, t) {
    return Vn(4, 2, l, t);
  }
  function cm(l, t) {
    return Vn(4, 4, l, t);
  }
  function im(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function vm(l, t, u) {
    u = u != null ? u.concat([l]) : null, Vn(4, 4, im.bind(null, t, l), u);
  }
  function pc() {
  }
  function mm(l, t) {
    var u = nl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Yc(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function ym(l, t) {
    var u = nl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Yc(t, a[1])) return a[0];
    if (a = l(), Lu) {
      Pt(true);
      try {
        l();
      } finally {
        Pt(false);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function wc(l, t, u) {
    return u === void 0 || (Zt & 1073741824) !== 0 && (R & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = E1(), M.lanes |= l, Su |= l, u);
  }
  function hm(l, t, u, a) {
    return Vl(u, t) ? u : mu.current !== null ? (l = wc(l, u, a), Vl(l, t) || (il = true), l) : (Zt & 106) === 0 || (Zt & 1073741824) !== 0 && (R & 261930) === 0 ? (il = true, l.memoizedState = u) : (l = E1(), M.lanes |= l, Su |= l, t);
  }
  function dm(l, t, u, a, e2) {
    var n = X.p;
    X.p = n !== 0 && 8 > n ? n : 8;
    var f = _.T, c = {};
    c.types = f !== null ? f.types : null, _.T = c, Fc(l, false, t, u);
    try {
      var i = e2(), h = _.S;
      if (h !== null && h(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = ad(i, a);
        Me(l, t, g, pl(l));
      } else Me(l, t, a, pl(l));
    } catch (T) {
      Me(l, t, { then: function() {
      }, status: "rejected", reason: T }, pl());
    } finally {
      X.p = n, f !== null && c.types !== null && (f.types = c.types), _.T = f;
    }
  }
  function vd() {
  }
  function $c(l, t, u, a) {
    if (l.tag !== 5) throw Error(S(476));
    var e2 = om(l).queue;
    dm(l, e2, t, Mu, u === null ? vd : function() {
      return gm(l), u(a);
    });
  }
  function om(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: Mu, baseState: Mu, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vt, lastRenderedState: Mu }, next: null };
    var u = {};
    return t.next = { memoizedState: u, baseState: u, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vt, lastRenderedState: u }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function gm(l) {
    var t = om(l);
    t.next === null && (t = l.alternate.memoizedState), Me(l, t.next.queue, {}, pl());
  }
  function Wc() {
    return zl(pa);
  }
  function Sm() {
    return nl().memoizedState;
  }
  function zm() {
    return nl().memoizedState;
  }
  function md(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = pl();
          l = iu(u);
          var a = vu(t, l, u);
          a !== null && (ql(a, t, u), Ee(a, t, u)), t = { cache: Nc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function yd(l, t, u) {
    var a = pl();
    u = { lane: a, revertLane: 0, gesture: null, action: u, hasEagerState: false, eagerState: null, next: null }, Kn(l) ? sm(t, u) : (u = oc(l, t, u, a), u !== null && (ql(u, l, a), bm(u, t, a)));
  }
  function Tm(l, t, u) {
    var a = pl();
    Me(l, t, u, a);
  }
  function Me(l, t, u, a) {
    var e2 = { lane: a, revertLane: 0, gesture: null, action: u, hasEagerState: false, eagerState: null, next: null };
    if (Kn(l)) sm(t, e2);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var f = t.lastRenderedState, c = n(f, u);
        if (e2.hasEagerState = true, e2.eagerState = c, Vl(c, f)) return sn(l, t, e2, 0), $ === null && Tn(), false;
      } catch {
      } finally {
      }
      if (u = oc(l, t, e2, a), u !== null) return ql(u, l, a), bm(u, t, a), true;
    }
    return false;
  }
  function Fc(l, t, u, a) {
    if (a = { lane: 2, revertLane: Zi(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Kn(l)) {
      if (t) throw Error(S(479));
    } else t = oc(l, u, a, 2), t !== null && ql(t, l, 2);
  }
  function Kn(l) {
    var t = l.alternate;
    return l === M || t !== null && t === M;
  }
  function sm(l, t) {
    _a = Yn = true;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function bm(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ov(l, u);
    }
  }
  var xn = { readContext: zl, use: Xn, useCallback: al, useContext: al, useEffect: al, useImperativeHandle: al, useLayoutEffect: al, useInsertionEffect: al, useMemo: al, useReducer: al, useRef: al, useState: al, useDebugValue: al, useDeferredValue: al, useTransition: al, useSyncExternalStore: al, useId: al, useHostTransitionStatus: al, useFormState: al, useActionState: al, useOptimistic: al, useMemoCache: al, useCacheRefresh: al, useEffectEvent: al }, Em = { readContext: zl, use: Xn, useCallback: function(l, t) {
    return Dl().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: zl, useEffect: em, useImperativeHandle: function(l, t, u) {
    u = u != null ? u.concat([l]) : null, Zn(4194308, 4, im.bind(null, t, l), u);
  }, useLayoutEffect: function(l, t) {
    return Zn(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    Zn(4, 2, l, t);
  }, useMemo: function(l, t) {
    var u = Dl();
    t = t === void 0 ? null : t;
    var a = l();
    if (Lu) {
      Pt(true);
      try {
        l();
      } finally {
        Pt(false);
      }
    }
    return u.memoizedState = [a, t], a;
  }, useReducer: function(l, t, u) {
    var a = Dl();
    if (u !== void 0) {
      var e2 = u(t);
      if (Lu) {
        Pt(true);
        try {
          u(t);
        } finally {
          Pt(false);
        }
      }
    } else e2 = t;
    return a.memoizedState = a.baseState = e2, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: e2 }, a.queue = l, l = l.dispatch = yd.bind(null, M, l), [a.memoizedState, l];
  }, useRef: function(l) {
    var t = Dl();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = xc(l);
    var t = l.queue, u = Tm.bind(null, M, t);
    return t.dispatch = u, [l.memoizedState, u];
  }, useDebugValue: pc, useDeferredValue: function(l, t) {
    var u = Dl();
    return wc(u, l, t);
  }, useTransition: function() {
    var l = xc(false);
    return l = dm.bind(null, M, l.queue, true, false), Dl().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, u) {
    var a = M, e2 = Dl();
    if (C) {
      if (u === void 0) throw Error(S(407));
      u = u();
    } else {
      if (u = t(), $ === null) throw Error(S(349));
      (R & 127) !== 0 || K0(a, t, u);
    }
    e2.memoizedState = u;
    var n = { value: u, getSnapshot: t };
    return e2.queue = n, em(L0.bind(null, a, n, l), [l]), a.flags |= 2048, Ma(9, { destroy: void 0 }, x0.bind(null, a, n, u, t), null), u;
  }, useId: function() {
    var l = Dl(), t = $.identifierPrefix;
    if (C) {
      var u = St, a = gt;
      u = (a & ~(1 << 32 - jl(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Gn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
    } else u = ed++, t = "_" + t + "r_" + u.toString(32) + "_";
    return l.memoizedState = t;
  }, useHostTransitionStatus: Wc, useFormState: P0, useActionState: P0, useOptimistic: function(l) {
    var t = Dl();
    t.memoizedState = t.baseState = l;
    var u = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = u, t = Fc.bind(null, M, true, u), u.dispatch = t, [l, t];
  }, useMemoCache: Zc, useCacheRefresh: function() {
    return Dl().memoizedState = md.bind(null, M);
  }, useEffectEvent: function(l) {
    var t = Dl(), u = { impl: l };
    return t.memoizedState = u, function() {
      if ((j & 2) !== 0) throw Error(S(440));
      return u.impl.apply(void 0, arguments);
    };
  } }, Om = { readContext: zl, use: Xn, useCallback: mm, useContext: zl, useEffect: Jc, useImperativeHandle: vm, useInsertionEffect: fm, useLayoutEffect: cm, useMemo: ym, useReducer: jn, useRef: am, useState: function() {
    return jn(Vt);
  }, useDebugValue: pc, useDeferredValue: function(l, t) {
    var u = nl();
    return hm(u, p.memoizedState, l, t);
  }, useTransition: function() {
    var l = jn(Vt)[0], t = nl().memoizedState;
    return [typeof l == "boolean" ? l : De(l), t];
  }, useSyncExternalStore: V0, useId: Sm, useHostTransitionStatus: Wc, useFormState: lm, useActionState: lm, useOptimistic: function(l, t) {
    var u = nl();
    return w0(u, p, l, t);
  }, useMemoCache: Zc, useCacheRefresh: zm, useEffectEvent: nm }, hd = { readContext: zl, use: Xn, useCallback: mm, useContext: zl, useEffect: Jc, useImperativeHandle: vm, useInsertionEffect: fm, useLayoutEffect: cm, useMemo: ym, useReducer: Kc, useRef: am, useState: function() {
    return Kc(Vt);
  }, useDebugValue: pc, useDeferredValue: function(l, t) {
    var u = nl();
    return p === null ? wc(u, l, t) : hm(u, p.memoizedState, l, t);
  }, useTransition: function() {
    var l = Kc(Vt)[0], t = nl().memoizedState;
    return [typeof l == "boolean" ? l : De(l), t];
  }, useSyncExternalStore: V0, useId: Sm, useHostTransitionStatus: Wc, useFormState: um, useActionState: um, useOptimistic: function(l, t) {
    var u = nl();
    return p !== null ? w0(u, p, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
  }, useMemoCache: Zc, useCacheRefresh: zm, useEffectEvent: nm };
  function Ic(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : Z({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var kc = { enqueueSetState: function(l, t, u) {
    l = l._reactInternals;
    var a = pl(), e2 = iu(a);
    e2.payload = t, u != null && (e2.callback = u), t = vu(l, e2, a), t !== null && (ql(t, l, a), Ee(t, l, a));
  }, enqueueReplaceState: function(l, t, u) {
    l = l._reactInternals;
    var a = pl(), e2 = iu(a);
    e2.tag = 1, e2.payload = t, u != null && (e2.callback = u), t = vu(l, e2, a), t !== null && (ql(t, l, a), Ee(t, l, a));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var u = pl(), a = iu(u);
    a.tag = 2, t != null && (a.callback = t), t = vu(l, a, u), t !== null && (ql(t, l, u), Ee(t, l, u));
  } };
  function Nm(l, t, u, a, e2, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !de(u, a) || !de(e2, n) : true;
  }
  function Am(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && kc.enqueueReplaceState(t, t.state, null);
  }
  function Ju(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t) a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = Z({}, u));
      for (var e2 in l) u[e2] === void 0 && (u[e2] = l[e2]);
    }
    return u;
  }
  function _m(l) {
    zn(l);
  }
  function Dm(l) {
    console.error(l);
  }
  function Mm(l) {
    zn(l);
  }
  function Ln(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Um(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, { componentStack: u.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (e2) {
      setTimeout(function() {
        throw e2;
      });
    }
  }
  function Pc(l, t, u) {
    return u = iu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Ln(l, t);
    }, u;
  }
  function Hm(l) {
    return l = iu(l), l.tag = 3, l;
  }
  function Cm(l, t, u, a) {
    var e2 = u.type.getDerivedStateFromError;
    if (typeof e2 == "function") {
      var n = a.value;
      l.payload = function() {
        return e2(n);
      }, l.callback = function() {
        Um(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Um(t, u, a), typeof e2 != "function" && (zu === null ? zu = /* @__PURE__ */ new Set([this]) : zu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
    });
  }
  function dd(l, t, u, a, e2) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && Qu(t, u, e2, true), u = Tl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return Nl === null ? hf() : u.alternate === null && el === 0 && (el = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e2, a === Cn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Qi(l, a, e2)), false;
          case 22:
            return u.flags |= 65536, a === Cn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Qi(l, a, e2)), false;
        }
        throw Error(S(435, u.tag));
      }
      return Qi(l, a, e2), hf(), false;
    }
    if (C) return t = Tl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e2, a !== sc && (l = Error(S(422), { cause: a }), Se(Il(l, u)))) : (a !== sc && (t = Error(S(423), { cause: a }), Se(Il(t, u))), l = l.current.alternate, l.flags |= 65536, e2 &= -e2, l.lanes |= e2, a = Il(a, u), e2 = Pc(l.stateNode, a, e2), Hc(l, e2), el !== 4 && (el = 2)), false;
    var n = Error(S(520), { cause: a });
    if (n = Il(n, u), Ye === null ? Ye = [n] : Ye.push(n), el !== 4 && (el = 2), t === null) return true;
    a = Il(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e2 & -e2, u.lanes |= l, l = Pc(u.stateNode, a, l), Hc(u, l), false;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (zu === null || !zu.has(n)))) return u.flags |= 65536, e2 &= -e2, u.lanes |= e2, e2 = Hm(e2), Cm(e2, l, u, a), Hc(u, e2), false;
          break;
        case 22:
          if (u.memoizedState !== null) return u.flags |= 65536, false;
      }
      u = u.return;
    } while (u !== null);
    return false;
  }
  var li = Error(S(461)), il = false;
  function ml(l, t, u, a) {
    t.child = l === null ? q0(t, null, u, a) : xu(t, l.child, u, a);
  }
  function rm(l, t, u, a, e2) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a) c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Xu(t), a = Gc(l, t, u, f, n, e2), c = Qc(), l !== null && !il ? (Xc(l, t, e2), Kt(l, t, e2)) : (C && c && Nn(t), t.flags |= 1, ml(l, t, a, e2), t.child);
  }
  function Bm(l, t, u, a, e2) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !gc(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, Rm(l, t, n, a, e2)) : (l = En(u.type, null, a, t, t.mode, e2), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !ii(l, e2)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : de, u(f, a) && l.ref === t.ref) return Kt(l, t, e2);
    }
    return t.flags |= 1, l = Gt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Rm(l, t, u, a, e2) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (de(n, a) && l.ref === t.ref) if (il = false, t.pendingProps = a = n, ii(l, e2)) (l.flags & 131072) !== 0 && (il = true);
      else return t.lanes = l.lanes, Kt(l, t, e2);
    }
    return ti(l, t, u, a, e2);
  }
  function qm(l, t, u, a) {
    var e2 = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e2 = 0; a !== null; ) e2 = e2 | a.lanes | a.childLanes, a = a.sibling;
          a = e2 & ~n;
        } else a = 0, t.child = null;
        return Ym(l, t, n, u, a);
      }
      if ((u & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Un(t, n !== null ? n.cachePool : null), n !== null ? Q0(t, n) : rc(), X0(t);
      else return a = t.lanes = 536870912, Ym(l, t, n !== null ? n.baseLanes | u : u, u, a);
    } else n !== null ? (Un(t, n.cachePool), Q0(t, n), hu(), t.memoizedState = null) : (l !== null && Un(t, null), rc(), hu());
    return ml(l, t, e2, u), t.child;
  }
  function Ue(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function Ym(l, t, u, a, e2) {
    var n = _c();
    return n = n === null ? null : { parent: fl._currentValue, pool: n }, t.memoizedState = { baseLanes: u, cachePool: n }, l !== null && Un(t, null), rc(), X0(t), l !== null && Qu(l, t, a, true), t.childLanes = e2, null;
  }
  function Jn(l, t) {
    return t = pn({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Gm(l, t, u) {
    return xu(t, l.child, null, u), l = Jn(t, t.pendingProps), l.flags |= 2, Kl(t), t.memoizedState = null, l;
  }
  function od(l, t, u) {
    var a = t.pendingProps, e2 = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (C) {
        if (a.mode === "hidden") return l = Jn(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, Ue(null, l);
        if (Rc(t), (l = F2) ? (l = yy(l, lt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: uu !== null ? { id: gt, overflow: St } : null, retryLane: 536870912, hydrationErrors: null }, u = s0(l), u.return = t, t.child = u, hl = t, F2 = null)) : l = null, l === null) throw eu(t);
        return t.lanes = 536870912, null;
      }
      return Jn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Rc(t), e2) if (t.flags & 256) t.flags &= -257, t = Gm(l, t, u);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(S(558));
      else if (il || Qu(l, t, u, false), e2 = (u & l.childLanes) !== 0, il || e2) {
        if (mu.current === null) {
          if (a = $, a !== null && (f = Nv(a, u), f !== 0 && f !== n.retryLane)) throw n.retryLane = f, Ru(l, f), ql(a, l, f), li;
          hf();
        }
        t = Gm(l, t, u);
      } else l = n.treeContext, F2 = ut(f.nextSibling), hl = t, C = true, au = null, lt = false, l !== null && O0(t, l), t = Jn(t, a), t.flags |= 134221824;
      return t;
    }
    return l = Gt(l.child, { mode: a.mode, children: a.children }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Ua(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(S(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function ti(l, t, u, a, e2) {
    return Xu(t), u = Gc(l, t, u, a, void 0, e2), a = Qc(), l !== null && !il ? (Xc(l, t, e2), Kt(l, t, e2)) : (C && a && Nn(t), t.flags |= 1, ml(l, t, u, e2), t.child);
  }
  function Qm(l, t, u, a, e2, n) {
    return Xu(t), t.updateQueue = null, u = Z0(t, a, u, e2), j0(l), a = Qc(), l !== null && !il ? (Xc(l, t, n), Kt(l, t, n)) : (C && a && Nn(t), t.flags |= 1, ml(l, t, u, n), t.child);
  }
  function Xm(l, t, u, a, e2) {
    if (Xu(t), t.stateNode === null) {
      var n = Ta, f = u.contextType;
      typeof f == "object" && f !== null && (n = zl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = kc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Mc(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? zl(f) : Ta, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (Ic(t, u, f, a), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && kc.enqueueReplaceState(n, n.state, null), Ne(t, a, n, e2), Oe(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Ju(u, c);
      n.props = i;
      var h = n.context, g = u.contextType;
      f = Ta, typeof g == "object" && g !== null && (f = zl(g));
      var T = u.getDerivedStateFromProps;
      g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== f) && Am(t, n, a, f), cu = false;
      var m = t.memoizedState;
      n.state = m, Ne(t, a, n, e2), Oe(), h = t.memoizedState, c || m !== h || cu ? (typeof T == "function" && (Ic(t, u, T, a), h = t.memoizedState), (i = cu || Nm(t, u, i, a, m, h, f)) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      n = t.stateNode, Uc(l, t), f = t.memoizedProps, g = Ju(u, f), n.props = g, T = t.pendingProps, m = n.context, h = u.contextType, i = Ta, typeof h == "object" && h !== null && (i = zl(h)), c = u.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || m !== i) && Am(t, n, a, i), cu = false, m = t.memoizedState, n.state = m, Ne(t, a, n, e2), Oe();
      var o = t.memoizedState;
      f !== T || m !== o || cu || l !== null && l.dependencies !== null && Dn(l.dependencies) ? (typeof c == "function" && (Ic(t, u, c, a), o = t.memoizedState), (g = cu || Nm(t, u, g, a, m, o, i) || l !== null && l.dependencies !== null && Dn(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, o, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, o, i)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = o), n.props = a, n.state = o, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 1024), a = false);
    }
    return n = a, Ua(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = xu(t, l.child, null, e2), t.child = xu(t, null, u, e2)) : ml(l, t, u, e2), t.memoizedState = n.state, l = t.child) : l = Kt(l, t, e2), l;
  }
  function jm(l, t, u, a) {
    return Yu(), t.flags |= 256, ml(l, t, u, a), t.child;
  }
  var ui = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ai(l) {
    return { baseLanes: l, cachePool: U0() };
  }
  function ei(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= Jl), l;
  }
  function Zm(l, t, u) {
    var a = t.pendingProps, e2 = false, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? false : (sl.current & 2) !== 0), f && (e2 = true, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (C) {
        if (e2 ? yu(t) : hu(), (l = F2) ? (l = yy(l, lt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: uu !== null ? { id: gt, overflow: St } : null, retryLane: 536870912, hydrationErrors: null }, u = s0(l), u.return = t, t.child = u, hl = t, F2 = null)) : l = null, l === null) throw eu(t);
        return tv(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, e2 ? (hu(), e2 = t.mode, n = pn({ mode: "hidden", children: n }, e2), a = qu(a, e2, u, null), n.return = t, a.return = t, n.sibling = a, t.child = n, a = t.child, a.memoizedState = ai(u), a.childLanes = ei(l, f, u), t.memoizedState = ui, Ue(null, a)) : (yu(t), ni(t, n));
    }
    var c = l.memoizedState;
    if (c !== null) {
      var i = c.dehydrated;
      if (i !== null) return gd(l, t, n, f, a, i, c, u);
    }
    return e2 ? (hu(), e2 = a.fallback, n = t.mode, c = l.child, i = c.sibling, a = Gt(c, { mode: "hidden", children: a.children }), a.subtreeFlags = c.subtreeFlags & 1206910976, i !== null ? e2 = Gt(i, e2) : (e2 = qu(e2, n, u, null), e2.flags |= 2), e2.return = t, a.return = t, a.sibling = e2, t.child = a, Ue(null, a), a = t.child, e2 = l.child.memoizedState, e2 === null ? e2 = ai(u) : (n = e2.cachePool, n !== null ? (c = fl._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = U0(), e2 = { baseLanes: e2.baseLanes | u, cachePool: n }), a.memoizedState = e2, a.childLanes = ei(l, f, u), t.memoizedState = ui, Ue(l.child, a)) : (yu(t), u = l.child, l = u.sibling, u = Gt(u, { mode: "visible", children: a.children }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function ni(l, t) {
    return t = pn({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function pn(l, t) {
    return l = Cl(22, l, null, t), l.lanes = 0, l;
  }
  function wn(l, t, u) {
    return xu(t, l.child, null, u), l = ni(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function gd(l, t, u, a, e2, n, f, c) {
    if (u) return t.flags & 256 ? (yu(t), t.flags &= -257, wn(l, t, c)) : t.memoizedState !== null ? (hu(), t.child = l.child, t.flags |= 128, null) : (hu(), n = e2.fallback, f = t.mode, e2 = pn({ mode: "visible", children: e2.children }, f), n = qu(n, f, c, null), n.flags |= 2, e2.return = t, n.return = t, e2.sibling = n, t.child = e2, xu(t, l.child, null, c), e2 = t.child, e2.memoizedState = ai(c), e2.childLanes = ei(l, a, c), t.memoizedState = ui, Ue(null, e2));
    if (yu(t), tv(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var i = a.dgst;
      return a = i, a !== "" && (e2 = Error(S(419)), e2.stack = "", e2.digest = a, Se({ value: e2, source: null, stack: null })), wn(l, t, c);
    }
    if (il || Qu(l, t, c, false), a = (c & l.childLanes) !== 0, il || a) {
      if (mu.current !== null) return wn(l, t, c);
      if (a = $, a !== null && (e2 = Nv(a, c), e2 !== 0 && e2 !== f.retryLane)) throw f.retryLane = e2, Ru(l, e2), ql(a, l, e2), li;
      return lv(n) || hf(), wn(l, t, c);
    }
    return lv(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, F2 = ut(n.nextSibling), hl = t, C = true, au = null, lt = false, l !== null && O0(t, l), t = ni(t, e2.children), t.flags |= 134221824, t);
  }
  function Vm(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), _n(l.return, t, u);
  }
  function Km(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && qn(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function $n(l, t, u, a, e2, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: u, tailMode: e2, treeForkCount: n } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e2, f.treeForkCount = n);
  }
  function fi(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function ci(l, t, u) {
    var a = t.pendingProps, e2 = a.revealOrder, n = a.tail;
    a = a.children;
    var f = sl.current;
    if (t.flags & 128) return Ae(t, f), null;
    var c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Ae(t, f), e2 === "backwards" && l !== null ? (fi(l), ml(l, t, a, u), fi(l)) : ml(l, t, a, u), a = C ? ge : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && Vm(l, u, t);
      else if (l.tag === 19) Vm(l, u, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break l;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) break l;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    switch (e2) {
      case "backwards":
        u = Km(t.child), u === null ? (e2 = t.child, t.child = null) : (e2 = u.sibling, u.sibling = null, fi(t)), $n(t, true, e2, null, n, a);
        break;
      case "unstable_legacy-backwards":
        for (u = null, e2 = t.child, t.child = null; e2 !== null; ) {
          if (l = e2.alternate, l !== null && qn(l) === null) {
            t.child = e2;
            break;
          }
          l = e2.sibling, e2.sibling = u, u = e2, e2 = l;
        }
        $n(t, true, u, null, n, a);
        break;
      case "together":
        $n(t, false, null, null, void 0, a);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        u = Km(t.child), u === null ? (e2 = t.child, t.child = null) : (e2 = u.sibling, u.sibling = null), $n(t, false, e2, u, n, a);
    }
    return t.child;
  }
  function xm(l, t, u) {
    var a = t.pendingProps;
    return nu(t, t.type, a.value), ml(l, t, a.children, u), t.child;
  }
  function Kt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), Su |= t.lanes, (u & t.childLanes) === 0) if (l !== null) {
      if (Qu(l, t, u, false), (u & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(S(153));
    if (t.child !== null) {
      for (l = t.child, u = Gt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; ) l = l.sibling, u = u.sibling = Gt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function ii(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && Dn(l)));
  }
  function Sd(l, t, u) {
    switch (t.tag) {
      case 3:
        Ie(t, t.stateNode.containerInfo), nu(t, fl, l.memoizedState.cache), Yu();
        break;
      case 27:
      case 5:
        Yf(t);
        break;
      case 4:
        Ie(t, t.stateNode.containerInfo);
        break;
      case 10:
        nu(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Rc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null) return yu(t), t.flags |= 128, null;
          a = Qu(l, t, u, false);
          var e2 = t.child.childLanes;
          return a || (u & e2) !== 0 ? Zm(l, t, u) : (yu(t), l = Kt(l, t, u), l !== null ? l.sibling : null);
        }
        yu(t);
        break;
      case 19:
        if (t.flags & 128) return ci(l, t, u);
        if (e2 = (l.flags & 128) !== 0, a = (u & t.childLanes) !== 0, a || (Qu(l, t, u, false), a = (u & t.childLanes) !== 0), e2) {
          if (a) return ci(l, t, u);
          t.flags |= 128;
        }
        if (e2 = t.memoizedState, e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null), Ae(t, sl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, qm(l, t, u, t.pendingProps);
      case 24:
        nu(t, fl, l.memoizedState.cache);
    }
    return Kt(l, t, u);
  }
  function Lm(l, t, u) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) il = true;
    else {
      if (!ii(l, u) && (t.flags & 128) === 0) return il = false, Sd(l, t, u);
      il = (l.flags & 131072) !== 0;
    }
    else il = false, C && (t.flags & 1048576) !== 0 && E0(t, ge, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Vu(t.elementType), t.type = l, typeof l == "function") gc(l) ? (a = Ju(l, a), t.tag = 1, t = Xm(null, t, l, a, u)) : (t.tag = 0, t = ti(null, t, l, a, u));
          else {
            if (l != null) {
              var e2 = l.$$typeof;
              if (e2 === H) {
                t.tag = 11, t = rm(null, t, l, a, u);
                break l;
              } else if (e2 === ul) {
                t.tag = 14, t = Bm(null, t, l, a, u);
                break l;
              } else if (e2 === b) {
                t.tag = 10, t.type = l, t = xm(null, t, u);
                break l;
              }
            }
            throw t = Rf(l) || l, Error(S(306, t, ""));
          }
        }
        return t;
      case 0:
        return ti(l, t, t.type, t.pendingProps, u);
      case 1:
        return a = t.type, e2 = Ju(a, t.pendingProps), Xm(l, t, a, e2, u);
      case 3:
        l: {
          if (Ie(t, t.stateNode.containerInfo), l === null) throw Error(S(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e2 = n.element, Uc(l, t), Ne(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, nu(t, fl, a), a !== n.cache && Oc(t, [fl], u, true), Oe(), a = f.element, n.isDehydrated) if (n = { element: a, isDehydrated: false, cache: f.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = jm(l, t, a, u);
            break l;
          } else if (a !== e2) {
            e2 = Il(Error(S(424)), t), Se(e2), t = jm(l, t, a, u);
            break l;
          } else {
            switch (l = t.stateNode.containerInfo, l.nodeType) {
              case 9:
                l = l.body;
                break;
              default:
                l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
            }
            for (F2 = ut(l.firstChild), hl = t, C = true, au = null, lt = true, u = q0(t, null, a, u), t.child = u; u; ) u.flags = u.flags & -3 | 134221824, u = u.sibling;
          }
          else {
            if (Yu(), a === e2) {
              t = Kt(l, t, u);
              break l;
            }
            ml(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ua(l, t), l === null ? (u = Ty(t.type, null, t.pendingProps, null)) ? t.memoizedState = u : C || (t.stateNode = F1(t.type, t.pendingProps, It.current, t)) : t.memoizedState = Ty(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Yf(t), l === null && C && (a = t.stateNode = oy(t.type, t.pendingProps, It.current), hl = t, lt = true, e2 = F2, bu(t.type) ? (uv = e2, F2 = ut(a.firstChild)) : F2 = e2), ml(l, t, t.pendingProps.children, u), Ua(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && C && ((e2 = a = F2) && (a = io(a, t.type, t.pendingProps, lt), a !== null ? (t.stateNode = a, hl = t, F2 = ut(a.firstChild), lt = false, e2 = true) : e2 = false), e2 || eu(t)), Yf(t), e2 = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, wi(e2, n) ? a = null : f !== null && wi(e2, f) && (t.flags |= 32), t.memoizedState !== null && (e2 = Gc(l, t, nd, null, null, u), pa._currentValue = e2), Ua(l, t), ml(l, t, a, u), t.child;
      case 6:
        return l === null && C && ((l = u = F2) && (u = vo(u, t.pendingProps, lt), u !== null ? (t.stateNode = u, hl = t, F2 = null, l = true) : l = false), l || eu(t)), null;
      case 13:
        return Zm(l, t, u);
      case 4:
        return Ie(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = xu(t, null, a, u) : ml(l, t, a, u), t.child;
      case 11:
        return rm(l, t, t.type, t.pendingProps, u);
      case 7:
        return a = t.pendingProps, Ua(l, t), ml(l, t, a, u), t.child;
      case 8:
        return ml(l, t, t.pendingProps.children, u), t.child;
      case 12:
        return ml(l, t, t.pendingProps.children, u), t.child;
      case 10:
        return xm(l, t, u);
      case 9:
        return e2 = t.type._context, a = t.pendingProps.children, Xu(t), e2 = zl(e2), a = a(e2), t.flags |= 1, ml(l, t, a, u), t.child;
      case 14:
        return Bm(l, t, t.type, t.pendingProps, u);
      case 15:
        return Rm(l, t, t.type, t.pendingProps, u);
      case 19:
        return ci(l, t, u);
      case 31:
        return od(l, t, u);
      case 22:
        return qm(l, t, u, t.pendingProps);
      case 24:
        return Xu(t), a = zl(fl), l === null ? (e2 = _c(), e2 === null && (e2 = $, n = Nc(), e2.pooledCache = n, n.refCount++, n !== null && (e2.pooledCacheLanes |= u), e2 = n), t.memoizedState = { parent: a, cache: e2 }, Mc(t), nu(t, fl, e2)) : ((l.lanes & u) !== 0 && (Uc(l, t), Ne(t, null, null, u), Oe()), e2 = l.memoizedState, n = t.memoizedState, e2.parent !== a ? (e2 = { parent: a, cache: a }, t.memoizedState = e2, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e2), nu(t, fl, a)) : (a = n.cache, nu(t, fl, a), a !== e2.cache && Oc(t, [fl], u, true))), ml(l, t, t.pendingProps.children, u), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = { autoName: null, paired: null, clones: null, ref: null }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : C && Nn(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : Ua(l, t), ml(l, t, a.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(S(156, t.tag));
  }
  function xt(l) {
    l.flags |= 4;
  }
  function vi(l, t, u, a, e2) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? Oy(t, a) : Oy(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (e2 & 335544128) === e2) if (l.stateNode.complete) l.flags |= 8192;
      else if (_1()) l.flags |= 8192;
      else throw Ku = Cn, Dc;
    } else l.flags &= -16777217;
  }
  function Jm(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !Ny(t)) if (_1()) l.flags |= 8192;
    else throw Ku = Cn, Dc;
  }
  function Wn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bv() : 536870912, l.lanes |= t, Ra |= t);
  }
  function He(l, t) {
    if (!C) switch (l.tailMode) {
      case "visible":
        break;
      case "collapsed":
        for (var u = l.tail, a = null; u !== null; ) u.alternate !== null && (a = u), u = u.sibling;
        a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
        break;
      default:
        for (t = l.tail, u = null; t !== null; ) t.alternate !== null && (u = t), t = t.sibling;
        u === null ? l.tail = null : u.sibling = null;
    }
  }
  function I(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t) for (var e2 = l.child; e2 !== null; ) u |= e2.lanes | e2.childLanes, a |= e2.subtreeFlags & 1206910976, a |= e2.flags & 1206910976, e2.return = l, e2 = e2.sibling;
    else for (e2 = l.child; e2 !== null; ) u |= e2.lanes | e2.childLanes, a |= e2.subtreeFlags, a |= e2.flags, e2.return = l, e2 = e2.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function zd(l, t, u) {
    var a = t.pendingProps;
    switch (Tc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return I(t), null;
      case 1:
        return I(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), jt(fl), ea(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ea(t) ? xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bc())), I(t), null;
      case 26:
        var e2 = t.type, n = t.memoizedState;
        return l === null ? (xt(t), n !== null ? (I(t), Jm(t, n)) : (I(t), vi(t, e2, null, a, u))) : n ? n !== l.memoizedState ? (xt(t), I(t), Jm(t, n)) : (I(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && xt(t), I(t), vi(t, e2, l, a, u)), null;
      case 27:
        if (ke(t), u = It.current, e2 = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && xt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(S(166));
            return I(t), t.subtreeFlags &= -33554433, null;
          }
          l = dt.current, Ea(t) ? N0(t, l) : (l = oy(e2, a, u), t.stateNode = l, xt(t));
        }
        return I(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (ke(t), e2 = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && xt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(S(166));
            return I(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = dt.current, Ea(t)) N0(t, n);
          else {
            var f = Ze(It.current);
            switch (n) {
              case 1:
                n = f.createElementNS("http://www.w3.org/2000/svg", e2);
                break;
              case 2:
                n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e2);
                break;
              default:
                switch (e2) {
                  case "svg":
                    n = f.createElementNS("http://www.w3.org/2000/svg", e2);
                    break;
                  case "math":
                    n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e2);
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", { is: a.is }) : f.createElement("select"), a.multiple ? n.multiple = true : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e2, { is: a.is }) : f.createElement(e2);
                }
            }
            n[Sl] = t, n[Hl] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (El(n, e2, a), e2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = true;
                break l;
              default:
                a = false;
            }
            a && xt(t);
          }
        }
        return I(t), t.subtreeFlags &= -33554433, vi(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, u), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && xt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(S(166));
          if (l = It.current, Ea(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e2 = hl, e2 !== null) switch (e2.tag) {
              case 27:
              case 5:
                a = e2.memoizedProps;
            }
            l[Sl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === true || p1(l.nodeValue, u)), l || eu(t, true);
          } else l = Ze(l).createTextNode(a), l[Sl] = t, t.stateNode = l;
        }
        return I(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = Ea(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(S(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(557));
              l[Sl] = t;
            } else Yu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            I(t), l = false;
          } else u = bc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = true;
          if (!l) return t.flags & 256 ? (Kl(t), t) : (Kl(t), null);
          if ((t.flags & 128) !== 0) throw Error(S(558));
        }
        return I(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e2 = Ea(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e2) throw Error(S(318));
              if (e2 = t.memoizedState, e2 = e2 !== null ? e2.dehydrated : null, !e2) throw Error(S(317));
              e2[Sl] = t;
            } else Yu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            I(t), e2 = false;
          } else e2 = bc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e2), e2 = true;
          if (!e2) return t.flags & 256 ? (Kl(t), t) : (Kl(t), null);
        }
        return Kl(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e2 = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e2 = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e2 && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), Wn(t, t.updateQueue), I(t), null);
      case 4:
        return ea(), l === null && Ki(t.stateNode.containerInfo), t.flags |= 67108864, I(t), null;
      case 10:
        return jt(t.type), I(t), null;
      case 19:
        if (qc(t), a = t.memoizedState, a === null) return I(t), null;
        if (e2 = (t.flags & 128) !== 0, n = a.rendering, n === null) if (e2) He(a, false);
        else {
          if (el !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = qn(l), n !== null) {
              for (t.flags |= 128, He(a, false), l = n.updateQueue, t.updateQueue = l, Wn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; ) T0(u, l), u = u.sibling;
              return Ae(t, sl.current & 1 | 2), C && Qt(t, a.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          a.tail !== null && Ql() > cf && (t.flags |= 128, e2 = true, He(a, false), t.lanes = 4194304);
        }
        else {
          if (!e2) if (l = qn(n), l !== null) {
            if (t.flags |= 128, e2 = true, l = l.updateQueue, t.updateQueue = l, Wn(t, l), He(a, true), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !C) return I(t), null;
          } else 2 * Ql() - a.renderingStartTime > cf && u !== 536870912 && (t.flags |= 128, e2 = true, He(a, false), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        if (a.tail !== null) {
          l = a.tail;
          l: {
            for (u = l; u !== null; ) {
              if (u.alternate !== null) {
                u = false;
                break l;
              }
              u = u.sibling;
            }
            u = true;
          }
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Ql(), l.sibling = null, n = sl.current, n = e2 ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !u || C ? Ae(t, n) : (u = n, W(Tl, t), W(sl, u), Nl === null && (Nl = t)), C && Qt(t, a.treeForkCount), l;
        }
        return I(t), null;
      case 22:
      case 23:
        return Kl(t), Bc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (I(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : I(t), u = t.updateQueue, u !== null && Wn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && gl(Zu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), jt(fl), I(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, I(t), null;
    }
    throw Error(S(156, t.tag));
  }
  function Td(l, t) {
    switch (Tc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return jt(fl), ea(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ke(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Kl(t), t.alternate === null) throw Error(S(340));
          Yu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (Kl(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(S(340));
          Yu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return qc(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ea(), null;
      case 10:
        return jt(t.type), null;
      case 22:
      case 23:
        return Kl(t), Bc(), l !== null && gl(Zu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return jt(fl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pm(l, t) {
    switch (Tc(t), t.tag) {
      case 3:
        jt(fl), ea();
        break;
      case 26:
      case 27:
      case 5:
        ke(t);
        break;
      case 4:
        ea();
        break;
      case 31:
        t.memoizedState !== null && Kl(t);
        break;
      case 13:
        Kl(t);
        break;
      case 19:
        qc(t);
        break;
      case 10:
        jt(t.type);
        break;
      case 22:
      case 23:
        Kl(t), Bc(), l !== null && gl(Zu);
        break;
      case 24:
        jt(fl);
    }
  }
  function Ce(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e2 = a.next;
        u = e2;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e2);
      }
    } catch (c) {
      L(t, t.return, c);
    }
  }
  function du(l, t, u) {
    try {
      var a = t.updateQueue, e2 = a !== null ? a.lastEffect : null;
      if (e2 !== null) {
        var n = e2.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e2 = t;
              var i = u, h = c;
              try {
                h();
              } catch (g) {
                L(e2, i, g);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      L(t, t.return, g);
    }
  }
  function wm(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        G0(t, u);
      } catch (a) {
        L(l, l.return, a);
      }
    }
  }
  function $m(l, t, u) {
    u.props = Ju(l.type, l.memoizedProps), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      L(l, t, a);
    }
  }
  function zt(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            var e2 = l.stateNode, n = qt(l.memoizedProps, e2);
            (e2.ref === null || e2.ref.name !== n) && (e2.ref = ey(n)), a = e2.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new wl(l);
              Q(l.child, false, fo, f, void 0, void 0), l.stateNode = f;
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (c) {
      L(l, t, c);
    }
  }
  function bl(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null) if (typeof a == "function") try {
      a();
    } catch (e2) {
      L(l, t, e2);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof u == "function") try {
      u(null);
    } catch (e2) {
      L(l, t, e2);
    }
    else u.current = null;
  }
  function Fn(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null) for (var u = 0; u < t.length; u++) my(l.stateNode, t[u]);
  }
  function Wm(l) {
    for (var t = l.return; t !== null && (yi(t) && my(l.stateNode, t.stateNode), !mi(t)); ) t = t.return;
  }
  function re(l) {
    for (var t = l.return; t !== null && (yi(t) && co(l.stateNode, t.stateNode), !mi(t)); ) t = t.return;
  }
  function mi(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function yi(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function hi(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e2) {
      L(l, l.return, e2);
    }
  }
  function di(l, t, u) {
    try {
      var a = l.stateNode;
      Kd(a, l.type, u, t), a[Hl] = t;
    } catch (e2) {
      L(l, l.return, e2);
    }
  }
  function Fm(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && bu(l.type) || l.tag === 4;
  }
  function oi(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Fm(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && bu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function gi(l, t, u, a) {
    var e2 = l.tag;
    if (e2 === 5 || e2 === 6) e2 = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(e2, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(e2), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = ot)), Fn(l, a), G = true;
    else if (e2 !== 4 && (e2 === 27 && (Fn(l, a), a = null, bu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null)) for (gi(l, t, u, a), l = l.sibling; l !== null; ) gi(l, t, u, a), l = l.sibling;
  }
  function In(l, t, u, a) {
    var e2 = l.tag;
    if (e2 === 5 || e2 === 6) e2 = l.stateNode, t ? u.insertBefore(e2, t) : u.appendChild(e2), Fn(l, a), G = true;
    else if (e2 !== 4 && (e2 === 27 && (Fn(l, a), a = null, bu(l.type) && (u = l.stateNode)), l = l.child, l !== null)) for (In(l, t, u, a), l = l.sibling; l !== null; ) In(l, t, u, a), l = l.sibling;
  }
  function Im(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e2 = t.attributes; e2.length; ) t.removeAttributeNode(e2[0]);
      El(t, a, u), t[Sl] = l, t[Hl] = u;
    } catch (n) {
      L(l, l.return, n);
    }
  }
  var kn = false, xl = null;
  function km(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (kn = true);
  }
  var Tt = null;
  function Pm() {
    var l = Tt;
    return Tt = null, l;
  }
  var rl = 0;
  function Ha(l, t, u, a, e2) {
    return rl = 0, l1(l.child, t, u, a, e2);
  }
  function l1(l, t, u, a, e2) {
    for (var n = false; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (a !== null) {
          var c = Fi(f);
          a.push(c), c.view && (n = true);
        } else n || Fi(f).view && (n = true);
        kn = true, ty(f, rl === 0 ? t : t + "_" + rl, u), rl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && e2 || l1(l.child, t, u, a, e2) && (n = true));
      l = l.sibling;
    }
    return n;
  }
  function st(l, t) {
    for (; l !== null; ) l.tag === 5 ? uy(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || st(l.child, t)), l = l.sibling;
  }
  function Pn(l) {
    if ((l.subtreeFlags & 18874368) !== 0) for (l = l.child; l !== null; ) {
      if ((l.tag !== 22 || l.memoizedState === null) && (Pn(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
        var t = l.memoizedProps;
        if (t.name == null || t.name === "auto") throw Error(S(544));
        var u = t.name;
        t = Yt(t.default, t.share), t !== "none" && (Ha(l, u, t, null, false) || st(l.child, false));
      }
      l = l.sibling;
    }
  }
  function Si(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, a = l.memoizedProps, e2 = qt(a, u), n = Yt(a.default, u.paired ? a.share : a.enter);
      n !== "none" ? Ha(l, e2, n, null, false) ? (Pn(l), u.paired || t || Qa(l, a.onEnter)) : st(l.child, false) : Pn(l);
    } else if ((l.subtreeFlags & 33554432) !== 0) for (l = l.child; l !== null; ) Si(l, t), l = l.sibling;
    else Pn(l);
  }
  function zi(l) {
    if (xl !== null && xl.size !== 0) {
      var t = xl;
      if ((l.subtreeFlags & 18874368) !== 0) for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var u = l.memoizedProps, a = u.name;
            if (a != null && a !== "auto") {
              var e2 = t.get(a);
              if (e2 !== void 0) {
                var n = Yt(u.default, u.share);
                if (n !== "none" && (Ha(l, a, n, null, false) ? (n = l.stateNode, e2.paired = n, n.paired = e2, Qa(l, u.onShare)) : st(l.child, false)), t.delete(a), t.size === 0) break;
              }
            }
          }
          zi(l);
        }
        l = l.sibling;
      }
    }
  }
  function Ti(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = qt(t, l.stateNode), a = xl !== null ? xl.get(u) : void 0, e2 = Yt(t.default, a !== void 0 ? t.share : t.exit);
      e2 !== "none" && (Ha(l, u, e2, null, false) ? a !== void 0 ? (e2 = l.stateNode, a.paired = e2, e2.paired = a, xl.delete(u), Qa(l, t.onShare)) : Qa(l, t.onExit) : st(l.child, false)), xl !== null && zi(l);
    } else if ((l.subtreeFlags & 33554432) !== 0) for (l = l.child; l !== null; ) Ti(l), l = l.sibling;
    else xl !== null && zi(l);
  }
  function t1(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = qt(t, l.stateNode);
        t = Yt(t.default, t.update), l.flags &= -5, t !== "none" && Ha(l, u, t, l.memoizedState = [], false);
      } else (l.subtreeFlags & 33554432) !== 0 && t1(l);
      l = l.sibling;
    }
  }
  function si(l) {
    if ((l.subtreeFlags & 18874368) !== 0) for (l = l.child; l !== null; ) {
      if (l.tag !== 22 || l.memoizedState === null) {
        if (l.tag === 30 && (l.flags & 18874368) !== 0) {
          var t = l.stateNode;
          t.paired !== null && (t.paired = null, st(l.child, false));
        }
        si(l);
      }
      l = l.sibling;
    }
  }
  function lf(l) {
    if (l.tag === 30) l.stateNode.paired = null, st(l.child, false), si(l);
    else if ((l.subtreeFlags & 33554432) !== 0) for (l = l.child; l !== null; ) lf(l), l = l.sibling;
    else si(l);
  }
  function u1(l) {
    for (l = l.child; l !== null; ) l.tag === 30 ? st(l.child, false) : (l.subtreeFlags & 33554432) !== 0 && u1(l), l = l.sibling;
  }
  function bi(l, t, u, a, e2, n, f) {
    for (var c = false; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (n !== null && rl < n.length) {
          var h = n[rl], g = Fi(i);
          (h.view || g.view) && (c = true);
          var T;
          if (T = (l.flags & 4) === 0) if (g.clip) T = true;
          else {
            T = h.rect;
            var m = g.rect;
            T = T.y !== m.y || T.x !== m.x || T.height !== m.height || T.width !== m.width;
          }
          T && (l.flags |= 4), g.abs ? g = !h.abs : (h = h.rect, g = g.rect, g = h.height !== g.height || h.width !== g.width), g && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && ty(i, rl === 0 ? u : u + "_" + rl, e2), c && (l.flags & 4) !== 0 || (Tt === null && (Tt = []), Tt.push(i, rl === 0 ? a : a + "_" + rl, t.memoizedProps)), rl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : bi(l, t.child, u, a, e2, n, f) && (c = true));
      t = t.sibling;
    }
    return c;
  }
  function a1(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, a = l.stateNode, e2 = qt(u, a), n = Yt(u.default, u.update);
        if (t) {
          a = a.clones;
          var f = a === null ? null : a.map($d);
        } else f = l.memoizedState, l.memoizedState = null;
        a = l;
        var c = l.child;
        rl = 0, e2 = bi(a, c, e2, e2, n, f, false), (l.flags & 4) !== 0 && e2 && (t || Qa(l, u.onUpdate));
      } else (l.subtreeFlags & 33554432) !== 0 && a1(l, t);
      l = l.sibling;
    }
  }
  var dl = false, V = false, bt = false, Ei = false, e1 = typeof WeakSet == "function" ? WeakSet : Set, ol = null, Et = false, Be = false, tf = false, Oi = false;
  function sd(l, t, u) {
    if (l = l.containerInfo, Ji = wa, l = i0(l), ic(l)) {
      if ("selectionStart" in l) var a = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        a = (a = l.ownerDocument) && a.defaultView || window;
        var e2 = a.getSelection && a.getSelection();
        if (e2 && e2.rangeCount !== 0) {
          a = e2.anchorNode;
          var n = e2.anchorOffset, f = e2.focusNode;
          e2 = e2.focusOffset;
          try {
            a.nodeType, f.nodeType;
          } catch {
            a = null;
            break l;
          }
          var c = 0, i = -1, h = -1, g = 0, T = 0, m = l, o = null;
          t: for (; ; ) {
            for (var s; m !== a || n !== 0 && m.nodeType !== 3 || (i = c + n), m !== f || e2 !== 0 && m.nodeType !== 3 || (h = c + e2), m.nodeType === 3 && (c += m.nodeValue.length), (s = m.firstChild) !== null; ) o = m, m = s;
            for (; ; ) {
              if (m === l) break t;
              if (o === a && ++g === n && (i = c), o === f && ++T === e2 && (h = c), (s = m.nextSibling) !== null) break;
              m = o, o = m.parentNode;
            }
            m = s;
          }
          a = i === -1 || h === -1 ? null : { start: i, end: h };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (pi = { focusedElem: l, selectionRange: a }, wa = false, u = (u & 335544064) === u, ol = t, t = u ? 9270 : 1024; ol !== null; ) {
      if (l = ol, u && (a = l.deletions, a !== null)) for (n = 0; n < a.length; n++) u && Ti(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0) u && km(l), uf(u);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && u && Ti(a), uf(u);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            u && km(l), uf(u);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, ol = a) : (u && t1(l), uf(u));
      }
    }
    xl = null;
  }
  function uf(l) {
    for (; ol !== null; ) {
      var t = ol, u = l, a = t.alternate, e2 = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((e2 & 1024) !== 0 && a !== null) {
            u = void 0, e2 = a.memoizedProps, a = a.memoizedState;
            var n = t.stateNode;
            try {
              var f = Ju(t.type, e2);
              u = n.getSnapshotBeforeUpdate(f, a), n.__reactInternalSnapshotBeforeUpdate = u;
            } catch (c) {
              L(t, t.return, c);
            }
          }
          break;
        case 3:
          if ((e2 & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, u = a.nodeType, u === 9) Pi(a);
            else if (u === 1) switch (a.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Pi(a);
                break;
              default:
                a.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          u && a !== null && (u = qt(a.memoizedProps, a.stateNode), e2 = t.memoizedProps, e2 = Yt(e2.default, e2.update), e2 !== "none" && Ha(a, u, e2, a.memoizedState = [], true));
          break;
        default:
          if ((e2 & 1024) !== 0) throw Error(S(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, ol = a;
        break;
      }
      ol = t.return;
    }
  }
  function n1(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Ot(l, u), a & 4 && Ce(5, u);
        break;
      case 1:
        if (Ot(l, u), a & 4) if (l = u.stateNode, t === null) try {
          l.componentDidMount();
        } catch (f) {
          L(u, u.return, f);
        }
        else {
          var e2 = Ju(u.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(e2, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (f) {
            L(u, u.return, f);
          }
        }
        a & 64 && wm(u), a & 512 && zt(u, u.return);
        break;
      case 3:
        if (Ot(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null) switch (u.child.tag) {
            case 27:
            case 5:
              t = u.child.stateNode;
              break;
            case 1:
              t = u.child.stateNode;
          }
          try {
            G0(l, t);
          } catch (f) {
            L(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Im(u);
      case 26:
      case 5:
        Ot(l, u), t === null && a & 4 && hi(u), a & 512 && zt(u, u.return);
        break;
      case 12:
        Ot(l, u);
        break;
      case 31:
        Ot(l, u), a & 4 && v1(l, u);
        break;
      case 13:
        Ot(l, u), a & 4 && m1(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = rd.bind(null, u), mo(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || dl, !a) {
          var n = t !== null && t.memoizedState !== null || V;
          t = dl, e2 = V, dl = a, (V = n) && !e2 ? (a = 2, (u.subtreeFlags & 8772) !== 0 && (a |= 1), vt(l, u, a)) : Ot(l, u), dl = t, V = e2;
        }
        break;
      case 30:
        Ot(l, u), a & 512 && zt(u, u.return);
        break;
      case 7:
        a & 512 && zt(u, u.return);
      default:
        Ot(l, u);
    }
  }
  function Ni(l, t) {
    for (l = l.child; l !== null; ) f1(l, t), l = l.sibling;
  }
  function f1(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var u = l.stateNode;
          if (t) {
            var a = u.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var e2 = l.stateNode, n = l.memoizedProps.style, f = n != null && n.hasOwnProperty("display") ? n.display : null;
            e2.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (i) {
          L(l, l.return, i);
        }
        Ai(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, G = true;
        } catch (i) {
          L(l, l.return, i);
        }
        break;
      case 18:
        try {
          var c = l.stateNode;
          t ? ly(c, true) : ly(l.stateNode, false);
        } catch (i) {
          L(l, l.return, i);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Ni(l, t);
        break;
      default:
        Ni(l, t);
    }
  }
  function Ai(l, t) {
    if (l.subtreeFlags & 67108864) for (l = l.child; l !== null; ) {
      l: {
        var u = l, a = t;
        switch (u.tag) {
          case 4:
            f1(u, a);
            break l;
          case 22:
            u.memoizedState === null && Ai(u, a);
            break l;
          default:
            Ai(u, a);
        }
      }
      l = l.sibling;
    }
  }
  function c1(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, c1(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && nn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var P = null, Bl = false;
  function ct(l, t, u) {
    for (u = u.child; u !== null; ) i1(l, t, u), u = u.sibling;
  }
  function i1(l, t, u) {
    if (Xl && typeof Xl.onCommitFiberUnmount == "function") try {
      Xl.onCommitFiberUnmount(ue, u);
    } catch {
    }
    switch (u.tag) {
      case 26:
        V || bl(u, t), ct(l, t, u), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !V && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        V || bl(u, t), re(u);
        var a = P, e2 = Bl;
        bu(u.type) && (P = u.stateNode, Bl = false), ct(l, t, u), gy(u.stateNode, u.type, u.memoizedProps), P = a, Bl = e2;
        break;
      case 5:
        V || bl(u, t), re(u);
      case 6:
        if (u.tag === 6 && re(u), a = P, e2 = Bl, P = null, ct(l, t, u), P = a, Bl = e2, P !== null) if (Bl) try {
          (P.nodeType === 9 ? P.body : P.nodeName === "HTML" ? P.ownerDocument.body : P).removeChild(u.stateNode), G = true;
        } catch (n) {
          L(u, t, n);
        }
        else try {
          P.removeChild(u.stateNode), G = true;
        } catch (n) {
          L(u, t, n);
        }
        break;
      case 18:
        P !== null && (Bl ? (l = P, P1(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, u.stateNode), $a(l)) : P1(P, u.stateNode));
        break;
      case 4:
        a = P, e2 = Bl, P = u.stateNode.containerInfo, Bl = true, ct(l, t, u), P = a, Bl = e2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        du(2, u, t), V || du(4, u, t), ct(l, t, u);
        break;
      case 1:
        V || (bl(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && $m(u, t, a)), ct(l, t, u);
        break;
      case 21:
        ct(l, t, u);
        break;
      case 22:
        V = (a = V) || u.memoizedState !== null, ct(l, t, u), V = a;
        break;
      case 30:
        bl(u, t), ct(l, t, u);
        break;
      case 7:
        V || bl(u, t), ct(l, t, u);
        break;
      default:
        ct(l, t, u);
    }
  }
  function v1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        $a(l);
      } catch (u) {
        L(t, t.return, u);
      }
    }
  }
  function m1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      $a(l);
    } catch (u) {
      L(t, t.return, u);
    }
  }
  function bd(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new e1()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new e1()), t;
      default:
        throw Error(S(435, l.tag));
    }
  }
  function af(l, t) {
    var u = bd(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e2 = Bd.bind(null, l, a);
        a.then(e2, e2);
      }
    });
  }
  function Ml(l, t, u) {
    var a = t.deletions;
    if (a !== null) for (var e2 = 0; e2 < a.length; e2++) {
      var n = a[e2], f = l, c = t, i = c;
      l: for (; i !== null; ) {
        switch (i.tag) {
          case 27:
            if (bu(i.type)) {
              P = i.stateNode, Bl = false;
              break l;
            }
            break;
          case 5:
            P = i.stateNode, Bl = false;
            break l;
          case 3:
          case 4:
            P = i.stateNode.containerInfo, Bl = true;
            break l;
        }
        i = i.return;
      }
      if (P === null) throw Error(S(160));
      i1(f, c, n), P = null, Bl = false, f = n.alternate, f !== null && (f.return = null), n.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) y1(t, l, u), t = t.sibling;
  }
  var it = null;
  function y1(l, t, u) {
    var a = l.alternate, e2 = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (e2 & 4 && (a = l.updateQueue, a = a !== null ? a.events : null, a !== null)) for (var n = 0; n < a.length; n++) {
          var f = a[n];
          f.ref.impl = f.nextImpl;
        }
        Ml(t, l, u), Ul(l), e2 & 4 && (du(3, l, l.return), Ce(3, l), du(5, l, l.return));
        break;
      case 1:
        Ml(t, l, u), Ul(l), e2 & 512 && (V || a === null || bl(a, a.return)), e2 & 64 && dl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = it, Ml(t, l, u), Ul(l), e2 & 512 && (V || a === null || bl(a, a.return)), e2 & 4) if (e2 = a !== null ? a.memoizedState : null, u = l.memoizedState, a === null) if (u === null) if (l.stateNode === null) if (dl) l.stateNode = F1(l.type, l.memoizedProps, t.containerInfo, l);
        else {
          l: {
            t = l.type, u = l.memoizedProps, e2 = n.ownerDocument || n;
            t: switch (t) {
              case "title":
                a = e2.getElementsByTagName("title")[0], (!a || a[ne] || a[Sl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = e2.createElement(t), e2.head.insertBefore(a, e2.querySelector("head > title"))), El(a, t, u), a[Sl] = l, yl(a), t = a;
                break l;
              case "link":
                if (n = Ey("link", "href", e2).get(t + (u.href || ""))) {
                  for (f = 0; f < n.length; f++) if (a = n[f], a.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && a.getAttribute("rel") === (u.rel == null ? null : u.rel) && a.getAttribute("title") === (u.title == null ? null : u.title) && a.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                    n.splice(f, 1);
                    break t;
                  }
                }
                a = e2.createElement(t), El(a, t, u), e2.head.appendChild(a);
                break;
              case "meta":
                if (n = Ey("meta", "content", e2).get(t + (u.content || ""))) {
                  for (f = 0; f < n.length; f++) if (a = n[f], a.getAttribute("content") === (u.content == null ? null : "" + u.content) && a.getAttribute("name") === (u.name == null ? null : u.name) && a.getAttribute("property") === (u.property == null ? null : u.property) && a.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && a.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                    n.splice(f, 1);
                    break t;
                  }
                }
                a = e2.createElement(t), El(a, t, u), e2.head.appendChild(a);
                break;
              default:
                throw Error(S(468, t));
            }
            a[Sl] = l, yl(a), t = a;
          }
          l.stateNode = t;
        }
        else dl || fv(n, l.type, l.stateNode);
        else l.stateNode = by(n, u, l.memoizedProps);
        else e2 !== u ? (e2 === null ? (t = a.stateNode, t === null || V || t.parentNode.removeChild(t)) : e2.count--, u === null ? dl || fv(n, l.type, l.stateNode) : by(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && di(l, l.memoizedProps, a.memoizedProps);
        break;
      case 27:
        Ml(t, l, u), Ul(l), e2 & 512 && (V || a === null || bl(a, a.return)), a !== null && e2 & 4 && di(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (n = bt, bt = false, Ml(t, l, u), bt = n, Ul(l), e2 & 512 && (V || a === null || bl(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            ma(t, ""), G = true;
          } catch (g) {
            L(l, l.return, g);
          }
        }
        e2 & 4 && l.stateNode != null && (t = l.memoizedProps, di(l, t, a !== null ? a.memoizedProps : t)), e2 & 1024 && (Ei = true);
        break;
      case 6:
        if (Ml(t, l, u), Ul(l), e2 & 4) {
          if (l.stateNode === null) throw Error(S(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, G = true;
          } catch (g) {
            L(l, l.return, g);
          }
        }
        break;
      case 3:
        if (G = false, Ef = null, n = it, it = Ve(t.containerInfo), Ml(t, l, u), it = n, Ul(l), e2 & 4 && a !== null && a.memoizedState.isDehydrated) try {
          $a(t.containerInfo);
        } catch (g) {
          L(l, l.return, g);
        }
        Ei && (Ei = false, h1(l)), G = false;
        break;
      case 4:
        e2 = bt, bt = dl, a = Rv(), n = it, it = Ve(l.stateNode.containerInfo), Ml(t, l, u), Ul(l), it = n, G && Be && (tf = true), G = a, bt = e2;
        break;
      case 12:
        Ml(t, l, u), Ul(l);
        break;
      case 31:
        Ml(t, l, u), Ul(l), e2 & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, af(l, t)));
        break;
      case 13:
        Ml(t, l, u), Ul(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ff = Ql()), e2 & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, af(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var c = dl, i = V, h = bt;
        dl = c || n, bt = h || n, V = i || f, Ml(t, l, u), V = i, bt = h, dl = c, Ul(l), e2 & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || a === null || f || dl || V || (t = f || V, u = dl, a = V, dl = n || dl, V = t, ou(l, 2), dl = u, V = a), !n && bt || Ni(l, n)), e2 & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, af(l, u))));
        break;
      case 19:
        Ml(t, l, u), Ul(l), e2 & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, af(l, t)));
        break;
      case 30:
        e2 & 512 && (V || a === null || bl(a, a.return)), e2 = Rv(), n = Be, f = (u & 335544064) === u, c = l.memoizedProps, Be = f && Yt(c.default, c.update) !== "none", Ml(t, l, u), Ul(l), f && a !== null && G && (l.flags |= 4), Be = n, G = e2;
        break;
      case 21:
        break;
      case 7:
        e2 & 512 && (V || a === null || bl(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        Ml(t, l, u), Ul(l);
    }
  }
  function Ul(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Fm(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var e2 = l.return; e2 !== null; ) {
          if (yi(e2)) {
            var n = e2.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (mi(e2)) break;
          e2 = e2.return;
        }
        var f = a;
        if (u == null) throw Error(S(160));
        switch (u.tag) {
          case 27:
            var c = u.stateNode, i = oi(l);
            In(l, i, c, f);
            break;
          case 5:
            var h = u.stateNode;
            u.flags & 32 && (ma(h, ""), u.flags &= -33);
            var g = oi(l);
            In(l, g, h, f);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, m = oi(l);
            gi(l, m, T, f);
            break;
          default:
            throw Error(S(161));
        }
      } catch (o) {
        L(l, l.return, o);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function h1(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      h1(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, wa = true, t.reset(), wa = false), l = l.sibling;
    }
  }
  function Ca(l, t) {
    if (t.subtreeFlags & 9270) for (t = t.child; t !== null; ) d1(t, l), t = t.sibling;
    else a1(t, false);
  }
  function d1(l, t) {
    var u = l.alternate;
    if (u === null) Si(l, false);
    else switch (l.tag) {
      case 3:
        if (Oi = Et = false, Pm(), Ca(t, l), !Et && !tf) {
          if (l = Tt, l !== null) for (var a = 0; a < l.length; a += 3) {
            u = l[a];
            var e2 = l[a + 1];
            uy(u, l[a + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate({ opacity: [0, 0], pointerEvents: ["none", "none"] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition-group(" + e2 + ")" });
          }
          l = t.containerInfo, l = l.nodeType === 9 ? l.documentElement : l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "" && (l.style.viewTransitionName = "none", l.animate({ opacity: [0, 0], pointerEvents: ["none", "none"] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition-group(root)" }), l.animate({ width: [0, 0], height: [0, 0] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition" })), Oi = true;
        }
        Tt = null;
        break;
      case 5:
        Ca(t, l);
        break;
      case 4:
        a = Et, Et = false, Ca(t, l), Et && (tf = true), Et = a;
        break;
      case 22:
        l.memoizedState === null && (u.memoizedState !== null ? Si(l, false) : Ca(t, l));
        break;
      case 30:
        a = Et, e2 = Pm(), Et = false, Ca(t, l), Et && (l.flags |= 4);
        var n = l.memoizedProps, f = l.stateNode;
        t = qt(n, f), f = qt(u.memoizedProps, f);
        var c = Yt(n.default, n.update);
        c === "none" ? t = false : (n = u.memoizedState, u.memoizedState = null, u = l.child, rl = 0, t = bi(l, u, t, f, c, n, true), rl !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (Qa(l, l.memoizedProps.onUpdate), Tt = e2) : e2 !== null && (e2.push.apply(e2, Tt), Tt = e2), Et = (l.flags & 32) !== 0 ? true : a;
        break;
      default:
        Ca(t, l);
    }
  }
  function Ot(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) n1(l, t.alternate, t), t = t.sibling;
  }
  function ou(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, a = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          du(4, u, u.return), ou(u, a);
          break;
        case 1:
          bl(u, u.return);
          var e2 = u.stateNode;
          typeof e2.componentWillUnmount == "function" && $m(u, u.return, e2), ou(u, a);
          break;
        case 27:
          (a & 2) !== 0 && gy(u.stateNode, u.type, u.memoizedProps);
        case 5:
          bl(u, u.return), u.tag !== 5 && u.tag !== 27 || re(u), ou(u, a);
          break;
        case 6:
          re(u);
          break;
        case 26:
          bl(u, u.return), e2 = u.stateNode, u.memoizedState !== null || e2 === null || V || e2.parentNode.removeChild(e2), ou(u, a);
          break;
        case 22:
          u.memoizedState === null && ou(u, a);
          break;
        case 30:
          bl(u, u.return), ou(u, a);
          break;
        case 7:
          bl(u, u.return);
        default:
          ou(u, a);
      }
      l = l.sibling;
    }
  }
  function vt(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var a = t.alternate, e2 = l, n = t, f = n.flags, c = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          vt(e2, n, u), Ce(4, n);
          break;
        case 1:
          if (vt(e2, n, u), a = n, e2 = a.stateNode, typeof e2.componentDidMount == "function") try {
            e2.componentDidMount();
          } catch (g) {
            L(a, a.return, g);
          }
          if (a = n, e2 = a.updateQueue, e2 !== null) {
            var i = a.stateNode;
            try {
              var h = e2.shared.hiddenCallbacks;
              if (h !== null) for (e2.shared.hiddenCallbacks = null, e2 = 0; e2 < h.length; e2++) Y0(h[e2], i);
            } catch (g) {
              L(a, a.return, g);
            }
          }
          c && f & 64 && wm(n), zt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && Im(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || Wm(n), vt(e2, n, u), c && a === null && f & 4 && hi(n), zt(n, n.return);
          break;
        case 6:
          Wm(n);
          break;
        case 26:
          i = n.stateNode, n.memoizedState !== null || i === null || dl || fv(Ve(i.ownerDocument), n.type, i), vt(e2, n, u), c && a === null && f & 4 && hi(n), zt(n, n.return);
          break;
        case 12:
          vt(e2, n, u);
          break;
        case 31:
          vt(e2, n, u), c && f & 4 && v1(e2, n);
          break;
        case 13:
          vt(e2, n, u), c && f & 4 && m1(e2, n);
          break;
        case 22:
          n.memoizedState === null && vt(e2, n, u), zt(n, n.return);
          break;
        case 30:
          vt(e2, n, u), zt(n, n.return);
          break;
        case 7:
          zt(n, n.return);
        default:
          vt(e2, n, u);
      }
      t = t.sibling;
    }
  }
  function _i(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && ze(u));
  }
  function Di(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ze(l));
  }
  function tt2(l, t, u, a) {
    var e2 = (u & 335544064) === u;
    if (t.subtreeFlags & (e2 ? 10262 : 10256)) for (t = t.child; t !== null; ) o1(l, t, u, a), t = t.sibling;
    else e2 && u1(t);
  }
  function o1(l, t, u, a) {
    var e2 = (u & 335544064) === u;
    e2 && t.alternate === null && t.return !== null && t.return.alternate !== null && lf(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tt2(l, t, u, a), n & 2048 && Ce(9, t);
        break;
      case 1:
        tt2(l, t, u, a);
        break;
      case 3:
        tt2(l, t, u, a), e2 && Oi && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && ze(n)));
        break;
      case 12:
        if (n & 2048) {
          tt2(l, t, u, a), n = t.stateNode;
          try {
            var f = t.memoizedProps, c = f.id, i = f.onPostCommit;
            typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", n.passiveEffectDuration, -0);
          } catch (h) {
            L(t, t.return, h);
          }
        } else tt2(l, t, u, a);
        break;
      case 31:
        tt2(l, t, u, a);
        break;
      case 13:
        tt2(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, c = t.alternate, t.memoizedState !== null ? (e2 && c !== null && c.memoizedState === null && lf(c), f._visibility & 2 ? tt2(l, t, u, a) : Re(l, t)) : (e2 && c !== null && c.memoizedState !== null && lf(t), f._visibility & 2 ? tt2(l, t, u, a) : (f._visibility |= 2, ra(l, t, u, a, (t.subtreeFlags & 10256) !== 0 || false))), n & 2048 && _i(c, t);
        break;
      case 24:
        tt2(l, t, u, a), n & 2048 && Di(t.alternate, t);
        break;
      case 30:
        e2 && (n = t.alternate, n !== null && (st(n.child, true), st(t.child, true))), tt2(l, t, u, a);
        break;
      default:
        tt2(l, t, u, a);
    }
  }
  function ra(l, t, u, a, e2) {
    for (e2 = e2 && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, h = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ra(n, f, c, i, e2), Ce(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? ra(n, f, c, i, e2) : Re(n, f) : (g._visibility |= 2, ra(n, f, c, i, e2)), e2 && h & 2048 && _i(f.alternate, f);
          break;
        case 24:
          ra(n, f, c, i, e2), e2 && h & 2048 && Di(f.alternate, f);
          break;
        default:
          ra(n, f, c, i, e2);
      }
      t = t.sibling;
    }
  }
  function Re(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var u = l, a = t, e2 = a.flags;
      switch (a.tag) {
        case 22:
          Re(u, a), e2 & 2048 && _i(a.alternate, a);
          break;
        case 24:
          Re(u, a), e2 & 2048 && Di(a.alternate, a);
          break;
        default:
          Re(u, a);
      }
      t = t.sibling;
    }
  }
  var pu = 8192;
  function wu(l, t, u) {
    if (l.subtreeFlags & pu) for (l = l.child; l !== null; ) g1(l, t, u), l = l.sibling;
  }
  function g1(l, t, u) {
    switch (l.tag) {
      case 26:
        wu(l, t, u), l.flags & pu && (l.memoizedState !== null ? _o(u, it, l.memoizedState, l.memoizedProps) : (l = l.stateNode, (t & 335544128) === t && _y(u, l)));
        break;
      case 5:
        wu(l, t, u), l.flags & pu && (l = l.stateNode, (t & 335544128) === t && _y(u, l));
        break;
      case 3:
      case 4:
        var a = it;
        it = Ve(l.stateNode.containerInfo), wu(l, t, u), it = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = pu, pu = 16777216, wu(l, t, u), pu = a) : wu(l, t, u));
        break;
      case 30:
        if ((l.flags & pu) !== 0 && (a = l.memoizedProps.name, a != null && a !== "auto")) {
          var e2 = l.stateNode;
          e2.paired = null, xl === null && (xl = /* @__PURE__ */ new Map()), xl.set(a, e2);
        }
        wu(l, t, u);
        break;
      default:
        wu(l, t, u);
    }
  }
  function S1(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function qe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        ol = a, T1(a, l);
      }
      S1(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) z1(l), l = l.sibling;
  }
  function z1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        qe(l), l.flags & 2048 && du(9, l, l.return);
        break;
      case 3:
        qe(l);
        break;
      case 12:
        qe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, ef(l)) : qe(l);
        break;
      default:
        qe(l);
    }
  }
  function ef(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        ol = a, T1(a, l);
      }
      S1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          du(8, t, t.return), ef(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, ef(t));
          break;
        default:
          ef(t);
      }
      l = l.sibling;
    }
  }
  function T1(l, t) {
    for (; ol !== null; ) {
      var u = ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          du(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ze(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, ol = a;
      else l: for (u = l; ol !== null; ) {
        a = ol;
        var e2 = a.sibling, n = a.return;
        if (c1(a), a === u) {
          ol = null;
          break l;
        }
        if (e2 !== null) {
          e2.return = n, ol = e2;
          break l;
        }
        ol = n;
      }
    }
  }
  var Ed = { getCacheForType: function(l) {
    var t = zl(fl), u = t.data.get(l);
    return u === void 0 && (u = l(), t.data.set(l, u)), u;
  }, cacheSignal: function() {
    return zl(fl).controller.signal;
  } }, Od = typeof WeakMap == "function" ? WeakMap : Map, j = 0, $ = null, r = null, R = 0, x2 = 0, Ll = null, gu = false, Ba = false, Mi = false, Lt = 0, el = 0, Su = 0, $u = 0, nf = 0, Jl = 0, Ra = 0, Ye = null, Rl = null, Ui = false, ff = 0, s1 = 0, cf = 1 / 0, vf = null, zu = null, ll = 0, mt = null, Wu = null, Nt = 0, Hi = 0, Ci = null, b1 = null, qa = null, Ya = null, Ga = null, Ge = 0, mf = null;
  function pl() {
    return (j & 2) !== 0 && R !== 0 ? R & -R : _.T !== null ? Zi() : Av();
  }
  function E1() {
    if (Jl === 0) if ((R & 536870912) === 0 || C) {
      var l = tn;
      tn <<= 1, (tn & 3932160) === 0 && (tn = 262144), Jl = l;
    } else Jl = 536870912;
    return l = Tl.current, l !== null && (l.flags |= 32), Jl;
  }
  function Qa(l, t) {
    if (t != null) {
      var u = l.stateNode, a = u.ref;
      a === null && (a = u.ref = ey(qt(l.memoizedProps, u))), Ya === null && (Ya = []), Ya.push(t.bind(null, a));
    }
  }
  function ql(l, t, u) {
    (l === $ && (x2 === 2 || x2 === 9) || l.cancelPendingCommit !== null) && (Xa(l, 0), Tu(l, R, Jl, false)), ee(l, u), ((j & 2) === 0 || l !== $) && (l === $ && ((j & 2) === 0 && ($u |= u), el === 4 && Tu(l, R, Jl, false)), At(l));
  }
  function O1(l, t, u) {
    if ((j & 6) !== 0) throw Error(S(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || ae(l, t), e2 = a ? _d(l, t) : Bi(l, t, true), n = a;
    do {
      if (e2 === 0) {
        Ba && !a && Tu(l, t, 0, false);
        break;
      } else {
        if (u = l.current.alternate, n && !Nd(u)) {
          e2 = Bi(l, t, false), n = false;
          continue;
        }
        if (e2 === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var f = 0;
          else f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e2 = Ye;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (Xa(c, f).flags |= 256), f = Bi(c, f, false), f !== 2 && f !== 6) {
                if (Mi && !i) {
                  c.errorRecoveryDisabledLanes |= n, $u |= n, e2 = 4;
                  break l;
                }
                n = Rl, Rl = e2, n !== null && (Rl === null ? Rl = n : Rl.push.apply(Rl, n));
              }
              e2 = f;
            }
            if (n = false, e2 !== 2) continue;
          }
        }
        if (e2 === 1) {
          Xa(l, 0), Tu(l, t, 0, true);
          break;
        }
        l: {
          switch (a = l, n = e2, n) {
            case 0:
            case 1:
              throw Error(S(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Tu(a, t, Jl, !gu);
              break l;
            case 2:
              Rl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(S(329));
          }
          if ((t & 62914560) === t && (e2 = ff + 300 - Ql(), 10 < e2)) {
            if (Tu(a, t, Jl, !gu), an(a, 0, true) !== 0) break l;
            Nt = t, a.timeoutHandle = Wi(N1.bind(null, a, u, Rl, vf, Ui, t, Jl, $u, Ra, gu, n, "Throttled", -0, 0), e2);
            break l;
          }
          N1(a, u, Rl, vf, Ui, t, Jl, $u, Ra, gu, n, null, -0, 0);
        }
      }
      break;
    } while (true);
    At(l);
  }
  function N1(l, t, u, a, e2, n, f, c, i, h, g, T, m, o) {
    l.timeoutHandle = -1;
    var s = t.subtreeFlags, O2 = (n & 335544064) === n;
    if (T = null, (O2 || s & 8192 || (s & 16785408) === 16785408) && (T = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: ot }, xl = null, g1(t, n, T), O2 && (s = T, O2 = l.containerInfo, O2 = (O2.nodeType === 9 ? O2 : O2.ownerDocument).__reactViewTransition, O2 != null && (s.count++, s.waitingForViewTransition = true, s = Le.bind(s), O2.finished.then(s, s))), s = (n & 62914560) === n ? ff - Ql() : (n & 4194048) === n ? s1 - Ql() : 0, s = Do(T, s), s !== null)) {
      Nt = n, l.cancelPendingCommit = s(r1.bind(null, l, t, n, u, a, e2, f, c, i, h, g, T, null, m, o)), Tu(l, n, f, !h);
      return;
    }
    r1(l, t, n, u, a, e2, f, c, i, h, g, T);
  }
  function Nd(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null))) for (var a = 0; a < u.length; a++) {
        var e2 = u[a], n = e2.getSnapshot;
        e2 = e2.value;
        try {
          if (!Vl(n(), e2)) return false;
        } catch {
          return false;
        }
      }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null) u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function Tu(l, t, u, a) {
    t = sv(l, t), t &= ~nf, t &= ~$u, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e2 = t; 0 < e2; ) {
      var n = 31 - jl(e2), f = 1 << n;
      a[n] = -1, e2 &= ~f;
    }
    u !== 0 && Ev(l, u, t);
  }
  function yf() {
    return (j & 6) === 0 ? (Qe(0, false), false) : true;
  }
  function ri() {
    if (r !== null) {
      if (x2 === 0) var l = r.return;
      else l = r, Xt = Gu = null, jc(l), Aa = null, be = 0, l = r;
      for (; l !== null; ) pm(l.alternate, l), l = l.return;
      r = null;
    }
  }
  function Xa(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, Jd(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Nt = 0, ri(), $ = l, r = u = Gt(l.current, null), R = t, x2 = 0, Ll = null, gu = false, Ba = ae(l, t), Mi = false, Ra = Jl = nf = $u = Su = el = 0, Rl = Ye = null, Ui = false, Lt = sv(l, t), Tn(), u;
  }
  function A1(l, t) {
    M = null, _.H = xn, t === Na || t === Hn ? (t = r0(), x2 = 3) : t === Dc ? (t = r0(), x2 = 4) : x2 = t === li ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ll = t, r === null && (el = 1, Ln(l, Il(t, l.current)));
  }
  function _1() {
    var l = Tl.current;
    return l === null ? true : (R & 4194048) === R ? Nl === null : (R & 62914560) === R || (R & 536870912) !== 0 ? l === Nl : false;
  }
  function D1() {
    var l = _.H;
    return _.H = xn, l === null ? xn : l;
  }
  function M1() {
    var l = _.A;
    return _.A = Ed, l;
  }
  function hf() {
    el = 4, gu || (R & 4194048) !== R && Tl.current !== null || (Ba = true), (Su & 134217727) === 0 && ($u & 134217727) === 0 || $ === null || Tu($, R, Jl, false);
  }
  function Bi(l, t, u) {
    var a = j;
    j |= 2;
    var e2 = D1(), n = M1();
    ($ !== l || R !== t) && (vf = null, Xa(l, t)), t = false;
    var f = el;
    l: do
      try {
        if (x2 !== 0 && r !== null) {
          var c = r, i = Ll;
          switch (x2) {
            case 8:
              ri(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Tl.current === null && (t = true);
              var h = x2;
              if (x2 = 0, Ll = null, ja(l, c, i, h), u && Ba) {
                f = 0;
                break l;
              }
              break;
            default:
              h = x2, x2 = 0, Ll = null, ja(l, c, i, h);
          }
        }
        Ad(), f = el;
        break;
      } catch (g) {
        A1(l, g);
      }
    while (true);
    return t && l.shellSuspendCounter++, Xt = Gu = null, j = a, _.H = e2, _.A = n, r === null && ($ = null, R = 0, Tn()), f;
  }
  function Ad() {
    for (; r !== null; ) U1(r);
  }
  function _d(l, t) {
    var u = j;
    j |= 2;
    var a = D1(), e2 = M1();
    $ !== l || R !== t ? (vf = null, cf = Ql() + 500, Xa(l, t)) : Ba = ae(l, t);
    l: do
      try {
        if (x2 !== 0 && r !== null) {
          t = r;
          var n = Ll;
          t: switch (x2) {
            case 1:
              x2 = 0, Ll = null, ja(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (H0(n)) {
                x2 = 0, Ll = null, H1(t);
                break;
              }
              t = function() {
                x2 !== 2 && x2 !== 9 || $ !== l || (x2 = 7), At(l);
              }, n.then(t, t);
              break l;
            case 3:
              x2 = 7;
              break l;
            case 4:
              x2 = 5;
              break l;
            case 7:
              H0(n) ? (x2 = 0, Ll = null, H1(t)) : (x2 = 0, Ll = null, ja(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (r.tag) {
                case 26:
                  f = r.memoizedState;
                case 5:
                case 27:
                  var c = r;
                  if (f ? Ny(f) : c.stateNode.complete) {
                    x2 = 0, Ll = null;
                    var i = c.sibling;
                    if (i !== null) r = i;
                    else {
                      var h = c.return;
                      h !== null ? (r = h, df(h)) : r = null;
                    }
                    break t;
                  }
              }
              x2 = 0, Ll = null, ja(l, t, n, 5);
              break;
            case 6:
              x2 = 0, Ll = null, ja(l, t, n, 6);
              break;
            case 8:
              ri(), el = 6;
              break l;
            default:
              throw Error(S(462));
          }
        }
        Dd();
        break;
      } catch (g) {
        A1(l, g);
      }
    while (true);
    return Xt = Gu = null, _.H = a, _.A = e2, j = u, r !== null ? 0 : ($ = null, R = 0, Tn(), el);
  }
  function Dd() {
    for (; r !== null && !xy(); ) U1(r);
  }
  function U1(l) {
    var t = Lm(l.alternate, l, Lt);
    l.memoizedProps = l.pendingProps, t === null ? df(l) : r = t;
  }
  function H1(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Qm(u, t, t.pendingProps, t.type, void 0, R);
        break;
      case 11:
        t = Qm(u, t, t.pendingProps, t.type.render, t.ref, R);
        break;
      case 5:
        jc(t);
        var a = t;
        a === hl && (C ? (An(a), a.tag === 5 && a.stateNode != null && (F2 = a.stateNode)) : (An(a), C = true));
      default:
        pm(u, t), t = r = T0(t, Lt), t = Lm(u, t, Lt);
    }
    l.memoizedProps = l.pendingProps, t === null ? df(l) : r = t;
  }
  function ja(l, t, u, a) {
    Xt = Gu = null, jc(t), Aa = null, be = 0;
    var e2 = t.return;
    try {
      if (dd(l, e2, t, u, R)) {
        el = 1, Ln(l, Il(u, l.current)), r = null;
        return;
      }
    } catch (n) {
      if (e2 !== null) throw r = e2, n;
      el = 1, Ln(l, Il(u, l.current)), r = null;
      return;
    }
    t.flags & 32768 ? (C || a === 1 ? l = true : Ba || (R & 536870912) !== 0 ? l = false : (gu = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Tl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), C1(t, l)) : df(t);
  }
  function df(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        C1(t, gu);
        return;
      }
      l = t.return;
      var u = zd(t.alternate, t, Lt);
      if (u !== null) {
        r = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        r = t;
        return;
      }
      r = t = l;
    } while (t !== null);
    el === 0 && (el = 5);
  }
  function C1(l, t) {
    do {
      var u = Td(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, r = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        r = l;
        return;
      }
      r = l = u;
    } while (l !== null);
    el = 6, r = null;
  }
  function r1(l, t, u, a, e2, n, f, c, i, h, g, T) {
    l.cancelPendingCommit = null;
    do
      of();
    while (ll !== 0);
    if ((j & 6) !== 0) throw Error(S(327));
    if (t !== null) {
      if (t === l.current) throw Error(S(177));
      l === $ && (r = $ = null, R = 0), Wu = t, mt = l, Nt = u, Ci = e2, b1 = a, Md(l, t, u, f, c, i, T);
    }
  }
  function Md(l, t, u, a, e2, n, f) {
    var c = t.lanes | t.childLanes;
    if (Hi = c, c |= dc, Py(l, u, c, a, e2, n), Ya = null, (u & 335544064) === u ? (Ga = td(l), a = 10262) : (Ga = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Rd(Pe, function() {
      return Gi(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), kn = false, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = _.T, _.T = null, e2 = X.p, X.p = 2, n = j, j |= 4;
      try {
        sd(l, t, u);
      } finally {
        j = n, X.p = e2, _.T = a;
      }
    }
    ll = 1, kn ? qa = Id(f, l.containerInfo, Ga, Ri, qi, Hd, Yi, Gi, Ud, null, null) : (Ri(), qi(), Yi());
  }
  function Ud(l) {
    if (ll !== 0) {
      var t = mt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function Hd() {
    ll === 3 && (ll = 0, d1(Wu, mt), ll = 4);
  }
  function Ri() {
    if (ll === 1) {
      ll = 0;
      var l = mt, t = Wu, u = Nt, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null;
        var e2 = X.p;
        X.p = 2;
        var n = j;
        j |= 4;
        try {
          Be = tf = false, y1(t, l, u), u = pi;
          var f = i0(l.containerInfo), c = u.focusedElem, i = u.selectionRange;
          if (f !== c && c && c.ownerDocument && c0(c.ownerDocument.documentElement, c)) {
            if (i !== null && ic(c)) {
              var h = i.start, g = i.end;
              if (g === void 0 && (g = h), "selectionStart" in c) c.selectionStart = h, c.selectionEnd = Math.min(g, c.value.length);
              else {
                var T = c.ownerDocument || document, m = T && T.defaultView || window;
                if (m.getSelection) {
                  var o = m.getSelection(), s = c.textContent.length, O2 = Math.min(i.start, s), U = i.end === void 0 ? O2 : Math.min(i.end, s);
                  !o.extend && O2 > U && (f = U, U = O2, O2 = f);
                  var y = f0(c, O2), v = f0(c, U);
                  if (y && v && (o.rangeCount !== 1 || o.anchorNode !== y.node || o.anchorOffset !== y.offset || o.focusNode !== v.node || o.focusOffset !== v.offset)) {
                    var d2 = T.createRange();
                    d2.setStart(y.node, y.offset), o.removeAllRanges(), O2 > U ? (o.addRange(d2), o.extend(v.node, v.offset)) : (d2.setEnd(v.node, v.offset), o.addRange(d2));
                  }
                }
              }
            }
            for (T = [], o = c; o = o.parentNode; ) o.nodeType === 1 && T.push({ element: o, left: o.scrollLeft, top: o.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var z = T[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          wa = !!Ji, pi = Ji = null;
        } finally {
          j = n, X.p = e2, _.T = a;
        }
      }
      l.current = t, ll = 2;
    }
  }
  function qi() {
    if (ll === 2) {
      ll = 0;
      var l = mt, t = Wu, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = _.T, _.T = null;
        var a = X.p;
        X.p = 2;
        var e2 = j;
        j |= 4;
        try {
          n1(l, t.alternate, t);
        } finally {
          j = e2, X.p = a, _.T = u;
        }
      }
      ll = 3;
    }
  }
  function Yi() {
    if (ll === 4 || ll === 3) {
      ll = 0;
      var l = qa;
      qa = null, Ly();
      var t = mt, u = Wu, a = Nt, e2 = b1, n = (a & 335544064) === a ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? ll = 5 : (ll = 0, Wu = mt = null, B1(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (zu = null), Lf(a), u = u.stateNode, Xl && typeof Xl.onCommitFiberRoot == "function") try {
        Xl.onCommitFiberRoot(ue, u, void 0, (u.current.flags & 128) === 128);
      } catch {
      }
      if (e2 !== null) {
        u = _.T, n = X.p, X.p = 2, _.T = null;
        try {
          for (var f = t.onRecoverableError, c = 0; c < e2.length; c++) {
            var i = e2[c];
            f(i.value, { componentStack: i.stack });
          }
        } finally {
          _.T = u, X.p = n;
        }
      }
      if (e2 = Ya, f = Ga, Ga = null, e2 !== null && (Ya = null, f === null && (f = []), l !== null)) for (i = 0; i < e2.length; i++) u = (0, e2[i])(f), u !== void 0 && l.finished.finally(u);
      (Nt & 3) !== 0 && of(), At(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === mf ? Ge++ : (Ge = 0, mf = t) : (Ge = 0, mf = null), Qe(0, false);
    }
  }
  function B1(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ze(t)));
  }
  function of() {
    return qa !== null && (qa.skipTransition(), qa = null), Ri(), qi(), Yi(), Gi();
  }
  function Gi() {
    if (ll !== 5) return false;
    var l = mt, t = Hi;
    Hi = 0;
    var u = Lf(Nt), a = _.T, e2 = X.p;
    try {
      X.p = 32 > u ? 32 : u, _.T = null, u = Ci, Ci = null;
      var n = mt, f = Nt;
      if (ll = 0, Wu = mt = null, Nt = 0, (j & 6) !== 0) throw Error(S(331));
      var c = j;
      if (j |= 4, z1(n.current), o1(n, n.current, f, u), j = c, Qe(0, false), Xl && typeof Xl.onPostCommitFiberRoot == "function") try {
        Xl.onPostCommitFiberRoot(ue, n);
      } catch {
      }
      return true;
    } finally {
      X.p = e2, _.T = a, B1(l, t);
    }
  }
  function R1(l, t, u) {
    t = Il(u, t), t = Pc(l.stateNode, t, 2), l = vu(l, t, 2), l !== null && (ee(l, 2), At(l));
  }
  function L(l, t, u) {
    if (l.tag === 3) R1(l, l, u);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        R1(t, l, u);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (zu === null || !zu.has(a))) {
          l = Il(u, l), u = Hm(2), a = vu(t, u, 2), a !== null && (Cm(u, a, t, l), ee(a, 2), At(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function Qi(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Od();
      var e2 = /* @__PURE__ */ new Set();
      a.set(t, e2);
    } else e2 = a.get(t), e2 === void 0 && (e2 = /* @__PURE__ */ new Set(), a.set(t, e2));
    e2.has(u) || (Mi = true, e2.add(u), l = Cd.bind(null, l, t, u), t.then(l, l));
  }
  function Cd(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, $ === l && (R & u) === u && ((el === 4 || el === 3 && (R & 62914560) === R && 300 > Ql() - ff) && (j & 2) === 0 ? Xa(l, 0) : nf |= u, Ra === R && (Ra = 0)), At(l);
  }
  function q1(l, t) {
    t === 0 && (t = bv()), l = Ru(l, t), l !== null && (ee(l, t), At(l));
  }
  function rd(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), q1(l, u);
  }
  function Bd(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e2 = l.memoizedState;
        e2 !== null && (u = e2.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(S(314));
    }
    a !== null && a.delete(t), q1(l, u);
  }
  function Rd(l, t) {
    return Zf(l, t);
  }
  var Za = null, Va = null, Xi = false, gf = false, ji = false, su = 0;
  function At(l) {
    l !== Va && l.next === null && (Va === null ? Za = Va = l : Va = Va.next = l), gf = true, Xi || (Xi = true, Yd());
  }
  function Qe(l, t) {
    if (!ji && gf) {
      ji = true;
      do
        for (var u = false, a = Za; a !== null; ) {
          if (!t) if (l !== 0) {
            var e2 = a.pendingLanes;
            if (e2 === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - jl(42 | l) + 1) - 1, n &= e2 & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = true, X1(a, n));
          } else n = R, n = an(a, a === $ ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || ae(a, n) || (u = true, X1(a, n));
          a = a.next;
        }
      while (u);
      ji = false;
    }
  }
  function qd() {
    Y1();
  }
  function Y1() {
    gf = Xi = false;
    var l = 0;
    su !== 0 && Ld() && (l = su);
    for (var t = Ql(), u = null, a = Za; a !== null; ) {
      var e2 = a.next, n = G1(a, t);
      n === 0 ? (a.next = null, u === null ? Za = e2 : u.next = e2, e2 === null && (Va = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (gf = true)), a = e2;
    }
    ll !== 0 && ll !== 5 || Qe(l, false), su !== 0 && (su = 0);
  }
  function G1(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e2 = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - jl(n), c = 1 << f, i = e2[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e2[f] = ky(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = $, u = R, u = an(l, l === t ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, u === 0 || l === t && (x2 === 2 || x2 === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && Vf(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ae(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Vf(a), Lf(u)) {
        case 2:
        case 8:
          u = zv;
          break;
        case 32:
          u = Pe;
          break;
        case 268435456:
          u = Tv;
          break;
        default:
          u = Pe;
      }
      return a = Q1.bind(null, l), u = Zf(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Vf(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Q1(l, t) {
    if (ll !== 0 && ll !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (of() && l.callbackNode !== u) return null;
    var a = R;
    return a = an(l, l === $ ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (O1(l, a, t), G1(l, Ql()), l.callbackNode != null && l.callbackNode === u ? Q1.bind(null, l) : null);
  }
  function X1(l, t) {
    if (of()) return null;
    O1(l, t, true);
  }
  function Yd() {
    pd(function() {
      (j & 6) !== 0 ? Zf(Sv, qd) : Y1();
    });
  }
  function Zi() {
    if (su === 0) {
      var l = ju;
      l === 0 && (l = ln, ln <<= 1, (ln & 261888) === 0 && (ln = 256)), su = l;
    }
    return su;
  }
  function j1(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : vn(l);
  }
  function Gd(l, t, u, a, e2) {
    if (t === "submit" && u && u.stateNode === e2) {
      var n = j1((e2[Hl] || null).action), f = a.submitter;
      f && (t = (t = f[Hl] || null) ? j1(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new dn("action", "action", null, a, e2);
      l.push({ event: c, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (su !== 0) {
            var i = new FormData(e2, f);
            $c(u, { pending: true, data: i, method: e2.method, action: n }, null, i);
          }
        } else typeof n == "function" && (c.preventDefault(), i = new FormData(e2, f), $c(u, { pending: true, data: i, method: e2.method, action: n }, n, i));
      }, currentTarget: e2 }] });
    }
  }
  for (zf = 0; zf < hc.length; zf++) Sf = hc[zf], Z1 = Sf.toLowerCase(), V1 = Sf[0].toUpperCase() + Sf.slice(1), ft(Z1, "on" + V1);
  var Sf, Z1, V1, zf;
  ft(y0, "onAnimationEnd"), ft(h0, "onAnimationIteration"), ft(d0, "onAnimationStart"), ft("dblclick", "onDoubleClick"), ft("focusin", "onFocus"), ft("focusout", "onBlur"), ft(wh, "onTransitionRun"), ft($h, "onTransitionStart"), ft(Wh, "onTransitionCancel"), ft(o0, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), Cu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Cu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Cu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Cu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Cu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Cu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xe));
  function K1(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e2 = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t) for (var f = a.length - 1; 0 <= f; f--) {
          var c = a[f], i = c.instance, h = c.currentTarget;
          if (c = c.listener, i !== n && e2.isPropagationStopped()) break l;
          n = c, e2.currentTarget = h;
          try {
            n(e2);
          } catch (g) {
            zn(g);
          }
          e2.currentTarget = null, n = i;
        }
        else for (f = 0; f < a.length; f++) {
          if (c = a[f], i = c.instance, h = c.currentTarget, c = c.listener, i !== n && e2.isPropagationStopped()) break l;
          n = c, e2.currentTarget = h;
          try {
            n(e2);
          } catch (g) {
            zn(g);
          }
          e2.currentTarget = null, n = i;
        }
      }
    }
  }
  function B(l, t) {
    var u = t[Dv];
    u === void 0 && (u = t[Dv] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (x1(t, l, 2, false), u.add(a));
  }
  function Vi(l, t, u) {
    var a = 0;
    t && (a |= 4), x1(u, l, a, t);
  }
  var Tf = "_reactListening" + Math.random().toString(36).slice(2);
  function Ki(l) {
    if (!l[Tf]) {
      l[Tf] = true, Hv.forEach(function(u) {
        u !== "selectionchange" && (Qd.has(u) || Vi(u, false, l), Vi(u, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Tf] || (t[Tf] = true, Vi("selectionchange", false, t));
    }
  }
  function x1(l, t, u, a) {
    switch (Ry(t)) {
      case 2:
        var e2 = Co;
        break;
      case 8:
        e2 = ro;
        break;
      default:
        e2 = iv;
    }
    u = e2.bind(null, t, u, l), e2 = void 0, !kf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e2 = true), a ? e2 !== void 0 ? l.addEventListener(t, u, { capture: true, passive: e2 }) : l.addEventListener(t, u, true) : e2 !== void 0 ? l.addEventListener(t, u, { passive: e2 }) : l.addEventListener(t, u, false);
  }
  function xi(l, t, u, a, e2) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
      if (a === null) return;
      var f = a.tag;
      if (f === 3 || f === 4) {
        var c = a.stateNode.containerInfo;
        if (c === e2) break;
        if (f === 4) for (f = a.return; f !== null; ) {
          var i = f.tag;
          if ((i === 3 || i === 4) && f.stateNode.containerInfo === e2) return;
          f = f.return;
        }
        for (; c !== null; ) {
          if (f = Hu(c), f === null) return;
          if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
            a = n = f;
            continue l;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
    Kv(function() {
      var h = n, g = Ff(u), T = [];
      l: {
        var m = g0.get(l);
        if (m !== void 0) {
          var o = dn, s = l;
          switch (l) {
            case "keypress":
              if (yn(u) === 0) break l;
            case "keydown":
            case "keyup":
              o = Nh;
              break;
            case "focusin":
              s = "focus", o = uc;
              break;
            case "focusout":
              s = "blur", o = uc;
              break;
            case "beforeblur":
            case "afterblur":
              o = uc;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              o = Jv;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              o = yh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              o = Uh;
              break;
            case y0:
            case h0:
            case d0:
              o = oh;
              break;
            case o0:
              o = Ch;
              break;
            case "scroll":
            case "scrollend":
              o = vh;
              break;
            case "wheel":
              o = Bh;
              break;
            case "copy":
            case "cut":
            case "paste":
              o = Sh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              o = wv;
              break;
            case "submit":
              o = Dh;
              break;
            case "toggle":
            case "beforetoggle":
              o = qh;
          }
          var O2 = (t & 4) !== 0, U = !O2 && (l === "scroll" || l === "scrollend"), y = O2 ? m !== null ? m + "Capture" : null : m;
          O2 = [];
          for (var v = h, d2; v !== null; ) {
            var z = v;
            if (d2 = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || d2 === null || y === null || (z = ce(v, y), z != null && O2.push(je(v, z, d2))), U) break;
            v = v.return;
          }
          0 < O2.length && (m = new o(m, s, null, u, g), T.push({ event: m, listeners: O2 }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", o && u !== Wf && (s = u.relatedTarget || u.fromElement) && (Hu(s) || s[na])) break l;
          (m || o) && (s = g.window === g ? g : (o = g.ownerDocument) ? o.defaultView || o.parentWindow : window, m ? (o = u.relatedTarget || u.toElement, m = h, o = o ? Hu(o) : null, o !== null && (U = _t(o), O2 = o.tag, o !== U || O2 !== 5 && O2 !== 27 && O2 !== 6) && (o = null)) : (m = null, o = h), m !== o && (O2 = Jv, z = "onMouseLeave", y = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (O2 = wv, z = "onPointerLeave", y = "onPointerEnter", v = "pointer"), U = m == null ? s : fe(m), d2 = o == null ? s : fe(o), s = new O2(z, v + "leave", m, u, g), s.target = U, s.relatedTarget = d2, z = null, Hu(g) === h && (O2 = new O2(y, v + "enter", o, u, g), O2.target = d2, O2.relatedTarget = U, z = O2), U = z, O2 = m && o ? Ut(m, o, Xd) : null, m !== null && L1(T, s, m, O2, false), o !== null && U !== null && L1(T, U, o, O2, true)));
        }
        l: {
          if (m = h ? fe(h) : window, o = m.nodeName && m.nodeName.toLowerCase(), o === "select" || o === "input" && m.type === "file") var E2 = t0;
          else if (Pv(m)) if (u0) E2 = Lh;
          else {
            E2 = Kh;
            var q = Vh;
          }
          else o = m.nodeName, !o || o.toLowerCase() !== "input" || m.type !== "checkbox" && m.type !== "radio" ? h && $f(h.elementType) && (E2 = t0) : E2 = xh;
          if (E2 && (E2 = E2(l, h))) {
            l0(T, E2, u, g);
            break l;
          }
          q && q(l, m, h);
        }
        switch (q = h ? fe(h) : window, l) {
          case "focusin":
            (Pv(q) || q.contentEditable === "true") && (ga = q, vc = h, oe = null);
            break;
          case "focusout":
            oe = vc = ga = null;
            break;
          case "mousedown":
            mc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mc = false, v0(T, u, g);
            break;
          case "selectionchange":
            if (ph) break;
          case "keydown":
          case "keyup":
            v0(T, u, g);
        }
        var N;
        if (ec) l: {
          switch (l) {
            case "compositionstart":
              var A = "onCompositionStart";
              break l;
            case "compositionend":
              A = "onCompositionEnd";
              break l;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break l;
          }
          A = void 0;
        }
        else oa ? Iv(l, u) && (A = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (A = "onCompositionStart");
        A && ($v && u.locale !== "ko" && (oa || A !== "onCompositionStart" ? A === "onCompositionEnd" && oa && (N = xv()) : (lu = g, Pf = "value" in lu ? lu.value : lu.textContent, oa = true)), q = sf(h, A), 0 < q.length && (A = new pv(A, l, null, u, g), T.push({ event: A, listeners: q }), N ? A.data = N : (N = kv(u), N !== null && (A.data = N)))), (N = Gh ? Qh(l, u) : Xh(l, u)) && (A = sf(h, "onBeforeInput"), 0 < A.length && (q = new pv("onBeforeInput", "beforeinput", null, u, g), T.push({ event: q, listeners: A }), q.data = N)), Gd(T, l, h, u, g);
      }
      K1(T, t);
    });
  }
  function je(l, t, u) {
    return { instance: l, listener: t, currentTarget: u };
  }
  function sf(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e2 = l, n = e2.stateNode;
      if (e2 = e2.tag, e2 !== 5 && e2 !== 26 && e2 !== 27 || n === null || (e2 = ce(l, u), e2 != null && a.unshift(je(l, e2, n)), e2 = ce(l, t), e2 != null && a.push(je(l, e2, n))), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Xd(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function L1(l, t, u, a, e2) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, h = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || h === null || (i = h, e2 ? (h = ce(u, n), h != null && f.unshift(je(u, h, i))) : e2 || (h = ce(u, n), h != null && f.push(je(u, h, i)))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var jd = /\r\n?/g, Zd = /\u0000|\uFFFD/g;
  function J1(l) {
    return (typeof l == "string" ? l : "" + l).replace(jd, `
`).replace(Zd, "");
  }
  function p1(l, t) {
    return t = J1(t), J1(l) === t;
  }
  function J(l, t, u, a, e2, n) {
    switch (u) {
      case "children":
        if (typeof a == "string") t === "body" || t === "textarea" && a === "" || ma(l, a);
        else if (typeof a == "number" || typeof a == "bigint") t !== "body" && ma(l, "" + a);
        else return;
        break;
      case "className":
        cn(l, "class", a);
        break;
      case "tabIndex":
        cn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cn(l, u, a);
        break;
      case "style":
        Zv(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          cn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = vn(a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(u, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (u === "formAction" ? (t !== "input" && J(l, t, "name", e2.name, e2, null), J(l, t, "formEncType", e2.formEncType, e2, null), J(l, t, "formMethod", e2.formMethod, e2, null), J(l, t, "formTarget", e2.formTarget, e2, null)) : (J(l, t, "encType", e2.encType, e2, null), J(l, t, "method", e2.method, e2, null), J(l, t, "target", e2.target, e2, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = vn(a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = ot);
        return;
      case "onScroll":
        a != null && B("scroll", l);
        return;
      case "onScrollEnd":
        a != null && B("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(S(61));
          if (u = a.__html, u != null) {
            if (e2.children != null) throw Error(S(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = vn(a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === true ? l.setAttribute(u, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        B("beforetoggle", l), B("toggle", l), fn(l, "popover", a);
        break;
      case "xlinkActuate":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        fn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") u = ch.get(u) || u, fn(l, u, a);
        else return;
    }
    G = true;
  }
  function Li(l, t, u, a, e2, n) {
    switch (u) {
      case "style":
        Zv(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(S(61));
          if (u = a.__html, u != null) {
            if (e2.children != null) throw Error(S(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof a == "string") ma(l, a);
        else if (typeof a == "number" || typeof a == "bigint") ma(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && B("scroll", l);
        return;
      case "onScrollEnd":
        a != null && B("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = ot);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Cv.hasOwnProperty(u)) l: {
          if (u[0] === "o" && u[1] === "n" && (e2 = u.endsWith("Capture"), n = u.slice(2, e2 ? u.length - 7 : void 0), t = l[Hl] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, e2), typeof a == "function")) {
            typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, a, e2);
            break l;
          }
          G = true, u in l ? l[u] = a : a === true ? l.setAttribute(u, "") : fn(l, u, a);
        }
        return;
    }
    G = true;
  }
  function El(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        B("error", l), B("load", l);
        var a = false, e2 = false, n;
        for (n in u) if (u.hasOwnProperty(n)) {
          var f = u[n];
          if (f != null) switch (n) {
            case "src":
              a = true;
              break;
            case "srcSet":
              e2 = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(S(137, t));
            default:
              J(l, t, n, f, u, null);
          }
        }
        e2 && J(l, t, "srcSet", u.srcSet, u, null), a && J(l, t, "src", u.src, u, null);
        return;
      case "input":
        B("invalid", l);
        var c = n = f = e2 = null, i = null, h = null;
        for (a in u) if (u.hasOwnProperty(a)) {
          var g = u[a];
          if (g != null) switch (a) {
            case "name":
              e2 = g;
              break;
            case "type":
              f = g;
              break;
            case "checked":
              i = g;
              break;
            case "defaultChecked":
              h = g;
              break;
            case "value":
              n = g;
              break;
            case "defaultValue":
              c = g;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(S(137, t));
              break;
            default:
              J(l, t, a, g, u, null);
          }
        }
        Gv(l, n, c, i, h, f, e2, false);
        return;
      case "select":
        B("invalid", l), a = f = n = null;
        for (e2 in u) if (u.hasOwnProperty(e2) && (c = u[e2], c != null)) switch (e2) {
          case "value":
            n = c;
            break;
          case "defaultValue":
            f = c;
            break;
          case "multiple":
            a = c;
          default:
            J(l, t, e2, c, u, null);
        }
        t = n, u = f, l.multiple = !!a, t != null ? va(l, !!a, t, false) : u != null && va(l, !!a, u, true);
        return;
      case "textarea":
        B("invalid", l), n = e2 = a = null;
        for (f in u) if (u.hasOwnProperty(f) && (c = u[f], c != null)) switch (f) {
          case "value":
            a = c;
            break;
          case "defaultValue":
            e2 = c;
            break;
          case "children":
            n = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(S(91));
            break;
          default:
            J(l, t, f, c, u, null);
        }
        Xv(l, a, e2, n);
        return;
      case "option":
        for (i in u) if (u.hasOwnProperty(i) && (a = u[i], a != null)) switch (i) {
          case "selected":
            l.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            J(l, t, i, a, u, null);
        }
        return;
      case "dialog":
        B("beforetoggle", l), B("toggle", l), B("cancel", l), B("close", l);
        break;
      case "iframe":
      case "object":
        B("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Xe.length; a++) B(Xe[a], l);
        break;
      case "image":
        B("error", l), B("load", l);
        break;
      case "details":
        B("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        B("error", l), B("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in u) if (u.hasOwnProperty(h) && (a = u[h], a != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(S(137, t));
          default:
            J(l, t, h, a, u, null);
        }
        return;
      default:
        if ($f(t)) {
          for (g in u) u.hasOwnProperty(g) && (a = u[g], a !== void 0 && Li(l, t, g, a, u, void 0));
          return;
        }
    }
    for (c in u) u.hasOwnProperty(c) && (a = u[c], a != null && J(l, t, c, a, u, null));
  }
  var Vd = {};
  function Kd(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e2 = null, n = null, f = null, c = null, i = null, h = null, g = null;
        for (o in u) {
          var T = u[o];
          if (u.hasOwnProperty(o) && T != null) switch (o) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i = T;
            default:
              a.hasOwnProperty(o) || J(l, t, o, null, a, T);
          }
        }
        for (var m in a) {
          var o = a[m];
          if (T = u[m], a.hasOwnProperty(m) && (o != null || T != null)) switch (m) {
            case "type":
              o !== T && (G = true), n = o;
              break;
            case "name":
              o !== T && (G = true), e2 = o;
              break;
            case "checked":
              o !== T && (G = true), h = o;
              break;
            case "defaultChecked":
              o !== T && (G = true), g = o;
              break;
            case "value":
              o !== T && (G = true), f = o;
              break;
            case "defaultValue":
              o !== T && (G = true), c = o;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (o != null) throw Error(S(137, t));
              break;
            default:
              o !== T && J(l, t, m, o, a, T);
          }
        }
        pf(l, f, c, i, h, g, n, e2);
        return;
      case "select":
        o = f = c = m = null;
        for (n in u) if (i = u[n], u.hasOwnProperty(n) && i != null) switch (n) {
          case "value":
            break;
          case "multiple":
            o = i;
          default:
            a.hasOwnProperty(n) || J(l, t, n, null, a, i);
        }
        for (e2 in a) if (n = a[e2], i = u[e2], a.hasOwnProperty(e2) && (n != null || i != null)) switch (e2) {
          case "value":
            n !== i && (G = true), m = n;
            break;
          case "defaultValue":
            n !== i && (G = true), c = n;
            break;
          case "multiple":
            n !== i && (G = true), f = n;
          default:
            n !== i && J(l, t, e2, n, a, i);
        }
        t = c, u = f, a = o, m != null ? va(l, !!u, m, false) : !!a != !!u && (t != null ? va(l, !!u, t, true) : va(l, !!u, u ? [] : "", false));
        return;
      case "textarea":
        o = m = null;
        for (c in u) if (e2 = u[c], u.hasOwnProperty(c) && e2 != null && !a.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            J(l, t, c, null, a, e2);
        }
        for (f in a) if (e2 = a[f], n = u[f], a.hasOwnProperty(f) && (e2 != null || n != null)) switch (f) {
          case "value":
            e2 !== n && (G = true), m = e2;
            break;
          case "defaultValue":
            e2 !== n && (G = true), o = e2;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (e2 != null) throw Error(S(91));
            break;
          default:
            e2 !== n && J(l, t, f, e2, a, n);
        }
        Qv(l, m, o);
        return;
      case "option":
        for (var s in u) if (m = u[s], u.hasOwnProperty(s) && m != null && !a.hasOwnProperty(s)) switch (s) {
          case "selected":
            l.selected = false;
            break;
          default:
            J(l, t, s, null, a, m);
        }
        for (i in a) if (m = a[i], o = u[i], a.hasOwnProperty(i) && m !== o && (m != null || o != null)) switch (i) {
          case "selected":
            m !== o && (G = true), l.selected = m && typeof m != "function" && typeof m != "symbol";
            break;
          default:
            J(l, t, i, m, a, o);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var O2 in u) m = u[O2], u.hasOwnProperty(O2) && m != null && !a.hasOwnProperty(O2) && J(l, t, O2, null, a, m);
        for (h in a) if (m = a[h], o = u[h], a.hasOwnProperty(h) && m !== o && (m != null || o != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (m != null) throw Error(S(137, t));
            break;
          default:
            J(l, t, h, m, a, o);
        }
        return;
      default:
        if ($f(t)) {
          for (var U in u) m = u[U], u.hasOwnProperty(U) && m !== void 0 && !a.hasOwnProperty(U) && Li(l, t, U, void 0, a, m);
          for (g in a) m = a[g], o = u[g], !a.hasOwnProperty(g) || m === o || m === void 0 && o === void 0 || Li(l, t, g, m, a, o);
          return;
        }
    }
    for (var y in u) m = u[y], u.hasOwnProperty(y) && m != null && !a.hasOwnProperty(y) && J(l, t, y, null, a, m);
    for (T in a) m = a[T], o = u[T], !a.hasOwnProperty(T) || m === o || m == null && o == null || J(l, t, T, m, a, o);
  }
  function w1(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function xd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e2 = u[a], n = e2.transferSize, f = e2.initiatorType, c = e2.duration;
        if (n && c && w1(f)) {
          for (f = 0, c = e2.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], h = i.startTime;
            if (h > c) break;
            var g = i.transferSize, T = i.initiatorType;
            g && w1(T) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - h) / (i - h)));
          }
          if (--a, t += 8 * (n + f) / (e2.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Ji = null, pi = null;
  function Ze(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function $1(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function W1(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function F1(l, t, u, a) {
    return u = Ze(u).createElement(l), u[Sl] = a, u[Hl] = t, El(u, l, t), yl(u), u;
  }
  function wi(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var $i = null;
  function Ld() {
    var l = window.event;
    return l && l.type === "popstate" ? l === $i ? false : ($i = l, true) : ($i = null, false);
  }
  var Wi = typeof setTimeout == "function" ? setTimeout : void 0, Jd = typeof clearTimeout == "function" ? clearTimeout : void 0, I1 = typeof Promise == "function" ? Promise : void 0, k1 = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Wi, pd = typeof queueMicrotask == "function" ? queueMicrotask : typeof I1 < "u" ? function(l) {
    return I1.resolve(null).then(l).catch(wd);
  } : Wi;
  function wd(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function bu(l) {
    return l === "head";
  }
  function P1(l, t) {
    var u = t, a = 0;
    do {
      var e2 = u.nextSibling;
      if (l.removeChild(u), e2 && e2.nodeType === 8) if (u = e2.data, u === "/$" || u === "/&") {
        if (a === 0) {
          l.removeChild(e2), $a(t);
          return;
        }
        a--;
      } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&") a++;
      else if (u === "html") av(l.ownerDocument.documentElement);
      else if (u === "head") {
        u = l.ownerDocument.head, av(u);
        for (var n = u.firstChild; n; ) {
          var f = n.nextSibling, c = n.nodeName;
          n[ne] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
        }
      } else u === "body" && av(l.ownerDocument.body);
      u = e2;
    } while (u);
    $a(t);
  }
  function ly(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8) if (u = a.data, u === "/$") {
        if (l === 0) break;
        l--;
      } else u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function ty(l, t, u) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, u != null && (l.style.viewTransitionClass = u), u = getComputedStyle(l), u.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var a = 1;
      else for (var e2 = a = 0; e2 < t.length; e2++) {
        var n = t[e2];
        0 < n.width && 0 < n.height && a++;
      }
      a === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + u.paddingTop, l.marginBottom = "-" + u.paddingBottom);
    }
  }
  function uy(l, t) {
    l = l.style, t = t.style;
    var u = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), u = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (u = t.display, l.display = u == null || typeof u == "boolean" ? "" : u, u = t.margin, u != null ? l.margin = u : (u = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = u == null || typeof u == "boolean" ? "" : u, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function ay(l, t, u) {
    return u = u.ownerDocument.defaultView, { rect: l, abs: t.position === "absolute" || t.position === "fixed", clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px", view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth };
  }
  function Fi(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return ay(t, u, l);
  }
  function $d(l) {
    var t = l.getBoundingClientRect();
    t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
    var u = getComputedStyle(l);
    return ay(t, u, l);
  }
  function Wd(l) {
    return l.documentElement.clientHeight;
  }
  function Fd(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function Id(l, t, u, a, e2, n, f, c, i) {
    var h = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var g = h.startViewTransition({ update: function() {
        var m = h.defaultView, o = m.navigation && m.navigation.transition, s = h.fonts.status;
        a();
        var O2 = [];
        if (s === "loaded" && (Wd(h), h.fonts.status === "loading" && O2.push(h.fonts.ready)), s = O2.length, l !== null) for (var U = l.suspenseyImages, y = 0, v = 0; v < U.length; v++) {
          var d2 = U[v];
          if (!d2.complete) {
            var z = d2.getBoundingClientRect();
            if (0 < z.bottom && 0 < z.right && z.top < m.innerHeight && z.left < m.innerWidth) {
              if (y += Ay(d2), y > Of) {
                O2.length = s;
                break;
              }
              d2 = new Promise(Fd.bind(d2)), O2.push(d2);
            }
          }
        }
        if (0 < O2.length) return m = Promise.race([Promise.all(O2), new Promise(function(E2) {
          return setTimeout(E2, 500);
        })]).then(e2, e2), (o ? Promise.allSettled([o.finished, m]) : m).then(n, n);
        if (e2(), o) return o.finished.then(n, n);
        n();
      }, types: u });
      h.__reactViewTransition = g;
      var T = [];
      return g.ready.then(function() {
        for (var m = h.documentElement.getAnimations({ subtree: true }), o = 0; o < m.length; o++) {
          var s = m[o], O2 = s.effect, U = O2.pseudoElement;
          if (U != null && U.startsWith("::view-transition")) {
            T.push(s), s = O2.getKeyframes();
            for (var y = U = void 0, v = true, d2 = 0; d2 < s.length; d2++) {
              var z = s[d2], E2 = z.width;
              if (U === void 0) U = E2;
              else if (U !== E2) {
                v = false;
                break;
              }
              if (E2 = z.height, y === void 0) y = E2;
              else if (y !== E2) {
                v = false;
                break;
              }
              delete z.width, delete z.height, z.transform === "none" && delete z.transform;
            }
            v && U !== void 0 && y !== void 0 && (O2.setKeyframes(s), v = getComputedStyle(O2.target, O2.pseudoElement), v.width !== U || v.height !== y) && (v = s[0], v.width = U, v.height = y, v = s[s.length - 1], v.width = U, v.height = y, O2.setKeyframes(s));
          }
        }
        f();
      }, function(m) {
        h.__reactViewTransition === g && (h.__reactViewTransition = null);
        try {
          if (typeof m == "object" && m !== null) switch (m.name) {
            case "InvalidStateError":
              (m.message === "View transition was skipped because document visibility state is hidden." || m.message === "Skipping view transition because document visibility state has become hidden." || m.message === "Skipping view transition because viewport size changed." || m.message === "Transition was aborted because of invalid state") && (m = null);
          }
          m !== null && i(m);
        } finally {
          a(), e2(), f();
        }
      }), g.finished.finally(function() {
        for (var m = 0; m < T.length; m++) T[m].cancel();
        h.__reactViewTransition === g && (h.__reactViewTransition = null), c();
      }), g;
    } catch {
      return a(), e2(), f(), null;
    }
  }
  function Fu(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  Fu.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : Z({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, Fu.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: true }), a = [], e2 = 0; e2 < u.length; e2++) {
      var n = u[e2].effect;
      n !== null && n.target === l && n.pseudoElement === t && a.push(u[e2]);
    }
    return a;
  }, Fu.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function ey(l) {
    return { name: l, group: new Fu("group", l), imagePair: new Fu("image-pair", l), old: new Fu("old", l), new: new Fu("new", l) };
  }
  function wl(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  wl.prototype.addEventListener = function(l, t, u) {
    var a = null, e2 = null;
    if (!(u != null && typeof u != "boolean" && (a = u.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (fy(n, l, t, u) === -1) {
        var f = this, c = t;
        u != null && typeof u != "boolean" && u.once === true && (c = function(i) {
          f.removeEventListener(l, t, u), typeof t == "function" ? t.call(this, i) : t.handleEvent(i);
        }), a !== null && (e2 = f.removeEventListener.bind(f, l, t, u), a.addEventListener("abort", e2, { once: true }), e2 = a.removeEventListener.bind(a, "abort", e2)), a = Ka(u), n.push({ type: l, listener: t, optionsOrUseCapture: u, attachedListener: c, cleanup: e2 }), Q(this._fragmentFiber.child, false, kd, l, c, a);
      }
      this._eventListeners = n;
    }
  };
  function kd(l, t, u, a) {
    return tl(l).addEventListener(t, u, a), false;
  }
  wl.prototype.removeEventListener = function(l, t, u) {
    var a = this._eventListeners;
    if (a !== null && (t = fy(a, l, t, u), t !== -1)) {
      var e2 = a[t];
      u = e2.attachedListener;
      var n = e2.cleanup;
      e2 = Ka(e2.optionsOrUseCapture), Q(this._fragmentFiber.child, false, Pd, l, u, e2), a.splice(t, 1), n !== null && n();
    }
  };
  function Pd(l, t, u, a) {
    return tl(l).removeEventListener(t, u, a), false;
  }
  function Ka(l) {
    return l != null && typeof l != "boolean" && (l.once === true || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function ny(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function fy(l, t, u, a) {
    if (l.length === 0) return -1;
    a = ny(a);
    for (var e2 = 0; e2 < l.length; e2++) {
      var n = l[e2];
      if (n.type === t && n.listener === u && ny(n.optionsOrUseCapture) === a) return e2;
    }
    return -1;
  }
  wl.prototype.dispatchEvent = function(l) {
    var t = nt(this._fragmentFiber);
    if (t === null) return true;
    t = tl(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u) for (var e2 = 0; e2 < u.length; e2++) {
        var n = u[e2];
        a.addEventListener(n.type, n.attachedListener, Ka(n.optionsOrUseCapture));
      }
      if (t.appendChild(a), l = a.dispatchEvent(l), u) for (e2 = 0; e2 < u.length; e2++) n = u[e2], a.removeEventListener(n.type, n.attachedListener, Ka(n.optionsOrUseCapture));
      return t.removeChild(a), l;
    }
    return t.dispatchEvent(l);
  }, wl.prototype.focus = function(l) {
    Q(this._fragmentFiber.child, true, cy, l, void 0, void 0);
  };
  function cy(l, t) {
    return l.tag === 6 ? false : (l = tl(l), yo(l, t));
  }
  wl.prototype.focusLast = function(l) {
    var t = [];
    Q(this._fragmentFiber.child, true, Ii, t, void 0, void 0);
    for (var u = t.length - 1; 0 <= u && !cy(t[u], l); u--) ;
  };
  function Ii(l, t) {
    return t.push(l), false;
  }
  wl.prototype.blur = function() {
    var l = nt(this._fragmentFiber);
    l !== null && (l = tl(l), l = Ze(l).activeElement, l !== null && Q(this._fragmentFiber.child, false, lo, l, void 0, void 0));
  };
  function lo(l, t) {
    return l.tag === 6 ? false : (l = tl(l), l === t || l.contains(t) ? (t.blur(), true) : false);
  }
  wl.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), Q(this._fragmentFiber.child, false, to, l, void 0, void 0);
  };
  function to(l, t) {
    return l.tag === 6 || (l = tl(l), t.observe(l)), false;
  }
  wl.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), Q(this._fragmentFiber.child, false, uo, l, void 0, void 0);
      for (var u = t = 0; u < yt.length; u++) {
        var a = yt[u];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : yt[t++] = a;
      }
      yt.length = t;
    }
  };
  function uo(l, t) {
    return l.tag === 6 || (l = tl(l), t.unobserve(l)), false;
  }
  var yt = [], ki = false;
  function ao(l, t, u) {
    yt.push({ fragmentInstance: l, observer: t, instance: u }), ki || (ki = true, ho(function() {
      ki = false;
      var a = yt;
      yt = [];
      for (var e2 = 0; e2 < a.length; e2++) {
        var n = a[e2];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  wl.prototype.getClientRects = function() {
    var l = [];
    return Q(this._fragmentFiber.child, false, eo, l, void 0, void 0), l;
  };
  function eo(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else l = tl(l), t.push.apply(t, l.getClientRects());
    return false;
  }
  wl.prototype.getRootNode = function(l) {
    var t = nt(this._fragmentFiber);
    return t === null ? this : tl(t).getRootNode(l);
  }, wl.prototype.compareDocumentPosition = function(l) {
    var t = nt(this._fragmentFiber);
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    Q(this._fragmentFiber.child, false, Ii, u, void 0, void 0);
    var a = tl(t);
    if (u.length === 0) {
      if (u = a, wt(this._fragmentFiber)) {
        l: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break l;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
            t = t.return;
          }
          t = null;
        }
        t != null && (u = t);
      }
      t = this._fragmentFiber;
      var e2 = a = u.compareDocumentPosition(l);
      return u === l ? e2 = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = $t(t)[1], u === null ? e2 = Node.DOCUMENT_POSITION_PRECEDING : (l = tl(u).compareDocumentPosition(l), e2 = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), e2 |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = tl(u[0]), e2 = tl(u[u.length - 1]);
    var n = wt(this._fragmentFiber) ? t.parentElement : a;
    if (n == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(e2) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), c = e2.compareDocumentPosition(l), i = f & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = a && n && f & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || n && e2 === l || i || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !n && e2 === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || no(t, this._fragmentFiber, u[0], u[u.length - 1], l) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function no(l, t, u, a, e2) {
    var n = Hu(e2);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (u = !!n) l: {
        for (; n !== null; ) {
          if (n.tag === 7 && (n === t || n.alternate === t)) {
            u = true;
            break l;
          }
          n = n.return;
        }
        u = false;
      }
      return u;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null) return n = e2.ownerDocument, e2 === n || e2 === n.documentElement || e2 === n.body;
      l: {
        for (n = t, t = nt(t); n !== null; ) {
          if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== t && n.alternate !== t)) {
            n = true;
            break l;
          }
          n = n.return;
        }
        n = false;
      }
      return n;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === u) && (t = Ut(u, n, Mt), t === null ? t = false : (Q(t, true, Pu, n, u), n = Dt, Dt = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === a) && (t = Ut(a, n, Mt), t === null ? t = false : (Q(t, true, Ia, n, a), n = Dt, ku = Dt = null, t = n !== null)), t) : false;
  }
  function iy(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(window.scrollX + l.left, t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight);
  }
  wl.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(S(566));
    var t = [];
    Q(this._fragmentFiber.child, false, Ii, t, void 0, void 0);
    var u = l !== false;
    if (t.length === 0) {
      var a = $t(this._fragmentFiber);
      if (a = u ? a[1] || a[0] || nt(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = tl(a), iy(l, u);
        return;
      }
      if (a = tl(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          u = "host" in a ? a.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length); ) {
      var e2 = t[a];
      e2.tag === 6 ? (e2 = tl(e2), iy(e2, u)) : tl(e2).scrollIntoView(l), a += u ? -1 : 1;
    }
  };
  function fo(l, t) {
    return l = tl(l), vy(l, t), false;
  }
  function vy(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function my(l, t) {
    var u = t._eventListeners;
    if (u !== null) for (var a = 0; a < u.length; a++) {
      var e2 = u[a];
      l.addEventListener(e2.type, e2.attachedListener, Ka(e2.optionsOrUseCapture));
    }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      for (var f = 0, c = 0; c < yt.length; c++) {
        var i = yt[c];
        (i.fragmentInstance !== t || i.observer !== n || i.instance !== l) && (yt[f++] = i);
      }
      yt.length = f, n.observe(l);
    }), vy(l, t));
  }
  function co(l, t) {
    var u = t._eventListeners;
    if (u !== null) for (var a = 0; a < u.length; a++) {
      var e2 = u[a];
      l.removeEventListener(e2.type, e2.attachedListener, Ka(e2.optionsOrUseCapture));
    }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      typeof n.rootMargin == "string" ? ao(t, n, l) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function Pi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pi(u), nn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function io(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e2 = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[ne]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== e2.rel || l.getAttribute("href") !== (e2.href == null || e2.href === "" ? null : e2.href) || l.getAttribute("crossorigin") !== (e2.crossOrigin == null ? null : e2.crossOrigin) || l.getAttribute("title") !== (e2.title == null ? null : e2.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (e2.src == null ? null : e2.src) || l.getAttribute("type") !== (e2.type == null ? null : e2.type) || l.getAttribute("crossorigin") !== (e2.crossOrigin == null ? null : e2.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = e2.name == null ? null : "" + e2.name;
        if (e2.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = ut(l.nextSibling), l === null) break;
    }
    return null;
  }
  function vo(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ut(l.nextSibling), l === null)) return null;
    return l;
  }
  function yy(l, t) {
    for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ut(l.nextSibling), l === null)) return null;
    return l;
  }
  function lv(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function tv(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function mo(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading") t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function ut(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var uv = null;
  function hy(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0) return ut(l.nextSibling);
          t--;
        } else u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function dy(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function yo(l, t) {
    function u() {
      a = true;
    }
    if (l.ownerDocument.activeElement === l) return true;
    var a = false;
    try {
      l.ownerDocument.addEventListener("focus", u, true), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", u, true);
    }
    return a;
  }
  function ho(l) {
    k1(function() {
      k1(function(t) {
        return l(t);
      });
    });
  }
  function oy(l, t, u) {
    switch (t = Ze(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(S(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(S(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(S(454));
        return l;
      default:
        throw Error(S(451));
    }
  }
  function gy(l, t, u) {
    for (var a in u) {
      var e2 = u[a];
      u.hasOwnProperty(a) && e2 != null && J(l, t, a, null, Vd, e2);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === ot && (l.onclick = null), nn(l);
  }
  function av(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    nn(l);
  }
  var at = /* @__PURE__ */ new Map(), Sy = /* @__PURE__ */ new Set();
  function Ve(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Jt = X.d;
  X.d = { f: oo, r: go, D: So, C: zo, L: To, m: so, X: Eo, S: bo, M: Oo };
  function oo() {
    var l = Jt.f(), t = yf();
    return l || t;
  }
  function go(l) {
    var t = fa(l);
    t !== null && t.tag === 5 && t.type === "form" ? gm(t) : Jt.r(l);
  }
  var xa = typeof document > "u" ? null : document;
  function zy(l, t, u) {
    var a = xa;
    if (a && typeof t == "string" && t) {
      var e2 = Wl(t);
      e2 = 'link[rel="' + l + '"][href="' + e2 + '"]', typeof u == "string" && (e2 += '[crossorigin="' + u + '"]'), Sy.has(e2) || (Sy.add(e2), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e2) === null && (t = a.createElement("link"), El(t, "link", l), yl(t), a.head.appendChild(t)));
    }
  }
  function So(l) {
    Jt.D(l), zy("dns-prefetch", l, null);
  }
  function zo(l, t) {
    Jt.C(l, t), zy("preconnect", l, t);
  }
  function To(l, t, u) {
    Jt.L(l, t, u);
    var a = xa;
    if (a && l && t) {
      var e2 = 'link[rel="preload"][as="' + Wl(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e2 += '[imagesrcset="' + Wl(u.imageSrcSet) + '"]', typeof u.imageSizes == "string" && (e2 += '[imagesizes="' + Wl(u.imageSizes) + '"]')) : e2 += '[href="' + Wl(l) + '"]';
      var n = e2;
      switch (t) {
        case "style":
          n = La(l);
          break;
        case "script":
          n = Ja(l);
      }
      if (!(at.has(n) || (l = Z({ rel: "preload", href: t === "image" && u && u.imageSrcSet ? void 0 : l, as: t }, u), at.set(n, l), a.querySelector(e2) !== null || t === "style" && a.querySelector(Ke(n)) || t === "script" && a.querySelector(xe(n))))) {
        var f = a.createElement("link");
        El(f, "link", l), t === "style" && (f[en] = true, f.onload = f.onerror = function() {
          Uv(f);
        }), yl(f), a.head.appendChild(f);
      }
    }
  }
  function so(l, t) {
    Jt.m(l, t);
    var u = xa;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e2 = 'link[rel="modulepreload"][as="' + Wl(a) + '"][href="' + Wl(l) + '"]', n = e2;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ja(l);
      }
      if (!at.has(n) && (l = Z({ rel: "modulepreload", href: l }, t), at.set(n, l), u.querySelector(e2) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(xe(n))) return;
        }
        a = u.createElement("link"), El(a, "link", l), yl(a), u.head.appendChild(a);
      }
    }
  }
  function bo(l, t, u) {
    Jt.S(l, t, u);
    var a = xa;
    if (a && l) {
      var e2 = ca(a).hoistableStyles, n = La(l);
      t = t || "default";
      var f = e2.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(Ke(n))) c.loading = 5;
        else {
          l = Z({ rel: "stylesheet", href: l, "data-precedence": t }, u), (u = at.get(n)) && ev(l, u);
          var i = f = a.createElement("link");
          yl(i), El(i, "link", l), i._p = new Promise(function(h, g) {
            i.onload = h, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, bf(f, t, a);
        }
        f = { type: "stylesheet", instance: f, count: 1, state: c }, e2.set(n, f);
      }
    }
  }
  function Eo(l, t) {
    Jt.X(l, t);
    var u = xa;
    if (u && l) {
      var a = ca(u).hoistableScripts, e2 = Ja(l), n = a.get(e2);
      n || (n = u.querySelector(xe(e2)), n || (l = Z({ src: l, async: true }, t), (t = at.get(e2)) && nv(l, t), n = u.createElement("script"), yl(n), El(n, "link", l), u.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(e2, n));
    }
  }
  function Oo(l, t) {
    Jt.M(l, t);
    var u = xa;
    if (u && l) {
      var a = ca(u).hoistableScripts, e2 = Ja(l), n = a.get(e2);
      n || (n = u.querySelector(xe(e2)), n || (l = Z({ src: l, async: true, type: "module" }, t), (t = at.get(e2)) && nv(l, t), n = u.createElement("script"), yl(n), El(n, "link", l), u.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(e2, n));
    }
  }
  function Ty(l, t, u, a) {
    var e2 = (e2 = It.current) ? Ve(e2) : null;
    if (!e2) throw Error(S(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = La(u.href), t = ca(e2).hoistableStyles, a = t.get(u), a || (a = { type: "style", instance: null, count: 0, state: null }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = La(u.href);
          var n = ca(e2).hoistableStyles, f = n.get(l);
          if (f || (e2 = e2.ownerDocument || e2, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, f), (n = e2.querySelector(Ke(l))) ? n._p || (f.instance = n, f.state.loading = 5) : (n = at.get(l), n || (n = { rel: "preload", as: "style", href: u.href, crossOrigin: u.crossOrigin, integrity: u.integrity, media: u.media, hrefLang: u.hrefLang, referrerPolicy: u.referrerPolicy }, at.set(l, n)), No(e2, l, n, f.state))), t && a === null) throw Error(S(528, ""));
          return f;
        }
        if (t && a !== null) throw Error(S(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = Ja(u), t = ca(e2).hoistableScripts, a = t.get(u), a || (a = { type: "script", instance: null, count: 0, state: null }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(S(444, l));
    }
  }
  function La(l) {
    return 'href="' + Wl(l) + '"';
  }
  function Ke(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function sy(l) {
    return Z({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function No(l, t, u, a) {
    if (t = l.querySelector('link[rel="preload"][as="style"][' + t + "]")) {
      if (t[en] !== true) {
        a.loading = 1;
        return;
      }
    } else t = l.createElement("link"), t[en] = true, t.onload = t.onerror = Uv.bind(null, t), El(t, "link", u), yl(t), l.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Ja(l) {
    return '[src="' + Wl(l) + '"]';
  }
  function xe(l) {
    return "script[async]" + l;
  }
  function by(l, t, u) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + Wl(u.href) + '"]');
        if (a) return t.instance = a, yl(a), a;
        var e2 = Z({}, u, { "data-href": u.href, "data-precedence": u.precedence, href: null, precedence: null });
        return a = (l.ownerDocument || l).createElement("style"), yl(a), El(a, "style", e2), bf(a, u.precedence, l), t.instance = a;
      case "stylesheet":
        e2 = La(u.href);
        var n = l.querySelector(Ke(e2));
        if (n) return t.state.loading |= 4, t.instance = n, yl(n), n;
        a = sy(u), (e2 = at.get(e2)) && ev(a, e2), n = (l.ownerDocument || l).createElement("link"), yl(n);
        var f = n;
        return f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), El(n, "link", a), t.state.loading |= 4, bf(n, u.precedence, l), t.instance = n;
      case "script":
        return n = Ja(u.src), (e2 = l.querySelector(xe(n))) ? (t.instance = e2, yl(e2), e2) : (a = u, (e2 = at.get(n)) && (a = Z({}, u), nv(a, e2)), l = l.ownerDocument || l, e2 = l.createElement("script"), yl(e2), El(e2, "link", a), l.head.appendChild(e2), t.instance = e2);
      case "void":
        return null;
      default:
        throw Error(S(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, bf(a, u.precedence, l));
    return t.instance;
  }
  function bf(l, t, u) {
    for (var a = u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e2 = a.length ? a[a.length - 1] : null, n = e2, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e2) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function ev(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function nv(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Ef = null;
  function Ey(l, t, u) {
    if (Ef === null) {
      var a = /* @__PURE__ */ new Map(), e2 = Ef = /* @__PURE__ */ new Map();
      e2.set(u, a);
    } else e2 = Ef, a = e2.get(u), a || (a = /* @__PURE__ */ new Map(), e2.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e2 = 0; e2 < u.length; e2++) {
      var n = u[e2];
      if (!(n[ne] || n[Sl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function fv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(u, t === "title" ? l.querySelector("head > title") : null);
  }
  function Ao(l, t, u) {
    if (u === 1 || t.itemProp != null) return false;
    switch (l) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return true;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function Oy(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Ny(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Ay(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function _y(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Ay(t), l.suspenseyImages.push(t)), l = Mo.bind(l), t.decode().then(l, l));
  }
  function _o(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e2 = La(a.href), n = t.querySelector(Ke(e2));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Le.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, yl(n);
          return;
        }
        n = t.ownerDocument || t, a = sy(a), (e2 = at.get(e2)) && ev(a, e2), n = n.createElement("link"), yl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), El(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Le.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Of = 0;
  function Do(l, t) {
    return l.stylesheets && l.count === 0 && Af(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Af(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Of === 0 && (Of = 62500 * xd());
      var e2 = setTimeout(function() {
        if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Af(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, (l.imgBytes > Of ? 50 : 800) + t);
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e2);
      };
    } : null;
  }
  function Dy(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Af(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function Le() {
    this.count--, Dy(this);
  }
  function Mo() {
    this.imgCount--, Dy(this);
  }
  var Nf = null;
  function Af(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nf = /* @__PURE__ */ new Map(), t.forEach(Uo, l), Nf = null, Le.call(l));
  }
  function Uo(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Nf.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Nf.set(l, u);
        for (var e2 = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e2.length; n++) {
          var f = e2[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e2 = t.instance, f = e2.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e2), u.set(f, e2), this.count++, a = Le.bind(this), e2.addEventListener("load", a), e2.addEventListener("error", a), n ? n.parentNode.insertBefore(e2, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e2, l.firstChild)), t.state.loading |= 4;
    }
  }
  var pa = { $$typeof: b, Provider: null, Consumer: null, _currentValue: Mu, _currentValue2: Mu, _threadCount: 0 };
  function Ho(l, t, u, a, e2, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kf(0), this.hiddenUpdates = Kf(null), this.identifierPrefix = a, this.onUncaughtError = e2, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function My(l, t, u, a, e2, n, f, c, i, h, g, T) {
    return l = new Ho(l, t, u, f, i, h, g, T, c), t = 1, n === true && (t |= 24), n = Cl(3, null, null, t), l.current = n, n.stateNode = l, t = Nc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: a, isDehydrated: u, cache: t }, Mc(n), l;
  }
  function Uy(l) {
    return l ? (l = Ta, l) : Ta;
  }
  function Hy(l, t, u, a, e2, n) {
    e2 = Uy(e2), a.context === null ? a.context = e2 : a.pendingContext = e2, a = iu(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = vu(l, a, t), u !== null && (ql(u, l, t), Ee(u, l, t));
  }
  function Cy(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function cv(l, t) {
    Cy(l, t), (l = l.alternate) && Cy(l, t);
  }
  function ry(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ru(l, 67108864);
      t !== null && ql(t, l, 67108864), cv(l, 67108864);
    }
  }
  function By(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = pl();
      t = xf(t);
      var u = Ru(l, t);
      u !== null && ql(u, l, t), cv(l, t);
    }
  }
  var wa = true;
  function Co(l, t, u, a) {
    var e2 = _.T;
    _.T = null;
    var n = X.p;
    try {
      X.p = 2, iv(l, t, u, a);
    } finally {
      X.p = n, _.T = e2;
    }
  }
  function ro(l, t, u, a) {
    var e2 = _.T;
    _.T = null;
    var n = X.p;
    try {
      X.p = 8, iv(l, t, u, a);
    } finally {
      X.p = n, _.T = e2;
    }
  }
  function iv(l, t, u, a) {
    if (wa) {
      var e2 = vv(a);
      if (e2 === null) xi(l, t, a, _f, u), qy(l, a);
      else if (Ro(e2, l, t, u, a)) a.stopPropagation();
      else if (qy(l, a), t & 4 && -1 < Bo.indexOf(l)) {
        for (; e2 !== null; ) {
          var n = fa(e2);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var f = Uu(n.pendingLanes);
                if (f !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                    var i = 1 << 31 - jl(f);
                    c.entanglements[1] |= i, f &= ~i;
                  }
                  At(n), (j & 6) === 0 && (cf = Ql() + 500, Qe(0, false));
                }
              }
              break;
            case 31:
            case 13:
              c = Ru(n, 2), c !== null && ql(c, n, 2), yf(), cv(n, 2);
          }
          if (n = vv(a), n === null && xi(l, t, a, _f, u), n === e2) break;
          e2 = n;
        }
        e2 !== null && a.stopPropagation();
      } else xi(l, t, a, null, u);
    }
  }
  function vv(l) {
    return l = Ff(l), mv(l);
  }
  var _f = null;
  function mv(l) {
    if (_f = null, l = Hu(l), l !== null) {
      var t = _t(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = Fa(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = $l(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return _f = l, null;
  }
  function Ry(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Jy()) {
          case Sv:
            return 2;
          case zv:
            return 8;
          case Pe:
          case py:
            return 32;
          case Tv:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yv = false, Eu = null, Ou = null, Nu = null, Je = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Au = [], Bo = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function qy(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Eu = null;
        break;
      case "dragenter":
      case "dragleave":
        Ou = null;
        break;
      case "mouseover":
      case "mouseout":
        Nu = null;
        break;
      case "pointerover":
      case "pointerout":
        Je.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pe.delete(t.pointerId);
    }
  }
  function we(l, t, u, a, e2, n) {
    return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: u, eventSystemFlags: a, nativeEvent: n, targetContainers: [e2] }, t !== null && (t = fa(t), t !== null && ry(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e2 !== null && t.indexOf(e2) === -1 && t.push(e2), l);
  }
  function Ro(l, t, u, a, e2) {
    switch (t) {
      case "focusin":
        return Eu = we(Eu, l, t, u, a, e2), true;
      case "dragenter":
        return Ou = we(Ou, l, t, u, a, e2), true;
      case "mouseover":
        return Nu = we(Nu, l, t, u, a, e2), true;
      case "pointerover":
        var n = e2.pointerId;
        return Je.set(n, we(Je.get(n) || null, l, t, u, a, e2)), true;
      case "gotpointercapture":
        return n = e2.pointerId, pe.set(n, we(pe.get(n) || null, l, t, u, a, e2)), true;
    }
    return false;
  }
  function Yy(l) {
    var t = Hu(l.target);
    if (t !== null) {
      var u = _t(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = Fa(u), t !== null) {
            l.blockedOn = t, _v(l.priority, function() {
              By(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = $l(u), t !== null) {
            l.blockedOn = t, _v(l.priority, function() {
              By(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Df(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = vv(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        Wf = a, u.target.dispatchEvent(a), Wf = null;
      } else return t = fa(u), t !== null && ry(t), l.blockedOn = u, false;
      t.shift();
    }
    return true;
  }
  function Gy(l, t, u) {
    Df(l) && u.delete(t);
  }
  function qo() {
    yv = false, Eu !== null && Df(Eu) && (Eu = null), Ou !== null && Df(Ou) && (Ou = null), Nu !== null && Df(Nu) && (Nu = null), Je.forEach(Gy), pe.forEach(Gy);
  }
  function Mf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, yv || (yv = true, w.unstable_scheduleCallback(w.unstable_NormalPriority, qo)));
  }
  var Uf = null;
  function Qy(l) {
    Uf !== l && (Uf = l, w.unstable_scheduleCallback(w.unstable_NormalPriority, function() {
      Uf === l && (Uf = null);
      for (var t = 0; t < l.length; t += 3) {
        var u = l[t], a = l[t + 1], e2 = l[t + 2];
        if (typeof a != "function") {
          if (mv(a || u) === null) continue;
          break;
        }
        var n = fa(u);
        n !== null && (l.splice(t, 3), t -= 3, $c(n, { pending: true, data: e2, method: u.method, action: a }, a, e2));
      }
    }));
  }
  function $a(l) {
    function t(i) {
      return Mf(i, l);
    }
    Eu !== null && Mf(Eu, l), Ou !== null && Mf(Ou, l), Nu !== null && Mf(Nu, l), Je.forEach(t), pe.forEach(t);
    for (var u = 0; u < Au.length; u++) {
      var a = Au[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Au.length && (u = Au[0], u.blockedOn === null); ) Yy(u), u.blockedOn === null && Au.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null) for (a = 0; a < u.length; a += 3) {
      var e2 = u[a], n = u[a + 1], f = e2[Hl] || null;
      if (typeof n == "function") f || Qy(u);
      else if (f) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (e2 = n, f = n[Hl] || null) c = f.formAction;
          else if (mv(e2) !== null) continue;
        } else c = f.action;
        typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Qy(u);
      }
    }
  }
  function Xy() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function() {
        return new Promise(function(f) {
          return e2 = f;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      e2 !== null && (e2(), e2 = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, e2 = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e2 !== null && (e2(), e2 = null);
      };
    }
  }
  function hv(l) {
    this._internalRoot = l;
  }
  Hf.prototype.render = hv.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    var u = t.current, a = pl();
    Hy(u, a, l, t, null, null);
  }, Hf.prototype.unmount = hv.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Hy(l.current, 2, null, l, null, null), yf(), t[na] = null;
    }
  };
  function Hf(l) {
    this._internalRoot = l;
  }
  Hf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Av();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Au.length && t !== 0 && t < Au[u].priority; u++) ;
      Au.splice(u, 0, l), u === 0 && Yy(l);
    }
  };
  var jy = Ol.version;
  if (jy !== "19.3.0") throw Error(S(527, jy, "19.3.0"));
  X.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(S(188)) : (l = Object.keys(l).join(","), Error(S(268, l)));
    return l = Bf(t), l = l !== null ? Al(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Yo = { bundleType: 0, version: "19.3.0", rendererPackageName: "react-dom", currentDispatcherRef: _, reconcilerVersion: "19.3.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && ($e = __REACT_DEVTOOLS_GLOBAL_HOOK__, !$e.isDisabled && $e.supportsFiber)) try {
    ue = $e.inject(Yo), Xl = $e;
  } catch {
  }
  var $e;
  K.createRoot = function(l, t) {
    if (!Wa(l)) throw Error(S(299));
    var u = false, a = "", e2 = _m, n = Dm, f = Mm;
    return t != null && (t.unstable_strictMode === true && (u = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e2 = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = My(l, 1, false, null, null, u, a, null, e2, n, f, Xy), l[na] = t.current, Ki(l), new hv(t);
  }, K.hydrateRoot = function(l, t, u) {
    if (!Wa(l)) throw Error(S(299));
    var a = false, e2 = "", n = _m, f = Dm, c = Mm, i = null;
    return u != null && (u.unstable_strictMode === true && (a = true), u.identifierPrefix !== void 0 && (e2 = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = My(l, 1, true, t, u ?? null, a, e2, i, n, f, c, Xy), t.context = Uy(null), u = t.current, a = pl(), a = xf(a), e2 = iu(a), e2.callback = null, vu(u, e2, a), u = a, t.current.lanes = u, ee(t, u), At(t), l[na] = t.current, Ki(l), new Hf(t);
  }, K.version = "19.3.0";
} });
var Ko = d({ "client.js"(K, w) {
  function Ol() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ol);
    } catch (pt) {
      console.error(pt);
    }
  }
  Ol(), w.exports = Vo();
} });
var rf = Ko();
var createRoot = rf.createRoot;
var hydrateRoot = rf.hydrateRoot;
var version2 = rf.version;
var esm_client_production_default = rf;

// src/components/layout/ForestBackground.jsx
var ForestBackground = ({ children }) => {
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "relative min-h-screen w-full bg-[#FAF7F0] text-stone-800 font-story overflow-x-hidden selection:bg-amber-200 selection:text-amber-900" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "fixed inset-0 pointer-events-none overflow-hidden z-0" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-amber-200/40 via-orange-100/30 to-transparent rounded-full blur-3xl" }), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute top-1/4 -left-48 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl" }), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute top-2/3 -right-48 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" }), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute bottom-0 inset-x-0 h-40 opacity-20 pointer-events-none" }, /* @__PURE__ */ esm_index_production_default.createElement("svg", { className: "w-full h-full object-cover", viewBox: "0 0 1440 280", preserveAspectRatio: "none", fill: "none" }, /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,181.3C672,171,768,117,864,117.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,280L1392,280C1344,280,1248,280,1152,280C1056,280,960,280,864,280C768,280,672,280,576,280C480,280,384,280,288,280C192,280,96,280,48,280L0,280Z", fill: "#15803D" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,165.3C840,160,960,192,1080,208C1200,224,1320,224,1380,224L1440,224L1440,280L1380,280C1320,280,1200,280,1080,280C960,280,840,280,720,280C600,280,480,280,360,280C240,280,120,280,60,280L0,280Z", fill: "#166534" })))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "relative z-10 min-h-screen flex flex-col" }, children));
};

// src/components/common/Icons.jsx
var FoxIcon = ({ className = "w-6 h-6", color = "currentColor" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M4 8l3-5 5 3 5-3 3 5-2 11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3L4 8z", fill: "#F97316", fillOpacity: "0.15" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", fill: color }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M12 17l-1.5-1.5h3L12 17z", fill: color }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M7 6l5 4 5-4" }));
var StarIcon = ({ className = "w-6 h-6", filled = false, color = "currentColor" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: filled ? "#F59E0B" : "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }));
var Volume2 = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", fill: "currentColor", fillOpacity: "0.2" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }));
var VolumeX = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }), /* @__PURE__ */ esm_index_production_default.createElement("line", { x1: "23", y1: "9", x2: "17", y2: "15" }), /* @__PURE__ */ esm_index_production_default.createElement("line", { x1: "17", y1: "9", x2: "23", y2: "15" }));
var BookOpen = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", fill: "currentColor", fillOpacity: "0.15" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", fill: "currentColor", fillOpacity: "0.15" }));
var MapPin = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z", fill: "currentColor", fillOpacity: "0.2" }), /* @__PURE__ */ esm_index_production_default.createElement("circle", { cx: "12", cy: "10", r: "3" }));
var Settings = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("circle", { cx: "12", cy: "12", r: "3" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }));
var Sparkles = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M12 3l1.912 4.988L19 10l-5.088 2.012L12 17l-1.912-4.988L5 10l5.088-2.012z", fill: "#FBBF24", fillOpacity: "0.4" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M19 17l.956 2.494L22.5 20.5l-2.544 1.006L19 24l-.956-2.494L15.5 20.5l2.544-1.006z", fill: "#FBBF24", fillOpacity: "0.4" }));
var Trophy = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M4 22h16" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2z", fill: "#FBBF24", fillOpacity: "0.3" }));
var Check = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("polyline", { points: "20 6 9 17 4 12" }));
var ArrowRight = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }), /* @__PURE__ */ esm_index_production_default.createElement("polyline", { points: "12 5 19 12 12 19" }));
var ArrowLeft = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("line", { x1: "19", y1: "12", x2: "5", y2: "12" }), /* @__PURE__ */ esm_index_production_default.createElement("polyline", { points: "12 19 5 12 12 5" }));
var RotateCcw = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("polyline", { points: "1 4 1 10 7 10" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }));
var Lock = ({ className = "w-6 h-6" }) => /* @__PURE__ */ esm_index_production_default.createElement("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ esm_index_production_default.createElement("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2", fill: "currentColor", fillOpacity: "0.2" }), /* @__PURE__ */ esm_index_production_default.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }));

// src/services/audioEffects.js
var AudioEffects = class {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }
  getContext() {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }
  // Kliknięcie / dotknięcie karty
  playPop() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(450, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e2) {
    }
  }
  // Sukces / poprawna odpowiedź: radosny akord (C5 - E5 - G5)
  playCorrect() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.09);
        gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.09);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + i * 0.09 + 0.02);
        gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + i * 0.09 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.09);
        osc.stop(ctx.currentTime + i * 0.09 + 0.35);
      });
    } catch (e2) {
    }
  }
  // Złota gwiazdka: magiczne dzwoneczki
  playStar() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const notes = [880, 1046.5, 1318.5, 1567.98];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + idx * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.4);
      });
    } catch (e2) {
    }
  }
  // Ukończenie etapu: wesoła fanfara
  playVictory() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const melody = [
        { f: 523.25, d: 0.12 },
        // C5
        { f: 523.25, d: 0.12 },
        // C5
        { f: 523.25, d: 0.12 },
        // C5
        { f: 659.25, d: 0.25 },
        // E5
        { f: 783.99, d: 0.25 },
        // G5
        { f: 1046.5, d: 0.5 }
        // C6
      ];
      let t = ctx.currentTime;
      melody.forEach((n) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(n.f, t);
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(1e-3, t + n.d);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + n.d);
        t += n.d * 0.95;
      });
    } catch (e2) {
    }
  }
  // Łagodny dźwięk przy pomyłce (delikatne "plum", bez stresu dla dziecka)
  playGentleOops() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e2) {
    }
  }
};
var audioEffects = new AudioEffects();

// src/components/layout/Header.jsx
var Header = ({
  userName = "Zuzia",
  totalStars = 0,
  maxStars = 21,
  stickersCount = 0,
  activeTab = "map",
  // "map", "book", "album"
  onTabChange,
  onOpenParentCorner,
  isMuted = false,
  onToggleMute
}) => {
  return /* @__PURE__ */ esm_index_production_default.createElement("header", { className: "sticky top-0 z-30 w-full bg-cream-50/95 backdrop-blur-md border-b-2 border-amber-200 shadow-sm transition-all px-2.5 sm:px-6 py-2" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2 cursor-pointer select-none", onClick: () => onTabChange("map") }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-orange-400 to-amber-300 p-0.5 shadow-sm border border-amber-300 flex items-center justify-center text-white shrink-0" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xl sm:text-2xl" }, "\u{1F467}")), /* @__PURE__ */ esm_index_production_default.createElement("div", null, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "font-black text-sm sm:text-base text-amber-950 font-story tracking-tight" }, userName), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold border border-amber-200 hidden sm:inline-block" }, "Odkrywczyni")), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-[10px] text-amber-800/80 hidden xs:block font-medium" }, "Lisek wraca do domu \u{1F98A}"))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-2xl bg-gradient-to-r from-amber-100 to-amber-50 border-2 border-amber-300 shadow-inner" }, /* @__PURE__ */ esm_index_production_default.createElement(StarIcon, { className: "w-4 h-4 text-amber-500 fill-amber-400 animate-pulse", filled: true }), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "font-black text-amber-950 text-xs sm:text-sm font-story" }, totalStars), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[10px] text-amber-800/60 font-semibold hidden sm:inline" }, "/ ", maxStars)), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onTabChange("album");
      },
      className: "flex items-center gap-1 px-2.5 py-1 rounded-2xl bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 shadow-inner text-purple-900 font-black text-xs font-story transition-all cursor-pointer",
      title: "Przejd\u017A do Albumu Naklejek"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "\u{1F3A8}"),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, stickersCount)
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-1 sm:gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onTabChange("map");
      },
      className: `flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-2xl font-bold text-xs sm:text-sm font-story transition-all cursor-pointer ${activeTab === "map" ? "bg-emerald-600 text-white shadow-leaf border border-emerald-400 scale-102" : "bg-white text-stone-700 hover:bg-amber-100 border border-stone-200"}`
    },
    /* @__PURE__ */ esm_index_production_default.createElement(MapPin, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "hidden sm:inline" }, "Mapa")
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onTabChange("book");
      },
      className: `flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-2xl font-bold text-xs sm:text-sm font-story transition-all cursor-pointer ${activeTab === "book" ? "bg-fox-600 text-white shadow-wood border border-orange-400 scale-102" : "bg-white text-stone-700 hover:bg-amber-100 border border-stone-200"}`
    },
    /* @__PURE__ */ esm_index_production_default.createElement(BookOpen, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "hidden sm:inline" }, "Ksi\u0105\u017Ceczka")
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onTabChange("album");
      },
      className: `flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-2xl font-bold text-xs sm:text-sm font-story transition-all cursor-pointer ${activeTab === "album" ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-wood border border-amber-300 scale-102" : "bg-white text-stone-700 hover:bg-amber-100 border border-stone-200"}`
    },
    /* @__PURE__ */ esm_index_production_default.createElement(Sparkles, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "hidden md:inline" }, "Album")
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onToggleMute();
      },
      title: isMuted ? "W\u0142\u0105cz d\u017Awi\u0119ki" : "Wycisz d\u017Awi\u0119ki",
      className: "p-1.5 sm:p-2 rounded-2xl bg-white text-stone-600 hover:bg-amber-100 border border-stone-200 transition-all cursor-pointer"
    },
    isMuted ? /* @__PURE__ */ esm_index_production_default.createElement(VolumeX, { className: "w-4 h-4 text-red-500" }) : /* @__PURE__ */ esm_index_production_default.createElement(Volume2, { className: "w-4 h-4 text-emerald-600" })
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onOpenParentCorner();
      },
      title: "K\u0105cik rodzica i ustawienia",
      className: "p-1.5 sm:p-2 rounded-2xl bg-white text-stone-600 hover:bg-amber-100 border border-stone-200 transition-all cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(Settings, { className: "w-4 h-4 text-amber-800" })
  ))));
};

// src/data/stagesData.js
var INTRO_DATA = {
  title: "Lisek wraca do domu",
  subtitle: "Ilustrowana bajka i le\u015Bna przygoda j\u0119zykowa dla Zuzi",
  character: "Zuzia i Rudy Lisek",
  imageHero: "/images/Zuzua lisek i mi\u015B.jpg",
  imageFox: "/images/lisek w szaliku.jpg",
  audio: "/audio/intro.mp3",
  story: `Pewnego s\u0142onecznego poranka Zuzia podesz\u0142a do starej, drewnianej furtki na skraju ogrodu. Tu\u017C za ni\u0105 siedzia\u0142 ma\u0142y, rudy lisek w ciep\u0142ym, zielonym szaliku. Mia\u0142 wielkie, ciekawe oczka, ale wygl\u0105da\u0142 na troszk\u0119 zagubionego.

\u201ECze\u015B\u0107 Zuziu!\u201D \u2013 pisn\u0105\u0142 cichutko lisek. \u201EZgubi\u0142em drog\u0119 powrotn\u0105 do mojej norki w g\u0142\u0119bi lasu. S\u0142ysza\u0142em, \u017Ce jeste\u015B bardzo m\u0105dra i potrafisz uczy\u0107 si\u0119 magicznych s\u0142\xF3w w j\u0119zyku angielskim! Czy pomo\u017Cesz mi przej\u015B\u0107 przez le\u015Bne krainy i wr\xF3ci\u0107 do mojej rodziny?\u201D

Zasady naszej wsp\xF3lnej przygody:
1. W ka\u017Cdym z 7 rozdzia\u0142\xF3w poznasz 5 magicznych s\u0142\xF3wek.
2. Zagrasz w gr\u0119 pami\u0119ciow\u0105 Magiczne Pary.
3. Zdobywasz z\u0142ote gwiazdki w sprawdzianie s\u0142uchowym.
4. Kr\u0119cisz Ko\u0142em Fortuny, zbierasz pi\u0119kne naklejki do Albumu i odblokowujesz kolejne strony bajki!`
};
var STICKERS_DATA = [
  {
    id: "sticker_scarf",
    title: "Lisek w czapeczce",
    description: "Rudy lisek przygotowany na ch\u0142odny wiatr w mi\u0119ciutkiej czapce i szaliku.",
    image: "/images/Lisek w szaliku i czapeczce..jpg",
    rarity: "Z\u0142ota"
  },
  {
    id: "sticker_sandcastle",
    title: "Piaskowy Lisek",
    description: "Zuzia i Lisek ulepili wspania\u0142ego liska z morskiego piasku na pla\u017Cy!",
    image: "/images/Lisek i Zuzia na plazy byduj\u0105 liska z piasku.jpg",
    rarity: "Rzadka"
  },
  {
    id: "sticker_train",
    title: "Podr\xF3\u017C w wagoniku",
    description: "Weso\u0142a wyprawa starym, drewnianym poci\u0105giem przez szumi\u0105cy las.",
    image: "/images/lisek i Zuzia w wagonie kolejowym.jpg",
    rarity: "Rzadka"
  },
  {
    id: "sticker_seal",
    title: "Przyjacielska Foka",
    description: "Urocza foka wysun\u0119\u0142a pyszczek z wody, by przywita\u0107 si\u0119 z Zuzi\u0105.",
    image: "/images/Lisek i Zuzia z fok\u0105 nag brzegiem.jpg",
    rarity: "Z\u0142ota"
  },
  {
    id: "sticker_lighthouse",
    title: "Morska Latarnia",
    description: "Wysoka latarnia morska, kt\xF3ra wskazuje bezpieczn\u0105 drog\u0119 statkom i przyjacio\u0142om.",
    image: "/images/Lisek i Zuzia nad morzem z latarni\u0105 morsk\u0105.jpg",
    rarity: "Legendarna"
  },
  {
    id: "sticker_cottage",
    title: "Przysta\u0144 nad wod\u0105",
    description: "Kolorowe domki rybackie i mewy szybuj\u0105ce nad brzegiem morza.",
    image: "/images/Lisek i Zuzia przy domku na pla\u017Cy.jpg",
    rarity: "Rzadka"
  },
  {
    id: "sticker_sunset",
    title: "Wiecz\xF3r na pla\u017Cy",
    description: "Ciep\u0142e promienie zachodz\u0105cego s\u0142o\u0144ca o\u015Bwietlaj\u0105ce morskie fale.",
    image: "/images/Lisek i Zuzia wieczorem na pla\u017Cy.jpg",
    rarity: "Z\u0142ota"
  },
  {
    id: "sticker_hedgehogs",
    title: "Rodzinka Je\u017Cyk\xF3w",
    description: "Kolczaste le\u015Bne maluchy cz\u0119stuj\u0105 Zuzi\u0119 i Liska czerwonymi jab\u0142uszkami.",
    image: "/images/Zuzia i lisek z je\u017Cami.jpg",
    rarity: "Legendarna"
  }
];
var STAGES_DATA = [
  {
    id: 1,
    number: 1,
    title: "Spotkanie przy furtce",
    subtitle: "Ma\u0142y lisek, stare drzewo i wielki mi\u015B",
    badge: "Etap 1",
    themeColor: "from-amber-100 to-emerald-100",
    illustration: "/images/Zuzua lisek i mi\u015B.jpg",
    audioFile: "/audio/etap1.mp3",
    mapCoordinates: { x: 50, y: 92 },
    // Pozycja na mapie w procentach (dół - furtka)
    description: "Zuzia otwiera furtk\u0119 do lasu i poznaje pierwszych le\u015Bnych mieszka\u0144c\xF3w.",
    storyIntro: "Zuzia ze skrzypni\u0119ciem pchn\u0119\u0142a drewnian\u0105 furtk\u0119 ogrodu. Na mi\u0119kkiej trawie siedzia\u0142 rudy lisek w zielonym szaliku, a obok przechodzi\u0142 pot\u0119\u017Cny, ale \u0142agodny nied\u017Awied\u017A. W ga\u0142\u0119ziach \u015Bpiewa\u0142 ptaszek, a z k\u0119pki mchu wygl\u0105da\u0142a \u017Cabka.",
    words: [
      {
        id: "fox",
        english: "fox",
        polish: "lisek",
        phonetic: "/f\u0252ks/",
        hint: "Rudy zwierzak z puszystym ogonem i zielonym szalikiem",
        emoji: "\u{1F98A}",
        iconName: "Fox",
        imageFile: "/images/lisek w szaliku.jpg",
        audioFile: "/audio/words/fox.mp3"
      },
      {
        id: "tree",
        english: "tree",
        polish: "drzewo",
        phonetic: "/tri\u02D0/",
        hint: "Wysokie, zielone drzewo o grubym pniu",
        emoji: "\u{1F333}",
        iconName: "Tree",
        imageFile: "/images/words/tree.png",
        audioFile: "/audio/words/tree.mp3"
      },
      {
        id: "bird",
        english: "bird",
        polish: "ptaszek",
        phonetic: "/b\u025C\u02D0d/",
        hint: "Ma skrzyd\u0142a i pi\u0119knie \u015Bpiewa w koronach drzew",
        emoji: "\u{1F426}",
        iconName: "Bird",
        imageFile: "/images/words/bird.png",
        audioFile: "/audio/words/bird.mp3"
      },
      {
        id: "frog",
        english: "frog",
        polish: "\u017Cabka",
        phonetic: "/fr\u0252\u0261/",
        hint: "Zielona i skacze: kum-kum!",
        emoji: "\u{1F438}",
        iconName: "Frog",
        imageFile: "/images/\u017Caba.jpg",
        audioFile: "/audio/words/frog.mp3"
      },
      {
        id: "bear",
        english: "bear",
        polish: "nied\u017Awied\u017A / mi\u015B",
        phonetic: "/be\u0259/",
        hint: "Wielki, puszysty i macha \u0142ap\u0105 na powitanie",
        emoji: "\u{1F43B}",
        iconName: "Bear",
        imageFile: "/images/Zuzua lisek i mi\u015B.jpg",
        audioFile: "/audio/words/bear.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 1,
      title: "Rozdzia\u0142 1: Przy drewnianej furtce",
      illustration: "/images/Zuzua lisek i mi\u015B.jpg",
      textParts: [
        { type: "text", content: "Zuzia otwiera ze skrzypni\u0119ciem drewnian\u0105 furtk\u0119 ogrodu. Za ni\u0105 w mi\u0119kkim mchu siedzi ma\u0142y, rudy lisek \u2013 " },
        { type: "word", english: "fox", polish: "lisek", audioFile: "/audio/words/fox.mp3" },
        { type: "text", content: " \u2013 kt\xF3ry z dum\u0105 poprawia sw\xF3j ulubiony zielony szalik. Tu\u017C obok nich szumi pot\u0119\u017Cne, prastare drzewo \u2013 " },
        { type: "word", english: "tree", polish: "drzewo", audioFile: "/audio/words/tree.mp3" },
        { type: "text", content: " \u2013 w kt\xF3rego ga\u0142\u0119ziach weso\u0142o pod\u015Bpiewuje kolorowy ptaszek \u2013 " },
        { type: "word", english: "bird", polish: "ptaszek", audioFile: "/audio/words/bird.mp3" },
        { type: "text", content: ". Nagle spod li\u015Bcia \u0142opianu wyskakuje zielona, roze\u015Bmiana \u017Cabka \u2013 " },
        { type: "word", english: "frog", polish: "\u017Cabka", audioFile: "/audio/words/frog.mp3" },
        { type: "text", content: ", a z oddali dobiega g\u0142\u0119bokie, spokojne pomrukiwanie. To wielki, brunatny nied\u017Awied\u017A \u2013 " },
        { type: "word", english: "bear", polish: "nied\u017Awied\u017A", audioFile: "/audio/words/bear.mp3" },
        { type: "text", content: " \u2013 macha \u0142ap\u0105 na powitanie i wskazuje Zuzi oraz Liskowi bezpieczn\u0105 \u015Bcie\u017Ck\u0119 w g\u0142\u0105b lasu." }
      ]
    }
  },
  {
    id: 2,
    number: 2,
    title: "Le\u015Bna polana",
    subtitle: "Ciep\u0142e s\u0142o\u0144ce, kolorowe kwiaty i motyle",
    badge: "Etap 2",
    themeColor: "from-emerald-100 to-yellow-100",
    illustration: "/images/Zuzia i lisek na kolorowej \u0142\u0105ce.jpg",
    audioFile: "/audio/etap2.mp3",
    mapCoordinates: { x: 26, y: 78 },
    // Po lewej stronie ścieżki
    description: "S\u0142oneczna polanka pe\u0142na kolor\xF3w i zapachu polnych kwiat\xF3w.",
    storyIntro: "\u015Acie\u017Cka wyprowadzi\u0142a Zuzi\u0119 i Liska na rozleg\u0142\u0105 \u0142\u0105k\u0119 utkan\u0105 tysi\u0105cami barwnych kwiat\xF3w. Ciep\u0142e s\u0142o\u0144ce muska\u0142o ich policzki, a nad traw\u0105 ta\u0144czy\u0142y weso\u0142e motyle.",
    words: [
      {
        id: "flower",
        english: "flower",
        polish: "kwiatek",
        phonetic: "/\u02C8fla\u028A.\u0259r/",
        hint: "Kolorowy i pachn\u0105cy na le\u015Bnej \u0142\u0105ce",
        emoji: "\u{1F338}",
        iconName: "Flower",
        imageFile: "/images/Zuzia i lisek na kolorowej \u0142\u0105ce.jpg",
        audioFile: "/audio/words/flower.mp3"
      },
      {
        id: "sun",
        english: "sun",
        polish: "s\u0142o\u0144ce",
        phonetic: "/s\u028Cn/",
        hint: "\u015Awieci ciep\u0142ym blaskiem wysoko na niebie",
        emoji: "\u2600\uFE0F",
        iconName: "Sun",
        imageFile: "/images/words/sun.png",
        audioFile: "/audio/words/sun.mp3"
      },
      {
        id: "grass",
        english: "grass",
        polish: "trawa",
        phonetic: "/\u0261r\u0251\u02D0s/",
        hint: "Mi\u0119kka, zielona ro\u015Bnie pod \u0142apkami liska",
        emoji: "\u{1F331}",
        iconName: "Grass",
        imageFile: "/images/words/grass.png",
        audioFile: "/audio/words/grass.mp3"
      },
      {
        id: "butterfly",
        english: "butterfly",
        polish: "motylek",
        phonetic: "/\u02C8b\u028Ct.\u0259.fla\u026A/",
        hint: "Lata z p\u0142atka na p\u0142atek, ma wzorzyste skrzyde\u0142ka",
        emoji: "\u{1F98B}",
        iconName: "Butterfly",
        imageFile: "/images/motyl.jpg",
        audioFile: "/audio/words/butterfly.mp3"
      },
      {
        id: "rock",
        english: "rock",
        polish: "kamie\u0144",
        phonetic: "/r\u0252k/",
        hint: "Du\u017Cy, nagrzany od s\u0142o\u0144ca kamie\u0144 do odpoczynku",
        emoji: "\u{1FAA8}",
        iconName: "Rock",
        imageFile: "/images/words/rock.png",
        audioFile: "/audio/words/rock.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 2,
      title: "Rozdzia\u0142 2: S\u0142oneczna Polana",
      illustration: "/images/Zuzia i lisek na kolorowej \u0142\u0105ce.jpg",
      textParts: [
        { type: "text", content: "\u015Acie\u017Cka zaprowadzi\u0142a Zuzi\u0119 i Liska na szerok\u0105 polan\u0119. Wysoko na b\u0142\u0119kitnym niebie l\u015Bni\u0142o ciep\u0142e s\u0142o\u0144ce \u2013 " },
        { type: "word", english: "sun", polish: "s\u0142o\u0144ce", audioFile: "/audio/words/sun.mp3" },
        { type: "text", content: ", kt\xF3re ogrzewa\u0142o ich noski. Pod stopami szele\u015Bci\u0142a \u015Bwie\u017Ca, zielona trawa \u2013 " },
        { type: "word", english: "grass", polish: "trawa", audioFile: "/audio/words/grass.mp3" },
        { type: "text", content: ". Zuzia pochyli\u0142a si\u0119 i zerwa\u0142a pachn\u0105cy le\u015Bny kwiatek \u2013 " },
        { type: "word", english: "flower", polish: "kwiatek", audioFile: "/audio/words/flower.mp3" },
        { type: "text", content: ", a tu\u017C nad nim zata\u0144czy\u0142 b\u0142\u0119kitny motylek \u2013 " },
        { type: "word", english: "butterfly", polish: "motylek", audioFile: "/audio/words/butterfly.mp3" },
        { type: "text", content: ". Zm\u0119czeni podr\xF3\u017Cnicy usiedli na chwil\u0119 na wielkim, ciep\u0142ym kamieniu \u2013 " },
        { type: "word", english: "rock", polish: "kamie\u0144", audioFile: "/audio/words/rock.mp3" },
        { type: "text", content: ", by nabra\u0107 si\u0142 przed dalsz\u0105 drog\u0105 nad szumi\u0105cy strumyk." }
      ]
    }
  },
  {
    id: 3,
    number: 3,
    title: "Nad strumykiem",
    subtitle: "Krystaliczna woda, mostek i p\u0142ywaj\u0105ce kaczki",
    badge: "Etap 3",
    themeColor: "from-sky-100 to-teal-100",
    illustration: "/images/Zuzia i lisek na mostku.jpg",
    audioFile: "/audio/etap3.mp3",
    mapCoordinates: { x: 70, y: 64 },
    // Po prawej stronie strumyka
    description: "Czysta woda, srebrne rybki i drewniany mostek \u0142\u0105cz\u0105cy brzegi rzeki.",
    storyIntro: "W oddali rozleg\u0142 si\u0119 szum wody. Zuzia i Lisek stan\u0119li na starym drewnianym mostku, spogl\u0105daj\u0105c w przejrzysty nurt rzeczki, gdzie pluska\u0142y si\u0119 rybki i kaczuszki.",
    words: [
      {
        id: "water",
        english: "water",
        polish: "woda",
        phonetic: "/\u02C8w\u0254\u02D0.t\u0259r/",
        hint: "Czysta i ch\u0142odna woda w le\u015Bnym potoku",
        emoji: "\u{1F4A7}",
        iconName: "Water",
        imageFile: "/images/words/water.png",
        audioFile: "/audio/words/water.mp3"
      },
      {
        id: "fish",
        english: "fish",
        polish: "rybka",
        phonetic: "/f\u026A\u0283/",
        hint: "P\u0142ywa zwinnie w strumyku i macha p\u0142etw\u0105",
        emoji: "\u{1F41F}",
        iconName: "Fish",
        imageFile: "/images/words/fish.png",
        audioFile: "/audio/words/fish.mp3"
      },
      {
        id: "bridge",
        english: "bridge",
        polish: "mostek",
        phonetic: "/br\u026Ad\u0292/",
        hint: "Drewniany mostek, po kt\xF3rym przechodzimy na drugi brzeg",
        emoji: "\u{1F309}",
        iconName: "Bridge",
        imageFile: "/images/Zuzia i lisek na mostku.jpg",
        audioFile: "/audio/words/bridge.mp3"
      },
      {
        id: "duck",
        english: "duck",
        polish: "kaczuszka",
        phonetic: "/d\u028Ck/",
        hint: "\u017B\xF3\u0142todzioby ptak na wodzie: kwa-kwa!",
        emoji: "\u{1F986}",
        iconName: "Duck",
        imageFile: "/images/words/duck.png",
        audioFile: "/audio/words/duck.mp3"
      },
      {
        id: "boat",
        english: "boat",
        polish: "\u0142\xF3dka",
        phonetic: "/b\u0259\u028At/",
        hint: "Ma\u0142a drewniana \u0142\xF3dka ko\u0142ysze si\u0119 przy brzegu",
        emoji: "\u26F5",
        iconName: "Boat",
        imageFile: "/images/words/boat.png",
        audioFile: "/audio/words/boat.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 3,
      title: "Rozdzia\u0142 3: Przy szumi\u0105cym strumyku",
      illustration: "/images/Zuzia i lisek na mostku.jpg",
      textParts: [
        { type: "text", content: "W oddali rozleg\u0142 si\u0119 przyjemny szum. Zuzia i Lisek dotarli nad le\u015Bn\u0105 rzeczk\u0119, w kt\xF3rej p\u0142yn\u0119\u0142a krystalicznie czysta woda \u2013 " },
        { type: "word", english: "water", polish: "woda", audioFile: "/audio/words/water.mp3" },
        { type: "text", content: ". Pod tafl\u0105 wody b\u0142yszcza\u0142a ma\u0142a, zwinna rybka \u2013 " },
        { type: "word", english: "fish", polish: "rybka", audioFile: "/audio/words/fish.mp3" },
        { type: "text", content: ", kt\xF3ra machn\u0119\u0142a ogonkiem na powitanie. Aby przej\u015B\u0107 na drugi brzeg, przyjaciele weszli na stary, drewniany mostek \u2013 " },
        { type: "word", english: "bridge", polish: "mostek", audioFile: "/audio/words/bridge.mp3" },
        { type: "text", content: ". Obok mostka przep\u0142yn\u0119\u0142a weso\u0142a kaczuszka \u2013 " },
        { type: "word", english: "duck", polish: "kaczuszka", audioFile: "/audio/words/duck.mp3" },
        { type: "text", content: ", a przy trzcinach ko\u0142ysa\u0142a si\u0119 zacumowana ma\u0142a \u0142\xF3dka \u2013 " },
        { type: "word", english: "boat", polish: "\u0142\xF3dka", audioFile: "/audio/words/boat.mp3" },
        { type: "text", content: ". Przeprawa uda\u0142a si\u0119 znakomicie!" }
      ]
    }
  },
  {
    id: 4,
    number: 4,
    title: "Piknik w lesie",
    subtitle: "Pyszne przysmaki, le\u015Bny chlebek i s\u0142odki mi\xF3d",
    badge: "Etap 4",
    themeColor: "from-rose-100 to-amber-100",
    illustration: "/images/Piknik Zuzi z Liskiem.jpg",
    audioFile: "/audio/etap4.mp3",
    mapCoordinates: { x: 30, y: 50 },
    // W centrum ścieżki
    description: "Chwila na zas\u0142u\u017Cony odpoczynek! Zuzia rozk\u0142ada kraciasty kocyk i smako\u0142yki.",
    storyIntro: "Gdy brzuszek Liska zacz\u0105\u0142 g\u0142o\u015Bno burcze\u0107, Zuzia roz\u0142o\u017Cy\u0142a piknikowy kocyk. Wyci\u0105gn\u0119\u0142a chrupi\u0105ce jab\u0142ka, \u015Bwie\u017Cy chleb, dzbanek mleka i z\u0142oty mi\xF3d, a w bor\xF3wkach czeka\u0142y pyszne jagody.",
    words: [
      {
        id: "apple",
        english: "apple",
        polish: "jab\u0142ko",
        phonetic: "/\u02C8\xE6p.\u0259l/",
        hint: "Czerwone, soczyste jab\u0142uszko, kt\xF3re niesie je\u017Cyk",
        emoji: "\u{1F34E}",
        iconName: "Apple",
        imageFile: "/images/je\u017C z jab\u0142kiem.jpg",
        audioFile: "/audio/words/apple.mp3"
      },
      {
        id: "bread",
        english: "bread",
        polish: "chleb",
        phonetic: "/bred/",
        hint: "\u015Awie\u017Cy, pachn\u0105cy chlebek z chrupi\u0105c\u0105 sk\xF3rk\u0105",
        emoji: "\u{1F35E}",
        iconName: "Bread",
        imageFile: "/images/words/bread.png",
        audioFile: "/audio/words/bread.mp3"
      },
      {
        id: "milk",
        english: "milk",
        polish: "mleko",
        phonetic: "/m\u026Alk/",
        hint: "Bia\u0142e, zdrowe mleczko w kubeczku",
        emoji: "\u{1F95B}",
        iconName: "Milk",
        imageFile: "/images/words/milk.png",
        audioFile: "/audio/words/milk.mp3"
      },
      {
        id: "honey",
        english: "honey",
        polish: "mi\xF3d",
        phonetic: "/\u02C8h\u028Cn.i/",
        hint: "Z\u0142ocisty, s\u0142odki przysmak od le\u015Bnych pszcz\xF3\u0142ek",
        emoji: "\u{1F36F}",
        iconName: "Honey",
        imageFile: "/images/words/honey.png",
        audioFile: "/audio/words/honey.mp3"
      },
      {
        id: "berry",
        english: "berry",
        polish: "jagoda",
        phonetic: "/\u02C8ber.i/",
        hint: "Fioletowa s\u0142odka jag\xF3dka prosto z krzaczka",
        emoji: "\u{1FAD0}",
        iconName: "Berry",
        imageFile: "/images/words/berry.png",
        audioFile: "/audio/words/berry.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 4,
      title: "Rozdzia\u0142 4: Le\u015Bny Piknik",
      illustration: "/images/Piknik Zuzi z Liskiem.jpg",
      textParts: [
        { type: "text", content: "Liskowi zaburcza\u0142o w brzuszku. Zuzia wyj\u0119\u0142a z plecaka kraciasty kocyk i roz\u0142o\u017Cy\u0142a smako\u0142yki. Na kocyku pojawi\u0142o si\u0119 chrupi\u0105ce jab\u0142ko \u2013 " },
        { type: "word", english: "apple", polish: "jab\u0142ko", audioFile: "/audio/words/apple.mp3" },
        { type: "text", content: ", bochenek pachn\u0105cego chleba \u2013 " },
        { type: "word", english: "bread", polish: "chleb", audioFile: "/audio/words/bread.mp3" },
        { type: "text", content: " oraz kubek, w kt\xF3rym by\u0142o pyszne mleko \u2013 " },
        { type: "word", english: "milk", polish: "mleko", audioFile: "/audio/words/milk.mp3" },
        { type: "text", content: ". Do chleba dodali z\u0142oty, g\u0119sty mi\xF3d \u2013 " },
        { type: "word", english: "honey", polish: "mi\xF3d", audioFile: "/audio/words/honey.mp3" },
        { type: "text", content: ", a na deser zebra\u0142y si\u0119 le\u015Bne jagody \u2013 " },
        { type: "word", english: "berry", polish: "jagoda", audioFile: "/audio/words/berry.mp3" },
        { type: "text", content: ". Po tak wspania\u0142ym posi\u0142ku Lisek by\u0142 pe\u0142en nowej energii!" }
      ]
    }
  },
  {
    id: 5,
    number: 5,
    title: "Zwierz\u0119ta i deszczowy las",
    subtitle: "Ciep\u0142y deszczyk pod li\u015Bciem, sowa i kr\xF3liczek",
    badge: "Etap 5",
    themeColor: "from-indigo-100 to-purple-100",
    illustration: "/images/Zuzia i lisek pod li\u015Bciem w czasie deszczu.jpg",
    audioFile: "/audio/etap5.mp3",
    mapCoordinates: { x: 70, y: 36 },
    // Po prawej stronie ścieżki
    description: "Ciep\u0142y letni deszczyk. Przyjaciele chroni\u0105 si\u0119 pod wielkim li\u015Bciem \u0142opianu.",
    storyIntro: "Z nieba spad\u0142y pierwsze krople ciep\u0142ego deszczu. Zuzia i Lisek schowali si\u0119 pod olbrzymim zielonym li\u015Bciem, jak pod parasolem. Z ga\u0142\u0119zi spogl\u0105da\u0142a na nich m\u0105dra sowa, a z norki wyjrza\u0142 puszysty zaj\u0105czek.",
    words: [
      {
        id: "owl",
        english: "owl",
        polish: "sowa",
        phonetic: "/a\u028Al/",
        hint: "M\u0105dry ptak z wielkimi oczami, siedzi na ga\u0142\u0119zi",
        emoji: "\u{1F989}",
        iconName: "Owl",
        imageFile: "/images/sowa.jpg",
        audioFile: "/audio/words/owl.mp3"
      },
      {
        id: "moon",
        english: "moon",
        polish: "ksi\u0119\u017Cyc",
        phonetic: "/mu\u02D0n/",
        hint: "Srebrzysty rogalik wy\u0142ania si\u0119 zza chmur",
        emoji: "\u{1F319}",
        iconName: "Moon",
        imageFile: "/images/words/moon.png",
        audioFile: "/audio/words/moon.mp3"
      },
      {
        id: "star",
        english: "star",
        polish: "gwiazdka",
        phonetic: "/st\u0251\u02D0r/",
        hint: "Mruga z\u0142otym blaskiem na wieczornym niebie",
        emoji: "\u2B50",
        iconName: "Star",
        imageFile: "/images/words/star.png",
        audioFile: "/audio/words/star.mp3"
      },
      {
        id: "rabbit",
        english: "rabbit",
        polish: "kr\xF3liczek",
        phonetic: "/\u02C8r\xE6b.\u026At/",
        hint: "Ma d\u0142ugie uszy i chrupie marchewki",
        emoji: "\u{1F430}",
        iconName: "Rabbit",
        imageFile: "/images/zaj\u0105c z marchewkami.jpg",
        audioFile: "/audio/words/rabbit.mp3"
      },
      {
        id: "squirrel",
        english: "squirrel",
        polish: "wiewi\xF3rka",
        phonetic: "/\u02C8skw\u026Ar.\u0259l/",
        hint: "Ruda spryciula skacze po ga\u0142\u0119ziach z orzeszkiem",
        emoji: "\u{1F43F}\uFE0F",
        iconName: "Squirrel",
        imageFile: "/images/words/squirrel.png",
        audioFile: "/audio/words/squirrel.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 5,
      title: "Rozdzia\u0142 5: Pod Zielonym Li\u015Bciem",
      illustration: "/images/Zuzia i lisek pod li\u015Bciem w czasie deszczu.jpg",
      textParts: [
        { type: "text", content: "Kiedy ciep\u0142y letni deszcz zacz\u0105\u0142 kropi\u0107, Zuzia i Lisek schronili si\u0119 pod wielkim li\u015Bciem. Na niebie powoli rozb\u0142ys\u0142 srebrny ksi\u0119\u017Cyc \u2013 " },
        { type: "word", english: "moon", polish: "ksi\u0119\u017Cyc", audioFile: "/audio/words/moon.mp3" },
        { type: "text", content: ". Obok niego mruga\u0142a pierwsza jasna gwiazdka \u2013 " },
        { type: "word", english: "star", polish: "gwiazdka", audioFile: "/audio/words/star.mp3" },
        { type: "text", content: ". Z ga\u0142\u0119zi sosenki patrzy\u0142a na nich m\u0105dra sowa \u2013 " },
        { type: "word", english: "owl", polish: "sowa", audioFile: "/audio/words/owl.mp3" },
        { type: "text", content: ", a spod mokrych paproci wyjrza\u0142 ciekawy kr\xF3liczek \u2013 " },
        { type: "word", english: "rabbit", polish: "kr\xF3liczek", audioFile: "/audio/words/rabbit.mp3" },
        { type: "text", content: ", obok kt\xF3rego przemkn\u0119\u0142a zwinna wiewi\xF3rka \u2013 " },
        { type: "word", english: "squirrel", polish: "wiewi\xF3rka", audioFile: "/audio/words/squirrel.mp3" },
        { type: "text", content: ". Deszcz usta\u0142, a le\u015Bne powietrze pachnia\u0142o cudownie \u015Bwie\u017Co!" }
      ]
    }
  },
  {
    id: 6,
    number: 6,
    title: "Wyprawa nad morze",
    subtitle: "Z\u0142oty piasek, weso\u0142y krab, foka i muszelki",
    badge: "Etap 6",
    themeColor: "from-cyan-100 to-blue-200",
    illustration: "/images/Lisek i Zuzia na pla\u017Cy.jpg",
    audioFile: "/audio/etap6.mp3",
    mapCoordinates: { x: 30, y: 22 },
    // Wyżej po lewej przy wydmach
    description: "\u015Acie\u017Cka doprowadzi\u0142a przyjaci\xF3\u0142 a\u017C do piaszczystej pla\u017Cy i szumi\u0105cych morskich fal.",
    storyIntro: "Las si\u0119 rozst\u0105pi\u0142 i przed Zuzi\u0105 i Liskiem ukaza\u0142o si\u0119 bezkresne morze! Ciep\u0142y piasek \u0142askota\u0142 w st\xF3pki, na kamieniu wygrzewa\u0142 si\u0119 ma\u0142y krab, a z fal wychyli\u0142a si\u0119 u\u015Bmiechni\u0119ta foka.",
    words: [
      {
        id: "sea",
        english: "sea",
        polish: "morze",
        phonetic: "/si\u02D0/",
        hint: "Wielka, b\u0142\u0119kitna woda z falami",
        emoji: "\u{1F30A}",
        iconName: "Water",
        imageFile: "/images/Lisek i Zuzia na pla\u017Cy.jpg",
        audioFile: "/audio/words/sea.mp3"
      },
      {
        id: "sand",
        english: "sand",
        polish: "piasek",
        phonetic: "/s\xE6nd/",
        hint: "Z\u0142oty i ciep\u0142y piasek na pla\u017Cy",
        emoji: "\u{1F3D6}\uFE0F",
        iconName: "Rock",
        imageFile: "/images/Lisek i Zuzia na plazy byduj\u0105 liska z piasku.jpg",
        audioFile: "/audio/words/sand.mp3"
      },
      {
        id: "crab",
        english: "crab",
        polish: "krab",
        phonetic: "/kr\xE6b/",
        hint: "Chodzi bokiem po piasku i ma ma\u0142e szczypce",
        emoji: "\u{1F980}",
        iconName: "Fish",
        imageFile: "/images/Krab.jpg",
        audioFile: "/audio/words/crab.mp3"
      },
      {
        id: "seal",
        english: "seal",
        polish: "foka",
        phonetic: "/si\u02D0l/",
        hint: "P\u0142ywa w morzu i weso\u0142o klaszcze p\u0142etwami",
        emoji: "\u{1F9AD}",
        iconName: "Duck",
        imageFile: "/images/Foka.jpg",
        audioFile: "/audio/words/seal.mp3"
      },
      {
        id: "shell",
        english: "shell",
        polish: "muszelka",
        phonetic: "/\u0283el/",
        hint: "\u015Aliczna, spiralna muszelka znaleziona w piasku",
        emoji: "\u{1F41A}",
        iconName: "Flower",
        imageFile: "/images/words/shell.png",
        audioFile: "/audio/words/shell.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 6,
      title: "Rozdzia\u0142 6: Szum Morskich Fal",
      illustration: "/images/Lisek i Zuzia na pla\u017Cy.jpg",
      textParts: [
        { type: "text", content: "Niespodziewanie las ust\u0105pi\u0142 miejsca wydmom, a w powietrzu poczuli zapach morskiej bryzy. Przed nimi rozpo\u015Bciera\u0142o si\u0119 b\u0142\u0119kitne morze \u2013 " },
        { type: "word", english: "sea", polish: "morze", audioFile: "/audio/words/sea.mp3" },
        { type: "text", content: ". Lisek z rado\u015Bci\u0105 zanurzy\u0142 \u0142apki w ciep\u0142y, z\u0142oty piasek \u2013 " },
        { type: "word", english: "sand", polish: "piasek", audioFile: "/audio/words/sand.mp3" },
        { type: "text", content: ". Obok kamyka przeszed\u0142 czerwony krab \u2013 " },
        { type: "word", english: "crab", polish: "krab", audioFile: "/audio/words/crab.mp3" },
        { type: "text", content: ", a z morskich fal wy\u0142oni\u0142a si\u0119 urocza foka \u2013 " },
        { type: "word", english: "seal", polish: "foka", audioFile: "/audio/words/seal.mp3" },
        { type: "text", content: ", kt\xF3ra podarowa\u0142a Zuzi l\u015Bni\u0105c\u0105 muszelk\u0119 \u2013 " },
        { type: "word", english: "shell", polish: "muszelka", audioFile: "/audio/words/shell.mp3" },
        { type: "text", content: ". Zuzia schowa\u0142a muszelk\u0119 do kieszonki na pami\u0105tk\u0119 wielkiej wyprawy!" }
      ]
    }
  },
  {
    id: 7,
    number: 7,
    title: "Dom Liska",
    subtitle: "Ciep\u0142a norka, mi\u0119kkie \u0142\xF3\u017Ceczko i st\u0119skniona rodzina",
    badge: "Etap 7 - Fina\u0142",
    themeColor: "from-amber-100 to-orange-200",
    illustration: "/images/Zuzia i lisek w domu liska.jpg",
    audioFile: "/audio/etap7.mp3",
    mapCoordinates: { x: 50, y: 10 },
    // Na samej górze mapy przy domku
    description: "Uda\u0142o si\u0119! Dotarli\u015Bcie do przytulnego domku Liska w korzeniach starego d\u0119bu.",
    storyIntro: "I wreszcie, po\u015Br\xF3d korzeni prastarego d\u0119bu, ukaza\u0142 si\u0119 uroczy le\u015Bny domek! W oknie pali\u0142o si\u0119 ciep\u0142e \u015Bwiate\u0142ko, a w progu sta\u0142a ca\u0142a rodzina Liska, witaj\u0105c podr\xF3\u017Cnik\xF3w z otwartymi ramionami.",
    words: [
      {
        id: "house",
        english: "house",
        polish: "domek",
        phonetic: "/ha\u028As/",
        hint: "Ciep\u0142y, bezpieczny le\u015Bny domek Liska",
        emoji: "\u{1F3E1}",
        iconName: "House",
        imageFile: "/images/Zuzia i lisek w domu liska.jpg",
        audioFile: "/audio/words/house.mp3"
      },
      {
        id: "door",
        english: "door",
        polish: "drzwi",
        phonetic: "/d\u0254\u02D0r/",
        hint: "Drewniane drzwi otwieraj\u0105 si\u0119 na o\u015Bcie\u017C",
        emoji: "\u{1F6AA}",
        iconName: "Door",
        imageFile: "/images/words/door.png",
        audioFile: "/audio/words/door.mp3"
      },
      {
        id: "window",
        english: "window",
        polish: "okno",
        phonetic: "/\u02C8w\u026An.d\u0259\u028A/",
        hint: "Okienko, przez kt\xF3re wpada blask gwiazd",
        emoji: "\u{1FA9F}",
        iconName: "Window",
        imageFile: "/images/words/window.png",
        audioFile: "/audio/words/window.mp3"
      },
      {
        id: "bed",
        english: "bed",
        polish: "\u0142\xF3\u017Ceczko",
        phonetic: "/bed/",
        hint: "Mi\u0119kkie \u0142\xF3\u017Ceczko z ko\u0142derk\u0105 z pachn\u0105cego mchu",
        emoji: "\u{1F6CF}\uFE0F",
        iconName: "Bed",
        imageFile: "/images/words/bed.png",
        audioFile: "/audio/words/bed.mp3"
      },
      {
        id: "family",
        english: "family",
        polish: "rodzina",
        phonetic: "/\u02C8f\xE6m.\u0259l.i/",
        hint: "Mama, tata i lisi\u0105tka \u2013 wszyscy, kt\xF3rzy bardzo si\u0119 kochaj\u0105",
        emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
        iconName: "Family",
        imageFile: "/images/words/family.png",
        audioFile: "/audio/words/family.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 7,
      title: "Rozdzia\u0142 7: Szcz\u0119\u015Bliwy Powr\xF3t",
      illustration: "/images/Zuzia i lisek w domu liska.jpg",
      textParts: [
        { type: "text", content: "I wreszcie, po\u015Br\xF3d korzeni wielkiego d\u0119bu, ukaza\u0142 si\u0119 uroczy domek \u2013 " },
        { type: "word", english: "house", polish: "domek", audioFile: "/audio/words/house.mp3" },
        { type: "text", content: ". Zuzia i Lisek podbiegli bli\u017Cej. W\u0142a\u015Bnie otworzy\u0142y si\u0119 drewniane drzwi \u2013 " },
        { type: "word", english: "door", polish: "drzwi", audioFile: "/audio/words/door.mp3" },
        { type: "text", content: ", a przez o\u015Bwietlone okno \u2013 " },
        { type: "word", english: "window", polish: "okno", audioFile: "/audio/words/window.mp3" },
        { type: "text", content: " wida\u0107 by\u0142o przygotowane mi\u0119kkie \u0142\xF3\u017Ceczko \u2013 " },
        { type: "word", english: "bed", polish: "\u0142\xF3\u017Ceczko", audioFile: "/audio/words/bed.mp3" },
        { type: "text", content: ". Na spotkanie Liskowi wybieg\u0142a ca\u0142a jego st\u0119skniona rodzina \u2013 " },
        { type: "word", english: "family", polish: "rodzina", audioFile: "/audio/words/family.mp3" },
        { type: "text", content: "! Wszyscy przytulili Zuzi\u0119 z ogromn\u0105 wdzi\u0119czno\u015Bci\u0105. Dzielna Zuzia pozna\u0142a tyle pi\u0119knych angielskich s\u0142\xF3wek i sprawi\u0142a, \u017Ce ma\u0142y Lisek zn\xF3w by\u0142 bezpieczny w swoim ciep\u0142ym domu!" }
      ]
    }
  }
];

// src/services/speechService.js
var SpeechService = class {
  constructor() {
    this.synth = typeof window !== "undefined" ? window.speechSynthesis : null;
    this.cachedVoices = [];
    this.currentAudio = null;
    this.rate = 0.9;
    this.isMuted = false;
    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== void 0) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }
  loadVoices() {
    if (!this.synth) return [];
    this.cachedVoices = this.synth.getVoices();
    return this.cachedVoices;
  }
  getBestVoice(lang = "en") {
    const voices = this.cachedVoices.length > 0 ? this.cachedVoices : this.loadVoices();
    if (!voices || voices.length === 0) return null;
    if (lang === "en") {
      const preferred = voices.find(
        (v) => (v.lang.startsWith("en-GB") || v.lang.startsWith("en-US")) && (v.name.includes("Sonia") || v.name.includes("Aria") || v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Zira"))
      );
      if (preferred) return preferred;
      const anyEnglish = voices.find((v) => v.lang.startsWith("en"));
      if (anyEnglish) return anyEnglish;
    } else if (lang === "pl") {
      const polish = voices.find((v) => v.lang.startsWith("pl"));
      if (polish) return polish;
    }
    return voices[0] || null;
  }
  /**
   * Odtwórz słowo lub zdanie po angielsku.
   * Zawsze priorytetyzuje pliki .mp3 z folderu /audio/words/[słówko].mp3
   */
  async speakEnglish(text, audioUrl = null, slow = false) {
    if (this.isMuted) return;
    this.stop();
    let targetUrl = audioUrl;
    if (!targetUrl && text) {
      const cleanWord = text.trim().toLowerCase().replace(/[^a-z]/g, "");
      if (cleanWord) {
        targetUrl = `/audio/words/${cleanWord}.mp3`;
      }
    }
    if (targetUrl) {
      const played = await this.playAudioFile(targetUrl, slow ? 0.75 : 1);
      if (played) return;
    }
    return this.speakWithSynthesis(text, "en", slow ? 0.65 : this.rate);
  }
  /**
   * Odtwórz tekst po polsku (np. wstęp bajki)
   */
  async speakPolish(text, audioUrl = null) {
    if (this.isMuted) return;
    this.stop();
    const targetUrl = audioUrl || "/audio/intro.mp3";
    if (targetUrl) {
      const played = await this.playAudioFile(targetUrl, 1);
      if (played) return;
    }
    return this.speakWithSynthesis(text, "pl", 0.95);
  }
  /**
   * Odtwarza plik MP3 z obsługą playbackRate
   */
  playAudioFile(url, playbackRate = 1) {
    return new Promise((resolve) => {
      try {
        const audio = new Audio();
        this.currentAudio = audio;
        audio.playbackRate = playbackRate;
        let hasEnded = false;
        audio.onended = () => {
          this.currentAudio = null;
          if (!hasEnded) {
            hasEnded = true;
            resolve(true);
          }
        };
        audio.onerror = () => {
          this.currentAudio = null;
          if (!hasEnded) {
            hasEnded = true;
            resolve(false);
          }
        };
        audio.src = url;
        audio.play().catch(() => {
          this.currentAudio = null;
          if (!hasEnded) {
            hasEnded = true;
            resolve(false);
          }
        });
      } catch (e2) {
        this.currentAudio = null;
        resolve(false);
      }
    });
  }
  speakWithSynthesis(text, lang = "en", customRate = null) {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve();
        return;
      }
      this.synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === "en" ? "en-GB" : "pl-PL";
      utterance.rate = customRate || this.rate;
      utterance.pitch = 1.05;
      const voice = this.getBestVoice(lang);
      if (voice) {
        utterance.voice = voice;
      }
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      this.synth.speak(utterance);
    });
  }
  stop() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
        this.currentAudio = null;
      } catch (e2) {
      }
    }
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e2) {
      }
    }
  }
  setMuted(muted) {
    this.isMuted = muted;
    if (muted) this.stop();
  }
  setRate(newRate) {
    this.rate = Math.min(Math.max(newRate, 0.5), 1.5);
  }
};
var speechService = new SpeechService();

// src/components/views/WelcomeScreen.jsx
var WelcomeScreen = ({ onStartAdventure }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [hasFinishedAudio, setHasFinishedAudio] = useState(false);
  const handleStart = () => {
    speechService.stop();
    audioEffects.playVictory();
    onStartAdventure();
  };
  const handlePlayIntro = async () => {
    audioEffects.playPop();
    setIsPlayingAudio(true);
    setHasFinishedAudio(false);
    try {
      await speechService.speakPolish(INTRO_DATA.story, INTRO_DATA.audio);
      setHasFinishedAudio(true);
    } finally {
      setIsPlayingAudio(false);
    }
  };
  const handleStopIntro = () => {
    audioEffects.playPop();
    speechService.stop();
    setIsPlayingAudio(false);
  };
  const handleSkipIntro = () => {
    audioEffects.playPop();
    speechService.stop();
    setIsPlayingAudio(false);
    setHasFinishedAudio(true);
  };
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex-1 flex items-center justify-center p-3 sm:p-6 md:p-8" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-4xl bg-cream-50/95 rounded-3xl border-4 border-amber-300 shadow-wood p-4 sm:p-7 md:p-9 relative overflow-hidden transition-all duration-500" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute -top-12 -right-12 w-48 h-48 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "text-center mb-5" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-300 text-orange-950 text-xs sm:text-sm font-bold shadow-sm mb-2" }, /* @__PURE__ */ esm_index_production_default.createElement(FoxIcon, { className: "w-4 h-4 text-orange-600" }), /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Magiczna Opowie\u015B\u0107 J\u0119zykowa"), /* @__PURE__ */ esm_index_production_default.createElement(Sparkles, { className: "w-4 h-4 text-amber-500" })), /* @__PURE__ */ esm_index_production_default.createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 font-story tracking-tight" }, INTRO_DATA.title), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-sm sm:text-base md:text-lg text-emerald-800 font-bold mt-1" }, INTRO_DATA.subtitle)), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: `grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 items-stretch transition-all duration-500 ${isPlayingAudio ? "scale-[1.02] sm:scale-[1.03] z-20 drop-shadow-xl" : ""}` }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "md:col-span-2 rounded-3xl overflow-hidden border-4 border-amber-300 shadow-md group relative bg-amber-100" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "img",
    {
      src: INTRO_DATA.imageHero,
      alt: "Zuzia, lisek i mi\u015B przy drewnianej furtce",
      className: "w-full h-64 sm:h-80 md:h-88 object-cover object-top transition-transform duration-500",
      onError: (e2) => {
        e2.currentTarget.style.display = "none";
      }
    }
  ), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent p-3 text-white text-xs sm:text-sm font-bold font-story text-center" }, "Zuzia, Rudy Lisek i Mi\u015B przy starej furtce ogrodu"), isPlayingAudio && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute top-3 right-3 bg-amber-400/95 text-amber-950 px-3 py-1 rounded-full text-xs font-black border border-white shadow-md flex items-center gap-1.5 animate-pulse" }, /* @__PURE__ */ esm_index_production_default.createElement("span", null, "\u{1F3A7} Lektorka czyta bajk\u0119..."))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "md:col-span-1 rounded-3xl overflow-hidden border-4 border-amber-300 shadow-md flex flex-col justify-between bg-amber-100/70 p-3 text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-sm flex-1 max-h-52 md:max-h-none bg-white" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "img",
    {
      src: INTRO_DATA.imageFox,
      alt: "Lisek w szaliku",
      className: "w-full h-full object-cover object-top",
      onError: (e2) => {
        e2.currentTarget.style.display = "none";
      }
    }
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mt-2.5" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black text-amber-950 block font-story" }, "Rudy Lisek w szaliku"), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[11px] text-amber-800 font-semibold" }, "Tw\xF3j le\u015Bny przyjaciel! \u{1F98A}")))), isPlayingAudio && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full bg-gradient-to-r from-amber-200 via-orange-100 to-amber-200 rounded-2xl border-2 border-amber-400 p-3 mb-4 flex items-center justify-between gap-3 shadow-sm animate-pulse z-30 relative" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement(Volume2, { className: "w-5 h-5 text-orange-600 animate-bounce" }), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs sm:text-sm font-black text-amber-950 font-story" }, "Pos\u0142uchaj ciep\u0142ej opowie\u015Bci o Zuzi i Lisku...")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2 shrink-0" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleStopIntro,
      className: "px-3 py-1.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-900 border border-red-300 text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "\u23F9\uFE0F Zatrzymaj")
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleSkipIntro,
      className: "px-3 py-1.5 rounded-xl bg-amber-300 hover:bg-amber-400 text-amber-950 border border-amber-500 text-xs font-black transition-all cursor-pointer shadow-sm"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Pomi\u0144 opowie\u015B\u0107 \u23ED\uFE0F")
  ))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: `transition-all duration-500 ${isPlayingAudio ? "filter blur-[3px] opacity-30 pointer-events-none" : "opacity-100"}` }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "bg-amber-50/90 rounded-2xl p-4 sm:p-5 border-2 border-amber-200/90 shadow-inner mb-5 space-y-2.5 text-stone-800 text-xs sm:text-sm md:text-base leading-relaxed font-story" }, /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "font-medium text-amber-950" }, "Pewnego s\u0142onecznego poranka dziewczynka ", /* @__PURE__ */ esm_index_production_default.createElement("strong", { className: "text-orange-900 font-extrabold" }, "Zuzia"), " podesz\u0142a do starej, drewnianej furtki na skraju ogrodu. Tu\u017C za ni\u0105 siedzia\u0142 ma\u0142y, rudy lisek w ciep\u0142ym zielonym szaliku, kt\xF3ry zgubi\u0142 drog\u0119 do swojego le\u015Bnego domku."), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-3 bg-white/85 rounded-xl border border-amber-200 flex items-start gap-3" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-2xl shrink-0" }, "\u{1F332}"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "text-xs sm:text-sm text-stone-700" }, /* @__PURE__ */ esm_index_production_default.createElement("strong", { className: "text-emerald-950 block font-bold mb-0.5" }, "Zasady naszej przygody:"), /* @__PURE__ */ esm_index_production_default.createElement("ul", { className: "list-disc list-inside space-y-0.5 text-stone-600 font-medium" }, /* @__PURE__ */ esm_index_production_default.createElement("li", null, "Przejd\u017A przez 7 krain i poznaj po 5 magicznych s\u0142\xF3wek po angielsku"), /* @__PURE__ */ esm_index_production_default.createElement("li", null, "\u0106wicz wymow\u0119 z automatycznym mikrofonem \u{1F3A4}"), /* @__PURE__ */ esm_index_production_default.createElement("li", null, "Graj w Magiczne Pary i zdobywaj gwiazdki w sprawdzianie \u2B50"), /* @__PURE__ */ esm_index_production_default.createElement("li", null, "Kr\u0119\u0107 Ko\u0142em Fortuny, zbieraj naklejki i odblokowuj bajk\u0119!"))))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handlePlayIntro,
      disabled: isPlayingAudio,
      className: "px-5 py-3 rounded-2xl font-black font-story text-xs sm:text-sm bg-white text-stone-800 hover:bg-amber-100 border-2 border-amber-300 shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(Volume2, { className: "w-5 h-5 text-orange-600" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Ods\u0142uchaj wst\u0119p bajki")
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleStart,
      className: `w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-fox-600 hover:from-orange-600 hover:to-fox-700 text-white font-black text-base sm:text-xl font-story rounded-2xl shadow-wood hover:shadow-wood-hover active:shadow-wood-active active:translate-y-1 transition-all flex items-center justify-center gap-3 border-2 border-amber-300 cursor-pointer ${hasFinishedAudio ? "ring-4 ring-amber-400 scale-105 animate-bounce" : ""}`
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Ruszamy na szlak!"),
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowRight, { className: "w-6 h-6" })
  )))));
};

// src/components/common/StarRating.jsx
var StarRating = ({ stars = 0, maxStars = 3, size = "md", animate = false }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-11 h-11"
  };
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-1" }, Array.from({ length: maxStars }).map((_, index) => {
    const isFilled = index < stars;
    return /* @__PURE__ */ esm_index_production_default.createElement(
      "div",
      {
        key: index,
        className: `transition-transform duration-300 ${isFilled ? "text-amber-400 drop-shadow-[0_2px_4px_rgba(245,158,11,0.5)]" : "text-stone-300"} ${animate && isFilled ? "animate-pulse scale-110" : ""}`
      },
      /* @__PURE__ */ esm_index_production_default.createElement(
        StarIcon,
        {
          className: sizeClasses[size] || "w-6 h-6",
          filled: isFilled,
          color: isFilled ? "#F59E0B" : "#D6D3D1"
        }
      )
    );
  }));
};

// src/components/views/AdventureMap.jsx
var AdventureMap = ({
  unlockedStages = [1],
  stageStars = {},
  onSelectStage,
  onStartMorningReview,
  isReviewDueForStage
}) => {
  const [selectedPreviewStage, setSelectedPreviewStage] = useState(null);
  const pendingReviewStageId = unlockedStages.find((id) => isReviewDueForStage?.(id));
  const reviewStage = pendingReviewStageId ? STAGES_DATA.find((s) => s.id === pendingReviewStageId) : null;
  const handleMarkerClick = (stage, isUnlocked) => {
    if (isUnlocked) {
      audioEffects.playPop();
      setSelectedPreviewStage(stage);
    } else {
      audioEffects.playGentleOops();
    }
  };
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex-1 max-w-5xl w-full mx-auto p-3 sm:p-6 md:p-8 flex flex-col items-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "text-center mb-5" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-bold border border-emerald-300 mb-2" }, /* @__PURE__ */ esm_index_production_default.createElement("span", null, "\u{1F33F} Le\u015Bna \u015Acie\u017Cka do Domu Liska (7 Etap\xF3w)")), /* @__PURE__ */ esm_index_production_default.createElement("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-black text-amber-950 font-story" }, "Wybierz krain\u0119 na Szlaku"), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm text-stone-600 font-medium max-w-md mx-auto mt-0.5" }, "W\u0119druj od drewnianej furtki na dole a\u017C do ciep\u0142ego domku liska na samej g\xF3rze!")), reviewStage && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-2xl mb-6 p-4 rounded-3xl bg-gradient-to-r from-amber-200 via-orange-100 to-yellow-200 border-4 border-amber-400 shadow-wood flex items-center justify-between gap-3 animate-pulse" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-12 h-12 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center text-3xl shadow-sm shrink-0" }, "\u2600\uFE0F"), /* @__PURE__ */ esm_index_production_default.createElement("div", null, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black uppercase tracking-wider text-orange-900 block font-story" }, "Nowy dzie\u0144 z Liskiem!"), /* @__PURE__ */ esm_index_production_default.createElement("h4", { className: "text-base sm:text-lg font-black text-amber-950 font-story" }, "Poranna rozgrzewka: ", reviewStage.title), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs text-amber-900/80 font-medium" }, "Powt\xF3rz 5 wczorajszych s\u0142\xF3wek, by zdoby\u0107 promyk s\u0142o\u0144ca i i\u015B\u0107 dalej!"))), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playStar();
        onStartMorningReview(reviewStage);
      },
      className: "px-4 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-fox-600 text-white font-extrabold text-xs sm:text-sm shadow-wood hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer border border-amber-300"
    },
    "Start \u2600\uFE0F"
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "relative w-full max-w-[480px] rounded-3xl overflow-hidden border-4 border-amber-300 shadow-wood bg-amber-100 select-none" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "img",
    {
      src: "/images/Droga, mapa gry.jpg",
      alt: "Pionowa mapa le\u015Bnej drogi liska",
      className: "w-full h-auto object-cover block"
    }
  ), STAGES_DATA.map((stage) => {
    const isUnlocked = unlockedStages.includes(stage.id);
    const stars = stageStars[stage.id] || 0;
    const isReviewDue = isReviewDueForStage?.(stage.id);
    const isNextToPlay = isUnlocked && !stageStars[stage.id];
    const isSelected = selectedPreviewStage?.id === stage.id;
    const coords = stage.mapCoordinates;
    return /* @__PURE__ */ esm_index_production_default.createElement(
      "div",
      {
        key: stage.id,
        style: {
          left: `${coords.x}%`,
          top: `${coords.y}%`,
          transform: "translate(-50%, -50%)"
        },
        className: "absolute z-20"
      },
      isReviewDue && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-amber-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow-md border border-amber-500 flex items-center gap-1 animate-bounce" }, /* @__PURE__ */ esm_index_production_default.createElement("span", null, "\u2600\uFE0F Rozgrzewka!")),
      /* @__PURE__ */ esm_index_production_default.createElement(
        "button",
        {
          type: "button",
          onClick: () => handleMarkerClick(stage, isUnlocked),
          className: `relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex flex-col items-center justify-center font-black font-story text-base sm:text-lg transition-all duration-300 cursor-pointer ${isUnlocked ? "bg-gradient-to-tr from-orange-500 to-amber-300 text-white shadow-wood hover:scale-115 active:scale-95 border-2 border-white" : "bg-stone-300 text-stone-600 border-2 border-stone-400 opacity-70 cursor-not-allowed"} ${isSelected ? "ring-4 ring-emerald-500 scale-120" : ""} ${isNextToPlay ? "ring-4 ring-orange-400/80 animate-pulse" : ""}`,
          title: `${stage.title} (${isUnlocked ? "Kliknij, aby otworzy\u0107" : "Zablokowany"})`
        },
        isUnlocked ? /* @__PURE__ */ esm_index_production_default.createElement(esm_index_production_default.Fragment, null, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "leading-none drop-shadow-sm" }, stage.number), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-0.5 mt-0.5" }, Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ esm_index_production_default.createElement(
          "span",
          {
            key: i,
            className: `text-[8px] leading-none ${i < stars ? "text-yellow-200" : "text-white/40"}`
          },
          "\u2605"
        )))) : /* @__PURE__ */ esm_index_production_default.createElement(Lock, { className: "w-5 h-5 text-stone-600" })
      )
    );
  })), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-[440px] flex flex-col gap-4" }, selectedPreviewStage ? (
    /* Karta aktywnie wybranego etapu */
    /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 relative overflow-hidden transition-all" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "px-3 py-1 rounded-full bg-orange-100 text-orange-900 font-extrabold text-xs border border-orange-200" }, selectedPreviewStage.badge), /* @__PURE__ */ esm_index_production_default.createElement(StarRating, { stars: stageStars[selectedPreviewStage.id] || 0, size: "sm" })), /* @__PURE__ */ esm_index_production_default.createElement("h3", { className: "text-xl sm:text-2xl font-black text-amber-950 font-story mb-1" }, selectedPreviewStage.title), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm text-stone-600 font-medium mb-3" }, selectedPreviewStage.description), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "rounded-2xl overflow-hidden border-2 border-amber-200 mb-3 h-44 sm:h-48 relative shadow-sm" }, /* @__PURE__ */ esm_index_production_default.createElement(
      "img",
      {
        src: selectedPreviewStage.illustration,
        alt: selectedPreviewStage.title,
        className: "w-full h-full object-cover object-top"
      }
    )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-bold text-emerald-900 block mb-1.5" }, "S\u0142\xF3wka do poznania:"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-wrap gap-1.5" }, selectedPreviewStage.words.map((w) => /* @__PURE__ */ esm_index_production_default.createElement(
      "span",
      {
        key: w.id,
        className: "px-2.5 py-1 rounded-xl bg-amber-100/80 text-amber-950 text-xs font-bold border border-amber-200/80 flex items-center gap-1"
      },
      /* @__PURE__ */ esm_index_production_default.createElement("span", null, w.emoji),
      /* @__PURE__ */ esm_index_production_default.createElement("span", null, w.english)
    )))), /* @__PURE__ */ esm_index_production_default.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          audioEffects.playPop();
          onSelectStage(selectedPreviewStage);
        },
        className: "w-full py-3.5 bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 text-white font-black text-base font-story rounded-2xl shadow-leaf hover:scale-102 active:scale-95 transition-all flex items-center justify-center gap-2 border-2 border-emerald-300 cursor-pointer"
      },
      /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Rozpocznij ten etap! \u{1F680}"),
      /* @__PURE__ */ esm_index_production_default.createElement(ArrowRight, { className: "w-5 h-5" })
    ))
  ) : (
    /* Wskazówka startowa */
    /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "bg-cream-50/90 rounded-3xl border-2 border-amber-200 p-5 shadow-sm text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-12 h-12 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl mb-2" }, "\u{1F98A}"), /* @__PURE__ */ esm_index_production_default.createElement("h4", { className: "text-base font-bold text-amber-950 font-story mb-1" }, "Wybierz numerek na mapie!"), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs text-stone-600 leading-relaxed font-medium" }, "Kliknij dowolny odblokowany numerek (od 1 przy drewnianej furtce a\u017C do 7 przy domku Liska), aby zobaczy\u0107 ilustracj\u0119 i rozpocz\u0105\u0107 przygod\u0119!"))
  ), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "bg-white/80 rounded-3xl border border-stone-200 p-4 shadow-sm space-y-2 max-h-72 overflow-y-auto" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-bold text-stone-700 block mb-1" }, "Wszystkie krainy na szlaku:"), STAGES_DATA.map((st) => {
    const isUnlocked = unlockedStages.includes(st.id);
    const stars = stageStars[st.id] || 0;
    const isSelected = selectedPreviewStage?.id === st.id;
    return /* @__PURE__ */ esm_index_production_default.createElement(
      "div",
      {
        key: st.id,
        onClick: () => handleMarkerClick(st, isUnlocked),
        className: `p-2.5 rounded-2xl flex items-center justify-between gap-2 border transition-all cursor-pointer ${isSelected ? "bg-amber-100/90 border-amber-400 font-bold" : isUnlocked ? "bg-amber-50/50 hover:bg-amber-100/60 border-amber-200/60" : "bg-stone-100/60 border-stone-200 opacity-60"}`
      },
      /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2.5 min-w-0" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: `w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${isUnlocked ? "bg-orange-500 text-white" : "bg-stone-300 text-stone-600"}` }, st.number), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-bold text-stone-800 truncate font-story" }, st.title)),
      /* @__PURE__ */ esm_index_production_default.createElement("div", null, isUnlocked ? /* @__PURE__ */ esm_index_production_default.createElement(StarRating, { stars, size: "sm" }) : /* @__PURE__ */ esm_index_production_default.createElement(Lock, { className: "w-3.5 h-3.5 text-stone-400" }))
    );
  })))));
};

// src/components/common/AudioButton.jsx
var AudioButton = ({
  text,
  audioUrl = null,
  lang = "en",
  slow = false,
  size = "md",
  // sm, md, lg, xl
  label = null,
  className = "",
  variant = "orange"
  // orange, emerald, stone, subtle
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sizeClasses = {
    sm: "p-1.5 text-xs gap-1",
    md: "p-2.5 text-sm gap-2",
    lg: "p-3.5 text-base gap-2.5",
    xl: "p-5 text-xl gap-3"
  };
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  const variantClasses = {
    orange: "bg-gradient-to-b from-orange-400 to-fox-600 text-white shadow-wood hover:from-orange-500 hover:to-fox-700 active:translate-y-1 active:shadow-wood-active border border-amber-300",
    emerald: "bg-gradient-to-b from-emerald-500 to-forest-700 text-white shadow-leaf hover:from-emerald-600 hover:to-forest-800 active:translate-y-1 active:shadow-wood-active border border-emerald-300",
    stone: "bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-900 border border-amber-200 shadow-sm active:scale-95",
    subtle: "bg-transparent text-amber-800 hover:bg-amber-100/60 active:scale-95 border-0 p-1"
  };
  const handlePlay = async (e2) => {
    e2.stopPropagation();
    audioEffects.playPop();
    setIsPlaying(true);
    try {
      if (lang === "en") {
        await speechService.speakEnglish(text, audioUrl, slow);
      } else {
        await speechService.speakPolish(text, audioUrl);
      }
    } finally {
      setIsPlaying(false);
    }
  };
  return /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handlePlay,
      title: `Ods\u0142uchaj: ${text}${slow ? " (wolniej)" : ""}`,
      "aria-label": `Ods\u0142uchaj ${text}`,
      className: `inline-flex items-center justify-center font-bold font-story rounded-2xl transition-all duration-150 cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${isPlaying ? "ring-4 ring-amber-300/60 scale-105" : ""} ${className}`
    },
    /* @__PURE__ */ esm_index_production_default.createElement(Volume2, { className: `${iconSizes[size]} ${isPlaying ? "animate-bounce" : ""}` }),
    label && /* @__PURE__ */ esm_index_production_default.createElement("span", null, label)
  );
};

// src/components/views/StoryBookView.jsx
var StoryBookView = ({
  unlockedBookPages = [],
  onGoToMap
}) => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const currentStage = STAGES_DATA[activePageIndex] || STAGES_DATA[0];
  const chapter = currentStage.storyChapter;
  const isUnlocked = unlockedBookPages.includes(currentStage.id);
  const handlePrevPage = () => {
    audioEffects.playPop();
    if (activePageIndex > 0) {
      setActivePageIndex(activePageIndex - 1);
    }
  };
  const handleNextPage = () => {
    audioEffects.playPop();
    if (activePageIndex < STAGES_DATA.length - 1) {
      setActivePageIndex(activePageIndex + 1);
    }
  };
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex-1 max-w-5xl w-full mx-auto p-3 sm:p-6 md:p-8" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 mb-5" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onGoToMap();
      },
      className: "text-xs sm:text-sm font-bold text-amber-950 bg-white hover:bg-amber-100 px-4 py-2 rounded-2xl border-2 border-amber-300 shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowLeft, { className: "w-4 h-4" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Wr\xF3\u0107 do mapy szlaku")
  ), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement(BookOpen, { className: "w-6 h-6 text-orange-600" }), /* @__PURE__ */ esm_index_production_default.createElement("h2", { className: "text-xl sm:text-2xl font-black text-amber-950 font-story" }, "Ksi\u0105\u017Ceczka Zuzi i Liska")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "text-xs font-black text-emerald-900 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-inner" }, "Odblokowano: ", unlockedBookPages.length, " z ", STAGES_DATA.length, " stron")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-center gap-1.5 sm:gap-2 mb-5 flex-wrap" }, STAGES_DATA.map((st, idx) => {
    const unlocked = unlockedBookPages.includes(st.id);
    const isSelected = activePageIndex === idx;
    return /* @__PURE__ */ esm_index_production_default.createElement(
      "button",
      {
        key: st.id,
        type: "button",
        onClick: () => {
          audioEffects.playPop();
          setActivePageIndex(idx);
        },
        className: `px-3 py-1.5 rounded-2xl font-story text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${isSelected ? "bg-fox-600 text-white shadow-wood border-orange-400 scale-105" : unlocked ? "bg-cream-50 text-amber-950 border-amber-300 hover:bg-amber-100 shadow-sm" : "bg-stone-200/70 text-stone-500 border-stone-300 opacity-60"}`
      },
      !unlocked && /* @__PURE__ */ esm_index_production_default.createElement(Lock, { className: "w-3 h-3" }),
      /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Rozdzia\u0142 ", st.number)
    );
  })), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-9 relative overflow-hidden transition-all min-h-[460px] flex flex-col justify-between" }, isUnlocked ? /* @__PURE__ */ esm_index_production_default.createElement("div", null, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-amber-200 pb-3 mb-5" }, /* @__PURE__ */ esm_index_production_default.createElement("div", null, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black text-orange-800 bg-orange-100 px-3 py-0.5 rounded-full border border-orange-200" }, "Rozdzia\u0142 ", currentStage.number, " z ", STAGES_DATA.length), /* @__PURE__ */ esm_index_production_default.createElement("h3", { className: "text-2xl sm:text-3xl font-black text-amber-950 font-story mt-1" }, chapter.title)), /* @__PURE__ */ esm_index_production_default.createElement(
    AudioButton,
    {
      text: chapter.textParts.map((p) => p.type === "word" ? p.english : p.content).join(" "),
      lang: "pl",
      size: "md",
      variant: "orange",
      label: "Ods\u0142uchaj ca\u0142\u0105 stron\u0119"
    }
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mb-5 rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md h-56 sm:h-72 bg-amber-100" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "img",
    {
      src: chapter.illustration,
      alt: chapter.title,
      className: "w-full h-full object-cover object-top"
    }
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-4 sm:p-6 rounded-2xl bg-amber-50/90 border-2 border-amber-200 text-stone-800 text-base sm:text-lg leading-relaxed font-story space-y-4" }, /* @__PURE__ */ esm_index_production_default.createElement("p", null, chapter.textParts.map((part, index) => {
    if (part.type === "text") {
      return /* @__PURE__ */ esm_index_production_default.createElement("span", { key: index }, part.content);
    }
    if (part.type === "word") {
      return /* @__PURE__ */ esm_index_production_default.createElement(
        "span",
        {
          key: index,
          className: "inline-flex items-center gap-1 mx-1 px-2.5 py-0.5 rounded-xl bg-orange-100 border border-orange-300 text-orange-950 font-extrabold hover:bg-orange-200 transition-all cursor-pointer group shadow-sm align-middle select-none",
          onClick: () => audioEffects.playPop()
        },
        /* @__PURE__ */ esm_index_production_default.createElement("span", null, part.english),
        /* @__PURE__ */ esm_index_production_default.createElement(
          AudioButton,
          {
            text: part.english,
            audioUrl: part.audioFile,
            lang: "en",
            size: "sm",
            variant: "subtle",
            className: "p-0 text-orange-700 group-hover:text-orange-900"
          }
        )
      );
    }
    return null;
  })))) : (
    /* Zablokowana strona bajki */
    /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "my-auto py-12 flex flex-col items-center text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-20 h-20 rounded-3xl bg-stone-200 text-stone-500 border-2 border-stone-300 flex items-center justify-center text-3xl mb-4 shadow-inner" }, /* @__PURE__ */ esm_index_production_default.createElement(Lock, { className: "w-10 h-10 text-stone-400" })), /* @__PURE__ */ esm_index_production_default.createElement("h3", { className: "text-2xl font-black text-stone-700 font-story mb-2" }, "Ta strona jest jeszcze tajemnic\u0105..."), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-stone-500 max-w-md text-xs sm:text-sm font-medium mb-6" }, "Aby odblokowa\u0107 Rozdzia\u0142 ", currentStage.number, ": ", /* @__PURE__ */ esm_index_production_default.createElement("strong", null, currentStage.title), ", przejd\u017A ten etap na Le\u015Bnym Szlaku, poznaj s\u0142\xF3wka i zakr\u0119\u0107 Ko\u0142em Fortuny!"), /* @__PURE__ */ esm_index_production_default.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          audioEffects.playPop();
          onGoToMap();
        },
        className: "px-6 py-3 bg-gradient-to-r from-emerald-600 to-forest-700 text-white font-black text-sm font-story rounded-2xl shadow-leaf border border-emerald-400 hover:scale-102 active:scale-95 transition-all cursor-pointer"
      },
      "Przejd\u017A do tego etapu na mapie \u279C"
    ))
  ), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between border-t-2 border-amber-200/80 pt-4 mt-6" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handlePrevPage,
      disabled: activePageIndex === 0,
      className: `flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-story border transition-all ${activePageIndex === 0 ? "opacity-30 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200" : "bg-white text-stone-700 hover:bg-amber-100 border-stone-300 shadow-sm cursor-pointer"}`
    },
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowLeft, { className: "w-4 h-4" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Poprzednia strona")
  ), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black text-amber-950 font-story" }, "Strona ", activePageIndex + 1, " z ", STAGES_DATA.length), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleNextPage,
      disabled: activePageIndex === STAGES_DATA.length - 1,
      className: `flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-story border transition-all ${activePageIndex === STAGES_DATA.length - 1 ? "opacity-30 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200" : "bg-white text-stone-700 hover:bg-amber-100 border-stone-300 shadow-sm cursor-pointer"}`
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Nast\u0119pna strona"),
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowRight, { className: "w-4 h-4" })
  ))));
};

// src/components/views/StickerAlbumView.jsx
var StickerAlbumView = ({
  unlockedStickers = [],
  onGoToMap
}) => {
  const [selectedSticker, setSelectedSticker] = useState(null);
  const handleOpenSticker = (sticker, isUnlocked) => {
    if (isUnlocked) {
      audioEffects.playPop();
      setSelectedSticker(sticker);
    } else {
      audioEffects.playGentleOops();
    }
  };
  const collectedCount = unlockedStickers.length;
  const totalCount = STICKERS_DATA.length;
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex-1 max-w-5xl w-full mx-auto p-3 sm:p-6 md:p-8" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 mb-6" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onGoToMap();
      },
      className: "text-xs sm:text-sm font-bold text-amber-950 bg-white hover:bg-amber-100 px-4 py-2 rounded-2xl border-2 border-amber-300 shadow-sm flex items-center gap-1.5 transition-all"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowLeft, { className: "w-4 h-4" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Wr\xF3\u0107 do mapy szlaku")
  ), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold border border-orange-200 mb-1" }, /* @__PURE__ */ esm_index_production_default.createElement(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Kolekcja Zuzi")), /* @__PURE__ */ esm_index_production_default.createElement("h2", { className: "text-2xl sm:text-3xl font-black text-amber-950 font-story" }, "Album Magicznych Naklejek \u{1F3A8}")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "text-xs font-black text-emerald-900 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-inner" }, "Zdobyto: ", collectedCount, " z ", totalCount, " naklejek")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-8 relative overflow-hidden" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" }), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" }), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6" }, STICKERS_DATA.map((sticker) => {
    const isUnlocked = unlockedStickers.includes(sticker.id);
    return /* @__PURE__ */ esm_index_production_default.createElement(
      "div",
      {
        key: sticker.id,
        onClick: () => handleOpenSticker(sticker, isUnlocked),
        className: `rounded-2xl p-2.5 sm:p-3 border-3 transition-all duration-300 select-none cursor-pointer flex flex-col items-center justify-between text-center ${isUnlocked ? "bg-white border-amber-300 shadow-wood hover:shadow-wood-hover hover:scale-103" : "bg-stone-100/90 border-dashed border-stone-300 opacity-60 hover:opacity-75"}`
      },
      /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full h-32 sm:h-36 rounded-xl overflow-hidden relative mb-2 bg-amber-50 border border-amber-200 shadow-inner flex items-center justify-center" }, isUnlocked ? /* @__PURE__ */ esm_index_production_default.createElement(
        "img",
        {
          src: sticker.image,
          alt: sticker.title,
          className: "w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
        }
      ) : /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col items-center justify-center text-stone-400" }, /* @__PURE__ */ esm_index_production_default.createElement(Lock, { className: "w-7 h-7 mb-1" }), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[10px] font-bold font-story" }, "Tajemnica")), isUnlocked && /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full text-[9px] font-black bg-amber-400 text-amber-950 shadow-sm border border-amber-500" }, sticker.rarity)),
      /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full" }, /* @__PURE__ */ esm_index_production_default.createElement("h4", { className: "text-xs sm:text-sm font-black font-story text-amber-950 truncate" }, isUnlocked ? sticker.title : "Zablokowana naklejka"), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-[10px] text-stone-500 line-clamp-1 mt-0.5" }, isUnlocked ? sticker.description : "Zakr\u0119\u0107 Ko\u0142em Fortuny!"))
    );
  }))), selectedSticker && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "fixed inset-0 z-50 bg-stone-900/65 backdrop-blur-sm flex items-center justify-center p-4" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-md bg-cream-50 rounded-3xl border-4 border-amber-400 shadow-wood p-5 sm:p-7 relative flex flex-col items-center text-center" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => setSelectedSticker(null),
      className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center font-bold text-xs"
    },
    "\u2715"
  ), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "px-3 py-1 rounded-full bg-amber-200 text-amber-950 font-black text-xs border border-amber-300 mb-2" }, "Kolekcja: ", selectedSticker.rarity), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full h-56 sm:h-64 rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md my-2" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "img",
    {
      src: selectedSticker.image,
      alt: selectedSticker.title,
      className: "w-full h-full object-cover object-top"
    }
  )), /* @__PURE__ */ esm_index_production_default.createElement("h3", { className: "text-xl sm:text-2xl font-black text-amber-950 font-story mt-2" }, selectedSticker.title), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm text-stone-700 leading-relaxed font-medium mt-1" }, selectedSticker.description), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => setSelectedSticker(null),
      className: "mt-4 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-fox-600 text-white font-bold text-xs sm:text-sm shadow-wood"
    },
    "Zamknij podgl\u0105d"
  ))));
};

// src/components/stage/Step1StoryLearn.jsx
var Step1StoryLearn = ({ stage, onCompleteStep1, onBackToMap }) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const words = stage.words;
  const currentWord = words[selectedWordIndex];
  const [isListening, setIsListening] = useState(false);
  const [speechFeedback, setSpeechFeedback] = useState(null);
  const [recognizedText, setRecognizedText] = useState("");
  const [countdown, setCountdown] = useState(5);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const countdownIntervalRef = useRef(null);
  const checkPronunciationMatch = (spoken, target) => {
    if (!spoken || !target) return false;
    const cleanSpoken = spoken.toLowerCase().trim().replace(/[^a-z]/g, "");
    const cleanTarget = target.toLowerCase().trim().replace(/[^a-z]/g, "");
    if (cleanSpoken === cleanTarget) return true;
    if (cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken)) return true;
    let matches = 0;
    const minLen = Math.min(cleanSpoken.length, cleanTarget.length);
    const maxLen = Math.max(cleanSpoken.length, cleanTarget.length);
    if (Math.abs(cleanSpoken.length - cleanTarget.length) > 2) return false;
    for (let i = 0; i < minLen; i++) {
      if (cleanSpoken[i] === cleanTarget[i]) matches++;
    }
    return matches / maxLen >= 0.6;
  };
  const stopListening = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e2) {
      }
    }
    setIsListening(false);
  };
  const startListening = () => {
    stopListening();
    setSpeechFeedback(null);
    setRecognizedText("");
    setCountdown(5);
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      setSpeechFeedback("unsupported");
      return;
    }
    try {
      const recognition = new SpeechRec();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;
      recognitionRef.current = recognition;
      recognition.onstart = () => {
        setIsListening(true);
        audioEffects.playPop();
        let timeLeft = 5;
        countdownIntervalRef.current = setInterval(() => {
          timeLeft -= 1;
          setCountdown(timeLeft);
          if (timeLeft <= 0) {
            clearInterval(countdownIntervalRef.current);
          }
        }, 1e3);
        timerRef.current = setTimeout(() => {
          stopListening();
        }, 5e3);
      };
      recognition.onresult = (event) => {
        stopListening();
        const transcript = event.results[0][0].transcript;
        setRecognizedText(transcript);
        const isMatch = checkPronunciationMatch(transcript, currentWord.english);
        if (isMatch) {
          setSpeechFeedback("success");
          audioEffects.playCorrect();
        } else {
          setSpeechFeedback("retry");
          audioEffects.playGentleOops();
        }
      };
      recognition.onerror = () => {
        stopListening();
        setSpeechFeedback("retry");
      };
      recognition.onend = () => {
        setIsListening(false);
      };
      recognition.start();
    } catch (e2) {
      setIsListening(false);
      setSpeechFeedback("retry");
    }
  };
  const handlePlayWordWithAutoMic = async (slow = false) => {
    stopListening();
    setSpeechFeedback(null);
    audioEffects.playPop();
    await speechService.speakEnglish(currentWord.english, currentWord.audioFile, slow);
    setTimeout(() => {
      startListening();
    }, 250);
  };
  useEffect(() => {
    stopListening();
    setSpeechFeedback(null);
    setRecognizedText("");
    return () => stopListening();
  }, [selectedWordIndex]);
  const handleNext = () => {
    audioEffects.playPop();
    if (selectedWordIndex < words.length - 1) {
      setSelectedWordIndex(selectedWordIndex + 1);
    } else {
      audioEffects.playStar();
      onCompleteStep1();
    }
  };
  const handlePrev = () => {
    audioEffects.playPop();
    if (selectedWordIndex > 0) {
      setSelectedWordIndex(selectedWordIndex - 1);
    }
  };
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-4xl mx-auto flex flex-col items-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between w-full mb-3 px-1" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: onBackToMap,
      className: "text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 flex items-center gap-1 transition-all cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowLeft, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Wr\xF3\u0107 do mapy")
  ), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300" }, "Krok 1: Opowie\u015B\u0107 i 5 s\u0142\xF3wek")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 mb-5" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 items-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md h-56 sm:h-64 md:h-72 relative bg-amber-100" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "img",
    {
      src: stage.illustration,
      alt: stage.title,
      className: "w-full h-full object-cover object-top"
    }
  ), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute top-3 left-3 bg-white/95 text-amber-950 px-2.5 py-1 rounded-full text-xs font-black border border-amber-300 shadow-sm" }, stage.badge)), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col justify-between h-full" }, /* @__PURE__ */ esm_index_production_default.createElement("div", null, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-bold text-orange-700 uppercase tracking-wide" }, "Wprowadzenie do krainy"), /* @__PURE__ */ esm_index_production_default.createElement("h2", { className: "text-2xl sm:text-3xl font-black text-amber-950 font-story mt-0.5 mb-2" }, stage.title), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed font-story font-medium" }, stage.storyIntro)), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mt-4 pt-3 border-t border-amber-200 flex items-center justify-between" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs text-amber-900 font-bold" }, "Ods\u0142uchaj fragment opowie\u015Bci:"), /* @__PURE__ */ esm_index_production_default.createElement(
    AudioButton,
    {
      text: stage.storyIntro,
      audioUrl: stage.audioFile || `/audio/etap${stage.number}.mp3`,
      lang: "pl",
      size: "sm",
      variant: "orange",
      label: "Ods\u0142uchaj lektora \u{1F3A7}"
    }
  ))))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 flex flex-col items-center text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-center gap-2 mb-4 flex-wrap" }, words.map((w, idx) => /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      key: w.id,
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        setSelectedWordIndex(idx);
      },
      className: `px-3 py-1.5 rounded-2xl text-xs sm:text-sm font-bold font-story transition-all flex items-center gap-1.5 border cursor-pointer ${idx === selectedWordIndex ? "bg-fox-600 text-white shadow-wood border-orange-400 scale-105" : "bg-white text-stone-700 hover:bg-amber-100 border-amber-200"}`
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, w.emoji),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, w.english)
  ))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-lg bg-amber-50/80 rounded-2xl border-2 border-amber-200 p-4 sm:p-6 my-1" }, currentWord.imageFile && !currentWord.imageFile.endsWith(".png") && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-amber-300 mb-3 shadow-inner bg-white" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "img",
    {
      src: currentWord.imageFile,
      alt: currentWord.english,
      className: "w-full h-full object-cover object-top",
      onError: (e2) => {
        e2.currentTarget.style.display = "none";
      }
    }
  )), /* @__PURE__ */ esm_index_production_default.createElement("h3", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 font-story tracking-wide" }, currentWord.english), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm text-stone-500 font-mono mt-0.5" }, currentWord.phonetic), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "inline-block my-2 px-4 py-1.5 rounded-2xl bg-amber-200/90 border border-amber-300" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-lg sm:text-xl font-extrabold text-amber-950 font-story" }, currentWord.polish)), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm text-stone-600 italic font-medium" }, "\u201E", currentWord.hint, "\u201D"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-center gap-3 mt-4 mb-3" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => handlePlayWordWithAutoMic(false),
      className: "inline-flex items-center justify-center font-bold font-story rounded-2xl px-5 py-3 text-base gap-2 bg-gradient-to-b from-orange-400 to-fox-600 text-white shadow-wood hover:scale-102 active:scale-95 transition-all border border-amber-300 cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(Volume2, { className: "w-5 h-5" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Wymowa \u{1F50A}")
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => handlePlayWordWithAutoMic(true),
      className: "inline-flex items-center justify-center font-bold font-story rounded-2xl px-4 py-3 text-sm gap-1.5 bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100 shadow-sm active:scale-95 transition-all cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "\u{1F422} Wolniej")
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mt-4 pt-3 border-t-2 border-amber-200/80 flex flex-col items-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full flex justify-center mb-2" }, isListening ? /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: stopListening,
      className: "w-full py-3 px-4 rounded-2xl bg-emerald-500 text-white font-black text-sm sm:text-base font-story shadow-leaf ring-4 ring-emerald-300/80 animate-pulse flex items-center justify-center gap-2 border-2 border-emerald-300 cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xl animate-bounce" }, "\u{1F399}\uFE0F"),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Powt\xF3rz s\u0142\xF3wko... (", countdown, "s)")
  ) : /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: startListening,
      className: "w-full py-3 px-4 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-black text-sm sm:text-base font-story shadow-wood flex items-center justify-center gap-2 border-2 border-red-300 active:scale-95 transition-all cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xl" }, "\u{1F3A4}"),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Naci\u015Bnij, by powt\xF3rzy\u0107 na g\u0142os")
  )), speechFeedback === "success" && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full py-2.5 px-3 rounded-2xl bg-emerald-100 text-emerald-950 font-black text-sm border-2 border-emerald-400 flex items-center justify-center gap-2 animate-bounce" }, /* @__PURE__ */ esm_index_production_default.createElement(Check, { className: "w-5 h-5 text-emerald-600" }), /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Brawo Zuziu! \u015Awietna wymowa! \u{1F31F}"), recognizedText && /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "font-mono text-xs opacity-75 font-normal" }, '("', recognizedText, '")')), speechFeedback === "retry" && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full py-2.5 px-3 rounded-2xl bg-amber-100 text-amber-950 font-bold text-xs sm:text-sm border-2 border-amber-300 flex items-center justify-center gap-1.5" }, /* @__PURE__ */ esm_index_production_default.createElement(FoxIcon, { className: "w-4 h-4 text-orange-600" }), /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Spr\xF3buj jeszcze raz! \u{1F98A} Powiedz g\u0142o\u015Bno: ", /* @__PURE__ */ esm_index_production_default.createElement("strong", null, currentWord.english))), speechFeedback === "unsupported" && /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-[11px] text-stone-500 italic" }, "(Twoja przegl\u0105darka nie obs\u0142uguje mikrofonu, ale mo\u017Cesz powtarza\u0107 za lektork\u0105!)"))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between w-full max-w-lg mt-5 gap-3" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handlePrev,
      disabled: selectedWordIndex === 0,
      className: `px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${selectedWordIndex === 0 ? "opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200" : "bg-white text-stone-700 hover:bg-amber-100 border-stone-300 cursor-pointer"}`
    },
    "\u2190 Poprzednie s\u0142\xF3wko"
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleNext,
      className: "px-6 py-3 rounded-2xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 shadow-leaf hover:scale-102 active:scale-95 transition-all flex items-center gap-2 border border-emerald-300 cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, selectedWordIndex === words.length - 1 ? "Przejd\u017A do: Magiczne Pary \u{1F0CF}" : "Kolejne s\u0142\xF3wko \u2192")
  ))));
};

// src/components/stage/Step2MemoryGame.jsx
var Step2MemoryGame = ({ stage, onCompleteStep2, onBackToStep1 }) => {
  const words = stage.words;
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedWordIds, setMatchedWordIds] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const [movesCount, setMovesCount] = useState(0);
  useEffect(() => {
    const deck = [];
    words.forEach((w) => {
      deck.push({
        id: `${w.id}_en`,
        wordId: w.id,
        type: "en",
        text: w.english,
        subtext: "\u{1F50A} en",
        audioText: w.english,
        audioFile: w.audioFile
      });
      deck.push({
        id: `${w.id}_pl`,
        wordId: w.id,
        type: "pl",
        text: w.polish,
        emoji: w.emoji,
        audioText: w.english,
        audioFile: w.audioFile
      });
    });
    setCards([...deck].sort(() => 0.5 - Math.random()));
    setFlippedIndices([]);
    setMatchedWordIds([]);
    setMovesCount(0);
  }, [stage]);
  const handleCardClick = (index) => {
    if (isLocked) return;
    if (flippedIndices.includes(index)) return;
    const card = cards[index];
    if (matchedWordIds.includes(card.wordId)) return;
    audioEffects.playPop();
    speechService.speakEnglish(card.audioText, card.audioFile);
    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);
    if (newFlipped.length === 2) {
      setIsLocked(true);
      setMovesCount((prev) => prev + 1);
      const [idx1, idx2] = newFlipped;
      const card1 = cards[idx1];
      const card2 = cards[idx2];
      if (card1.wordId === card2.wordId && card1.type !== card2.type) {
        audioEffects.playCorrect();
        setMatchedWordIds((prev) => [...prev, card1.wordId]);
        setFlippedIndices([]);
        setIsLocked(false);
      } else {
        audioEffects.playGentleOops();
        setTimeout(() => {
          setFlippedIndices([]);
          setIsLocked(false);
        }, 1100);
      }
    }
  };
  const isGameComplete = matchedWordIds.length === words.length;
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-3xl mx-auto flex flex-col items-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between w-full mb-3 px-1" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: onBackToStep1,
      className: "text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 flex items-center gap-1 transition-all"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowLeft, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Wr\xF3\u0107 do s\u0142\xF3wek")
  ), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-bold text-stone-600" }, "Ruchy: ", movesCount), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300" }, "Dopasowano: ", matchedWordIds.length, " / ", words.length, " par"))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 flex flex-col items-center text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-bold border border-orange-300 mb-1" }, /* @__PURE__ */ esm_index_production_default.createElement(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Krok 2: Magiczne Pary")), /* @__PURE__ */ esm_index_production_default.createElement("h2", { className: "text-2xl sm:text-3xl font-black text-amber-950 font-story" }, "Po\u0142\u0105cz angielskie s\u0142\xF3wko z polskim znaczeniem!"), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm text-stone-600 font-medium" }, "Dotykaj kart, by je odwr\xF3ci\u0107 i pos\u0142ucha\u0107 lektora. Znajd\u017A wszystkie 5 par!")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-3 w-full mb-6" }, cards.map((card, idx) => {
    const isFlipped = flippedIndices.includes(idx);
    const isMatched = matchedWordIds.includes(card.wordId);
    return /* @__PURE__ */ esm_index_production_default.createElement(
      "div",
      {
        key: card.id,
        onClick: () => handleCardClick(idx),
        className: `h-28 sm:h-32 rounded-2xl p-2.5 flex flex-col items-center justify-center border-3 transition-all duration-300 select-none cursor-pointer ${isMatched ? "bg-emerald-100 border-emerald-500 shadow-leaf scale-98 opacity-95 text-emerald-950" : isFlipped ? "bg-white border-orange-400 shadow-wood scale-102 ring-2 ring-orange-300" : "bg-gradient-to-tr from-amber-200 to-orange-200 hover:from-amber-300 hover:to-orange-300 border-amber-300 shadow-sm hover:scale-103"}`
      },
      isMatched || isFlipped ? /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col items-center justify-center h-full" }, card.emoji && /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-2xl sm:text-3xl mb-1" }, card.emoji), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "font-black text-sm sm:text-base font-story text-amber-950 leading-tight" }, card.text), card.type === "en" && /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[10px] text-orange-700 font-bold mt-1 bg-orange-100 px-1.5 py-0.5 rounded-full" }, "\u{1F50A} English"), isMatched && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mt-1 flex items-center gap-0.5 text-emerald-700 text-[10px] font-extrabold" }, /* @__PURE__ */ esm_index_production_default.createElement(Check, { className: "w-3 h-3" }), " Para!")) : /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col items-center justify-center h-full text-amber-800" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-3xl" }, "\u{1F98A}"), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[11px] font-bold font-story mt-1 opacity-75" }, "Odkryj"))
    );
  })), isGameComplete && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full bg-emerald-100/90 rounded-2xl border-2 border-emerald-400 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 animate-pulse" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-3xl" }, "\u{1F389}"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "text-left" }, /* @__PURE__ */ esm_index_production_default.createElement("h4", { className: "text-base font-black text-emerald-950 font-story" }, "Wspania\u0142a pami\u0119\u0107, Zuziu!"), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs text-emerald-800 font-medium" }, "Wszystkie 5 par po\u0142\u0105czone bezb\u0142\u0119dnie!"))), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playStar();
        onCompleteStep2();
      },
      className: "px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 text-white font-black text-sm sm:text-base shadow-wood hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-emerald-300 cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Przejd\u017A do: Sprawdzian \u{1F3AF}"),
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowRight, { className: "w-5 h-5" })
  ))));
};

// src/components/stage/Step3Quiz.jsx
var Step3Quiz = ({ stage, onCompleteStep3, onBackToStep2 }) => {
  const words = stage.words;
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedWordId, setSelectedWordId] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const targetWord = words[currentQIndex];
  useEffect(() => {
    if (!targetWord) return;
    const otherWords = words.filter((w) => w.id !== targetWord.id);
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    const roundOptions = [targetWord, ...shuffledOthers].sort(() => 0.5 - Math.random());
    setOptions(roundOptions);
    setSelectedWordId(null);
    setIsAnswered(false);
    const timer = setTimeout(() => {
      speechService.speakEnglish(targetWord.english, targetWord.audioFile);
    }, 350);
    return () => clearTimeout(timer);
  }, [currentQIndex]);
  const handleSelectOption = (option) => {
    if (isAnswered) return;
    setSelectedWordId(option.id);
    setIsAnswered(true);
    const isCorrect = option.id === targetWord.id;
    if (isCorrect) {
      audioEffects.playCorrect();
      setScore((prev) => prev + 1);
    } else {
      audioEffects.playGentleOops();
    }
  };
  const handleNextQuestion = () => {
    audioEffects.playPop();
    if (currentQIndex < words.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      let stars = 1;
      if (score >= 4) stars = 3;
      else if (score >= 3) stars = 2;
      else stars = 1;
      audioEffects.playVictory();
      onCompleteStep3(score, stars);
    }
  };
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-xl mx-auto flex flex-col items-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between w-full mb-3 px-1" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: onBackToStep2,
      className: "text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 transition-all flex items-center gap-1"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowLeft, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Wr\xF3\u0107 do par")
  ), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300" }, "Pytanie ", currentQIndex + 1, " z ", words.length), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300" }, "Punkty: ", score))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 flex flex-col items-center text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-sm sm:text-base font-black text-emerald-950 mb-2 font-story flex items-center gap-1.5" }, /* @__PURE__ */ esm_index_production_default.createElement(Sparkles, { className: "w-4 h-4 text-amber-500" }), "Pos\u0142uchaj i wybierz poprawny obrazek:"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "my-2" }, /* @__PURE__ */ esm_index_production_default.createElement(
    AudioButton,
    {
      text: targetWord?.english,
      audioUrl: targetWord?.audioFile,
      lang: "en",
      size: "xl",
      variant: "orange",
      label: "Pos\u0142uchaj jeszcze raz \u{1F50A}",
      className: "text-base sm:text-lg px-6 py-3.5 shadow-wood hover:scale-105"
    }
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "grid grid-cols-2 gap-3 w-full mt-4" }, options.map((option) => {
    const isSelected = selectedWordId === option.id;
    const isTarget = option.id === targetWord.id;
    let cardStyle = "bg-white border-2 border-stone-200 hover:border-amber-400 hover:bg-amber-50/70 shadow-sm";
    if (isAnswered) {
      if (isTarget) {
        cardStyle = "bg-emerald-100 border-4 border-emerald-500 shadow-leaf text-emerald-950 font-extrabold scale-102";
      } else if (isSelected && !isTarget) {
        cardStyle = "bg-red-50 border-4 border-red-300 opacity-60";
      } else {
        cardStyle = "bg-stone-50 border-stone-200 opacity-40";
      }
    }
    return /* @__PURE__ */ esm_index_production_default.createElement(
      "button",
      {
        key: option.id,
        type: "button",
        onClick: () => handleSelectOption(option),
        disabled: isAnswered,
        className: `p-3 sm:p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95 ${cardStyle}`
      },
      option.imageFile && !option.imageFile.endsWith(".png") ? /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-amber-300 shadow-inner bg-white" }, /* @__PURE__ */ esm_index_production_default.createElement(
        "img",
        {
          src: option.imageFile,
          alt: option.polish,
          className: "w-full h-full object-cover object-top"
        }
      )) : /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-3xl sm:text-4xl shadow-inner" }, option.emoji),
      /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "block text-sm sm:text-base font-black font-story text-amber-950" }, option.polish), isAnswered && isTarget && /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "block text-xs font-mono font-bold text-emerald-700" }, option.english, " \u2713"))
    );
  })), isAnswered && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mt-5 w-full" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: `p-3 rounded-2xl mb-3 font-story font-bold text-xs sm:text-sm flex items-center justify-center gap-2 ${selectedWordId === targetWord.id ? "bg-emerald-100 text-emerald-900 border border-emerald-300" : "bg-orange-100 text-orange-950 border border-orange-300"}` }, selectedWordId === targetWord.id ? /* @__PURE__ */ esm_index_production_default.createElement(esm_index_production_default.Fragment, null, /* @__PURE__ */ esm_index_production_default.createElement(Check, { className: "w-4 h-4 text-emerald-600" }), /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Brawo Zuziu! Znakomicie! \u{1F389}")) : /* @__PURE__ */ esm_index_production_default.createElement(esm_index_production_default.Fragment, null, /* @__PURE__ */ esm_index_production_default.createElement(FoxIcon, { className: "w-4 h-4 text-orange-600" }), /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Dobre pr\xF3by! Prawid\u0142owa odpowied\u017A to: ", /* @__PURE__ */ esm_index_production_default.createElement("strong", null, targetWord.polish), " (", targetWord.english, ")"))), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleNextQuestion,
      className: "w-full py-3.5 bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 text-white font-black text-sm sm:text-base font-story rounded-2xl shadow-wood hover:scale-102 active:scale-95 transition-all flex items-center justify-center gap-2 border-2 border-emerald-300 cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, currentQIndex === words.length - 1 ? "Przejd\u017A do Ko\u0142a Fortuny! \u{1F3A1}" : "Nast\u0119pne pytanie \u2192"),
    /* @__PURE__ */ esm_index_production_default.createElement(ArrowRight, { className: "w-5 h-5" })
  ))));
};

// src/components/stage/Step4WheelAndReward.jsx
var Step4WheelAndReward = ({
  stage,
  score,
  stars,
  onAwardSticker,
  onGoToMap,
  onOpenBook,
  onOpenAlbum
}) => {
  const chapter = stage.storyChapter;
  const [hasSpun, setHasSpun] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [wonSticker, setWonSticker] = useState(null);
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.confetti) {
        window.confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    } catch (e2) {
    }
  }, []);
  const handleSpinWheel = () => {
    if (isSpinning || hasSpun) return;
    audioEffects.playPop();
    setIsSpinning(true);
    const winningIndex = Math.floor(Math.random() * STICKERS_DATA.length);
    const chosenSticker = STICKERS_DATA[winningIndex];
    const segmentAngle = 360 / STICKERS_DATA.length;
    const totalRotation = 1800 + winningIndex * segmentAngle + segmentAngle / 2;
    setRotationDegrees(totalRotation);
    const tickInterval = setInterval(() => {
      audioEffects.playPop();
    }, 120);
    setTimeout(() => {
      clearInterval(tickInterval);
      setIsSpinning(false);
      setHasSpun(true);
      setWonSticker(chosenSticker);
      audioEffects.playVictory();
      onAwardSticker?.(chosenSticker.id);
      try {
        if (typeof window !== "undefined" && window.confetti) {
          window.confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
        }
      } catch (e2) {
      }
    }, 3800);
  };
  const segmentColors = [
    "#F97316",
    "#10B981",
    "#3B82F6",
    "#EC4899",
    "#8B5CF6",
    "#F59E0B",
    "#14B8A6",
    "#EF4444"
  ];
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-3xl mx-auto flex flex-col items-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "text-center mb-6" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 border border-amber-300 text-amber-950 font-black text-xs sm:text-sm shadow-sm mb-2" }, /* @__PURE__ */ esm_index_production_default.createElement(Trophy, { className: "w-4 h-4 text-amber-600" }), /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Wspaniale, Zuziu! Zaliczy\u0142a\u015B etap!"), /* @__PURE__ */ esm_index_production_default.createElement(Sparkles, { className: "w-4 h-4 text-amber-600" })), /* @__PURE__ */ esm_index_production_default.createElement("h2", { className: "text-3xl sm:text-4xl font-black text-amber-950 font-story" }, "Zdoby\u0142a\u015B z\u0142ote gwiazdki!"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex justify-center my-3" }, /* @__PURE__ */ esm_index_production_default.createElement(StarRating, { stars, size: "xl", animate: true })), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm text-stone-600 font-medium" }, "Wynik sprawdzianu: ", /* @__PURE__ */ esm_index_production_default.createElement("strong", null, score, " / 5"), " poprawnych odpowiedzi")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 flex flex-col items-center text-center mb-6 relative overflow-hidden" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mb-3" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-bold text-orange-700 uppercase tracking-wide" }, "Magiczna Loteria Liska"), /* @__PURE__ */ esm_index_production_default.createElement("h3", { className: "text-2xl sm:text-3xl font-black text-amber-950 font-story" }, "Ko\u0142o Fortuny z Naklejkami \u{1F3A1}"), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm text-stone-600 font-medium max-w-md mx-auto" }, "Zakr\u0119\u0107 kolorowym ko\u0142em, by wylosowa\u0107 bajkow\u0105 ilustracj\u0119 do swojego Albumu Naklejek!")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "relative my-4 flex items-center justify-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute -top-3 z-30 flex flex-col items-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-amber-600 drop-shadow-md" })), /* @__PURE__ */ esm_index_production_default.createElement(
    "div",
    {
      style: {
        transform: `rotate(${rotationDegrees}deg)`,
        transition: isSpinning ? "transform 3.8s cubic-bezier(0.15, 0.9, 0.2, 1)" : "none"
      },
      className: "w-56 h-56 sm:w-64 sm:h-64 rounded-full border-6 border-amber-300 shadow-wood relative overflow-hidden flex items-center justify-center bg-white"
    },
    STICKERS_DATA.map((stk, idx) => {
      const count = STICKERS_DATA.length;
      const angle = 360 / count * idx;
      return /* @__PURE__ */ esm_index_production_default.createElement(
        "div",
        {
          key: stk.id,
          style: {
            backgroundColor: segmentColors[idx % segmentColors.length],
            transform: `rotate(${angle}deg)`,
            transformOrigin: "50% 100%",
            height: "50%",
            width: "38%",
            position: "absolute",
            top: "0",
            left: "31%",
            clipPath: "polygon(50% 100%, 0 0, 100% 0)"
          },
          className: "flex items-start justify-center pt-2 text-white font-black text-sm drop-shadow"
        },
        /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "transform rotate-90 inline-block text-lg" }, "\u{1F381}")
      );
    }),
    /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-16 h-16 rounded-full bg-cream-50 border-4 border-amber-400 flex items-center justify-center shadow-md z-10 text-2xl font-black text-amber-950" }, "\u{1F98A}")
  )), !hasSpun ? /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleSpinWheel,
      disabled: isSpinning,
      className: `px-8 py-3.5 rounded-2xl font-black text-base sm:text-lg font-story text-white transition-all shadow-wood flex items-center gap-2 border-2 border-amber-300 cursor-pointer ${isSpinning ? "bg-amber-400 opacity-70 cursor-not-allowed" : "bg-gradient-to-r from-orange-500 to-fox-600 hover:from-orange-600 hover:to-fox-700 hover:scale-105 active:scale-95 animate-pulse"}`
    },
    /* @__PURE__ */ esm_index_production_default.createElement(Sparkles, { className: "w-5 h-5 text-yellow-200" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, isSpinning ? "Ko\u0142o si\u0119 kr\u0119ci..." : "ZAKR\u0118\u0106 KO\u0141EM! \u{1F3A1}")
  ) : wonSticker ? (
    /* Odsłonięta wylosowana naklejka */
    /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-md bg-amber-100/90 rounded-2xl border-2 border-amber-400 p-4 mt-2 flex flex-col items-center animate-bounce" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black text-orange-800 uppercase tracking-wider mb-1" }, "\u{1F389} Wylosowa\u0142a\u015B now\u0105 naklejk\u0119!"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-48 h-36 rounded-xl overflow-hidden border-2 border-white shadow-md my-2" }, /* @__PURE__ */ esm_index_production_default.createElement(
      "img",
      {
        src: wonSticker.image,
        alt: wonSticker.title,
        className: "w-full h-full object-cover object-top"
      }
    )), /* @__PURE__ */ esm_index_production_default.createElement("h4", { className: "text-lg font-black text-amber-950 font-story" }, wonSticker.title), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs text-stone-700 mt-0.5" }, wonSticker.description), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "mt-2 text-[11px] font-bold text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-300 shadow-sm" }, "\u2713 Dodano do Twojego Albumu Naklejek!"))
  ) : null), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 relative overflow-hidden mb-6" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between mb-4 border-b-2 border-amber-200 pb-3" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement(BookOpen, { className: "w-6 h-6 text-orange-600" }), /* @__PURE__ */ esm_index_production_default.createElement("h3", { className: "text-xl sm:text-2xl font-black text-amber-950 font-story" }, chapter.title)), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black border border-emerald-300" }, "Nowa strona bajki odblokowana!")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "rounded-2xl overflow-hidden border-2 border-amber-200 mb-4 h-52 sm:h-72 shadow-sm bg-amber-100" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "img",
    {
      src: chapter.illustration,
      alt: chapter.title,
      className: "w-full h-full object-cover object-top"
    }
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-4 sm:p-6 rounded-2xl bg-amber-50/90 border-2 border-amber-200 text-stone-800 text-base sm:text-lg leading-relaxed font-story space-y-3" }, /* @__PURE__ */ esm_index_production_default.createElement("p", null, chapter.textParts.map((part, index) => {
    if (part.type === "text") {
      return /* @__PURE__ */ esm_index_production_default.createElement("span", { key: index }, part.content);
    }
    if (part.type === "word") {
      return /* @__PURE__ */ esm_index_production_default.createElement(
        "span",
        {
          key: index,
          className: "inline-flex items-center gap-1 mx-1 px-2.5 py-0.5 rounded-xl bg-orange-100 border border-orange-300 text-orange-950 font-extrabold hover:bg-orange-200 transition-all cursor-pointer group shadow-sm align-middle select-none",
          onClick: () => audioEffects.playPop()
        },
        /* @__PURE__ */ esm_index_production_default.createElement("span", null, part.english),
        /* @__PURE__ */ esm_index_production_default.createElement(
          AudioButton,
          {
            text: part.english,
            audioUrl: part.audioFile,
            lang: "en",
            size: "sm",
            variant: "subtle",
            className: "p-0 text-orange-700 group-hover:text-orange-900"
          }
        )
      );
    }
    return null;
  }))), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs text-amber-800/80 text-center mt-3 font-medium" }, "\u{1F4A1} Klikaj w pomara\u0144czowe s\u0142\xF3wka w tek\u015Bcie, aby ods\u0142ucha\u0107 ich angielsk\u0105 wymow\u0119!")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3 w-full" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onGoToMap();
      },
      className: "w-full sm:w-auto px-6 py-3.5 bg-white text-stone-700 hover:bg-amber-100 font-bold text-xs sm:text-sm font-story rounded-2xl border-2 border-stone-300 shadow-sm"
    },
    "\u2190 Wr\xF3\u0107 na Le\u015Bny Szlak"
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onOpenAlbum();
      },
      className: "w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-amber-950 font-black text-xs sm:text-sm font-story rounded-2xl border-2 border-amber-300 shadow-wood flex items-center justify-center gap-2"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Otw\xF3rz Album Naklejek \u{1F3A8}")
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        audioEffects.playPop();
        onOpenBook();
      },
      className: "w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-fox-600 to-orange-500 hover:from-fox-700 hover:to-orange-600 text-white font-black text-xs sm:text-sm font-story rounded-2xl shadow-wood flex items-center justify-center gap-2 border-2 border-amber-300"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(BookOpen, { className: "w-4 h-4" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Zobacz ca\u0142\u0105 Ksi\u0105\u017Ceczk\u0119 \u{1F4D6}")
  )));
};

// src/components/stage/StageModal.jsx
var StageModal = ({
  stage,
  onClose,
  onFinishStage,
  onAwardSticker,
  onOpenBook,
  onOpenAlbum
}) => {
  const [currentStep, setCurrentStep] = useState("step1");
  const [lastScore, setLastScore] = useState(0);
  const [lastStars, setLastStars] = useState(0);
  const handleCompleteStep1 = () => {
    setCurrentStep("step2");
  };
  const handleCompleteStep2 = () => {
    setCurrentStep("step3");
  };
  const handleCompleteStep3 = (score, stars) => {
    setLastScore(score);
    setLastStars(stars);
    onFinishStage(stage.id, score, stars);
    setCurrentStep("step4");
  };
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "fixed inset-0 z-40 bg-stone-900/65 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "relative w-full max-w-4xl my-auto py-3" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "max-w-xl mx-auto mb-3 bg-cream-50/95 rounded-2xl p-1.5 sm:p-2 border-2 border-amber-300 shadow-sm flex items-center justify-around text-[11px] sm:text-xs font-black font-story" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: `px-2.5 py-1 rounded-xl transition-all ${currentStep === "step1" ? "bg-orange-500 text-white shadow-sm scale-105" : "text-stone-500"}` }, /* @__PURE__ */ esm_index_production_default.createElement("span", null, "1. Opowie\u015B\u0107")), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-amber-400" }, "\u279C"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: `px-2.5 py-1 rounded-xl transition-all ${currentStep === "step2" ? "bg-orange-500 text-white shadow-sm scale-105" : "text-stone-500"}` }, /* @__PURE__ */ esm_index_production_default.createElement("span", null, "2. Magiczne Pary")), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-amber-400" }, "\u279C"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: `px-2.5 py-1 rounded-xl transition-all ${currentStep === "step3" ? "bg-orange-500 text-white shadow-sm scale-105" : "text-stone-500"}` }, /* @__PURE__ */ esm_index_production_default.createElement("span", null, "3. Sprawdzian")), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-amber-400" }, "\u279C"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: `px-2.5 py-1 rounded-xl transition-all ${currentStep === "step4" ? "bg-emerald-600 text-white shadow-sm scale-105" : "text-stone-500"}` }, /* @__PURE__ */ esm_index_production_default.createElement("span", null, "4. Ko\u0142o Fortuny \u{1F3A1}"))), currentStep === "step1" && /* @__PURE__ */ esm_index_production_default.createElement(
    Step1StoryLearn,
    {
      stage,
      onCompleteStep1: handleCompleteStep1,
      onBackToMap: onClose
    }
  ), currentStep === "step2" && /* @__PURE__ */ esm_index_production_default.createElement(
    Step2MemoryGame,
    {
      stage,
      onCompleteStep2: handleCompleteStep2,
      onBackToStep1: () => setCurrentStep("step1")
    }
  ), currentStep === "step3" && /* @__PURE__ */ esm_index_production_default.createElement(
    Step3Quiz,
    {
      stage,
      onCompleteStep3: handleCompleteStep3,
      onBackToStep2: () => setCurrentStep("step2")
    }
  ), currentStep === "step4" && /* @__PURE__ */ esm_index_production_default.createElement(
    Step4WheelAndReward,
    {
      stage,
      score: lastScore,
      stars: lastStars,
      onAwardSticker,
      onGoToMap: onClose,
      onOpenBook: () => {
        onClose();
        onOpenBook();
      },
      onOpenAlbum: () => {
        onClose();
        onOpenAlbum();
      }
    }
  )));
};

// src/components/views/MorningReviewModal.jsx
var MorningReviewModal = ({
  stage,
  onCompleteReview,
  onClose
}) => {
  const words = stage.words;
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedWordId, setSelectedWordId] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const targetWord = words[currentQIndex];
  useEffect(() => {
    if (!targetWord || isFinished) return;
    const otherWords = words.filter((w) => w.id !== targetWord.id);
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    const roundOptions = [targetWord, ...shuffledOthers].sort(() => 0.5 - Math.random());
    setOptions(roundOptions);
    setSelectedWordId(null);
    setIsAnswered(false);
    const timer = setTimeout(() => {
      speechService.speakEnglish(targetWord.english, targetWord.audioFile);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentQIndex, isFinished]);
  const handleSelectOption = (option) => {
    if (isAnswered) return;
    setSelectedWordId(option.id);
    setIsAnswered(true);
    const isCorrect = option.id === targetWord.id;
    if (isCorrect) {
      audioEffects.playCorrect();
      setScore((prev) => prev + 1);
    } else {
      audioEffects.playGentleOops();
    }
  };
  const handleNextQuestion = () => {
    audioEffects.playPop();
    if (currentQIndex < words.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      audioEffects.playStar();
      setIsFinished(true);
    }
  };
  const handleFinish = () => {
    audioEffects.playVictory();
    onCompleteReview(stage.id);
  };
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "fixed inset-0 z-50 bg-stone-900/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-xl bg-cream-50 rounded-3xl border-4 border-amber-400 shadow-wood p-5 sm:p-8 relative overflow-hidden" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "absolute -top-10 -right-10 w-36 h-36 bg-yellow-300/40 rounded-full blur-2xl pointer-events-none" }), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between border-b-2 border-amber-200 pb-3 mb-4" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-2xl animate-spin", style: { animationDuration: "15s" } }, "\u2600\uFE0F"), /* @__PURE__ */ esm_index_production_default.createElement("div", null, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[10px] font-black uppercase tracking-wider text-orange-800 block" }, "Spaced Repetition"), /* @__PURE__ */ esm_index_production_default.createElement("h2", { className: "text-lg sm:text-xl font-black text-amber-950 font-story" }, "Poranna Rozgrzewka z Liskiem"))), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: onClose,
      className: "w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center font-bold text-xs"
    },
    "\u2715"
  )), !isFinished ? /* @__PURE__ */ esm_index_production_default.createElement("div", null, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between mb-3 text-xs font-bold text-stone-600" }, /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Etap: ", stage.title), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "bg-amber-100 text-amber-950 px-2.5 py-0.5 rounded-full border border-amber-300" }, "Pytanie ", currentQIndex + 1, " / ", words.length)), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm font-bold text-stone-700 text-center mb-2" }, "Przypomnij sobie wczorajsze s\u0142\xF3wko:"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex justify-center my-3" }, /* @__PURE__ */ esm_index_production_default.createElement(
    AudioButton,
    {
      text: targetWord?.english,
      audioUrl: targetWord?.audioFile,
      lang: "en",
      size: "lg",
      variant: "orange",
      label: "Ods\u0142uchaj s\u0142\xF3wko \u{1F50A}",
      className: "shadow-wood"
    }
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3 my-4" }, options.map((opt) => {
    const isSelected = selectedWordId === opt.id;
    const isTarget = opt.id === targetWord.id;
    let btnStyle = "bg-white border-2 border-amber-200 hover:bg-amber-50";
    if (isAnswered) {
      if (isTarget) {
        btnStyle = "bg-emerald-100 border-3 border-emerald-500 font-black text-emerald-950";
      } else if (isSelected) {
        btnStyle = "bg-red-50 border-2 border-red-300 opacity-60";
      } else {
        btnStyle = "bg-stone-50 border-stone-200 opacity-40";
      }
    }
    return /* @__PURE__ */ esm_index_production_default.createElement(
      "button",
      {
        key: opt.id,
        type: "button",
        onClick: () => handleSelectOption(opt),
        disabled: isAnswered,
        className: `p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${btnStyle}`
      },
      /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-3xl" }, opt.emoji),
      /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs sm:text-sm font-bold font-story text-amber-950" }, opt.polish)
    );
  })), isAnswered && /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "mt-4" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleNextQuestion,
      className: "w-full py-3 bg-gradient-to-r from-orange-500 to-fox-600 hover:from-orange-600 hover:to-fox-700 text-white font-black text-sm font-story rounded-2xl shadow-wood flex items-center justify-center gap-2 border border-amber-300 cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, currentQIndex === words.length - 1 ? "Zobacz podsumowanie \u2600\uFE0F" : "Dalej \u2192")
  ))) : (
    /* Ekran sukcesu rozgrzewki */
    /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex flex-col items-center text-center py-4" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300 to-amber-400 flex items-center justify-center text-4xl shadow-md border-4 border-white mb-3 animate-bounce" }, "\u2600\uFE0F"), /* @__PURE__ */ esm_index_production_default.createElement("h3", { className: "text-2xl font-black text-amber-950 font-story mb-1" }, "Pi\u0119knie rozpocz\u0119ty dzie\u0144, Zuziu!"), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs sm:text-sm text-stone-600 max-w-sm mb-4" }, "Twoja pami\u0119\u0107 dzia\u0142a znakomicie! Zdoby\u0142a\u015B ", /* @__PURE__ */ esm_index_production_default.createElement("strong", null, score, " / 5"), " punkt\xF3w w porannej rozgrzewce."), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-3 bg-amber-100 rounded-2xl border border-amber-300 mb-5 flex items-center gap-2 text-xs font-bold text-amber-950" }, /* @__PURE__ */ esm_index_production_default.createElement("span", null, "\u{1F3C5}"), /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Przyznano odznak\u0119 Porannego Promyka S\u0142o\u0144ca!")), /* @__PURE__ */ esm_index_production_default.createElement(
      "button",
      {
        type: "button",
        onClick: handleFinish,
        className: "w-full py-3.5 bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 text-white font-black text-sm sm:text-base font-story rounded-2xl shadow-leaf flex items-center justify-center gap-2 border border-emerald-300 cursor-pointer"
      },
      /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Wracamy na Szlak Przygody! \u{1F332}"),
      /* @__PURE__ */ esm_index_production_default.createElement(ArrowRight, { className: "w-5 h-5" })
    ))
  )));
};

// src/components/views/ParentCornerModal.jsx
var ParentCornerModal = ({
  isOpen,
  onClose,
  userName = "Zuzia",
  unlockedStages = [],
  stageStars = {},
  unlockedBookPages = [],
  stickersCount = 0,
  onResetProgress,
  onReplayIntro,
  onSimulateNextDay
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.9);
  const [simulatedInfo, setSimulatedInfo] = useState(null);
  if (!isOpen) return null;
  const totalStars = Object.values(stageStars).reduce((sum, s) => sum + (s || 0), 0);
  const handleTestVoice = () => {
    speechService.setRate(speechRate);
    speechService.speakEnglish("Hello Zuzia! Welcome to our magical forest adventure!");
  };
  const handleConfirmReset = () => {
    onResetProgress();
    setShowConfirmReset(false);
    onClose();
  };
  const handleSimulateNextDayClick = () => {
    audioEffects.playStar();
    onSimulateNextDay();
    setSimulatedInfo("Zasymulowano kolejny dzie\u0144! Sprawd\u017A map\u0119 \u2013 pojawi\u0142a si\u0119 Poranna rozgrzewka \u2600\uFE0F");
    setTimeout(() => setSimulatedInfo(null), 4e3);
  };
  return /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "fixed inset-0 z-50 bg-stone-900/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "w-full max-w-lg bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 relative my-auto" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between border-b-2 border-amber-200 pb-3 mb-4" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-2xl" }, "\u{1F33F}"), /* @__PURE__ */ esm_index_production_default.createElement("h2", { className: "text-xl sm:text-2xl font-black text-amber-950 font-story" }, "K\u0105cik Rodzica")), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: onClose,
      className: "w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center font-bold text-sm"
    },
    "\u2715"
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "grid grid-cols-4 gap-2 mb-5 text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-2.5 bg-amber-100/90 rounded-2xl border border-amber-300" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex justify-center mb-1" }, /* @__PURE__ */ esm_index_production_default.createElement(StarIcon, { className: "w-4 h-4 text-amber-500", filled: true })), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-lg font-black text-amber-950 block" }, totalStars), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[10px] text-amber-900 font-bold" }, "Gwiazdek")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-2.5 bg-emerald-100/90 rounded-2xl border border-emerald-300" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex justify-center mb-1" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-sm" }, "\u{1F332}")), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-lg font-black text-emerald-950 block" }, unlockedStages.length, " / 7"), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[10px] text-emerald-900 font-bold" }, "Krain")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-2.5 bg-orange-100/90 rounded-2xl border border-orange-300" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex justify-center mb-1" }, /* @__PURE__ */ esm_index_production_default.createElement(BookOpen, { className: "w-4 h-4 text-orange-600" })), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-lg font-black text-orange-950 block" }, unlockedBookPages.length, " / 7"), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[10px] text-orange-900 font-bold" }, "Stron bajki")), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-2.5 bg-purple-100/90 rounded-2xl border border-purple-300" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex justify-center mb-1" }, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-sm" }, "\u{1F3A8}")), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-lg font-black text-purple-950 block" }, stickersCount), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-[10px] text-purple-900 font-bold" }, "Naklejek"))), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-3.5 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl border-2 border-amber-300 mb-4" }, /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-between gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement("div", null, /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-black text-amber-950 block font-story" }, "\u2600\uFE0F Powt\xF3rki nast\u0119pnego dnia (Spaced Repetition)"), /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-[11px] text-stone-600 leading-tight" }, "Sprawd\u017A jak dzia\u0142a poranna rozgrzewka z wczorajszymi s\u0142\xF3wkami.")), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleSimulateNextDayClick,
      className: "px-3.5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl text-xs font-black shadow-wood hover:scale-105 active:scale-95 transition-all shrink-0 border border-amber-300 cursor-pointer"
    },
    "\u{1F9EA} Symuluj kolejny dzie\u0144"
  )), simulatedInfo && /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "mt-2 text-xs font-bold text-emerald-800 animate-pulse" }, simulatedInfo)), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-3.5 bg-white/90 rounded-2xl border border-stone-200 mb-4" }, /* @__PURE__ */ esm_index_production_default.createElement("label", { className: "block text-xs font-bold text-stone-700 mb-1.5 font-story" }, "Tempo wymowy angielskich s\u0142\xF3wek:"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "input",
    {
      type: "range",
      min: "0.6",
      max: "1.2",
      step: "0.05",
      value: speechRate,
      onChange: (e2) => {
        const val = parseFloat(e2.target.value);
        setSpeechRate(val);
        speechService.setRate(val);
      },
      className: "w-full accent-orange-500 cursor-pointer"
    }
  ), /* @__PURE__ */ esm_index_production_default.createElement("span", { className: "text-xs font-mono font-bold text-stone-600 min-w-10 text-right" }, Math.round(speechRate * 100), "%")), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleTestVoice,
      className: "mt-1.5 text-xs font-bold text-orange-700 hover:text-orange-900 flex items-center gap-1 underline cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(Volume2, { className: "w-3.5 h-3.5" }),
    "Przetestuj g\u0142os lektora"
  )), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "space-y-2.5" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        onReplayIntro();
        onClose();
      },
      className: "w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs font-story rounded-xl border border-stone-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(FoxIcon, { className: "w-4 h-4 text-orange-600" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Poka\u017C Zuzi ekran powitalny bajki")
  ), !showConfirmReset ? /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => setShowConfirmReset(true),
      className: "w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs font-story rounded-xl border border-red-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
    },
    /* @__PURE__ */ esm_index_production_default.createElement(RotateCcw, { className: "w-4 h-4" }),
    /* @__PURE__ */ esm_index_production_default.createElement("span", null, "Zresetuj post\u0119py (wyzeruj gwiazdki i etapy)")
  ) : /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "p-3 bg-red-100/90 rounded-xl border-2 border-red-300 text-center" }, /* @__PURE__ */ esm_index_production_default.createElement("p", { className: "text-xs font-bold text-red-950 mb-2" }, "Czy na pewno zresetowa\u0107 post\u0119py Zuzi?"), /* @__PURE__ */ esm_index_production_default.createElement("div", { className: "flex items-center justify-center gap-2" }, /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: handleConfirmReset,
      className: "px-3.5 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold shadow-sm hover:bg-red-700 cursor-pointer"
    },
    "Tak, zresetuj"
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    "button",
    {
      type: "button",
      onClick: () => setShowConfirmReset(false),
      className: "px-3.5 py-1.5 bg-stone-200 text-stone-700 rounded-lg text-xs font-bold hover:bg-stone-300 cursor-pointer"
    },
    "Anuluj"
  ))))));
};

// src/services/storageService.js
var STORAGE_KEY = "lisek_angielski_zuzia_v2";
var getTodayDateString = () => {
  const now = /* @__PURE__ */ new Date();
  return now.toISOString().split("T")[0];
};
var getYesterdayDateString = () => {
  const d2 = /* @__PURE__ */ new Date();
  d2.setDate(d2.getDate() - 1);
  return d2.toISOString().split("T")[0];
};
var DEFAULT_STATE = {
  userName: "Zuzia",
  unlockedStages: [1],
  // Etap 1 odblokowany na starcie
  stageStars: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
  stageCompletedAt: {},
  // np. { 1: "2026-11-12" }
  morningReviewsCompleted: {},
  // np. { 1: "2026-11-13" }
  unlockedBookPages: [],
  // Strony bajki
  stickers: ["sticker_scarf"],
  // Początkowa naklejka w albumie Zuzi
  hasSeenWelcome: false,
  soundEnabled: true,
  speechRate: 0.9,
  simulatedDayOffset: 0
};
var StorageService = class {
  load() {
    if (typeof window === "undefined") return DEFAULT_STATE;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT_STATE;
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_STATE,
        ...parsed,
        stageStars: { ...DEFAULT_STATE.stageStars, ...parsed.stageStars || {} },
        stageCompletedAt: { ...parsed.stageCompletedAt || {} },
        morningReviewsCompleted: { ...parsed.morningReviewsCompleted || {} },
        stickers: Array.isArray(parsed.stickers) ? parsed.stickers : ["sticker_scarf"]
      };
    } catch (e2) {
      console.warn("B\u0142\u0105d odczytu localStorage:", e2);
      return DEFAULT_STATE;
    }
  }
  save(state) {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e2) {
      console.warn("B\u0142\u0105d zapisu localStorage:", e2);
    }
  }
  // Sprawdza czy dla danego etapu przyszedł czas na poranną rozgrzewkę
  isMorningReviewDue(stageId, state) {
    const completedDate = state.stageCompletedAt?.[stageId];
    if (!completedDate) return false;
    const today = getTodayDateString();
    const reviewDate = state.morningReviewsCompleted?.[stageId];
    return completedDate < today && reviewDate !== today;
  }
  // Symulacja kolejnego dnia dla testów rodzica
  simulateNextDay(currentState) {
    const yesterday = getYesterdayDateString();
    const updatedCompletedAt = {};
    (currentState.unlockedStages || []).forEach((stageId) => {
      if (currentState.stageStars?.[stageId] > 0 || stageId === 1) {
        updatedCompletedAt[stageId] = yesterday;
      }
    });
    const nextState = {
      ...currentState,
      stageCompletedAt: updatedCompletedAt,
      morningReviewsCompleted: {},
      // reset powtórek na nowy dzień
      simulatedDayOffset: (currentState.simulatedDayOffset || 0) + 1
    };
    this.save(nextState);
    return nextState;
  }
  resetProgress() {
    const fresh = {
      ...DEFAULT_STATE,
      hasSeenWelcome: true
    };
    this.save(fresh);
    return fresh;
  }
  resetAll() {
    this.save(DEFAULT_STATE);
    return DEFAULT_STATE;
  }
};
var storageService = new StorageService();

// src/App.jsx
function App() {
  const [gameState, setGameState] = useState(() => storageService.load());
  const [activeTab, setActiveTab] = useState("map");
  const [showWelcome, setShowWelcome] = useState(() => !storageService.load().hasSeenWelcome);
  const [selectedStage, setSelectedStage] = useState(null);
  const [reviewStage, setReviewStage] = useState(null);
  const [showParentCorner, setShowParentCorner] = useState(false);
  const [isMuted, setIsMuted] = useState(!storageService.load().soundEnabled);
  useEffect(() => {
    storageService.save(gameState);
  }, [gameState]);
  const totalStars = Object.values(gameState.stageStars || {}).reduce((acc, curr) => acc + (curr || 0), 0);
  const maxPossibleStars = STAGES_DATA.length * 3;
  const stickersCount = (gameState.stickers || []).length;
  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    speechService.setMuted(nextMuted);
    audioEffects.enabled = !nextMuted;
    setGameState((prev) => ({ ...prev, soundEnabled: !nextMuted }));
  };
  const handleFinishStage = (stageId, score, earnedStars) => {
    const today = getTodayDateString();
    setGameState((prev) => {
      const nextUnlockedStages = [...prev.unlockedStages || [1]];
      const nextStageId = stageId + 1;
      if (nextStageId <= STAGES_DATA.length && !nextUnlockedStages.includes(nextStageId)) {
        nextUnlockedStages.push(nextStageId);
      }
      const nextBookPages = [...prev.unlockedBookPages || []];
      if (!nextBookPages.includes(stageId)) {
        nextBookPages.push(stageId);
      }
      const prevStars = prev.stageStars?.[stageId] || 0;
      const bestStars = Math.max(prevStars, earnedStars);
      return {
        ...prev,
        unlockedStages: nextUnlockedStages,
        unlockedBookPages: nextBookPages,
        stageStars: {
          ...prev.stageStars,
          [stageId]: bestStars
        },
        stageCompletedAt: {
          ...prev.stageCompletedAt,
          [stageId]: today
        }
      };
    });
  };
  const handleAwardSticker = (stickerId) => {
    setGameState((prev) => {
      const current = prev.stickers || [];
      if (!current.includes(stickerId)) {
        return {
          ...prev,
          stickers: [...current, stickerId]
        };
      }
      return prev;
    });
  };
  const handleCompleteMorningReview = (stageId) => {
    const today = getTodayDateString();
    setGameState((prev) => ({
      ...prev,
      morningReviewsCompleted: {
        ...prev.morningReviewsCompleted,
        [stageId]: today
      }
    }));
    setReviewStage(null);
  };
  const handleSimulateNextDay = () => {
    const nextState = storageService.simulateNextDay(gameState);
    setGameState(nextState);
  };
  const handleStartAdventure = () => {
    setShowWelcome(false);
    setGameState((prev) => ({ ...prev, hasSeenWelcome: true }));
    setActiveTab("map");
  };
  const handleResetProgress = () => {
    const fresh = storageService.resetProgress();
    setGameState(fresh);
    setSelectedStage(null);
    setReviewStage(null);
    setActiveTab("map");
  };
  return /* @__PURE__ */ esm_index_production_default.createElement(ForestBackground, null, /* @__PURE__ */ esm_index_production_default.createElement(
    Header,
    {
      userName: gameState.userName,
      totalStars,
      maxStars: maxPossibleStars,
      stickersCount,
      activeTab,
      onTabChange: (tab) => {
        setShowWelcome(false);
        setActiveTab(tab);
      },
      onOpenParentCorner: () => setShowParentCorner(true),
      isMuted,
      onToggleMute: handleToggleMute
    }
  ), /* @__PURE__ */ esm_index_production_default.createElement("main", { className: "flex-1 flex flex-col justify-start" }, showWelcome ? /* @__PURE__ */ esm_index_production_default.createElement(WelcomeScreen, { onStartAdventure: handleStartAdventure }) : activeTab === "book" ? /* @__PURE__ */ esm_index_production_default.createElement(
    StoryBookView,
    {
      unlockedBookPages: gameState.unlockedBookPages || [],
      onGoToMap: () => setActiveTab("map")
    }
  ) : activeTab === "album" ? /* @__PURE__ */ esm_index_production_default.createElement(
    StickerAlbumView,
    {
      unlockedStickers: gameState.stickers || [],
      onGoToMap: () => setActiveTab("map")
    }
  ) : /* @__PURE__ */ esm_index_production_default.createElement(
    AdventureMap,
    {
      unlockedStages: gameState.unlockedStages || [1],
      stageStars: gameState.stageStars || {},
      onSelectStage: (stage) => setSelectedStage(stage),
      onStartMorningReview: (stage) => setReviewStage(stage),
      isReviewDueForStage: (stageId) => storageService.isMorningReviewDue(stageId, gameState)
    }
  )), selectedStage && /* @__PURE__ */ esm_index_production_default.createElement(
    StageModal,
    {
      stage: selectedStage,
      onClose: () => setSelectedStage(null),
      onFinishStage: handleFinishStage,
      onAwardSticker: handleAwardSticker,
      onOpenBook: () => {
        setSelectedStage(null);
        setActiveTab("book");
      },
      onOpenAlbum: () => {
        setSelectedStage(null);
        setActiveTab("album");
      }
    }
  ), reviewStage && /* @__PURE__ */ esm_index_production_default.createElement(
    MorningReviewModal,
    {
      stage: reviewStage,
      onClose: () => setReviewStage(null),
      onCompleteReview: handleCompleteMorningReview
    }
  ), /* @__PURE__ */ esm_index_production_default.createElement(
    ParentCornerModal,
    {
      isOpen: showParentCorner,
      onClose: () => setShowParentCorner(false),
      userName: gameState.userName,
      unlockedStages: gameState.unlockedStages || [1],
      stageStars: gameState.stageStars || {},
      unlockedBookPages: gameState.unlockedBookPages || [],
      stickersCount,
      onResetProgress: handleResetProgress,
      onReplayIntro: () => setShowWelcome(true),
      onSimulateNextDay: handleSimulateNextDay
    }
  ));
}
var App_default = App;

// src/main.jsx
esm_client_production_default.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ esm_index_production_default.createElement(esm_index_production_default.StrictMode, null, /* @__PURE__ */ esm_index_production_default.createElement(App_default, null))
);
