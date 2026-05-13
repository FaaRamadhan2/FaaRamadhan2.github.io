(function () {
  "use strict";
  function o0(n) {
    return n &&
      n.__esModule &&
      Object.prototype.hasOwnProperty.call(n, "default")
      ? n.default
      : n;
  }
  var ul = { exports: {} },
    ui = {};
  var Fu;
  function c0() {
    if (Fu) return ui;
    Fu = 1;
    var n = Symbol.for("react.transitional.element"),
      r = Symbol.for("react.fragment");
    function l(o, u, h) {
      var d = null;
      if (
        (h !== void 0 && (d = "" + h),
        u.key !== void 0 && (d = "" + u.key),
        "key" in u)
      ) {
        h = {};
        for (var g in u) g !== "key" && (h[g] = u[g]);
      } else h = u;
      return (
        (u = h.ref),
        { $$typeof: n, type: o, key: d, ref: u !== void 0 ? u : null, props: h }
      );
    }
    return ((ui.Fragment = r), (ui.jsx = l), (ui.jsxs = l), ui);
  }
  var Wu;
  function u0() {
    return (Wu || ((Wu = 1), (ul.exports = c0())), ul.exports);
  }
  var D = u0(),
    dl = { exports: {} },
    di = {},
    fl = { exports: {} },
    hl = {};
  var $u;
  function d0() {
    return (
      $u ||
        (($u = 1),
        (function (n) {
          function r(O, q) {
            var Z = O.length;
            O.push(q);
            t: for (; 0 < Z; ) {
              var st = (Z - 1) >>> 1,
                x = O[st];
              if (0 < u(x, q)) ((O[st] = q), (O[Z] = x), (Z = st));
              else break t;
            }
          }
          function l(O) {
            return O.length === 0 ? null : O[0];
          }
          function o(O) {
            if (O.length === 0) return null;
            var q = O[0],
              Z = O.pop();
            if (Z !== q) {
              O[0] = Z;
              t: for (var st = 0, x = O.length, j = x >>> 1; st < j; ) {
                var K = 2 * (st + 1) - 1,
                  G = O[K],
                  $ = K + 1,
                  ht = O[$];
                if (0 > u(G, Z))
                  $ < x && 0 > u(ht, G)
                    ? ((O[st] = ht), (O[$] = Z), (st = $))
                    : ((O[st] = G), (O[K] = Z), (st = K));
                else if ($ < x && 0 > u(ht, Z))
                  ((O[st] = ht), (O[$] = Z), (st = $));
                else break t;
              }
            }
            return q;
          }
          function u(O, q) {
            var Z = O.sortIndex - q.sortIndex;
            return Z !== 0 ? Z : O.id - q.id;
          }
          if (
            ((n.unstable_now = void 0),
            typeof performance == "object" &&
              typeof performance.now == "function")
          ) {
            var h = performance;
            n.unstable_now = function () {
              return h.now();
            };
          } else {
            var d = Date,
              g = d.now();
            n.unstable_now = function () {
              return d.now() - g;
            };
          }
          var v = [],
            m = [],
            y = 1,
            w = null,
            T = 3,
            R = !1,
            C = !1,
            L = !1,
            H = !1,
            X = typeof setTimeout == "function" ? setTimeout : null,
            Y = typeof clearTimeout == "function" ? clearTimeout : null,
            U = typeof setImmediate < "u" ? setImmediate : null;
          function J(O) {
            for (var q = l(m); q !== null; ) {
              if (q.callback === null) o(m);
              else if (q.startTime <= O)
                (o(m), (q.sortIndex = q.expirationTime), r(v, q));
              else break;
              q = l(m);
            }
          }
          function B(O) {
            if (((L = !1), J(O), !C))
              if (l(v) !== null) ((C = !0), rt || ((rt = !0), Ot()));
              else {
                var q = l(m);
                q !== null && Yt(B, q.startTime - O);
              }
          }
          var rt = !1,
            dt = -1,
            et = 5,
            Tt = -1;
          function Ht() {
            return H ? !0 : !(n.unstable_now() - Tt < et);
          }
          function de() {
            if (((H = !1), rt)) {
              var O = n.unstable_now();
              Tt = O;
              var q = !0;
              try {
                t: {
                  ((C = !1), L && ((L = !1), Y(dt), (dt = -1)), (R = !0));
                  var Z = T;
                  try {
                    e: {
                      for (
                        J(O), w = l(v);
                        w !== null && !(w.expirationTime > O && Ht());
                      ) {
                        var st = w.callback;
                        if (typeof st == "function") {
                          ((w.callback = null), (T = w.priorityLevel));
                          var x = st(w.expirationTime <= O);
                          if (
                            ((O = n.unstable_now()), typeof x == "function")
                          ) {
                            ((w.callback = x), J(O), (q = !0));
                            break e;
                          }
                          (w === l(v) && o(v), J(O));
                        } else o(v);
                        w = l(v);
                      }
                      if (w !== null) q = !0;
                      else {
                        var j = l(m);
                        (j !== null && Yt(B, j.startTime - O), (q = !1));
                      }
                    }
                    break t;
                  } finally {
                    ((w = null), (T = Z), (R = !1));
                  }
                  q = void 0;
                }
              } finally {
                q ? Ot() : (rt = !1);
              }
            }
          }
          var Ot;
          if (typeof U == "function")
            Ot = function () {
              U(de);
            };
          else if (typeof MessageChannel < "u") {
            var Ge = new MessageChannel(),
              $e = Ge.port2;
            ((Ge.port1.onmessage = de),
              (Ot = function () {
                $e.postMessage(null);
              }));
          } else
            Ot = function () {
              X(de, 0);
            };
          function Yt(O, q) {
            dt = X(function () {
              O(n.unstable_now());
            }, q);
          }
          ((n.unstable_IdlePriority = 5),
            (n.unstable_ImmediatePriority = 1),
            (n.unstable_LowPriority = 4),
            (n.unstable_NormalPriority = 3),
            (n.unstable_Profiling = null),
            (n.unstable_UserBlockingPriority = 2),
            (n.unstable_cancelCallback = function (O) {
              O.callback = null;
            }),
            (n.unstable_forceFrameRate = function (O) {
              0 > O || 125 < O
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                  )
                : (et = 0 < O ? Math.floor(1e3 / O) : 5);
            }),
            (n.unstable_getCurrentPriorityLevel = function () {
              return T;
            }),
            (n.unstable_next = function (O) {
              switch (T) {
                case 1:
                case 2:
                case 3:
                  var q = 3;
                  break;
                default:
                  q = T;
              }
              var Z = T;
              T = q;
              try {
                return O();
              } finally {
                T = Z;
              }
            }),
            (n.unstable_requestPaint = function () {
              H = !0;
            }),
            (n.unstable_runWithPriority = function (O, q) {
              switch (O) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  O = 3;
              }
              var Z = T;
              T = O;
              try {
                return q();
              } finally {
                T = Z;
              }
            }),
            (n.unstable_scheduleCallback = function (O, q, Z) {
              var st = n.unstable_now();
              switch (
                (typeof Z == "object" && Z !== null
                  ? ((Z = Z.delay),
                    (Z = typeof Z == "number" && 0 < Z ? st + Z : st))
                  : (Z = st),
                O)
              ) {
                case 1:
                  var x = -1;
                  break;
                case 2:
                  x = 250;
                  break;
                case 5:
                  x = 1073741823;
                  break;
                case 4:
                  x = 1e4;
                  break;
                default:
                  x = 5e3;
              }
              return (
                (x = Z + x),
                (O = {
                  id: y++,
                  callback: q,
                  priorityLevel: O,
                  startTime: Z,
                  expirationTime: x,
                  sortIndex: -1,
                }),
                Z > st
                  ? ((O.sortIndex = Z),
                    r(m, O),
                    l(v) === null &&
                      O === l(m) &&
                      (L ? (Y(dt), (dt = -1)) : (L = !0), Yt(B, Z - st)))
                  : ((O.sortIndex = x),
                    r(v, O),
                    C || R || ((C = !0), rt || ((rt = !0), Ot()))),
                O
              );
            }),
            (n.unstable_shouldYield = Ht),
            (n.unstable_wrapCallback = function (O) {
              var q = T;
              return function () {
                var Z = T;
                T = q;
                try {
                  return O.apply(this, arguments);
                } finally {
                  T = Z;
                }
              };
            }));
        })(hl)),
      hl
    );
  }
  var Iu;
  function f0() {
    return (Iu || ((Iu = 1), (fl.exports = d0())), fl.exports);
  }
  var pl = { exports: {} },
    it = {};
  var td;
  function h0() {
    if (td) return it;
    td = 1;
    var n = Symbol.for("react.transitional.element"),
      r = Symbol.for("react.portal"),
      l = Symbol.for("react.fragment"),
      o = Symbol.for("react.strict_mode"),
      u = Symbol.for("react.profiler"),
      h = Symbol.for("react.consumer"),
      d = Symbol.for("react.context"),
      g = Symbol.for("react.forward_ref"),
      v = Symbol.for("react.suspense"),
      m = Symbol.for("react.memo"),
      y = Symbol.for("react.lazy"),
      w = Symbol.iterator;
    function T(x) {
      return x === null || typeof x != "object"
        ? null
        : ((x = (w && x[w]) || x["@@iterator"]),
          typeof x == "function" ? x : null);
    }
    var R = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      C = Object.assign,
      L = {};
    function H(x, j, K) {
      ((this.props = x),
        (this.context = j),
        (this.refs = L),
        (this.updater = K || R));
    }
    ((H.prototype.isReactComponent = {}),
      (H.prototype.setState = function (x, j) {
        if (typeof x != "object" && typeof x != "function" && x != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, x, j, "setState");
      }),
      (H.prototype.forceUpdate = function (x) {
        this.updater.enqueueForceUpdate(this, x, "forceUpdate");
      }));
    function X() {}
    X.prototype = H.prototype;
    function Y(x, j, K) {
      ((this.props = x),
        (this.context = j),
        (this.refs = L),
        (this.updater = K || R));
    }
    var U = (Y.prototype = new X());
    ((U.constructor = Y), C(U, H.prototype), (U.isPureReactComponent = !0));
    var J = Array.isArray,
      B = { H: null, A: null, T: null, S: null, V: null },
      rt = Object.prototype.hasOwnProperty;
    function dt(x, j, K, G, $, ht) {
      return (
        (K = ht.ref),
        {
          $$typeof: n,
          type: x,
          key: j,
          ref: K !== void 0 ? K : null,
          props: ht,
        }
      );
    }
    function et(x, j) {
      return dt(x.type, j, void 0, void 0, void 0, x.props);
    }
    function Tt(x) {
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }
    function Ht(x) {
      var j = { "=": "=0", ":": "=2" };
      return (
        "$" +
        x.replace(/[=:]/g, function (K) {
          return j[K];
        })
      );
    }
    var de = /\/+/g;
    function Ot(x, j) {
      return typeof x == "object" && x !== null && x.key != null
        ? Ht("" + x.key)
        : j.toString(36);
    }
    function Ge() {}
    function $e(x) {
      switch (x.status) {
        case "fulfilled":
          return x.value;
        case "rejected":
          throw x.reason;
        default:
          switch (
            (typeof x.status == "string"
              ? x.then(Ge, Ge)
              : ((x.status = "pending"),
                x.then(
                  function (j) {
                    x.status === "pending" &&
                      ((x.status = "fulfilled"), (x.value = j));
                  },
                  function (j) {
                    x.status === "pending" &&
                      ((x.status = "rejected"), (x.reason = j));
                  },
                )),
            x.status)
          ) {
            case "fulfilled":
              return x.value;
            case "rejected":
              throw x.reason;
          }
      }
      throw x;
    }
    function Yt(x, j, K, G, $) {
      var ht = typeof x;
      (ht === "undefined" || ht === "boolean") && (x = null);
      var nt = !1;
      if (x === null) nt = !0;
      else
        switch (ht) {
          case "bigint":
          case "string":
          case "number":
            nt = !0;
            break;
          case "object":
            switch (x.$$typeof) {
              case n:
              case r:
                nt = !0;
                break;
              case y:
                return ((nt = x._init), Yt(nt(x._payload), j, K, G, $));
            }
        }
      if (nt)
        return (
          ($ = $(x)),
          (nt = G === "" ? "." + Ot(x, 0) : G),
          J($)
            ? ((K = ""),
              nt != null && (K = nt.replace(de, "$&/") + "/"),
              Yt($, j, K, "", function (ba) {
                return ba;
              }))
            : $ != null &&
              (Tt($) &&
                ($ = et(
                  $,
                  K +
                    ($.key == null || (x && x.key === $.key)
                      ? ""
                      : ("" + $.key).replace(de, "$&/") + "/") +
                    nt,
                )),
              j.push($)),
          1
        );
      nt = 0;
      var fe = G === "" ? "." : G + ":";
      if (J(x))
        for (var Et = 0; Et < x.length; Et++)
          ((G = x[Et]), (ht = fe + Ot(G, Et)), (nt += Yt(G, j, K, ht, $)));
      else if (((Et = T(x)), typeof Et == "function"))
        for (x = Et.call(x), Et = 0; !(G = x.next()).done; )
          ((G = G.value), (ht = fe + Ot(G, Et++)), (nt += Yt(G, j, K, ht, $)));
      else if (ht === "object") {
        if (typeof x.then == "function") return Yt($e(x), j, K, G, $);
        throw (
          (j = String(x)),
          Error(
            "Objects are not valid as a React child (found: " +
              (j === "[object Object]"
                ? "object with keys {" + Object.keys(x).join(", ") + "}"
                : j) +
              "). If you meant to render a collection of children, use an array instead.",
          )
        );
      }
      return nt;
    }
    function O(x, j, K) {
      if (x == null) return x;
      var G = [],
        $ = 0;
      return (
        Yt(x, G, "", "", function (ht) {
          return j.call(K, ht, $++);
        }),
        G
      );
    }
    function q(x) {
      if (x._status === -1) {
        var j = x._result;
        ((j = j()),
          j.then(
            function (K) {
              (x._status === 0 || x._status === -1) &&
                ((x._status = 1), (x._result = K));
            },
            function (K) {
              (x._status === 0 || x._status === -1) &&
                ((x._status = 2), (x._result = K));
            },
          ),
          x._status === -1 && ((x._status = 0), (x._result = j)));
      }
      if (x._status === 1) return x._result.default;
      throw x._result;
    }
    var Z =
      typeof reportError == "function"
        ? reportError
        : function (x) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var j = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof x == "object" &&
                  x !== null &&
                  typeof x.message == "string"
                    ? String(x.message)
                    : String(x),
                error: x,
              });
              if (!window.dispatchEvent(j)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", x);
              return;
            }
            console.error(x);
          };
    function st() {}
    return (
      (it.Children = {
        map: O,
        forEach: function (x, j, K) {
          O(
            x,
            function () {
              j.apply(this, arguments);
            },
            K,
          );
        },
        count: function (x) {
          var j = 0;
          return (
            O(x, function () {
              j++;
            }),
            j
          );
        },
        toArray: function (x) {
          return (
            O(x, function (j) {
              return j;
            }) || []
          );
        },
        only: function (x) {
          if (!Tt(x))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return x;
        },
      }),
      (it.Component = H),
      (it.Fragment = l),
      (it.Profiler = u),
      (it.PureComponent = Y),
      (it.StrictMode = o),
      (it.Suspense = v),
      (it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
      (it.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (x) {
          return B.H.useMemoCache(x);
        },
      }),
      (it.cache = function (x) {
        return function () {
          return x.apply(null, arguments);
        };
      }),
      (it.cloneElement = function (x, j, K) {
        if (x == null)
          throw Error(
            "The argument must be a React element, but you passed " + x + ".",
          );
        var G = C({}, x.props),
          $ = x.key,
          ht = void 0;
        if (j != null)
          for (nt in (j.ref !== void 0 && (ht = void 0),
          j.key !== void 0 && ($ = "" + j.key),
          j))
            !rt.call(j, nt) ||
              nt === "key" ||
              nt === "__self" ||
              nt === "__source" ||
              (nt === "ref" && j.ref === void 0) ||
              (G[nt] = j[nt]);
        var nt = arguments.length - 2;
        if (nt === 1) G.children = K;
        else if (1 < nt) {
          for (var fe = Array(nt), Et = 0; Et < nt; Et++)
            fe[Et] = arguments[Et + 2];
          G.children = fe;
        }
        return dt(x.type, $, void 0, void 0, ht, G);
      }),
      (it.createContext = function (x) {
        return (
          (x = {
            $$typeof: d,
            _currentValue: x,
            _currentValue2: x,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (x.Provider = x),
          (x.Consumer = { $$typeof: h, _context: x }),
          x
        );
      }),
      (it.createElement = function (x, j, K) {
        var G,
          $ = {},
          ht = null;
        if (j != null)
          for (G in (j.key !== void 0 && (ht = "" + j.key), j))
            rt.call(j, G) &&
              G !== "key" &&
              G !== "__self" &&
              G !== "__source" &&
              ($[G] = j[G]);
        var nt = arguments.length - 2;
        if (nt === 1) $.children = K;
        else if (1 < nt) {
          for (var fe = Array(nt), Et = 0; Et < nt; Et++)
            fe[Et] = arguments[Et + 2];
          $.children = fe;
        }
        if (x && x.defaultProps)
          for (G in ((nt = x.defaultProps), nt))
            $[G] === void 0 && ($[G] = nt[G]);
        return dt(x, ht, void 0, void 0, null, $);
      }),
      (it.createRef = function () {
        return { current: null };
      }),
      (it.forwardRef = function (x) {
        return { $$typeof: g, render: x };
      }),
      (it.isValidElement = Tt),
      (it.lazy = function (x) {
        return { $$typeof: y, _payload: { _status: -1, _result: x }, _init: q };
      }),
      (it.memo = function (x, j) {
        return { $$typeof: m, type: x, compare: j === void 0 ? null : j };
      }),
      (it.startTransition = function (x) {
        var j = B.T,
          K = {};
        B.T = K;
        try {
          var G = x(),
            $ = B.S;
          ($ !== null && $(K, G),
            typeof G == "object" &&
              G !== null &&
              typeof G.then == "function" &&
              G.then(st, Z));
        } catch (ht) {
          Z(ht);
        } finally {
          B.T = j;
        }
      }),
      (it.unstable_useCacheRefresh = function () {
        return B.H.useCacheRefresh();
      }),
      (it.use = function (x) {
        return B.H.use(x);
      }),
      (it.useActionState = function (x, j, K) {
        return B.H.useActionState(x, j, K);
      }),
      (it.useCallback = function (x, j) {
        return B.H.useCallback(x, j);
      }),
      (it.useContext = function (x) {
        return B.H.useContext(x);
      }),
      (it.useDebugValue = function () {}),
      (it.useDeferredValue = function (x, j) {
        return B.H.useDeferredValue(x, j);
      }),
      (it.useEffect = function (x, j, K) {
        var G = B.H;
        if (typeof K == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React.",
          );
        return G.useEffect(x, j);
      }),
      (it.useId = function () {
        return B.H.useId();
      }),
      (it.useImperativeHandle = function (x, j, K) {
        return B.H.useImperativeHandle(x, j, K);
      }),
      (it.useInsertionEffect = function (x, j) {
        return B.H.useInsertionEffect(x, j);
      }),
      (it.useLayoutEffect = function (x, j) {
        return B.H.useLayoutEffect(x, j);
      }),
      (it.useMemo = function (x, j) {
        return B.H.useMemo(x, j);
      }),
      (it.useOptimistic = function (x, j) {
        return B.H.useOptimistic(x, j);
      }),
      (it.useReducer = function (x, j, K) {
        return B.H.useReducer(x, j, K);
      }),
      (it.useRef = function (x) {
        return B.H.useRef(x);
      }),
      (it.useState = function (x) {
        return B.H.useState(x);
      }),
      (it.useSyncExternalStore = function (x, j, K) {
        return B.H.useSyncExternalStore(x, j, K);
      }),
      (it.useTransition = function () {
        return B.H.useTransition();
      }),
      (it.version = "19.1.0"),
      it
    );
  }
  var ed;
  function ml() {
    return (ed || ((ed = 1), (pl.exports = h0())), pl.exports);
  }
  var gl = { exports: {} },
    It = {};
  var ad;
  function p0() {
    if (ad) return It;
    ad = 1;
    var n = ml();
    function r(v) {
      var m = "https://react.dev/errors/" + v;
      if (1 < arguments.length) {
        m += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var y = 2; y < arguments.length; y++)
          m += "&args[]=" + encodeURIComponent(arguments[y]);
      }
      return (
        "Minified React error #" +
        v +
        "; visit " +
        m +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function l() {}
    var o = {
        d: {
          f: l,
          r: function () {
            throw Error(r(522));
          },
          D: l,
          C: l,
          L: l,
          m: l,
          X: l,
          S: l,
          M: l,
        },
        p: 0,
        findDOMNode: null,
      },
      u = Symbol.for("react.portal");
    function h(v, m, y) {
      var w =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: u,
        key: w == null ? null : "" + w,
        children: v,
        containerInfo: m,
        implementation: y,
      };
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(v, m) {
      if (v === "font") return "";
      if (typeof m == "string") return m === "use-credentials" ? m : "";
    }
    return (
      (It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
      (It.createPortal = function (v, m) {
        var y =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
          throw Error(r(299));
        return h(v, m, null, y);
      }),
      (It.flushSync = function (v) {
        var m = d.T,
          y = o.p;
        try {
          if (((d.T = null), (o.p = 2), v)) return v();
        } finally {
          ((d.T = m), (o.p = y), o.d.f());
        }
      }),
      (It.preconnect = function (v, m) {
        typeof v == "string" &&
          (m
            ? ((m = m.crossOrigin),
              (m =
                typeof m == "string"
                  ? m === "use-credentials"
                    ? m
                    : ""
                  : void 0))
            : (m = null),
          o.d.C(v, m));
      }),
      (It.prefetchDNS = function (v) {
        typeof v == "string" && o.d.D(v);
      }),
      (It.preinit = function (v, m) {
        if (typeof v == "string" && m && typeof m.as == "string") {
          var y = m.as,
            w = g(y, m.crossOrigin),
            T = typeof m.integrity == "string" ? m.integrity : void 0,
            R = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
          y === "style"
            ? o.d.S(
                v,
                typeof m.precedence == "string" ? m.precedence : void 0,
                { crossOrigin: w, integrity: T, fetchPriority: R },
              )
            : y === "script" &&
              o.d.X(v, {
                crossOrigin: w,
                integrity: T,
                fetchPriority: R,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
              });
        }
      }),
      (It.preinitModule = function (v, m) {
        if (typeof v == "string")
          if (typeof m == "object" && m !== null) {
            if (m.as == null || m.as === "script") {
              var y = g(m.as, m.crossOrigin);
              o.d.M(v, {
                crossOrigin: y,
                integrity:
                  typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
              });
            }
          } else m == null && o.d.M(v);
      }),
      (It.preload = function (v, m) {
        if (
          typeof v == "string" &&
          typeof m == "object" &&
          m !== null &&
          typeof m.as == "string"
        ) {
          var y = m.as,
            w = g(y, m.crossOrigin);
          o.d.L(v, y, {
            crossOrigin: w,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            type: typeof m.type == "string" ? m.type : void 0,
            fetchPriority:
              typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
            referrerPolicy:
              typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
            imageSrcSet:
              typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
            imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
            media: typeof m.media == "string" ? m.media : void 0,
          });
        }
      }),
      (It.preloadModule = function (v, m) {
        if (typeof v == "string")
          if (m) {
            var y = g(m.as, m.crossOrigin);
            o.d.m(v, {
              as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
              crossOrigin: y,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            });
          } else o.d.m(v);
      }),
      (It.requestFormReset = function (v) {
        o.d.r(v);
      }),
      (It.unstable_batchedUpdates = function (v, m) {
        return v(m);
      }),
      (It.useFormState = function (v, m, y) {
        return d.H.useFormState(v, m, y);
      }),
      (It.useFormStatus = function () {
        return d.H.useHostTransitionStatus();
      }),
      (It.version = "19.1.0"),
      It
    );
  }
  var nd;
  function m0() {
    if (nd) return gl.exports;
    nd = 1;
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (r) {
          console.error(r);
        }
    }
    return (n(), (gl.exports = p0()), gl.exports);
  }
  var id;
  function g0() {
    if (id) return di;
    id = 1;
    var n = f0(),
      r = ml(),
      l = m0();
    function o(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++)
          e += "&args[]=" + encodeURIComponent(arguments[a]);
      }
      return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function u(t) {
      return !(
        !t ||
        (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
      );
    }
    function h(t) {
      var e = t,
        a = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do ((e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return));
        while (t);
      }
      return e.tag === 3 ? a : null;
    }
    function d(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (
          (e === null &&
            ((t = t.alternate), t !== null && (e = t.memoizedState)),
          e !== null)
        )
          return e.dehydrated;
      }
      return null;
    }
    function g(t) {
      if (h(t) !== t) throw Error(o(188));
    }
    function v(t) {
      var e = t.alternate;
      if (!e) {
        if (((e = h(t)), e === null)) throw Error(o(188));
        return e !== t ? null : t;
      }
      for (var a = t, i = e; ; ) {
        var s = a.return;
        if (s === null) break;
        var c = s.alternate;
        if (c === null) {
          if (((i = s.return), i !== null)) {
            a = i;
            continue;
          }
          break;
        }
        if (s.child === c.child) {
          for (c = s.child; c; ) {
            if (c === a) return (g(s), t);
            if (c === i) return (g(s), e);
            c = c.sibling;
          }
          throw Error(o(188));
        }
        if (a.return !== i.return) ((a = s), (i = c));
        else {
          for (var f = !1, p = s.child; p; ) {
            if (p === a) {
              ((f = !0), (a = s), (i = c));
              break;
            }
            if (p === i) {
              ((f = !0), (i = s), (a = c));
              break;
            }
            p = p.sibling;
          }
          if (!f) {
            for (p = c.child; p; ) {
              if (p === a) {
                ((f = !0), (a = c), (i = s));
                break;
              }
              if (p === i) {
                ((f = !0), (i = c), (a = s));
                break;
              }
              p = p.sibling;
            }
            if (!f) throw Error(o(189));
          }
        }
        if (a.alternate !== i) throw Error(o(190));
      }
      if (a.tag !== 3) throw Error(o(188));
      return a.stateNode.current === a ? t : e;
    }
    function m(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (((e = m(t)), e !== null)) return e;
        t = t.sibling;
      }
      return null;
    }
    var y = Object.assign,
      w = Symbol.for("react.element"),
      T = Symbol.for("react.transitional.element"),
      R = Symbol.for("react.portal"),
      C = Symbol.for("react.fragment"),
      L = Symbol.for("react.strict_mode"),
      H = Symbol.for("react.profiler"),
      X = Symbol.for("react.provider"),
      Y = Symbol.for("react.consumer"),
      U = Symbol.for("react.context"),
      J = Symbol.for("react.forward_ref"),
      B = Symbol.for("react.suspense"),
      rt = Symbol.for("react.suspense_list"),
      dt = Symbol.for("react.memo"),
      et = Symbol.for("react.lazy"),
      Tt = Symbol.for("react.activity"),
      Ht = Symbol.for("react.memo_cache_sentinel"),
      de = Symbol.iterator;
    function Ot(t) {
      return t === null || typeof t != "object"
        ? null
        : ((t = (de && t[de]) || t["@@iterator"]),
          typeof t == "function" ? t : null);
    }
    var Ge = Symbol.for("react.client.reference");
    function $e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === Ge ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case C:
          return "Fragment";
        case H:
          return "Profiler";
        case L:
          return "StrictMode";
        case B:
          return "Suspense";
        case rt:
          return "SuspenseList";
        case Tt:
          return "Activity";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case R:
            return "Portal";
          case U:
            return (t.displayName || "Context") + ".Provider";
          case Y:
            return (t._context.displayName || "Context") + ".Consumer";
          case J:
            var e = t.render;
            return (
              (t = t.displayName),
              t ||
                ((t = e.displayName || e.name || ""),
                (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
              t
            );
          case dt:
            return (
              (e = t.displayName || null),
              e !== null ? e : $e(t.type) || "Memo"
            );
          case et:
            ((e = t._payload), (t = t._init));
            try {
              return $e(t(e));
            } catch {}
        }
      return null;
    }
    var Yt = Array.isArray,
      O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      q = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Z = { pending: !1, data: null, method: null, action: null },
      st = [],
      x = -1;
    function j(t) {
      return { current: t };
    }
    function K(t) {
      0 > x || ((t.current = st[x]), (st[x] = null), x--);
    }
    function G(t, e) {
      (x++, (st[x] = t.current), (t.current = e));
    }
    var $ = j(null),
      ht = j(null),
      nt = j(null),
      fe = j(null);
    function Et(t, e) {
      switch ((G(nt, e), G(ht, t), G($, null), e.nodeType)) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? jv(t) : 0;
          break;
        default:
          if (((t = e.tagName), (e = e.namespaceURI)))
            ((e = jv(e)), (t = Uv(e, t)));
          else
            switch (t) {
              case "svg":
                t = 1;
                break;
              case "math":
                t = 2;
                break;
              default:
                t = 0;
            }
      }
      (K($), G($, t));
    }
    function ba() {
      (K($), K(ht), K(nt));
    }
    function No(t) {
      t.memoizedState !== null && G(fe, t);
      var e = $.current,
        a = Uv(e, t.type);
      e !== a && (G(ht, t), G($, a));
    }
    function Jr(t) {
      (ht.current === t && (K($), K(ht)),
        fe.current === t && (K(fe), (xr._currentValue = Z)));
    }
    var Vo = Object.prototype.hasOwnProperty,
      jo = n.unstable_scheduleCallback,
      Uo = n.unstable_cancelCallback,
      z1 = n.unstable_shouldYield,
      R1 = n.unstable_requestPaint,
      Xe = n.unstable_now,
      O1 = n.unstable_getCurrentPriorityLevel,
      gp = n.unstable_ImmediatePriority,
      vp = n.unstable_UserBlockingPriority,
      Fr = n.unstable_NormalPriority,
      _1 = n.unstable_LowPriority,
      yp = n.unstable_IdlePriority,
      C1 = n.log,
      N1 = n.unstable_setDisableYieldValue,
      ki = null,
      he = null;
    function xa(t) {
      if (
        (typeof C1 == "function" && N1(t),
        he && typeof he.setStrictMode == "function")
      )
        try {
          he.setStrictMode(ki, t);
        } catch {}
    }
    var pe = Math.clz32 ? Math.clz32 : U1,
      V1 = Math.log,
      j1 = Math.LN2;
    function U1(t) {
      return ((t >>>= 0), t === 0 ? 32 : (31 - ((V1(t) / j1) | 0)) | 0);
    }
    var Wr = 256,
      $r = 4194304;
    function Ja(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
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
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
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
          return t;
      }
    }
    function Ir(t, e, a) {
      var i = t.pendingLanes;
      if (i === 0) return 0;
      var s = 0,
        c = t.suspendedLanes,
        f = t.pingedLanes;
      t = t.warmLanes;
      var p = i & 134217727;
      return (
        p !== 0
          ? ((i = p & ~c),
            i !== 0
              ? (s = Ja(i))
              : ((f &= p),
                f !== 0
                  ? (s = Ja(f))
                  : a || ((a = p & ~t), a !== 0 && (s = Ja(a)))))
          : ((p = i & ~c),
            p !== 0
              ? (s = Ja(p))
              : f !== 0
                ? (s = Ja(f))
                : a || ((a = i & ~t), a !== 0 && (s = Ja(a)))),
        s === 0
          ? 0
          : e !== 0 &&
              e !== s &&
              (e & c) === 0 &&
              ((c = s & -s),
              (a = e & -e),
              c >= a || (c === 32 && (a & 4194048) !== 0))
            ? e
            : s
      );
    }
    function zi(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function B1(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
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
          return e + 5e3;
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
    function bp() {
      var t = Wr;
      return ((Wr <<= 1), (Wr & 4194048) === 0 && (Wr = 256), t);
    }
    function xp() {
      var t = $r;
      return (($r <<= 1), ($r & 62914560) === 0 && ($r = 4194304), t);
    }
    function Bo(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function Ri(t, e) {
      ((t.pendingLanes |= e),
        e !== 268435456 &&
          ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
    }
    function L1(t, e, a, i, s, c) {
      var f = t.pendingLanes;
      ((t.pendingLanes = a),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.warmLanes = 0),
        (t.expiredLanes &= a),
        (t.entangledLanes &= a),
        (t.errorRecoveryDisabledLanes &= a),
        (t.shellSuspendCounter = 0));
      var p = t.entanglements,
        b = t.expirationTimes,
        M = t.hiddenUpdates;
      for (a = f & ~a; 0 < a; ) {
        var _ = 31 - pe(a),
          V = 1 << _;
        ((p[_] = 0), (b[_] = -1));
        var k = M[_];
        if (k !== null)
          for (M[_] = null, _ = 0; _ < k.length; _++) {
            var z = k[_];
            z !== null && (z.lane &= -536870913);
          }
        a &= ~V;
      }
      (i !== 0 && wp(t, i, 0),
        c !== 0 &&
          s === 0 &&
          t.tag !== 0 &&
          (t.suspendedLanes |= c & ~(f & ~e)));
    }
    function wp(t, e, a) {
      ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
      var i = 31 - pe(e);
      ((t.entangledLanes |= e),
        (t.entanglements[i] = t.entanglements[i] | 1073741824 | (a & 4194090)));
    }
    function Sp(t, e) {
      var a = (t.entangledLanes |= e);
      for (t = t.entanglements; a; ) {
        var i = 31 - pe(a),
          s = 1 << i;
        ((s & e) | (t[i] & e) && (t[i] |= e), (a &= ~s));
      }
    }
    function Lo(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
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
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function Ho(t) {
      return (
        (t &= -t),
        2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
      );
    }
    function Tp() {
      var t = q.p;
      return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : a0(t.type));
    }
    function H1(t, e) {
      var a = q.p;
      try {
        return ((q.p = t), e());
      } finally {
        q.p = a;
      }
    }
    var wa = Math.random().toString(36).slice(2),
      ee = "__reactFiber$" + wa,
      se = "__reactProps$" + wa,
      En = "__reactContainer$" + wa,
      Yo = "__reactEvents$" + wa,
      Y1 = "__reactListeners$" + wa,
      q1 = "__reactHandles$" + wa,
      Ap = "__reactResources$" + wa,
      Oi = "__reactMarker$" + wa;
    function qo(t) {
      (delete t[ee], delete t[se], delete t[Yo], delete t[Y1], delete t[q1]);
    }
    function Mn(t) {
      var e = t[ee];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if ((e = a[En] || a[ee])) {
          if (
            ((a = e.alternate),
            e.child !== null || (a !== null && a.child !== null))
          )
            for (t = Yv(t); t !== null; ) {
              if ((a = t[ee])) return a;
              t = Yv(t);
            }
          return e;
        }
        ((t = a), (a = t.parentNode));
      }
      return null;
    }
    function Dn(t) {
      if ((t = t[ee] || t[En])) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function _i(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(o(33));
    }
    function kn(t) {
      var e = t[Ap];
      return (
        e ||
          (e = t[Ap] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        e
      );
    }
    function Xt(t) {
      t[Oi] = !0;
    }
    var Ep = new Set(),
      Mp = {};
    function Fa(t, e) {
      (zn(t, e), zn(t + "Capture", e));
    }
    function zn(t, e) {
      for (Mp[t] = e, t = 0; t < e.length; t++) Ep.add(e[t]);
    }
    var G1 = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
      ),
      Dp = {},
      kp = {};
    function X1(t) {
      return Vo.call(kp, t)
        ? !0
        : Vo.call(Dp, t)
          ? !1
          : G1.test(t)
            ? (kp[t] = !0)
            : ((Dp[t] = !0), !1);
    }
    function ts(t, e, a) {
      if (X1(e))
        if (a === null) t.removeAttribute(e);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var i = e.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          t.setAttribute(e, "" + a);
        }
    }
    function es(t, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + a);
      }
    }
    function Ie(t, e, a, i) {
      if (i === null) t.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(a);
            return;
        }
        t.setAttributeNS(e, a, "" + i);
      }
    }
    var Go, zp;
    function Rn(t) {
      if (Go === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          ((Go = (e && e[1]) || ""),
            (zp =
              -1 <
              a.stack.indexOf(`
    at`)
                ? " (<anonymous>)"
                : -1 < a.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : ""));
        }
      return (
        `
` +
        Go +
        t +
        zp
      );
    }
    var Xo = !1;
    function Ko(t, e) {
      if (!t || Xo) return "";
      Xo = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var i = {
          DetermineComponentFrameRoot: function () {
            try {
              if (e) {
                var V = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(V.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(V, []);
                  } catch (z) {
                    var k = z;
                  }
                  Reflect.construct(t, [], V);
                } else {
                  try {
                    V.call();
                  } catch (z) {
                    k = z;
                  }
                  t.call(V.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  k = z;
                }
                (V = t()) &&
                  typeof V.catch == "function" &&
                  V.catch(function () {});
              }
            } catch (z) {
              if (z && k && typeof z.stack == "string")
                return [z.stack, k.stack];
            }
            return [null, null];
          },
        };
        i.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var s = Object.getOwnPropertyDescriptor(
          i.DetermineComponentFrameRoot,
          "name",
        );
        s &&
          s.configurable &&
          Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var c = i.DetermineComponentFrameRoot(),
          f = c[0],
          p = c[1];
        if (f && p) {
          var b = f.split(`
`),
            M = p.split(`
`);
          for (
            s = i = 0;
            i < b.length && !b[i].includes("DetermineComponentFrameRoot");
          )
            i++;
          for (
            ;
            s < M.length && !M[s].includes("DetermineComponentFrameRoot");
          )
            s++;
          if (i === b.length || s === M.length)
            for (
              i = b.length - 1, s = M.length - 1;
              1 <= i && 0 <= s && b[i] !== M[s];
            )
              s--;
          for (; 1 <= i && 0 <= s; i--, s--)
            if (b[i] !== M[s]) {
              if (i !== 1 || s !== 1)
                do
                  if ((i--, s--, 0 > s || b[i] !== M[s])) {
                    var _ =
                      `
` + b[i].replace(" at new ", " at ");
                    return (
                      t.displayName &&
                        _.includes("<anonymous>") &&
                        (_ = _.replace("<anonymous>", t.displayName)),
                      _
                    );
                  }
                while (1 <= i && 0 <= s);
              break;
            }
        }
      } finally {
        ((Xo = !1), (Error.prepareStackTrace = a));
      }
      return (a = t ? t.displayName || t.name : "") ? Rn(a) : "";
    }
    function K1(t) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Rn(t.type);
        case 16:
          return Rn("Lazy");
        case 13:
          return Rn("Suspense");
        case 19:
          return Rn("SuspenseList");
        case 0:
        case 15:
          return Ko(t.type, !1);
        case 11:
          return Ko(t.type.render, !1);
        case 1:
          return Ko(t.type, !0);
        case 31:
          return Rn("Activity");
        default:
          return "";
      }
    }
    function Rp(t) {
      try {
        var e = "";
        do ((e += K1(t)), (t = t.return));
        while (t);
        return e;
      } catch (a) {
        return (
          `
Error generating stack: ` +
          a.message +
          `
` +
          a.stack
        );
      }
    }
    function Ae(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function Op(t) {
      var e = t.type;
      return (
        (t = t.nodeName) &&
        t.toLowerCase() === "input" &&
        (e === "checkbox" || e === "radio")
      );
    }
    function Z1(t) {
      var e = Op(t) ? "checked" : "value",
        a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        i = "" + t[e];
      if (
        !t.hasOwnProperty(e) &&
        typeof a < "u" &&
        typeof a.get == "function" &&
        typeof a.set == "function"
      ) {
        var s = a.get,
          c = a.set;
        return (
          Object.defineProperty(t, e, {
            configurable: !0,
            get: function () {
              return s.call(this);
            },
            set: function (f) {
              ((i = "" + f), c.call(this, f));
            },
          }),
          Object.defineProperty(t, e, { enumerable: a.enumerable }),
          {
            getValue: function () {
              return i;
            },
            setValue: function (f) {
              i = "" + f;
            },
            stopTracking: function () {
              ((t._valueTracker = null), delete t[e]);
            },
          }
        );
      }
    }
    function as(t) {
      t._valueTracker || (t._valueTracker = Z1(t));
    }
    function _p(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(),
        i = "";
      return (
        t && (i = Op(t) ? (t.checked ? "true" : "false") : t.value),
        (t = i),
        t !== a ? (e.setValue(t), !0) : !1
      );
    }
    function ns(t) {
      if (
        ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
      )
        return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var Q1 = /[\n"\\]/g;
    function Ee(t) {
      return t.replace(Q1, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Zo(t, e, a, i, s, c, f, p) {
      ((t.name = ""),
        f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean"
          ? (t.type = f)
          : t.removeAttribute("type"),
        e != null
          ? f === "number"
            ? ((e === 0 && t.value === "") || t.value != e) &&
              (t.value = "" + Ae(e))
            : t.value !== "" + Ae(e) && (t.value = "" + Ae(e))
          : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
        e != null
          ? Qo(t, f, Ae(e))
          : a != null
            ? Qo(t, f, Ae(a))
            : i != null && t.removeAttribute("value"),
        s == null && c != null && (t.defaultChecked = !!c),
        s != null &&
          (t.checked = s && typeof s != "function" && typeof s != "symbol"),
        p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean"
          ? (t.name = "" + Ae(p))
          : t.removeAttribute("name"));
    }
    function Cp(t, e, a, i, s, c, f, p) {
      if (
        (c != null &&
          typeof c != "function" &&
          typeof c != "symbol" &&
          typeof c != "boolean" &&
          (t.type = c),
        e != null || a != null)
      ) {
        if (!((c !== "submit" && c !== "reset") || e != null)) return;
        ((a = a != null ? "" + Ae(a) : ""),
          (e = e != null ? "" + Ae(e) : a),
          p || e === t.value || (t.value = e),
          (t.defaultValue = e));
      }
      ((i = i ?? s),
        (i = typeof i != "function" && typeof i != "symbol" && !!i),
        (t.checked = p ? t.checked : !!i),
        (t.defaultChecked = !!i),
        f != null &&
          typeof f != "function" &&
          typeof f != "symbol" &&
          typeof f != "boolean" &&
          (t.name = f));
    }
    function Qo(t, e, a) {
      (e === "number" && ns(t.ownerDocument) === t) ||
        t.defaultValue === "" + a ||
        (t.defaultValue = "" + a);
    }
    function On(t, e, a, i) {
      if (((t = t.options), e)) {
        e = {};
        for (var s = 0; s < a.length; s++) e["$" + a[s]] = !0;
        for (a = 0; a < t.length; a++)
          ((s = e.hasOwnProperty("$" + t[a].value)),
            t[a].selected !== s && (t[a].selected = s),
            s && i && (t[a].defaultSelected = !0));
      } else {
        for (a = "" + Ae(a), e = null, s = 0; s < t.length; s++) {
          if (t[s].value === a) {
            ((t[s].selected = !0), i && (t[s].defaultSelected = !0));
            return;
          }
          e !== null || t[s].disabled || (e = t[s]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Np(t, e, a) {
      if (
        e != null &&
        ((e = "" + Ae(e)), e !== t.value && (t.value = e), a == null)
      ) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + Ae(a) : "";
    }
    function Vp(t, e, a, i) {
      if (e == null) {
        if (i != null) {
          if (a != null) throw Error(o(92));
          if (Yt(i)) {
            if (1 < i.length) throw Error(o(93));
            i = i[0];
          }
          a = i;
        }
        (a == null && (a = ""), (e = a));
      }
      ((a = Ae(e)),
        (t.defaultValue = a),
        (i = t.textContent),
        i === a && i !== "" && i !== null && (t.value = i));
    }
    function _n(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var P1 = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
      ),
    );
    function jp(t, e, a) {
      var i = e.indexOf("--") === 0;
      a == null || typeof a == "boolean" || a === ""
        ? i
          ? t.setProperty(e, "")
          : e === "float"
            ? (t.cssFloat = "")
            : (t[e] = "")
        : i
          ? t.setProperty(e, a)
          : typeof a != "number" || a === 0 || P1.has(e)
            ? e === "float"
              ? (t.cssFloat = a)
              : (t[e] = ("" + a).trim())
            : (t[e] = a + "px");
    }
    function Up(t, e, a) {
      if (e != null && typeof e != "object") throw Error(o(62));
      if (((t = t.style), a != null)) {
        for (var i in a)
          !a.hasOwnProperty(i) ||
            (e != null && e.hasOwnProperty(i)) ||
            (i.indexOf("--") === 0
              ? t.setProperty(i, "")
              : i === "float"
                ? (t.cssFloat = "")
                : (t[i] = ""));
        for (var s in e)
          ((i = e[s]), e.hasOwnProperty(s) && a[s] !== i && jp(t, s, i));
      } else for (var c in e) e.hasOwnProperty(c) && jp(t, c, e[c]);
    }
    function Po(t) {
      if (t.indexOf("-") === -1) return !1;
      switch (t) {
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
    var J1 = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      F1 =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function is(t) {
      return F1.test("" + t)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : t;
    }
    var Jo = null;
    function Fo(t) {
      return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
      );
    }
    var Cn = null,
      Nn = null;
    function Bp(t) {
      var e = Dn(t);
      if (e && (t = e.stateNode)) {
        var a = t[se] || null;
        t: switch (((t = e.stateNode), e.type)) {
          case "input":
            if (
              (Zo(
                t,
                a.value,
                a.defaultValue,
                a.defaultValue,
                a.checked,
                a.defaultChecked,
                a.type,
                a.name,
              ),
              (e = a.name),
              a.type === "radio" && e != null)
            ) {
              for (a = t; a.parentNode; ) a = a.parentNode;
              for (
                a = a.querySelectorAll(
                  'input[name="' + Ee("" + e) + '"][type="radio"]',
                ),
                  e = 0;
                e < a.length;
                e++
              ) {
                var i = a[e];
                if (i !== t && i.form === t.form) {
                  var s = i[se] || null;
                  if (!s) throw Error(o(90));
                  Zo(
                    i,
                    s.value,
                    s.defaultValue,
                    s.defaultValue,
                    s.checked,
                    s.defaultChecked,
                    s.type,
                    s.name,
                  );
                }
              }
              for (e = 0; e < a.length; e++)
                ((i = a[e]), i.form === t.form && _p(i));
            }
            break t;
          case "textarea":
            Np(t, a.value, a.defaultValue);
            break t;
          case "select":
            ((e = a.value), e != null && On(t, !!a.multiple, e, !1));
        }
      }
    }
    var Wo = !1;
    function Lp(t, e, a) {
      if (Wo) return t(e, a);
      Wo = !0;
      try {
        var i = t(e);
        return i;
      } finally {
        if (
          ((Wo = !1),
          (Cn !== null || Nn !== null) &&
            (Gs(), Cn && ((e = Cn), (t = Nn), (Nn = Cn = null), Bp(e), t)))
        )
          for (e = 0; e < t.length; e++) Bp(t[e]);
      }
    }
    function Ci(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var i = a[se] || null;
      if (i === null) return null;
      a = i[e];
      t: switch (e) {
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
          ((i = !i.disabled) ||
            ((t = t.type),
            (i = !(
              t === "button" ||
              t === "input" ||
              t === "select" ||
              t === "textarea"
            ))),
            (t = !i));
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (a && typeof a != "function") throw Error(o(231, e, typeof a));
      return a;
    }
    var ta = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      $o = !1;
    if (ta)
      try {
        var Ni = {};
        (Object.defineProperty(Ni, "passive", {
          get: function () {
            $o = !0;
          },
        }),
          window.addEventListener("test", Ni, Ni),
          window.removeEventListener("test", Ni, Ni));
      } catch {
        $o = !1;
      }
    var Sa = null,
      Io = null,
      rs = null;
    function Hp() {
      if (rs) return rs;
      var t,
        e = Io,
        a = e.length,
        i,
        s = "value" in Sa ? Sa.value : Sa.textContent,
        c = s.length;
      for (t = 0; t < a && e[t] === s[t]; t++);
      var f = a - t;
      for (i = 1; i <= f && e[a - i] === s[c - i]; i++);
      return (rs = s.slice(t, 1 < i ? 1 - i : void 0));
    }
    function ss(t) {
      var e = t.keyCode;
      return (
        "charCode" in t
          ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
          : (t = e),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
      );
    }
    function ls() {
      return !0;
    }
    function Yp() {
      return !1;
    }
    function le(t) {
      function e(a, i, s, c, f) {
        ((this._reactName = a),
          (this._targetInst = s),
          (this.type = i),
          (this.nativeEvent = c),
          (this.target = f),
          (this.currentTarget = null));
        for (var p in t)
          t.hasOwnProperty(p) && ((a = t[p]), (this[p] = a ? a(c) : c[p]));
        return (
          (this.isDefaultPrevented = (
            c.defaultPrevented != null
              ? c.defaultPrevented
              : c.returnValue === !1
          )
            ? ls
            : Yp),
          (this.isPropagationStopped = Yp),
          this
        );
      }
      return (
        y(e.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a &&
              (a.preventDefault
                ? a.preventDefault()
                : typeof a.returnValue != "unknown" && (a.returnValue = !1),
              (this.isDefaultPrevented = ls));
          },
          stopPropagation: function () {
            var a = this.nativeEvent;
            a &&
              (a.stopPropagation
                ? a.stopPropagation()
                : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
              (this.isPropagationStopped = ls));
          },
          persist: function () {},
          isPersistent: ls,
        }),
        e
      );
    }
    var Wa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
          return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      os = le(Wa),
      Vi = y({}, Wa, { view: 0, detail: 0 }),
      W1 = le(Vi),
      tc,
      ec,
      ji,
      cs = y({}, Vi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: nc,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
          return t.relatedTarget === void 0
            ? t.fromElement === t.srcElement
              ? t.toElement
              : t.fromElement
            : t.relatedTarget;
        },
        movementX: function (t) {
          return "movementX" in t
            ? t.movementX
            : (t !== ji &&
                (ji && t.type === "mousemove"
                  ? ((tc = t.screenX - ji.screenX),
                    (ec = t.screenY - ji.screenY))
                  : (ec = tc = 0),
                (ji = t)),
              tc);
        },
        movementY: function (t) {
          return "movementY" in t ? t.movementY : ec;
        },
      }),
      qp = le(cs),
      $1 = y({}, cs, { dataTransfer: 0 }),
      I1 = le($1),
      t2 = y({}, Vi, { relatedTarget: 0 }),
      ac = le(t2),
      e2 = y({}, Wa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      a2 = le(e2),
      n2 = y({}, Wa, {
        clipboardData: function (t) {
          return "clipboardData" in t ? t.clipboardData : window.clipboardData;
        },
      }),
      i2 = le(n2),
      r2 = y({}, Wa, { data: 0 }),
      Gp = le(r2),
      s2 = {
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
      l2 = {
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
      o2 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function c2(t) {
      var e = this.nativeEvent;
      return e.getModifierState
        ? e.getModifierState(t)
        : (t = o2[t])
          ? !!e[t]
          : !1;
    }
    function nc() {
      return c2;
    }
    var u2 = y({}, Vi, {
        key: function (t) {
          if (t.key) {
            var e = s2[t.key] || t.key;
            if (e !== "Unidentified") return e;
          }
          return t.type === "keypress"
            ? ((t = ss(t)), t === 13 ? "Enter" : String.fromCharCode(t))
            : t.type === "keydown" || t.type === "keyup"
              ? l2[t.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: nc,
        charCode: function (t) {
          return t.type === "keypress" ? ss(t) : 0;
        },
        keyCode: function (t) {
          return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
        },
        which: function (t) {
          return t.type === "keypress"
            ? ss(t)
            : t.type === "keydown" || t.type === "keyup"
              ? t.keyCode
              : 0;
        },
      }),
      d2 = le(u2),
      f2 = y({}, cs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Xp = le(f2),
      h2 = y({}, Vi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: nc,
      }),
      p2 = le(h2),
      m2 = y({}, Wa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      g2 = le(m2),
      v2 = y({}, cs, {
        deltaX: function (t) {
          return "deltaX" in t
            ? t.deltaX
            : "wheelDeltaX" in t
              ? -t.wheelDeltaX
              : 0;
        },
        deltaY: function (t) {
          return "deltaY" in t
            ? t.deltaY
            : "wheelDeltaY" in t
              ? -t.wheelDeltaY
              : "wheelDelta" in t
                ? -t.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      y2 = le(v2),
      b2 = y({}, Wa, { newState: 0, oldState: 0 }),
      x2 = le(b2),
      w2 = [9, 13, 27, 32],
      ic = ta && "CompositionEvent" in window,
      Ui = null;
    ta && "documentMode" in document && (Ui = document.documentMode);
    var S2 = ta && "TextEvent" in window && !Ui,
      Kp = ta && (!ic || (Ui && 8 < Ui && 11 >= Ui)),
      Zp = " ",
      Qp = !1;
    function Pp(t, e) {
      switch (t) {
        case "keyup":
          return w2.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Jp(t) {
      return (
        (t = t.detail),
        typeof t == "object" && "data" in t ? t.data : null
      );
    }
    var Vn = !1;
    function T2(t, e) {
      switch (t) {
        case "compositionend":
          return Jp(e);
        case "keypress":
          return e.which !== 32 ? null : ((Qp = !0), Zp);
        case "textInput":
          return ((t = e.data), t === Zp && Qp ? null : t);
        default:
          return null;
      }
    }
    function A2(t, e) {
      if (Vn)
        return t === "compositionend" || (!ic && Pp(t, e))
          ? ((t = Hp()), (rs = Io = Sa = null), (Vn = !1), t)
          : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(e.ctrlKey || e.altKey || e.metaKey) ||
            (e.ctrlKey && e.altKey)
          ) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return Kp && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var E2 = {
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
    };
    function Fp(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!E2[t.type] : e === "textarea";
    }
    function Wp(t, e, a, i) {
      (Cn ? (Nn ? Nn.push(i) : (Nn = [i])) : (Cn = i),
        (e = Js(e, "onChange")),
        0 < e.length &&
          ((a = new os("onChange", "change", null, a, i)),
          t.push({ event: a, listeners: e })));
    }
    var Bi = null,
      Li = null;
    function M2(t) {
      Ov(t, 0);
    }
    function us(t) {
      var e = _i(t);
      if (_p(e)) return t;
    }
    function $p(t, e) {
      if (t === "change") return e;
    }
    var Ip = !1;
    if (ta) {
      var rc;
      if (ta) {
        var sc = "oninput" in document;
        if (!sc) {
          var tm = document.createElement("div");
          (tm.setAttribute("oninput", "return;"),
            (sc = typeof tm.oninput == "function"));
        }
        rc = sc;
      } else rc = !1;
      Ip = rc && (!document.documentMode || 9 < document.documentMode);
    }
    function em() {
      Bi && (Bi.detachEvent("onpropertychange", am), (Li = Bi = null));
    }
    function am(t) {
      if (t.propertyName === "value" && us(Li)) {
        var e = [];
        (Wp(e, Li, t, Fo(t)), Lp(M2, e));
      }
    }
    function D2(t, e, a) {
      t === "focusin"
        ? (em(), (Bi = e), (Li = a), Bi.attachEvent("onpropertychange", am))
        : t === "focusout" && em();
    }
    function k2(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return us(Li);
    }
    function z2(t, e) {
      if (t === "click") return us(e);
    }
    function R2(t, e) {
      if (t === "input" || t === "change") return us(e);
    }
    function O2(t, e) {
      return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
    }
    var me = typeof Object.is == "function" ? Object.is : O2;
    function Hi(t, e) {
      if (me(t, e)) return !0;
      if (
        typeof t != "object" ||
        t === null ||
        typeof e != "object" ||
        e === null
      )
        return !1;
      var a = Object.keys(t),
        i = Object.keys(e);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var s = a[i];
        if (!Vo.call(e, s) || !me(t[s], e[s])) return !1;
      }
      return !0;
    }
    function nm(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function im(t, e) {
      var a = nm(t);
      t = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (((i = t + a.textContent.length), t <= e && i >= e))
            return { node: a, offset: e - t };
          t = i;
        }
        t: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break t;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = nm(a);
      }
    }
    function rm(t, e) {
      return t && e
        ? t === e
          ? !0
          : t && t.nodeType === 3
            ? !1
            : e && e.nodeType === 3
              ? rm(t, e.parentNode)
              : "contains" in t
                ? t.contains(e)
                : t.compareDocumentPosition
                  ? !!(t.compareDocumentPosition(e) & 16)
                  : !1
        : !1;
    }
    function sm(t) {
      t =
        t != null &&
        t.ownerDocument != null &&
        t.ownerDocument.defaultView != null
          ? t.ownerDocument.defaultView
          : window;
      for (var e = ns(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) t = e.contentWindow;
        else break;
        e = ns(t.document);
      }
      return e;
    }
    function lc(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return (
        e &&
        ((e === "input" &&
          (t.type === "text" ||
            t.type === "search" ||
            t.type === "tel" ||
            t.type === "url" ||
            t.type === "password")) ||
          e === "textarea" ||
          t.contentEditable === "true")
      );
    }
    var _2 = ta && "documentMode" in document && 11 >= document.documentMode,
      jn = null,
      oc = null,
      Yi = null,
      cc = !1;
    function lm(t, e, a) {
      var i =
        a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      cc ||
        jn == null ||
        jn !== ns(i) ||
        ((i = jn),
        "selectionStart" in i && lc(i)
          ? (i = { start: i.selectionStart, end: i.selectionEnd })
          : ((i = (
              (i.ownerDocument && i.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (i = {
              anchorNode: i.anchorNode,
              anchorOffset: i.anchorOffset,
              focusNode: i.focusNode,
              focusOffset: i.focusOffset,
            })),
        (Yi && Hi(Yi, i)) ||
          ((Yi = i),
          (i = Js(oc, "onSelect")),
          0 < i.length &&
            ((e = new os("onSelect", "select", null, e, a)),
            t.push({ event: e, listeners: i }),
            (e.target = jn))));
    }
    function $a(t, e) {
      var a = {};
      return (
        (a[t.toLowerCase()] = e.toLowerCase()),
        (a["Webkit" + t] = "webkit" + e),
        (a["Moz" + t] = "moz" + e),
        a
      );
    }
    var Un = {
        animationend: $a("Animation", "AnimationEnd"),
        animationiteration: $a("Animation", "AnimationIteration"),
        animationstart: $a("Animation", "AnimationStart"),
        transitionrun: $a("Transition", "TransitionRun"),
        transitionstart: $a("Transition", "TransitionStart"),
        transitioncancel: $a("Transition", "TransitionCancel"),
        transitionend: $a("Transition", "TransitionEnd"),
      },
      uc = {},
      om = {};
    ta &&
      ((om = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Un.animationend.animation,
        delete Un.animationiteration.animation,
        delete Un.animationstart.animation),
      "TransitionEvent" in window || delete Un.transitionend.transition);
    function Ia(t) {
      if (uc[t]) return uc[t];
      if (!Un[t]) return t;
      var e = Un[t],
        a;
      for (a in e) if (e.hasOwnProperty(a) && a in om) return (uc[t] = e[a]);
      return t;
    }
    var cm = Ia("animationend"),
      um = Ia("animationiteration"),
      dm = Ia("animationstart"),
      C2 = Ia("transitionrun"),
      N2 = Ia("transitionstart"),
      V2 = Ia("transitioncancel"),
      fm = Ia("transitionend"),
      hm = new Map(),
      dc =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    dc.push("scrollEnd");
    function Ue(t, e) {
      (hm.set(t, e), Fa(e, [t]));
    }
    var pm = new WeakMap();
    function Me(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = pm.get(t);
        return a !== void 0
          ? a
          : ((e = { value: t, source: e, stack: Rp(e) }), pm.set(t, e), e);
      }
      return { value: t, source: e, stack: Rp(e) };
    }
    var De = [],
      Bn = 0,
      fc = 0;
    function ds() {
      for (var t = Bn, e = (fc = Bn = 0); e < t; ) {
        var a = De[e];
        De[e++] = null;
        var i = De[e];
        De[e++] = null;
        var s = De[e];
        De[e++] = null;
        var c = De[e];
        if (((De[e++] = null), i !== null && s !== null)) {
          var f = i.pending;
          (f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
            (i.pending = s));
        }
        c !== 0 && mm(a, s, c);
      }
    }
    function fs(t, e, a, i) {
      ((De[Bn++] = t),
        (De[Bn++] = e),
        (De[Bn++] = a),
        (De[Bn++] = i),
        (fc |= i),
        (t.lanes |= i),
        (t = t.alternate),
        t !== null && (t.lanes |= i));
    }
    function hc(t, e, a, i) {
      return (fs(t, e, a, i), hs(t));
    }
    function Ln(t, e) {
      return (fs(t, null, null, e), hs(t));
    }
    function mm(t, e, a) {
      t.lanes |= a;
      var i = t.alternate;
      i !== null && (i.lanes |= a);
      for (var s = !1, c = t.return; c !== null; )
        ((c.childLanes |= a),
          (i = c.alternate),
          i !== null && (i.childLanes |= a),
          c.tag === 22 &&
            ((t = c.stateNode), t === null || t._visibility & 1 || (s = !0)),
          (t = c),
          (c = c.return));
      return t.tag === 3
        ? ((c = t.stateNode),
          s &&
            e !== null &&
            ((s = 31 - pe(a)),
            (t = c.hiddenUpdates),
            (i = t[s]),
            i === null ? (t[s] = [e]) : i.push(e),
            (e.lane = a | 536870912)),
          c)
        : null;
    }
    function hs(t) {
      if (50 < fr) throw ((fr = 0), (bu = null), Error(o(185)));
      for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
      return t.tag === 3 ? t.stateNode : null;
    }
    var Hn = {};
    function j2(t, e, a, i) {
      ((this.tag = t),
        (this.key = a),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = e),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = i),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function ge(t, e, a, i) {
      return new j2(t, e, a, i);
    }
    function pc(t) {
      return ((t = t.prototype), !(!t || !t.isReactComponent));
    }
    function ea(t, e) {
      var a = t.alternate;
      return (
        a === null
          ? ((a = ge(t.tag, e, t.key, t.mode)),
            (a.elementType = t.elementType),
            (a.type = t.type),
            (a.stateNode = t.stateNode),
            (a.alternate = t),
            (t.alternate = a))
          : ((a.pendingProps = e),
            (a.type = t.type),
            (a.flags = 0),
            (a.subtreeFlags = 0),
            (a.deletions = null)),
        (a.flags = t.flags & 65011712),
        (a.childLanes = t.childLanes),
        (a.lanes = t.lanes),
        (a.child = t.child),
        (a.memoizedProps = t.memoizedProps),
        (a.memoizedState = t.memoizedState),
        (a.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (a.dependencies =
          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
        (a.sibling = t.sibling),
        (a.index = t.index),
        (a.ref = t.ref),
        (a.refCleanup = t.refCleanup),
        a
      );
    }
    function gm(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return (
        a === null
          ? ((t.childLanes = 0),
            (t.lanes = e),
            (t.child = null),
            (t.subtreeFlags = 0),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.dependencies = null),
            (t.stateNode = null))
          : ((t.childLanes = a.childLanes),
            (t.lanes = a.lanes),
            (t.child = a.child),
            (t.subtreeFlags = 0),
            (t.deletions = null),
            (t.memoizedProps = a.memoizedProps),
            (t.memoizedState = a.memoizedState),
            (t.updateQueue = a.updateQueue),
            (t.type = a.type),
            (e = a.dependencies),
            (t.dependencies =
              e === null
                ? null
                : { lanes: e.lanes, firstContext: e.firstContext })),
        t
      );
    }
    function ps(t, e, a, i, s, c) {
      var f = 0;
      if (((i = t), typeof t == "function")) pc(t) && (f = 1);
      else if (typeof t == "string")
        f = BS(t, a, $.current)
          ? 26
          : t === "html" || t === "head" || t === "body"
            ? 27
            : 5;
      else
        t: switch (t) {
          case Tt:
            return (
              (t = ge(31, a, e, s)),
              (t.elementType = Tt),
              (t.lanes = c),
              t
            );
          case C:
            return tn(a.children, s, c, e);
          case L:
            ((f = 8), (s |= 24));
            break;
          case H:
            return (
              (t = ge(12, a, e, s | 2)),
              (t.elementType = H),
              (t.lanes = c),
              t
            );
          case B:
            return (
              (t = ge(13, a, e, s)),
              (t.elementType = B),
              (t.lanes = c),
              t
            );
          case rt:
            return (
              (t = ge(19, a, e, s)),
              (t.elementType = rt),
              (t.lanes = c),
              t
            );
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case X:
                case U:
                  f = 10;
                  break t;
                case Y:
                  f = 9;
                  break t;
                case J:
                  f = 11;
                  break t;
                case dt:
                  f = 14;
                  break t;
                case et:
                  ((f = 16), (i = null));
                  break t;
              }
            ((f = 29),
              (a = Error(o(130, t === null ? "null" : typeof t, ""))),
              (i = null));
        }
      return (
        (e = ge(f, a, e, s)),
        (e.elementType = t),
        (e.type = i),
        (e.lanes = c),
        e
      );
    }
    function tn(t, e, a, i) {
      return ((t = ge(7, t, i, e)), (t.lanes = a), t);
    }
    function mc(t, e, a) {
      return ((t = ge(6, t, null, e)), (t.lanes = a), t);
    }
    function gc(t, e, a) {
      return (
        (e = ge(4, t.children !== null ? t.children : [], t.key, e)),
        (e.lanes = a),
        (e.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation,
        }),
        e
      );
    }
    var Yn = [],
      qn = 0,
      ms = null,
      gs = 0,
      ke = [],
      ze = 0,
      en = null,
      aa = 1,
      na = "";
    function an(t, e) {
      ((Yn[qn++] = gs), (Yn[qn++] = ms), (ms = t), (gs = e));
    }
    function vm(t, e, a) {
      ((ke[ze++] = aa), (ke[ze++] = na), (ke[ze++] = en), (en = t));
      var i = aa;
      t = na;
      var s = 32 - pe(i) - 1;
      ((i &= ~(1 << s)), (a += 1));
      var c = 32 - pe(e) + s;
      if (30 < c) {
        var f = s - (s % 5);
        ((c = (i & ((1 << f) - 1)).toString(32)),
          (i >>= f),
          (s -= f),
          (aa = (1 << (32 - pe(e) + s)) | (a << s) | i),
          (na = c + t));
      } else ((aa = (1 << c) | (a << s) | i), (na = t));
    }
    function vc(t) {
      t.return !== null && (an(t, 1), vm(t, 1, 0));
    }
    function yc(t) {
      for (; t === ms; )
        ((ms = Yn[--qn]), (Yn[qn] = null), (gs = Yn[--qn]), (Yn[qn] = null));
      for (; t === en; )
        ((en = ke[--ze]),
          (ke[ze] = null),
          (na = ke[--ze]),
          (ke[ze] = null),
          (aa = ke[--ze]),
          (ke[ze] = null));
    }
    var re = null,
      _t = null,
      mt = !1,
      nn = null,
      Ke = !1,
      bc = Error(o(519));
    function rn(t) {
      var e = Error(o(418, ""));
      throw (Xi(Me(e, t)), bc);
    }
    function ym(t) {
      var e = t.stateNode,
        a = t.type,
        i = t.memoizedProps;
      switch (((e[ee] = t), (e[se] = i), a)) {
        case "dialog":
          (ut("cancel", e), ut("close", e));
          break;
        case "iframe":
        case "object":
        case "embed":
          ut("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < pr.length; a++) ut(pr[a], e);
          break;
        case "source":
          ut("error", e);
          break;
        case "img":
        case "image":
        case "link":
          (ut("error", e), ut("load", e));
          break;
        case "details":
          ut("toggle", e);
          break;
        case "input":
          (ut("invalid", e),
            Cp(
              e,
              i.value,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name,
              !0,
            ),
            as(e));
          break;
        case "select":
          ut("invalid", e);
          break;
        case "textarea":
          (ut("invalid", e), Vp(e, i.value, i.defaultValue, i.children), as(e));
      }
      ((a = i.children),
        (typeof a != "string" &&
          typeof a != "number" &&
          typeof a != "bigint") ||
        e.textContent === "" + a ||
        i.suppressHydrationWarning === !0 ||
        Vv(e.textContent, a)
          ? (i.popover != null && (ut("beforetoggle", e), ut("toggle", e)),
            i.onScroll != null && ut("scroll", e),
            i.onScrollEnd != null && ut("scrollend", e),
            i.onClick != null && (e.onclick = Fs),
            (e = !0))
          : (e = !1),
        e || rn(t));
    }
    function bm(t) {
      for (re = t.return; re; )
        switch (re.tag) {
          case 5:
          case 13:
            Ke = !1;
            return;
          case 27:
          case 3:
            Ke = !0;
            return;
          default:
            re = re.return;
        }
    }
    function qi(t) {
      if (t !== re) return !1;
      if (!mt) return (bm(t), (mt = !0), !1);
      var e = t.tag,
        a;
      if (
        ((a = e !== 3 && e !== 27) &&
          ((a = e === 5) &&
            ((a = t.type),
            (a =
              !(a !== "form" && a !== "button") ||
              Vu(t.type, t.memoizedProps))),
          (a = !a)),
        a && _t && rn(t),
        bm(t),
        e === 13)
      ) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
          throw Error(o(317));
        t: {
          for (t = t.nextSibling, e = 0; t; ) {
            if (t.nodeType === 8)
              if (((a = t.data), a === "/$")) {
                if (e === 0) {
                  _t = Le(t.nextSibling);
                  break t;
                }
                e--;
              } else (a !== "$" && a !== "$!" && a !== "$?") || e++;
            t = t.nextSibling;
          }
          _t = null;
        }
      } else
        e === 27
          ? ((e = _t),
            Ba(t.type) ? ((t = Lu), (Lu = null), (_t = t)) : (_t = e))
          : (_t = re ? Le(t.stateNode.nextSibling) : null);
      return !0;
    }
    function Gi() {
      ((_t = re = null), (mt = !1));
    }
    function xm() {
      var t = nn;
      return (
        t !== null &&
          (ue === null ? (ue = t) : ue.push.apply(ue, t), (nn = null)),
        t
      );
    }
    function Xi(t) {
      nn === null ? (nn = [t]) : nn.push(t);
    }
    var xc = j(null),
      sn = null,
      ia = null;
    function Ta(t, e, a) {
      (G(xc, e._currentValue), (e._currentValue = a));
    }
    function ra(t) {
      ((t._currentValue = xc.current), K(xc));
    }
    function wc(t, e, a) {
      for (; t !== null; ) {
        var i = t.alternate;
        if (
          ((t.childLanes & e) !== e
            ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
            : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
          t === a)
        )
          break;
        t = t.return;
      }
    }
    function Sc(t, e, a, i) {
      var s = t.child;
      for (s !== null && (s.return = t); s !== null; ) {
        var c = s.dependencies;
        if (c !== null) {
          var f = s.child;
          c = c.firstContext;
          t: for (; c !== null; ) {
            var p = c;
            c = s;
            for (var b = 0; b < e.length; b++)
              if (p.context === e[b]) {
                ((c.lanes |= a),
                  (p = c.alternate),
                  p !== null && (p.lanes |= a),
                  wc(c.return, a, t),
                  i || (f = null));
                break t;
              }
            c = p.next;
          }
        } else if (s.tag === 18) {
          if (((f = s.return), f === null)) throw Error(o(341));
          ((f.lanes |= a),
            (c = f.alternate),
            c !== null && (c.lanes |= a),
            wc(f, a, t),
            (f = null));
        } else f = s.child;
        if (f !== null) f.return = s;
        else
          for (f = s; f !== null; ) {
            if (f === t) {
              f = null;
              break;
            }
            if (((s = f.sibling), s !== null)) {
              ((s.return = f.return), (f = s));
              break;
            }
            f = f.return;
          }
        s = f;
      }
    }
    function Ki(t, e, a, i) {
      t = null;
      for (var s = e, c = !1; s !== null; ) {
        if (!c) {
          if ((s.flags & 524288) !== 0) c = !0;
          else if ((s.flags & 262144) !== 0) break;
        }
        if (s.tag === 10) {
          var f = s.alternate;
          if (f === null) throw Error(o(387));
          if (((f = f.memoizedProps), f !== null)) {
            var p = s.type;
            me(s.pendingProps.value, f.value) ||
              (t !== null ? t.push(p) : (t = [p]));
          }
        } else if (s === fe.current) {
          if (((f = s.alternate), f === null)) throw Error(o(387));
          f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
            (t !== null ? t.push(xr) : (t = [xr]));
        }
        s = s.return;
      }
      (t !== null && Sc(e, t, a, i), (e.flags |= 262144));
    }
    function vs(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!me(t.context._currentValue, t.memoizedValue)) return !0;
        t = t.next;
      }
      return !1;
    }
    function ln(t) {
      ((sn = t),
        (ia = null),
        (t = t.dependencies),
        t !== null && (t.firstContext = null));
    }
    function ae(t) {
      return wm(sn, t);
    }
    function ys(t, e) {
      return (sn === null && ln(t), wm(t, e));
    }
    function wm(t, e) {
      var a = e._currentValue;
      if (((e = { context: e, memoizedValue: a, next: null }), ia === null)) {
        if (t === null) throw Error(o(308));
        ((ia = e),
          (t.dependencies = { lanes: 0, firstContext: e }),
          (t.flags |= 524288));
      } else ia = ia.next = e;
      return a;
    }
    var U2 =
        typeof AbortController < "u"
          ? AbortController
          : function () {
              var t = [],
                e = (this.signal = {
                  aborted: !1,
                  addEventListener: function (a, i) {
                    t.push(i);
                  },
                });
              this.abort = function () {
                ((e.aborted = !0),
                  t.forEach(function (a) {
                    return a();
                  }));
              };
            },
      B2 = n.unstable_scheduleCallback,
      L2 = n.unstable_NormalPriority,
      qt = {
        $$typeof: U,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function Tc() {
      return { controller: new U2(), data: new Map(), refCount: 0 };
    }
    function Zi(t) {
      (t.refCount--,
        t.refCount === 0 &&
          B2(L2, function () {
            t.controller.abort();
          }));
    }
    var Qi = null,
      Ac = 0,
      Gn = 0,
      Xn = null;
    function H2(t, e) {
      if (Qi === null) {
        var a = (Qi = []);
        ((Ac = 0),
          (Gn = Mu()),
          (Xn = {
            status: "pending",
            value: void 0,
            then: function (i) {
              a.push(i);
            },
          }));
      }
      return (Ac++, e.then(Sm, Sm), e);
    }
    function Sm() {
      if (--Ac === 0 && Qi !== null) {
        Xn !== null && (Xn.status = "fulfilled");
        var t = Qi;
        ((Qi = null), (Gn = 0), (Xn = null));
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function Y2(t, e) {
      var a = [],
        i = {
          status: "pending",
          value: null,
          reason: null,
          then: function (s) {
            a.push(s);
          },
        };
      return (
        t.then(
          function () {
            ((i.status = "fulfilled"), (i.value = e));
            for (var s = 0; s < a.length; s++) (0, a[s])(e);
          },
          function (s) {
            for (i.status = "rejected", i.reason = s, s = 0; s < a.length; s++)
              (0, a[s])(void 0);
          },
        ),
        i
      );
    }
    var Tm = O.S;
    O.S = function (t, e) {
      (typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        H2(t, e),
        Tm !== null && Tm(t, e));
    };
    var on = j(null);
    function Ec() {
      var t = on.current;
      return t !== null ? t : At.pooledCache;
    }
    function bs(t, e) {
      e === null ? G(on, on.current) : G(on, e.pool);
    }
    function Am() {
      var t = Ec();
      return t === null ? null : { parent: qt._currentValue, pool: t };
    }
    var Pi = Error(o(460)),
      Em = Error(o(474)),
      xs = Error(o(542)),
      Mc = { then: function () {} };
    function Mm(t) {
      return ((t = t.status), t === "fulfilled" || t === "rejected");
    }
    function ws() {}
    function Dm(t, e, a) {
      switch (
        ((a = t[a]),
        a === void 0 ? t.push(e) : a !== e && (e.then(ws, ws), (e = a)),
        e.status)
      ) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw ((t = e.reason), zm(t), t);
        default:
          if (typeof e.status == "string") e.then(ws, ws);
          else {
            if (((t = At), t !== null && 100 < t.shellSuspendCounter))
              throw Error(o(482));
            ((t = e),
              (t.status = "pending"),
              t.then(
                function (i) {
                  if (e.status === "pending") {
                    var s = e;
                    ((s.status = "fulfilled"), (s.value = i));
                  }
                },
                function (i) {
                  if (e.status === "pending") {
                    var s = e;
                    ((s.status = "rejected"), (s.reason = i));
                  }
                },
              ));
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw ((t = e.reason), zm(t), t);
          }
          throw ((Ji = e), Pi);
      }
    }
    var Ji = null;
    function km() {
      if (Ji === null) throw Error(o(459));
      var t = Ji;
      return ((Ji = null), t);
    }
    function zm(t) {
      if (t === Pi || t === xs) throw Error(o(483));
    }
    var Aa = !1;
    function Dc(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function kc(t, e) {
      ((t = t.updateQueue),
        e.updateQueue === t &&
          (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null,
          }));
    }
    function Ea(t) {
      return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function Ma(t, e, a) {
      var i = t.updateQueue;
      if (i === null) return null;
      if (((i = i.shared), (gt & 2) !== 0)) {
        var s = i.pending;
        return (
          s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
          (i.pending = e),
          (e = hs(t)),
          mm(t, null, a),
          e
        );
      }
      return (fs(t, i, e, a), hs(t));
    }
    function Fi(t, e, a) {
      if (
        ((e = e.updateQueue),
        e !== null && ((e = e.shared), (a & 4194048) !== 0))
      ) {
        var i = e.lanes;
        ((i &= t.pendingLanes), (a |= i), (e.lanes = a), Sp(t, a));
      }
    }
    function zc(t, e) {
      var a = t.updateQueue,
        i = t.alternate;
      if (i !== null && ((i = i.updateQueue), a === i)) {
        var s = null,
          c = null;
        if (((a = a.firstBaseUpdate), a !== null)) {
          do {
            var f = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null,
            };
            (c === null ? (s = c = f) : (c = c.next = f), (a = a.next));
          } while (a !== null);
          c === null ? (s = c = e) : (c = c.next = e);
        } else s = c = e;
        ((a = {
          baseState: i.baseState,
          firstBaseUpdate: s,
          lastBaseUpdate: c,
          shared: i.shared,
          callbacks: i.callbacks,
        }),
          (t.updateQueue = a));
        return;
      }
      ((t = a.lastBaseUpdate),
        t === null ? (a.firstBaseUpdate = e) : (t.next = e),
        (a.lastBaseUpdate = e));
    }
    var Rc = !1;
    function Wi() {
      if (Rc) {
        var t = Xn;
        if (t !== null) throw t;
      }
    }
    function $i(t, e, a, i) {
      Rc = !1;
      var s = t.updateQueue;
      Aa = !1;
      var c = s.firstBaseUpdate,
        f = s.lastBaseUpdate,
        p = s.shared.pending;
      if (p !== null) {
        s.shared.pending = null;
        var b = p,
          M = b.next;
        ((b.next = null), f === null ? (c = M) : (f.next = M), (f = b));
        var _ = t.alternate;
        _ !== null &&
          ((_ = _.updateQueue),
          (p = _.lastBaseUpdate),
          p !== f &&
            (p === null ? (_.firstBaseUpdate = M) : (p.next = M),
            (_.lastBaseUpdate = b)));
      }
      if (c !== null) {
        var V = s.baseState;
        ((f = 0), (_ = M = b = null), (p = c));
        do {
          var k = p.lane & -536870913,
            z = k !== p.lane;
          if (z ? (ft & k) === k : (i & k) === k) {
            (k !== 0 && k === Gn && (Rc = !0),
              _ !== null &&
                (_ = _.next =
                  {
                    lane: 0,
                    tag: p.tag,
                    payload: p.payload,
                    callback: null,
                    next: null,
                  }));
            t: {
              var at = t,
                I = p;
              k = e;
              var xt = a;
              switch (I.tag) {
                case 1:
                  if (((at = I.payload), typeof at == "function")) {
                    V = at.call(xt, V, k);
                    break t;
                  }
                  V = at;
                  break t;
                case 3:
                  at.flags = (at.flags & -65537) | 128;
                case 0:
                  if (
                    ((at = I.payload),
                    (k = typeof at == "function" ? at.call(xt, V, k) : at),
                    k == null)
                  )
                    break t;
                  V = y({}, V, k);
                  break t;
                case 2:
                  Aa = !0;
              }
            }
            ((k = p.callback),
              k !== null &&
                ((t.flags |= 64),
                z && (t.flags |= 8192),
                (z = s.callbacks),
                z === null ? (s.callbacks = [k]) : z.push(k)));
          } else
            ((z = {
              lane: k,
              tag: p.tag,
              payload: p.payload,
              callback: p.callback,
              next: null,
            }),
              _ === null ? ((M = _ = z), (b = V)) : (_ = _.next = z),
              (f |= k));
          if (((p = p.next), p === null)) {
            if (((p = s.shared.pending), p === null)) break;
            ((z = p),
              (p = z.next),
              (z.next = null),
              (s.lastBaseUpdate = z),
              (s.shared.pending = null));
          }
        } while (!0);
        (_ === null && (b = V),
          (s.baseState = b),
          (s.firstBaseUpdate = M),
          (s.lastBaseUpdate = _),
          c === null && (s.shared.lanes = 0),
          (Na |= f),
          (t.lanes = f),
          (t.memoizedState = V));
      }
    }
    function Rm(t, e) {
      if (typeof t != "function") throw Error(o(191, t));
      t.call(e);
    }
    function Om(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++) Rm(a[t], e);
    }
    var Kn = j(null),
      Ss = j(0);
    function _m(t, e) {
      ((t = fa), G(Ss, t), G(Kn, e), (fa = t | e.baseLanes));
    }
    function Oc() {
      (G(Ss, fa), G(Kn, Kn.current));
    }
    function _c() {
      ((fa = Ss.current), K(Kn), K(Ss));
    }
    var Da = 0,
      lt = null,
      yt = null,
      Ut = null,
      Ts = !1,
      Zn = !1,
      cn = !1,
      As = 0,
      Ii = 0,
      Qn = null,
      q2 = 0;
    function Nt() {
      throw Error(o(321));
    }
    function Cc(t, e) {
      if (e === null) return !1;
      for (var a = 0; a < e.length && a < t.length; a++)
        if (!me(t[a], e[a])) return !1;
      return !0;
    }
    function Nc(t, e, a, i, s, c) {
      return (
        (Da = c),
        (lt = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (O.H = t === null || t.memoizedState === null ? mg : gg),
        (cn = !1),
        (c = a(i, s)),
        (cn = !1),
        Zn && (c = Nm(e, a, i, s)),
        Cm(t),
        c
      );
    }
    function Cm(t) {
      O.H = Rs;
      var e = yt !== null && yt.next !== null;
      if (
        ((Da = 0), (Ut = yt = lt = null), (Ts = !1), (Ii = 0), (Qn = null), e)
      )
        throw Error(o(300));
      t === null ||
        Kt ||
        ((t = t.dependencies), t !== null && vs(t) && (Kt = !0));
    }
    function Nm(t, e, a, i) {
      lt = t;
      var s = 0;
      do {
        if ((Zn && (Qn = null), (Ii = 0), (Zn = !1), 25 <= s))
          throw Error(o(301));
        if (((s += 1), (Ut = yt = null), t.updateQueue != null)) {
          var c = t.updateQueue;
          ((c.lastEffect = null),
            (c.events = null),
            (c.stores = null),
            c.memoCache != null && (c.memoCache.index = 0));
        }
        ((O.H = J2), (c = e(a, i)));
      } while (Zn);
      return c;
    }
    function G2() {
      var t = O.H,
        e = t.useState()[0];
      return (
        (e = typeof e.then == "function" ? tr(e) : e),
        (t = t.useState()[0]),
        (yt !== null ? yt.memoizedState : null) !== t && (lt.flags |= 1024),
        e
      );
    }
    function Vc() {
      var t = As !== 0;
      return ((As = 0), t);
    }
    function jc(t, e, a) {
      ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
    }
    function Uc(t) {
      if (Ts) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          (e !== null && (e.pending = null), (t = t.next));
        }
        Ts = !1;
      }
      ((Da = 0), (Ut = yt = lt = null), (Zn = !1), (Ii = As = 0), (Qn = null));
    }
    function oe() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        Ut === null ? (lt.memoizedState = Ut = t) : (Ut = Ut.next = t),
        Ut
      );
    }
    function Bt() {
      if (yt === null) {
        var t = lt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = yt.next;
      var e = Ut === null ? lt.memoizedState : Ut.next;
      if (e !== null) ((Ut = e), (yt = t));
      else {
        if (t === null)
          throw lt.alternate === null ? Error(o(467)) : Error(o(310));
        ((yt = t),
          (t = {
            memoizedState: yt.memoizedState,
            baseState: yt.baseState,
            baseQueue: yt.baseQueue,
            queue: yt.queue,
            next: null,
          }),
          Ut === null ? (lt.memoizedState = Ut = t) : (Ut = Ut.next = t));
      }
      return Ut;
    }
    function Bc() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function tr(t) {
      var e = Ii;
      return (
        (Ii += 1),
        Qn === null && (Qn = []),
        (t = Dm(Qn, t, e)),
        (e = lt),
        (Ut === null ? e.memoizedState : Ut.next) === null &&
          ((e = e.alternate),
          (O.H = e === null || e.memoizedState === null ? mg : gg)),
        t
      );
    }
    function Es(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return tr(t);
        if (t.$$typeof === U) return ae(t);
      }
      throw Error(o(438, String(t)));
    }
    function Lc(t) {
      var e = null,
        a = lt.updateQueue;
      if ((a !== null && (e = a.memoCache), e == null)) {
        var i = lt.alternate;
        i !== null &&
          ((i = i.updateQueue),
          i !== null &&
            ((i = i.memoCache),
            i != null &&
              (e = {
                data: i.data.map(function (s) {
                  return s.slice();
                }),
                index: 0,
              })));
      }
      if (
        (e == null && (e = { data: [], index: 0 }),
        a === null && ((a = Bc()), (lt.updateQueue = a)),
        (a.memoCache = e),
        (a = e.data[e.index]),
        a === void 0)
      )
        for (a = e.data[e.index] = Array(t), i = 0; i < t; i++) a[i] = Ht;
      return (e.index++, a);
    }
    function sa(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Ms(t) {
      var e = Bt();
      return Hc(e, yt, t);
    }
    function Hc(t, e, a) {
      var i = t.queue;
      if (i === null) throw Error(o(311));
      i.lastRenderedReducer = a;
      var s = t.baseQueue,
        c = i.pending;
      if (c !== null) {
        if (s !== null) {
          var f = s.next;
          ((s.next = c.next), (c.next = f));
        }
        ((e.baseQueue = s = c), (i.pending = null));
      }
      if (((c = t.baseState), s === null)) t.memoizedState = c;
      else {
        e = s.next;
        var p = (f = null),
          b = null,
          M = e,
          _ = !1;
        do {
          var V = M.lane & -536870913;
          if (V !== M.lane ? (ft & V) === V : (Da & V) === V) {
            var k = M.revertLane;
            if (k === 0)
              (b !== null &&
                (b = b.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    action: M.action,
                    hasEagerState: M.hasEagerState,
                    eagerState: M.eagerState,
                    next: null,
                  }),
                V === Gn && (_ = !0));
            else if ((Da & k) === k) {
              ((M = M.next), k === Gn && (_ = !0));
              continue;
            } else
              ((V = {
                lane: 0,
                revertLane: M.revertLane,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null,
              }),
                b === null ? ((p = b = V), (f = c)) : (b = b.next = V),
                (lt.lanes |= k),
                (Na |= k));
            ((V = M.action),
              cn && a(c, V),
              (c = M.hasEagerState ? M.eagerState : a(c, V)));
          } else
            ((k = {
              lane: V,
              revertLane: M.revertLane,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              b === null ? ((p = b = k), (f = c)) : (b = b.next = k),
              (lt.lanes |= V),
              (Na |= V));
          M = M.next;
        } while (M !== null && M !== e);
        if (
          (b === null ? (f = c) : (b.next = p),
          !me(c, t.memoizedState) && ((Kt = !0), _ && ((a = Xn), a !== null)))
        )
          throw a;
        ((t.memoizedState = c),
          (t.baseState = f),
          (t.baseQueue = b),
          (i.lastRenderedState = c));
      }
      return (s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]);
    }
    function Yc(t) {
      var e = Bt(),
        a = e.queue;
      if (a === null) throw Error(o(311));
      a.lastRenderedReducer = t;
      var i = a.dispatch,
        s = a.pending,
        c = e.memoizedState;
      if (s !== null) {
        a.pending = null;
        var f = (s = s.next);
        do ((c = t(c, f.action)), (f = f.next));
        while (f !== s);
        (me(c, e.memoizedState) || (Kt = !0),
          (e.memoizedState = c),
          e.baseQueue === null && (e.baseState = c),
          (a.lastRenderedState = c));
      }
      return [c, i];
    }
    function Vm(t, e, a) {
      var i = lt,
        s = Bt(),
        c = mt;
      if (c) {
        if (a === void 0) throw Error(o(407));
        a = a();
      } else a = e();
      var f = !me((yt || s).memoizedState, a);
      (f && ((s.memoizedState = a), (Kt = !0)), (s = s.queue));
      var p = Bm.bind(null, i, s, t);
      if (
        (er(2048, 8, p, [t]),
        s.getSnapshot !== e || f || (Ut !== null && Ut.memoizedState.tag & 1))
      ) {
        if (
          ((i.flags |= 2048),
          Pn(9, Ds(), Um.bind(null, i, s, a, e), null),
          At === null)
        )
          throw Error(o(349));
        c || (Da & 124) !== 0 || jm(i, e, a);
      }
      return a;
    }
    function jm(t, e, a) {
      ((t.flags |= 16384),
        (t = { getSnapshot: e, value: a }),
        (e = lt.updateQueue),
        e === null
          ? ((e = Bc()), (lt.updateQueue = e), (e.stores = [t]))
          : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
    }
    function Um(t, e, a, i) {
      ((e.value = a), (e.getSnapshot = i), Lm(e) && Hm(t));
    }
    function Bm(t, e, a) {
      return a(function () {
        Lm(e) && Hm(t);
      });
    }
    function Lm(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !me(t, a);
      } catch {
        return !0;
      }
    }
    function Hm(t) {
      var e = Ln(t, 2);
      e !== null && we(e, t, 2);
    }
    function qc(t) {
      var e = oe();
      if (typeof t == "function") {
        var a = t;
        if (((t = a()), cn)) {
          xa(!0);
          try {
            a();
          } finally {
            xa(!1);
          }
        }
      }
      return (
        (e.memoizedState = e.baseState = t),
        (e.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: sa,
          lastRenderedState: t,
        }),
        e
      );
    }
    function Ym(t, e, a, i) {
      return ((t.baseState = a), Hc(t, yt, typeof i == "function" ? i : sa));
    }
    function X2(t, e, a, i, s) {
      if (zs(t)) throw Error(o(485));
      if (((t = e.action), t !== null)) {
        var c = {
          payload: s,
          action: t,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (f) {
            c.listeners.push(f);
          },
        };
        (O.T !== null ? a(!0) : (c.isTransition = !1),
          i(c),
          (a = e.pending),
          a === null
            ? ((c.next = e.pending = c), qm(e, c))
            : ((c.next = a.next), (e.pending = a.next = c)));
      }
    }
    function qm(t, e) {
      var a = e.action,
        i = e.payload,
        s = t.state;
      if (e.isTransition) {
        var c = O.T,
          f = {};
        O.T = f;
        try {
          var p = a(s, i),
            b = O.S;
          (b !== null && b(f, p), Gm(t, e, p));
        } catch (M) {
          Gc(t, e, M);
        } finally {
          O.T = c;
        }
      } else
        try {
          ((c = a(s, i)), Gm(t, e, c));
        } catch (M) {
          Gc(t, e, M);
        }
    }
    function Gm(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function"
        ? a.then(
            function (i) {
              Xm(t, e, i);
            },
            function (i) {
              return Gc(t, e, i);
            },
          )
        : Xm(t, e, a);
    }
    function Xm(t, e, a) {
      ((e.status = "fulfilled"),
        (e.value = a),
        Km(e),
        (t.state = a),
        (e = t.pending),
        e !== null &&
          ((a = e.next),
          a === e
            ? (t.pending = null)
            : ((a = a.next), (e.next = a), qm(t, a))));
    }
    function Gc(t, e, a) {
      var i = t.pending;
      if (((t.pending = null), i !== null)) {
        i = i.next;
        do ((e.status = "rejected"), (e.reason = a), Km(e), (e = e.next));
        while (e !== i);
      }
      t.action = null;
    }
    function Km(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Zm(t, e) {
      return e;
    }
    function Qm(t, e) {
      if (mt) {
        var a = At.formState;
        if (a !== null) {
          t: {
            var i = lt;
            if (mt) {
              if (_t) {
                e: {
                  for (var s = _t, c = Ke; s.nodeType !== 8; ) {
                    if (!c) {
                      s = null;
                      break e;
                    }
                    if (((s = Le(s.nextSibling)), s === null)) {
                      s = null;
                      break e;
                    }
                  }
                  ((c = s.data), (s = c === "F!" || c === "F" ? s : null));
                }
                if (s) {
                  ((_t = Le(s.nextSibling)), (i = s.data === "F!"));
                  break t;
                }
              }
              rn(i);
            }
            i = !1;
          }
          i && (e = a[0]);
        }
      }
      return (
        (a = oe()),
        (a.memoizedState = a.baseState = e),
        (i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zm,
          lastRenderedState: e,
        }),
        (a.queue = i),
        (a = fg.bind(null, lt, i)),
        (i.dispatch = a),
        (i = qc(!1)),
        (c = Pc.bind(null, lt, !1, i.queue)),
        (i = oe()),
        (s = { state: e, dispatch: null, action: t, pending: null }),
        (i.queue = s),
        (a = X2.bind(null, lt, s, c, a)),
        (s.dispatch = a),
        (i.memoizedState = t),
        [e, a, !1]
      );
    }
    function Pm(t) {
      var e = Bt();
      return Jm(e, yt, t);
    }
    function Jm(t, e, a) {
      if (
        ((e = Hc(t, e, Zm)[0]),
        (t = Ms(sa)[0]),
        typeof e == "object" && e !== null && typeof e.then == "function")
      )
        try {
          var i = tr(e);
        } catch (f) {
          throw f === Pi ? xs : f;
        }
      else i = e;
      e = Bt();
      var s = e.queue,
        c = s.dispatch;
      return (
        a !== e.memoizedState &&
          ((lt.flags |= 2048), Pn(9, Ds(), K2.bind(null, s, a), null)),
        [i, c, t]
      );
    }
    function K2(t, e) {
      t.action = e;
    }
    function Fm(t) {
      var e = Bt(),
        a = yt;
      if (a !== null) return Jm(e, a, t);
      (Bt(), (e = e.memoizedState), (a = Bt()));
      var i = a.queue.dispatch;
      return ((a.memoizedState = t), [e, i, !1]);
    }
    function Pn(t, e, a, i) {
      return (
        (t = { tag: t, create: a, deps: i, inst: e, next: null }),
        (e = lt.updateQueue),
        e === null && ((e = Bc()), (lt.updateQueue = e)),
        (a = e.lastEffect),
        a === null
          ? (e.lastEffect = t.next = t)
          : ((i = a.next), (a.next = t), (t.next = i), (e.lastEffect = t)),
        t
      );
    }
    function Ds() {
      return { destroy: void 0, resource: void 0 };
    }
    function Wm() {
      return Bt().memoizedState;
    }
    function ks(t, e, a, i) {
      var s = oe();
      ((i = i === void 0 ? null : i),
        (lt.flags |= t),
        (s.memoizedState = Pn(1 | e, Ds(), a, i)));
    }
    function er(t, e, a, i) {
      var s = Bt();
      i = i === void 0 ? null : i;
      var c = s.memoizedState.inst;
      yt !== null && i !== null && Cc(i, yt.memoizedState.deps)
        ? (s.memoizedState = Pn(e, c, a, i))
        : ((lt.flags |= t), (s.memoizedState = Pn(1 | e, c, a, i)));
    }
    function $m(t, e) {
      ks(8390656, 8, t, e);
    }
    function Im(t, e) {
      er(2048, 8, t, e);
    }
    function tg(t, e) {
      return er(4, 2, t, e);
    }
    function eg(t, e) {
      return er(4, 4, t, e);
    }
    function ag(t, e) {
      if (typeof e == "function") {
        t = t();
        var a = e(t);
        return function () {
          typeof a == "function" ? a() : e(null);
        };
      }
      if (e != null)
        return (
          (t = t()),
          (e.current = t),
          function () {
            e.current = null;
          }
        );
    }
    function ng(t, e, a) {
      ((a = a != null ? a.concat([t]) : null),
        er(4, 4, ag.bind(null, e, t), a));
    }
    function Xc() {}
    function ig(t, e) {
      var a = Bt();
      e = e === void 0 ? null : e;
      var i = a.memoizedState;
      return e !== null && Cc(e, i[1]) ? i[0] : ((a.memoizedState = [t, e]), t);
    }
    function rg(t, e) {
      var a = Bt();
      e = e === void 0 ? null : e;
      var i = a.memoizedState;
      if (e !== null && Cc(e, i[1])) return i[0];
      if (((i = t()), cn)) {
        xa(!0);
        try {
          t();
        } finally {
          xa(!1);
        }
      }
      return ((a.memoizedState = [i, e]), i);
    }
    function Kc(t, e, a) {
      return a === void 0 || (Da & 1073741824) !== 0
        ? (t.memoizedState = e)
        : ((t.memoizedState = a), (t = ov()), (lt.lanes |= t), (Na |= t), a);
    }
    function sg(t, e, a, i) {
      return me(a, e)
        ? a
        : Kn.current !== null
          ? ((t = Kc(t, a, i)), me(t, e) || (Kt = !0), t)
          : (Da & 42) === 0
            ? ((Kt = !0), (t.memoizedState = a))
            : ((t = ov()), (lt.lanes |= t), (Na |= t), e);
    }
    function lg(t, e, a, i, s) {
      var c = q.p;
      q.p = c !== 0 && 8 > c ? c : 8;
      var f = O.T,
        p = {};
      ((O.T = p), Pc(t, !1, e, a));
      try {
        var b = s(),
          M = O.S;
        if (
          (M !== null && M(p, b),
          b !== null && typeof b == "object" && typeof b.then == "function")
        ) {
          var _ = Y2(b, i);
          ar(t, e, _, xe(t));
        } else ar(t, e, i, xe(t));
      } catch (V) {
        ar(t, e, { then: function () {}, status: "rejected", reason: V }, xe());
      } finally {
        ((q.p = c), (O.T = f));
      }
    }
    function Z2() {}
    function Zc(t, e, a, i) {
      if (t.tag !== 5) throw Error(o(476));
      var s = og(t).queue;
      lg(
        t,
        s,
        e,
        Z,
        a === null
          ? Z2
          : function () {
              return (cg(t), a(i));
            },
      );
    }
    function og(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Z,
        baseState: Z,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: sa,
          lastRenderedState: Z,
        },
        next: null,
      };
      var a = {};
      return (
        (e.next = {
          memoizedState: a,
          baseState: a,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: sa,
            lastRenderedState: a,
          },
          next: null,
        }),
        (t.memoizedState = e),
        (t = t.alternate),
        t !== null && (t.memoizedState = e),
        e
      );
    }
    function cg(t) {
      var e = og(t).next.queue;
      ar(t, e, {}, xe());
    }
    function Qc() {
      return ae(xr);
    }
    function ug() {
      return Bt().memoizedState;
    }
    function dg() {
      return Bt().memoizedState;
    }
    function Q2(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var a = xe();
            t = Ea(a);
            var i = Ma(e, t, a);
            (i !== null && (we(i, e, a), Fi(i, e, a)),
              (e = { cache: Tc() }),
              (t.payload = e));
            return;
        }
        e = e.return;
      }
    }
    function P2(t, e, a) {
      var i = xe();
      ((a = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        zs(t)
          ? hg(e, a)
          : ((a = hc(t, e, a, i)), a !== null && (we(a, t, i), pg(a, e, i))));
    }
    function fg(t, e, a) {
      var i = xe();
      ar(t, e, a, i);
    }
    function ar(t, e, a, i) {
      var s = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (zs(t)) hg(e, s);
      else {
        var c = t.alternate;
        if (
          t.lanes === 0 &&
          (c === null || c.lanes === 0) &&
          ((c = e.lastRenderedReducer), c !== null)
        )
          try {
            var f = e.lastRenderedState,
              p = c(f, a);
            if (((s.hasEagerState = !0), (s.eagerState = p), me(p, f)))
              return (fs(t, e, s, 0), At === null && ds(), !1);
          } catch {}
        if (((a = hc(t, e, s, i)), a !== null))
          return (we(a, t, i), pg(a, e, i), !0);
      }
      return !1;
    }
    function Pc(t, e, a, i) {
      if (
        ((i = {
          lane: 2,
          revertLane: Mu(),
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        zs(t))
      ) {
        if (e) throw Error(o(479));
      } else ((e = hc(t, a, i, 2)), e !== null && we(e, t, 2));
    }
    function zs(t) {
      var e = t.alternate;
      return t === lt || (e !== null && e === lt);
    }
    function hg(t, e) {
      Zn = Ts = !0;
      var a = t.pending;
      (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
        (t.pending = e));
    }
    function pg(t, e, a) {
      if ((a & 4194048) !== 0) {
        var i = e.lanes;
        ((i &= t.pendingLanes), (a |= i), (e.lanes = a), Sp(t, a));
      }
    }
    var Rs = {
        readContext: ae,
        use: Es,
        useCallback: Nt,
        useContext: Nt,
        useEffect: Nt,
        useImperativeHandle: Nt,
        useLayoutEffect: Nt,
        useInsertionEffect: Nt,
        useMemo: Nt,
        useReducer: Nt,
        useRef: Nt,
        useState: Nt,
        useDebugValue: Nt,
        useDeferredValue: Nt,
        useTransition: Nt,
        useSyncExternalStore: Nt,
        useId: Nt,
        useHostTransitionStatus: Nt,
        useFormState: Nt,
        useActionState: Nt,
        useOptimistic: Nt,
        useMemoCache: Nt,
        useCacheRefresh: Nt,
      },
      mg = {
        readContext: ae,
        use: Es,
        useCallback: function (t, e) {
          return ((oe().memoizedState = [t, e === void 0 ? null : e]), t);
        },
        useContext: ae,
        useEffect: $m,
        useImperativeHandle: function (t, e, a) {
          ((a = a != null ? a.concat([t]) : null),
            ks(4194308, 4, ag.bind(null, e, t), a));
        },
        useLayoutEffect: function (t, e) {
          return ks(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
          ks(4, 2, t, e);
        },
        useMemo: function (t, e) {
          var a = oe();
          e = e === void 0 ? null : e;
          var i = t();
          if (cn) {
            xa(!0);
            try {
              t();
            } finally {
              xa(!1);
            }
          }
          return ((a.memoizedState = [i, e]), i);
        },
        useReducer: function (t, e, a) {
          var i = oe();
          if (a !== void 0) {
            var s = a(e);
            if (cn) {
              xa(!0);
              try {
                a(e);
              } finally {
                xa(!1);
              }
            }
          } else s = e;
          return (
            (i.memoizedState = i.baseState = s),
            (t = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: s,
            }),
            (i.queue = t),
            (t = t.dispatch = P2.bind(null, lt, t)),
            [i.memoizedState, t]
          );
        },
        useRef: function (t) {
          var e = oe();
          return ((t = { current: t }), (e.memoizedState = t));
        },
        useState: function (t) {
          t = qc(t);
          var e = t.queue,
            a = fg.bind(null, lt, e);
          return ((e.dispatch = a), [t.memoizedState, a]);
        },
        useDebugValue: Xc,
        useDeferredValue: function (t, e) {
          var a = oe();
          return Kc(a, t, e);
        },
        useTransition: function () {
          var t = qc(!1);
          return (
            (t = lg.bind(null, lt, t.queue, !0, !1)),
            (oe().memoizedState = t),
            [!1, t]
          );
        },
        useSyncExternalStore: function (t, e, a) {
          var i = lt,
            s = oe();
          if (mt) {
            if (a === void 0) throw Error(o(407));
            a = a();
          } else {
            if (((a = e()), At === null)) throw Error(o(349));
            (ft & 124) !== 0 || jm(i, e, a);
          }
          s.memoizedState = a;
          var c = { value: a, getSnapshot: e };
          return (
            (s.queue = c),
            $m(Bm.bind(null, i, c, t), [t]),
            (i.flags |= 2048),
            Pn(9, Ds(), Um.bind(null, i, c, a, e), null),
            a
          );
        },
        useId: function () {
          var t = oe(),
            e = At.identifierPrefix;
          if (mt) {
            var a = na,
              i = aa;
            ((a = (i & ~(1 << (32 - pe(i) - 1))).toString(32) + a),
              (e = "«" + e + "R" + a),
              (a = As++),
              0 < a && (e += "H" + a.toString(32)),
              (e += "»"));
          } else ((a = q2++), (e = "«" + e + "r" + a.toString(32) + "»"));
          return (t.memoizedState = e);
        },
        useHostTransitionStatus: Qc,
        useFormState: Qm,
        useActionState: Qm,
        useOptimistic: function (t) {
          var e = oe();
          e.memoizedState = e.baseState = t;
          var a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (e.queue = a),
            (e = Pc.bind(null, lt, !0, a)),
            (a.dispatch = e),
            [t, e]
          );
        },
        useMemoCache: Lc,
        useCacheRefresh: function () {
          return (oe().memoizedState = Q2.bind(null, lt));
        },
      },
      gg = {
        readContext: ae,
        use: Es,
        useCallback: ig,
        useContext: ae,
        useEffect: Im,
        useImperativeHandle: ng,
        useInsertionEffect: tg,
        useLayoutEffect: eg,
        useMemo: rg,
        useReducer: Ms,
        useRef: Wm,
        useState: function () {
          return Ms(sa);
        },
        useDebugValue: Xc,
        useDeferredValue: function (t, e) {
          var a = Bt();
          return sg(a, yt.memoizedState, t, e);
        },
        useTransition: function () {
          var t = Ms(sa)[0],
            e = Bt().memoizedState;
          return [typeof t == "boolean" ? t : tr(t), e];
        },
        useSyncExternalStore: Vm,
        useId: ug,
        useHostTransitionStatus: Qc,
        useFormState: Pm,
        useActionState: Pm,
        useOptimistic: function (t, e) {
          var a = Bt();
          return Ym(a, yt, t, e);
        },
        useMemoCache: Lc,
        useCacheRefresh: dg,
      },
      J2 = {
        readContext: ae,
        use: Es,
        useCallback: ig,
        useContext: ae,
        useEffect: Im,
        useImperativeHandle: ng,
        useInsertionEffect: tg,
        useLayoutEffect: eg,
        useMemo: rg,
        useReducer: Yc,
        useRef: Wm,
        useState: function () {
          return Yc(sa);
        },
        useDebugValue: Xc,
        useDeferredValue: function (t, e) {
          var a = Bt();
          return yt === null ? Kc(a, t, e) : sg(a, yt.memoizedState, t, e);
        },
        useTransition: function () {
          var t = Yc(sa)[0],
            e = Bt().memoizedState;
          return [typeof t == "boolean" ? t : tr(t), e];
        },
        useSyncExternalStore: Vm,
        useId: ug,
        useHostTransitionStatus: Qc,
        useFormState: Fm,
        useActionState: Fm,
        useOptimistic: function (t, e) {
          var a = Bt();
          return yt !== null
            ? Ym(a, yt, t, e)
            : ((a.baseState = t), [t, a.queue.dispatch]);
        },
        useMemoCache: Lc,
        useCacheRefresh: dg,
      },
      Jn = null,
      nr = 0;
    function Os(t) {
      var e = nr;
      return ((nr += 1), Jn === null && (Jn = []), Dm(Jn, t, e));
    }
    function ir(t, e) {
      ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
    }
    function _s(t, e) {
      throw e.$$typeof === w
        ? Error(o(525))
        : ((t = Object.prototype.toString.call(e)),
          Error(
            o(
              31,
              t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t,
            ),
          ));
    }
    function vg(t) {
      var e = t._init;
      return e(t._payload);
    }
    function yg(t) {
      function e(A, S) {
        if (t) {
          var E = A.deletions;
          E === null ? ((A.deletions = [S]), (A.flags |= 16)) : E.push(S);
        }
      }
      function a(A, S) {
        if (!t) return null;
        for (; S !== null; ) (e(A, S), (S = S.sibling));
        return null;
      }
      function i(A) {
        for (var S = new Map(); A !== null; )
          (A.key !== null ? S.set(A.key, A) : S.set(A.index, A),
            (A = A.sibling));
        return S;
      }
      function s(A, S) {
        return ((A = ea(A, S)), (A.index = 0), (A.sibling = null), A);
      }
      function c(A, S, E) {
        return (
          (A.index = E),
          t
            ? ((E = A.alternate),
              E !== null
                ? ((E = E.index), E < S ? ((A.flags |= 67108866), S) : E)
                : ((A.flags |= 67108866), S))
            : ((A.flags |= 1048576), S)
        );
      }
      function f(A) {
        return (t && A.alternate === null && (A.flags |= 67108866), A);
      }
      function p(A, S, E, N) {
        return S === null || S.tag !== 6
          ? ((S = mc(E, A.mode, N)), (S.return = A), S)
          : ((S = s(S, E)), (S.return = A), S);
      }
      function b(A, S, E, N) {
        var P = E.type;
        return P === C
          ? _(A, S, E.props.children, N, E.key)
          : S !== null &&
              (S.elementType === P ||
                (typeof P == "object" &&
                  P !== null &&
                  P.$$typeof === et &&
                  vg(P) === S.type))
            ? ((S = s(S, E.props)), ir(S, E), (S.return = A), S)
            : ((S = ps(E.type, E.key, E.props, null, A.mode, N)),
              ir(S, E),
              (S.return = A),
              S);
      }
      function M(A, S, E, N) {
        return S === null ||
          S.tag !== 4 ||
          S.stateNode.containerInfo !== E.containerInfo ||
          S.stateNode.implementation !== E.implementation
          ? ((S = gc(E, A.mode, N)), (S.return = A), S)
          : ((S = s(S, E.children || [])), (S.return = A), S);
      }
      function _(A, S, E, N, P) {
        return S === null || S.tag !== 7
          ? ((S = tn(E, A.mode, N, P)), (S.return = A), S)
          : ((S = s(S, E)), (S.return = A), S);
      }
      function V(A, S, E) {
        if (
          (typeof S == "string" && S !== "") ||
          typeof S == "number" ||
          typeof S == "bigint"
        )
          return ((S = mc("" + S, A.mode, E)), (S.return = A), S);
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case T:
              return (
                (E = ps(S.type, S.key, S.props, null, A.mode, E)),
                ir(E, S),
                (E.return = A),
                E
              );
            case R:
              return ((S = gc(S, A.mode, E)), (S.return = A), S);
            case et:
              var N = S._init;
              return ((S = N(S._payload)), V(A, S, E));
          }
          if (Yt(S) || Ot(S))
            return ((S = tn(S, A.mode, E, null)), (S.return = A), S);
          if (typeof S.then == "function") return V(A, Os(S), E);
          if (S.$$typeof === U) return V(A, ys(A, S), E);
          _s(A, S);
        }
        return null;
      }
      function k(A, S, E, N) {
        var P = S !== null ? S.key : null;
        if (
          (typeof E == "string" && E !== "") ||
          typeof E == "number" ||
          typeof E == "bigint"
        )
          return P !== null ? null : p(A, S, "" + E, N);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case T:
              return E.key === P ? b(A, S, E, N) : null;
            case R:
              return E.key === P ? M(A, S, E, N) : null;
            case et:
              return ((P = E._init), (E = P(E._payload)), k(A, S, E, N));
          }
          if (Yt(E) || Ot(E)) return P !== null ? null : _(A, S, E, N, null);
          if (typeof E.then == "function") return k(A, S, Os(E), N);
          if (E.$$typeof === U) return k(A, S, ys(A, E), N);
          _s(A, E);
        }
        return null;
      }
      function z(A, S, E, N, P) {
        if (
          (typeof N == "string" && N !== "") ||
          typeof N == "number" ||
          typeof N == "bigint"
        )
          return ((A = A.get(E) || null), p(S, A, "" + N, P));
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case T:
              return (
                (A = A.get(N.key === null ? E : N.key) || null),
                b(S, A, N, P)
              );
            case R:
              return (
                (A = A.get(N.key === null ? E : N.key) || null),
                M(S, A, N, P)
              );
            case et:
              var ot = N._init;
              return ((N = ot(N._payload)), z(A, S, E, N, P));
          }
          if (Yt(N) || Ot(N))
            return ((A = A.get(E) || null), _(S, A, N, P, null));
          if (typeof N.then == "function") return z(A, S, E, Os(N), P);
          if (N.$$typeof === U) return z(A, S, E, ys(S, N), P);
          _s(S, N);
        }
        return null;
      }
      function at(A, S, E, N) {
        for (
          var P = null, ot = null, F = S, tt = (S = 0), Qt = null;
          F !== null && tt < E.length;
          tt++
        ) {
          F.index > tt ? ((Qt = F), (F = null)) : (Qt = F.sibling);
          var pt = k(A, F, E[tt], N);
          if (pt === null) {
            F === null && (F = Qt);
            break;
          }
          (t && F && pt.alternate === null && e(A, F),
            (S = c(pt, S, tt)),
            ot === null ? (P = pt) : (ot.sibling = pt),
            (ot = pt),
            (F = Qt));
        }
        if (tt === E.length) return (a(A, F), mt && an(A, tt), P);
        if (F === null) {
          for (; tt < E.length; tt++)
            ((F = V(A, E[tt], N)),
              F !== null &&
                ((S = c(F, S, tt)),
                ot === null ? (P = F) : (ot.sibling = F),
                (ot = F)));
          return (mt && an(A, tt), P);
        }
        for (F = i(F); tt < E.length; tt++)
          ((Qt = z(F, A, tt, E[tt], N)),
            Qt !== null &&
              (t &&
                Qt.alternate !== null &&
                F.delete(Qt.key === null ? tt : Qt.key),
              (S = c(Qt, S, tt)),
              ot === null ? (P = Qt) : (ot.sibling = Qt),
              (ot = Qt)));
        return (
          t &&
            F.forEach(function (Ga) {
              return e(A, Ga);
            }),
          mt && an(A, tt),
          P
        );
      }
      function I(A, S, E, N) {
        if (E == null) throw Error(o(151));
        for (
          var P = null,
            ot = null,
            F = S,
            tt = (S = 0),
            Qt = null,
            pt = E.next();
          F !== null && !pt.done;
          tt++, pt = E.next()
        ) {
          F.index > tt ? ((Qt = F), (F = null)) : (Qt = F.sibling);
          var Ga = k(A, F, pt.value, N);
          if (Ga === null) {
            F === null && (F = Qt);
            break;
          }
          (t && F && Ga.alternate === null && e(A, F),
            (S = c(Ga, S, tt)),
            ot === null ? (P = Ga) : (ot.sibling = Ga),
            (ot = Ga),
            (F = Qt));
        }
        if (pt.done) return (a(A, F), mt && an(A, tt), P);
        if (F === null) {
          for (; !pt.done; tt++, pt = E.next())
            ((pt = V(A, pt.value, N)),
              pt !== null &&
                ((S = c(pt, S, tt)),
                ot === null ? (P = pt) : (ot.sibling = pt),
                (ot = pt)));
          return (mt && an(A, tt), P);
        }
        for (F = i(F); !pt.done; tt++, pt = E.next())
          ((pt = z(F, A, tt, pt.value, N)),
            pt !== null &&
              (t &&
                pt.alternate !== null &&
                F.delete(pt.key === null ? tt : pt.key),
              (S = c(pt, S, tt)),
              ot === null ? (P = pt) : (ot.sibling = pt),
              (ot = pt)));
        return (
          t &&
            F.forEach(function (FS) {
              return e(A, FS);
            }),
          mt && an(A, tt),
          P
        );
      }
      function xt(A, S, E, N) {
        if (
          (typeof E == "object" &&
            E !== null &&
            E.type === C &&
            E.key === null &&
            (E = E.props.children),
          typeof E == "object" && E !== null)
        ) {
          switch (E.$$typeof) {
            case T:
              t: {
                for (var P = E.key; S !== null; ) {
                  if (S.key === P) {
                    if (((P = E.type), P === C)) {
                      if (S.tag === 7) {
                        (a(A, S.sibling),
                          (N = s(S, E.props.children)),
                          (N.return = A),
                          (A = N));
                        break t;
                      }
                    } else if (
                      S.elementType === P ||
                      (typeof P == "object" &&
                        P !== null &&
                        P.$$typeof === et &&
                        vg(P) === S.type)
                    ) {
                      (a(A, S.sibling),
                        (N = s(S, E.props)),
                        ir(N, E),
                        (N.return = A),
                        (A = N));
                      break t;
                    }
                    a(A, S);
                    break;
                  } else e(A, S);
                  S = S.sibling;
                }
                E.type === C
                  ? ((N = tn(E.props.children, A.mode, N, E.key)),
                    (N.return = A),
                    (A = N))
                  : ((N = ps(E.type, E.key, E.props, null, A.mode, N)),
                    ir(N, E),
                    (N.return = A),
                    (A = N));
              }
              return f(A);
            case R:
              t: {
                for (P = E.key; S !== null; ) {
                  if (S.key === P)
                    if (
                      S.tag === 4 &&
                      S.stateNode.containerInfo === E.containerInfo &&
                      S.stateNode.implementation === E.implementation
                    ) {
                      (a(A, S.sibling),
                        (N = s(S, E.children || [])),
                        (N.return = A),
                        (A = N));
                      break t;
                    } else {
                      a(A, S);
                      break;
                    }
                  else e(A, S);
                  S = S.sibling;
                }
                ((N = gc(E, A.mode, N)), (N.return = A), (A = N));
              }
              return f(A);
            case et:
              return ((P = E._init), (E = P(E._payload)), xt(A, S, E, N));
          }
          if (Yt(E)) return at(A, S, E, N);
          if (Ot(E)) {
            if (((P = Ot(E)), typeof P != "function")) throw Error(o(150));
            return ((E = P.call(E)), I(A, S, E, N));
          }
          if (typeof E.then == "function") return xt(A, S, Os(E), N);
          if (E.$$typeof === U) return xt(A, S, ys(A, E), N);
          _s(A, E);
        }
        return (typeof E == "string" && E !== "") ||
          typeof E == "number" ||
          typeof E == "bigint"
          ? ((E = "" + E),
            S !== null && S.tag === 6
              ? (a(A, S.sibling), (N = s(S, E)), (N.return = A), (A = N))
              : (a(A, S), (N = mc(E, A.mode, N)), (N.return = A), (A = N)),
            f(A))
          : a(A, S);
      }
      return function (A, S, E, N) {
        try {
          nr = 0;
          var P = xt(A, S, E, N);
          return ((Jn = null), P);
        } catch (F) {
          if (F === Pi || F === xs) throw F;
          var ot = ge(29, F, null, A.mode);
          return ((ot.lanes = N), (ot.return = A), ot);
        }
      };
    }
    var Fn = yg(!0),
      bg = yg(!1),
      Re = j(null),
      Ze = null;
    function ka(t) {
      var e = t.alternate;
      (G(Gt, Gt.current & 1),
        G(Re, t),
        Ze === null &&
          (e === null || Kn.current !== null || e.memoizedState !== null) &&
          (Ze = t));
    }
    function xg(t) {
      if (t.tag === 22) {
        if ((G(Gt, Gt.current), G(Re, t), Ze === null)) {
          var e = t.alternate;
          e !== null && e.memoizedState !== null && (Ze = t);
        }
      } else za();
    }
    function za() {
      (G(Gt, Gt.current), G(Re, Re.current));
    }
    function la(t) {
      (K(Re), Ze === t && (Ze = null), K(Gt));
    }
    var Gt = j(0);
    function Cs(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (
            a !== null &&
            ((a = a.dehydrated), a === null || a.data === "$?" || Bu(a))
          )
            return e;
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
      return null;
    }
    function Jc(t, e, a, i) {
      ((e = t.memoizedState),
        (a = a(i, e)),
        (a = a == null ? e : y({}, e, a)),
        (t.memoizedState = a),
        t.lanes === 0 && (t.updateQueue.baseState = a));
    }
    var Fc = {
      enqueueSetState: function (t, e, a) {
        t = t._reactInternals;
        var i = xe(),
          s = Ea(i);
        ((s.payload = e),
          a != null && (s.callback = a),
          (e = Ma(t, s, i)),
          e !== null && (we(e, t, i), Fi(e, t, i)));
      },
      enqueueReplaceState: function (t, e, a) {
        t = t._reactInternals;
        var i = xe(),
          s = Ea(i);
        ((s.tag = 1),
          (s.payload = e),
          a != null && (s.callback = a),
          (e = Ma(t, s, i)),
          e !== null && (we(e, t, i), Fi(e, t, i)));
      },
      enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var a = xe(),
          i = Ea(a);
        ((i.tag = 2),
          e != null && (i.callback = e),
          (e = Ma(t, i, a)),
          e !== null && (we(e, t, a), Fi(e, t, a)));
      },
    };
    function wg(t, e, a, i, s, c, f) {
      return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == "function"
          ? t.shouldComponentUpdate(i, c, f)
          : e.prototype && e.prototype.isPureReactComponent
            ? !Hi(a, i) || !Hi(s, c)
            : !0
      );
    }
    function Sg(t, e, a, i) {
      ((t = e.state),
        typeof e.componentWillReceiveProps == "function" &&
          e.componentWillReceiveProps(a, i),
        typeof e.UNSAFE_componentWillReceiveProps == "function" &&
          e.UNSAFE_componentWillReceiveProps(a, i),
        e.state !== t && Fc.enqueueReplaceState(e, e.state, null));
    }
    function un(t, e) {
      var a = e;
      if ("ref" in e) {
        a = {};
        for (var i in e) i !== "ref" && (a[i] = e[i]);
      }
      if ((t = t.defaultProps)) {
        a === e && (a = y({}, a));
        for (var s in t) a[s] === void 0 && (a[s] = t[s]);
      }
      return a;
    }
    var Ns =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          };
    function Tg(t) {
      Ns(t);
    }
    function Ag(t) {
      console.error(t);
    }
    function Eg(t) {
      Ns(t);
    }
    function Vs(t, e) {
      try {
        var a = t.onUncaughtError;
        a(e.value, { componentStack: e.stack });
      } catch (i) {
        setTimeout(function () {
          throw i;
        });
      }
    }
    function Mg(t, e, a) {
      try {
        var i = t.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null,
        });
      } catch (s) {
        setTimeout(function () {
          throw s;
        });
      }
    }
    function Wc(t, e, a) {
      return (
        (a = Ea(a)),
        (a.tag = 3),
        (a.payload = { element: null }),
        (a.callback = function () {
          Vs(t, e);
        }),
        a
      );
    }
    function Dg(t) {
      return ((t = Ea(t)), (t.tag = 3), t);
    }
    function kg(t, e, a, i) {
      var s = a.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var c = i.value;
        ((t.payload = function () {
          return s(c);
        }),
          (t.callback = function () {
            Mg(e, a, i);
          }));
      }
      var f = a.stateNode;
      f !== null &&
        typeof f.componentDidCatch == "function" &&
        (t.callback = function () {
          (Mg(e, a, i),
            typeof s != "function" &&
              (Va === null ? (Va = new Set([this])) : Va.add(this)));
          var p = i.stack;
          this.componentDidCatch(i.value, {
            componentStack: p !== null ? p : "",
          });
        });
    }
    function F2(t, e, a, i, s) {
      if (
        ((a.flags |= 32768),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        if (
          ((e = a.alternate),
          e !== null && Ki(e, a, s, !0),
          (a = Re.current),
          a !== null)
        ) {
          switch (a.tag) {
            case 13:
              return (
                Ze === null
                  ? wu()
                  : a.alternate === null && Ct === 0 && (Ct = 3),
                (a.flags &= -257),
                (a.flags |= 65536),
                (a.lanes = s),
                i === Mc
                  ? (a.flags |= 16384)
                  : ((e = a.updateQueue),
                    e === null ? (a.updateQueue = new Set([i])) : e.add(i),
                    Tu(t, i, s)),
                !1
              );
            case 22:
              return (
                (a.flags |= 65536),
                i === Mc
                  ? (a.flags |= 16384)
                  : ((e = a.updateQueue),
                    e === null
                      ? ((e = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([i]),
                        }),
                        (a.updateQueue = e))
                      : ((a = e.retryQueue),
                        a === null ? (e.retryQueue = new Set([i])) : a.add(i)),
                    Tu(t, i, s)),
                !1
              );
          }
          throw Error(o(435, a.tag));
        }
        return (Tu(t, i, s), wu(), !1);
      }
      if (mt)
        return (
          (e = Re.current),
          e !== null
            ? ((e.flags & 65536) === 0 && (e.flags |= 256),
              (e.flags |= 65536),
              (e.lanes = s),
              i !== bc && ((t = Error(o(422), { cause: i })), Xi(Me(t, a))))
            : (i !== bc && ((e = Error(o(423), { cause: i })), Xi(Me(e, a))),
              (t = t.current.alternate),
              (t.flags |= 65536),
              (s &= -s),
              (t.lanes |= s),
              (i = Me(i, a)),
              (s = Wc(t.stateNode, i, s)),
              zc(t, s),
              Ct !== 4 && (Ct = 2)),
          !1
        );
      var c = Error(o(520), { cause: i });
      if (
        ((c = Me(c, a)),
        dr === null ? (dr = [c]) : dr.push(c),
        Ct !== 4 && (Ct = 2),
        e === null)
      )
        return !0;
      ((i = Me(i, a)), (a = e));
      do {
        switch (a.tag) {
          case 3:
            return (
              (a.flags |= 65536),
              (t = s & -s),
              (a.lanes |= t),
              (t = Wc(a.stateNode, i, t)),
              zc(a, t),
              !1
            );
          case 1:
            if (
              ((e = a.type),
              (c = a.stateNode),
              (a.flags & 128) === 0 &&
                (typeof e.getDerivedStateFromError == "function" ||
                  (c !== null &&
                    typeof c.componentDidCatch == "function" &&
                    (Va === null || !Va.has(c)))))
            )
              return (
                (a.flags |= 65536),
                (s &= -s),
                (a.lanes |= s),
                (s = Dg(s)),
                kg(s, t, a, i),
                zc(a, s),
                !1
              );
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    var zg = Error(o(461)),
      Kt = !1;
    function Ft(t, e, a, i) {
      e.child = t === null ? bg(e, null, a, i) : Fn(e, t.child, a, i);
    }
    function Rg(t, e, a, i, s) {
      a = a.render;
      var c = e.ref;
      if ("ref" in i) {
        var f = {};
        for (var p in i) p !== "ref" && (f[p] = i[p]);
      } else f = i;
      return (
        ln(e),
        (i = Nc(t, e, a, f, c, s)),
        (p = Vc()),
        t !== null && !Kt
          ? (jc(t, e, s), oa(t, e, s))
          : (mt && p && vc(e), (e.flags |= 1), Ft(t, e, i, s), e.child)
      );
    }
    function Og(t, e, a, i, s) {
      if (t === null) {
        var c = a.type;
        return typeof c == "function" &&
          !pc(c) &&
          c.defaultProps === void 0 &&
          a.compare === null
          ? ((e.tag = 15), (e.type = c), _g(t, e, c, i, s))
          : ((t = ps(a.type, null, i, e, e.mode, s)),
            (t.ref = e.ref),
            (t.return = e),
            (e.child = t));
      }
      if (((c = t.child), !ru(t, s))) {
        var f = c.memoizedProps;
        if (
          ((a = a.compare),
          (a = a !== null ? a : Hi),
          a(f, i) && t.ref === e.ref)
        )
          return oa(t, e, s);
      }
      return (
        (e.flags |= 1),
        (t = ea(c, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t)
      );
    }
    function _g(t, e, a, i, s) {
      if (t !== null) {
        var c = t.memoizedProps;
        if (Hi(c, i) && t.ref === e.ref)
          if (((Kt = !1), (e.pendingProps = i = c), ru(t, s)))
            (t.flags & 131072) !== 0 && (Kt = !0);
          else return ((e.lanes = t.lanes), oa(t, e, s));
      }
      return $c(t, e, a, i, s);
    }
    function Cg(t, e, a) {
      var i = e.pendingProps,
        s = i.children,
        c = t !== null ? t.memoizedState : null;
      if (i.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (((i = c !== null ? c.baseLanes | a : a), t !== null)) {
            for (s = e.child = t.child, c = 0; s !== null; )
              ((c = c | s.lanes | s.childLanes), (s = s.sibling));
            e.childLanes = c & ~i;
          } else ((e.childLanes = 0), (e.child = null));
          return Ng(t, e, i, a);
        }
        if ((a & 536870912) !== 0)
          ((e.memoizedState = { baseLanes: 0, cachePool: null }),
            t !== null && bs(e, c !== null ? c.cachePool : null),
            c !== null ? _m(e, c) : Oc(),
            xg(e));
        else
          return (
            (e.lanes = e.childLanes = 536870912),
            Ng(t, e, c !== null ? c.baseLanes | a : a, a)
          );
      } else
        c !== null
          ? (bs(e, c.cachePool), _m(e, c), za(), (e.memoizedState = null))
          : (t !== null && bs(e, null), Oc(), za());
      return (Ft(t, e, s, a), e.child);
    }
    function Ng(t, e, a, i) {
      var s = Ec();
      return (
        (s = s === null ? null : { parent: qt._currentValue, pool: s }),
        (e.memoizedState = { baseLanes: a, cachePool: s }),
        t !== null && bs(e, null),
        Oc(),
        xg(e),
        t !== null && Ki(t, e, i, !0),
        null
      );
    }
    function js(t, e) {
      var a = e.ref;
      if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object") throw Error(o(284));
        (t === null || t.ref !== a) && (e.flags |= 4194816);
      }
    }
    function $c(t, e, a, i, s) {
      return (
        ln(e),
        (a = Nc(t, e, a, i, void 0, s)),
        (i = Vc()),
        t !== null && !Kt
          ? (jc(t, e, s), oa(t, e, s))
          : (mt && i && vc(e), (e.flags |= 1), Ft(t, e, a, s), e.child)
      );
    }
    function Vg(t, e, a, i, s, c) {
      return (
        ln(e),
        (e.updateQueue = null),
        (a = Nm(e, i, a, s)),
        Cm(t),
        (i = Vc()),
        t !== null && !Kt
          ? (jc(t, e, c), oa(t, e, c))
          : (mt && i && vc(e), (e.flags |= 1), Ft(t, e, a, c), e.child)
      );
    }
    function jg(t, e, a, i, s) {
      if ((ln(e), e.stateNode === null)) {
        var c = Hn,
          f = a.contextType;
        (typeof f == "object" && f !== null && (c = ae(f)),
          (c = new a(i, c)),
          (e.memoizedState =
            c.state !== null && c.state !== void 0 ? c.state : null),
          (c.updater = Fc),
          (e.stateNode = c),
          (c._reactInternals = e),
          (c = e.stateNode),
          (c.props = i),
          (c.state = e.memoizedState),
          (c.refs = {}),
          Dc(e),
          (f = a.contextType),
          (c.context = typeof f == "object" && f !== null ? ae(f) : Hn),
          (c.state = e.memoizedState),
          (f = a.getDerivedStateFromProps),
          typeof f == "function" &&
            (Jc(e, a, f, i), (c.state = e.memoizedState)),
          typeof a.getDerivedStateFromProps == "function" ||
            typeof c.getSnapshotBeforeUpdate == "function" ||
            (typeof c.UNSAFE_componentWillMount != "function" &&
              typeof c.componentWillMount != "function") ||
            ((f = c.state),
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" &&
              c.UNSAFE_componentWillMount(),
            f !== c.state && Fc.enqueueReplaceState(c, c.state, null),
            $i(e, i, c, s),
            Wi(),
            (c.state = e.memoizedState)),
          typeof c.componentDidMount == "function" && (e.flags |= 4194308),
          (i = !0));
      } else if (t === null) {
        c = e.stateNode;
        var p = e.memoizedProps,
          b = un(a, p);
        c.props = b;
        var M = c.context,
          _ = a.contextType;
        ((f = Hn), typeof _ == "object" && _ !== null && (f = ae(_)));
        var V = a.getDerivedStateFromProps;
        ((_ =
          typeof V == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function"),
          (p = e.pendingProps !== p),
          _ ||
            (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
              typeof c.componentWillReceiveProps != "function") ||
            ((p || M !== f) && Sg(e, c, i, f)),
          (Aa = !1));
        var k = e.memoizedState;
        ((c.state = k),
          $i(e, i, c, s),
          Wi(),
          (M = e.memoizedState),
          p || k !== M || Aa
            ? (typeof V == "function" &&
                (Jc(e, a, V, i), (M = e.memoizedState)),
              (b = Aa || wg(e, a, b, i, k, M, f))
                ? (_ ||
                    (typeof c.UNSAFE_componentWillMount != "function" &&
                      typeof c.componentWillMount != "function") ||
                    (typeof c.componentWillMount == "function" &&
                      c.componentWillMount(),
                    typeof c.UNSAFE_componentWillMount == "function" &&
                      c.UNSAFE_componentWillMount()),
                  typeof c.componentDidMount == "function" &&
                    (e.flags |= 4194308))
                : (typeof c.componentDidMount == "function" &&
                    (e.flags |= 4194308),
                  (e.memoizedProps = i),
                  (e.memoizedState = M)),
              (c.props = i),
              (c.state = M),
              (c.context = f),
              (i = b))
            : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
              (i = !1)));
      } else {
        ((c = e.stateNode),
          kc(t, e),
          (f = e.memoizedProps),
          (_ = un(a, f)),
          (c.props = _),
          (V = e.pendingProps),
          (k = c.context),
          (M = a.contextType),
          (b = Hn),
          typeof M == "object" && M !== null && (b = ae(M)),
          (p = a.getDerivedStateFromProps),
          (M =
            typeof p == "function" ||
            typeof c.getSnapshotBeforeUpdate == "function") ||
            (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
              typeof c.componentWillReceiveProps != "function") ||
            ((f !== V || k !== b) && Sg(e, c, i, b)),
          (Aa = !1),
          (k = e.memoizedState),
          (c.state = k),
          $i(e, i, c, s),
          Wi());
        var z = e.memoizedState;
        f !== V ||
        k !== z ||
        Aa ||
        (t !== null && t.dependencies !== null && vs(t.dependencies))
          ? (typeof p == "function" && (Jc(e, a, p, i), (z = e.memoizedState)),
            (_ =
              Aa ||
              wg(e, a, _, i, k, z, b) ||
              (t !== null && t.dependencies !== null && vs(t.dependencies)))
              ? (M ||
                  (typeof c.UNSAFE_componentWillUpdate != "function" &&
                    typeof c.componentWillUpdate != "function") ||
                  (typeof c.componentWillUpdate == "function" &&
                    c.componentWillUpdate(i, z, b),
                  typeof c.UNSAFE_componentWillUpdate == "function" &&
                    c.UNSAFE_componentWillUpdate(i, z, b)),
                typeof c.componentDidUpdate == "function" && (e.flags |= 4),
                typeof c.getSnapshotBeforeUpdate == "function" &&
                  (e.flags |= 1024))
              : (typeof c.componentDidUpdate != "function" ||
                  (f === t.memoizedProps && k === t.memoizedState) ||
                  (e.flags |= 4),
                typeof c.getSnapshotBeforeUpdate != "function" ||
                  (f === t.memoizedProps && k === t.memoizedState) ||
                  (e.flags |= 1024),
                (e.memoizedProps = i),
                (e.memoizedState = z)),
            (c.props = i),
            (c.state = z),
            (c.context = b),
            (i = _))
          : (typeof c.componentDidUpdate != "function" ||
              (f === t.memoizedProps && k === t.memoizedState) ||
              (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" ||
              (f === t.memoizedProps && k === t.memoizedState) ||
              (e.flags |= 1024),
            (i = !1));
      }
      return (
        (c = i),
        js(t, e),
        (i = (e.flags & 128) !== 0),
        c || i
          ? ((c = e.stateNode),
            (a =
              i && typeof a.getDerivedStateFromError != "function"
                ? null
                : c.render()),
            (e.flags |= 1),
            t !== null && i
              ? ((e.child = Fn(e, t.child, null, s)),
                (e.child = Fn(e, null, a, s)))
              : Ft(t, e, a, s),
            (e.memoizedState = c.state),
            (t = e.child))
          : (t = oa(t, e, s)),
        t
      );
    }
    function Ug(t, e, a, i) {
      return (Gi(), (e.flags |= 256), Ft(t, e, a, i), e.child);
    }
    var Ic = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function tu(t) {
      return { baseLanes: t, cachePool: Am() };
    }
    function eu(t, e, a) {
      return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= Oe), t);
    }
    function Bg(t, e, a) {
      var i = e.pendingProps,
        s = !1,
        c = (e.flags & 128) !== 0,
        f;
      if (
        ((f = c) ||
          (f =
            t !== null && t.memoizedState === null
              ? !1
              : (Gt.current & 2) !== 0),
        f && ((s = !0), (e.flags &= -129)),
        (f = (e.flags & 32) !== 0),
        (e.flags &= -33),
        t === null)
      ) {
        if (mt) {
          if ((s ? ka(e) : za(), mt)) {
            var p = _t,
              b;
            if ((b = p)) {
              t: {
                for (b = p, p = Ke; b.nodeType !== 8; ) {
                  if (!p) {
                    p = null;
                    break t;
                  }
                  if (((b = Le(b.nextSibling)), b === null)) {
                    p = null;
                    break t;
                  }
                }
                p = b;
              }
              p !== null
                ? ((e.memoizedState = {
                    dehydrated: p,
                    treeContext: en !== null ? { id: aa, overflow: na } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (b = ge(18, null, null, 0)),
                  (b.stateNode = p),
                  (b.return = e),
                  (e.child = b),
                  (re = e),
                  (_t = null),
                  (b = !0))
                : (b = !1);
            }
            b || rn(e);
          }
          if (
            ((p = e.memoizedState),
            p !== null && ((p = p.dehydrated), p !== null))
          )
            return (Bu(p) ? (e.lanes = 32) : (e.lanes = 536870912), null);
          la(e);
        }
        return (
          (p = i.children),
          (i = i.fallback),
          s
            ? (za(),
              (s = e.mode),
              (p = Us({ mode: "hidden", children: p }, s)),
              (i = tn(i, s, a, null)),
              (p.return = e),
              (i.return = e),
              (p.sibling = i),
              (e.child = p),
              (s = e.child),
              (s.memoizedState = tu(a)),
              (s.childLanes = eu(t, f, a)),
              (e.memoizedState = Ic),
              i)
            : (ka(e), au(e, p))
        );
      }
      if (
        ((b = t.memoizedState), b !== null && ((p = b.dehydrated), p !== null))
      ) {
        if (c)
          e.flags & 256
            ? (ka(e), (e.flags &= -257), (e = nu(t, e, a)))
            : e.memoizedState !== null
              ? (za(), (e.child = t.child), (e.flags |= 128), (e = null))
              : (za(),
                (s = i.fallback),
                (p = e.mode),
                (i = Us({ mode: "visible", children: i.children }, p)),
                (s = tn(s, p, a, null)),
                (s.flags |= 2),
                (i.return = e),
                (s.return = e),
                (i.sibling = s),
                (e.child = i),
                Fn(e, t.child, null, a),
                (i = e.child),
                (i.memoizedState = tu(a)),
                (i.childLanes = eu(t, f, a)),
                (e.memoizedState = Ic),
                (e = s));
        else if ((ka(e), Bu(p))) {
          if (((f = p.nextSibling && p.nextSibling.dataset), f)) var M = f.dgst;
          ((f = M),
            (i = Error(o(419))),
            (i.stack = ""),
            (i.digest = f),
            Xi({ value: i, source: null, stack: null }),
            (e = nu(t, e, a)));
        } else if (
          (Kt || Ki(t, e, a, !1), (f = (a & t.childLanes) !== 0), Kt || f)
        ) {
          if (
            ((f = At),
            f !== null &&
              ((i = a & -a),
              (i = (i & 42) !== 0 ? 1 : Lo(i)),
              (i = (i & (f.suspendedLanes | a)) !== 0 ? 0 : i),
              i !== 0 && i !== b.retryLane))
          )
            throw ((b.retryLane = i), Ln(t, i), we(f, t, i), zg);
          (p.data === "$?" || wu(), (e = nu(t, e, a)));
        } else
          p.data === "$?"
            ? ((e.flags |= 192), (e.child = t.child), (e = null))
            : ((t = b.treeContext),
              (_t = Le(p.nextSibling)),
              (re = e),
              (mt = !0),
              (nn = null),
              (Ke = !1),
              t !== null &&
                ((ke[ze++] = aa),
                (ke[ze++] = na),
                (ke[ze++] = en),
                (aa = t.id),
                (na = t.overflow),
                (en = e)),
              (e = au(e, i.children)),
              (e.flags |= 4096));
        return e;
      }
      return s
        ? (za(),
          (s = i.fallback),
          (p = e.mode),
          (b = t.child),
          (M = b.sibling),
          (i = ea(b, { mode: "hidden", children: i.children })),
          (i.subtreeFlags = b.subtreeFlags & 65011712),
          M !== null
            ? (s = ea(M, s))
            : ((s = tn(s, p, a, null)), (s.flags |= 2)),
          (s.return = e),
          (i.return = e),
          (i.sibling = s),
          (e.child = i),
          (i = s),
          (s = e.child),
          (p = t.child.memoizedState),
          p === null
            ? (p = tu(a))
            : ((b = p.cachePool),
              b !== null
                ? ((M = qt._currentValue),
                  (b = b.parent !== M ? { parent: M, pool: M } : b))
                : (b = Am()),
              (p = { baseLanes: p.baseLanes | a, cachePool: b })),
          (s.memoizedState = p),
          (s.childLanes = eu(t, f, a)),
          (e.memoizedState = Ic),
          i)
        : (ka(e),
          (a = t.child),
          (t = a.sibling),
          (a = ea(a, { mode: "visible", children: i.children })),
          (a.return = e),
          (a.sibling = null),
          t !== null &&
            ((f = e.deletions),
            f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
          (e.child = a),
          (e.memoizedState = null),
          a);
    }
    function au(t, e) {
      return (
        (e = Us({ mode: "visible", children: e }, t.mode)),
        (e.return = t),
        (t.child = e)
      );
    }
    function Us(t, e) {
      return (
        (t = ge(22, t, null, e)),
        (t.lanes = 0),
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
        t
      );
    }
    function nu(t, e, a) {
      return (
        Fn(e, t.child, null, a),
        (t = au(e, e.pendingProps.children)),
        (t.flags |= 2),
        (e.memoizedState = null),
        t
      );
    }
    function Lg(t, e, a) {
      t.lanes |= e;
      var i = t.alternate;
      (i !== null && (i.lanes |= e), wc(t.return, e, a));
    }
    function iu(t, e, a, i, s) {
      var c = t.memoizedState;
      c === null
        ? (t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: a,
            tailMode: s,
          })
        : ((c.isBackwards = e),
          (c.rendering = null),
          (c.renderingStartTime = 0),
          (c.last = i),
          (c.tail = a),
          (c.tailMode = s));
    }
    function Hg(t, e, a) {
      var i = e.pendingProps,
        s = i.revealOrder,
        c = i.tail;
      if ((Ft(t, e, i.children, a), (i = Gt.current), (i & 2) !== 0))
        ((i = (i & 1) | 2), (e.flags |= 128));
      else {
        if (t !== null && (t.flags & 128) !== 0)
          t: for (t = e.child; t !== null; ) {
            if (t.tag === 13) t.memoizedState !== null && Lg(t, a, e);
            else if (t.tag === 19) Lg(t, a, e);
            else if (t.child !== null) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break t;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break t;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
        i &= 1;
      }
      switch ((G(Gt, i), s)) {
        case "forwards":
          for (a = e.child, s = null; a !== null; )
            ((t = a.alternate),
              t !== null && Cs(t) === null && (s = a),
              (a = a.sibling));
          ((a = s),
            a === null
              ? ((s = e.child), (e.child = null))
              : ((s = a.sibling), (a.sibling = null)),
            iu(e, !1, s, a, c));
          break;
        case "backwards":
          for (a = null, s = e.child, e.child = null; s !== null; ) {
            if (((t = s.alternate), t !== null && Cs(t) === null)) {
              e.child = s;
              break;
            }
            ((t = s.sibling), (s.sibling = a), (a = s), (s = t));
          }
          iu(e, !0, a, null, c);
          break;
        case "together":
          iu(e, !1, null, null, void 0);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function oa(t, e, a) {
      if (
        (t !== null && (e.dependencies = t.dependencies),
        (Na |= e.lanes),
        (a & e.childLanes) === 0)
      )
        if (t !== null) {
          if ((Ki(t, e, a, !1), (a & e.childLanes) === 0)) return null;
        } else return null;
      if (t !== null && e.child !== t.child) throw Error(o(153));
      if (e.child !== null) {
        for (
          t = e.child, a = ea(t, t.pendingProps), e.child = a, a.return = e;
          t.sibling !== null;
        )
          ((t = t.sibling),
            (a = a.sibling = ea(t, t.pendingProps)),
            (a.return = e));
        a.sibling = null;
      }
      return e.child;
    }
    function ru(t, e) {
      return (t.lanes & e) !== 0
        ? !0
        : ((t = t.dependencies), !!(t !== null && vs(t)));
    }
    function W2(t, e, a) {
      switch (e.tag) {
        case 3:
          (Et(e, e.stateNode.containerInfo),
            Ta(e, qt, t.memoizedState.cache),
            Gi());
          break;
        case 27:
        case 5:
          No(e);
          break;
        case 4:
          Et(e, e.stateNode.containerInfo);
          break;
        case 10:
          Ta(e, e.type, e.memoizedProps.value);
          break;
        case 13:
          var i = e.memoizedState;
          if (i !== null)
            return i.dehydrated !== null
              ? (ka(e), (e.flags |= 128), null)
              : (a & e.child.childLanes) !== 0
                ? Bg(t, e, a)
                : (ka(e), (t = oa(t, e, a)), t !== null ? t.sibling : null);
          ka(e);
          break;
        case 19:
          var s = (t.flags & 128) !== 0;
          if (
            ((i = (a & e.childLanes) !== 0),
            i || (Ki(t, e, a, !1), (i = (a & e.childLanes) !== 0)),
            s)
          ) {
            if (i) return Hg(t, e, a);
            e.flags |= 128;
          }
          if (
            ((s = e.memoizedState),
            s !== null &&
              ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
            G(Gt, Gt.current),
            i)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((e.lanes = 0), Cg(t, e, a));
        case 24:
          Ta(e, qt, t.memoizedState.cache);
      }
      return oa(t, e, a);
    }
    function Yg(t, e, a) {
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps) Kt = !0;
        else {
          if (!ru(t, a) && (e.flags & 128) === 0)
            return ((Kt = !1), W2(t, e, a));
          Kt = (t.flags & 131072) !== 0;
        }
      else ((Kt = !1), mt && (e.flags & 1048576) !== 0 && vm(e, gs, e.index));
      switch (((e.lanes = 0), e.tag)) {
        case 16:
          t: {
            t = e.pendingProps;
            var i = e.elementType,
              s = i._init;
            if (((i = s(i._payload)), (e.type = i), typeof i == "function"))
              pc(i)
                ? ((t = un(i, t)), (e.tag = 1), (e = jg(null, e, i, t, a)))
                : ((e.tag = 0), (e = $c(null, e, i, t, a)));
            else {
              if (i != null) {
                if (((s = i.$$typeof), s === J)) {
                  ((e.tag = 11), (e = Rg(null, e, i, t, a)));
                  break t;
                } else if (s === dt) {
                  ((e.tag = 14), (e = Og(null, e, i, t, a)));
                  break t;
                }
              }
              throw ((e = $e(i) || i), Error(o(306, e, "")));
            }
          }
          return e;
        case 0:
          return $c(t, e, e.type, e.pendingProps, a);
        case 1:
          return ((i = e.type), (s = un(i, e.pendingProps)), jg(t, e, i, s, a));
        case 3:
          t: {
            if ((Et(e, e.stateNode.containerInfo), t === null))
              throw Error(o(387));
            i = e.pendingProps;
            var c = e.memoizedState;
            ((s = c.element), kc(t, e), $i(e, i, null, a));
            var f = e.memoizedState;
            if (
              ((i = f.cache),
              Ta(e, qt, i),
              i !== c.cache && Sc(e, [qt], a, !0),
              Wi(),
              (i = f.element),
              c.isDehydrated)
            )
              if (
                ((c = { element: i, isDehydrated: !1, cache: f.cache }),
                (e.updateQueue.baseState = c),
                (e.memoizedState = c),
                e.flags & 256)
              ) {
                e = Ug(t, e, i, a);
                break t;
              } else if (i !== s) {
                ((s = Me(Error(o(424)), e)), Xi(s), (e = Ug(t, e, i, a)));
                break t;
              } else
                for (
                  t = e.stateNode.containerInfo,
                    t.nodeType === 9
                      ? (t = t.body)
                      : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                    _t = Le(t.firstChild),
                    re = e,
                    mt = !0,
                    nn = null,
                    Ke = !0,
                    a = bg(e, null, i, a),
                    e.child = a;
                  a;
                )
                  ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            else {
              if ((Gi(), i === s)) {
                e = oa(t, e, a);
                break t;
              }
              Ft(t, e, i, a);
            }
            e = e.child;
          }
          return e;
        case 26:
          return (
            js(t, e),
            t === null
              ? (a = Kv(e.type, null, e.pendingProps, null))
                ? (e.memoizedState = a)
                : mt ||
                  ((a = e.type),
                  (t = e.pendingProps),
                  (i = Ws(nt.current).createElement(a)),
                  (i[ee] = e),
                  (i[se] = t),
                  $t(i, a, t),
                  Xt(i),
                  (e.stateNode = i))
              : (e.memoizedState = Kv(
                  e.type,
                  t.memoizedProps,
                  e.pendingProps,
                  t.memoizedState,
                )),
            null
          );
        case 27:
          return (
            No(e),
            t === null &&
              mt &&
              ((i = e.stateNode = qv(e.type, e.pendingProps, nt.current)),
              (re = e),
              (Ke = !0),
              (s = _t),
              Ba(e.type) ? ((Lu = s), (_t = Le(i.firstChild))) : (_t = s)),
            Ft(t, e, e.pendingProps.children, a),
            js(t, e),
            t === null && (e.flags |= 4194304),
            e.child
          );
        case 5:
          return (
            t === null &&
              mt &&
              ((s = i = _t) &&
                ((i = ES(i, e.type, e.pendingProps, Ke)),
                i !== null
                  ? ((e.stateNode = i),
                    (re = e),
                    (_t = Le(i.firstChild)),
                    (Ke = !1),
                    (s = !0))
                  : (s = !1)),
              s || rn(e)),
            No(e),
            (s = e.type),
            (c = e.pendingProps),
            (f = t !== null ? t.memoizedProps : null),
            (i = c.children),
            Vu(s, c) ? (i = null) : f !== null && Vu(s, f) && (e.flags |= 32),
            e.memoizedState !== null &&
              ((s = Nc(t, e, G2, null, null, a)), (xr._currentValue = s)),
            js(t, e),
            Ft(t, e, i, a),
            e.child
          );
        case 6:
          return (
            t === null &&
              mt &&
              ((t = a = _t) &&
                ((a = MS(a, e.pendingProps, Ke)),
                a !== null
                  ? ((e.stateNode = a), (re = e), (_t = null), (t = !0))
                  : (t = !1)),
              t || rn(e)),
            null
          );
        case 13:
          return Bg(t, e, a);
        case 4:
          return (
            Et(e, e.stateNode.containerInfo),
            (i = e.pendingProps),
            t === null ? (e.child = Fn(e, null, i, a)) : Ft(t, e, i, a),
            e.child
          );
        case 11:
          return Rg(t, e, e.type, e.pendingProps, a);
        case 7:
          return (Ft(t, e, e.pendingProps, a), e.child);
        case 8:
          return (Ft(t, e, e.pendingProps.children, a), e.child);
        case 12:
          return (Ft(t, e, e.pendingProps.children, a), e.child);
        case 10:
          return (
            (i = e.pendingProps),
            Ta(e, e.type, i.value),
            Ft(t, e, i.children, a),
            e.child
          );
        case 9:
          return (
            (s = e.type._context),
            (i = e.pendingProps.children),
            ln(e),
            (s = ae(s)),
            (i = i(s)),
            (e.flags |= 1),
            Ft(t, e, i, a),
            e.child
          );
        case 14:
          return Og(t, e, e.type, e.pendingProps, a);
        case 15:
          return _g(t, e, e.type, e.pendingProps, a);
        case 19:
          return Hg(t, e, a);
        case 31:
          return (
            (i = e.pendingProps),
            (a = e.mode),
            (i = { mode: i.mode, children: i.children }),
            t === null
              ? ((a = Us(i, a)),
                (a.ref = e.ref),
                (e.child = a),
                (a.return = e),
                (e = a))
              : ((a = ea(t.child, i)),
                (a.ref = e.ref),
                (e.child = a),
                (a.return = e),
                (e = a)),
            e
          );
        case 22:
          return Cg(t, e, a);
        case 24:
          return (
            ln(e),
            (i = ae(qt)),
            t === null
              ? ((s = Ec()),
                s === null &&
                  ((s = At),
                  (c = Tc()),
                  (s.pooledCache = c),
                  c.refCount++,
                  c !== null && (s.pooledCacheLanes |= a),
                  (s = c)),
                (e.memoizedState = { parent: i, cache: s }),
                Dc(e),
                Ta(e, qt, s))
              : ((t.lanes & a) !== 0 && (kc(t, e), $i(e, null, null, a), Wi()),
                (s = t.memoizedState),
                (c = e.memoizedState),
                s.parent !== i
                  ? ((s = { parent: i, cache: i }),
                    (e.memoizedState = s),
                    e.lanes === 0 &&
                      (e.memoizedState = e.updateQueue.baseState = s),
                    Ta(e, qt, i))
                  : ((i = c.cache),
                    Ta(e, qt, i),
                    i !== s.cache && Sc(e, [qt], a, !0))),
            Ft(t, e, e.pendingProps.children, a),
            e.child
          );
        case 29:
          throw e.pendingProps;
      }
      throw Error(o(156, e.tag));
    }
    function ca(t) {
      t.flags |= 4;
    }
    function qg(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
        t.flags &= -16777217;
      else if (((t.flags |= 16777216), !Fv(e))) {
        if (
          ((e = Re.current),
          e !== null &&
            ((ft & 4194048) === ft
              ? Ze !== null
              : ((ft & 62914560) !== ft && (ft & 536870912) === 0) || e !== Ze))
        )
          throw ((Ji = Mc), Em);
        t.flags |= 8192;
      }
    }
    function Bs(t, e) {
      (e !== null && (t.flags |= 4),
        t.flags & 16384 &&
          ((e = t.tag !== 22 ? xp() : 536870912), (t.lanes |= e), (ti |= e)));
    }
    function rr(t, e) {
      if (!mt)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var a = null; e !== null; )
              (e.alternate !== null && (a = e), (e = e.sibling));
            a === null ? (t.tail = null) : (a.sibling = null);
            break;
          case "collapsed":
            a = t.tail;
            for (var i = null; a !== null; )
              (a.alternate !== null && (i = a), (a = a.sibling));
            i === null
              ? e || t.tail === null
                ? (t.tail = null)
                : (t.tail.sibling = null)
              : (i.sibling = null);
        }
    }
    function zt(t) {
      var e = t.alternate !== null && t.alternate.child === t.child,
        a = 0,
        i = 0;
      if (e)
        for (var s = t.child; s !== null; )
          ((a |= s.lanes | s.childLanes),
            (i |= s.subtreeFlags & 65011712),
            (i |= s.flags & 65011712),
            (s.return = t),
            (s = s.sibling));
      else
        for (s = t.child; s !== null; )
          ((a |= s.lanes | s.childLanes),
            (i |= s.subtreeFlags),
            (i |= s.flags),
            (s.return = t),
            (s = s.sibling));
      return ((t.subtreeFlags |= i), (t.childLanes = a), e);
    }
    function $2(t, e, a) {
      var i = e.pendingProps;
      switch ((yc(e), e.tag)) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (zt(e), null);
        case 1:
          return (zt(e), null);
        case 3:
          return (
            (a = e.stateNode),
            (i = null),
            t !== null && (i = t.memoizedState.cache),
            e.memoizedState.cache !== i && (e.flags |= 2048),
            ra(qt),
            ba(),
            a.pendingContext &&
              ((a.context = a.pendingContext), (a.pendingContext = null)),
            (t === null || t.child === null) &&
              (qi(e)
                ? ca(e)
                : t === null ||
                  (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                  ((e.flags |= 1024), xm())),
            zt(e),
            null
          );
        case 26:
          return (
            (a = e.memoizedState),
            t === null
              ? (ca(e),
                a !== null
                  ? (zt(e), qg(e, a))
                  : (zt(e), (e.flags &= -16777217)))
              : a
                ? a !== t.memoizedState
                  ? (ca(e), zt(e), qg(e, a))
                  : (zt(e), (e.flags &= -16777217))
                : (t.memoizedProps !== i && ca(e),
                  zt(e),
                  (e.flags &= -16777217)),
            null
          );
        case 27:
          (Jr(e), (a = nt.current));
          var s = e.type;
          if (t !== null && e.stateNode != null) t.memoizedProps !== i && ca(e);
          else {
            if (!i) {
              if (e.stateNode === null) throw Error(o(166));
              return (zt(e), null);
            }
            ((t = $.current),
              qi(e) ? ym(e) : ((t = qv(s, i, a)), (e.stateNode = t), ca(e)));
          }
          return (zt(e), null);
        case 5:
          if ((Jr(e), (a = e.type), t !== null && e.stateNode != null))
            t.memoizedProps !== i && ca(e);
          else {
            if (!i) {
              if (e.stateNode === null) throw Error(o(166));
              return (zt(e), null);
            }
            if (((t = $.current), qi(e))) ym(e);
            else {
              switch (((s = Ws(nt.current)), t)) {
                case 1:
                  t = s.createElementNS("http://www.w3.org/2000/svg", a);
                  break;
                case 2:
                  t = s.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      t = s.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case "math":
                      t = s.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        a,
                      );
                      break;
                    case "script":
                      ((t = s.createElement("div")),
                        (t.innerHTML = "<script><\/script>"),
                        (t = t.removeChild(t.firstChild)));
                      break;
                    case "select":
                      ((t =
                        typeof i.is == "string"
                          ? s.createElement("select", { is: i.is })
                          : s.createElement("select")),
                        i.multiple
                          ? (t.multiple = !0)
                          : i.size && (t.size = i.size));
                      break;
                    default:
                      t =
                        typeof i.is == "string"
                          ? s.createElement(a, { is: i.is })
                          : s.createElement(a);
                  }
              }
              ((t[ee] = e), (t[se] = i));
              t: for (s = e.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === e) break t;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === e) break t;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              e.stateNode = t;
              t: switch (($t(t, a, i), a)) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  t = !!i.autoFocus;
                  break t;
                case "img":
                  t = !0;
                  break t;
                default:
                  t = !1;
              }
              t && ca(e);
            }
          }
          return (zt(e), (e.flags &= -16777217), null);
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== i && ca(e);
          else {
            if (typeof i != "string" && e.stateNode === null)
              throw Error(o(166));
            if (((t = nt.current), qi(e))) {
              if (
                ((t = e.stateNode),
                (a = e.memoizedProps),
                (i = null),
                (s = re),
                s !== null)
              )
                switch (s.tag) {
                  case 27:
                  case 5:
                    i = s.memoizedProps;
                }
              ((t[ee] = e),
                (t = !!(
                  t.nodeValue === a ||
                  (i !== null && i.suppressHydrationWarning === !0) ||
                  Vv(t.nodeValue, a)
                )),
                t || rn(e));
            } else
              ((t = Ws(t).createTextNode(i)), (t[ee] = e), (e.stateNode = t));
          }
          return (zt(e), null);
        case 13:
          if (
            ((i = e.memoizedState),
            t === null ||
              (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
          ) {
            if (((s = qi(e)), i !== null && i.dehydrated !== null)) {
              if (t === null) {
                if (!s) throw Error(o(318));
                if (
                  ((s = e.memoizedState),
                  (s = s !== null ? s.dehydrated : null),
                  !s)
                )
                  throw Error(o(317));
                s[ee] = e;
              } else
                (Gi(),
                  (e.flags & 128) === 0 && (e.memoizedState = null),
                  (e.flags |= 4));
              (zt(e), (s = !1));
            } else
              ((s = xm()),
                t !== null &&
                  t.memoizedState !== null &&
                  (t.memoizedState.hydrationErrors = s),
                (s = !0));
            if (!s) return e.flags & 256 ? (la(e), e) : (la(e), null);
          }
          if ((la(e), (e.flags & 128) !== 0)) return ((e.lanes = a), e);
          if (
            ((a = i !== null), (t = t !== null && t.memoizedState !== null), a)
          ) {
            ((i = e.child),
              (s = null),
              i.alternate !== null &&
                i.alternate.memoizedState !== null &&
                i.alternate.memoizedState.cachePool !== null &&
                (s = i.alternate.memoizedState.cachePool.pool));
            var c = null;
            (i.memoizedState !== null &&
              i.memoizedState.cachePool !== null &&
              (c = i.memoizedState.cachePool.pool),
              c !== s && (i.flags |= 2048));
          }
          return (
            a !== t && a && (e.child.flags |= 8192),
            Bs(e, e.updateQueue),
            zt(e),
            null
          );
        case 4:
          return (
            ba(),
            t === null && Ru(e.stateNode.containerInfo),
            zt(e),
            null
          );
        case 10:
          return (ra(e.type), zt(e), null);
        case 19:
          if ((K(Gt), (s = e.memoizedState), s === null)) return (zt(e), null);
          if (((i = (e.flags & 128) !== 0), (c = s.rendering), c === null))
            if (i) rr(s, !1);
            else {
              if (Ct !== 0 || (t !== null && (t.flags & 128) !== 0))
                for (t = e.child; t !== null; ) {
                  if (((c = Cs(t)), c !== null)) {
                    for (
                      e.flags |= 128,
                        rr(s, !1),
                        t = c.updateQueue,
                        e.updateQueue = t,
                        Bs(e, t),
                        e.subtreeFlags = 0,
                        t = a,
                        a = e.child;
                      a !== null;
                    )
                      (gm(a, t), (a = a.sibling));
                    return (G(Gt, (Gt.current & 1) | 2), e.child);
                  }
                  t = t.sibling;
                }
              s.tail !== null &&
                Xe() > Ys &&
                ((e.flags |= 128), (i = !0), rr(s, !1), (e.lanes = 4194304));
            }
          else {
            if (!i)
              if (((t = Cs(c)), t !== null)) {
                if (
                  ((e.flags |= 128),
                  (i = !0),
                  (t = t.updateQueue),
                  (e.updateQueue = t),
                  Bs(e, t),
                  rr(s, !0),
                  s.tail === null &&
                    s.tailMode === "hidden" &&
                    !c.alternate &&
                    !mt)
                )
                  return (zt(e), null);
              } else
                2 * Xe() - s.renderingStartTime > Ys &&
                  a !== 536870912 &&
                  ((e.flags |= 128), (i = !0), rr(s, !1), (e.lanes = 4194304));
            s.isBackwards
              ? ((c.sibling = e.child), (e.child = c))
              : ((t = s.last),
                t !== null ? (t.sibling = c) : (e.child = c),
                (s.last = c));
          }
          return s.tail !== null
            ? ((e = s.tail),
              (s.rendering = e),
              (s.tail = e.sibling),
              (s.renderingStartTime = Xe()),
              (e.sibling = null),
              (t = Gt.current),
              G(Gt, i ? (t & 1) | 2 : t & 1),
              e)
            : (zt(e), null);
        case 22:
        case 23:
          return (
            la(e),
            _c(),
            (i = e.memoizedState !== null),
            t !== null
              ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
              : i && (e.flags |= 8192),
            i
              ? (a & 536870912) !== 0 &&
                (e.flags & 128) === 0 &&
                (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
              : zt(e),
            (a = e.updateQueue),
            a !== null && Bs(e, a.retryQueue),
            (a = null),
            t !== null &&
              t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (a = t.memoizedState.cachePool.pool),
            (i = null),
            e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (i = e.memoizedState.cachePool.pool),
            i !== a && (e.flags |= 2048),
            t !== null && K(on),
            null
          );
        case 24:
          return (
            (a = null),
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            ra(qt),
            zt(e),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, e.tag));
    }
    function I2(t, e) {
      switch ((yc(e), e.tag)) {
        case 1:
          return (
            (t = e.flags),
            t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
          );
        case 3:
          return (
            ra(qt),
            ba(),
            (t = e.flags),
            (t & 65536) !== 0 && (t & 128) === 0
              ? ((e.flags = (t & -65537) | 128), e)
              : null
          );
        case 26:
        case 27:
        case 5:
          return (Jr(e), null);
        case 13:
          if (
            (la(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
          ) {
            if (e.alternate === null) throw Error(o(340));
            Gi();
          }
          return (
            (t = e.flags),
            t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
          );
        case 19:
          return (K(Gt), null);
        case 4:
          return (ba(), null);
        case 10:
          return (ra(e.type), null);
        case 22:
        case 23:
          return (
            la(e),
            _c(),
            t !== null && K(on),
            (t = e.flags),
            t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
          );
        case 24:
          return (ra(qt), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Gg(t, e) {
      switch ((yc(e), e.tag)) {
        case 3:
          (ra(qt), ba());
          break;
        case 26:
        case 27:
        case 5:
          Jr(e);
          break;
        case 4:
          ba();
          break;
        case 13:
          la(e);
          break;
        case 19:
          K(Gt);
          break;
        case 10:
          ra(e.type);
          break;
        case 22:
        case 23:
          (la(e), _c(), t !== null && K(on));
          break;
        case 24:
          ra(qt);
      }
    }
    function sr(t, e) {
      try {
        var a = e.updateQueue,
          i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var s = i.next;
          a = s;
          do {
            if ((a.tag & t) === t) {
              i = void 0;
              var c = a.create,
                f = a.inst;
              ((i = c()), (f.destroy = i));
            }
            a = a.next;
          } while (a !== s);
        }
      } catch (p) {
        wt(e, e.return, p);
      }
    }
    function Ra(t, e, a) {
      try {
        var i = e.updateQueue,
          s = i !== null ? i.lastEffect : null;
        if (s !== null) {
          var c = s.next;
          i = c;
          do {
            if ((i.tag & t) === t) {
              var f = i.inst,
                p = f.destroy;
              if (p !== void 0) {
                ((f.destroy = void 0), (s = e));
                var b = a,
                  M = p;
                try {
                  M();
                } catch (_) {
                  wt(s, b, _);
                }
              }
            }
            i = i.next;
          } while (i !== c);
        }
      } catch (_) {
        wt(e, e.return, _);
      }
    }
    function Xg(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        try {
          Om(e, a);
        } catch (i) {
          wt(t, t.return, i);
        }
      }
    }
    function Kg(t, e, a) {
      ((a.props = un(t.type, t.memoizedProps)), (a.state = t.memoizedState));
      try {
        a.componentWillUnmount();
      } catch (i) {
        wt(t, e, i);
      }
    }
    function lr(t, e) {
      try {
        var a = t.ref;
        if (a !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var i = t.stateNode;
              break;
            case 30:
              i = t.stateNode;
              break;
            default:
              i = t.stateNode;
          }
          typeof a == "function" ? (t.refCleanup = a(i)) : (a.current = i);
        }
      } catch (s) {
        wt(t, e, s);
      }
    }
    function Qe(t, e) {
      var a = t.ref,
        i = t.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            i();
          } catch (s) {
            wt(t, e, s);
          } finally {
            ((t.refCleanup = null),
              (t = t.alternate),
              t != null && (t.refCleanup = null));
          }
        else if (typeof a == "function")
          try {
            a(null);
          } catch (s) {
            wt(t, e, s);
          }
        else a.current = null;
    }
    function Zg(t) {
      var e = t.type,
        a = t.memoizedProps,
        i = t.stateNode;
      try {
        t: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            a.autoFocus && i.focus();
            break t;
          case "img":
            a.src ? (i.src = a.src) : a.srcSet && (i.srcset = a.srcSet);
        }
      } catch (s) {
        wt(t, t.return, s);
      }
    }
    function su(t, e, a) {
      try {
        var i = t.stateNode;
        (xS(i, t.type, a, e), (i[se] = e));
      } catch (s) {
        wt(t, t.return, s);
      }
    }
    function Qg(t) {
      return (
        t.tag === 5 ||
        t.tag === 3 ||
        t.tag === 26 ||
        (t.tag === 27 && Ba(t.type)) ||
        t.tag === 4
      );
    }
    function lu(t) {
      t: for (;;) {
        for (; t.sibling === null; ) {
          if (t.return === null || Qg(t.return)) return null;
          t = t.return;
        }
        for (
          t.sibling.return = t.return, t = t.sibling;
          t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
        ) {
          if (
            (t.tag === 27 && Ba(t.type)) ||
            t.flags & 2 ||
            t.child === null ||
            t.tag === 4
          )
            continue t;
          ((t.child.return = t), (t = t.child));
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function ou(t, e, a) {
      var i = t.tag;
      if (i === 5 || i === 6)
        ((t = t.stateNode),
          e
            ? (a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a
              ).insertBefore(t, e)
            : ((e =
                a.nodeType === 9
                  ? a.body
                  : a.nodeName === "HTML"
                    ? a.ownerDocument.body
                    : a),
              e.appendChild(t),
              (a = a._reactRootContainer),
              a != null || e.onclick !== null || (e.onclick = Fs)));
      else if (
        i !== 4 &&
        (i === 27 && Ba(t.type) && ((a = t.stateNode), (e = null)),
        (t = t.child),
        t !== null)
      )
        for (ou(t, e, a), t = t.sibling; t !== null; )
          (ou(t, e, a), (t = t.sibling));
    }
    function Ls(t, e, a) {
      var i = t.tag;
      if (i === 5 || i === 6)
        ((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
      else if (
        i !== 4 &&
        (i === 27 && Ba(t.type) && (a = t.stateNode), (t = t.child), t !== null)
      )
        for (Ls(t, e, a), t = t.sibling; t !== null; )
          (Ls(t, e, a), (t = t.sibling));
    }
    function Pg(t) {
      var e = t.stateNode,
        a = t.memoizedProps;
      try {
        for (var i = t.type, s = e.attributes; s.length; )
          e.removeAttributeNode(s[0]);
        ($t(e, i, a), (e[ee] = t), (e[se] = a));
      } catch (c) {
        wt(t, t.return, c);
      }
    }
    var ua = !1,
      Vt = !1,
      cu = !1,
      Jg = typeof WeakSet == "function" ? WeakSet : Set,
      Zt = null;
    function tS(t, e) {
      if (((t = t.containerInfo), (Cu = nl), (t = sm(t)), lc(t))) {
        if ("selectionStart" in t)
          var a = { start: t.selectionStart, end: t.selectionEnd };
        else
          t: {
            a = ((a = t.ownerDocument) && a.defaultView) || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var s = i.anchorOffset,
                c = i.focusNode;
              i = i.focusOffset;
              try {
                (a.nodeType, c.nodeType);
              } catch {
                a = null;
                break t;
              }
              var f = 0,
                p = -1,
                b = -1,
                M = 0,
                _ = 0,
                V = t,
                k = null;
              e: for (;;) {
                for (
                  var z;
                  V !== a || (s !== 0 && V.nodeType !== 3) || (p = f + s),
                    V !== c || (i !== 0 && V.nodeType !== 3) || (b = f + i),
                    V.nodeType === 3 && (f += V.nodeValue.length),
                    (z = V.firstChild) !== null;
                )
                  ((k = V), (V = z));
                for (;;) {
                  if (V === t) break e;
                  if (
                    (k === a && ++M === s && (p = f),
                    k === c && ++_ === i && (b = f),
                    (z = V.nextSibling) !== null)
                  )
                    break;
                  ((V = k), (k = V.parentNode));
                }
                V = z;
              }
              a = p === -1 || b === -1 ? null : { start: p, end: b };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (
        Nu = { focusedElem: t, selectionRange: a }, nl = !1, Zt = e;
        Zt !== null;
      )
        if (
          ((e = Zt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
        )
          ((t.return = e), (Zt = t));
        else
          for (; Zt !== null; ) {
            switch (((e = Zt), (c = e.alternate), (t = e.flags), e.tag)) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((t & 1024) !== 0 && c !== null) {
                  ((t = void 0),
                    (a = e),
                    (s = c.memoizedProps),
                    (c = c.memoizedState),
                    (i = a.stateNode));
                  try {
                    var at = un(a.type, s, a.elementType === a.type);
                    ((t = i.getSnapshotBeforeUpdate(at, c)),
                      (i.__reactInternalSnapshotBeforeUpdate = t));
                  } catch (I) {
                    wt(a, a.return, I);
                  }
                }
                break;
              case 3:
                if ((t & 1024) !== 0) {
                  if (
                    ((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
                  )
                    Uu(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Uu(t);
                        break;
                      default:
                        t.textContent = "";
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
              default:
                if ((t & 1024) !== 0) throw Error(o(163));
            }
            if (((t = e.sibling), t !== null)) {
              ((t.return = e.return), (Zt = t));
              break;
            }
            Zt = e.return;
          }
    }
    function Fg(t, e, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          (Oa(t, a), i & 4 && sr(5, a));
          break;
        case 1:
          if ((Oa(t, a), i & 4))
            if (((t = a.stateNode), e === null))
              try {
                t.componentDidMount();
              } catch (f) {
                wt(a, a.return, f);
              }
            else {
              var s = un(a.type, e.memoizedProps);
              e = e.memoizedState;
              try {
                t.componentDidUpdate(
                  s,
                  e,
                  t.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (f) {
                wt(a, a.return, f);
              }
            }
          (i & 64 && Xg(a), i & 512 && lr(a, a.return));
          break;
        case 3:
          if ((Oa(t, a), i & 64 && ((t = a.updateQueue), t !== null))) {
            if (((e = null), a.child !== null))
              switch (a.child.tag) {
                case 27:
                case 5:
                  e = a.child.stateNode;
                  break;
                case 1:
                  e = a.child.stateNode;
              }
            try {
              Om(t, e);
            } catch (f) {
              wt(a, a.return, f);
            }
          }
          break;
        case 27:
          e === null && i & 4 && Pg(a);
        case 26:
        case 5:
          (Oa(t, a), e === null && i & 4 && Zg(a), i & 512 && lr(a, a.return));
          break;
        case 12:
          Oa(t, a);
          break;
        case 13:
          (Oa(t, a),
            i & 4 && Ig(t, a),
            i & 64 &&
              ((t = a.memoizedState),
              t !== null &&
                ((t = t.dehydrated),
                t !== null && ((a = cS.bind(null, a)), DS(t, a)))));
          break;
        case 22:
          if (((i = a.memoizedState !== null || ua), !i)) {
            ((e = (e !== null && e.memoizedState !== null) || Vt), (s = ua));
            var c = Vt;
            ((ua = i),
              (Vt = e) && !c
                ? _a(t, a, (a.subtreeFlags & 8772) !== 0)
                : Oa(t, a),
              (ua = s),
              (Vt = c));
          }
          break;
        case 30:
          break;
        default:
          Oa(t, a);
      }
    }
    function Wg(t) {
      var e = t.alternate;
      (e !== null && ((t.alternate = null), Wg(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 && ((e = t.stateNode), e !== null && qo(e)),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null));
    }
    var Mt = null,
      ce = !1;
    function da(t, e, a) {
      for (a = a.child; a !== null; ) ($g(t, e, a), (a = a.sibling));
    }
    function $g(t, e, a) {
      if (he && typeof he.onCommitFiberUnmount == "function")
        try {
          he.onCommitFiberUnmount(ki, a);
        } catch {}
      switch (a.tag) {
        case 26:
          (Vt || Qe(a, e),
            da(t, e, a),
            a.memoizedState
              ? a.memoizedState.count--
              : a.stateNode &&
                ((a = a.stateNode), a.parentNode.removeChild(a)));
          break;
        case 27:
          Vt || Qe(a, e);
          var i = Mt,
            s = ce;
          (Ba(a.type) && ((Mt = a.stateNode), (ce = !1)),
            da(t, e, a),
            gr(a.stateNode),
            (Mt = i),
            (ce = s));
          break;
        case 5:
          Vt || Qe(a, e);
        case 6:
          if (
            ((i = Mt),
            (s = ce),
            (Mt = null),
            da(t, e, a),
            (Mt = i),
            (ce = s),
            Mt !== null)
          )
            if (ce)
              try {
                (Mt.nodeType === 9
                  ? Mt.body
                  : Mt.nodeName === "HTML"
                    ? Mt.ownerDocument.body
                    : Mt
                ).removeChild(a.stateNode);
              } catch (c) {
                wt(a, e, c);
              }
            else
              try {
                Mt.removeChild(a.stateNode);
              } catch (c) {
                wt(a, e, c);
              }
          break;
        case 18:
          Mt !== null &&
            (ce
              ? ((t = Mt),
                Hv(
                  t.nodeType === 9
                    ? t.body
                    : t.nodeName === "HTML"
                      ? t.ownerDocument.body
                      : t,
                  a.stateNode,
                ),
                Ar(t))
              : Hv(Mt, a.stateNode));
          break;
        case 4:
          ((i = Mt),
            (s = ce),
            (Mt = a.stateNode.containerInfo),
            (ce = !0),
            da(t, e, a),
            (Mt = i),
            (ce = s));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Vt || Ra(2, a, e), Vt || Ra(4, a, e), da(t, e, a));
          break;
        case 1:
          (Vt ||
            (Qe(a, e),
            (i = a.stateNode),
            typeof i.componentWillUnmount == "function" && Kg(a, e, i)),
            da(t, e, a));
          break;
        case 21:
          da(t, e, a);
          break;
        case 22:
          ((Vt = (i = Vt) || a.memoizedState !== null), da(t, e, a), (Vt = i));
          break;
        default:
          da(t, e, a);
      }
    }
    function Ig(t, e) {
      if (
        e.memoizedState === null &&
        ((t = e.alternate),
        t !== null &&
          ((t = t.memoizedState),
          t !== null && ((t = t.dehydrated), t !== null)))
      )
        try {
          Ar(t);
        } catch (a) {
          wt(e, e.return, a);
        }
    }
    function eS(t) {
      switch (t.tag) {
        case 13:
        case 19:
          var e = t.stateNode;
          return (e === null && (e = t.stateNode = new Jg()), e);
        case 22:
          return (
            (t = t.stateNode),
            (e = t._retryCache),
            e === null && (e = t._retryCache = new Jg()),
            e
          );
        default:
          throw Error(o(435, t.tag));
      }
    }
    function uu(t, e) {
      var a = eS(t);
      e.forEach(function (i) {
        var s = uS.bind(null, t, i);
        a.has(i) || (a.add(i), i.then(s, s));
      });
    }
    function ve(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var s = a[i],
            c = t,
            f = e,
            p = f;
          t: for (; p !== null; ) {
            switch (p.tag) {
              case 27:
                if (Ba(p.type)) {
                  ((Mt = p.stateNode), (ce = !1));
                  break t;
                }
                break;
              case 5:
                ((Mt = p.stateNode), (ce = !1));
                break t;
              case 3:
              case 4:
                ((Mt = p.stateNode.containerInfo), (ce = !0));
                break t;
            }
            p = p.return;
          }
          if (Mt === null) throw Error(o(160));
          ($g(c, f, s),
            (Mt = null),
            (ce = !1),
            (c = s.alternate),
            c !== null && (c.return = null),
            (s.return = null));
        }
      if (e.subtreeFlags & 13878)
        for (e = e.child; e !== null; ) (tv(e, t), (e = e.sibling));
    }
    var Be = null;
    function tv(t, e) {
      var a = t.alternate,
        i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ve(e, t),
            ye(t),
            i & 4 && (Ra(3, t, t.return), sr(3, t), Ra(5, t, t.return)));
          break;
        case 1:
          (ve(e, t),
            ye(t),
            i & 512 && (Vt || a === null || Qe(a, a.return)),
            i & 64 &&
              ua &&
              ((t = t.updateQueue),
              t !== null &&
                ((i = t.callbacks),
                i !== null &&
                  ((a = t.shared.hiddenCallbacks),
                  (t.shared.hiddenCallbacks = a === null ? i : a.concat(i))))));
          break;
        case 26:
          var s = Be;
          if (
            (ve(e, t),
            ye(t),
            i & 512 && (Vt || a === null || Qe(a, a.return)),
            i & 4)
          ) {
            var c = a !== null ? a.memoizedState : null;
            if (((i = t.memoizedState), a === null))
              if (i === null)
                if (t.stateNode === null) {
                  t: {
                    ((i = t.type),
                      (a = t.memoizedProps),
                      (s = s.ownerDocument || s));
                    e: switch (i) {
                      case "title":
                        ((c = s.getElementsByTagName("title")[0]),
                          (!c ||
                            c[Oi] ||
                            c[ee] ||
                            c.namespaceURI === "http://www.w3.org/2000/svg" ||
                            c.hasAttribute("itemprop")) &&
                            ((c = s.createElement(i)),
                            s.head.insertBefore(
                              c,
                              s.querySelector("head > title"),
                            )),
                          $t(c, i, a),
                          (c[ee] = t),
                          Xt(c),
                          (i = c));
                        break t;
                      case "link":
                        var f = Pv("link", "href", s).get(i + (a.href || ""));
                        if (f) {
                          for (var p = 0; p < f.length; p++)
                            if (
                              ((c = f[p]),
                              c.getAttribute("href") ===
                                (a.href == null || a.href === ""
                                  ? null
                                  : a.href) &&
                                c.getAttribute("rel") ===
                                  (a.rel == null ? null : a.rel) &&
                                c.getAttribute("title") ===
                                  (a.title == null ? null : a.title) &&
                                c.getAttribute("crossorigin") ===
                                  (a.crossOrigin == null
                                    ? null
                                    : a.crossOrigin))
                            ) {
                              f.splice(p, 1);
                              break e;
                            }
                        }
                        ((c = s.createElement(i)),
                          $t(c, i, a),
                          s.head.appendChild(c));
                        break;
                      case "meta":
                        if (
                          (f = Pv("meta", "content", s).get(
                            i + (a.content || ""),
                          ))
                        ) {
                          for (p = 0; p < f.length; p++)
                            if (
                              ((c = f[p]),
                              c.getAttribute("content") ===
                                (a.content == null ? null : "" + a.content) &&
                                c.getAttribute("name") ===
                                  (a.name == null ? null : a.name) &&
                                c.getAttribute("property") ===
                                  (a.property == null ? null : a.property) &&
                                c.getAttribute("http-equiv") ===
                                  (a.httpEquiv == null ? null : a.httpEquiv) &&
                                c.getAttribute("charset") ===
                                  (a.charSet == null ? null : a.charSet))
                            ) {
                              f.splice(p, 1);
                              break e;
                            }
                        }
                        ((c = s.createElement(i)),
                          $t(c, i, a),
                          s.head.appendChild(c));
                        break;
                      default:
                        throw Error(o(468, i));
                    }
                    ((c[ee] = t), Xt(c), (i = c));
                  }
                  t.stateNode = i;
                } else Jv(s, t.type, t.stateNode);
              else t.stateNode = Qv(s, i, t.memoizedProps);
            else
              c !== i
                ? (c === null
                    ? a.stateNode !== null &&
                      ((a = a.stateNode), a.parentNode.removeChild(a))
                    : c.count--,
                  i === null
                    ? Jv(s, t.type, t.stateNode)
                    : Qv(s, i, t.memoizedProps))
                : i === null &&
                  t.stateNode !== null &&
                  su(t, t.memoizedProps, a.memoizedProps);
          }
          break;
        case 27:
          (ve(e, t),
            ye(t),
            i & 512 && (Vt || a === null || Qe(a, a.return)),
            a !== null && i & 4 && su(t, t.memoizedProps, a.memoizedProps));
          break;
        case 5:
          if (
            (ve(e, t),
            ye(t),
            i & 512 && (Vt || a === null || Qe(a, a.return)),
            t.flags & 32)
          ) {
            s = t.stateNode;
            try {
              _n(s, "");
            } catch (z) {
              wt(t, t.return, z);
            }
          }
          (i & 4 &&
            t.stateNode != null &&
            ((s = t.memoizedProps), su(t, s, a !== null ? a.memoizedProps : s)),
            i & 1024 && (cu = !0));
          break;
        case 6:
          if ((ve(e, t), ye(t), i & 4)) {
            if (t.stateNode === null) throw Error(o(162));
            ((i = t.memoizedProps), (a = t.stateNode));
            try {
              a.nodeValue = i;
            } catch (z) {
              wt(t, t.return, z);
            }
          }
          break;
        case 3:
          if (
            ((tl = null),
            (s = Be),
            (Be = $s(e.containerInfo)),
            ve(e, t),
            (Be = s),
            ye(t),
            i & 4 && a !== null && a.memoizedState.isDehydrated)
          )
            try {
              Ar(e.containerInfo);
            } catch (z) {
              wt(t, t.return, z);
            }
          cu && ((cu = !1), ev(t));
          break;
        case 4:
          ((i = Be),
            (Be = $s(t.stateNode.containerInfo)),
            ve(e, t),
            ye(t),
            (Be = i));
          break;
        case 12:
          (ve(e, t), ye(t));
          break;
        case 13:
          (ve(e, t),
            ye(t),
            t.child.flags & 8192 &&
              (t.memoizedState !== null) !=
                (a !== null && a.memoizedState !== null) &&
              (gu = Xe()),
            i & 4 &&
              ((i = t.updateQueue),
              i !== null && ((t.updateQueue = null), uu(t, i))));
          break;
        case 22:
          s = t.memoizedState !== null;
          var b = a !== null && a.memoizedState !== null,
            M = ua,
            _ = Vt;
          if (
            ((ua = M || s),
            (Vt = _ || b),
            ve(e, t),
            (Vt = _),
            (ua = M),
            ye(t),
            i & 8192)
          )
            t: for (
              e = t.stateNode,
                e._visibility = s ? e._visibility & -2 : e._visibility | 1,
                s && (a === null || b || ua || Vt || dn(t)),
                a = null,
                e = t;
              ;
            ) {
              if (e.tag === 5 || e.tag === 26) {
                if (a === null) {
                  b = a = e;
                  try {
                    if (((c = b.stateNode), s))
                      ((f = c.style),
                        typeof f.setProperty == "function"
                          ? f.setProperty("display", "none", "important")
                          : (f.display = "none"));
                    else {
                      p = b.stateNode;
                      var V = b.memoizedProps.style,
                        k =
                          V != null && V.hasOwnProperty("display")
                            ? V.display
                            : null;
                      p.style.display =
                        k == null || typeof k == "boolean"
                          ? ""
                          : ("" + k).trim();
                    }
                  } catch (z) {
                    wt(b, b.return, z);
                  }
                }
              } else if (e.tag === 6) {
                if (a === null) {
                  b = e;
                  try {
                    b.stateNode.nodeValue = s ? "" : b.memoizedProps;
                  } catch (z) {
                    wt(b, b.return, z);
                  }
                }
              } else if (
                ((e.tag !== 22 && e.tag !== 23) ||
                  e.memoizedState === null ||
                  e === t) &&
                e.child !== null
              ) {
                ((e.child.return = e), (e = e.child));
                continue;
              }
              if (e === t) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break t;
                (a === e && (a = null), (e = e.return));
              }
              (a === e && (a = null),
                (e.sibling.return = e.return),
                (e = e.sibling));
            }
          i & 4 &&
            ((i = t.updateQueue),
            i !== null &&
              ((a = i.retryQueue),
              a !== null && ((i.retryQueue = null), uu(t, a))));
          break;
        case 19:
          (ve(e, t),
            ye(t),
            i & 4 &&
              ((i = t.updateQueue),
              i !== null && ((t.updateQueue = null), uu(t, i))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (ve(e, t), ye(t));
      }
    }
    function ye(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var a, i = t.return; i !== null; ) {
            if (Qg(i)) {
              a = i;
              break;
            }
            i = i.return;
          }
          if (a == null) throw Error(o(160));
          switch (a.tag) {
            case 27:
              var s = a.stateNode,
                c = lu(t);
              Ls(t, c, s);
              break;
            case 5:
              var f = a.stateNode;
              a.flags & 32 && (_n(f, ""), (a.flags &= -33));
              var p = lu(t);
              Ls(t, p, f);
              break;
            case 3:
            case 4:
              var b = a.stateNode.containerInfo,
                M = lu(t);
              ou(t, M, b);
              break;
            default:
              throw Error(o(161));
          }
        } catch (_) {
          wt(t, t.return, _);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function ev(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          (ev(e),
            e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
            (t = t.sibling));
        }
    }
    function Oa(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          (Fg(t, e.alternate, e), (e = e.sibling));
    }
    function dn(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Ra(4, e, e.return), dn(e));
            break;
          case 1:
            Qe(e, e.return);
            var a = e.stateNode;
            (typeof a.componentWillUnmount == "function" && Kg(e, e.return, a),
              dn(e));
            break;
          case 27:
            gr(e.stateNode);
          case 26:
          case 5:
            (Qe(e, e.return), dn(e));
            break;
          case 22:
            e.memoizedState === null && dn(e);
            break;
          case 30:
            dn(e);
            break;
          default:
            dn(e);
        }
        t = t.sibling;
      }
    }
    function _a(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var i = e.alternate,
          s = t,
          c = e,
          f = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            (_a(s, c, a), sr(4, c));
            break;
          case 1:
            if (
              (_a(s, c, a),
              (i = c),
              (s = i.stateNode),
              typeof s.componentDidMount == "function")
            )
              try {
                s.componentDidMount();
              } catch (M) {
                wt(i, i.return, M);
              }
            if (((i = c), (s = i.updateQueue), s !== null)) {
              var p = i.stateNode;
              try {
                var b = s.shared.hiddenCallbacks;
                if (b !== null)
                  for (
                    s.shared.hiddenCallbacks = null, s = 0;
                    s < b.length;
                    s++
                  )
                    Rm(b[s], p);
              } catch (M) {
                wt(i, i.return, M);
              }
            }
            (a && f & 64 && Xg(c), lr(c, c.return));
            break;
          case 27:
            Pg(c);
          case 26:
          case 5:
            (_a(s, c, a), a && i === null && f & 4 && Zg(c), lr(c, c.return));
            break;
          case 12:
            _a(s, c, a);
            break;
          case 13:
            (_a(s, c, a), a && f & 4 && Ig(s, c));
            break;
          case 22:
            (c.memoizedState === null && _a(s, c, a), lr(c, c.return));
            break;
          case 30:
            break;
          default:
            _a(s, c, a);
        }
        e = e.sibling;
      }
    }
    function du(t, e) {
      var a = null;
      (t !== null &&
        t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (a = t.memoizedState.cachePool.pool),
        (t = null),
        e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (t = e.memoizedState.cachePool.pool),
        t !== a && (t != null && t.refCount++, a != null && Zi(a)));
    }
    function fu(t, e) {
      ((t = null),
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        (e = e.memoizedState.cache),
        e !== t && (e.refCount++, t != null && Zi(t)));
    }
    function Pe(t, e, a, i) {
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) (av(t, e, a, i), (e = e.sibling));
    }
    function av(t, e, a, i) {
      var s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Pe(t, e, a, i), s & 2048 && sr(9, e));
          break;
        case 1:
          Pe(t, e, a, i);
          break;
        case 3:
          (Pe(t, e, a, i),
            s & 2048 &&
              ((t = null),
              e.alternate !== null && (t = e.alternate.memoizedState.cache),
              (e = e.memoizedState.cache),
              e !== t && (e.refCount++, t != null && Zi(t))));
          break;
        case 12:
          if (s & 2048) {
            (Pe(t, e, a, i), (t = e.stateNode));
            try {
              var c = e.memoizedProps,
                f = c.id,
                p = c.onPostCommit;
              typeof p == "function" &&
                p(
                  f,
                  e.alternate === null ? "mount" : "update",
                  t.passiveEffectDuration,
                  -0,
                );
            } catch (b) {
              wt(e, e.return, b);
            }
          } else Pe(t, e, a, i);
          break;
        case 13:
          Pe(t, e, a, i);
          break;
        case 23:
          break;
        case 22:
          ((c = e.stateNode),
            (f = e.alternate),
            e.memoizedState !== null
              ? c._visibility & 2
                ? Pe(t, e, a, i)
                : or(t, e)
              : c._visibility & 2
                ? Pe(t, e, a, i)
                : ((c._visibility |= 2),
                  Wn(t, e, a, i, (e.subtreeFlags & 10256) !== 0)),
            s & 2048 && du(f, e));
          break;
        case 24:
          (Pe(t, e, a, i), s & 2048 && fu(e.alternate, e));
          break;
        default:
          Pe(t, e, a, i);
      }
    }
    function Wn(t, e, a, i, s) {
      for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
        var c = t,
          f = e,
          p = a,
          b = i,
          M = f.flags;
        switch (f.tag) {
          case 0:
          case 11:
          case 15:
            (Wn(c, f, p, b, s), sr(8, f));
            break;
          case 23:
            break;
          case 22:
            var _ = f.stateNode;
            (f.memoizedState !== null
              ? _._visibility & 2
                ? Wn(c, f, p, b, s)
                : or(c, f)
              : ((_._visibility |= 2), Wn(c, f, p, b, s)),
              s && M & 2048 && du(f.alternate, f));
            break;
          case 24:
            (Wn(c, f, p, b, s), s && M & 2048 && fu(f.alternate, f));
            break;
          default:
            Wn(c, f, p, b, s);
        }
        e = e.sibling;
      }
    }
    function or(t, e) {
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) {
          var a = t,
            i = e,
            s = i.flags;
          switch (i.tag) {
            case 22:
              (or(a, i), s & 2048 && du(i.alternate, i));
              break;
            case 24:
              (or(a, i), s & 2048 && fu(i.alternate, i));
              break;
            default:
              or(a, i);
          }
          e = e.sibling;
        }
    }
    var cr = 8192;
    function $n(t) {
      if (t.subtreeFlags & cr)
        for (t = t.child; t !== null; ) (nv(t), (t = t.sibling));
    }
    function nv(t) {
      switch (t.tag) {
        case 26:
          ($n(t),
            t.flags & cr &&
              t.memoizedState !== null &&
              HS(Be, t.memoizedState, t.memoizedProps));
          break;
        case 5:
          $n(t);
          break;
        case 3:
        case 4:
          var e = Be;
          ((Be = $s(t.stateNode.containerInfo)), $n(t), (Be = e));
          break;
        case 22:
          t.memoizedState === null &&
            ((e = t.alternate),
            e !== null && e.memoizedState !== null
              ? ((e = cr), (cr = 16777216), $n(t), (cr = e))
              : $n(t));
          break;
        default:
          $n(t);
      }
    }
    function iv(t) {
      var e = t.alternate;
      if (e !== null && ((t = e.child), t !== null)) {
        e.child = null;
        do ((e = t.sibling), (t.sibling = null), (t = e));
        while (t !== null);
      }
    }
    function ur(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var i = e[a];
            ((Zt = i), sv(i, t));
          }
        iv(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) (rv(t), (t = t.sibling));
    }
    function rv(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (ur(t), t.flags & 2048 && Ra(9, t, t.return));
          break;
        case 3:
          ur(t);
          break;
        case 12:
          ur(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null &&
          e._visibility & 2 &&
          (t.return === null || t.return.tag !== 13)
            ? ((e._visibility &= -3), Hs(t))
            : ur(t);
          break;
        default:
          ur(t);
      }
    }
    function Hs(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var i = e[a];
            ((Zt = i), sv(i, t));
          }
        iv(t);
      }
      for (t = t.child; t !== null; ) {
        switch (((e = t), e.tag)) {
          case 0:
          case 11:
          case 15:
            (Ra(8, e, e.return), Hs(e));
            break;
          case 22:
            ((a = e.stateNode),
              a._visibility & 2 && ((a._visibility &= -3), Hs(e)));
            break;
          default:
            Hs(e);
        }
        t = t.sibling;
      }
    }
    function sv(t, e) {
      for (; Zt !== null; ) {
        var a = Zt;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Ra(8, a, e);
            break;
          case 23:
          case 22:
            if (
              a.memoizedState !== null &&
              a.memoizedState.cachePool !== null
            ) {
              var i = a.memoizedState.cachePool.pool;
              i != null && i.refCount++;
            }
            break;
          case 24:
            Zi(a.memoizedState.cache);
        }
        if (((i = a.child), i !== null)) ((i.return = a), (Zt = i));
        else
          t: for (a = t; Zt !== null; ) {
            i = Zt;
            var s = i.sibling,
              c = i.return;
            if ((Wg(i), i === a)) {
              Zt = null;
              break t;
            }
            if (s !== null) {
              ((s.return = c), (Zt = s));
              break t;
            }
            Zt = c;
          }
      }
    }
    var aS = {
        getCacheForType: function (t) {
          var e = ae(qt),
            a = e.data.get(t);
          return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
        },
      },
      nS = typeof WeakMap == "function" ? WeakMap : Map,
      gt = 0,
      At = null,
      ct = null,
      ft = 0,
      vt = 0,
      be = null,
      Ca = !1,
      In = !1,
      hu = !1,
      fa = 0,
      Ct = 0,
      Na = 0,
      fn = 0,
      pu = 0,
      Oe = 0,
      ti = 0,
      dr = null,
      ue = null,
      mu = !1,
      gu = 0,
      Ys = 1 / 0,
      qs = null,
      Va = null,
      Wt = 0,
      ja = null,
      ei = null,
      ai = 0,
      vu = 0,
      yu = null,
      lv = null,
      fr = 0,
      bu = null;
    function xe() {
      if ((gt & 2) !== 0 && ft !== 0) return ft & -ft;
      if (O.T !== null) {
        var t = Gn;
        return t !== 0 ? t : Mu();
      }
      return Tp();
    }
    function ov() {
      Oe === 0 && (Oe = (ft & 536870912) === 0 || mt ? bp() : 536870912);
      var t = Re.current;
      return (t !== null && (t.flags |= 32), Oe);
    }
    function we(t, e, a) {
      (((t === At && (vt === 2 || vt === 9)) ||
        t.cancelPendingCommit !== null) &&
        (ni(t, 0), Ua(t, ft, Oe, !1)),
        Ri(t, a),
        ((gt & 2) === 0 || t !== At) &&
          (t === At &&
            ((gt & 2) === 0 && (fn |= a), Ct === 4 && Ua(t, ft, Oe, !1)),
          Je(t)));
    }
    function cv(t, e, a) {
      if ((gt & 6) !== 0) throw Error(o(327));
      var i = (!a && (e & 124) === 0 && (e & t.expiredLanes) === 0) || zi(t, e),
        s = i ? sS(t, e) : Su(t, e, !0),
        c = i;
      do {
        if (s === 0) {
          In && !i && Ua(t, e, 0, !1);
          break;
        } else {
          if (((a = t.current.alternate), c && !iS(a))) {
            ((s = Su(t, e, !1)), (c = !1));
            continue;
          }
          if (s === 2) {
            if (((c = e), t.errorRecoveryDisabledLanes & c)) var f = 0;
            else
              ((f = t.pendingLanes & -536870913),
                (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
            if (f !== 0) {
              e = f;
              t: {
                var p = t;
                s = dr;
                var b = p.current.memoizedState.isDehydrated;
                if (
                  (b && (ni(p, f).flags |= 256), (f = Su(p, f, !1)), f !== 2)
                ) {
                  if (hu && !b) {
                    ((p.errorRecoveryDisabledLanes |= c), (fn |= c), (s = 4));
                    break t;
                  }
                  ((c = ue),
                    (ue = s),
                    c !== null &&
                      (ue === null ? (ue = c) : ue.push.apply(ue, c)));
                }
                s = f;
              }
              if (((c = !1), s !== 2)) continue;
            }
          }
          if (s === 1) {
            (ni(t, 0), Ua(t, e, 0, !0));
            break;
          }
          t: {
            switch (((i = t), (c = s), c)) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                Ua(i, e, Oe, !Ca);
                break t;
              case 2:
                ue = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((e & 62914560) === e && ((s = gu + 300 - Xe()), 10 < s)) {
              if ((Ua(i, e, Oe, !Ca), Ir(i, 0, !0) !== 0)) break t;
              i.timeoutHandle = Bv(
                uv.bind(null, i, a, ue, qs, mu, e, Oe, fn, ti, Ca, c, 2, -0, 0),
                s,
              );
              break t;
            }
            uv(i, a, ue, qs, mu, e, Oe, fn, ti, Ca, c, 0, -0, 0);
          }
        }
        break;
      } while (!0);
      Je(t);
    }
    function uv(t, e, a, i, s, c, f, p, b, M, _, V, k, z) {
      if (
        ((t.timeoutHandle = -1),
        (V = e.subtreeFlags),
        (V & 8192 || (V & 16785408) === 16785408) &&
          ((br = { stylesheets: null, count: 0, unsuspend: LS }),
          nv(e),
          (V = YS()),
          V !== null))
      ) {
        ((t.cancelPendingCommit = V(
          vv.bind(null, t, e, c, a, i, s, f, p, b, _, 1, k, z),
        )),
          Ua(t, c, f, !M));
        return;
      }
      vv(t, e, c, a, i, s, f, p, b);
    }
    function iS(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if (
          (a === 0 || a === 11 || a === 15) &&
          e.flags & 16384 &&
          ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
        )
          for (var i = 0; i < a.length; i++) {
            var s = a[i],
              c = s.getSnapshot;
            s = s.value;
            try {
              if (!me(c(), s)) return !1;
            } catch {
              return !1;
            }
          }
        if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
          ((a.return = e), (e = a));
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return !0;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      }
      return !0;
    }
    function Ua(t, e, a, i) {
      ((e &= ~pu),
        (e &= ~fn),
        (t.suspendedLanes |= e),
        (t.pingedLanes &= ~e),
        i && (t.warmLanes |= e),
        (i = t.expirationTimes));
      for (var s = e; 0 < s; ) {
        var c = 31 - pe(s),
          f = 1 << c;
        ((i[c] = -1), (s &= ~f));
      }
      a !== 0 && wp(t, a, e);
    }
    function Gs() {
      return (gt & 6) === 0 ? (hr(0), !1) : !0;
    }
    function xu() {
      if (ct !== null) {
        if (vt === 0) var t = ct.return;
        else
          ((t = ct), (ia = sn = null), Uc(t), (Jn = null), (nr = 0), (t = ct));
        for (; t !== null; ) (Gg(t.alternate, t), (t = t.return));
        ct = null;
      }
    }
    function ni(t, e) {
      var a = t.timeoutHandle;
      (a !== -1 && ((t.timeoutHandle = -1), SS(a)),
        (a = t.cancelPendingCommit),
        a !== null && ((t.cancelPendingCommit = null), a()),
        xu(),
        (At = t),
        (ct = a = ea(t.current, null)),
        (ft = e),
        (vt = 0),
        (be = null),
        (Ca = !1),
        (In = zi(t, e)),
        (hu = !1),
        (ti = Oe = pu = fn = Na = Ct = 0),
        (ue = dr = null),
        (mu = !1),
        (e & 8) !== 0 && (e |= e & 32));
      var i = t.entangledLanes;
      if (i !== 0)
        for (t = t.entanglements, i &= e; 0 < i; ) {
          var s = 31 - pe(i),
            c = 1 << s;
          ((e |= t[s]), (i &= ~c));
        }
      return ((fa = e), ds(), a);
    }
    function dv(t, e) {
      ((lt = null),
        (O.H = Rs),
        e === Pi || e === xs
          ? ((e = km()), (vt = 3))
          : e === Em
            ? ((e = km()), (vt = 4))
            : (vt =
                e === zg
                  ? 8
                  : e !== null &&
                      typeof e == "object" &&
                      typeof e.then == "function"
                    ? 6
                    : 1),
        (be = e),
        ct === null && ((Ct = 1), Vs(t, Me(e, t.current))));
    }
    function fv() {
      var t = O.H;
      return ((O.H = Rs), t === null ? Rs : t);
    }
    function hv() {
      var t = O.A;
      return ((O.A = aS), t);
    }
    function wu() {
      ((Ct = 4),
        Ca || ((ft & 4194048) !== ft && Re.current !== null) || (In = !0),
        ((Na & 134217727) === 0 && (fn & 134217727) === 0) ||
          At === null ||
          Ua(At, ft, Oe, !1));
    }
    function Su(t, e, a) {
      var i = gt;
      gt |= 2;
      var s = fv(),
        c = hv();
      ((At !== t || ft !== e) && ((qs = null), ni(t, e)), (e = !1));
      var f = Ct;
      t: do
        try {
          if (vt !== 0 && ct !== null) {
            var p = ct,
              b = be;
            switch (vt) {
              case 8:
                (xu(), (f = 6));
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                Re.current === null && (e = !0);
                var M = vt;
                if (((vt = 0), (be = null), ii(t, p, b, M), a && In)) {
                  f = 0;
                  break t;
                }
                break;
              default:
                ((M = vt), (vt = 0), (be = null), ii(t, p, b, M));
            }
          }
          (rS(), (f = Ct));
          break;
        } catch (_) {
          dv(t, _);
        }
      while (!0);
      return (
        e && t.shellSuspendCounter++,
        (ia = sn = null),
        (gt = i),
        (O.H = s),
        (O.A = c),
        ct === null && ((At = null), (ft = 0), ds()),
        f
      );
    }
    function rS() {
      for (; ct !== null; ) pv(ct);
    }
    function sS(t, e) {
      var a = gt;
      gt |= 2;
      var i = fv(),
        s = hv();
      At !== t || ft !== e
        ? ((qs = null), (Ys = Xe() + 500), ni(t, e))
        : (In = zi(t, e));
      t: do
        try {
          if (vt !== 0 && ct !== null) {
            e = ct;
            var c = be;
            e: switch (vt) {
              case 1:
                ((vt = 0), (be = null), ii(t, e, c, 1));
                break;
              case 2:
              case 9:
                if (Mm(c)) {
                  ((vt = 0), (be = null), mv(e));
                  break;
                }
                ((e = function () {
                  ((vt !== 2 && vt !== 9) || At !== t || (vt = 7), Je(t));
                }),
                  c.then(e, e));
                break t;
              case 3:
                vt = 7;
                break t;
              case 4:
                vt = 5;
                break t;
              case 7:
                Mm(c)
                  ? ((vt = 0), (be = null), mv(e))
                  : ((vt = 0), (be = null), ii(t, e, c, 7));
                break;
              case 5:
                var f = null;
                switch (ct.tag) {
                  case 26:
                    f = ct.memoizedState;
                  case 5:
                  case 27:
                    var p = ct;
                    if (!f || Fv(f)) {
                      ((vt = 0), (be = null));
                      var b = p.sibling;
                      if (b !== null) ct = b;
                      else {
                        var M = p.return;
                        M !== null ? ((ct = M), Xs(M)) : (ct = null);
                      }
                      break e;
                    }
                }
                ((vt = 0), (be = null), ii(t, e, c, 5));
                break;
              case 6:
                ((vt = 0), (be = null), ii(t, e, c, 6));
                break;
              case 8:
                (xu(), (Ct = 6));
                break t;
              default:
                throw Error(o(462));
            }
          }
          lS();
          break;
        } catch (_) {
          dv(t, _);
        }
      while (!0);
      return (
        (ia = sn = null),
        (O.H = i),
        (O.A = s),
        (gt = a),
        ct !== null ? 0 : ((At = null), (ft = 0), ds(), Ct)
      );
    }
    function lS() {
      for (; ct !== null && !z1(); ) pv(ct);
    }
    function pv(t) {
      var e = Yg(t.alternate, t, fa);
      ((t.memoizedProps = t.pendingProps), e === null ? Xs(t) : (ct = e));
    }
    function mv(t) {
      var e = t,
        a = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = Vg(a, e, e.pendingProps, e.type, void 0, ft);
          break;
        case 11:
          e = Vg(a, e, e.pendingProps, e.type.render, e.ref, ft);
          break;
        case 5:
          Uc(e);
        default:
          (Gg(a, e), (e = ct = gm(e, fa)), (e = Yg(a, e, fa)));
      }
      ((t.memoizedProps = t.pendingProps), e === null ? Xs(t) : (ct = e));
    }
    function ii(t, e, a, i) {
      ((ia = sn = null), Uc(e), (Jn = null), (nr = 0));
      var s = e.return;
      try {
        if (F2(t, s, e, a, ft)) {
          ((Ct = 1), Vs(t, Me(a, t.current)), (ct = null));
          return;
        }
      } catch (c) {
        if (s !== null) throw ((ct = s), c);
        ((Ct = 1), Vs(t, Me(a, t.current)), (ct = null));
        return;
      }
      e.flags & 32768
        ? (mt || i === 1
            ? (t = !0)
            : In || (ft & 536870912) !== 0
              ? (t = !1)
              : ((Ca = t = !0),
                (i === 2 || i === 9 || i === 3 || i === 6) &&
                  ((i = Re.current),
                  i !== null && i.tag === 13 && (i.flags |= 16384))),
          gv(e, t))
        : Xs(e);
    }
    function Xs(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          gv(e, Ca);
          return;
        }
        t = e.return;
        var a = $2(e.alternate, e, fa);
        if (a !== null) {
          ct = a;
          return;
        }
        if (((e = e.sibling), e !== null)) {
          ct = e;
          return;
        }
        ct = e = t;
      } while (e !== null);
      Ct === 0 && (Ct = 5);
    }
    function gv(t, e) {
      do {
        var a = I2(t.alternate, t);
        if (a !== null) {
          ((a.flags &= 32767), (ct = a));
          return;
        }
        if (
          ((a = t.return),
          a !== null &&
            ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
          !e && ((t = t.sibling), t !== null))
        ) {
          ct = t;
          return;
        }
        ct = t = a;
      } while (t !== null);
      ((Ct = 6), (ct = null));
    }
    function vv(t, e, a, i, s, c, f, p, b) {
      t.cancelPendingCommit = null;
      do Ks();
      while (Wt !== 0);
      if ((gt & 6) !== 0) throw Error(o(327));
      if (e !== null) {
        if (e === t.current) throw Error(o(177));
        if (
          ((c = e.lanes | e.childLanes),
          (c |= fc),
          L1(t, a, c, f, p, b),
          t === At && ((ct = At = null), (ft = 0)),
          (ei = e),
          (ja = t),
          (ai = a),
          (vu = c),
          (yu = s),
          (lv = i),
          (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
            ? ((t.callbackNode = null),
              (t.callbackPriority = 0),
              dS(Fr, function () {
                return (Sv(), null);
              }))
            : ((t.callbackNode = null), (t.callbackPriority = 0)),
          (i = (e.flags & 13878) !== 0),
          (e.subtreeFlags & 13878) !== 0 || i)
        ) {
          ((i = O.T), (O.T = null), (s = q.p), (q.p = 2), (f = gt), (gt |= 4));
          try {
            tS(t, e, a);
          } finally {
            ((gt = f), (q.p = s), (O.T = i));
          }
        }
        ((Wt = 1), yv(), bv(), xv());
      }
    }
    function yv() {
      if (Wt === 1) {
        Wt = 0;
        var t = ja,
          e = ei,
          a = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || a) {
          ((a = O.T), (O.T = null));
          var i = q.p;
          q.p = 2;
          var s = gt;
          gt |= 4;
          try {
            tv(e, t);
            var c = Nu,
              f = sm(t.containerInfo),
              p = c.focusedElem,
              b = c.selectionRange;
            if (
              f !== p &&
              p &&
              p.ownerDocument &&
              rm(p.ownerDocument.documentElement, p)
            ) {
              if (b !== null && lc(p)) {
                var M = b.start,
                  _ = b.end;
                if ((_ === void 0 && (_ = M), "selectionStart" in p))
                  ((p.selectionStart = M),
                    (p.selectionEnd = Math.min(_, p.value.length)));
                else {
                  var V = p.ownerDocument || document,
                    k = (V && V.defaultView) || window;
                  if (k.getSelection) {
                    var z = k.getSelection(),
                      at = p.textContent.length,
                      I = Math.min(b.start, at),
                      xt = b.end === void 0 ? I : Math.min(b.end, at);
                    !z.extend && I > xt && ((f = xt), (xt = I), (I = f));
                    var A = im(p, I),
                      S = im(p, xt);
                    if (
                      A &&
                      S &&
                      (z.rangeCount !== 1 ||
                        z.anchorNode !== A.node ||
                        z.anchorOffset !== A.offset ||
                        z.focusNode !== S.node ||
                        z.focusOffset !== S.offset)
                    ) {
                      var E = V.createRange();
                      (E.setStart(A.node, A.offset),
                        z.removeAllRanges(),
                        I > xt
                          ? (z.addRange(E), z.extend(S.node, S.offset))
                          : (E.setEnd(S.node, S.offset), z.addRange(E)));
                    }
                  }
                }
              }
              for (V = [], z = p; (z = z.parentNode); )
                z.nodeType === 1 &&
                  V.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
              for (
                typeof p.focus == "function" && p.focus(), p = 0;
                p < V.length;
                p++
              ) {
                var N = V[p];
                ((N.element.scrollLeft = N.left),
                  (N.element.scrollTop = N.top));
              }
            }
            ((nl = !!Cu), (Nu = Cu = null));
          } finally {
            ((gt = s), (q.p = i), (O.T = a));
          }
        }
        ((t.current = e), (Wt = 2));
      }
    }
    function bv() {
      if (Wt === 2) {
        Wt = 0;
        var t = ja,
          e = ei,
          a = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || a) {
          ((a = O.T), (O.T = null));
          var i = q.p;
          q.p = 2;
          var s = gt;
          gt |= 4;
          try {
            Fg(t, e.alternate, e);
          } finally {
            ((gt = s), (q.p = i), (O.T = a));
          }
        }
        Wt = 3;
      }
    }
    function xv() {
      if (Wt === 4 || Wt === 3) {
        ((Wt = 0), R1());
        var t = ja,
          e = ei,
          a = ai,
          i = lv;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? (Wt = 5)
          : ((Wt = 0), (ei = ja = null), wv(t, t.pendingLanes));
        var s = t.pendingLanes;
        if (
          (s === 0 && (Va = null),
          Ho(a),
          (e = e.stateNode),
          he && typeof he.onCommitFiberRoot == "function")
        )
          try {
            he.onCommitFiberRoot(
              ki,
              e,
              void 0,
              (e.current.flags & 128) === 128,
            );
          } catch {}
        if (i !== null) {
          ((e = O.T), (s = q.p), (q.p = 2), (O.T = null));
          try {
            for (var c = t.onRecoverableError, f = 0; f < i.length; f++) {
              var p = i[f];
              c(p.value, { componentStack: p.stack });
            }
          } finally {
            ((O.T = e), (q.p = s));
          }
        }
        ((ai & 3) !== 0 && Ks(),
          Je(t),
          (s = t.pendingLanes),
          (a & 4194090) !== 0 && (s & 42) !== 0
            ? t === bu
              ? fr++
              : ((fr = 0), (bu = t))
            : (fr = 0),
          hr(0));
      }
    }
    function wv(t, e) {
      (t.pooledCacheLanes &= e) === 0 &&
        ((e = t.pooledCache), e != null && ((t.pooledCache = null), Zi(e)));
    }
    function Ks(t) {
      return (yv(), bv(), xv(), Sv());
    }
    function Sv() {
      if (Wt !== 5) return !1;
      var t = ja,
        e = vu;
      vu = 0;
      var a = Ho(ai),
        i = O.T,
        s = q.p;
      try {
        ((q.p = 32 > a ? 32 : a), (O.T = null), (a = yu), (yu = null));
        var c = ja,
          f = ai;
        if (((Wt = 0), (ei = ja = null), (ai = 0), (gt & 6) !== 0))
          throw Error(o(331));
        var p = gt;
        if (
          ((gt |= 4),
          rv(c.current),
          av(c, c.current, f, a),
          (gt = p),
          hr(0, !1),
          he && typeof he.onPostCommitFiberRoot == "function")
        )
          try {
            he.onPostCommitFiberRoot(ki, c);
          } catch {}
        return !0;
      } finally {
        ((q.p = s), (O.T = i), wv(t, e));
      }
    }
    function Tv(t, e, a) {
      ((e = Me(a, e)),
        (e = Wc(t.stateNode, e, 2)),
        (t = Ma(t, e, 2)),
        t !== null && (Ri(t, 2), Je(t)));
    }
    function wt(t, e, a) {
      if (t.tag === 3) Tv(t, t, a);
      else
        for (; e !== null; ) {
          if (e.tag === 3) {
            Tv(e, t, a);
            break;
          } else if (e.tag === 1) {
            var i = e.stateNode;
            if (
              typeof e.type.getDerivedStateFromError == "function" ||
              (typeof i.componentDidCatch == "function" &&
                (Va === null || !Va.has(i)))
            ) {
              ((t = Me(a, t)),
                (a = Dg(2)),
                (i = Ma(e, a, 2)),
                i !== null && (kg(a, i, e, t), Ri(i, 2), Je(i)));
              break;
            }
          }
          e = e.return;
        }
    }
    function Tu(t, e, a) {
      var i = t.pingCache;
      if (i === null) {
        i = t.pingCache = new nS();
        var s = new Set();
        i.set(e, s);
      } else ((s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s)));
      s.has(a) ||
        ((hu = !0), s.add(a), (t = oS.bind(null, t, e, a)), e.then(t, t));
    }
    function oS(t, e, a) {
      var i = t.pingCache;
      (i !== null && i.delete(e),
        (t.pingedLanes |= t.suspendedLanes & a),
        (t.warmLanes &= ~a),
        At === t &&
          (ft & a) === a &&
          (Ct === 4 || (Ct === 3 && (ft & 62914560) === ft && 300 > Xe() - gu)
            ? (gt & 2) === 0 && ni(t, 0)
            : (pu |= a),
          ti === ft && (ti = 0)),
        Je(t));
    }
    function Av(t, e) {
      (e === 0 && (e = xp()), (t = Ln(t, e)), t !== null && (Ri(t, e), Je(t)));
    }
    function cS(t) {
      var e = t.memoizedState,
        a = 0;
      (e !== null && (a = e.retryLane), Av(t, a));
    }
    function uS(t, e) {
      var a = 0;
      switch (t.tag) {
        case 13:
          var i = t.stateNode,
            s = t.memoizedState;
          s !== null && (a = s.retryLane);
          break;
        case 19:
          i = t.stateNode;
          break;
        case 22:
          i = t.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      (i !== null && i.delete(e), Av(t, a));
    }
    function dS(t, e) {
      return jo(t, e);
    }
    var Zs = null,
      ri = null,
      Au = !1,
      Qs = !1,
      Eu = !1,
      hn = 0;
    function Je(t) {
      (t !== ri &&
        t.next === null &&
        (ri === null ? (Zs = ri = t) : (ri = ri.next = t)),
        (Qs = !0),
        Au || ((Au = !0), hS()));
    }
    function hr(t, e) {
      if (!Eu && Qs) {
        Eu = !0;
        do
          for (var a = !1, i = Zs; i !== null; ) {
            if (t !== 0) {
              var s = i.pendingLanes;
              if (s === 0) var c = 0;
              else {
                var f = i.suspendedLanes,
                  p = i.pingedLanes;
                ((c = (1 << (31 - pe(42 | t) + 1)) - 1),
                  (c &= s & ~(f & ~p)),
                  (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
              }
              c !== 0 && ((a = !0), kv(i, c));
            } else
              ((c = ft),
                (c = Ir(
                  i,
                  i === At ? c : 0,
                  i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
                )),
                (c & 3) === 0 || zi(i, c) || ((a = !0), kv(i, c)));
            i = i.next;
          }
        while (a);
        Eu = !1;
      }
    }
    function fS() {
      Ev();
    }
    function Ev() {
      Qs = Au = !1;
      var t = 0;
      hn !== 0 && (wS() && (t = hn), (hn = 0));
      for (var e = Xe(), a = null, i = Zs; i !== null; ) {
        var s = i.next,
          c = Mv(i, e);
        (c === 0
          ? ((i.next = null),
            a === null ? (Zs = s) : (a.next = s),
            s === null && (ri = a))
          : ((a = i), (t !== 0 || (c & 3) !== 0) && (Qs = !0)),
          (i = s));
      }
      hr(t);
    }
    function Mv(t, e) {
      for (
        var a = t.suspendedLanes,
          i = t.pingedLanes,
          s = t.expirationTimes,
          c = t.pendingLanes & -62914561;
        0 < c;
      ) {
        var f = 31 - pe(c),
          p = 1 << f,
          b = s[f];
        (b === -1
          ? ((p & a) === 0 || (p & i) !== 0) && (s[f] = B1(p, e))
          : b <= e && (t.expiredLanes |= p),
          (c &= ~p));
      }
      if (
        ((e = At),
        (a = ft),
        (a = Ir(
          t,
          t === e ? a : 0,
          t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
        )),
        (i = t.callbackNode),
        a === 0 ||
          (t === e && (vt === 2 || vt === 9)) ||
          t.cancelPendingCommit !== null)
      )
        return (
          i !== null && i !== null && Uo(i),
          (t.callbackNode = null),
          (t.callbackPriority = 0)
        );
      if ((a & 3) === 0 || zi(t, a)) {
        if (((e = a & -a), e === t.callbackPriority)) return e;
        switch ((i !== null && Uo(i), Ho(a))) {
          case 2:
          case 8:
            a = vp;
            break;
          case 32:
            a = Fr;
            break;
          case 268435456:
            a = yp;
            break;
          default:
            a = Fr;
        }
        return (
          (i = Dv.bind(null, t)),
          (a = jo(a, i)),
          (t.callbackPriority = e),
          (t.callbackNode = a),
          e
        );
      }
      return (
        i !== null && i !== null && Uo(i),
        (t.callbackPriority = 2),
        (t.callbackNode = null),
        2
      );
    }
    function Dv(t, e) {
      if (Wt !== 0 && Wt !== 5)
        return ((t.callbackNode = null), (t.callbackPriority = 0), null);
      var a = t.callbackNode;
      if (Ks() && t.callbackNode !== a) return null;
      var i = ft;
      return (
        (i = Ir(
          t,
          t === At ? i : 0,
          t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
        )),
        i === 0
          ? null
          : (cv(t, i, e),
            Mv(t, Xe()),
            t.callbackNode != null && t.callbackNode === a
              ? Dv.bind(null, t)
              : null)
      );
    }
    function kv(t, e) {
      if (Ks()) return null;
      cv(t, e, !0);
    }
    function hS() {
      TS(function () {
        (gt & 6) !== 0 ? jo(gp, fS) : Ev();
      });
    }
    function Mu() {
      return (hn === 0 && (hn = bp()), hn);
    }
    function zv(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean"
        ? null
        : typeof t == "function"
          ? t
          : is("" + t);
    }
    function Rv(t, e) {
      var a = e.ownerDocument.createElement("input");
      return (
        (a.name = e.name),
        (a.value = e.value),
        t.id && a.setAttribute("form", t.id),
        e.parentNode.insertBefore(a, e),
        (t = new FormData(t)),
        a.parentNode.removeChild(a),
        t
      );
    }
    function pS(t, e, a, i, s) {
      if (e === "submit" && a && a.stateNode === s) {
        var c = zv((s[se] || null).action),
          f = i.submitter;
        f &&
          ((e = (e = f[se] || null)
            ? zv(e.formAction)
            : f.getAttribute("formAction")),
          e !== null && ((c = e), (f = null)));
        var p = new os("action", "action", null, i, s);
        t.push({
          event: p,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (i.defaultPrevented) {
                  if (hn !== 0) {
                    var b = f ? Rv(s, f) : new FormData(s);
                    Zc(
                      a,
                      { pending: !0, data: b, method: s.method, action: c },
                      null,
                      b,
                    );
                  }
                } else
                  typeof c == "function" &&
                    (p.preventDefault(),
                    (b = f ? Rv(s, f) : new FormData(s)),
                    Zc(
                      a,
                      { pending: !0, data: b, method: s.method, action: c },
                      c,
                      b,
                    ));
              },
              currentTarget: s,
            },
          ],
        });
      }
    }
    for (var Du = 0; Du < dc.length; Du++) {
      var ku = dc[Du],
        mS = ku.toLowerCase(),
        gS = ku[0].toUpperCase() + ku.slice(1);
      Ue(mS, "on" + gS);
    }
    (Ue(cm, "onAnimationEnd"),
      Ue(um, "onAnimationIteration"),
      Ue(dm, "onAnimationStart"),
      Ue("dblclick", "onDoubleClick"),
      Ue("focusin", "onFocus"),
      Ue("focusout", "onBlur"),
      Ue(C2, "onTransitionRun"),
      Ue(N2, "onTransitionStart"),
      Ue(V2, "onTransitionCancel"),
      Ue(fm, "onTransitionEnd"),
      zn("onMouseEnter", ["mouseout", "mouseover"]),
      zn("onMouseLeave", ["mouseout", "mouseover"]),
      zn("onPointerEnter", ["pointerout", "pointerover"]),
      zn("onPointerLeave", ["pointerout", "pointerover"]),
      Fa(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " ",
        ),
      ),
      Fa(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " ",
        ),
      ),
      Fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      Fa(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" "),
      ),
      Fa(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" "),
      ),
      Fa(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(
          " ",
        ),
      ));
    var pr =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      vS = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle"
          .split(" ")
          .concat(pr),
      );
    function Ov(t, e) {
      e = (e & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
        var i = t[a],
          s = i.event;
        i = i.listeners;
        t: {
          var c = void 0;
          if (e)
            for (var f = i.length - 1; 0 <= f; f--) {
              var p = i[f],
                b = p.instance,
                M = p.currentTarget;
              if (((p = p.listener), b !== c && s.isPropagationStopped()))
                break t;
              ((c = p), (s.currentTarget = M));
              try {
                c(s);
              } catch (_) {
                Ns(_);
              }
              ((s.currentTarget = null), (c = b));
            }
          else
            for (f = 0; f < i.length; f++) {
              if (
                ((p = i[f]),
                (b = p.instance),
                (M = p.currentTarget),
                (p = p.listener),
                b !== c && s.isPropagationStopped())
              )
                break t;
              ((c = p), (s.currentTarget = M));
              try {
                c(s);
              } catch (_) {
                Ns(_);
              }
              ((s.currentTarget = null), (c = b));
            }
        }
      }
    }
    function ut(t, e) {
      var a = e[Yo];
      a === void 0 && (a = e[Yo] = new Set());
      var i = t + "__bubble";
      a.has(i) || (_v(e, t, 2, !1), a.add(i));
    }
    function zu(t, e, a) {
      var i = 0;
      (e && (i |= 4), _v(a, t, i, e));
    }
    var Ps = "_reactListening" + Math.random().toString(36).slice(2);
    function Ru(t) {
      if (!t[Ps]) {
        ((t[Ps] = !0),
          Ep.forEach(function (a) {
            a !== "selectionchange" &&
              (vS.has(a) || zu(a, !1, t), zu(a, !0, t));
          }));
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Ps] || ((e[Ps] = !0), zu("selectionchange", !1, e));
      }
    }
    function _v(t, e, a, i) {
      switch (a0(e)) {
        case 2:
          var s = XS;
          break;
        case 8:
          s = KS;
          break;
        default:
          s = Xu;
      }
      ((a = s.bind(null, e, a, t)),
        (s = void 0),
        !$o ||
          (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
          (s = !0),
        i
          ? s !== void 0
            ? t.addEventListener(e, a, { capture: !0, passive: s })
            : t.addEventListener(e, a, !0)
          : s !== void 0
            ? t.addEventListener(e, a, { passive: s })
            : t.addEventListener(e, a, !1));
    }
    function Ou(t, e, a, i, s) {
      var c = i;
      if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
        t: for (;;) {
          if (i === null) return;
          var f = i.tag;
          if (f === 3 || f === 4) {
            var p = i.stateNode.containerInfo;
            if (p === s) break;
            if (f === 4)
              for (f = i.return; f !== null; ) {
                var b = f.tag;
                if ((b === 3 || b === 4) && f.stateNode.containerInfo === s)
                  return;
                f = f.return;
              }
            for (; p !== null; ) {
              if (((f = Mn(p)), f === null)) return;
              if (((b = f.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
                i = c = f;
                continue t;
              }
              p = p.parentNode;
            }
          }
          i = i.return;
        }
      Lp(function () {
        var M = c,
          _ = Fo(a),
          V = [];
        t: {
          var k = hm.get(t);
          if (k !== void 0) {
            var z = os,
              at = t;
            switch (t) {
              case "keypress":
                if (ss(a) === 0) break t;
              case "keydown":
              case "keyup":
                z = d2;
                break;
              case "focusin":
                ((at = "focus"), (z = ac));
                break;
              case "focusout":
                ((at = "blur"), (z = ac));
                break;
              case "beforeblur":
              case "afterblur":
                z = ac;
                break;
              case "click":
                if (a.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                z = qp;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = I1;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = p2;
                break;
              case cm:
              case um:
              case dm:
                z = a2;
                break;
              case fm:
                z = g2;
                break;
              case "scroll":
              case "scrollend":
                z = W1;
                break;
              case "wheel":
                z = y2;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = i2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = Xp;
                break;
              case "toggle":
              case "beforetoggle":
                z = x2;
            }
            var I = (e & 4) !== 0,
              xt = !I && (t === "scroll" || t === "scrollend"),
              A = I ? (k !== null ? k + "Capture" : null) : k;
            I = [];
            for (var S = M, E; S !== null; ) {
              var N = S;
              if (
                ((E = N.stateNode),
                (N = N.tag),
                (N !== 5 && N !== 26 && N !== 27) ||
                  E === null ||
                  A === null ||
                  ((N = Ci(S, A)), N != null && I.push(mr(S, N, E))),
                xt)
              )
                break;
              S = S.return;
            }
            0 < I.length &&
              ((k = new z(k, at, null, a, _)),
              V.push({ event: k, listeners: I }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (
              ((k = t === "mouseover" || t === "pointerover"),
              (z = t === "mouseout" || t === "pointerout"),
              k &&
                a !== Jo &&
                (at = a.relatedTarget || a.fromElement) &&
                (Mn(at) || at[En]))
            )
              break t;
            if (
              (z || k) &&
              ((k =
                _.window === _
                  ? _
                  : (k = _.ownerDocument)
                    ? k.defaultView || k.parentWindow
                    : window),
              z
                ? ((at = a.relatedTarget || a.toElement),
                  (z = M),
                  (at = at ? Mn(at) : null),
                  at !== null &&
                    ((xt = h(at)),
                    (I = at.tag),
                    at !== xt || (I !== 5 && I !== 27 && I !== 6)) &&
                    (at = null))
                : ((z = null), (at = M)),
              z !== at)
            ) {
              if (
                ((I = qp),
                (N = "onMouseLeave"),
                (A = "onMouseEnter"),
                (S = "mouse"),
                (t === "pointerout" || t === "pointerover") &&
                  ((I = Xp),
                  (N = "onPointerLeave"),
                  (A = "onPointerEnter"),
                  (S = "pointer")),
                (xt = z == null ? k : _i(z)),
                (E = at == null ? k : _i(at)),
                (k = new I(N, S + "leave", z, a, _)),
                (k.target = xt),
                (k.relatedTarget = E),
                (N = null),
                Mn(_) === M &&
                  ((I = new I(A, S + "enter", at, a, _)),
                  (I.target = E),
                  (I.relatedTarget = xt),
                  (N = I)),
                (xt = N),
                z && at)
              )
                e: {
                  for (I = z, A = at, S = 0, E = I; E; E = si(E)) S++;
                  for (E = 0, N = A; N; N = si(N)) E++;
                  for (; 0 < S - E; ) ((I = si(I)), S--);
                  for (; 0 < E - S; ) ((A = si(A)), E--);
                  for (; S--; ) {
                    if (I === A || (A !== null && I === A.alternate)) break e;
                    ((I = si(I)), (A = si(A)));
                  }
                  I = null;
                }
              else I = null;
              (z !== null && Cv(V, k, z, I, !1),
                at !== null && xt !== null && Cv(V, xt, at, I, !0));
            }
          }
          t: {
            if (
              ((k = M ? _i(M) : window),
              (z = k.nodeName && k.nodeName.toLowerCase()),
              z === "select" || (z === "input" && k.type === "file"))
            )
              var P = $p;
            else if (Fp(k))
              if (Ip) P = R2;
              else {
                P = k2;
                var ot = D2;
              }
            else
              ((z = k.nodeName),
                !z ||
                z.toLowerCase() !== "input" ||
                (k.type !== "checkbox" && k.type !== "radio")
                  ? M && Po(M.elementType) && (P = $p)
                  : (P = z2));
            if (P && (P = P(t, M))) {
              Wp(V, P, a, _);
              break t;
            }
            (ot && ot(t, k, M),
              t === "focusout" &&
                M &&
                k.type === "number" &&
                M.memoizedProps.value != null &&
                Qo(k, "number", k.value));
          }
          switch (((ot = M ? _i(M) : window), t)) {
            case "focusin":
              (Fp(ot) || ot.contentEditable === "true") &&
                ((jn = ot), (oc = M), (Yi = null));
              break;
            case "focusout":
              Yi = oc = jn = null;
              break;
            case "mousedown":
              cc = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ((cc = !1), lm(V, a, _));
              break;
            case "selectionchange":
              if (_2) break;
            case "keydown":
            case "keyup":
              lm(V, a, _);
          }
          var F;
          if (ic)
            t: {
              switch (t) {
                case "compositionstart":
                  var tt = "onCompositionStart";
                  break t;
                case "compositionend":
                  tt = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  tt = "onCompositionUpdate";
                  break t;
              }
              tt = void 0;
            }
          else
            Vn
              ? Pp(t, a) && (tt = "onCompositionEnd")
              : t === "keydown" &&
                a.keyCode === 229 &&
                (tt = "onCompositionStart");
          (tt &&
            (Kp &&
              a.locale !== "ko" &&
              (Vn || tt !== "onCompositionStart"
                ? tt === "onCompositionEnd" && Vn && (F = Hp())
                : ((Sa = _),
                  (Io = "value" in Sa ? Sa.value : Sa.textContent),
                  (Vn = !0))),
            (ot = Js(M, tt)),
            0 < ot.length &&
              ((tt = new Gp(tt, t, null, a, _)),
              V.push({ event: tt, listeners: ot }),
              F ? (tt.data = F) : ((F = Jp(a)), F !== null && (tt.data = F)))),
            (F = S2 ? T2(t, a) : A2(t, a)) &&
              ((tt = Js(M, "onBeforeInput")),
              0 < tt.length &&
                ((ot = new Gp("onBeforeInput", "beforeinput", null, a, _)),
                V.push({ event: ot, listeners: tt }),
                (ot.data = F))),
            pS(V, t, M, a, _));
        }
        Ov(V, e);
      });
    }
    function mr(t, e, a) {
      return { instance: t, listener: e, currentTarget: a };
    }
    function Js(t, e) {
      for (var a = e + "Capture", i = []; t !== null; ) {
        var s = t,
          c = s.stateNode;
        if (
          ((s = s.tag),
          (s !== 5 && s !== 26 && s !== 27) ||
            c === null ||
            ((s = Ci(t, a)),
            s != null && i.unshift(mr(t, s, c)),
            (s = Ci(t, e)),
            s != null && i.push(mr(t, s, c))),
          t.tag === 3)
        )
          return i;
        t = t.return;
      }
      return [];
    }
    function si(t) {
      if (t === null) return null;
      do t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Cv(t, e, a, i, s) {
      for (var c = e._reactName, f = []; a !== null && a !== i; ) {
        var p = a,
          b = p.alternate,
          M = p.stateNode;
        if (((p = p.tag), b !== null && b === i)) break;
        ((p !== 5 && p !== 26 && p !== 27) ||
          M === null ||
          ((b = M),
          s
            ? ((M = Ci(a, c)), M != null && f.unshift(mr(a, M, b)))
            : s || ((M = Ci(a, c)), M != null && f.push(mr(a, M, b)))),
          (a = a.return));
      }
      f.length !== 0 && t.push({ event: e, listeners: f });
    }
    var yS = /\r\n?/g,
      bS = /\u0000|\uFFFD/g;
    function Nv(t) {
      return (typeof t == "string" ? t : "" + t)
        .replace(
          yS,
          `
`,
        )
        .replace(bS, "");
    }
    function Vv(t, e) {
      return ((e = Nv(e)), Nv(t) === e);
    }
    function Fs() {}
    function bt(t, e, a, i, s, c) {
      switch (a) {
        case "children":
          typeof i == "string"
            ? e === "body" || (e === "textarea" && i === "") || _n(t, i)
            : (typeof i == "number" || typeof i == "bigint") &&
              e !== "body" &&
              _n(t, "" + i);
          break;
        case "className":
          es(t, "class", i);
          break;
        case "tabIndex":
          es(t, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          es(t, a, i);
          break;
        case "style":
          Up(t, i, c);
          break;
        case "data":
          if (e !== "object") {
            es(t, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (e !== "a" || a !== "href")) {
            t.removeAttribute(a);
            break;
          }
          if (
            i == null ||
            typeof i == "function" ||
            typeof i == "symbol" ||
            typeof i == "boolean"
          ) {
            t.removeAttribute(a);
            break;
          }
          ((i = is("" + i)), t.setAttribute(a, i));
          break;
        case "action":
        case "formAction":
          if (typeof i == "function") {
            t.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
            );
            break;
          } else
            typeof c == "function" &&
              (a === "formAction"
                ? (e !== "input" && bt(t, e, "name", s.name, s, null),
                  bt(t, e, "formEncType", s.formEncType, s, null),
                  bt(t, e, "formMethod", s.formMethod, s, null),
                  bt(t, e, "formTarget", s.formTarget, s, null))
                : (bt(t, e, "encType", s.encType, s, null),
                  bt(t, e, "method", s.method, s, null),
                  bt(t, e, "target", s.target, s, null)));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ((i = is("" + i)), t.setAttribute(a, i));
          break;
        case "onClick":
          i != null && (t.onclick = Fs);
          break;
        case "onScroll":
          i != null && ut("scroll", t);
          break;
        case "onScrollEnd":
          i != null && ut("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
            if (((a = i.__html), a != null)) {
              if (s.children != null) throw Error(o(60));
              t.innerHTML = a;
            }
          }
          break;
        case "multiple":
          t.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          t.muted = i && typeof i != "function" && typeof i != "symbol";
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
          if (
            i == null ||
            typeof i == "function" ||
            typeof i == "boolean" ||
            typeof i == "symbol"
          ) {
            t.removeAttribute("xlink:href");
            break;
          }
          ((a = is("" + i)),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol"
            ? t.setAttribute(a, "" + i)
            : t.removeAttribute(a);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
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
          i && typeof i != "function" && typeof i != "symbol"
            ? t.setAttribute(a, "")
            : t.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0
            ? t.setAttribute(a, "")
            : i !== !1 &&
                i != null &&
                typeof i != "function" &&
                typeof i != "symbol"
              ? t.setAttribute(a, i)
              : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null &&
          typeof i != "function" &&
          typeof i != "symbol" &&
          !isNaN(i) &&
          1 <= i
            ? t.setAttribute(a, i)
            : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          isNaN(i)
            ? t.removeAttribute(a)
            : t.setAttribute(a, i);
          break;
        case "popover":
          (ut("beforetoggle", t), ut("toggle", t), ts(t, "popover", i));
          break;
        case "xlinkActuate":
          Ie(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
          break;
        case "xlinkArcrole":
          Ie(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
          break;
        case "xlinkRole":
          Ie(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
          break;
        case "xlinkShow":
          Ie(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
          break;
        case "xlinkTitle":
          Ie(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
          break;
        case "xlinkType":
          Ie(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
          break;
        case "xmlBase":
          Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
          break;
        case "xmlLang":
          Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
          break;
        case "xmlSpace":
          Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
          break;
        case "is":
          ts(t, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < a.length) ||
            (a[0] !== "o" && a[0] !== "O") ||
            (a[1] !== "n" && a[1] !== "N")) &&
            ((a = J1.get(a) || a), ts(t, a, i));
      }
    }
    function _u(t, e, a, i, s, c) {
      switch (a) {
        case "style":
          Up(t, i, c);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
            if (((a = i.__html), a != null)) {
              if (s.children != null) throw Error(o(60));
              t.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string"
            ? _n(t, i)
            : (typeof i == "number" || typeof i == "bigint") && _n(t, "" + i);
          break;
        case "onScroll":
          i != null && ut("scroll", t);
          break;
        case "onScrollEnd":
          i != null && ut("scrollend", t);
          break;
        case "onClick":
          i != null && (t.onclick = Fs);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Mp.hasOwnProperty(a))
            t: {
              if (
                a[0] === "o" &&
                a[1] === "n" &&
                ((s = a.endsWith("Capture")),
                (e = a.slice(2, s ? a.length - 7 : void 0)),
                (c = t[se] || null),
                (c = c != null ? c[a] : null),
                typeof c == "function" && t.removeEventListener(e, c, s),
                typeof i == "function")
              ) {
                (typeof c != "function" &&
                  c !== null &&
                  (a in t
                    ? (t[a] = null)
                    : t.hasAttribute(a) && t.removeAttribute(a)),
                  t.addEventListener(e, i, s));
                break t;
              }
              a in t
                ? (t[a] = i)
                : i === !0
                  ? t.setAttribute(a, "")
                  : ts(t, a, i);
            }
      }
    }
    function $t(t, e, a) {
      switch (e) {
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
          (ut("error", t), ut("load", t));
          var i = !1,
            s = !1,
            c;
          for (c in a)
            if (a.hasOwnProperty(c)) {
              var f = a[c];
              if (f != null)
                switch (c) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    s = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(o(137, e));
                  default:
                    bt(t, e, c, f, a, null);
                }
            }
          (s && bt(t, e, "srcSet", a.srcSet, a, null),
            i && bt(t, e, "src", a.src, a, null));
          return;
        case "input":
          ut("invalid", t);
          var p = (c = f = s = null),
            b = null,
            M = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var _ = a[i];
              if (_ != null)
                switch (i) {
                  case "name":
                    s = _;
                    break;
                  case "type":
                    f = _;
                    break;
                  case "checked":
                    b = _;
                    break;
                  case "defaultChecked":
                    M = _;
                    break;
                  case "value":
                    c = _;
                    break;
                  case "defaultValue":
                    p = _;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (_ != null) throw Error(o(137, e));
                    break;
                  default:
                    bt(t, e, i, _, a, null);
                }
            }
          (Cp(t, c, p, b, M, f, s, !1), as(t));
          return;
        case "select":
          (ut("invalid", t), (i = f = c = null));
          for (s in a)
            if (a.hasOwnProperty(s) && ((p = a[s]), p != null))
              switch (s) {
                case "value":
                  c = p;
                  break;
                case "defaultValue":
                  f = p;
                  break;
                case "multiple":
                  i = p;
                default:
                  bt(t, e, s, p, a, null);
              }
          ((e = c),
            (a = f),
            (t.multiple = !!i),
            e != null ? On(t, !!i, e, !1) : a != null && On(t, !!i, a, !0));
          return;
        case "textarea":
          (ut("invalid", t), (c = s = i = null));
          for (f in a)
            if (a.hasOwnProperty(f) && ((p = a[f]), p != null))
              switch (f) {
                case "value":
                  i = p;
                  break;
                case "defaultValue":
                  s = p;
                  break;
                case "children":
                  c = p;
                  break;
                case "dangerouslySetInnerHTML":
                  if (p != null) throw Error(o(91));
                  break;
                default:
                  bt(t, e, f, p, a, null);
              }
          (Vp(t, i, s, c), as(t));
          return;
        case "option":
          for (b in a)
            a.hasOwnProperty(b) &&
              ((i = a[b]), i != null) &&
              (b === "selected"
                ? (t.selected =
                    i && typeof i != "function" && typeof i != "symbol")
                : bt(t, e, b, i, a, null));
          return;
        case "dialog":
          (ut("beforetoggle", t),
            ut("toggle", t),
            ut("cancel", t),
            ut("close", t));
          break;
        case "iframe":
        case "object":
          ut("load", t);
          break;
        case "video":
        case "audio":
          for (i = 0; i < pr.length; i++) ut(pr[i], t);
          break;
        case "image":
          (ut("error", t), ut("load", t));
          break;
        case "details":
          ut("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          (ut("error", t), ut("load", t));
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
          for (M in a)
            if (a.hasOwnProperty(M) && ((i = a[M]), i != null))
              switch (M) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  bt(t, e, M, i, a, null);
              }
          return;
        default:
          if (Po(e)) {
            for (_ in a)
              a.hasOwnProperty(_) &&
                ((i = a[_]), i !== void 0 && _u(t, e, _, i, a, void 0));
            return;
          }
      }
      for (p in a)
        a.hasOwnProperty(p) &&
          ((i = a[p]), i != null && bt(t, e, p, i, a, null));
    }
    function xS(t, e, a, i) {
      switch (e) {
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
          var s = null,
            c = null,
            f = null,
            p = null,
            b = null,
            M = null,
            _ = null;
          for (z in a) {
            var V = a[z];
            if (a.hasOwnProperty(z) && V != null)
              switch (z) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  b = V;
                default:
                  i.hasOwnProperty(z) || bt(t, e, z, null, i, V);
              }
          }
          for (var k in i) {
            var z = i[k];
            if (((V = a[k]), i.hasOwnProperty(k) && (z != null || V != null)))
              switch (k) {
                case "type":
                  c = z;
                  break;
                case "name":
                  s = z;
                  break;
                case "checked":
                  M = z;
                  break;
                case "defaultChecked":
                  _ = z;
                  break;
                case "value":
                  f = z;
                  break;
                case "defaultValue":
                  p = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(o(137, e));
                  break;
                default:
                  z !== V && bt(t, e, k, z, i, V);
              }
          }
          Zo(t, f, p, b, M, _, c, s);
          return;
        case "select":
          z = f = p = k = null;
          for (c in a)
            if (((b = a[c]), a.hasOwnProperty(c) && b != null))
              switch (c) {
                case "value":
                  break;
                case "multiple":
                  z = b;
                default:
                  i.hasOwnProperty(c) || bt(t, e, c, null, i, b);
              }
          for (s in i)
            if (
              ((c = i[s]),
              (b = a[s]),
              i.hasOwnProperty(s) && (c != null || b != null))
            )
              switch (s) {
                case "value":
                  k = c;
                  break;
                case "defaultValue":
                  p = c;
                  break;
                case "multiple":
                  f = c;
                default:
                  c !== b && bt(t, e, s, c, i, b);
              }
          ((e = p),
            (a = f),
            (i = z),
            k != null
              ? On(t, !!a, k, !1)
              : !!i != !!a &&
                (e != null ? On(t, !!a, e, !0) : On(t, !!a, a ? [] : "", !1)));
          return;
        case "textarea":
          z = k = null;
          for (p in a)
            if (
              ((s = a[p]),
              a.hasOwnProperty(p) && s != null && !i.hasOwnProperty(p))
            )
              switch (p) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  bt(t, e, p, null, i, s);
              }
          for (f in i)
            if (
              ((s = i[f]),
              (c = a[f]),
              i.hasOwnProperty(f) && (s != null || c != null))
            )
              switch (f) {
                case "value":
                  k = s;
                  break;
                case "defaultValue":
                  z = s;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (s != null) throw Error(o(91));
                  break;
                default:
                  s !== c && bt(t, e, f, s, i, c);
              }
          Np(t, k, z);
          return;
        case "option":
          for (var at in a)
            ((k = a[at]),
              a.hasOwnProperty(at) &&
                k != null &&
                !i.hasOwnProperty(at) &&
                (at === "selected"
                  ? (t.selected = !1)
                  : bt(t, e, at, null, i, k)));
          for (b in i)
            ((k = i[b]),
              (z = a[b]),
              i.hasOwnProperty(b) &&
                k !== z &&
                (k != null || z != null) &&
                (b === "selected"
                  ? (t.selected =
                      k && typeof k != "function" && typeof k != "symbol")
                  : bt(t, e, b, k, i, z)));
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
          for (var I in a)
            ((k = a[I]),
              a.hasOwnProperty(I) &&
                k != null &&
                !i.hasOwnProperty(I) &&
                bt(t, e, I, null, i, k));
          for (M in i)
            if (
              ((k = i[M]),
              (z = a[M]),
              i.hasOwnProperty(M) && k !== z && (k != null || z != null))
            )
              switch (M) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null) throw Error(o(137, e));
                  break;
                default:
                  bt(t, e, M, k, i, z);
              }
          return;
        default:
          if (Po(e)) {
            for (var xt in a)
              ((k = a[xt]),
                a.hasOwnProperty(xt) &&
                  k !== void 0 &&
                  !i.hasOwnProperty(xt) &&
                  _u(t, e, xt, void 0, i, k));
            for (_ in i)
              ((k = i[_]),
                (z = a[_]),
                !i.hasOwnProperty(_) ||
                  k === z ||
                  (k === void 0 && z === void 0) ||
                  _u(t, e, _, k, i, z));
            return;
          }
      }
      for (var A in a)
        ((k = a[A]),
          a.hasOwnProperty(A) &&
            k != null &&
            !i.hasOwnProperty(A) &&
            bt(t, e, A, null, i, k));
      for (V in i)
        ((k = i[V]),
          (z = a[V]),
          !i.hasOwnProperty(V) ||
            k === z ||
            (k == null && z == null) ||
            bt(t, e, V, k, i, z));
    }
    var Cu = null,
      Nu = null;
    function Ws(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function jv(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Uv(t, e) {
      if (t === 0)
        switch (e) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function Vu(t, e) {
      return (
        t === "textarea" ||
        t === "noscript" ||
        typeof e.children == "string" ||
        typeof e.children == "number" ||
        typeof e.children == "bigint" ||
        (typeof e.dangerouslySetInnerHTML == "object" &&
          e.dangerouslySetInnerHTML !== null &&
          e.dangerouslySetInnerHTML.__html != null)
      );
    }
    var ju = null;
    function wS() {
      var t = window.event;
      return t && t.type === "popstate"
        ? t === ju
          ? !1
          : ((ju = t), !0)
        : ((ju = null), !1);
    }
    var Bv = typeof setTimeout == "function" ? setTimeout : void 0,
      SS = typeof clearTimeout == "function" ? clearTimeout : void 0,
      Lv = typeof Promise == "function" ? Promise : void 0,
      TS =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof Lv < "u"
            ? function (t) {
                return Lv.resolve(null).then(t).catch(AS);
              }
            : Bv;
    function AS(t) {
      setTimeout(function () {
        throw t;
      });
    }
    function Ba(t) {
      return t === "head";
    }
    function Hv(t, e) {
      var a = e,
        i = 0,
        s = 0;
      do {
        var c = a.nextSibling;
        if ((t.removeChild(a), c && c.nodeType === 8))
          if (((a = c.data), a === "/$")) {
            if (0 < i && 8 > i) {
              a = i;
              var f = t.ownerDocument;
              if ((a & 1 && gr(f.documentElement), a & 2 && gr(f.body), a & 4))
                for (a = f.head, gr(a), f = a.firstChild; f; ) {
                  var p = f.nextSibling,
                    b = f.nodeName;
                  (f[Oi] ||
                    b === "SCRIPT" ||
                    b === "STYLE" ||
                    (b === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                    a.removeChild(f),
                    (f = p));
                }
            }
            if (s === 0) {
              (t.removeChild(c), Ar(e));
              return;
            }
            s--;
          } else
            a === "$" || a === "$?" || a === "$!"
              ? s++
              : (i = a.charCodeAt(0) - 48);
        else i = 0;
        a = c;
      } while (a);
      Ar(e);
    }
    function Uu(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (((e = e.nextSibling), a.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            (Uu(a), qo(a));
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(a);
      }
    }
    function ES(t, e, a, i) {
      for (; t.nodeType === 1; ) {
        var s = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (i) {
          if (!t[Oi])
            switch (e) {
              case "meta":
                if (!t.hasAttribute("itemprop")) break;
                return t;
              case "link":
                if (
                  ((c = t.getAttribute("rel")),
                  c === "stylesheet" && t.hasAttribute("data-precedence"))
                )
                  break;
                if (
                  c !== s.rel ||
                  t.getAttribute("href") !==
                    (s.href == null || s.href === "" ? null : s.href) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin) ||
                  t.getAttribute("title") !== (s.title == null ? null : s.title)
                )
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence")) break;
                return t;
              case "script":
                if (
                  ((c = t.getAttribute("src")),
                  (c !== (s.src == null ? null : s.src) ||
                    t.getAttribute("type") !==
                      (s.type == null ? null : s.type) ||
                    t.getAttribute("crossorigin") !==
                      (s.crossOrigin == null ? null : s.crossOrigin)) &&
                    c &&
                    t.hasAttribute("async") &&
                    !t.hasAttribute("itemprop"))
                )
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === "input" && t.type === "hidden") {
          var c = s.name == null ? null : "" + s.name;
          if (s.type === "hidden" && t.getAttribute("name") === c) return t;
        } else return t;
        if (((t = Le(t.nextSibling)), t === null)) break;
      }
      return null;
    }
    function MS(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if (
          ((t.nodeType !== 1 ||
            t.nodeName !== "INPUT" ||
            t.type !== "hidden") &&
            !a) ||
          ((t = Le(t.nextSibling)), t === null)
        )
          return null;
      return t;
    }
    function Bu(t) {
      return (
        t.data === "$!" ||
        (t.data === "$?" && t.ownerDocument.readyState === "complete")
      );
    }
    function DS(t, e) {
      var a = t.ownerDocument;
      if (t.data !== "$?" || a.readyState === "complete") e();
      else {
        var i = function () {
          (e(), a.removeEventListener("DOMContentLoaded", i));
        };
        (a.addEventListener("DOMContentLoaded", i), (t._reactRetry = i));
      }
    }
    function Le(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (
            ((e = t.data),
            e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
          )
            break;
          if (e === "/$") return null;
        }
      }
      return t;
    }
    var Lu = null;
    function Yv(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === "$" || a === "$!" || a === "$?") {
            if (e === 0) return t;
            e--;
          } else a === "/$" && e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function qv(t, e, a) {
      switch (((e = Ws(a)), t)) {
        case "html":
          if (((t = e.documentElement), !t)) throw Error(o(452));
          return t;
        case "head":
          if (((t = e.head), !t)) throw Error(o(453));
          return t;
        case "body":
          if (((t = e.body), !t)) throw Error(o(454));
          return t;
        default:
          throw Error(o(451));
      }
    }
    function gr(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      qo(t);
    }
    var _e = new Map(),
      Gv = new Set();
    function $s(t) {
      return typeof t.getRootNode == "function"
        ? t.getRootNode()
        : t.nodeType === 9
          ? t
          : t.ownerDocument;
    }
    var ha = q.d;
    q.d = { f: kS, r: zS, D: RS, C: OS, L: _S, m: CS, X: VS, S: NS, M: jS };
    function kS() {
      var t = ha.f(),
        e = Gs();
      return t || e;
    }
    function zS(t) {
      var e = Dn(t);
      e !== null && e.tag === 5 && e.type === "form" ? cg(e) : ha.r(t);
    }
    var li = typeof document > "u" ? null : document;
    function Xv(t, e, a) {
      var i = li;
      if (i && typeof e == "string" && e) {
        var s = Ee(e);
        ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
          typeof a == "string" && (s += '[crossorigin="' + a + '"]'),
          Gv.has(s) ||
            (Gv.add(s),
            (t = { rel: t, crossOrigin: a, href: e }),
            i.querySelector(s) === null &&
              ((e = i.createElement("link")),
              $t(e, "link", t),
              Xt(e),
              i.head.appendChild(e))));
      }
    }
    function RS(t) {
      (ha.D(t), Xv("dns-prefetch", t, null));
    }
    function OS(t, e) {
      (ha.C(t, e), Xv("preconnect", t, e));
    }
    function _S(t, e, a) {
      ha.L(t, e, a);
      var i = li;
      if (i && t && e) {
        var s = 'link[rel="preload"][as="' + Ee(e) + '"]';
        e === "image" && a && a.imageSrcSet
          ? ((s += '[imagesrcset="' + Ee(a.imageSrcSet) + '"]'),
            typeof a.imageSizes == "string" &&
              (s += '[imagesizes="' + Ee(a.imageSizes) + '"]'))
          : (s += '[href="' + Ee(t) + '"]');
        var c = s;
        switch (e) {
          case "style":
            c = oi(t);
            break;
          case "script":
            c = ci(t);
        }
        _e.has(c) ||
          ((t = y(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e,
            },
            a,
          )),
          _e.set(c, t),
          i.querySelector(s) !== null ||
            (e === "style" && i.querySelector(vr(c))) ||
            (e === "script" && i.querySelector(yr(c))) ||
            ((e = i.createElement("link")),
            $t(e, "link", t),
            Xt(e),
            i.head.appendChild(e)));
      }
    }
    function CS(t, e) {
      ha.m(t, e);
      var a = li;
      if (a && t) {
        var i = e && typeof e.as == "string" ? e.as : "script",
          s =
            'link[rel="modulepreload"][as="' +
            Ee(i) +
            '"][href="' +
            Ee(t) +
            '"]',
          c = s;
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            c = ci(t);
        }
        if (
          !_e.has(c) &&
          ((t = y({ rel: "modulepreload", href: t }, e)),
          _e.set(c, t),
          a.querySelector(s) === null)
        ) {
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (a.querySelector(yr(c))) return;
          }
          ((i = a.createElement("link")),
            $t(i, "link", t),
            Xt(i),
            a.head.appendChild(i));
        }
      }
    }
    function NS(t, e, a) {
      ha.S(t, e, a);
      var i = li;
      if (i && t) {
        var s = kn(i).hoistableStyles,
          c = oi(t);
        e = e || "default";
        var f = s.get(c);
        if (!f) {
          var p = { loading: 0, preload: null };
          if ((f = i.querySelector(vr(c)))) p.loading = 5;
          else {
            ((t = y({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
              (a = _e.get(c)) && Hu(t, a));
            var b = (f = i.createElement("link"));
            (Xt(b),
              $t(b, "link", t),
              (b._p = new Promise(function (M, _) {
                ((b.onload = M), (b.onerror = _));
              })),
              b.addEventListener("load", function () {
                p.loading |= 1;
              }),
              b.addEventListener("error", function () {
                p.loading |= 2;
              }),
              (p.loading |= 4),
              Is(f, e, i));
          }
          ((f = { type: "stylesheet", instance: f, count: 1, state: p }),
            s.set(c, f));
        }
      }
    }
    function VS(t, e) {
      ha.X(t, e);
      var a = li;
      if (a && t) {
        var i = kn(a).hoistableScripts,
          s = ci(t),
          c = i.get(s);
        c ||
          ((c = a.querySelector(yr(s))),
          c ||
            ((t = y({ src: t, async: !0 }, e)),
            (e = _e.get(s)) && Yu(t, e),
            (c = a.createElement("script")),
            Xt(c),
            $t(c, "link", t),
            a.head.appendChild(c)),
          (c = { type: "script", instance: c, count: 1, state: null }),
          i.set(s, c));
      }
    }
    function jS(t, e) {
      ha.M(t, e);
      var a = li;
      if (a && t) {
        var i = kn(a).hoistableScripts,
          s = ci(t),
          c = i.get(s);
        c ||
          ((c = a.querySelector(yr(s))),
          c ||
            ((t = y({ src: t, async: !0, type: "module" }, e)),
            (e = _e.get(s)) && Yu(t, e),
            (c = a.createElement("script")),
            Xt(c),
            $t(c, "link", t),
            a.head.appendChild(c)),
          (c = { type: "script", instance: c, count: 1, state: null }),
          i.set(s, c));
      }
    }
    function Kv(t, e, a, i) {
      var s = (s = nt.current) ? $s(s) : null;
      if (!s) throw Error(o(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string"
            ? ((e = oi(a.href)),
              (a = kn(s).hoistableStyles),
              (i = a.get(e)),
              i ||
                ((i = { type: "style", instance: null, count: 0, state: null }),
                a.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            a.rel === "stylesheet" &&
            typeof a.href == "string" &&
            typeof a.precedence == "string"
          ) {
            t = oi(a.href);
            var c = kn(s).hoistableStyles,
              f = c.get(t);
            if (
              (f ||
                ((s = s.ownerDocument || s),
                (f = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                c.set(t, f),
                (c = s.querySelector(vr(t))) &&
                  !c._p &&
                  ((f.instance = c), (f.state.loading = 5)),
                _e.has(t) ||
                  ((a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy,
                  }),
                  _e.set(t, a),
                  c || US(s, t, a, f.state))),
              e && i === null)
            )
              throw Error(o(528, ""));
            return f;
          }
          if (e && i !== null) throw Error(o(529, ""));
          return null;
        case "script":
          return (
            (e = a.async),
            (a = a.src),
            typeof a == "string" &&
            e &&
            typeof e != "function" &&
            typeof e != "symbol"
              ? ((e = ci(a)),
                (a = kn(s).hoistableScripts),
                (i = a.get(e)),
                i ||
                  ((i = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  a.set(e, i)),
                i)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(o(444, t));
      }
    }
    function oi(t) {
      return 'href="' + Ee(t) + '"';
    }
    function vr(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function Zv(t) {
      return y({}, t, { "data-precedence": t.precedence, precedence: null });
    }
    function US(t, e, a, i) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]")
        ? (i.loading = 1)
        : ((e = t.createElement("link")),
          (i.preload = e),
          e.addEventListener("load", function () {
            return (i.loading |= 1);
          }),
          e.addEventListener("error", function () {
            return (i.loading |= 2);
          }),
          $t(e, "link", a),
          Xt(e),
          t.head.appendChild(e));
    }
    function ci(t) {
      return '[src="' + Ee(t) + '"]';
    }
    function yr(t) {
      return "script[async]" + t;
    }
    function Qv(t, e, a) {
      if ((e.count++, e.instance === null))
        switch (e.type) {
          case "style":
            var i = t.querySelector('style[data-href~="' + Ee(a.href) + '"]');
            if (i) return ((e.instance = i), Xt(i), i);
            var s = y({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null,
            });
            return (
              (i = (t.ownerDocument || t).createElement("style")),
              Xt(i),
              $t(i, "style", s),
              Is(i, a.precedence, t),
              (e.instance = i)
            );
          case "stylesheet":
            s = oi(a.href);
            var c = t.querySelector(vr(s));
            if (c) return ((e.state.loading |= 4), (e.instance = c), Xt(c), c);
            ((i = Zv(a)),
              (s = _e.get(s)) && Hu(i, s),
              (c = (t.ownerDocument || t).createElement("link")),
              Xt(c));
            var f = c;
            return (
              (f._p = new Promise(function (p, b) {
                ((f.onload = p), (f.onerror = b));
              })),
              $t(c, "link", i),
              (e.state.loading |= 4),
              Is(c, a.precedence, t),
              (e.instance = c)
            );
          case "script":
            return (
              (c = ci(a.src)),
              (s = t.querySelector(yr(c)))
                ? ((e.instance = s), Xt(s), s)
                : ((i = a),
                  (s = _e.get(c)) && ((i = y({}, a)), Yu(i, s)),
                  (t = t.ownerDocument || t),
                  (s = t.createElement("script")),
                  Xt(s),
                  $t(s, "link", i),
                  t.head.appendChild(s),
                  (e.instance = s))
            );
          case "void":
            return null;
          default:
            throw Error(o(443, e.type));
        }
      else
        e.type === "stylesheet" &&
          (e.state.loading & 4) === 0 &&
          ((i = e.instance), (e.state.loading |= 4), Is(i, a.precedence, t));
      return e.instance;
    }
    function Is(t, e, a) {
      for (
        var i = a.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]',
          ),
          s = i.length ? i[i.length - 1] : null,
          c = s,
          f = 0;
        f < i.length;
        f++
      ) {
        var p = i[f];
        if (p.dataset.precedence === e) c = p;
        else if (c !== s) break;
      }
      c
        ? c.parentNode.insertBefore(t, c.nextSibling)
        : ((e = a.nodeType === 9 ? a.head : a),
          e.insertBefore(t, e.firstChild));
    }
    function Hu(t, e) {
      (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title));
    }
    function Yu(t, e) {
      (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity));
    }
    var tl = null;
    function Pv(t, e, a) {
      if (tl === null) {
        var i = new Map(),
          s = (tl = new Map());
        s.set(a, i);
      } else ((s = tl), (i = s.get(a)), i || ((i = new Map()), s.set(a, i)));
      if (i.has(t)) return i;
      for (
        i.set(t, null), a = a.getElementsByTagName(t), s = 0;
        s < a.length;
        s++
      ) {
        var c = a[s];
        if (
          !(
            c[Oi] ||
            c[ee] ||
            (t === "link" && c.getAttribute("rel") === "stylesheet")
          ) &&
          c.namespaceURI !== "http://www.w3.org/2000/svg"
        ) {
          var f = c.getAttribute(e) || "";
          f = t + f;
          var p = i.get(f);
          p ? p.push(c) : i.set(f, [c]);
        }
      }
      return i;
    }
    function Jv(t, e, a) {
      ((t = t.ownerDocument || t),
        t.head.insertBefore(
          a,
          e === "title" ? t.querySelector("head > title") : null,
        ));
    }
    function BS(t, e, a) {
      if (a === 1 || e.itemProp != null) return !1;
      switch (t) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (
            typeof e.precedence != "string" ||
            typeof e.href != "string" ||
            e.href === ""
          )
            break;
          return !0;
        case "link":
          if (
            typeof e.rel != "string" ||
            typeof e.href != "string" ||
            e.href === "" ||
            e.onLoad ||
            e.onError
          )
            break;
          return e.rel === "stylesheet"
            ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
            : !0;
        case "script":
          if (
            e.async &&
            typeof e.async != "function" &&
            typeof e.async != "symbol" &&
            !e.onLoad &&
            !e.onError &&
            e.src &&
            typeof e.src == "string"
          )
            return !0;
      }
      return !1;
    }
    function Fv(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    var br = null;
    function LS() {}
    function HS(t, e, a) {
      if (br === null) throw Error(o(475));
      var i = br;
      if (
        e.type === "stylesheet" &&
        (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
        (e.state.loading & 4) === 0
      ) {
        if (e.instance === null) {
          var s = oi(a.href),
            c = t.querySelector(vr(s));
          if (c) {
            ((t = c._p),
              t !== null &&
                typeof t == "object" &&
                typeof t.then == "function" &&
                (i.count++, (i = el.bind(i)), t.then(i, i)),
              (e.state.loading |= 4),
              (e.instance = c),
              Xt(c));
            return;
          }
          ((c = t.ownerDocument || t),
            (a = Zv(a)),
            (s = _e.get(s)) && Hu(a, s),
            (c = c.createElement("link")),
            Xt(c));
          var f = c;
          ((f._p = new Promise(function (p, b) {
            ((f.onload = p), (f.onerror = b));
          })),
            $t(c, "link", a),
            (e.instance = c));
        }
        (i.stylesheets === null && (i.stylesheets = new Map()),
          i.stylesheets.set(e, t),
          (t = e.state.preload) &&
            (e.state.loading & 3) === 0 &&
            (i.count++,
            (e = el.bind(i)),
            t.addEventListener("load", e),
            t.addEventListener("error", e)));
      }
    }
    function YS() {
      if (br === null) throw Error(o(475));
      var t = br;
      return (
        t.stylesheets && t.count === 0 && qu(t, t.stylesheets),
        0 < t.count
          ? function (e) {
              var a = setTimeout(function () {
                if ((t.stylesheets && qu(t, t.stylesheets), t.unsuspend)) {
                  var i = t.unsuspend;
                  ((t.unsuspend = null), i());
                }
              }, 6e4);
              return (
                (t.unsuspend = e),
                function () {
                  ((t.unsuspend = null), clearTimeout(a));
                }
              );
            }
          : null
      );
    }
    function el() {
      if ((this.count--, this.count === 0)) {
        if (this.stylesheets) qu(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          ((this.unsuspend = null), t());
        }
      }
    }
    var al = null;
    function qu(t, e) {
      ((t.stylesheets = null),
        t.unsuspend !== null &&
          (t.count++,
          (al = new Map()),
          e.forEach(qS, t),
          (al = null),
          el.call(t)));
    }
    function qS(t, e) {
      if (!(e.state.loading & 4)) {
        var a = al.get(t);
        if (a) var i = a.get(null);
        else {
          ((a = new Map()), al.set(t, a));
          for (
            var s = t.querySelectorAll(
                "link[data-precedence],style[data-precedence]",
              ),
              c = 0;
            c < s.length;
            c++
          ) {
            var f = s[c];
            (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
              (a.set(f.dataset.precedence, f), (i = f));
          }
          i && a.set(null, i);
        }
        ((s = e.instance),
          (f = s.getAttribute("data-precedence")),
          (c = a.get(f) || i),
          c === i && a.set(null, s),
          a.set(f, s),
          this.count++,
          (i = el.bind(this)),
          s.addEventListener("load", i),
          s.addEventListener("error", i),
          c
            ? c.parentNode.insertBefore(s, c.nextSibling)
            : ((t = t.nodeType === 9 ? t.head : t),
              t.insertBefore(s, t.firstChild)),
          (e.state.loading |= 4));
      }
    }
    var xr = {
      $$typeof: U,
      Provider: null,
      Consumer: null,
      _currentValue: Z,
      _currentValue2: Z,
      _threadCount: 0,
    };
    function GS(t, e, a, i, s, c, f, p) {
      ((this.tag = 1),
        (this.containerInfo = t),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Bo(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Bo(0)),
        (this.hiddenUpdates = Bo(null)),
        (this.identifierPrefix = i),
        (this.onUncaughtError = s),
        (this.onCaughtError = c),
        (this.onRecoverableError = f),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = p),
        (this.incompleteTransitions = new Map()));
    }
    function Wv(t, e, a, i, s, c, f, p, b, M, _, V) {
      return (
        (t = new GS(t, e, a, f, p, b, M, V)),
        (e = 1),
        c === !0 && (e |= 24),
        (c = ge(3, null, null, e)),
        (t.current = c),
        (c.stateNode = t),
        (e = Tc()),
        e.refCount++,
        (t.pooledCache = e),
        e.refCount++,
        (c.memoizedState = { element: i, isDehydrated: a, cache: e }),
        Dc(c),
        t
      );
    }
    function $v(t) {
      return t ? ((t = Hn), t) : Hn;
    }
    function Iv(t, e, a, i, s, c) {
      ((s = $v(s)),
        i.context === null ? (i.context = s) : (i.pendingContext = s),
        (i = Ea(e)),
        (i.payload = { element: a }),
        (c = c === void 0 ? null : c),
        c !== null && (i.callback = c),
        (a = Ma(t, i, e)),
        a !== null && (we(a, t, e), Fi(a, t, e)));
    }
    function t0(t, e) {
      if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function Gu(t, e) {
      (t0(t, e), (t = t.alternate) && t0(t, e));
    }
    function e0(t) {
      if (t.tag === 13) {
        var e = Ln(t, 67108864);
        (e !== null && we(e, t, 67108864), Gu(t, 67108864));
      }
    }
    var nl = !0;
    function XS(t, e, a, i) {
      var s = O.T;
      O.T = null;
      var c = q.p;
      try {
        ((q.p = 2), Xu(t, e, a, i));
      } finally {
        ((q.p = c), (O.T = s));
      }
    }
    function KS(t, e, a, i) {
      var s = O.T;
      O.T = null;
      var c = q.p;
      try {
        ((q.p = 8), Xu(t, e, a, i));
      } finally {
        ((q.p = c), (O.T = s));
      }
    }
    function Xu(t, e, a, i) {
      if (nl) {
        var s = Ku(i);
        if (s === null) (Ou(t, e, i, il, a), n0(t, i));
        else if (QS(s, t, e, a, i)) i.stopPropagation();
        else if ((n0(t, i), e & 4 && -1 < ZS.indexOf(t))) {
          for (; s !== null; ) {
            var c = Dn(s);
            if (c !== null)
              switch (c.tag) {
                case 3:
                  if (
                    ((c = c.stateNode), c.current.memoizedState.isDehydrated)
                  ) {
                    var f = Ja(c.pendingLanes);
                    if (f !== 0) {
                      var p = c;
                      for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                        var b = 1 << (31 - pe(f));
                        ((p.entanglements[1] |= b), (f &= ~b));
                      }
                      (Je(c), (gt & 6) === 0 && ((Ys = Xe() + 500), hr(0)));
                    }
                  }
                  break;
                case 13:
                  ((p = Ln(c, 2)), p !== null && we(p, c, 2), Gs(), Gu(c, 2));
              }
            if (((c = Ku(i)), c === null && Ou(t, e, i, il, a), c === s)) break;
            s = c;
          }
          s !== null && i.stopPropagation();
        } else Ou(t, e, i, null, a);
      }
    }
    function Ku(t) {
      return ((t = Fo(t)), Zu(t));
    }
    var il = null;
    function Zu(t) {
      if (((il = null), (t = Mn(t)), t !== null)) {
        var e = h(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (((t = d(e)), t !== null)) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return ((il = t), null);
    }
    function a0(t) {
      switch (t) {
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
        case "resize":
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
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (O1()) {
            case gp:
              return 2;
            case vp:
              return 8;
            case Fr:
            case _1:
              return 32;
            case yp:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Qu = !1,
      La = null,
      Ha = null,
      Ya = null,
      wr = new Map(),
      Sr = new Map(),
      qa = [],
      ZS =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " ",
        );
    function n0(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          La = null;
          break;
        case "dragenter":
        case "dragleave":
          Ha = null;
          break;
        case "mouseover":
        case "mouseout":
          Ya = null;
          break;
        case "pointerover":
        case "pointerout":
          wr.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Sr.delete(e.pointerId);
      }
    }
    function Tr(t, e, a, i, s, c) {
      return t === null || t.nativeEvent !== c
        ? ((t = {
            blockedOn: e,
            domEventName: a,
            eventSystemFlags: i,
            nativeEvent: c,
            targetContainers: [s],
          }),
          e !== null && ((e = Dn(e)), e !== null && e0(e)),
          t)
        : ((t.eventSystemFlags |= i),
          (e = t.targetContainers),
          s !== null && e.indexOf(s) === -1 && e.push(s),
          t);
    }
    function QS(t, e, a, i, s) {
      switch (e) {
        case "focusin":
          return ((La = Tr(La, t, e, a, i, s)), !0);
        case "dragenter":
          return ((Ha = Tr(Ha, t, e, a, i, s)), !0);
        case "mouseover":
          return ((Ya = Tr(Ya, t, e, a, i, s)), !0);
        case "pointerover":
          var c = s.pointerId;
          return (wr.set(c, Tr(wr.get(c) || null, t, e, a, i, s)), !0);
        case "gotpointercapture":
          return (
            (c = s.pointerId),
            Sr.set(c, Tr(Sr.get(c) || null, t, e, a, i, s)),
            !0
          );
      }
      return !1;
    }
    function i0(t) {
      var e = Mn(t.target);
      if (e !== null) {
        var a = h(e);
        if (a !== null) {
          if (((e = a.tag), e === 13)) {
            if (((e = d(a)), e !== null)) {
              ((t.blockedOn = e),
                H1(t.priority, function () {
                  if (a.tag === 13) {
                    var i = xe();
                    i = Lo(i);
                    var s = Ln(a, i);
                    (s !== null && we(s, a, i), Gu(a, i));
                  }
                }));
              return;
            }
          } else if (
            e === 3 &&
            a.stateNode.current.memoizedState.isDehydrated
          ) {
            t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function rl(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = Ku(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var i = new a.constructor(a.type, a);
          ((Jo = i), a.target.dispatchEvent(i), (Jo = null));
        } else return ((e = Dn(a)), e !== null && e0(e), (t.blockedOn = a), !1);
        e.shift();
      }
      return !0;
    }
    function r0(t, e, a) {
      rl(t) && a.delete(e);
    }
    function PS() {
      ((Qu = !1),
        La !== null && rl(La) && (La = null),
        Ha !== null && rl(Ha) && (Ha = null),
        Ya !== null && rl(Ya) && (Ya = null),
        wr.forEach(r0),
        Sr.forEach(r0));
    }
    function sl(t, e) {
      t.blockedOn === e &&
        ((t.blockedOn = null),
        Qu ||
          ((Qu = !0),
          n.unstable_scheduleCallback(n.unstable_NormalPriority, PS)));
    }
    var ll = null;
    function s0(t) {
      ll !== t &&
        ((ll = t),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
          ll === t && (ll = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e],
              i = t[e + 1],
              s = t[e + 2];
            if (typeof i != "function") {
              if (Zu(i || a) === null) continue;
              break;
            }
            var c = Dn(a);
            c !== null &&
              (t.splice(e, 3),
              (e -= 3),
              Zc(
                c,
                { pending: !0, data: s, method: a.method, action: i },
                i,
                s,
              ));
          }
        }));
    }
    function Ar(t) {
      function e(b) {
        return sl(b, t);
      }
      (La !== null && sl(La, t),
        Ha !== null && sl(Ha, t),
        Ya !== null && sl(Ya, t),
        wr.forEach(e),
        Sr.forEach(e));
      for (var a = 0; a < qa.length; a++) {
        var i = qa[a];
        i.blockedOn === t && (i.blockedOn = null);
      }
      for (; 0 < qa.length && ((a = qa[0]), a.blockedOn === null); )
        (i0(a), a.blockedOn === null && qa.shift());
      if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
        for (i = 0; i < a.length; i += 3) {
          var s = a[i],
            c = a[i + 1],
            f = s[se] || null;
          if (typeof c == "function") f || s0(a);
          else if (f) {
            var p = null;
            if (c && c.hasAttribute("formAction")) {
              if (((s = c), (f = c[se] || null))) p = f.formAction;
              else if (Zu(s) !== null) continue;
            } else p = f.action;
            (typeof p == "function"
              ? (a[i + 1] = p)
              : (a.splice(i, 3), (i -= 3)),
              s0(a));
          }
        }
    }
    function Pu(t) {
      this._internalRoot = t;
    }
    ((ol.prototype.render = Pu.prototype.render =
      function (t) {
        var e = this._internalRoot;
        if (e === null) throw Error(o(409));
        var a = e.current,
          i = xe();
        Iv(a, i, t, e, null, null);
      }),
      (ol.prototype.unmount = Pu.prototype.unmount =
        function () {
          var t = this._internalRoot;
          if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            (Iv(t.current, 2, null, t, null, null), Gs(), (e[En] = null));
          }
        }));
    function ol(t) {
      this._internalRoot = t;
    }
    ol.prototype.unstable_scheduleHydration = function (t) {
      if (t) {
        var e = Tp();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < qa.length && e !== 0 && e < qa[a].priority; a++);
        (qa.splice(a, 0, t), a === 0 && i0(t));
      }
    };
    var l0 = r.version;
    if (l0 !== "19.1.0") throw Error(o(527, l0, "19.1.0"));
    q.findDOMNode = function (t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function"
          ? Error(o(188))
          : ((t = Object.keys(t).join(",")), Error(o(268, t)));
      return (
        (t = v(e)),
        (t = t !== null ? m(t) : null),
        (t = t === null ? null : t.stateNode),
        t
      );
    };
    var JS = {
      bundleType: 0,
      version: "19.1.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: O,
      reconcilerVersion: "19.1.0",
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!cl.isDisabled && cl.supportsFiber)
        try {
          ((ki = cl.inject(JS)), (he = cl));
        } catch {}
    }
    return (
      (di.createRoot = function (t, e) {
        if (!u(t)) throw Error(o(299));
        var a = !1,
          i = "",
          s = Tg,
          c = Ag,
          f = Eg,
          p = null;
        return (
          e != null &&
            (e.unstable_strictMode === !0 && (a = !0),
            e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
            e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
            e.onCaughtError !== void 0 && (c = e.onCaughtError),
            e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
            e.unstable_transitionCallbacks !== void 0 &&
              (p = e.unstable_transitionCallbacks)),
          (e = Wv(t, 1, !1, null, null, a, i, s, c, f, p, null)),
          (t[En] = e.current),
          Ru(t),
          new Pu(e)
        );
      }),
      (di.hydrateRoot = function (t, e, a) {
        if (!u(t)) throw Error(o(299));
        var i = !1,
          s = "",
          c = Tg,
          f = Ag,
          p = Eg,
          b = null,
          M = null;
        return (
          a != null &&
            (a.unstable_strictMode === !0 && (i = !0),
            a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
            a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
            a.onCaughtError !== void 0 && (f = a.onCaughtError),
            a.onRecoverableError !== void 0 && (p = a.onRecoverableError),
            a.unstable_transitionCallbacks !== void 0 &&
              (b = a.unstable_transitionCallbacks),
            a.formState !== void 0 && (M = a.formState)),
          (e = Wv(t, 1, !0, e, a ?? null, i, s, c, f, p, b, M)),
          (e.context = $v(null)),
          (a = e.current),
          (i = xe()),
          (i = Lo(i)),
          (s = Ea(i)),
          (s.callback = null),
          Ma(a, s, i),
          (a = i),
          (e.current.lanes = a),
          Ri(e, a),
          Je(e),
          (t[En] = e.current),
          Ru(t),
          new ol(e)
        );
      }),
      (di.version = "19.1.0"),
      di
    );
  }
  var rd;
  function v0() {
    if (rd) return dl.exports;
    rd = 1;
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (r) {
          console.error(r);
        }
    }
    return (n(), (dl.exports = g0()), dl.exports);
  }
  var y0 = v0(),
    W = ml();
  const pa = o0(W),
    b0 =
      "" +
      new URL(
        "assets/Lathe-Machine.png",
        (document.currentScript &&
          document.currentScript.tagName.toUpperCase() === "SCRIPT" &&
          document.currentScript.src) ||
          document.baseURI,
      ).href,
    sd = W.createContext({});
  function x0(n) {
    const r = W.useRef(null);
    return (r.current === null && (r.current = n()), r.current);
  }
  const w0 = typeof window < "u" ? W.useLayoutEffect : W.useEffect,
    vl = W.createContext(null);
  function yl(n, r) {
    n.indexOf(r) === -1 && n.push(r);
  }
  function Er(n, r) {
    const l = n.indexOf(r);
    l > -1 && n.splice(l, 1);
  }
  const He = (n, r, l) => (l > r ? r : l < n ? n : l);
  let bl = () => {};
  const Fe = {},
    ld = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
  function od(n) {
    return typeof n == "object" && n !== null;
  }
  const cd = (n) => /^0[^.\s]+$/u.test(n);
  function ud(n) {
    let r;
    return () => (r === void 0 && (r = n()), r);
  }
  const Se = (n) => n,
    S0 = (n, r) => (l) => r(n(l)),
    fi = (...n) => n.reduce(S0),
    hi = (n, r, l) => {
      const o = r - n;
      return o === 0 ? 1 : (l - n) / o;
    };
  class xl {
    constructor() {
      this.subscriptions = [];
    }
    add(r) {
      return (yl(this.subscriptions, r), () => Er(this.subscriptions, r));
    }
    notify(r, l, o) {
      const u = this.subscriptions.length;
      if (u)
        if (u === 1) this.subscriptions[0](r, l, o);
        else
          for (let h = 0; h < u; h++) {
            const d = this.subscriptions[h];
            d && d(r, l, o);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  const Ce = (n) => n * 1e3,
    Te = (n) => n / 1e3;
  function dd(n, r) {
    return r ? n * (1e3 / r) : 0;
  }
  const fd = (n, r, l) =>
      (((1 - 3 * l + 3 * r) * n + (3 * l - 6 * r)) * n + 3 * r) * n,
    T0 = 1e-7,
    A0 = 12;
  function E0(n, r, l, o, u) {
    let h,
      d,
      g = 0;
    do
      ((d = r + (l - r) / 2), (h = fd(d, o, u) - n), h > 0 ? (l = d) : (r = d));
    while (Math.abs(h) > T0 && ++g < A0);
    return d;
  }
  function pi(n, r, l, o) {
    if (n === r && l === o) return Se;
    const u = (h) => E0(h, 0, 1, n, l);
    return (h) => (h === 0 || h === 1 ? h : fd(u(h), r, o));
  }
  const hd = (n) => (r) => (r <= 0.5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2),
    pd = (n) => (r) => 1 - n(1 - r),
    md = pi(0.33, 1.53, 0.69, 0.99),
    wl = pd(md),
    gd = hd(wl),
    vd = (n) =>
      (n *= 2) < 1 ? 0.5 * wl(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
    Sl = (n) => 1 - Math.sin(Math.acos(n)),
    yd = pd(Sl),
    bd = hd(Sl),
    M0 = pi(0.42, 0, 1, 1),
    D0 = pi(0, 0, 0.58, 1),
    xd = pi(0.42, 0, 0.58, 1),
    k0 = (n) => Array.isArray(n) && typeof n[0] != "number",
    wd = (n) => Array.isArray(n) && typeof n[0] == "number",
    z0 = {
      linear: Se,
      easeIn: M0,
      easeInOut: xd,
      easeOut: D0,
      circIn: Sl,
      circInOut: bd,
      circOut: yd,
      backIn: wl,
      backInOut: gd,
      backOut: md,
      anticipate: vd,
    },
    R0 = (n) => typeof n == "string",
    Sd = (n) => {
      if (wd(n)) {
        bl(n.length === 4);
        const [r, l, o, u] = n;
        return pi(r, l, o, u);
      } else if (R0(n)) return z0[n];
      return n;
    },
    Mr = [
      "setup",
      "read",
      "resolveKeyframes",
      "preUpdate",
      "update",
      "preRender",
      "render",
      "postRender",
    ];
  function O0(n, r) {
    let l = new Set(),
      o = new Set(),
      u = !1,
      h = !1;
    const d = new WeakSet();
    let g = { delta: 0, timestamp: 0, isProcessing: !1 };
    function v(y) {
      (d.has(y) && (m.schedule(y), n()), y(g));
    }
    const m = {
      schedule: (y, w = !1, T = !1) => {
        const C = T && u ? l : o;
        return (w && d.add(y), C.has(y) || C.add(y), y);
      },
      cancel: (y) => {
        (o.delete(y), d.delete(y));
      },
      process: (y) => {
        if (((g = y), u)) {
          h = !0;
          return;
        }
        ((u = !0),
          ([l, o] = [o, l]),
          l.forEach(v),
          l.clear(),
          (u = !1),
          h && ((h = !1), m.process(y)));
      },
    };
    return m;
  }
  const _0 = 40;
  function Td(n, r) {
    let l = !1,
      o = !0;
    const u = { delta: 0, timestamp: 0, isProcessing: !1 },
      h = () => (l = !0),
      d = Mr.reduce((U, J) => ((U[J] = O0(h)), U), {}),
      {
        setup: g,
        read: v,
        resolveKeyframes: m,
        preUpdate: y,
        update: w,
        preRender: T,
        render: R,
        postRender: C,
      } = d,
      L = () => {
        const U = Fe.useManualTiming ? u.timestamp : performance.now();
        ((l = !1),
          Fe.useManualTiming ||
            (u.delta = o
              ? 1e3 / 60
              : Math.max(Math.min(U - u.timestamp, _0), 1)),
          (u.timestamp = U),
          (u.isProcessing = !0),
          g.process(u),
          v.process(u),
          m.process(u),
          y.process(u),
          w.process(u),
          T.process(u),
          R.process(u),
          C.process(u),
          (u.isProcessing = !1),
          l && r && ((o = !1), n(L)));
      },
      H = () => {
        ((l = !0), (o = !0), u.isProcessing || n(L));
      };
    return {
      schedule: Mr.reduce((U, J) => {
        const B = d[J];
        return (
          (U[J] = (rt, dt = !1, et = !1) => (l || H(), B.schedule(rt, dt, et))),
          U
        );
      }, {}),
      cancel: (U) => {
        for (let J = 0; J < Mr.length; J++) d[Mr[J]].cancel(U);
      },
      state: u,
      steps: d,
    };
  }
  const {
    schedule: St,
    cancel: ma,
    state: Pt,
    steps: Tl,
  } = Td(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Se, !0);
  let Dr;
  function C0() {
    Dr = void 0;
  }
  const ne = {
      now: () => (
        Dr === void 0 &&
          ne.set(
            Pt.isProcessing || Fe.useManualTiming
              ? Pt.timestamp
              : performance.now(),
          ),
        Dr
      ),
      set: (n) => {
        ((Dr = n), queueMicrotask(C0));
      },
    },
    Ad = (n) => (r) => typeof r == "string" && r.startsWith(n),
    Ed = Ad("--"),
    N0 = Ad("var(--"),
    Al = (n) => (N0(n) ? V0.test(n.split("/*")[0].trim()) : !1),
    V0 =
      /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function Md(n) {
    return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
  }
  const pn = {
      test: (n) => typeof n == "number",
      parse: parseFloat,
      transform: (n) => n,
    },
    mi = { ...pn, transform: (n) => He(0, 1, n) },
    kr = { ...pn, default: 1 },
    gi = (n) => Math.round(n * 1e5) / 1e5,
    El = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function j0(n) {
    return n == null;
  }
  const U0 =
      /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Ml = (n, r) => (l) =>
      !!(
        (typeof l == "string" && U0.test(l) && l.startsWith(n)) ||
        (r && !j0(l) && Object.prototype.hasOwnProperty.call(l, r))
      ),
    Dd = (n, r, l) => (o) => {
      if (typeof o != "string") return o;
      const [u, h, d, g] = o.match(El);
      return {
        [n]: parseFloat(u),
        [r]: parseFloat(h),
        [l]: parseFloat(d),
        alpha: g !== void 0 ? parseFloat(g) : 1,
      };
    },
    B0 = (n) => He(0, 255, n),
    Dl = { ...pn, transform: (n) => Math.round(B0(n)) },
    Xa = {
      test: Ml("rgb", "red"),
      parse: Dd("red", "green", "blue"),
      transform: ({ red: n, green: r, blue: l, alpha: o = 1 }) =>
        "rgba(" +
        Dl.transform(n) +
        ", " +
        Dl.transform(r) +
        ", " +
        Dl.transform(l) +
        ", " +
        gi(mi.transform(o)) +
        ")",
    };
  function L0(n) {
    let r = "",
      l = "",
      o = "",
      u = "";
    return (
      n.length > 5
        ? ((r = n.substring(1, 3)),
          (l = n.substring(3, 5)),
          (o = n.substring(5, 7)),
          (u = n.substring(7, 9)))
        : ((r = n.substring(1, 2)),
          (l = n.substring(2, 3)),
          (o = n.substring(3, 4)),
          (u = n.substring(4, 5)),
          (r += r),
          (l += l),
          (o += o),
          (u += u)),
      {
        red: parseInt(r, 16),
        green: parseInt(l, 16),
        blue: parseInt(o, 16),
        alpha: u ? parseInt(u, 16) / 255 : 1,
      }
    );
  }
  const kl = { test: Ml("#"), parse: L0, transform: Xa.transform },
    vi = (n) => ({
      test: (r) =>
        typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
      parse: parseFloat,
      transform: (r) => `${r}${n}`,
    }),
    ga = vi("deg"),
    Ye = vi("%"),
    Q = vi("px"),
    H0 = vi("vh"),
    Y0 = vi("vw"),
    kd = {
      ...Ye,
      parse: (n) => Ye.parse(n) / 100,
      transform: (n) => Ye.transform(n * 100),
    },
    mn = {
      test: Ml("hsl", "hue"),
      parse: Dd("hue", "saturation", "lightness"),
      transform: ({ hue: n, saturation: r, lightness: l, alpha: o = 1 }) =>
        "hsla(" +
        Math.round(n) +
        ", " +
        Ye.transform(gi(r)) +
        ", " +
        Ye.transform(gi(l)) +
        ", " +
        gi(mi.transform(o)) +
        ")",
    },
    jt = {
      test: (n) => Xa.test(n) || kl.test(n) || mn.test(n),
      parse: (n) =>
        Xa.test(n) ? Xa.parse(n) : mn.test(n) ? mn.parse(n) : kl.parse(n),
      transform: (n) =>
        typeof n == "string"
          ? n
          : n.hasOwnProperty("red")
            ? Xa.transform(n)
            : mn.transform(n),
      getAnimatableNone: (n) => {
        const r = jt.parse(n);
        return ((r.alpha = 0), jt.transform(r));
      },
    },
    q0 =
      /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function G0(n) {
    return (
      isNaN(n) &&
      typeof n == "string" &&
      (n.match(El)?.length || 0) + (n.match(q0)?.length || 0) > 0
    );
  }
  const zd = "number",
    Rd = "color",
    X0 = "var",
    K0 = "var(",
    Od = "${}",
    Z0 =
      /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function yi(n) {
    const r = n.toString(),
      l = [],
      o = { color: [], number: [], var: [] },
      u = [];
    let h = 0;
    const g = r
      .replace(
        Z0,
        (v) => (
          jt.test(v)
            ? (o.color.push(h), u.push(Rd), l.push(jt.parse(v)))
            : v.startsWith(K0)
              ? (o.var.push(h), u.push(X0), l.push(v))
              : (o.number.push(h), u.push(zd), l.push(parseFloat(v))),
          ++h,
          Od
        ),
      )
      .split(Od);
    return { values: l, split: g, indexes: o, types: u };
  }
  function _d(n) {
    return yi(n).values;
  }
  function Cd(n) {
    const { split: r, types: l } = yi(n),
      o = r.length;
    return (u) => {
      let h = "";
      for (let d = 0; d < o; d++)
        if (((h += r[d]), u[d] !== void 0)) {
          const g = l[d];
          g === zd
            ? (h += gi(u[d]))
            : g === Rd
              ? (h += jt.transform(u[d]))
              : (h += u[d]);
        }
      return h;
    };
  }
  const Q0 = (n) =>
    typeof n == "number" ? 0 : jt.test(n) ? jt.getAnimatableNone(n) : n;
  function P0(n) {
    const r = _d(n);
    return Cd(n)(r.map(Q0));
  }
  const Ne = {
    test: G0,
    parse: _d,
    createTransformer: Cd,
    getAnimatableNone: P0,
  };
  function zl(n, r, l) {
    return (
      l < 0 && (l += 1),
      l > 1 && (l -= 1),
      l < 1 / 6
        ? n + (r - n) * 6 * l
        : l < 1 / 2
          ? r
          : l < 2 / 3
            ? n + (r - n) * (2 / 3 - l) * 6
            : n
    );
  }
  function J0({ hue: n, saturation: r, lightness: l, alpha: o }) {
    ((n /= 360), (r /= 100), (l /= 100));
    let u = 0,
      h = 0,
      d = 0;
    if (!r) u = h = d = l;
    else {
      const g = l < 0.5 ? l * (1 + r) : l + r - l * r,
        v = 2 * l - g;
      ((u = zl(v, g, n + 1 / 3)), (h = zl(v, g, n)), (d = zl(v, g, n - 1 / 3)));
    }
    return {
      red: Math.round(u * 255),
      green: Math.round(h * 255),
      blue: Math.round(d * 255),
      alpha: o,
    };
  }
  function zr(n, r) {
    return (l) => (l > 0 ? r : n);
  }
  const Dt = (n, r, l) => n + (r - n) * l,
    Rl = (n, r, l) => {
      const o = n * n,
        u = l * (r * r - o) + o;
      return u < 0 ? 0 : Math.sqrt(u);
    },
    F0 = [kl, Xa, mn],
    W0 = (n) => F0.find((r) => r.test(n));
  function Nd(n) {
    const r = W0(n);
    if (!r) return !1;
    let l = r.parse(n);
    return (r === mn && (l = J0(l)), l);
  }
  const Vd = (n, r) => {
      const l = Nd(n),
        o = Nd(r);
      if (!l || !o) return zr(n, r);
      const u = { ...l };
      return (h) => (
        (u.red = Rl(l.red, o.red, h)),
        (u.green = Rl(l.green, o.green, h)),
        (u.blue = Rl(l.blue, o.blue, h)),
        (u.alpha = Dt(l.alpha, o.alpha, h)),
        Xa.transform(u)
      );
    },
    Ol = new Set(["none", "hidden"]);
  function $0(n, r) {
    return Ol.has(n) ? (l) => (l <= 0 ? n : r) : (l) => (l >= 1 ? r : n);
  }
  function I0(n, r) {
    return (l) => Dt(n, r, l);
  }
  function _l(n) {
    return typeof n == "number"
      ? I0
      : typeof n == "string"
        ? Al(n)
          ? zr
          : jt.test(n)
            ? Vd
            : ay
        : Array.isArray(n)
          ? jd
          : typeof n == "object"
            ? jt.test(n)
              ? Vd
              : ty
            : zr;
  }
  function jd(n, r) {
    const l = [...n],
      o = l.length,
      u = n.map((h, d) => _l(h)(h, r[d]));
    return (h) => {
      for (let d = 0; d < o; d++) l[d] = u[d](h);
      return l;
    };
  }
  function ty(n, r) {
    const l = { ...n, ...r },
      o = {};
    for (const u in l)
      n[u] !== void 0 && r[u] !== void 0 && (o[u] = _l(n[u])(n[u], r[u]));
    return (u) => {
      for (const h in o) l[h] = o[h](u);
      return l;
    };
  }
  function ey(n, r) {
    const l = [],
      o = { color: 0, var: 0, number: 0 };
    for (let u = 0; u < r.values.length; u++) {
      const h = r.types[u],
        d = n.indexes[h][o[h]],
        g = n.values[d] ?? 0;
      ((l[u] = g), o[h]++);
    }
    return l;
  }
  const ay = (n, r) => {
    const l = Ne.createTransformer(r),
      o = yi(n),
      u = yi(r);
    return o.indexes.var.length === u.indexes.var.length &&
      o.indexes.color.length === u.indexes.color.length &&
      o.indexes.number.length >= u.indexes.number.length
      ? (Ol.has(n) && !u.values.length) || (Ol.has(r) && !o.values.length)
        ? $0(n, r)
        : fi(jd(ey(o, u), u.values), l)
      : zr(n, r);
  };
  function Ud(n, r, l) {
    return typeof n == "number" && typeof r == "number" && typeof l == "number"
      ? Dt(n, r, l)
      : _l(n)(n, r);
  }
  const ny = (n) => {
      const r = ({ timestamp: l }) => n(l);
      return {
        start: (l = !0) => St.update(r, l),
        stop: () => ma(r),
        now: () => (Pt.isProcessing ? Pt.timestamp : ne.now()),
      };
    },
    Bd = (n, r, l = 10) => {
      let o = "";
      const u = Math.max(Math.round(r / l), 2);
      for (let h = 0; h < u; h++)
        o += Math.round(n(h / (u - 1)) * 1e4) / 1e4 + ", ";
      return `linear(${o.substring(0, o.length - 2)})`;
    },
    Rr = 2e4;
  function Cl(n) {
    let r = 0;
    const l = 50;
    let o = n.next(r);
    for (; !o.done && r < Rr; ) ((r += l), (o = n.next(r)));
    return r >= Rr ? 1 / 0 : r;
  }
  function iy(n, r = 100, l) {
    const o = l({ ...n, keyframes: [0, r] }),
      u = Math.min(Cl(o), Rr);
    return {
      type: "keyframes",
      ease: (h) => o.next(u * h).value / r,
      duration: Te(u),
    };
  }
  const ry = 5;
  function Ld(n, r, l) {
    const o = Math.max(r - ry, 0);
    return dd(l - n(o), r - o);
  }
  const Rt = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: 0.3,
      visualDuration: 0.3,
      restSpeed: { granular: 0.01, default: 2 },
      restDelta: { granular: 0.005, default: 0.5 },
      minDuration: 0.01,
      maxDuration: 10,
      minDamping: 0.05,
      maxDamping: 1,
    },
    Nl = 0.001;
  function sy({
    duration: n = Rt.duration,
    bounce: r = Rt.bounce,
    velocity: l = Rt.velocity,
    mass: o = Rt.mass,
  }) {
    let u,
      h,
      d = 1 - r;
    ((d = He(Rt.minDamping, Rt.maxDamping, d)),
      (n = He(Rt.minDuration, Rt.maxDuration, Te(n))),
      d < 1
        ? ((u = (m) => {
            const y = m * d,
              w = y * n,
              T = y - l,
              R = Vl(m, d),
              C = Math.exp(-w);
            return Nl - (T / R) * C;
          }),
          (h = (m) => {
            const w = m * d * n,
              T = w * l + l,
              R = Math.pow(d, 2) * Math.pow(m, 2) * n,
              C = Math.exp(-w),
              L = Vl(Math.pow(m, 2), d);
            return ((-u(m) + Nl > 0 ? -1 : 1) * ((T - R) * C)) / L;
          }))
        : ((u = (m) => {
            const y = Math.exp(-m * n),
              w = (m - l) * n + 1;
            return -Nl + y * w;
          }),
          (h = (m) => {
            const y = Math.exp(-m * n),
              w = (l - m) * (n * n);
            return y * w;
          })));
    const g = 5 / n,
      v = oy(u, h, g);
    if (((n = Ce(n)), isNaN(v)))
      return { stiffness: Rt.stiffness, damping: Rt.damping, duration: n };
    {
      const m = Math.pow(v, 2) * o;
      return { stiffness: m, damping: d * 2 * Math.sqrt(o * m), duration: n };
    }
  }
  const ly = 12;
  function oy(n, r, l) {
    let o = l;
    for (let u = 1; u < ly; u++) o = o - n(o) / r(o);
    return o;
  }
  function Vl(n, r) {
    return n * Math.sqrt(1 - r * r);
  }
  const cy = ["duration", "bounce"],
    uy = ["stiffness", "damping", "mass"];
  function Hd(n, r) {
    return r.some((l) => n[l] !== void 0);
  }
  function dy(n) {
    let r = {
      velocity: Rt.velocity,
      stiffness: Rt.stiffness,
      damping: Rt.damping,
      mass: Rt.mass,
      isResolvedFromDuration: !1,
      ...n,
    };
    if (!Hd(n, uy) && Hd(n, cy))
      if (((r.velocity = 0), n.visualDuration)) {
        const l = n.visualDuration,
          o = (2 * Math.PI) / (l * 1.2),
          u = o * o,
          h = 2 * He(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
        r = { ...r, mass: Rt.mass, stiffness: u, damping: h };
      } else {
        const l = sy({ ...n, velocity: 0 });
        ((r = { ...r, ...l, mass: Rt.mass }), (r.isResolvedFromDuration = !0));
      }
    return r;
  }
  function Or(n = Rt.visualDuration, r = Rt.bounce) {
    const l =
      typeof n != "object"
        ? { visualDuration: n, keyframes: [0, 1], bounce: r }
        : n;
    let { restSpeed: o, restDelta: u } = l;
    const h = l.keyframes[0],
      d = l.keyframes[l.keyframes.length - 1],
      g = { done: !1, value: h },
      {
        stiffness: v,
        damping: m,
        mass: y,
        duration: w,
        velocity: T,
        isResolvedFromDuration: R,
      } = dy({ ...l, velocity: -Te(l.velocity || 0) }),
      C = T || 0,
      L = m / (2 * Math.sqrt(v * y)),
      H = d - h,
      X = Te(Math.sqrt(v / y)),
      Y = Math.abs(H) < 5;
    (o || (o = Y ? Rt.restSpeed.granular : Rt.restSpeed.default),
      u || (u = Y ? Rt.restDelta.granular : Rt.restDelta.default));
    let U;
    if (L < 1) {
      const B = Vl(X, L);
      U = (rt) => {
        const dt = Math.exp(-L * X * rt);
        return (
          d -
          dt * (((C + L * X * H) / B) * Math.sin(B * rt) + H * Math.cos(B * rt))
        );
      };
    } else if (L === 1) U = (B) => d - Math.exp(-X * B) * (H + (C + X * H) * B);
    else {
      const B = X * Math.sqrt(L * L - 1);
      U = (rt) => {
        const dt = Math.exp(-L * X * rt),
          et = Math.min(B * rt, 300);
        return (
          d -
          (dt * ((C + L * X * H) * Math.sinh(et) + B * H * Math.cosh(et))) / B
        );
      };
    }
    const J = {
      calculatedDuration: (R && w) || null,
      next: (B) => {
        const rt = U(B);
        if (R) g.done = B >= w;
        else {
          let dt = B === 0 ? C : 0;
          L < 1 && (dt = B === 0 ? Ce(C) : Ld(U, B, rt));
          const et = Math.abs(dt) <= o,
            Tt = Math.abs(d - rt) <= u;
          g.done = et && Tt;
        }
        return ((g.value = g.done ? d : rt), g);
      },
      toString: () => {
        const B = Math.min(Cl(J), Rr),
          rt = Bd((dt) => J.next(B * dt).value, B, 30);
        return B + "ms " + rt;
      },
      toTransition: () => {},
    };
    return J;
  }
  Or.applyToOptions = (n) => {
    const r = iy(n, 100, Or);
    return (
      (n.ease = r.ease),
      (n.duration = Ce(r.duration)),
      (n.type = "keyframes"),
      n
    );
  };
  function jl({
    keyframes: n,
    velocity: r = 0,
    power: l = 0.8,
    timeConstant: o = 325,
    bounceDamping: u = 10,
    bounceStiffness: h = 500,
    modifyTarget: d,
    min: g,
    max: v,
    restDelta: m = 0.5,
    restSpeed: y,
  }) {
    const w = n[0],
      T = { done: !1, value: w },
      R = (et) => (g !== void 0 && et < g) || (v !== void 0 && et > v),
      C = (et) =>
        g === void 0
          ? v
          : v === void 0 || Math.abs(g - et) < Math.abs(v - et)
            ? g
            : v;
    let L = l * r;
    const H = w + L,
      X = d === void 0 ? H : d(H);
    X !== H && (L = X - w);
    const Y = (et) => -L * Math.exp(-et / o),
      U = (et) => X + Y(et),
      J = (et) => {
        const Tt = Y(et),
          Ht = U(et);
        ((T.done = Math.abs(Tt) <= m), (T.value = T.done ? X : Ht));
      };
    let B, rt;
    const dt = (et) => {
      R(T.value) &&
        ((B = et),
        (rt = Or({
          keyframes: [T.value, C(T.value)],
          velocity: Ld(U, et, T.value),
          damping: u,
          stiffness: h,
          restDelta: m,
          restSpeed: y,
        })));
    };
    return (
      dt(0),
      {
        calculatedDuration: null,
        next: (et) => {
          let Tt = !1;
          return (
            !rt && B === void 0 && ((Tt = !0), J(et), dt(et)),
            B !== void 0 && et >= B ? rt.next(et - B) : (!Tt && J(et), T)
          );
        },
      }
    );
  }
  function fy(n, r, l) {
    const o = [],
      u = l || Fe.mix || Ud,
      h = n.length - 1;
    for (let d = 0; d < h; d++) {
      let g = u(n[d], n[d + 1]);
      if (r) {
        const v = Array.isArray(r) ? r[d] || Se : r;
        g = fi(v, g);
      }
      o.push(g);
    }
    return o;
  }
  function hy(n, r, { clamp: l = !0, ease: o, mixer: u } = {}) {
    const h = n.length;
    if ((bl(h === r.length), h === 1)) return () => r[0];
    if (h === 2 && r[0] === r[1]) return () => r[1];
    const d = n[0] === n[1];
    n[0] > n[h - 1] && ((n = [...n].reverse()), (r = [...r].reverse()));
    const g = fy(r, o, u),
      v = g.length,
      m = (y) => {
        if (d && y < n[0]) return r[0];
        let w = 0;
        if (v > 1) for (; w < n.length - 2 && !(y < n[w + 1]); w++);
        const T = hi(n[w], n[w + 1], y);
        return g[w](T);
      };
    return l ? (y) => m(He(n[0], n[h - 1], y)) : m;
  }
  function py(n, r) {
    const l = n[n.length - 1];
    for (let o = 1; o <= r; o++) {
      const u = hi(0, r, o);
      n.push(Dt(l, 1, u));
    }
  }
  function my(n) {
    const r = [0];
    return (py(r, n.length - 1), r);
  }
  function gy(n, r) {
    return n.map((l) => l * r);
  }
  function vy(n, r) {
    return n.map(() => r || xd).splice(0, n.length - 1);
  }
  function bi({
    duration: n = 300,
    keyframes: r,
    times: l,
    ease: o = "easeInOut",
  }) {
    const u = k0(o) ? o.map(Sd) : Sd(o),
      h = { done: !1, value: r[0] },
      d = gy(l && l.length === r.length ? l : my(r), n),
      g = hy(d, r, { ease: Array.isArray(u) ? u : vy(r, u) });
    return {
      calculatedDuration: n,
      next: (v) => ((h.value = g(v)), (h.done = v >= n), h),
    };
  }
  const yy = (n) => n !== null;
  function Ul(n, { repeat: r, repeatType: l = "loop" }, o, u = 1) {
    const h = n.filter(yy),
      g = u < 0 || (r && l !== "loop" && r % 2 === 1) ? 0 : h.length - 1;
    return !g || o === void 0 ? h[g] : o;
  }
  const by = { decay: jl, inertia: jl, tween: bi, keyframes: bi, spring: Or };
  function Yd(n) {
    typeof n.type == "string" && (n.type = by[n.type]);
  }
  class Bl {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((r) => {
        this.resolve = r;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(r, l) {
      return this.finished.then(r, l);
    }
  }
  const xy = (n) => n / 100;
  class Ll extends Bl {
    constructor(r) {
      (super(),
        (this.state = "idle"),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.stop = () => {
          const { motionValue: l } = this.options;
          (l && l.updatedAt !== ne.now() && this.tick(ne.now()),
            (this.isStopped = !0),
            this.state !== "idle" &&
              (this.teardown(), this.options.onStop?.()));
        }),
        (this.options = r),
        this.initAnimation(),
        this.play(),
        r.autoplay === !1 && this.pause());
    }
    initAnimation() {
      const { options: r } = this;
      Yd(r);
      const {
        type: l = bi,
        repeat: o = 0,
        repeatDelay: u = 0,
        repeatType: h,
        velocity: d = 0,
      } = r;
      let { keyframes: g } = r;
      const v = l || bi;
      v !== bi &&
        typeof g[0] != "number" &&
        ((this.mixKeyframes = fi(xy, Ud(g[0], g[1]))), (g = [0, 100]));
      const m = v({ ...r, keyframes: g });
      (h === "mirror" &&
        (this.mirroredGenerator = v({
          ...r,
          keyframes: [...g].reverse(),
          velocity: -d,
        })),
        m.calculatedDuration === null && (m.calculatedDuration = Cl(m)));
      const { calculatedDuration: y } = m;
      ((this.calculatedDuration = y),
        (this.resolvedDuration = y + u),
        (this.totalDuration = this.resolvedDuration * (o + 1) - u),
        (this.generator = m));
    }
    updateTime(r) {
      const l = Math.round(r - this.startTime) * this.playbackSpeed;
      this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = l);
    }
    tick(r, l = !1) {
      const {
        generator: o,
        totalDuration: u,
        mixKeyframes: h,
        mirroredGenerator: d,
        resolvedDuration: g,
        calculatedDuration: v,
      } = this;
      if (this.startTime === null) return o.next(0);
      const {
        delay: m = 0,
        keyframes: y,
        repeat: w,
        repeatType: T,
        repeatDelay: R,
        type: C,
        onUpdate: L,
        finalKeyframe: H,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, r))
        : this.speed < 0 &&
          (this.startTime = Math.min(r - u / this.speed, this.startTime)),
        l ? (this.currentTime = r) : this.updateTime(r));
      const X = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
        Y = this.playbackSpeed >= 0 ? X < 0 : X > u;
      ((this.currentTime = Math.max(X, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = u));
      let U = this.currentTime,
        J = o;
      if (w) {
        const et = Math.min(this.currentTime, u) / g;
        let Tt = Math.floor(et),
          Ht = et % 1;
        (!Ht && et >= 1 && (Ht = 1),
          Ht === 1 && Tt--,
          (Tt = Math.min(Tt, w + 1)),
          Tt % 2 &&
            (T === "reverse"
              ? ((Ht = 1 - Ht), R && (Ht -= R / g))
              : T === "mirror" && (J = d)),
          (U = He(0, 1, Ht) * g));
      }
      const B = Y ? { done: !1, value: y[0] } : J.next(U);
      h && !Y && (B.value = h(B.value));
      let { done: rt } = B;
      !Y &&
        v !== null &&
        (rt =
          this.playbackSpeed >= 0
            ? this.currentTime >= u
            : this.currentTime <= 0);
      const dt =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && rt));
      return (
        dt && C !== jl && (B.value = Ul(y, this.options, H, this.speed)),
        L && L(B.value),
        dt && this.finish(),
        B
      );
    }
    then(r, l) {
      return this.finished.then(r, l);
    }
    get duration() {
      return Te(this.calculatedDuration);
    }
    get iterationDuration() {
      const { delay: r = 0 } = this.options || {};
      return this.duration + Te(r);
    }
    get time() {
      return Te(this.currentTime);
    }
    set time(r) {
      ((r = Ce(r)),
        (this.currentTime = r),
        this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
          ? (this.holdTime = r)
          : this.driver &&
            (this.startTime = this.driver.now() - r / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0),
            (this.state = "paused"),
            (this.holdTime = r),
            this.tick(r)));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(r) {
      const l = this.playbackSpeed !== r;
      (l && this.driver && this.updateTime(ne.now()),
        (this.playbackSpeed = r),
        l && this.driver && (this.time = Te(this.currentTime)));
    }
    play() {
      if (this.isStopped) return;
      const { driver: r = ny, startTime: l } = this.options;
      (this.driver || (this.driver = r((u) => this.tick(u))),
        this.options.onPlay?.());
      const o = this.driver.now();
      (this.state === "finished"
        ? (this.updateFinished(), (this.startTime = o))
        : this.holdTime !== null
          ? (this.startTime = o - this.holdTime)
          : this.startTime || (this.startTime = l ?? o),
        this.state === "finished" &&
          this.speed < 0 &&
          (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start());
    }
    pause() {
      ((this.state = "paused"),
        this.updateTime(ne.now()),
        (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== "running" && this.play(),
        (this.state = "finished"),
        (this.holdTime = null));
    }
    finish() {
      (this.notifyFinished(),
        this.teardown(),
        (this.state = "finished"),
        this.options.onComplete?.());
    }
    cancel() {
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.());
    }
    teardown() {
      ((this.state = "idle"),
        this.stopDriver(),
        (this.startTime = this.holdTime = null));
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(r) {
      return ((this.startTime = 0), this.tick(r, !0));
    }
    attachTimeline(r) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = "keyframes"),
          (this.options.ease = "linear"),
          this.initAnimation()),
        this.driver?.stop(),
        r.observe(this)
      );
    }
  }
  function wy(n) {
    for (let r = 1; r < n.length; r++) n[r] ?? (n[r] = n[r - 1]);
  }
  const Ka = (n) => (n * 180) / Math.PI,
    Hl = (n) => {
      const r = Ka(Math.atan2(n[1], n[0]));
      return Yl(r);
    },
    Sy = {
      x: 4,
      y: 5,
      translateX: 4,
      translateY: 5,
      scaleX: 0,
      scaleY: 3,
      scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
      rotate: Hl,
      rotateZ: Hl,
      skewX: (n) => Ka(Math.atan(n[1])),
      skewY: (n) => Ka(Math.atan(n[2])),
      skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
    },
    Yl = (n) => ((n = n % 360), n < 0 && (n += 360), n),
    qd = Hl,
    Gd = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
    Xd = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
    Ty = {
      x: 12,
      y: 13,
      z: 14,
      translateX: 12,
      translateY: 13,
      translateZ: 14,
      scaleX: Gd,
      scaleY: Xd,
      scale: (n) => (Gd(n) + Xd(n)) / 2,
      rotateX: (n) => Yl(Ka(Math.atan2(n[6], n[5]))),
      rotateY: (n) => Yl(Ka(Math.atan2(-n[2], n[0]))),
      rotateZ: qd,
      rotate: qd,
      skewX: (n) => Ka(Math.atan(n[4])),
      skewY: (n) => Ka(Math.atan(n[1])),
      skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
    };
  function ql(n) {
    return n.includes("scale") ? 1 : 0;
  }
  function Gl(n, r) {
    if (!n || n === "none") return ql(r);
    const l = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, u;
    if (l) ((o = Ty), (u = l));
    else {
      const g = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      ((o = Sy), (u = g));
    }
    if (!u) return ql(r);
    const h = o[r],
      d = u[1].split(",").map(Ey);
    return typeof h == "function" ? h(d) : d[h];
  }
  const Ay = (n, r) => {
    const { transform: l = "none" } = getComputedStyle(n);
    return Gl(l, r);
  };
  function Ey(n) {
    return parseFloat(n.trim());
  }
  const gn = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    vn = new Set(gn),
    Kd = (n) => n === pn || n === Q,
    My = new Set(["x", "y", "z"]),
    Dy = gn.filter((n) => !My.has(n));
  function ky(n) {
    const r = [];
    return (
      Dy.forEach((l) => {
        const o = n.getValue(l);
        o !== void 0 &&
          (r.push([l, o.get()]), o.set(l.startsWith("scale") ? 1 : 0));
      }),
      r
    );
  }
  const va = {
    width: ({ x: n }, { paddingLeft: r = "0", paddingRight: l = "0" }) =>
      n.max - n.min - parseFloat(r) - parseFloat(l),
    height: ({ y: n }, { paddingTop: r = "0", paddingBottom: l = "0" }) =>
      n.max - n.min - parseFloat(r) - parseFloat(l),
    top: (n, { top: r }) => parseFloat(r),
    left: (n, { left: r }) => parseFloat(r),
    bottom: ({ y: n }, { top: r }) => parseFloat(r) + (n.max - n.min),
    right: ({ x: n }, { left: r }) => parseFloat(r) + (n.max - n.min),
    x: (n, { transform: r }) => Gl(r, "x"),
    y: (n, { transform: r }) => Gl(r, "y"),
  };
  ((va.translateX = va.x), (va.translateY = va.y));
  const Za = new Set();
  let Xl = !1,
    Kl = !1,
    Zl = !1;
  function Zd() {
    if (Kl) {
      const n = Array.from(Za).filter((o) => o.needsMeasurement),
        r = new Set(n.map((o) => o.element)),
        l = new Map();
      (r.forEach((o) => {
        const u = ky(o);
        u.length && (l.set(o, u), o.render());
      }),
        n.forEach((o) => o.measureInitialState()),
        r.forEach((o) => {
          o.render();
          const u = l.get(o);
          u &&
            u.forEach(([h, d]) => {
              o.getValue(h)?.set(d);
            });
        }),
        n.forEach((o) => o.measureEndState()),
        n.forEach((o) => {
          o.suspendedScrollY !== void 0 &&
            window.scrollTo(0, o.suspendedScrollY);
        }));
    }
    ((Kl = !1), (Xl = !1), Za.forEach((n) => n.complete(Zl)), Za.clear());
  }
  function Qd() {
    Za.forEach((n) => {
      (n.readKeyframes(), n.needsMeasurement && (Kl = !0));
    });
  }
  function zy() {
    ((Zl = !0), Qd(), Zd(), (Zl = !1));
  }
  class Ql {
    constructor(r, l, o, u, h, d = !1) {
      ((this.state = "pending"),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...r]),
        (this.onComplete = l),
        (this.name = o),
        (this.motionValue = u),
        (this.element = h),
        (this.isAsync = d));
    }
    scheduleResolve() {
      ((this.state = "scheduled"),
        this.isAsync
          ? (Za.add(this),
            Xl || ((Xl = !0), St.read(Qd), St.resolveKeyframes(Zd)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: r,
        name: l,
        element: o,
        motionValue: u,
      } = this;
      if (r[0] === null) {
        const h = u?.get(),
          d = r[r.length - 1];
        if (h !== void 0) r[0] = h;
        else if (o && l) {
          const g = o.readValue(l, d);
          g != null && (r[0] = g);
        }
        (r[0] === void 0 && (r[0] = d), u && h === void 0 && u.set(r[0]));
      }
      wy(r);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(r = !1) {
      ((this.state = "complete"),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r),
        Za.delete(this));
    }
    cancel() {
      this.state === "scheduled" && (Za.delete(this), (this.state = "pending"));
    }
    resume() {
      this.state === "pending" && this.scheduleResolve();
    }
  }
  const Ry = (n) => n.startsWith("--");
  function Pd(n, r, l) {
    Ry(r) ? n.style.setProperty(r, l) : (n.style[r] = l);
  }
  const Oy = {};
  function Jd(n, r) {
    const l = ud(n);
    return () => Oy[r] ?? l();
  }
  const _y = Jd(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    Fd = Jd(() => {
      try {
        document
          .createElement("div")
          .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch {
        return !1;
      }
      return !0;
    }, "linearEasing"),
    xi = ([n, r, l, o]) => `cubic-bezier(${n}, ${r}, ${l}, ${o})`,
    Wd = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: xi([0, 0.65, 0.55, 1]),
      circOut: xi([0.55, 0, 1, 0.45]),
      backIn: xi([0.31, 0.01, 0.66, -0.59]),
      backOut: xi([0.33, 1.53, 0.69, 0.99]),
    };
  function $d(n, r) {
    if (n)
      return typeof n == "function"
        ? Fd()
          ? Bd(n, r)
          : "ease-out"
        : wd(n)
          ? xi(n)
          : Array.isArray(n)
            ? n.map((l) => $d(l, r) || Wd.easeOut)
            : Wd[n];
  }
  function Cy(
    n,
    r,
    l,
    {
      delay: o = 0,
      duration: u = 300,
      repeat: h = 0,
      repeatType: d = "loop",
      ease: g = "easeOut",
      times: v,
    } = {},
    m = void 0,
  ) {
    const y = { [r]: l };
    v && (y.offset = v);
    const w = $d(g, u);
    Array.isArray(w) && (y.easing = w);
    const T = {
      delay: o,
      duration: u,
      easing: Array.isArray(w) ? "linear" : w,
      fill: "both",
      iterations: h + 1,
      direction: d === "reverse" ? "alternate" : "normal",
    };
    return (m && (T.pseudoElement = m), n.animate(y, T));
  }
  function Id(n) {
    return typeof n == "function" && "applyToOptions" in n;
  }
  function Ny({ type: n, ...r }) {
    return Id(n) && Fd()
      ? n.applyToOptions(r)
      : (r.duration ?? (r.duration = 300), r.ease ?? (r.ease = "easeOut"), r);
  }
  class tf extends Bl {
    constructor(r) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !r)
      )
        return;
      const {
        element: l,
        name: o,
        keyframes: u,
        pseudoElement: h,
        allowFlatten: d = !1,
        finalKeyframe: g,
        onComplete: v,
      } = r;
      ((this.isPseudoElement = !!h),
        (this.allowFlatten = d),
        (this.options = r),
        bl(typeof r.type != "string"));
      const m = Ny(r);
      ((this.animation = Cy(l, o, u, m, h)),
        m.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !h)) {
            const y = Ul(u, this.options, g, this.speed);
            (this.updateMotionValue && this.updateMotionValue(y),
              Pd(l, o, y),
              this.animation.cancel());
          }
          (v?.(), this.notifyFinished());
        }));
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === "finished" && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      const { state: r } = this;
      r === "idle" ||
        r === "finished" ||
        (this.updateMotionValue
          ? this.updateMotionValue()
          : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      const r = this.options?.element;
      !this.isPseudoElement &&
        r?.isConnected &&
        this.animation.commitStyles?.();
    }
    get duration() {
      const r = this.animation.effect?.getComputedTiming?.().duration || 0;
      return Te(Number(r));
    }
    get iterationDuration() {
      const { delay: r = 0 } = this.options || {};
      return this.duration + Te(r);
    }
    get time() {
      return Te(Number(this.animation.currentTime) || 0);
    }
    set time(r) {
      const l = this.finishedTime !== null;
      ((this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = Ce(r)),
        l && this.animation.pause());
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(r) {
      (r < 0 && (this.finishedTime = null), (this.animation.playbackRate = r));
    }
    get state() {
      return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(r) {
      this.manualStartTime = this.animation.startTime = r;
    }
    attachTimeline({ timeline: r, rangeStart: l, rangeEnd: o, observe: u }) {
      return (
        this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: "linear" }),
        (this.animation.onfinish = null),
        r && _y()
          ? ((this.animation.timeline = r),
            l && (this.animation.rangeStart = l),
            o && (this.animation.rangeEnd = o),
            Se)
          : u(this)
      );
    }
  }
  const ef = { anticipate: vd, backInOut: gd, circInOut: bd };
  function Vy(n) {
    return n in ef;
  }
  function jy(n) {
    typeof n.ease == "string" && Vy(n.ease) && (n.ease = ef[n.ease]);
  }
  const Pl = 10;
  class Uy extends tf {
    constructor(r) {
      (jy(r),
        Yd(r),
        super(r),
        r.startTime !== void 0 && (this.startTime = r.startTime),
        (this.options = r));
    }
    updateMotionValue(r) {
      const {
        motionValue: l,
        onUpdate: o,
        onComplete: u,
        element: h,
        ...d
      } = this.options;
      if (!l) return;
      if (r !== void 0) {
        l.set(r);
        return;
      }
      const g = new Ll({ ...d, autoplay: !1 }),
        v = Math.max(Pl, ne.now() - this.startTime),
        m = He(0, Pl, v - Pl),
        y = g.sample(v).value,
        { name: w } = this.options;
      (h && w && Pd(h, w, y),
        l.setWithVelocity(g.sample(Math.max(0, v - m)).value, y, m),
        g.stop());
    }
  }
  const af = (n, r) =>
    r === "zIndex"
      ? !1
      : !!(
          typeof n == "number" ||
          Array.isArray(n) ||
          (typeof n == "string" &&
            (Ne.test(n) || n === "0") &&
            !n.startsWith("url("))
        );
  function By(n) {
    const r = n[0];
    if (n.length === 1) return !0;
    for (let l = 0; l < n.length; l++) if (n[l] !== r) return !0;
  }
  function Ly(n, r, l, o) {
    const u = n[0];
    if (u === null) return !1;
    if (r === "display" || r === "visibility") return !0;
    const h = n[n.length - 1],
      d = af(u, r),
      g = af(h, r);
    return !d || !g ? !1 : By(n) || ((l === "spring" || Id(l)) && o);
  }
  function Jl(n) {
    ((n.duration = 0), (n.type = "keyframes"));
  }
  const Hy = new Set(["opacity", "clipPath", "filter", "transform"]),
    Yy = ud(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function qy(n) {
    const {
      motionValue: r,
      name: l,
      repeatDelay: o,
      repeatType: u,
      damping: h,
      type: d,
    } = n;
    if (!(r?.owner?.current instanceof HTMLElement)) return !1;
    const { onUpdate: v, transformTemplate: m } = r.owner.getProps();
    return (
      Yy() &&
      l &&
      Hy.has(l) &&
      (l !== "transform" || !m) &&
      !v &&
      !o &&
      u !== "mirror" &&
      h !== 0 &&
      d !== "inertia"
    );
  }
  const Gy = 40;
  class Xy extends Bl {
    constructor({
      autoplay: r = !0,
      delay: l = 0,
      type: o = "keyframes",
      repeat: u = 0,
      repeatDelay: h = 0,
      repeatType: d = "loop",
      keyframes: g,
      name: v,
      motionValue: m,
      element: y,
      ...w
    }) {
      (super(),
        (this.stop = () => {
          (this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel());
        }),
        (this.createdAt = ne.now()));
      const T = {
          autoplay: r,
          delay: l,
          type: o,
          repeat: u,
          repeatDelay: h,
          repeatType: d,
          name: v,
          motionValue: m,
          element: y,
          ...w,
        },
        R = y?.KeyframeResolver || Ql;
      ((this.keyframeResolver = new R(
        g,
        (C, L, H) => this.onKeyframesResolved(C, L, T, !H),
        v,
        m,
        y,
      )),
        this.keyframeResolver?.scheduleResolve());
    }
    onKeyframesResolved(r, l, o, u) {
      this.keyframeResolver = void 0;
      const {
        name: h,
        type: d,
        velocity: g,
        delay: v,
        isHandoff: m,
        onUpdate: y,
      } = o;
      ((this.resolvedAt = ne.now()),
        Ly(r, h, d, g) ||
          ((Fe.instantAnimations || !v) && y?.(Ul(r, o, l)),
          (r[0] = r[r.length - 1]),
          Jl(o),
          (o.repeat = 0)));
      const T = {
          startTime: u
            ? this.resolvedAt
              ? this.resolvedAt - this.createdAt > Gy
                ? this.resolvedAt
                : this.createdAt
              : this.createdAt
            : void 0,
          finalKeyframe: l,
          ...o,
          keyframes: r,
        },
        R = !m && qy(T),
        C = T.motionValue?.owner?.current,
        L = R ? new Uy({ ...T, element: C }) : new Ll(T);
      (L.finished
        .then(() => {
          this.notifyFinished();
        })
        .catch(Se),
        this.pendingTimeline &&
          ((this.stopTimeline = L.attachTimeline(this.pendingTimeline)),
          (this.pendingTimeline = void 0)),
        (this._animation = L));
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(r, l) {
      return this.finished.finally(r).then(() => {});
    }
    get animation() {
      return (
        this._animation || (this.keyframeResolver?.resume(), zy()),
        this._animation
      );
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(r) {
      this.animation.time = r;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(r) {
      this.animation.speed = r;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(r) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(r))
          : (this.pendingTimeline = r),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      (this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel());
    }
  }
  function nf(n, r, l, o = 0, u = 1) {
    const h = Array.from(n)
        .sort((m, y) => m.sortNodePosition(y))
        .indexOf(r),
      d = n.size,
      g = (d - 1) * o;
    return typeof l == "function" ? l(h, d) : u === 1 ? h * o : g - h * o;
  }
  const Ky = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function Zy(n) {
    const r = Ky.exec(n);
    if (!r) return [,];
    const [, l, o, u] = r;
    return [`--${l ?? o}`, u];
  }
  function rf(n, r, l = 1) {
    const [o, u] = Zy(n);
    if (!o) return;
    const h = window.getComputedStyle(r).getPropertyValue(o);
    if (h) {
      const d = h.trim();
      return ld(d) ? parseFloat(d) : d;
    }
    return Al(u) ? rf(u, r, l + 1) : u;
  }
  const Qy = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    Py = (n) => ({
      type: "spring",
      stiffness: 550,
      damping: n === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    }),
    Jy = { type: "keyframes", duration: 0.8 },
    Fy = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    Wy = (n, { keyframes: r }) =>
      r.length > 2
        ? Jy
        : vn.has(n)
          ? n.startsWith("scale")
            ? Py(r[1])
            : Qy
          : Fy,
    $y = (n) => n !== null;
  function Iy(n, { repeat: r, repeatType: l = "loop" }, o) {
    const u = n.filter($y),
      h = r && l !== "loop" && r % 2 === 1 ? 0 : u.length - 1;
    return u[h];
  }
  function sf(n, r) {
    if (n?.inherit && r) {
      const { inherit: l, ...o } = n;
      return { ...r, ...o };
    }
    return n;
  }
  function Fl(n, r) {
    const l = n?.[r] ?? n?.default ?? n;
    return l !== n ? sf(l, n) : l;
  }
  function tb({
    when: n,
    delay: r,
    delayChildren: l,
    staggerChildren: o,
    staggerDirection: u,
    repeat: h,
    repeatType: d,
    repeatDelay: g,
    from: v,
    elapsed: m,
    ...y
  }) {
    return !!Object.keys(y).length;
  }
  const Wl =
    (n, r, l, o = {}, u, h) =>
    (d) => {
      const g = Fl(o, n) || {},
        v = g.delay || o.delay || 0;
      let { elapsed: m = 0 } = o;
      m = m - Ce(v);
      const y = {
        keyframes: Array.isArray(l) ? l : [null, l],
        ease: "easeOut",
        velocity: r.getVelocity(),
        ...g,
        delay: -m,
        onUpdate: (T) => {
          (r.set(T), g.onUpdate && g.onUpdate(T));
        },
        onComplete: () => {
          (d(), g.onComplete && g.onComplete());
        },
        name: n,
        motionValue: r,
        element: h ? void 0 : u,
      };
      (tb(g) || Object.assign(y, Wy(n, y)),
        y.duration && (y.duration = Ce(y.duration)),
        y.repeatDelay && (y.repeatDelay = Ce(y.repeatDelay)),
        y.from !== void 0 && (y.keyframes[0] = y.from));
      let w = !1;
      if (
        ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
          (Jl(y), y.delay === 0 && (w = !0)),
        (Fe.instantAnimations ||
          Fe.skipAnimations ||
          u?.shouldSkipAnimations) &&
          ((w = !0), Jl(y), (y.delay = 0)),
        (y.allowFlatten = !g.type && !g.ease),
        w && !h && r.get() !== void 0)
      ) {
        const T = Iy(y.keyframes, g);
        if (T !== void 0) {
          St.update(() => {
            (y.onUpdate(T), y.onComplete());
          });
          return;
        }
      }
      return g.isSync ? new Ll(y) : new Xy(y);
    };
  function lf(n) {
    const r = [{}, {}];
    return (
      n?.values.forEach((l, o) => {
        ((r[0][o] = l.get()), (r[1][o] = l.getVelocity()));
      }),
      r
    );
  }
  function $l(n, r, l, o) {
    if (typeof r == "function") {
      const [u, h] = lf(o);
      r = r(l !== void 0 ? l : n.custom, u, h);
    }
    if (
      (typeof r == "string" && (r = n.variants && n.variants[r]),
      typeof r == "function")
    ) {
      const [u, h] = lf(o);
      r = r(l !== void 0 ? l : n.custom, u, h);
    }
    return r;
  }
  function yn(n, r, l) {
    const o = n.getProps();
    return $l(o, r, l !== void 0 ? l : o.custom, n);
  }
  const of = new Set([
      "width",
      "height",
      "top",
      "left",
      "right",
      "bottom",
      ...gn,
    ]),
    cf = 30,
    eb = (n) => !isNaN(parseFloat(n));
  class ab {
    constructor(r, l = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (o) => {
          const u = ne.now();
          if (
            (this.updatedAt !== u && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(o),
            this.current !== this.prev &&
              (this.events.change?.notify(this.current), this.dependents))
          )
            for (const h of this.dependents) h.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(r),
        (this.owner = l.owner));
    }
    setCurrent(r) {
      ((this.current = r),
        (this.updatedAt = ne.now()),
        this.canTrackVelocity === null &&
          r !== void 0 &&
          (this.canTrackVelocity = eb(this.current)));
    }
    setPrevFrameValue(r = this.current) {
      ((this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(r) {
      return this.on("change", r);
    }
    on(r, l) {
      this.events[r] || (this.events[r] = new xl());
      const o = this.events[r].add(l);
      return r === "change"
        ? () => {
            (o(),
              St.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : o;
    }
    clearListeners() {
      for (const r in this.events) this.events[r].clear();
    }
    attach(r, l) {
      ((this.passiveEffect = r), (this.stopPassiveEffect = l));
    }
    set(r) {
      this.passiveEffect
        ? this.passiveEffect(r, this.updateAndNotify)
        : this.updateAndNotify(r);
    }
    setWithVelocity(r, l, o) {
      (this.set(l),
        (this.prev = void 0),
        (this.prevFrameValue = r),
        (this.prevUpdatedAt = this.updatedAt - o));
    }
    jump(r, l = !0) {
      (this.updateAndNotify(r),
        (this.prev = r),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        l && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(r) {
      (this.dependents || (this.dependents = new Set()),
        this.dependents.add(r));
    }
    removeDependent(r) {
      this.dependents && this.dependents.delete(r);
    }
    get() {
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const r = ne.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        r - this.updatedAt > cf
      )
        return 0;
      const l = Math.min(this.updatedAt - this.prevUpdatedAt, cf);
      return dd(parseFloat(this.current) - parseFloat(this.prevFrameValue), l);
    }
    start(r) {
      return (
        this.stop(),
        new Promise((l) => {
          ((this.hasAnimated = !0),
            (this.animation = r(l)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  }
  function bn(n, r) {
    return new ab(n, r);
  }
  const Il = (n) => Array.isArray(n);
  function nb(n, r, l) {
    n.hasValue(r) ? n.getValue(r).set(l) : n.addValue(r, bn(l));
  }
  function ib(n) {
    return Il(n) ? n[n.length - 1] || 0 : n;
  }
  function rb(n, r) {
    const l = yn(n, r);
    let { transitionEnd: o = {}, transition: u = {}, ...h } = l || {};
    h = { ...h, ...o };
    for (const d in h) {
      const g = ib(h[d]);
      nb(n, d, g);
    }
  }
  const te = (n) => !!(n && n.getVelocity);
  function sb(n) {
    return !!(te(n) && n.add);
  }
  function to(n, r) {
    const l = n.getValue("willChange");
    if (sb(l)) return l.add(r);
    if (!l && Fe.WillChange) {
      const o = new Fe.WillChange("auto");
      (n.addValue("willChange", o), o.add(r));
    }
  }
  function eo(n) {
    return n.replace(/([A-Z])/g, (r) => `-${r.toLowerCase()}`);
  }
  const uf = "data-" + eo("framerAppearId");
  function df(n) {
    return n.props[uf];
  }
  function lb({ protectedKeys: n, needsAnimating: r }, l) {
    const o = n.hasOwnProperty(l) && r[l] !== !0;
    return ((r[l] = !1), o);
  }
  function ff(n, r, { delay: l = 0, transitionOverride: o, type: u } = {}) {
    let { transition: h, transitionEnd: d, ...g } = r;
    const v = n.getDefaultTransition();
    h = h ? sf(h, v) : v;
    const m = h?.reduceMotion;
    o && (h = o);
    const y = [],
      w = u && n.animationState && n.animationState.getState()[u];
    for (const T in g) {
      const R = n.getValue(T, n.latestValues[T] ?? null),
        C = g[T];
      if (C === void 0 || (w && lb(w, T))) continue;
      const L = { delay: l, ...Fl(h || {}, T) },
        H = R.get();
      if (
        H !== void 0 &&
        !R.isAnimating &&
        !Array.isArray(C) &&
        C === H &&
        !L.velocity
      )
        continue;
      let X = !1;
      if (window.MotionHandoffAnimation) {
        const J = df(n);
        if (J) {
          const B = window.MotionHandoffAnimation(J, T, St);
          B !== null && ((L.startTime = B), (X = !0));
        }
      }
      to(n, T);
      const Y = m ?? n.shouldReduceMotion;
      R.start(Wl(T, R, C, Y && of.has(T) ? { type: !1 } : L, n, X));
      const U = R.animation;
      U && y.push(U);
    }
    if (d) {
      const T = () =>
        St.update(() => {
          d && rb(n, d);
        });
      y.length ? Promise.all(y).then(T) : T();
    }
    return y;
  }
  function ao(n, r, l = {}) {
    const o = yn(n, r, l.type === "exit" ? n.presenceContext?.custom : void 0);
    let { transition: u = n.getDefaultTransition() || {} } = o || {};
    l.transitionOverride && (u = l.transitionOverride);
    const h = o ? () => Promise.all(ff(n, o, l)) : () => Promise.resolve(),
      d =
        n.variantChildren && n.variantChildren.size
          ? (v = 0) => {
              const {
                delayChildren: m = 0,
                staggerChildren: y,
                staggerDirection: w,
              } = u;
              return ob(n, r, v, m, y, w, l);
            }
          : () => Promise.resolve(),
      { when: g } = u;
    if (g) {
      const [v, m] = g === "beforeChildren" ? [h, d] : [d, h];
      return v().then(() => m());
    } else return Promise.all([h(), d(l.delay)]);
  }
  function ob(n, r, l = 0, o = 0, u = 0, h = 1, d) {
    const g = [];
    for (const v of n.variantChildren)
      (v.notify("AnimationStart", r),
        g.push(
          ao(v, r, {
            ...d,
            delay:
              l +
              (typeof o == "function" ? 0 : o) +
              nf(n.variantChildren, v, o, u, h),
          }).then(() => v.notify("AnimationComplete", r)),
        ));
    return Promise.all(g);
  }
  function cb(n, r, l = {}) {
    n.notify("AnimationStart", r);
    let o;
    if (Array.isArray(r)) {
      const u = r.map((h) => ao(n, h, l));
      o = Promise.all(u);
    } else if (typeof r == "string") o = ao(n, r, l);
    else {
      const u = typeof r == "function" ? yn(n, r, l.custom) : r;
      o = Promise.all(ff(n, u, l));
    }
    return o.then(() => {
      n.notify("AnimationComplete", r);
    });
  }
  const ub = { test: (n) => n === "auto", parse: (n) => n },
    hf = (n) => (r) => r.test(n),
    pf = [pn, Q, Ye, ga, Y0, H0, ub],
    mf = (n) => pf.find(hf(n));
  function db(n) {
    return typeof n == "number"
      ? n === 0
      : n !== null
        ? n === "none" || n === "0" || cd(n)
        : !0;
  }
  const fb = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function hb(n) {
    const [r, l] = n.slice(0, -1).split("(");
    if (r === "drop-shadow") return n;
    const [o] = l.match(El) || [];
    if (!o) return n;
    const u = l.replace(o, "");
    let h = fb.has(r) ? 1 : 0;
    return (o !== l && (h *= 100), r + "(" + h + u + ")");
  }
  const pb = /\b([a-z-]*)\(.*?\)/gu,
    no = {
      ...Ne,
      getAnimatableNone: (n) => {
        const r = n.match(pb);
        return r ? r.map(hb).join(" ") : n;
      },
    },
    io = {
      ...Ne,
      getAnimatableNone: (n) => {
        const r = Ne.parse(n);
        return Ne.createTransformer(n)(
          r.map((o) =>
            typeof o == "number"
              ? 0
              : typeof o == "object"
                ? { ...o, alpha: 1 }
                : o,
          ),
        );
      },
    },
    gf = { ...pn, transform: Math.round },
    ro = {
      borderWidth: Q,
      borderTopWidth: Q,
      borderRightWidth: Q,
      borderBottomWidth: Q,
      borderLeftWidth: Q,
      borderRadius: Q,
      borderTopLeftRadius: Q,
      borderTopRightRadius: Q,
      borderBottomRightRadius: Q,
      borderBottomLeftRadius: Q,
      width: Q,
      maxWidth: Q,
      height: Q,
      maxHeight: Q,
      top: Q,
      right: Q,
      bottom: Q,
      left: Q,
      inset: Q,
      insetBlock: Q,
      insetBlockStart: Q,
      insetBlockEnd: Q,
      insetInline: Q,
      insetInlineStart: Q,
      insetInlineEnd: Q,
      padding: Q,
      paddingTop: Q,
      paddingRight: Q,
      paddingBottom: Q,
      paddingLeft: Q,
      paddingBlock: Q,
      paddingBlockStart: Q,
      paddingBlockEnd: Q,
      paddingInline: Q,
      paddingInlineStart: Q,
      paddingInlineEnd: Q,
      margin: Q,
      marginTop: Q,
      marginRight: Q,
      marginBottom: Q,
      marginLeft: Q,
      marginBlock: Q,
      marginBlockStart: Q,
      marginBlockEnd: Q,
      marginInline: Q,
      marginInlineStart: Q,
      marginInlineEnd: Q,
      fontSize: Q,
      backgroundPositionX: Q,
      backgroundPositionY: Q,
      ...{
        rotate: ga,
        rotateX: ga,
        rotateY: ga,
        rotateZ: ga,
        scale: kr,
        scaleX: kr,
        scaleY: kr,
        scaleZ: kr,
        skew: ga,
        skewX: ga,
        skewY: ga,
        distance: Q,
        translateX: Q,
        translateY: Q,
        translateZ: Q,
        x: Q,
        y: Q,
        z: Q,
        perspective: Q,
        transformPerspective: Q,
        opacity: mi,
        originX: kd,
        originY: kd,
        originZ: Q,
      },
      zIndex: gf,
      fillOpacity: mi,
      strokeOpacity: mi,
      numOctaves: gf,
    },
    mb = {
      ...ro,
      color: jt,
      backgroundColor: jt,
      outlineColor: jt,
      fill: jt,
      stroke: jt,
      borderColor: jt,
      borderTopColor: jt,
      borderRightColor: jt,
      borderBottomColor: jt,
      borderLeftColor: jt,
      filter: no,
      WebkitFilter: no,
      mask: io,
      WebkitMask: io,
    },
    vf = (n) => mb[n],
    gb = new Set([no, io]);
  function yf(n, r) {
    let l = vf(n);
    return (
      gb.has(l) || (l = Ne),
      l.getAnimatableNone ? l.getAnimatableNone(r) : void 0
    );
  }
  const vb = new Set(["auto", "none", "0"]);
  function yb(n, r, l) {
    let o = 0,
      u;
    for (; o < n.length && !u; ) {
      const h = n[o];
      (typeof h == "string" && !vb.has(h) && yi(h).values.length && (u = n[o]),
        o++);
    }
    if (u && l) for (const h of r) n[h] = yf(l, u);
  }
  class bb extends Ql {
    constructor(r, l, o, u, h) {
      super(r, l, o, u, h, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: r, element: l, name: o } = this;
      if (!l || !l.current) return;
      super.readKeyframes();
      for (let y = 0; y < r.length; y++) {
        let w = r[y];
        if (typeof w == "string" && ((w = w.trim()), Al(w))) {
          const T = rf(w, l.current);
          (T !== void 0 && (r[y] = T),
            y === r.length - 1 && (this.finalKeyframe = w));
        }
      }
      if ((this.resolveNoneKeyframes(), !of.has(o) || r.length !== 2)) return;
      const [u, h] = r,
        d = mf(u),
        g = mf(h),
        v = Md(u),
        m = Md(h);
      if (v !== m && va[o]) {
        this.needsMeasurement = !0;
        return;
      }
      if (d !== g)
        if (Kd(d) && Kd(g))
          for (let y = 0; y < r.length; y++) {
            const w = r[y];
            typeof w == "string" && (r[y] = parseFloat(w));
          }
        else va[o] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: r, name: l } = this,
        o = [];
      for (let u = 0; u < r.length; u++)
        (r[u] === null || db(r[u])) && o.push(u);
      o.length && yb(r, o, l);
    }
    measureInitialState() {
      const { element: r, unresolvedKeyframes: l, name: o } = this;
      if (!r || !r.current) return;
      (o === "height" && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = va[o](
          r.measureViewportBox(),
          window.getComputedStyle(r.current),
        )),
        (l[0] = this.measuredOrigin));
      const u = l[l.length - 1];
      u !== void 0 && r.getValue(o, u).jump(u, !1);
    }
    measureEndState() {
      const { element: r, name: l, unresolvedKeyframes: o } = this;
      if (!r || !r.current) return;
      const u = r.getValue(l);
      u && u.jump(this.measuredOrigin, !1);
      const h = o.length - 1,
        d = o[h];
      ((o[h] = va[l](
        r.measureViewportBox(),
        window.getComputedStyle(r.current),
      )),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([g, v]) => {
            r.getValue(g).set(v);
          }),
        this.resolveNoneKeyframes());
    }
  }
  const xb = new Set(["opacity", "clipPath", "filter", "transform"]);
  function bf(n, r, l) {
    if (n == null) return [];
    if (n instanceof EventTarget) return [n];
    if (typeof n == "string") {
      let o = document;
      const u = l?.[n] ?? o.querySelectorAll(n);
      return u ? Array.from(u) : [];
    }
    return Array.from(n).filter((o) => o != null);
  }
  const xf = (n, r) => (r && typeof n == "number" ? r.transform(n) : n);
  function wb(n) {
    return od(n) && "offsetHeight" in n;
  }
  const { schedule: so } = Td(queueMicrotask, !1),
    Ve = { x: !1, y: !1 };
  function wf() {
    return Ve.x || Ve.y;
  }
  function Sb(n) {
    return n === "x" || n === "y"
      ? Ve[n]
        ? null
        : ((Ve[n] = !0),
          () => {
            Ve[n] = !1;
          })
      : Ve.x || Ve.y
        ? null
        : ((Ve.x = Ve.y = !0),
          () => {
            Ve.x = Ve.y = !1;
          });
  }
  function Sf(n, r) {
    const l = bf(n),
      o = new AbortController(),
      u = { passive: !0, ...r, signal: o.signal };
    return [l, u, () => o.abort()];
  }
  function Tb(n) {
    return !(n.pointerType === "touch" || wf());
  }
  function Ab(n, r, l = {}) {
    const [o, u, h] = Sf(n, l);
    return (
      o.forEach((d) => {
        let g = !1,
          v = !1,
          m;
        const y = () => {
            d.removeEventListener("pointerleave", C);
          },
          w = (H) => {
            (m && (m(H), (m = void 0)), y());
          },
          T = (H) => {
            ((g = !1),
              window.removeEventListener("pointerup", T),
              window.removeEventListener("pointercancel", T),
              v && ((v = !1), w(H)));
          },
          R = () => {
            ((g = !0),
              window.addEventListener("pointerup", T, u),
              window.addEventListener("pointercancel", T, u));
          },
          C = (H) => {
            if (H.pointerType !== "touch") {
              if (g) {
                v = !0;
                return;
              }
              w(H);
            }
          },
          L = (H) => {
            if (!Tb(H)) return;
            v = !1;
            const X = r(d, H);
            typeof X == "function" &&
              ((m = X), d.addEventListener("pointerleave", C, u));
          };
        (d.addEventListener("pointerenter", L, u),
          d.addEventListener("pointerdown", R, u));
      }),
      h
    );
  }
  const Tf = (n, r) => (r ? (n === r ? !0 : Tf(n, r.parentElement)) : !1),
    lo = (n) =>
      n.pointerType === "mouse"
        ? typeof n.button != "number" || n.button <= 0
        : n.isPrimary !== !1,
    Eb = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  function Mb(n) {
    return Eb.has(n.tagName) || n.isContentEditable === !0;
  }
  const Db = new Set(["INPUT", "SELECT", "TEXTAREA"]);
  function kb(n) {
    return Db.has(n.tagName) || n.isContentEditable === !0;
  }
  const _r = new WeakSet();
  function Af(n) {
    return (r) => {
      r.key === "Enter" && n(r);
    };
  }
  function oo(n, r) {
    n.dispatchEvent(
      new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 }),
    );
  }
  const zb = (n, r) => {
    const l = n.currentTarget;
    if (!l) return;
    const o = Af(() => {
      if (_r.has(l)) return;
      oo(l, "down");
      const u = Af(() => {
          oo(l, "up");
        }),
        h = () => oo(l, "cancel");
      (l.addEventListener("keyup", u, r), l.addEventListener("blur", h, r));
    });
    (l.addEventListener("keydown", o, r),
      l.addEventListener("blur", () => l.removeEventListener("keydown", o), r));
  };
  function Ef(n) {
    return lo(n) && !wf();
  }
  const Mf = new WeakSet();
  function Rb(n, r, l = {}) {
    const [o, u, h] = Sf(n, l),
      d = (g) => {
        const v = g.currentTarget;
        if (!Ef(g) || Mf.has(g)) return;
        (_r.add(v), l.stopPropagation && Mf.add(g));
        const m = r(v, g),
          y = (R, C) => {
            (window.removeEventListener("pointerup", w),
              window.removeEventListener("pointercancel", T),
              _r.has(v) && _r.delete(v),
              Ef(R) && typeof m == "function" && m(R, { success: C }));
          },
          w = (R) => {
            y(
              R,
              v === window ||
                v === document ||
                l.useGlobalTarget ||
                Tf(v, R.target),
            );
          },
          T = (R) => {
            y(R, !1);
          };
        (window.addEventListener("pointerup", w, u),
          window.addEventListener("pointercancel", T, u));
      };
    return (
      o.forEach((g) => {
        ((l.useGlobalTarget ? window : g).addEventListener("pointerdown", d, u),
          wb(g) &&
            (g.addEventListener("focus", (m) => zb(m, u)),
            !Mb(g) && !g.hasAttribute("tabindex") && (g.tabIndex = 0)));
      }),
      h
    );
  }
  function co(n) {
    return od(n) && "ownerSVGElement" in n;
  }
  const Cr = new WeakMap();
  let Nr;
  const Df = (n, r, l) => (o, u) =>
      u && u[0]
        ? u[0][n + "Size"]
        : co(o) && "getBBox" in o
          ? o.getBBox()[r]
          : o[l],
    Ob = Df("inline", "width", "offsetWidth"),
    _b = Df("block", "height", "offsetHeight");
  function Cb({ target: n, borderBoxSize: r }) {
    Cr.get(n)?.forEach((l) => {
      l(n, {
        get width() {
          return Ob(n, r);
        },
        get height() {
          return _b(n, r);
        },
      });
    });
  }
  function Nb(n) {
    n.forEach(Cb);
  }
  function Vb() {
    typeof ResizeObserver > "u" || (Nr = new ResizeObserver(Nb));
  }
  function jb(n, r) {
    Nr || Vb();
    const l = bf(n);
    return (
      l.forEach((o) => {
        let u = Cr.get(o);
        (u || ((u = new Set()), Cr.set(o, u)), u.add(r), Nr?.observe(o));
      }),
      () => {
        l.forEach((o) => {
          const u = Cr.get(o);
          (u?.delete(r), u?.size || Nr?.unobserve(o));
        });
      }
    );
  }
  const Vr = new Set();
  let xn;
  function Ub() {
    ((xn = () => {
      const n = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        },
      };
      Vr.forEach((r) => r(n));
    }),
      window.addEventListener("resize", xn));
  }
  function Bb(n) {
    return (
      Vr.add(n),
      xn || Ub(),
      () => {
        (Vr.delete(n),
          !Vr.size &&
            typeof xn == "function" &&
            (window.removeEventListener("resize", xn), (xn = void 0)));
      }
    );
  }
  function kf(n, r) {
    return typeof n == "function" ? Bb(n) : jb(n, r);
  }
  function Lb(n) {
    return co(n) && n.tagName === "svg";
  }
  const Hb = [...pf, jt, Ne],
    Yb = (n) => Hb.find(hf(n)),
    zf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    wn = () => ({ x: zf(), y: zf() }),
    Rf = () => ({ min: 0, max: 0 }),
    Lt = () => ({ x: Rf(), y: Rf() }),
    qb = new WeakMap();
  function jr(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function";
  }
  function wi(n) {
    return typeof n == "string" || Array.isArray(n);
  }
  const uo = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    fo = ["initial", ...uo];
  function Ur(n) {
    return jr(n.animate) || fo.some((r) => wi(n[r]));
  }
  function Of(n) {
    return !!(Ur(n) || n.variants);
  }
  function Gb(n, r, l) {
    for (const o in r) {
      const u = r[o],
        h = l[o];
      if (te(u)) n.addValue(o, u);
      else if (te(h)) n.addValue(o, bn(u, { owner: n }));
      else if (h !== u)
        if (n.hasValue(o)) {
          const d = n.getValue(o);
          d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u);
        } else {
          const d = n.getStaticValue(o);
          n.addValue(o, bn(d !== void 0 ? d : u, { owner: n }));
        }
    }
    for (const o in l) r[o] === void 0 && n.removeValue(o);
    return r;
  }
  const ho = { current: null },
    _f = { current: !1 },
    Xb = typeof window < "u";
  function Kb() {
    if (((_f.current = !0), !!Xb))
      if (window.matchMedia) {
        const n = window.matchMedia("(prefers-reduced-motion)"),
          r = () => (ho.current = n.matches);
        (n.addEventListener("change", r), r());
      } else ho.current = !1;
  }
  const Cf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
  let Br = {};
  function Nf(n) {
    Br = n;
  }
  function Zb() {
    return Br;
  }
  class Qb {
    scrapeMotionValuesFromProps(r, l, o) {
      return {};
    }
    constructor(
      {
        parent: r,
        props: l,
        presenceContext: o,
        reducedMotionConfig: u,
        skipAnimations: h,
        blockInitialAnimation: d,
        visualState: g,
      },
      v = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = Ql),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const R = ne.now();
          this.renderScheduledAt < R &&
            ((this.renderScheduledAt = R), St.render(this.render, !1, !0));
        }));
      const { latestValues: m, renderState: y } = g;
      ((this.latestValues = m),
        (this.baseTarget = { ...m }),
        (this.initialValues = l.initial ? { ...m } : {}),
        (this.renderState = y),
        (this.parent = r),
        (this.props = l),
        (this.presenceContext = o),
        (this.depth = r ? r.depth + 1 : 0),
        (this.reducedMotionConfig = u),
        (this.skipAnimationsConfig = h),
        (this.options = v),
        (this.blockInitialAnimation = !!d),
        (this.isControllingVariants = Ur(l)),
        (this.isVariantNode = Of(l)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(r && r.current)));
      const { willChange: w, ...T } = this.scrapeMotionValuesFromProps(
        l,
        {},
        this,
      );
      for (const R in T) {
        const C = T[R];
        m[R] !== void 0 && te(C) && C.set(m[R]);
      }
    }
    mount(r) {
      if (this.hasBeenMounted)
        for (const l in this.initialValues)
          (this.values.get(l)?.jump(this.initialValues[l]),
            (this.latestValues[l] = this.initialValues[l]));
      ((this.current = r),
        qb.set(r, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(r),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((l, o) => this.bindToMotionValue(o, l)),
        this.reducedMotionConfig === "never"
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === "always"
            ? (this.shouldReduceMotion = !0)
            : (_f.current || Kb(), (this.shouldReduceMotion = ho.current)),
        (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0));
    }
    unmount() {
      (this.projection && this.projection.unmount(),
        ma(this.notifyUpdate),
        ma(this.render),
        this.valueSubscriptions.forEach((r) => r()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this));
      for (const r in this.events) this.events[r].clear();
      for (const r in this.features) {
        const l = this.features[r];
        l && (l.unmount(), (l.isMounted = !1));
      }
      this.current = null;
    }
    addChild(r) {
      (this.children.add(r),
        this.enteringChildren ?? (this.enteringChildren = new Set()),
        this.enteringChildren.add(r));
    }
    removeChild(r) {
      (this.children.delete(r),
        this.enteringChildren && this.enteringChildren.delete(r));
    }
    bindToMotionValue(r, l) {
      if (
        (this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)(),
        l.accelerate && xb.has(r) && this.current instanceof HTMLElement)
      ) {
        const {
            factory: d,
            keyframes: g,
            times: v,
            ease: m,
            duration: y,
          } = l.accelerate,
          w = new tf({
            element: this.current,
            name: r,
            keyframes: g,
            times: v,
            ease: m,
            duration: Ce(y),
          }),
          T = d(w);
        this.valueSubscriptions.set(r, () => {
          (T(), w.cancel());
        });
        return;
      }
      const o = vn.has(r);
      o && this.onBindTransform && this.onBindTransform();
      const u = l.on("change", (d) => {
        ((this.latestValues[r] = d),
          this.props.onUpdate && St.preRender(this.notifyUpdate),
          o && this.projection && (this.projection.isTransformDirty = !0),
          this.scheduleRender());
      });
      let h;
      (typeof window < "u" &&
        window.MotionCheckAppearSync &&
        (h = window.MotionCheckAppearSync(this, r, l)),
        this.valueSubscriptions.set(r, () => {
          (u(), h && h(), l.owner && l.stop());
        }));
    }
    sortNodePosition(r) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== r.type
        ? 0
        : this.sortInstanceNodePosition(this.current, r.current);
    }
    updateFeatures() {
      let r = "animation";
      for (r in Br) {
        const l = Br[r];
        if (!l) continue;
        const { isEnabled: o, Feature: u } = l;
        if (
          (!this.features[r] &&
            u &&
            o(this.props) &&
            (this.features[r] = new u(this)),
          this.features[r])
        ) {
          const h = this.features[r];
          h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Lt();
    }
    getStaticValue(r) {
      return this.latestValues[r];
    }
    setStaticValue(r, l) {
      this.latestValues[r] = l;
    }
    update(r, l) {
      ((r.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = r),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = l));
      for (let o = 0; o < Cf.length; o++) {
        const u = Cf[o];
        this.propEventSubscriptions[u] &&
          (this.propEventSubscriptions[u](),
          delete this.propEventSubscriptions[u]);
        const h = "on" + u,
          d = r[h];
        d && (this.propEventSubscriptions[u] = this.on(u, d));
      }
      ((this.prevMotionValues = Gb(
        this,
        this.scrapeMotionValuesFromProps(r, this.prevProps || {}, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(r) {
      return this.props.variants ? this.props.variants[r] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(r) {
      const l = this.getClosestVariantNode();
      if (l)
        return (
          l.variantChildren && l.variantChildren.add(r),
          () => l.variantChildren.delete(r)
        );
    }
    addValue(r, l) {
      const o = this.values.get(r);
      l !== o &&
        (o && this.removeValue(r),
        this.bindToMotionValue(r, l),
        this.values.set(r, l),
        (this.latestValues[r] = l.get()));
    }
    removeValue(r) {
      this.values.delete(r);
      const l = this.valueSubscriptions.get(r);
      (l && (l(), this.valueSubscriptions.delete(r)),
        delete this.latestValues[r],
        this.removeValueFromRenderState(r, this.renderState));
    }
    hasValue(r) {
      return this.values.has(r);
    }
    getValue(r, l) {
      if (this.props.values && this.props.values[r])
        return this.props.values[r];
      let o = this.values.get(r);
      return (
        o === void 0 &&
          l !== void 0 &&
          ((o = bn(l === null ? void 0 : l, { owner: this })),
          this.addValue(r, o)),
        o
      );
    }
    readValue(r, l) {
      let o =
        this.latestValues[r] !== void 0 || !this.current
          ? this.latestValues[r]
          : (this.getBaseTargetFromProps(this.props, r) ??
            this.readValueFromInstance(this.current, r, this.options));
      return (
        o != null &&
          (typeof o == "string" && (ld(o) || cd(o))
            ? (o = parseFloat(o))
            : !Yb(o) && Ne.test(l) && (o = yf(r, l)),
          this.setBaseTarget(r, te(o) ? o.get() : o)),
        te(o) ? o.get() : o
      );
    }
    setBaseTarget(r, l) {
      this.baseTarget[r] = l;
    }
    getBaseTarget(r) {
      const { initial: l } = this.props;
      let o;
      if (typeof l == "string" || typeof l == "object") {
        const h = $l(this.props, l, this.presenceContext?.custom);
        h && (o = h[r]);
      }
      if (l && o !== void 0) return o;
      const u = this.getBaseTargetFromProps(this.props, r);
      return u !== void 0 && !te(u)
        ? u
        : this.initialValues[r] !== void 0 && o === void 0
          ? void 0
          : this.baseTarget[r];
    }
    on(r, l) {
      return (
        this.events[r] || (this.events[r] = new xl()),
        this.events[r].add(l)
      );
    }
    notify(r, ...l) {
      this.events[r] && this.events[r].notify(...l);
    }
    scheduleRenderMicrotask() {
      so.render(this.render);
    }
  }
  class Vf extends Qb {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = bb));
    }
    sortInstanceNodePosition(r, l) {
      return r.compareDocumentPosition(l) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(r, l) {
      const o = r.style;
      return o ? o[l] : void 0;
    }
    removeValueFromRenderState(r, { vars: l, style: o }) {
      (delete l[r], delete o[r]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: r } = this.props;
      te(r) &&
        (this.childSubscription = r.on("change", (l) => {
          this.current && (this.current.textContent = `${l}`);
        }));
    }
  }
  class ya {
    constructor(r) {
      ((this.isMounted = !1), (this.node = r));
    }
    update() {}
  }
  function jf({ top: n, left: r, right: l, bottom: o }) {
    return { x: { min: r, max: l }, y: { min: n, max: o } };
  }
  function Pb({ x: n, y: r }) {
    return { top: r.min, right: n.max, bottom: r.max, left: n.min };
  }
  function Jb(n, r) {
    if (!r) return n;
    const l = r({ x: n.left, y: n.top }),
      o = r({ x: n.right, y: n.bottom });
    return { top: l.y, left: l.x, bottom: o.y, right: o.x };
  }
  function po(n) {
    return n === void 0 || n === 1;
  }
  function mo({ scale: n, scaleX: r, scaleY: l }) {
    return !po(n) || !po(r) || !po(l);
  }
  function Qa(n) {
    return (
      mo(n) ||
      Uf(n) ||
      n.z ||
      n.rotate ||
      n.rotateX ||
      n.rotateY ||
      n.skewX ||
      n.skewY
    );
  }
  function Uf(n) {
    return Bf(n.x) || Bf(n.y);
  }
  function Bf(n) {
    return n && n !== "0%";
  }
  function Lr(n, r, l) {
    const o = n - l,
      u = r * o;
    return l + u;
  }
  function Lf(n, r, l, o, u) {
    return (u !== void 0 && (n = Lr(n, u, o)), Lr(n, l, o) + r);
  }
  function go(n, r = 0, l = 1, o, u) {
    ((n.min = Lf(n.min, r, l, o, u)), (n.max = Lf(n.max, r, l, o, u)));
  }
  function Hf(n, { x: r, y: l }) {
    (go(n.x, r.translate, r.scale, r.originPoint),
      go(n.y, l.translate, l.scale, l.originPoint));
  }
  const Yf = 0.999999999999,
    qf = 1.0000000000001;
  function Fb(n, r, l, o = !1) {
    const u = l.length;
    if (!u) return;
    r.x = r.y = 1;
    let h, d;
    for (let g = 0; g < u; g++) {
      ((h = l[g]), (d = h.projectionDelta));
      const { visualElement: v } = h.options;
      (v && v.props.style && v.props.style.display === "contents") ||
        (o &&
          h.options.layoutScroll &&
          h.scroll &&
          h !== h.root &&
          Tn(n, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
        d && ((r.x *= d.x.scale), (r.y *= d.y.scale), Hf(n, d)),
        o && Qa(h.latestValues) && Tn(n, h.latestValues));
    }
    (r.x < qf && r.x > Yf && (r.x = 1), r.y < qf && r.y > Yf && (r.y = 1));
  }
  function Sn(n, r) {
    ((n.min = n.min + r), (n.max = n.max + r));
  }
  function Gf(n, r, l, o, u = 0.5) {
    const h = Dt(n.min, n.max, u);
    go(n, r, l, h, o);
  }
  function Xf(n, r) {
    return typeof n == "string" ? (parseFloat(n) / 100) * (r.max - r.min) : n;
  }
  function Tn(n, r) {
    (Gf(n.x, Xf(r.x, n.x), r.scaleX, r.scale, r.originX),
      Gf(n.y, Xf(r.y, n.y), r.scaleY, r.scale, r.originY));
  }
  function Kf(n, r) {
    return jf(Jb(n.getBoundingClientRect(), r));
  }
  function Wb(n, r, l) {
    const o = Kf(n, l),
      { scroll: u } = r;
    return (u && (Sn(o.x, u.offset.x), Sn(o.y, u.offset.y)), o);
  }
  const $b = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    Ib = gn.length;
  function tx(n, r, l) {
    let o = "",
      u = !0;
    for (let h = 0; h < Ib; h++) {
      const d = gn[h],
        g = n[d];
      if (g === void 0) continue;
      let v = !0;
      if (typeof g == "number") v = g === (d.startsWith("scale") ? 1 : 0);
      else {
        const m = parseFloat(g);
        v = d.startsWith("scale") ? m === 1 : m === 0;
      }
      if (!v || l) {
        const m = xf(g, ro[d]);
        if (!v) {
          u = !1;
          const y = $b[d] || d;
          o += `${y}(${m}) `;
        }
        l && (r[d] = m);
      }
    }
    return ((o = o.trim()), l ? (o = l(r, u ? "" : o)) : u && (o = "none"), o);
  }
  function vo(n, r, l) {
    const { style: o, vars: u, transformOrigin: h } = n;
    let d = !1,
      g = !1;
    for (const v in r) {
      const m = r[v];
      if (vn.has(v)) {
        d = !0;
        continue;
      } else if (Ed(v)) {
        u[v] = m;
        continue;
      } else {
        const y = xf(m, ro[v]);
        v.startsWith("origin") ? ((g = !0), (h[v] = y)) : (o[v] = y);
      }
    }
    if (
      (r.transform ||
        (d || l
          ? (o.transform = tx(r, n.transform, l))
          : o.transform && (o.transform = "none")),
      g)
    ) {
      const { originX: v = "50%", originY: m = "50%", originZ: y = 0 } = h;
      o.transformOrigin = `${v} ${m} ${y}`;
    }
  }
  function Zf(n, { style: r, vars: l }, o, u) {
    const h = n.style;
    let d;
    for (d in r) h[d] = r[d];
    u?.applyProjectionStyles(h, o);
    for (d in l) h.setProperty(d, l[d]);
  }
  function Qf(n, r) {
    return r.max === r.min ? 0 : (n / (r.max - r.min)) * 100;
  }
  const Si = {
      correct: (n, r) => {
        if (!r.target) return n;
        if (typeof n == "string")
          if (Q.test(n)) n = parseFloat(n);
          else return n;
        const l = Qf(n, r.target.x),
          o = Qf(n, r.target.y);
        return `${l}% ${o}%`;
      },
    },
    ex = {
      correct: (n, { treeScale: r, projectionDelta: l }) => {
        const o = n,
          u = Ne.parse(n);
        if (u.length > 5) return o;
        const h = Ne.createTransformer(n),
          d = typeof u[0] != "number" ? 1 : 0,
          g = l.x.scale * r.x,
          v = l.y.scale * r.y;
        ((u[0 + d] /= g), (u[1 + d] /= v));
        const m = Dt(g, v, 0.5);
        return (
          typeof u[2 + d] == "number" && (u[2 + d] /= m),
          typeof u[3 + d] == "number" && (u[3 + d] /= m),
          h(u)
        );
      },
    },
    yo = {
      borderRadius: {
        ...Si,
        applyTo: [
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ],
      },
      borderTopLeftRadius: Si,
      borderTopRightRadius: Si,
      borderBottomLeftRadius: Si,
      borderBottomRightRadius: Si,
      boxShadow: ex,
    };
  function Pf(n, { layout: r, layoutId: l }) {
    return (
      vn.has(n) ||
      n.startsWith("origin") ||
      ((r || l !== void 0) && (!!yo[n] || n === "opacity"))
    );
  }
  function bo(n, r, l) {
    const o = n.style,
      u = r?.style,
      h = {};
    if (!o) return h;
    for (const d in o)
      (te(o[d]) ||
        (u && te(u[d])) ||
        Pf(d, n) ||
        l?.getValue(d)?.liveStyle !== void 0) &&
        (h[d] = o[d]);
    return h;
  }
  function ax(n) {
    return window.getComputedStyle(n);
  }
  class nx extends Vf {
    constructor() {
      (super(...arguments), (this.type = "html"), (this.renderInstance = Zf));
    }
    readValueFromInstance(r, l) {
      if (vn.has(l)) return this.projection?.isProjecting ? ql(l) : Ay(r, l);
      {
        const o = ax(r),
          u = (Ed(l) ? o.getPropertyValue(l) : o[l]) || 0;
        return typeof u == "string" ? u.trim() : u;
      }
    }
    measureInstanceViewportBox(r, { transformPagePoint: l }) {
      return Kf(r, l);
    }
    build(r, l, o) {
      vo(r, l, o.transformTemplate);
    }
    scrapeMotionValuesFromProps(r, l, o) {
      return bo(r, l, o);
    }
  }
  const ix = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    rx = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function sx(n, r, l = 1, o = 0, u = !0) {
    n.pathLength = 1;
    const h = u ? ix : rx;
    ((n[h.offset] = `${-o}`), (n[h.array] = `${r} ${l}`));
  }
  const lx = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
  function Jf(
    n,
    {
      attrX: r,
      attrY: l,
      attrScale: o,
      pathLength: u,
      pathSpacing: h = 1,
      pathOffset: d = 0,
      ...g
    },
    v,
    m,
    y,
  ) {
    if ((vo(n, g, m), v)) {
      n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
      return;
    }
    ((n.attrs = n.style), (n.style = {}));
    const { attrs: w, style: T } = n;
    (w.transform && ((T.transform = w.transform), delete w.transform),
      (T.transform || w.transformOrigin) &&
        ((T.transformOrigin = w.transformOrigin ?? "50% 50%"),
        delete w.transformOrigin),
      T.transform &&
        ((T.transformBox = y?.transformBox ?? "fill-box"),
        delete w.transformBox));
    for (const R of lx) w[R] !== void 0 && ((T[R] = w[R]), delete w[R]);
    (r !== void 0 && (w.x = r),
      l !== void 0 && (w.y = l),
      o !== void 0 && (w.scale = o),
      u !== void 0 && sx(w, u, h, d, !1));
  }
  const Ff = new Set([
      "baseFrequency",
      "diffuseConstant",
      "kernelMatrix",
      "kernelUnitLength",
      "keySplines",
      "keyTimes",
      "limitingConeAngle",
      "markerHeight",
      "markerWidth",
      "numOctaves",
      "targetX",
      "targetY",
      "surfaceScale",
      "specularConstant",
      "specularExponent",
      "stdDeviation",
      "tableValues",
      "viewBox",
      "gradientTransform",
      "pathLength",
      "startOffset",
      "textLength",
      "lengthAdjust",
    ]),
    Wf = (n) => typeof n == "string" && n.toLowerCase() === "svg";
  function ox(n, r, l, o) {
    Zf(n, r, void 0, o);
    for (const u in r.attrs) n.setAttribute(Ff.has(u) ? u : eo(u), r.attrs[u]);
  }
  function $f(n, r, l) {
    const o = bo(n, r, l);
    for (const u in n)
      if (te(n[u]) || te(r[u])) {
        const h =
          gn.indexOf(u) !== -1
            ? "attr" + u.charAt(0).toUpperCase() + u.substring(1)
            : u;
        o[h] = n[u];
      }
    return o;
  }
  class cx extends Vf {
    constructor() {
      (super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Lt));
    }
    getBaseTargetFromProps(r, l) {
      return r[l];
    }
    readValueFromInstance(r, l) {
      if (vn.has(l)) {
        const o = vf(l);
        return (o && o.default) || 0;
      }
      return ((l = Ff.has(l) ? l : eo(l)), r.getAttribute(l));
    }
    scrapeMotionValuesFromProps(r, l, o) {
      return $f(r, l, o);
    }
    build(r, l, o) {
      Jf(r, l, this.isSVGTag, o.transformTemplate, o.style);
    }
    renderInstance(r, l, o, u) {
      ox(r, l, o, u);
    }
    mount(r) {
      ((this.isSVGTag = Wf(r.tagName)), super.mount(r));
    }
  }
  const ux = fo.length;
  function If(n) {
    if (!n) return;
    if (!n.isControllingVariants) {
      const l = n.parent ? If(n.parent) || {} : {};
      return (n.props.initial !== void 0 && (l.initial = n.props.initial), l);
    }
    const r = {};
    for (let l = 0; l < ux; l++) {
      const o = fo[l],
        u = n.props[o];
      (wi(u) || u === !1) && (r[o] = u);
    }
    return r;
  }
  function th(n, r) {
    if (!Array.isArray(r)) return !1;
    const l = r.length;
    if (l !== n.length) return !1;
    for (let o = 0; o < l; o++) if (r[o] !== n[o]) return !1;
    return !0;
  }
  const dx = [...uo].reverse(),
    fx = uo.length;
  function hx(n) {
    return (r) =>
      Promise.all(r.map(({ animation: l, options: o }) => cb(n, l, o)));
  }
  function px(n) {
    let r = hx(n),
      l = eh(),
      o = !0,
      u = !1;
    const h = (m) => (y, w) => {
      const T = yn(n, w, m === "exit" ? n.presenceContext?.custom : void 0);
      if (T) {
        const { transition: R, transitionEnd: C, ...L } = T;
        y = { ...y, ...L, ...C };
      }
      return y;
    };
    function d(m) {
      r = m(n);
    }
    function g(m) {
      const { props: y } = n,
        w = If(n.parent) || {},
        T = [],
        R = new Set();
      let C = {},
        L = 1 / 0;
      for (let X = 0; X < fx; X++) {
        const Y = dx[X],
          U = l[Y],
          J = y[Y] !== void 0 ? y[Y] : w[Y],
          B = wi(J),
          rt = Y === m ? U.isActive : null;
        rt === !1 && (L = X);
        let dt = J === w[Y] && J !== y[Y] && B;
        if (
          (dt && (o || u) && n.manuallyAnimateOnMount && (dt = !1),
          (U.protectedKeys = { ...C }),
          (!U.isActive && rt === null) ||
            (!J && !U.prevProp) ||
            jr(J) ||
            typeof J == "boolean")
        )
          continue;
        if (Y === "exit" && U.isActive && rt !== !0) {
          U.prevResolvedValues && (C = { ...C, ...U.prevResolvedValues });
          continue;
        }
        const et = mx(U.prevProp, J);
        let Tt = et || (Y === m && U.isActive && !dt && B) || (X > L && B),
          Ht = !1;
        const de = Array.isArray(J) ? J : [J];
        let Ot = de.reduce(h(Y), {});
        rt === !1 && (Ot = {});
        const { prevResolvedValues: Ge = {} } = U,
          $e = { ...Ge, ...Ot },
          Yt = (Z) => {
            ((Tt = !0),
              R.has(Z) && ((Ht = !0), R.delete(Z)),
              (U.needsAnimating[Z] = !0));
            const st = n.getValue(Z);
            st && (st.liveStyle = !1);
          };
        for (const Z in $e) {
          const st = Ot[Z],
            x = Ge[Z];
          if (C.hasOwnProperty(Z)) continue;
          let j = !1;
          (Il(st) && Il(x) ? (j = !th(st, x)) : (j = st !== x),
            j
              ? st != null
                ? Yt(Z)
                : R.add(Z)
              : st !== void 0 && R.has(Z)
                ? Yt(Z)
                : (U.protectedKeys[Z] = !0));
        }
        ((U.prevProp = J),
          (U.prevResolvedValues = Ot),
          U.isActive && (C = { ...C, ...Ot }),
          (o || u) && n.blockInitialAnimation && (Tt = !1));
        const O = dt && et;
        Tt &&
          (!O || Ht) &&
          T.push(
            ...de.map((Z) => {
              const st = { type: Y };
              if (
                typeof Z == "string" &&
                (o || u) &&
                !O &&
                n.manuallyAnimateOnMount &&
                n.parent
              ) {
                const { parent: x } = n,
                  j = yn(x, Z);
                if (x.enteringChildren && j) {
                  const { delayChildren: K } = j.transition || {};
                  st.delay = nf(x.enteringChildren, n, K);
                }
              }
              return { animation: Z, options: st };
            }),
          );
      }
      if (R.size) {
        const X = {};
        if (typeof y.initial != "boolean") {
          const Y = yn(n, Array.isArray(y.initial) ? y.initial[0] : y.initial);
          Y && Y.transition && (X.transition = Y.transition);
        }
        (R.forEach((Y) => {
          const U = n.getBaseTarget(Y),
            J = n.getValue(Y);
          (J && (J.liveStyle = !0), (X[Y] = U ?? null));
        }),
          T.push({ animation: X }));
      }
      let H = !!T.length;
      return (
        o &&
          (y.initial === !1 || y.initial === y.animate) &&
          !n.manuallyAnimateOnMount &&
          (H = !1),
        (o = !1),
        (u = !1),
        H ? r(T) : Promise.resolve()
      );
    }
    function v(m, y) {
      if (l[m].isActive === y) return Promise.resolve();
      (n.variantChildren?.forEach((T) => T.animationState?.setActive(m, y)),
        (l[m].isActive = y));
      const w = g(m);
      for (const T in l) l[T].protectedKeys = {};
      return w;
    }
    return {
      animateChanges: g,
      setActive: v,
      setAnimateFunction: d,
      getState: () => l,
      reset: () => {
        ((l = eh()), (u = !0));
      },
    };
  }
  function mx(n, r) {
    return typeof r == "string" ? r !== n : Array.isArray(r) ? !th(r, n) : !1;
  }
  function Pa(n = !1) {
    return {
      isActive: n,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function eh() {
    return {
      animate: Pa(!0),
      whileInView: Pa(),
      whileHover: Pa(),
      whileTap: Pa(),
      whileDrag: Pa(),
      whileFocus: Pa(),
      exit: Pa(),
    };
  }
  function ah(n, r) {
    ((n.min = r.min), (n.max = r.max));
  }
  function je(n, r) {
    (ah(n.x, r.x), ah(n.y, r.y));
  }
  function nh(n, r) {
    ((n.translate = r.translate),
      (n.scale = r.scale),
      (n.originPoint = r.originPoint),
      (n.origin = r.origin));
  }
  const ih = 1e-4,
    gx = 1 - ih,
    vx = 1 + ih,
    rh = 0.01,
    yx = 0 - rh,
    bx = 0 + rh;
  function ie(n) {
    return n.max - n.min;
  }
  function xx(n, r, l) {
    return Math.abs(n - r) <= l;
  }
  function sh(n, r, l, o = 0.5) {
    ((n.origin = o),
      (n.originPoint = Dt(r.min, r.max, n.origin)),
      (n.scale = ie(l) / ie(r)),
      (n.translate = Dt(l.min, l.max, n.origin) - n.originPoint),
      ((n.scale >= gx && n.scale <= vx) || isNaN(n.scale)) && (n.scale = 1),
      ((n.translate >= yx && n.translate <= bx) || isNaN(n.translate)) &&
        (n.translate = 0));
  }
  function Ti(n, r, l, o) {
    (sh(n.x, r.x, l.x, o ? o.originX : void 0),
      sh(n.y, r.y, l.y, o ? o.originY : void 0));
  }
  function lh(n, r, l) {
    ((n.min = l.min + r.min), (n.max = n.min + ie(r)));
  }
  function wx(n, r, l) {
    (lh(n.x, r.x, l.x), lh(n.y, r.y, l.y));
  }
  function oh(n, r, l) {
    ((n.min = r.min - l.min), (n.max = n.min + ie(r)));
  }
  function Hr(n, r, l) {
    (oh(n.x, r.x, l.x), oh(n.y, r.y, l.y));
  }
  function ch(n, r, l, o, u) {
    return (
      (n -= r),
      (n = Lr(n, 1 / l, o)),
      u !== void 0 && (n = Lr(n, 1 / u, o)),
      n
    );
  }
  function Sx(n, r = 0, l = 1, o = 0.5, u, h = n, d = n) {
    if (
      (Ye.test(r) &&
        ((r = parseFloat(r)), (r = Dt(d.min, d.max, r / 100) - d.min)),
      typeof r != "number")
    )
      return;
    let g = Dt(h.min, h.max, o);
    (n === h && (g -= r),
      (n.min = ch(n.min, r, l, g, u)),
      (n.max = ch(n.max, r, l, g, u)));
  }
  function uh(n, r, [l, o, u], h, d) {
    Sx(n, r[l], r[o], r[u], r.scale, h, d);
  }
  const Tx = ["x", "scaleX", "originX"],
    Ax = ["y", "scaleY", "originY"];
  function dh(n, r, l, o) {
    (uh(n.x, r, Tx, l ? l.x : void 0, o ? o.x : void 0),
      uh(n.y, r, Ax, l ? l.y : void 0, o ? o.y : void 0));
  }
  function fh(n) {
    return n.translate === 0 && n.scale === 1;
  }
  function hh(n) {
    return fh(n.x) && fh(n.y);
  }
  function ph(n, r) {
    return n.min === r.min && n.max === r.max;
  }
  function Ex(n, r) {
    return ph(n.x, r.x) && ph(n.y, r.y);
  }
  function mh(n, r) {
    return (
      Math.round(n.min) === Math.round(r.min) &&
      Math.round(n.max) === Math.round(r.max)
    );
  }
  function gh(n, r) {
    return mh(n.x, r.x) && mh(n.y, r.y);
  }
  function vh(n) {
    return ie(n.x) / ie(n.y);
  }
  function yh(n, r) {
    return (
      n.translate === r.translate &&
      n.scale === r.scale &&
      n.originPoint === r.originPoint
    );
  }
  function qe(n) {
    return [n("x"), n("y")];
  }
  function Mx(n, r, l) {
    let o = "";
    const u = n.x.translate / r.x,
      h = n.y.translate / r.y,
      d = l?.z || 0;
    if (
      ((u || h || d) && (o = `translate3d(${u}px, ${h}px, ${d}px) `),
      (r.x !== 1 || r.y !== 1) && (o += `scale(${1 / r.x}, ${1 / r.y}) `),
      l)
    ) {
      const {
        transformPerspective: m,
        rotate: y,
        rotateX: w,
        rotateY: T,
        skewX: R,
        skewY: C,
      } = l;
      (m && (o = `perspective(${m}px) ${o}`),
        y && (o += `rotate(${y}deg) `),
        w && (o += `rotateX(${w}deg) `),
        T && (o += `rotateY(${T}deg) `),
        R && (o += `skewX(${R}deg) `),
        C && (o += `skewY(${C}deg) `));
    }
    const g = n.x.scale * r.x,
      v = n.y.scale * r.y;
    return ((g !== 1 || v !== 1) && (o += `scale(${g}, ${v})`), o || "none");
  }
  const bh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Dx = bh.length,
    xh = (n) => (typeof n == "string" ? parseFloat(n) : n),
    wh = (n) => typeof n == "number" || Q.test(n);
  function kx(n, r, l, o, u, h) {
    u
      ? ((n.opacity = Dt(0, l.opacity ?? 1, zx(o))),
        (n.opacityExit = Dt(r.opacity ?? 1, 0, Rx(o))))
      : h && (n.opacity = Dt(r.opacity ?? 1, l.opacity ?? 1, o));
    for (let d = 0; d < Dx; d++) {
      const g = `border${bh[d]}Radius`;
      let v = Sh(r, g),
        m = Sh(l, g);
      if (v === void 0 && m === void 0) continue;
      (v || (v = 0),
        m || (m = 0),
        v === 0 || m === 0 || wh(v) === wh(m)
          ? ((n[g] = Math.max(Dt(xh(v), xh(m), o), 0)),
            (Ye.test(m) || Ye.test(v)) && (n[g] += "%"))
          : (n[g] = m));
    }
    (r.rotate || l.rotate) && (n.rotate = Dt(r.rotate || 0, l.rotate || 0, o));
  }
  function Sh(n, r) {
    return n[r] !== void 0 ? n[r] : n.borderRadius;
  }
  const zx = Th(0, 0.5, yd),
    Rx = Th(0.5, 0.95, Se);
  function Th(n, r, l) {
    return (o) => (o < n ? 0 : o > r ? 1 : l(hi(n, r, o)));
  }
  function Ox(n, r, l) {
    const o = te(n) ? n : bn(n);
    return (o.start(Wl("", o, r, l)), o.animation);
  }
  function Ai(n, r, l, o = { passive: !0 }) {
    return (n.addEventListener(r, l, o), () => n.removeEventListener(r, l));
  }
  const _x = (n, r) => n.depth - r.depth;
  class Cx {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(r) {
      (yl(this.children, r), (this.isDirty = !0));
    }
    remove(r) {
      (Er(this.children, r), (this.isDirty = !0));
    }
    forEach(r) {
      (this.isDirty && this.children.sort(_x),
        (this.isDirty = !1),
        this.children.forEach(r));
    }
  }
  function Nx(n, r) {
    const l = ne.now(),
      o = ({ timestamp: u }) => {
        const h = u - l;
        h >= r && (ma(o), n(h - r));
      };
    return (St.setup(o, !0), () => ma(o));
  }
  function Yr(n) {
    return te(n) ? n.get() : n;
  }
  class Vx {
    constructor() {
      this.members = [];
    }
    add(r) {
      yl(this.members, r);
      for (let l = this.members.length - 1; l >= 0; l--) {
        const o = this.members[l];
        if (o === r || o === this.lead || o === this.prevLead) continue;
        const u = o.instance;
        (!u || u.isConnected === !1) &&
          !o.snapshot &&
          (Er(this.members, o), o.unmount());
      }
      r.scheduleRender();
    }
    remove(r) {
      if (
        (Er(this.members, r),
        r === this.prevLead && (this.prevLead = void 0),
        r === this.lead)
      ) {
        const l = this.members[this.members.length - 1];
        l && this.promote(l);
      }
    }
    relegate(r) {
      for (let l = this.members.indexOf(r) - 1; l >= 0; l--) {
        const o = this.members[l];
        if (o.isPresent !== !1 && o.instance?.isConnected !== !1)
          return (this.promote(o), !0);
      }
      return !1;
    }
    promote(r, l) {
      const o = this.lead;
      if (r !== o && ((this.prevLead = o), (this.lead = r), r.show(), o)) {
        (o.updateSnapshot(), r.scheduleRender());
        const { layoutDependency: u } = o.options,
          { layoutDependency: h } = r.options;
        ((u === void 0 || u !== h) &&
          ((r.resumeFrom = o),
          l && (o.preserveOpacity = !0),
          o.snapshot &&
            ((r.snapshot = o.snapshot),
            (r.snapshot.latestValues = o.animationValues || o.latestValues)),
          r.root?.isUpdating && (r.isLayoutDirty = !0)),
          r.options.crossfade === !1 && o.hide());
      }
    }
    exitAnimationComplete() {
      this.members.forEach((r) => {
        (r.options.onExitComplete?.(),
          r.resumingFrom?.options.onExitComplete?.());
      });
    }
    scheduleRender() {
      this.members.forEach((r) => r.instance && r.scheduleRender(!1));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  }
  const qr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
    xo = ["", "X", "Y", "Z"],
    jx = 1e3;
  let Ux = 0;
  function wo(n, r, l, o) {
    const { latestValues: u } = r;
    u[n] && ((l[n] = u[n]), r.setStaticValue(n, 0), o && (o[n] = 0));
  }
  function Ah(n) {
    if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
    const { visualElement: r } = n.options;
    if (!r) return;
    const l = df(r);
    if (window.MotionHasOptimisedAnimation(l, "transform")) {
      const { layout: u, layoutId: h } = n.options;
      window.MotionCancelOptimisedAnimation(l, "transform", St, !(u || h));
    }
    const { parent: o } = n;
    o && !o.hasCheckedOptimisedAppear && Ah(o);
  }
  function Eh({
    attachResizeListener: n,
    defaultParent: r,
    measureScroll: l,
    checkIsScrollRoot: o,
    resetTransform: u,
  }) {
    return class {
      constructor(d = {}, g = r?.()) {
        ((this.id = Ux++),
          (this.animationId = 0),
          (this.animationCommitId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.layoutVersion = 0),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            ((this.projectionUpdateScheduled = !1),
              this.nodes.forEach(Hx),
              this.nodes.forEach(Xx),
              this.nodes.forEach(Kx),
              this.nodes.forEach(Yx));
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.linkedParentVersion = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = d),
          (this.root = g ? g.root || g : this),
          (this.path = g ? [...g.path, g] : []),
          (this.parent = g),
          (this.depth = g ? g.depth + 1 : 0));
        for (let v = 0; v < this.path.length; v++)
          this.path[v].shouldResetTransform = !0;
        this.root === this && (this.nodes = new Cx());
      }
      addEventListener(d, g) {
        return (
          this.eventHandlers.has(d) || this.eventHandlers.set(d, new xl()),
          this.eventHandlers.get(d).add(g)
        );
      }
      notifyListeners(d, ...g) {
        const v = this.eventHandlers.get(d);
        v && v.notify(...g);
      }
      hasListeners(d) {
        return this.eventHandlers.has(d);
      }
      mount(d) {
        if (this.instance) return;
        ((this.isSVG = co(d) && !Lb(d)), (this.instance = d));
        const { layoutId: g, layout: v, visualElement: m } = this.options;
        if (
          (m && !m.current && m.mount(d),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          this.root.hasTreeAnimated && (v || g) && (this.isLayoutDirty = !0),
          n)
        ) {
          let y,
            w = 0;
          const T = () => (this.root.updateBlockedByResize = !1);
          (St.read(() => {
            w = window.innerWidth;
          }),
            n(d, () => {
              const R = window.innerWidth;
              R !== w &&
                ((w = R),
                (this.root.updateBlockedByResize = !0),
                y && y(),
                (y = Nx(T, 250)),
                qr.hasAnimatedSinceResize &&
                  ((qr.hasAnimatedSinceResize = !1), this.nodes.forEach(kh)));
            }));
        }
        (g && this.root.registerSharedNode(g, this),
          this.options.animate !== !1 &&
            m &&
            (g || v) &&
            this.addEventListener(
              "didUpdate",
              ({
                delta: y,
                hasLayoutChanged: w,
                hasRelativeLayoutChanged: T,
                layout: R,
              }) => {
                if (this.isTreeAnimationBlocked()) {
                  ((this.target = void 0), (this.relativeTarget = void 0));
                  return;
                }
                const C =
                    this.options.transition || m.getDefaultTransition() || Fx,
                  { onLayoutAnimationStart: L, onLayoutAnimationComplete: H } =
                    m.getProps(),
                  X = !this.targetLayout || !gh(this.targetLayout, R),
                  Y = !w && T;
                if (
                  this.options.layoutRoot ||
                  this.resumeFrom ||
                  Y ||
                  (w && (X || !this.currentAnimation))
                ) {
                  this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0));
                  const U = { ...Fl(C, "layout"), onPlay: L, onComplete: H };
                  ((m.shouldReduceMotion || this.options.layoutRoot) &&
                    ((U.delay = 0), (U.type = !1)),
                    this.startAnimation(U),
                    this.setAnimationOrigin(y, Y));
                } else
                  (w || kh(this),
                    this.isLead() &&
                      this.options.onExitComplete &&
                      this.options.onExitComplete());
                this.targetLayout = R;
              },
            ));
      }
      unmount() {
        (this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this));
        const d = this.getStack();
        (d && d.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          this.eventHandlers.clear(),
          ma(this.updateProjection));
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(Zx),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: d } = this.options;
        return d && d.getProps().transformTemplate;
      }
      willUpdate(d = !0) {
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            Ah(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let y = 0; y < this.path.length; y++) {
          const w = this.path[y];
          ((w.shouldResetTransform = !0),
            w.updateScroll("snapshot"),
            w.options.layoutRoot && w.willUpdate(!1));
        }
        const { layoutId: g, layout: v } = this.options;
        if (g === void 0 && !v) return;
        const m = this.getTransformTemplate();
        ((this.prevTransformTemplateValue = m
          ? m(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          d && this.notifyListeners("willUpdate"));
      }
      update() {
        if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
          (this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(Mh));
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(Dh);
          return;
        }
        ((this.animationCommitId = this.animationId),
          this.isUpdating
            ? ((this.isUpdating = !1),
              this.nodes.forEach(Gx),
              this.nodes.forEach(Bx),
              this.nodes.forEach(Lx))
            : this.nodes.forEach(Dh),
          this.clearAllSnapshots());
        const g = ne.now();
        ((Pt.delta = He(0, 1e3 / 60, g - Pt.timestamp)),
          (Pt.timestamp = g),
          (Pt.isProcessing = !0),
          Tl.update.process(Pt),
          Tl.preRender.process(Pt),
          Tl.render.process(Pt),
          (Pt.isProcessing = !1));
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), so.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        (this.nodes.forEach(qx), this.sharedNodes.forEach(Qx));
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          St.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        St.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot ||
          !this.instance ||
          ((this.snapshot = this.measure()),
          this.snapshot &&
            !ie(this.snapshot.measuredBox.x) &&
            !ie(this.snapshot.measuredBox.y) &&
            (this.snapshot = void 0));
      }
      updateLayout() {
        if (
          !this.instance ||
          (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let v = 0; v < this.path.length; v++)
            this.path[v].updateScroll();
        const d = this.layout;
        ((this.layout = this.measure(!1)),
          this.layoutVersion++,
          (this.layoutCorrected = Lt()),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox));
        const { visualElement: g } = this.options;
        g &&
          g.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            d ? d.layoutBox : void 0,
          );
      }
      updateScroll(d = "measure") {
        let g = !!(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === d &&
            (g = !1),
          g && this.instance)
        ) {
          const v = o(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: d,
            isRoot: v,
            offset: l(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : v,
          };
        }
      }
      resetTransform() {
        if (!u) return;
        const d =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          g = this.projectionDelta && !hh(this.projectionDelta),
          v = this.getTransformTemplate(),
          m = v ? v(this.latestValues, "") : void 0,
          y = m !== this.prevTransformTemplateValue;
        d &&
          this.instance &&
          (g || Qa(this.latestValues) || y) &&
          (u(this.instance, m),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure(d = !0) {
        const g = this.measurePageBox();
        let v = this.removeElementScroll(g);
        return (
          d && (v = this.removeTransform(v)),
          Wx(v),
          {
            animationId: this.root.animationId,
            measuredBox: g,
            layoutBox: v,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        const { visualElement: d } = this.options;
        if (!d) return Lt();
        const g = d.measureViewportBox();
        if (!(this.scroll?.wasRoot || this.path.some($x))) {
          const { scroll: m } = this.root;
          m && (Sn(g.x, m.offset.x), Sn(g.y, m.offset.y));
        }
        return g;
      }
      removeElementScroll(d) {
        const g = Lt();
        if ((je(g, d), this.scroll?.wasRoot)) return g;
        for (let v = 0; v < this.path.length; v++) {
          const m = this.path[v],
            { scroll: y, options: w } = m;
          m !== this.root &&
            y &&
            w.layoutScroll &&
            (y.wasRoot && je(g, d), Sn(g.x, y.offset.x), Sn(g.y, y.offset.y));
        }
        return g;
      }
      applyTransform(d, g = !1) {
        const v = Lt();
        je(v, d);
        for (let m = 0; m < this.path.length; m++) {
          const y = this.path[m];
          (!g &&
            y.options.layoutScroll &&
            y.scroll &&
            y !== y.root &&
            Tn(v, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
            Qa(y.latestValues) && Tn(v, y.latestValues));
        }
        return (Qa(this.latestValues) && Tn(v, this.latestValues), v);
      }
      removeTransform(d) {
        const g = Lt();
        je(g, d);
        for (let v = 0; v < this.path.length; v++) {
          const m = this.path[v];
          if (!m.instance || !Qa(m.latestValues)) continue;
          mo(m.latestValues) && m.updateSnapshot();
          const y = Lt(),
            w = m.measurePageBox();
          (je(y, w),
            dh(
              g,
              m.latestValues,
              m.snapshot ? m.snapshot.layoutBox : void 0,
              y,
            ));
        }
        return (Qa(this.latestValues) && dh(g, this.latestValues), g);
      }
      setTargetDelta(d) {
        ((this.targetDelta = d),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0));
      }
      setOptions(d) {
        this.options = {
          ...this.options,
          ...d,
          crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
        };
      }
      clearMeasurements() {
        ((this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1));
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(d = !1) {
        const g = this.getLead();
        (this.isProjectionDirty ||
          (this.isProjectionDirty = g.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = g.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = g.isSharedProjectionDirty));
        const v = !!this.resumingFrom || this !== g;
        if (
          !(
            d ||
            (v && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            this.parent?.isProjectionDirty ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: y, layoutId: w } = this.options;
        if (!this.layout || !(y || w)) return;
        this.resolvedRelativeTargetAt = Pt.timestamp;
        const T = this.getClosestProjectingParent();
        (T &&
          this.linkedParentVersion !== T.layoutVersion &&
          !T.options.layoutRoot &&
          this.removeRelativeTarget(),
          !this.targetDelta &&
            !this.relativeTarget &&
            (T && T.layout
              ? this.createRelativeTarget(
                  T,
                  this.layout.layoutBox,
                  T.layout.layoutBox,
                )
              : this.removeRelativeTarget()),
          !(!this.relativeTarget && !this.targetDelta) &&
            (this.target ||
              ((this.target = Lt()), (this.targetWithTransforms = Lt())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                wx(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : je(this.target, this.layout.layoutBox),
                  Hf(this.target, this.targetDelta))
                : je(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              T &&
              !!T.resumingFrom == !!this.resumingFrom &&
              !T.options.layoutScroll &&
              T.target &&
              this.animationProgress !== 1
                ? this.createRelativeTarget(T, this.target, T.target)
                : (this.relativeParent = this.relativeTarget = void 0))));
      }
      getClosestProjectingParent() {
        if (
          !(
            !this.parent ||
            mo(this.parent.latestValues) ||
            Uf(this.parent.latestValues)
          )
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
          this.layout
        );
      }
      createRelativeTarget(d, g, v) {
        ((this.relativeParent = d),
          (this.linkedParentVersion = d.layoutVersion),
          this.forceRelativeParentToResolveTarget(),
          (this.relativeTarget = Lt()),
          (this.relativeTargetOrigin = Lt()),
          Hr(this.relativeTargetOrigin, g, v),
          je(this.relativeTarget, this.relativeTargetOrigin));
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        const d = this.getLead(),
          g = !!this.resumingFrom || this !== d;
        let v = !0;
        if (
          ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
            (v = !1),
          g &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (v = !1),
          this.resolvedRelativeTargetAt === Pt.timestamp && (v = !1),
          v)
        )
          return;
        const { layout: m, layoutId: y } = this.options;
        if (
          ((this.isTreeAnimating = !!(
            (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(m || y))
        )
          return;
        je(this.layoutCorrected, this.layout.layoutBox);
        const w = this.treeScale.x,
          T = this.treeScale.y;
        (Fb(this.layoutCorrected, this.treeScale, this.path, g),
          d.layout &&
            !d.target &&
            (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
            ((d.target = d.layout.layoutBox), (d.targetWithTransforms = Lt())));
        const { target: R } = d;
        if (!R) {
          this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        (!this.projectionDelta || !this.prevProjectionDelta
          ? this.createProjectionDeltas()
          : (nh(this.prevProjectionDelta.x, this.projectionDelta.x),
            nh(this.prevProjectionDelta.y, this.projectionDelta.y)),
          Ti(this.projectionDelta, this.layoutCorrected, R, this.latestValues),
          (this.treeScale.x !== w ||
            this.treeScale.y !== T ||
            !yh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
            !yh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", R)));
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(d = !0) {
        if ((this.options.visualElement?.scheduleRender(), d)) {
          const g = this.getStack();
          g && g.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        ((this.prevProjectionDelta = wn()),
          (this.projectionDelta = wn()),
          (this.projectionDeltaWithTransform = wn()));
      }
      setAnimationOrigin(d, g = !1) {
        const v = this.snapshot,
          m = v ? v.latestValues : {},
          y = { ...this.latestValues },
          w = wn();
        ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !g));
        const T = Lt(),
          R = v ? v.source : void 0,
          C = this.layout ? this.layout.source : void 0,
          L = R !== C,
          H = this.getStack(),
          X = !H || H.members.length <= 1,
          Y = !!(
            L &&
            !X &&
            this.options.crossfade === !0 &&
            !this.path.some(Jx)
          );
        this.animationProgress = 0;
        let U;
        ((this.mixTargetDelta = (J) => {
          const B = J / 1e3;
          (zh(w.x, d.x, B),
            zh(w.y, d.y, B),
            this.setTargetDelta(w),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              this.relativeParent &&
              this.relativeParent.layout &&
              (Hr(
                T,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox,
              ),
              Px(this.relativeTarget, this.relativeTargetOrigin, T, B),
              U && Ex(this.relativeTarget, U) && (this.isProjectionDirty = !1),
              U || (U = Lt()),
              je(U, this.relativeTarget)),
            L &&
              ((this.animationValues = y),
              kx(y, m, this.latestValues, B, Y, X)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = B));
        }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
      }
      startAnimation(d) {
        (this.notifyListeners("animationStart"),
          this.currentAnimation?.stop(),
          this.resumingFrom?.currentAnimation?.stop(),
          this.pendingAnimation &&
            (ma(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = St.update(() => {
            ((qr.hasAnimatedSinceResize = !0),
              this.motionValue || (this.motionValue = bn(0)),
              this.motionValue.jump(0, !1),
              (this.currentAnimation = Ox(this.motionValue, [0, 1e3], {
                ...d,
                velocity: 0,
                isSync: !0,
                onUpdate: (g) => {
                  (this.mixTargetDelta(g), d.onUpdate && d.onUpdate(g));
                },
                onStop: () => {},
                onComplete: () => {
                  (d.onComplete && d.onComplete(), this.completeAnimation());
                },
              })),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0));
          })));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const d = this.getStack();
        (d && d.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete"));
      }
      finishAnimation() {
        (this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(jx),
          this.currentAnimation.stop()),
          this.completeAnimation());
      }
      applyTransformsToTarget() {
        const d = this.getLead();
        let {
          targetWithTransforms: g,
          target: v,
          layout: m,
          latestValues: y,
        } = d;
        if (!(!g || !v || !m)) {
          if (
            this !== d &&
            this.layout &&
            m &&
            Nh(this.options.animationType, this.layout.layoutBox, m.layoutBox)
          ) {
            v = this.target || Lt();
            const w = ie(this.layout.layoutBox.x);
            ((v.x.min = d.target.x.min), (v.x.max = v.x.min + w));
            const T = ie(this.layout.layoutBox.y);
            ((v.y.min = d.target.y.min), (v.y.max = v.y.min + T));
          }
          (je(g, v),
            Tn(g, y),
            Ti(this.projectionDeltaWithTransform, this.layoutCorrected, g, y));
        }
      }
      registerSharedNode(d, g) {
        (this.sharedNodes.has(d) || this.sharedNodes.set(d, new Vx()),
          this.sharedNodes.get(d).add(g));
        const m = g.options.initialPromotionConfig;
        g.promote({
          transition: m ? m.transition : void 0,
          preserveFollowOpacity:
            m && m.shouldPreserveFollowOpacity
              ? m.shouldPreserveFollowOpacity(g)
              : void 0,
        });
      }
      isLead() {
        const d = this.getStack();
        return d ? d.lead === this : !0;
      }
      getLead() {
        const { layoutId: d } = this.options;
        return d ? this.getStack()?.lead || this : this;
      }
      getPrevLead() {
        const { layoutId: d } = this.options;
        return d ? this.getStack()?.prevLead : void 0;
      }
      getStack() {
        const { layoutId: d } = this.options;
        if (d) return this.root.sharedNodes.get(d);
      }
      promote({ needsReset: d, transition: g, preserveFollowOpacity: v } = {}) {
        const m = this.getStack();
        (m && m.promote(this, v),
          d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          g && this.setOptions({ transition: g }));
      }
      relegate() {
        const d = this.getStack();
        return d ? d.relegate(this) : !1;
      }
      resetSkewAndRotation() {
        const { visualElement: d } = this.options;
        if (!d) return;
        let g = !1;
        const { latestValues: v } = d;
        if (
          ((v.z ||
            v.rotate ||
            v.rotateX ||
            v.rotateY ||
            v.rotateZ ||
            v.skewX ||
            v.skewY) &&
            (g = !0),
          !g)
        )
          return;
        const m = {};
        v.z && wo("z", d, m, this.animationValues);
        for (let y = 0; y < xo.length; y++)
          (wo(`rotate${xo[y]}`, d, m, this.animationValues),
            wo(`skew${xo[y]}`, d, m, this.animationValues));
        d.render();
        for (const y in m)
          (d.setStaticValue(y, m[y]),
            this.animationValues && (this.animationValues[y] = m[y]));
        d.scheduleRender();
      }
      applyProjectionStyles(d, g) {
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) {
          d.visibility = "hidden";
          return;
        }
        const v = this.getTransformTemplate();
        if (this.needsReset) {
          ((this.needsReset = !1),
            (d.visibility = ""),
            (d.opacity = ""),
            (d.pointerEvents = Yr(g?.pointerEvents) || ""),
            (d.transform = v ? v(this.latestValues, "") : "none"));
          return;
        }
        const m = this.getLead();
        if (!this.projectionDelta || !this.layout || !m.target) {
          (this.options.layoutId &&
            ((d.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (d.pointerEvents = Yr(g?.pointerEvents) || "")),
            this.hasProjected &&
              !Qa(this.latestValues) &&
              ((d.transform = v ? v({}, "") : "none"),
              (this.hasProjected = !1)));
          return;
        }
        d.visibility = "";
        const y = m.animationValues || m.latestValues;
        this.applyTransformsToTarget();
        let w = Mx(this.projectionDeltaWithTransform, this.treeScale, y);
        (v && (w = v(y, w)), (d.transform = w));
        const { x: T, y: R } = this.projectionDelta;
        ((d.transformOrigin = `${T.origin * 100}% ${R.origin * 100}% 0`),
          m.animationValues
            ? (d.opacity =
                m === this
                  ? (y.opacity ?? this.latestValues.opacity ?? 1)
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : y.opacityExit)
            : (d.opacity =
                m === this
                  ? y.opacity !== void 0
                    ? y.opacity
                    : ""
                  : y.opacityExit !== void 0
                    ? y.opacityExit
                    : 0));
        for (const C in yo) {
          if (y[C] === void 0) continue;
          const { correct: L, applyTo: H, isCSSVariable: X } = yo[C],
            Y = w === "none" ? y[C] : L(y[C], m);
          if (H) {
            const U = H.length;
            for (let J = 0; J < U; J++) d[H[J]] = Y;
          } else
            X
              ? (this.options.visualElement.renderState.vars[C] = Y)
              : (d[C] = Y);
        }
        this.options.layoutId &&
          (d.pointerEvents = m === this ? Yr(g?.pointerEvents) || "" : "none");
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        (this.root.nodes.forEach((d) => d.currentAnimation?.stop()),
          this.root.nodes.forEach(Mh),
          this.root.sharedNodes.clear());
      }
    };
  }
  function Bx(n) {
    n.updateLayout();
  }
  function Lx(n) {
    const r = n.resumeFrom?.snapshot || n.snapshot;
    if (n.isLead() && n.layout && r && n.hasListeners("didUpdate")) {
      const { layoutBox: l, measuredBox: o } = n.layout,
        { animationType: u } = n.options,
        h = r.source !== n.layout.source;
      u === "size"
        ? qe((y) => {
            const w = h ? r.measuredBox[y] : r.layoutBox[y],
              T = ie(w);
            ((w.min = l[y].min), (w.max = w.min + T));
          })
        : Nh(u, r.layoutBox, l) &&
          qe((y) => {
            const w = h ? r.measuredBox[y] : r.layoutBox[y],
              T = ie(l[y]);
            ((w.max = w.min + T),
              n.relativeTarget &&
                !n.currentAnimation &&
                ((n.isProjectionDirty = !0),
                (n.relativeTarget[y].max = n.relativeTarget[y].min + T)));
          });
      const d = wn();
      Ti(d, l, r.layoutBox);
      const g = wn();
      h ? Ti(g, n.applyTransform(o, !0), r.measuredBox) : Ti(g, l, r.layoutBox);
      const v = !hh(d);
      let m = !1;
      if (!n.resumeFrom) {
        const y = n.getClosestProjectingParent();
        if (y && !y.resumeFrom) {
          const { snapshot: w, layout: T } = y;
          if (w && T) {
            const R = Lt();
            Hr(R, r.layoutBox, w.layoutBox);
            const C = Lt();
            (Hr(C, l, T.layoutBox),
              gh(R, C) || (m = !0),
              y.options.layoutRoot &&
                ((n.relativeTarget = C),
                (n.relativeTargetOrigin = R),
                (n.relativeParent = y)));
          }
        }
      }
      n.notifyListeners("didUpdate", {
        layout: l,
        snapshot: r,
        delta: g,
        layoutDelta: d,
        hasLayoutChanged: v,
        hasRelativeLayoutChanged: m,
      });
    } else if (n.isLead()) {
      const { onExitComplete: l } = n.options;
      l && l();
    }
    n.options.transition = void 0;
  }
  function Hx(n) {
    n.parent &&
      (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
      n.isSharedProjectionDirty ||
        (n.isSharedProjectionDirty = !!(
          n.isProjectionDirty ||
          n.parent.isProjectionDirty ||
          n.parent.isSharedProjectionDirty
        )),
      n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
  }
  function Yx(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
  }
  function qx(n) {
    n.clearSnapshot();
  }
  function Mh(n) {
    n.clearMeasurements();
  }
  function Dh(n) {
    n.isLayoutDirty = !1;
  }
  function Gx(n) {
    const { visualElement: r } = n.options;
    (r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"),
      n.resetTransform());
  }
  function kh(n) {
    (n.finishAnimation(),
      (n.targetDelta = n.relativeTarget = n.target = void 0),
      (n.isProjectionDirty = !0));
  }
  function Xx(n) {
    n.resolveTargetDelta();
  }
  function Kx(n) {
    n.calcProjection();
  }
  function Zx(n) {
    n.resetSkewAndRotation();
  }
  function Qx(n) {
    n.removeLeadSnapshot();
  }
  function zh(n, r, l) {
    ((n.translate = Dt(r.translate, 0, l)),
      (n.scale = Dt(r.scale, 1, l)),
      (n.origin = r.origin),
      (n.originPoint = r.originPoint));
  }
  function Rh(n, r, l, o) {
    ((n.min = Dt(r.min, l.min, o)), (n.max = Dt(r.max, l.max, o)));
  }
  function Px(n, r, l, o) {
    (Rh(n.x, r.x, l.x, o), Rh(n.y, r.y, l.y, o));
  }
  function Jx(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0;
  }
  const Fx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Oh = (n) =>
      typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(n),
    _h = Oh("applewebkit/") && !Oh("chrome/") ? Math.round : Se;
  function Ch(n) {
    ((n.min = _h(n.min)), (n.max = _h(n.max)));
  }
  function Wx(n) {
    (Ch(n.x), Ch(n.y));
  }
  function Nh(n, r, l) {
    return (
      n === "position" || (n === "preserve-aspect" && !xx(vh(r), vh(l), 0.2))
    );
  }
  function $x(n) {
    return n !== n.root && n.scroll?.wasRoot;
  }
  const Ix = Eh({
      attachResizeListener: (n, r) => Ai(n, "resize", r),
      measureScroll: () => ({
        x:
          document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
        y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
      }),
      checkIsScrollRoot: () => !0,
    }),
    So = { current: void 0 },
    Vh = Eh({
      measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
      defaultParent: () => {
        if (!So.current) {
          const n = new Ix({});
          (n.mount(window),
            n.setOptions({ layoutScroll: !0 }),
            (So.current = n));
        }
        return So.current;
      },
      resetTransform: (n, r) => {
        n.style.transform = r !== void 0 ? r : "none";
      },
      checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
    }),
    jh = W.createContext({
      transformPagePoint: (n) => n,
      isStatic: !1,
      reducedMotion: "never",
    });
  function tw(n = !0) {
    const r = W.useContext(vl);
    if (r === null) return [!0, null];
    const { isPresent: l, onExitComplete: o, register: u } = r,
      h = W.useId();
    W.useEffect(() => {
      if (n) return u(h);
    }, [n]);
    const d = W.useCallback(() => n && o && o(h), [h, o, n]);
    return !l && o ? [!1, d] : [!0];
  }
  const Uh = W.createContext({ strict: !1 }),
    Bh = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    };
  let Lh = !1;
  function ew() {
    if (Lh) return;
    const n = {};
    for (const r in Bh) n[r] = { isEnabled: (l) => Bh[r].some((o) => !!l[o]) };
    (Nf(n), (Lh = !0));
  }
  function Hh() {
    return (ew(), Zb());
  }
  function aw(n) {
    const r = Hh();
    for (const l in n) r[l] = { ...r[l], ...n[l] };
    Nf(r);
  }
  const nw = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport",
  ]);
  function Gr(n) {
    return (
      n.startsWith("while") ||
      (n.startsWith("drag") && n !== "draggable") ||
      n.startsWith("layout") ||
      n.startsWith("onTap") ||
      n.startsWith("onPan") ||
      n.startsWith("onLayout") ||
      nw.has(n)
    );
  }
  let Yh = (n) => !Gr(n);
  function iw(n) {
    typeof n == "function" &&
      (Yh = (r) => (r.startsWith("on") ? !Gr(r) : n(r)));
  }
  try {
    iw(require("@emotion/is-prop-valid").default);
  } catch {}
  function rw(n, r, l) {
    const o = {};
    for (const u in n)
      (u === "values" && typeof n.values == "object") ||
        ((Yh(u) ||
          (l === !0 && Gr(u)) ||
          (!r && !Gr(u)) ||
          (n.draggable && u.startsWith("onDrag"))) &&
          (o[u] = n[u]));
    return o;
  }
  const Xr = W.createContext({});
  function sw(n, r) {
    if (Ur(n)) {
      const { initial: l, animate: o } = n;
      return {
        initial: l === !1 || wi(l) ? l : void 0,
        animate: wi(o) ? o : void 0,
      };
    }
    return n.inherit !== !1 ? r : {};
  }
  function lw(n) {
    const { initial: r, animate: l } = sw(n, W.useContext(Xr));
    return W.useMemo(() => ({ initial: r, animate: l }), [qh(r), qh(l)]);
  }
  function qh(n) {
    return Array.isArray(n) ? n.join(" ") : n;
  }
  const To = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  });
  function Gh(n, r, l) {
    for (const o in r) !te(r[o]) && !Pf(o, l) && (n[o] = r[o]);
  }
  function ow({ transformTemplate: n }, r) {
    return W.useMemo(() => {
      const l = To();
      return (vo(l, r, n), Object.assign({}, l.vars, l.style));
    }, [r]);
  }
  function cw(n, r) {
    const l = n.style || {},
      o = {};
    return (Gh(o, l, n), Object.assign(o, ow(n, r)), o);
  }
  function uw(n, r) {
    const l = {},
      o = cw(n, r);
    return (
      n.drag &&
        n.dragListener !== !1 &&
        ((l.draggable = !1),
        (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
        (o.touchAction =
          n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
      n.tabIndex === void 0 &&
        (n.onTap || n.onTapStart || n.whileTap) &&
        (l.tabIndex = 0),
      (l.style = o),
      l
    );
  }
  const Xh = () => ({ ...To(), attrs: {} });
  function dw(n, r, l, o) {
    const u = W.useMemo(() => {
      const h = Xh();
      return (
        Jf(h, r, Wf(o), n.transformTemplate, n.style),
        { ...h.attrs, style: { ...h.style } }
      );
    }, [r]);
    if (n.style) {
      const h = {};
      (Gh(h, n.style, n), (u.style = { ...h, ...u.style }));
    }
    return u;
  }
  const fw = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function Ao(n) {
    return typeof n != "string" || n.includes("-")
      ? !1
      : !!(fw.indexOf(n) > -1 || /[A-Z]/u.test(n));
  }
  function hw(n, r, l, { latestValues: o }, u, h = !1, d) {
    const v = ((d ?? Ao(n)) ? dw : uw)(r, o, u, n),
      m = rw(r, typeof n == "string", h),
      y = n !== W.Fragment ? { ...m, ...v, ref: l } : {},
      { children: w } = r,
      T = W.useMemo(() => (te(w) ? w.get() : w), [w]);
    return W.createElement(n, { ...y, children: T });
  }
  function pw(
    { scrapeMotionValuesFromProps: n, createRenderState: r },
    l,
    o,
    u,
  ) {
    return { latestValues: mw(l, o, u, n), renderState: r() };
  }
  function mw(n, r, l, o) {
    const u = {},
      h = o(n, {});
    for (const T in h) u[T] = Yr(h[T]);
    let { initial: d, animate: g } = n;
    const v = Ur(n),
      m = Of(n);
    r &&
      m &&
      !v &&
      n.inherit !== !1 &&
      (d === void 0 && (d = r.initial), g === void 0 && (g = r.animate));
    let y = l ? l.initial === !1 : !1;
    y = y || d === !1;
    const w = y ? g : d;
    if (w && typeof w != "boolean" && !jr(w)) {
      const T = Array.isArray(w) ? w : [w];
      for (let R = 0; R < T.length; R++) {
        const C = $l(n, T[R]);
        if (C) {
          const { transitionEnd: L, transition: H, ...X } = C;
          for (const Y in X) {
            let U = X[Y];
            if (Array.isArray(U)) {
              const J = y ? U.length - 1 : 0;
              U = U[J];
            }
            U !== null && (u[Y] = U);
          }
          for (const Y in L) u[Y] = L[Y];
        }
      }
    }
    return u;
  }
  const Kh = (n) => (r, l) => {
      const o = W.useContext(Xr),
        u = W.useContext(vl),
        h = () => pw(n, r, o, u);
      return l ? h() : x0(h);
    },
    gw = Kh({ scrapeMotionValuesFromProps: bo, createRenderState: To }),
    vw = Kh({ scrapeMotionValuesFromProps: $f, createRenderState: Xh }),
    yw = Symbol.for("motionComponentSymbol");
  function bw(n, r, l) {
    const o = W.useRef(l);
    W.useInsertionEffect(() => {
      o.current = l;
    });
    const u = W.useRef(null);
    return W.useCallback(
      (h) => {
        h && n.onMount?.(h);
        const d = o.current;
        if (typeof d == "function")
          if (h) {
            const g = d(h);
            typeof g == "function" && (u.current = g);
          } else u.current ? (u.current(), (u.current = null)) : d(h);
        else d && (d.current = h);
        r && (h ? r.mount(h) : r.unmount());
      },
      [r],
    );
  }
  const Zh = W.createContext({});
  function An(n) {
    return (
      n &&
      typeof n == "object" &&
      Object.prototype.hasOwnProperty.call(n, "current")
    );
  }
  function xw(n, r, l, o, u, h) {
    const { visualElement: d } = W.useContext(Xr),
      g = W.useContext(Uh),
      v = W.useContext(vl),
      m = W.useContext(jh),
      y = m.reducedMotion,
      w = m.skipAnimations,
      T = W.useRef(null),
      R = W.useRef(!1);
    ((o = o || g.renderer),
      !T.current &&
        o &&
        ((T.current = o(n, {
          visualState: r,
          parent: d,
          props: l,
          presenceContext: v,
          blockInitialAnimation: v ? v.initial === !1 : !1,
          reducedMotionConfig: y,
          skipAnimations: w,
          isSVG: h,
        })),
        R.current && T.current && (T.current.manuallyAnimateOnMount = !0)));
    const C = T.current,
      L = W.useContext(Zh);
    C &&
      !C.projection &&
      u &&
      (C.type === "html" || C.type === "svg") &&
      ww(T.current, l, u, L);
    const H = W.useRef(!1);
    W.useInsertionEffect(() => {
      C && H.current && C.update(l, v);
    });
    const X = l[uf],
      Y = W.useRef(
        !!X &&
          typeof window < "u" &&
          !window.MotionHandoffIsComplete?.(X) &&
          window.MotionHasOptimisedAnimation?.(X),
      );
    return (
      w0(() => {
        ((R.current = !0),
          C &&
            ((H.current = !0),
            (window.MotionIsMounted = !0),
            C.updateFeatures(),
            C.scheduleRenderMicrotask(),
            Y.current &&
              C.animationState &&
              C.animationState.animateChanges()));
      }),
      W.useEffect(() => {
        C &&
          (!Y.current && C.animationState && C.animationState.animateChanges(),
          Y.current &&
            (queueMicrotask(() => {
              window.MotionHandoffMarkAsComplete?.(X);
            }),
            (Y.current = !1)),
          (C.enteringChildren = void 0));
      }),
      C
    );
  }
  function ww(n, r, l, o) {
    const {
      layoutId: u,
      layout: h,
      drag: d,
      dragConstraints: g,
      layoutScroll: v,
      layoutRoot: m,
      layoutCrossfade: y,
    } = r;
    ((n.projection = new l(
      n.latestValues,
      r["data-framer-portal-id"] ? void 0 : Qh(n.parent),
    )),
      n.projection.setOptions({
        layoutId: u,
        layout: h,
        alwaysMeasureLayout: !!d || (g && An(g)),
        visualElement: n,
        animationType: typeof h == "string" ? h : "both",
        initialPromotionConfig: o,
        crossfade: y,
        layoutScroll: v,
        layoutRoot: m,
      }));
  }
  function Qh(n) {
    if (n)
      return n.options.allowProjection !== !1 ? n.projection : Qh(n.parent);
  }
  function Eo(n, { forwardMotionProps: r = !1, type: l } = {}, o, u) {
    o && aw(o);
    const h = l ? l === "svg" : Ao(n),
      d = h ? vw : gw;
    function g(m, y) {
      let w;
      const T = { ...W.useContext(jh), ...m, layoutId: Sw(m) },
        { isStatic: R } = T,
        C = lw(m),
        L = d(m, R);
      if (!R && typeof window < "u") {
        Tw();
        const H = Aw(T);
        ((w = H.MeasureLayout),
          (C.visualElement = xw(n, L, T, u, H.ProjectionNode, h)));
      }
      return D.jsxs(Xr.Provider, {
        value: C,
        children: [
          w && C.visualElement
            ? D.jsx(w, { visualElement: C.visualElement, ...T })
            : null,
          hw(n, m, bw(L, C.visualElement, y), L, R, r, h),
        ],
      });
    }
    g.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
    const v = W.forwardRef(g);
    return ((v[yw] = n), v);
  }
  function Sw({ layoutId: n }) {
    const r = W.useContext(sd).id;
    return r && n !== void 0 ? r + "-" + n : n;
  }
  function Tw(n, r) {
    W.useContext(Uh).strict;
  }
  function Aw(n) {
    const r = Hh(),
      { drag: l, layout: o } = r;
    if (!l && !o) return {};
    const u = { ...l, ...o };
    return {
      MeasureLayout:
        l?.isEnabled(n) || o?.isEnabled(n) ? u.MeasureLayout : void 0,
      ProjectionNode: u.ProjectionNode,
    };
  }
  function Ew(n, r) {
    if (typeof Proxy > "u") return Eo;
    const l = new Map(),
      o = (h, d) => Eo(h, d, n, r),
      u = (h, d) => o(h, d);
    return new Proxy(u, {
      get: (h, d) =>
        d === "create"
          ? o
          : (l.has(d) || l.set(d, Eo(d, void 0, n, r)), l.get(d)),
    });
  }
  const Mw = (n, r) =>
    (r.isSVG ?? Ao(n))
      ? new cx(r)
      : new nx(r, { allowProjection: n !== W.Fragment });
  class Dw extends ya {
    constructor(r) {
      (super(r), r.animationState || (r.animationState = px(r)));
    }
    updateAnimationControlsSubscription() {
      const { animate: r } = this.node.getProps();
      jr(r) && (this.unmountControls = r.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: r } = this.node.getProps(),
        { animate: l } = this.node.prevProps || {};
      r !== l && this.updateAnimationControlsSubscription();
    }
    unmount() {
      (this.node.animationState.reset(), this.unmountControls?.());
    }
  }
  let kw = 0;
  class zw extends ya {
    constructor() {
      (super(...arguments), (this.id = kw++));
    }
    update() {
      if (!this.node.presenceContext) return;
      const { isPresent: r, onExitComplete: l } = this.node.presenceContext,
        { isPresent: o } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || r === o) return;
      const u = this.node.animationState.setActive("exit", !r);
      l &&
        !r &&
        u.then(() => {
          l(this.id);
        });
    }
    mount() {
      const { register: r, onExitComplete: l } =
        this.node.presenceContext || {};
      (l && l(this.id), r && (this.unmount = r(this.id)));
    }
    unmount() {}
  }
  const Rw = { animation: { Feature: Dw }, exit: { Feature: zw } };
  function Ei(n) {
    return { point: { x: n.pageX, y: n.pageY } };
  }
  const Ow = (n) => (r) => lo(r) && n(r, Ei(r));
  function Mi(n, r, l, o) {
    return Ai(n, r, Ow(l), o);
  }
  const Ph = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
    Jh = (n, r) => Math.abs(n - r);
  function _w(n, r) {
    const l = Jh(n.x, r.x),
      o = Jh(n.y, r.y);
    return Math.sqrt(l ** 2 + o ** 2);
  }
  const Fh = new Set(["auto", "scroll"]);
  class Wh {
    constructor(
      r,
      l,
      {
        transformPagePoint: o,
        contextWindow: u = window,
        dragSnapToOrigin: h = !1,
        distanceThreshold: d = 3,
        element: g,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (R) => {
          this.handleScroll(R.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const R = Do(this.lastMoveEventInfo, this.history),
            C = this.startEvent !== null,
            L = _w(R.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!C && !L) return;
          const { point: H } = R,
            { timestamp: X } = Pt;
          this.history.push({ ...H, timestamp: X });
          const { onStart: Y, onMove: U } = this.handlers;
          (C ||
            (Y && Y(this.lastMoveEvent, R),
            (this.startEvent = this.lastMoveEvent)),
            U && U(this.lastMoveEvent, R));
        }),
        (this.handlePointerMove = (R, C) => {
          ((this.lastMoveEvent = R),
            (this.lastMoveEventInfo = Mo(C, this.transformPagePoint)),
            St.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (R, C) => {
          this.end();
          const {
            onEnd: L,
            onSessionEnd: H,
            resumeAnimation: X,
          } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && X && X(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const Y = Do(
            R.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Mo(C, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && L && L(R, Y), H && H(R, Y));
        }),
        !lo(r))
      )
        return;
      ((this.dragSnapToOrigin = h),
        (this.handlers = l),
        (this.transformPagePoint = o),
        (this.distanceThreshold = d),
        (this.contextWindow = u || window));
      const v = Ei(r),
        m = Mo(v, this.transformPagePoint),
        { point: y } = m,
        { timestamp: w } = Pt;
      this.history = [{ ...y, timestamp: w }];
      const { onSessionStart: T } = l;
      (T && T(r, Do(m, this.history)),
        (this.removeListeners = fi(
          Mi(this.contextWindow, "pointermove", this.handlePointerMove),
          Mi(this.contextWindow, "pointerup", this.handlePointerUp),
          Mi(this.contextWindow, "pointercancel", this.handlePointerUp),
        )),
        g && this.startScrollTracking(g));
    }
    startScrollTracking(r) {
      let l = r.parentElement;
      for (; l; ) {
        const o = getComputedStyle(l);
        ((Fh.has(o.overflowX) || Fh.has(o.overflowY)) &&
          this.scrollPositions.set(l, { x: l.scrollLeft, y: l.scrollTop }),
          (l = l.parentElement));
      }
      (this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY,
      }),
        window.addEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        (this.removeScrollListeners = () => {
          (window.removeEventListener("scroll", this.onElementScroll, {
            capture: !0,
          }),
            window.removeEventListener("scroll", this.onWindowScroll));
        }));
    }
    handleScroll(r) {
      const l = this.scrollPositions.get(r);
      if (!l) return;
      const o = r === window,
        u = o
          ? { x: window.scrollX, y: window.scrollY }
          : { x: r.scrollLeft, y: r.scrollTop },
        h = { x: u.x - l.x, y: u.y - l.y };
      (h.x === 0 && h.y === 0) ||
        (o
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += h.x),
            (this.lastMoveEventInfo.point.y += h.y))
          : this.history.length > 0 &&
            ((this.history[0].x -= h.x), (this.history[0].y -= h.y)),
        this.scrollPositions.set(r, u),
        St.update(this.updatePoint, !0));
    }
    updateHandlers(r) {
      this.handlers = r;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        ma(this.updatePoint));
    }
  }
  function Mo(n, r) {
    return r ? { point: r(n.point) } : n;
  }
  function $h(n, r) {
    return { x: n.x - r.x, y: n.y - r.y };
  }
  function Do({ point: n }, r) {
    return {
      point: n,
      delta: $h(n, Ih(r)),
      offset: $h(n, Cw(r)),
      velocity: Nw(r, 0.1),
    };
  }
  function Cw(n) {
    return n[0];
  }
  function Ih(n) {
    return n[n.length - 1];
  }
  function Nw(n, r) {
    if (n.length < 2) return { x: 0, y: 0 };
    let l = n.length - 1,
      o = null;
    const u = Ih(n);
    for (; l >= 0 && ((o = n[l]), !(u.timestamp - o.timestamp > Ce(r))); ) l--;
    if (!o) return { x: 0, y: 0 };
    o === n[0] &&
      n.length > 2 &&
      u.timestamp - o.timestamp > Ce(r) * 2 &&
      (o = n[1]);
    const h = Te(u.timestamp - o.timestamp);
    if (h === 0) return { x: 0, y: 0 };
    const d = { x: (u.x - o.x) / h, y: (u.y - o.y) / h };
    return (d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d);
  }
  function Vw(n, { min: r, max: l }, o) {
    return (
      r !== void 0 && n < r
        ? (n = o ? Dt(r, n, o.min) : Math.max(n, r))
        : l !== void 0 && n > l && (n = o ? Dt(l, n, o.max) : Math.min(n, l)),
      n
    );
  }
  function tp(n, r, l) {
    return {
      min: r !== void 0 ? n.min + r : void 0,
      max: l !== void 0 ? n.max + l - (n.max - n.min) : void 0,
    };
  }
  function jw(n, { top: r, left: l, bottom: o, right: u }) {
    return { x: tp(n.x, l, u), y: tp(n.y, r, o) };
  }
  function ep(n, r) {
    let l = r.min - n.min,
      o = r.max - n.max;
    return (
      r.max - r.min < n.max - n.min && ([l, o] = [o, l]),
      { min: l, max: o }
    );
  }
  function Uw(n, r) {
    return { x: ep(n.x, r.x), y: ep(n.y, r.y) };
  }
  function Bw(n, r) {
    let l = 0.5;
    const o = ie(n),
      u = ie(r);
    return (
      u > o
        ? (l = hi(r.min, r.max - o, n.min))
        : o > u && (l = hi(n.min, n.max - u, r.min)),
      He(0, 1, l)
    );
  }
  function Lw(n, r) {
    const l = {};
    return (
      r.min !== void 0 && (l.min = r.min - n.min),
      r.max !== void 0 && (l.max = r.max - n.min),
      l
    );
  }
  const ko = 0.35;
  function Hw(n = ko) {
    return (
      n === !1 ? (n = 0) : n === !0 && (n = ko),
      { x: ap(n, "left", "right"), y: ap(n, "top", "bottom") }
    );
  }
  function ap(n, r, l) {
    return { min: np(n, r), max: np(n, l) };
  }
  function np(n, r) {
    return typeof n == "number" ? n : n[r] || 0;
  }
  const Yw = new WeakMap();
  class qw {
    constructor(r) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Lt()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = r));
    }
    start(r, { snapToCursor: l = !1, distanceThreshold: o } = {}) {
      const { presenceContext: u } = this.visualElement;
      if (u && u.isPresent === !1) return;
      const h = (w) => {
          (l && this.snapToCursor(Ei(w).point), this.stopAnimation());
        },
        d = (w, T) => {
          const {
            drag: R,
            dragPropagation: C,
            onDragStart: L,
          } = this.getProps();
          if (
            R &&
            !C &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = Sb(R)),
            !this.openDragLock)
          )
            return;
          ((this.latestPointerEvent = w),
            (this.latestPanInfo = T),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            qe((X) => {
              let Y = this.getAxisMotionValue(X).get() || 0;
              if (Ye.test(Y)) {
                const { projection: U } = this.visualElement;
                if (U && U.layout) {
                  const J = U.layout.layoutBox[X];
                  J && (Y = ie(J) * (parseFloat(Y) / 100));
                }
              }
              this.originPoint[X] = Y;
            }),
            L && St.update(() => L(w, T), !1, !0),
            to(this.visualElement, "transform"));
          const { animationState: H } = this.visualElement;
          H && H.setActive("whileDrag", !0);
        },
        g = (w, T) => {
          ((this.latestPointerEvent = w), (this.latestPanInfo = T));
          const {
            dragPropagation: R,
            dragDirectionLock: C,
            onDirectionLock: L,
            onDrag: H,
          } = this.getProps();
          if (!R && !this.openDragLock) return;
          const { offset: X } = T;
          if (C && this.currentDirection === null) {
            ((this.currentDirection = Xw(X)),
              this.currentDirection !== null && L && L(this.currentDirection));
            return;
          }
          (this.updateAxis("x", T.point, X),
            this.updateAxis("y", T.point, X),
            this.visualElement.render(),
            H && St.update(() => H(w, T), !1, !0));
        },
        v = (w, T) => {
          ((this.latestPointerEvent = w),
            (this.latestPanInfo = T),
            this.stop(w, T),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null));
        },
        m = () => {
          const { dragSnapToOrigin: w } = this.getProps();
          (w || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: y } = this.getProps();
      this.panSession = new Wh(
        r,
        {
          onSessionStart: h,
          onStart: d,
          onMove: g,
          onSessionEnd: v,
          resumeAnimation: m,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: y,
          distanceThreshold: o,
          contextWindow: Ph(this.visualElement),
          element: this.visualElement.current,
        },
      );
    }
    stop(r, l) {
      const o = r || this.latestPointerEvent,
        u = l || this.latestPanInfo,
        h = this.isDragging;
      if ((this.cancel(), !h || !u || !o)) return;
      const { velocity: d } = u;
      this.startAnimation(d);
      const { onDragEnd: g } = this.getProps();
      g && St.postRender(() => g(o, u));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: r, animationState: l } = this.visualElement;
      (r && (r.isAnimationBlocked = !1), this.endPanSession());
      const { dragPropagation: o } = this.getProps();
      (!o &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        l && l.setActive("whileDrag", !1));
    }
    endPanSession() {
      (this.panSession && this.panSession.end(), (this.panSession = void 0));
    }
    updateAxis(r, l, o) {
      const { drag: u } = this.getProps();
      if (!o || !Kr(r, u, this.currentDirection)) return;
      const h = this.getAxisMotionValue(r);
      let d = this.originPoint[r] + o[r];
      (this.constraints &&
        this.constraints[r] &&
        (d = Vw(d, this.constraints[r], this.elastic[r])),
        h.set(d));
    }
    resolveConstraints() {
      const { dragConstraints: r, dragElastic: l } = this.getProps(),
        o =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        u = this.constraints;
      (r && An(r)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : r && o
          ? (this.constraints = jw(o.layoutBox, r))
          : (this.constraints = !1),
        (this.elastic = Hw(l)),
        u !== this.constraints &&
          !An(r) &&
          o &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          qe((h) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(h) &&
              (this.constraints[h] = Lw(o.layoutBox[h], this.constraints[h]));
          }));
    }
    resolveRefConstraints() {
      const { dragConstraints: r, onMeasureDragConstraints: l } =
        this.getProps();
      if (!r || !An(r)) return !1;
      const o = r.current,
        { projection: u } = this.visualElement;
      if (!u || !u.layout) return !1;
      const h = Wb(o, u.root, this.visualElement.getTransformPagePoint());
      let d = Uw(u.layout.layoutBox, h);
      if (l) {
        const g = l(Pb(d));
        ((this.hasMutatedConstraints = !!g), g && (d = jf(g)));
      }
      return d;
    }
    startAnimation(r) {
      const {
          drag: l,
          dragMomentum: o,
          dragElastic: u,
          dragTransition: h,
          dragSnapToOrigin: d,
          onDragTransitionEnd: g,
        } = this.getProps(),
        v = this.constraints || {},
        m = qe((y) => {
          if (!Kr(y, l, this.currentDirection)) return;
          let w = (v && v[y]) || {};
          d && (w = { min: 0, max: 0 });
          const T = u ? 200 : 1e6,
            R = u ? 40 : 1e7,
            C = {
              type: "inertia",
              velocity: o ? r[y] : 0,
              bounceStiffness: T,
              bounceDamping: R,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...h,
              ...w,
            };
          return this.startAxisValueAnimation(y, C);
        });
      return Promise.all(m).then(g);
    }
    startAxisValueAnimation(r, l) {
      const o = this.getAxisMotionValue(r);
      return (
        to(this.visualElement, r),
        o.start(Wl(r, o, 0, l, this.visualElement, !1))
      );
    }
    stopAnimation() {
      qe((r) => this.getAxisMotionValue(r).stop());
    }
    getAxisMotionValue(r) {
      const l = `_drag${r.toUpperCase()}`,
        o = this.visualElement.getProps(),
        u = o[l];
      return (
        u ||
        this.visualElement.getValue(r, (o.initial ? o.initial[r] : void 0) || 0)
      );
    }
    snapToCursor(r) {
      qe((l) => {
        const { drag: o } = this.getProps();
        if (!Kr(l, o, this.currentDirection)) return;
        const { projection: u } = this.visualElement,
          h = this.getAxisMotionValue(l);
        if (u && u.layout) {
          const { min: d, max: g } = u.layout.layoutBox[l],
            v = h.get() || 0;
          h.set(r[l] - Dt(d, g, 0.5) + v);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: r, dragConstraints: l } = this.getProps(),
        { projection: o } = this.visualElement;
      if (!An(l) || !o || !this.constraints) return;
      this.stopAnimation();
      const u = { x: 0, y: 0 };
      qe((d) => {
        const g = this.getAxisMotionValue(d);
        if (g && this.constraints !== !1) {
          const v = g.get();
          u[d] = Bw({ min: v, max: v }, this.constraints[d]);
        }
      });
      const { transformTemplate: h } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = h ? h({}, "") : "none"),
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        qe((d) => {
          if (!Kr(d, r, null)) return;
          const g = this.getAxisMotionValue(d),
            { min: v, max: m } = this.constraints[d];
          g.set(Dt(v, m, u[d]));
        }),
        this.visualElement.render());
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Yw.set(this.visualElement, this);
      const r = this.visualElement.current,
        l = Mi(r, "pointerdown", (m) => {
          const { drag: y, dragListener: w = !0 } = this.getProps(),
            T = m.target,
            R = T !== r && kb(T);
          y && w && !R && this.start(m);
        });
      let o;
      const u = () => {
          const { dragConstraints: m } = this.getProps();
          An(m) &&
            m.current &&
            ((this.constraints = this.resolveRefConstraints()),
            o ||
              (o = Gw(r, m.current, () =>
                this.scalePositionWithinConstraints(),
              )));
        },
        { projection: h } = this.visualElement,
        d = h.addEventListener("measure", u);
      (h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()),
        St.read(u));
      const g = Ai(window, "resize", () =>
          this.scalePositionWithinConstraints(),
        ),
        v = h.addEventListener(
          "didUpdate",
          ({ delta: m, hasLayoutChanged: y }) => {
            this.isDragging &&
              y &&
              (qe((w) => {
                const T = this.getAxisMotionValue(w);
                T &&
                  ((this.originPoint[w] += m[w].translate),
                  T.set(T.get() + m[w].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (g(), l(), d(), v && v(), o && o());
      };
    }
    getProps() {
      const r = this.visualElement.getProps(),
        {
          drag: l = !1,
          dragDirectionLock: o = !1,
          dragPropagation: u = !1,
          dragConstraints: h = !1,
          dragElastic: d = ko,
          dragMomentum: g = !0,
        } = r;
      return {
        ...r,
        drag: l,
        dragDirectionLock: o,
        dragPropagation: u,
        dragConstraints: h,
        dragElastic: d,
        dragMomentum: g,
      };
    }
  }
  function ip(n) {
    let r = !0;
    return () => {
      if (r) {
        r = !1;
        return;
      }
      n();
    };
  }
  function Gw(n, r, l) {
    const o = kf(n, ip(l)),
      u = kf(r, ip(l));
    return () => {
      (o(), u());
    };
  }
  function Kr(n, r, l) {
    return (r === !0 || r === n) && (l === null || l === n);
  }
  function Xw(n, r = 10) {
    let l = null;
    return (Math.abs(n.y) > r ? (l = "y") : Math.abs(n.x) > r && (l = "x"), l);
  }
  class Kw extends ya {
    constructor(r) {
      (super(r),
        (this.removeGroupControls = Se),
        (this.removeListeners = Se),
        (this.controls = new qw(r)));
    }
    mount() {
      const { dragControls: r } = this.node.getProps();
      (r && (this.removeGroupControls = r.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || Se));
    }
    update() {
      const { dragControls: r } = this.node.getProps(),
        { dragControls: l } = this.node.prevProps || {};
      r !== l &&
        (this.removeGroupControls(),
        r && (this.removeGroupControls = r.subscribe(this.controls)));
    }
    unmount() {
      (this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession());
    }
  }
  const zo = (n) => (r, l) => {
    n && St.update(() => n(r, l), !1, !0);
  };
  class Zw extends ya {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = Se));
    }
    onPointerDown(r) {
      this.session = new Wh(r, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Ph(this.node),
      });
    }
    createPanHandlers() {
      const {
        onPanSessionStart: r,
        onPanStart: l,
        onPan: o,
        onPanEnd: u,
      } = this.node.getProps();
      return {
        onSessionStart: zo(r),
        onStart: zo(l),
        onMove: zo(o),
        onEnd: (h, d) => {
          (delete this.session, u && St.postRender(() => u(h, d)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Mi(
        this.node.current,
        "pointerdown",
        (r) => this.onPointerDown(r),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  }
  let Ro = !1;
  class Qw extends W.Component {
    componentDidMount() {
      const {
          visualElement: r,
          layoutGroup: l,
          switchLayoutGroup: o,
          layoutId: u,
        } = this.props,
        { projection: h } = r;
      (h &&
        (l.group && l.group.add(h),
        o && o.register && u && o.register(h),
        Ro && h.root.didUpdate(),
        h.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        h.setOptions({
          ...h.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (qr.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(r) {
      const {
          layoutDependency: l,
          visualElement: o,
          drag: u,
          isPresent: h,
        } = this.props,
        { projection: d } = o;
      return (
        d &&
          ((d.isPresent = h),
          r.layoutDependency !== l &&
            d.setOptions({ ...d.options, layoutDependency: l }),
          (Ro = !0),
          u || r.layoutDependency !== l || l === void 0 || r.isPresent !== h
            ? d.willUpdate()
            : this.safeToRemove(),
          r.isPresent !== h &&
            (h
              ? d.promote()
              : d.relegate() ||
                St.postRender(() => {
                  const g = d.getStack();
                  (!g || !g.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      const { projection: r } = this.props.visualElement;
      r &&
        (r.root.didUpdate(),
        so.postRender(() => {
          !r.currentAnimation && r.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: r,
          layoutGroup: l,
          switchLayoutGroup: o,
        } = this.props,
        { projection: u } = r;
      ((Ro = !0),
        u &&
          (u.scheduleCheckAfterUnmount(),
          l && l.group && l.group.remove(u),
          o && o.deregister && o.deregister(u)));
    }
    safeToRemove() {
      const { safeToRemove: r } = this.props;
      r && r();
    }
    render() {
      return null;
    }
  }
  function rp(n) {
    const [r, l] = tw(),
      o = W.useContext(sd);
    return D.jsx(Qw, {
      ...n,
      layoutGroup: o,
      switchLayoutGroup: W.useContext(Zh),
      isPresent: r,
      safeToRemove: l,
    });
  }
  const Pw = {
    pan: { Feature: Zw },
    drag: { Feature: Kw, ProjectionNode: Vh, MeasureLayout: rp },
  };
  function sp(n, r, l) {
    const { props: o } = n;
    n.animationState &&
      o.whileHover &&
      n.animationState.setActive("whileHover", l === "Start");
    const u = "onHover" + l,
      h = o[u];
    h && St.postRender(() => h(r, Ei(r)));
  }
  class Jw extends ya {
    mount() {
      const { current: r } = this.node;
      r &&
        (this.unmount = Ab(
          r,
          (l, o) => (sp(this.node, o, "Start"), (u) => sp(this.node, u, "End")),
        ));
    }
    unmount() {}
  }
  class Fw extends ya {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let r = !1;
      try {
        r = this.node.current.matches(":focus-visible");
      } catch {
        r = !0;
      }
      !r ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = fi(
        Ai(this.node.current, "focus", () => this.onFocus()),
        Ai(this.node.current, "blur", () => this.onBlur()),
      );
    }
    unmount() {}
  }
  function lp(n, r, l) {
    const { props: o } = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
    n.animationState &&
      o.whileTap &&
      n.animationState.setActive("whileTap", l === "Start");
    const u = "onTap" + (l === "End" ? "" : l),
      h = o[u];
    h && St.postRender(() => h(r, Ei(r)));
  }
  class Ww extends ya {
    mount() {
      const { current: r } = this.node;
      if (!r) return;
      const { globalTapTarget: l, propagate: o } = this.node.props;
      this.unmount = Rb(
        r,
        (u, h) => (
          lp(this.node, h, "Start"),
          (d, { success: g }) => lp(this.node, d, g ? "End" : "Cancel")
        ),
        { useGlobalTarget: l, stopPropagation: o?.tap === !1 },
      );
    }
    unmount() {}
  }
  const Oo = new WeakMap(),
    _o = new WeakMap(),
    $w = (n) => {
      const r = Oo.get(n.target);
      r && r(n);
    },
    Iw = (n) => {
      n.forEach($w);
    };
  function t1({ root: n, ...r }) {
    const l = n || document;
    _o.has(l) || _o.set(l, {});
    const o = _o.get(l),
      u = JSON.stringify(r);
    return (
      o[u] || (o[u] = new IntersectionObserver(Iw, { root: n, ...r })),
      o[u]
    );
  }
  function e1(n, r, l) {
    const o = t1(r);
    return (
      Oo.set(n, l),
      o.observe(n),
      () => {
        (Oo.delete(n), o.unobserve(n));
      }
    );
  }
  const a1 = { some: 0, all: 1 };
  class n1 extends ya {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.unmount();
      const { viewport: r = {} } = this.node.getProps(),
        { root: l, margin: o, amount: u = "some", once: h } = r,
        d = {
          root: l ? l.current : void 0,
          rootMargin: o,
          threshold: typeof u == "number" ? u : a1[u],
        },
        g = (v) => {
          const { isIntersecting: m } = v;
          if (
            this.isInView === m ||
            ((this.isInView = m), h && !m && this.hasEnteredView)
          )
            return;
          (m && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", m));
          const { onViewportEnter: y, onViewportLeave: w } =
              this.node.getProps(),
            T = m ? y : w;
          T && T(v);
        };
      return e1(this.node.current, d, g);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      const { props: r, prevProps: l } = this.node;
      ["amount", "margin", "root"].some(i1(r, l)) && this.startObserver();
    }
    unmount() {}
  }
  function i1({ viewport: n = {} }, { viewport: r = {} } = {}) {
    return (l) => n[l] !== r[l];
  }
  const r1 = {
      ...Rw,
      ...{
        inView: { Feature: n1 },
        tap: { Feature: Ww },
        focus: { Feature: Fw },
        hover: { Feature: Jw },
      },
      ...Pw,
      ...{ layout: { ProjectionNode: Vh, MeasureLayout: rp } },
    },
    kt = Ew(r1, Mw);
  const s1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    l1 = (n) =>
      n.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, l, o) =>
        o ? o.toUpperCase() : l.toLowerCase(),
      ),
    op = (n) => {
      const r = l1(n);
      return r.charAt(0).toUpperCase() + r.slice(1);
    },
    cp = (...n) =>
      n
        .filter((r, l, o) => !!r && r.trim() !== "" && o.indexOf(r) === l)
        .join(" ")
        .trim(),
    o1 = (n) => {
      for (const r in n)
        if (r.startsWith("aria-") || r === "role" || r === "title") return !0;
    };
  var c1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const u1 = W.forwardRef(
    (
      {
        color: n = "currentColor",
        size: r = 24,
        strokeWidth: l = 2,
        absoluteStrokeWidth: o,
        className: u = "",
        children: h,
        iconNode: d,
        ...g
      },
      v,
    ) =>
      W.createElement(
        "svg",
        {
          ref: v,
          ...c1,
          width: r,
          height: r,
          stroke: n,
          strokeWidth: o ? (Number(l) * 24) / Number(r) : l,
          className: cp("lucide", u),
          ...(!h && !o1(g) && { "aria-hidden": "true" }),
          ...g,
        },
        [
          ...d.map(([m, y]) => W.createElement(m, y)),
          ...(Array.isArray(h) ? h : [h]),
        ],
      ),
  );
  const We = (n, r) => {
    const l = W.forwardRef(({ className: o, ...u }, h) =>
      W.createElement(u1, {
        ref: h,
        iconNode: r,
        className: cp(`lucide-${s1(op(n))}`, `lucide-${n}`, o),
        ...u,
      }),
    );
    return ((l.displayName = op(n)), l);
  };
  const d1 = We("award", [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ]);
  const f1 = We("briefcase", [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
    ],
  ]);
  const h1 = We("chevron-down", [
    ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
  ]);
  const p1 = We("download", [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ]);
  const m1 = We("file-text", [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ]);
  const g1 = We("graduation-cap", [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ]);
  const v1 = We("map-pin", [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ]);
  const up = We("settings", [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]);
  const dp = We("wrench", [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
        key: "1ngwbx",
      },
    ],
  ]);
  var fp = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    hp = pa.createContext && pa.createContext(fp),
    y1 = ["attr", "size", "title"];
  function b1(n, r) {
    if (n == null) return {};
    var l,
      o,
      u = x1(n, r);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(n);
      for (o = 0; o < h.length; o++)
        ((l = h[o]),
          r.indexOf(l) === -1 &&
            {}.propertyIsEnumerable.call(n, l) &&
            (u[l] = n[l]));
    }
    return u;
  }
  function x1(n, r) {
    if (n == null) return {};
    var l = {};
    for (var o in n)
      if ({}.hasOwnProperty.call(n, o)) {
        if (r.indexOf(o) !== -1) continue;
        l[o] = n[o];
      }
    return l;
  }
  function Zr() {
    return (
      (Zr = Object.assign
        ? Object.assign.bind()
        : function (n) {
            for (var r = 1; r < arguments.length; r++) {
              var l = arguments[r];
              for (var o in l) ({}).hasOwnProperty.call(l, o) && (n[o] = l[o]);
            }
            return n;
          }),
      Zr.apply(null, arguments)
    );
  }
  function pp(n, r) {
    var l = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(n);
      (r &&
        (o = o.filter(function (u) {
          return Object.getOwnPropertyDescriptor(n, u).enumerable;
        })),
        l.push.apply(l, o));
    }
    return l;
  }
  function Qr(n) {
    for (var r = 1; r < arguments.length; r++) {
      var l = arguments[r] != null ? arguments[r] : {};
      r % 2
        ? pp(Object(l), !0).forEach(function (o) {
            w1(n, o, l[o]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
          : pp(Object(l)).forEach(function (o) {
              Object.defineProperty(
                n,
                o,
                Object.getOwnPropertyDescriptor(l, o),
              );
            });
    }
    return n;
  }
  function w1(n, r, l) {
    return (
      (r = S1(r)) in n
        ? Object.defineProperty(n, r, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (n[r] = l),
      n
    );
  }
  function S1(n) {
    var r = T1(n, "string");
    return typeof r == "symbol" ? r : r + "";
  }
  function T1(n, r) {
    if (typeof n != "object" || !n) return n;
    var l = n[Symbol.toPrimitive];
    if (l !== void 0) {
      var o = l.call(n, r);
      if (typeof o != "object") return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(n);
  }
  function mp(n) {
    return (
      n &&
      n.map((r, l) =>
        pa.createElement(r.tag, Qr({ key: l }, r.attr), mp(r.child)),
      )
    );
  }
  function Co(n) {
    return (r) =>
      pa.createElement(A1, Zr({ attr: Qr({}, n.attr) }, r), mp(n.child));
  }
  function A1(n) {
    var r = (l) => {
      var { attr: o, size: u, title: h } = n,
        d = b1(n, y1),
        g = u || l.size || "1em",
        v;
      return (
        l.className && (v = l.className),
        n.className && (v = (v ? v + " " : "") + n.className),
        pa.createElement(
          "svg",
          Zr(
            { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
            l.attr,
            o,
            d,
            {
              className: v,
              style: Qr(Qr({ color: n.color || l.color }, l.style), n.style),
              height: g,
              width: g,
              xmlns: "http://www.w3.org/2000/svg",
            },
          ),
          h && pa.createElement("title", null, h),
          n.children,
        )
      );
    };
    return hp !== void 0
      ? pa.createElement(hp.Consumer, null, (l) => r(l))
      : r(fp);
  }
  function E1(n) {
    return Co({
      attr: { role: "img", viewBox: "0 0 24 24" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
          },
          child: [],
        },
      ],
    })(n);
  }
  function M1(n) {
    return Co({
      attr: { role: "img", viewBox: "0 0 24 24" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
          },
          child: [],
        },
      ],
    })(n);
  }
  function D1(n) {
    return Co({
      attr: { role: "img", viewBox: "0 0 24 24" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
          },
          child: [],
        },
      ],
    })(n);
  }
  const Jt = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    Di = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };
  function Pr({ number: n, label: r }) {
    return D.jsxs(kt.div, {
      variants: Jt,
      className:
        "text-xs tracking-widest text-primary uppercase border-l-2 border-primary pl-4 mb-6 md:mb-0",
      children: [n, " // ", r],
    });
  }
  function k1() {
    return D.jsxs("div", {
      className:
        "min-h-screen text-foreground font-mono selection:bg-primary selection:text-primary-foreground overflow-x-hidden",
      children: [
        D.jsx("div", {
          className: "fixed inset-0 z-[-2] blueprint-grid opacity-25",
        }),
        D.jsx("div", {
          className:
            "fixed inset-0 z-[-2] blueprint-grid-dense opacity-15 pointer-events-none",
        }),
        D.jsxs("div", {
          className: "fixed inset-0 z-[-1] overflow-hidden pointer-events-none",
          children: [
            D.jsx("div", { className: "orb orb-1" }),
            D.jsx("div", { className: "orb orb-2" }),
            D.jsx("div", { className: "orb orb-3" }),
          ],
        }),
        D.jsx("div", {
          className: "fixed inset-0 z-[-1] noise-overlay pointer-events-none",
        }),
        D.jsxs("nav", {
          className:
            "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 md:px-12 py-4 backdrop-blur-sm border-b border-border/30",
          children: [
            D.jsxs("nav", {
              className:
                "fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-3 px-4 md:px-12 py-4 backdrop-blur-sm border-b border-border/30",
              children: [
                D.jsx("div", {
                  className: ""text-primary font-bold tracking-tighter text-lg shrink-0 faa-logo-glow"",
                  children: "Faa.",
                }),
                D.jsx("div", {
                  className:
                    "block text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis",
                  children: D.jsxs("div", {
                    className: "flex flex-col items-end leading-tight",
                    children: [
                      D.jsx("span", {
                        children: "V Beta-0.1.1 // STATUS: ONLINE",
                      }),
                      D.jsx("span", {
                        className: "text-[9px] sm:text-[10px] text-primary opacity-80",
                        children: "NEW UPDATE: NOVEMBER 2026",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        D.jsxs("main", {
          className:
            "max-w-5xl mx-auto px-5 md:px-12 pt-24 md:pt-28 pb-20 space-y-20 md:space-y-32",
          children: [
            D.jsxs(kt.section, {
              initial: "hidden",
              animate: "visible",
              variants: Di,
              className:
                "relative flex flex-col justify-center min-h-[calc(100svh-6rem)]",
              children: [
                D.jsxs("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center",
                  children: [
                    D.jsxs("div", {
                      className: "flex flex-col order-1",
                      children: [
                        D.jsxs(kt.div, {
                          variants: Jt,
                          className:
                            "flex items-center gap-2 text-primary mb-4 md:mb-6",
                          children: [
                            D.jsx(up, {
                              className:
                                "w-4 h-4 animate-[spin_4s_linear_infinite]",
                            }),
                            D.jsx("span", {
                              className:
                                "text-xs md:text-sm uppercase tracking-widest font-semibold",
                              children: "SMKN 1 Rembang",
                            }),
                          ],
                        }),
                        D.jsxs(kt.h1, {
                          variants: Jt,
                          className:
                            "text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mb-3 md:mb-4 uppercase leading-none",
                          children: ["FAUZI", D.jsx("br", {}), "RAMADHAN"],
                        }),
                        D.jsx(kt.div, {
                          variants: Jt,
                          className:
                            "w-16 md:w-20 h-1.5 bg-primary mb-4 md:mb-6",
                        }),
                        D.jsx(kt.p, {
                          variants: Jt,
                          className:
                            "text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 font-sans max-w-sm",
                          children:
                            "Mechanical Engineering Student. Precise, technical, and proud of hands-on craft.",
                        }),
                        D.jsxs(kt.div, {
                          variants: Jt,
                          className:
                            "flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8",
                          children: [
                            D.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-xs md:text-sm text-muted-foreground border border-border px-3 py-1.5 bg-card/50 backdrop-blur",
                              children: [
                                D.jsx(v1, {
                                  className:
                                    "w-3.5 h-3.5 text-primary flex-shrink-0",
                                }),
                                D.jsx("span", {
                                  children: "Rembang, Jawa Tengah",
                                }),
                              ],
                            }),
                            D.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-xs md:text-sm text-muted-foreground border border-border px-3 py-1.5 bg-card/50 backdrop-blur",
                              children: [
                                D.jsx(dp, {
                                  className:
                                    "w-3.5 h-3.5 text-primary flex-shrink-0",
                                }),
                                D.jsx("span", { children: "Teknik Pemesinan" }),
                              ],
                            }),
                          ],
                        }),
                        D.jsxs(kt.div, {
                          variants: Jt,
                          className: "flex flex-wrap items-center gap-3",
                          children: [
                            D.jsxs("a", {
                              href: "./cv-faa-ramadhan.pdf",
                              download: "CV-Faa-Ramadhan.pdf",
                              className:
                                "flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors",
                              children: [
                                D.jsx(p1, { className: "w-4 h-4" }),
                                "Download CV",
                              ],
                            }),
                            D.jsx("a", {
                              href: "https://wa.me/6281958964900?text=Halo%20Faa%20Ramadhan",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              title: "WhatsApp",
                              className:
                                "w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors",
                              children: D.jsx(E1, { className: "w-4 h-4" }),
                            }),
                            D.jsx("a", {
                              href: "mailto:fauziramadhanmc126@gmail.com",
                              title: "Email",
                              className:
                                "w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors",
                              children: D.jsx(M1, { className: "w-4 h-4" }),
                            }),
                            D.jsx("a", {
                              href: "https://github.com/FaaRamadhan2",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              title: "GitHub",
                              className:
                                "w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors",
                              children: D.jsx(D1, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    D.jsx(kt.div, {
                      variants: Jt,
                      className: "flex items-center justify-center order-2",
                      children: D.jsxs("div", {
                        className:
                          "relative w-56 sm:w-72 md:w-full max-w-xs md:max-w-sm mx-auto",
                        children: [
                          D.jsx("div", {
                            className:
                              "absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-90",
                          }),
                          D.jsx("img", {
                            src: b0,
                            alt: "CNC Lathe Machine Illustration",
                            className:
                              "relative w-full h-auto object-contain drop-shadow-2xl",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                D.jsxs(kt.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 1.2, duration: 1 },
                  className:
                    "hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground",
                  children: [
                    D.jsx("span", {
                      className: "text-[10px] uppercase tracking-widest",
                      children: "Scroll",
                    }),
                    D.jsx(h1, { className: "w-4 h-4 animate-bounce" }),
                  ],
                }),
              ],
            }),
            D.jsx(kt.section, {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              variants: Di,
              children: D.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-start",
                children: [
                  D.jsx("div", {
                    className: "md:col-span-4",
                    children: D.jsx(Pr, {
                      number: "01",
                      label: "Profile",
                    }),
                  }),
                  D.jsxs(kt.div, {
                    variants: Jt,
                    className:
                      "md:col-span-8 tech-border bg-card/30 p-6 md:p-8 backdrop-blur",
                    children: [
                      D.jsxs("h3", {
                        className:
                          "text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3",
                        children: [
                          D.jsx(m1, { className: "text-primary w-5 h-5" }),
                          "ABOUT ME",
                        ],
                      }),
                      D.jsxs("p", {
                        className:
                          "text-muted-foreground leading-relaxed font-sans text-sm md:text-base lg:text-lg",
                        children: [
                          "Siswa SMK dengan fokus di",
                          " ",
                          D.jsx("strong", {
                            className: "text-foreground",
                            children: "Mechanical Engineering",
                          }),
                          ". Berpengalaman praktik machining (bubut, frais), CAD/CAM, CNC software, dan Autodesk Inventor. Terbiasa dari proses desain teknik sampai produksi dan finishing.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            D.jsx(kt.section, {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              variants: Di,
              children: D.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-start",
                children: [
                  D.jsx("div", {
                    className: "md:col-span-4",
                    children: D.jsx(Pr, { number: "02", label: "Skills" }),
                  }),
                  D.jsxs("div", {
                    className: "md:col-span-8 space-y-4 md:space-y-6",
                    children: [
                      D.jsxs(kt.div, {
                        variants: Jt,
                        className:
                          "tech-border bg-card/30 p-5 md:p-6 backdrop-blur",
                        children: [
                          D.jsxs("h4", {
                            className:
                              "text-xs text-primary mb-3 md:mb-4 uppercase tracking-widest flex items-center gap-2",
                            children: [
                              D.jsx(up, { className: "w-3.5 h-3.5" }),
                              " Main Skills",
                            ],
                          }),
                          D.jsx("div", {
                            className: "flex flex-wrap gap-2 md:gap-3",
                            children: [
                              "CAD/CAM",
                              "CNC Software",
                              "Autodesk Inventor",
                            ].map((n) =>
                              D.jsx(
                                "span",
                                {
                                  className:
                                    "px-2.5 py-1 md:px-3 md:py-1.5 border border-border text-foreground text-xs md:text-sm bg-background",
                                  children: n,
                                },
                                n,
                              ),
                            ),
                          }),
                        ],
                      }),
                      D.jsxs(kt.div, {
                        variants: Jt,
                        className:
                          "tech-border bg-card/30 p-5 md:p-6 backdrop-blur",
                        children: [
                          D.jsxs("h4", {
                            className:
                              "text-xs text-primary mb-3 md:mb-4 uppercase tracking-widest flex items-center gap-2",
                            children: [
                              D.jsx(dp, { className: "w-3.5 h-3.5" }),
                              " Advance Skills",
                            ],
                          }),
                          D.jsx("div", {
                            className: "flex flex-wrap gap-2 md:gap-3",
                            children: [
                              "Bubut (Lathe)",
                              "Frais (Milling)",
                              "Welding",
                            ].map((n) =>
                              D.jsx(
                                "span",
                                {
                                  className:
                                    "px-2.5 py-1 md:px-3 md:py-1.5 border border-border text-foreground text-xs md:text-sm bg-background",
                                  children: n,
                                },
                                n,
                              ),
                            ),
                          }),
                        ],
                      }),
                      D.jsxs(kt.div, {
                        variants: Jt,
                        className:
                          "text-xs md:text-sm text-muted-foreground border-t border-border pt-4",
                        children: [
                          "Level:",
                          " ",
                          D.jsx("span", {
                            className: "text-primary font-bold",
                            children: "Intermediate",
                          }),
                          " — aktif praktik industri sekolah",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            D.jsx(kt.section, {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              variants: Di,
              children: D.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-start",
                children: [
                  D.jsx("div", {
                    className: "md:col-span-4",
                    children: D.jsx(Pr, { number: "03", label: "Project" }),
                  }),
                  D.jsxs("div", {
                    className: "md:col-span-8 space-y-6 md:space-y-8",
                    children: [
                      D.jsxs(kt.div, {
                        variants: Jt,
                        className:
                          "tech-border bg-card/30 p-5 md:p-8 backdrop-blur hover:bg-card/50 transition-colors",
                        children: [
                          D.jsxs("div", {
                            className:
                              "flex items-start justify-between gap-3 mb-3 md:mb-4",
                            children: [
                              D.jsx("h3", {
                                className:
                                  "text-base md:text-xl font-bold text-foreground leading-snug",
                                children: "Jobsheet T-Slot Assembly",
                              }),
                              D.jsx("span", {
                                className:
                                  "text-xs bg-primary/10 text-primary px-2 py-1 border border-primary/20 shrink-0",
                                children: "Frais XI",
                              }),
                            ],
                          }),
                          D.jsx("p", {
                            className:
                              "text-muted-foreground font-sans mb-4 md:mb-6 text-sm md:text-base",
                            children:
                              "Jobsheet lengkap pembuatan T-Slot assembly untuk praktik mesin frais kelas XI.",
                          }),
                          D.jsxs("div", {
                            className:
                              "grid grid-cols-2 gap-4 text-xs md:text-sm",
                            children: [
                              D.jsxs("div", {
                                children: [
                                  D.jsx("h5", {
                                    className:
                                      "text-xs text-primary uppercase mb-2",
                                    children: "Parts:",
                                  }),
                                  D.jsxs("ul", {
                                    className:
                                      "text-muted-foreground space-y-1 list-disc list-inside",
                                    children: [
                                      D.jsx("li", { children: "Balok" }),
                                      D.jsx("li", { children: "Balok T" }),
                                      D.jsx("li", { children: "Mur T" }),
                                      D.jsx("li", { children: "Baut, Mur" }),
                                    ],
                                  }),
                                ],
                              }),
                              D.jsxs("div", {
                                children: [
                                  D.jsx("h5", {
                                    className:
                                      "text-xs text-primary uppercase mb-2",
                                    children: "Processes:",
                                  }),
                                  D.jsx("div", {
                                    className:
                                      "flex flex-wrap gap-1.5 md:gap-2",
                                    children: [
                                      "Frais",
                                      "Drilling",
                                      "Tapping",
                                      "Finishing",
                                    ].map((n) =>
                                      D.jsx(
                                        "span",
                                        {
                                          className:
                                            "text-xs border border-border px-2 py-0.5",
                                          children: n,
                                        },
                                        n,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      D.jsxs(kt.div, {
                        variants: Jt,
                        className:
                          "tech-border bg-card/30 p-5 md:p-8 backdrop-blur hover:bg-card/50 transition-colors",
                        children: [
                          D.jsxs("div", {
                            className:
                              "flex items-start justify-between gap-3 mb-3 md:mb-4",
                            children: [
                              D.jsx("h3", {
                                className:
                                  "text-base md:text-xl font-bold text-foreground leading-snug",
                                children: "JOB ENGSEL — Hinge Machining",
                              }),
                              D.jsx("span", {
                                className:
                                  "text-xs bg-primary/10 text-primary px-2 py-1 border border-primary/20 shrink-0",
                                children: "Bubut",
                              }),
                            ],
                          }),
                          D.jsx("p", {
                            className:
                              "text-muted-foreground font-sans mb-4 md:mb-6 text-sm md:text-base",
                            children:
                              "Komponen engsel berbentuk silinder bertingkat untuk proses bubut.",
                          }),
                          D.jsx("div", {
                            className:
                              "bg-background/50 border border-border p-3 md:p-4 mb-4 md:mb-6 font-mono text-xs text-muted-foreground",
                            children: D.jsxs("div", {
                              className:
                                "grid grid-cols-2 md:grid-cols-3 gap-2",
                              children: [
                                D.jsxs("div", {
                                  children: [
                                    D.jsx("span", {
                                      className: "text-primary",
                                      children: "L_TOTAL:",
                                    }),
                                    " 100 mm",
                                  ],
                                }),
                                D.jsxs("div", {
                                  children: [
                                    D.jsx("span", {
                                      className: "text-primary",
                                      children: "D_LUAR:",
                                    }),
                                    " Ø25 mm",
                                  ],
                                }),
                                D.jsxs("div", {
                                  children: [
                                    D.jsx("span", {
                                      className: "text-primary",
                                      children: "D_POROS:",
                                    }),
                                    " Ø12.8 mm",
                                  ],
                                }),
                                D.jsxs("div", {
                                  children: [
                                    D.jsx("span", {
                                      className: "text-primary",
                                      children: "D_LUBANG:",
                                    }),
                                    " Ø13 mm",
                                  ],
                                }),
                                D.jsxs("div", {
                                  children: [
                                    D.jsx("span", {
                                      className: "text-primary",
                                      children: "STEP_L:",
                                    }),
                                    " 50 mm",
                                  ],
                                }),
                                D.jsxs("div", {
                                  children: [
                                    D.jsx("span", {
                                      className: "text-primary",
                                      children: "CLR:",
                                    }),
                                    " 0.2 mm",
                                  ],
                                }),
                                D.jsxs("div", {
                                  className: "col-span-2 md:col-span-1",
                                  children: [
                                    D.jsx("span", {
                                      className: "text-primary",
                                      children: "CHAMFER:",
                                    }),
                                    " 2 × 45°",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          D.jsxs("div", {
                            children: [
                              D.jsx("h5", {
                                className:
                                  "text-xs text-primary uppercase mb-2 md:mb-3",
                                children: "Process Flow:",
                              }),
                              D.jsxs("div", {
                                className:
                                  "flex flex-wrap gap-1.5 md:gap-2 text-xs items-center text-muted-foreground",
                                children: [
                                  [
                                    "Cutting",
                                    "Bubut Ø25",
                                    "Facing",
                                    "Bor Ø13",
                                    "Bubut Ø12.8",
                                    "Chamfer",
                                  ].map((n, r, l) =>
                                    D.jsxs(
                                      pa.Fragment,
                                      {
                                        children: [
                                          D.jsx("span", {
                                            className:
                                              "border border-border px-2 py-1",
                                            children: n,
                                          }),
                                          r < l.length - 1 &&
                                            D.jsx("span", {
                                              className: "text-primary",
                                              children: "→",
                                            }),
                                        ],
                                      },
                                      n,
                                    ),
                                  ),
                                  D.jsx("span", {
                                    className: "text-primary",
                                    children: "→",
                                  }),
                                  D.jsx("span", {
                                    className:
                                      "border border-border px-2 py-1 text-foreground",
                                    children: "Finishing",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            D.jsx(kt.section, {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-80px" },
              variants: Di,
              children: D.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-start",
                children: [
                  D.jsx("div", {
                    className: "md:col-span-4",
                    children: D.jsx(Pr, { number: "04", label: "Education" }),
                  }),
                  D.jsxs("div", {
                    className:
                      "md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6",
                    children: [
                      D.jsxs(kt.div, {
                        variants: Jt,
                        className:
                          "tech-border bg-card/30 p-5 md:p-6 backdrop-blur",
                        children: [
                          D.jsx(g1, {
                            className:
                              "w-5 h-5 md:w-6 md:h-6 text-primary mb-3 md:mb-4",
                          }),
                          D.jsx("h4", {
                            className: "text-base md:text-lg font-bold mb-2",
                            children: "Education",
                          }),
                          D.jsxs("div", {
                            className: "space-y-1.5 text-xs md:text-sm",
                            children: [
                              D.jsx("div", {
                                className: "text-foreground",
                                children: "SMKN 1 Rembang",
                              }),
                              D.jsx("div", {
                                className: "text-muted-foreground",
                                children: "Teknik Pemesinan",
                              }),
                              D.jsx("div", {
                                className: "text-primary",
                                children: "2025/2026 (Kelas 11)",
                              }),
                            ],
                          }),
                        ],
                      }),
                      D.jsxs(kt.div, {
                        variants: Jt,
                        className:
                          "tech-border bg-card/30 p-5 md:p-6 backdrop-blur",
                        children: [
                          D.jsx(f1, {
                            className:
                              "w-5 h-5 md:w-6 md:h-6 text-primary mb-3 md:mb-4",
                          }),
                          D.jsx("h4", {
                            className: "text-base md:text-lg font-bold mb-2",
                            children: "Experience",
                          }),
                          D.jsx("div", {
                            className:
                              "text-xs md:text-sm text-muted-foreground font-sans",
                            children:
                              "PKL (Praktik Kerja Lapangan) belum dimulai.",
                          }),
                          D.jsx("div", {
                            className:
                              "mt-3 md:mt-4 text-xs border border-border inline-block px-2 py-1 text-primary",
                            children: "START: 1 JULI 2026",
                          }),
                        ],
                      }),
                      D.jsxs(kt.div, {
                        variants: Jt,
                        className:
                          "tech-border bg-card/30 p-5 md:p-6 backdrop-blur sm:col-span-2",
                        children: [
                          D.jsx(d1, {
                            className:
                              "w-5 h-5 md:w-6 md:h-6 text-primary mb-3 md:mb-4",
                          }),
                          D.jsx("h4", {
                            className: "text-base md:text-lg font-bold mb-2",
                            children: "Achievements",
                          }),
                          D.jsxs("div", {
                            className:
                              "flex items-center gap-3 text-xs md:text-sm text-muted-foreground",
                            children: [
                              D.jsx("div", {
                                className:
                                  "w-2 h-2 bg-yellow-500 rounded-full animate-pulse shrink-0",
                              }),
                              "In Progress...",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        D.jsxs("footer", {
          className:
            "border-t border-border/50 py-6 md:py-8 text-center text-xs text-muted-foreground px-5",
          children: [
            D.jsxs("p", {
              children: [
                "SYS.PORTFOLIO // FAA_RAMADHAN © ",
                new Date().getFullYear(),
              ],
            }),
            D.jsx("p", {
              className: "mt-1.5 text-primary opacity-50",
              children: "FROM BLUEPRINT TO REALITY — BUILT BY HAND",
            }),
            D.jsx("p", {
              className: "mt-1 text-primary opacity-40",
              children: "Fa*** Ra*****n & Ra*** Au*****q",
            }),
          ],
        }),
      ],
    });
  }
  y0.createRoot(document.getElementById("root")).render(D.jsx(k1, {}));
})();
