/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";
(function (d, r) {
  "object" === typeof exports && "undefined" !== typeof module
    ? r(exports)
    : "function" === typeof define && define.amd
    ? define(["exports"], r)
    : ((d = d || self), r((d.React = {})));
})(this, function (d) {
  function r(a) {
    for (
      var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a,
        c = 1;
      c < arguments.length;
      c++
    )
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return (
      "Minified React error #" +
      a +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }

  function w(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = ba;
    this.updater = c || ca;
  }

  function da() {}

  function L(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = ba;
    this.updater = c || ca;
  }

  function ea(a, b, c) {
    var g,
      e = {},
      fa = null,
      d = null;
    if (null != b)
      for (g in (void 0 !== b.ref && (d = b.ref),
      void 0 !== b.key && (fa = "" + b.key),
      b))
        ha.call(b, g) && !ia.hasOwnProperty(g) && (e[g] = b[g]);
    var h = arguments.length - 2;
    if (1 === h) e.children = c;
    else if (1 < h) {
      for (var k = Array(h), f = 0; f < h; f++) k[f] = arguments[f + 2];
      e.children = k;
    }
    if (a && a.defaultProps)
      for (g in ((h = a.defaultProps), h)) void 0 === e[g] && (e[g] = h[g]);
    return {
      $$typeof: x,
      type: a,
      key: fa,
      ref: d,
      props: e,
      _owner: M.current,
    };
  }

  function va(a, b) {
    return {
      $$typeof: x,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner,
    };
  }

  function N(a) {
    return "object" === typeof a && null !== a && a.$$typeof === x;
  }

  function wa(a) {
    var b = { "=": "=0", ":": "=2" };
    return (
      "$" +
      ("" + a).replace(/[=:]/g, function (a) {
        return b[a];
      })
    );
  }

  function ja(a, b, c, g) {
    if (C.length) {
      var e = C.pop();
      e.result = a;
      e.keyPrefix = b;
      e.func = c;
      e.context = g;
      e.count = 0;
      return e;
    }
    return {
      result: a,
      keyPrefix: b,
      func: c,
      context: g,
      count: 0,
    };
  }

  function ka(a) {
    a.result = null;
    a.keyPrefix = null;
    a.func = null;
    a.context = null;
    a.count = 0;
    10 > C.length && C.push(a);
  }

  function O(a, b, c, g) {
    var e = typeof a;
    if ("undefined" === e || "boolean" === e) a = null;
    var d = !1;
    if (null === a) d = !0;
    else
      switch (e) {
        case "string":
        case "number":
          d = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case x:
            case xa:
              d = !0;
          }
      }
    if (d) return c(g, a, "" === b ? "." + P(a, 0) : b), 1;
    d = 0;
    b = "" === b ? "." : b + ":";
    if (Array.isArray(a))
      for (var f = 0; f < a.length; f++) {
        e = a[f];
        var h = b + P(e, f);
        d += O(e, h, c, g);
      }
    else if (
      (null === a || "object" !== typeof a
        ? (h = null)
        : ((h = (la && a[la]) || a["@@iterator"]),
          (h = "function" === typeof h ? h : null)),
      "function" === typeof h)
    )
      for (a = h.call(a), f = 0; !(e = a.next()).done; )
        (e = e.value), (h = b + P(e, f++)), (d += O(e, h, c, g));
    else if ("object" === e)
      throw (
        ((c = "" + a),
        Error(
          r(
            31,
            "[object Object]" === c
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : c,
            ""
          )
        ))
      );
    return d;
  }

  function Q(a, b, c) {
    return null == a ? 0 : O(a, "", b, c);
  }

  function P(a, b) {
    return "object" === typeof a && null !== a && null != a.key
      ? wa(a.key)
      : b.toString(36);
  }

  function ya(a, b, c) {
    a.func.call(a.context, b, a.count++);
  }

  function za(a, b, c) {
    var g = a.result,
      e = a.keyPrefix;
    a = a.func.call(a.context, b, a.count++);
    Array.isArray(a)
      ? R(a, g, c, function (a) {
          return a;
        })
      : null != a &&
        (N(a) &&
          (a = va(
            a,
            e +
              (!a.key || (b && b.key === a.key)
                ? ""
                : ("" + a.key).replace(ma, "$&/") + "/") +
              c
          )),
        g.push(a));
  }

  function R(a, b, c, g, e) {
    var d = "";
    null != c && (d = ("" + c).replace(ma, "$&/") + "/");
    b = ja(b, d, g, e);
    Q(a, za, b);
    ka(b);
  }

  function t() {
    var a = na.current;
    if (null === a) throw Error(r(321));
    return a;
  }

  function S(a, b) {
    var c = a.length;
    a.push(b);
    a: for (;;) {
      var g = (c - 1) >>> 1,
        e = a[g];
      if (void 0 !== e && 0 < D(e, b)) (a[g] = b), (a[c] = e), (c = g);
      else break a;
    }
  }

  function n(a) {
    a = a[0];
    return void 0 === a ? null : a;
  }

  function E(a) {
    var b = a[0];
    if (void 0 !== b) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var g = 0, e = a.length; g < e; ) {
          var d = 2 * (g + 1) - 1,
            f = a[d],
            h = d + 1,
            k = a[h];
          if (void 0 !== f && 0 > D(f, c))
            void 0 !== k && 0 > D(k, f)
              ? ((a[g] = k), (a[h] = c), (g = h))
              : ((a[g] = f), (a[d] = c), (g = d));
          else if (void 0 !== k && 0 > D(k, c)) (a[g] = k), (a[h] = c), (g = h);
          else break a;
        }
      }
      return b;
    }
    return null;
  }

  function D(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }

  function F(a) {
    for (var b = n(u); null !== b; ) {
      if (null === b.callback) E(u);
      else if (b.startTime <= a)
        E(u), (b.sortIndex = b.expirationTime), S(p, b);
      else break;
      b = n(u);
    }
  }

  function T(a) {
    y = !1;
    F(a);
    if (!v)
      if (null !== n(p)) (v = !0), z(U);
      else {
        var b = n(u);
        null !== b && G(T, b.startTime - a);
      }
  }

  function U(a, b) {
    v = !1;
    y && ((y = !1), V());
    H = !0;
    var c = m;
    try {
      F(b);
      for (l = n(p); null !== l && (!(l.expirationTime > b) || (a && !W())); ) {
        var g = l.callback;
        if (null !== g) {
          l.callback = null;
          m = l.priorityLevel;
          var e = g(l.expirationTime <= b);
          b = q();
          "function" === typeof e ? (l.callback = e) : l === n(p) && E(p);
          F(b);
        } else E(p);
        l = n(p);
      }
      if (null !== l) var d = !0;
      else {
        var f = n(u);
        null !== f && G(T, f.startTime - b);
        d = !1;
      }
      return d;
    } finally {
      (l = null), (m = c), (H = !1);
    }
  }

  function oa(a) {
    switch (a) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1e4;
      default:
        return 5e3;
    }
  }

  var f = "function" === typeof Symbol && Symbol.for,
    x = f ? Symbol.for("react.element") : 60103,
    xa = f ? Symbol.for("react.portal") : 60106,
    Aa = f ? Symbol.for("react.fragment") : 60107,
    Ba = f ? Symbol.for("react.strict_mode") : 60108,
    Ca = f ? Symbol.for("react.profiler") : 60114,
    Da = f ? Symbol.for("react.provider") : 60109,
    Ea = f ? Symbol.for("react.context") : 60110,
    Fa = f ? Symbol.for("react.forward_ref") : 60112,
    Ga = f ? Symbol.for("react.suspense") : 60113,
    Ha = f ? Symbol.for("react.memo") : 60115,
    Ia = f ? Symbol.for("react.lazy") : 60116,
    la = "function" === typeof Symbol && Symbol.iterator,
    pa = Object.getOwnPropertySymbols,
    Ja = Object.prototype.hasOwnProperty,
    Ka = Object.prototype.propertyIsEnumerable,
    I = (function () {
      try {
        if (!Object.assign) return !1;
        var a = new String("abc");
        a[5] = "de";
        if ("5" === Object.getOwnPropertyNames(a)[0]) return !1;
        var b = {};
        for (a = 0; 10 > a; a++) b["_" + String.fromCharCode(a)] = a;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(b)
            .map(function (a) {
              return b[a];
            })
            .join("")
        )
          return !1;
        var c = {};
        "abcdefghijklmnopqrst".split("").forEach(function (a) {
          c[a] = a;
        });
        return "abcdefghijklmnopqrst" !==
          Object.keys(Object.assign({}, c)).join("")
          ? !1
          : !0;
      } catch (g) {
        return !1;
      }
    })()
      ? Object.assign
      : function (a, b) {
          if (null === a || void 0 === a)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          var c = Object(a);
          for (var g, e = 1; e < arguments.length; e++) {
            var d = Object(arguments[e]);
            for (var f in d) Ja.call(d, f) && (c[f] = d[f]);
            if (pa) {
              g = pa(d);
              for (var h = 0; h < g.length; h++)
                Ka.call(d, g[h]) && (c[g[h]] = d[g[h]]);
            }
          }
          return c;
        },
    ca = {
      isMounted: function (a) {
        return !1;
      },
      enqueueForceUpdate: function (a, b, c) {},
      enqueueReplaceState: function (a, b, c, d) {},
      enqueueSetState: function (a, b, c, d) {},
    },
    ba = {};
  w.prototype.isReactComponent = {};
  w.prototype.setState = function (a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a)
      throw Error(r(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  w.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  da.prototype = w.prototype;
  f = L.prototype = new da();
  f.constructor = L;
  I(f, w.prototype);
  f.isPureReactComponent = !0;
  var M = { current: null },
    ha = Object.prototype.hasOwnProperty,
    ia = { key: !0, ref: !0, __self: !0, __source: !0 },
    ma = /\/+/g,
    C = [],
    na = { current: null },
    X;
  if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
    var A = null,
      qa = null,
      ra = function () {
        if (null !== A)
          try {
            var a = q();
            A(!0, a);
            A = null;
          } catch (b) {
            throw (setTimeout(ra, 0), b);
          }
      },
      La = Date.now();
    var q = function () {
      return Date.now() - La;
    };
    var z = function (a) {
      null !== A ? setTimeout(z, 0, a) : ((A = a), setTimeout(ra, 0));
    };
    var G = function (a, b) {
      qa = setTimeout(a, b);
    };
    var V = function () {
      clearTimeout(qa);
    };
    var W = function () {
      return !1;
    };
    f = X = function () {};
  } else {
    var Y = window.performance,
      sa = window.Date,
      Ma = window.setTimeout,
      Na = window.clearTimeout;
    "undefined" !== typeof console &&
      ((f = window.cancelAnimationFrame),
      "function" !== typeof window.requestAnimationFrame &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
        ),
      "function" !== typeof f &&
        console.error(
          "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
        ));
    if ("object" === typeof Y && "function" === typeof Y.now)
      q = function () {
        return Y.now();
      };
    else {
      var Oa = sa.now();
      q = function () {
        return sa.now() - Oa;
      };
    }
    var J = !1,
      K = null,
      Z = -1,
      ta = 5,
      ua = 0;
    W = function () {
      return q() >= ua;
    };
    f = function () {};
    X = function (a) {
      0 > a || 125 < a
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
          )
        : (ta = 0 < a ? Math.floor(1e3 / a) : 5);
    };
    var B = new MessageChannel(),
      aa = B.port2;
    B.port1.onmessage = function () {
      if (null !== K) {
        var a = q();
        ua = a + ta;
        try {
          K(!0, a) ? aa.postMessage(null) : ((J = !1), (K = null));
        } catch (b) {
          throw (aa.postMessage(null), b);
        }
      } else J = !1;
    };
    z = function (a) {
      K = a;
      J || ((J = !0), aa.postMessage(null));
    };
    G = function (a, b) {
      Z = Ma(function () {
        a(q());
      }, b);
    };
    V = function () {
      Na(Z);
      Z = -1;
    };
  }
  var p = [],
    u = [],
    Pa = 1,
    l = null,
    m = 3,
    H = !1,
    v = !1,
    y = !1,
    Qa = 0;
  B = {
    ReactCurrentDispatcher: na,
    ReactCurrentOwner: M,
    IsSomeRendererActing: { current: !1 },
    assign: I,
  };
  I(B, {
    Scheduler: {
      __proto__: null,
      unstable_ImmediatePriority: 1,
      unstable_UserBlockingPriority: 2,
      unstable_NormalPriority: 3,
      unstable_IdlePriority: 5,
      unstable_LowPriority: 4,
      unstable_runWithPriority: function (a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = m;
        m = a;
        try {
          return b();
        } finally {
          m = c;
        }
      },
      unstable_next: function (a) {
        switch (m) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = m;
        }
        var c = m;
        m = b;
        try {
          return a();
        } finally {
          m = c;
        }
      },
      unstable_scheduleCallback: function (a, b, c) {
        var d = q();
        if ("object" === typeof c && null !== c) {
          var e = c.delay;
          e = "number" === typeof e && 0 < e ? d + e : d;
          c = "number" === typeof c.timeout ? c.timeout : oa(a);
        } else (c = oa(a)), (e = d);
        c = e + c;
        a = {
          id: Pa++,
          callback: b,
          priorityLevel: a,
          startTime: e,
          expirationTime: c,
          sortIndex: -1,
        };
        e > d
          ? ((a.sortIndex = e),
            S(u, a),
            null === n(p) && a === n(u) && (y ? V() : (y = !0), G(T, e - d)))
          : ((a.sortIndex = c), S(p, a), v || H || ((v = !0), z(U)));
        return a;
      },
      unstable_cancelCallback: function (a) {
        a.callback = null;
      },
      unstable_wrapCallback: function (a) {
        var b = m;
        return function () {
          var c = m;
          m = b;
          try {
            return a.apply(this, arguments);
          } finally {
            m = c;
          }
        };
      },
      unstable_getCurrentPriorityLevel: function () {
        return m;
      },
      unstable_shouldYield: function () {
        var a = q();
        F(a);
        var b = n(p);
        return (
          (b !== l &&
            null !== l &&
            null !== b &&
            null !== b.callback &&
            b.startTime <= a &&
            b.expirationTime < l.expirationTime) ||
          W()
        );
      },
      unstable_requestPaint: f,
      unstable_continueExecution: function () {
        v || H || ((v = !0), z(U));
      },
      unstable_pauseExecution: function () {},
      unstable_getFirstCallbackNode: function () {
        return n(p);
      },
      get unstable_now() {
        return q;
      },
      get unstable_forceFrameRate() {
        return X;
      },
      unstable_Profiling: null,
    },
    SchedulerTracing: {
      __proto__: null,
      __interactionsRef: null,
      __subscriberRef: null,
      unstable_clear: function (a) {
        return a();
      },
      unstable_getCurrent: function () {
        return null;
      },
      unstable_getThreadID: function () {
        return ++Qa;
      },
      unstable_trace: function (a, b, c) {
        return c();
      },
      unstable_wrap: function (a) {
        return a;
      },
      unstable_subscribe: function (a) {},
      unstable_unsubscribe: function (a) {},
    },
  });
  d.Children = {
    map: function (a, b, c) {
      if (null == a) return a;
      var d = [];
      R(a, d, null, b, c);
      return d;
    },
    forEach: function (a, b, c) {
      if (null == a) return a;
      b = ja(null, null, b, c);
      Q(a, ya, b);
      ka(b);
    },
    count: function (a) {
      return Q(
        a,
        function () {
          return null;
        },
        null
      );
    },
    toArray: function (a) {
      var b = [];
      R(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      if (!N(a)) throw Error(r(143));
      return a;
    },
  };
  d.Component = w;
  d.Fragment = Aa;
  d.Profiler = Ca;
  d.PureComponent = L;
  d.StrictMode = Ba;
  d.Suspense = Ga;
  d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B;
  d.cloneElement = function (a, b, c) {
    if (null === a || void 0 === a) throw Error(r(267, a));
    var d = I({}, a.props),
      e = a.key,
      f = a.ref,
      m = a._owner;
    if (null != b) {
      void 0 !== b.ref && ((f = b.ref), (m = M.current));
      void 0 !== b.key && (e = "" + b.key);
      if (a.type && a.type.defaultProps) var h = a.type.defaultProps;
      for (k in b)
        ha.call(b, k) &&
          !ia.hasOwnProperty(k) &&
          (d[k] = void 0 === b[k] && void 0 !== h ? h[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) d.children = c;
    else if (1 < k) {
      h = Array(k);
      for (var l = 0; l < k; l++) h[l] = arguments[l + 2];
      d.children = h;
    }
    return { $$typeof: x, type: a.type, key: e, ref: f, props: d, _owner: m };
  };
  d.createContext = function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: Ea,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    };
    a.Provider = { $$typeof: Da, _context: a };
    return (a.Consumer = a);
  };
  d.createElement = ea;
  d.createFactory = function (a) {
    var b = ea.bind(null, a);
    b.type = a;
    return b;
  };
  d.createRef = function () {
    return { current: null };
  };
  d.forwardRef = function (a) {
    return { $$typeof: Fa, render: a };
  };
  d.isValidElement = N;
  d.lazy = function (a) {
    return { $$typeof: Ia, _ctor: a, _status: -1, _result: null };
  };
  d.memo = function (a, b) {
    return { $$typeof: Ha, type: a, compare: void 0 === b ? null : b };
  };
  d.useCallback = function (a, b) {
    return t().useCallback(a, b);
  };
  d.useContext = function (a, b) {
    return t().useContext(a, b);
  };
  d.useDebugValue = function (a, b) {};
  d.useEffect = function (a, b) {
    return t().useEffect(a, b);
  };
  d.useImperativeHandle = function (a, b, c) {
    return t().useImperativeHandle(a, b, c);
  };
  d.useLayoutEffect = function (a, b) {
    return t().useLayoutEffect(a, b);
  };
  d.useMemo = function (a, b) {
    return t().useMemo(a, b);
  };
  d.useReducer = function (a, b, c) {
    return t().useReducer(a, b, c);
  };
  d.useRef = function (a) {
    return t().useRef(a);
  };
  d.useState = function (a) {
    return t().useState(a);
  };
  d.version = "16.14.0";
});

