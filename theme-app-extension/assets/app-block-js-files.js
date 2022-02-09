/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};
  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
  }
  var q = "3.2.1",
    r = function (a, b) {
      return new r.fn.init(a, b);
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function (a, b) {
      return b.toUpperCase();
    };
  (r.fn = r.prototype = {
    jquery: q,
    constructor: r,
    length: 0,
    toArray: function () {
      return f.call(this);
    },
    get: function (a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    },
    pushStack: function (a) {
      var b = r.merge(this.constructor(), a);
      return (b.prevObject = this), b;
    },
    each: function (a) {
      return r.each(this, a);
    },
    map: function (a) {
      return this.pushStack(
        r.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
    },
    slice: function () {
      return this.pushStack(f.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: h,
    sort: c.sort,
    splice: c.splice,
  }),
    (r.extend = r.fn.extend = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for (
        "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || r.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
        h < i;
        h++
      )
        if (null != (a = arguments[h]))
          for (b in a)
            (c = g[b]),
              (d = a[b]),
              g !== d &&
                (j && d && (r.isPlainObject(d) || (e = Array.isArray(d)))
                  ? (e
                      ? ((e = !1), (f = c && Array.isArray(c) ? c : []))
                      : (f = c && r.isPlainObject(c) ? c : {}),
                    (g[b] = r.extend(j, f, d)))
                  : void 0 !== d && (g[b] = d));
      return g;
    }),
    r.extend({
      expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === r.type(a);
      },
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = r.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
      },
      isPlainObject: function (a) {
        var b, c;
        return (
          !(!a || "[object Object]" !== k.call(a)) &&
          (!(b = e(a)) ||
            ((c = l.call(b, "constructor") && b.constructor),
            "function" == typeof c && m.call(c) === n))
        );
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? j[k.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        p(a);
      },
      camelCase: function (a) {
        return a.replace(t, "ms-").replace(u, v);
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (w(a)) {
          for (c = a.length; d < c; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(s, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (w(Object(a))
              ? r.merge(c, "string" == typeof a ? [a] : a)
              : h.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : i.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          f = 0,
          h = [];
        if (w(a))
          for (d = a.length; f < d; f++)
            (e = b(a[f], f, c)), null != e && h.push(e);
        else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
        return g.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e;
        if (
          ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          r.isFunction(a))
        )
          return (
            (d = f.call(arguments, 2)),
            (e = function () {
              return a.apply(b || this, d.concat(f.call(arguments)));
            }),
            (e.guid = a.guid = a.guid || r.guid++),
            e
          );
      },
      now: Date.now,
      support: o,
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return (
      "function" !== c &&
      !r.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  var x = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      J =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M =
        "\\[" +
        K +
        "*(" +
        L +
        ")(?:" +
        K +
        "*([*^$|!~]?=)" +
        K +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        L +
        "))|)" +
        K +
        "*\\]",
      N =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            K +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            K +
            "*(?:([+-]|)" +
            K +
            "*(\\d+)|))" +
            K +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            K +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            K +
            "*((?:-\\d)?\\d*)" +
            K +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function (a, b) {
        return b
          ? "\0" === a
            ? "\ufffd"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      da = function () {
        m();
      },
      ea = ta(
        function (a) {
          return a.disabled === !0 && ("form" in a || "label" in a);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      G.apply((D = H.call(v.childNodes)), v.childNodes),
        D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = {
        apply: D.length
          ? function (a, b) {
              F.apply(a, H.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== w && (l = Z.exec(a)))
          if ((f = l[1])) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = l[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return G.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) (s = b), (r = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(ba, ca))
              : b.setAttribute("id", (k = u)),
              (o = g(a)),
              (h = o.length);
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            (r = o.join(",")), (s = ($.test(a) && qa(b.parentNode)) || b);
          }
          if (r)
            try {
              return G.apply(d, s.querySelectorAll(r)), d;
            } catch (x) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(P, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return function (b) {
        return "form" in b
          ? b.parentNode && b.disabled === !1
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function pa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return !!b && "HTML" !== b.nodeName;
      }),
      (m = ga.setDocument = function (a) {
        var b,
          e,
          g = a ? a.ownerDocument || a : v;
        return g !== n && 9 === g.nodeType && g.documentElement
          ? ((n = g),
            (o = n.documentElement),
            (p = !f(n)),
            v !== n &&
              (e = n.defaultView) &&
              e.top !== e &&
              (e.addEventListener
                ? e.addEventListener("unload", da, !1)
                : e.attachEvent && e.attachEvent("onunload", da)),
            (c.attributes = ja(function (a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (c.getElementsByTagName = ja(function (a) {
              return (
                a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
            (c.getById = ja(function (a) {
              return (
                (o.appendChild(a).id = u),
                !n.getElementsByName || !n.getElementsByName(u).length
              );
            })),
            c.getById
              ? ((d.filter.ID = function (a) {
                  var b = a.replace(_, aa);
                  return function (a) {
                    return a.getAttribute("id") === b;
                  };
                }),
                (d.find.ID = function (a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : [];
                  }
                }))
              : ((d.filter.ID = function (a) {
                  var b = a.replace(_, aa);
                  return function (a) {
                    var c =
                      "undefined" != typeof a.getAttributeNode &&
                      a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                }),
                (d.find.ID = function (a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c,
                      d,
                      e,
                      f = b.getElementById(a);
                    if (f) {
                      if (((c = f.getAttributeNode("id")), c && c.value === a))
                        return [f];
                      (e = b.getElementsByName(a)), (d = 0);
                      while ((f = e[d++]))
                        if (
                          ((c = f.getAttributeNode("id")), c && c.value === a)
                        )
                          return [f];
                    }
                    return [];
                  }
                })),
            (d.find.TAG = c.getElementsByTagName
              ? function (a, b) {
                  return "undefined" != typeof b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : c.qsa
                    ? b.querySelectorAll(a)
                    : void 0;
                }
              : function (a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                }),
            (d.find.CLASS =
              c.getElementsByClassName &&
              function (a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p)
                  return b.getElementsByClassName(a);
              }),
            (r = []),
            (q = []),
            (c.qsa = Y.test(n.querySelectorAll)) &&
              (ja(function (a) {
                (o.appendChild(a).innerHTML =
                  "<a id='" +
                  u +
                  "'></a><select id='" +
                  u +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    q.push("[*^$]=" + K + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    q.push("\\[" + K + "*(?:value|" + J + ")"),
                  a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                  a.querySelectorAll(":checked").length || q.push(":checked"),
                  a.querySelectorAll("a#" + u + "+*").length ||
                    q.push(".#.+[+~]");
              }),
              ja(function (a) {
                a.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    q.push("name" + K + "*[*^$|!~]?="),
                  2 !== a.querySelectorAll(":enabled").length &&
                    q.push(":enabled", ":disabled"),
                  (o.appendChild(a).disabled = !0),
                  2 !== a.querySelectorAll(":disabled").length &&
                    q.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  q.push(",.*:");
              })),
            (c.matchesSelector = Y.test(
              (s =
                o.matches ||
                o.webkitMatchesSelector ||
                o.mozMatchesSelector ||
                o.oMatchesSelector ||
                o.msMatchesSelector)
            )) &&
              ja(function (a) {
                (c.disconnectedMatch = s.call(a, "*")),
                  s.call(a, "[s!='']:x"),
                  r.push("!=", N);
              }),
            (q = q.length && new RegExp(q.join("|"))),
            (r = r.length && new RegExp(r.join("|"))),
            (b = Y.test(o.compareDocumentPosition)),
            (t =
              b || Y.test(o.contains)
                ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                : function (a, b) {
                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                    return !1;
                  }),
            (B = b
              ? function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var d =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return d
                    ? d
                    : ((d =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & d ||
                      (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === n || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === n || (b.ownerDocument === v && t(v, b))
                          ? 1
                          : k
                          ? I(k, a) - I(k, b)
                          : 0
                        : 4 & d
                        ? -1
                        : 1);
                }
              : function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                  if (!e || !f)
                    return a === n
                      ? -1
                      : b === n
                      ? 1
                      : e
                      ? -1
                      : f
                      ? 1
                      : k
                      ? I(k, a) - I(k, b)
                      : 0;
                  if (e === f) return la(a, b);
                  c = a;
                  while ((c = c.parentNode)) g.unshift(c);
                  c = b;
                  while ((c = c.parentNode)) h.unshift(c);
                  while (g[d] === h[d]) d++;
                  return d
                    ? la(g[d], h[d])
                    : g[d] === v
                    ? -1
                    : h[d] === v
                    ? 1
                    : 0;
                }),
            n)
          : n;
      }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(S, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.escape = function (a) {
        return (a + "").replace(ba, ca);
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText = function (a) {
        var b,
          c = "",
          d = 0,
          f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
          } else if (3 === f || 4 === f) return a.nodeValue;
        } else while ((b = a[d++])) c += e(b);
        return c;
      }),
      (d = ga.selectors = {
        cacheLength: 50,
        createPseudo: ia,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(_, aa)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || ga.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && ga.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var b,
              c = !a[6] && a[2];
            return V.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    T.test(c) &&
                    (b = g(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(_, aa).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function (a) {
            var b = y[a + " "];
            return (
              b ||
              ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                y(a, function (a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      ("undefined" != typeof a.getAttribute &&
                        a.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (a, b, c) {
            return function (d) {
              var e = ga.attr(d, a);
              return null == e
                ? "!=" === b
                : !b ||
                    ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1
                      : "|=" === b &&
                        (e === c || e.slice(0, c.length + 1) === c + "-"));
            };
          },
          CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (b, c, i) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h,
                    t = !1;
                  if (q) {
                    if (f) {
                      while (p) {
                        m = b;
                        while ((m = m[p]))
                          if (
                            h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType
                          )
                            return !1;
                        o = p = "only" === a && !o && "nextSibling";
                      }
                      return !0;
                    }
                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                      (m = q),
                        (l = m[u] || (m[u] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (t = n && j[2]),
                        (m = n && q.childNodes[n]);
                      while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                        if (1 === m.nodeType && ++t && m === b) {
                          k[a] = [w, n, t];
                          break;
                        }
                    } else if (
                      (s &&
                        ((m = b),
                        (l = m[u] || (m[u] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (t = n)),
                      t === !1)
                    )
                      while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                        if (
                          (h
                            ? m.nodeName.toLowerCase() === r
                            : 1 === m.nodeType) &&
                          ++t &&
                          (s &&
                            ((l = m[u] || (m[u] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (k[a] = [w, t])),
                          m === b)
                        )
                          break;
                    return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                  }
                };
          },
          PSEUDO: function (a, b) {
            var c,
              e =
                d.pseudos[a] ||
                d.setFilters[a.toLowerCase()] ||
                ga.error("unsupported pseudo: " + a);
            return e[u]
              ? e(b)
              : e.length > 1
              ? ((c = [a, a, "", b]),
                d.setFilters.hasOwnProperty(a.toLowerCase())
                  ? ia(function (a, c) {
                      var d,
                        f = e(a, b),
                        g = f.length;
                      while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]));
                    })
                  : function (a) {
                      return e(a, 0, c);
                    })
              : e;
          },
        },
        pseudos: {
          not: ia(function (a) {
            var b = [],
              c = [],
              d = h(a.replace(P, "$1"));
            return d[u]
              ? ia(function (a, b, c, e) {
                  var f,
                    g = d(a, null, e, []),
                    h = a.length;
                  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                })
              : function (a, e, f) {
                  return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                };
          }),
          has: ia(function (a) {
            return function (b) {
              return ga(a, b).length > 0;
            };
          }),
          contains: ia(function (a) {
            return (
              (a = a.replace(_, aa)),
              function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              }
            );
          }),
          lang: ia(function (a) {
            return (
              U.test(a || "") || ga.error("unsupported lang: " + a),
              (a = a.replace(_, aa).toLowerCase()),
              function (b) {
                var c;
                do
                  if (
                    (c = p
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function (a) {
            return a === o;
          },
          focus: function (a) {
            return (
              a === n.activeElement &&
              (!n.hasFocus || n.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: oa(!1),
          disabled: oa(!0),
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function (a) {
            return !d.pseudos.empty(a);
          },
          header: function (a) {
            return X.test(a.nodeName);
          },
          input: function (a) {
            return W.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: pa(function () {
            return [0];
          }),
          last: pa(function (a, b) {
            return [b - 1];
          }),
          eq: pa(function (a, b, c) {
            return [c < 0 ? c + b : c];
          }),
          even: pa(function (a, b) {
            for (var c = 0; c < b; c += 2) a.push(c);
            return a;
          }),
          odd: pa(function (a, b) {
            for (var c = 1; c < b; c += 2) a.push(c);
            return a;
          }),
          lt: pa(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
            return a;
          }),
          gt: pa(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
            return a;
          }),
        },
      }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function ra() {}
    (ra.prototype = d.filters = d.pseudos),
      (d.setFilters = new ra()),
      (g = ga.tokenize = function (a, b) {
        var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = d.preFilter);
        while (h) {
          (c && !(e = Q.exec(h))) ||
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (c = !1),
            (e = R.exec(h)) &&
              ((c = e.shift()),
              f.push({ value: c, type: e[0].replace(P, " ") }),
              (h = h.slice(c.length)));
          for (g in d.filter)
            !(e = V[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((c = e.shift()),
              f.push({ value: c, type: g, matches: e }),
              (h = h.slice(c.length)));
          if (!c) break;
        }
        return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
      });
    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first
        ? function (b, c, e) {
            while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e);
            return !1;
          }
        : function (b, c, i) {
            var j,
              k,
              l,
              m = [w, h];
            if (i) {
              while ((b = b[d]))
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[u] || (b[u] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b;
                  else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)
                      return (m[2] = j[2]);
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                  }
            return !1;
          };
    }
    function ua(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
      return c;
    }
    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function xa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = xa(d)),
        e && !e[u] && (e = xa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : wa(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = wa(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? I(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
        })
      );
    }
    function ya(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ta(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ta(
            function (a) {
              return I(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        i < f;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
            return xa(
              i > 1 && ua(m),
              i > 1 &&
                sa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(P, "$1"),
              c,
              i < e && ya(a.slice(i, e)),
              e < f && ya((a = a.slice(e))),
              e < f && sa(a)
            );
          }
          m.push(c);
        }
      return ua(m);
    }
    function za(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
              u = wa(u);
            }
            G.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile = function (a, b) {
        var c,
          d = [],
          e = [],
          f = A[a + " "];
        if (!f) {
          b || (b = g(a)), (c = b.length);
          while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
          (f = A(a, za(e, d))), (f.selector = a);
        }
        return f;
      }),
      (i = ga.select = function (a, b, c, e) {
        var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g((a = m.selector || a));
        if (((c = c || []), 1 === n.length)) {
          if (
            ((i = n[0] = n[0].slice(0)),
            i.length > 2 &&
              "ID" === (j = i[0]).type &&
              9 === b.nodeType &&
              p &&
              d.relative[i[1].type])
          ) {
            if (
              ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)
            )
              return c;
            m && (b = b.parentNode), (a = a.slice(i.shift().value.length));
          }
          f = V.needsContext.test(a) ? 0 : i.length;
          while (f--) {
            if (((j = i[f]), d.relative[(k = j.type)])) break;
            if (
              (l = d.find[k]) &&
              (e = l(
                j.matches[0].replace(_, aa),
                ($.test(i[0].type) && qa(b.parentNode)) || b
              ))
            ) {
              if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                return G.apply(c, e), c;
              break;
            }
          }
        }
        return (
          (m || h(a, n))(
            e,
            b,
            !p,
            c,
            !b || ($.test(a) && qa(b.parentNode)) || b
          ),
          c
        );
      }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(J, function (a, b, c) {
          var d;
          if (!c)
            return a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
        }),
      ga
    );
  })(a);
  (r.find = x),
    (r.expr = x.selectors),
    (r.expr[":"] = r.expr.pseudos),
    (r.uniqueSort = r.unique = x.uniqueSort),
    (r.text = x.getText),
    (r.isXMLDoc = x.isXML),
    (r.contains = x.contains),
    (r.escapeSelector = x.escape);
  var y = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    z = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    A = r.expr.match.needsContext;
  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function E(a, b, c) {
    return r.isFunction(b)
      ? r.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        })
      : b.nodeType
      ? r.grep(a, function (a) {
          return (a === b) !== c;
        })
      : "string" != typeof b
      ? r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c;
        })
      : D.test(b)
      ? r.filter(b, a, c)
      : ((b = r.filter(b, a)),
        r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
  }
  (r.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? r.find.matchesSelector(d, a)
          ? [d]
          : []
        : r.find.matches(
            a,
            r.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    r.fn.extend({
      find: function (a) {
        var b,
          c,
          d = this.length,
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            r(a).filter(function () {
              for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            })
          );
        for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
        return d > 1 ? r.uniqueSort(c) : c;
      },
      filter: function (a) {
        return this.pushStack(E(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(E(this, a || [], !0));
      },
      is: function (a) {
        return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1)
          .length;
      },
    });
  var F,
    G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = (r.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || F), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : G.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof r ? b[0] : b),
            r.merge(
              this,
              r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            C.test(e[1]) && r.isPlainObject(b))
          )
            for (e in b)
              r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && ((this[0] = f), (this.length = 1)),
          this
        );
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : r.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(r)
        : r.makeArray(a, this);
    });
  (H.prototype = r.fn), (F = r(d));
  var I = /^(?:parents|prev(?:Until|All))/,
    J = { children: !0, contents: !0, next: !0, prev: !0 };
  r.fn.extend({
    has: function (a) {
      var b = r(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && r(a);
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && r.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? i.call(r(a), this[0])
          : i.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  r.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return y(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return y(a, "parentNode", c);
      },
      next: function (a) {
        return K(a, "nextSibling");
      },
      prev: function (a) {
        return K(a, "previousSibling");
      },
      nextAll: function (a) {
        return y(a, "nextSibling");
      },
      prevAll: function (a) {
        return y(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return y(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return y(a, "previousSibling", c);
      },
      siblings: function (a) {
        return z((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return z(a.firstChild);
      },
      contents: function (a) {
        return B(a, "iframe")
          ? a.contentDocument
          : (B(a, "template") && (a = a.content || a),
            r.merge([], a.childNodes));
      },
    },
    function (a, b) {
      r.fn[a] = function (c, d) {
        var e = r.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = r.filter(d, e)),
          this.length > 1 &&
            (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var L = /[^\x20\t\r\n\f]+/g;
  function M(a) {
    var b = {};
    return (
      r.each(a.match(L) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                r.each(b, function (b, c) {
                  r.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== r.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            r.each(arguments, function (a, b) {
              var c;
              while ((c = r.inArray(b, f, c)) > -1)
                f.splice(c, 1), c <= h && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || b || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  };
  function N(a) {
    return a;
  }
  function O(a) {
    throw a;
  }
  function P(a, b, c, d) {
    var e;
    try {
      a && r.isFunction((e = a.promise))
        ? e.call(a).done(b).fail(c)
        : a && r.isFunction((e = a.then))
        ? e.call(a, b, c)
        : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }
  r.extend({
    Deferred: function (b) {
      var c = [
          [
            "notify",
            "progress",
            r.Callbacks("memory"),
            r.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        d = "pending",
        e = {
          state: function () {
            return d;
          },
          always: function () {
            return f.done(arguments).fail(arguments), this;
          },
          catch: function (a) {
            return e.then(null, a);
          },
          pipe: function () {
            var a = arguments;
            return r
              .Deferred(function (b) {
                r.each(c, function (c, d) {
                  var e = r.isFunction(a[d[4]]) && a[d[4]];
                  f[d[1]](function () {
                    var a = e && e.apply(this, arguments);
                    a && r.isFunction(a.promise)
                      ? a
                          .promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject)
                      : b[d[0] + "With"](this, e ? [a] : arguments);
                  });
                }),
                  (a = null);
              })
              .promise();
          },
          then: function (b, d, e) {
            var f = 0;
            function g(b, c, d, e) {
              return function () {
                var h = this,
                  i = arguments,
                  j = function () {
                    var a, j;
                    if (!(b < f)) {
                      if (((a = d.apply(h, i)), a === c.promise()))
                        throw new TypeError("Thenable self-resolution");
                      (j =
                        a &&
                        ("object" == typeof a || "function" == typeof a) &&
                        a.then),
                        r.isFunction(j)
                          ? e
                            ? j.call(a, g(f, c, N, e), g(f, c, O, e))
                            : (f++,
                              j.call(
                                a,
                                g(f, c, N, e),
                                g(f, c, O, e),
                                g(f, c, N, c.notifyWith)
                              ))
                          : (d !== N && ((h = void 0), (i = [a])),
                            (e || c.resolveWith)(h, i));
                    }
                  },
                  k = e
                    ? j
                    : function () {
                        try {
                          j();
                        } catch (a) {
                          r.Deferred.exceptionHook &&
                            r.Deferred.exceptionHook(a, k.stackTrace),
                            b + 1 >= f &&
                              (d !== O && ((h = void 0), (i = [a])),
                              c.rejectWith(h, i));
                        }
                      };
                b
                  ? k()
                  : (r.Deferred.getStackHook &&
                      (k.stackTrace = r.Deferred.getStackHook()),
                    a.setTimeout(k));
              };
            }
            return r
              .Deferred(function (a) {
                c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                  c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                  c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
              })
              .promise();
          },
          promise: function (a) {
            return null != a ? r.extend(a, e) : e;
          },
        },
        f = {};
      return (
        r.each(c, function (a, b) {
          var g = b[2],
            h = b[5];
          (e[b[1]] = g.add),
            h &&
              g.add(
                function () {
                  d = h;
                },
                c[3 - a][2].disable,
                c[0][2].lock
              ),
            g.add(b[3].fire),
            (f[b[0]] = function () {
              return (
                f[b[0] + "With"](this === f ? void 0 : this, arguments), this
              );
            }),
            (f[b[0] + "With"] = g.fireWith);
        }),
        e.promise(f),
        b && b.call(f, f),
        f
      );
    },
    when: function (a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = f.call(arguments),
        g = r.Deferred(),
        h = function (a) {
          return function (c) {
            (d[a] = this),
              (e[a] = arguments.length > 1 ? f.call(arguments) : c),
              --b || g.resolveWith(d, e);
          };
        };
      if (
        b <= 1 &&
        (P(a, g.done(h(c)).resolve, g.reject, !b),
        "pending" === g.state() || r.isFunction(e[c] && e[c].then))
      )
        return g.then();
      while (c--) P(e[c], h(c), g.reject);
      return g.promise();
    },
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (r.Deferred.exceptionHook = function (b, c) {
    a.console &&
      a.console.warn &&
      b &&
      Q.test(b.name) &&
      a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }),
    (r.readyException = function (b) {
      a.setTimeout(function () {
        throw b;
      });
    });
  var R = r.Deferred();
  (r.fn.ready = function (a) {
    return (
      R.then(a)["catch"](function (a) {
        r.readyException(a);
      }),
      this
    );
  }),
    r.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (a) {
        (a === !0 ? --r.readyWait : r.isReady) ||
          ((r.isReady = !0),
          (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
      },
    }),
    (r.ready.then = R.then);
  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S),
      r.ready();
  }
  "complete" === d.readyState ||
  ("loading" !== d.readyState && !d.documentElement.doScroll)
    ? a.setTimeout(r.ready)
    : (d.addEventListener("DOMContentLoaded", S),
      a.addEventListener("load", S));
  var T = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        r.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(r(a), c);
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    U = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function V() {
    this.expando = r.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (a) {
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            U(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[r.camelCase(b)] = c;
        else for (d in b) e[r.camelCase(d)] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][r.camelCase(b)];
      },
      access: function (a, b, c) {
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d = a[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b) {
            Array.isArray(b)
              ? (b = b.map(r.camelCase))
              : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(L) || [])),
              (c = b.length);
            while (c--) delete d[b[c]];
          }
          (void 0 === b || r.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !r.isEmptyObject(b);
      },
    });
  var W = new V(),
    X = new V(),
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function $(a) {
    return (
      "true" === a ||
      ("false" !== a &&
        ("null" === a
          ? null
          : a === +a + ""
          ? +a
          : Y.test(a)
          ? JSON.parse(a)
          : a))
    );
  }
  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c = $(c);
        } catch (e) {}
        X.set(a, b, c);
      } else c = void 0;
    return c;
  }
  r.extend({
    hasData: function (a) {
      return X.hasData(a) || W.hasData(a);
    },
    data: function (a, b, c) {
      return X.access(a, b, c);
    },
    removeData: function (a, b) {
      X.remove(a, b);
    },
    _data: function (a, b, c) {
      return W.access(a, b, c);
    },
    _removeData: function (a, b) {
      W.remove(a, b);
    },
  }),
    r.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = X.get(f)), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = r.camelCase(d.slice(5))), _(f, d, e[d])));
            W.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              X.set(this, a);
            })
          : T(
              this,
              function (b) {
                var c;
                if (f && void 0 === b) {
                  if (((c = X.get(f, a)), void 0 !== c)) return c;
                  if (((c = _(f, a)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    X.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          X.remove(this, a);
        });
      },
    }),
    r.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = W.get(a, b)),
            c &&
              (!d || Array.isArray(c)
                ? (d = W.access(a, b, r.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function () {
            r.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          W.get(a, c) ||
          W.access(a, c, {
            empty: r.Callbacks("once memory").add(function () {
              W.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    r.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? r.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          r.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = W.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function (a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            r.contains(a.ownerDocument, a) &&
            "none" === r.css(a, "display"))
      );
    },
    ea = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    };
  function fa(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return r.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
      k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var ga = {};
  function ha(a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = ga[d];
    return e
      ? e
      : ((b = c.body.appendChild(c.createElement(d))),
        (e = r.css(b, "display")),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        (ga[d] = e),
        e);
  }
  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ("none" === c &&
                ((e[f] = W.get(d, "display") || null),
                e[f] || (d.style.display = "")),
              "" === d.style.display && da(d) && (e[f] = ha(d)))
            : "none" !== c && ((e[f] = "none"), W.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a;
  }
  r.fn.extend({
    show: function () {
      return ia(this, !0);
    },
    hide: function () {
      return ia(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            da(this) ? r(this).show() : r(this).hide();
          });
    },
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ma.optgroup = ma.option),
    (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
    (ma.th = ma.td);
  function na(a, b) {
    var c;
    return (
      (c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : []),
      void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
    );
  }
  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
  }
  var pa = /<|&#?\w+;/;
  function qa(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if (((f = a[n]), f || 0 === f))
        if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (pa.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
            (i = ma[h] || ma._default),
            (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (n = 0);
    while ((f = m[n++]))
      if (d && r.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = r.contains(f.ownerDocument, f)),
        (g = na(l.appendChild(f), "script")),
        j && oa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) la.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;
  function va() {
    return !0;
  }
  function wa() {
    return !1;
  }
  function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ya(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = wa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return r().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = r.guid++))),
      a.each(function () {
        r.event.add(this, b, e, d, c);
      })
    );
  }
  (r.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.get(a);
      if (q) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          e && r.find.matchesSelector(ra, e),
          c.guid || (c.guid = r.guid++),
          (i = q.events) || (i = q.events = {}),
          (g = q.handle) ||
            (g = q.handle = function (b) {
              return "undefined" != typeof r && r.event.triggered !== b.type
                ? r.event.dispatch.apply(a, arguments)
                : void 0;
            }),
          (b = (b || "").match(L) || [""]),
          (j = b.length);
        while (j--)
          (h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = r.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = r.event.special[n] || {}),
              (k = r.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && r.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (r.event.global[n] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        (b = (b || "").match(L) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            (l = r.event.special[n] || {}),
              (n = (d ? l.delegateType : l.bindType) || n),
              (m = i[n] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                r.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      var b = r.event.fix(a),
        c,
        d,
        e,
        f,
        g,
        h,
        i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (
        ((b.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, b) !== !1)
      ) {
        (h = r.event.handlers.call(this, b, j)), (c = 0);
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          (b.currentTarget = f.elem), (d = 0);
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
            (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
              ((b.handleObj = g),
              (b.data = g.data),
              (e = (
                (r.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (b.result = e) === !1 &&
                (b.preventDefault(), b.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++)
              (d = b[c]),
                (e = d.selector + " "),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? r(e, this).index(j) > -1
                    : r.find(e, this, null, [j]).length),
                g[e] && f.push(d);
            f.length && h.push({ elem: j, handlers: f });
          }
      return (
        (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
      );
    },
    addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a];
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b,
          });
        },
      });
    },
    fix: function (a) {
      return a[r.expando] ? a : new r.Event(a);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== xa() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === xa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && B(this, "input"))
            return this.click(), !1;
        },
        _default: function (a) {
          return B(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (r.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (r.Event = function (a, b) {
      return this instanceof r.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? va
                  : wa),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && r.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || r.now()),
          void (this[r.expando] = !0))
        : new r.Event(a, b);
    }),
    (r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: wa,
      isPropagationStopped: wa,
      isImmediatePropagationStopped: wa,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = va),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = va),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = va),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    r.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button;
          return null == a.which && sa.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && ta.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which;
        },
      },
      r.event.addProp
    ),
    r.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        r.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || r.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    r.fn.extend({
      on: function (a, b, c, d) {
        return ya(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ya(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            r(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = wa),
          this.each(function () {
            r.event.remove(this, a, c, b);
          })
        );
      },
    });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? r(">tbody", a)[0] || a
      : a;
  }
  function Fa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        W.hasData(a) &&
        ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
      }
      X.hasData(a) && ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
    }
  }
  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e,
      f,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q);
    if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
      });
    if (
      m &&
      ((e = qa(b, a[0].ownerDocument, !1, a, d)),
      (f = e.firstChild),
      1 === e.childNodes.length && (e = f),
      f || d)
    ) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
        (j = e),
          l !== n &&
            ((j = r.clone(j, !0, !0)), i && r.merge(h, na(j, "script"))),
          c.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)
          (j = h[l]),
            la.test(j.type || "") &&
              !W.access(j, "globalEval") &&
              r.contains(k, j) &&
              (j.src
                ? r._evalUrl && r._evalUrl(j.src)
                : p(j.textContent.replace(Da, ""), k));
    }
    return a;
  }
  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || r.cleanData(na(d)),
        d.parentNode &&
          (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(za, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a);
      if (
        !(
          o.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          r.isXMLDoc(a)
        )
      )
        for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
          Ia(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)
            Ha(f[d], g[d]);
        else Ha(a, h);
      return (
        (g = na(h, "script")), g.length > 0 && oa(g, !i && na(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if ((b = c[W.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0;
          }
          c[X.expando] && (c[X.expando] = void 0);
        }
    },
  }),
    r.fn.extend({
      detach: function (a) {
        return Ka(this, a, !0);
      },
      remove: function (a) {
        return Ka(this, a);
      },
      text: function (a) {
        return T(
          this,
          function (a) {
            return void 0 === a
              ? r.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (r.cleanData(na(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return r.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return T(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !Aa.test(a) &&
              !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = r.htmlPrefilter(a);
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (r.cleanData(na(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ja(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            r.inArray(this, a) < 0 &&
              (r.cleanData(na(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    r.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        r.fn[a] = function (a) {
          for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              r(e[g])[b](c),
              h.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    };
  !(function () {
    function b() {
      if (i) {
        (i.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (i.innerHTML = ""),
          ra.appendChild(h);
        var b = a.getComputedStyle(i);
        (c = "1%" !== b.top),
          (g = "2px" === b.marginLeft),
          (e = "4px" === b.width),
          (i.style.marginRight = "50%"),
          (f = "4px" === b.marginRight),
          ra.removeChild(h),
          (i = null);
      }
    }
    var c,
      e,
      f,
      g,
      h = d.createElement("div"),
      i = d.createElement("div");
    i.style &&
      ((i.style.backgroundClip = "content-box"),
      (i.cloneNode(!0).style.backgroundClip = ""),
      (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
      (h.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      h.appendChild(i),
      r.extend(o, {
        pixelPosition: function () {
          return b(), c;
        },
        boxSizingReliable: function () {
          return b(), e;
        },
        pixelMarginRight: function () {
          return b(), f;
        },
        reliableMarginLeft: function () {
          return b(), g;
        },
      }));
  })();
  function Oa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Na(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() &&
          Ma.test(g) &&
          La.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function Pa(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = { position: "absolute", visibility: "hidden", display: "block" },
    Ta = { letterSpacing: "0", fontWeight: "400" },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;
  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--) if (((a = Ua[c] + b), a in Va)) return a;
  }
  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }
  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Za(a, b, c, d, e) {
    var f,
      g = 0;
    for (
      f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
        d
          ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
            "margin" !== c &&
              (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
          : ((g += r.css(a, "padding" + ca[f], !0, e)),
            "padding" !== c &&
              (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g;
  }
  function $a(a, b, c) {
    var d,
      e = Na(a),
      f = Oa(a, b, e),
      g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f)
      ? f
      : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
        "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
        (f = parseFloat(f) || 0),
        f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b),
          j = a.style;
        return (
          i || (b = Xa(h)),
          (g = r.cssHooks[b] || r.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : j[b]
            : ((f = typeof c),
              "string" === f &&
                (e = ba.exec(c)) &&
                e[1] &&
                ((c = fa(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (r.cssNumber[h] ? "" : "px")),
                o.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (j[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i ? j.setProperty(b, c) : (j[b] = c))),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = r.camelCase(b),
        i = Ra.test(b);
      return (
        i || (b = Xa(h)),
        (g = r.cssHooks[b] || r.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Oa(a, b, d)),
        "normal" === e && b in Ta && (e = Ta[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    r.each(["height", "width"], function (a, b) {
      r.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return !Qa.test(r.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? $a(a, b, d)
              : ea(a, Sa, function () {
                  return $a(a, b, d);
                });
        },
        set: function (a, c, d) {
          var e,
            f = d && Na(a),
            g =
              d &&
              Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = ba.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = r.css(a, b))),
            Ya(a, c, g)
          );
        },
      };
    }),
    (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(Oa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              ea(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (r.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            d < 4;
            d++
          )
            e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        La.test(a) || (r.cssHooks[a + b].set = Ya);
    }),
    r.fn.extend({
      css: function (a, b) {
        return T(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (Array.isArray(b)) {
              for (d = Na(a), e = b.length; g < e; g++)
                f[b[g]] = r.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
    });
  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }
  (r.Tween = _a),
    (_a.prototype = {
      constructor: _a,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || r.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (r.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = _a.propHooks[this.prop];
        return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = _a.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b = r.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : _a.propHooks._default.set(this),
          this
        );
      },
    }),
    (_a.prototype.init.prototype = _a.prototype),
    (_a.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = r.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          r.fx.step[a.prop]
            ? r.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : r.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (_a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    }),
    (r.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (r.fx = _a.prototype.init),
    (r.fx.step = {});
  var ab,
    bb,
    cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;
  function eb() {
    bb &&
      (d.hidden === !1 && a.requestAnimationFrame
        ? a.requestAnimationFrame(eb)
        : a.setTimeout(eb, r.fx.interval),
      r.fx.tick());
  }
  function fb() {
    return (
      a.setTimeout(function () {
        ab = void 0;
      }),
      (ab = r.now())
    );
  }
  function gb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function hb(a, b, c) {
    for (
      var d,
        e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && da(a),
      q = W.get(a, "fxshow");
    c.queue ||
      ((g = r._queueHooks(a, "fx")),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function () {
          g.unqueued || h();
        })),
      g.unqueued++,
      m.always(function () {
        m.always(function () {
          g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
        });
      }));
    for (d in b)
      if (((e = b[d]), cb.test(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        n[d] = (q && q[d]) || r.style(a, d);
      }
    if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = q && q.display),
        null == j && (j = W.get(a, "display")),
        (k = r.css(a, "display")),
        "none" === k &&
          (j
            ? (k = j)
            : (ia([a], !0),
              (j = a.style.display || j),
              (k = r.css(a, "display")),
              ia([a]))),
        ("inline" === k || ("inline-block" === k && null != j)) &&
          "none" === r.css(a, "float") &&
          (i ||
            (m.done(function () {
              o.display = j;
            }),
            null == j && ((k = o.display), (j = "none" === k ? "" : k))),
          (o.display = "inline-block"))),
        c.overflow &&
          ((o.overflow = "hidden"),
          m.always(function () {
            (o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2]);
          })),
        (i = !1);
      for (d in n)
        i ||
          (q
            ? "hidden" in q && (p = q.hidden)
            : (q = W.access(a, "fxshow", { display: j })),
          f && (q.hidden = !p),
          p && ia([a], !0),
          m.done(function () {
            p || ia([a]), W.remove(a, "fxshow");
            for (d in n) r.style(a, d, n[d]);
          })),
          (i = hb(p ? q[d] : 0, d, m)),
          d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = r.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = r.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = kb.prefilters.length,
      h = r.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = ab || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i
            ? c
            : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: r.extend({}, b),
        opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: ab || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = r.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); f < g; f++)
      if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
        return (
          r.isFunction(d.stop) &&
            (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
          d
        );
    return (
      r.map(k, hb, j),
      r.isFunction(j.opts.start) && j.opts.start.call(a, j),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always),
      r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
    );
  }
  (r.Animation = r.extend(kb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return fa(c.elem, a, ba.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (kb.tweeners[c] = kb.tweeners[c] || []),
          kb.tweeners[c].unshift(b);
    },
    prefilters: [ib],
    prefilter: function (a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    },
  })),
    (r.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? r.extend({}, a)
          : {
              complete: c || (!c && b) || (r.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !r.isFunction(b) && b),
            };
      return (
        r.fx.off
          ? (d.duration = 0)
          : "number" != typeof d.duration &&
            (d.duration in r.fx.speeds
              ? (d.duration = r.fx.speeds[d.duration])
              : (d.duration = r.fx.speeds._default)),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          r.isFunction(d.old) && d.old.call(this),
            d.queue && r.dequeue(this, d.queue);
        }),
        d
      );
    }),
    r.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(da)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function () {
            var b = kb(this, r.extend({}, a), f);
            (e || W.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = r.timers,
              g = W.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || r.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = W.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = r.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    r.each(["toggle", "show", "hide"], function (a, b) {
      var c = r.fn[b];
      r.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    r.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        r.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (r.timers = []),
    (r.fx.tick = function () {
      var a,
        b = 0,
        c = r.timers;
      for (ab = r.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || r.fx.stop(), (ab = void 0);
    }),
    (r.fx.timer = function (a) {
      r.timers.push(a), r.fx.start();
    }),
    (r.fx.interval = 13),
    (r.fx.start = function () {
      bb || ((bb = !0), eb());
    }),
    (r.fx.stop = function () {
      bb = null;
    }),
    (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (r.fn.delay = function (b, c) {
      return (
        (b = r.fx ? r.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (o.checkOn = "" !== a.value),
        (o.optSelected = c.selected),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (o.radioValue = "t" === a.value);
    })();
  var lb,
    mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function (a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    },
  }),
    r.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? r.prop(a, b, c)
            : ((1 === f && r.isXMLDoc(a)) ||
                (e =
                  r.attrHooks[b.toLowerCase()] ||
                  (r.expr.match.bool.test(b) ? lb : void 0)),
              void 0 !== c
                ? null === c
                  ? void r.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = r.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!o.radioValue && "radio" === b && B(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d = 0,
          e = b && b.match(L);
        if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c);
      },
    }),
    (lb = {
      set: function (a, b, c) {
        return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = mb[b] || r.find.attr;
      mb[b] = function (a, b, d) {
        var e,
          f,
          g = b.toLowerCase();
        return (
          d ||
            ((f = mb[g]),
            (mb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (mb[g] = f)),
          e
        );
      };
    });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function (a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    },
  }),
    r.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && r.isXMLDoc(a)) ||
              ((b = r.propFix[b] || b), (e = r.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = r.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : nb.test(a.nodeName) || (ob.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    o.optSelected ||
      (r.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    r.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        r.propFix[this.toLowerCase()] = this;
      }
    );
  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ");
  }
  function qb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  r.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).addClass(a.call(this, b, qb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).removeClass(a.call(this, b, qb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : r.isFunction(a)
        ? this.each(function (c) {
            r(this).toggleClass(a.call(this, c, qb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = r(this)), (f = a.match(L) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
          return !0;
      return !1;
    },
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = r.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, r(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : Array.isArray(e) &&
                    (e = r.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  r.valHooks[this.type] ||
                  r.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    r.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = r.find.attr(a, "value");
            return null != b ? b : pb(r.text(a));
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;
            for (d = f < 0 ? i : g ? f : 0; d < i; d++)
              if (
                ((c = e[d]),
                (c.selected || d === f) &&
                  !c.disabled &&
                  (!c.parentNode.disabled || !B(c.parentNode, "optgroup")))
              ) {
                if (((b = r(c).val()), g)) return b;
                h.push(b);
              }
            return h;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    r.each(["radio", "checkbox"], function () {
      (r.valHooks[this] = {
        set: function (a, b) {
          if (Array.isArray(b))
            return (a.checked = r.inArray(r(a).val(), b) > -1);
        },
      }),
        o.checkOn ||
          (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        n,
        o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !sb.test(p + r.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (k = p.indexOf(":") < 0 && "on" + p),
          (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : r.makeArray(c, [b])),
          (n = r.event.special[p] || {}),
          f || !n.trigger || n.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (
            j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            o.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : n.bindType || p),
            (m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle")),
            m && m.apply(h, c),
            (m = k && h[k]),
            m &&
              m.apply &&
              U(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = p),
          f ||
            b.isDefaultPrevented() ||
            (n._default && n._default.apply(o.pop(), c) !== !1) ||
            !U(e) ||
            (k &&
              r.isFunction(e[p]) &&
              !r.isWindow(e) &&
              ((i = e[k]),
              i && (e[k] = null),
              (r.event.triggered = p),
              e[p](),
              (r.event.triggered = void 0),
              i && (e[k] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
      r.event.trigger(d, null, b);
    },
  }),
    r.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          r.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        if (c) return r.event.trigger(a, b, c, !0);
      },
    }),
    r.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (a, b) {
        r.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    r.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (o.focusin = "onfocusin" in a),
    o.focusin ||
      r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b);
            e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b) - 1;
            e
              ? W.access(d, b, e)
              : (d.removeEventListener(a, c, !0), W.remove(d, b));
          },
        };
      });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        r.error("Invalid XML: " + b),
      c
    );
  };
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b))
      r.each(b, function (b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== r.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (r.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = r.isFunction(b) ? b() : b;
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
      };
    if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
      r.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&");
  }),
    r.fn.extend({
      serialize: function () {
        return r.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = r.prop(this, "elements");
          return a ? r.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !r(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !ja.test(a))
            );
          })
          .map(function (a, b) {
            var c = r(this).val();
            return null == c
              ? null
              : Array.isArray(c)
              ? r.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, "\r\n") };
                })
              : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      },
    });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;
  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Nb(a, b, c, d) {
    var e = {},
      f = a === Jb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        r.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Ob(a, b) {
    var c,
      d,
      e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a;
  }
  function Pb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Qb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks("once memory"),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = "canceled",
        y = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (k) {
              if (!h) {
                h = {};
                while ((b = Eb.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return k ? g : null;
          },
          setRequestHeader: function (a, b) {
            return (
              null == k &&
                ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a),
                (v[a] = b)),
              this
            );
          },
          overrideMimeType: function (a) {
            return null == k && (o.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (k) y.always(a[y.status]);
              else for (b in a) u[b] = [u[b], a[b]];
            return this;
          },
          abort: function (a) {
            var b = a || x;
            return e && e.abort(b), A(0, b), this;
          },
        };
      if (
        (s.promise(y),
        (o.url = ((b || o.url || tb.href) + "").replace(
          Hb,
          tb.protocol + "//"
        )),
        (o.type = c.method || c.type || o.method || o.type),
        (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""]),
        null == o.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = o.url),
            (j.href = j.href),
            (o.crossDomain =
              Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host);
        } catch (z) {
          o.crossDomain = !0;
        }
      }
      if (
        (o.data &&
          o.processData &&
          "string" != typeof o.data &&
          (o.data = r.param(o.data, o.traditional)),
        Nb(Ib, o, c, y),
        k)
      )
        return y;
      (l = r.event && o.global),
        l && 0 === r.active++ && r.event.trigger("ajaxStart"),
        (o.type = o.type.toUpperCase()),
        (o.hasContent = !Gb.test(o.type)),
        (f = o.url.replace(Cb, "")),
        o.hasContent
          ? o.data &&
            o.processData &&
            0 ===
              (o.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (o.data = o.data.replace(Bb, "+"))
          : ((n = o.url.slice(f.length)),
            o.data && ((f += (vb.test(f) ? "&" : "?") + o.data), delete o.data),
            o.cache === !1 &&
              ((f = f.replace(Db, "$1")),
              (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
            (o.url = f + n)),
        o.ifModified &&
          (r.lastModified[f] &&
            y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
          r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
        ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
          y.setRequestHeader("Content-Type", o.contentType),
        y.setRequestHeader(
          "Accept",
          o.dataTypes[0] && o.accepts[o.dataTypes[0]]
            ? o.accepts[o.dataTypes[0]] +
                ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "")
            : o.accepts["*"]
        );
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
        return y.abort();
      if (
        ((x = "abort"),
        t.add(o.complete),
        y.done(o.success),
        y.fail(o.error),
        (e = Nb(Jb, o, c, y)))
      ) {
        if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
          return y;
        o.async &&
          o.timeout > 0 &&
          (i = a.setTimeout(function () {
            y.abort("timeout");
          }, o.timeout));
        try {
          (k = !1), e.send(v, A);
        } catch (z) {
          if (k) throw z;
          A(-1, z);
        }
      } else A(-1, "No Transport");
      function A(b, c, d, h) {
        var j,
          m,
          n,
          v,
          w,
          x = c;
        k ||
          ((k = !0),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (y.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && b < 300) || 304 === b),
          d && (v = Pb(o, y, d)),
          (v = Qb(o, v, y, j)),
          j
            ? (o.ifModified &&
                ((w = y.getResponseHeader("Last-Modified")),
                w && (r.lastModified[f] = w),
                (w = y.getResponseHeader("etag")),
                w && (r.etag[f] = w)),
              204 === b || "HEAD" === o.type
                ? (x = "nocontent")
                : 304 === b
                ? (x = "notmodified")
                : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
            : ((n = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
          (y.status = b),
          (y.statusText = (c || x) + ""),
          j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
          y.statusCode(u),
          (u = void 0),
          l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
          t.fireWith(p, [y, x]),
          l &&
            (q.trigger("ajaxComplete", [y, o]),
            --r.active || r.event.trigger("ajaxStop")));
      }
      return y;
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, "script");
    },
  }),
    r.each(["get", "post"], function (a, b) {
      r[b] = function (a, c, d, e) {
        return (
          r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          r.ajax(
            r.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              r.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (r._evalUrl = function (a) {
      return r.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    r.fn.extend({
      wrapAll: function (a) {
        var b;
        return (
          this[0] &&
            (r.isFunction(a) && (a = a.call(this[0])),
            (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (a) {
        return r.isFunction(a)
          ? this.each(function (b) {
              r(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = r(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = r.isFunction(a);
        return this.each(function (c) {
          r(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not("body")
            .each(function () {
              r(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (r.expr.pseudos.hidden = function (a) {
      return !r.expr.pseudos.visible(a);
    }),
    (r.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }),
    (r.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Rb = { 0: 200, 1223: 204 },
    Sb = r.ajaxSettings.xhr();
  (o.cors = !!Sb && "withCredentials" in Sb),
    (o.ajax = Sb = !!Sb),
    r.ajaxTransport(function (b) {
      var c, d;
      if (o.cors || (Sb && !b.crossDomain))
        return {
          send: function (e, f) {
            var g,
              h = b.xhr();
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g];
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest");
            for (g in e) h.setRequestHeader(g, e[g]);
            (c = function (a) {
              return function () {
                c &&
                  ((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                    ? "number" != typeof h.status
                      ? f(0, "error")
                      : f(h.status, h.statusText)
                    : f(
                        Rb[h.status] || h.status,
                        h.statusText,
                        "text" !== (h.responseType || "text") ||
                          "string" != typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ));
              };
            }),
              (h.onload = c()),
              (d = h.onerror = c("error")),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function () {
                    4 === h.readyState &&
                      a.setTimeout(function () {
                        c && d();
                      });
                  }),
              (c = c("abort"));
            try {
              h.send((b.hasContent && b.data) || null);
            } catch (i) {
              if (c) throw i;
            }
          },
          abort: function () {
            c && c();
          },
        };
    }),
    r.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    }),
    r.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return r.globalEval(a), a;
        },
      },
    }),
    r.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    r.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = r("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return (this[a] = !0), a;
    },
  }),
    r.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Ub.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ub.test(b.data) &&
              "data");
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback = r.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Ub, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? r(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Tb.push(e)),
              g && r.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script"
        );
    }),
    (o.createHTMLDocument = (function () {
      var a = d.implementation.createHTMLDocument("").body;
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      );
    })()),
    (r.parseHTML = function (a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && ((c = b), (b = !1));
      var e, f, g;
      return (
        b ||
          (o.createHTMLDocument
            ? ((b = d.implementation.createHTMLDocument("")),
              (e = b.createElement("base")),
              (e.href = d.location.href),
              b.head.appendChild(e))
            : (b = d)),
        (f = C.exec(a)),
        (g = !c && []),
        f
          ? [b.createElement(f[1])]
          : ((f = qa([a], b, g)),
            g && g.length && r(g).remove(),
            r.merge([], f.childNodes))
      );
    }),
    (r.fn.load = function (a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
        r.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          r
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function (a) {
              (f = arguments),
                g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
    r.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        r.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (r.expr.pseudos.animated = function (a) {
      return r.grep(r.timers, function (b) {
        return a === b.elem;
      }).length;
    }),
    (r.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = r.css(a, "top")),
          (i = r.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      },
    }),
    r.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                r.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d,
          e,
          f = this[0];
        if (f)
          return f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              (b = f.ownerDocument),
              (c = b.documentElement),
              (e = b.defaultView),
              {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft,
              })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === r.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                B(a[0], "html") || (d = a.offset()),
                (d = {
                  top: d.top + r.css(a[0], "borderTopWidth", !0),
                  left: d.left + r.css(a[0], "borderLeftWidth", !0),
                })),
            {
              top: b.top - d.top - r.css(c, "marginTop", !0),
              left: b.left - d.left - r.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === r.css(a, "position")) a = a.offsetParent;
          return a || ra;
        });
      },
    }),
    r.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
          return T(
            this,
            function (a, d, e) {
              var f;
              return (
                r.isWindow(a)
                  ? (f = a)
                  : 9 === a.nodeType && (f = a.defaultView),
                void 0 === e
                  ? f
                    ? f[b]
                    : a[d]
                  : void (f
                      ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                      : (a[d] = e))
              );
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    r.each(["top", "left"], function (a, b) {
      r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
        if (c)
          return (c = Oa(a, b)), Ma.test(c) ? r(a).position()[b] + "px" : c;
      });
    }),
    r.each({ Height: "height", Width: "width" }, function (a, b) {
      r.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          r.fn[d] = function (e, f) {
            var g = arguments.length && (c || "boolean" != typeof e),
              h = c || (e === !0 || f === !0 ? "margin" : "border");
            return T(
              this,
              function (b, c, e) {
                var f;
                return r.isWindow(b)
                  ? 0 === d.indexOf("outer")
                    ? b["inner" + a]
                    : b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((f = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      f["scroll" + a],
                      b.body["offset" + a],
                      f["offset" + a],
                      f["client" + a]
                    ))
                  : void 0 === e
                  ? r.css(b, c, h)
                  : r.style(b, c, e, h);
              },
              b,
              g ? e : void 0,
              g
            );
          };
        }
      );
    }),
    r.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (r.holdReady = function (a) {
      a ? r.readyWait++ : r.ready(!0);
    }),
    (r.isArray = Array.isArray),
    (r.parseJSON = JSON.parse),
    (r.nodeName = B),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return r;
      });
  var Vb = a.jQuery,
    Wb = a.$;
  return (
    (r.noConflict = function (b) {
      return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }),
    b || (a.jQuery = a.$ = r),
    r
  );
});

/*!
 * bootstrap-fileinput v5.2.2
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2021, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD-3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */ !(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof module && module.exports
    ? (module.exports = e(require("jquery")))
    : e(window.jQuery);
})(function (e) {
  "use strict";
  (e.fn.fileinputLocales = {}),
    (e.fn.fileinputThemes = {}),
    e.fn.fileinputBsVersion ||
      (e.fn.fileinputBsVersion =
        (window.Alert && window.Alert.VERSION) ||
        (window.bootstrap &&
          window.bootstrap.Alert &&
          bootstrap.Alert.VERSION) ||
        "3.x.x"),
    (String.prototype.setTokens = function (e) {
      var t,
        i,
        a = this.toString();
      for (t in e)
        e.hasOwnProperty(t) &&
          ((i = new RegExp("{" + t + "}", "g")), (a = a.replace(i, e[t])));
      return a;
    }),
    Array.prototype.flatMap ||
      (Array.prototype.flatMap = function (e) {
        return [].concat(this.map(e));
      });
  var t, i;
  (t = {
    FRAMES: ".kv-preview-thumb",
    SORT_CSS: "file-sortable",
    INIT_FLAG: "init-",
    OBJECT_PARAMS:
      '<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n',
    DEFAULT_PREVIEW:
      '<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>',
    MODAL_ID: "kvFileinputModal",
    MODAL_EVENTS: ["show", "shown", "hide", "hidden", "loaded"],
    logMessages: {
      ajaxError: "{status}: {error}. Error Details: {text}.",
      badDroppedFiles: "Error scanning dropped files!",
      badExifParser: "Error loading the piexif.js library. {details}",
      badInputType:
        'The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.',
      exifWarning:
        'To avoid this warning, either set "autoOrientImage" to "false" OR ensure you have loaded the "piexif.js" library correctly on your page before the "fileinput.js" script.',
      invalidChunkSize:
        'Invalid upload chunk size: "{chunkSize}". Resumable uploads are disabled.',
      invalidThumb: 'Invalid thumb frame with id: "{id}".',
      noResumableSupport:
        "The browser does not support resumable or chunk uploads.",
      noUploadUrl:
        'The "uploadUrl" is not set. Ajax uploads and resumable uploads have been disabled.',
      retryStatus:
        "Retrying upload for chunk # {chunk} for {filename}... retry # {retry}.",
      chunkQueueError:
        "Could not push task to ajax pool for chunk index # {index}.",
      resumableMaxRetriesReached:
        "Maximum resumable ajax retries ({n}) reached.",
      resumableRetryError:
        "Could not retry the resumable request (try # {n})... aborting.",
      resumableAborting: "Aborting / cancelling the resumable request.",
      resumableRequestError: "Error processing resumable request. {msg}",
    },
    objUrl: window.URL || window.webkitURL,
    isBs: function (t) {
      var i = e.trim((e.fn.fileinputBsVersion || "") + "");
      return (
        (t = parseInt(t, 10)), i ? t === parseInt(i.charAt(0), 10) : 4 === t
      );
    },
    defaultButtonCss: function (e) {
      return "btn-default btn-" + (e ? "" : "outline-") + "secondary";
    },
    now: function () {
      return new Date().getTime();
    },
    round: function (e) {
      return (e = parseFloat(e)), isNaN(e) ? 0 : Math.floor(Math.round(e));
    },
    getArray: function (e) {
      var t,
        i = [],
        a = (e && e.length) || 0;
      for (t = 0; a > t; t++) i.push(e[t]);
      return i;
    },
    getFileRelativePath: function (e) {
      return String(
        e.newPath ||
          e.relativePath ||
          e.webkitRelativePath ||
          t.getFileName(e) ||
          null
      );
    },
    getFileId: function (e, i) {
      var a = t.getFileRelativePath(e);
      return "function" == typeof i
        ? i(e)
        : e && a
        ? e.size + "_" + encodeURIComponent(a).replace(/%/g, "_")
        : null;
    },
    getFrameSelector: function (e, t) {
      return (t = t || ""), '[id="' + e + '"]' + t;
    },
    getZoomSelector: function (e, i) {
      return t.getFrameSelector("zoom-" + e, i);
    },
    getFrameElement: function (e, i, a) {
      return e.find(t.getFrameSelector(i, a));
    },
    getZoomElement: function (e, i, a) {
      return e.find(t.getZoomSelector(i, a));
    },
    getElapsed: function (i) {
      var a = i,
        r = "",
        n = {},
        o = {
          year: 31536e3,
          month: 2592e3,
          week: 604800,
          day: 86400,
          hour: 3600,
          minute: 60,
          second: 1,
        };
      return (
        t.getObjectKeys(o).forEach(function (e) {
          (n[e] = Math.floor(a / o[e])), (a -= n[e] * o[e]);
        }),
        e.each(n, function (e, t) {
          t > 0 && (r += (r ? " " : "") + t + e.substring(0, 1));
        }),
        r
      );
    },
    debounce: function (e, t) {
      var i;
      return function () {
        var a = arguments,
          r = this;
        clearTimeout(i),
          (i = setTimeout(function () {
            e.apply(r, a);
          }, t));
      };
    },
    stopEvent: function (e) {
      e.stopPropagation(), e.preventDefault();
    },
    getFileName: function (e) {
      return e ? e.fileName || e.name || "" : "";
    },
    createObjectURL: function (e) {
      return t.objUrl && t.objUrl.createObjectURL && e
        ? t.objUrl.createObjectURL(e)
        : "";
    },
    revokeObjectURL: function (e) {
      t.objUrl && t.objUrl.revokeObjectURL && e && t.objUrl.revokeObjectURL(e);
    },
    compare: function (e, t, i) {
      return void 0 !== e && (i ? e === t : e.match(t));
    },
    isIE: function (e) {
      var t, i;
      return "Microsoft Internet Explorer" !== navigator.appName
        ? !1
        : 10 === e
        ? new RegExp("msie\\s" + e, "i").test(navigator.userAgent)
        : ((t = document.createElement("div")),
          (t.innerHTML = "<!--[if IE " + e + "]> <i></i> <![endif]-->"),
          (i = t.getElementsByTagName("i").length),
          document.body.appendChild(t),
          t.parentNode.removeChild(t),
          i);
    },
    canOrientImage: function (t) {
      var i = e(document.createElement("img"))
          .css({ width: "1px", height: "1px" })
          .insertAfter(t),
        a = i.css("image-orientation");
      return i.remove(), !!a;
    },
    canAssignFilesToInput: function () {
      var e = document.createElement("input");
      try {
        return (e.type = "file"), (e.files = null), !0;
      } catch (t) {
        return !1;
      }
    },
    getDragDropFolders: function (e) {
      var t,
        i,
        a = e ? e.length : 0,
        r = 0;
      if (a > 0 && e[0].webkitGetAsEntry())
        for (t = 0; a > t; t++)
          (i = e[t].webkitGetAsEntry()), i && i.isDirectory && r++;
      return r;
    },
    initModal: function (t) {
      var i = e("body");
      i.length && t.appendTo(i);
    },
    isFunction: function (e) {
      return "function" == typeof e;
    },
    isEmpty: function (i, a) {
      return void 0 === i || null === i || "" === i
        ? !0
        : t.isString(i) && a
        ? "" === e.trim(i)
        : t.isArray(i)
        ? 0 === i.length
        : !(!e.isPlainObject(i) || !e.isEmptyObject(i));
    },
    isArray: function (e) {
      return (
        Array.isArray(e) ||
        "[object Array]" === Object.prototype.toString.call(e)
      );
    },
    isString: function (e) {
      return "[object String]" === Object.prototype.toString.call(e);
    },
    ifSet: function (e, t, i) {
      return (i = i || ""), t && "object" == typeof t && e in t ? t[e] : i;
    },
    cleanArray: function (e) {
      return (
        e instanceof Array || (e = []),
        e.filter(function (e) {
          return void 0 !== e && null !== e;
        })
      );
    },
    spliceArray: function (t, i, a) {
      var r,
        n,
        o = 0,
        s = [];
      if (!(t instanceof Array)) return [];
      for (n = e.extend(!0, [], t), a && n.reverse(), r = 0; r < n.length; r++)
        r !== i && ((s[o] = n[r]), o++);
      return a && s.reverse(), s;
    },
    getNum: function (e, t) {
      return (
        (t = t || 0),
        "number" == typeof e
          ? e
          : ("string" == typeof e && (e = parseFloat(e)), isNaN(e) ? t : e)
      );
    },
    hasFileAPISupport: function () {
      return !(!window.File || !window.FileReader);
    },
    hasDragDropSupport: function () {
      var e = document.createElement("div");
      return (
        !t.isIE(9) &&
        (void 0 !== e.draggable ||
          (void 0 !== e.ondragstart && void 0 !== e.ondrop))
      );
    },
    hasFileUploadSupport: function () {
      return t.hasFileAPISupport() && window.FormData;
    },
    hasBlobSupport: function () {
      try {
        return !!window.Blob && Boolean(new Blob());
      } catch (e) {
        return !1;
      }
    },
    hasArrayBufferViewSupport: function () {
      try {
        return 100 === new Blob([new Uint8Array(100)]).size;
      } catch (e) {
        return !1;
      }
    },
    hasResumableUploadSupport: function () {
      return (
        t.hasFileUploadSupport() &&
        t.hasBlobSupport() &&
        t.hasArrayBufferViewSupport() &&
        (!!Blob.prototype.webkitSlice ||
          !!Blob.prototype.mozSlice ||
          !!Blob.prototype.slice ||
          !1)
      );
    },
    dataURI2Blob: function (e) {
      var i,
        a,
        r,
        n,
        o,
        s,
        l =
          window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.MozBlobBuilder ||
          window.MSBlobBuilder,
        d = t.hasBlobSupport(),
        c = (d || l) && window.atob && window.ArrayBuffer && window.Uint8Array;
      if (!c) return null;
      for (
        i =
          e.split(",")[0].indexOf("base64") >= 0
            ? atob(e.split(",")[1])
            : decodeURIComponent(e.split(",")[1]),
          a = new ArrayBuffer(i.length),
          r = new Uint8Array(a),
          n = 0;
        n < i.length;
        n += 1
      )
        r[n] = i.charCodeAt(n);
      return (
        (o = e.split(",")[0].split(":")[1].split(";")[0]),
        d
          ? new Blob([t.hasArrayBufferViewSupport() ? r : a], { type: o })
          : ((s = new l()), s.append(a), s.getBlob(o))
      );
    },
    arrayBuffer2String: function (e) {
      if (window.TextDecoder) return new TextDecoder("utf-8").decode(e);
      var t,
        i,
        a,
        r,
        n = Array.prototype.slice.apply(new Uint8Array(e)),
        o = "",
        s = 0;
      for (t = n.length; t > s; )
        switch (((i = n[s++]), i >> 4)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            o += String.fromCharCode(i);
            break;
          case 12:
          case 13:
            (a = n[s++]),
              (o += String.fromCharCode(((31 & i) << 6) | (63 & a)));
            break;
          case 14:
            (a = n[s++]),
              (r = n[s++]),
              (o += String.fromCharCode(
                ((15 & i) << 12) | ((63 & a) << 6) | ((63 & r) << 0)
              ));
        }
      return o;
    },
    isHtml: function (e) {
      var t = document.createElement("div");
      t.innerHTML = e;
      for (var i = t.childNodes, a = i.length; a--; )
        if (1 === i[a].nodeType) return !0;
      return !1;
    },
    isSvg: function (e) {
      return (
        e.match(/^\s*<\?xml/i) &&
        (e.match(/<!DOCTYPE svg/i) || e.match(/<svg/i))
      );
    },
    getMimeType: function (e, t, i) {
      switch (e) {
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
          return "image/jpeg";
        case "89504e47":
          return "image/png";
        case "47494638":
          return "image/gif";
        case "49492a00":
          return "image/tiff";
        case "52494646":
          return "image/webp";
        case "66747970":
          return "video/3gp";
        case "4f676753":
          return "video/ogg";
        case "1a45dfa3":
          return "video/mkv";
        case "000001ba":
        case "000001b3":
          return "video/mpeg";
        case "3026b275":
          return "video/wmv";
        case "25504446":
          return "application/pdf";
        case "25215053":
          return "application/ps";
        case "504b0304":
        case "504b0506":
        case "504b0508":
          return "application/zip";
        case "377abcaf":
          return "application/7z";
        case "75737461":
          return "application/tar";
        case "7801730d":
          return "application/dmg";
        default:
          switch (e.substring(0, 6)) {
            case "435753":
              return "application/x-shockwave-flash";
            case "494433":
              return "audio/mp3";
            case "425a68":
              return "application/bzip";
            default:
              switch (e.substring(0, 4)) {
                case "424d":
                  return "image/bmp";
                case "fffb":
                  return "audio/mp3";
                case "4d5a":
                  return "application/exe";
                case "1f9d":
                case "1fa0":
                  return "application/zip";
                case "1f8b":
                  return "application/gzip";
                default:
                  return t && !t.match(/[^\u0000-\u007f]/)
                    ? "application/text-plain"
                    : i;
              }
          }
      }
    },
    addCss: function (e, t) {
      e.removeClass(t).addClass(t);
    },
    getElement: function (i, a, r) {
      return t.isEmpty(i) || t.isEmpty(i[a]) ? r : e(i[a]);
    },
    createElement: function (t, i) {
      return (
        (i = i || "div"), e(e.parseHTML("<" + i + ">" + t + "</" + i + ">"))
      );
    },
    uniqId: function () {
      return (
        new Date().getTime() + Math.floor(Math.random() * Math.pow(10, 15))
      ).toString(36);
    },
    cspBuffer: {
      CSP_ATTRIB: "data-csp-01928735",
      domElementsStyles: {},
      stash: function (i) {
        var a = this,
          r = e.parseHTML("<div>" + i + "</div>"),
          n = e(r);
        n.find("[style]").each(function (i, r) {
          var n = e(r),
            o = n[0].style,
            s = t.uniqId(),
            l = {};
          o &&
            o.length &&
            (e(o).each(function () {
              l[this] = o[this];
            }),
            (a.domElementsStyles[s] = l),
            n.removeAttr("style").attr(a.CSP_ATTRIB, s));
        }),
          n.filter("*").removeAttr("style");
        var o = Object.values
          ? Object.values(r)
          : Object.keys(r).map(function (e) {
              return r[e];
            });
        return o
          .flatMap(function (e) {
            return e.innerHTML;
          })
          .join("");
      },
      apply: function (t) {
        var i = this,
          a = e(t);
        a.find("[" + i.CSP_ATTRIB + "]").each(function (t, a) {
          var r = e(a),
            n = r.attr(i.CSP_ATTRIB),
            o = i.domElementsStyles[n];
          o && r.css(o), r.removeAttr(i.CSP_ATTRIB);
        }),
          (i.domElementsStyles = {});
      },
    },
    setHtml: function (e, i) {
      var a = t.cspBuffer;
      return e.html(a.stash(i)), a.apply(e), e;
    },
    htmlEncode: function (e, t) {
      return void 0 === e
        ? t || null
        : e
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;");
    },
    replaceTags: function (t, i) {
      var a = t;
      return i
        ? (e.each(i, function (e, t) {
            "function" == typeof t && (t = t()), (a = a.split(e).join(t));
          }),
          a)
        : a;
    },
    cleanMemory: function (e) {
      var i = e.is("img") ? e.attr("src") : e.find("source").attr("src");
      t.revokeObjectURL(i);
    },
    findFileName: function (e) {
      var t = e.lastIndexOf("/");
      return (
        -1 === t && (t = e.lastIndexOf("\\")),
        e.split(e.substring(t, t + 1)).pop()
      );
    },
    checkFullScreen: function () {
      return (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
    },
    toggleFullScreen: function (e) {
      var i = document,
        a = i.documentElement,
        r = t.checkFullScreen();
      a && e && !r
        ? a.requestFullscreen
          ? a.requestFullscreen()
          : a.msRequestFullscreen
          ? a.msRequestFullscreen()
          : a.mozRequestFullScreen
          ? a.mozRequestFullScreen()
          : a.webkitRequestFullscreen &&
            a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        : r &&
          (i.exitFullscreen
            ? i.exitFullscreen()
            : i.msExitFullscreen
            ? i.msExitFullscreen()
            : i.mozCancelFullScreen
            ? i.mozCancelFullScreen()
            : i.webkitExitFullscreen && i.webkitExitFullscreen());
    },
    moveArray: function (t, i, a, r) {
      var n = e.extend(!0, [], t);
      if ((r && n.reverse(), a >= n.length))
        for (var o = a - n.length; o-- + 1; ) n.push(void 0);
      return n.splice(a, 0, n.splice(i, 1)[0]), r && n.reverse(), n;
    },
    closeButton: function (e) {
      return (
        (e = (t.isBs(5) ? "btn-close" : "close") + (e ? " " + e : "")),
        '<button type="button" class="' +
          e +
          '" aria-label="Close">\n' +
          (t.isBs(5) ? "" : '  <span aria-hidden="true">&times;</span>\n') +
          "</button>"
      );
    },
    getRotation: function (e) {
      switch (e) {
        case 2:
          return "rotateY(180deg)";
        case 3:
          return "rotate(180deg)";
        case 4:
          return "rotate(180deg) rotateY(180deg)";
        case 5:
          return "rotate(270deg) rotateY(180deg)";
        case 6:
          return "rotate(90deg)";
        case 7:
          return "rotate(90deg) rotateY(180deg)";
        case 8:
          return "rotate(270deg)";
        default:
          return "";
      }
    },
    setTransform: function (e, t) {
      e &&
        ((e.style.transform = t),
        (e.style.webkitTransform = t),
        (e.style["-moz-transform"] = t),
        (e.style["-ms-transform"] = t),
        (e.style["-o-transform"] = t));
    },
    getObjectKeys: function (t) {
      var i = [];
      return (
        t &&
          e.each(t, function (e) {
            i.push(e);
          }),
        i
      );
    },
    getObjectSize: function (e) {
      return t.getObjectKeys(e).length;
    },
    whenAll: function (i) {
      var a,
        r,
        n,
        o,
        s,
        l,
        d = [].slice,
        c = 1 === arguments.length && t.isArray(i) ? i : d.call(arguments),
        u = e.Deferred(),
        p = 0,
        f = c.length,
        g = f;
      for (
        n = o = s = Array(f),
          l = function (e, t, i) {
            return function () {
              i !== c && p++,
                u.notifyWith((t[e] = this), (i[e] = d.call(arguments))),
                --g || u[(p ? "reject" : "resolve") + "With"](t, i);
            };
          },
          a = 0;
        f > a;
        a++
      )
        (r = c[a]) && e.isFunction(r.promise)
          ? r.promise().done(l(a, s, c)).fail(l(a, n, o))
          : (u.notifyWith(this, r), --g);
      return g || u.resolveWith(s, c), u.promise();
    },
  }),
    (i = function (i, a) {
      var r = this;
      (r.$element = e(i)),
        (r.$parent = r.$element.parent()),
        r._validate() &&
          ((r.isPreviewable = t.hasFileAPISupport()),
          (r.isIE9 = t.isIE(9)),
          (r.isIE10 = t.isIE(10)),
          (r.isPreviewable || r.isIE9) && (r._init(a), r._listen()),
          r.$element.removeClass("file-loading"));
    }),
    (i.prototype = {
      constructor: i,
      _cleanup: function () {
        var e = this;
        (e.reader = null),
          e.clearFileStack(),
          (e.fileBatchCompleted = !0),
          (e.isError = !1),
          (e.isDuplicateError = !1),
          (e.isPersistentError = !1),
          (e.cancelling = !1),
          (e.paused = !1),
          (e.lastProgress = 0),
          e._initAjax();
      },
      _isAborted: function () {
        var e = this;
        return e.cancelling || e.paused;
      },
      _initAjax: function () {
        var i = this,
          a = (i.taskManager = {
            pool: {},
            addPool: function (e) {
              return (a.pool[e] = new a.TasksPool(e));
            },
            getPool: function (e) {
              return a.pool[e];
            },
            addTask: function (e, t) {
              return new a.Task(e, t);
            },
            TasksPool: function (i) {
              var r = this;
              (r.id = i),
                (r.cancelled = !1),
                (r.cancelledDeferrer = e.Deferred()),
                (r.tasks = {}),
                (r.addTask = function (e, t) {
                  return (r.tasks[e] = new a.Task(e, t));
                }),
                (r.size = function () {
                  return t.getObjectSize(r.tasks);
                }),
                (r.run = function (i) {
                  var a,
                    n,
                    o,
                    s = 0,
                    l = !1,
                    d = t.getObjectKeys(r.tasks).map(function (e) {
                      return r.tasks[e];
                    }),
                    c = [],
                    u = e.Deferred();
                  if (r.cancelled)
                    return r.cancelledDeferrer.resolve(), u.reject();
                  if (!i) {
                    var p = t.getObjectKeys(r.tasks).map(function (e) {
                      return r.tasks[e].deferred;
                    });
                    return (
                      t
                        .whenAll(p)
                        .done(function () {
                          var e = t.getArray(arguments);
                          r.cancelled
                            ? (u.reject.apply(null, e),
                              r.cancelledDeferrer.resolve())
                            : (u.resolve.apply(null, e),
                              r.cancelledDeferrer.reject());
                        })
                        .fail(function () {
                          var e = t.getArray(arguments);
                          u.reject.apply(null, e),
                            r.cancelled
                              ? r.cancelledDeferrer.resolve()
                              : r.cancelledDeferrer.reject();
                        }),
                      e.each(r.tasks, function (e) {
                        (a = r.tasks[e]), a.run();
                      }),
                      u
                    );
                  }
                  for (
                    n = function (t) {
                      e.when(t.deferred)
                        .fail(function () {
                          (l = !0), o.apply(null, arguments);
                        })
                        .always(o);
                    },
                      o = function () {
                        var e = t.getArray(arguments);
                        return (
                          u.notify(e),
                          c.push(e),
                          r.cancelled
                            ? (u.reject.apply(null, c),
                              void r.cancelledDeferrer.resolve())
                            : (c.length === r.size() &&
                                (l
                                  ? u.reject.apply(null, c)
                                  : u.resolve.apply(null, c)),
                              void (
                                d.length && ((a = d.shift()), n(a), a.run())
                              ))
                        );
                      };
                    d.length && s++ < i;

                  )
                    (a = d.shift()), n(a), a.run();
                  return u;
                }),
                (r.cancel = function () {
                  return (r.cancelled = !0), r.cancelledDeferrer;
                });
            },
            Task: function (i, a) {
              var r = this;
              (r.id = i),
                (r.deferred = e.Deferred()),
                (r.logic = a),
                (r.context = null),
                (r.run = function () {
                  var e = t.getArray(arguments);
                  return (
                    e.unshift(r.deferred), a.apply(r.context, e), r.deferred
                  );
                }),
                (r.runWithContext = function (e) {
                  return (r.context = e), r.run();
                });
            },
          });
        (i.ajaxQueue = []), (i.ajaxRequests = []), (i.ajaxAborted = !1);
      },
      _init: function (i, a) {
        var r,
          n,
          o,
          s,
          l = this,
          d = l.$element;
        (l.options = i),
          (l.canOrientImage = t.canOrientImage(d)),
          e.each(i, function (e, i) {
            switch (e) {
              case "minFileCount":
              case "maxFileCount":
              case "maxTotalFileCount":
              case "minFileSize":
              case "maxFileSize":
              case "maxFilePreviewSize":
              case "resizeQuality":
              case "resizeIfSizeMoreThan":
              case "progressUploadThreshold":
              case "initialPreviewCount":
              case "zoomModalHeight":
              case "minImageHeight":
              case "maxImageHeight":
              case "minImageWidth":
              case "maxImageWidth":
                l[e] = t.getNum(i);
                break;
              default:
                l[e] = i;
            }
          }),
          void 0 === l.errorCloseButton &&
            (l.errorCloseButton = t.closeButton(
              "kv-error-close" + (t.isBs(5) ? "  float-end" : "")
            )),
          l.maxTotalFileCount > 0 &&
            l.maxTotalFileCount < l.maxFileCount &&
            (l.maxTotalFileCount = l.maxFileCount),
          l.rtl &&
            ((s = l.previewZoomButtonIcons.prev),
            (l.previewZoomButtonIcons.prev = l.previewZoomButtonIcons.next),
            (l.previewZoomButtonIcons.next = s)),
          !isNaN(l.maxAjaxThreads) &&
            l.maxAjaxThreads < l.resumableUploadOptions.maxThreads &&
            (l.resumableUploadOptions.maxThreads = l.maxAjaxThreads),
          l._initFileManager(),
          "function" == typeof l.autoOrientImage &&
            (l.autoOrientImage = l.autoOrientImage()),
          "function" == typeof l.autoOrientImageInitial &&
            (l.autoOrientImageInitial = l.autoOrientImageInitial()),
          a || l._cleanup(),
          (l.duplicateErrors = []),
          (l.$form = d.closest("form")),
          l._initTemplateDefaults(),
          (l.uploadFileAttr = t.isEmpty(d.attr("name"))
            ? "file_data"
            : d.attr("name")),
          (o = l._getLayoutTemplate("progress")),
          (l.progressTemplate = o.replace("{class}", l.progressClass)),
          (l.progressInfoTemplate = o.replace("{class}", l.progressInfoClass)),
          (l.progressPauseTemplate = o.replace(
            "{class}",
            l.progressPauseClass
          )),
          (l.progressCompleteTemplate = o.replace(
            "{class}",
            l.progressCompleteClass
          )),
          (l.progressErrorTemplate = o.replace(
            "{class}",
            l.progressErrorClass
          )),
          (l.isDisabled = d.attr("disabled") || d.attr("readonly")),
          l.isDisabled && d.attr("disabled", !0),
          (l.isClickable =
            l.browseOnZoneClick &&
            l.showPreview &&
            (l.dropZoneEnabled || !t.isEmpty(l.defaultPreviewContent))),
          (l.isAjaxUpload =
            t.hasFileUploadSupport() && !t.isEmpty(l.uploadUrl)),
          (l.dropZoneEnabled = t.hasDragDropSupport() && l.dropZoneEnabled),
          l.isAjaxUpload ||
            (l.dropZoneEnabled =
              l.dropZoneEnabled && t.canAssignFilesToInput()),
          (l.slug =
            "function" == typeof i.slugCallback
              ? i.slugCallback
              : l._slugDefault),
          (l.mainTemplate = l.showCaption
            ? l._getLayoutTemplate("main1")
            : l._getLayoutTemplate("main2")),
          (l.captionTemplate = l._getLayoutTemplate("caption")),
          (l.previewGenericTemplate = l._getPreviewTemplate("generic")),
          !l.imageCanvas &&
            l.resizeImage &&
            (l.maxImageWidth || l.maxImageHeight) &&
            ((l.imageCanvas = document.createElement("canvas")),
            (l.imageCanvasContext = l.imageCanvas.getContext("2d"))),
          t.isEmpty(d.attr("id")) && d.attr("id", t.uniqId()),
          (l.namespace = ".fileinput_" + d.attr("id").replace(/-/g, "_")),
          void 0 === l.$container
            ? (l.$container = l._createContainer())
            : l._refreshContainer(),
          (n = l.$container),
          (l.$dropZone = n.find(".file-drop-zone")),
          (l.$progress = n.find(".kv-upload-progress")),
          (l.$btnUpload = n.find(".fileinput-upload")),
          (l.$captionContainer = t.getElement(
            i,
            "elCaptionContainer",
            n.find(".file-caption")
          )),
          (l.$caption = t.getElement(
            i,
            "elCaptionText",
            n.find(".file-caption-name")
          )),
          t.isEmpty(l.msgPlaceholder) ||
            ((r = d.attr("multiple") ? l.filePlural : l.fileSingle),
            l.$caption.attr(
              "placeholder",
              l.msgPlaceholder.replace("{files}", r)
            )),
          (l.$captionIcon = l.$captionContainer.find(".file-caption-icon")),
          (l.$previewContainer = t.getElement(
            i,
            "elPreviewContainer",
            n.find(".file-preview")
          )),
          (l.$preview = t.getElement(
            i,
            "elPreviewImage",
            n.find(".file-preview-thumbnails")
          )),
          (l.$previewStatus = t.getElement(
            i,
            "elPreviewStatus",
            n.find(".file-preview-status")
          )),
          (l.$errorContainer = t.getElement(
            i,
            "elErrorContainer",
            l.$previewContainer.find(".kv-fileinput-error")
          )),
          l._validateDisabled(),
          t.isEmpty(l.msgErrorClass) ||
            t.addCss(l.$errorContainer, l.msgErrorClass),
          a
            ? l._errorsExist() || l.$errorContainer.hide()
            : (l._resetErrors(),
              l.$errorContainer.hide(),
              (l.previewInitId = "thumb-" + d.attr("id")),
              l._initPreviewCache(),
              l._initPreview(!0),
              l._initPreviewActions(),
              l.$parent.hasClass("file-loading") &&
                (l.$container.insertBefore(l.$parent), l.$parent.remove())),
          l._setFileDropZoneTitle(),
          d.attr("disabled") && l.disable(),
          l._initZoom(),
          l.hideThumbnailContent && t.addCss(l.$preview, "hide-content");
      },
      _initFileManager: function () {
        var i = this;
        (i.uploadStartTime = t.now()),
          (i.fileManager = {
            stack: {},
            filesProcessed: [],
            errors: [],
            loadedImages: {},
            totalImages: 0,
            totalFiles: null,
            totalSize: null,
            uploadedSize: 0,
            stats: {},
            bpsLog: [],
            bps: 0,
            initStats: function (e) {
              var a = { started: t.now() };
              e ? (i.fileManager.stats[e] = a) : (i.fileManager.stats = a);
            },
            getUploadStats: function (e, a, r) {
              var n,
                o = i.fileManager,
                s = e
                  ? (o.stats[e] && o.stats[e].started) || t.now()
                  : i.uploadStartTime,
                l = (t.now() - s) / 1e3,
                d = [
                  "B/s",
                  "KB/s",
                  "MB/s",
                  "GB/s",
                  "TB/s",
                  "PB/s",
                  "EB/s",
                  "ZB/s",
                  "YB/s",
                ],
                c = Math.ceil(l ? a / l : 0),
                u = r - a,
                p = o.bpsLog.length ? i.bitrateUpdateDelay : 0;
              return (
                setTimeout(function () {
                  var e,
                    t,
                    i,
                    a = 0,
                    r = 0;
                  for (
                    o.bpsLog.push(c),
                      o.bpsLog.sort(function (e, t) {
                        return e - t;
                      }),
                      t = o.bpsLog.length,
                      i = t > 10 ? t - 10 : Math.ceil(t / 2),
                      e = t;
                    e > i;
                    e--
                  )
                    (r = parseFloat(o.bpsLog[e])), a++;
                  o.bps = 64 * (a > 0 ? r / a : 0);
                }, p),
                (n = {
                  fileId: e,
                  started: s,
                  elapsed: l,
                  loaded: a,
                  total: r,
                  bps: o.bps,
                  bitrate: i._getSize(o.bps, d),
                  pendingBytes: u,
                }),
                e ? (o.stats[e] = n) : (o.stats = n),
                n
              );
            },
            exists: function (t) {
              return -1 !== e.inArray(t, i.fileManager.getIdList());
            },
            count: function () {
              return i.fileManager.getIdList().length;
            },
            total: function () {
              var e = i.fileManager;
              return e.totalFiles || (e.totalFiles = e.count()), e.totalFiles;
            },
            getTotalSize: function () {
              var t = i.fileManager;
              return t.totalSize
                ? t.totalSize
                : ((t.totalSize = 0),
                  e.each(i.getFileStack(), function (e, i) {
                    var a = parseFloat(i.size);
                    t.totalSize += isNaN(a) ? 0 : a;
                  }),
                  t.totalSize);
            },
            add: function (e, a) {
              a || (a = i.fileManager.getId(e)),
                a &&
                  (i.fileManager.stack[a] = {
                    file: e,
                    name: t.getFileName(e),
                    relativePath: t.getFileRelativePath(e),
                    size: e.size,
                    nameFmt: i._getFileName(e, ""),
                    sizeFmt: i._getSize(e.size),
                  });
            },
            remove: function (e) {
              var t = i._getThumbFileId(e);
              i.fileManager.removeFile(t);
            },
            removeFile: function (e) {
              var t = i.fileManager;
              e && (delete t.stack[e], delete t.loadedImages[e]);
            },
            move: function (t, a) {
              var r = {},
                n = i.fileManager.stack;
              (t || a) &&
                t !== a &&
                (e.each(n, function (e, i) {
                  e !== t && (r[e] = i), e === a && (r[t] = n[t]);
                }),
                (i.fileManager.stack = r));
            },
            list: function () {
              var t = [];
              return (
                e.each(i.getFileStack(), function (e, i) {
                  i && i.file && t.push(i.file);
                }),
                t
              );
            },
            isPending: function (t) {
              return (
                -1 === e.inArray(t, i.fileManager.filesProcessed) &&
                i.fileManager.exists(t)
              );
            },
            isProcessed: function () {
              var t = !0,
                a = i.fileManager;
              return (
                e.each(i.getFileStack(), function (e) {
                  a.isPending(e) && (t = !1);
                }),
                t
              );
            },
            clear: function () {
              var e = i.fileManager;
              (i.isDuplicateError = !1),
                (i.isPersistentError = !1),
                (e.totalFiles = null),
                (e.totalSize = null),
                (e.uploadedSize = 0),
                (e.stack = {}),
                (e.errors = []),
                (e.filesProcessed = []),
                (e.stats = {}),
                (e.bpsLog = []),
                (e.bps = 0),
                e.clearImages();
            },
            clearImages: function () {
              (i.fileManager.loadedImages = {}),
                (i.fileManager.totalImages = 0);
            },
            addImage: function (e, t) {
              i.fileManager.loadedImages[e] = t;
            },
            removeImage: function (e) {
              delete i.fileManager.loadedImages[e];
            },
            getImageIdList: function () {
              return t.getObjectKeys(i.fileManager.loadedImages);
            },
            getImageCount: function () {
              return i.fileManager.getImageIdList().length;
            },
            getId: function (e) {
              return i._getFileId(e);
            },
            getIndex: function (e) {
              return i.fileManager.getIdList().indexOf(e);
            },
            getThumb: function (t) {
              var a = null;
              return (
                i._getThumbs().each(function () {
                  var r = e(this);
                  i._getThumbFileId(r) === t && (a = r);
                }),
                a
              );
            },
            getThumbIndex: function (e) {
              var t = i._getThumbFileId(e);
              return i.fileManager.getIndex(t);
            },
            getIdList: function () {
              return t.getObjectKeys(i.fileManager.stack);
            },
            getFile: function (e) {
              return i.fileManager.stack[e] || null;
            },
            getFileName: function (e, t) {
              var a = i.fileManager.getFile(e);
              return a ? (t ? a.nameFmt || "" : a.name || "") : "";
            },
            getFirstFile: function () {
              var e = i.fileManager.getIdList(),
                t = e && e.length ? e[0] : null;
              return i.fileManager.getFile(t);
            },
            setFile: function (e, t) {
              i.fileManager.getFile(e)
                ? (i.fileManager.stack[e].file = t)
                : i.fileManager.add(t, e);
            },
            setProcessed: function (e) {
              i.fileManager.filesProcessed.push(e);
            },
            getProgress: function () {
              var e = i.fileManager.total(),
                t = i.fileManager.filesProcessed.length;
              return e ? Math.ceil((t / e) * 100) : 0;
            },
            setProgress: function (e, t) {
              var a = i.fileManager.getFile(e);
              !isNaN(t) && a && (a.progress = t);
            },
          });
      },
      _setUploadData: function (i, a) {
        var r = this;
        e.each(a, function (e, a) {
          var n = r.uploadParamNames[e] || e;
          t.isArray(a) ? i.append(n, a[0], a[1]) : i.append(n, a);
        });
      },
      _initResumableUpload: function () {
        var i,
          a = this,
          r = a.resumableUploadOptions,
          n = t.logMessages,
          o = a.fileManager;
        if (a.enableResumableUpload) {
          if (
            (r.fallback !== !1 &&
              "function" != typeof r.fallback &&
              (r.fallback = function (e) {
                e._log(n.noResumableSupport), (e.enableResumableUpload = !1);
              }),
            !t.hasResumableUploadSupport() && r.fallback !== !1)
          )
            return void r.fallback(a);
          if (!a.uploadUrl && a.enableResumableUpload)
            return a._log(n.noUploadUrl), void (a.enableResumableUpload = !1);
          if (
            ((r.chunkSize = parseFloat(r.chunkSize)),
            r.chunkSize <= 0 || isNaN(r.chunkSize))
          )
            return (
              a._log(n.invalidChunkSize, { chunkSize: r.chunkSize }),
              void (a.enableResumableUpload = !1)
            );
          (i = a.resumableManager = {
            init: function (e, t, n) {
              (i.logs = []),
                (i.stack = []),
                (i.error = ""),
                (i.id = e),
                (i.file = t.file),
                (i.fileName = t.name),
                (i.fileIndex = n),
                (i.completed = !1),
                (i.lastProgress = 0),
                a.showPreview &&
                  ((i.$thumb = o.getThumb(e) || null),
                  (i.$progress = i.$btnDelete = null),
                  i.$thumb &&
                    i.$thumb.length &&
                    ((i.$progress = i.$thumb.find(".file-thumb-progress")),
                    (i.$btnDelete = i.$thumb.find(".kv-file-remove")))),
                (i.chunkSize = 1024 * r.chunkSize),
                (i.chunkCount = i.getTotalChunks());
            },
            setAjaxError: function (e, t, o, s) {
              e.responseJSON &&
                e.responseJSON.error &&
                (o = e.responseJSON.error.toString()),
                s || (i.error = o),
                r.showErrorLog &&
                  a._log(n.ajaxError, {
                    status: e.status,
                    error: o,
                    text: e.responseText || "",
                  });
            },
            reset: function () {
              (i.stack = []), (i.chunksProcessed = {});
            },
            setProcessed: function (t) {
              var n,
                s,
                l = i.id,
                d = i.$thumb,
                c = i.$progress,
                u = d && d.length,
                p = {
                  id: u ? d.attr("id") : "",
                  index: o.getIndex(l),
                  fileId: l,
                },
                f = a.resumableUploadOptions.skipErrorsAndProceed;
              (i.completed = !0),
                (i.lastProgress = 0),
                u && d.removeClass("file-uploading"),
                "success" === t
                  ? ((o.uploadedSize += i.file.size),
                    a.showPreview &&
                      (a._setProgress(101, c),
                      a._setThumbStatus(d, "Success"),
                      a._initUploadSuccess(i.chunksProcessed[l].data, d)),
                    o.removeFile(l),
                    delete i.chunksProcessed[l],
                    a._raise("fileuploaded", [p.id, p.index, p.fileId]),
                    o.isProcessed() && a._setProgress(101))
                  : "cancel" !== t &&
                    (a.showPreview &&
                      (a._setThumbStatus(d, "Error"),
                      a._setPreviewError(d, !0),
                      a._setProgress(101, c, a.msgProgressError),
                      a._setProgress(101, a.$progress, a.msgProgressError),
                      (a.cancelling = !f)),
                    a.$errorContainer.find(
                      'li[data-file-id="' + p.fileId + '"]'
                    ).length ||
                      ((s = {
                        file: i.fileName,
                        max: r.maxRetries,
                        error: i.error,
                      }),
                      (n = a.msgResumableUploadRetriesExceeded.setTokens(s)),
                      e.extend(p, s),
                      a._showFileError(n, p, "filemaxretries"),
                      f &&
                        (o.removeFile(l),
                        delete i.chunksProcessed[l],
                        o.isProcessed() && a._setProgress(101)))),
                o.isProcessed() && i.reset();
            },
            check: function () {
              var t = !0;
              e.each(i.logs, function (e, i) {
                return i ? void 0 : ((t = !1), !1);
              });
            },
            processedResumables: function () {
              var e,
                t = i.logs,
                a = 0;
              if (!t || !t.length) return 0;
              for (e = 0; e < t.length; e++) t[e] === !0 && a++;
              return a;
            },
            getUploadedSize: function () {
              var e = i.processedResumables() * i.chunkSize;
              return e > i.file.size ? i.file.size : e;
            },
            getTotalChunks: function () {
              var e = parseFloat(i.chunkSize);
              return !isNaN(e) && e > 0 ? Math.ceil(i.file.size / e) : 0;
            },
            getProgress: function () {
              var e = i.processedResumables(),
                t = i.chunkCount;
              return 0 === t ? 0 : Math.ceil((e / t) * 100);
            },
            checkAborted: function (e) {
              a._isAborted() && (clearInterval(e), a.unlock());
            },
            upload: function () {
              var e,
                r = o.getIdList(),
                n = "new";
              e = setInterval(function () {
                var s;
                if (
                  (i.checkAborted(e),
                  "new" === n &&
                    (a.lock(),
                    (n = "processing"),
                    (s = r.shift()),
                    o.initStats(s),
                    o.stack[s] &&
                      (i.init(s, o.stack[s], o.getIndex(s)),
                      i.processUpload())),
                  !o.isPending(s) && i.completed && (n = "new"),
                  o.isProcessed())
                ) {
                  var l = a.$preview.find(".file-preview-initial");
                  l.length && (t.addCss(l, t.SORT_CSS), a._initSortable()),
                    clearInterval(e),
                    a._clearFileInput(),
                    a.unlock(),
                    setTimeout(function () {
                      var e = a.previewCache.data;
                      e &&
                        ((a.initialPreview = e.content),
                        (a.initialPreviewConfig = e.config),
                        (a.initialPreviewThumbTags = e.tags)),
                        a._raise("filebatchuploadcomplete", [
                          a.initialPreview,
                          a.initialPreviewConfig,
                          a.initialPreviewThumbTags,
                          a._getExtraData(),
                        ]);
                    }, a.processDelay);
                }
              }, a.processDelay);
            },
            uploadResumable: function () {
              var e,
                t,
                n = a.taskManager,
                o = i.chunkCount;
              for (t = n.addPool(i.id), e = 0; o > e; e++)
                (i.logs[e] = !(
                  !i.chunksProcessed[i.id] || !i.chunksProcessed[i.id][e]
                )),
                  i.logs[e] || i.pushAjax(e, 0);
              t.run(r.maxThreads)
                .done(function () {
                  i.setProcessed("success");
                })
                .fail(function () {
                  i.setProcessed(t.cancelled ? "cancel" : "error");
                });
            },
            processUpload: function () {
              var n,
                s,
                l,
                d,
                c,
                u,
                p,
                f = i.id;
              return r.testUrl
                ? ((n = new FormData()),
                  (s = o.stack[f]),
                  a._setUploadData(n, {
                    fileId: f,
                    fileName: s.fileName,
                    fileSize: s.size,
                    fileRelativePath: s.relativePath,
                    chunkSize: i.chunkSize,
                    chunkCount: i.chunkCount,
                  }),
                  (l = function (e) {
                    (p = a._getOutData(n, e)),
                      a._raise("filetestbeforesend", [f, o, i, p]);
                  }),
                  (d = function (r, s, l) {
                    p = a._getOutData(n, l, r);
                    var d = a.uploadParamNames,
                      c = d.chunksUploaded || "chunksUploaded",
                      u = [f, o, i, p];
                    r[c] && t.isArray(r[c])
                      ? (i.chunksProcessed[f] || (i.chunksProcessed[f] = {}),
                        e.each(r[c], function (e, t) {
                          (i.logs[t] = !0), (i.chunksProcessed[f][t] = !0);
                        }),
                        (i.chunksProcessed[f].data = r),
                        a._raise("filetestsuccess", u))
                      : a._raise("filetesterror", u),
                      i.uploadResumable();
                  }),
                  (c = function (e, t, r) {
                    (p = a._getOutData(n, e)),
                      a._raise("filetestajaxerror", [f, o, i, p]),
                      i.setAjaxError(e, t, r, !0),
                      i.uploadResumable();
                  }),
                  (u = function () {
                    a._raise("filetestcomplete", [f, o, i, a._getOutData(n)]);
                  }),
                  void a._ajaxSubmit(l, d, u, c, n, f, i.fileIndex, r.testUrl))
                : void i.uploadResumable();
            },
            pushAjax: function (e, t) {
              var r = a.taskManager,
                o = r.getPool(i.id);
              o.addTask(o.size() + 1, function (e) {
                var t,
                  r = i.stack.shift();
                (t = r[0]),
                  i.chunksProcessed[i.id] && i.chunksProcessed[i.id][t]
                    ? a._log(n.chunkQueueError, { index: t })
                    : i.sendAjax(t, r[1], e);
              }),
                i.stack.push([e, t]);
            },
            sendAjax: function (e, s, l) {
              var d,
                c = i.chunkSize,
                u = i.id,
                p = i.file,
                f = i.$thumb,
                g = t.logMessages,
                m = i.$btnDelete,
                v = function (e, t) {
                  t && (e = e.setTokens(t)),
                    (e = g.resumableRequestError.setTokens({ msg: e })),
                    a._log(e),
                    l.reject(e);
                };
              if (!i.chunksProcessed[u] || !i.chunksProcessed[u][e]) {
                if (s > r.maxRetries)
                  return (
                    v(g.resumableMaxRetriesReached, { n: r.maxRetries }),
                    void i.setProcessed("error")
                  );
                var h,
                  w,
                  b,
                  _,
                  C,
                  x,
                  y = p.slice
                    ? "slice"
                    : p.mozSlice
                    ? "mozSlice"
                    : p.webkitSlice
                    ? "webkitSlice"
                    : "slice",
                  T = p[y](c * e, c * (e + 1));
                (h = new FormData()),
                  (d = o.stack[u]),
                  a._setUploadData(h, {
                    chunkCount: i.chunkCount,
                    chunkIndex: e,
                    chunkSize: c,
                    chunkSizeStart: c * e,
                    fileBlob: [T, i.fileName],
                    fileId: u,
                    fileName: i.fileName,
                    fileRelativePath: d.relativePath,
                    fileSize: p.size,
                    retryCount: s,
                  }),
                  i.$progress && i.$progress.length && i.$progress.show(),
                  (b = function (r) {
                    (w = a._getOutData(h, r)),
                      a.showPreview &&
                        (f.hasClass("file-preview-success") ||
                          (a._setThumbStatus(f, "Loading"),
                          t.addCss(f, "file-uploading")),
                        m.attr("disabled", !0)),
                      a._raise("filechunkbeforesend", [u, e, s, o, i, w]);
                  }),
                  (_ = function (t, d, c) {
                    if (a._isAborted()) return void v(g.resumableAborting);
                    w = a._getOutData(h, c, t);
                    var p = a.uploadParamNames,
                      f = p.chunkIndex || "chunkIndex",
                      m = [u, e, s, o, i, w];
                    t.error
                      ? (r.showErrorLog &&
                          a._log(n.retryStatus, {
                            retry: s + 1,
                            filename: i.fileName,
                            chunk: e,
                          }),
                        a._raise("filechunkerror", m),
                        i.pushAjax(e, s + 1),
                        (i.error = t.error),
                        v(t.error))
                      : ((i.logs[t[f]] = !0),
                        i.chunksProcessed[u] || (i.chunksProcessed[u] = {}),
                        (i.chunksProcessed[u][t[f]] = !0),
                        (i.chunksProcessed[u].data = t),
                        l.resolve.call(null, t),
                        a._raise("filechunksuccess", m),
                        i.check());
                  }),
                  (C = function (t, r, n) {
                    return a._isAborted()
                      ? void v(g.resumableAborting)
                      : ((w = a._getOutData(h, t)),
                        i.setAjaxError(t, r, n),
                        a._raise("filechunkajaxerror", [u, e, s, o, i, w]),
                        i.pushAjax(e, s + 1),
                        void v(g.resumableRetryError, { n: s - 1 }));
                  }),
                  (x = function () {
                    a._isAborted() ||
                      a._raise("filechunkcomplete", [
                        u,
                        e,
                        s,
                        o,
                        i,
                        a._getOutData(h),
                      ]);
                  }),
                  a._ajaxSubmit(b, _, x, C, h, u, i.fileIndex);
              }
            },
          }),
            i.reset();
        }
      },
      _initTemplateDefaults: function () {
        var i,
          a,
          r,
          n,
          o,
          s,
          l,
          d,
          c,
          u,
          p,
          f,
          g,
          m,
          v,
          h,
          w,
          b,
          _,
          C,
          x,
          y,
          T,
          P,
          F,
          k,
          S,
          E,
          I,
          A,
          D,
          z,
          $,
          j,
          U,
          M,
          R,
          O,
          B,
          L,
          N,
          Z,
          H = this,
          W = function (e, i) {
            return (
              '<object class="kv-preview-data file-preview-' +
              e +
              '" title="{caption}" data="{data}" type="' +
              i +
              '"' +
              O +
              ">\n" +
              t.DEFAULT_PREVIEW +
              "\n</object>\n"
            );
          },
          q = "btn btn-sm btn-kv " + t.defaultButtonCss();
        (i =
          '{preview}\n<div class="kv-upload-progress kv-hidden"></div><div class="clearfix"></div>\n<div class="file-caption {class}">\n  <span class="file-caption-icon"></span>\n  <div class="input-group">\n{caption}\n' +
          (t.isBs(5)
            ? ""
            : '<div class="input-group-btn input-group-append">\n') +
          "      {remove}\n      {cancel}\n      {pause}\n      {upload}\n      {browse}\n" +
          (t.isBs(5) ? "" : "    </div>\n") +
          "  </div>"),
          (a =
            '{preview}\n<div class="kv-upload-progress kv-hidden"></div>\n<div class="clearfix"></div>\n<span class="{class}">{remove}\n{cancel}\n{upload}\n{browse}\n</span>'),
          (r =
            '<div class="file-preview {class}">\n  {close}  <div class="{dropClass} clearfix">\n    <div class="file-preview-thumbnails clearfix">\n    </div>\n    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n  </div>\n</div>'),
          (o = t.closeButton("fileinput-remove")),
          (n = '<i class="bi-file-earmark-arrow-up"></i>'),
          (s =
            '<input readonly class="file-caption-name form-control {class}">\n'),
          (l =
            '<button type="{type}" title="{title}" class="{css}" {status} {tabIndexConfig}>{icon} {label}</button>'),
          (d =
            '<a href="{href}" title="{title}" class="{css}" {status} {tabIndexConfig}>{icon} {label}</a>'),
          (c =
            '<div class="{css}" {status} {tabIndexConfig}>{icon} {label}</div>'),
          (Z = t.MODAL_ID + "Label"),
          (u =
            '<div id="' +
            t.MODAL_ID +
            '" class="file-zoom-dialog modal fade" aria-labelledby="' +
            Z +
            '" {tabIndexConfig}></div>'),
          (p =
            '<div class="modal-dialog modal-lg{rtl}" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title" id="' +
            Z +
            '">{heading}</h5>\n      <span class="kv-zoom-title"></span>\n      <div class="kv-zoom-actions">{toggleheader}{fullscreen}{borderless}{close}</div>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n'),
          (f =
            '<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {status}\n     </div>\n</div>{stats}'),
          (N =
            '<div class="text-primary file-upload-stats"><span class="pending-time">{pendingTime}</span> <span class="upload-speed">{uploadSpeed}</span></div>'),
          (g = " <samp>({sizeText})</samp>"),
          (m =
            '<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">\n        <div class="file-caption-info">{caption}</div>\n        <div class="file-size-info">{size}</div>\n    </div>\n    {progress}\n{indicator}\n{actions}\n</div>'),
          (v =
            '<div class="file-actions">\n    <div class="file-footer-buttons">\n        {download} {upload} {delete} {zoom} {other}    </div>\n</div>\n{drag}\n<div class="clearfix"></div>'),
          (h =
            '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n'),
          (w =
            '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>'),
          (b =
            '<a class="kv-file-download {downloadClass}" title="{downloadTitle}" href="{downloadUrl}" download="{caption}" target="_blank">{downloadIcon}</a>'),
          (_ =
            '<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>'),
          (C =
            '<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>'),
          (x =
            '<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>'),
          (y =
            '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-fileid="{fileid}" data-template="{template}"'),
          (T = y + '><div class="kv-file-content">\n'),
          (P = y + ' title="{caption}"><div class="kv-file-content">\n'),
          (F = "</div>{footer}\n{zoomCache}</div>\n"),
          (k = "{content}\n"),
          (O = " {style}"),
          (S = W("html", "text/html")),
          (I = W("text", "text/plain;charset=UTF-8")),
          (M = W("pdf", "application/pdf")),
          (E =
            '<img src="{data}" class="file-preview-image kv-preview-data" title="{title}" alt="{alt}"' +
            O +
            ">\n"),
          (A =
            '<iframe class="kv-preview-data file-preview-office" src="https://view.officeapps.live.com/op/embed.aspx?src={data}"' +
            O +
            "></iframe>"),
          (D =
            '<iframe class="kv-preview-data file-preview-gdocs" src="https://docs.google.com/gview?url={data}&embedded=true"' +
            O +
            "></iframe>"),
          (z =
            '<video class="kv-preview-data file-preview-video" controls' +
            O +
            '>\n<source src="{data}" type="{type}">\n' +
            t.DEFAULT_PREVIEW +
            "\n</video>\n"),
          ($ =
            '<!--suppress ALL --><audio class="kv-preview-data file-preview-audio" controls' +
            O +
            '>\n<source src="{data}" type="{type}">\n' +
            t.DEFAULT_PREVIEW +
            "\n</audio>\n"),
          (j =
            '<embed class="kv-preview-data file-preview-flash" src="{data}" type="application/x-shockwave-flash"' +
            O +
            ">\n"),
          (U =
            '<object class="kv-preview-data file-preview-object file-object {typeCss}" data="{data}" type="{type}"' +
            O +
            '>\n<param name="movie" value="{caption}" />\n' +
            t.OBJECT_PARAMS +
            " " +
            t.DEFAULT_PREVIEW +
            "\n</object>\n"),
          (R =
            '<div class="kv-preview-data file-preview-other-frame"' +
            O +
            ">\n" +
            t.DEFAULT_PREVIEW +
            "\n</div>\n"),
          (B = '<div class="kv-zoom-cache">{zoomContent}</div>'),
          (L = { width: "100%", height: "100%", "min-height": "480px" }),
          H._isPdfRendered() &&
            (M = H.pdfRendererTemplate.replace(
              "{renderer}",
              H._encodeURI(H.pdfRendererUrl)
            )),
          (H.defaults = {
            layoutTemplates: {
              main1: i,
              main2: a,
              preview: r,
              close: o,
              fileIcon: n,
              caption: s,
              modalMain: u,
              modal: p,
              progress: f,
              stats: N,
              size: g,
              footer: m,
              indicator: x,
              actions: v,
              actionDelete: h,
              actionUpload: w,
              actionDownload: b,
              actionZoom: _,
              actionDrag: C,
              btnDefault: l,
              btnLink: d,
              btnBrowse: c,
              zoomCache: B,
            },
            previewMarkupTags: { tagBefore1: T, tagBefore2: P, tagAfter: F },
            previewContentTemplates: {
              generic: k,
              html: S,
              image: E,
              text: I,
              office: A,
              gdocs: D,
              video: z,
              audio: $,
              flash: j,
              object: U,
              pdf: M,
              other: R,
            },
            allowedPreviewTypes: [
              "image",
              "html",
              "text",
              "video",
              "audio",
              "flash",
              "pdf",
              "object",
            ],
            previewTemplates: {},
            previewSettings: {
              image: {
                width: "auto",
                height: "auto",
                "max-width": "100%",
                "max-height": "100%",
              },
              html: { width: "213px", height: "160px" },
              text: { width: "213px", height: "160px" },
              office: { width: "213px", height: "160px" },
              gdocs: { width: "213px", height: "160px" },
              video: { width: "213px", height: "160px" },
              audio: { width: "100%", height: "30px" },
              flash: { width: "213px", height: "160px" },
              object: { width: "213px", height: "160px" },
              pdf: { width: "100%", height: "160px", position: "relative" },
              other: { width: "213px", height: "160px" },
            },
            previewSettingsSmall: {
              image: {
                width: "auto",
                height: "auto",
                "max-width": "100%",
                "max-height": "100%",
              },
              html: { width: "100%", height: "160px" },
              text: { width: "100%", height: "160px" },
              office: { width: "100%", height: "160px" },
              gdocs: { width: "100%", height: "160px" },
              video: { width: "100%", height: "auto" },
              audio: { width: "100%", height: "30px" },
              flash: { width: "100%", height: "auto" },
              object: { width: "100%", height: "auto" },
              pdf: { width: "100%", height: "160px" },
              other: { width: "100%", height: "160px" },
            },
            previewZoomSettings: {
              image: {
                width: "auto",
                height: "auto",
                "max-width": "100%",
                "max-height": "100%",
              },
              html: L,
              text: L,
              office: {
                width: "100%",
                height: "100%",
                "max-width": "100%",
                "min-height": "480px",
              },
              gdocs: {
                width: "100%",
                height: "100%",
                "max-width": "100%",
                "min-height": "480px",
              },
              video: { width: "auto", height: "100%", "max-width": "100%" },
              audio: { width: "100%", height: "30px" },
              flash: { width: "auto", height: "480px" },
              object: {
                width: "auto",
                height: "100%",
                "max-width": "100%",
                "min-height": "480px",
              },
              pdf: L,
              other: { width: "auto", height: "100%", "min-height": "480px" },
            },
            mimeTypeAliases: { "video/quicktime": "video/mp4" },
            fileTypeSettings: {
              image: function (e, i) {
                return (
                  (t.compare(e, "image.*") && !t.compare(e, /(tiff?|wmf)$/i)) ||
                  t.compare(i, /\.(gif|png|jpe?g)$/i)
                );
              },
              html: function (e, i) {
                return (
                  t.compare(e, "text/html") || t.compare(i, /\.(htm|html)$/i)
                );
              },
              office: function (e, i) {
                return (
                  t.compare(e, /(word|excel|powerpoint|office)$/i) ||
                  t.compare(i, /\.(docx?|xlsx?|pptx?|pps|potx?)$/i)
                );
              },
              gdocs: function (e, i) {
                return (
                  t.compare(
                    e,
                    /(word|excel|powerpoint|office|iwork-pages|tiff?)$/i
                  ) ||
                  t.compare(
                    i,
                    /\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i
                  )
                );
              },
              text: function (e, i) {
                return (
                  t.compare(e, "text.*") ||
                  t.compare(i, /\.(xml|javascript)$/i) ||
                  t.compare(i, /\.(txt|md|nfo|ini|json|php|js|css)$/i)
                );
              },
              video: function (e, i) {
                return (
                  t.compare(e, "video.*") &&
                  (t.compare(e, /(ogg|mp4|mp?g|mov|webm|3gp)$/i) ||
                    t.compare(i, /\.(og?|mp4|webm|mp?g|mov|3gp)$/i))
                );
              },
              audio: function (e, i) {
                return (
                  t.compare(e, "audio.*") &&
                  (t.compare(i, /(ogg|mp3|mp?g|wav)$/i) ||
                    t.compare(i, /\.(og?|mp3|mp?g|wav)$/i))
                );
              },
              flash: function (e, i) {
                return (
                  t.compare(e, "application/x-shockwave-flash", !0) ||
                  t.compare(i, /\.(swf)$/i)
                );
              },
              pdf: function (e, i) {
                return (
                  t.compare(e, "application/pdf", !0) ||
                  t.compare(i, /\.(pdf)$/i)
                );
              },
              object: function () {
                return !0;
              },
              other: function () {
                return !0;
              },
            },
            fileActionSettings: {
              showRemove: !0,
              showUpload: !0,
              showDownload: !0,
              showZoom: !0,
              showDrag: !0,
              removeIcon: '<i class="bi-trash"></i>',
              removeClass: q,
              removeErrorClass: "btn btn-sm btn-kv btn-danger",
              removeTitle: "Remove file",
              uploadIcon: '<i class="bi-upload"></i>',
              uploadClass: q,
              uploadTitle: "Upload file",
              uploadRetryIcon: '<i class="bi-arrow-clockwise"></i>',
              uploadRetryTitle: "Retry upload",
              downloadIcon: '<i class="bi-download"></i>',
              downloadClass: q,
              downloadTitle: "Download file",
              zoomIcon: '<i class="bi-zoom-in"></i>',
              zoomClass: q,
              zoomTitle: "View Details",
              dragIcon: '<i class="bi-arrows-move"></i>',
              dragClass: "text-primary",
              dragTitle: "Move / Rearrange",
              dragSettings: {},
              indicatorNew: '<i class="bi-plus-lg text-warning"></i>',
              indicatorSuccess: '<i class="bi-check-lg text-success"></i>',
              indicatorError: '<i class="bi-exclamation-lg text-danger"></i>',
              indicatorLoading:
                '<i class="bi-hourglass-bottom text-muted"></i>',
              indicatorPaused: '<i class="bi-pause-fill text-primary"></i>',
              indicatorNewTitle: "Not uploaded yet",
              indicatorSuccessTitle: "Uploaded",
              indicatorErrorTitle: "Upload Error",
              indicatorLoadingTitle: "Uploading &hellip;",
              indicatorPausedTitle: "Upload Paused",
            },
          }),
          e.each(H.defaults, function (t, i) {
            return "allowedPreviewTypes" === t
              ? void (
                  void 0 === H.allowedPreviewTypes &&
                  (H.allowedPreviewTypes = i)
                )
              : void (H[t] = e.extend(!0, {}, i, H[t]));
          }),
          H._initPreviewTemplates();
      },
      _initPreviewTemplates: function () {
        var i,
          a = this,
          r = a.previewMarkupTags,
          n = r.tagAfter;
        e.each(a.previewContentTemplates, function (e, o) {
          t.isEmpty(a.previewTemplates[e]) &&
            ((i = r.tagBefore2),
            ("generic" !== e && "image" !== e) || (i = r.tagBefore1),
            a._isPdfRendered() &&
              "pdf" === e &&
              (i = i.replace(
                "kv-file-content",
                "kv-file-content kv-pdf-rendered"
              )),
            (a.previewTemplates[e] = i + o + n));
        });
      },
      _initPreviewCache: function () {
        var i = this;
        (i.previewCache = {
          data: {},
          init: function () {
            var e = i.initialPreview;
            e.length > 0 &&
              !t.isArray(e) &&
              (e = e.split(i.initialPreviewDelimiter)),
              (i.previewCache.data = {
                content: e,
                config: i.initialPreviewConfig,
                tags: i.initialPreviewThumbTags,
              });
          },
          count: function (e) {
            if (!i.previewCache.data || !i.previewCache.data.content) return 0;
            if (e) {
              var t = i.previewCache.data.content.filter(function (e) {
                return null !== e;
              });
              return t.length;
            }
            return i.previewCache.data.content.length;
          },
          get: function (e, a) {
            var r,
              n,
              o,
              s,
              l,
              d,
              c,
              u = t.INIT_FLAG + e,
              p = i.previewCache.data,
              f = p.config[e],
              g = p.content[e],
              m = t.ifSet("previewAsData", f, i.initialPreviewAsData),
              v = f
                ? { title: f.title || null, alt: f.alt || null }
                : { title: null, alt: null },
              h = function (e, a, r, n, o, s, l, d) {
                var c =
                    " file-preview-initial " + t.SORT_CSS + (l ? " " + l : ""),
                  u = i.previewInitId + "-" + s,
                  p = (f && f.fileId) || u;
                return i._generatePreviewTemplate(
                  e,
                  a,
                  r,
                  n,
                  u,
                  p,
                  !1,
                  null,
                  c,
                  o,
                  s,
                  d,
                  v,
                  (f && f.zoomData) || a
                );
              };
            return g && g.length
              ? ((a = void 0 === a ? !0 : a),
                (o = t.ifSet("type", f, i.initialPreviewFileType || "generic")),
                (l = t.ifSet("filename", f, t.ifSet("caption", f))),
                (d = t.ifSet("filetype", f, o)),
                (s = i.previewCache.footer(e, a, (f && f.size) || null)),
                (c = t.ifSet("frameClass", f)),
                (r = m
                  ? h(o, g, l, d, s, u, c)
                  : h("generic", g, l, d, s, u, c, o).setTokens({
                      content: p.content[e],
                    })),
                p.tags.length && p.tags[e] && (r = t.replaceTags(r, p.tags[e])),
                t.isEmpty(f) ||
                  t.isEmpty(f.frameAttr) ||
                  ((n = t.createElement(r)),
                  n.find(".file-preview-initial").attr(f.frameAttr),
                  (r = n.html()),
                  n.remove()),
                r)
              : "";
          },
          clean: function (e) {
            (e.content = t.cleanArray(e.content)),
              (e.config = t.cleanArray(e.config)),
              (e.tags = t.cleanArray(e.tags)),
              (i.previewCache.data = e);
          },
          add: function (e, a, r, n) {
            var o,
              s = i.previewCache.data;
            return e && e.length
              ? ((o = e.length - 1),
                t.isArray(e) || (e = e.split(i.initialPreviewDelimiter)),
                n && s.content
                  ? ((o = s.content.push(e[0]) - 1),
                    (s.config[o] = a),
                    (s.tags[o] = r))
                  : ((s.content = e), (s.config = a), (s.tags = r)),
                i.previewCache.clean(s),
                o)
              : 0;
          },
          set: function (e, a, r, n) {
            var o,
              s,
              l = i.previewCache.data;
            if (
              e &&
              e.length &&
              (t.isArray(e) || (e = e.split(i.initialPreviewDelimiter)),
              (s = e.filter(function (e) {
                return null !== e;
              })),
              s.length)
            ) {
              if (
                (void 0 === l.content && (l.content = []),
                void 0 === l.config && (l.config = []),
                void 0 === l.tags && (l.tags = []),
                n)
              ) {
                for (o = 0; o < e.length; o++) e[o] && l.content.push(e[o]);
                for (o = 0; o < a.length; o++) a[o] && l.config.push(a[o]);
                for (o = 0; o < r.length; o++) r[o] && l.tags.push(r[o]);
              } else (l.content = e), (l.config = a), (l.tags = r);
              i.previewCache.clean(l);
            }
          },
          unset: function (a) {
            var r = i.previewCache.count(),
              n = i.reversePreviewOrder;
            if (r) {
              if (1 === r)
                return (
                  (i.previewCache.data.content = []),
                  (i.previewCache.data.config = []),
                  (i.previewCache.data.tags = []),
                  (i.initialPreview = []),
                  (i.initialPreviewConfig = []),
                  void (i.initialPreviewThumbTags = [])
                );
              (i.previewCache.data.content = t.spliceArray(
                i.previewCache.data.content,
                a,
                n
              )),
                (i.previewCache.data.config = t.spliceArray(
                  i.previewCache.data.config,
                  a,
                  n
                )),
                (i.previewCache.data.tags = t.spliceArray(
                  i.previewCache.data.tags,
                  a,
                  n
                ));
              var o = e.extend(!0, {}, i.previewCache.data);
              i.previewCache.clean(o);
            }
          },
          out: function () {
            var e,
              t,
              a,
              r = "",
              n = i.previewCache.count();
            if (0 === n) return { content: "", caption: "" };
            for (t = 0; n > t; t++)
              (a = i.previewCache.get(t)),
                (r = i.reversePreviewOrder ? a + r : r + a);
            return (e = i._getMsgSelected(n)), { content: r, caption: e };
          },
          footer: function (e, a, r) {
            var n = i.previewCache.data || {};
            if (t.isEmpty(n.content)) return "";
            (t.isEmpty(n.config) || t.isEmpty(n.config[e])) &&
              (n.config[e] = {}),
              (a = void 0 === a ? !0 : a);
            var o,
              s = n.config[e],
              l = t.ifSet("caption", s),
              d = t.ifSet("width", s, "auto"),
              c = t.ifSet("url", s, !1),
              u = t.ifSet("key", s, null),
              p = t.ifSet("fileId", s, null),
              f = i.fileActionSettings,
              g = i.initialPreviewShowDelete || !1,
              m = i.initialPreviewDownloadUrl
                ? i.initialPreviewDownloadUrl +
                  "?key=" +
                  u +
                  (p ? "&fileId=" + p : "")
                : "",
              v = s.downloadUrl || m,
              h = s.filename || s.caption || "",
              w = !!v,
              b = t.ifSet("showRemove", s, g),
              _ = t.ifSet("showDownload", s, t.ifSet("showDownload", f, w)),
              C = t.ifSet("showZoom", s, t.ifSet("showZoom", f, !0)),
              x = t.ifSet("showDrag", s, t.ifSet("showDrag", f, !0)),
              y = c === !1 && a;
            return (
              (_ = _ && s.downloadUrl !== !1 && !!v),
              (o = i._renderFileActions(s, !1, _, b, C, x, y, c, u, !0, v, h)),
              i
                ._getLayoutTemplate("footer")
                .setTokens({
                  progress: i._renderThumbProgress(),
                  actions: o,
                  caption: l,
                  size: i._getSize(r),
                  width: d,
                  indicator: "",
                })
            );
          },
        }),
          i.previewCache.init();
      },
      _isPdfRendered: function () {
        var e = this,
          t = e.usePdfRenderer,
          i = "function" == typeof t ? t() : !!t;
        return i && e.pdfRendererUrl;
      },
      _handler: function (e, t, i) {
        var a = this,
          r = a.namespace,
          n = t.split(" ").join(r + " ") + r;
        e && e.length && e.off(n).on(n, i);
      },
      _encodeURI: function (e) {
        var t = this;
        return t.encodeUrl ? encodeURI(e) : e;
      },
      _log: function (e, t) {
        var i = this,
          a = i.$element.attr("id");
        i.showConsoleLogs &&
          (a && (e = '"' + a + '": ' + e),
          (e = "bootstrap-fileinput: " + e),
          "object" == typeof t && (e = e.setTokens(t)),
          window.console && "undefined" != typeof window.console.log
            ? window.console.log(e)
            : window.alert(e));
      },
      _validate: function () {
        var e = this,
          i = "file" === e.$element.attr("type");
        return i || e._log(t.logMessages.badInputType), i;
      },
      _errorsExist: function () {
        var i,
          a = this,
          r = a.$errorContainer.find("li");
        return r.length
          ? !0
          : ((i = t.createElement(a.$errorContainer.html())),
            i.find(".kv-error-close").remove(),
            i.find("ul").remove(),
            !!e.trim(i.text()).length);
      },
      _errorHandler: function (e, t) {
        var i = this,
          a = e.target.error,
          r = function (e) {
            i._showError(e.replace("{name}", t));
          };
        r(
          a.code === a.NOT_FOUND_ERR
            ? i.msgFileNotFound
            : a.code === a.SECURITY_ERR
            ? i.msgFileSecured
            : a.code === a.NOT_READABLE_ERR
            ? i.msgFileNotReadable
            : a.code === a.ABORT_ERR
            ? i.msgFilePreviewAborted
            : i.msgFilePreviewError
        );
      },
      _addError: function (e) {
        var i = this,
          a = i.$errorContainer;
        e &&
          a.length &&
          (t.setHtml(a, i.errorCloseButton + e),
          i._handler(a.find(".kv-error-close"), "click", function () {
            setTimeout(function () {
              i.showPreview && !i.getFrames().length && i.clear(),
                a.fadeOut("slow");
            }, i.processDelay);
          }));
      },
      _setValidationError: function (e) {
        var i = this;
        (e = (e ? e + " " : "") + "has-error"),
          i.$container.removeClass(e).addClass("has-error"),
          t.addCss(i.$caption, "is-invalid");
      },
      _resetErrors: function (e) {
        var t = this,
          i = t.$errorContainer,
          a = t.resumableUploadOptions.retainErrorHistory;
        t.isPersistentError ||
          (t.enableResumableUpload && a) ||
          ((t.isError = !1),
          t.$container.removeClass("has-error"),
          t.$caption.removeClass("is-invalid is-valid file-processing"),
          i.html(""),
          e ? i.fadeOut("slow") : i.hide());
      },
      _showFolderError: function (e) {
        var t,
          i = this,
          a = i.$errorContainer;
        e &&
          (i.isAjaxUpload || i._clearFileInput(),
          (t = i.msgFoldersNotAllowed.replace("{n}", e)),
          i._addError(t),
          i._setValidationError(),
          a.fadeIn(i.fadeDelay),
          i._raise("filefoldererror", [e, t]));
      },
      _showFileError: function (e, t, i) {
        var a = this,
          r = a.$errorContainer,
          n = i || "fileuploaderror",
          o = (t && t.fileId) || "",
          s =
            t && t.id
              ? '<li data-thumb-id="' +
                t.id +
                '" data-file-id="' +
                o +
                '">' +
                e +
                "</li>"
              : "<li>" + e + "</li>";
        return (
          0 === r.find("ul").length
            ? a._addError("<ul>" + s + "</ul>")
            : r.find("ul").append(s),
          r.fadeIn(a.fadeDelay),
          a._raise(n, [t, e]),
          a._setValidationError("file-input-new"),
          !0
        );
      },
      _showError: function (e, t, i) {
        var a = this,
          r = a.$errorContainer,
          n = i || "fileerror";
        return (
          (t = t || {}),
          (t.reader = a.reader),
          a._addError(e),
          r.fadeIn(a.fadeDelay),
          a._raise(n, [t, e]),
          a.isAjaxUpload || a._clearFileInput(),
          a._setValidationError("file-input-new"),
          a.$btnUpload.attr("disabled", !0),
          !0
        );
      },
      _noFilesError: function (e) {
        var t = this,
          i = t.minFileCount > 1 ? t.filePlural : t.fileSingle,
          a = t.msgFilesTooLess
            .replace("{n}", t.minFileCount)
            .replace("{files}", i),
          r = t.$errorContainer;
        (a = "<li>" + a + "</li>"),
          0 === r.find("ul").length
            ? t._addError("<ul>" + a + "</ul>")
            : r.find("ul").append(a),
          (t.isError = !0),
          t._updateFileDetails(0),
          r.fadeIn(t.fadeDelay),
          t._raise("fileerror", [e, a]),
          t._clearFileInput(),
          t._setValidationError();
      },
      _parseError: function (t, i, a, r) {
        var n,
          o,
          s,
          l = this,
          d = e.trim(a + "");
        return (
          (o =
            i.responseJSON && i.responseJSON.error
              ? i.responseJSON.error.toString()
              : ""),
          (s = o ? o : i.responseText),
          l.cancelling && l.msgUploadAborted && (d = l.msgUploadAborted),
          l.showAjaxErrorDetails &&
            s &&
            (o
              ? (d = e.trim(o + ""))
              : ((s = e.trim(s.replace(/\n\s*\n/g, "\n"))),
                (n = s.length ? "<pre>" + s + "</pre>" : ""),
                (d += d ? n : s))),
          d || (d = l.msgAjaxError.replace("{operation}", t)),
          (l.cancelling = !1),
          r ? "<b>" + r + ": </b>" + d : d
        );
      },
      _parseFileType: function (e, i) {
        var a,
          r,
          n,
          o,
          s = this,
          l = s.allowedPreviewTypes || [];
        if ("application/text-plain" === e) return "text";
        for (o = 0; o < l.length; o++)
          if (
            ((n = l[o]),
            (a = s.fileTypeSettings[n]),
            (r = a(e, i) ? n : ""),
            !t.isEmpty(r))
          )
            return r;
        return "other";
      },
      _getPreviewIcon: function (t) {
        var i,
          a = this,
          r = null;
        return (
          t &&
            t.indexOf(".") > -1 &&
            ((i = t.split(".").pop()),
            a.previewFileIconSettings &&
              (r =
                a.previewFileIconSettings[i] ||
                a.previewFileIconSettings[i.toLowerCase()] ||
                null),
            a.previewFileExtSettings &&
              e.each(a.previewFileExtSettings, function (e, t) {
                return a.previewFileIconSettings[e] && t(i)
                  ? void (r = a.previewFileIconSettings[e])
                  : void 0;
              })),
          r || a.previewFileIcon
        );
      },
      _parseFilePreviewIcon: function (e, t) {
        var i = this,
          a = i._getPreviewIcon(t),
          r = e;
        return (
          r.indexOf("{previewFileIcon}") > -1 &&
            (r = r.setTokens({
              previewFileIconClass: i.previewFileIconClass,
              previewFileIcon: a,
            })),
          r
        );
      },
      _raise: function (t, i) {
        var a = this,
          r = e.Event(t);
        if (
          (void 0 !== i ? a.$element.trigger(r, i) : a.$element.trigger(r),
          r.isDefaultPrevented() || r.result === !1)
        )
          return !1;
        switch (t) {
          case "filebatchuploadcomplete":
          case "filebatchuploadsuccess":
          case "fileuploaded":
          case "fileclear":
          case "filecleared":
          case "filereset":
          case "fileerror":
          case "filefoldererror":
          case "fileuploaderror":
          case "filebatchuploaderror":
          case "filedeleteerror":
          case "filecustomerror":
          case "filesuccessremove":
            break;
          default:
            a.ajaxAborted || (a.ajaxAborted = r.result);
        }
        return !0;
      },
      _listenFullScreen: function (e) {
        var t,
          i,
          a = this,
          r = a.$modal;
        r &&
          r.length &&
          ((t = r && r.find(".btn-kv-fullscreen")),
          (i = r && r.find(".btn-kv-borderless")),
          t.length &&
            i.length &&
            (t.removeClass("active").attr("aria-pressed", "false"),
            i.removeClass("active").attr("aria-pressed", "false"),
            e
              ? t.addClass("active").attr("aria-pressed", "true")
              : i.addClass("active").attr("aria-pressed", "true"),
            r.hasClass("file-zoom-fullscreen")
              ? a._maximizeZoomDialog()
              : e
              ? a._maximizeZoomDialog()
              : i.removeClass("active").attr("aria-pressed", "false")));
      },
      _listen: function () {
        var i,
          a = this,
          r = a.$element,
          n = a.$form,
          o = a.$container;
        a._handler(r, "click", function (e) {
          a._initFileSelected(),
            r.hasClass("file-no-browse") &&
              (r.data("zoneClicked")
                ? r.data("zoneClicked", !1)
                : e.preventDefault());
        }),
          a._handler(r, "change", e.proxy(a._change, a)),
          a._handler(a.$caption, "paste", e.proxy(a.paste, a)),
          a.showBrowse &&
            (a._handler(a.$btnFile, "click", e.proxy(a._browse, a)),
            a._handler(a.$btnFile, "keypress", function (e) {
              var t = e.keyCode || e.which;
              13 === t && (r.trigger("click"), a._browse(e));
            })),
          a._handler(
            o.find(".fileinput-remove:not([disabled])"),
            "click",
            e.proxy(a.clear, a)
          ),
          a._handler(
            o.find(".fileinput-cancel"),
            "click",
            e.proxy(a.cancel, a)
          ),
          a._handler(o.find(".fileinput-pause"), "click", e.proxy(a.pause, a)),
          a._initDragDrop(),
          a._handler(n, "reset", e.proxy(a.clear, a)),
          a.isAjaxUpload || a._handler(n, "submit", e.proxy(a._submitForm, a)),
          a._handler(
            a.$container.find(".fileinput-upload"),
            "click",
            e.proxy(a._uploadClick, a)
          ),
          a._handler(e(window), "resize", function () {
            a._listenFullScreen(
              screen.width === window.innerWidth &&
                screen.height === window.innerHeight
            );
          }),
          (i =
            "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange"),
          a._handler(e(document), i, function () {
            a._listenFullScreen(t.checkFullScreen());
          }),
          a.$caption.on("focus", function () {
            a.$captionContainer.focus();
          }),
          a._autoFitContent(),
          a._initClickable(),
          a._refreshPreview();
      },
      _autoFitContent: function () {
        var t,
          i =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          a = this,
          r =
            400 > i
              ? a.previewSettingsSmall || a.defaults.previewSettingsSmall
              : a.previewSettings || a.defaults.previewSettings;
        e.each(r, function (e, i) {
          (t = ".file-preview-frame .file-preview-" + e),
            a.$preview
              .find(t + ".kv-preview-data," + t + " .kv-preview-data")
              .css(i);
        });
      },
      _scanDroppedItems: function (e, i, a) {
        a = a || "";
        var r,
          n,
          o,
          s = this,
          l = function (e) {
            s._log(t.logMessages.badDroppedFiles), s._log(e);
          };
        e.isFile
          ? e.file(function (e) {
              a && (e.newPath = a + e.name), i.push(e);
            }, l)
          : e.isDirectory &&
            ((n = e.createReader()),
            (o = function () {
              n.readEntries(function (t) {
                if (t && t.length > 0) {
                  for (r = 0; r < t.length; r++)
                    s._scanDroppedItems(t[r], i, a + e.name + "/");
                  o();
                }
                return null;
              }, l);
            })());
      },
      _initDragDrop: function () {
        var t = this,
          i = t.$dropZone;
        t.dropZoneEnabled &&
          t.showPreview &&
          (t._handler(i, "dragenter dragover", e.proxy(t._zoneDragEnter, t)),
          t._handler(i, "dragleave", e.proxy(t._zoneDragLeave, t)),
          t._handler(i, "drop", e.proxy(t._zoneDrop, t)),
          t._handler(
            e(document),
            "dragenter dragover drop",
            t._zoneDragDropInit
          ));
      },
      _zoneDragDropInit: function (e) {
        e.stopPropagation(), e.preventDefault();
      },
      _zoneDragEnter: function (i) {
        var a = this,
          r = i.originalEvent.dataTransfer,
          n = e.inArray("Files", r.types) > -1;
        return (
          a._zoneDragDropInit(i),
          a.isDisabled || !n
            ? ((r.effectAllowed = "none"), void (r.dropEffect = "none"))
            : ((r.dropEffect = "copy"),
              void (
                a._raise("fileDragEnter", {
                  sourceEvent: i,
                  files: r.types.Files,
                }) && t.addCss(a.$dropZone, "file-highlighted")
              ))
        );
      },
      _zoneDragLeave: function (e) {
        var t = this;
        t._zoneDragDropInit(e),
          t.isDisabled ||
            (t._raise("fileDragLeave", { sourceEvent: e }) &&
              t.$dropZone.removeClass("file-highlighted"));
      },
      _dropFiles: function (e, t) {
        var i = this,
          a = i.$element;
        i.isAjaxUpload
          ? i._change(e, t)
          : ((i.changeTriggered = !0),
            (a.get(0).files = t),
            setTimeout(function () {
              (i.changeTriggered = !1), a.trigger("change" + i.namespace);
            }, i.processDelay)),
          i.$dropZone.removeClass("file-highlighted");
      },
      _zoneDrop: function (e) {
        var i,
          a = this,
          r = (a.$element, e.originalEvent.dataTransfer),
          n = r.files,
          o = r.items,
          s = t.getDragDropFolders(o);
        if (
          (e.preventDefault(),
          !a.isDisabled &&
            !t.isEmpty(n) &&
            a._raise("fileDragDrop", { sourceEvent: e, files: n }))
        )
          if (s > 0) {
            if (!a.isAjaxUpload) return void a._showFolderError(s);
            for (n = [], i = 0; i < o.length; i++) {
              var l = o[i].webkitGetAsEntry();
              l && a._scanDroppedItems(l, n);
            }
            setTimeout(function () {
              a._dropFiles(e, n);
            }, 500);
          } else a._dropFiles(e, n);
      },
      _uploadClick: function (e) {
        var i,
          a = this,
          r = a.$container.find(".fileinput-upload"),
          n = !r.hasClass("disabled") && t.isEmpty(r.attr("disabled"));
        if (!e || !e.isDefaultPrevented()) {
          if (!a.isAjaxUpload)
            return void (
              n &&
              "submit" !== r.attr("type") &&
              ((i = r.closest("form")),
              i.length && i.trigger("submit"),
              e.preventDefault())
            );
          e.preventDefault(), n && a.upload();
        }
      },
      _submitForm: function () {
        var e = this;
        return e._isFileSelectionValid() && !e._abort({});
      },
      _clearPreview: function () {
        var t = this,
          i = t.showUploadedThumbs
            ? t.getFrames(":not(.file-preview-success)")
            : t.getFrames();
        i.each(function () {
          var t = e(this);
          t.remove();
        }),
          (t.getFrames().length && t.showPreview) || t._resetUpload(),
          t._validateDefaultPreview();
      },
      _initSortable: function () {
        var i,
          a,
          r,
          n,
          o = this,
          s = o.$preview,
          l = "." + t.SORT_CSS,
          d = e("body"),
          c = e("html"),
          u = o.reversePreviewOrder,
          p = window.Sortable;
        p &&
          0 !== s.find(l).length &&
          ((a = d.length ? d : c.length ? c : o.$container),
          (r = function () {
            a.addClass("file-grabbing");
          }),
          (n = function () {
            a.removeClass("file-grabbing");
          }),
          (i = {
            handle: ".drag-handle-init",
            dataIdAttr: "data-fileid",
            animation: 600,
            draggable: l,
            scroll: !1,
            forceFallback: !0,
            onChoose: r,
            onStart: r,
            onUnchoose: n,
            onEnd: n,
            onSort: function (i) {
              var a,
                r = i.oldIndex,
                n = i.newIndex,
                s = 0,
                l = o.initialPreviewConfig.length,
                d = l > 0 && n >= l,
                c = e(i.item);
              d && (n = l - 1),
                (o.initialPreview = t.moveArray(o.initialPreview, r, n, u)),
                (o.initialPreviewConfig = t.moveArray(
                  o.initialPreviewConfig,
                  r,
                  n,
                  u
                )),
                o.previewCache.init(),
                o.getFrames(".file-preview-initial").each(function () {
                  e(this).attr("data-fileindex", t.INIT_FLAG + s), s++;
                }),
                d &&
                  ((a = o.getFrames(":not(.file-preview-initial):first")),
                  a.length &&
                    c.slideUp(function () {
                      c.insertBefore(a).slideDown();
                    })),
                o._raise("filesorted", {
                  previewId: c.attr("id"),
                  oldIndex: r,
                  newIndex: n,
                  stack: o.initialPreviewConfig,
                });
            },
          }),
          e.extend(!0, i, o.fileActionSettings.dragSettings),
          o.sortable && o.sortable.destroy(),
          (o.sortable = p.create(s[0], i)));
      },
      _setPreviewContent: function (e) {
        var i = this;
        t.setHtml(i.$preview, e), i._autoFitContent();
      },
      _initPreviewImageOrientations: function () {
        var t = this,
          i = 0,
          a = t.canOrientImage;
        (t.autoOrientImageInitial || a) &&
          t.getFrames(".file-preview-initial").each(function () {
            var r,
              n,
              o,
              s = e(this),
              l = t.initialPreviewConfig[i];
            l &&
              l.exif &&
              l.exif.Orientation &&
              ((o = s.attr("id")),
              (r = s.find(">.kv-file-content img")),
              (n = t._getZoom(o, " >.kv-file-content img")),
              a
                ? r.css(
                    "image-orientation",
                    t.autoOrientImageInitial ? "from-image" : "none"
                  )
                : t.setImageOrientation(r, n, l.exif.Orientation, s)),
              i++;
          });
      },
      _initPreview: function (e) {
        var i,
          a = this,
          r = a.initialCaption || "";
        return a.previewCache.count(!0)
          ? ((i = a.previewCache.out()),
            (r = e && a.initialCaption ? a.initialCaption : i.caption),
            a._setPreviewContent(i.content),
            a._setInitThumbAttr(),
            a._setCaption(r),
            a._initSortable(),
            t.isEmpty(i.content) || a.$container.removeClass("file-input-new"),
            void a._initPreviewImageOrientations())
          : (a._clearPreview(), void (e ? a._setCaption(r) : a._initCaption()));
      },
      _getZoomButton: function (e) {
        var i = this,
          a = i.previewZoomButtonIcons[e],
          r = i.previewZoomButtonClasses[e],
          n = ' title="' + (i.previewZoomButtonTitles[e] || "") + '" ',
          o = t.isBs(5) ? "bs-" : "",
          s =
            n +
            ("close" === e
              ? " data-" + o + 'dismiss="modal" aria-hidden="true"'
              : "");
        return (
          ("fullscreen" !== e && "borderless" !== e && "toggleheader" !== e) ||
            (s +=
              ' data-toggle="button" aria-pressed="false" autocomplete="off"'),
          '<button type="button" class="' +
            r +
            " btn-kv-" +
            e +
            '"' +
            s +
            ">" +
            a +
            "</button>"
        );
      },
      _getModalContent: function () {
        var e = this;
        return e
          ._getLayoutTemplate("modal")
          .setTokens({
            rtl: e.rtl ? " kv-rtl" : "",
            zoomFrameClass: e.frameClass,
            heading: e.msgZoomModalHeading,
            prev: e._getZoomButton("prev"),
            next: e._getZoomButton("next"),
            toggleheader: e._getZoomButton("toggleheader"),
            fullscreen: e._getZoomButton("fullscreen"),
            borderless: e._getZoomButton("borderless"),
            close: e._getZoomButton("close"),
          });
      },
      _listenModalEvent: function (e) {
        var i = this,
          a = i.$modal,
          r = function (e) {
            return { sourceEvent: e, previewId: a.data("previewId"), modal: a };
          };
        a.on(e + ".bs.modal", function (n) {
          if ("bs.modal" === n.namespace) {
            var o = a.find(".btn-fullscreen"),
              s = a.find(".btn-borderless");
            a.data("fileinputPluginId") === i.$element.attr("id") &&
              i._raise("filezoom" + e, r(n)),
              "shown" === e &&
                (s.removeClass("active").attr("aria-pressed", "false"),
                o.removeClass("active").attr("aria-pressed", "false"),
                a.hasClass("file-zoom-fullscreen") &&
                  (i._maximizeZoomDialog(),
                  t.checkFullScreen()
                    ? o.addClass("active").attr("aria-pressed", "true")
                    : s.addClass("active").attr("aria-pressed", "true")));
          }
        });
      },
      _initZoom: function () {
        var i,
          a = this,
          r = a._getLayoutTemplate("modalMain"),
          n = "#" + t.MODAL_ID;
        (r = a._setTabIndex("modal", r)),
          a.showPreview &&
            ((a.$modal = e(n)),
            (a.$modal && a.$modal.length) ||
              ((i = t
                .createElement(t.cspBuffer.stash(r))
                .insertAfter(a.$container)),
              (a.$modal = e(n).insertBefore(i)),
              t.cspBuffer.apply(a.$modal),
              i.remove()),
            t.initModal(a.$modal),
            a.$modal.html(t.cspBuffer.stash(a._getModalContent())),
            t.cspBuffer.apply(a.$modal),
            e.each(t.MODAL_EVENTS, function (e, t) {
              a._listenModalEvent(t);
            }));
      },
      _initZoomButtons: function () {
        var t,
          i,
          a = this,
          r = a.$modal.data("previewId") || "",
          n = a.getFrames().toArray(),
          o = n.length,
          s = a.$modal.find(".btn-kv-prev"),
          l = a.$modal.find(".btn-kv-next");
        return n.length < 2
          ? (s.hide(), void l.hide())
          : (s.show(),
            l.show(),
            void (
              o &&
              ((t = e(n[0])),
              (i = e(n[o - 1])),
              s.removeAttr("disabled"),
              l.removeAttr("disabled"),
              t.length && t.attr("id") === r && s.attr("disabled", !0),
              i.length && i.attr("id") === r && l.attr("disabled", !0))
            ));
      },
      _maximizeZoomDialog: function () {
        var t = this,
          i = t.$modal,
          a = i.find(".modal-header:visible"),
          r = i.find(".modal-footer:visible"),
          n = i.find(".modal-body"),
          o = e(window).height(),
          s = 0;
        i.addClass("file-zoom-fullscreen"),
          a && a.length && (o -= a.outerHeight(!0)),
          r && r.length && (o -= r.outerHeight(!0)),
          n && n.length && ((s = n.outerHeight(!0) - n.height()), (o -= s)),
          i.find(".kv-zoom-body").height(o);
      },
      _resizeZoomDialog: function (e) {
        var i = this,
          a = i.$modal,
          r = a.find(".btn-kv-fullscreen"),
          n = a.find(".btn-kv-borderless");
        if (a.hasClass("file-zoom-fullscreen"))
          t.toggleFullScreen(!1),
            e
              ? r.hasClass("active") ||
                (a.removeClass("file-zoom-fullscreen"),
                i._resizeZoomDialog(!0),
                n.hasClass("active") &&
                  n.removeClass("active").attr("aria-pressed", "false"))
              : r.hasClass("active")
              ? r.removeClass("active").attr("aria-pressed", "false")
              : (a.removeClass("file-zoom-fullscreen"),
                i.$modal
                  .find(".kv-zoom-body")
                  .css("height", i.zoomModalHeight));
        else {
          if (!e) return void i._maximizeZoomDialog();
          t.toggleFullScreen(!0);
        }
        a.focus();
      },
      _setZoomContent: function (i, a) {
        var r,
          n,
          o,
          s,
          l,
          d,
          c,
          u,
          p,
          f,
          g = this,
          m = i.attr("id"),
          v = g._getZoom(m),
          h = g.$modal,
          w = h.find(".btn-kv-fullscreen"),
          b = h.find(".btn-kv-borderless"),
          _ = h.find(".btn-kv-toggleheader");
        (n = v.attr("data-template") || "generic"),
          (r = v.find(".kv-file-content")),
          (o = r.length ? r.html() : ""),
          (p = i.data("caption") || ""),
          (f = i.data("size") || ""),
          (s = p + " " + f),
          h
            .find(".kv-zoom-title")
            .attr("title", e("<div/>").html(s).text())
            .html(s),
          (l = h.find(".kv-zoom-body")),
          h.removeClass("kv-single-content"),
          a
            ? ((u = l.addClass("file-thumb-loading").clone().insertAfter(l)),
              t.setHtml(l, o).hide(),
              u.fadeOut("fast", function () {
                l.fadeIn("fast", function () {
                  l.removeClass("file-thumb-loading");
                }),
                  u.remove();
              }))
            : t.setHtml(l, o),
          (c = g.previewZoomSettings[n]),
          c &&
            ((d = l.find(".kv-preview-data")),
            t.addCss(d, "file-zoom-detail"),
            e.each(c, function (e, t) {
              d.css(e, t),
                ((d.attr("width") && "width" === e) ||
                  (d.attr("height") && "height" === e)) &&
                  d.removeAttr(e);
            })),
          h.data("previewId", m),
          g._handler(h.find(".btn-kv-prev"), "click", function () {
            g._zoomSlideShow("prev", m);
          }),
          g._handler(h.find(".btn-kv-next"), "click", function () {
            g._zoomSlideShow("next", m);
          }),
          g._handler(w, "click", function () {
            g._resizeZoomDialog(!0);
          }),
          g._handler(b, "click", function () {
            g._resizeZoomDialog(!1);
          }),
          g._handler(_, "click", function () {
            var e,
              t = h.find(".modal-header"),
              i = h.find(".modal-body .floating-buttons"),
              a = t.find(".kv-zoom-actions"),
              r = function (e) {
                var i = g.$modal.find(".kv-zoom-body"),
                  a = g.zoomModalHeight;
                h.hasClass("file-zoom-fullscreen") &&
                  ((a = i.outerHeight(!0)), e || (a -= t.outerHeight(!0))),
                  i.css("height", e ? a + e : a);
              };
            t.is(":visible")
              ? ((e = t.outerHeight(!0)),
                t.slideUp("slow", function () {
                  a.find(".btn").appendTo(i), r(e);
                }))
              : (i.find(".btn").appendTo(a),
                t.slideDown("slow", function () {
                  r();
                })),
              h.focus();
          }),
          g._handler(h, "keydown", function (t) {
            var i = t.which || t.keyCode,
              a = e(this).find(".btn-kv-prev"),
              r = e(this).find(".btn-kv-next"),
              n = e(this).data("previewId"),
              o = g.rtl ? 39 : 37,
              s = g.rtl ? 37 : 39;
            i === o &&
              a.length &&
              !a.attr("disabled") &&
              g._zoomSlideShow("prev", n),
              i === s &&
                r.length &&
                !r.attr("disabled") &&
                g._zoomSlideShow("next", n);
          });
      },
      _showModal: function (e) {
        var i = this,
          a = i.$modal;
        e &&
          e.length &&
          (t.initModal(a),
          t.setHtml(a, i._getModalContent()),
          i._setZoomContent(e),
          a.data({ backdrop: !1 }),
          a.modal("show"),
          i._initZoomButtons());
      },
      _zoomPreview: function (e) {
        var i,
          a = this;
        if (!e.length) throw "Cannot zoom to detailed preview!";
        (i = e.closest(t.FRAMES)), a._showModal(i);
      },
      _zoomSlideShow: function (t, i) {
        var a,
          r,
          n,
          o,
          s = this,
          l = s.$modal.find(".kv-zoom-actions .btn-kv-" + t),
          d = s.getFrames().toArray(),
          c = [],
          u = d.length;
        if (!l.attr("disabled")) {
          for (r = 0; u > r; r++)
            (n = e(d[r])),
              n &&
                n.length &&
                n.find(".kv-file-zoom:visible").length &&
                c.push(d[r]);
          for (u = c.length, r = 0; u > r; r++)
            if (e(c[r]).attr("id") === i) {
              o = "prev" === t ? r - 1 : r + 1;
              break;
            }
          0 > o ||
            o >= u ||
            !c[o] ||
            ((a = e(c[o])),
            a.length && s._setZoomContent(a, !0),
            s._initZoomButtons(),
            s._raise("filezoom" + t, { previewId: i, modal: s.$modal }));
        }
      },
      _initZoomButton: function () {
        var t = this;
        t.$preview.find(".kv-file-zoom").each(function () {
          var i = e(this);
          t._handler(i, "click", function () {
            t._zoomPreview(i);
          });
        });
      },
      _inputFileCount: function () {
        return this.$element[0].files.length;
      },
      _refreshPreview: function () {
        var t,
          i = this;
        (i._inputFileCount() || i.isAjaxUpload) &&
          i.showPreview &&
          i.isPreviewable &&
          (i.isAjaxUpload && i.fileManager.count() > 0
            ? ((t = e.extend(!0, {}, i.getFileList())),
              i.fileManager.clear(),
              i._clearFileInput())
            : (t = i.$element[0].files),
          t && t.length && (i.readFiles(t), i._setFileDropZoneTitle()));
      },
      _clearObjects: function (t) {
        t.find("video audio").each(function () {
          this.pause(), e(this).remove();
        }),
          t.find("img object div").each(function () {
            e(this).remove();
          });
      },
      _clearFileInput: function () {
        var t,
          i,
          a,
          r = this,
          n = r.$element;
        r._inputFileCount() &&
          ((t = n.closest("form")),
          (i = e(document.createElement("form"))),
          (a = e(document.createElement("div"))),
          n.before(a),
          t.length ? t.after(i) : a.after(i),
          i.append(n).trigger("reset"),
          a.before(n).remove(),
          i.remove());
      },
      _resetUpload: function () {
        var e = this;
        (e.uploadStartTime = t.now()),
          (e.uploadCache = []),
          e.$btnUpload.removeAttr("disabled"),
          e._setProgress(0),
          e._hideProgress(),
          e._resetErrors(!1),
          e._initAjax(),
          e.fileManager.clearImages(),
          e._resetCanvas(),
          e.overwriteInitial &&
            ((e.initialPreview = []),
            (e.initialPreviewConfig = []),
            (e.initialPreviewThumbTags = []),
            (e.previewCache.data = {
              content: [],
              config: [],
              tags: [],
            }));
      },
      _resetCanvas: function () {
        var e = this;
        e.imageCanvas &&
          e.imageCanvasContext &&
          e.imageCanvasContext.clearRect(
            0,
            0,
            e.imageCanvas.width,
            e.imageCanvas.height
          );
      },
      _hasInitialPreview: function () {
        var e = this;
        return !e.overwriteInitial && e.previewCache.count(!0);
      },
      _resetPreview: function () {
        var i,
          a,
          r,
          n = this,
          o = n.showUploadedThumbs,
          s = !n.removeFromPreviewOnError,
          l = (o || s) && n.isDuplicateError;
        n.previewCache.count(!0)
          ? ((i = n.previewCache.out()),
            l &&
              ((r = t.createElement("").insertAfter(n.$container)),
              n.getFrames().each(function () {
                var t = e(this);
                ((o && t.hasClass("file-preview-success")) ||
                  (s && t.hasClass("file-preview-error"))) &&
                  r.append(t);
              })),
            n._setPreviewContent(i.content),
            n._setInitThumbAttr(),
            (a = n.initialCaption ? n.initialCaption : i.caption),
            n._setCaption(a),
            l && (r.contents().appendTo(n.$preview), r.remove()))
          : (n._clearPreview(), n._initCaption()),
          n.showPreview && (n._initZoom(), n._initSortable()),
          (n.isDuplicateError = !1);
      },
      _clearDefaultPreview: function () {
        var e = this;
        e.$preview.find(".file-default-preview").remove();
      },
      _validateDefaultPreview: function () {
        var e = this;
        e.showPreview &&
          !t.isEmpty(e.defaultPreviewContent) &&
          (e._setPreviewContent(
            '<div class="file-default-preview">' +
              e.defaultPreviewContent +
              "</div>"
          ),
          e.$container.removeClass("file-input-new"),
          e._initClickable());
      },
      _resetPreviewThumbs: function (e) {
        var t,
          i = this;
        return e
          ? (i._clearPreview(), void i.clearFileStack())
          : void (i._hasInitialPreview()
              ? ((t = i.previewCache.out()),
                i._setPreviewContent(t.content),
                i._setInitThumbAttr(),
                i._setCaption(t.caption),
                i._initPreviewActions())
              : i._clearPreview());
      },
      _getLayoutTemplate: function (e) {
        var i = this,
          a = i.layoutTemplates[e];
        return t.isEmpty(i.customLayoutTags)
          ? a
          : t.replaceTags(a, i.customLayoutTags);
      },
      _getPreviewTemplate: function (e) {
        var i = this,
          a = i.previewTemplates,
          r = a[e] || a.other;
        return t.isEmpty(i.customPreviewTags)
          ? r
          : t.replaceTags(r, i.customPreviewTags);
      },
      _getOutData: function (e, t, i, a) {
        var r = this;
        return (
          (t = t || {}),
          (i = i || {}),
          (a = a || r.fileManager.list()),
          {
            formdata: e,
            files: a,
            filenames: r.filenames,
            filescount: r.getFilesCount(),
            extra: r._getExtraData(),
            response: i,
            reader: r.reader,
            jqXHR: t,
          }
        );
      },
      _getMsgSelected: function (e, t) {
        var i = this,
          a = 1 === e ? i.fileSingle : i.filePlural;
        return e > 0
          ? i.msgSelected.replace("{n}", e).replace("{files}", a)
          : t
          ? i.msgProcessing
          : i.msgNoFilesSelected;
      },
      _getFrame: function (e, i) {
        var a = this,
          r = t.getFrameElement(a.$preview, e);
        return (
          !a.showPreview ||
            i ||
            r.length ||
            a._log(t.logMessages.invalidThumb, { id: e }),
          r
        );
      },
      _getZoom: function (e, i) {
        var a = this,
          r = t.getZoomElement(a.$preview, e, i);
        return (
          a.showPreview &&
            !r.length &&
            a._log(t.logMessages.invalidThumb, { id: e }),
          r
        );
      },
      _getThumbs: function (e) {
        return (e = e || ""), this.getFrames(":not(.file-preview-initial)" + e);
      },
      _getThumbId: function (e) {
        var t = this;
        return t.previewInitId + "-" + e;
      },
      _getExtraData: function (e, t) {
        var i = this,
          a = i.uploadExtraData;
        return (
          "function" == typeof i.uploadExtraData &&
            (a = i.uploadExtraData(e, t)),
          a
        );
      },
      _initXhr: function (e, i) {
        var a = this,
          r = a.fileManager,
          n = function (e) {
            var n = 0,
              o = e.total,
              s = e.loaded || e.position,
              l = r.getUploadStats(i, s, o);
            e.lengthComputable &&
              !a.enableResumableUpload &&
              (n = t.round((s / o) * 100)),
              i
                ? a._setFileUploadStats(i, n, l)
                : a._setProgress(n, null, null, a._getStats(l)),
              a._raise("fileajaxprogress", [l]);
          };
        return (
          e.upload &&
            (a.progressDelay && (n = t.debounce(n, a.progressDelay)),
            e.upload.addEventListener("progress", n, !1)),
          e
        );
      },
      _initAjaxSettings: function () {
        var t = this;
        (t._ajaxSettings = e.extend(!0, {}, t.ajaxSettings)),
          (t._ajaxDeleteSettings = e.extend(!0, {}, t.ajaxDeleteSettings));
      },
      _mergeAjaxCallback: function (e, t, i) {
        var a,
          r = this,
          n = r._ajaxSettings,
          o = r.mergeAjaxCallbacks;
        "delete" === i &&
          ((n = r._ajaxDeleteSettings), (o = r.mergeAjaxDeleteCallbacks)),
          (a = n[e]),
          o && "function" == typeof a
            ? "before" === o
              ? (n[e] = function () {
                  a.apply(this, arguments), t.apply(this, arguments);
                })
              : (n[e] = function () {
                  t.apply(this, arguments), a.apply(this, arguments);
                })
            : (n[e] = t);
      },
      _ajaxSubmit: function (t, i, a, r, n, o, s, l) {
        var d,
          c,
          u,
          p,
          f = this;
        f._raise("filepreajax", [n, o, s]) &&
          (n.append("initialPreview", JSON.stringify(f.initialPreview)),
          n.append(
            "initialPreviewConfig",
            JSON.stringify(f.initialPreviewConfig)
          ),
          n.append(
            "initialPreviewThumbTags",
            JSON.stringify(f.initialPreviewThumbTags)
          ),
          f._initAjaxSettings(),
          f._mergeAjaxCallback("beforeSend", t),
          f._mergeAjaxCallback("success", i),
          f._mergeAjaxCallback("complete", a),
          f._mergeAjaxCallback("error", r),
          (l = l || f.uploadUrlThumb || f.uploadUrl),
          "function" == typeof l && (l = l()),
          (u = f._getExtraData(o, s) || {}),
          "object" == typeof u &&
            e.each(u, function (e, t) {
              n.append(e, t);
            }),
          (c = {
            xhr: function () {
              var t = e.ajaxSettings.xhr();
              return f._initXhr(t, o);
            },
            url: f._encodeURI(l),
            type: "POST",
            dataType: "json",
            data: n,
            cache: !1,
            processData: !1,
            contentType: !1,
          }),
          (d = e.extend(!0, {}, c, f._ajaxSettings)),
          (p = f.taskManager.addTask(o + "-" + s, function () {
            var t,
              i,
              a = this.self;
            (t = a.ajaxQueue.shift()), (i = e.ajax(t)), a.ajaxRequests.push(i);
          })),
          f.ajaxQueue.push(d),
          p.runWithContext({ self: f }));
      },
      _mergeArray: function (e, i) {
        var a = this,
          r = t.cleanArray(a[e]),
          n = t.cleanArray(i);
        a[e] = r.concat(n);
      },
      _initUploadSuccess: function (i, a, r) {
        var n,
          o,
          s,
          l,
          d,
          c,
          u,
          p,
          f,
          g,
          m = this;
        return !m.showPreview || "object" != typeof i || e.isEmptyObject(i)
          ? void m._resetCaption()
          : (void 0 !== i.initialPreview &&
              i.initialPreview.length > 0 &&
              ((m.hasInitData = !0),
              (c = i.initialPreview || []),
              (u = i.initialPreviewConfig || []),
              (p = i.initialPreviewThumbTags || []),
              (n = void 0 === i.append || i.append),
              c.length > 0 &&
                !t.isArray(c) &&
                (c = c.split(m.initialPreviewDelimiter)),
              c.length &&
                (m._mergeArray("initialPreview", c),
                m._mergeArray("initialPreviewConfig", u),
                m._mergeArray("initialPreviewThumbTags", p)),
              void 0 !== a
                ? r
                  ? ((f = a.attr("id")),
                    (g = m._getUploadCacheIndex(f)),
                    null !== g &&
                      (m.uploadCache[g] = {
                        id: f,
                        content: c[0],
                        config: u[0] || [],
                        tags: p[0] || [],
                        append: n,
                      }))
                  : ((s = m.previewCache.add(c[0], u[0], p[0], n)),
                    (o = m.previewCache.get(s, !1)),
                    (l = t.createElement(o).hide().appendTo(a)),
                    (d = l.find(".kv-zoom-cache")),
                    d && d.length && d.appendTo(a),
                    a.fadeOut("slow", function () {
                      var e = l.find(".file-preview-frame");
                      e &&
                        e.length &&
                        e
                          .insertBefore(a)
                          .fadeIn("slow")
                          .css("display:inline-block"),
                        m._initPreviewActions(),
                        m._clearFileInput(),
                        a.remove(),
                        l.remove(),
                        m._initSortable();
                    }))
                : (m.previewCache.set(c, u, p, n),
                  m._initPreview(),
                  m._initPreviewActions())),
            void m._resetCaption());
      },
      _getUploadCacheIndex: function (e) {
        var t,
          i,
          a = this,
          r = a.uploadCache.length;
        for (t = 0; r > t; t++)
          if (((i = a.uploadCache[t]), i.id === e)) return t;
        return null;
      },
      _initSuccessThumbs: function () {
        var i = this;
        i.showPreview &&
          setTimeout(function () {
            i._getThumbs(t.FRAMES + ".file-preview-success").each(function () {
              var a = e(this),
                r = a.find(".kv-file-remove");
              r.removeAttr("disabled"),
                i._handler(r, "click", function () {
                  var e = a.attr("id"),
                    r = i._raise("filesuccessremove", [
                      e,
                      a.attr("data-fileindex"),
                    ]);
                  t.cleanMemory(a),
                    r !== !1 &&
                      (i.$caption.attr("title", ""),
                      a.fadeOut("slow", function () {
                        i.fileManager;
                        a.remove(), i.getFrames().length || i.reset();
                      }));
                });
            });
          }, i.processDelay);
      },
      _updateInitialPreview: function () {
        var t = this,
          i = t.uploadCache;
        t.showPreview &&
          (e.each(i, function (e, i) {
            t.previewCache.add(i.content, i.config, i.tags, i.append);
          }),
          t.hasInitData && (t._initPreview(), t._initPreviewActions()));
      },
      _getThumbFileId: function (e) {
        var t = this;
        return t.showPreview && void 0 !== e ? e.attr("data-fileid") : null;
      },
      _getThumbFile: function (e) {
        var t = this,
          i = t._getThumbFileId(e);
        return i ? t.fileManager.getFile(i) : null;
      },
      _uploadSingle: function (i, a, r) {
        var n,
          o,
          s,
          l,
          d,
          c,
          u,
          p,
          f,
          g,
          m,
          v,
          h,
          w = this,
          b = w.fileManager,
          _ = b.count(),
          C = new FormData(),
          x = w._getThumbId(a),
          y = _ > 0 || !e.isEmptyObject(w.uploadExtraData),
          T = w.ajaxOperations.uploadThumb,
          P = b.getFile(a),
          F = { id: x, index: i, fileId: a },
          k = w.fileManager.getFileName(a, !0);
        w.enableResumableUpload ||
          (w.showPreview &&
            ((o = b.getThumb(a)),
            (u = o.find(".file-thumb-progress")),
            (l = o.find(".kv-file-upload")),
            (d = o.find(".kv-file-remove")),
            u.show()),
          0 === _ ||
            !y ||
            (w.showPreview && l && l.hasClass("disabled")) ||
            w._abort(F) ||
            ((h = function () {
              c ? b.errors.push(a) : b.removeFile(a),
                b.setProcessed(a),
                b.isProcessed() && ((w.fileBatchCompleted = !0), s());
            }),
            (s = function () {
              var e;
              w.fileBatchCompleted &&
                setTimeout(function () {
                  var i = 0 === b.count(),
                    a = b.errors.length;
                  w._updateInitialPreview(),
                    w.unlock(i),
                    i && w._clearFileInput(),
                    (e = w.$preview.find(".file-preview-initial")),
                    w.uploadAsync &&
                      e.length &&
                      (t.addCss(e, t.SORT_CSS), w._initSortable()),
                    w._raise("filebatchuploadcomplete", [
                      b.stack,
                      w._getExtraData(),
                    ]),
                    (w.retryErrorUploads && 0 !== a) || b.clear(),
                    w._setProgress(101),
                    (w.ajaxAborted = !1);
                }, w.processDelay);
            }),
            (p = function (s) {
              (n = w._getOutData(C, s)),
                b.initStats(a),
                (w.fileBatchCompleted = !1),
                r || (w.ajaxAborted = !1),
                w.showPreview &&
                  (o.hasClass("file-preview-success") ||
                    (w._setThumbStatus(o, "Loading"),
                    t.addCss(o, "file-uploading")),
                  l.attr("disabled", !0),
                  d.attr("disabled", !0)),
                r || w.lock(),
                -1 !== b.errors.indexOf(a) && delete b.errors[a],
                w._raise("filepreupload", [n, x, i, w._getThumbFileId(o)]),
                e.extend(!0, F, n),
                w._abort(F) &&
                  (s.abort(),
                  r ||
                    (w._setThumbStatus(o, "New"),
                    o.removeClass("file-uploading"),
                    l.removeAttr("disabled"),
                    d.removeAttr("disabled"),
                    w.unlock()),
                  w._setProgressCancelled());
            }),
            (g = function (s, d, p) {
              var g = w.showPreview && o.attr("id") ? o.attr("id") : x;
              (n = w._getOutData(C, p, s)),
                e.extend(!0, F, n),
                setTimeout(function () {
                  t.isEmpty(s) || t.isEmpty(s.error)
                    ? (w.showPreview &&
                        (w._setThumbStatus(o, "Success"),
                        l.hide(),
                        w._initUploadSuccess(s, o, r),
                        w._setProgress(101, u)),
                      w._raise("fileuploaded", [n, g, i, w._getThumbFileId(o)]),
                      r ? h() : w.fileManager.remove(o))
                    : ((c = !0),
                      (f = w._parseError(
                        T,
                        p,
                        w.msgUploadError,
                        w.fileManager.getFileName(a)
                      )),
                      w._showFileError(f, F),
                      w._setPreviewError(o, !0),
                      w.retryErrorUploads || l.hide(),
                      r && h(),
                      w._setProgress(
                        101,
                        w._getFrame(g).find(".file-thumb-progress"),
                        w.msgUploadError
                      ));
                }, w.processDelay);
            }),
            (m = function () {
              w.showPreview &&
                (l.removeAttr("disabled"),
                d.removeAttr("disabled"),
                o.removeClass("file-uploading")),
                r ? s() : (w.unlock(!1), w._clearFileInput()),
                w._initSuccessThumbs();
            }),
            (v = function (t, i, n) {
              (f = w._parseError(T, t, n, w.fileManager.getFileName(a))),
                (c = !0),
                setTimeout(function () {
                  var i;
                  r && h(),
                    w.fileManager.setProgress(a, 100),
                    w._setPreviewError(o, !0),
                    w.retryErrorUploads || l.hide(),
                    e.extend(!0, F, w._getOutData(C, t)),
                    w._setProgress(
                      101,
                      w.$progress,
                      w.msgAjaxProgressError.replace("{operation}", T)
                    ),
                    (i =
                      w.showPreview && o ? o.find(".file-thumb-progress") : ""),
                    w._setProgress(101, i, w.msgUploadError),
                    w._showFileError(f, F);
                }, w.processDelay);
            }),
            w._setFileData(C, P.file, k, a),
            w._setUploadData(C, { fileId: a }),
            w._ajaxSubmit(p, g, m, v, C, a, i)));
      },
      _setFileData: function (e, t, i, a) {
        var r = this,
          n = r.preProcessUpload;
        n && "function" == typeof n
          ? e.append(r.uploadFileAttr, n(a, t))
          : e.append(r.uploadFileAttr, t, i);
      },
      _uploadBatch: function () {
        var i,
          a,
          r,
          n,
          o,
          s,
          l = this,
          d = l.fileManager,
          c = d.total(),
          u = {},
          p = c > 0 || !e.isEmptyObject(l.uploadExtraData),
          f = new FormData(),
          g = l.ajaxOperations.uploadBatch;
        if (0 !== c && p && !l._abort(u)) {
          (s = function () {
            l.fileManager.clear(), l._clearFileInput();
          }),
            (i = function (i) {
              l.lock(), d.initStats();
              var a = l._getOutData(f, i);
              (l.ajaxAborted = !1),
                l.showPreview &&
                  l._getThumbs().each(function () {
                    var i = e(this),
                      a = i.find(".kv-file-upload"),
                      r = i.find(".kv-file-remove");
                    i.hasClass("file-preview-success") ||
                      (l._setThumbStatus(i, "Loading"),
                      t.addCss(i, "file-uploading")),
                      a.attr("disabled", !0),
                      r.attr("disabled", !0);
                  }),
                l._raise("filebatchpreupload", [a]),
                l._abort(a) &&
                  (i.abort(),
                  l._getThumbs().each(function () {
                    var t = e(this),
                      i = t.find(".kv-file-upload"),
                      a = t.find(".kv-file-remove");
                    t.hasClass("file-preview-loading") &&
                      (l._setThumbStatus(t, "New"),
                      t.removeClass("file-uploading")),
                      i.removeAttr("disabled"),
                      a.removeAttr("disabled");
                  }),
                  l._setProgressCancelled());
            }),
            (a = function (i, a, r) {
              var n = l._getOutData(f, r, i),
                d = 0,
                c = l._getThumbs(":not(.file-preview-success)"),
                u = t.isEmpty(i) || t.isEmpty(i.errorkeys) ? [] : i.errorkeys;
              t.isEmpty(i) || t.isEmpty(i.error)
                ? (l._raise("filebatchuploadsuccess", [n]),
                  s(),
                  l.showPreview
                    ? (c.each(function () {
                        var t = e(this);
                        l._setThumbStatus(t, "Success"),
                          t.removeClass("file-uploading"),
                          t
                            .find(".kv-file-upload")
                            .hide()
                            .removeAttr("disabled");
                      }),
                      l._initUploadSuccess(i))
                    : l.reset(),
                  l._setProgress(101))
                : (l.showPreview &&
                    (c.each(function () {
                      var t = e(this);
                      t.removeClass("file-uploading"),
                        t.find(".kv-file-upload").removeAttr("disabled"),
                        t.find(".kv-file-remove").removeAttr("disabled"),
                        0 === u.length || -1 !== e.inArray(d, u)
                          ? (l._setPreviewError(t, !0),
                            l.retryErrorUploads ||
                              (t.find(".kv-file-upload").hide(),
                              l.fileManager.remove(t)))
                          : (t.find(".kv-file-upload").hide(),
                            l._setThumbStatus(t, "Success"),
                            l.fileManager.remove(t)),
                        (t.hasClass("file-preview-error") &&
                          !l.retryErrorUploads) ||
                          d++;
                    }),
                    l._initUploadSuccess(i)),
                  (o = l._parseError(g, r, l.msgUploadError)),
                  l._showFileError(o, n, "filebatchuploaderror"),
                  l._setProgress(101, l.$progress, l.msgUploadError));
            }),
            (n = function () {
              l.unlock(),
                l._initSuccessThumbs(),
                l._clearFileInput(),
                l._raise("filebatchuploadcomplete", [
                  l.fileManager.stack,
                  l._getExtraData(),
                ]);
            }),
            (r = function (t, i, a) {
              var r = l._getOutData(f, t);
              (o = l._parseError(g, t, a)),
                l._showFileError(o, r, "filebatchuploaderror"),
                (l.uploadFileCount = c - 1),
                l.showPreview &&
                  (l._getThumbs().each(function () {
                    var t = e(this);
                    t.removeClass("file-uploading"),
                      l._getThumbFile(t) && l._setPreviewError(t);
                  }),
                  l._getThumbs().removeClass("file-uploading"),
                  l._getThumbs(" .kv-file-upload").removeAttr("disabled"),
                  l._getThumbs(" .kv-file-delete").removeAttr("disabled"),
                  l._setProgress(
                    101,
                    l.$progress,
                    l.msgAjaxProgressError.replace("{operation}", g)
                  ));
            });
          var m = 0;
          e.each(l.fileManager.stack, function (e, i) {
            t.isEmpty(i.file) ||
              l._setFileData(f, i.file, i.nameFmt || "untitled_" + m, e),
              m++;
          }),
            l._ajaxSubmit(i, a, n, r, f);
        }
      },
      _uploadExtraOnly: function () {
        var e,
          i,
          a,
          r,
          n,
          o = this,
          s = {},
          l = new FormData(),
          d = o.ajaxOperations.uploadExtra;
        o._abort(s) ||
          ((e = function (e) {
            o.lock();
            var t = o._getOutData(l, e);
            o._raise("filebatchpreupload", [t]),
              o._setProgress(50),
              (s.data = t),
              (s.xhr = e),
              o._abort(s) && (e.abort(), o._setProgressCancelled());
          }),
          (i = function (e, i, a) {
            var r = o._getOutData(l, a, e);
            t.isEmpty(e) || t.isEmpty(e.error)
              ? (o._raise("filebatchuploadsuccess", [r]),
                o._clearFileInput(),
                o._initUploadSuccess(e),
                o._setProgress(101))
              : ((n = o._parseError(d, a, o.msgUploadError)),
                o._showFileError(n, r, "filebatchuploaderror"));
          }),
          (a = function () {
            o.unlock(),
              o._clearFileInput(),
              o._raise("filebatchuploadcomplete", [
                o.fileManager.stack,
                o._getExtraData(),
              ]);
          }),
          (r = function (e, t, i) {
            var a = o._getOutData(l, e);
            (n = o._parseError(d, e, i)),
              (s.data = a),
              o._showFileError(n, a, "filebatchuploaderror"),
              o._setProgress(
                101,
                o.$progress,
                o.msgAjaxProgressError.replace("{operation}", d)
              );
          }),
          o._ajaxSubmit(e, i, a, r, l));
      },
      _deleteFileIndex: function (i) {
        var a = this,
          r = i.attr("data-fileindex"),
          n = a.reversePreviewOrder;
        r.substring(0, 5) === t.INIT_FLAG &&
          ((r = parseInt(r.replace(t.INIT_FLAG, ""))),
          (a.initialPreview = t.spliceArray(a.initialPreview, r, n)),
          (a.initialPreviewConfig = t.spliceArray(
            a.initialPreviewConfig,
            r,
            n
          )),
          (a.initialPreviewThumbTags = t.spliceArray(
            a.initialPreviewThumbTags,
            r,
            n
          )),
          a.getFrames().each(function () {
            var i = e(this),
              a = i.attr("data-fileindex");
            a.substring(0, 5) === t.INIT_FLAG &&
              ((a = parseInt(a.replace(t.INIT_FLAG, ""))),
              a > r && (a--, i.attr("data-fileindex", t.INIT_FLAG + a)));
          }));
      },
      _resetCaption: function () {
        var e = this;
        setTimeout(function () {
          var t,
            i,
            a,
            r = e.previewCache.count(!0),
            n = e.fileManager.count(),
            o = ":not(.file-preview-success):not(.file-preview-error)",
            s = e.showPreview && e.getFrames(o).length;
          0 !== n || 0 !== r || s
            ? ((i = r + n),
              i > 1
                ? (t = e._getMsgSelected(i))
                : ((a = e.fileManager.getFirstFile()),
                  (t = a ? a.nameFmt : "_")),
              e._setCaption(t))
            : e.reset();
        }, e.processDelay);
      },
      _initFileActions: function () {
        var i = this;
        i.showPreview &&
          (i._initZoomButton(),
          i.getFrames(" .kv-file-remove").each(function () {
            var a,
              r,
              n = e(this),
              o = n.closest(t.FRAMES),
              s = o.attr("id"),
              l = o.attr("data-fileindex");
            i.fileManager;
            i._handler(n, "click", function () {
              return (
                (r = i._raise("filepreremove", [s, l])),
                r !== !1 && i._validateMinCount()
                  ? ((a = o.hasClass("file-preview-error")),
                    t.cleanMemory(o),
                    void o.fadeOut("slow", function () {
                      i.fileManager.remove(o),
                        i._clearObjects(o),
                        o.remove(),
                        s &&
                          a &&
                          i.$errorContainer
                            .find('li[data-thumb-id="' + s + '"]')
                            .fadeOut("fast", function () {
                              e(this).remove(),
                                i._errorsExist() || i._resetErrors();
                            }),
                        i._clearFileInput(),
                        i._resetCaption(),
                        i._raise("fileremoved", [s, l]);
                    }))
                  : !1
              );
            });
          }),
          i.getFrames(" .kv-file-upload").each(function () {
            var a = e(this);
            i._handler(a, "click", function () {
              var e = a.closest(t.FRAMES),
                r = i._getThumbFileId(e);
              i._hideProgress(),
                (e.hasClass("file-preview-error") && !i.retryErrorUploads) ||
                  i._uploadSingle(i.fileManager.getIndex(r), r, !1);
            });
          }));
      },
      _initPreviewActions: function () {
        var i = this,
          a = i.$preview,
          r = i.deleteExtraData || {},
          n = t.FRAMES + " .kv-file-remove",
          o = i.fileActionSettings,
          s = o.removeClass,
          l = o.removeErrorClass,
          d = function () {
            var e = i.isAjaxUpload
              ? i.previewCache.count(!0)
              : i._inputFileCount();
            i.getFrames().length ||
              e ||
              (i._setCaption(""), i.reset(), (i.initialCaption = ""));
          };
        i._initZoomButton(),
          a.find(n).each(function () {
            var a,
              n,
              o,
              c,
              u = e(this),
              p = u.data("url") || i.deleteUrl,
              f = u.data("key"),
              g = i.ajaxOperations.deleteThumb;
            if (!t.isEmpty(p) && void 0 !== f) {
              "function" == typeof p && (p = p());
              var m,
                v,
                h,
                w,
                b,
                _ = u.closest(t.FRAMES),
                C = i.previewCache.data,
                x = _.attr("data-fileindex");
              (x = parseInt(x.replace(t.INIT_FLAG, ""))),
                (h =
                  t.isEmpty(C.config) && t.isEmpty(C.config[x])
                    ? null
                    : C.config[x]),
                (b = t.isEmpty(h) || t.isEmpty(h.extra) ? r : h.extra),
                (w = (h && (h.filename || h.caption)) || ""),
                "function" == typeof b && (b = b()),
                (v = { id: u.attr("id"), key: f, extra: b }),
                (n = function (e) {
                  (i.ajaxAborted = !1),
                    i._raise("filepredelete", [f, e, b]),
                    i._abort()
                      ? e.abort()
                      : (u.removeClass(l),
                        t.addCss(_, "file-uploading"),
                        t.addCss(u, "disabled " + s));
                }),
                (o = function (e, r, n) {
                  var o, c;
                  return t.isEmpty(e) || t.isEmpty(e.error)
                    ? (_.removeClass("file-uploading").addClass("file-deleted"),
                      void _.fadeOut("slow", function () {
                        (x = parseInt(
                          _.attr("data-fileindex").replace(t.INIT_FLAG, "")
                        )),
                          i.previewCache.unset(x),
                          i._deleteFileIndex(_),
                          (o = i.previewCache.count(!0)),
                          (c = o > 0 ? i._getMsgSelected(o) : ""),
                          i._setCaption(c),
                          i._raise("filedeleted", [f, n, b]),
                          i._clearObjects(_),
                          _.remove(),
                          d();
                      }))
                    : ((v.jqXHR = n),
                      (v.response = e),
                      (a = i._parseError(g, n, i.msgDeleteError, w)),
                      i._showFileError(a, v, "filedeleteerror"),
                      _.removeClass("file-uploading"),
                      u.removeClass("disabled " + s).addClass(l),
                      void d());
                }),
                (c = function (e, t, a) {
                  var r = i._parseError(g, e, a, w);
                  (v.jqXHR = e),
                    (v.response = {}),
                    i._showFileError(r, v, "filedeleteerror"),
                    _.removeClass("file-uploading"),
                    u.removeClass("disabled " + s).addClass(l),
                    d();
                }),
                i._initAjaxSettings(),
                i._mergeAjaxCallback("beforeSend", n, "delete"),
                i._mergeAjaxCallback("success", o, "delete"),
                i._mergeAjaxCallback("error", c, "delete"),
                (m = e.extend(
                  !0,
                  {},
                  {
                    url: i._encodeURI(p),
                    type: "POST",
                    dataType: "json",
                    data: e.extend(!0, {}, { key: f }, b),
                  },
                  i._ajaxDeleteSettings
                )),
                i._handler(u, "click", function () {
                  return i._validateMinCount()
                    ? ((i.ajaxAborted = !1),
                      i._raise("filebeforedelete", [f, b]),
                      void (i.ajaxAborted instanceof Promise
                        ? i.ajaxAborted.then(function (t) {
                            t || e.ajax(m);
                          })
                        : i.ajaxAborted || e.ajax(m)))
                    : !1;
                });
            }
          });
      },
      _hideFileIcon: function () {
        var e = this;
        e.overwriteInitial && e.$captionContainer.removeClass("icon-visible");
      },
      _showFileIcon: function () {
        var e = this;
        t.addCss(e.$captionContainer, "icon-visible");
      },
      _getSize: function (t, i) {
        var a,
          r,
          n = this,
          o = parseFloat(t),
          s = n.fileSizeGetter;
        return e.isNumeric(t) && e.isNumeric(o)
          ? ("function" == typeof s
              ? (r = s(o))
              : 0 === o
              ? (r = "0.00 B")
              : (i ||
                  (i = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]),
                (a = Math.floor(Math.log(o) / Math.log(1024))),
                (r = (o / Math.pow(1024, a)).toFixed(2) + " " + i[a])),
            n._getLayoutTemplate("size").replace("{sizeText}", r))
          : "";
      },
      _getFileType: function (e) {
        var t = this;
        return t.mimeTypeAliases[e] || e;
      },
      _generatePreviewTemplate: function (
        i,
        a,
        r,
        n,
        o,
        s,
        l,
        d,
        c,
        u,
        p,
        f,
        g,
        m
      ) {
        var v,
          h,
          w,
          b = this,
          _ = b.slug(r),
          C = "",
          x = "",
          y =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          T = _,
          P = _,
          F = "type-default",
          k = u || b._renderFileFooter(i, _, d, "auto", l),
          S = b.preferIconicPreview,
          E = b.preferIconicZoomPreview,
          I = S ? "other" : i;
        return (
          (h =
            400 > y
              ? b.previewSettingsSmall[I] || b.defaults.previewSettingsSmall[I]
              : b.previewSettings[I] || b.defaults.previewSettings[I]),
          h &&
            e.each(h, function (e, t) {
              x += e + ":" + t + ";";
            }),
          (w = function (a, l, d, u) {
            var m = d ? "zoom-" + o : o,
              v = b._getPreviewTemplate(a),
              h = (c || "") + " " + u;
            return (
              b.frameClass && (h = b.frameClass + " " + h),
              d && (h = h.replace(" " + t.SORT_CSS, "")),
              (v = b._parseFilePreviewIcon(v, r)),
              "object" !== i ||
                n ||
                e.each(b.defaults.fileTypeSettings, function (e, t) {
                  "object" !== e &&
                    "other" !== e &&
                    t(r, n) &&
                    (F = "type-" + e);
                }),
              t.isEmpty(g) ||
                (void 0 !== g.title && null !== g.title && (T = g.title),
                void 0 !== g.alt && null !== g.alt && (T = g.alt)),
              v.setTokens({
                previewId: m,
                caption: _,
                title: T,
                alt: P,
                frameClass: h,
                type: b._getFileType(n),
                fileindex: p,
                fileid: s || "",
                typeCss: F,
                footer: k,
                data: l,
                template: f || i,
                style: x ? 'style="' + x + '"' : "",
              })
            );
          }),
          (p = p || o.slice(o.lastIndexOf("-") + 1)),
          b.fileActionSettings.showZoom &&
            (C = w(E ? "other" : i, m ? m : a, !0, "kv-zoom-thumb")),
          (C =
            "\n" +
            b._getLayoutTemplate("zoomCache").replace("{zoomContent}", C)),
          "function" == typeof b.sanitizeZoomCache &&
            (C = b.sanitizeZoomCache(C)),
          (v = w(S ? "other" : i, a, !1, "kv-preview-thumb")),
          v.setTokens({ zoomCache: C })
        );
      },
      _addToPreview: function (e, i) {
        var a,
          r = this;
        return (
          (i = t.cspBuffer.stash(i)),
          (a = r.reversePreviewOrder ? e.prepend(i) : e.append(i)),
          t.cspBuffer.apply(e),
          a
        );
      },
      _previewDefault: function (e, i) {
        var a = this,
          r = a.$preview;
        if (a.showPreview) {
          var n,
            o = t.getFileName(e),
            s = e ? e.type : "",
            l = e.size || 0,
            d = a._getFileName(e, ""),
            c = i === !0 && !a.isAjaxUpload,
            u = t.createObjectURL(e),
            p = a.fileManager.getId(e),
            f = a._getThumbId(p);
          a._clearDefaultPreview(),
            (n = a._generatePreviewTemplate("other", u, o, s, f, p, c, l)),
            a._addToPreview(r, n),
            a._setThumbAttr(f, d, l),
            i === !0 &&
              a.isAjaxUpload &&
              a._setThumbStatus(a._getFrame(f), "Error");
        }
      },
      _previewFile: function (e, i, a, r, n) {
        if (this.showPreview) {
          var o,
            s = this,
            l = t.getFileName(i),
            d = n.type,
            c = n.name,
            u = s._parseFileType(d, l),
            p = s.$preview,
            f = i.size || 0,
            g = "image" === u ? a.target.result : r,
            m = s.fileManager,
            v = m.getId(i),
            h = s._getThumbId(v);
          (o = s._generatePreviewTemplate(u, g, l, d, h, v, !1, f)),
            s._clearDefaultPreview(),
            s._addToPreview(p, o);
          var w = s._getFrame(h);
          s._validateImageOrientation(w.find("img"), i, h, v, c, d, f, g),
            s._setThumbAttr(h, c, f),
            s._initSortable();
        }
      },
      _setThumbAttr: function (e, t, i) {
        var a = this,
          r = a._getFrame(e);
        r.length &&
          ((i = i && i > 0 ? a._getSize(i) : ""),
          r.data({ caption: t, size: i }));
      },
      _setInitThumbAttr: function () {
        var e,
          i,
          a,
          r,
          n = this,
          o = n.previewCache.data,
          s = n.previewCache.count(!0);
        if (0 !== s)
          for (var l = 0; s > l; l++)
            (e = o.config[l]),
              (r = n.previewInitId + "-" + t.INIT_FLAG + l),
              (i = t.ifSet("caption", e, t.ifSet("filename", e))),
              (a = t.ifSet("size", e)),
              n._setThumbAttr(r, i, a);
      },
      _slugDefault: function (e) {
        return t.isEmpty(e, !0)
          ? ""
          : String(e).replace(/[\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, "_");
      },
      _updateFileDetails: function (e, i) {
        var a,
          r,
          n,
          o,
          s,
          l = this,
          d = l.$element,
          c =
            (t.isIE(9) && t.findFileName(d.val())) ||
            (d[0].files[0] && d[0].files[0].name);
        !c && l.fileManager.count() > 0
          ? ((s = l.fileManager.getFirstFile()), (a = s.nameFmt))
          : (a = c ? l.slug(c) : "_"),
          (r = l.isAjaxUpload ? l.fileManager.count() : e),
          (o = l.previewCache.count(!0) + r),
          (n =
            1 === r ? a : l._getMsgSelected(o, !l.isAjaxUpload && !l.isError)),
          l.isError
            ? (l.$previewContainer.removeClass("file-thumb-loading"),
              l._initCapStatus(),
              l.$previewStatus.html(""),
              l.$captionContainer.removeClass("icon-visible"))
            : l._showFileIcon(),
          l._setCaption(n, l.isError),
          l.$container.removeClass("file-input-new file-input-ajax-new"),
          i || l._raise("fileselect", [e, a]),
          l.previewCache.count(!0) && l._initPreviewActions();
      },
      _setThumbStatus: function (e, i) {
        var a = this;
        if (a.showPreview) {
          var r = "indicator" + i,
            n = r + "Title",
            o = "file-preview-" + i.toLowerCase(),
            s = e.find(".file-upload-indicator"),
            l = a.fileActionSettings;
          e.removeClass(
            "file-preview-success file-preview-error file-preview-paused file-preview-loading"
          ),
            "Success" === i && e.find(".file-drag-handle").remove(),
            t.setHtml(s, l[r]),
            s.attr("title", l[n]),
            e.addClass(o),
            "Error" !== i ||
              a.retryErrorUploads ||
              e.find(".kv-file-upload").attr("disabled", !0);
        }
      },
      _setProgressCancelled: function () {
        var e = this;
        e._setProgress(101, e.$progress, e.msgCancelled);
      },
      _setProgress: function (e, i, a, r) {
        var n = this;
        if (((i = i || n.$progress), i.length)) {
          var o,
            s = Math.min(e, 100),
            l = n.progressUploadThreshold,
            d = 100 >= e ? n.progressTemplate : n.progressCompleteTemplate,
            c =
              100 > s
                ? n.progressTemplate
                : a
                ? n.paused
                  ? n.progressPauseTemplate
                  : n.progressErrorTemplate
                : d;
          e >= 100 && (r = ""),
            t.isEmpty(c) ||
              ((o =
                l && s > l && 100 >= e
                  ? c.setTokens({ percent: l, status: n.msgUploadThreshold })
                  : c.setTokens({
                      percent: s,
                      status: e > 100 ? n.msgUploadEnd : s + "%",
                    })),
              (r = r || ""),
              (o = o.setTokens({ stats: r })),
              t.setHtml(i, o),
              a && t.setHtml(i.find('[role="progressbar"]'), a));
        }
      },
      _hasFiles: function () {
        var e = this.$element[0];
        return !!(e && e.files && e.files.length);
      },
      _setFileDropZoneTitle: function () {
        var e,
          i = this,
          a = i.$container.find(".file-drop-zone"),
          r = i.dropZoneTitle;
        i.isClickable &&
          ((e = t.isEmpty(i.$element.attr("multiple"))
            ? i.fileSingle
            : i.filePlural),
          (r += i.dropZoneClickTitle.replace("{files}", e))),
          a.find("." + i.dropZoneTitleClass).remove(),
          !i.showPreview ||
            0 === a.length ||
            i.fileManager.count() > 0 ||
            !i.dropZoneEnabled ||
            i.previewCache.count() > 0 ||
            (!i.isAjaxUpload && i._hasFiles()) ||
            (0 === a.find(t.FRAMES).length &&
              t.isEmpty(i.defaultPreviewContent) &&
              a.prepend(
                '<div class="' + i.dropZoneTitleClass + '">' + r + "</div>"
              ),
            i.$container.removeClass("file-input-new"),
            t.addCss(i.$container, "file-input-ajax-new"));
      },
      _getStats: function (e) {
        var i,
          a,
          r = this;
        return r.showUploadStats && e && e.bitrate
          ? ((a = r._getLayoutTemplate("stats")),
            (i =
              e.elapsed && e.bps
                ? r.msgPendingTime.setTokens({
                    time: t.getElapsed(Math.ceil(e.pendingBytes / e.bps)),
                  })
                : r.msgCalculatingTime),
            a.setTokens({ uploadSpeed: e.bitrate, pendingTime: i }))
          : "";
      },
      _setResumableProgress: function (e, t, i) {
        var a = this,
          r = a.resumableManager,
          n = i ? r : a,
          o = i ? i.find(".file-thumb-progress") : null;
        0 === n.lastProgress && (n.lastProgress = e),
          e < n.lastProgress && (e = n.lastProgress),
          a._setProgress(e, o, null, a._getStats(t)),
          (n.lastProgress = e);
      },
      _toggleResumableProgress: function (e, i) {
        var a = this,
          r = a.$progress;
        r &&
          r.length &&
          t.setHtml(r, e.setTokens({ percent: 101, status: i, stats: "" }));
      },
      _setFileUploadStats: function (i, a, r) {
        var n = this,
          o = n.$progress;
        if (n.showPreview || (o && o.length)) {
          var s,
            l = n.fileManager,
            d = n.resumableManager,
            c = l.getThumb(i),
            u = 0,
            p = l.getTotalSize(),
            f = e.extend(!0, {}, r);
          if (n.enableResumableUpload) {
            var g,
              m = r.loaded,
              v = d.getUploadedSize(),
              h = d.file.size;
            (m += v),
              (g = l.uploadedSize + m),
              (a = t.round((100 * m) / h)),
              (r.pendingBytes = h - v),
              n._setResumableProgress(a, r, c),
              (s = Math.floor((100 * g) / p)),
              (f.pendingBytes = p - g),
              n._setResumableProgress(s, f);
          } else
            l.setProgress(i, a),
              (o = c && c.length ? c.find(".file-thumb-progress") : null),
              n._setProgress(a, o, null, n._getStats(r)),
              e.each(l.stats, function (e, t) {
                u += t.loaded;
              }),
              (f.pendingBytes = p - u),
              (s = t.round((u / p) * 100)),
              n._setProgress(s, null, null, n._getStats(f));
        }
      },
      _validateMinCount: function () {
        var e = this,
          t = e.isAjaxUpload ? e.fileManager.count() : e._inputFileCount();
        return e.validateInitialCount &&
          e.minFileCount > 0 &&
          e._getFileCount(t - 1) < e.minFileCount
          ? (e._noFilesError({}), !1)
          : !0;
      },
      _getFileCount: function (e, t) {
        var i = this,
          a = 0;
        return (
          void 0 === t && (t = i.validateInitialCount && !i.overwriteInitial),
          t && ((a = i.previewCache.count(!0)), (e += a)),
          e
        );
      },
      _getFileId: function (e) {
        return t.getFileId(e, this.generateFileId);
      },
      _getFileName: function (e, i) {
        var a = this,
          r = t.getFileName(e);
        return r ? a.slug(r) : i;
      },
      _getFileNames: function (e) {
        var t = this;
        return t.filenames.filter(function (t) {
          return e ? void 0 !== t : void 0 !== t && null !== t;
        });
      },
      _setPreviewError: function (e, t) {
        var i = this,
          a = i.removeFromPreviewOnError && !i.retryErrorUploads;
        if (((t && !a) || i.fileManager.remove(e), i.showPreview)) {
          if (a) return void e.remove();
          i._setThumbStatus(e, "Error"), i._refreshUploadButton(e);
        }
      },
      _refreshUploadButton: function (e) {
        var i = this,
          a = e.find(".kv-file-upload"),
          r = i.fileActionSettings,
          n = r.uploadIcon,
          o = r.uploadTitle;
        a.length &&
          (i.retryErrorUploads &&
            ((n = r.uploadRetryIcon), (o = r.uploadRetryTitle)),
          a.attr("title", o),
          t.setHtml(a, n));
      },
      _checkDimensions: function (e, i, a, r, n, o, s) {
        var l,
          d,
          c,
          u,
          p = this,
          f = "Small" === i ? "min" : "max",
          g = p[f + "Image" + o];
        !t.isEmpty(g) &&
          a.length &&
          ((c = a[0]),
          (d =
            "Width" === o
              ? c.naturalWidth || c.width
              : c.naturalHeight || c.height),
          (u = "Small" === i ? d >= g : g >= d),
          u ||
            ((l = p["msgImage" + o + i].setTokens({ name: n, size: g })),
            p._showFileError(l, s),
            p._setPreviewError(r)));
      },
      _getExifObj: function (e) {
        var i,
          a = this,
          r = t.logMessages.exifWarning;
        if (
          "data:image/jpeg;base64," !== e.slice(0, 23) &&
          "data:image/jpg;base64," !== e.slice(0, 22)
        )
          return void (i = null);
        try {
          i = window.piexif ? window.piexif.load(e) : null;
        } catch (n) {
          (i = null), (r = (n && n.message) || "");
        }
        return i || a._log(t.logMessages.badExifParser, { details: r }), i;
      },
      setImageOrientation: function (i, a, r, n) {
        var o,
          s,
          l,
          d = this,
          c = !i || !i.length,
          u = !a || !a.length,
          p = !1,
          f = c && n && "image" === n.attr("data-template");
        (c && u) ||
          ((l = "load.fileinputimageorient"),
          f
            ? ((i = a),
              (a = null),
              i.css(d.previewSettings.image),
              (s = e(document.createElement("div")).appendTo(
                n.find(".kv-file-content")
              )),
              (o = e(document.createElement("span")).insertBefore(i)),
              i
                .css("visibility", "hidden")
                .removeClass("file-zoom-detail")
                .appendTo(s))
            : (p = !i.is(":visible")),
          i.off(l).on(l, function () {
            p &&
              (d.$preview.removeClass("hide-content"),
              n.find(".kv-file-content").css("visibility", "hidden"));
            var e = i[0],
              l = a && a.length ? a[0] : null,
              c = e.offsetHeight,
              u = e.offsetWidth,
              g = t.getRotation(r);
            if (
              (p &&
                (n.find(".kv-file-content").css("visibility", "visible"),
                d.$preview.addClass("hide-content")),
              i.data("orientation", r),
              l && a.data("orientation", r),
              5 > r)
            )
              return t.setTransform(e, g), void t.setTransform(l, g);
            var m = Math.atan(u / c),
              v = Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)),
              h = v ? c / Math.cos(Math.PI / 2 + m) / v : 1,
              w = " scale(" + Math.abs(h) + ")";
            t.setTransform(e, g + w),
              t.setTransform(l, g + w),
              f &&
                (i
                  .css("visibility", "visible")
                  .insertAfter(o)
                  .addClass("file-zoom-detail"),
                o.remove(),
                s.remove());
          }));
      },
      _validateImageOrientation: function (i, a, r, n, o, s, l, d) {
        var c,
          u,
          p = this,
          f = null,
          g = p.autoOrientImage;
        return p.canOrientImage
          ? (i.css("image-orientation", g ? "from-image" : "none"),
            void p._validateImage(r, n, o, s, l, d, f))
          : ((u = t.getZoomSelector(r, " img")),
            (f = g ? p._getExifObj(d) : null),
            (c = f ? f["0th"][piexif.ImageIFD.Orientation] : null)
              ? (p.setImageOrientation(i, e(u), c, p._getFrame(r)),
                p._raise("fileimageoriented", { $img: i, file: a }),
                void p._validateImage(r, n, o, s, l, d, f))
              : void p._validateImage(r, n, o, s, l, d, f));
      },
      _validateImage: function (e, t, i, a, r, n, o) {
        var s,
          l,
          d,
          c = this,
          u = c.$preview,
          p = c._getFrame(e),
          f = p.attr("data-fileindex"),
          g = p.find("img");
        (i = i || "Untitled"),
          g
            .one("load", function () {
              (l = p.width()),
                (d = u.width()),
                l > d && g.css("width", "100%"),
                (s = { ind: f, id: e, fileId: t }),
                c._checkDimensions(f, "Small", g, p, i, "Width", s),
                c._checkDimensions(f, "Small", g, p, i, "Height", s),
                c.resizeImage ||
                  (c._checkDimensions(f, "Large", g, p, i, "Width", s),
                  c._checkDimensions(f, "Large", g, p, i, "Height", s)),
                c._raise("fileimageloaded", [e]),
                c.fileManager.addImage(t, {
                  ind: f,
                  img: g,
                  thumb: p,
                  pid: e,
                  typ: a,
                  siz: r,
                  validated: !1,
                  imgData: n,
                  exifObj: o,
                }),
                p.data("exif", o),
                c._validateAllImages();
            })
            .one("error", function () {
              c._raise("fileimageloaderror", [e]);
            });
      },
      _validateAllImages: function () {
        var t,
          i = this,
          a = { val: 0 },
          r = i.fileManager.getImageCount(),
          n = i.resizeIfSizeMoreThan;
        r === i.fileManager.totalImages &&
          (i._raise("fileimagesloaded"),
          i.resizeImage &&
            e.each(i.fileManager.loadedImages, function (e, o) {
              o.validated ||
                ((t = o.siz),
                t && t > 1e3 * n && i._getResizedImage(e, o, a, r),
                (o.validated = !0));
            }));
      },
      _getResizedImage: function (i, a, r, n) {
        var o,
          s,
          l,
          d,
          c,
          u,
          p,
          f,
          g,
          m,
          v = this,
          h = e(a.img)[0],
          w = h.naturalWidth,
          b = h.naturalHeight,
          _ = 1,
          C = v.maxImageWidth || w,
          x = v.maxImageHeight || b,
          y = !(!w || !b),
          T = v.imageCanvas,
          P = v.imageCanvasContext,
          F = a.typ,
          k = a.pid,
          S = a.ind,
          E = a.thumb,
          I = a.exifObj;
        if (
          ((c = function (e, t, i) {
            v.isAjaxUpload ? v._showFileError(e, t, i) : v._showError(e, t, i),
              v._setPreviewError(E);
          }),
          (f = v.fileManager.getFile(i)),
          (g = { id: k, index: S, fileId: i }),
          (m = [i, k, S]),
          (!f || !y || (C >= w && x >= b)) &&
            (y && f && v._raise("fileimageresized", m),
            r.val++,
            r.val === n && v._raise("fileimagesresized"),
            !y))
        )
          return void c(v.msgImageResizeError, g, "fileimageresizeerror");
        (F = F || v.resizeDefaultImageType),
          (s = w > C),
          (l = b > x),
          (_ =
            "width" === v.resizePreference
              ? s
                ? C / w
                : l
                ? x / b
                : 1
              : l
              ? x / b
              : s
              ? C / w
              : 1),
          v._resetCanvas(),
          (w *= _),
          (b *= _),
          (T.width = w),
          (T.height = b);
        try {
          P.drawImage(h, 0, 0, w, b),
            (d = T.toDataURL(F, v.resizeQuality)),
            I &&
              ((p = window.piexif.dump(I)), (d = window.piexif.insert(p, d))),
            (o = t.dataURI2Blob(d)),
            v.fileManager.setFile(i, o),
            v._raise("fileimageresized", m),
            r.val++,
            r.val === n && v._raise("fileimagesresized", [void 0, void 0]),
            o instanceof Blob ||
              c(v.msgImageResizeError, g, "fileimageresizeerror");
        } catch (A) {
          r.val++,
            r.val === n && v._raise("fileimagesresized", [void 0, void 0]),
            (u = v.msgImageResizeException.replace("{errors}", A.message)),
            c(u, g, "fileimageresizeexception");
        }
      },
      _showProgress: function () {
        var e = this;
        e.$progress && e.$progress.length && e.$progress.show();
      },
      _hideProgress: function () {
        var e = this;
        e.$progress && e.$progress.length && e.$progress.hide();
      },
      _initBrowse: function (e) {
        var i = this,
          a = i.$element;
        i.showBrowse
          ? (i.$btnFile = e.find(".btn-file").append(a))
          : (a.appendTo(e).attr("tabindex", -1), t.addCss(a, "file-no-browse"));
      },
      _initClickable: function () {
        var i,
          a,
          r = this;
        r.isClickable &&
          ((i = r.$dropZone),
          r.isAjaxUpload ||
            ((a = r.$preview.find(".file-default-preview")),
            a.length && (i = a)),
          t.addCss(i, "clickable"),
          i.attr("tabindex", -1),
          r._handler(i, "click", function (t) {
            var a = e(t.target);
            r.$errorContainer.is(":visible") ||
              (a.parents(".file-preview-thumbnails").length &&
                !a.parents(".file-default-preview").length) ||
              (r.$element.data("zoneClicked", !0).trigger("click"), i.blur());
          }));
      },
      _initCaption: function () {
        var e = this,
          i = e.initialCaption || "";
        return e.overwriteInitial || t.isEmpty(i)
          ? (e.$caption.val(""), !1)
          : (e._setCaption(i), !0);
      },
      _setCaption: function (i, a) {
        var r,
          n,
          o,
          s,
          l,
          d,
          c = this;
        if (c.$caption.length) {
          if ((c.$captionContainer.removeClass("icon-visible"), a))
            (r = e("<div>" + c.msgValidationError + "</div>").text()),
              (s = c.fileManager.count()),
              s
                ? ((d = c.fileManager.getFirstFile()),
                  (l = 1 === s && d ? d.nameFmt : c._getMsgSelected(s)))
                : (l = c._getMsgSelected(c.msgNo)),
              (n = t.isEmpty(i) ? l : i),
              (o =
                '<span class="' +
                c.msgValidationErrorClass +
                '">' +
                c.msgValidationErrorIcon +
                "</span>");
          else {
            if (t.isEmpty(i)) return void c.$caption.attr("title", "");
            (r = e("<div>" + i + "</div>").text()),
              (n = r),
              (o = c._getLayoutTemplate("fileIcon"));
          }
          c.$captionContainer.addClass("icon-visible"),
            c.$caption.attr("title", r).val(n),
            t.setHtml(c.$captionIcon, o);
        }
      },
      _createContainer: function () {
        var e = this,
          i = { class: "file-input file-input-new" + (e.rtl ? " kv-rtl" : "") },
          a = t.createElement(t.cspBuffer.stash(e._renderMain()));
        return (
          t.cspBuffer.apply(a),
          a.insertBefore(e.$element).attr(i),
          e._initBrowse(a),
          e.theme && a.addClass("theme-" + e.theme),
          a
        );
      },
      _refreshContainer: function () {
        var e = this,
          i = e.$container,
          a = e.$element;
        a.insertAfter(i),
          t.setHtml(i, e._renderMain()),
          e._initBrowse(i),
          e._validateDisabled();
      },
      _validateDisabled: function () {
        var e = this;
        e.$caption.attr({ readonly: e.isDisabled });
      },
      _setTabIndex: function (e, t) {
        var i = this,
          a = i.tabIndexConfig[e];
        return t.setTokens({
          tabIndexConfig:
            void 0 === a || null === a ? "" : 'tabindex="' + a + '"',
        });
      },
      _renderMain: function () {
        var e = this,
          t = e.dropZoneEnabled ? " file-drop-zone" : "file-drop-disabled",
          i = e.showClose ? e._getLayoutTemplate("close") : "",
          a = e.showPreview
            ? e
                ._getLayoutTemplate("preview")
                .setTokens({ class: e.previewClass, dropClass: t })
            : "",
          r = e.isDisabled
            ? e.captionClass + " file-caption-disabled"
            : e.captionClass,
          n = e.captionTemplate.setTokens({
            class: r + " kv-fileinput-caption",
          });
        return (
          (n = e._setTabIndex("caption", n)),
          e.mainTemplate.setTokens({
            class:
              e.mainClass +
              (!e.showBrowse && e.showCaption ? " no-browse" : ""),
            preview: a,
            close: i,
            caption: n,
            upload: e._renderButton("upload"),
            remove: e._renderButton("remove"),
            cancel: e._renderButton("cancel"),
            pause: e._renderButton("pause"),
            browse: e._renderButton("browse"),
          })
        );
      },
      _renderButton: function (e) {
        var i = this,
          a = i._getLayoutTemplate("btnDefault"),
          r = i[e + "Class"],
          n = i[e + "Title"],
          o = i[e + "Icon"],
          s = i[e + "Label"],
          l = i.isDisabled ? " disabled" : "",
          d = "button";
        switch (e) {
          case "remove":
            if (!i.showRemove) return "";
            break;
          case "cancel":
            if (!i.showCancel) return "";
            r += " kv-hidden";
            break;
          case "pause":
            if (!i.showPause) return "";
            r += " kv-hidden";
            break;
          case "upload":
            if (!i.showUpload) return "";
            i.isAjaxUpload && !i.isDisabled
              ? (a = i
                  ._getLayoutTemplate("btnLink")
                  .replace("{href}", i.uploadUrl))
              : (d = "submit");
            break;
          case "browse":
            if (!i.showBrowse) return "";
            a = i._getLayoutTemplate("btnBrowse");
            break;
          default:
            return "";
        }
        return (
          (a = i._setTabIndex(e, a)),
          (r +=
            "browse" === e
              ? " btn-file"
              : " fileinput-" + e + " fileinput-" + e + "-button"),
          t.isEmpty(s) ||
            (s = ' <span class="' + i.buttonLabelClass + '">' + s + "</span>"),
          a.setTokens({
            type: d,
            css: r,
            title: n,
            status: l,
            icon: o,
            label: s,
          })
        );
      },
      _renderThumbProgress: function () {
        var e = this;
        return (
          '<div class="file-thumb-progress kv-hidden">' +
          e.progressInfoTemplate.setTokens({
            percent: 101,
            status: e.msgUploadBegin,
            stats: "",
          }) +
          "</div>"
        );
      },
      _renderFileFooter: function (e, i, a, r, n) {
        var o,
          s,
          l = this,
          d = l.fileActionSettings,
          c = d.showRemove,
          u = d.showDrag,
          p = d.showUpload,
          f = d.showZoom,
          g = l._getLayoutTemplate("footer"),
          m = l._getLayoutTemplate("indicator"),
          v = n ? d.indicatorError : d.indicatorNew,
          h = n ? d.indicatorErrorTitle : d.indicatorNewTitle,
          w = m.setTokens({ indicator: v, indicatorTitle: h });
        return (
          (a = l._getSize(a)),
          (s = {
            type: e,
            caption: i,
            size: a,
            width: r,
            progress: "",
            indicator: w,
          }),
          l.isAjaxUpload
            ? ((s.progress = l._renderThumbProgress()),
              (s.actions = l._renderFileActions(s, p, !1, c, f, u, !1, !1, !1)))
            : (s.actions = l._renderFileActions(
                s,
                !1,
                !1,
                !1,
                f,
                u,
                !1,
                !1,
                !1
              )),
          (o = g.setTokens(s)),
          (o = t.replaceTags(o, l.previewThumbTags))
        );
      },
      _renderFileActions: function (e, t, i, a, r, n, o, s, l, d, c, u) {
        var p = this;
        if (
          (!e.type && d && (e.type = "image"),
          p.enableResumableUpload
            ? (t = !1)
            : "function" == typeof t && (t = t(e)),
          "function" == typeof i && (i = i(e)),
          "function" == typeof a && (a = a(e)),
          "function" == typeof r && (r = r(e)),
          "function" == typeof n && (n = n(e)),
          !(t || i || a || r || n))
        )
          return "";
        var f,
          g = s === !1 ? "" : ' data-url="' + s + '"',
          m = "",
          v = "",
          h = l === !1 ? "" : ' data-key="' + l + '"',
          w = "",
          b = "",
          _ = "",
          C = p._getLayoutTemplate("actions"),
          x = p.fileActionSettings,
          y = p.otherActionButtons.setTokens({ dataKey: h, key: l }),
          T = o ? x.removeClass + " disabled" : x.removeClass;
        return (
          a &&
            (w = p
              ._getLayoutTemplate("actionDelete")
              .setTokens({
                removeClass: T,
                removeIcon: x.removeIcon,
                removeTitle: x.removeTitle,
                dataUrl: g,
                dataKey: h,
                key: l,
              })),
          t &&
            (b = p
              ._getLayoutTemplate("actionUpload")
              .setTokens({
                uploadClass: x.uploadClass,
                uploadIcon: x.uploadIcon,
                uploadTitle: x.uploadTitle,
              })),
          i &&
            ((_ = p
              ._getLayoutTemplate("actionDownload")
              .setTokens({
                downloadClass: x.downloadClass,
                downloadIcon: x.downloadIcon,
                downloadTitle: x.downloadTitle,
                downloadUrl: c || p.initialPreviewDownloadUrl,
              })),
            (_ = _.setTokens({ filename: u, key: l }))),
          r &&
            (m = p
              ._getLayoutTemplate("actionZoom")
              .setTokens({
                zoomClass: x.zoomClass,
                zoomIcon: x.zoomIcon,
                zoomTitle: x.zoomTitle,
              })),
          n &&
            d &&
            ((f = "drag-handle-init " + x.dragClass),
            (v = p
              ._getLayoutTemplate("actionDrag")
              .setTokens({
                dragClass: f,
                dragTitle: x.dragTitle,
                dragIcon: x.dragIcon,
              }))),
          C.setTokens({
            delete: w,
            upload: b,
            download: _,
            zoom: m,
            drag: v,
            other: y,
          })
        );
      },
      _browse: function (e) {
        var t = this;
        (e && e.isDefaultPrevented()) ||
          !t._raise("filebrowse") ||
          (t.isError && !t.isAjaxUpload && t.clear(),
          t.focusCaptionOnBrowse && t.$captionContainer.focus());
      },
      _change: function (i) {
        var a = this;
        if (
          (e(document.body).off("focusin.fileinput focusout.fileinput"),
          !a.changeTriggered)
        ) {
          a._setLoading("show");
          var r,
            n,
            o,
            s,
            l = a.$element,
            d = arguments.length > 1,
            c = a.isAjaxUpload,
            u = d ? arguments[1] : l[0].files,
            p = a.fileManager.count(),
            f = t.isEmpty(l.attr("multiple")),
            g = !c && f ? 1 : a.maxFileCount,
            m = a.maxTotalFileCount,
            v = m > 0 && m > g,
            h = f && p > 0,
            w = function (t, i, r, n) {
              var o = e.extend(!0, {}, a._getOutData(null, {}, {}, u), {
                  id: r,
                  index: n,
                }),
                s = { id: r, index: n, file: i, files: u };
              return (
                (a.isPersistentError = !0),
                a._setLoading("hide"),
                c ? a._showFileError(t, o) : a._showError(t, s)
              );
            },
            b = function (e, t, i) {
              var r = i ? a.msgTotalFilesTooMany : a.msgFilesTooMany;
              (r = r.replace("{m}", t).replace("{n}", e)),
                (a.isError = w(r, null, null, null)),
                a.$captionContainer.removeClass("icon-visible"),
                a._setCaption("", !0),
                a.$container.removeClass("file-input-new file-input-ajax-new");
            };
          if (
            ((a.reader = null),
            a._resetUpload(),
            a._hideFileIcon(),
            a.dropZoneEnabled &&
              a.$container
                .find(".file-drop-zone ." + a.dropZoneTitleClass)
                .remove(),
            c ||
              (u =
                i.target && void 0 === i.target.files
                  ? i.target.value
                    ? [{ name: i.target.value.replace(/^.+\\/, "") }]
                    : []
                  : i.target.files || {}),
            (r = u),
            t.isEmpty(r) || 0 === r.length)
          )
            return c || a.clear(), void a._raise("fileselectnone");
          if (
            (a._resetErrors(),
            (s = r.length),
            (o = c ? a.fileManager.count() + s : s),
            (n = a._getFileCount(o, v ? !1 : void 0)),
            g > 0 && n > g)
          ) {
            if (!a.autoReplace || s > g)
              return void b(a.autoReplace && s > g ? s : n, g);
            n > g && a._resetPreviewThumbs(c);
          } else {
            if (v && ((n = a._getFileCount(o, !0)), m > 0 && n > m)) {
              if (!a.autoReplace || s > g)
                return void b(a.autoReplace && s > m ? s : n, m, !0);
              n > g && a._resetPreviewThumbs(c);
            }
            !c || h
              ? (a._resetPreviewThumbs(!1), h && a.clearFileStack())
              : !c ||
                0 !== p ||
                (a.previewCache.count(!0) && !a.overwriteInitial) ||
                a._resetPreviewThumbs(!0);
          }
          a.readFiles(r), a._setLoading("hide");
        }
      },
      _abort: function (t) {
        var i,
          a = this;
        return a.ajaxAborted &&
          "object" == typeof a.ajaxAborted &&
          void 0 !== a.ajaxAborted.message
          ? ((i = e.extend(!0, {}, a._getOutData(null), t)),
            (i.abortData = a.ajaxAborted.data || {}),
            (i.abortMessage = a.ajaxAborted.message),
            a._setProgress(101, a.$progress, a.msgCancelled),
            a._showFileError(a.ajaxAborted.message, i, "filecustomerror"),
            a.cancel(),
            !0)
          : !!a.ajaxAborted;
      },
      _resetFileStack: function () {
        var t = this,
          i = 0;
        t._getThumbs().each(function () {
          var a = e(this),
            r = a.attr("data-fileindex"),
            n = a.attr("id");
          "-1" !== r &&
            -1 !== r &&
            (t._getThumbFile(a)
              ? a.attr({ "data-fileindex": "-1" })
              : (a.attr({ "data-fileindex": i }), i++),
            t._getZoom(n).attr({ "data-fileindex": a.attr("data-fileindex") }));
        });
      },
      _isFileSelectionValid: function (e) {
        var t = this;
        return (
          (e = e || 0),
          t.required && !t.getFilesCount()
            ? (t.$errorContainer.html(""),
              t._showFileError(t.msgFileRequired),
              !1)
            : t.minFileCount > 0 && t._getFileCount(e) < t.minFileCount
            ? (t._noFilesError({}), !1)
            : !0
        );
      },
      _canPreview: function (e) {
        var i = this;
        if (!(e && i.showPreview && i.$preview && i.$preview.length)) return !1;
        var a,
          r,
          n,
          o,
          s = e.name || "",
          l = e.type || "",
          d = (e.size || 0) / 1e3,
          c = i._parseFileType(l, s),
          u = i.allowedPreviewTypes,
          p = i.allowedPreviewMimeTypes,
          f = i.allowedPreviewExtensions || [],
          g = i.disabledPreviewTypes,
          m = i.disabledPreviewMimeTypes,
          v = i.disabledPreviewExtensions || [],
          h = (i.maxFilePreviewSize && parseFloat(i.maxFilePreviewSize)) || 0,
          w = new RegExp("\\.(" + f.join("|") + ")$", "i"),
          b = new RegExp("\\.(" + v.join("|") + ")$", "i");
        return (
          (a = !u || -1 !== u.indexOf(c)),
          (r = !p || -1 !== p.indexOf(l)),
          (n = !f.length || t.compare(s, w)),
          (o =
            (g && -1 !== g.indexOf(c)) ||
            (m && -1 !== m.indexOf(l)) ||
            (v.length && t.compare(s, b)) ||
            (h && !isNaN(h) && d > h)),
          !o && (a || r || n)
        );
      },
      addToStack: function (e, t) {
        this.fileManager.add(e, t);
      },
      clearFileStack: function () {
        var e = this;
        return (
          e.fileManager.clear(),
          e._initResumableUpload(),
          e.enableResumableUpload
            ? (null === e.showPause && (e.showPause = !0),
              null === e.showCancel && (e.showCancel = !1))
            : ((e.showPause = !1),
              null === e.showCancel && (e.showCancel = !0)),
          e.$element
        );
      },
      getFileStack: function () {
        return this.fileManager.stack;
      },
      getFileList: function () {
        return this.fileManager.list();
      },
      getFilesSize: function () {
        return this.fileManager.getTotalSize();
      },
      getFilesCount: function (e) {
        var t = this,
          i = t.isAjaxUpload ? t.fileManager.count() : t._inputFileCount();
        return e && (i += t.previewCache.count(!0)), t._getFileCount(i);
      },
      _initCapStatus: function (e) {
        var t = this,
          i = t.$caption;
        i.removeClass("is-valid file-processing"),
          e &&
            ("processing" === e
              ? i.addClass("file-processing")
              : i.addClass("is-valid"));
      },
      _setLoading: function (e) {
        var t = this;
        t.$previewStatus.html("hide" === e ? "" : t.msgProcessing),
          t.$container.removeClass("file-thumb-loading"),
          t._initCapStatus("hide" === e ? "" : "processing"),
          "hide" !== e &&
            (t.dropZoneEnabled &&
              t.$container
                .find(".file-drop-zone ." + t.dropZoneTitleClass)
                .remove(),
            t.$container.addClass("file-thumb-loading"));
      },
      _initFileSelected: function () {
        var t = this,
          i = t.$element,
          a = e(document.body),
          r = "focusin.fileinput focusout.fileinput";
        a.length
          ? a
              .off(r)
              .on("focusout.fileinput", function () {
                t._setLoading("show");
              })
              .on("focusin.fileinput", function () {
                setTimeout(function () {
                  i.val() || (t._setLoading("hide"), t._setFileDropZoneTitle()),
                    a.off(r);
                }, 2500);
              })
          : t._setLoading("hide");
      },
      readFiles: function (i) {
        this.reader = new FileReader();
        var a,
          r = this,
          n = r.reader,
          o = r.$previewContainer,
          s = r.$previewStatus,
          l = r.msgLoading,
          d = r.msgProgress,
          c = r.previewInitId,
          u = i.length,
          p = r.fileTypeSettings,
          f = r.allowedFileTypes,
          g = f ? f.length : 0,
          m = r.allowedFileExtensions,
          v = t.isEmpty(m) ? "" : m.join(", "),
          h = function (t, n, o, s, l) {
            var d,
              c = e.extend(!0, {}, r._getOutData(null, {}, {}, i), {
                id: o,
                index: s,
                fileId: l,
              }),
              p = { id: o, index: s, fileId: l, file: n, files: i };
            r._previewDefault(n, !0),
              (d = r._getFrame(o, !0)),
              r._setLoading("hide"),
              r.isAjaxUpload
                ? setTimeout(function () {
                    a(s + 1);
                  }, r.processDelay)
                : (r.unlock(), (u = 0)),
              r.removeFromPreviewOnError && d.length
                ? d.remove()
                : (r._initFileActions(), d.find(".kv-file-upload").remove()),
              (r.isPersistentError = !0),
              (r.isError = r.isAjaxUpload
                ? r._showFileError(t, c)
                : r._showError(t, p)),
              r._updateFileDetails(u);
          };
        r.fileManager.clearImages(),
          e.each(i, function (e, t) {
            var i = r.fileTypeSettings.image;
            i && i(t.type) && r.fileManager.totalImages++;
          }),
          (a = function (w) {
            var b,
              _ = r.$errorContainer,
              C = r.fileManager;
            if (w >= u)
              return (
                r.unlock(),
                r.duplicateErrors.length &&
                  ((b = "<li>" + r.duplicateErrors.join("</li><li>") + "</li>"),
                  0 === _.find("ul").length
                    ? t.setHtml(_, r.errorCloseButton + "<ul>" + b + "</ul>")
                    : _.find("ul").append(b),
                  _.fadeIn(r.fadeDelay),
                  r._handler(_.find(".kv-error-close"), "click", function () {
                    _.fadeOut(r.fadeDelay);
                  }),
                  (r.duplicateErrors = [])),
                r.isAjaxUpload
                  ? (r._raise("filebatchselected", [C.stack]),
                    0 !== C.count() || r.isError || r.reset())
                  : r._raise("filebatchselected", [i]),
                o.removeClass("file-thumb-loading"),
                r._initCapStatus("valid"),
                void s.html("")
              );
            r.lock(!0);
            var x,
              y,
              T,
              P,
              F,
              k,
              S,
              E,
              I,
              A,
              D,
              z,
              $ = i[w],
              j = r._getFileId($),
              U = c + "-" + j,
              M = p.image,
              R = r._getFileName($, ""),
              O = (($ && $.size) || 0) / 1e3,
              B = "",
              L = t.createObjectURL($),
              N = 0,
              Z = "",
              H = !1,
              W = 0,
              q = function () {
                var e = !!C.loadedImages[j],
                  t = d.setTokens({
                    index: w + 1,
                    files: u,
                    percent: 50,
                    name: R,
                  });
                setTimeout(function () {
                  s.html(t), r._updateFileDetails(u), a(w + 1);
                }, r.processDelay),
                  r._raise("fileloaded", [$, U, j, w, n]) && r.isAjaxUpload
                    ? e || C.add($)
                    : e && C.removeFile(j);
              };
            if ($) {
              if (((E = C.getId($)), g > 0))
                for (y = 0; g > y; y++)
                  (k = f[y]),
                    (S = r.msgFileTypes[k] || k),
                    (Z += 0 === y ? S : ", " + S);
              if (R === !1) return void a(w + 1);
              if (0 === R.length)
                return (
                  (T = r.msgInvalidFileName.replace(
                    "{name}",
                    t.htmlEncode(t.getFileName($), "[unknown]")
                  )),
                  void h(T, $, U, w, E)
                );
              if (
                (t.isEmpty(m) ||
                  (B = new RegExp("\\.(" + m.join("|") + ")$", "i")),
                (x = O.toFixed(2)),
                (r.isAjaxUpload && C.exists(E)) || r._getFrame(U, !0).length)
              ) {
                var V = { id: U, index: w, fileId: E, file: $, files: i };
                return (
                  (T = r.msgDuplicateFile.setTokens({ name: R, size: x })),
                  void (r.isAjaxUpload
                    ? (r.duplicateErrors.push(T),
                      (r.isDuplicateError = !0),
                      r._raise("fileduplicateerror", [$, E, R, x, U, w]),
                      a(w + 1),
                      r._updateFileDetails(u))
                    : (r._showError(T, V),
                      r.unlock(),
                      (u = 0),
                      r._clearFileInput(),
                      r.reset(),
                      r._updateFileDetails(u)))
                );
              }
              if (r.maxFileSize > 0 && O > r.maxFileSize)
                return (
                  (T = r.msgSizeTooLarge.setTokens({
                    name: R,
                    size: x,
                    maxSize: r.maxFileSize,
                  })),
                  void h(T, $, U, w, E)
                );
              if (null !== r.minFileSize && O <= t.getNum(r.minFileSize))
                return (
                  (T = r.msgSizeTooSmall.setTokens({
                    name: R,
                    size: x,
                    minSize: r.minFileSize,
                  })),
                  void h(T, $, U, w, E)
                );
              if (!t.isEmpty(f) && t.isArray(f)) {
                for (y = 0; y < f.length; y += 1)
                  (P = f[y]),
                    (A = p[P]),
                    (N +=
                      A && "function" == typeof A && A($.type, t.getFileName($))
                        ? 1
                        : 0);
                if (0 === N)
                  return (
                    (T = r.msgInvalidFileType.setTokens({ name: R, types: Z })),
                    void h(T, $, U, w, E)
                  );
              }
              if (
                0 === N &&
                !t.isEmpty(m) &&
                t.isArray(m) &&
                !t.isEmpty(B) &&
                ((F = t.compare(R, B)),
                (N += t.isEmpty(F) ? 0 : F.length),
                0 === N)
              )
                return (
                  (T = r.msgInvalidFileExtension.setTokens({
                    name: R,
                    extensions: v,
                  })),
                  void h(T, $, U, w, E)
                );
              if (!r._canPreview($))
                return (
                  (I = r.isAjaxUpload && r._raise("filebeforeload", [$, w, n])),
                  r.isAjaxUpload && I && C.add($),
                  r.showPreview &&
                    I &&
                    (o.addClass("file-thumb-loading"),
                    r._initCapStatus("processing"),
                    r._previewDefault($),
                    r._initFileActions()),
                  void setTimeout(function () {
                    I && r._updateFileDetails(u),
                      a(w + 1),
                      r._raise("fileloaded", [$, U, j, w]);
                  }, 10)
                );
              (D = M($.type, R)),
                s.html(l.replace("{index}", w + 1).replace("{files}", u)),
                o.addClass("file-thumb-loading"),
                r._initCapStatus("processing"),
                (n.onerror = function (e) {
                  r._errorHandler(e, R);
                }),
                (n.onload = function (i) {
                  var a,
                    l,
                    d,
                    c,
                    u,
                    f,
                    g = [],
                    m = function () {
                      var e = new FileReader();
                      (e.onerror = function (e) {
                        r._errorHandler(e, R);
                      }),
                        (e.onload = function (e) {
                          return r.isAjaxUpload &&
                            !r._raise("filebeforeload", [$, w, n])
                            ? ((H = !0),
                              r._resetCaption(),
                              n.abort(),
                              s.html(""),
                              o.removeClass("file-thumb-loading"),
                              r._initCapStatus("valid"),
                              void r.enable())
                            : (r._previewFile(w, $, e, L, l),
                              r._initFileActions(),
                              void q());
                        }),
                        e.readAsDataURL($);
                    };
                  if (
                    ((l = { name: R, type: $.type }),
                    e.each(p, function (e, t) {
                      "object" !== e &&
                        "other" !== e &&
                        "function" == typeof t &&
                        t($.type, R) &&
                        W++;
                    }),
                    0 === W)
                  ) {
                    for (
                      d = new Uint8Array(i.target.result), y = 0;
                      y < d.length;
                      y++
                    )
                      (c = d[y].toString(16)), g.push(c);
                    if (
                      ((a = g.join("").toLowerCase().substring(0, 8)),
                      (f = t.getMimeType(a, "", "")),
                      t.isEmpty(f) &&
                        ((u = t.arrayBuffer2String(n.result)),
                        (f = t.isSvg(u)
                          ? "image/svg+xml"
                          : t.getMimeType(a, u, $.type))),
                      (l = { name: R, type: f }),
                      (D = M(f, "")))
                    )
                      return void m(z);
                  }
                  return r.isAjaxUpload &&
                    !r._raise("filebeforeload", [$, w, n])
                    ? ((H = !0),
                      r._resetCaption(),
                      n.abort(),
                      s.html(""),
                      o.removeClass("file-thumb-loading"),
                      r._initCapStatus("valid"),
                      void r.enable())
                    : (r._previewFile(w, $, i, L, l),
                      r._initFileActions(),
                      void q());
                }),
                (n.onprogress = function (e) {
                  if (e.lengthComputable) {
                    var t = (e.loaded / e.total) * 100,
                      i = Math.ceil(t);
                    (T = d.setTokens({
                      index: w + 1,
                      files: u,
                      percent: i,
                      name: R,
                    })),
                      setTimeout(function () {
                        H || s.html(T);
                      }, r.processDelay);
                  }
                }),
                D ? n.readAsDataURL($) : n.readAsArrayBuffer($);
            }
          }),
          a(0),
          r._updateFileDetails(u, !0);
      },
      lock: function (e) {
        var t = this,
          i = t.$container;
        return (
          t._resetErrors(),
          t.disable(),
          !e && t.showCancel && i.find(".fileinput-cancel").show(),
          !e && t.showPause && i.find(".fileinput-pause").show(),
          t._initCapStatus("processing"),
          t._raise("filelock", [t.fileManager.stack, t._getExtraData()]),
          t.$element
        );
      },
      unlock: function (e) {
        var t = this,
          i = t.$container;
        return (
          void 0 === e && (e = !0),
          t.enable(),
          i.removeClass("is-locked"),
          t.showCancel && i.find(".fileinput-cancel").hide(),
          t.showPause && i.find(".fileinput-pause").hide(),
          e && t._resetFileStack(),
          t._initCapStatus(),
          t._raise("fileunlock", [t.fileManager.stack, t._getExtraData()]),
          t.$element
        );
      },
      resume: function () {
        var e = this,
          t = e.fileManager,
          i = !1,
          a = e.resumableManager;
        return (
          (t.bpsLog = []),
          (t.bps = 0),
          e.enableResumableUpload
            ? (e.paused
                ? e._toggleResumableProgress(
                    e.progressPauseTemplate,
                    e.msgUploadResume
                  )
                : (i = !0),
              (e.paused = !1),
              i &&
                e._toggleResumableProgress(
                  e.progressInfoTemplate,
                  e.msgUploadBegin
                ),
              setTimeout(function () {
                a.upload();
              }, e.processDelay),
              e.$element)
            : e.$element
        );
      },
      paste: function (e) {
        var t = this,
          i = e.originalEvent,
          a = (i.clipboardData && i.clipboardData.files) || null;
        return a && t._dropFiles(e, a), t.$element;
      },
      pause: function () {
        var t,
          i = this,
          a = i.resumableManager,
          r = i.ajaxRequests,
          n = r.length,
          o = a.getProgress(),
          s = i.fileActionSettings,
          l = i.taskManager,
          d = l.getPool(a.id);
        if (!i.enableResumableUpload) return i.$element;
        if (
          (d && d.cancel(),
          i._raise("fileuploadpaused", [i.fileManager, a]),
          n > 0)
        )
          for (t = 0; n > t; t += 1) (i.paused = !0), r[t].abort();
        return (
          i.showPreview &&
            i._getThumbs().each(function () {
              var t,
                a = e(this),
                r = i._getLayoutTemplate("stats"),
                n = a.find(".file-upload-indicator");
              a.removeClass("file-uploading"),
                n.attr("title") === s.indicatorLoadingTitle &&
                  (i._setThumbStatus(a, "Paused"),
                  (t = r.setTokens({
                    pendingTime: i.msgPaused,
                    uploadSpeed: "",
                  })),
                  (i.paused = !0),
                  i._setProgress(
                    o,
                    a.find(".file-thumb-progress"),
                    o + "%",
                    t
                  )),
                i._getThumbFile(a) ||
                  a
                    .find(".kv-file-remove")
                    .removeClass("disabled")
                    .removeAttr("disabled");
            }),
          i._setProgress(101, i.$progress, i.msgPaused),
          i.$element
        );
      },
      cancel: function () {
        var t,
          i = this,
          a = i.ajaxRequests,
          r = i.resumableManager,
          n = i.taskManager,
          o = r ? n.getPool(r.id) : void 0,
          s = a.length;
        if (
          (i.enableResumableUpload && o
            ? (o.cancel().done(function () {
                i._setProgressCancelled();
              }),
              r.reset(),
              i._raise("fileuploadcancelled", [i.fileManager, r]))
            : i._raise("fileuploadcancelled", [i.fileManager]),
          i._initAjax(),
          s > 0)
        )
          for (t = 0; s > t; t += 1) (i.cancelling = !0), a[t].abort();
        return (
          i._getThumbs().each(function () {
            var t = e(this),
              a = t.find(".file-thumb-progress");
            t.removeClass("file-uploading"),
              i._setProgress(0, a),
              a.hide(),
              i._getThumbFile(t) ||
                (t
                  .find(".kv-file-upload")
                  .removeClass("disabled")
                  .removeAttr("disabled"),
                t
                  .find(".kv-file-remove")
                  .removeClass("disabled")
                  .removeAttr("disabled")),
              i.unlock();
          }),
          setTimeout(function () {
            i._setProgressCancelled();
          }, i.processDelay),
          i.$element
        );
      },
      clear: function () {
        var i,
          a = this;
        if (a._raise("fileclear"))
          return (
            a.$btnUpload.removeAttr("disabled"),
            a
              ._getThumbs()
              .find("video,audio,img")
              .each(function () {
                t.cleanMemory(e(this));
              }),
            a._clearFileInput(),
            a._resetUpload(),
            a.clearFileStack(),
            (a.isDuplicateError = !1),
            (a.isPersistentError = !1),
            a._resetErrors(!0),
            a._hasInitialPreview()
              ? (a._showFileIcon(),
                a._resetPreview(),
                a._initPreviewActions(),
                a.$container.removeClass("file-input-new"))
              : (a._getThumbs().each(function () {
                  a._clearObjects(e(this));
                }),
                a.isAjaxUpload && (a.previewCache.data = {}),
                a.$preview.html(""),
                (i =
                  !a.overwriteInitial && a.initialCaption.length > 0
                    ? a.initialCaption
                    : ""),
                a.$caption.attr("title", "").val(i),
                t.addCss(a.$container, "file-input-new"),
                a._validateDefaultPreview()),
            0 === a.$container.find(t.FRAMES).length &&
              (a._initCaption() ||
                a.$captionContainer.removeClass("icon-visible")),
            a._hideFileIcon(),
            a.focusCaptionOnClear && a.$captionContainer.focus(),
            a._setFileDropZoneTitle(),
            a._raise("filecleared"),
            a.$element
          );
      },
      reset: function () {
        var e = this;
        if (e._raise("filereset"))
          return (
            (e.lastProgress = 0),
            e._resetPreview(),
            e.$container.find(".fileinput-filename").text(""),
            t.addCss(e.$container, "file-input-new"),
            e.getFrames().length && e.$container.removeClass("file-input-new"),
            e.clearFileStack(),
            e._setFileDropZoneTitle(),
            e.$element
          );
      },
      disable: function () {
        var e = this,
          i = e.$container;
        return (
          (e.isDisabled = !0),
          e._raise("filedisabled"),
          e.$element.attr("disabled", "disabled"),
          i.addClass("is-locked"),
          t.addCss(i.find(".btn-file"), "disabled"),
          i.find(".kv-fileinput-caption").addClass("file-caption-disabled"),
          i
            .find(
              ".fileinput-remove, .fileinput-upload, .file-preview-frame button"
            )
            .attr("disabled", !0),
          e._initDragDrop(),
          e.$element
        );
      },
      enable: function () {
        var e = this,
          t = e.$container;
        return (
          (e.isDisabled = !1),
          e._raise("fileenabled"),
          e.$element.removeAttr("disabled"),
          t.removeClass("is-locked"),
          t.find(".kv-fileinput-caption").removeClass("file-caption-disabled"),
          t
            .find(
              ".fileinput-remove, .fileinput-upload, .file-preview-frame button"
            )
            .removeAttr("disabled"),
          t.find(".btn-file").removeClass("disabled"),
          e._initDragDrop(),
          e.$element
        );
      },
      upload: function () {
        var i,
          a,
          r = this,
          n = r.fileManager,
          o = n.count(),
          s = !e.isEmptyObject(r._getExtraData());
        return (
          (n.bpsLog = []),
          (n.bps = 0),
          r.isAjaxUpload && !r.isDisabled && r._isFileSelectionValid(o)
            ? ((r.lastProgress = 0),
              r._resetUpload(),
              0 !== o || s
                ? ((r.cancelling = !1),
                  r._showProgress(),
                  r.lock(),
                  0 === o && s
                    ? (r._setProgress(2), void r._uploadExtraOnly())
                    : r.enableResumableUpload
                    ? r.resume()
                    : ((r.uploadAsync || r.enableResumableUpload) &&
                        ((a = r._getOutData(null)),
                        r._raise("filebatchpreupload", [a]),
                        (r.fileBatchCompleted = !1),
                        (r.uploadCache = []),
                        e.each(r.getFileStack(), function (e) {
                          var t = r._getThumbId(e);
                          r.uploadCache.push({
                            id: t,
                            content: null,
                            config: null,
                            tags: null,
                            append: !0,
                          });
                        }),
                        r.$preview
                          .find(".file-preview-initial")
                          .removeClass(t.SORT_CSS),
                        r._initSortable()),
                      r._setProgress(2),
                      (r.hasInitData = !1),
                      r.uploadAsync
                        ? ((i = 0),
                          void e.each(r.getFileStack(), function (e) {
                            r._uploadSingle(i, e, !0), i++;
                          }))
                        : (r._uploadBatch(), r.$element)))
                : void r._showFileError(r.msgUploadEmpty))
            : void 0
        );
      },
      destroy: function () {
        var t = this,
          i = t.$form,
          a = t.$container,
          r = t.$element,
          n = t.namespace;
        return (
          e(document).off(n),
          e(window).off(n),
          i && i.length && i.off(n),
          t.isAjaxUpload && t._clearFileInput(),
          t._cleanup(),
          t._initPreviewCache(),
          r.insertBefore(a).off(n).removeData(),
          a.off().remove(),
          r
        );
      },
      refresh: function (i) {
        var a = this,
          r = a.$element;
        return (
          (i =
            "object" != typeof i || t.isEmpty(i)
              ? a.options
              : e.extend(!0, {}, a.options, i)),
          a._init(i, !0),
          a._listen(),
          r
        );
      },
      zoom: function (e) {
        var t = this,
          i = t._getFrame(e);
        t._showModal(i);
      },
      getExif: function (e) {
        var t = this,
          i = t._getFrame(e);
        return (i && i.data("exif")) || null;
      },
      getFrames: function (i) {
        var a,
          r = this;
        return (
          (i = i || ""),
          (a = r.$preview.find(t.FRAMES + i)),
          r.reversePreviewOrder && (a = e(a.get().reverse())),
          a
        );
      },
      getPreview: function () {
        var e = this;
        return {
          content: e.initialPreview,
          config: e.initialPreviewConfig,
          tags: e.initialPreviewThumbTags,
        };
      },
    }),
    (e.fn.fileinput = function (a) {
      if (t.hasFileAPISupport() || t.isIE(9)) {
        var r = Array.apply(null, arguments),
          n = [];
        switch (
          (r.shift(),
          this.each(function () {
            var o,
              s = e(this),
              l = s.data("fileinput"),
              d = "object" == typeof a && a,
              c = d.theme || s.data("theme"),
              u = {},
              p = {},
              f =
                d.language ||
                s.data("language") ||
                e.fn.fileinput.defaults.language ||
                "en";
            l ||
              (c && (p = e.fn.fileinputThemes[c] || {}),
              "en" === f ||
                t.isEmpty(e.fn.fileinputLocales[f]) ||
                (u = e.fn.fileinputLocales[f] || {}),
              (o = e.extend(
                !0,
                {},
                e.fn.fileinput.defaults,
                p,
                e.fn.fileinputLocales.en,
                u,
                d,
                s.data()
              )),
              (l = new i(this, o)),
              s.data("fileinput", l)),
              "string" == typeof a && n.push(l[a].apply(l, r));
          }),
          n.length)
        ) {
          case 0:
            return this;
          case 1:
            return n[0];
          default:
            return n;
        }
      }
    });
  var a =
      'class="kv-preview-data file-preview-pdf" src="{renderer}?file={data}" {style}',
    r = "btn btn-sm btn-kv " + t.defaultButtonCss(),
    n = "btn " + t.defaultButtonCss(!0);
  (e.fn.fileinput.defaults = {
    language: "en",
    showCaption: !0,
    showBrowse: !0,
    showPreview: !0,
    showRemove: !0,
    showUpload: !0,
    showUploadStats: !0,
    showCancel: null,
    showPause: null,
    showClose: !0,
    showUploadedThumbs: !0,
    showConsoleLogs: !1,
    browseOnZoneClick: !1,
    autoReplace: !1,
    autoOrientImage: function () {
      var e = window.navigator.userAgent,
        t = !!e.match(/WebKit/i),
        i = !!e.match(/iP(od|ad|hone)/i),
        a = i && t && !e.match(/CriOS/i);
      return !a;
    },
    autoOrientImageInitial: !0,
    required: !1,
    rtl: !1,
    hideThumbnailContent: !1,
    encodeUrl: !0,
    focusCaptionOnBrowse: !0,
    focusCaptionOnClear: !0,
    generateFileId: null,
    previewClass: "",
    captionClass: "",
    frameClass: "krajee-default",
    mainClass: "",
    mainTemplate: null,
    fileSizeGetter: null,
    initialCaption: "",
    initialPreview: [],
    initialPreviewDelimiter: "*$$*",
    initialPreviewAsData: !1,
    initialPreviewFileType: "image",
    initialPreviewConfig: [],
    initialPreviewThumbTags: [],
    previewThumbTags: {},
    initialPreviewShowDelete: !0,
    initialPreviewDownloadUrl: "",
    removeFromPreviewOnError: !1,
    deleteUrl: "",
    deleteExtraData: {},
    overwriteInitial: !0,
    sanitizeZoomCache: function (e) {
      var i = t.createElement(e);
      return (
        i
          .find("input,textarea,select,datalist,form,.file-thumbnail-footer")
          .remove(),
        i.html()
      );
    },
    previewZoomButtonIcons: {
      prev: '<i class="bi-caret-left-fill"></i>',
      next: '<i class="bi-caret-right-fill"></i>',
      toggleheader: '<i class="bi-arrows-expand"></i>',
      fullscreen: '<i class="bi-arrows-fullscreen"></i>',
      borderless: '<i class="bi-arrows-angle-expand"></i>',
      close: '<i class="bi-x-lg"></i>',
    },
    previewZoomButtonClasses: {
      prev: "btn btn-navigate",
      next: "btn btn-navigate",
      toggleheader: r,
      fullscreen: r,
      borderless: r,
      close: r,
    },
    previewTemplates: {},
    previewContentTemplates: {},
    preferIconicPreview: !1,
    preferIconicZoomPreview: !1,
    allowedFileTypes: null,
    allowedFileExtensions: null,
    allowedPreviewTypes: void 0,
    allowedPreviewMimeTypes: null,
    allowedPreviewExtensions: null,
    disabledPreviewTypes: void 0,
    disabledPreviewExtensions: [
      "msi",
      "exe",
      "com",
      "zip",
      "rar",
      "app",
      "vb",
      "scr",
    ],
    disabledPreviewMimeTypes: null,
    defaultPreviewContent: null,
    customLayoutTags: {},
    customPreviewTags: {},
    previewFileIcon: '<i class="bi-file-earmark-fill"></i>',
    previewFileIconClass: "file-other-icon",
    previewFileIconSettings: {},
    previewFileExtSettings: {},
    buttonLabelClass: "hidden-xs",
    browseIcon: '<i class="bi-folder2-open"></i> ',
    browseClass: "btn btn-primary",
    removeIcon: '<i class="bi-trash"></i>',
    removeClass: n,
    cancelIcon: '<i class="bi-slash-circle"></i>',
    cancelClass: n,
    pauseIcon: '<i class="bi-pause-fill"></i>',
    pauseClass: n,
    uploadIcon: '<i class="bi-upload"></i>',
    uploadClass: n,
    uploadUrl: null,
    uploadUrlThumb: null,
    uploadAsync: !0,
    uploadParamNames: {
      chunkCount: "chunkCount",
      chunkIndex: "chunkIndex",
      chunkSize: "chunkSize",
      chunkSizeStart: "chunkSizeStart",
      chunksUploaded: "chunksUploaded",
      fileBlob: "fileBlob",
      fileId: "fileId",
      fileName: "fileName",
      fileRelativePath: "fileRelativePath",
      fileSize: "fileSize",
      retryCount: "retryCount",
    },
    maxAjaxThreads: 5,
    fadeDelay: 800,
    processDelay: 100,
    bitrateUpdateDelay: 500,
    queueDelay: 10,
    progressDelay: 0,
    enableResumableUpload: !1,
    resumableUploadOptions: {
      fallback: null,
      testUrl: null,
      chunkSize: 2048,
      maxThreads: 4,
      maxRetries: 3,
      showErrorLog: !0,
      retainErrorHistory: !0,
      skipErrorsAndProceed: !1,
    },
    uploadExtraData: {},
    zoomModalHeight: 480,
    minImageWidth: null,
    minImageHeight: null,
    maxImageWidth: null,
    maxImageHeight: null,
    resizeImage: !1,
    resizePreference: "width",
    resizeQuality: 0.92,
    resizeDefaultImageType: "image/jpeg",
    resizeIfSizeMoreThan: 0,
    minFileSize: -1,
    maxFileSize: 0,
    maxFilePreviewSize: 25600,
    minFileCount: 0,
    maxFileCount: 0,
    maxTotalFileCount: 0,
    validateInitialCount: !1,
    msgValidationErrorClass: "text-danger",
    msgValidationErrorIcon: '<i class="bi-exclamation-circle-fill"></i> ',
    msgErrorClass: "file-error-message",
    progressThumbClass:
      "progress-bar progress-bar-striped active progress-bar-animated",
    progressClass:
      "progress-bar bg-success progress-bar-success progress-bar-striped active progress-bar-animated",
    progressInfoClass:
      "progress-bar bg-info progress-bar-info progress-bar-striped active progress-bar-animated",
    progressCompleteClass: "progress-bar bg-success progress-bar-success",
    progressPauseClass:
      "progress-bar bg-primary progress-bar-primary progress-bar-striped active progress-bar-animated",
    progressErrorClass: "progress-bar bg-danger progress-bar-danger",
    progressUploadThreshold: 99,
    previewFileType: "image",
    elCaptionContainer: null,
    elCaptionText: null,
    elPreviewContainer: null,
    elPreviewImage: null,
    elPreviewStatus: null,
    elErrorContainer: null,
    errorCloseButton: void 0,
    slugCallback: null,
    dropZoneEnabled: !0,
    dropZoneTitleClass: "file-drop-zone-title",
    fileActionSettings: {},
    otherActionButtons: "",
    textEncoding: "UTF-8",
    preProcessUpload: null,
    ajaxSettings: {},
    ajaxDeleteSettings: {},
    showAjaxErrorDetails: !0,
    mergeAjaxCallbacks: !1,
    mergeAjaxDeleteCallbacks: !1,
    retryErrorUploads: !0,
    reversePreviewOrder: !1,
    usePdfRenderer: function () {
      var e = !!window.MSInputMethodContext && !!document.documentMode;
      return !!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/i) || e;
    },
    pdfRendererUrl: "",
    pdfRendererTemplate: "<iframe " + a + "></iframe>",
    tabIndexConfig: {
      browse: 500,
      remove: 500,
      upload: 500,
      cancel: null,
      pause: null,
      modal: -1,
    },
  }),
    (e.fn.fileinputLocales.en = {
      fileSingle: "file",
      filePlural: "files",
      browseLabel: "Browse &hellip;",
      removeLabel: "Remove",
      removeTitle: "Clear all unprocessed files",
      cancelLabel: "Cancel",
      cancelTitle: "Abort ongoing upload",
      pauseLabel: "Pause",
      pauseTitle: "Pause ongoing upload",
      uploadLabel: "Upload",
      uploadTitle: "Upload selected files",
      msgNo: "No",
      msgNoFilesSelected: "No files selected",
      msgCancelled: "Cancelled",
      msgPaused: "Paused",
      msgPlaceholder: "Select {files} ...",
      msgZoomModalHeading: "Detailed Preview",
      msgFileRequired: "You must select a file to upload.",
      msgSizeTooSmall:
        'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',
      msgSizeTooLarge:
        'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
      msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
      msgFilesTooMany:
        "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
      msgTotalFilesTooMany:
        "You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).",
      msgFileNotFound: 'File "{name}" not found!',
      msgFileSecured:
        'Security restrictions prevent reading the file "{name}".',
      msgFileNotReadable: 'File "{name}" is not readable.',
      msgFilePreviewAborted: 'File preview aborted for "{name}".',
      msgFilePreviewError: 'An error occurred while reading the file "{name}".',
      msgInvalidFileName:
        'Invalid or unsupported characters in file name "{name}".',
      msgInvalidFileType:
        'Invalid type for file "{name}". Only "{types}" files are supported.',
      msgInvalidFileExtension:
        'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
      msgFileTypes: {
        image: "image",
        html: "HTML",
        text: "text",
        video: "video",
        audio: "audio",
        flash: "flash",
        pdf: "PDF",
        object: "object",
      },
      msgUploadAborted: "The file upload was aborted",
      msgUploadThreshold: "Processing &hellip;",
      msgUploadBegin: "Initializing &hellip;",
      msgUploadEnd: "Done",
      msgUploadResume: "Resuming upload &hellip;",
      msgUploadEmpty: "No valid data available for upload.",
      msgUploadError: "Upload Error",
      msgDeleteError: "Delete Error",
      msgProgressError: "Error",
      msgValidationError: "Validation Error",
      msgLoading: "Loading file {index} of {files} &hellip;",
      msgProgress:
        "Loading file {index} of {files} - {name} - {percent}% completed.",
      msgSelected: "{n} {files} selected",
      msgProcessing: "Processing ...",
      msgFoldersNotAllowed:
        "Drag & drop files only! {n} folder(s) dropped were skipped.",
      msgImageWidthSmall:
        'Width of image file "{name}" must be at least {size} px.',
      msgImageHeightSmall:
        'Height of image file "{name}" must be at least {size} px.',
      msgImageWidthLarge:
        'Width of image file "{name}" cannot exceed {size} px.',
      msgImageHeightLarge:
        'Height of image file "{name}" cannot exceed {size} px.',
      msgImageResizeError: "Could not get the image dimensions to resize.",
      msgImageResizeException:
        "Error while resizing the image.<pre>{errors}</pre>",
      msgAjaxError:
        "Something went wrong with the {operation} operation. Please try again later!",
      msgAjaxProgressError: "{operation} failed",
      msgDuplicateFile:
        'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
      msgResumableUploadRetriesExceeded:
        "Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>",
      msgPendingTime: "{time} remaining",
      msgCalculatingTime: "calculating time remaining",
      ajaxOperations: {
        deleteThumb: "file delete",
        uploadThumb: "file upload",
        uploadBatch: "batch file upload",
        uploadExtra: "form data upload",
      },
      dropZoneTitle: "Drag & drop files here &hellip;",
      dropZoneClickTitle: "<br>(or click to select {files})",
      previewZoomButtonTitles: {
        prev: "View previous file",
        next: "View next file",
        toggleheader: "Toggle header",
        fullscreen: "Toggle full screen",
        borderless: "Toggle borderless mode",
        close: "Close detailed preview",
      },
    }),
    (e.fn.fileinput.Constructor = i),
    e(document).ready(function () {
      var t = e("input.file[type=file]");
      t.length && t.fileinput();
    });
});