/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
("use strict");
(function (I, ea) {
  "object" === typeof exports && "undefined" !== typeof module
    ? ea(exports, require("react"))
    : "function" === typeof define && define.amd
    ? define(["exports", "react"], ea)
    : ((I = I || self), ea((I.ReactDOM = {}), I.React));
})(this, function (I, ea) {
  function k(a) {
    for (
      var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a,
        c = 1;
      c < arguments.length;
      c++
    )
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return (
      "Minified React error #" +
      a +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }

  function ji(a, b, c, d, e, f, g, h, m) {
    yb = !1;
    gc = null;
    ki.apply(li, arguments);
  }

  function mi(a, b, c, d, e, f, g, h, m) {
    ji.apply(this, arguments);
    if (yb) {
      if (yb) {
        var n = gc;
        yb = !1;
        gc = null;
      } else throw Error(k(198));
      hc || ((hc = !0), (pd = n));
    }
  }

  function lf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = mf(c);
    mi(d, b, void 0, a);
    a.currentTarget = null;
  }

  function nf() {
    if (ic)
      for (var a in cb) {
        var b = cb[a],
          c = ic.indexOf(a);
        if (!(-1 < c)) throw Error(k(96, a));
        if (!jc[c]) {
          if (!b.extractEvents) throw Error(k(97, a));
          jc[c] = b;
          c = b.eventTypes;
          for (var d in c) {
            var e = void 0;
            var f = c[d],
              g = b,
              h = d;
            if (qd.hasOwnProperty(h)) throw Error(k(99, h));
            qd[h] = f;
            var m = f.phasedRegistrationNames;
            if (m) {
              for (e in m) m.hasOwnProperty(e) && of(m[e], g, h);
              e = !0;
            } else
              f.registrationName
                ? (of(f.registrationName, g, h), (e = !0))
                : (e = !1);
            if (!e) throw Error(k(98, d, a));
          }
        }
      }
  }

  function of(a, b, c) {
    if (db[a]) throw Error(k(100, a));
    db[a] = b;
    rd[a] = b.eventTypes[c].dependencies;
  }

  function pf(a) {
    var b = !1,
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (!cb.hasOwnProperty(c) || cb[c] !== d) {
          if (cb[c]) throw Error(k(102, c));
          cb[c] = d;
          b = !0;
        }
      }
    b && nf();
  }

  function qf(a) {
    if ((a = rf(a))) {
      if ("function" !== typeof sd) throw Error(k(280));
      var b = a.stateNode;
      b && ((b = td(b)), sd(a.stateNode, a.type, b));
    }
  }

  function sf(a) {
    eb ? (fb ? fb.push(a) : (fb = [a])) : (eb = a);
  }

  function tf() {
    if (eb) {
      var a = eb,
        b = fb;
      fb = eb = null;
      qf(a);
      if (b) for (a = 0; a < b.length; a++) qf(b[a]);
    }
  }

  function ud() {
    if (null !== eb || null !== fb) vd(), tf();
  }

  function uf(a, b, c) {
    if (wd) return a(b, c);
    wd = !0;
    try {
      return vf(a, b, c);
    } finally {
      (wd = !1), ud();
    }
  }

  function ni(a) {
    if (wf.call(xf, a)) return !0;
    if (wf.call(yf, a)) return !1;
    if (oi.test(a)) return (xf[a] = !0);
    yf[a] = !0;
    return !1;
  }

  function pi(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;
    switch (typeof b) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        if (d) return !1;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return !1;
    }
  }

  function qi(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pi(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return !1 === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return !1;
  }

  function L(a, b, c, d, e, f) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
  }

  function xd(a, b, c, d) {
    var e = E.hasOwnProperty(b) ? E[b] : null;
    var f =
      null !== e
        ? 0 === e.type
        : d
        ? !1
        : !(2 < b.length) ||
          ("o" !== b[0] && "O" !== b[0]) ||
          ("n" !== b[1] && "N" !== b[1])
        ? !1
        : !0;
    f ||
      (qi(b, c, e, d) && (c = null),
      d || null === e
        ? ni(b) &&
          (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c))
        : e.mustUseProperty
        ? (a[e.propertyName] = null === c ? (3 === e.type ? !1 : "") : c)
        : ((b = e.attributeName),
          (d = e.attributeNamespace),
          null === c
            ? a.removeAttribute(b)
            : ((e = e.type),
              (c = 3 === e || (4 === e && !0 === c) ? "" : "" + c),
              d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
  }

  function zb(a) {
    if (null === a || "object" !== typeof a) return null;
    a = (zf && a[zf]) || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  function ri(a) {
    if (-1 === a._status) {
      a._status = 0;
      var b = a._ctor;
      b = b();
      a._result = b;
      b.then(
        function (b) {
          0 === a._status &&
            ((b = b.default), (a._status = 1), (a._result = b));
        },
        function (b) {
          0 === a._status && ((a._status = 2), (a._result = b));
        }
      );
    }
  }

  function na(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case Ma:
        return "Fragment";
      case gb:
        return "Portal";
      case kc:
        return "Profiler";
      case Af:
        return "StrictMode";
      case lc:
        return "Suspense";
      case yd:
        return "SuspenseList";
    }
    if ("object" === typeof a)
      switch (a.$$typeof) {
        case Bf:
          return "Context.Consumer";
        case Cf:
          return "Context.Provider";
        case zd:
          var b = a.render;
          b = b.displayName || b.name || "";
          return (
            a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef")
          );
        case Ad:
          return na(a.type);
        case Df:
          return na(a.render);
        case Ef:
          if ((a = 1 === a._status ? a._result : null)) return na(a);
      }
    return null;
  }

  function Bd(a) {
    var b = "";
    do {
      a: switch (a.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var c = "";
          break a;
        default:
          var d = a._debugOwner,
            e = a._debugSource,
            f = na(a.type);
          c = null;
          d && (c = na(d.type));
          d = f;
          f = "";
          e
            ? (f =
                " (at " + e.fileName.replace(si, "") + ":" + e.lineNumber + ")")
            : c && (f = " (created by " + c + ")");
          c = "\n    in " + (d || "Unknown") + f;
      }
      b += c;
      a = a.return;
    } while (a);
    return b;
  }

  function va(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return a;
      default:
        return "";
    }
  }

  function Ff(a) {
    var b = a.type;
    return (
      (a = a.nodeName) &&
      "input" === a.toLowerCase() &&
      ("checkbox" === b || "radio" === b)
    );
  }

  function ti(a) {
    var b = Ff(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];
    if (
      !a.hasOwnProperty(b) &&
      "undefined" !== typeof c &&
      "function" === typeof c.get &&
      "function" === typeof c.set
    ) {
      var e = c.get,
        f = c.set;
      Object.defineProperty(a, b, {
        configurable: !0,
        get: function () {
          return e.call(this);
        },
        set: function (a) {
          d = "" + a;
          f.call(this, a);
        },
      });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return {
        getValue: function () {
          return d;
        },
        setValue: function (a) {
          d = "" + a;
        },
        stopTracking: function () {
          a._valueTracker = null;
          delete a[b];
        },
      };
    }
  }

  function mc(a) {
    a._valueTracker || (a._valueTracker = ti(a));
  }

  function Gf(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = "";
    a && (d = Ff(a) ? (a.checked ? "true" : "false") : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
  }

  function Cd(a, b) {
    var c = b.checked;
    return M({}, b, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != c ? c : a._wrapperState.initialChecked,
    });
  }

  function Hf(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;
    c = va(null != b.value ? b.value : c);
    a._wrapperState = {
      initialChecked: d,
      initialValue: c,
      controlled:
        "checkbox" === b.type || "radio" === b.type
          ? null != b.checked
          : null != b.value,
    };
  }

  function If(a, b) {
    b = b.checked;
    null != b && xd(a, "checked", b, !1);
  }

  function Dd(a, b) {
    If(a, b);
    var c = va(b.value),
      d = b.type;
    if (null != c)
      if ("number" === d) {
        if ((0 === c && "" === a.value) || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
    else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value")
      ? Ed(a, b.type, c)
      : b.hasOwnProperty("defaultValue") && Ed(a, b.type, va(b.defaultValue));
    null == b.checked &&
      null != b.defaultChecked &&
      (a.defaultChecked = !!b.defaultChecked);
  }

  function Jf(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (
        !(
          ("submit" !== d && "reset" !== d) ||
          (void 0 !== b.value && null !== b.value)
        )
      )
        return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }

  function Ed(a, b, c) {
    if ("number" !== b || a.ownerDocument.activeElement !== a)
      null == c
        ? (a.defaultValue = "" + a._wrapperState.initialValue)
        : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }

  function ui(a) {
    var b = "";
    ea.Children.forEach(a, function (a) {
      null != a && (b += a);
    });
    return b;
  }

  function Fd(a, b) {
    a = M({ children: void 0 }, b);
    if ((b = ui(b.children))) a.children = b;
    return a;
  }

  function hb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
      for (c = 0; c < a.length; c++)
        (e = b.hasOwnProperty("$" + a[c].value)),
          a[c].selected !== e && (a[c].selected = e),
          e && d && (a[c].defaultSelected = !0);
    } else {
      c = "" + va(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = !0;
          d && (a[e].defaultSelected = !0);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = !0);
    }
  }

  function Gd(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(k(91));
    return M({}, b, {
      value: void 0,
      defaultValue: void 0,
      children: "" + a._wrapperState.initialValue,
    });
  }

  function Kf(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b) throw Error(k(92));
        if (Array.isArray(c)) {
          if (!(1 >= c.length)) throw Error(k(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: va(c) };
  }

  function Lf(a, b) {
    var c = va(b.value),
      d = va(b.defaultValue);
    null != c &&
      ((c = "" + c),
      c !== a.value && (a.value = c),
      null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }

  function Mf(a, b) {
    b = a.textContent;
    b === a._wrapperState.initialValue &&
      "" !== b &&
      null !== b &&
      (a.value = b);
  }

  function Nf(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }

  function Hd(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a
      ? Nf(b)
      : "http://www.w3.org/2000/svg" === a && "foreignObject" === b
      ? "http://www.w3.org/1999/xhtml"
      : a;
  }

  function nc(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }

  function oc(a) {
    if (Id[a]) return Id[a];
    if (!ib[a]) return a;
    var b = ib[a],
      c;
    for (c in b) if (b.hasOwnProperty(c) && c in Of) return (Id[a] = b[c]);
    return a;
  }

  function Jd(a) {
    var b = Pf.get(a);
    void 0 === b && ((b = new Map()), Pf.set(a, b));
    return b;
  }

  function Na(a) {
    var b = a,
      c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do (b = a), 0 !== (b.effectTag & 1026) && (c = b.return), (a = b.return);
      while (a);
    }
    return 3 === b.tag ? c : null;
  }

  function Qf(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && ((a = a.alternate), null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }
    return null;
  }

  function Rf(a) {
    if (Na(a) !== a) throw Error(k(188));
  }

  function vi(a) {
    var b = a.alternate;
    if (!b) {
      b = Na(a);
      if (null === b) throw Error(k(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c) return Rf(e), a;
          if (f === d) return Rf(e), b;
          f = f.sibling;
        }
        throw Error(k(188));
      }
      if (c.return !== d.return) (c = e), (d = f);
      else {
        for (var g = !1, h = e.child; h; ) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(k(189));
        }
      }
      if (c.alternate !== d) throw Error(k(190));
    }
    if (3 !== c.tag) throw Error(k(188));
    return c.stateNode.current === c ? a : b;
  }

  function Sf(a) {
    a = vi(a);
    if (!a) return null;
    for (var b = a; ; ) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) (b.child.return = b), (b = b.child);
      else {
        if (b === a) break;
        for (; !b.sibling; ) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return null;
  }

  function jb(a, b) {
    if (null == b) throw Error(k(30));
    if (null == a) return b;
    if (Array.isArray(a)) {
      if (Array.isArray(b)) return a.push.apply(a, b), a;
      a.push(b);
      return a;
    }
    return Array.isArray(b) ? [a].concat(b) : [a, b];
  }

  function Kd(a, b, c) {
    Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
  }

  function pc(a) {
    null !== a && (Ab = jb(Ab, a));
    a = Ab;
    Ab = null;
    if (a) {
      Kd(a, wi);
      if (Ab) throw Error(k(95));
      if (hc) throw ((a = pd), (hc = !1), (pd = null), a);
    }
  }

  function Ld(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }

  function Tf(a) {
    if (!wa) return !1;
    a = "on" + a;
    var b = a in document;
    b ||
      ((b = document.createElement("div")),
      b.setAttribute(a, "return;"),
      (b = "function" === typeof b[a]));
    return b;
  }

  function Uf(a) {
    a.topLevelType = null;
    a.nativeEvent = null;
    a.targetInst = null;
    a.ancestors.length = 0;
    10 > qc.length && qc.push(a);
  }

  function Vf(a, b, c, d) {
    if (qc.length) {
      var e = qc.pop();
      e.topLevelType = a;
      e.eventSystemFlags = d;
      e.nativeEvent = b;
      e.targetInst = c;
      return e;
    }
    return {
      topLevelType: a,
      eventSystemFlags: d,
      nativeEvent: b,
      targetInst: c,
      ancestors: [],
    };
  }

  function Wf(a) {
    var b = a.targetInst,
      c = b;
    do {
      if (!c) {
        a.ancestors.push(c);
        break;
      }
      var d = c;
      if (3 === d.tag) d = d.stateNode.containerInfo;
      else {
        for (; d.return; ) d = d.return;
        d = 3 !== d.tag ? null : d.stateNode.containerInfo;
      }
      if (!d) break;
      b = c.tag;
      (5 !== b && 6 !== b) || a.ancestors.push(c);
      c = Bb(d);
    } while (c);
    for (c = 0; c < a.ancestors.length; c++) {
      b = a.ancestors[c];
      var e = Ld(a.nativeEvent);
      d = a.topLevelType;
      var f = a.nativeEvent,
        g = a.eventSystemFlags;
      0 === c && (g |= 64);
      for (var h = null, m = 0; m < jc.length; m++) {
        var n = jc[m];
        n && (n = n.extractEvents(d, b, f, e, g)) && (h = jb(h, n));
      }
      pc(h);
    }
  }

  function Md(a, b, c) {
    if (!c.has(a)) {
      switch (a) {
        case "scroll":
          Cb(b, "scroll", !0);
          break;
        case "focus":
        case "blur":
          Cb(b, "focus", !0);
          Cb(b, "blur", !0);
          c.set("blur", null);
          c.set("focus", null);
          break;
        case "cancel":
        case "close":
          Tf(a) && Cb(b, a, !0);
          break;
        case "invalid":
        case "submit":
        case "reset":
          break;
        default:
          -1 === Db.indexOf(a) && w(a, b);
      }
      c.set(a, null);
    }
  }

  function xi(a, b) {
    var c = Jd(b);
    Nd.forEach(function (a) {
      Md(a, b, c);
    });
    yi.forEach(function (a) {
      Md(a, b, c);
    });
  }

  function Od(a, b, c, d, e) {
    return {
      blockedOn: a,
      topLevelType: b,
      eventSystemFlags: c | 32,
      nativeEvent: e,
      container: d,
    };
  }

  function Xf(a, b) {
    switch (a) {
      case "focus":
      case "blur":
        xa = null;
        break;
      case "dragenter":
      case "dragleave":
        ya = null;
        break;
      case "mouseover":
      case "mouseout":
        za = null;
        break;
      case "pointerover":
      case "pointerout":
        Eb.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fb.delete(b.pointerId);
    }
  }

  function Gb(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f)
      return (
        (a = Od(b, c, d, e, f)),
        null !== b && ((b = Hb(b)), null !== b && Yf(b)),
        a
      );
    a.eventSystemFlags |= d;
    return a;
  }

  function zi(a, b, c, d, e) {
    switch (b) {
      case "focus":
        return (xa = Gb(xa, a, b, c, d, e)), !0;
      case "dragenter":
        return (ya = Gb(ya, a, b, c, d, e)), !0;
      case "mouseover":
        return (za = Gb(za, a, b, c, d, e)), !0;
      case "pointerover":
        var f = e.pointerId;
        Eb.set(f, Gb(Eb.get(f) || null, a, b, c, d, e));
        return !0;
      case "gotpointercapture":
        return (
          (f = e.pointerId), Fb.set(f, Gb(Fb.get(f) || null, a, b, c, d, e)), !0
        );
    }
    return !1;
  }

  function Ai(a) {
    var b = Bb(a.target);
    if (null !== b) {
      var c = Na(b);
      if (null !== c)
        if (((b = c.tag), 13 === b)) {
          if (((b = Qf(c)), null !== b)) {
            a.blockedOn = b;
            Pd(a.priority, function () {
              Bi(c);
            });
            return;
          }
        } else if (3 === b && c.stateNode.hydrate) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
    }
    a.blockedOn = null;
  }

  function rc(a) {
    if (null !== a.blockedOn) return !1;
    var b = Qd(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
    if (null !== b) {
      var c = Hb(b);
      null !== c && Yf(c);
      a.blockedOn = b;
      return !1;
    }
    return !0;
  }

  function Zf(a, b, c) {
    rc(a) && c.delete(b);
  }

  function Ci() {
    for (Rd = !1; 0 < fa.length; ) {
      var a = fa[0];
      if (null !== a.blockedOn) {
        a = Hb(a.blockedOn);
        null !== a && Di(a);
        break;
      }
      var b = Qd(
        a.topLevelType,
        a.eventSystemFlags,
        a.container,
        a.nativeEvent
      );
      null !== b ? (a.blockedOn = b) : fa.shift();
    }
    null !== xa && rc(xa) && (xa = null);
    null !== ya && rc(ya) && (ya = null);
    null !== za && rc(za) && (za = null);
    Eb.forEach(Zf);
    Fb.forEach(Zf);
  }

  function Ib(a, b) {
    a.blockedOn === b && ((a.blockedOn = null), Rd || ((Rd = !0), $f(ag, Ci)));
  }

  function bg(a) {
    if (0 < fa.length) {
      Ib(fa[0], a);
      for (var b = 1; b < fa.length; b++) {
        var c = fa[b];
        c.blockedOn === a && (c.blockedOn = null);
      }
    }
    null !== xa && Ib(xa, a);
    null !== ya && Ib(ya, a);
    null !== za && Ib(za, a);
    b = function (b) {
      return Ib(b, a);
    };
    Eb.forEach(b);
    Fb.forEach(b);
    for (b = 0; b < Jb.length; b++)
      (c = Jb[b]), c.blockedOn === a && (c.blockedOn = null);
    for (; 0 < Jb.length && ((b = Jb[0]), null === b.blockedOn); )
      Ai(b), null === b.blockedOn && Jb.shift();
  }

  function Sd(a, b) {
    for (var c = 0; c < a.length; c += 2) {
      var d = a[c],
        e = a[c + 1],
        f = "on" + (e[0].toUpperCase() + e.slice(1));
      f = {
        phasedRegistrationNames: { bubbled: f, captured: f + "Capture" },
        dependencies: [d],
        eventPriority: b,
      };
      Td.set(d, b);
      cg.set(d, f);
      dg[e] = f;
    }
  }

  function w(a, b) {
    Cb(b, a, !1);
  }

  function Cb(a, b, c) {
    var d = Td.get(b);
    switch (void 0 === d ? 2 : d) {
      case 0:
        d = Ei.bind(null, b, 1, a);
        break;
      case 1:
        d = Fi.bind(null, b, 1, a);
        break;
      default:
        d = sc.bind(null, b, 1, a);
    }
    c ? a.addEventListener(b, d, !0) : a.addEventListener(b, d, !1);
  }

  function Ei(a, b, c, d) {
    Oa || vd();
    var e = sc,
      f = Oa;
    Oa = !0;
    try {
      eg(e, a, b, c, d);
    } finally {
      (Oa = f) || ud();
    }
  }

  function Fi(a, b, c, d) {
    Gi(Hi, sc.bind(null, a, b, c, d));
  }

  function sc(a, b, c, d) {
    if (tc)
      if (0 < fa.length && -1 < Nd.indexOf(a))
        (a = Od(null, a, b, c, d)), fa.push(a);
      else {
        var e = Qd(a, b, c, d);
        if (null === e) Xf(a, d);
        else if (-1 < Nd.indexOf(a)) (a = Od(e, a, b, c, d)), fa.push(a);
        else if (!zi(e, a, b, c, d)) {
          Xf(a, d);
          a = Vf(a, d, null, b);
          try {
            uf(Wf, a);
          } finally {
            Uf(a);
          }
        }
      }
  }

  function Qd(a, b, c, d) {
    c = Ld(d);
    c = Bb(c);
    if (null !== c) {
      var e = Na(c);
      if (null === e) c = null;
      else {
        var f = e.tag;
        if (13 === f) {
          c = Qf(e);
          if (null !== c) return c;
          c = null;
        } else if (3 === f) {
          if (e.stateNode.hydrate)
            return 3 === e.tag ? e.stateNode.containerInfo : null;
          c = null;
        } else e !== c && (c = null);
      }
    }
    a = Vf(a, d, c, b);
    try {
      uf(Wf, a);
    } finally {
      Uf(a);
    }
    return null;
  }

  function fg(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b
      ? ""
      : c || "number" !== typeof b || 0 === b || (Kb.hasOwnProperty(a) && Kb[a])
      ? ("" + b).trim()
      : b + "px";
  }

  function gg(a, b) {
    a = a.style;
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"),
          e = fg(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : (a[c] = e);
      }
  }

  function Ud(a, b) {
    if (b) {
      if (Ii[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
        throw Error(k(137, a, ""));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error(k(60));
        if (
          !(
            "object" === typeof b.dangerouslySetInnerHTML &&
            "__html" in b.dangerouslySetInnerHTML
          )
        )
          throw Error(k(61));
      }
      if (null != b.style && "object" !== typeof b.style)
        throw Error(k(62, ""));
    }
  }

  function Vd(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }

  function oa(a, b) {
    a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
    var c = Jd(a);
    b = rd[b];
    for (var d = 0; d < b.length; d++) Md(b[d], a, c);
  }

  function uc() {}

  function Wd(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }

  function hg(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }

  function ig(a, b) {
    var c = hg(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b)
          return {
            node: c,
            offset: b - a,
          };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = hg(c);
    }
  }

  function jg(a, b) {
    return a && b
      ? a === b
        ? !0
        : a && 3 === a.nodeType
        ? !1
        : b && 3 === b.nodeType
        ? jg(a, b.parentNode)
        : "contains" in a
        ? a.contains(b)
        : a.compareDocumentPosition
        ? !!(a.compareDocumentPosition(b) & 16)
        : !1
      : !1;
  }

  function kg() {
    for (var a = window, b = Wd(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = !1;
      }
      if (c) a = b.contentWindow;
      else break;
      b = Wd(a.document);
    }
    return b;
  }

  function Xd(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return (
      b &&
      (("input" === b &&
        ("text" === a.type ||
          "search" === a.type ||
          "tel" === a.type ||
          "url" === a.type ||
          "password" === a.type)) ||
        "textarea" === b ||
        "true" === a.contentEditable)
    );
  }

  function lg(a, b) {
    switch (a) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!b.autoFocus;
    }
    return !1;
  }

  function Yd(a, b) {
    return (
      "textarea" === a ||
      "option" === a ||
      "noscript" === a ||
      "string" === typeof b.children ||
      "number" === typeof b.children ||
      ("object" === typeof b.dangerouslySetInnerHTML &&
        null !== b.dangerouslySetInnerHTML &&
        null != b.dangerouslySetInnerHTML.__html)
    );
  }

  function kb(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
    }
    return a;
  }

  function mg(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if (c === ng || c === Zd || c === $d) {
          if (0 === b) return a;
          b--;
        } else c === og && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }

  function Bb(a) {
    var b = a[Aa];
    if (b) return b;
    for (var c = a.parentNode; c; ) {
      if ((b = c[Lb] || c[Aa])) {
        c = b.alternate;
        if (null !== b.child || (null !== c && null !== c.child))
          for (a = mg(a); null !== a; ) {
            if ((c = a[Aa])) return c;
            a = mg(a);
          }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }

  function Hb(a) {
    a = a[Aa] || a[Lb];
    return !a || (5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag)
      ? null
      : a;
  }

  function Pa(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(k(33));
  }

  function ae(a) {
    return a[vc] || null;
  }

  function pa(a) {
    do a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }

  function pg(a, b) {
    var c = a.stateNode;
    if (!c) return null;
    var d = td(c);
    if (!d) return null;
    c = d[b];
    a: switch (b) {
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
        (d = !d.disabled) ||
          ((a = a.type),
          (d = !(
            "button" === a ||
            "input" === a ||
            "select" === a ||
            "textarea" === a
          )));
        a = !d;
        break a;
      default:
        a = !1;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error(k(231, b, typeof c));
    return c;
  }

  function qg(a, b, c) {
    if ((b = pg(a, c.dispatchConfig.phasedRegistrationNames[b])))
      (c._dispatchListeners = jb(c._dispatchListeners, b)),
        (c._dispatchInstances = jb(c._dispatchInstances, a));
  }

  function Ji(a) {
    if (a && a.dispatchConfig.phasedRegistrationNames) {
      for (var b = a._targetInst, c = []; b; ) c.push(b), (b = pa(b));
      for (b = c.length; 0 < b--; ) qg(c[b], "captured", a);
      for (b = 0; b < c.length; b++) qg(c[b], "bubbled", a);
    }
  }

  function be(a, b, c) {
    a &&
      c &&
      c.dispatchConfig.registrationName &&
      (b = pg(a, c.dispatchConfig.registrationName)) &&
      ((c._dispatchListeners = jb(c._dispatchListeners, b)),
      (c._dispatchInstances = jb(c._dispatchInstances, a)));
  }

  function Ki(a) {
    a && a.dispatchConfig.registrationName && be(a._targetInst, null, a);
  }

  function lb(a) {
    Kd(a, Ji);
  }

  function rg() {
    if (wc) return wc;
    var a,
      b = ce,
      c = b.length,
      d,
      e = "value" in Ba ? Ba.value : Ba.textContent,
      f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return (wc = e.slice(a, 1 < d ? 1 - d : void 0));
  }

  function xc() {
    return !0;
  }

  function yc() {
    return !1;
  }

  function R(a, b, c, d) {
    this.dispatchConfig = a;
    this._targetInst = b;
    this.nativeEvent = c;
    a = this.constructor.Interface;
    for (var e in a)
      a.hasOwnProperty(e) &&
        ((b = a[e])
          ? (this[e] = b(c))
          : "target" === e
          ? (this.target = d)
          : (this[e] = c[e]));
    this.isDefaultPrevented = (
      null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue
    )
      ? xc
      : yc;
    this.isPropagationStopped = yc;
    return this;
  }

  function Li(a, b, c, d) {
    if (this.eventPool.length) {
      var e = this.eventPool.pop();
      this.call(e, a, b, c, d);
      return e;
    }
    return new this(a, b, c, d);
  }

  function Mi(a) {
    if (!(a instanceof this)) throw Error(k(279));
    a.destructor();
    10 > this.eventPool.length && this.eventPool.push(a);
  }

  function sg(a) {
    a.eventPool = [];
    a.getPooled = Li;
    a.release = Mi;
  }

  function tg(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== Ni.indexOf(b.keyCode);
      case "keydown":
        return 229 !== b.keyCode;
      case "keypress":
      case "mousedown":
      case "blur":
        return !0;
      default:
        return !1;
    }
  }

  function ug(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }

  function Oi(a, b) {
    switch (a) {
      case "compositionend":
        return ug(b);
      case "keypress":
        if (32 !== b.which) return null;
        vg = !0;
        return wg;
      case "textInput":
        return (a = b.data), a === wg && vg ? null : a;
      default:
        return null;
    }
  }

  function Pi(a, b) {
    if (mb)
      return "compositionend" === a || (!de && tg(a, b))
        ? ((a = rg()), (wc = ce = Ba = null), (mb = !1), a)
        : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || (b.ctrlKey && b.altKey)) {
          if (b.char && 1 < b.char.length) return b.char;
          if (b.which) return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return xg && "ko" !== b.locale ? null : b.data;
      default:
        return null;
    }
  }

  function yg(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!Qi[a.type] : "textarea" === b ? !0 : !1;
  }

  function zg(a, b, c) {
    a = R.getPooled(Ag.change, a, b, c);
    a.type = "change";
    sf(c);
    lb(a);
    return a;
  }

  function Ri(a) {
    pc(a);
  }

  function zc(a) {
    var b = Pa(a);
    if (Gf(b)) return a;
  }

  function Si(a, b) {
    if ("change" === a) return b;
  }

  function Bg() {
    Mb && (Mb.detachEvent("onpropertychange", Cg), (Nb = Mb = null));
  }

  function Cg(a) {
    if ("value" === a.propertyName && zc(Nb))
      if (((a = zg(Nb, a, Ld(a))), Oa)) pc(a);
      else {
        Oa = !0;
        try {
          ee(Ri, a);
        } finally {
          (Oa = !1), ud();
        }
      }
  }

  function Ti(a, b, c) {
    "focus" === a
      ? (Bg(), (Mb = b), (Nb = c), Mb.attachEvent("onpropertychange", Cg))
      : "blur" === a && Bg();
  }

  function Ui(a, b) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a)
      return zc(Nb);
  }

  function Vi(a, b) {
    if ("click" === a) return zc(b);
  }

  function Wi(a, b) {
    if ("input" === a || "change" === a) return zc(b);
  }

  function Xi(a) {
    var b = this.nativeEvent;
    return b.getModifierState
      ? b.getModifierState(a)
      : (a = Yi[a])
      ? !!b[a]
      : !1;
  }

  function fe(a) {
    return Xi;
  }

  function Zi(a, b) {
    return (a === b && (0 !== a || 1 / a === 1 / b)) || (a !== a && b !== b);
  }

  function Ob(a, b) {
    if (Qa(a, b)) return !0;
    if (
      "object" !== typeof a ||
      null === a ||
      "object" !== typeof b ||
      null === b
    )
      return !1;
    var c = Object.keys(a),
      d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for (d = 0; d < c.length; d++)
      if (!$i.call(b, c[d]) || !Qa(a[c[d]], b[c[d]])) return !1;
    return !0;
  }

  function Dg(a, b) {
    var c =
      b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
    if (ge || null == nb || nb !== Wd(c)) return null;
    c = nb;
    "selectionStart" in c && Xd(c)
      ? (c = {
          start: c.selectionStart,
          end: c.selectionEnd,
        })
      : ((c = (
          (c.ownerDocument && c.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (c = {
          anchorNode: c.anchorNode,
          anchorOffset: c.anchorOffset,
          focusNode: c.focusNode,
          focusOffset: c.focusOffset,
        }));
    return Pb && Ob(Pb, c)
      ? null
      : ((Pb = c),
        (a = R.getPooled(Eg.select, he, a, b)),
        (a.type = "select"),
        (a.target = nb),
        lb(a),
        a);
  }

  function Ac(a) {
    var b = a.keyCode;
    "charCode" in a
      ? ((a = a.charCode), 0 === a && 13 === b && (a = 13))
      : (a = b);
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }

  function q(a, b) {
    0 > ob || ((a.current = ie[ob]), (ie[ob] = null), ob--);
  }

  function y(a, b, c) {
    ob++;
    ie[ob] = a.current;
    a.current = b;
  }

  function pb(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Ca;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
      return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
      f;
    for (f in c) e[f] = b[f];
    d &&
      ((a = a.stateNode),
      (a.__reactInternalMemoizedUnmaskedChildContext = b),
      (a.__reactInternalMemoizedMaskedChildContext = e));
    return e;
  }

  function N(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }

  function Fg(a, b, c) {
    if (B.current !== Ca) throw Error(k(168));
    y(B, b);
    y(G, c);
  }

  function Gg(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in a)) throw Error(k(108, na(b) || "Unknown", e));
    return M({}, c, {}, d);
  }

  function Bc(a) {
    a =
      ((a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext) || Ca;
    Ra = B.current;
    y(B, a);
    y(G, G.current);
    return !0;
  }

  function Hg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(k(169));
    c
      ? ((a = Gg(a, b, Ra)),
        (d.__reactInternalMemoizedMergedChildContext = a),
        q(G),
        q(B),
        y(B, a))
      : q(G);
    y(G, c);
  }

  function Cc() {
    switch (aj()) {
      case Dc:
        return 99;
      case Ig:
        return 98;
      case Jg:
        return 97;
      case Kg:
        return 96;
      case Lg:
        return 95;
      default:
        throw Error(k(332));
    }
  }

  function Mg(a) {
    switch (a) {
      case 99:
        return Dc;
      case 98:
        return Ig;
      case 97:
        return Jg;
      case 96:
        return Kg;
      case 95:
        return Lg;
      default:
        throw Error(k(332));
    }
  }

  function Da(a, b) {
    a = Mg(a);
    return bj(a, b);
  }

  function Ng(a, b, c) {
    a = Mg(a);
    return je(a, b, c);
  }

  function Og(a) {
    null === qa ? ((qa = [a]), (Ec = je(Dc, Pg))) : qa.push(a);
    return Qg;
  }

  function ha() {
    if (null !== Ec) {
      var a = Ec;
      Ec = null;
      Rg(a);
    }
    Pg();
  }

  function Pg() {
    if (!ke && null !== qa) {
      ke = !0;
      var a = 0;
      try {
        var b = qa;
        Da(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];
            do c = c(!0);
            while (null !== c);
          }
        });
        qa = null;
      } catch (c) {
        throw (null !== qa && (qa = qa.slice(a + 1)), je(Dc, ha), c);
      } finally {
        ke = !1;
      }
    }
  }

  function Fc(a, b, c) {
    c /= 10;
    return 1073741821 - ((((1073741821 - a + b / 10) / c) | 0) + 1) * c;
  }

  function aa(a, b) {
    if (a && a.defaultProps) {
      b = M({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    }
    return b;
  }

  function le() {
    Gc = qb = Hc = null;
  }

  function me(a) {
    var b = Ic.current;
    q(Ic);
    a.type._context._currentValue = b;
  }

  function Sg(a, b) {
    for (; null !== a; ) {
      var c = a.alternate;
      if (a.childExpirationTime < b)
        (a.childExpirationTime = b),
          null !== c &&
            c.childExpirationTime < b &&
            (c.childExpirationTime = b);
      else if (null !== c && c.childExpirationTime < b)
        c.childExpirationTime = b;
      else break;
      a = a.return;
    }
  }

  function rb(a, b) {
    Hc = a;
    Gc = qb = null;
    a = a.dependencies;
    null !== a &&
      null !== a.firstContext &&
      (a.expirationTime >= b && (ia = !0), (a.firstContext = null));
  }

  function W(a, b) {
    if (Gc !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) (Gc = a), (b = 1073741823);
      b = { context: a, observedBits: b, next: null };
      if (null === qb) {
        if (null === Hc) throw Error(k(308));
        qb = b;
        Hc.dependencies = {
          expirationTime: 0,
          firstContext: b,
          responders: null,
        };
      } else qb = qb.next = b;
    }
    return a._currentValue;
  }

  function ne(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      baseQueue: null,
      shared: { pending: null },
      effects: null,
    };
  }

  function oe(a, b) {
    a = a.updateQueue;
    b.updateQueue === a &&
      (b.updateQueue = {
        baseState: a.baseState,
        baseQueue: a.baseQueue,
        shared: a.shared,
        effects: a.effects,
      });
  }

  function Ea(a, b) {
    a = {
      expirationTime: a,
      suspenseConfig: b,
      tag: Tg,
      payload: null,
      callback: null,
      next: null,
    };
    return (a.next = a);
  }

  function Fa(a, b) {
    a = a.updateQueue;
    if (null !== a) {
      a = a.shared;
      var c = a.pending;
      null === c ? (b.next = b) : ((b.next = c.next), (c.next = b));
      a.pending = b;
    }
  }

  function Ug(a, b) {
    var c = a.alternate;
    null !== c && oe(c, a);
    a = a.updateQueue;
    c = a.baseQueue;
    null === c
      ? ((a.baseQueue = b.next = b), (b.next = b))
      : ((b.next = c.next), (c.next = b));
  }

  function Qb(a, b, c, d) {
    var e = a.updateQueue;
    Ga = !1;
    var f = e.baseQueue,
      g = e.shared.pending;
    if (null !== g) {
      if (null !== f) {
        var h = f.next;
        f.next = g.next;
        g.next = h;
      }
      f = g;
      e.shared.pending = null;
      h = a.alternate;
      null !== h && ((h = h.updateQueue), null !== h && (h.baseQueue = g));
    }
    if (null !== f) {
      h = f.next;
      var m = e.baseState,
        n = 0,
        k = null,
        ba = null,
        l = null;
      if (null !== h) {
        var p = h;
        do {
          g = p.expirationTime;
          if (g < d) {
            var t = {
              expirationTime: p.expirationTime,
              suspenseConfig: p.suspenseConfig,
              tag: p.tag,
              payload: p.payload,
              callback: p.callback,
              next: null,
            };
            null === l ? ((ba = l = t), (k = m)) : (l = l.next = t);
            g > n && (n = g);
          } else {
            null !== l &&
              (l = l.next =
                {
                  expirationTime: 1073741823,
                  suspenseConfig: p.suspenseConfig,
                  tag: p.tag,
                  payload: p.payload,
                  callback: p.callback,
                  next: null,
                });
            Vg(g, p.suspenseConfig);
            a: {
              var q = a,
                r = p;
              g = b;
              t = c;
              switch (r.tag) {
                case 1:
                  q = r.payload;
                  if ("function" === typeof q) {
                    m = q.call(t, m, g);
                    break a;
                  }
                  m = q;
                  break a;
                case 3:
                  q.effectTag = (q.effectTag & -4097) | 64;
                case Tg:
                  q = r.payload;
                  g = "function" === typeof q ? q.call(t, m, g) : q;
                  if (null === g || void 0 === g) break a;
                  m = M({}, m, g);
                  break a;
                case Jc:
                  Ga = !0;
              }
            }
            null !== p.callback &&
              ((a.effectTag |= 32),
              (g = e.effects),
              null === g ? (e.effects = [p]) : g.push(p));
          }
          p = p.next;
          if (null === p || p === h)
            if (((g = e.shared.pending), null === g)) break;
            else
              (p = f.next = g.next),
                (g.next = h),
                (e.baseQueue = f = g),
                (e.shared.pending = null);
        } while (1);
      }
      null === l ? (k = m) : (l.next = ba);
      e.baseState = k;
      e.baseQueue = l;
      Kc(n);
      a.expirationTime = n;
      a.memoizedState = m;
    }
  }

  function Wg(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a)
      for (b = 0; b < a.length; b++) {
        var d = a[b],
          e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = e;
          e = c;
          if ("function" !== typeof d) throw Error(k(191, d));
          d.call(e);
        }
      }
  }

  function Lc(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : M({}, b, c);
    a.memoizedState = c;
    0 === a.expirationTime && (a.updateQueue.baseState = c);
  }

  function Xg(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate
      ? a.shouldComponentUpdate(d, f, g)
      : b.prototype && b.prototype.isPureReactComponent
      ? !Ob(c, d) || !Ob(e, f)
      : !0;
  }

  function Yg(a, b, c) {
    var d = !1,
      e = Ca;
    var f = b.contextType;
    "object" === typeof f && null !== f
      ? (f = W(f))
      : ((e = N(b) ? Ra : B.current),
        (d = b.contextTypes),
        (f = (d = null !== d && void 0 !== d) ? pb(a, e) : Ca));
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Mc;
    a.stateNode = b;
    b._reactInternalFiber = a;
    d &&
      ((a = a.stateNode),
      (a.__reactInternalMemoizedUnmaskedChildContext = e),
      (a.__reactInternalMemoizedMaskedChildContext = f));
    return b;
  }

  function Zg(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps &&
      b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps &&
      b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Mc.enqueueReplaceState(b, b.state, null);
  }

  function pe(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = $g;
    ne(a);
    var f = b.contextType;
    "object" === typeof f && null !== f
      ? (e.context = W(f))
      : ((f = N(b) ? Ra : B.current), (e.context = pb(a, f)));
    Qb(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Lc(a, b, f, c), (e.state = a.memoizedState));
    "function" === typeof b.getDerivedStateFromProps ||
      "function" === typeof e.getSnapshotBeforeUpdate ||
      ("function" !== typeof e.UNSAFE_componentWillMount &&
        "function" !== typeof e.componentWillMount) ||
      ((b = e.state),
      "function" === typeof e.componentWillMount && e.componentWillMount(),
      "function" === typeof e.UNSAFE_componentWillMount &&
        e.UNSAFE_componentWillMount(),
      b !== e.state && Mc.enqueueReplaceState(e, e.state, null),
      Qb(a, c, e, d),
      (e.state = a.memoizedState));
    "function" === typeof e.componentDidMount && (a.effectTag |= 4);
  }

  function Rb(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(k(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(k(147, a));
        var e = "" + a;
        if (
          null !== b &&
          null !== b.ref &&
          "function" === typeof b.ref &&
          b.ref._stringRef === e
        )
          return b.ref;
        b = function (a) {
          var b = d.refs;
          b === $g && (b = d.refs = {});
          null === a ? delete b[e] : (b[e] = a);
        };
        b._stringRef = e;
        return b;
      }
      if ("string" !== typeof a) throw Error(k(284));
      if (!c._owner) throw Error(k(290, a));
    }
    return a;
  }

  function Nc(a, b) {
    if ("textarea" !== a.type)
      throw Error(
        k(
          31,
          "[object Object]" === Object.prototype.toString.call(b)
            ? "object with keys {" + Object.keys(b).join(", ") + "}"
            : b,
          ""
        )
      );
  }

  function ah(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d
          ? ((d.nextEffect = c), (b.lastEffect = c))
          : (b.firstEffect = b.lastEffect = c);
        c.nextEffect = null;
        c.effectTag = 8;
      }
    }

    function c(c, d) {
      if (!a) return null;
      for (; null !== d; ) b(c, d), (d = d.sibling);
      return null;
    }

    function d(a, b) {
      for (a = new Map(); null !== b; )
        null !== b.key ? a.set(b.key, b) : a.set(b.index, b), (b = b.sibling);
      return a;
    }

    function e(a, b) {
      a = Sa(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }

    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return (d = d.index), d < c ? ((b.effectTag = 2), c) : d;
      b.effectTag = 2;
      return c;
    }

    function g(b) {
      a && null === b.alternate && (b.effectTag = 2);
      return b;
    }

    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag)
        return (b = qe(c, a.mode, d)), (b.return = a), b;
      b = e(b, c);
      b.return = a;
      return b;
    }

    function m(a, b, c, d) {
      if (null !== b && b.elementType === c.type)
        return (d = e(b, c.props)), (d.ref = Rb(a, b, c)), (d.return = a), d;
      d = Oc(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Rb(a, b, c);
      d.return = a;
      return d;
    }

    function n(a, b, c, d) {
      if (
        null === b ||
        4 !== b.tag ||
        b.stateNode.containerInfo !== c.containerInfo ||
        b.stateNode.implementation !== c.implementation
      )
        return (b = re(c, a.mode, d)), (b.return = a), b;
      b = e(b, c.children || []);
      b.return = a;
      return b;
    }

    function l(a, b, c, d, f) {
      if (null === b || 7 !== b.tag)
        return (b = Ha(c, a.mode, d, f)), (b.return = a), b;
      b = e(b, c);
      b.return = a;
      return b;
    }

    function ba(a, b, c) {
      if ("string" === typeof b || "number" === typeof b)
        return (b = qe("" + b, a.mode, c)), (b.return = a), b;
      if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {
          case Pc:
            return (
              (c = Oc(b.type, b.key, b.props, null, a.mode, c)),
              (c.ref = Rb(a, null, b)),
              (c.return = a),
              c
            );
          case gb:
            return (b = re(b, a.mode, c)), (b.return = a), b;
        }
        if (Qc(b) || zb(b))
          return (b = Ha(b, a.mode, c, null)), (b.return = a), b;
        Nc(a, b);
      }
      return null;
    }

    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c || "number" === typeof c)
        return null !== e ? null : h(a, b, "" + c, d);
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Pc:
            return c.key === e
              ? c.type === Ma
                ? l(a, b, c.props.children, d, e)
                : m(a, b, c, d)
              : null;
          case gb:
            return c.key === e ? n(a, b, c, d) : null;
        }
        if (Qc(c) || zb(c)) return null !== e ? null : l(a, b, c, d, null);
        Nc(a, c);
      }
      return null;
    }

    function t(a, b, c, d, e) {
      if ("string" === typeof d || "number" === typeof d)
        return (a = a.get(c) || null), h(b, a, "" + d, e);
      if ("object" === typeof d && null !== d) {
        switch (d.$$typeof) {
          case Pc:
            return (
              (a = a.get(null === d.key ? c : d.key) || null),
              d.type === Ma
                ? l(b, a, d.props.children, e, d.key)
                : m(b, a, d, e)
            );
          case gb:
            return (
              (a = a.get(null === d.key ? c : d.key) || null), n(b, a, d, e)
            );
        }
        if (Qc(d) || zb(d)) return (a = a.get(c) || null), l(b, a, d, e, null);
        Nc(b, d);
      }
      return null;
    }

    function q(e, g, h, m) {
      for (
        var n = null, k = null, l = g, r = (g = 0), C = null;
        null !== l && r < h.length;
        r++
      ) {
        l.index > r ? ((C = l), (l = null)) : (C = l.sibling);
        var O = p(e, l, h[r], m);
        if (null === O) {
          null === l && (l = C);
          break;
        }
        a && l && null === O.alternate && b(e, l);
        g = f(O, g, r);
        null === k ? (n = O) : (k.sibling = O);
        k = O;
        l = C;
      }
      if (r === h.length) return c(e, l), n;
      if (null === l) {
        for (; r < h.length; r++)
          (l = ba(e, h[r], m)),
            null !== l &&
              ((g = f(l, g, r)),
              null === k ? (n = l) : (k.sibling = l),
              (k = l));
        return n;
      }
      for (l = d(e, l); r < h.length; r++)
        (C = t(l, e, r, h[r], m)),
          null !== C &&
            (a && null !== C.alternate && l.delete(null === C.key ? r : C.key),
            (g = f(C, g, r)),
            null === k ? (n = C) : (k.sibling = C),
            (k = C));
      a &&
        l.forEach(function (a) {
          return b(e, a);
        });
      return n;
    }

    function w(e, g, h, n) {
      var m = zb(h);
      if ("function" !== typeof m) throw Error(k(150));
      h = m.call(h);
      if (null == h) throw Error(k(151));
      for (
        var l = (m = null), r = g, C = (g = 0), O = null, v = h.next();
        null !== r && !v.done;
        C++, v = h.next()
      ) {
        r.index > C ? ((O = r), (r = null)) : (O = r.sibling);
        var q = p(e, r, v.value, n);
        if (null === q) {
          null === r && (r = O);
          break;
        }
        a && r && null === q.alternate && b(e, r);
        g = f(q, g, C);
        null === l ? (m = q) : (l.sibling = q);
        l = q;
        r = O;
      }
      if (v.done) return c(e, r), m;
      if (null === r) {
        for (; !v.done; C++, v = h.next())
          (v = ba(e, v.value, n)),
            null !== v &&
              ((g = f(v, g, C)),
              null === l ? (m = v) : (l.sibling = v),
              (l = v));
        return m;
      }
      for (r = d(e, r); !v.done; C++, v = h.next())
        (v = t(r, e, C, v.value, n)),
          null !== v &&
            (a && null !== v.alternate && r.delete(null === v.key ? C : v.key),
            (g = f(v, g, C)),
            null === l ? (m = v) : (l.sibling = v),
            (l = v));
      a &&
        r.forEach(function (a) {
          return b(e, a);
        });
      return m;
    }

    return function (a, d, f, h) {
      var m =
        "object" === typeof f && null !== f && f.type === Ma && null === f.key;
      m && (f = f.props.children);
      var n = "object" === typeof f && null !== f;
      if (n)
        switch (f.$$typeof) {
          case Pc:
            a: {
              n = f.key;
              for (m = d; null !== m; ) {
                if (m.key === n) {
                  switch (m.tag) {
                    case 7:
                      if (f.type === Ma) {
                        c(a, m.sibling);
                        d = e(m, f.props.children);
                        d.return = a;
                        a = d;
                        break a;
                      }
                      break;
                    default:
                      if (m.elementType === f.type) {
                        c(a, m.sibling);
                        d = e(m, f.props);
                        d.ref = Rb(a, m, f);
                        d.return = a;
                        a = d;
                        break a;
                      }
                  }
                  c(a, m);
                  break;
                } else b(a, m);
                m = m.sibling;
              }
              f.type === Ma
                ? ((d = Ha(f.props.children, a.mode, h, f.key)),
                  (d.return = a),
                  (a = d))
                : ((h = Oc(f.type, f.key, f.props, null, a.mode, h)),
                  (h.ref = Rb(a, d, f)),
                  (h.return = a),
                  (a = h));
            }
            return g(a);
          case gb:
            a: {
              for (m = f.key; null !== d; ) {
                if (d.key === m)
                  if (
                    4 === d.tag &&
                    d.stateNode.containerInfo === f.containerInfo &&
                    d.stateNode.implementation === f.implementation
                  ) {
                    c(a, d.sibling);
                    d = e(d, f.children || []);
                    d.return = a;
                    a = d;
                    break a;
                  } else {
                    c(a, d);
                    break;
                  }
                else b(a, d);
                d = d.sibling;
              }
              d = re(f, a.mode, h);
              d.return = a;
              a = d;
            }
            return g(a);
        }
      if ("string" === typeof f || "number" === typeof f)
        return (
          (f = "" + f),
          null !== d && 6 === d.tag
            ? (c(a, d.sibling), (d = e(d, f)), (d.return = a), (a = d))
            : (c(a, d), (d = qe(f, a.mode, h)), (d.return = a), (a = d)),
          g(a)
        );
      if (Qc(f)) return q(a, d, f, h);
      if (zb(f)) return w(a, d, f, h);
      n && Nc(a, f);
      if ("undefined" === typeof f && !m)
        switch (a.tag) {
          case 1:
          case 0:
            throw (
              ((a = a.type),
              Error(k(152, a.displayName || a.name || "Component")))
            );
        }
      return c(a, d);
    };
  }

  function Ta(a) {
    if (a === Sb) throw Error(k(174));
    return a;
  }

  function se(a, b) {
    y(Tb, b);
    y(Ub, a);
    y(ja, Sb);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : Hd(null, "");
        break;
      default:
        (a = 8 === a ? b.parentNode : b),
          (b = a.namespaceURI || null),
          (a = a.tagName),
          (b = Hd(b, a));
    }
    q(ja);
    y(ja, b);
  }

  function tb(a) {
    q(ja);
    q(Ub);
    q(Tb);
  }

  function bh(a) {
    Ta(Tb.current);
    var b = Ta(ja.current);
    var c = Hd(b, a.type);
    b !== c && (y(Ub, a), y(ja, c));
  }

  function te(a) {
    Ub.current === a && (q(ja), q(Ub));
  }

  function Rc(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (
          null !== c &&
          ((c = c.dehydrated), null === c || c.data === $d || c.data === Zd)
        )
          return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.effectTag & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }

  function ue(a, b) {
    return { responder: a, props: b };
  }

  function S() {
    throw Error(k(321));
  }

  function ve(a, b) {
    if (null === b) return !1;
    for (var c = 0; c < b.length && c < a.length; c++)
      if (!Qa(a[c], b[c])) return !1;
    return !0;
  }

  function we(a, b, c, d, e, f) {
    Ia = f;
    z = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.expirationTime = 0;
    Sc.current = null === a || null === a.memoizedState ? dj : ej;
    a = c(d, e);
    if (b.expirationTime === Ia) {
      f = 0;
      do {
        b.expirationTime = 0;
        if (!(25 > f)) throw Error(k(301));
        f += 1;
        J = K = null;
        b.updateQueue = null;
        Sc.current = fj;
        a = c(d, e);
      } while (b.expirationTime === Ia);
    }
    Sc.current = Tc;
    b = null !== K && null !== K.next;
    Ia = 0;
    J = K = z = null;
    Uc = !1;
    if (b) throw Error(k(300));
    return a;
  }

  function ub() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    null === J ? (z.memoizedState = J = a) : (J = J.next = a);
    return J;
  }

  function vb() {
    if (null === K) {
      var a = z.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = K.next;
    var b = null === J ? z.memoizedState : J.next;
    if (null !== b) (J = b), (K = a);
    else {
      if (null === a) throw Error(k(310));
      K = a;
      a = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      };
      null === J ? (z.memoizedState = J = a) : (J = J.next = a);
    }
    return J;
  }

  function Ua(a, b) {
    return "function" === typeof b ? b(a) : b;
  }

  function Vc(a, b, c) {
    b = vb();
    c = b.queue;
    if (null === c) throw Error(k(311));
    c.lastRenderedReducer = a;
    var d = K,
      e = d.baseQueue,
      f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      e = e.next;
      d = d.baseState;
      var h = (g = f = null),
        m = e;
      do {
        var n = m.expirationTime;
        if (n < Ia) {
          var l = {
            expirationTime: m.expirationTime,
            suspenseConfig: m.suspenseConfig,
            action: m.action,
            eagerReducer: m.eagerReducer,
            eagerState: m.eagerState,
            next: null,
          };
          null === h ? ((g = h = l), (f = d)) : (h = h.next = l);
          n > z.expirationTime && ((z.expirationTime = n), Kc(n));
        } else
          null !== h &&
            (h = h.next =
              {
                expirationTime: 1073741823,
                suspenseConfig: m.suspenseConfig,
                action: m.action,
                eagerReducer: m.eagerReducer,
                eagerState: m.eagerState,
                next: null,
              }),
            Vg(n, m.suspenseConfig),
            (d = m.eagerReducer === a ? m.eagerState : a(d, m.action));
        m = m.next;
      } while (null !== m && m !== e);
      null === h ? (f = d) : (h.next = g);
      Qa(d, b.memoizedState) || (ia = !0);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }
    return [b.memoizedState, c.dispatch];
  }

  function Wc(a, b, c) {
    b = vb();
    c = b.queue;
    if (null === c) throw Error(k(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
      e = c.pending,
      f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = (e = e.next);
      do (f = a(f, g.action)), (g = g.next);
      while (g !== e);
      Qa(f, b.memoizedState) || (ia = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }

  function xe(a) {
    var b = ub();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: Ua,
      lastRenderedState: a,
    };
    a = a.dispatch = ch.bind(null, z, a);
    return [b.memoizedState, a];
  }

  function ye(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = z.updateQueue;
    null === b
      ? ((b = { lastEffect: null }),
        (z.updateQueue = b),
        (b.lastEffect = a.next = a))
      : ((c = b.lastEffect),
        null === c
          ? (b.lastEffect = a.next = a)
          : ((d = c.next), (c.next = a), (a.next = d), (b.lastEffect = a)));
    return a;
  }

  function dh(a) {
    return vb().memoizedState;
  }

  function ze(a, b, c, d) {
    var e = ub();
    z.effectTag |= a;
    e.memoizedState = ye(1 | b, c, void 0, void 0 === d ? null : d);
  }

  function Ae(a, b, c, d) {
    var e = vb();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== K) {
      var g = K.memoizedState;
      f = g.destroy;
      if (null !== d && ve(d, g.deps)) {
        ye(b, c, f, d);
        return;
      }
    }
    z.effectTag |= a;
    e.memoizedState = ye(1 | b, c, f, d);
  }

  function eh(a, b) {
    return ze(516, 4, a, b);
  }

  function Xc(a, b) {
    return Ae(516, 4, a, b);
  }

  function fh(a, b) {
    return Ae(4, 2, a, b);
  }

  function gh(a, b) {
    if ("function" === typeof b)
      return (
        (a = a()),
        b(a),
        function () {
          b(null);
        }
      );
    if (null !== b && void 0 !== b)
      return (
        (a = a()),
        (b.current = a),
        function () {
          b.current = null;
        }
      );
  }

  function hh(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Ae(4, 2, gh.bind(null, b, a), c);
  }

  function Be(a, b) {}

  function ih(a, b) {
    ub().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }

  function Yc(a, b) {
    var c = vb();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ve(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }

  function jh(a, b) {
    var c = vb();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ve(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }

  function Ce(a, b, c) {
    var d = Cc();
    Da(98 > d ? 98 : d, function () {
      a(!0);
    });
    Da(97 < d ? 97 : d, function () {
      var d = X.suspense;
      X.suspense = void 0 === b ? null : b;
      try {
        a(!1), c();
      } finally {
        X.suspense = d;
      }
    });
  }

  function ch(a, b, c) {
    var d = ka(),
      e = Vb.suspense;
    d = Va(d, a, e);
    e = {
      expirationTime: d,
      suspenseConfig: e,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null,
    };
    var f = b.pending;
    null === f ? (e.next = e) : ((e.next = f.next), (f.next = e));
    b.pending = e;
    f = a.alternate;
    if (a === z || (null !== f && f === z))
      (Uc = !0), (e.expirationTime = Ia), (z.expirationTime = Ia);
    else {
      if (
        0 === a.expirationTime &&
        (null === f || 0 === f.expirationTime) &&
        ((f = b.lastRenderedReducer), null !== f)
      )
        try {
          var g = b.lastRenderedState,
            h = f(g, c);
          e.eagerReducer = f;
          e.eagerState = h;
          if (Qa(h, g)) return;
        } catch (m) {
        } finally {
        }
      Ja(a, d);
    }
  }

  function kh(a, b) {
    var c = la(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.effectTag = 8;
    null !== a.lastEffect
      ? ((a.lastEffect.nextEffect = c), (a.lastEffect = c))
      : (a.firstEffect = a.lastEffect = c);
  }

  function lh(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b =
          1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase()
            ? null
            : b;
        return null !== b ? ((a.stateNode = b), !0) : !1;
      case 6:
        return (
          (b = "" === a.pendingProps || 3 !== b.nodeType ? null : b),
          null !== b ? ((a.stateNode = b), !0) : !1
        );
      case 13:
        return !1;
      default:
        return !1;
    }
  }

  function De(a) {
    if (Wa) {
      var b = Ka;
      if (b) {
        var c = b;
        if (!lh(a, b)) {
          b = kb(c.nextSibling);
          if (!b || !lh(a, b)) {
            a.effectTag = (a.effectTag & -1025) | 2;
            Wa = !1;
            ra = a;
            return;
          }
          kh(ra, c);
        }
        ra = a;
        Ka = kb(b.firstChild);
      } else (a.effectTag = (a.effectTag & -1025) | 2), (Wa = !1), (ra = a);
    }
  }

  function mh(a) {
    for (
      a = a.return;
      null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;

    )
      a = a.return;
    ra = a;
  }

  function Zc(a) {
    if (a !== ra) return !1;
    if (!Wa) return mh(a), (Wa = !0), !1;
    var b = a.type;
    if (
      5 !== a.tag ||
      ("head" !== b && "body" !== b && !Yd(b, a.memoizedProps))
    )
      for (b = Ka; b; ) kh(a, b), (b = kb(b.nextSibling));
    mh(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(k(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if (c === og) {
              if (0 === b) {
                Ka = kb(a.nextSibling);
                break a;
              }
              b--;
            } else (c !== ng && c !== Zd && c !== $d) || b++;
          }
          a = a.nextSibling;
        }
        Ka = null;
      }
    } else Ka = ra ? kb(a.stateNode.nextSibling) : null;
    return !0;
  }

  function Ee() {
    Ka = ra = null;
    Wa = !1;
  }

  function T(a, b, c, d) {
    b.child = null === a ? Fe(b, null, c, d) : wb(b, a.child, c, d);
  }

  function nh(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    rb(b, e);
    d = we(a, b, c, d, f, e);
    if (null !== a && !ia)
      return (
        (b.updateQueue = a.updateQueue),
        (b.effectTag &= -517),
        a.expirationTime <= e && (a.expirationTime = 0),
        sa(a, b, e)
      );
    b.effectTag |= 1;
    T(a, b, d, e);
    return b.child;
  }

  function oh(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if (
        "function" === typeof g &&
        !Ge(g) &&
        void 0 === g.defaultProps &&
        null === c.compare &&
        void 0 === c.defaultProps
      )
        return (b.tag = 15), (b.type = g), ph(a, b, g, d, e, f);
      a = Oc(c.type, null, d, null, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return (b.child = a);
    }
    g = a.child;
    if (
      e < f &&
      ((e = g.memoizedProps),
      (c = c.compare),
      (c = null !== c ? c : Ob),
      c(e, d) && a.ref === b.ref)
    )
      return sa(a, b, f);
    b.effectTag |= 1;
    a = Sa(g, d);
    a.ref = b.ref;
    a.return = b;
    return (b.child = a);
  }

  function ph(a, b, c, d, e, f) {
    return null !== a &&
      Ob(a.memoizedProps, d) &&
      a.ref === b.ref &&
      ((ia = !1), e < f)
      ? ((b.expirationTime = a.expirationTime), sa(a, b, f))
      : He(a, b, c, d, f);
  }

  function qh(a, b) {
    var c = b.ref;
    if ((null === a && null !== c) || (null !== a && a.ref !== c))
      b.effectTag |= 128;
  }

  function He(a, b, c, d, e) {
    var f = N(c) ? Ra : B.current;
    f = pb(b, f);
    rb(b, e);
    c = we(a, b, c, d, f, e);
    if (null !== a && !ia)
      return (
        (b.updateQueue = a.updateQueue),
        (b.effectTag &= -517),
        a.expirationTime <= e && (a.expirationTime = 0),
        sa(a, b, e)
      );
    b.effectTag |= 1;
    T(a, b, c, e);
    return b.child;
  }

  function rh(a, b, c, d, e) {
    if (N(c)) {
      var f = !0;
      Bc(b);
    } else f = !1;
    rb(b, e);
    if (null === b.stateNode)
      null !== a &&
        ((a.alternate = null), (b.alternate = null), (b.effectTag |= 2)),
        Yg(b, c, d),
        pe(b, c, d, e),
        (d = !0);
    else if (null === a) {
      var g = b.stateNode,
        h = b.memoizedProps;
      g.props = h;
      var m = g.context,
        n = c.contextType;
      "object" === typeof n && null !== n
        ? (n = W(n))
        : ((n = N(c) ? Ra : B.current), (n = pb(b, n)));
      var l = c.getDerivedStateFromProps,
        k =
          "function" === typeof l ||
          "function" === typeof g.getSnapshotBeforeUpdate;
      k ||
        ("function" !== typeof g.UNSAFE_componentWillReceiveProps &&
          "function" !== typeof g.componentWillReceiveProps) ||
        ((h !== d || m !== n) && Zg(b, g, d, n));
      Ga = !1;
      var p = b.memoizedState;
      g.state = p;
      Qb(b, d, g, e);
      m = b.memoizedState;
      h !== d || p !== m || G.current || Ga
        ? ("function" === typeof l && (Lc(b, c, l, d), (m = b.memoizedState)),
          (h = Ga || Xg(b, c, h, d, p, m, n))
            ? (k ||
                ("function" !== typeof g.UNSAFE_componentWillMount &&
                  "function" !== typeof g.componentWillMount) ||
                ("function" === typeof g.componentWillMount &&
                  g.componentWillMount(),
                "function" === typeof g.UNSAFE_componentWillMount &&
                  g.UNSAFE_componentWillMount()),
              "function" === typeof g.componentDidMount && (b.effectTag |= 4))
            : ("function" === typeof g.componentDidMount && (b.effectTag |= 4),
              (b.memoizedProps = d),
              (b.memoizedState = m)),
          (g.props = d),
          (g.state = m),
          (g.context = n),
          (d = h))
        : ("function" === typeof g.componentDidMount && (b.effectTag |= 4),
          (d = !1));
    } else
      (g = b.stateNode),
        oe(a, b),
        (h = b.memoizedProps),
        (g.props = b.type === b.elementType ? h : aa(b.type, h)),
        (m = g.context),
        (n = c.contextType),
        "object" === typeof n && null !== n
          ? (n = W(n))
          : ((n = N(c) ? Ra : B.current), (n = pb(b, n))),
        (l = c.getDerivedStateFromProps),
        (k =
          "function" === typeof l ||
          "function" === typeof g.getSnapshotBeforeUpdate) ||
          ("function" !== typeof g.UNSAFE_componentWillReceiveProps &&
            "function" !== typeof g.componentWillReceiveProps) ||
          ((h !== d || m !== n) && Zg(b, g, d, n)),
        (Ga = !1),
        (m = b.memoizedState),
        (g.state = m),
        Qb(b, d, g, e),
        (p = b.memoizedState),
        h !== d || m !== p || G.current || Ga
          ? ("function" === typeof l && (Lc(b, c, l, d), (p = b.memoizedState)),
            (l = Ga || Xg(b, c, h, d, m, p, n))
              ? (k ||
                  ("function" !== typeof g.UNSAFE_componentWillUpdate &&
                    "function" !== typeof g.componentWillUpdate) ||
                  ("function" === typeof g.componentWillUpdate &&
                    g.componentWillUpdate(d, p, n),
                  "function" === typeof g.UNSAFE_componentWillUpdate &&
                    g.UNSAFE_componentWillUpdate(d, p, n)),
                "function" === typeof g.componentDidUpdate &&
                  (b.effectTag |= 4),
                "function" === typeof g.getSnapshotBeforeUpdate &&
                  (b.effectTag |= 256))
              : ("function" !== typeof g.componentDidUpdate ||
                  (h === a.memoizedProps && m === a.memoizedState) ||
                  (b.effectTag |= 4),
                "function" !== typeof g.getSnapshotBeforeUpdate ||
                  (h === a.memoizedProps && m === a.memoizedState) ||
                  (b.effectTag |= 256),
                (b.memoizedProps = d),
                (b.memoizedState = p)),
            (g.props = d),
            (g.state = p),
            (g.context = n),
            (d = l))
          : ("function" !== typeof g.componentDidUpdate ||
              (h === a.memoizedProps && m === a.memoizedState) ||
              (b.effectTag |= 4),
            "function" !== typeof g.getSnapshotBeforeUpdate ||
              (h === a.memoizedProps && m === a.memoizedState) ||
              (b.effectTag |= 256),
            (d = !1));
    return Ie(a, b, c, d, f, e);
  }

  function Ie(a, b, c, d, e, f) {
    qh(a, b);
    var g = 0 !== (b.effectTag & 64);
    if (!d && !g) return e && Hg(b, c, !1), sa(a, b, f);
    d = b.stateNode;
    gj.current = b;
    var h =
      g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.effectTag |= 1;
    null !== a && g
      ? ((b.child = wb(b, a.child, null, f)), (b.child = wb(b, null, h, f)))
      : T(a, b, h, f);
    b.memoizedState = d.state;
    e && Hg(b, c, !0);
    return b.child;
  }

  function sh(a) {
    var b = a.stateNode;
    b.pendingContext
      ? Fg(a, b.pendingContext, b.pendingContext !== b.context)
      : b.context && Fg(a, b.context, !1);
    se(a, b.containerInfo);
  }

  function th(a, b, c) {
    var d = b.mode,
      e = b.pendingProps,
      f = D.current,
      g = !1,
      h;
    (h = 0 !== (b.effectTag & 64)) ||
      (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
    h
      ? ((g = !0), (b.effectTag &= -65))
      : (null !== a && null === a.memoizedState) ||
        void 0 === e.fallback ||
        !0 === e.unstable_avoidThisFallback ||
        (f |= 1);
    y(D, f & 1);
    if (null === a) {
      void 0 !== e.fallback && De(b);
      if (g) {
        g = e.fallback;
        e = Ha(null, d, 0, null);
        e.return = b;
        if (0 === (b.mode & 2))
          for (
            a = null !== b.memoizedState ? b.child.child : b.child, e.child = a;
            null !== a;

          )
            (a.return = e), (a = a.sibling);
        c = Ha(g, d, c, null);
        c.return = b;
        e.sibling = c;
        b.memoizedState = Je;
        b.child = e;
        return c;
      }
      d = e.children;
      b.memoizedState = null;
      return (b.child = Fe(b, null, d, c));
    }
    if (null !== a.memoizedState) {
      a = a.child;
      d = a.sibling;
      if (g) {
        e = e.fallback;
        c = Sa(a, a.pendingProps);
        c.return = b;
        if (
          0 === (b.mode & 2) &&
          ((g = null !== b.memoizedState ? b.child.child : b.child),
          g !== a.child)
        )
          for (c.child = g; null !== g; ) (g.return = c), (g = g.sibling);
        d = Sa(d, e);
        d.return = b;
        c.sibling = d;
        c.childExpirationTime = 0;
        b.memoizedState = Je;
        b.child = c;
        return d;
      }
      c = wb(b, a.child, e.children, c);
      b.memoizedState = null;
      return (b.child = c);
    }
    a = a.child;
    if (g) {
      g = e.fallback;
      e = Ha(null, d, 0, null);
      e.return = b;
      e.child = a;
      null !== a && (a.return = e);
      if (0 === (b.mode & 2))
        for (
          a = null !== b.memoizedState ? b.child.child : b.child, e.child = a;
          null !== a;

        )
          (a.return = e), (a = a.sibling);
      c = Ha(g, d, c, null);
      c.return = b;
      e.sibling = c;
      c.effectTag |= 2;
      e.childExpirationTime = 0;
      b.memoizedState = Je;
      b.child = e;
      return c;
    }
    b.memoizedState = null;
    return (b.child = wb(b, a, e.children, c));
  }

  function uh(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    Sg(a.return, b);
  }

  function Ke(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g
      ? (a.memoizedState = {
          isBackwards: b,
          rendering: null,
          renderingStartTime: 0,
          last: d,
          tail: c,
          tailExpiration: 0,
          tailMode: e,
          lastEffect: f,
        })
      : ((g.isBackwards = b),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = d),
        (g.tail = c),
        (g.tailExpiration = 0),
        (g.tailMode = e),
        (g.lastEffect = f));
  }

  function vh(a, b, c) {
    var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
    T(a, b, d.children, c);
    d = D.current;
    if (0 !== (d & 2)) (d = (d & 1) | 2), (b.effectTag |= 64);
    else {
      if (null !== a && 0 !== (a.effectTag & 64))
        a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && uh(a, c);
          else if (19 === a.tag) uh(a, c);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
      d &= 1;
    }
    y(D, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;
    else
      switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; )
            (a = c.alternate),
              null !== a && null === Rc(a) && (e = c),
              (c = c.sibling);
          c = e;
          null === c
            ? ((e = b.child), (b.child = null))
            : ((e = c.sibling), (c.sibling = null));
          Ke(b, !1, e, c, f, b.lastEffect);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Rc(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          Ke(b, !0, c, null, f, b.lastEffect);
          break;
        case "together":
          Ke(b, !1, null, null, void 0, b.lastEffect);
          break;
        default:
          b.memoizedState = null;
      }
    return b.child;
  }

  function sa(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    var d = b.expirationTime;
    0 !== d && Kc(d);
    if (b.childExpirationTime < c) return null;
    if (null !== a && b.child !== a.child) throw Error(k(153));
    if (null !== b.child) {
      a = b.child;
      c = Sa(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; )
        (a = a.sibling),
          (c = c.sibling = Sa(a, a.pendingProps)),
          (c.return = b);
      c.sibling = null;
    }
    return b.child;
  }

  function $c(a, b) {
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), (b = b.sibling);
        null === c ? (a.tail = null) : (c.sibling = null);
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), (c = c.sibling);
        null === d
          ? b || null === a.tail
            ? (a.tail = null)
            : (a.tail.sibling = null)
          : (d.sibling = null);
    }
  }

  function hj(a, b, c) {
    var d = b.pendingProps;
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return N(b.type) && (q(G), q(B)), null;
      case 3:
        return (
          tb(),
          q(G),
          q(B),
          (c = b.stateNode),
          c.pendingContext &&
            ((c.context = c.pendingContext), (c.pendingContext = null)),
          (null !== a && null !== a.child) || !Zc(b) || (b.effectTag |= 4),
          wh(b),
          null
        );
      case 5:
        te(b);
        c = Ta(Tb.current);
        var e = b.type;
        if (null !== a && null != b.stateNode)
          ij(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128);
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(k(166));
            return null;
          }
          a = Ta(ja.current);
          if (Zc(b)) {
            d = b.stateNode;
            e = b.type;
            var f = b.memoizedProps;
            d[Aa] = b;
            d[vc] = f;
            switch (e) {
              case "iframe":
              case "object":
              case "embed":
                w("load", d);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Db.length; a++) w(Db[a], d);
                break;
              case "source":
                w("error", d);
                break;
              case "img":
              case "image":
              case "link":
                w("error", d);
                w("load", d);
                break;
              case "form":
                w("reset", d);
                w("submit", d);
                break;
              case "details":
                w("toggle", d);
                break;
              case "input":
                Hf(d, f);
                w("invalid", d);
                oa(c, "onChange");
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f.multiple };
                w("invalid", d);
                oa(c, "onChange");
                break;
              case "textarea":
                Kf(d, f), w("invalid", d), oa(c, "onChange");
            }
            Ud(e, f);
            a = null;
            for (var g in f)
              if (f.hasOwnProperty(g)) {
                var h = f[g];
                "children" === g
                  ? "string" === typeof h
                    ? d.textContent !== h && (a = ["children", h])
                    : "number" === typeof h &&
                      d.textContent !== "" + h &&
                      (a = ["children", "" + h])
                  : db.hasOwnProperty(g) && null != h && oa(c, g);
              }
            switch (e) {
              case "input":
                mc(d);
                Jf(d, f, !0);
                break;
              case "textarea":
                mc(d);
                Mf(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f.onClick && (d.onclick = uc);
            }
            c = a;
            b.updateQueue = c;
            null !== c && (b.effectTag |= 4);
          } else {
            g = 9 === c.nodeType ? c : c.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = Nf(e));
            "http://www.w3.org/1999/xhtml" === a
              ? "script" === e
                ? ((a = g.createElement("div")),
                  (a.innerHTML = "<script>\x3c/script>"),
                  (a = a.removeChild(a.firstChild)))
                : "string" === typeof d.is
                ? (a = g.createElement(e, { is: d.is }))
                : ((a = g.createElement(e)),
                  "select" === e &&
                    ((g = a),
                    d.multiple
                      ? (g.multiple = !0)
                      : d.size && (g.size = d.size)))
              : (a = g.createElementNS(a, e));
            a[Aa] = b;
            a[vc] = d;
            jj(a, b, !1, !1);
            b.stateNode = a;
            g = Vd(e, d);
            switch (e) {
              case "iframe":
              case "object":
              case "embed":
                w("load", a);
                h = d;
                break;
              case "video":
              case "audio":
                for (h = 0; h < Db.length; h++) w(Db[h], a);
                h = d;
                break;
              case "source":
                w("error", a);
                h = d;
                break;
              case "img":
              case "image":
              case "link":
                w("error", a);
                w("load", a);
                h = d;
                break;
              case "form":
                w("reset", a);
                w("submit", a);
                h = d;
                break;
              case "details":
                w("toggle", a);
                h = d;
                break;
              case "input":
                Hf(a, d);
                h = Cd(a, d);
                w("invalid", a);
                oa(c, "onChange");
                break;
              case "option":
                h = Fd(a, d);
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                h = M({}, d, { value: void 0 });
                w("invalid", a);
                oa(c, "onChange");
                break;
              case "textarea":
                Kf(a, d);
                h = Gd(a, d);
                w("invalid", a);
                oa(c, "onChange");
                break;
              default:
                h = d;
            }
            Ud(e, h);
            var m = h;
            for (f in m)
              if (m.hasOwnProperty(f)) {
                var n = m[f];
                "style" === f
                  ? gg(a, n)
                  : "dangerouslySetInnerHTML" === f
                  ? ((n = n ? n.__html : void 0), null != n && xh(a, n))
                  : "children" === f
                  ? "string" === typeof n
                    ? ("textarea" !== e || "" !== n) && Wb(a, n)
                    : "number" === typeof n && Wb(a, "" + n)
                  : "suppressContentEditableWarning" !== f &&
                    "suppressHydrationWarning" !== f &&
                    "autoFocus" !== f &&
                    (db.hasOwnProperty(f)
                      ? null != n && oa(c, f)
                      : null != n && xd(a, f, n, g));
              }
            switch (e) {
              case "input":
                mc(a);
                Jf(a, d, !1);
                break;
              case "textarea":
                mc(a);
                Mf(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + va(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                c = d.value;
                null != c
                  ? hb(a, !!d.multiple, c, !1)
                  : null != d.defaultValue &&
                    hb(a, !!d.multiple, d.defaultValue, !0);
                break;
              default:
                "function" === typeof h.onClick && (a.onclick = uc);
            }
            lg(e, d) && (b.effectTag |= 4);
          }
          null !== b.ref && (b.effectTag |= 128);
        }
        return null;
      case 6:
        if (a && null != b.stateNode) kj(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode)
            throw Error(k(166));
          c = Ta(Tb.current);
          Ta(ja.current);
          Zc(b)
            ? ((c = b.stateNode),
              (d = b.memoizedProps),
              (c[Aa] = b),
              c.nodeValue !== d && (b.effectTag |= 4))
            : ((c = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d)),
              (c[Aa] = b),
              (b.stateNode = c));
        }
        return null;
      case 13:
        q(D);
        d = b.memoizedState;
        if (0 !== (b.effectTag & 64)) return (b.expirationTime = c), b;
        c = null !== d;
        d = !1;
        null === a
          ? void 0 !== b.memoizedProps.fallback && Zc(b)
          : ((e = a.memoizedState),
            (d = null !== e),
            c ||
              null === e ||
              ((e = a.child.sibling),
              null !== e &&
                ((f = b.firstEffect),
                null !== f
                  ? ((b.firstEffect = e), (e.nextEffect = f))
                  : ((b.firstEffect = b.lastEffect = e), (e.nextEffect = null)),
                (e.effectTag = 8))));
        if (c && !d && 0 !== (b.mode & 2))
          if (
            (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback) ||
            0 !== (D.current & 1)
          )
            F === Xa && (F = ad);
          else {
            if (F === Xa || F === ad) F = bd;
            0 !== Xb && null !== U && (Ya(U, P), yh(U, Xb));
          }
        if (c || d) b.effectTag |= 4;
        return null;
      case 4:
        return tb(), wh(b), null;
      case 10:
        return me(b), null;
      case 17:
        return N(b.type) && (q(G), q(B)), null;
      case 19:
        q(D);
        d = b.memoizedState;
        if (null === d) return null;
        e = 0 !== (b.effectTag & 64);
        f = d.rendering;
        if (null === f)
          if (e) $c(d, !1);
          else {
            if (F !== Xa || (null !== a && 0 !== (a.effectTag & 64)))
              for (f = b.child; null !== f; ) {
                a = Rc(f);
                if (null !== a) {
                  b.effectTag |= 64;
                  $c(d, !1);
                  e = a.updateQueue;
                  null !== e && ((b.updateQueue = e), (b.effectTag |= 4));
                  null === d.lastEffect && (b.firstEffect = null);
                  b.lastEffect = d.lastEffect;
                  for (d = b.child; null !== d; )
                    (e = d),
                      (f = c),
                      (e.effectTag &= 2),
                      (e.nextEffect = null),
                      (e.firstEffect = null),
                      (e.lastEffect = null),
                      (a = e.alternate),
                      null === a
                        ? ((e.childExpirationTime = 0),
                          (e.expirationTime = f),
                          (e.child = null),
                          (e.memoizedProps = null),
                          (e.memoizedState = null),
                          (e.updateQueue = null),
                          (e.dependencies = null))
                        : ((e.childExpirationTime = a.childExpirationTime),
                          (e.expirationTime = a.expirationTime),
                          (e.child = a.child),
                          (e.memoizedProps = a.memoizedProps),
                          (e.memoizedState = a.memoizedState),
                          (e.updateQueue = a.updateQueue),
                          (f = a.dependencies),
                          (e.dependencies =
                            null === f
                              ? null
                              : {
                                  expirationTime: f.expirationTime,
                                  firstContext: f.firstContext,
                                  responders: f.responders,
                                })),
                      (d = d.sibling);
                  y(D, (D.current & 1) | 2);
                  return b.child;
                }
                f = f.sibling;
              }
          }
        else {
          if (!e)
            if (((a = Rc(f)), null !== a)) {
              if (
                ((b.effectTag |= 64),
                (e = !0),
                (c = a.updateQueue),
                null !== c && ((b.updateQueue = c), (b.effectTag |= 4)),
                $c(d, !0),
                null === d.tail && "hidden" === d.tailMode && !f.alternate)
              )
                return (
                  (b = b.lastEffect = d.lastEffect),
                  null !== b && (b.nextEffect = null),
                  null
                );
            } else
              2 * Y() - d.renderingStartTime > d.tailExpiration &&
                1 < c &&
                ((b.effectTag |= 64),
                (e = !0),
                $c(d, !1),
                (b.expirationTime = b.childExpirationTime = c - 1));
          d.isBackwards
            ? ((f.sibling = b.child), (b.child = f))
            : ((c = d.last),
              null !== c ? (c.sibling = f) : (b.child = f),
              (d.last = f));
        }
        return null !== d.tail
          ? (0 === d.tailExpiration && (d.tailExpiration = Y() + 500),
            (c = d.tail),
            (d.rendering = c),
            (d.tail = c.sibling),
            (d.lastEffect = b.lastEffect),
            (d.renderingStartTime = Y()),
            (c.sibling = null),
            (b = D.current),
            y(D, e ? (b & 1) | 2 : b & 1),
            c)
          : null;
    }
    throw Error(k(156, b.tag));
  }

  function lj(a, b) {
    switch (a.tag) {
      case 1:
        return (
          N(a.type) && (q(G), q(B)),
          (b = a.effectTag),
          b & 4096 ? ((a.effectTag = (b & -4097) | 64), a) : null
        );
      case 3:
        tb();
        q(G);
        q(B);
        b = a.effectTag;
        if (0 !== (b & 64)) throw Error(k(285));
        a.effectTag = (b & -4097) | 64;
        return a;
      case 5:
        return te(a), null;
      case 13:
        return (
          q(D),
          (b = a.effectTag),
          b & 4096 ? ((a.effectTag = (b & -4097) | 64), a) : null
        );
      case 19:
        return q(D), null;
      case 4:
        return tb(), null;
      case 10:
        return me(a), null;
      default:
        return null;
    }
  }

  function Le(a, b) {
    return { value: a, source: b, stack: Bd(b) };
  }

  function Me(a, b) {
    var c = b.source,
      d = b.stack;
    null === d && null !== c && (d = Bd(c));
    null !== c && na(c.type);
    b = b.value;
    null !== a && 1 === a.tag && na(a.type);
    try {
      console.error(b);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }

  function mj(a, b) {
    try {
      (b.props = a.memoizedProps),
        (b.state = a.memoizedState),
        b.componentWillUnmount();
    } catch (c) {
      Za(a, c);
    }
  }

  function zh(a) {
    var b = a.ref;
    if (null !== b)
      if ("function" === typeof b)
        try {
          b(null);
        } catch (c) {
          Za(a, c);
        }
      else b.current = null;
  }

  function nj(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (b.effectTag & 256 && null !== a) {
          var c = a.memoizedProps,
            d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(
            b.elementType === b.type ? c : aa(b.type, c),
            d
          );
          a.__reactInternalSnapshotBeforeUpdate = b;
        }
        return;
      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(k(163));
  }

  function Ah(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = (b = b.next);
      do {
        if ((c.tag & a) === a) {
          var d = c.destroy;
          c.destroy = void 0;
          void 0 !== d && d();
        }
        c = c.next;
      } while (c !== b);
    }
  }

  function Bh(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = (b = b.next);
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }

  function oj(a, b, c, d) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        Bh(3, c);
        return;
      case 1:
        a = c.stateNode;
        c.effectTag & 4 &&
          (null === b
            ? a.componentDidMount()
            : ((d =
                c.elementType === c.type
                  ? b.memoizedProps
                  : aa(c.type, b.memoizedProps)),
              a.componentDidUpdate(
                d,
                b.memoizedState,
                a.__reactInternalSnapshotBeforeUpdate
              )));
        b = c.updateQueue;
        null !== b && Wg(c, b, a);
        return;
      case 3:
        b = c.updateQueue;
        if (null !== b) {
          a = null;
          if (null !== c.child)
            switch (c.child.tag) {
              case 5:
                a = c.child.stateNode;
                break;
              case 1:
                a = c.child.stateNode;
            }
          Wg(c, b, a);
        }
        return;
      case 5:
        a = c.stateNode;
        null === b &&
          c.effectTag & 4 &&
          lg(c.type, c.memoizedProps) &&
          a.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        null === c.memoizedState &&
          ((c = c.alternate),
          null !== c &&
            ((c = c.memoizedState),
            null !== c && ((c = c.dehydrated), null !== c && bg(c))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
        return;
    }
    throw Error(k(163));
  }

  function Ch(a, b, c) {
    "function" === typeof Ne && Ne(b);
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;
        if (null !== a && ((a = a.lastEffect), null !== a)) {
          var d = a.next;
          Da(97 < c ? 97 : c, function () {
            var a = d;
            do {
              var c = a.destroy;
              if (void 0 !== c) {
                var g = b;
                try {
                  c();
                } catch (h) {
                  Za(g, h);
                }
              }
              a = a.next;
            } while (a !== d);
          });
        }
        break;
      case 1:
        zh(b);
        c = b.stateNode;
        "function" === typeof c.componentWillUnmount && mj(b, c);
        break;
      case 5:
        zh(b);
        break;
      case 4:
        Dh(a, b, c);
    }
  }

  function Eh(a) {
    var b = a.alternate;
    a.return = null;
    a.child = null;
    a.memoizedState = null;
    a.updateQueue = null;
    a.dependencies = null;
    a.alternate = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.pendingProps = null;
    a.memoizedProps = null;
    a.stateNode = null;
    null !== b && Eh(b);
  }

  function Fh(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }

  function Gh(a) {
    a: {
      for (var b = a.return; null !== b; ) {
        if (Fh(b)) {
          var c = b;
          break a;
        }
        b = b.return;
      }
      throw Error(k(160));
    }
    b = c.stateNode;
    switch (c.tag) {
      case 5:
        var d = !1;
        break;
      case 3:
        b = b.containerInfo;
        d = !0;
        break;
      case 4:
        b = b.containerInfo;
        d = !0;
        break;
      default:
        throw Error(k(161));
    }
    c.effectTag & 16 && (Wb(b, ""), (c.effectTag &= -17));
    a: b: for (c = a; ; ) {
      for (; null === c.sibling; ) {
        if (null === c.return || Fh(c.return)) {
          c = null;
          break a;
        }
        c = c.return;
      }
      c.sibling.return = c.return;
      for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag; ) {
        if (c.effectTag & 2) continue b;
        if (null === c.child || 4 === c.tag) continue b;
        else (c.child.return = c), (c = c.child);
      }
      if (!(c.effectTag & 2)) {
        c = c.stateNode;
        break a;
      }
    }
    d ? Oe(a, c, b) : Pe(a, c, b);
  }

  function Oe(a, b, c) {
    var d = a.tag,
      e = 5 === d || 6 === d;
    if (e)
      (a = e ? a.stateNode : a.stateNode.instance),
        b
          ? 8 === c.nodeType
            ? c.parentNode.insertBefore(a, b)
            : c.insertBefore(a, b)
          : (8 === c.nodeType
              ? ((b = c.parentNode), b.insertBefore(a, c))
              : ((b = c), b.appendChild(a)),
            (c = c._reactRootContainer),
            (null !== c && void 0 !== c) ||
              null !== b.onclick ||
              (b.onclick = uc));
    else if (4 !== d && ((a = a.child), null !== a))
      for (Oe(a, b, c), a = a.sibling; null !== a; )
        Oe(a, b, c), (a = a.sibling);
  }

  function Pe(a, b, c) {
    var d = a.tag,
      e = 5 === d || 6 === d;
    if (e)
      (a = e ? a.stateNode : a.stateNode.instance),
        b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && ((a = a.child), null !== a))
      for (Pe(a, b, c), a = a.sibling; null !== a; )
        Pe(a, b, c), (a = a.sibling);
  }

  function Dh(a, b, c) {
    for (var d = b, e = !1, f, g; ; ) {
      if (!e) {
        e = d.return;
        a: for (;;) {
          if (null === e) throw Error(k(160));
          f = e.stateNode;
          switch (e.tag) {
            case 5:
              g = !1;
              break a;
            case 3:
              f = f.containerInfo;
              g = !0;
              break a;
            case 4:
              f = f.containerInfo;
              g = !0;
              break a;
          }
          e = e.return;
        }
        e = !0;
      }
      if (5 === d.tag || 6 === d.tag) {
        a: for (var h = a, m = d, n = c, l = m; ; )
          if ((Ch(h, l, n), null !== l.child && 4 !== l.tag))
            (l.child.return = l), (l = l.child);
          else {
            if (l === m) break a;
            for (; null === l.sibling; ) {
              if (null === l.return || l.return === m) break a;
              l = l.return;
            }
            l.sibling.return = l.return;
            l = l.sibling;
          }
        g
          ? ((h = f),
            (m = d.stateNode),
            8 === h.nodeType ? h.parentNode.removeChild(m) : h.removeChild(m))
          : f.removeChild(d.stateNode);
      } else if (4 === d.tag) {
        if (null !== d.child) {
          f = d.stateNode.containerInfo;
          g = !0;
          d.child.return = d;
          d = d.child;
          continue;
        }
      } else if ((Ch(a, d, c), null !== d.child)) {
        d.child.return = d;
        d = d.child;
        continue;
      }
      if (d === b) break;
      for (; null === d.sibling; ) {
        if (null === d.return || d.return === b) return;
        d = d.return;
        4 === d.tag && (e = !1);
      }
      d.sibling.return = d.return;
      d = d.sibling;
    }
  }

  function Qe(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        Ah(3, b);
        return;
      case 1:
        return;
      case 5:
        var c = b.stateNode;
        if (null != c) {
          var d = b.memoizedProps,
            e = null !== a ? a.memoizedProps : d;
          a = b.type;
          var f = b.updateQueue;
          b.updateQueue = null;
          if (null !== f) {
            c[vc] = d;
            "input" === a && "radio" === d.type && null != d.name && If(c, d);
            Vd(a, e);
            b = Vd(a, d);
            for (e = 0; e < f.length; e += 2) {
              var g = f[e],
                h = f[e + 1];
              "style" === g
                ? gg(c, h)
                : "dangerouslySetInnerHTML" === g
                ? xh(c, h)
                : "children" === g
                ? Wb(c, h)
                : xd(c, g, h, b);
            }
            switch (a) {
              case "input":
                Dd(c, d);
                break;
              case "textarea":
                Lf(c, d);
                break;
              case "select":
                (b = c._wrapperState.wasMultiple),
                  (c._wrapperState.wasMultiple = !!d.multiple),
                  (a = d.value),
                  null != a
                    ? hb(c, !!d.multiple, a, !1)
                    : b !== !!d.multiple &&
                      (null != d.defaultValue
                        ? hb(c, !!d.multiple, d.defaultValue, !0)
                        : hb(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (null === b.stateNode) throw Error(k(162));
        b.stateNode.nodeValue = b.memoizedProps;
        return;
      case 3:
        b = b.stateNode;
        b.hydrate && ((b.hydrate = !1), bg(b.containerInfo));
        return;
      case 12:
        return;
      case 13:
        c = b;
        null === b.memoizedState
          ? (d = !1)
          : ((d = !0), (c = b.child), (Re = Y()));
        if (null !== c)
          a: for (a = c; ; ) {
            if (5 === a.tag)
              (f = a.stateNode),
                d
                  ? ((f = f.style),
                    "function" === typeof f.setProperty
                      ? f.setProperty("display", "none", "important")
                      : (f.display = "none"))
                  : ((f = a.stateNode),
                    (e = a.memoizedProps.style),
                    (e =
                      void 0 !== e && null !== e && e.hasOwnProperty("display")
                        ? e.display
                        : null),
                    (f.style.display = fg("display", e)));
            else if (6 === a.tag)
              a.stateNode.nodeValue = d ? "" : a.memoizedProps;
            else if (
              13 === a.tag &&
              null !== a.memoizedState &&
              null === a.memoizedState.dehydrated
            ) {
              f = a.child.sibling;
              f.return = a;
              a = f;
              continue;
            } else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === c) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === c) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
        Hh(b);
        return;
      case 19:
        Hh(b);
        return;
      case 17:
        return;
    }
    throw Error(k(163));
  }

  function Hh(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new pj());
      b.forEach(function (b) {
        var d = qj.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }

  function Ih(a, b, c) {
    c = Ea(c, null);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function () {
      cd || ((cd = !0), (Se = d));
      Me(a, b);
    };
    return c;
  }

  function Jh(a, b, c) {
    c = Ea(c, null);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function () {
        Me(a, b);
        return d(e);
      };
    }
    var f = a.stateNode;
    null !== f &&
      "function" === typeof f.componentDidCatch &&
      (c.callback = function () {
        "function" !== typeof d &&
          (null === La ? (La = new Set([this])) : La.add(this), Me(a, b));
        var c = b.stack;
        this.componentDidCatch(b.value, {
          componentStack: null !== c ? c : "",
        });
      });
    return c;
  }

  function ka() {
    return (p & (ca | ma)) !== H
      ? 1073741821 - ((Y() / 10) | 0)
      : 0 !== dd
      ? dd
      : (dd = 1073741821 - ((Y() / 10) | 0));
  }

  function Va(a, b, c) {
    b = b.mode;
    if (0 === (b & 2)) return 1073741823;
    var d = Cc();
    if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
    if ((p & ca) !== H) return P;
    if (null !== c) a = Fc(a, c.timeoutMs | 0 || 5e3, 250);
    else
      switch (d) {
        case 99:
          a = 1073741823;
          break;
        case 98:
          a = Fc(a, 150, 100);
          break;
        case 97:
        case 96:
          a = Fc(a, 5e3, 250);
          break;
        case 95:
          a = 2;
          break;
        default:
          throw Error(k(326));
      }
    null !== U && a === P && --a;
    return a;
  }

  function ed(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    var d = a.return,
      e = null;
    if (null === d && 3 === a.tag) e = a.stateNode;
    else
      for (; null !== d; ) {
        c = d.alternate;
        d.childExpirationTime < b && (d.childExpirationTime = b);
        null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
        if (null === d.return && 3 === d.tag) {
          e = d.stateNode;
          break;
        }
        d = d.return;
      }
    null !== e && (U === e && (Kc(b), F === bd && Ya(e, P)), yh(e, b));
    return e;
  }

  function fd(a) {
    var b = a.lastExpiredTime;
    if (0 !== b) return b;
    b = a.firstPendingTime;
    if (!Kh(a, b)) return b;
    var c = a.lastPingedTime;
    a = a.nextKnownPendingLevel;
    a = c > a ? c : a;
    return 2 >= a && b !== a ? 0 : a;
  }

  function V(a) {
    if (0 !== a.lastExpiredTime)
      (a.callbackExpirationTime = 1073741823),
        (a.callbackPriority = 99),
        (a.callbackNode = Og(Te.bind(null, a)));
    else {
      var b = fd(a),
        c = a.callbackNode;
      if (0 === b)
        null !== c &&
          ((a.callbackNode = null),
          (a.callbackExpirationTime = 0),
          (a.callbackPriority = 90));
      else {
        var d = ka();
        1073741823 === b
          ? (d = 99)
          : 1 === b || 2 === b
          ? (d = 95)
          : ((d = 10 * (1073741821 - b) - 10 * (1073741821 - d)),
            (d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95));
        if (null !== c) {
          var e = a.callbackPriority;
          if (a.callbackExpirationTime === b && e >= d) return;
          c !== Qg && Rg(c);
        }
        a.callbackExpirationTime = b;
        a.callbackPriority = d;
        b =
          1073741823 === b
            ? Og(Te.bind(null, a))
            : Ng(d, Lh.bind(null, a), { timeout: 10 * (1073741821 - b) - Y() });
        a.callbackNode = b;
      }
    }
  }

  function Lh(a, b) {
    dd = 0;
    if (b) return (b = ka()), Ue(a, b), V(a), null;
    var c = fd(a);
    if (0 !== c) {
      b = a.callbackNode;
      if ((p & (ca | ma)) !== H) throw Error(k(327));
      xb();
      (a === U && c === P) || $a(a, c);
      if (null !== t) {
        var d = p;
        p |= ca;
        var e = Mh();
        do
          try {
            rj();
            break;
          } catch (h) {
            Nh(a, h);
          }
        while (1);
        le();
        p = d;
        gd.current = e;
        if (F === hd) throw ((b = id), $a(a, c), Ya(a, c), V(a), b);
        if (null === t)
          switch (
            ((e = a.finishedWork = a.current.alternate),
            (a.finishedExpirationTime = c),
            (d = F),
            (U = null),
            d)
          ) {
            case Xa:
            case hd:
              throw Error(k(345));
            case Oh:
              Ue(a, 2 < c ? 2 : c);
              break;
            case ad:
              Ya(a, c);
              d = a.lastSuspendedTime;
              c === d && (a.nextKnownPendingLevel = Ve(e));
              if (1073741823 === ta && ((e = Re + Ph - Y()), 10 < e)) {
                if (jd) {
                  var f = a.lastPingedTime;
                  if (0 === f || f >= c) {
                    a.lastPingedTime = c;
                    $a(a, c);
                    break;
                  }
                }
                f = fd(a);
                if (0 !== f && f !== c) break;
                if (0 !== d && d !== c) {
                  a.lastPingedTime = d;
                  break;
                }
                a.timeoutHandle = We(ab.bind(null, a), e);
                break;
              }
              ab(a);
              break;
            case bd:
              Ya(a, c);
              d = a.lastSuspendedTime;
              c === d && (a.nextKnownPendingLevel = Ve(e));
              if (jd && ((e = a.lastPingedTime), 0 === e || e >= c)) {
                a.lastPingedTime = c;
                $a(a, c);
                break;
              }
              e = fd(a);
              if (0 !== e && e !== c) break;
              if (0 !== d && d !== c) {
                a.lastPingedTime = d;
                break;
              }
              1073741823 !== Yb
                ? (d = 10 * (1073741821 - Yb) - Y())
                : 1073741823 === ta
                ? (d = 0)
                : ((d = 10 * (1073741821 - ta) - 5e3),
                  (e = Y()),
                  (c = 10 * (1073741821 - c) - e),
                  (d = e - d),
                  0 > d && (d = 0),
                  (d =
                    (120 > d
                      ? 120
                      : 480 > d
                      ? 480
                      : 1080 > d
                      ? 1080
                      : 1920 > d
                      ? 1920
                      : 3e3 > d
                      ? 3e3
                      : 4320 > d
                      ? 4320
                      : 1960 * sj(d / 1960)) - d),
                  c < d && (d = c));
              if (10 < d) {
                a.timeoutHandle = We(ab.bind(null, a), d);
                break;
              }
              ab(a);
              break;
            case Xe:
              if (1073741823 !== ta && null !== kd) {
                f = ta;
                var g = kd;
                d = g.busyMinDurationMs | 0;
                0 >= d
                  ? (d = 0)
                  : ((e = g.busyDelayMs | 0),
                    (f =
                      Y() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5e3))),
                    (d = f <= e ? 0 : e + d - f));
                if (10 < d) {
                  Ya(a, c);
                  a.timeoutHandle = We(ab.bind(null, a), d);
                  break;
                }
              }
              ab(a);
              break;
            default:
              throw Error(k(329));
          }
        V(a);
        if (a.callbackNode === b) return Lh.bind(null, a);
      }
    }
    return null;
  }

  function Te(a) {
    var b = a.lastExpiredTime;
    b = 0 !== b ? b : 1073741823;
    if ((p & (ca | ma)) !== H) throw Error(k(327));
    xb();
    (a === U && b === P) || $a(a, b);
    if (null !== t) {
      var c = p;
      p |= ca;
      var d = Mh();
      do
        try {
          tj();
          break;
        } catch (e) {
          Nh(a, e);
        }
      while (1);
      le();
      p = c;
      gd.current = d;
      if (F === hd) throw ((c = id), $a(a, b), Ya(a, b), V(a), c);
      if (null !== t) throw Error(k(261));
      a.finishedWork = a.current.alternate;
      a.finishedExpirationTime = b;
      U = null;
      ab(a);
      V(a);
    }
    return null;
  }

  function uj() {
    if (null !== bb) {
      var a = bb;
      bb = null;
      a.forEach(function (a, c) {
        Ue(c, a);
        V(c);
      });
      ha();
    }
  }

  function Qh(a, b) {
    var c = p;
    p |= 1;
    try {
      return a(b);
    } finally {
      (p = c), p === H && ha();
    }
  }

  function Rh(a, b) {
    var c = p;
    p &= -2;
    p |= Ye;
    try {
      return a(b);
    } finally {
      (p = c), p === H && ha();
    }
  }

  function $a(a, b) {
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    var c = a.timeoutHandle;
    -1 !== c && ((a.timeoutHandle = -1), vj(c));
    if (null !== t)
      for (c = t.return; null !== c; ) {
        var d = c;
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && (q(G), q(B));
            break;
          case 3:
            tb();
            q(G);
            q(B);
            break;
          case 5:
            te(d);
            break;
          case 4:
            tb();
            break;
          case 13:
            q(D);
            break;
          case 19:
            q(D);
            break;
          case 10:
            me(d);
        }
        c = c.return;
      }
    U = a;
    t = Sa(a.current, null);
    P = b;
    F = Xa;
    id = null;
    Yb = ta = 1073741823;
    kd = null;
    Xb = 0;
    jd = !1;
  }

  function Nh(a, b) {
    do {
      try {
        le();
        Sc.current = Tc;
        if (Uc)
          for (var c = z.memoizedState; null !== c; ) {
            var d = c.queue;
            null !== d && (d.pending = null);
            c = c.next;
          }
        Ia = 0;
        J = K = z = null;
        Uc = !1;
        if (null === t || null === t.return)
          return (F = hd), (id = b), (t = null);
        a: {
          var e = a,
            f = t.return,
            g = t,
            h = b;
          b = P;
          g.effectTag |= 2048;
          g.firstEffect = g.lastEffect = null;
          if (
            null !== h &&
            "object" === typeof h &&
            "function" === typeof h.then
          ) {
            var m = h;
            if (0 === (g.mode & 2)) {
              var n = g.alternate;
              n
                ? ((g.updateQueue = n.updateQueue),
                  (g.memoizedState = n.memoizedState),
                  (g.expirationTime = n.expirationTime))
                : ((g.updateQueue = null), (g.memoizedState = null));
            }
            var l = 0 !== (D.current & 1),
              k = f;
            do {
              var p;
              if ((p = 13 === k.tag)) {
                var q = k.memoizedState;
                if (null !== q) p = null !== q.dehydrated ? !0 : !1;
                else {
                  var w = k.memoizedProps;
                  p =
                    void 0 === w.fallback
                      ? !1
                      : !0 !== w.unstable_avoidThisFallback
                      ? !0
                      : l
                      ? !1
                      : !0;
                }
              }
              if (p) {
                var y = k.updateQueue;
                if (null === y) {
                  var r = new Set();
                  r.add(m);
                  k.updateQueue = r;
                } else y.add(m);
                if (0 === (k.mode & 2)) {
                  k.effectTag |= 64;
                  g.effectTag &= -2981;
                  if (1 === g.tag)
                    if (null === g.alternate) g.tag = 17;
                    else {
                      var O = Ea(1073741823, null);
                      O.tag = Jc;
                      Fa(g, O);
                    }
                  g.expirationTime = 1073741823;
                  break a;
                }
                h = void 0;
                g = b;
                var v = e.pingCache;
                null === v
                  ? ((v = e.pingCache = new wj()), (h = new Set()), v.set(m, h))
                  : ((h = v.get(m)),
                    void 0 === h && ((h = new Set()), v.set(m, h)));
                if (!h.has(g)) {
                  h.add(g);
                  var x = xj.bind(null, e, m, g);
                  m.then(x, x);
                }
                k.effectTag |= 4096;
                k.expirationTime = b;
                break a;
              }
              k = k.return;
            } while (null !== k);
            h = Error(
              (na(g.type) || "A React component") +
                " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                Bd(g)
            );
          }
          F !== Xe && (F = Oh);
          h = Le(h, g);
          k = f;
          do {
            switch (k.tag) {
              case 3:
                m = h;
                k.effectTag |= 4096;
                k.expirationTime = b;
                var A = Ih(k, m, b);
                Ug(k, A);
                break a;
              case 1:
                m = h;
                var u = k.type,
                  B = k.stateNode;
                if (
                  0 === (k.effectTag & 64) &&
                  ("function" === typeof u.getDerivedStateFromError ||
                    (null !== B &&
                      "function" === typeof B.componentDidCatch &&
                      (null === La || !La.has(B))))
                ) {
                  k.effectTag |= 4096;
                  k.expirationTime = b;
                  var H = Jh(k, m, b);
                  Ug(k, H);
                  break a;
                }
            }
            k = k.return;
          } while (null !== k);
        }
        t = Sh(t);
      } catch (cj) {
        b = cj;
        continue;
      }
      break;
    } while (1);
  }

  function Mh(a) {
    a = gd.current;
    gd.current = Tc;
    return null === a ? Tc : a;
  }

  function Vg(a, b) {
    a < ta && 2 < a && (ta = a);
    null !== b && a < Yb && 2 < a && ((Yb = a), (kd = b));
  }

  function Kc(a) {
    a > Xb && (Xb = a);
  }

  function tj() {
    for (; null !== t; ) t = Th(t);
  }

  function rj() {
    for (; null !== t && !yj(); ) t = Th(t);
  }

  function Th(a) {
    var b = zj(a.alternate, a, P);
    a.memoizedProps = a.pendingProps;
    null === b && (b = Sh(a));
    Uh.current = null;
    return b;
  }

  function Sh(a) {
    t = a;
    do {
      var b = t.alternate;
      a = t.return;
      if (0 === (t.effectTag & 2048)) {
        b = hj(b, t, P);
        if (1 === P || 1 !== t.childExpirationTime) {
          for (var c = 0, d = t.child; null !== d; ) {
            var e = d.expirationTime,
              f = d.childExpirationTime;
            e > c && (c = e);
            f > c && (c = f);
            d = d.sibling;
          }
          t.childExpirationTime = c;
        }
        if (null !== b) return b;
        null !== a &&
          0 === (a.effectTag & 2048) &&
          (null === a.firstEffect && (a.firstEffect = t.firstEffect),
          null !== t.lastEffect &&
            (null !== a.lastEffect && (a.lastEffect.nextEffect = t.firstEffect),
            (a.lastEffect = t.lastEffect)),
          1 < t.effectTag &&
            (null !== a.lastEffect
              ? (a.lastEffect.nextEffect = t)
              : (a.firstEffect = t),
            (a.lastEffect = t)));
      } else {
        b = lj(t);
        if (null !== b) return (b.effectTag &= 2047), b;
        null !== a &&
          ((a.firstEffect = a.lastEffect = null), (a.effectTag |= 2048));
      }
      b = t.sibling;
      if (null !== b) return b;
      t = a;
    } while (null !== t);
    F === Xa && (F = Xe);
    return null;
  }

  function Ve(a) {
    var b = a.expirationTime;
    a = a.childExpirationTime;
    return b > a ? b : a;
  }

  function ab(a) {
    var b = Cc();
    Da(99, Aj.bind(null, a, b));
    return null;
  }

  function Aj(a, b) {
    do xb();
    while (null !== Zb);
    if ((p & (ca | ma)) !== H) throw Error(k(327));
    var c = a.finishedWork,
      d = a.finishedExpirationTime;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    if (c === a.current) throw Error(k(177));
    a.callbackNode = null;
    a.callbackExpirationTime = 0;
    a.callbackPriority = 90;
    a.nextKnownPendingLevel = 0;
    var e = Ve(c);
    a.firstPendingTime = e;
    d <= a.lastSuspendedTime
      ? (a.firstSuspendedTime =
          a.lastSuspendedTime =
          a.nextKnownPendingLevel =
            0)
      : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
    d <= a.lastPingedTime && (a.lastPingedTime = 0);
    d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
    a === U && ((t = U = null), (P = 0));
    1 < c.effectTag
      ? null !== c.lastEffect
        ? ((c.lastEffect.nextEffect = c), (e = c.firstEffect))
        : (e = c)
      : (e = c.firstEffect);
    if (null !== e) {
      var f = p;
      p |= ma;
      Uh.current = null;
      Ze = tc;
      var g = kg();
      if (Xd(g)) {
        if ("selectionStart" in g)
          var h = { start: g.selectionStart, end: g.selectionEnd };
        else
          a: {
            h = ((h = g.ownerDocument) && h.defaultView) || window;
            var m = h.getSelection && h.getSelection();
            if (m && 0 !== m.rangeCount) {
              h = m.anchorNode;
              var n = m.anchorOffset,
                q = m.focusNode;
              m = m.focusOffset;
              try {
                h.nodeType, q.nodeType;
              } catch (sb) {
                h = null;
                break a;
              }
              var ba = 0,
                w = -1,
                y = -1,
                B = 0,
                D = 0,
                r = g,
                z = null;
              b: for (;;) {
                for (var v; ; ) {
                  r !== h || (0 !== n && 3 !== r.nodeType) || (w = ba + n);
                  r !== q || (0 !== m && 3 !== r.nodeType) || (y = ba + m);
                  3 === r.nodeType && (ba += r.nodeValue.length);
                  if (null === (v = r.firstChild)) break;
                  z = r;
                  r = v;
                }
                for (;;) {
                  if (r === g) break b;
                  z === h && ++B === n && (w = ba);
                  z === q && ++D === m && (y = ba);
                  if (null !== (v = r.nextSibling)) break;
                  r = z;
                  z = r.parentNode;
                }
                r = v;
              }
              h = -1 === w || -1 === y ? null : { start: w, end: y };
            } else h = null;
          }
        h = h || { start: 0, end: 0 };
      } else h = null;
      $e = { activeElementDetached: null, focusedElem: g, selectionRange: h };
      tc = !1;
      l = e;
      do
        try {
          Bj();
        } catch (sb) {
          if (null === l) throw Error(k(330));
          Za(l, sb);
          l = l.nextEffect;
        }
      while (null !== l);
      l = e;
      do
        try {
          for (g = a, h = b; null !== l; ) {
            var x = l.effectTag;
            x & 16 && Wb(l.stateNode, "");
            if (x & 128) {
              var A = l.alternate;
              if (null !== A) {
                var u = A.ref;
                null !== u &&
                  ("function" === typeof u ? u(null) : (u.current = null));
              }
            }
            switch (x & 1038) {
              case 2:
                Gh(l);
                l.effectTag &= -3;
                break;
              case 6:
                Gh(l);
                l.effectTag &= -3;
                Qe(l.alternate, l);
                break;
              case 1024:
                l.effectTag &= -1025;
                break;
              case 1028:
                l.effectTag &= -1025;
                Qe(l.alternate, l);
                break;
              case 4:
                Qe(l.alternate, l);
                break;
              case 8:
                (n = l), Dh(g, n, h), Eh(n);
            }
            l = l.nextEffect;
          }
        } catch (sb) {
          if (null === l) throw Error(k(330));
          Za(l, sb);
          l = l.nextEffect;
        }
      while (null !== l);
      u = $e;
      A = kg();
      x = u.focusedElem;
      h = u.selectionRange;
      if (
        A !== x &&
        x &&
        x.ownerDocument &&
        jg(x.ownerDocument.documentElement, x)
      ) {
        null !== h &&
          Xd(x) &&
          ((A = h.start),
          (u = h.end),
          void 0 === u && (u = A),
          "selectionStart" in x
            ? ((x.selectionStart = A),
              (x.selectionEnd = Math.min(u, x.value.length)))
            : ((u =
                ((A = x.ownerDocument || document) && A.defaultView) || window),
              u.getSelection &&
                ((u = u.getSelection()),
                (n = x.textContent.length),
                (g = Math.min(h.start, n)),
                (h = void 0 === h.end ? g : Math.min(h.end, n)),
                !u.extend && g > h && ((n = h), (h = g), (g = n)),
                (n = ig(x, g)),
                (q = ig(x, h)),
                n &&
                  q &&
                  (1 !== u.rangeCount ||
                    u.anchorNode !== n.node ||
                    u.anchorOffset !== n.offset ||
                    u.focusNode !== q.node ||
                    u.focusOffset !== q.offset) &&
                  ((A = A.createRange()),
                  A.setStart(n.node, n.offset),
                  u.removeAllRanges(),
                  g > h
                    ? (u.addRange(A), u.extend(q.node, q.offset))
                    : (A.setEnd(q.node, q.offset), u.addRange(A))))));
        A = [];
        for (u = x; (u = u.parentNode); )
          1 === u.nodeType &&
            A.push({ element: u, left: u.scrollLeft, top: u.scrollTop });
        "function" === typeof x.focus && x.focus();
        for (x = 0; x < A.length; x++)
          (u = A[x]),
            (u.element.scrollLeft = u.left),
            (u.element.scrollTop = u.top);
      }
      tc = !!Ze;
      $e = Ze = null;
      a.current = c;
      l = e;
      do
        try {
          for (x = a; null !== l; ) {
            var F = l.effectTag;
            F & 36 && oj(x, l.alternate, l);
            if (F & 128) {
              A = void 0;
              var E = l.ref;
              if (null !== E) {
                var G = l.stateNode;
                switch (l.tag) {
                  case 5:
                    A = G;
                    break;
                  default:
                    A = G;
                }
                "function" === typeof E ? E(A) : (E.current = A);
              }
            }
            l = l.nextEffect;
          }
        } catch (sb) {
          if (null === l) throw Error(k(330));
          Za(l, sb);
          l = l.nextEffect;
        }
      while (null !== l);
      l = null;
      Cj();
      p = f;
    } else a.current = c;
    if (ld) (ld = !1), (Zb = a), ($b = b);
    else
      for (l = e; null !== l; )
        (b = l.nextEffect), (l.nextEffect = null), (l = b);
    b = a.firstPendingTime;
    0 === b && (La = null);
    1073741823 === b ? (a === af ? ac++ : ((ac = 0), (af = a))) : (ac = 0);
    "function" === typeof bf && bf(c.stateNode, d);
    V(a);
    if (cd) throw ((cd = !1), (a = Se), (Se = null), a);
    if ((p & Ye) !== H) return null;
    ha();
    return null;
  }

  function Bj() {
    for (; null !== l; ) {
      var a = l.effectTag;
      0 !== (a & 256) && nj(l.alternate, l);
      0 === (a & 512) ||
        ld ||
        ((ld = !0),
        Ng(97, function () {
          xb();
          return null;
        }));
      l = l.nextEffect;
    }
  }

  function xb() {
    if (90 !== $b) {
      var a = 97 < $b ? 97 : $b;
      $b = 90;
      return Da(a, Dj);
    }
  }

  function Dj() {
    if (null === Zb) return !1;
    var a = Zb;
    Zb = null;
    if ((p & (ca | ma)) !== H) throw Error(k(331));
    var b = p;
    p |= ma;
    for (a = a.current.firstEffect; null !== a; ) {
      try {
        var c = a;
        if (0 !== (c.effectTag & 512))
          switch (c.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              Ah(5, c), Bh(5, c);
          }
      } catch (d) {
        if (null === a) throw Error(k(330));
        Za(a, d);
      }
      c = a.nextEffect;
      a.nextEffect = null;
      a = c;
    }
    p = b;
    ha();
    return !0;
  }

  function Vh(a, b, c) {
    b = Le(c, b);
    b = Ih(a, b, 1073741823);
    Fa(a, b);
    a = ed(a, 1073741823);
    null !== a && V(a);
  }

  function Za(a, b) {
    if (3 === a.tag) Vh(a, a, b);
    else
      for (var c = a.return; null !== c; ) {
        if (3 === c.tag) {
          Vh(c, a, b);
          break;
        } else if (1 === c.tag) {
          var d = c.stateNode;
          if (
            "function" === typeof c.type.getDerivedStateFromError ||
            ("function" === typeof d.componentDidCatch &&
              (null === La || !La.has(d)))
          ) {
            a = Le(b, a);
            a = Jh(c, a, 1073741823);
            Fa(c, a);
            c = ed(c, 1073741823);
            null !== c && V(c);
            break;
          }
        }
        c = c.return;
      }
  }

  function xj(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    U === a && P === c
      ? F === bd || (F === ad && 1073741823 === ta && Y() - Re < Ph)
        ? $a(a, P)
        : (jd = !0)
      : Kh(a, c) &&
        ((b = a.lastPingedTime),
        (0 !== b && b < c) || ((a.lastPingedTime = c), V(a)));
  }

  function qj(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && ((b = ka()), (b = Va(b, a, null)));
    a = ed(a, b);
    null !== a && V(a);
  }

  function Ej(a) {
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
    var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (b.isDisabled || !b.supportsFiber) return !0;
    try {
      var c = b.inject(a);
      bf = function (a, e) {
        try {
          b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
        } catch (f) {}
      };
      Ne = function (a) {
        try {
          b.onCommitFiberUnmount(c, a);
        } catch (e) {}
      };
    } catch (d) {}
    return !0;
  }

  function Fj(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null;
    this.mode = d;
    this.effectTag = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childExpirationTime = this.expirationTime = 0;
    this.alternate = null;
  }

  function Ge(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }

  function Gj(a) {
    if ("function" === typeof a) return Ge(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === zd) return 11;
      if (a === Ad) return 14;
    }
    return 2;
  }

  function Sa(a, b) {
    var c = a.alternate;
    null === c
      ? ((c = la(a.tag, b, a.key, a.mode)),
        (c.elementType = a.elementType),
        (c.type = a.type),
        (c.stateNode = a.stateNode),
        (c.alternate = a),
        (a.alternate = c))
      : ((c.pendingProps = b),
        (c.effectTag = 0),
        (c.nextEffect = null),
        (c.firstEffect = null),
        (c.lastEffect = null));
    c.childExpirationTime = a.childExpirationTime;
    c.expirationTime = a.expirationTime;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies =
      null === b
        ? null
        : {
            expirationTime: b.expirationTime,
            firstContext: b.firstContext,
            responders: b.responders,
          };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }

  function Oc(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) Ge(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else
      a: switch (a) {
        case Ma:
          return Ha(c.children, e, f, b);
        case Hj:
          g = 8;
          e |= 7;
          break;
        case Af:
          g = 8;
          e |= 1;
          break;
        case kc:
          return (
            (a = la(12, c, b, e | 8)),
            (a.elementType = kc),
            (a.type = kc),
            (a.expirationTime = f),
            a
          );
        case lc:
          return (
            (a = la(13, c, b, e)),
            (a.type = lc),
            (a.elementType = lc),
            (a.expirationTime = f),
            a
          );
        case yd:
          return (
            (a = la(19, c, b, e)),
            (a.elementType = yd),
            (a.expirationTime = f),
            a
          );
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Cf:
                g = 10;
                break a;
              case Bf:
                g = 9;
                break a;
              case zd:
                g = 11;
                break a;
              case Ad:
                g = 14;
                break a;
              case Ef:
                g = 16;
                d = null;
                break a;
              case Df:
                g = 22;
                break a;
            }
          throw Error(k(130, null == a ? a : typeof a, ""));
      }
    b = la(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.expirationTime = f;
    return b;
  }

  function Ha(a, b, c, d) {
    a = la(7, a, d, b);
    a.expirationTime = c;
    return a;
  }

  function qe(a, b, c) {
    a = la(6, a, null, b);
    a.expirationTime = c;
    return a;
  }

  function re(a, b, c) {
    b = la(4, null !== a.children ? a.children : [], a.key, b);
    b.expirationTime = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation,
    };
    return b;
  }

  function Ij(a, b, c) {
    this.tag = b;
    this.current = null;
    this.containerInfo = a;
    this.pingCache = this.pendingChildren = null;
    this.finishedExpirationTime = 0;
    this.finishedWork = null;
    this.timeoutHandle = -1;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 90;
    this.lastExpiredTime =
      this.lastPingedTime =
      this.nextKnownPendingLevel =
      this.lastSuspendedTime =
      this.firstSuspendedTime =
      this.firstPendingTime =
        0;
  }

  function Kh(a, b) {
    var c = a.firstSuspendedTime;
    a = a.lastSuspendedTime;
    return 0 !== c && c >= b && a <= b;
  }

  function Ya(a, b) {
    var c = a.firstSuspendedTime,
      d = a.lastSuspendedTime;
    c < b && (a.firstSuspendedTime = b);
    if (d > b || 0 === c) a.lastSuspendedTime = b;
    b <= a.lastPingedTime && (a.lastPingedTime = 0);
    b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  }

  function yh(a, b) {
    b > a.firstPendingTime && (a.firstPendingTime = b);
    var c = a.firstSuspendedTime;
    0 !== c &&
      (b >= c
        ? (a.firstSuspendedTime =
            a.lastSuspendedTime =
            a.nextKnownPendingLevel =
              0)
        : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1),
      b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
  }

  function Ue(a, b) {
    var c = a.lastExpiredTime;
    if (0 === c || c > b) a.lastExpiredTime = b;
  }

  function md(a, b, c, d) {
    var e = b.current,
      f = ka(),
      g = Vb.suspense;
    f = Va(f, e, g);
    a: if (c) {
      c = c._reactInternalFiber;
      b: {
        if (Na(c) !== c || 1 !== c.tag) throw Error(k(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (N(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (null !== h);
        throw Error(k(171));
      }
      if (1 === c.tag) {
        var m = c.type;
        if (N(m)) {
          c = Gg(c, m, h);
          break a;
        }
      }
      c = h;
    } else c = Ca;
    null === b.context ? (b.context = c) : (b.pendingContext = c);
    b = Ea(f, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    Fa(e, b);
    Ja(e, f);
    return f;
  }

  function cf(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }

  function Wh(a, b) {
    a = a.memoizedState;
    null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
  }

  function df(a, b) {
    Wh(a, b);
    (a = a.alternate) && Wh(a, b);
  }

  function ef(a, b, c) {
    c = null != c && !0 === c.hydrate;
    var d = new Ij(a, b, c),
      e = la(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
    d.current = e;
    e.stateNode = d;
    ne(e);
    a[Lb] = d.current;
    c && 0 !== b && xi(a, 9 === a.nodeType ? a : a.ownerDocument);
    this._internalRoot = d;
  }

  function bc(a) {
    return !(
      !a ||
      (1 !== a.nodeType &&
        9 !== a.nodeType &&
        11 !== a.nodeType &&
        (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue))
    );
  }

  function Jj(a, b) {
    b ||
      ((b = a ? (9 === a.nodeType ? a.documentElement : a.firstChild) : null),
      (b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot"))));
    if (!b) for (var c; (c = a.lastChild); ) a.removeChild(c);
    return new ef(a, 0, b ? { hydrate: !0 } : void 0);
  }

  function nd(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f._internalRoot;
      if ("function" === typeof e) {
        var h = e;
        e = function () {
          var a = cf(g);
          h.call(a);
        };
      }
      md(b, g, a, e);
    } else {
      f = c._reactRootContainer = Jj(c, d);
      g = f._internalRoot;
      if ("function" === typeof e) {
        var m = e;
        e = function () {
          var a = cf(g);
          m.call(a);
        };
      }
      Rh(function () {
        md(b, g, a, e);
      });
    }
    return cf(g);
  }

  function Kj(a, b, c) {
    var d =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: gb,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c,
    };
  }

  function Xh(a, b) {
    var c =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!bc(b)) throw Error(k(200));
    return Kj(a, b, null, c);
  }

  if (!ea) throw Error(k(227));
  var ki = function (a, b, c, d, e, f, g, h, m) {
      var n = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, n);
      } catch (C) {
        this.onError(C);
      }
    },
    yb = !1,
    gc = null,
    hc = !1,
    pd = null,
    li = {
      onError: function (a) {
        yb = !0;
        gc = a;
      },
    },
    td = null,
    rf = null,
    mf = null,
    ic = null,
    cb = {},
    jc = [],
    qd = {},
    db = {},
    rd = {},
    wa = !(
      "undefined" === typeof window ||
      "undefined" === typeof window.document ||
      "undefined" === typeof window.document.createElement
    ),
    M = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign,
    sd = null,
    eb = null,
    fb = null,
    ee = function (a, b) {
      return a(b);
    },
    eg = function (a, b, c, d, e) {
      return a(b, c, d, e);
    },
    vd = function () {},
    vf = ee,
    Oa = !1,
    wd = !1,
    Z = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,
    Lj = Z.unstable_cancelCallback,
    ff = Z.unstable_now,
    $f = Z.unstable_scheduleCallback,
    Mj = Z.unstable_shouldYield,
    Yh = Z.unstable_requestPaint,
    Pd = Z.unstable_runWithPriority,
    Nj = Z.unstable_getCurrentPriorityLevel,
    Oj = Z.unstable_ImmediatePriority,
    Zh = Z.unstable_UserBlockingPriority,
    ag = Z.unstable_NormalPriority,
    Pj = Z.unstable_LowPriority,
    Qj = Z.unstable_IdlePriority,
    oi =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    wf = Object.prototype.hasOwnProperty,
    yf = {},
    xf = {},
    E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (a) {
      E[a] = new L(a, 0, !1, a, null, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (a) {
    var b = a[0];
    E[b] = new L(b, 1, !1, a[1], null, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
    E[a] = new L(a, 2, !1, a.toLowerCase(), null, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (a) {
    E[a] = new L(a, 2, !1, a, null, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (a) {
      E[a] = new L(a, 3, !1, a.toLowerCase(), null, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (a) {
    E[a] = new L(a, 3, !0, a, null, !1);
  });
  ["capture", "download"].forEach(function (a) {
    E[a] = new L(a, 4, !1, a, null, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (a) {
    E[a] = new L(a, 6, !1, a, null, !1);
  });
  ["rowSpan", "start"].forEach(function (a) {
    E[a] = new L(a, 5, !1, a.toLowerCase(), null, !1);
  });
  var gf = /[\-:]([a-z])/g,
    hf = function (a) {
      return a[1].toUpperCase();
    };
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (a) {
      var b = a.replace(gf, hf);
      E[b] = new L(b, 1, !1, a, null, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (a) {
      var b = a.replace(gf, hf);
      E[b] = new L(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
    var b = a.replace(gf, hf);
    E[b] = new L(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (a) {
    E[a] = new L(a, 1, !1, a.toLowerCase(), null, !1);
  });
  E.xlinkHref = new L(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0
  );
  ["src", "href", "action", "formAction"].forEach(function (a) {
    E[a] = new L(a, 1, !1, a.toLowerCase(), null, !0);
  });
  var da = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  da.hasOwnProperty("ReactCurrentDispatcher") ||
    (da.ReactCurrentDispatcher = { current: null });
  da.hasOwnProperty("ReactCurrentBatchConfig") ||
    (da.ReactCurrentBatchConfig = { suspense: null });
  var si = /^(.*)[\\\/]/,
    Q = "function" === typeof Symbol && Symbol.for,
    Pc = Q ? Symbol.for("react.element") : 60103,
    gb = Q ? Symbol.for("react.portal") : 60106,
    Ma = Q ? Symbol.for("react.fragment") : 60107,
    Af = Q ? Symbol.for("react.strict_mode") : 60108,
    kc = Q ? Symbol.for("react.profiler") : 60114,
    Cf = Q ? Symbol.for("react.provider") : 60109,
    Bf = Q ? Symbol.for("react.context") : 60110,
    Hj = Q ? Symbol.for("react.concurrent_mode") : 60111,
    zd = Q ? Symbol.for("react.forward_ref") : 60112,
    lc = Q ? Symbol.for("react.suspense") : 60113,
    yd = Q ? Symbol.for("react.suspense_list") : 60120,
    Ad = Q ? Symbol.for("react.memo") : 60115,
    Ef = Q ? Symbol.for("react.lazy") : 60116,
    Df = Q ? Symbol.for("react.block") : 60121,
    zf = "function" === typeof Symbol && Symbol.iterator,
    od,
    xh = (function (a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function (b, c, d, e) {
            MSApp.execUnsafeLocalFunction(function () {
              return a(b, c, d, e);
            });
          }
        : a;
    })(function (a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
        a.innerHTML = b;
      else {
        od = od || document.createElement("div");
        od.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = od.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    }),
    Wb = function (a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    },
    ib = {
      animationend: nc("Animation", "AnimationEnd"),
      animationiteration: nc("Animation", "AnimationIteration"),
      animationstart: nc("Animation", "AnimationStart"),
      transitionend: nc("Transition", "TransitionEnd"),
    },
    Id = {},
    Of = {};
  wa &&
    ((Of = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ib.animationend.animation,
      delete ib.animationiteration.animation,
      delete ib.animationstart.animation),
    "TransitionEvent" in window || delete ib.transitionend.transition);
  var $h = oc("animationend"),
    ai = oc("animationiteration"),
    bi = oc("animationstart"),
    ci = oc("transitionend"),
    Db =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Pf = new ("function" === typeof WeakMap ? WeakMap : Map)(),
    Ab = null,
    wi = function (a) {
      if (a) {
        var b = a._dispatchListeners,
          c = a._dispatchInstances;
        if (Array.isArray(b))
          for (var d = 0; d < b.length && !a.isPropagationStopped(); d++)
            lf(a, b[d], c[d]);
        else b && lf(a, b, c);
        a._dispatchListeners = null;
        a._dispatchInstances = null;
        a.isPersistent() || a.constructor.release(a);
      }
    },
    qc = [],
    Rd = !1,
    fa = [],
    xa = null,
    ya = null,
    za = null,
    Eb = new Map(),
    Fb = new Map(),
    Jb = [],
    Nd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
        " "
      ),
    yi =
      "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
        " "
      ),
    dg = {},
    cg = new Map(),
    Td = new Map(),
    Rj = [
      "abort",
      "abort",
      $h,
      "animationEnd",
      ai,
      "animationIteration",
      bi,
      "animationStart",
      "canplay",
      "canPlay",
      "canplaythrough",
      "canPlayThrough",
      "durationchange",
      "durationChange",
      "emptied",
      "emptied",
      "encrypted",
      "encrypted",
      "ended",
      "ended",
      "error",
      "error",
      "gotpointercapture",
      "gotPointerCapture",
      "load",
      "load",
      "loadeddata",
      "loadedData",
      "loadedmetadata",
      "loadedMetadata",
      "loadstart",
      "loadStart",
      "lostpointercapture",
      "lostPointerCapture",
      "playing",
      "playing",
      "progress",
      "progress",
      "seeking",
      "seeking",
      "stalled",
      "stalled",
      "suspend",
      "suspend",
      "timeupdate",
      "timeUpdate",
      ci,
      "transitionEnd",
      "waiting",
      "waiting",
    ];
  Sd(
    "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
      " "
    ),
    0
  );
  Sd(
    "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
      " "
    ),
    1
  );
  Sd(Rj, 2);
  (function (a, b) {
    for (var c = 0; c < a.length; c++) Td.set(a[c], b);
  })(
    "change selectionchange textInput compositionstart compositionend compositionupdate".split(
      " "
    ),
    0
  );
  var Hi = Zh,
    Gi = Pd,
    tc = !0,
    Kb = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Sj = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kb).forEach(function (a) {
    Sj.forEach(function (b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      Kb[b] = Kb[a];
    });
  });
  var Ii = M(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    ),
    ng = "$",
    og = "/$",
    $d = "$?",
    Zd = "$!",
    Ze = null,
    $e = null,
    We = "function" === typeof setTimeout ? setTimeout : void 0,
    vj = "function" === typeof clearTimeout ? clearTimeout : void 0,
    jf = Math.random().toString(36).slice(2),
    Aa = "__reactInternalInstance$" + jf,
    vc = "__reactEventHandlers$" + jf,
    Lb = "__reactContainere$" + jf,
    Ba = null,
    ce = null,
    wc = null;
  M(R.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var a = this.nativeEvent;
      a &&
        (a.preventDefault
          ? a.preventDefault()
          : "unknown" !== typeof a.returnValue && (a.returnValue = !1),
        (this.isDefaultPrevented = xc));
    },
    stopPropagation: function () {
      var a = this.nativeEvent;
      a &&
        (a.stopPropagation
          ? a.stopPropagation()
          : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0),
        (this.isPropagationStopped = xc));
    },
    persist: function () {
      this.isPersistent = xc;
    },
    isPersistent: yc,
    destructor: function () {
      var a = this.constructor.Interface,
        b;
      for (b in a) this[b] = null;
      this.nativeEvent = this._targetInst = this.dispatchConfig = null;
      this.isPropagationStopped = this.isDefaultPrevented = yc;
      this._dispatchInstances = this._dispatchListeners = null;
    },
  });
  R.Interface = {
    type: null,
    target: null,
    currentTarget: function () {
      return null;
    },
    eventPhase: null,
    bubbles: null,
    cancelable: null,
    timeStamp: function (a) {
      return a.timeStamp || Date.now();
    },
    defaultPrevented: null,
    isTrusted: null,
  };
  R.extend = function (a) {
    function b() {
      return c.apply(this, arguments);
    }

    var c = this,
      d = function () {};
    d.prototype = c.prototype;
    d = new d();
    M(d, b.prototype);
    b.prototype = d;
    b.prototype.constructor = b;
    b.Interface = M({}, c.Interface, a);
    b.extend = c.extend;
    sg(b);
    return b;
  };
  sg(R);
  var Tj = R.extend({ data: null }),
    Uj = R.extend({ data: null }),
    Ni = [9, 13, 27, 32],
    de = wa && "CompositionEvent" in window,
    cc = null;
  wa && "documentMode" in document && (cc = document.documentMode);
  var Vj = wa && "TextEvent" in window && !cc,
    xg = wa && (!de || (cc && 8 < cc && 11 >= cc)),
    wg = String.fromCharCode(32),
    ua = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: "onBeforeInput",
          captured: "onBeforeInputCapture",
        },
        dependencies: ["compositionend", "keypress", "textInput", "paste"],
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: "onCompositionEnd",
          captured: "onCompositionEndCapture",
        },
        dependencies:
          "blur compositionend keydown keypress keyup mousedown".split(" "),
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: "onCompositionStart",
          captured: "onCompositionStartCapture",
        },
        dependencies:
          "blur compositionstart keydown keypress keyup mousedown".split(" "),
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: "onCompositionUpdate",
          captured: "onCompositionUpdateCapture",
        },
        dependencies:
          "blur compositionupdate keydown keypress keyup mousedown".split(" "),
      },
    },
    vg = !1,
    mb = !1,
    Wj = {
      eventTypes: ua,
      extractEvents: function (a, b, c, d, e) {
        var f;
        if (de)
          b: {
            switch (a) {
              case "compositionstart":
                var g = ua.compositionStart;
                break b;
              case "compositionend":
                g = ua.compositionEnd;
                break b;
              case "compositionupdate":
                g = ua.compositionUpdate;
                break b;
            }
            g = void 0;
          }
        else
          mb
            ? tg(a, c) && (g = ua.compositionEnd)
            : "keydown" === a && 229 === c.keyCode && (g = ua.compositionStart);
        g
          ? (xg &&
              "ko" !== c.locale &&
              (mb || g !== ua.compositionStart
                ? g === ua.compositionEnd && mb && (f = rg())
                : ((Ba = d),
                  (ce = "value" in Ba ? Ba.value : Ba.textContent),
                  (mb = !0))),
            (e = Tj.getPooled(g, b, c, d)),
            f ? (e.data = f) : ((f = ug(c)), null !== f && (e.data = f)),
            lb(e),
            (f = e))
          : (f = null);
        (a = Vj ? Oi(a, c) : Pi(a, c))
          ? ((b = Uj.getPooled(ua.beforeInput, b, c, d)), (b.data = a), lb(b))
          : (b = null);
        return null === f ? b : null === b ? f : [f, b];
      },
    },
    Qi = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    },
    Ag = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture",
        },
        dependencies:
          "blur change click focus input keydown keyup selectionchange".split(
            " "
          ),
      },
    },
    Mb = null,
    Nb = null,
    kf = !1;
  wa &&
    (kf = Tf("input") && (!document.documentMode || 9 < document.documentMode));
  var Xj = {
      eventTypes: Ag,
      _isInputEventSupported: kf,
      extractEvents: function (a, b, c, d, e) {
        e = b ? Pa(b) : window;
        var f = e.nodeName && e.nodeName.toLowerCase();
        if ("select" === f || ("input" === f && "file" === e.type)) var g = Si;
        else if (yg(e))
          if (kf) g = Wi;
          else {
            g = Ui;
            var h = Ti;
          }
        else
          (f = e.nodeName) &&
            "input" === f.toLowerCase() &&
            ("checkbox" === e.type || "radio" === e.type) &&
            (g = Vi);
        if (g && (g = g(a, b))) return zg(g, c, d);
        h && h(a, e, b);
        "blur" === a &&
          (a = e._wrapperState) &&
          a.controlled &&
          "number" === e.type &&
          Ed(e, "number", e.value);
      },
    },
    dc = R.extend({ view: null, detail: null }),
    Yi = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    },
    di = 0,
    ei = 0,
    fi = !1,
    gi = !1,
    ec = dc.extend({
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: fe,
      button: null,
      buttons: null,
      relatedTarget: function (a) {
        return (
          a.relatedTarget ||
          (a.fromElement === a.srcElement ? a.toElement : a.fromElement)
        );
      },
      movementX: function (a) {
        if ("movementX" in a) return a.movementX;
        var b = di;
        di = a.screenX;
        return fi
          ? "mousemove" === a.type
            ? a.screenX - b
            : 0
          : ((fi = !0), 0);
      },
      movementY: function (a) {
        if ("movementY" in a) return a.movementY;
        var b = ei;
        ei = a.screenY;
        return gi
          ? "mousemove" === a.type
            ? a.screenY - b
            : 0
          : ((gi = !0), 0);
      },
    }),
    hi = ec.extend({
      pointerId: null,
      width: null,
      height: null,
      pressure: null,
      tangentialPressure: null,
      tiltX: null,
      tiltY: null,
      twist: null,
      pointerType: null,
      isPrimary: null,
    }),
    fc = {
      mouseEnter: {
        registrationName: "onMouseEnter",
        dependencies: ["mouseout", "mouseover"],
      },
      mouseLeave: {
        registrationName: "onMouseLeave",
        dependencies: ["mouseout", "mouseover"],
      },
      pointerEnter: {
        registrationName: "onPointerEnter",
        dependencies: ["pointerout", "pointerover"],
      },
      pointerLeave: {
        registrationName: "onPointerLeave",
        dependencies: ["pointerout", "pointerover"],
      },
    },
    Yj = {
      eventTypes: fc,
      extractEvents: function (a, b, c, d, e) {
        var f = "mouseover" === a || "pointerover" === a,
          g = "mouseout" === a || "pointerout" === a;
        if (
          (f && 0 === (e & 32) && (c.relatedTarget || c.fromElement)) ||
          (!g && !f)
        )
          return null;
        f =
          d.window === d
            ? d
            : (f = d.ownerDocument)
            ? f.defaultView || f.parentWindow
            : window;
        if (g) {
          if (
            ((g = b),
            (b = (b = c.relatedTarget || c.toElement) ? Bb(b) : null),
            null !== b)
          ) {
            var h = Na(b);
            if (b !== h || (5 !== b.tag && 6 !== b.tag)) b = null;
          }
        } else g = null;
        if (g === b) return null;
        if ("mouseout" === a || "mouseover" === a) {
          var m = ec;
          var n = fc.mouseLeave;
          var l = fc.mouseEnter;
          var k = "mouse";
        } else if ("pointerout" === a || "pointerover" === a)
          (m = hi),
            (n = fc.pointerLeave),
            (l = fc.pointerEnter),
            (k = "pointer");
        a = null == g ? f : Pa(g);
        f = null == b ? f : Pa(b);
        n = m.getPooled(n, g, c, d);
        n.type = k + "leave";
        n.target = a;
        n.relatedTarget = f;
        c = m.getPooled(l, b, c, d);
        c.type = k + "enter";
        c.target = f;
        c.relatedTarget = a;
        d = g;
        k = b;
        if (d && k)
          a: {
            m = d;
            l = k;
            g = 0;
            for (a = m; a; a = pa(a)) g++;
            a = 0;
            for (b = l; b; b = pa(b)) a++;
            for (; 0 < g - a; ) (m = pa(m)), g--;
            for (; 0 < a - g; ) (l = pa(l)), a--;
            for (; g--; ) {
              if (m === l || m === l.alternate) break a;
              m = pa(m);
              l = pa(l);
            }
            m = null;
          }
        else m = null;
        l = m;
        for (m = []; d && d !== l; ) {
          g = d.alternate;
          if (null !== g && g === l) break;
          m.push(d);
          d = pa(d);
        }
        for (d = []; k && k !== l; ) {
          g = k.alternate;
          if (null !== g && g === l) break;
          d.push(k);
          k = pa(k);
        }
        for (k = 0; k < m.length; k++) be(m[k], "bubbled", n);
        for (k = d.length; 0 < k--; ) be(d[k], "captured", c);
        return 0 === (e & 64) ? [n] : [n, c];
      },
    },
    Qa = "function" === typeof Object.is ? Object.is : Zi,
    $i = Object.prototype.hasOwnProperty,
    Zj = wa && "documentMode" in document && 11 >= document.documentMode,
    Eg = {
      select: {
        phasedRegistrationNames: {
          bubbled: "onSelect",
          captured: "onSelectCapture",
        },
        dependencies:
          "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
            " "
          ),
      },
    },
    nb = null,
    he = null,
    Pb = null,
    ge = !1,
    ak = {
      eventTypes: Eg,
      extractEvents: function (a, b, c, d, e, f) {
        e =
          f ||
          (d.window === d
            ? d.document
            : 9 === d.nodeType
            ? d
            : d.ownerDocument);
        if (!(f = !e)) {
          a: {
            e = Jd(e);
            f = rd.onSelect;
            for (var g = 0; g < f.length; g++)
              if (!e.has(f[g])) {
                e = !1;
                break a;
              }
            e = !0;
          }
          f = !e;
        }
        if (f) return null;
        e = b ? Pa(b) : window;
        switch (a) {
          case "focus":
            if (yg(e) || "true" === e.contentEditable)
              (nb = e), (he = b), (Pb = null);
            break;
          case "blur":
            Pb = he = nb = null;
            break;
          case "mousedown":
            ge = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            return (ge = !1), Dg(c, d);
          case "selectionchange":
            if (Zj) break;
          case "keydown":
          case "keyup":
            return Dg(c, d);
        }
        return null;
      },
    },
    bk = R.extend({
      animationName: null,
      elapsedTime: null,
      pseudoElement: null,
    }),
    ck = R.extend({
      clipboardData: function (a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      },
    }),
    dk = dc.extend({ relatedTarget: null }),
    ek = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    fk = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gk = dc.extend({
      key: function (a) {
        if (a.key) {
          var b = ek[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type
          ? ((a = Ac(a)), 13 === a ? "Enter" : String.fromCharCode(a))
          : "keydown" === a.type || "keyup" === a.type
          ? fk[a.keyCode] || "Unidentified"
          : "";
      },
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: fe,
      charCode: function (a) {
        return "keypress" === a.type ? Ac(a) : 0;
      },
      keyCode: function (a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      },
      which: function (a) {
        return "keypress" === a.type
          ? Ac(a)
          : "keydown" === a.type || "keyup" === a.type
          ? a.keyCode
          : 0;
      },
    }),
    hk = ec.extend({ dataTransfer: null }),
    ik = dc.extend({
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: fe,
    }),
    jk = R.extend({
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null,
    }),
    kk = ec.extend({
      deltaX: function (a) {
        return "deltaX" in a
          ? a.deltaX
          : "wheelDeltaX" in a
          ? -a.wheelDeltaX
          : 0;
      },
      deltaY: function (a) {
        return "deltaY" in a
          ? a.deltaY
          : "wheelDeltaY" in a
          ? -a.wheelDeltaY
          : "wheelDelta" in a
          ? -a.wheelDelta
          : 0;
      },
      deltaZ: null,
      deltaMode: null,
    }),
    lk = {
      eventTypes: dg,
      extractEvents: function (a, b, c, d, e) {
        e = cg.get(a);
        if (!e) return null;
        switch (a) {
          case "keypress":
            if (0 === Ac(c)) return null;
          case "keydown":
          case "keyup":
            a = gk;
            break;
          case "blur":
          case "focus":
            a = dk;
            break;
          case "click":
            if (2 === c.button) return null;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            a = ec;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            a = hk;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            a = ik;
            break;
          case $h:
          case ai:
          case bi:
            a = bk;
            break;
          case ci:
            a = jk;
            break;
          case "scroll":
            a = dc;
            break;
          case "wheel":
            a = kk;
            break;
          case "copy":
          case "cut":
          case "paste":
            a = ck;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            a = hi;
            break;
          default:
            a = R;
        }
        b = a.getPooled(e, b, c, d);
        lb(b);
        return b;
      },
    };
  (function (a) {
    if (ic) throw Error(k(101));
    ic = Array.prototype.slice.call(a);
    nf();
  })(
    "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
      " "
    )
  );
  (function (a, b, c) {
    td = a;
    rf = b;
    mf = c;
  })(ae, Hb, Pa);
  pf({
    SimpleEventPlugin: lk,
    EnterLeaveEventPlugin: Yj,
    ChangeEventPlugin: Xj,
    SelectEventPlugin: ak,
    BeforeInputEventPlugin: Wj,
  });
  var ie = [],
    ob = -1,
    Ca = {},
    B = { current: Ca },
    G = { current: !1 },
    Ra = Ca,
    bj = Pd,
    je = $f,
    Rg = Lj,
    aj = Nj,
    Dc = Oj,
    Ig = Zh,
    Jg = ag,
    Kg = Pj,
    Lg = Qj,
    Qg = {},
    yj = Mj,
    Cj = void 0 !== Yh ? Yh : function () {},
    qa = null,
    Ec = null,
    ke = !1,
    ii = ff(),
    Y =
      1e4 > ii
        ? ff
        : function () {
            return ff() - ii;
          },
    Ic = { current: null },
    Hc = null,
    qb = null,
    Gc = null,
    Tg = 0,
    Jc = 2,
    Ga = !1,
    Vb = da.ReactCurrentBatchConfig,
    $g = new ea.Component().refs,
    Mc = {
      isMounted: function (a) {
        return (a = a._reactInternalFiber) ? Na(a) === a : !1;
      },
      enqueueSetState: function (a, b, c) {
        a = a._reactInternalFiber;
        var d = ka(),
          e = Vb.suspense;
        d = Va(d, a, e);
        e = Ea(d, e);
        e.payload = b;
        void 0 !== c && null !== c && (e.callback = c);
        Fa(a, e);
        Ja(a, d);
      },
      enqueueReplaceState: function (a, b, c) {
        a = a._reactInternalFiber;
        var d = ka(),
          e = Vb.suspense;
        d = Va(d, a, e);
        e = Ea(d, e);
        e.tag = 1;
        e.payload = b;
        void 0 !== c && null !== c && (e.callback = c);
        Fa(a, e);
        Ja(a, d);
      },
      enqueueForceUpdate: function (a, b) {
        a = a._reactInternalFiber;
        var c = ka(),
          d = Vb.suspense;
        c = Va(c, a, d);
        d = Ea(c, d);
        d.tag = Jc;
        void 0 !== b && null !== b && (d.callback = b);
        Fa(a, d);
        Ja(a, c);
      },
    },
    Qc = Array.isArray,
    wb = ah(!0),
    Fe = ah(!1),
    Sb = {},
    ja = { current: Sb },
    Ub = { current: Sb },
    Tb = { current: Sb },
    D = { current: 0 },
    Sc = da.ReactCurrentDispatcher,
    X = da.ReactCurrentBatchConfig,
    Ia = 0,
    z = null,
    K = null,
    J = null,
    Uc = !1,
    Tc = {
      readContext: W,
      useCallback: S,
      useContext: S,
      useEffect: S,
      useImperativeHandle: S,
      useLayoutEffect: S,
      useMemo: S,
      useReducer: S,
      useRef: S,
      useState: S,
      useDebugValue: S,
      useResponder: S,
      useDeferredValue: S,
      useTransition: S,
    },
    dj = {
      readContext: W,
      useCallback: ih,
      useContext: W,
      useEffect: eh,
      useImperativeHandle: function (a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ze(4, 2, gh.bind(null, b, a), c);
      },
      useLayoutEffect: function (a, b) {
        return ze(4, 2, a, b);
      },
      useMemo: function (a, b) {
        var c = ub();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: function (a, b, c) {
        var d = ub();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = d.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: a,
          lastRenderedState: b,
        };
        a = a.dispatch = ch.bind(null, z, a);
        return [d.memoizedState, a];
      },
      useRef: function (a) {
        var b = ub();
        a = { current: a };
        return (b.memoizedState = a);
      },
      useState: xe,
      useDebugValue: Be,
      useResponder: ue,
      useDeferredValue: function (a, b) {
        var c = xe(a),
          d = c[0],
          e = c[1];
        eh(
          function () {
            var c = X.suspense;
            X.suspense = void 0 === b ? null : b;
            try {
              e(a);
            } finally {
              X.suspense = c;
            }
          },
          [a, b]
        );
        return d;
      },
      useTransition: function (a) {
        var b = xe(!1),
          c = b[0];
        b = b[1];
        return [ih(Ce.bind(null, b, a), [b, a]), c];
      },
    },
    ej = {
      readContext: W,
      useCallback: Yc,
      useContext: W,
      useEffect: Xc,
      useImperativeHandle: hh,
      useLayoutEffect: fh,
      useMemo: jh,
      useReducer: Vc,
      useRef: dh,
      useState: function (a) {
        return Vc(Ua);
      },
      useDebugValue: Be,
      useResponder: ue,
      useDeferredValue: function (a, b) {
        var c = Vc(Ua),
          d = c[0],
          e = c[1];
        Xc(
          function () {
            var c = X.suspense;
            X.suspense = void 0 === b ? null : b;
            try {
              e(a);
            } finally {
              X.suspense = c;
            }
          },
          [a, b]
        );
        return d;
      },
      useTransition: function (a) {
        var b = Vc(Ua),
          c = b[0];
        b = b[1];
        return [Yc(Ce.bind(null, b, a), [b, a]), c];
      },
    },
    fj = {
      readContext: W,
      useCallback: Yc,
      useContext: W,
      useEffect: Xc,
      useImperativeHandle: hh,
      useLayoutEffect: fh,
      useMemo: jh,
      useReducer: Wc,
      useRef: dh,
      useState: function (a) {
        return Wc(Ua);
      },
      useDebugValue: Be,
      useResponder: ue,
      useDeferredValue: function (a, b) {
        var c = Wc(Ua),
          d = c[0],
          e = c[1];
        Xc(
          function () {
            var c = X.suspense;
            X.suspense = void 0 === b ? null : b;
            try {
              e(a);
            } finally {
              X.suspense = c;
            }
          },
          [a, b]
        );
        return d;
      },
      useTransition: function (a) {
        var b = Wc(Ua),
          c = b[0];
        b = b[1];
        return [Yc(Ce.bind(null, b, a), [b, a]), c];
      },
    },
    ra = null,
    Ka = null,
    Wa = !1,
    gj = da.ReactCurrentOwner,
    ia = !1,
    Je = { dehydrated: null, retryTime: 0 };
  var jj = function (a, b, c, d) {
    for (c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  var wh = function (a) {};
  var ij = function (a, b, c, d, e) {
    var f = a.memoizedProps;
    if (f !== d) {
      var g = b.stateNode;
      Ta(ja.current);
      a = null;
      switch (c) {
        case "input":
          f = Cd(g, f);
          d = Cd(g, d);
          a = [];
          break;
        case "option":
          f = Fd(g, f);
          d = Fd(g, d);
          a = [];
          break;
        case "select":
          f = M({}, f, { value: void 0 });
          d = M({}, d, { value: void 0 });
          a = [];
          break;
        case "textarea":
          f = Gd(g, f);
          d = Gd(g, d);
          a = [];
          break;
        default:
          "function" !== typeof f.onClick &&
            "function" === typeof d.onClick &&
            (g.onclick = uc);
      }
      Ud(c, d);
      var h, m;
      c = null;
      for (h in f)
        if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h])
          if ("style" === h)
            for (m in ((g = f[h]), g))
              g.hasOwnProperty(m) && (c || (c = {}), (c[m] = ""));
          else
            "dangerouslySetInnerHTML" !== h &&
              "children" !== h &&
              "suppressContentEditableWarning" !== h &&
              "suppressHydrationWarning" !== h &&
              "autoFocus" !== h &&
              (db.hasOwnProperty(h)
                ? a || (a = [])
                : (a = a || []).push(h, null));
      for (h in d) {
        var k = d[h];
        g = null != f ? f[h] : void 0;
        if (d.hasOwnProperty(h) && k !== g && (null != k || null != g))
          if ("style" === h)
            if (g) {
              for (m in g)
                !g.hasOwnProperty(m) ||
                  (k && k.hasOwnProperty(m)) ||
                  (c || (c = {}), (c[m] = ""));
              for (m in k)
                k.hasOwnProperty(m) &&
                  g[m] !== k[m] &&
                  (c || (c = {}), (c[m] = k[m]));
            } else c || (a || (a = []), a.push(h, c)), (c = k);
          else
            "dangerouslySetInnerHTML" === h
              ? ((k = k ? k.__html : void 0),
                (g = g ? g.__html : void 0),
                null != k && g !== k && (a = a || []).push(h, k))
              : "children" === h
              ? g === k ||
                ("string" !== typeof k && "number" !== typeof k) ||
                (a = a || []).push(h, "" + k)
              : "suppressContentEditableWarning" !== h &&
                "suppressHydrationWarning" !== h &&
                (db.hasOwnProperty(h)
                  ? (null != k && oa(e, h), a || g === k || (a = []))
                  : (a = a || []).push(h, k));
      }
      c && (a = a || []).push("style", c);
      e = a;
      if ((b.updateQueue = e)) b.effectTag |= 4;
    }
  };
  var kj = function (a, b, c, d) {
    c !== d && (b.effectTag |= 4);
  };
  var pj = "function" === typeof WeakSet ? WeakSet : Set,
    wj = "function" === typeof WeakMap ? WeakMap : Map,
    sj = Math.ceil,
    gd = da.ReactCurrentDispatcher,
    Uh = da.ReactCurrentOwner,
    H = 0,
    Ye = 8,
    ca = 16,
    ma = 32,
    Xa = 0,
    hd = 1,
    Oh = 2,
    ad = 3,
    bd = 4,
    Xe = 5,
    p = H,
    U = null,
    t = null,
    P = 0,
    F = Xa,
    id = null,
    ta = 1073741823,
    Yb = 1073741823,
    kd = null,
    Xb = 0,
    jd = !1,
    Re = 0,
    Ph = 500,
    l = null,
    cd = !1,
    Se = null,
    La = null,
    ld = !1,
    Zb = null,
    $b = 90,
    bb = null,
    ac = 0,
    af = null,
    dd = 0,
    Ja = function (a, b) {
      if (50 < ac) throw ((ac = 0), (af = null), Error(k(185)));
      a = ed(a, b);
      if (null !== a) {
        var c = Cc();
        1073741823 === b
          ? (p & Ye) !== H && (p & (ca | ma)) === H
            ? Te(a)
            : (V(a), p === H && ha())
          : V(a);
        (p & 4) === H ||
          (98 !== c && 99 !== c) ||
          (null === bb
            ? (bb = new Map([[a, b]]))
            : ((c = bb.get(a)), (void 0 === c || c > b) && bb.set(a, b)));
      }
    };
  var zj = function (a, b, c) {
    var d = b.expirationTime;
    if (null !== a) {
      var e = b.pendingProps;
      if (a.memoizedProps !== e || G.current) ia = !0;
      else {
        if (d < c) {
          ia = !1;
          switch (b.tag) {
            case 3:
              sh(b);
              Ee();
              break;
            case 5:
              bh(b);
              if (b.mode & 4 && 1 !== c && e.hidden)
                return (b.expirationTime = b.childExpirationTime = 1), null;
              break;
            case 1:
              N(b.type) && Bc(b);
              break;
            case 4:
              se(b, b.stateNode.containerInfo);
              break;
            case 10:
              d = b.memoizedProps.value;
              e = b.type._context;
              y(Ic, e._currentValue);
              e._currentValue = d;
              break;
            case 13:
              if (null !== b.memoizedState) {
                d = b.child.childExpirationTime;
                if (0 !== d && d >= c) return th(a, b, c);
                y(D, D.current & 1);
                b = sa(a, b, c);
                return null !== b ? b.sibling : null;
              }
              y(D, D.current & 1);
              break;
            case 19:
              d = b.childExpirationTime >= c;
              if (0 !== (a.effectTag & 64)) {
                if (d) return vh(a, b, c);
                b.effectTag |= 64;
              }
              e = b.memoizedState;
              null !== e && ((e.rendering = null), (e.tail = null));
              y(D, D.current);
              if (!d) return null;
          }
          return sa(a, b, c);
        }
        ia = !1;
      }
    } else ia = !1;
    b.expirationTime = 0;
    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a &&
          ((a.alternate = null), (b.alternate = null), (b.effectTag |= 2));
        a = b.pendingProps;
        e = pb(b, B.current);
        rb(b, c);
        e = we(null, b, d, a, e, c);
        b.effectTag |= 1;
        if (
          "object" === typeof e &&
          null !== e &&
          "function" === typeof e.render &&
          void 0 === e.$$typeof
        ) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;
          if (N(d)) {
            var f = !0;
            Bc(b);
          } else f = !1;
          b.memoizedState =
            null !== e.state && void 0 !== e.state ? e.state : null;
          ne(b);
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && Lc(b, d, g, a);
          e.updater = Mc;
          b.stateNode = e;
          e._reactInternalFiber = b;
          pe(b, d, a, c);
          b = Ie(null, b, d, !0, f, c);
        } else (b.tag = 0), T(null, b, e, c), (b = b.child);
        return b;
      case 16:
        a: {
          e = b.elementType;
          null !== a &&
            ((a.alternate = null), (b.alternate = null), (b.effectTag |= 2));
          a = b.pendingProps;
          ri(e);
          if (1 !== e._status) throw e._result;
          e = e._result;
          b.type = e;
          f = b.tag = Gj(e);
          a = aa(e, a);
          switch (f) {
            case 0:
              b = He(null, b, e, a, c);
              break a;
            case 1:
              b = rh(null, b, e, a, c);
              break a;
            case 11:
              b = nh(null, b, e, a, c);
              break a;
            case 14:
              b = oh(null, b, e, aa(e.type, a), d, c);
              break a;
          }
          throw Error(k(306, e, ""));
        }
        return b;
      case 0:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : aa(d, e)),
          He(a, b, d, e, c)
        );
      case 1:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : aa(d, e)),
          rh(a, b, d, e, c)
        );
      case 3:
        sh(b);
        d = b.updateQueue;
        if (null === a || null === d) throw Error(k(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        oe(a, b);
        Qb(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e) Ee(), (b = sa(a, b, c));
        else {
          if ((e = b.stateNode.hydrate))
            (Ka = kb(b.stateNode.containerInfo.firstChild)),
              (ra = b),
              (e = Wa = !0);
          if (e)
            for (c = Fe(b, null, d, c), b.child = c; c; )
              (c.effectTag = (c.effectTag & -3) | 1024), (c = c.sibling);
          else T(a, b, d, c), Ee();
          b = b.child;
        }
        return b;
      case 5:
        return (
          bh(b),
          null === a && De(b),
          (d = b.type),
          (e = b.pendingProps),
          (f = null !== a ? a.memoizedProps : null),
          (g = e.children),
          Yd(d, e) ? (g = null) : null !== f && Yd(d, f) && (b.effectTag |= 16),
          qh(a, b),
          b.mode & 4 && 1 !== c && e.hidden
            ? ((b.expirationTime = b.childExpirationTime = 1), (b = null))
            : (T(a, b, g, c), (b = b.child)),
          b
        );
      case 6:
        return null === a && De(b), null;
      case 13:
        return th(a, b, c);
      case 4:
        return (
          se(b, b.stateNode.containerInfo),
          (d = b.pendingProps),
          null === a ? (b.child = wb(b, null, d, c)) : T(a, b, d, c),
          b.child
        );
      case 11:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : aa(d, e)),
          nh(a, b, d, e, c)
        );
      case 7:
        return T(a, b, b.pendingProps, c), b.child;
      case 8:
        return T(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return T(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          var h = b.type._context;
          y(Ic, h._currentValue);
          h._currentValue = f;
          if (null !== g)
            if (
              ((h = g.value),
              (f = Qa(h, f)
                ? 0
                : ("function" === typeof d._calculateChangedBits
                    ? d._calculateChangedBits(h, f)
                    : 1073741823) | 0),
              0 === f)
            ) {
              if (g.children === e.children && !G.current) {
                b = sa(a, b, c);
                break a;
              }
            } else
              for (h = b.child, null !== h && (h.return = b); null !== h; ) {
                var m = h.dependencies;
                if (null !== m) {
                  g = h.child;
                  for (var l = m.firstContext; null !== l; ) {
                    if (l.context === d && 0 !== (l.observedBits & f)) {
                      1 === h.tag &&
                        ((l = Ea(c, null)), (l.tag = Jc), Fa(h, l));
                      h.expirationTime < c && (h.expirationTime = c);
                      l = h.alternate;
                      null !== l &&
                        l.expirationTime < c &&
                        (l.expirationTime = c);
                      Sg(h.return, c);
                      m.expirationTime < c && (m.expirationTime = c);
                      break;
                    }
                    l = l.next;
                  }
                } else
                  g =
                    10 === h.tag
                      ? h.type === b.type
                        ? null
                        : h.child
                      : h.child;
                if (null !== g) g.return = h;
                else
                  for (g = h; null !== g; ) {
                    if (g === b) {
                      g = null;
                      break;
                    }
                    h = g.sibling;
                    if (null !== h) {
                      h.return = g.return;
                      g = h;
                      break;
                    }
                    g = g.return;
                  }
                h = g;
              }
          T(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return (
          (e = b.type),
          (f = b.pendingProps),
          (d = f.children),
          rb(b, c),
          (e = W(e, f.unstable_observedBits)),
          (d = d(e)),
          (b.effectTag |= 1),
          T(a, b, d, c),
          b.child
        );
      case 14:
        return (
          (e = b.type),
          (f = aa(e, b.pendingProps)),
          (f = aa(e.type, f)),
          oh(a, b, e, f, d, c)
        );
      case 15:
        return ph(a, b, b.type, b.pendingProps, d, c);
      case 17:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : aa(d, e)),
          null !== a &&
            ((a.alternate = null), (b.alternate = null), (b.effectTag |= 2)),
          (b.tag = 1),
          N(d) ? ((a = !0), Bc(b)) : (a = !1),
          rb(b, c),
          Yg(b, d, e),
          pe(b, d, e, c),
          Ie(null, b, d, !0, a, c)
        );
      case 19:
        return vh(a, b, c);
    }
    throw Error(k(156, b.tag));
  };
  var bf = null,
    Ne = null,
    la = function (a, b, c, d) {
      return new Fj(a, b, c, d);
    };
  ef.prototype.render = function (a) {
    md(a, this._internalRoot, null, null);
  };
  ef.prototype.unmount = function () {
    var a = this._internalRoot,
      b = a.containerInfo;
    md(null, a, null, function () {
      b[Lb] = null;
    });
  };
  var Di = function (a) {
    if (13 === a.tag) {
      var b = Fc(ka(), 150, 100);
      Ja(a, b);
      df(a, b);
    }
  };
  var Yf = function (a) {
    13 === a.tag && (Ja(a, 3), df(a, 3));
  };
  var Bi = function (a) {
    if (13 === a.tag) {
      var b = ka();
      b = Va(b, a, null);
      Ja(a, b);
      df(a, b);
    }
  };
  sd = function (a, b, c) {
    switch (b) {
      case "input":
        Dd(a, c);
        b = c.name;
        if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode; ) c = c.parentNode;
          c = c.querySelectorAll(
            "input[name=" + JSON.stringify("" + b) + '][type="radio"]'
          );
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = ae(d);
              if (!e) throw Error(k(90));
              Gf(d);
              Dd(d, e);
            }
          }
        }
        break;
      case "textarea":
        Lf(a, c);
        break;
      case "select":
        (b = c.value), null != b && hb(a, !!c.multiple, b, !1);
    }
  };
  (function (a, b, c, d) {
    ee = a;
    eg = b;
    vd = c;
    vf = d;
  })(
    Qh,
    function (a, b, c, d, e) {
      var f = p;
      p |= 4;
      try {
        return Da(98, a.bind(null, b, c, d, e));
      } finally {
        (p = f), p === H && ha();
      }
    },
    function () {
      (p & (1 | ca | ma)) === H && (uj(), xb());
    },
    function (a, b) {
      var c = p;
      p |= 2;
      try {
        return a(b);
      } finally {
        (p = c), p === H && ha();
      }
    }
  );
  var mk = {
    Events: [
      Hb,
      Pa,
      ae,
      pf,
      qd,
      lb,
      function (a) {
        Kd(a, Ki);
      },
      sf,
      tf,
      sc,
      pc,
      xb,
      { current: !1 },
    ],
  };
  (function (a) {
    var b = a.findFiberByHostInstance;
    return Ej(
      M({}, a, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: da.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (a) {
          a = Sf(a);
          return null === a ? null : a.stateNode;
        },
        findFiberByHostInstance: function (a) {
          return b ? b(a) : null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
      })
    );
  })({
    findFiberByHostInstance: Bb,
    bundleType: 0,
    version: "16.14.0",
    rendererPackageName: "react-dom",
  });
  I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mk;
  I.createPortal = Xh;
  I.findDOMNode = function (a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternalFiber;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(k(188));
      throw Error(k(268, Object.keys(a)));
    }
    a = Sf(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  I.flushSync = function (a, b) {
    if ((p & (ca | ma)) !== H) throw Error(k(187));
    var c = p;
    p |= 1;
    try {
      return Da(99, a.bind(null, b));
    } finally {
      (p = c), ha();
    }
  };
  I.hydrate = function (a, b, c) {
    if (!bc(b)) throw Error(k(200));
    return nd(null, a, b, !0, c);
  };
  I.render = function (a, b, c) {
    if (!bc(b)) throw Error(k(200));
    return nd(null, a, b, !1, c);
  };
  I.unmountComponentAtNode = function (a) {
    if (!bc(a)) throw Error(k(40));
    return a._reactRootContainer
      ? (Rh(function () {
          nd(null, null, a, !1, function () {
            a._reactRootContainer = null;
            a[Lb] = null;
          });
        }),
        !0)
      : !1;
  };
  I.unstable_batchedUpdates = Qh;
  I.unstable_createPortal = function (a, b) {
    return Xh(
      a,
      b,
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
    );
  };
  I.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
    if (!bc(c)) throw Error(k(200));
    if (null == a || void 0 === a._reactInternalFiber) throw Error(k(38));
    return nd(a, b, c, !1, d);
  };
  I.version = "16.14.0";
});

!(function () {
  "use strict";
  var f = {}.hasOwnProperty;

  function s() {
    for (var e = [], t = 0; t < arguments.length; t++) {
      var n = arguments[t];
      if (n) {
        var r,
          o = typeof n;
        if ("string" == o || "number" == o) e.push(n);
        else if (Array.isArray(n))
          !n.length || ((r = s.apply(null, n)) && e.push(r));
        else if ("object" == o)
          if (n.toString === Object.prototype.toString)
            for (var i in n) f.call(n, i) && n[i] && e.push(i);
          else e.push(n.toString());
      }
    }
    return e.join(" ");
  }

  "undefined" != typeof module && module.exports
    ? (module.exports = s.default = s)
    : "function" == typeof define && "object" == typeof define.amd && define.amd
    ? define("classnames", [], function () {
        return s;
      })
    : (window.classNames = s);
})();
!(function (f) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = f();
  else if ("function" == typeof define && define.amd) define([], f);
  else {
    var g;
    (g =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (g.PropTypes = f());
  }
})(function () {
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = "function" == typeof require && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw ((f.code = "MODULE_NOT_FOUND"), f);
        }
        var l = (n[o] = { exports: {} });
        t[o][0].call(
          l.exports,
          function (e) {
            var n = t[o][1][e];
            return s(n || e);
          },
          l,
          l.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[o].exports;
    }

    for (
      var i = "function" == typeof require && require, o = 0;
      o < r.length;
      o++
    )
      s(r[o]);
    return s;
  })(
    {
      1: [
        function (require, module, exports) {
          "use strict";

          function emptyFunction() {}

          function emptyFunctionWithReset() {}

          var ReactPropTypesSecret = require(3);
          (emptyFunctionWithReset.resetWarningCache = emptyFunction),
            (module.exports = function () {
              function e(e, t, n, r, o, p) {
                if (p !== ReactPropTypesSecret) {
                  var c = new Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                  throw ((c.name = "Invariant Violation"), c);
                }
              }

              function t() {
                return e;
              }

              e.isRequired = e;
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction,
              };
              return (n.PropTypes = n), n;
            });
        },
        { 3: 3 },
      ],
      2: [
        function (require, module, exports) {
          module.exports = require(1)();
        },
        { 1: 1 },
      ],
      3: [
        function (require, module, exports) {
          "use strict";
          module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        {},
      ],
    },
    {},
    [2]
  )(2);
});
!(function (r, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((r = "undefined" != typeof globalThis ? globalThis : r || self).Redux =
          {})
      );
})(this, function (r) {
  "use strict";

  function t(r) {
    return (
      "Minified Redux error #" +
      r +
      "; visit https://redux.js.org/Errors?code=" +
      r +
      " for the full message or use the non-minified dev environment for full errors. "
    );
  }

  var e = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
    n = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
    o = {
      INIT: "@@redux/INIT" + n(),
      REPLACE: "@@redux/REPLACE" + n(),
      PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + n();
      },
    };

  function i(r) {
    if ("object" != typeof r || null === r) return !1;
    for (var t = r; null !== Object.getPrototypeOf(t); )
      t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(r) === t;
  }

  function f(r, t) {
    return function () {
      return t(r.apply(this, arguments));
    };
  }

  function u(r, t, e) {
    return (
      t in r
        ? Object.defineProperty(r, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (r[t] = e),
      r
    );
  }

  function c(r, t) {
    var e = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(r);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(r, t).enumerable;
        })),
        e.push.apply(e, n);
    }
    return e;
  }

  function p(r) {
    for (var t = 1; arguments.length > t; t++) {
      var e = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? c(Object(e), !0).forEach(function (t) {
            u(r, t, e[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e))
        : c(Object(e)).forEach(function (t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
          });
    }
    return r;
  }

  function a() {
    for (var r = arguments.length, t = Array(r), e = 0; r > e; e++)
      t[e] = arguments[e];
    return 0 === t.length
      ? function (r) {
          return r;
        }
      : 1 === t.length
      ? t[0]
      : t.reduce(function (r, t) {
          return function () {
            return r(t.apply(void 0, arguments));
          };
        });
  }

  (r.__DO_NOT_USE__ActionTypes = o),
    (r.applyMiddleware = function () {
      for (var r = arguments.length, e = Array(r), n = 0; r > n; n++)
        e[n] = arguments[n];
      return function (r) {
        return function () {
          var n = r.apply(void 0, arguments),
            o = function () {
              throw Error(t(15));
            },
            i = {
              getState: n.getState,
              dispatch: function () {
                return o.apply(void 0, arguments);
              },
            },
            f = e.map(function (r) {
              return r(i);
            });
          return (
            (o = a.apply(void 0, f)(n.dispatch)),
            p(p({}, n), {}, { dispatch: o })
          );
        };
      };
    }),
    (r.bindActionCreators = function (r, e) {
      if ("function" == typeof r) return f(r, e);
      if ("object" != typeof r || null === r) throw Error(t(16));
      var n = {};
      for (var o in r) {
        var i = r[o];
        "function" == typeof i && (n[o] = f(i, e));
      }
      return n;
    }),
    (r.combineReducers = function (r) {
      for (var e = Object.keys(r), n = {}, i = 0; e.length > i; i++) {
        var f = e[i];
        "function" == typeof r[f] && (n[f] = r[f]);
      }
      var u,
        c = Object.keys(n);
      try {
        !(function (r) {
          Object.keys(r).forEach(function (e) {
            var n = r[e];
            if (void 0 === n(void 0, { type: o.INIT })) throw Error(t(12));
            if (void 0 === n(void 0, { type: o.PROBE_UNKNOWN_ACTION() }))
              throw Error(t(13));
          });
        })(n);
      } catch (r) {
        u = r;
      }
      return function (r, e) {
        if ((void 0 === r && (r = {}), u)) throw u;
        for (var o = !1, i = {}, f = 0; c.length > f; f++) {
          var p = c[f],
            a = r[p],
            l = (0, n[p])(a, e);
          if (void 0 === l) throw Error(t(14));
          (i[p] = l), (o = o || l !== a);
        }
        return (o = o || c.length !== Object.keys(r).length) ? i : r;
      };
    }),
    (r.compose = a),
    (r.createStore = function r(n, f, u) {
      var c;
      if (
        ("function" == typeof f && "function" == typeof u) ||
        ("function" == typeof u && "function" == typeof arguments[3])
      )
        throw Error(t(0));
      if (
        ("function" == typeof f && void 0 === u && ((u = f), (f = void 0)),
        void 0 !== u)
      ) {
        if ("function" != typeof u) throw Error(t(1));
        return u(r)(n, f);
      }
      if ("function" != typeof n) throw Error(t(2));
      var p = n,
        a = f,
        l = [],
        y = l,
        s = !1;

      function d() {
        y === l && (y = l.slice());
      }

      function b() {
        if (s) throw Error(t(3));
        return a;
      }

      function h(r) {
        if ("function" != typeof r) throw Error(t(4));
        if (s) throw Error(t(5));
        var e = !0;
        return (
          d(),
          y.push(r),
          function () {
            if (e) {
              if (s) throw Error(t(6));
              (e = !1), d();
              var n = y.indexOf(r);
              y.splice(n, 1), (l = null);
            }
          }
        );
      }

      function v(r) {
        if (!i(r)) throw Error(t(7));
        if (void 0 === r.type) throw Error(t(8));
        if (s) throw Error(t(9));
        try {
          (s = !0), (a = p(a, r));
        } finally {
          s = !1;
        }
        for (var e = (l = y), n = 0; e.length > n; n++) {
          (0, e[n])();
        }
        return r;
      }

      function O(r) {
        if ("function" != typeof r) throw Error(t(10));
        (p = r), v({ type: o.REPLACE });
      }

      function E() {
        var r,
          n = h;
        return (
          ((r = {
            subscribe: function (r) {
              if ("object" != typeof r || null === r) throw Error(t(11));

              function e() {
                r.next && r.next(b());
              }

              return e(), { unsubscribe: n(e) };
            },
          })[e] = function () {
            return this;
          }),
          r
        );
      }

      return (
        v({ type: o.INIT }),
        ((c = { dispatch: v, subscribe: h, getState: b, replaceReducer: O })[
          e
        ] = E),
        c
      );
    }),
    Object.defineProperty(r, "__esModule", { value: !0 });
});

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("react"), require("react-dom"))
    : "function" == typeof define && define.amd
    ? define(["exports", "react", "react-dom"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).ReactRedux = {}),
        e.React,
        e.ReactDOM
      );
})(this, function (e, t, r) {
  "use strict";

  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }

  var o = n(t);

  function u(e, t, r) {
    return (
      e(
        (r = {
          path: t,
          exports: {},
          require: function (e, t) {
            return (function () {
              throw Error(
                "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
              );
            })();
          },
        }),
        r.exports
      ),
      r.exports
    );
  }

  function a() {}

  function i() {}

  i.resetWarningCache = a;
  u(function (e) {
    e.exports = (function () {
      function e(e, t, r, n, o, u) {
        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== u) {
          var a = Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((a.name = "Invariant Violation"), a);
        }
      }

      function t() {
        return e;
      }

      e.isRequired = e;
      var r = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: i,
        resetWarningCache: a,
      };
      return (r.PropTypes = r), r;
    })();
  });
  var c = o.default.createContext(null);
  var s = function (e) {
      e();
    },
    f = function () {
      return s;
    },
    p = {
      notify: function () {},
    };
  var l = (function () {
      function e(e, t) {
        (this.store = e),
          (this.parentSub = t),
          (this.unsubscribe = null),
          (this.listeners = p),
          (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
      }

      var t = e.prototype;
      return (
        (t.addNestedSub = function (e) {
          return this.trySubscribe(), this.listeners.subscribe(e);
        }),
        (t.notifyNestedSubs = function () {
          this.listeners.notify();
        }),
        (t.handleChangeWrapper = function () {
          this.onStateChange && this.onStateChange();
        }),
        (t.isSubscribed = function () {
          return !!this.unsubscribe;
        }),
        (t.trySubscribe = function () {
          this.unsubscribe ||
            ((this.unsubscribe = this.parentSub
              ? this.parentSub.addNestedSub(this.handleChangeWrapper)
              : this.store.subscribe(this.handleChangeWrapper)),
            (this.listeners = (function () {
              var e = f(),
                t = null,
                r = null;
              return {
                clear: function () {
                  (t = null), (r = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], r = t; r; ) e.push(r), (r = r.next);
                  return e;
                },
                subscribe: function (e) {
                  var n = !0,
                    o = (r = { callback: e, next: null, prev: r });
                  return (
                    o.prev ? (o.prev.next = o) : (t = o),
                    function () {
                      n &&
                        null !== t &&
                        ((n = !1),
                        o.next ? (o.next.prev = o.prev) : (r = o.prev),
                        o.prev ? (o.prev.next = o.next) : (t = o.next));
                    }
                  );
                },
              };
            })()));
        }),
        (t.tryUnsubscribe = function () {
          this.unsubscribe &&
            (this.unsubscribe(),
            (this.unsubscribe = null),
            this.listeners.clear(),
            (this.listeners = p));
        }),
        e
      );
    })(),
    d =
      "undefined" != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement
        ? t.useLayoutEffect
        : t.useEffect;

  function y() {
    return (y =
      Object.assign ||
      function (e) {
        for (var t = 1; arguments.length > t; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }

  function v(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = {},
      u = Object.keys(e);
    for (n = 0; u.length > n; n++) 0 > t.indexOf((r = u[n])) && (o[r] = e[r]);
    return o;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var m = "function" == typeof Symbol && Symbol.for,
    b = m ? Symbol.for("react.element") : 60103,
    h = m ? Symbol.for("react.portal") : 60106,
    S = m ? Symbol.for("react.fragment") : 60107,
    P = m ? Symbol.for("react.strict_mode") : 60108,
    g = m ? Symbol.for("react.profiler") : 60114,
    O = m ? Symbol.for("react.provider") : 60109,
    w = m ? Symbol.for("react.context") : 60110,
    C = m ? Symbol.for("react.async_mode") : 60111,
    x = m ? Symbol.for("react.concurrent_mode") : 60111,
    E = m ? Symbol.for("react.forward_ref") : 60112,
    T = m ? Symbol.for("react.suspense") : 60113,
    M = m ? Symbol.for("react.suspense_list") : 60120,
    R = m ? Symbol.for("react.memo") : 60115,
    $ = m ? Symbol.for("react.lazy") : 60116,
    N = m ? Symbol.for("react.block") : 60121,
    j = m ? Symbol.for("react.fundamental") : 60117,
    q = m ? Symbol.for("react.responder") : 60118,
    D = m ? Symbol.for("react.scope") : 60119;

  function _(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case b:
          switch ((e = e.type)) {
            case C:
            case x:
            case S:
            case g:
            case P:
            case T:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case w:
                case E:
                case $:
                case R:
                case O:
                  return e;
                default:
                  return t;
              }
          }
        case h:
          return t;
      }
    }
  }

  function F(e) {
    return _(e) === x;
  }

  var k = {
      AsyncMode: C,
      ConcurrentMode: x,
      ContextConsumer: w,
      ContextProvider: O,
      Element: b,
      ForwardRef: E,
      Fragment: S,
      Lazy: $,
      Memo: R,
      Portal: h,
      Profiler: g,
      StrictMode: P,
      Suspense: T,
      isAsyncMode: function (e) {
        return F(e) || _(e) === C;
      },
      isConcurrentMode: F,
      isContextConsumer: function (e) {
        return _(e) === w;
      },
      isContextProvider: function (e) {
        return _(e) === O;
      },
      isElement: function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === b;
      },
      isForwardRef: function (e) {
        return _(e) === E;
      },
      isFragment: function (e) {
        return _(e) === S;
      },
      isLazy: function (e) {
        return _(e) === $;
      },
      isMemo: function (e) {
        return _(e) === R;
      },
      isPortal: function (e) {
        return _(e) === h;
      },
      isProfiler: function (e) {
        return _(e) === g;
      },
      isStrictMode: function (e) {
        return _(e) === P;
      },
      isSuspense: function (e) {
        return _(e) === T;
      },
      isValidElementType: function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === S ||
          e === x ||
          e === g ||
          e === P ||
          e === T ||
          e === M ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === $ ||
              e.$$typeof === R ||
              e.$$typeof === O ||
              e.$$typeof === w ||
              e.$$typeof === E ||
              e.$$typeof === j ||
              e.$$typeof === q ||
              e.$$typeof === D ||
              e.$$typeof === N))
        );
      },
      typeOf: _,
    },
    W = u(function (e) {
      e.exports = k;
    }),
    H = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    U = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    A = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    I = {};

  function L(e) {
    return W.isMemo(e) ? A : I[e.$$typeof] || H;
  }

  (I[W.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  }),
    (I[W.Memo] = A);
  var z = Object.defineProperty,
    K = Object.getOwnPropertyNames,
    V = Object.getOwnPropertySymbols,
    B = Object.getOwnPropertyDescriptor,
    Y = Object.getPrototypeOf,
    G = Object.prototype;
  var J = function e(t, r, n) {
      if ("string" != typeof r) {
        if (G) {
          var o = Y(r);
          o && o !== G && e(t, o, n);
        }
        var u = K(r);
        V && (u = u.concat(V(r)));
        for (var a = L(t), i = L(r), c = 0; u.length > c; ++c) {
          var s = u[c];
          if (!(U[s] || (n && n[s]) || (i && i[s]) || (a && a[s]))) {
            var f = B(r, s);
            try {
              z(t, s, f);
            } catch (e) {}
          }
        }
      }
      return t;
    },
    Q = [],
    X = [null, null];

  function Z(e, t) {
    return [t.payload, e[1] + 1];
  }

  function ee(e, t, r) {
    d(function () {
      return e.apply(void 0, t);
    }, r);
  }

  function te(e, t, r, n, o, u, a) {
    (e.current = n),
      (t.current = o),
      (r.current = !1),
      u.current && ((u.current = null), a());
  }

  function re(e, t, r, n, o, u, a, i, c, s) {
    if (e) {
      var f = !1,
        p = null,
        l = function () {
          if (!f) {
            var e,
              r,
              l = t.getState();
            try {
              e = n(l, o.current);
            } catch (e) {
              (r = e), (p = e);
            }
            r || (p = null),
              e === u.current
                ? a.current || c()
                : ((u.current = e),
                  (i.current = e),
                  (a.current = !0),
                  s({
                    type: "STORE_UPDATED",
                    payload: { error: r },
                  }));
          }
        };
      (r.onStateChange = l), r.trySubscribe(), l();
      return function () {
        if (((f = !0), r.tryUnsubscribe(), (r.onStateChange = null), p))
          throw p;
      };
    }
  }

  var ne = function () {
    return [null, 0];
  };

  function oe(e, r) {
    void 0 === r && (r = {});
    var n = r.getDisplayName,
      u =
        void 0 === n
          ? function (e) {
              return "ConnectAdvanced(" + e + ")";
            }
          : n,
      a = r.methodName,
      i = void 0 === a ? "connectAdvanced" : a,
      s = r.renderCountProp,
      f = void 0 === s ? void 0 : s,
      p = r.shouldHandleStateChanges,
      d = void 0 === p || p,
      m = r.storeKey,
      b = void 0 === m ? "store" : m,
      h = r.forwardRef,
      S = void 0 !== h && h,
      P = r.context,
      g = void 0 === P ? c : P,
      O = v(r, [
        "getDisplayName",
        "methodName",
        "renderCountProp",
        "shouldHandleStateChanges",
        "storeKey",
        "withRef",
        "forwardRef",
        "context",
      ]),
      w = g;
    return function (r) {
      var n = r.displayName || r.name || "Component",
        a = u(n),
        c = y({}, O, {
          getDisplayName: u,
          methodName: i,
          renderCountProp: f,
          shouldHandleStateChanges: d,
          storeKey: b,
          displayName: a,
          wrappedComponentName: n,
          WrappedComponent: r,
        }),
        s = O.pure;
      var p = s
        ? t.useMemo
        : function (e) {
            return e();
          };

      function m(n) {
        var u = t.useMemo(
            function () {
              var e = n.reactReduxForwardedRef,
                t = v(n, ["reactReduxForwardedRef"]);
              return [n.context, e, t];
            },
            [n]
          ),
          a = u[0],
          i = u[1],
          s = u[2],
          f = t.useMemo(
            function () {
              return a &&
                a.Consumer &&
                W.isContextConsumer(o.default.createElement(a.Consumer, null))
                ? a
                : w;
            },
            [a, w]
          ),
          m = t.useContext(f),
          b = !!n.store && !!n.store.getState && !!n.store.dispatch,
          h = b ? n.store : m.store,
          S = t.useMemo(
            function () {
              return (function (t) {
                return e(t.dispatch, c);
              })(h);
            },
            [h]
          ),
          P = t.useMemo(
            function () {
              if (!d) return X;
              var e = new l(h, b ? null : m.subscription),
                t = e.notifyNestedSubs.bind(e);
              return [e, t];
            },
            [h, b, m]
          ),
          g = P[0],
          O = P[1],
          C = t.useMemo(
            function () {
              return b ? m : y({}, m, { subscription: g });
            },
            [b, m, g]
          ),
          x = t.useReducer(Z, Q, ne),
          E = x[0][0],
          T = x[1];
        if (E && E.error) throw E.error;
        var M = t.useRef(),
          R = t.useRef(s),
          $ = t.useRef(),
          N = t.useRef(!1),
          j = p(
            function () {
              return $.current && s === R.current
                ? $.current
                : S(h.getState(), s);
            },
            [h, E, s]
          );
        ee(te, [R, M, N, s, j, $, O]),
          ee(re, [d, h, g, S, R, M, N, $, O, T], [h, g, S]);
        var q = t.useMemo(
          function () {
            return o.default.createElement(r, y({}, j, { ref: i }));
          },
          [i, r, j]
        );
        return t.useMemo(
          function () {
            return d ? o.default.createElement(f.Provider, { value: C }, q) : q;
          },
          [f, q, C]
        );
      }

      var h = s ? o.default.memo(m) : m;
      if (((h.WrappedComponent = r), (h.displayName = m.displayName = a), S)) {
        var P = o.default.forwardRef(function (e, t) {
          return o.default.createElement(
            h,
            y({}, e, { reactReduxForwardedRef: t })
          );
        });
        return (P.displayName = a), (P.WrappedComponent = r), J(P, r);
      }
      return J(h, r);
    };
  }

  function ue(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
  }

  function ae(e, t) {
    if (ue(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    var r = Object.keys(e);
    if (r.length !== Object.keys(t).length) return !1;
    for (var n = 0; r.length > n; n++)
      if (
        !Object.prototype.hasOwnProperty.call(t, r[n]) ||
        !ue(e[r[n]], t[r[n]])
      )
        return !1;
    return !0;
  }

  function ie(e) {
    return function (t, r) {
      var n = e(t, r);

      function o() {
        return n;
      }

      return (o.dependsOnOwnProps = !1), o;
    };
  }

  function ce(e) {
    return null != e.dependsOnOwnProps ? !!e.dependsOnOwnProps : 1 !== e.length;
  }

  function se(e, t) {
    return function (t, r) {
      var n = function (e, t) {
        return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e);
      };
      return (
        (n.dependsOnOwnProps = !0),
        (n.mapToProps = function (t, r) {
          (n.mapToProps = e), (n.dependsOnOwnProps = ce(e));
          var o = n(t, r);
          return (
            "function" == typeof o &&
              ((n.mapToProps = o),
              (n.dependsOnOwnProps = ce(o)),
              (o = n(t, r))),
            o
          );
        }),
        n
      );
    };
  }

  var fe = [
    function (e) {
      return "function" == typeof e ? se(e) : void 0;
    },
    function (e) {
      return e
        ? void 0
        : ie(function (e) {
            return { dispatch: e };
          });
    },
    function (e) {
      return e && "object" == typeof e
        ? ie(function (t) {
            return (function (e, t) {
              var r = {},
                n = function (n) {
                  var o = e[n];
                  "function" == typeof o &&
                    (r[n] = function () {
                      return t(o.apply(void 0, arguments));
                    });
                };
              for (var o in e) n(o);
              return r;
            })(e, t);
          })
        : void 0;
    },
  ];
  var pe = [
    function (e) {
      return "function" == typeof e ? se(e) : void 0;
    },
    function (e) {
      return e
        ? void 0
        : ie(function () {
            return {};
          });
    },
  ];

  function le(e, t, r) {
    return y({}, r, e, t);
  }

  var de = [
    function (e) {
      return "function" == typeof e
        ? (function (e) {
            return function (t, r) {
              var n,
                o = r.pure,
                u = r.areMergedPropsEqual,
                a = !1;
              return function (t, r, i) {
                var c = e(t, r, i);
                return a ? (o && u(c, n)) || (n = c) : ((a = !0), (n = c)), n;
              };
            };
          })(e)
        : void 0;
    },
    function (e) {
      return e
        ? void 0
        : function () {
            return le;
          };
    },
  ];

  function ye(e, t, r, n) {
    return function (o, u) {
      return r(e(o, u), t(n, u), u);
    };
  }

  function ve(e, t, r, n, o) {
    var u,
      a,
      i,
      c,
      s,
      f = o.areStatesEqual,
      p = o.areOwnPropsEqual,
      l = o.areStatePropsEqual,
      d = !1;

    function y(o, d) {
      var y,
        v,
        m = !p(d, a),
        b = !f(o, u);
      return (
        (u = o),
        (a = d),
        m && b
          ? ((i = e(u, a)),
            t.dependsOnOwnProps && (c = t(n, a)),
            (s = r(i, c, a)))
          : m
          ? (e.dependsOnOwnProps && (i = e(u, a)),
            t.dependsOnOwnProps && (c = t(n, a)),
            (s = r(i, c, a)))
          : b
          ? ((y = e(u, a)), (v = !l(y, i)), (i = y), v && (s = r(i, c, a)), s)
          : s
      );
    }

    return function (o, f) {
      return d
        ? y(o, f)
        : ((i = e((u = o), (a = f))),
          (c = t(n, a)),
          (s = r(i, c, a)),
          (d = !0),
          s);
    };
  }

  function me(e, t) {
    var r = t.initMapStateToProps,
      n = t.initMapDispatchToProps,
      o = t.initMergeProps,
      u = v(t, [
        "initMapStateToProps",
        "initMapDispatchToProps",
        "initMergeProps",
      ]),
      a = r(e, u),
      i = n(e, u),
      c = o(e, u);
    return (u.pure ? ve : ye)(a, i, c, e, u);
  }

  function be(e, t, r) {
    for (var n = t.length - 1; n >= 0; n--) {
      var o = t[n](e);
      if (o) return o;
    }
    return function (t, n) {
      throw Error(
        "Invalid value of type " +
          typeof e +
          " for " +
          r +
          " argument when connecting component " +
          n.wrappedComponentName +
          "."
      );
    };
  }

  function he(e, t) {
    return e === t;
  }

  function Se(e) {
    var t = void 0 === e ? {} : e,
      r = t.connectHOC,
      n = void 0 === r ? oe : r,
      o = t.mapStateToPropsFactories,
      u = void 0 === o ? pe : o,
      a = t.mapDispatchToPropsFactories,
      i = void 0 === a ? fe : a,
      c = t.mergePropsFactories,
      s = void 0 === c ? de : c,
      f = t.selectorFactory,
      p = void 0 === f ? me : f;
    return function (e, t, r, o) {
      void 0 === o && (o = {});
      var a = o.pure,
        c = void 0 === a || a,
        f = o.areStatesEqual,
        l = void 0 === f ? he : f,
        d = o.areOwnPropsEqual,
        m = void 0 === d ? ae : d,
        b = o.areStatePropsEqual,
        h = void 0 === b ? ae : b,
        S = o.areMergedPropsEqual,
        P = void 0 === S ? ae : S,
        g = v(o, [
          "pure",
          "areStatesEqual",
          "areOwnPropsEqual",
          "areStatePropsEqual",
          "areMergedPropsEqual",
        ]),
        O = be(e, u, "mapStateToProps"),
        w = be(t, i, "mapDispatchToProps"),
        C = be(r, s, "mergeProps");
      return n(
        p,
        y(
          {
            methodName: "connect",
            getDisplayName: function (e) {
              return "Connect(" + e + ")";
            },
            shouldHandleStateChanges: !!e,
            initMapStateToProps: O,
            initMapDispatchToProps: w,
            initMergeProps: C,
            pure: c,
            areStatesEqual: l,
            areOwnPropsEqual: m,
            areStatePropsEqual: h,
            areMergedPropsEqual: P,
          },
          g
        )
      );
    };
  }

  var Pe = Se();

  function ge() {
    return t.useContext(c);
  }

  function Oe(e) {
    void 0 === e && (e = c);
    var r =
      e === c
        ? ge
        : function () {
            return t.useContext(e);
          };
    return function () {
      return r().store;
    };
  }

  var we = Oe();

  function Ce(e) {
    void 0 === e && (e = c);
    var t = e === c ? we : Oe(e);
    return function () {
      return t().dispatch;
    };
  }

  var xe = Ce(),
    Ee = function (e, t) {
      return e === t;
    };

  function Te(e) {
    void 0 === e && (e = c);
    var r =
      e === c
        ? ge
        : function () {
            return t.useContext(e);
          };
    return function (e, n) {
      void 0 === n && (n = Ee);
      var o = r(),
        u = (function (e, r, n, o) {
          var u,
            a = t.useReducer(function (e) {
              return e + 1;
            }, 0)[1],
            i = t.useMemo(
              function () {
                return new l(n, o);
              },
              [n, o]
            ),
            c = t.useRef(),
            s = t.useRef(),
            f = t.useRef(),
            p = t.useRef(),
            y = n.getState();
          try {
            if (e !== s.current || y !== f.current || c.current) {
              var v = e(y);
              u = void 0 !== p.current && r(v, p.current) ? p.current : v;
            } else u = p.current;
          } catch (e) {
            throw (
              (c.current &&
                (e.message +=
                  "\nThe error may be correlated with this previous error:\n" +
                  c.current.stack +
                  "\n\n"),
              e)
            );
          }
          return (
            d(function () {
              (s.current = e),
                (f.current = y),
                (p.current = u),
                (c.current = void 0);
            }),
            d(
              function () {
                function e() {
                  try {
                    var e = n.getState(),
                      t = s.current(e);
                    if (r(t, p.current)) return;
                    (p.current = t), (f.current = e);
                  } catch (e) {
                    c.current = e;
                  }
                  a();
                }

                return (
                  (i.onStateChange = e),
                  i.trySubscribe(),
                  e(),
                  function () {
                    return i.tryUnsubscribe();
                  }
                );
              },
              [n, i]
            ),
            u
          );
        })(e, n, o.store, o.subscription);
      return t.useDebugValue(u), u;
    };
  }

  var Me = Te();
  (s = r.unstable_batchedUpdates),
    Object.defineProperty(e, "batch", {
      enumerable: !0,
      get: function () {
        return r.unstable_batchedUpdates;
      },
    }),
    (e.Provider = function (e) {
      var r = e.store,
        n = e.context,
        u = e.children,
        a = t.useMemo(
          function () {
            var e = new l(r);
            return (
              (e.onStateChange = e.notifyNestedSubs),
              { store: r, subscription: e }
            );
          },
          [r]
        ),
        i = t.useMemo(
          function () {
            return r.getState();
          },
          [r]
        );
      return (
        d(
          function () {
            var e = a.subscription;
            return (
              e.trySubscribe(),
              i !== r.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [a, i]
        ),
        o.default.createElement((n || c).Provider, { value: a }, u)
      );
    }),
    (e.ReactReduxContext = c),
    (e.connect = Pe),
    (e.connectAdvanced = oe),
    (e.createDispatchHook = Ce),
    (e.createSelectorHook = Te),
    (e.createStoreHook = Oe),
    (e.shallowEqual = ae),
    (e.useDispatch = xe),
    (e.useSelector = Me),
    (e.useStore = we),
    Object.defineProperty(e, "__esModule", { value: !0 });
});

!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.ReduxThunk = e())
    : (t.ReduxThunk = e());
})(this, function () {
  return (function (t) {
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = (n[o] = { exports: {}, id: o, loaded: !1 });
      return t[o].call(r.exports, r, r.exports, e), (r.loaded = !0), r.exports;
    }

    var n = {};
    return (e.m = t), (e.c = n), (e.p = ""), e(0);
  })([
    function (t, e, n) {
      t.exports = n(1);
    },
    function (t, e) {
      "use strict";

      function n(t) {
        return function (e) {
          var n = e.dispatch,
            o = e.getState;
          return function (e) {
            return function (r) {
              return "function" == typeof r ? r(n, o, t) : e(r);
            };
          };
        };
      }

      e.__esModule = !0;
      var o = n();
      (o.withExtraArgument = n), (e.default = o);
    },
  ]);
});
!(function (n, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (n.autodux = e());
})(this, function () {
  "use strict";
  var e,
    b = function (n, e, t) {
      return n
        .split(".")
        .filter(Boolean)
        .every(function (n) {
          return void 0 !== (e = e[n]);
        })
        ? e
        : t;
    },
    t = function (n) {
      return "string" == typeof n && n
        ? n.charAt(0).toUpperCase() + n.slice(1)
        : "";
    },
    g = function (n) {
      return n;
    },
    j =
      ((e = function (n) {
        return "function" == typeof n;
      }),
      function (n) {
        return e(n) && n;
      }),
    O = function (n) {
      return "get" + t(n);
    },
    l = function (e, t) {
      return function (n) {
        return t(n[e], n);
      };
    },
    s = function (n) {
      return "set" + t(n);
    },
    a = function (n, e, r, t) {
      return (
        void 0 === t && (t = n + "/" + e),
        {
          create: Object.assign(
            function (n) {
              return n;
            },
            { type: t }
          ),
          reducer: function (n, e) {
            var t;
            return Object.assign({}, n, r ? (((t = {})[r] = e), t) : e);
          },
        }
      );
    },
    y = function (n, e, t) {
      var r,
        i,
        u,
        c =
          ((i = n),
          (u = e),
          Object.keys(u).reduce(function (n, e) {
            var t,
              r = s(e);
            return Object.assign(n, (((t = {})[r] = a(i, r, e)), t));
          }, {})),
        o = s(n);
      return Object.assign({}, (((r = {})[o] = a(n, o)), r), c, t);
    };
  return Object.assign(
    function (n) {
      void 0 === n && (n = {});
      var a = n.initial;
      void 0 === a && (a = "");
      var f = n.actions;
      void 0 === f && (f = {});
      var e = n.selectors;
      void 0 === e && (e = {});
      var d = n.slice;
      void 0 === d && (d = "");
      var i,
        u,
        t,
        c,
        r,
        o,
        s,
        v = Object.assign(
          {},
          ((c = d),
          (r = a),
          Object.keys(r).reduce(function (n, e) {
            var t, r;
            return c
              ? Object.assign(
                  n,
                  (((t = {})[O(e)] = l(c, function (n) {
                    return b(e, n);
                  })),
                  t)
                )
              : Object.assign(
                  n,
                  (((r = {})[O(e)] = function (n) {
                    return b(e, n);
                  }),
                  r)
                );
          }, {})),
          ((i = d),
          (u = e),
          Object.assign(
            Object.keys(u).reduce(function (n, e) {
              var t, r;
              return i
                ? Object.assign(n, (((t = {})[e] = l(i, u[e])), t))
                : Object.assign(n, (((r = {})[e] = u[e]), r));
            }, {}),
            (((t = {})[O(i)] = l(i, g)), t)
          ))
        ),
        p =
          ((s = y((o = d), a, f)),
          Object.keys(s).reduce(function (n, r) {
            var e;
            return Object.assign(
              {},
              n,
              (((e = {})[r] = Object.assign(
                function () {
                  for (var n, e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                  return {
                    type: o + "/" + r,
                    payload:
                      "function" == typeof s[r].create
                        ? (n = s[r]).create.apply(n, e)
                        : e[0],
                  };
                },
                { type: o + "/" + r }
              )),
              e)
            );
          }, {}));
      return {
        initial: a,
        reducer: function (n, e) {
          void 0 === n && (n = a), void 0 === e && (e = {});
          var t = e.type,
            r = e.payload,
            i = t ? t.split("/") : "unknown/unknown".split("/"),
            u = i[0],
            c = i[1],
            o = y(d, a, {}),
            s = [b(c + ".reducer", f), f[c], b(c + ".reducer", o)].reduceRight(
              function (n, e) {
                return j(e) || n;
              }
            );
          return u === d && (f[c] || o[c])
            ? s
              ? s(n, r)
              : Object.assign({}, n, r)
            : n;
        },
        slice: d,
        selectors: v,
        actions: p,
      };
    },
    {
      id: g,
      assign: function (r) {
        return function (n, e) {
          var t;
          return Object.assign({}, n, (((t = {})[r] = e), t));
        };
      },
    }
  );
});
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("Reselect", ["exports"], t)
    : "undefined" != typeof exports
    ? t(exports)
    : (t((t = {})), (e.Reselect = t));
})(this, function (e) {
  "use strict";

  function o(e, t) {
    return e === t;
  }

  function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : o,
      r = null,
      n = null;
    return function () {
      return (
        (function (e, t, r) {
          if (null !== t && null !== r && t.length === r.length) {
            for (var n = t.length, o = 0; o < n; o++)
              if (!e(t[o], r[o])) return;
            return 1;
          }
        })(t, r, arguments) || (n = e.apply(null, arguments)),
        (r = arguments),
        n
      );
    };
  }

  function t(l) {
    for (
      var e = arguments.length, f = Array(1 < e ? e - 1 : 0), t = 1;
      t < e;
      t++
    )
      f[t - 1] = arguments[t];
    return function () {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      var n = 0,
        o = t.pop(),
        u = (function (e) {
          if (
            (e = Array.isArray(e[0]) ? e[0] : e).every(function (e) {
              return "function" == typeof e;
            })
          )
            return e;
          throw (
            ((e = e
              .map(function (e) {
                return typeof e;
              })
              .join(", ")),
            new Error(
              "Selector creators expect all input-selectors to be functions, instead received the following types: [" +
                e +
                "]"
            ))
          );
        })(t),
        c = l.apply(
          void 0,
          [
            function () {
              return n++, o.apply(null, arguments);
            },
          ].concat(f)
        ),
        i = a(function () {
          for (var e = [], t = u.length, r = 0; r < t; r++)
            e.push(u[r].apply(null, arguments));
          return c.apply(null, e);
        });
      return (
        (i.resultFunc = o),
        (i.recomputations = function () {
          return n;
        }),
        (i.resetRecomputations = function () {
          return (n = 0);
        }),
        i
      );
    };
  }

  (e.__esModule = !0),
    (e.defaultMemoize = a),
    (e.createSelectorCreator = t),
    (e.createStructuredSelector = function (t) {
      var e =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : r;
      if ("object" != typeof t)
        throw new Error(
          "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " +
            typeof t
        );
      var n = Object.keys(t);
      return e(
        n.map(function (e) {
          return t[e];
        }),
        function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.reduce(function (e, t, r) {
            return (e[n[r]] = t), e;
          }, {});
        }
      );
    });
  var r = (e.createSelector = t(a));
});
/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */
(function () {
  "use strict";
  var f,
    g = [];

  function l(a) {
    g.push(a);
    1 == g.length && f();
  }

  function m() {
    for (; g.length; ) g[0](), g.shift();
  }

  f = function () {
    setTimeout(m);
  };

  function n(a) {
    this.a = p;
    this.b = void 0;
    this.f = [];
    var b = this;
    try {
      a(
        function (a) {
          q(b, a);
        },
        function (a) {
          r(b, a);
        }
      );
    } catch (c) {
      r(b, c);
    }
  }

  var p = 2;

  function t(a) {
    return new n(function (b, c) {
      c(a);
    });
  }

  function u(a) {
    return new n(function (b) {
      b(a);
    });
  }

  function q(a, b) {
    if (a.a == p) {
      if (b == a) throw new TypeError();
      var c = !1;
      try {
        var d = b && b.then;
        if (null != b && "object" == typeof b && "function" == typeof d) {
          d.call(
            b,
            function (b) {
              c || q(a, b);
              c = !0;
            },
            function (b) {
              c || r(a, b);
              c = !0;
            }
          );
          return;
        }
      } catch (e) {
        c || r(a, e);
        return;
      }
      a.a = 0;
      a.b = b;
      v(a);
    }
  }

  function r(a, b) {
    if (a.a == p) {
      if (b == a) throw new TypeError();
      a.a = 1;
      a.b = b;
      v(a);
    }
  }

  function v(a) {
    l(function () {
      if (a.a != p)
        for (; a.f.length; ) {
          var b = a.f.shift(),
            c = b[0],
            d = b[1],
            e = b[2],
            b = b[3];
          try {
            0 == a.a
              ? "function" == typeof c
                ? e(c.call(void 0, a.b))
                : e(a.b)
              : 1 == a.a &&
                ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b));
          } catch (h) {
            b(h);
          }
        }
    });
  }

  n.prototype.g = function (a) {
    return this.c(void 0, a);
  };
  n.prototype.c = function (a, b) {
    var c = this;
    return new n(function (d, e) {
      c.f.push([a, b, d, e]);
      v(c);
    });
  };

  function w(a) {
    return new n(function (b, c) {
      function d(c) {
        return function (d) {
          h[c] = d;
          e += 1;
          e == a.length && b(h);
        };
      }

      var e = 0,
        h = [];
      0 == a.length && b(h);
      for (var k = 0; k < a.length; k += 1) u(a[k]).c(d(k), c);
    });
  }

  function x(a) {
    return new n(function (b, c) {
      for (var d = 0; d < a.length; d += 1) u(a[d]).c(b, c);
    });
  }
  window.Promise ||
    ((window.Promise = n),
    (window.Promise.resolve = u),
    (window.Promise.reject = t),
    (window.Promise.race = x),
    (window.Promise.all = w),
    (window.Promise.prototype.then = n.prototype.c),
    (window.Promise.prototype["catch"] = n.prototype.g));
})();

(function () {
  function l(a, b) {
    document.addEventListener
      ? a.addEventListener("scroll", b, !1)
      : a.attachEvent("scroll", b);
  }

  function m(a) {
    document.body
      ? a()
      : document.addEventListener
      ? document.addEventListener("DOMContentLoaded", function c() {
          document.removeEventListener("DOMContentLoaded", c);
          a();
        })
      : document.attachEvent("onreadystatechange", function k() {
          if (
            "interactive" == document.readyState ||
            "complete" == document.readyState
          )
            document.detachEvent("onreadystatechange", k), a();
        });
  }

  function t(a) {
    this.a = document.createElement("div");
    this.a.setAttribute("aria-hidden", "true");
    this.a.appendChild(document.createTextNode(a));
    this.b = document.createElement("span");
    this.c = document.createElement("span");
    this.h = document.createElement("span");
    this.f = document.createElement("span");
    this.g = -1;
    this.b.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.c.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.f.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.h.style.cssText =
      "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
    this.b.appendChild(this.h);
    this.c.appendChild(this.f);
    this.a.appendChild(this.b);
    this.a.appendChild(this.c);
  }

  function u(a, b) {
    a.a.style.cssText =
      "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
      b +
      ";";
  }

  function z(a) {
    var b = a.a.offsetWidth,
      c = b + 100;
    a.f.style.width = c + "px";
    a.c.scrollLeft = c;
    a.b.scrollLeft = a.b.scrollWidth + 100;
    return a.g !== b ? ((a.g = b), !0) : !1;
  }

  function A(a, b) {
    function c() {
      var a = k;
      z(a) && a.a.parentNode && b(a.g);
    }

    var k = a;
    l(a.b, c);
    l(a.c, c);
    z(a);
  }

  function B(a, b) {
    var c = b || {};
    this.family = a;
    this.style = c.style || "normal";
    this.weight = c.weight || "normal";
    this.stretch = c.stretch || "normal";
  }

  var C = null,
    D = null,
    E = null,
    F = null;

  function G() {
    if (null === D)
      if (J() && /Apple/.test(window.navigator.vendor)) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
          window.navigator.userAgent
        );
        D = !!a && 603 > parseInt(a[1], 10);
      } else D = !1;
    return D;
  }

  function J() {
    null === F && (F = !!document.fonts);
    return F;
  }

  function K() {
    if (null === E) {
      var a = document.createElement("div");
      try {
        a.style.font = "condensed 100px sans-serif";
      } catch (b) {}
      E = "" !== a.style.font;
    }
    return E;
  }

  function L(a, b) {
    return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
  }

  B.prototype.load = function (a, b) {
    var c = this,
      k = a || "BESbswy",
      r = 0,
      n = b || 3e3,
      H = new Date().getTime();
    return new Promise(function (a, b) {
      if (J() && !G()) {
        var M = new Promise(function (a, b) {
            function e() {
              new Date().getTime() - H >= n
                ? b(Error("" + n + "ms timeout exceeded"))
                : document.fonts
                    .load(L(c, '"' + c.family + '"'), k)
                    .then(function (c) {
                      1 <= c.length ? a() : setTimeout(e, 25);
                    }, b);
            }

            e();
          }),
          N = new Promise(function (a, c) {
            r = setTimeout(function () {
              c(Error("" + n + "ms timeout exceeded"));
            }, n);
          });
        Promise.race([N, M]).then(function () {
          clearTimeout(r);
          a(c);
        }, b);
      } else
        m(function () {
          function v() {
            var b;
            if (
              (b =
                (-1 != f && -1 != g) ||
                (-1 != f && -1 != h) ||
                (-1 != g && -1 != h))
            )
              (b = f != g && f != h && g != h) ||
                (null === C &&
                  ((b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                    window.navigator.userAgent
                  )),
                  (C =
                    !!b &&
                    (536 > parseInt(b[1], 10) ||
                      (536 === parseInt(b[1], 10) &&
                        11 >= parseInt(b[2], 10))))),
                (b =
                  C &&
                  ((f == w && g == w && h == w) ||
                    (f == x && g == x && h == x) ||
                    (f == y && g == y && h == y)))),
                (b = !b);
            b &&
              (d.parentNode && d.parentNode.removeChild(d),
              clearTimeout(r),
              a(c));
          }

          function I() {
            if (new Date().getTime() - H >= n)
              d.parentNode && d.parentNode.removeChild(d),
                b(Error("" + n + "ms timeout exceeded"));
            else {
              var a = document.hidden;
              if (!0 === a || void 0 === a)
                (f = e.a.offsetWidth),
                  (g = p.a.offsetWidth),
                  (h = q.a.offsetWidth),
                  v();
              r = setTimeout(I, 50);
            }
          }

          var e = new t(k),
            p = new t(k),
            q = new t(k),
            f = -1,
            g = -1,
            h = -1,
            w = -1,
            x = -1,
            y = -1,
            d = document.createElement("div");
          d.dir = "ltr";
          u(e, L(c, "sans-serif"));
          u(p, L(c, "serif"));
          u(q, L(c, "monospace"));
          d.appendChild(e.a);
          d.appendChild(p.a);
          d.appendChild(q.a);
          document.body.appendChild(d);
          w = e.a.offsetWidth;
          x = p.a.offsetWidth;
          y = q.a.offsetWidth;
          I();
          A(e, function (a) {
            f = a;
            v();
          });
          u(e, L(c, '"' + c.family + '",sans-serif'));
          A(p, function (a) {
            g = a;
            v();
          });
          u(p, L(c, '"' + c.family + '",serif'));
          A(q, function (a) {
            h = a;
            v();
          });
          u(q, L(c, '"' + c.family + '",monospace'));
        });
    });
  };
  "object" === typeof module
    ? (module.exports = B)
    : ((window.FontFaceObserver = B),
      (window.FontFaceObserver.prototype.load = B.prototype.load));
})();

/*!
    localForage -- Offline Storage, Improved
    Version 1.9.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
!(function (a) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = a();
  else if ("function" == typeof define && define.amd) define([], a);
  else {
    var b;
    (b =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (b.localforage = a());
  }
})(function () {
  return (function a(b, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!b[g]) {
          var i = "function" == typeof require && require;
          if (!h && i) return i(g, !0);
          if (f) return f(g, !0);
          var j = new Error("Cannot find module '" + g + "'");
          throw ((j.code = "MODULE_NOT_FOUND"), j);
        }
        var k = (c[g] = { exports: {} });
        b[g][0].call(
          k.exports,
          function (a) {
            var c = b[g][1][a];
            return e(c || a);
          },
          k,
          k.exports,
          a,
          b,
          c,
          d
        );
      }
      return c[g].exports;
    }

    for (
      var f = "function" == typeof require && require, g = 0;
      g < d.length;
      g++
    )
      e(d[g]);
    return e;
  })(
    {
      1: [
        function (a, b, c) {
          (function (a) {
            "use strict";

            function c() {
              k = !0;
              for (var a, b, c = l.length; c; ) {
                for (b = l, l = [], a = -1; ++a < c; ) b[a]();
                c = l.length;
              }
              k = !1;
            }

            function d(a) {
              1 !== l.push(a) || k || e();
            }

            var e,
              f = a.MutationObserver || a.WebKitMutationObserver;
            if (f) {
              var g = 0,
                h = new f(c),
                i = a.document.createTextNode("");
              h.observe(i, { characterData: !0 }),
                (e = function () {
                  i.data = g = ++g % 2;
                });
            } else if (a.setImmediate || void 0 === a.MessageChannel)
              e =
                "document" in a &&
                "onreadystatechange" in a.document.createElement("script")
                  ? function () {
                      var b = a.document.createElement("script");
                      (b.onreadystatechange = function () {
                        c(),
                          (b.onreadystatechange = null),
                          b.parentNode.removeChild(b),
                          (b = null);
                      }),
                        a.document.documentElement.appendChild(b);
                    }
                  : function () {
                      setTimeout(c, 0);
                    };
            else {
              var j = new a.MessageChannel();
              (j.port1.onmessage = c),
                (e = function () {
                  j.port2.postMessage(0);
                });
            }
            var k,
              l = [];
            b.exports = d;
          }.call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          ));
        },
        {},
      ],
      2: [
        function (a, b, c) {
          "use strict";

          function d() {}

          function e(a) {
            if ("function" != typeof a)
              throw new TypeError("resolver must be a function");
            (this.state = s),
              (this.queue = []),
              (this.outcome = void 0),
              a !== d && i(this, a);
          }

          function f(a, b, c) {
            (this.promise = a),
              "function" == typeof b &&
                ((this.onFulfilled = b),
                (this.callFulfilled = this.otherCallFulfilled)),
              "function" == typeof c &&
                ((this.onRejected = c),
                (this.callRejected = this.otherCallRejected));
          }

          function g(a, b, c) {
            o(function () {
              var d;
              try {
                d = b(c);
              } catch (b) {
                return p.reject(a, b);
              }
              d === a
                ? p.reject(
                    a,
                    new TypeError("Cannot resolve promise with itself")
                  )
                : p.resolve(a, d);
            });
          }

          function h(a) {
            var b = a && a.then;
            if (
              a &&
              ("object" == typeof a || "function" == typeof a) &&
              "function" == typeof b
            )
              return function () {
                b.apply(a, arguments);
              };
          }

          function i(a, b) {
            function c(b) {
              f || ((f = !0), p.reject(a, b));
            }

            function d(b) {
              f || ((f = !0), p.resolve(a, b));
            }

            function e() {
              b(d, c);
            }

            var f = !1,
              g = j(e);
            "error" === g.status && c(g.value);
          }

          function j(a, b) {
            var c = {};
            try {
              (c.value = a(b)), (c.status = "success");
            } catch (a) {
              (c.status = "error"), (c.value = a);
            }
            return c;
          }

          function k(a) {
            return a instanceof this ? a : p.resolve(new this(d), a);
          }

          function l(a) {
            var b = new this(d);
            return p.reject(b, a);
          }

          function m(a) {
            function b(a, b) {
              function d(a) {
                (g[b] = a), ++h !== e || f || ((f = !0), p.resolve(j, g));
              }

              c.resolve(a).then(d, function (a) {
                f || ((f = !0), p.reject(j, a));
              });
            }

            var c = this;
            if ("[object Array]" !== Object.prototype.toString.call(a))
              return this.reject(new TypeError("must be an array"));
            var e = a.length,
              f = !1;
            if (!e) return this.resolve([]);
            for (
              var g = new Array(e), h = 0, i = -1, j = new this(d);
              ++i < e;

            )
              b(a[i], i);
            return j;
          }

          function n(a) {
            function b(a) {
              c.resolve(a).then(
                function (a) {
                  f || ((f = !0), p.resolve(h, a));
                },
                function (a) {
                  f || ((f = !0), p.reject(h, a));
                }
              );
            }

            var c = this;
            if ("[object Array]" !== Object.prototype.toString.call(a))
              return this.reject(new TypeError("must be an array"));
            var e = a.length,
              f = !1;
            if (!e) return this.resolve([]);
            for (var g = -1, h = new this(d); ++g < e; ) b(a[g]);
            return h;
          }

          var o = a(1),
            p = {},
            q = ["REJECTED"],
            r = ["FULFILLED"],
            s = ["PENDING"];
          (b.exports = e),
            (e.prototype.catch = function (a) {
              return this.then(null, a);
            }),
            (e.prototype.then = function (a, b) {
              if (
                ("function" != typeof a && this.state === r) ||
                ("function" != typeof b && this.state === q)
              )
                return this;
              var c = new this.constructor(d);
              if (this.state !== s) {
                g(c, this.state === r ? a : b, this.outcome);
              } else this.queue.push(new f(c, a, b));
              return c;
            }),
            (f.prototype.callFulfilled = function (a) {
              p.resolve(this.promise, a);
            }),
            (f.prototype.otherCallFulfilled = function (a) {
              g(this.promise, this.onFulfilled, a);
            }),
            (f.prototype.callRejected = function (a) {
              p.reject(this.promise, a);
            }),
            (f.prototype.otherCallRejected = function (a) {
              g(this.promise, this.onRejected, a);
            }),
            (p.resolve = function (a, b) {
              var c = j(h, b);
              if ("error" === c.status) return p.reject(a, c.value);
              var d = c.value;
              if (d) i(a, d);
              else {
                (a.state = r), (a.outcome = b);
                for (var e = -1, f = a.queue.length; ++e < f; )
                  a.queue[e].callFulfilled(b);
              }
              return a;
            }),
            (p.reject = function (a, b) {
              (a.state = q), (a.outcome = b);
              for (var c = -1, d = a.queue.length; ++c < d; )
                a.queue[c].callRejected(b);
              return a;
            }),
            (e.resolve = k),
            (e.reject = l),
            (e.all = m),
            (e.race = n);
        },
        { 1: 1 },
      ],
      3: [
        function (a, b, c) {
          (function (b) {
            "use strict";
            "function" != typeof b.Promise && (b.Promise = a(2));
          }.call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          ));
        },
        { 2: 2 },
      ],
      4: [
        function (a, b, c) {
          "use strict";

          function d(a, b) {
            if (!(a instanceof b))
              throw new TypeError("Cannot call a class as a function");
          }

          function e() {
            try {
              if ("undefined" != typeof indexedDB) return indexedDB;
              if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
              if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
              if ("undefined" != typeof OIndexedDB) return OIndexedDB;
              if ("undefined" != typeof msIndexedDB) return msIndexedDB;
            } catch (a) {
              return;
            }
          }

          function f() {
            try {
              if (!ua || !ua.open) return !1;
              var a =
                  "undefined" != typeof openDatabase &&
                  /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                  !/Chrome/.test(navigator.userAgent) &&
                  !/BlackBerry/.test(navigator.platform),
                b =
                  "function" == typeof fetch &&
                  -1 !== fetch.toString().indexOf("[native code");
              return (
                (!a || b) &&
                "undefined" != typeof indexedDB &&
                "undefined" != typeof IDBKeyRange
              );
            } catch (a) {
              return !1;
            }
          }

          function g(a, b) {
            (a = a || []), (b = b || {});
            try {
              return new Blob(a, b);
            } catch (f) {
              if ("TypeError" !== f.name) throw f;
              for (
                var c =
                    "undefined" != typeof BlobBuilder
                      ? BlobBuilder
                      : "undefined" != typeof MSBlobBuilder
                      ? MSBlobBuilder
                      : "undefined" != typeof MozBlobBuilder
                      ? MozBlobBuilder
                      : WebKitBlobBuilder,
                  d = new c(),
                  e = 0;
                e < a.length;
                e += 1
              )
                d.append(a[e]);
              return d.getBlob(b.type);
            }
          }

          function h(a, b) {
            b &&
              a.then(
                function (a) {
                  b(null, a);
                },
                function (a) {
                  b(a);
                }
              );
          }

          function i(a, b, c) {
            "function" == typeof b && a.then(b),
              "function" == typeof c && a.catch(c);
          }

          function j(a) {
            return (
              "string" != typeof a &&
                (console.warn(a + " used as a key, but it is not a string."),
                (a = String(a))),
              a
            );
          }

          function k() {
            if (
              arguments.length &&
              "function" == typeof arguments[arguments.length - 1]
            )
              return arguments[arguments.length - 1];
          }

          function l(a) {
            for (
              var b = a.length,
                c = new ArrayBuffer(b),
                d = new Uint8Array(c),
                e = 0;
              e < b;
              e++
            )
              d[e] = a.charCodeAt(e);
            return c;
          }

          function m(a) {
            return new va(function (b) {
              var c = a.transaction(wa, Ba),
                d = g([""]);
              c.objectStore(wa).put(d, "key"),
                (c.onabort = function (a) {
                  a.preventDefault(), a.stopPropagation(), b(!1);
                }),
                (c.oncomplete = function () {
                  var a = navigator.userAgent.match(/Chrome\/(\d+)/),
                    c = navigator.userAgent.match(/Edge\//);
                  b(c || !a || parseInt(a[1], 10) >= 43);
                });
            }).catch(function () {
              return !1;
            });
          }

          function n(a) {
            return "boolean" == typeof xa
              ? va.resolve(xa)
              : m(a).then(function (a) {
                  return (xa = a);
                });
          }

          function o(a) {
            var b = ya[a.name],
              c = {};
            (c.promise = new va(function (a, b) {
              (c.resolve = a), (c.reject = b);
            })),
              b.deferredOperations.push(c),
              b.dbReady
                ? (b.dbReady = b.dbReady.then(function () {
                    return c.promise;
                  }))
                : (b.dbReady = c.promise);
          }

          function p(a) {
            var b = ya[a.name],
              c = b.deferredOperations.pop();
            if (c) return c.resolve(), c.promise;
          }

          function q(a, b) {
            var c = ya[a.name],
              d = c.deferredOperations.pop();
            if (d) return d.reject(b), d.promise;
          }

          function r(a, b) {
            return new va(function (c, d) {
              if (((ya[a.name] = ya[a.name] || B()), a.db)) {
                if (!b) return c(a.db);
                o(a), a.db.close();
              }
              var e = [a.name];
              b && e.push(a.version);
              var f = ua.open.apply(ua, e);
              b &&
                (f.onupgradeneeded = function (b) {
                  var c = f.result;
                  try {
                    c.createObjectStore(a.storeName),
                      b.oldVersion <= 1 && c.createObjectStore(wa);
                  } catch (c) {
                    if ("ConstraintError" !== c.name) throw c;
                    console.warn(
                      'The database "' +
                        a.name +
                        '" has been upgraded from version ' +
                        b.oldVersion +
                        " to version " +
                        b.newVersion +
                        ', but the storage "' +
                        a.storeName +
                        '" already exists.'
                    );
                  }
                }),
                (f.onerror = function (a) {
                  a.preventDefault(), d(f.error);
                }),
                (f.onsuccess = function () {
                  c(f.result), p(a);
                });
            });
          }

          function s(a) {
            return r(a, !1);
          }

          function t(a) {
            return r(a, !0);
          }

          function u(a, b) {
            if (!a.db) return !0;
            var c = !a.db.objectStoreNames.contains(a.storeName),
              d = a.version < a.db.version,
              e = a.version > a.db.version;
            if (
              (d &&
                (a.version !== b &&
                  console.warn(
                    'The database "' +
                      a.name +
                      "\" can't be downgraded from version " +
                      a.db.version +
                      " to version " +
                      a.version +
                      "."
                  ),
                (a.version = a.db.version)),
              e || c)
            ) {
              if (c) {
                var f = a.db.version + 1;
                f > a.version && (a.version = f);
              }
              return !0;
            }
            return !1;
          }

          function v(a) {
            return new va(function (b, c) {
              var d = new FileReader();
              (d.onerror = c),
                (d.onloadend = function (c) {
                  var d = btoa(c.target.result || "");
                  b({ __local_forage_encoded_blob: !0, data: d, type: a.type });
                }),
                d.readAsBinaryString(a);
            });
          }

          function w(a) {
            return g([l(atob(a.data))], { type: a.type });
          }

          function x(a) {
            return a && a.__local_forage_encoded_blob;
          }

          function y(a) {
            var b = this,
              c = b._initReady().then(function () {
                var a = ya[b._dbInfo.name];
                if (a && a.dbReady) return a.dbReady;
              });
            return i(c, a, a), c;
          }

          function z(a) {
            o(a);
            for (var b = ya[a.name], c = b.forages, d = 0; d < c.length; d++) {
              var e = c[d];
              e._dbInfo.db && (e._dbInfo.db.close(), (e._dbInfo.db = null));
            }
            return (
              (a.db = null),
              s(a)
                .then(function (b) {
                  return (a.db = b), u(a) ? t(a) : b;
                })
                .then(function (d) {
                  a.db = b.db = d;
                  for (var e = 0; e < c.length; e++) c[e]._dbInfo.db = d;
                })
                .catch(function (b) {
                  throw (q(a, b), b);
                })
            );
          }

          function A(a, b, c, d) {
            void 0 === d && (d = 1);
            try {
              var e = a.db.transaction(a.storeName, b);
              c(null, e);
            } catch (e) {
              if (
                d > 0 &&
                (!a.db ||
                  "InvalidStateError" === e.name ||
                  "NotFoundError" === e.name)
              )
                return va
                  .resolve()
                  .then(function () {
                    if (
                      !a.db ||
                      ("NotFoundError" === e.name &&
                        !a.db.objectStoreNames.contains(a.storeName) &&
                        a.version <= a.db.version)
                    )
                      return a.db && (a.version = a.db.version + 1), t(a);
                  })
                  .then(function () {
                    return z(a).then(function () {
                      A(a, b, c, d - 1);
                    });
                  })
                  .catch(c);
              c(e);
            }
          }

          function B() {
            return {
              forages: [],
              db: null,
              dbReady: null,
              deferredOperations: [],
            };
          }

          function C(a) {
            function b() {
              return va.resolve();
            }

            var c = this,
              d = { db: null };
            if (a) for (var e in a) d[e] = a[e];
            var f = ya[d.name];
            f || ((f = B()), (ya[d.name] = f)),
              f.forages.push(c),
              c._initReady || ((c._initReady = c.ready), (c.ready = y));
            for (var g = [], h = 0; h < f.forages.length; h++) {
              var i = f.forages[h];
              i !== c && g.push(i._initReady().catch(b));
            }
            var j = f.forages.slice(0);
            return va
              .all(g)
              .then(function () {
                return (d.db = f.db), s(d);
              })
              .then(function (a) {
                return (d.db = a), u(d, c._defaultConfig.version) ? t(d) : a;
              })
              .then(function (a) {
                (d.db = f.db = a), (c._dbInfo = d);
                for (var b = 0; b < j.length; b++) {
                  var e = j[b];
                  e !== c &&
                    ((e._dbInfo.db = d.db), (e._dbInfo.version = d.version));
                }
              });
          }

          function D(a, b) {
            var c = this;
            a = j(a);
            var d = new va(function (b, d) {
              c.ready()
                .then(function () {
                  A(c._dbInfo, Aa, function (e, f) {
                    if (e) return d(e);
                    try {
                      var g = f.objectStore(c._dbInfo.storeName),
                        h = g.get(a);
                      (h.onsuccess = function () {
                        var a = h.result;
                        void 0 === a && (a = null), x(a) && (a = w(a)), b(a);
                      }),
                        (h.onerror = function () {
                          d(h.error);
                        });
                    } catch (a) {
                      d(a);
                    }
                  });
                })
                .catch(d);
            });
            return h(d, b), d;
          }

          function E(a, b) {
            var c = this,
              d = new va(function (b, d) {
                c.ready()
                  .then(function () {
                    A(c._dbInfo, Aa, function (e, f) {
                      if (e) return d(e);
                      try {
                        var g = f.objectStore(c._dbInfo.storeName),
                          h = g.openCursor(),
                          i = 1;
                        (h.onsuccess = function () {
                          var c = h.result;
                          if (c) {
                            var d = c.value;
                            x(d) && (d = w(d));
                            var e = a(d, c.key, i++);
                            void 0 !== e ? b(e) : c.continue();
                          } else b();
                        }),
                          (h.onerror = function () {
                            d(h.error);
                          });
                      } catch (a) {
                        d(a);
                      }
                    });
                  })
                  .catch(d);
              });
            return h(d, b), d;
          }

          function F(a, b, c) {
            var d = this;
            a = j(a);
            var e = new va(function (c, e) {
              var f;
              d.ready()
                .then(function () {
                  return (
                    (f = d._dbInfo),
                    "[object Blob]" === za.call(b)
                      ? n(f.db).then(function (a) {
                          return a ? b : v(b);
                        })
                      : b
                  );
                })
                .then(function (b) {
                  A(d._dbInfo, Ba, function (f, g) {
                    if (f) return e(f);
                    try {
                      var h = g.objectStore(d._dbInfo.storeName);
                      null === b && (b = void 0);
                      var i = h.put(b, a);
                      (g.oncomplete = function () {
                        void 0 === b && (b = null), c(b);
                      }),
                        (g.onabort = g.onerror =
                          function () {
                            var a = i.error ? i.error : i.transaction.error;
                            e(a);
                          });
                    } catch (a) {
                      e(a);
                    }
                  });
                })
                .catch(e);
            });
            return h(e, c), e;
          }

          function G(a, b) {
            var c = this;
            a = j(a);
            var d = new va(function (b, d) {
              c.ready()
                .then(function () {
                  A(c._dbInfo, Ba, function (e, f) {
                    if (e) return d(e);
                    try {
                      var g = f.objectStore(c._dbInfo.storeName),
                        h = g.delete(a);
                      (f.oncomplete = function () {
                        b();
                      }),
                        (f.onerror = function () {
                          d(h.error);
                        }),
                        (f.onabort = function () {
                          var a = h.error ? h.error : h.transaction.error;
                          d(a);
                        });
                    } catch (a) {
                      d(a);
                    }
                  });
                })
                .catch(d);
            });
            return h(d, b), d;
          }

          function H(a) {
            var b = this,
              c = new va(function (a, c) {
                b.ready()
                  .then(function () {
                    A(b._dbInfo, Ba, function (d, e) {
                      if (d) return c(d);
                      try {
                        var f = e.objectStore(b._dbInfo.storeName),
                          g = f.clear();
                        (e.oncomplete = function () {
                          a();
                        }),
                          (e.onabort = e.onerror =
                            function () {
                              var a = g.error ? g.error : g.transaction.error;
                              c(a);
                            });
                      } catch (a) {
                        c(a);
                      }
                    });
                  })
                  .catch(c);
              });
            return h(c, a), c;
          }

          function I(a) {
            var b = this,
              c = new va(function (a, c) {
                b.ready()
                  .then(function () {
                    A(b._dbInfo, Aa, function (d, e) {
                      if (d) return c(d);
                      try {
                        var f = e.objectStore(b._dbInfo.storeName),
                          g = f.count();
                        (g.onsuccess = function () {
                          a(g.result);
                        }),
                          (g.onerror = function () {
                            c(g.error);
                          });
                      } catch (a) {
                        c(a);
                      }
                    });
                  })
                  .catch(c);
              });
            return h(c, a), c;
          }

          function J(a, b) {
            var c = this,
              d = new va(function (b, d) {
                if (a < 0) return void b(null);
                c.ready()
                  .then(function () {
                    A(c._dbInfo, Aa, function (e, f) {
                      if (e) return d(e);
                      try {
                        var g = f.objectStore(c._dbInfo.storeName),
                          h = !1,
                          i = g.openKeyCursor();
                        (i.onsuccess = function () {
                          var c = i.result;
                          if (!c) return void b(null);
                          0 === a
                            ? b(c.key)
                            : h
                            ? b(c.key)
                            : ((h = !0), c.advance(a));
                        }),
                          (i.onerror = function () {
                            d(i.error);
                          });
                      } catch (a) {
                        d(a);
                      }
                    });
                  })
                  .catch(d);
              });
            return h(d, b), d;
          }

          function K(a) {
            var b = this,
              c = new va(function (a, c) {
                b.ready()
                  .then(function () {
                    A(b._dbInfo, Aa, function (d, e) {
                      if (d) return c(d);
                      try {
                        var f = e.objectStore(b._dbInfo.storeName),
                          g = f.openKeyCursor(),
                          h = [];
                        (g.onsuccess = function () {
                          var b = g.result;
                          if (!b) return void a(h);
                          h.push(b.key), b.continue();
                        }),
                          (g.onerror = function () {
                            c(g.error);
                          });
                      } catch (a) {
                        c(a);
                      }
                    });
                  })
                  .catch(c);
              });
            return h(c, a), c;
          }

          function L(a, b) {
            b = k.apply(this, arguments);
            var c = this.config();
            (a = ("function" != typeof a && a) || {}),
              a.name ||
                ((a.name = a.name || c.name),
                (a.storeName = a.storeName || c.storeName));
            var d,
              e = this;
            if (a.name) {
              var f = a.name === c.name && e._dbInfo.db,
                g = f
                  ? va.resolve(e._dbInfo.db)
                  : s(a).then(function (b) {
                      var c = ya[a.name],
                        d = c.forages;
                      c.db = b;
                      for (var e = 0; e < d.length; e++) d[e]._dbInfo.db = b;
                      return b;
                    });
              d = a.storeName
                ? g.then(function (b) {
                    if (b.objectStoreNames.contains(a.storeName)) {
                      var c = b.version + 1;
                      o(a);
                      var d = ya[a.name],
                        e = d.forages;
                      b.close();
                      for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        (g._dbInfo.db = null), (g._dbInfo.version = c);
                      }
                      return new va(function (b, d) {
                        var e = ua.open(a.name, c);
                        (e.onerror = function (a) {
                          e.result.close(), d(a);
                        }),
                          (e.onupgradeneeded = function () {
                            e.result.deleteObjectStore(a.storeName);
                          }),
                          (e.onsuccess = function () {
                            var a = e.result;
                            a.close(), b(a);
                          });
                      })
                        .then(function (a) {
                          d.db = a;
                          for (var b = 0; b < e.length; b++) {
                            var c = e[b];
                            (c._dbInfo.db = a), p(c._dbInfo);
                          }
                        })
                        .catch(function (b) {
                          throw (
                            ((q(a, b) || va.resolve()).catch(function () {}), b)
                          );
                        });
                    }
                  })
                : g.then(function (b) {
                    o(a);
                    var c = ya[a.name],
                      d = c.forages;
                    b.close();
                    for (var e = 0; e < d.length; e++) {
                      d[e]._dbInfo.db = null;
                    }
                    return new va(function (b, c) {
                      var d = ua.deleteDatabase(a.name);
                      (d.onerror = d.onblocked =
                        function (a) {
                          var b = d.result;
                          b && b.close(), c(a);
                        }),
                        (d.onsuccess = function () {
                          var a = d.result;
                          a && a.close(), b(a);
                        });
                    })
                      .then(function (a) {
                        c.db = a;
                        for (var b = 0; b < d.length; b++) p(d[b]._dbInfo);
                      })
                      .catch(function (b) {
                        throw (
                          ((q(a, b) || va.resolve()).catch(function () {}), b)
                        );
                      });
                  });
            } else d = va.reject("Invalid arguments");
            return h(d, b), d;
          }

          function M() {
            return "function" == typeof openDatabase;
          }

          function N(a) {
            var b,
              c,
              d,
              e,
              f,
              g = 0.75 * a.length,
              h = a.length,
              i = 0;
            "=" === a[a.length - 1] && (g--, "=" === a[a.length - 2] && g--);
            var j = new ArrayBuffer(g),
              k = new Uint8Array(j);
            for (b = 0; b < h; b += 4)
              (c = Da.indexOf(a[b])),
                (d = Da.indexOf(a[b + 1])),
                (e = Da.indexOf(a[b + 2])),
                (f = Da.indexOf(a[b + 3])),
                (k[i++] = (c << 2) | (d >> 4)),
                (k[i++] = ((15 & d) << 4) | (e >> 2)),
                (k[i++] = ((3 & e) << 6) | (63 & f));
            return j;
          }

          function O(a) {
            var b,
              c = new Uint8Array(a),
              d = "";
            for (b = 0; b < c.length; b += 3)
              (d += Da[c[b] >> 2]),
                (d += Da[((3 & c[b]) << 4) | (c[b + 1] >> 4)]),
                (d += Da[((15 & c[b + 1]) << 2) | (c[b + 2] >> 6)]),
                (d += Da[63 & c[b + 2]]);
            return (
              c.length % 3 == 2
                ? (d = d.substring(0, d.length - 1) + "=")
                : c.length % 3 == 1 &&
                  (d = d.substring(0, d.length - 2) + "=="),
              d
            );
          }

          function P(a, b) {
            var c = "";
            if (
              (a && (c = Ua.call(a)),
              a &&
                ("[object ArrayBuffer]" === c ||
                  (a.buffer && "[object ArrayBuffer]" === Ua.call(a.buffer))))
            ) {
              var d,
                e = Ga;
              a instanceof ArrayBuffer
                ? ((d = a), (e += Ia))
                : ((d = a.buffer),
                  "[object Int8Array]" === c
                    ? (e += Ka)
                    : "[object Uint8Array]" === c
                    ? (e += La)
                    : "[object Uint8ClampedArray]" === c
                    ? (e += Ma)
                    : "[object Int16Array]" === c
                    ? (e += Na)
                    : "[object Uint16Array]" === c
                    ? (e += Pa)
                    : "[object Int32Array]" === c
                    ? (e += Oa)
                    : "[object Uint32Array]" === c
                    ? (e += Qa)
                    : "[object Float32Array]" === c
                    ? (e += Ra)
                    : "[object Float64Array]" === c
                    ? (e += Sa)
                    : b(new Error("Failed to get type for BinaryArray"))),
                b(e + O(d));
            } else if ("[object Blob]" === c) {
              var f = new FileReader();
              (f.onload = function () {
                var c = Ea + a.type + "~" + O(this.result);
                b(Ga + Ja + c);
              }),
                f.readAsArrayBuffer(a);
            } else
              try {
                b(JSON.stringify(a));
              } catch (c) {
                console.error("Couldn't convert value into a JSON string: ", a),
                  b(null, c);
              }
          }

          function Q(a) {
            if (a.substring(0, Ha) !== Ga) return JSON.parse(a);
            var b,
              c = a.substring(Ta),
              d = a.substring(Ha, Ta);
            if (d === Ja && Fa.test(c)) {
              var e = c.match(Fa);
              (b = e[1]), (c = c.substring(e[0].length));
            }
            var f = N(c);
            switch (d) {
              case Ia:
                return f;
              case Ja:
                return g([f], { type: b });
              case Ka:
                return new Int8Array(f);
              case La:
                return new Uint8Array(f);
              case Ma:
                return new Uint8ClampedArray(f);
              case Na:
                return new Int16Array(f);
              case Pa:
                return new Uint16Array(f);
              case Oa:
                return new Int32Array(f);
              case Qa:
                return new Uint32Array(f);
              case Ra:
                return new Float32Array(f);
              case Sa:
                return new Float64Array(f);
              default:
                throw new Error("Unkown type: " + d);
            }
          }

          function R(a, b, c, d) {
            a.executeSql(
              "CREATE TABLE IF NOT EXISTS " +
                b.storeName +
                " (id INTEGER PRIMARY KEY, key unique, value)",
              [],
              c,
              d
            );
          }

          function S(a) {
            var b = this,
              c = { db: null };
            if (a)
              for (var d in a)
                c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
            var e = new va(function (a, d) {
              try {
                c.db = openDatabase(
                  c.name,
                  String(c.version),
                  c.description,
                  c.size
                );
              } catch (a) {
                return d(a);
              }
              c.db.transaction(function (e) {
                R(
                  e,
                  c,
                  function () {
                    (b._dbInfo = c), a();
                  },
                  function (a, b) {
                    d(b);
                  }
                );
              }, d);
            });
            return (c.serializer = Va), e;
          }

          function T(a, b, c, d, e, f) {
            a.executeSql(
              c,
              d,
              e,
              function (a, g) {
                g.code === g.SYNTAX_ERR
                  ? a.executeSql(
                      "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                      [b.storeName],
                      function (a, h) {
                        h.rows.length
                          ? f(a, g)
                          : R(
                              a,
                              b,
                              function () {
                                a.executeSql(c, d, e, f);
                              },
                              f
                            );
                      },
                      f
                    )
                  : f(a, g);
              },
              f
            );
          }

          function U(a, b) {
            var c = this;
            a = j(a);
            var d = new va(function (b, d) {
              c.ready()
                .then(function () {
                  var e = c._dbInfo;
                  e.db.transaction(function (c) {
                    T(
                      c,
                      e,
                      "SELECT * FROM " + e.storeName + " WHERE key = ? LIMIT 1",
                      [a],
                      function (a, c) {
                        var d = c.rows.length ? c.rows.item(0).value : null;
                        d && (d = e.serializer.deserialize(d)), b(d);
                      },
                      function (a, b) {
                        d(b);
                      }
                    );
                  });
                })
                .catch(d);
            });
            return h(d, b), d;
          }

          function V(a, b) {
            var c = this,
              d = new va(function (b, d) {
                c.ready()
                  .then(function () {
                    var e = c._dbInfo;
                    e.db.transaction(function (c) {
                      T(
                        c,
                        e,
                        "SELECT * FROM " + e.storeName,
                        [],
                        function (c, d) {
                          for (
                            var f = d.rows, g = f.length, h = 0;
                            h < g;
                            h++
                          ) {
                            var i = f.item(h),
                              j = i.value;
                            if (
                              (j && (j = e.serializer.deserialize(j)),
                              void 0 !== (j = a(j, i.key, h + 1)))
                            )
                              return void b(j);
                          }
                          b();
                        },
                        function (a, b) {
                          d(b);
                        }
                      );
                    });
                  })
                  .catch(d);
              });
            return h(d, b), d;
          }

          function W(a, b, c, d) {
            var e = this;
            a = j(a);
            var f = new va(function (f, g) {
              e.ready()
                .then(function () {
                  void 0 === b && (b = null);
                  var h = b,
                    i = e._dbInfo;
                  i.serializer.serialize(b, function (b, j) {
                    j
                      ? g(j)
                      : i.db.transaction(
                          function (c) {
                            T(
                              c,
                              i,
                              "INSERT OR REPLACE INTO " +
                                i.storeName +
                                " (key, value) VALUES (?, ?)",
                              [a, b],
                              function () {
                                f(h);
                              },
                              function (a, b) {
                                g(b);
                              }
                            );
                          },
                          function (b) {
                            if (b.code === b.QUOTA_ERR) {
                              if (d > 0)
                                return void f(W.apply(e, [a, h, c, d - 1]));
                              g(b);
                            }
                          }
                        );
                  });
                })
                .catch(g);
            });
            return h(f, c), f;
          }

          function X(a, b, c) {
            return W.apply(this, [a, b, c, 1]);
          }

          function Y(a, b) {
            var c = this;
            a = j(a);
            var d = new va(function (b, d) {
              c.ready()
                .then(function () {
                  var e = c._dbInfo;
                  e.db.transaction(function (c) {
                    T(
                      c,
                      e,
                      "DELETE FROM " + e.storeName + " WHERE key = ?",
                      [a],
                      function () {
                        b();
                      },
                      function (a, b) {
                        d(b);
                      }
                    );
                  });
                })
                .catch(d);
            });
            return h(d, b), d;
          }

          function Z(a) {
            var b = this,
              c = new va(function (a, c) {
                b.ready()
                  .then(function () {
                    var d = b._dbInfo;
                    d.db.transaction(function (b) {
                      T(
                        b,
                        d,
                        "DELETE FROM " + d.storeName,
                        [],
                        function () {
                          a();
                        },
                        function (a, b) {
                          c(b);
                        }
                      );
                    });
                  })
                  .catch(c);
              });
            return h(c, a), c;
          }

          function $(a) {
            var b = this,
              c = new va(function (a, c) {
                b.ready()
                  .then(function () {
                    var d = b._dbInfo;
                    d.db.transaction(function (b) {
                      T(
                        b,
                        d,
                        "SELECT COUNT(key) as c FROM " + d.storeName,
                        [],
                        function (b, c) {
                          var d = c.rows.item(0).c;
                          a(d);
                        },
                        function (a, b) {
                          c(b);
                        }
                      );
                    });
                  })
                  .catch(c);
              });
            return h(c, a), c;
          }

          function _(a, b) {
            var c = this,
              d = new va(function (b, d) {
                c.ready()
                  .then(function () {
                    var e = c._dbInfo;
                    e.db.transaction(function (c) {
                      T(
                        c,
                        e,
                        "SELECT key FROM " +
                          e.storeName +
                          " WHERE id = ? LIMIT 1",
                        [a + 1],
                        function (a, c) {
                          var d = c.rows.length ? c.rows.item(0).key : null;
                          b(d);
                        },
                        function (a, b) {
                          d(b);
                        }
                      );
                    });
                  })
                  .catch(d);
              });
            return h(d, b), d;
          }

          function aa(a) {
            var b = this,
              c = new va(function (a, c) {
                b.ready()
                  .then(function () {
                    var d = b._dbInfo;
                    d.db.transaction(function (b) {
                      T(
                        b,
                        d,
                        "SELECT key FROM " + d.storeName,
                        [],
                        function (b, c) {
                          for (var d = [], e = 0; e < c.rows.length; e++)
                            d.push(c.rows.item(e).key);
                          a(d);
                        },
                        function (a, b) {
                          c(b);
                        }
                      );
                    });
                  })
                  .catch(c);
              });
            return h(c, a), c;
          }

          function ba(a) {
            return new va(function (b, c) {
              a.transaction(
                function (d) {
                  d.executeSql(
                    "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                    [],
                    function (c, d) {
                      for (var e = [], f = 0; f < d.rows.length; f++)
                        e.push(d.rows.item(f).name);
                      b({ db: a, storeNames: e });
                    },
                    function (a, b) {
                      c(b);
                    }
                  );
                },
                function (a) {
                  c(a);
                }
              );
            });
          }

          function ca(a, b) {
            b = k.apply(this, arguments);
            var c = this.config();
            (a = ("function" != typeof a && a) || {}),
              a.name ||
                ((a.name = a.name || c.name),
                (a.storeName = a.storeName || c.storeName));
            var d,
              e = this;
            return (
              (d = a.name
                ? new va(function (b) {
                    var d;
                    (d =
                      a.name === c.name
                        ? e._dbInfo.db
                        : openDatabase(a.name, "", "", 0)),
                      b(
                        a.storeName
                          ? {
                              db: d,
                              storeNames: [a.storeName],
                            }
                          : ba(d)
                      );
                  }).then(function (a) {
                    return new va(function (b, c) {
                      a.db.transaction(
                        function (d) {
                          function e(a) {
                            return new va(function (b, c) {
                              d.executeSql(
                                "DROP TABLE IF EXISTS " + a,
                                [],
                                function () {
                                  b();
                                },
                                function (a, b) {
                                  c(b);
                                }
                              );
                            });
                          }

                          for (
                            var f = [], g = 0, h = a.storeNames.length;
                            g < h;
                            g++
                          )
                            f.push(e(a.storeNames[g]));
                          va.all(f)
                            .then(function () {
                              b();
                            })
                            .catch(function (a) {
                              c(a);
                            });
                        },
                        function (a) {
                          c(a);
                        }
                      );
                    });
                  })
                : va.reject("Invalid arguments")),
              h(d, b),
              d
            );
          }

          function da() {
            try {
              return (
                "undefined" != typeof localStorage &&
                "setItem" in localStorage &&
                !!localStorage.setItem
              );
            } catch (a) {
              return !1;
            }
          }

          function ea(a, b) {
            var c = a.name + "/";
            return a.storeName !== b.storeName && (c += a.storeName + "/"), c;
          }

          function fa() {
            var a = "_localforage_support_test";
            try {
              return (
                localStorage.setItem(a, !0), localStorage.removeItem(a), !1
              );
            } catch (a) {
              return !0;
            }
          }

          function ga() {
            return !fa() || localStorage.length > 0;
          }

          function ha(a) {
            var b = this,
              c = {};
            if (a) for (var d in a) c[d] = a[d];
            return (
              (c.keyPrefix = ea(a, b._defaultConfig)),
              ga()
                ? ((b._dbInfo = c), (c.serializer = Va), va.resolve())
                : va.reject()
            );
          }

          function ia(a) {
            var b = this,
              c = b.ready().then(function () {
                for (
                  var a = b._dbInfo.keyPrefix, c = localStorage.length - 1;
                  c >= 0;
                  c--
                ) {
                  var d = localStorage.key(c);
                  0 === d.indexOf(a) && localStorage.removeItem(d);
                }
              });
            return h(c, a), c;
          }

          function ja(a, b) {
            var c = this;
            a = j(a);
            var d = c.ready().then(function () {
              var b = c._dbInfo,
                d = localStorage.getItem(b.keyPrefix + a);
              return d && (d = b.serializer.deserialize(d)), d;
            });
            return h(d, b), d;
          }

          function ka(a, b) {
            var c = this,
              d = c.ready().then(function () {
                for (
                  var b = c._dbInfo,
                    d = b.keyPrefix,
                    e = d.length,
                    f = localStorage.length,
                    g = 1,
                    h = 0;
                  h < f;
                  h++
                ) {
                  var i = localStorage.key(h);
                  if (0 === i.indexOf(d)) {
                    var j = localStorage.getItem(i);
                    if (
                      (j && (j = b.serializer.deserialize(j)),
                      void 0 !== (j = a(j, i.substring(e), g++)))
                    )
                      return j;
                  }
                }
              });
            return h(d, b), d;
          }

          function la(a, b) {
            var c = this,
              d = c.ready().then(function () {
                var b,
                  d = c._dbInfo;
                try {
                  b = localStorage.key(a);
                } catch (a) {
                  b = null;
                }
                return b && (b = b.substring(d.keyPrefix.length)), b;
              });
            return h(d, b), d;
          }

          function ma(a) {
            var b = this,
              c = b.ready().then(function () {
                for (
                  var a = b._dbInfo, c = localStorage.length, d = [], e = 0;
                  e < c;
                  e++
                ) {
                  var f = localStorage.key(e);
                  0 === f.indexOf(a.keyPrefix) &&
                    d.push(f.substring(a.keyPrefix.length));
                }
                return d;
              });
            return h(c, a), c;
          }

          function na(a) {
            var b = this,
              c = b.keys().then(function (a) {
                return a.length;
              });
            return h(c, a), c;
          }

          function oa(a, b) {
            var c = this;
            a = j(a);
            var d = c.ready().then(function () {
              var b = c._dbInfo;
              localStorage.removeItem(b.keyPrefix + a);
            });
            return h(d, b), d;
          }

          function pa(a, b, c) {
            var d = this;
            a = j(a);
            var e = d.ready().then(function () {
              void 0 === b && (b = null);
              var c = b;
              return new va(function (e, f) {
                var g = d._dbInfo;
                g.serializer.serialize(b, function (b, d) {
                  if (d) f(d);
                  else
                    try {
                      localStorage.setItem(g.keyPrefix + a, b), e(c);
                    } catch (a) {
                      ("QuotaExceededError" !== a.name &&
                        "NS_ERROR_DOM_QUOTA_REACHED" !== a.name) ||
                        f(a),
                        f(a);
                    }
                });
              });
            });
            return h(e, c), e;
          }

          function qa(a, b) {
            if (
              ((b = k.apply(this, arguments)),
              (a = ("function" != typeof a && a) || {}),
              !a.name)
            ) {
              var c = this.config();
              (a.name = a.name || c.name),
                (a.storeName = a.storeName || c.storeName);
            }
            var d,
              e = this;
            return (
              (d = a.name
                ? new va(function (b) {
                    b(a.storeName ? ea(a, e._defaultConfig) : a.name + "/");
                  }).then(function (a) {
                    for (var b = localStorage.length - 1; b >= 0; b--) {
                      var c = localStorage.key(b);
                      0 === c.indexOf(a) && localStorage.removeItem(c);
                    }
                  })
                : va.reject("Invalid arguments")),
              h(d, b),
              d
            );
          }

          function ra(a, b) {
            a[b] = function () {
              var c = arguments;
              return a.ready().then(function () {
                return a[b].apply(a, c);
              });
            };
          }

          function sa() {
            for (var a = 1; a < arguments.length; a++) {
              var b = arguments[a];
              if (b)
                for (var c in b)
                  b.hasOwnProperty(c) &&
                    ($a(b[c])
                      ? (arguments[0][c] = b[c].slice())
                      : (arguments[0][c] = b[c]));
            }
            return arguments[0];
          }

          var ta =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      "function" == typeof Symbol &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  },
            ua = e();
          "undefined" == typeof Promise && a(3);
          var va = Promise,
            wa = "local-forage-detect-blob-support",
            xa = void 0,
            ya = {},
            za = Object.prototype.toString,
            Aa = "readonly",
            Ba = "readwrite",
            Ca = {
              _driver: "asyncStorage",
              _initStorage: C,
              _support: f(),
              iterate: E,
              getItem: D,
              setItem: F,
              removeItem: G,
              clear: H,
              length: I,
              key: J,
              keys: K,
              dropInstance: L,
            },
            Da =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            Ea = "~~local_forage_type~",
            Fa = /^~~local_forage_type~([^~]+)~/,
            Ga = "__lfsc__:",
            Ha = Ga.length,
            Ia = "arbf",
            Ja = "blob",
            Ka = "si08",
            La = "ui08",
            Ma = "uic8",
            Na = "si16",
            Oa = "si32",
            Pa = "ur16",
            Qa = "ui32",
            Ra = "fl32",
            Sa = "fl64",
            Ta = Ha + Ia.length,
            Ua = Object.prototype.toString,
            Va = {
              serialize: P,
              deserialize: Q,
              stringToBuffer: N,
              bufferToString: O,
            },
            Wa = {
              _driver: "webSQLStorage",
              _initStorage: S,
              _support: M(),
              iterate: V,
              getItem: U,
              setItem: X,
              removeItem: Y,
              clear: Z,
              length: $,
              key: _,
              keys: aa,
              dropInstance: ca,
            },
            Xa = {
              _driver: "localStorageWrapper",
              _initStorage: ha,
              _support: da(),
              iterate: ka,
              getItem: ja,
              setItem: pa,
              removeItem: oa,
              clear: ia,
              length: na,
              key: la,
              keys: ma,
              dropInstance: qa,
            },
            Ya = function (a, b) {
              return (
                a === b ||
                ("number" == typeof a &&
                  "number" == typeof b &&
                  isNaN(a) &&
                  isNaN(b))
              );
            },
            Za = function (a, b) {
              for (var c = a.length, d = 0; d < c; ) {
                if (Ya(a[d], b)) return !0;
                d++;
              }
              return !1;
            },
            $a =
              Array.isArray ||
              function (a) {
                return "[object Array]" === Object.prototype.toString.call(a);
              },
            _a = {},
            ab = {},
            bb = { INDEXEDDB: Ca, WEBSQL: Wa, LOCALSTORAGE: Xa },
            cb = [
              bb.INDEXEDDB._driver,
              bb.WEBSQL._driver,
              bb.LOCALSTORAGE._driver,
            ],
            db = ["dropInstance"],
            eb = [
              "clear",
              "getItem",
              "iterate",
              "key",
              "keys",
              "length",
              "removeItem",
              "setItem",
            ].concat(db),
            fb = {
              description: "",
              driver: cb.slice(),
              name: "localforage",
              size: 4980736,
              storeName: "keyvaluepairs",
              version: 1,
            },
            gb = (function () {
              function a(b) {
                d(this, a);
                for (var c in bb)
                  if (bb.hasOwnProperty(c)) {
                    var e = bb[c],
                      f = e._driver;
                    (this[c] = f), _a[f] || this.defineDriver(e);
                  }
                (this._defaultConfig = sa({}, fb)),
                  (this._config = sa({}, this._defaultConfig, b)),
                  (this._driverSet = null),
                  (this._initDriver = null),
                  (this._ready = !1),
                  (this._dbInfo = null),
                  this._wrapLibraryMethodsWithReady(),
                  this.setDriver(this._config.driver).catch(function () {});
              }

              return (
                (a.prototype.config = function (a) {
                  if ("object" === (void 0 === a ? "undefined" : ta(a))) {
                    if (this._ready)
                      return new Error(
                        "Can't call config() after localforage has been used."
                      );
                    for (var b in a) {
                      if (
                        ("storeName" === b && (a[b] = a[b].replace(/\W/g, "_")),
                        "version" === b && "number" != typeof a[b])
                      )
                        return new Error("Database version must be a number.");
                      this._config[b] = a[b];
                    }
                    return (
                      !("driver" in a && a.driver) ||
                      this.setDriver(this._config.driver)
                    );
                  }
                  return "string" == typeof a ? this._config[a] : this._config;
                }),
                (a.prototype.defineDriver = function (a, b, c) {
                  var d = new va(function (b, c) {
                    try {
                      var d = a._driver,
                        e = new Error(
                          "Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"
                        );
                      if (!a._driver) return void c(e);
                      for (
                        var f = eb.concat("_initStorage"), g = 0, i = f.length;
                        g < i;
                        g++
                      ) {
                        var j = f[g];
                        if ((!Za(db, j) || a[j]) && "function" != typeof a[j])
                          return void c(e);
                      }
                      (function () {
                        for (
                          var b = function (a) {
                              return function () {
                                var b = new Error(
                                    "Method " +
                                      a +
                                      " is not implemented by the current driver"
                                  ),
                                  c = va.reject(b);
                                return h(c, arguments[arguments.length - 1]), c;
                              };
                            },
                            c = 0,
                            d = db.length;
                          c < d;
                          c++
                        ) {
                          var e = db[c];
                          a[e] || (a[e] = b(e));
                        }
                      })();
                      var k = function (c) {
                        _a[d] &&
                          console.info("Redefining LocalForage driver: " + d),
                          (_a[d] = a),
                          (ab[d] = c),
                          b();
                      };
                      "_support" in a
                        ? a._support && "function" == typeof a._support
                          ? a._support().then(k, c)
                          : k(!!a._support)
                        : k(!0);
                    } catch (a) {
                      c(a);
                    }
                  });
                  return i(d, b, c), d;
                }),
                (a.prototype.driver = function () {
                  return this._driver || null;
                }),
                (a.prototype.getDriver = function (a, b, c) {
                  var d = _a[a]
                    ? va.resolve(_a[a])
                    : va.reject(new Error("Driver not found."));
                  return i(d, b, c), d;
                }),
                (a.prototype.getSerializer = function (a) {
                  var b = va.resolve(Va);
                  return i(b, a), b;
                }),
                (a.prototype.ready = function (a) {
                  var b = this,
                    c = b._driverSet.then(function () {
                      return (
                        null === b._ready && (b._ready = b._initDriver()),
                        b._ready
                      );
                    });
                  return i(c, a, a), c;
                }),
                (a.prototype.setDriver = function (a, b, c) {
                  function d() {
                    g._config.driver = g.driver();
                  }

                  function e(a) {
                    return (
                      g._extend(a),
                      d(),
                      (g._ready = g._initStorage(g._config)),
                      g._ready
                    );
                  }

                  function f(a) {
                    return function () {
                      function b() {
                        for (; c < a.length; ) {
                          var f = a[c];
                          return (
                            c++,
                            (g._dbInfo = null),
                            (g._ready = null),
                            g.getDriver(f).then(e).catch(b)
                          );
                        }
                        d();
                        var h = new Error("No available storage method found.");
                        return (g._driverSet = va.reject(h)), g._driverSet;
                      }

                      var c = 0;
                      return b();
                    };
                  }

                  var g = this;
                  $a(a) || (a = [a]);
                  var h = this._getSupportedDrivers(a),
                    j =
                      null !== this._driverSet
                        ? this._driverSet.catch(function () {
                            return va.resolve();
                          })
                        : va.resolve();
                  return (
                    (this._driverSet = j
                      .then(function () {
                        var a = h[0];
                        return (
                          (g._dbInfo = null),
                          (g._ready = null),
                          g.getDriver(a).then(function (a) {
                            (g._driver = a._driver),
                              d(),
                              g._wrapLibraryMethodsWithReady(),
                              (g._initDriver = f(h));
                          })
                        );
                      })
                      .catch(function () {
                        d();
                        var a = new Error("No available storage method found.");
                        return (g._driverSet = va.reject(a)), g._driverSet;
                      })),
                    i(this._driverSet, b, c),
                    this._driverSet
                  );
                }),
                (a.prototype.supports = function (a) {
                  return !!ab[a];
                }),
                (a.prototype._extend = function (a) {
                  sa(this, a);
                }),
                (a.prototype._getSupportedDrivers = function (a) {
                  for (var b = [], c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    this.supports(e) && b.push(e);
                  }
                  return b;
                }),
                (a.prototype._wrapLibraryMethodsWithReady = function () {
                  for (var a = 0, b = eb.length; a < b; a++) ra(this, eb[a]);
                }),
                (a.prototype.createInstance = function (b) {
                  return new a(b);
                }),
                a
              );
            })(),
            hb = new gb();
          b.exports = hb;
        },
        { 3: 3 },
      ],
    },
    {},
    [4]
  )(4);
});
!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((e = e || self).mitt = n());
})(this, function () {
  return function (e) {
    return {
      all: (e = e || new Map()),
      on: function (n, t) {
        var f = e.get(n);
        f ? f.push(t) : e.set(n, [t]);
      },
      off: function (n, t) {
        var f = e.get(n);
        f && (t ? f.splice(f.indexOf(t) >>> 0, 1) : e.set(n, []));
      },
      emit: function (n, t) {
        var f = e.get(n);
        f &&
          f.slice().map(function (e) {
            e(t);
          }),
          (f = e.get("*")) &&
            f.slice().map(function (e) {
              e(n, t);
            });
      },
    };
  };
});
//# sourceMappingURL=mitt.umd.js.map

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("react"), require("react-dom"))
    : "function" == typeof define && define.amd
    ? define(["exports", "react", "react-dom"], t)
    : t(((e = e || self).ReactTransitionGroup = {}), e.React, e.ReactDOM);
})(this, function (e, t, n) {
  "use strict";
  var r = "default" in t ? t.default : t;

  function o() {
    return (o =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }

  function i(e, t) {
    if (null == e) return {};
    var n,
      r,
      o = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++)
      (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o;
  }

  function a(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }

  function s(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
  }

  n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  var c = "function" == typeof Symbol && Symbol.for,
    l = c ? Symbol.for("react.element") : 60103,
    u = c ? Symbol.for("react.portal") : 60106,
    p = c ? Symbol.for("react.fragment") : 60107,
    d = c ? Symbol.for("react.strict_mode") : 60108,
    f = c ? Symbol.for("react.profiler") : 60114,
    h = c ? Symbol.for("react.provider") : 60109,
    m = c ? Symbol.for("react.context") : 60110,
    E = c ? Symbol.for("react.async_mode") : 60111,
    y = c ? Symbol.for("react.concurrent_mode") : 60111,
    x = c ? Symbol.for("react.forward_ref") : 60112,
    v = c ? Symbol.for("react.suspense") : 60113,
    g = c ? Symbol.for("react.suspense_list") : 60120,
    b = c ? Symbol.for("react.memo") : 60115,
    C = c ? Symbol.for("react.lazy") : 60116,
    S = c ? Symbol.for("react.block") : 60121,
    O = c ? Symbol.for("react.fundamental") : 60117,
    N = c ? Symbol.for("react.responder") : 60118,
    T = c ? Symbol.for("react.scope") : 60119;

  function k(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case l:
          switch ((e = e.type)) {
            case E:
            case y:
            case p:
            case f:
            case d:
            case v:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case m:
                case x:
                case C:
                case b:
                case h:
                  return e;
                default:
                  return t;
              }
          }
        case u:
          return t;
      }
    }
  }

  function P(e) {
    return k(e) === y;
  }

  var w = {
      AsyncMode: E,
      ConcurrentMode: y,
      ContextConsumer: m,
      ContextProvider: h,
      Element: l,
      ForwardRef: x,
      Fragment: p,
      Lazy: C,
      Memo: b,
      Portal: u,
      Profiler: f,
      StrictMode: d,
      Suspense: v,
      isAsyncMode: function (e) {
        return P(e) || k(e) === E;
      },
      isConcurrentMode: P,
      isContextConsumer: function (e) {
        return k(e) === m;
      },
      isContextProvider: function (e) {
        return k(e) === h;
      },
      isElement: function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === l;
      },
      isForwardRef: function (e) {
        return k(e) === x;
      },
      isFragment: function (e) {
        return k(e) === p;
      },
      isLazy: function (e) {
        return k(e) === C;
      },
      isMemo: function (e) {
        return k(e) === b;
      },
      isPortal: function (e) {
        return k(e) === u;
      },
      isProfiler: function (e) {
        return k(e) === f;
      },
      isStrictMode: function (e) {
        return k(e) === d;
      },
      isSuspense: function (e) {
        return k(e) === v;
      },
      isValidElementType: function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === p ||
          e === y ||
          e === f ||
          e === d ||
          e === v ||
          e === g ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === C ||
              e.$$typeof === b ||
              e.$$typeof === h ||
              e.$$typeof === m ||
              e.$$typeof === x ||
              e.$$typeof === O ||
              e.$$typeof === N ||
              e.$$typeof === T ||
              e.$$typeof === S))
        );
      },
      typeOf: k,
    },
    j = s(function (e, t) {}),
    M =
      (j.AsyncMode,
      j.ConcurrentMode,
      j.ContextConsumer,
      j.ContextProvider,
      j.Element,
      j.ForwardRef,
      j.Fragment,
      j.Lazy,
      j.Memo,
      j.Portal,
      j.Profiler,
      j.StrictMode,
      j.Suspense,
      j.isAsyncMode,
      j.isConcurrentMode,
      j.isContextConsumer,
      j.isContextProvider,
      j.isElement,
      j.isForwardRef,
      j.isFragment,
      j.isLazy,
      j.isMemo,
      j.isPortal,
      j.isProfiler,
      j.isStrictMode,
      j.isSuspense,
      j.isValidElementType,
      j.typeOf,
      s(function (e) {
        e.exports = w;
      }),
      Object.getOwnPropertySymbols),
    R = Object.prototype.hasOwnProperty,
    $ = Object.prototype.propertyIsEnumerable;

  function A(e) {
    if (null == e)
      throw new TypeError(
        "Object.assign cannot be called with null or undefined"
      );
    return Object(e);
  }

  (function () {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e];
          })
          .join("")
      )
        return !1;
      var r = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (e) {
          r[e] = e;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      );
    } catch (e) {
      return !1;
    }
  })() && Object.assign,
    Function.call.bind(Object.prototype.hasOwnProperty);

  function L() {}

  function _() {}

  _.resetWarningCache = L;
  var D = s(function (e) {
    e.exports = (function () {
      function e(e, t, n, r, o, i) {
        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
          var a = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((a.name = "Invariant Violation"), a);
        }
      }

      function t() {
        return e;
      }

      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: _,
        resetWarningCache: L,
      };
      return (n.PropTypes = n), n;
    })();
  });
  D.object, D.oneOfType, D.element, D.bool, D.func;

  function F(e, t) {
    return e
      .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
      .replace(/\s+/g, " ")
      .replace(/^\s*|\s*$/g, "");
  }

  var V = { disabled: !1 },
    I = r.createContext(null),
    U = "entering",
    q = "entered",
    z = (function (e) {
      function t(t, n) {
        var r;
        r = e.call(this, t, n) || this;
        var o,
          i = n && !n.isMounting ? t.enter : t.appear;
        return (
          (r.appearStatus = null),
          t.in
            ? i
              ? ((o = "exited"), (r.appearStatus = U))
              : (o = q)
            : (o = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited"),
          (r.state = { status: o }),
          (r.nextCallback = null),
          r
        );
      }

      a(t, e),
        (t.getDerivedStateFromProps = function (e, t) {
          return e.in && "unmounted" === t.status ? { status: "exited" } : null;
        });
      var o = t.prototype;
      return (
        (o.componentDidMount = function () {
          this.updateStatus(!0, this.appearStatus);
        }),
        (o.componentDidUpdate = function (e) {
          var t = null;
          if (e !== this.props) {
            var n = this.state.status;
            this.props.in
              ? n !== U && n !== q && (t = U)
              : (n !== U && n !== q) || (t = "exiting");
          }
          this.updateStatus(!1, t);
        }),
        (o.componentWillUnmount = function () {
          this.cancelNextCallback();
        }),
        (o.getTimeouts = function () {
          var e,
            t,
            n,
            r = this.props.timeout;
          return (
            (e = t = n = r),
            null != r &&
              "number" != typeof r &&
              ((e = r.exit),
              (t = r.enter),
              (n = void 0 !== r.appear ? r.appear : t)),
            {
              exit: e,
              enter: t,
              appear: n,
            }
          );
        }),
        (o.updateStatus = function (e, t) {
          void 0 === e && (e = !1),
            null !== t
              ? (this.cancelNextCallback(),
                t === U ? this.performEnter(e) : this.performExit())
              : this.props.unmountOnExit &&
                "exited" === this.state.status &&
                this.setState({ status: "unmounted" });
        }),
        (o.performEnter = function (e) {
          var t = this,
            r = this.props.enter,
            o = this.context ? this.context.isMounting : e,
            i = this.props.nodeRef ? [o] : [n.findDOMNode(this), o],
            a = i[0],
            s = i[1],
            c = this.getTimeouts(),
            l = o ? c.appear : c.enter;
          (!e && !r) || V.disabled
            ? this.safeSetState({ status: q }, function () {
                t.props.onEntered(a);
              })
            : (this.props.onEnter(a, s),
              this.safeSetState({ status: U }, function () {
                t.props.onEntering(a, s),
                  t.onTransitionEnd(l, function () {
                    t.safeSetState({ status: q }, function () {
                      t.props.onEntered(a, s);
                    });
                  });
              }));
        }),
        (o.performExit = function () {
          var e = this,
            t = this.props.exit,
            r = this.getTimeouts(),
            o = this.props.nodeRef ? void 0 : n.findDOMNode(this);
          t && !V.disabled
            ? (this.props.onExit(o),
              this.safeSetState({ status: "exiting" }, function () {
                e.props.onExiting(o),
                  e.onTransitionEnd(r.exit, function () {
                    e.safeSetState({ status: "exited" }, function () {
                      e.props.onExited(o);
                    });
                  });
              }))
            : this.safeSetState({ status: "exited" }, function () {
                e.props.onExited(o);
              });
        }),
        (o.cancelNextCallback = function () {
          null !== this.nextCallback &&
            (this.nextCallback.cancel(), (this.nextCallback = null));
        }),
        (o.safeSetState = function (e, t) {
          (t = this.setNextCallback(t)), this.setState(e, t);
        }),
        (o.setNextCallback = function (e) {
          var t = this,
            n = !0;
          return (
            (this.nextCallback = function (r) {
              n && ((n = !1), (t.nextCallback = null), e(r));
            }),
            (this.nextCallback.cancel = function () {
              n = !1;
            }),
            this.nextCallback
          );
        }),
        (o.onTransitionEnd = function (e, t) {
          this.setNextCallback(t);
          var r = this.props.nodeRef
              ? this.props.nodeRef.current
              : n.findDOMNode(this),
            o = null == e && !this.props.addEndListener;
          if (r && !o) {
            if (this.props.addEndListener) {
              var i = this.props.nodeRef
                  ? [this.nextCallback]
                  : [r, this.nextCallback],
                a = i[0],
                s = i[1];
              this.props.addEndListener(a, s);
            }
            null != e && setTimeout(this.nextCallback, e);
          } else setTimeout(this.nextCallback, 0);
        }),
        (o.render = function () {
          var e = this.state.status;
          if ("unmounted" === e) return null;
          var t = this.props,
            n = t.children,
            o =
              (t.in,
              t.mountOnEnter,
              t.unmountOnExit,
              t.appear,
              t.enter,
              t.exit,
              t.timeout,
              t.addEndListener,
              t.onEnter,
              t.onEntering,
              t.onEntered,
              t.onExit,
              t.onExiting,
              t.onExited,
              t.nodeRef,
              i(t, [
                "children",
                "in",
                "mountOnEnter",
                "unmountOnExit",
                "appear",
                "enter",
                "exit",
                "timeout",
                "addEndListener",
                "onEnter",
                "onEntering",
                "onEntered",
                "onExit",
                "onExiting",
                "onExited",
                "nodeRef",
              ]));
          return r.createElement(
            I.Provider,
            { value: null },
            "function" == typeof n
              ? n(e, o)
              : r.cloneElement(r.Children.only(n), o)
          );
        }),
        t
      );
    })(r.Component);

  function W() {}

  (z.contextType = I),
    (z.propTypes = {}),
    (z.defaultProps = {
      in: !1,
      mountOnEnter: !1,
      unmountOnExit: !1,
      appear: !1,
      enter: !0,
      exit: !0,
      onEnter: W,
      onEntering: W,
      onEntered: W,
      onExit: W,
      onExiting: W,
      onExited: W,
    }),
    (z.UNMOUNTED = "unmounted"),
    (z.EXITED = "exited"),
    (z.ENTERING = U),
    (z.ENTERED = q),
    (z.EXITING = "exiting");
  var G = function (e, t) {
      return (
        e &&
        t &&
        t.split(" ").forEach(function (t) {
          return (
            (r = t),
            void ((n = e).classList
              ? n.classList.add(r)
              : (function (e, t) {
                  return e.classList
                    ? !!t && e.classList.contains(t)
                    : -1 !==
                        (
                          " " +
                          (e.className.baseVal || e.className) +
                          " "
                        ).indexOf(" " + t + " ");
                })(n, r) ||
                ("string" == typeof n.className
                  ? (n.className = n.className + " " + r)
                  : n.setAttribute(
                      "class",
                      ((n.className && n.className.baseVal) || "") + " " + r
                    )))
          );
          var n, r;
        })
      );
    },
    X = function (e, t) {
      return (
        e &&
        t &&
        t.split(" ").forEach(function (t) {
          return (
            (r = t),
            void ((n = e).classList
              ? n.classList.remove(r)
              : "string" == typeof n.className
              ? (n.className = F(n.className, r))
              : n.setAttribute(
                  "class",
                  F((n.className && n.className.baseVal) || "", r)
                ))
          );
          var n, r;
        })
      );
    },
    B = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
            appear: {},
            enter: {},
            exit: {},
          }),
          (t.onEnter = function (e, n) {
            var r = t.resolveArguments(e, n),
              o = r[0],
              i = r[1];
            t.removeClasses(o, "exit"),
              t.addClass(o, i ? "appear" : "enter", "base"),
              t.props.onEnter && t.props.onEnter(e, n);
          }),
          (t.onEntering = function (e, n) {
            var r = t.resolveArguments(e, n),
              o = r[0],
              i = r[1] ? "appear" : "enter";
            t.addClass(o, i, "active"),
              t.props.onEntering && t.props.onEntering(e, n);
          }),
          (t.onEntered = function (e, n) {
            var r = t.resolveArguments(e, n),
              o = r[0],
              i = r[1] ? "appear" : "enter";
            t.removeClasses(o, i),
              t.addClass(o, i, "done"),
              t.props.onEntered && t.props.onEntered(e, n);
          }),
          (t.onExit = function (e) {
            var n = t.resolveArguments(e)[0];
            t.removeClasses(n, "appear"),
              t.removeClasses(n, "enter"),
              t.addClass(n, "exit", "base"),
              t.props.onExit && t.props.onExit(e);
          }),
          (t.onExiting = function (e) {
            var n = t.resolveArguments(e)[0];
            t.addClass(n, "exit", "active"),
              t.props.onExiting && t.props.onExiting(e);
          }),
          (t.onExited = function (e) {
            var n = t.resolveArguments(e)[0];
            t.removeClasses(n, "exit"),
              t.addClass(n, "exit", "done"),
              t.props.onExited && t.props.onExited(e);
          }),
          (t.resolveArguments = function (e, n) {
            return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
          }),
          (t.getClassNames = function (e) {
            var n = t.props.classNames,
              r = "string" == typeof n,
              o = r ? "" + (r && n ? n + "-" : "") + e : n[e];
            return {
              baseClassName: o,
              activeClassName: r ? o + "-active" : n[e + "Active"],
              doneClassName: r ? o + "-done" : n[e + "Done"],
            };
          }),
          t
        );
      }

      a(t, e);
      var n = t.prototype;
      return (
        (n.addClass = function (e, t, n) {
          var r = this.getClassNames(t)[n + "ClassName"],
            o = this.getClassNames("enter").doneClassName;
          "appear" === t && "done" === n && o && (r += " " + o),
            "active" === n && e && e.scrollTop,
            r && ((this.appliedClasses[t][n] = r), G(e, r));
        }),
        (n.removeClasses = function (e, t) {
          var n = this.appliedClasses[t],
            r = n.base,
            o = n.active,
            i = n.done;
          (this.appliedClasses[t] = {}),
            r && X(e, r),
            o && X(e, o),
            i && X(e, i);
        }),
        (n.render = function () {
          var e = this.props,
            t = (e.classNames, i(e, ["classNames"]));
          return r.createElement(
            z,
            o({}, t, {
              onEnter: this.onEnter,
              onEntered: this.onEntered,
              onEntering: this.onEntering,
              onExit: this.onExit,
              onExiting: this.onExiting,
              onExited: this.onExited,
            })
          );
        }),
        t
      );
    })(r.Component);

  function H(e, n) {
    var r = Object.create(null);
    return (
      e &&
        t.Children.map(e, function (e) {
          return e;
        }).forEach(function (e) {
          r[e.key] = (function (e) {
            return n && t.isValidElement(e) ? n(e) : e;
          })(e);
        }),
      r
    );
  }

  function Y(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
  }

  function J(e, n, r) {
    var o = H(e.children),
      i = (function (e, t) {
        function n(n) {
          return n in t ? t[n] : e[n];
        }

        (e = e || {}), (t = t || {});
        var r,
          o = Object.create(null),
          i = [];
        for (var a in e)
          a in t ? i.length && ((o[a] = i), (i = [])) : i.push(a);
        var s = {};
        for (var c in t) {
          if (o[c])
            for (r = 0; r < o[c].length; r++) {
              var l = o[c][r];
              s[o[c][r]] = n(l);
            }
          s[c] = n(c);
        }
        for (r = 0; r < i.length; r++) s[i[r]] = n(i[r]);
        return s;
      })(n, o);
    return (
      Object.keys(i).forEach(function (a) {
        var s = i[a];
        if (t.isValidElement(s)) {
          var c = a in n,
            l = a in o,
            u = n[a],
            p = t.isValidElement(u) && !u.props.in;
          !l || (c && !p)
            ? l || !c || p
              ? l &&
                c &&
                t.isValidElement(u) &&
                (i[a] = t.cloneElement(s, {
                  onExited: r.bind(null, s),
                  in: u.props.in,
                  exit: Y(s, "exit", e),
                  enter: Y(s, "enter", e),
                }))
              : (i[a] = t.cloneElement(s, { in: !1 }))
            : (i[a] = t.cloneElement(s, {
                onExited: r.bind(null, s),
                in: !0,
                exit: Y(s, "exit", e),
                enter: Y(s, "enter", e),
              }));
        }
      }),
      i
    );
  }

  (B.defaultProps = { classNames: "" }), (B.propTypes = {});
  var K =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    Q = (function (e) {
      function n(t, n) {
        var r,
          o = (r = e.call(this, t, n) || this).handleExited.bind(
            (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(r)
          );
        return (
          (r.state = {
            contextValue: { isMounting: !0 },
            handleExited: o,
            firstRender: !0,
          }),
          r
        );
      }

      a(n, e);
      var s = n.prototype;
      return (
        (s.componentDidMount = function () {
          (this.mounted = !0),
            this.setState({ contextValue: { isMounting: !1 } });
        }),
        (s.componentWillUnmount = function () {
          this.mounted = !1;
        }),
        (n.getDerivedStateFromProps = function (e, n) {
          var r,
            o,
            i = n.children,
            a = n.handleExited;
          return {
            children: n.firstRender
              ? ((r = e),
                (o = a),
                H(r.children, function (e) {
                  return t.cloneElement(e, {
                    onExited: o.bind(null, e),
                    in: !0,
                    appear: Y(e, "appear", r),
                    enter: Y(e, "enter", r),
                    exit: Y(e, "exit", r),
                  });
                }))
              : J(e, i, a),
            firstRender: !1,
          };
        }),
        (s.handleExited = function (e, t) {
          var n = H(this.props.children);
          e.key in n ||
            (e.props.onExited && e.props.onExited(t),
            this.mounted &&
              this.setState(function (t) {
                var n = o({}, t.children);
                return delete n[e.key], { children: n };
              }));
        }),
        (s.render = function () {
          var e = this.props,
            t = e.component,
            n = e.childFactory,
            o = i(e, ["component", "childFactory"]),
            a = this.state.contextValue,
            s = K(this.state.children).map(n);
          return (
            delete o.appear,
            delete o.enter,
            delete o.exit,
            null === t
              ? r.createElement(I.Provider, { value: a }, s)
              : r.createElement(
                  I.Provider,
                  { value: a },
                  r.createElement(t, o, s)
                )
          );
        }),
        n
      );
    })(r.Component);
  (Q.propTypes = {}),
    (Q.defaultProps = {
      component: "div",
      childFactory: function (e) {
        return e;
      },
    });
  var Z,
    ee,
    te = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).handleEnter =
            function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              return t.handleLifecycle("onEnter", 0, n);
            }),
          (t.handleEntering = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.handleLifecycle("onEntering", 0, n);
          }),
          (t.handleEntered = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.handleLifecycle("onEntered", 0, n);
          }),
          (t.handleExit = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.handleLifecycle("onExit", 1, n);
          }),
          (t.handleExiting = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.handleLifecycle("onExiting", 1, n);
          }),
          (t.handleExited = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.handleLifecycle("onExited", 1, n);
          }),
          t
        );
      }

      a(t, e);
      var o = t.prototype;
      return (
        (o.handleLifecycle = function (e, t, o) {
          var i,
            a = this.props.children,
            s = r.Children.toArray(a)[t];
          if ((s.props[e] && (i = s.props)[e].apply(i, o), this.props[e])) {
            var c = s.props.nodeRef ? void 0 : n.findDOMNode(this);
            this.props[e](c);
          }
        }),
        (o.render = function () {
          var e = this.props,
            t = e.children,
            n = e.in,
            o = i(e, ["children", "in"]),
            a = r.Children.toArray(t),
            s = a[0],
            c = a[1];
          return (
            delete o.onEnter,
            delete o.onEntering,
            delete o.onEntered,
            delete o.onExit,
            delete o.onExiting,
            delete o.onExited,
            r.createElement(
              Q,
              o,
              n
                ? r.cloneElement(s, {
                    key: "first",
                    onEnter: this.handleEnter,
                    onEntering: this.handleEntering,
                    onEntered: this.handleEntered,
                  })
                : r.cloneElement(c, {
                    key: "second",
                    onEnter: this.handleExit,
                    onEntering: this.handleExiting,
                    onEntered: this.handleExited,
                  })
            )
          );
        }),
        t
      );
    })(r.Component);
  te.propTypes = {};
  var ne = "out-in",
    re = "in-out",
    oe = function (e, t, n) {
      return function () {
        var r;
        e.props[t] && (r = e.props)[t].apply(r, arguments), n();
      };
    },
    ie =
      (((Z = {})[ne] = function (e) {
        var t = e.current,
          n = e.changeState;
        return r.cloneElement(t, {
          in: !1,
          onExited: oe(t, "onExited", function () {
            n(U, null);
          }),
        });
      }),
      (Z[re] = function (e) {
        var t = e.current,
          n = e.changeState,
          o = e.children;
        return [
          t,
          r.cloneElement(o, {
            in: !0,
            onEntered: oe(o, "onEntered", function () {
              n(U);
            }),
          }),
        ];
      }),
      Z),
    ae =
      (((ee = {})[ne] = function (e) {
        var t = e.children,
          n = e.changeState;
        return r.cloneElement(t, {
          in: !0,
          onEntered: oe(t, "onEntered", function () {
            n(q, r.cloneElement(t, { in: !0 }));
          }),
        });
      }),
      (ee[re] = function (e) {
        var t = e.current,
          n = e.children,
          o = e.changeState;
        return [
          r.cloneElement(t, {
            in: !1,
            onExited: oe(t, "onExited", function () {
              o(q, r.cloneElement(n, { in: !0 }));
            }),
          }),
          r.cloneElement(n, { in: !0 }),
        ];
      }),
      ee),
    se = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).state = {
            status: q,
            current: null,
          }),
          (t.appeared = !1),
          (t.changeState = function (e, n) {
            void 0 === n && (n = t.state.current),
              t.setState({ status: e, current: n });
          }),
          t
        );
      }

      a(t, e);
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          this.appeared = !0;
        }),
        (t.getDerivedStateFromProps = function (e, t) {
          return null == e.children
            ? { current: null }
            : t.status === U && e.mode === re
            ? { status: U }
            : !t.current ||
              ((n = t.current),
              (o = e.children),
              n === o ||
                (r.isValidElement(n) &&
                  r.isValidElement(o) &&
                  null != n.key &&
                  n.key === o.key))
            ? { current: r.cloneElement(e.children, { in: !0 }) }
            : { status: "exiting" };
          var n, o;
        }),
        (n.render = function () {
          var e,
            t = this.props,
            n = t.children,
            o = t.mode,
            i = this.state,
            a = i.status,
            s = i.current,
            c = {
              children: n,
              current: s,
              changeState: this.changeState,
              status: a,
            };
          switch (a) {
            case U:
              e = ae[o](c);
              break;
            case "exiting":
              e = ie[o](c);
              break;
            case q:
              e = s;
          }
          return r.createElement(
            I.Provider,
            { value: { isMounting: !this.appeared } },
            e
          );
        }),
        t
      );
    })(r.Component);
  (se.propTypes = {}),
    (se.defaultProps = { mode: ne }),
    (e.CSSTransition = B),
    (e.ReplaceTransition = te),
    (e.SwitchTransition = se),
    (e.Transition = z),
    (e.TransitionGroup = Q),
    (e.config = V),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
