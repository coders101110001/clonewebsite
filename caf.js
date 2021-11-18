if (!window['googleNDT_']) {
    window['googleNDT_'] = (new Date()).getTime();
}(function() {
    window.googleAltLoader = 3;
    var sffeData_ = {
        service_host: "www.google.com",
        hash: "1101813967959577421",
        packages: "domains",
        module: "ads",
        version: "1",
        m: {
            cei: "17300002,17300769,17300771,17300841,17300863,17300866",
            ah: true,
            uatm: 500,
            ecfc2: true,
            llrm: 1000,
            llel: "Lio=",
            lldl: "bS5zZWFycy5jb20=",
            abf: {
                "_blockAdRequestOnUach": true,
                "_googEnableQup": true,
                "_googErrorTurnOffPersonalization": true,
                "_googTimeoutTurnOffPersonalization": true,
                "enableEnhancedTargetingRsonc": true
            }
        }
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this);

    function ea(a, b) {
        if (b) a: {
            var c = da;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    ea("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.Kd = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.Kd
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    ea("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(aa(this))
                }
            })
        }
        return a
    });

    function ia(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function p(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function ja(a) {
        if (!(a instanceof Array)) {
            a = p(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ka = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        la = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = la;

    function ra(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Wf = b.prototype
    }

    function sa() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    ea("Promise", function(a) {
        function b(g) {
            this.B = 0;
            this.Oa = void 0;
            this.ta = [];
            this.qd = !1;
            var h = this.Wb();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.T = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.cd = function(g) {
            if (null == this.T) {
                this.T = [];
                var h = this;
                this.dd(function() {
                    h.Me()
                })
            }
            this.T.push(g)
        };
        var e = da.setTimeout;
        c.prototype.dd = function(g) {
            e(g, 0)
        };
        c.prototype.Me = function() {
            for (; this.T && this.T.length;) {
                var g = this.T;
                this.T = [];
                for (var h =
                        0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (m) {
                        this.$d(m)
                    }
                }
            }
            this.T = null
        };
        c.prototype.$d = function(g) {
            this.dd(function() {
                throw g;
            })
        };
        b.prototype.Wb = function() {
            function g(m) {
                return function(q) {
                    k || (k = !0, m.call(h, q))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.Hf),
                reject: g(this.Hc)
            }
        };
        b.prototype.Hf = function(g) {
            if (g === this) this.Hc(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.Qf(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.Gf(g) : this.od(g)
            }
        };
        b.prototype.Gf = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.Hc(k);
                return
            }
            "function" == typeof h ? this.Rf(h, g) : this.od(g)
        };
        b.prototype.Hc = function(g) {
            this.Ed(2, g)
        };
        b.prototype.od = function(g) {
            this.Ed(1, g)
        };
        b.prototype.Ed = function(g, h) {
            if (0 != this.B) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.B);
            this.B = g;
            this.Oa = h;
            2 === this.B && this.Pf();
            this.Ne()
        };
        b.prototype.Pf = function() {
            var g = this;
            e(function() {
                if (g.zf()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.Oa)
                }
            }, 1)
        };
        b.prototype.zf = function() {
            if (this.qd) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.Oa;
            return k(g)
        };
        b.prototype.Ne = function() {
            if (null != this.ta) {
                for (var g =
                        0; g < this.ta.length; ++g) f.cd(this.ta[g]);
                this.ta = null
            }
        };
        var f = new c;
        b.prototype.Qf = function(g) {
            var h = this.Wb();
            g.Za(h.resolve, h.reject)
        };
        b.prototype.Rf = function(g, h) {
            var k = this.Wb();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (m) {
                k.reject(m)
            }
        };
        b.prototype.then = function(g, h) {
            function k(w, r) {
                return "function" == typeof w ? function(x) {
                    try {
                        m(w(x))
                    } catch (u) {
                        q(u)
                    }
                } : r
            }
            var m, q, n = new b(function(w, r) {
                m = w;
                q = r
            });
            this.Za(k(g, m), k(h, q));
            return n
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Za = function(g,
            h) {
            function k() {
                switch (m.B) {
                    case 1:
                        g(m.Oa);
                        break;
                    case 2:
                        h(m.Oa);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.B);
                }
            }
            var m = this;
            null == this.ta ? f.cd(k) : this.ta.push(k);
            this.qd = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var m = p(g), q = m.next(); !q.done; q = m.next()) d(q.value).Za(h, k)
            })
        };
        b.all = function(g) {
            var h = p(g),
                k = h.next();
            return k.done ? d([]) : new b(function(m, q) {
                function n(x) {
                    return function(u) {
                        w[x] = u;
                        r--;
                        0 == r && m(w)
                    }
                }
                var w = [],
                    r = 0;
                do w.push(void 0), r++, d(k.value).Za(n(w.length - 1), q), k = h.next(); while (!k.done)
            })
        };
        return b
    });

    function ta(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    ea("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    ea("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ta(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });

    function ua(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    ea("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b
            })
        }
    });
    ea("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ea("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    ea("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ta(this, b, "includes").indexOf(b, c || 0)
        }
    });
    ea("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    var t = this || self;

    function va() {}

    function wa(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function xa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ya(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Wf = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.pg = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function za(a) {
        return a
    };
    var Aa = null,
        Ba = null,
        Ca = null,
        Da = null,
        Ea = null;

    function Fa() {
        var a = {};
        return window.ad_json ? window.ad_json : "undefined" != typeof ad_json && ad_json ? ad_json : a
    }

    function Ga(a) {
        Aa || (Aa = Fa().gd || null);
        return Aa && Aa[a] || {}
    }

    function Ia() {
        this.data = Ga("ff")
    }

    function Ja() {
        var a = Ba;
        a || (a = new Ia, Fa().gd && (Ba = a));
        return a
    }

    function Ka() {
        var a = Ja();
        return null != a.data.ini ? a.data.ini : -1
    }
    Ia.prototype.fb = function() {
        return !!this.data.eccp
    };
    Ia.prototype.eb = function() {
        return !!this.data.ecc
    };

    function La() {
        this.data = Ga("cd")
    }

    function Ma() {
        var a = Ca;
        a || (a = new La, Fa().gd && (Ca = a));
        return a
    }

    function Na(a) {
        return a.data.pid || ""
    }

    function Oa() {
        this.data = Ga("pc")
    }

    function Pa() {
        var a = Da;
        a || (a = new Oa, Fa().gd && (Da = a));
        return a
    }

    function Qa() {
        this.data = Ga("dc")
    }

    function Ra() {
        var a = Ea;
        a || (a = new Qa, Fa().gd && (Ea = a));
        return a
    };
    var Sa;

    function Ta(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var Wa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Xa = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Ya = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        };

    function Za(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function $a(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function ab(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    };
    var bb;

    function cb() {
        if (void 0 === bb) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) try {
                a = b.createPolicy("goog#html", {
                    createHTML: za,
                    createScript: za,
                    createScriptURL: za
                })
            } catch (c) {
                t.console && t.console.error(c.message)
            }
            bb = a
        }
        return bb
    };

    function db(a, b) {
        this.Fd = a === eb && b || "";
        this.Ld = fb
    }
    db.prototype.ca = !0;
    db.prototype.ba = function() {
        return this.Fd
    };

    function gb(a) {
        return a instanceof db && a.constructor === db && a.Ld === fb ? a.Fd : "type_error:Const"
    }
    var fb = {},
        eb = {};
    var hb = /<[^>]*>|&[^;]+;/g;

    function kb(a, b) {
        return b ? a.replace(hb, "") : a
    }
    var lb = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
        mb = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"),
        nb = /^http:\/\/.*/,
        ob = /\s+/,
        pb = /[\d\u06f0-\u06f9]/;

    function qb(a, b) {
        this.Gc = b === rb ? a : ""
    }
    l = qb.prototype;
    l.ca = !0;
    l.ba = function() {
        return this.Gc.toString()
    };
    l.lc = !0;
    l.hb = function() {
        return 1
    };

    function sb(a, b, c) {
        a = tb.exec(ub(a).toString());
        var d = a[3] || "";
        return vb(a[1] + wb("?", a[2] || "", b) + wb("#", d, c))
    }
    l.toString = function() {
        return this.Gc + ""
    };

    function ub(a) {
        return a instanceof qb && a.constructor === qb ? a.Gc : "type_error:TrustedResourceUrl"
    }

    function xb(a) {
        var b = {},
            c = gb(a);
        if (!yb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(zb, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof db ? gb(d) : encodeURIComponent(String(d))
        });
        return vb(a)
    }
    var zb = /%{(\w+)}/g,
        yb = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        tb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;

    function Ab(a, b) {
        return sb(xb(a), b, void 0)
    }
    var rb = {};

    function vb(a) {
        var b = cb();
        a = b ? b.createScriptURL(a) : a;
        return new qb(a, rb)
    }

    function wb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var Bb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Cb = /&/g,
        Db = /</g,
        Eb = />/g,
        Fb = /"/g,
        Gb = /'/g,
        Hb = /\x00/g,
        Ib = /[\x00&<>"']/;

    function Jb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Kb(a, b) {
        this.Fc = b === Lb ? a : ""
    }
    l = Kb.prototype;
    l.ca = !0;
    l.ba = function() {
        return this.Fc.toString()
    };
    l.lc = !0;
    l.hb = function() {
        return 1
    };
    l.toString = function() {
        return this.Fc.toString()
    };

    function Mb(a) {
        return a instanceof Kb && a.constructor === Kb ? a.Fc : "type_error:SafeUrl"
    }
    var Nb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Lb = {};
    var Ob = {};

    function Pb(a, b) {
        this.Ec = b === Ob ? a : "";
        this.ca = !0
    }
    Pb.prototype.ba = function() {
        return this.Ec
    };
    Pb.prototype.toString = function() {
        return this.Ec.toString()
    };
    var Qb = {};

    function Rb(a, b) {
        this.Dc = b === Qb ? a : "";
        this.ca = !0
    }
    Rb.prototype.ba = function() {
        return this.Dc
    };
    Rb.prototype.toString = function() {
        return this.Dc.toString()
    };
    var Sb;
    a: {
        var Wb = t.navigator;
        if (Wb) {
            var Xb = Wb.userAgent;
            if (Xb) {
                Sb = Xb;
                break a
            }
        }
        Sb = ""
    }

    function Yb(a) {
        return -1 != Sb.indexOf(a)
    };
    var Zb = {};

    function $b(a, b, c) {
        this.Cc = c === Zb ? a : "";
        this.Ie = b;
        this.ca = this.lc = !0
    }
    $b.prototype.hb = function() {
        return this.Ie
    };
    $b.prototype.ba = function() {
        return this.Cc.toString()
    };
    $b.prototype.toString = function() {
        return this.Cc.toString()
    };

    function ac(a) {
        return a instanceof $b && a.constructor === $b ? a.Cc : "type_error:SafeHtml"
    }

    function bc(a) {
        if (a instanceof $b) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.lc && (c = a.hb());
        a = b && a.ca ? a.ba() : String(a);
        Ib.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Cb, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Db, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Eb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Fb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Gb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Hb, "&#0;")));
        return cc(a, c)
    }

    function cc(a, b) {
        var c = cb();
        a = c ? c.createHTML(a) : a;
        return new $b(a, b, Zb)
    }
    var dc = new $b(t.trustedTypes && t.trustedTypes.emptyHTML || "", 0, Zb);
    var ec = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ac(dc);
        return !b.parentElement
    });

    function fc(a, b) {
        b instanceof Kb || b instanceof Kb || (b = "object" == typeof b && b.ca ? b.ba() : String(b), Nb.test(b) || (b = "about:invalid#zClosurez"), b = new Kb(b, Lb));
        a.href = Mb(b)
    }

    function gc(a, b) {
        a.src = ub(b);
        (b = hc("script[nonce]", a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    }
    var ic = /^[\w+/_-]+[=]{0,2}$/;

    function hc(a, b) {
        b = (b || t).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && ic.test(a) ? a : "" : ""
    };

    function jc(a) {
        return function() {
            a.onload = a.onerror = null
        }
    }

    function kc(a) {
        var b = new Image;
        b.onload = b.onerror = jc(b);
        b.src = a
    }

    function lc() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };

    function mc(a) {
        if (null != a) return a
    }

    function nc() {
        return "object" == typeof sffeData_
    }

    function oc(a, b) {
        b = b || (nc() ? sffeData_ : {});
        return mc(b[a])
    }

    function pc(a) {
        var b = qc();
        b = b || (nc() ? sffeData_ : {});
        a = b[a];
        return null != a ? a : void 0
    }

    function rc(a, b) {
        b = b || (nc() ? sffeData_ : {});
        return !!b[a]
    }

    function qc() {
        return (nc() ? sffeData_ : {}).m || {}
    }

    function sc(a) {
        return rc(a, qc().abf)
    };
    var tc = (rc("ah", qc()) ? "https:" : "") + "//www.google.com",
        uc = null;

    function vc() {
        uc || (uc = wc());
        return uc
    }

    function wc() {
        var a = mc(t.gwsBase_);
        return a || (a = oc("gws_host")) ? a : (a = oc("service_host")) ? (rc("ah", qc()) ? "https://" : "//") + a : tc
    };
    var xc = window.navigator ? window.navigator.userAgent : "";

    function yc() {
        var a = zc(Ac);
        return -1 !== a ? 67 < a : !Bc()
    }

    function Bc() {
        return 0 != xc.indexOf("Opera") && (-1 != xc.indexOf("MSIE") || -1 != xc.indexOf("Trident"))
    }
    var Ac = /Firefox\/(\d+)\./,
        Cc = /Version\/(\d+)\..*Safari/,
        Dc = /(?:iPhone|iPod|iPad).*AppleWebKit\/(\d+)(?!.*Version)/;

    function zc(a) {
        a = (a = a.exec(xc)) ? a[1] : "";
        return 0 < a.length && (a = parseInt(a, 10)) ? a : -1
    }

    function Ec() {
        var a = xc.toLowerCase();
        return -1 != a.indexOf("series60") || -1 != a.indexOf("series 60")
    };

    function Fc(a) {
        this.J = [];
        this.$b = [];
        a = a.split("#");
        this.ld = a[0];
        this.gb = a[1] || "";
        this.rb = Bc() ? 1999 : 7950
    }

    function v(a, b, c, d) {
        (c || 0 === c || !1 === c) && (d ? a.J : a.$b).push([encodeURIComponent(b), encodeURIComponent("" + c)])
    }

    function Gc(a) {
        for (var b = a.ld, c = -1 !== a.ld.indexOf("?"), d = 0; d < a.$b.length; d++) {
            var e = (c ? "&" : "?") + a.$b[d].join("=");
            e.length + b.length <= a.rb && (b += e, c = !0)
        }
        for (e = d = 0; e < a.J.length; e++) d += a.J[e][0].length;
        d = a.rb - b.length - d - 2 * a.J.length;
        var f = Math.floor(d / a.J.length);
        if (1 <= f)
            for (e = 0; e < a.J.length; e++) {
                var g = a.J[e][1];
                f = g.length > f ? g.substring(0, f) : g;
                b += (c ? "&" : "?") + a.J[e][0] + "=" + f;
                d -= f.length;
                f = Math.floor(d / (a.J.length - e - 1));
                c = !0
            } else
                for (d = 0; d < a.J.length; d++) a.J[d][0].length + 3 + b.length <= a.rb && (b += (c ? "&" : "?") +
                    a.J[d].join("="), c = !0);
        b = b.substring(0, a.rb);
        b = b.replace(/%\w?$/, "");
        0 < a.gb.length && (b += "#" + a.gb);
        return b
    };
    var Hc = .01 > Math.random(),
        Ic = .1 > Math.random(),
        Jc = null;

    function Kc() {
        var a = Fa().caps;
        if (!a) return null;
        a = p(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, "queryId" == b.n) return b.v;
        return null
    }

    function Rc(a) {
        this.Pb = a || "unknown";
        this.Ue = lc;
        this.da = kc;
        this.yb = Kc() || "";
        this.Db = ""
    }

    function Sc() {
        Jc || (Jc = new Rc(null));
        return Jc
    }

    function Tc(a) {
        var b = new Fc(vc() + "/afs/gen_204"),
            c = a.Pb;
        "unknown" === c && Na(Ma()) && (c = Na(Ma()));
        v(b, "client", c);
        v(b, "output", "uds_ads_only");
        v(b, "zx", a.Ue());
        a.yb && v(b, "aqid", a.yb);
        a.Db && v(b, "psid", a.Db);
        return b
    }

    function Uc(a, b, c) {
        var d = Tc(a);
        v(d, "pbt", b);
        v(d, "adbx", c.left);
        v(d, "adby", c.top);
        v(d, "adbh", c.height);
        v(d, "adbw", c.width);
        v(d, "adbah", c.Ua);
        v(d, "adbn", c.ke);
        v(d, "eawp", c.Le);
        v(d, "errv", c.rf);
        v(d, "csadii", c.ef);
        v(d, "csadr", c.Ud);
        v(d, "csala", c.tf);
        v(d, "lle", c.uf ? 1 : 0);
        v(d, "llm", c.vf || 0);
        v(d, "ifv", c.kf ? 1 : 0);
        v(d, "usr", c.cg ? 1 : 0);
        a.da(Gc(d))
    }

    function Vc(a, b, c) {
        var d = Tc(a);
        v(d, "pbt", "tp");
        v(d, "errm", b);
        v(d, "emsg", c, !0);
        a.da(Gc(d))
    };
    var Wc = {};

    function Xc() {
        var a = Yc();
        this.sf = "ads." + Zc;
        this.qf = a;
        this.sd = "google.ads.domains.Caf: ";
        this.Te = Sc()
    }
    Xc.prototype.log = function(a, b) {
        if (!0 === window.IS_GOOGLE_AFS_IFRAME_ && window.parent == window) return !1;
        a = xa(a) ? a.message : a;
        var c = a + b;
        if (!Wc[c]) {
            Wc[c] = !0;
            c = this.Te;
            var d = this.sf,
                e = this.qf,
                f = Tc(c);
            v(f, "pbt", "er");
            v(f, "errt", d);
            v(f, "errv", e);
            v(f, "errm", b);
            v(f, "emsg", a, !0);
            c.da(Gc(f));
            return !0
        }
        return !1
    };

    function y(a, b) {
        var c = $c;
        return function() {
            var d = Array.prototype.slice.call(arguments, 0) || [];
            try {
                return a.apply(this, d)
            } catch (f) {
                "string" === typeof f && (f = {
                    message: f
                });
                d = f.message;
                var e = -1 == d.indexOf(c.sd);
                e && c.log(f, b);
                throw e ? c.sd + d : d;
            }
        }
    }

    function ad(a) {
        return "google.ads.domains.Caf: " + a
    }

    function Yc() {
        var a = oc("hash"),
            b = "unknown";
        a && (b = a);
        return b
    }

    function z(a, b) {
        return y(a, b)
    }
    var bd = oc("packages"),
        Zc = "unknown";
    null != bd && (Zc = bd);
    var $c = new Xc;
    var cd;
    a: {
        var dd = window.parent;
        try {
            cd = dd.postMessage ? dd : dd.document.postMessage ? dd.document : null;
            break a
        } catch (a) {}
        cd = null
    }
    var ed = cd,
        fd = {},
        gd = z(function() {
            for (var a = p(ab(fd)), b = a.next(); !b.done; b = a.next()) b = b.value, fd.hasOwnProperty(b) && (fd[b].ib() || delete fd[b])
        }, "fsCDI"),
        hd = !1,
        jd = z(function() {
            hd || (hd = !0, window.setInterval(gd, 500), window.addEventListener("message", id))
        }, "fsIL");

    function kd(a, b) {
        this.Lc = a;
        this.B = {};
        this.Ta = b;
        fd[this.Lc] = this;
        jd()
    }

    function ld(a, b) {
        return a.B.hasOwnProperty(b) ? a.B[b].value : null
    }

    function md(a, b) {
        return a.B.hasOwnProperty(b) ? a.B[b].value : null
    }

    function A(a, b, c, d) {
        a.B.hasOwnProperty(b) || (a.B[b] = c());
        c = a.B[b];
        c.Mb = d || va;
        null != c.value && c.Mb(a, a.Lc, b, c.value)
    }
    kd.prototype.ib = function() {
        return !!(this.Ta && this.Ta.parentNode && this.Ta.contentWindow)
    };
    var nd = {};

    function od() {
        this.value = null;
        this.Mb = va;
        this.pa = !1
    }
    l = od.prototype;
    l.ra = function() {};
    l.Pa = function() {};
    l.Ma = function() {};
    l.Da = function() {};
    l.bc = function(a) {
        return this.value == a
    };

    function D() {
        od.call(this)
    }
    ra(D, od);
    D.prototype.ra = function(a, b) {
        return !!b
    };
    D.prototype.Pa = function() {
        return this.value ? "t" : "f"
    };
    D.prototype.Ma = function(a) {
        return "t" == a
    };
    D.prototype.Da = function() {
        return 0
    };
    D.j = function() {
        return new D
    };

    function pd() {
        od.call(this)
    }
    ra(pd, od);
    pd.prototype.ra = function(a, b) {
        var c = parseInt(b, 10);
        a = a + " = " + b;
        if (isNaN(c)) return $c.log(a, "sIGVVnn"), null;
        9007199254740991 < c && ($c.log(a, "sIGVVtl"), c = 9007199254740991);
        0 > c && ($c.log(a, "sIGVVts"), c = 0);
        return c
    };
    pd.prototype.Pa = function() {
        return this.value + ""
    };
    pd.prototype.Ma = function(a) {
        return parseInt(a, 10)
    };
    pd.prototype.Da = function() {
        return 1
    };
    pd.j = function() {
        return new pd
    };

    function E() {
        od.call(this)
    }
    ra(E, od);
    E.prototype.ra = function(a, b) {
        return b ? b.toString() : ""
    };
    E.prototype.Pa = function() {
        return this.value ? encodeURIComponent(this.value) : ""
    };
    E.prototype.Ma = function(a) {
        return decodeURIComponent(a)
    };
    E.prototype.Da = function() {
        return 2
    };
    E.j = function() {
        return new E
    };

    function qd() {
        od.call(this)
    }
    ra(qd, od);
    l = qd.prototype;
    l.ra = function(a, b) {
        return b ? b : null
    };
    l.Pa = function() {
        return this.value ? encodeURIComponent(JSON.stringify(this.value)) : ""
    };
    l.Ma = function(a) {
        return a ? JSON.parse(decodeURIComponent(a)) : null
    };
    l.Da = function() {
        return 3
    };
    l.bc = function(a) {
        var b = JSON.stringify(this.value);
        a = JSON.stringify(a);
        return b === a
    };
    qd.j = function() {
        return new qd
    };
    var rd = {},
        sd = (rd[0] = D.j, rd[1] = pd.j, rd[2] = E.j, rd[3] = qd.j, rd);

    function td(a, b, c) {
        nd.hasOwnProperty(a) || (nd[a] = c());
        c = nd[a];
        a = c.ra(a, b);
        null == a || c.bc(a) || (c.value = a, c.pa = !0)
    }

    function id(a) {
        if (a = a || window.event)
            for (var b = p(ab(fd)), c = b.next(); !c.done; c = b.next())
                if (c = fd[c.value], c.ib() && a.source == c.Ta.contentWindow) {
                    if ((a = a.data) && a.split && (a = a.split(","), "FSXDC" == a[0])) {
                        for (b = 1; b < a.length; b++) {
                            var d = a[b].split(":"),
                                e = decodeURIComponent(d[0]),
                                f = sd[parseInt(d[1], 10)];
                            c.B.hasOwnProperty(e) || (c.B[e] = f());
                            d = c.B[e].Ma(d[2]);
                            c.B.hasOwnProperty(e) || (c.B[e] = f());
                            f = c.B[e];
                            d = f.ra(e, d);
                            null != d && f.value != d && (f.value = d, f.pa = !0)
                        }
                        a = p(ab(c.B));
                        for (b = a.next(); !b.done; b = a.next()) b = b.value,
                            f = c.B[b], f.pa && (f.pa = !1, f.Mb(c, c.Lc, b, f.value))
                    }
                    break
                }
    }
    kd.prototype.ib = y(kd.prototype.ib, "fsiHVI");
    var ud = z(function() {
        if (ed) {
            for (var a = [], b = p(ab(nd)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = nd[c];
                if (d.pa) {
                    var e = d.Pa();
                    a.push([encodeURIComponent(c), d.Da(), e].join(":"));
                    d.pa = !1
                }
            }
            0 != a.length && ed.postMessage(["FSXDC"].concat(a).join(","), "*")
        }
    }, "fsSC");

    function vd(a, b) {
        td(a, b, pd.j)
    }

    function wd(a, b) {
        td(a, b, D.j)
    };

    function xd(a, b) {
        for (var c = 0; c < b.length; c++) a[b[c].key] = b[c]
    };

    function yd() {}
    yd.prototype.H = function() {
        return "true, false"
    };
    yd.prototype.C = function(a) {
        return 0 === a || 1 === a ? 1 === a : "true" == a || "on" == a || 1 == a ? !0 : "false" == a || "off" == a || !1 === a ? !1 : null
    };
    yd.prototype.G = function(a) {
        a = this.C(a);
        return null == a ? null : a ? 1 : 0
    };
    var H = new yd;

    function zd() {
        var a = Ad;
        this.Ka = 10;
        this.Ja = Math.floor(a)
    }
    zd.prototype.H = function() {
        return this.Ka + "px - " + this.Ja + "px"
    };
    zd.prototype.C = function(a) {
        a = parseInt(a, 10);
        return isNaN(a) ? null : Math.max(this.Ka, Math.min(this.Ja, a))
    };
    zd.prototype.G = function(a) {
        return this.C(a)
    };

    function Bd(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    l = Bd.prototype;
    l.clone = function() {
        return new Bd(this.x, this.y)
    };
    l.bc = function(a) {
        return a instanceof Bd && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    l.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    l.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    l.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    l.translate = function(a, b) {
        a instanceof Bd ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    l.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function Cd(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    l = Cd.prototype;
    l.clone = function() {
        return new Cd(this.top, this.right, this.bottom, this.left)
    };
    l.contains = function(a) {
        return this && a ? a instanceof Cd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    l.expand = function(a, b, c, d) {
        xa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    l.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    l.translate = function(a, b) {
        a instanceof Bd ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    l.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function Dd(a) {
        Dd[" "](a);
        return a
    }
    Dd[" "] = va;

    function Ed(a) {
        var b = Fd;
        return Object.prototype.hasOwnProperty.call(b, "10") ? b["10"] : b["10"] = a("10")
    };
    var Gd = Yb("Opera"),
        Hd = Yb("Trident") || Yb("MSIE"),
        Id = Yb("Edge"),
        Jd = Yb("Gecko") && !(-1 != Sb.toLowerCase().indexOf("webkit") && !Yb("Edge")) && !(Yb("Trident") || Yb("MSIE")) && !Yb("Edge"),
        Kd = -1 != Sb.toLowerCase().indexOf("webkit") && !Yb("Edge");

    function Ld() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var Md;
    a: {
        var Nd = "",
            Od = function() {
                var a = Sb;
                if (Jd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Id) return /Edge\/([\d\.]+)/.exec(a);
                if (Hd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Kd) return /WebKit\/(\S+)/.exec(a);
                if (Gd) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Od && (Nd = Od ? Od[1] : "");
        if (Hd) {
            var Pd = Ld();
            if (null != Pd && Pd > parseFloat(Nd)) {
                Md = String(Pd);
                break a
            }
        }
        Md = Nd
    }
    var Qd = Md,
        Fd = {};

    function Rd() {
        return Ed(function() {
            for (var a = 0, b = Bb(String(Qd)).split("."), c = Bb("10").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                var f = b[e] || "",
                    g = c[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    a = Jb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Jb(0 == f[2].length, 0 == g[2].length) || Jb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == a)
            }
            return 0 <= a
        })
    }
    var Sd;
    if (t.document && Hd) {
        var Td = Ld();
        Sd = Td ? Td : parseInt(Qd, 10) || void 0
    } else Sd = void 0;
    var Ud = Sd;

    function Vd(a, b) {
        this.width = a;
        this.height = b
    }
    l = Vd.prototype;
    l.clone = function() {
        return new Vd(this.width, this.height)
    };
    l.aspectRatio = function() {
        return this.width / this.height
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function Wd(a) {
        return a ? new Xd(Yd(a)) : Sa || (Sa = new Xd)
    }

    function Zd(a, b, c) {
        var d = document;
        c = c || d;
        var e = a && "*" != a ? String(a).toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (e || b)) return c.querySelectorAll(e + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            a = c.getElementsByClassName(b);
            if (e) {
                c = {};
                for (var f = d = 0, g; g = a[f]; f++) e == g.nodeName && (c[d++] = g);
                c.length = d;
                return c
            }
            return a
        }
        a = c.getElementsByTagName(e || "*");
        if (b) {
            c = {};
            for (f = d = 0; g = a[f]; f++) {
                e = g.className;
                var h;
                if (h = "function" == typeof e.split) h = 0 <= Wa(e.split(/\s+/), b);
                h && (c[d++] = g)
            }
            c.length = d;
            return c
        }
        return a
    }

    function $d(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Vd(a.clientWidth, a.clientHeight)
    }

    function ae(a) {
        return a.scrollingElement ? a.scrollingElement : Kd || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }

    function be(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!wa(f) || xa(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (xa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Xa(g ? Za(f) : f, d)
            }
        }
    }

    function ce(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Yd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Xd(a) {
        this.S = a || t.document || document
    }
    l = Xd.prototype;
    l.getElementsByTagName = function(a, b) {
        return (b || this.S).getElementsByTagName(String(a))
    };
    l.createElement = function(a) {
        return ce(this.S, a)
    };
    l.createTextNode = function(a) {
        return this.S.createTextNode(String(a))
    };
    l.appendChild = function(a, b) {
        a.appendChild(b)
    };
    l.append = function(a, b) {
        be(Yd(a), a, arguments)
    };
    l.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    l.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    l.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function de(a, b) {
        a: {
            var c = Yd(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c = c[b] || c.getPropertyValue(b) || "";
                break a
            }
            c = ""
        }
        return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function ee(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function fe(a) {
        if (Hd && !(8 <= Number(Ud))) return a.offsetParent;
        var b = Yd(a),
            c = de(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = de(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }

    function ge(a) {
        var b = Yd(a),
            c = new Bd(0, 0);
        var d = b ? Yd(b) : document;
        d = !Hd || 9 <= Number(Ud) || "CSS1Compat" == Wd(d).S.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = ee(a);
        d = Wd(b).S;
        b = ae(d);
        d = d.parentWindow || d.defaultView;
        b = Hd && Rd() && d.pageYOffset != b.scrollTop ? new Bd(b.scrollLeft, b.scrollTop) : new Bd(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function he(a) {
        if (1 == a.nodeType) return a = ee(a), new Bd(a.left, a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new Bd(a.clientX, a.clientY)
    }

    function ie(a) {
        var b = je;
        if ("none" != de(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function je(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Kd && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = ee(a), new Vd(a.right - a.left, a.bottom - a.top)) : new Vd(b, c)
    };

    function ke(a) {
        var b = a.indexOf("#");
        return 0 > b ? a : a.substr(0, b)
    }
    var le = /#|$/;

    function me(a, b) {
        var c = a.search(le);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    };
    var ne = {},
        oe = (ne.ads = 0, ne.plas = 1, ne.relatedsearch = 3, ne),
        pe = (!window.IS_GOOGLE_AFS_IFRAME_ || Pa(), 8),
        Ad = (!window.IS_GOOGLE_AFS_IFRAME_ || Pa(), 24),
        qe = new zd,
        re = {
            content: "c",
            query: "q",
            domain: "d"
        };

    function se(a, b) {
        return $a(a, function(c, d) {
            return b.hasOwnProperty(d)
        })
    }

    function te(a) {
        return !!H.C(a.waitForAds)
    }

    function ue(a) {
        return /^(?:(?:slave-\d+(?:-(?:a|b))?)|(?:master-(?:a|b)))-\d+$/.test(a)
    }

    function ye(a) {
        return (a = a.match(/slave-(\d+)-/)) ? parseInt(a[1], 10) + 1 : 1
    }

    function ze(a, b, c) {
        for (var d = [], e, f = 0; e = c[f]; f++) e = new Fc(e), v(e, a, b), d.push(Gc(e));
        return d
    }

    function Ae(a, b) {
        a = ke(a);
        if ((a = a.match(new RegExp("[?&]" + b + "=([^&]*)"))) && a[1]) try {
            return decodeURIComponent(a[1])
        } catch (c) {}
        return null
    }

    function Be(a) {
        a = ke(a);
        var b = {};
        a.replace(/[?&]+([^=&]+)=?([^&]*)/gi, function(c, d, e) {
            try {
                b[decodeURIComponent(d)] = decodeURIComponent(e)
            } catch (f) {}
        });
        return b
    }

    function Ce() {
        var a = void 0 === a ? window.location.href : a;
        var b = oc("lldl", qc());
        b && (b = new RegExp("(" + atob(b).replace(/,/g, ")|(") + ")"), a.match(b));
        return !1
    }

    function De(a) {
        var b = new Cd(0, Infinity, Infinity, 0);
        for (var c = Wd(a), d = c.S.body, e = c.S.documentElement, f = ae(c.S), g = a; g = fe(g);)
            if (!(Hd && 0 == g.clientWidth || Kd && 0 == g.clientHeight && g == d) && g != d && g != e && "visible" != de(g, "overflow")) {
                var h = ge(g),
                    k = new Bd(g.clientLeft, g.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + g.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + g.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top,
            f);
        c = c.S;
        c = $d(c.parentWindow || c.defaultView || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        b = 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
        c = new Bd(a.offsetLeft, a.offsetTop);
        f = ie(a);
        a = new Cd(c.y, c.x + f.width, c.y + f.height, c.x);
        c = .3 * f.height;
        (f = !b) || (c = -c, f = !(b.left <= a.right + c && a.left <= b.right + c && b.top <= a.bottom + c && a.top <= b.bottom + c));
        return !f
    };
    var Ee = {};

    function Fe(a) {
        var b = {
                names: [],
                frames: []
            },
            c;
        for (c in Ee) {
            var d = Ge(c, a);
            null == d ? delete Ee[c] : (b.names.push(c), b.frames.push(d))
        }
        return b
    }
    Fe = y(Fe, "cFr");

    function Ge(a, b) {
        if (He) return He(a, b);
        if (a == b.name) return window;
        try {
            var c = window.parent.frames[a + "|" + window.name];
            if (c) return c
        } catch (d) {}
        try {
            return window.parent.frames[a] || null
        } catch (d) {}
        return null
    }
    Ge = y(Ge, "gFBN");
    var He = null,
        Ie = Fe,
        Je = Ge;

    function Ke(a, b, c) {
        c = void 0 === c ? [] : c;
        this.frameWidth = a;
        this.frameHeight = b;
        this.Ua = c
    };

    function Le(a, b, c) {
        var d = !1;
        a.addEventListener(b, c);
        a.addEventListener(b, function() {
            d || (a.removeEventListener(b, c), d = !0)
        })
    };

    function Me() {
        var a, b;
        return {
            promise: new Promise(function(c, d) {
                a = c;
                b = d
            }),
            resolve: a,
            reject: b
        }
    }

    function Ne(a, b) {
        var c = Me();
        a.setTimeout(function() {
            c.resolve(b)
        }, 0);
        return c.promise
    }

    function Oe(a, b) {
        var c = Me();
        window.setTimeout(function() {
            c.resolve(b)
        }, a);
        return c.promise
    }

    function Pe(a) {
        var b = [],
            c = 0,
            d = a.length;
        return new Promise(function(e, f) {
            if (d)
                for (var g = {
                        ea: 0
                    }; g.ea < d; g = {
                        ea: g.ea
                    }, g.ea++) Promise.resolve(a[g.ea]).then(function(h) {
                    return function(k) {
                        b[h.ea] = k;
                        c += 1;
                        c === d && e(b)
                    }
                }(g)).catch(function(h) {
                    f(h)
                });
            else e(b)
        })
    };
    var Qe = null;

    function Re() {
        if (null != Qe) return Qe;
        var a = document.createElement("div");
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.border = "1px solid black";
        a.style.padding = "1px";
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        var b = a.offsetWidth;
        document.body.removeChild(a);
        return Qe = 5 == b
    }

    function Se(a) {
        return parseFloat(a.replace("px", "")) || 0
    }

    function Te(a, b) {
        "string" == typeof a && (a = document.getElementById(a));
        var c = document.defaultView || {},
            d = b ? a.offsetHeight : a.offsetWidth;
        b = b ? ["Top", "Bottom"] : ["Right", "Left"];
        var e = !1;
        var f = Re() ? ["margin"] : ["border", "margin", "padding"];
        var g = f.length,
            h = b.length;
        if (c && c.getComputedStyle && (c = c.getComputedStyle(a))) {
            e = !0;
            for (var k = 0; k < g; k++)
                for (var m = 0; m < h; m++) d += Se(c.getPropertyValue([f[k], b[m].toLowerCase()].join("-")))
        }
        if (!e && (a = a.currentStyle)) {
            if (!Re())
                for (e = 0; e < h; e++) d += Se(a[["border", b[e], "Width"].join("")]);
            for (e = 0; e < g; e++)
                if ("border" != f[e])
                    for (c = 0; c < h; c++) d += Se(a[[f[e], b[c]].join("")])
        }
        return d
    };

    function Ue(a) {
        if (Ve) return Ve(a);
        a = Ie(a);
        var b = a.names;
        return We(a.frames).then(function(c) {
            for (var d = 0; d < c.length; d++) {
                var e = b[d],
                    f = c[d];
                if (null != f) {
                    var g = {};
                    f = (g.fw = f.frameWidth, g.fh = f.frameHeight, g.ah = f.Ua, g);
                    td(e + ".fs", f, qd.j)
                }
            }
            ud()
        })
    }
    Ue = y(Ue, "sPH");
    var Ve = null,
        Xe = [];

    function Ye(a) {
        try {
            var b = a.document.getElementById("adBlock");
            return Te(b, !0)
        } catch (c) {
            return null
        }
    }
    Ye = y(Ye, "gBH");

    function Ze(a) {
        try {
            var b = a.document.getElementById("adBlock");
            return Te(b, !1)
        } catch (c) {
            return null
        }
    }
    Ze = y(Ze, "gBW");

    function $e(a) {
        var b = [],
            c = p(a.document.getElementsByTagName("img"));
        for (a = c.next(); !a.done; a = c.next()) a = a.value, null == a.getAttribute("loading") && b.push(a);
        b = p(b);
        for (a = b.next(); !a.done; a = b.next()) {
            c = Xe;
            var d = c.push;
            a = a.value;
            var e = Me();
            a.complete ? e.resolve() : (Le(a, "load", e.resolve), Le(a, "error", e.resolve));
            d.call(c, e.promise)
        }
        return Pe(Xe)
    }
    $e = y($e, "gFH_wfip");

    function We(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push($e(a[c]));
        return Promise.race([Promise.all(b), Oe(500, "timedOutWaitingForImages")]).then(function(d) {
            if ("string" === typeof d && (d = Sc(), Hc)) {
                var e = Tc(d);
                v(e, "pbt", "ui");
                v(e, "action", "llimsg");
                d.da(Gc(e))
            }
            d = [];
            for (e = 0; e < a.length; e++) {
                var f = a[e],
                    g = Ye(f),
                    h = Ze(f);
                af(f, g, h) ? d.push(new Ke(1, 1)) : (f = bf(f), d.push(new Ke(h, g, f)))
            }
            return d
        })
    }
    We = y(We, "gFH");
    var bf = z(function(a) {
        var b = [];
        a = p(a.document.querySelectorAll(".si101"));
        for (var c = a.next(); !c.done; c = a.next()) b.push(Te(c.value, !0));
        return b
    }, "gAHIF");

    function af(a, b, c) {
        return ("number" == typeof b && 16 > b || "number" == typeof c && 16 > c) && (a = a.document.getElementById("adBlock")) && "" != a.innerHTML ? !0 : !1
    }
    af = y(af, "iCSI");
    var cf = Ue;

    function df(a, b) {
        b = b[a];
        b || ($c.log("frameOptions is undefined for " + a, "fAU"), b = {});
        return b
    }
    df = y(df, "gFO");

    function ef(a) {
        return function(b, c) {
            return "undefined" == typeof a[b] ? c || null : a[b]
        }
    }

    function ff(a) {
        return function(b, c) {
            if (a.hasOwnProperty(b)) {
                b = a[b].split(",");
                for (var d = 0; d < b.length; d++)
                    if (b[d] == c) return !0;
                return !1
            }
            return !0
        }
    }

    function gf(a) {
        return (a = a.width) && "auto" != a ? a : "100%"
    }

    function hf(a) {
        var b = {
            sa: !1,
            Yc: null,
            ed: null
        };
        a.verticalSpacing && (a = a.verticalSpacing / 2, b.sa = !0, b.Yc = Math.floor(a), b.ed = Math.ceil(a));
        return b
    }

    function jf(a) {
        if (a.fontSizeTitle) return a.fontSizeTitle;
        a = Ra();
        return a.data.hm || a.data.t ? 18 : null
    }

    function kf(a) {
        var b = [];
        if (a.webFontFamily) {
            var c = a.webFontFamily;
            a.titleBold && (c += ":400,700");
            b.push(c)
        }
        a.webFontFamilyAttribution && (c = a.webFontFamilyAttribution, a.attributionBold && (c += ":400,700"), b.push(c));
        return 0 == b.length ? null : Ab(new db(eb, "//fonts.googleapis.com/css"), {
            family: b.join("|")
        })
    }
    var lf = df;
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var mf = {},
        nf = {},
        of = {},
        pf = {},
        qf = {};

    function rf() {
        throw Error("Do not instantiate directly");
    }
    rf.prototype.Y = null;
    rf.prototype.toString = function() {
        return this.content
    };

    function sf() {
        rf.call(this)
    }
    ya(sf, rf);
    sf.prototype.N = mf;

    function tf() {
        rf.call(this)
    }
    ya(tf, rf);
    tf.prototype.N = nf;
    tf.prototype.Y = 1;

    function uf() {
        rf.call(this)
    }
    ya(uf, rf);
    uf.prototype.N = pf;
    uf.prototype.Y = 1;

    function vf() {
        rf.call(this)
    }
    ya(vf, rf);
    vf.prototype.N = qf;
    vf.prototype.Y = 1;

    function wf(a, b) {
        return null != a && a.N === b
    };

    function xf(a) {
        if (null != a) switch (a.Y) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function yf(a) {
        return wf(a, mf) ? a : a instanceof $b ? J(ac(a).toString(), a.hb()) : J(String(String(a)).replace(zf, Af), xf(a))
    }

    function Bf(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c) {
            return new b(String(c))
        }
    }
    var J = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Y = d);
                return c
            }
        }(sf),
        Cf = Bf(uf),
        Df = Bf(vf);

    function Ef(a) {
        var b = [],
            c;
        for (c in a) b.push(c);
        return b
    }

    function Ff(a) {
        if (null == a) throw Error("unexpected null value");
        return a
    }

    function K(a, b) {
        return a && b && a.lf && b.lf ? a.N !== b.N ? !1 : a.toString() === b.toString() : a instanceof rf && b instanceof rf ? a.N != b.N ? !1 : a.toString() == b.toString() : a == b
    }

    function L(a) {
        return a instanceof rf ? !!a.content : !!a
    }

    function Gf(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c) {
            return (c = String(c)) ? new b(c) : ""
        }
    }
    var Hf = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = String(c);
                if (!c) return "";
                c = new b(c);
                void 0 !== d && (c.Y = d);
                return c
            }
        }(sf),
        If = Gf(tf),
        Jf = Gf(uf),
        Kf = Gf(vf);

    function Lf(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function M(a) {
        if (wf(a, mf)) {
            var b = String;
            a = String(a.content).replace(Mf, "").replace(Nf, "&lt;");
            b = b(a).replace(Of, Af)
        } else b = String(a).replace(zf, Af);
        return b
    }

    function Pf(a) {
        wf(a, pf) ? a = a.content : (a = String(a), a = Qf.test(a) ? a : "zSoyz");
        return a
    }

    function Rf(a) {
        wf(a, pf) && (a = a.content);
        var b;
        if (b = a) b = !(1 <= a.length && " " === a.substring(0, 1));
        return (b ? " " : "") + a
    }

    function Sf(a) {
        wf(a, nf) || wf(a, of ) ? a = Tf(a) : a instanceof Kb ? a = Tf(Mb(a)) : a instanceof qb ? a = Tf(ub(a).toString()) : (a = String(a), a = Uf.test(a) ? a.replace(Vf, Wf) : "about:invalid#zSoyz");
        return a
    }

    function Xf(a) {
        wf(a, nf) || wf(a, of ) ? a = Tf(a) : a instanceof Kb ? a = Tf(Mb(a)) : a instanceof qb ? a = Tf(ub(a).toString()) : (a = String(a), a = Yf.test(a) ? a.replace(Vf, Wf) : "about:invalid#zSoyz");
        return a
    }

    function N(a) {
        wf(a, qf) ? a = Lf(a.content) : null == a ? a = "" : a instanceof Pb ? a = Lf(a instanceof Pb && a.constructor === Pb ? a.Ec : "type_error:SafeStyle") : a instanceof Rb ? a = Lf(a instanceof Rb && a.constructor === Rb ? a.Dc : "type_error:SafeStyleSheet") : (a = String(a), a = Zf.test(a) ? a : "zSoyz");
        return a
    }
    var $f = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Af(a) {
        return $f[a]
    }
    var ag = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\x0B": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };

    function bg(a) {
        return ag[a]
    }
    var cg = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Wf(a) {
        return cg[a]
    }
    var zf = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Of = /[\x00\x22\x27\x3c\x3e]/g,
        dg = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
        Vf = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Zf = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Uf =
        /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Yf = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        Qf = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i;

    function Tf(a) {
        return String(a).replace(Vf, Wf)
    }
    var Mf = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Nf = /</g;
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    function eg(a) {
        return fg(a, void 0)
    }

    function fg(a, b) {
        b = (b || Wd()).createElement("DIV");
        if (xa(a))
            if (a instanceof rf) {
                if (a.N !== mf) throw Error("Sanitized content was not of kind HTML.");
                a = cc(a.toString(), a.Y || null)
            } else a = bc("zSoyz");
        else a = bc(String(a));
        if (ec())
            for (; b.lastChild;) b.removeChild(b.lastChild);
        b.innerHTML = ac(a);
        return 1 == b.childNodes.length && (a = b.firstChild, 1 == a.nodeType) ? a : b
    }
    var gg = {};

    function hg(a) {
        var b = a.caps,
            c = a.jf,
            d = a.nf,
            e = a.le,
            f = a.dg,
            g = a.Ee,
            h = a.hf,
            k = a.te,
            m = a.se,
            q = a.re,
            n = a.Vd,
            w = a.De,
            r = a.we,
            x = a.xe,
            u = a.ve,
            C = a.ye,
            B = a.fontFamily,
            F = a.Oe,
            I = a.Se,
            G = a.Pe,
            Q = a.Yf,
            W = a.Qc,
            X = a.Lf,
            Tb = a.Mf,
            Ua = a.Kf,
            ma = a.Nf,
            Ub = a.Jf,
            P = a.yf,
            Lc = a.Md,
            fa = a.ge,
            ha = a.he,
            Ha = a.je,
            Dj = a.ee,
            ve = a.Td,
            we = a.Od,
            Mc = a.Pd,
            Jg = a.Rd,
            Kg = a.Qd,
            Nc = a.Sd,
            Oc = a.wf,
            Pc = a.eg,
            xe = a.fg,
            Lg = a.ce,
            Qc = a.type,
            Va = a.Fe,
            ib = a.bf,
            jb = a.af,
            Ej = "";
        a = b.isRtl ? "right" : "left";
        var Vb = b.isRtl ? "left" : "right";
        var Fj = f.sa ? "padding-top:" + N(f.Yc) + "px; padding-bottom:" +
            N(f.ed) + "px;" : c || d ? "padding:7px 0;" : "";
        var Gj = G ? N(G) : d ? "15" : "13";
        if (L(Qc) && "relatedsearch" == Qc) {
            var Hj = jb ? "text-align:" + ("right" == a && "left" == jb ? "right" : "right" == a && "right" == jb ? "left" : N(jb)) + ";" : "";
            Va = Va ? L(ib) && L(jb) ? "center" == jb ? "padding-right:" + N(Math.floor(Va / 2)) + "px; padding-left:" + N(Math.floor(Va / 2)) + "px;" : "right" == jb ? "padding-" + N(a) + ":" + N(Va) + "px;" : "padding-" + N(Vb) + ":" + N(Va) + "px;" : "padding-right:" + N(Va) + "px;" : "";
            ib = ".radlinkC{" + (L(ib) && I < G ? "padding:" + N(1 + (G - I)) + "px 4px;" : "padding:1px 4px;") +
                "word-break:break-word;}.col{" + Hj + (ib ? "border-" + N(Vb) + ":1px solid " + N(n) + ";" : "") + "vertical-align:top;" + Va + "}" + (ib ? "#adBlock h2{float:" + N(a) + "; line-height:1.4em; vertical-align:top;" + (I >= G ? "padding:" + N(3 + (I - G)) + "px 4px;" : "padding:3px 4px;") + "}.ad{border-bottom:none;}.col.l{border-" + N(Vb) + ":none;}" : "#adBlock h2{text-align:" + N(a) + ";}")
        } else ib = "";
        G = Ej;
        b = "<style>#response_debug_output{max-height:500px; overflow:auto;}body{" + (c ? "-webkit-text-size-adjust:100%;" : "") + "color:" + (w ? N(w) : "#000") + "; font-family:" +
            (Pc ? "'" + String(Pc).replace(dg, bg) + "'," : "") + (B ? N(B) : "arial") + ", sans-serif; font-size:" + (c || d ? "14" : "12") + "px; width:" + N(e) + "; padding:0px; margin:0px;" + (L(x) && (L(ha) || L(Lc)) ? "padding-right:2px;" : "") + (h && L(b.isRtl) ? "direction:rtl;" : "") + "}body{-webkit-tap-highlight-color:rgba(0,0,0,0); -webkit-tap-highlight-color:transparent;}a{-webkit-tap-highlight-color:initial;}.ad{padding:2px 0; margin:0px; word-wrap:break-word;" + Fj + (n ? "border-bottom:1px solid " + N(n) + ";" : "") + "}" + (L(Ub) && (!h || L(Qc) && "relatedsearch" ==
                Qc) ? "." + N("a_") + ":hover{background-color:" + N(Ub) + ";}" : "") + ".ad.f{" + (f.sa ? "padding-top:2px;" : "") + "}.ad.fr{" + (f.sa ? "padding-top:2px;" : "") + "}.ad.l{" + (f.sa ? "padding-bottom:2px;" : "") + (n ? "border-bottom:0px;" : "") + "}.ad.lr{" + (f.sa ? "padding-bottom:2px;" : "") + "}#adBlock b{" + (q || h ? "" : "font-weight:normal;") + (m && L(C) ? "color:" + N(C) + ";" : "") + "}.ad span{_width:99%;}#adBlock{background:#FFF none repeat scroll 0 0; margin:0; padding:0;" + (r ? "background-color:" + N(r) + ";" : "") + (L(x) && L(fa) ? "border-left:1px solid " + N(x) + ";" :
                "") + (L(x) && L(ha) ? "border-right:1px solid " + N(x) + ";" : "") + (L(x) && L(Ha) ? "border-top:1px solid " + N(x) + ";" : "") + (L(x) && L(Dj) ? "border-bottom:1px solid " + N(x) + ";" : "") + "}#adBlock h2{font-size:" + Gj + "px; font-weight:normal;" + (Lg ? "padding-bottom:" + N(Lg) + "px;" : "padding:0;") + "margin:0;" + (L(F) || L(xe) ? "font-family:" + (xe ? "'" + String(xe).replace(dg, bg) + "'," : "") + (F ? N(F) + "," : "") + " sans-serif;" : "") + (b.isCse ? "text-align:" + N(a) + ";" : "") + "}#adBlock span.lhHeader{margin:3px 4px 0;}#adBlock h2 a, #adBlock h2{color:" + (u ? N(u) :
                "#676767") + "; text-decoration:none;}." + N("c_") + "{color:" + N(g) + ";}." + N("c_") + "{" + (I ? "font-size:" + N(I) + "px;" : "") + "font-weight:" + (Q ? "bold" : "normal") + ";}." + N("c_") + "{" + (W ? "display:inline-block;" : "") + "line-height:" + (Oc ? N(Oc) + "px" : "1.4em") + ";" + (P ? "text-decoration:none;" : "") + "margin:0; padding:0;}" + (ma ? "." + N("c_") + ":hover {text-decoration:underline;}a{text-decoration:none;}" : "") + "h2 a:hover{color:" + (u ? N(u) : "#676767") + "; text-decoration:none; font-weight:normal; background-color:transparent;}a:hover{" + (X ?
                "font-weight:bold;" : "") + (Tb ? "color:" + N(Tb) + ";" : "") + (Ua ? "background-color:" + N(Ua) + ";" : "") + "}" + (L(ve) && L(we) && k ? ".adIcon{visibility:visible; width:" + N(ve) + "px; height:" + N(we) + "px; border:none; float:" + N(a) + "; margin-" + N(a) + ":" + N(null != Jg ? Jg : 0) + "px; margin-" + N(Vb) + ":" + N(null != Kg ? Kg : 4) + "px; margin-top:" + N(null != Mc ? Mc : 4) + "px; margin-bottom:" + N(null != Nc ? Nc : 0) + "px;}.adD, ." + N("a_") + "{display:block; overflow:hidden;}" : "") + (c ? ".adD{clear:" + N(Vb) + ";}" : "") + ib;
        c = c || d ? Df("body{font-family:" + (Pc ? "'" + String(Pc).replace(dg,
            bg) + "'," : "") + (B ? N(B) + "," : "") + '"Roboto","Helvetica Neue",arial,sans-serif;}.ad{margin:0; padding:0;}.' + N("c_") + "{line-height:" + (Oc ? N(Oc) : "20") + "px; margin:0;}td{padding:0px;}.adStd{clear:none;}" + (L(ve) && L(we) && L(k) ? ".adIcon{margin-top:" + N(null != Mc ? Mc : 0) + "px; margin-bottom:" + N(null != Nc ? Nc : 0) + "px; margin-" + N(a) + ":0px;}" : "") + ".adStd{clear:none;}") : "";
        return J(G + (b + c + "</style>"))
    };

    function ig(a) {
        var b = a.caps,
            c = a.type,
            d = a.$e,
            e = a.Ze,
            f = a.ze,
            g = a.Ae,
            h = a.Ce,
            k = a.kg,
            m = a.hg,
            q = a.Re,
            n = a.Qe,
            w = a.Ye,
            r = a.Xe,
            x = a.Be,
            u = a.jg,
            C = a.Df,
            B = a.be,
            F = a.gg,
            I = a.de,
            G = a.Zf;
        a = a.Nd;
        var Q = "",
            W = b.isRtl ? "left" : "right";
        c = "searchbox" == c ? ".sbi{" + (k ? "width:" + N(k) + "px;" : "width:100%;") + (q ? "font-size:" + N(q) + "px;" : "font-size:16px;") + (d ? "border:0 none;" : "") + (f ? "background-color:" + N(f) + ";" : "") + (w ? "height:" + N(w) + "px;" : "") + (C ? "border-radius:" + N(C) + "px;" : "") + "}" + (k ? "" : ".sbi-td{width:100%;}") + ".sbb{cursor:pointer;" + (n ? "font-size:" +
            N(n) + "px;" : "font-size:16px;") + "margin-" + (b.isRtl ? "right" : "left") + ":15px;" + (e ? "border:0 none;" : (x ? "border-color:" + N(x) + ";" : "") + (u ? "border-width:" + N(u) + "px;" : "") + (C ? "border-radius:" + N(C) + "px;" : "")) + (g ? "background:" + N(g) + ";" : "") + (h ? "color:" + N(h) + ";" + ("transparent" == h ? "filter:alpha(opacity=0);" : "") : "") + (m ? "width:" + N(m) + "px;" : "") + (r ? "height:" + N(r) + "px;" : "") + "}" : "imagead" == c ? "#adBlock{background-color:transparent;}" : "dynamic" == c ? ".radlinkC.hybrid{margin-right:0; margin-left:0;}" : "";
        Q += "<style>" + (F ? "@import url(" +
            (wf(F, of ) ? F.content : F instanceof qb ? ub(F).toString() : "about:invalid#zSoyz") + ");" : "") + (B ? "#adBlock h2, h2 a:hover{font-weight:bold;}" : "") + (I ? "#adBlock h2{text-transform:uppercase;}" : "") + (G ? "." + N("c_") + "{text-transform:uppercase;}" : "") + (a ? "." + N("a_") + "{border-width:" + N(a) + "px;}" : "") + c + (b.popstripeRs ? "." + N("f_") + "{padding:0.5em;}." + N("g_") + "{border-" + N(b.isRtl ? "right" : "left") + ":7px solid transparent;}." + N("h_") + "{display:inline-block; height:18px; width:18px; margin-right:5px;}." + N("i_") + "{height:100%; width:100%;}." +
            N("c_") + ".popstripeRs{display:block; position:relative; text-decoration:none; padding:0.5em 1.5em 0.5em 1em; border:0; margin:0; border-top:1px solid #6F6F6F; border-bottom:1px solid #565656; background-color:#5F5F5F; color:white;}." + N("c_") + ".popstripeRs:hover{border-top:1px solid #565656; background-color:#565656; text-decoration:underline;}." + N("j_") + "{position:absolute; top:0px;" + N(W) + ":0.5em; background-position:center " + N(W) + "; background-repeat:no-repeat; background-size:auto 1em; height:100%; width:25%;}" :
            "") + "</style>";
        return J(Q)
    };
    var jg = -1;

    function kg(a) {
        return a ? a : Ra().data.hm || Ra().data.t ? "#bdbdbd" : null
    }

    function lg(a, b, c, d, e) {
        function f(r) {
            return (r = g(r)) ? Df(r) : void 0
        }
        var g = ef(c),
            h = ff(c),
            k = g("type") || "ads",
            m = Pa(),
            q = Ra(),
            n = "#0000CC";
        if (q.data.hm || q.data.t) n = "#1a0dab";
        n = g("colorTitleLink", n);
        e = {
            caps: a,
            le: gf(c),
            dg: hf(c),
            Vd: kg(g("colorAdSeparator")),
            qg: 20,
            rg: g("colorAdBorder"),
            De: g("colorText"),
            Ee: n,
            we: g("colorBackground"),
            xe: g("colorBorder"),
            ve: g("colorAttribution"),
            ye: g("colorKeyword"),
            fontFamily: f("fontFamily"),
            Oe: f("fontFamilyAttribution"),
            Se: jf(c) || g("fontSizeTitle"),
            Pe: g("fontSizeAttribution"),
            Yf: g("titleBold"),
            Qc: e.Qc,
            Lf: g("rolloverLinkBold"),
            Mf: g("rolloverLinkColor"),
            Kf: g("rolloverLinkBackgroundColor"),
            Nf: g("rolloverLinkUnderline"),
            Jf: g("rolloverAdBackgroundColor"),
            yf: g("noTitleUnderline"),
            ng: h("adBorderSelections", "left"),
            Md: h("adBorderSelections", "right"),
            og: h("adBorderSelections", "top"),
            mg: h("adBorderSelections", "bottom"),
            ge: h("borderSelections", "left"),
            he: h("borderSelections", "right"),
            je: h("borderSelections", "top"),
            ee: h("borderSelections", "bottom"),
            wf: g("lineHeightTitle"),
            ce: g("attributionSpacingBelow"),
            hf: !0,
            jf: !!q.data.hm,
            nf: !!q.data.t,
            te: !!m.data.cucai,
            se: !!m.data.cgkc,
            re: !!m.data.cgab
        };
        g("adIconUrl") && (e.Td = g("adIconWidth"), e.Od = g("adIconHeight"), e.Pd = g("adIconSpacingAbove"), e.Rd = g("adIconSpacingBefore"), e.Qd = g("adIconSpacingAfter"), e.Sd = g("adIconSpacingBelow"));
        "relatedsearch" == k && (e.type = "relatedsearch", e.Fe = g("columnSpacing"), e.bf = g("horizontalFlow"), e.af = g("horizontalAlignment"));
        e.eg = g("webFontFamily");
        e.fg = g("webFontFamilyAttribution");
        e = hg(e);
        b.appendChild(eg(e));
        c = Bc() ? null : kf(c);
        a = {
            caps: a,
            type: k,
            $e: g("hideSearchInputBorder"),
            Ze: g("hideSearchButtonBorder"),
            ze: g("colorSearchBox"),
            Ae: g("colorSearchButton"),
            Ce: g("colorSearchButtonText"),
            kg: g("widthSearchInput"),
            hg: g("widthSearchButton"),
            Re: g("fontSizeSearchInput"),
            Qe: g("fontSizeSearchButton"),
            Ye: g("heightSearchInput"),
            Xe: g("heightSearchButton"),
            Be: g("colorSearchButtonBorder"),
            jg: g("widthSearchButtonBorder"),
            Df: g("radiusSearchInputBorder"),
            be: g("attributionBold"),
            de: g("attributionUppercase"),
            Zf: g("titleUppercase"),
            gg: c,
            Nd: g("adBorderWidth")
        };
        if (c && -1 == jg) {
            jg = 5;
            var w = function() {
                0 < jg && (cf(d), jg--, setTimeout(w, 1E3))
            };
            w()
        }
        a = ig(a);
        b.appendChild(eg(a))
    };
    var mg = /^((https?):)?\/\/afs.googleusercontent.com\//;

    function ng(a, b, c) {
        if (mg.test(b))
            for ("http:" == b.substring(0, 5) && c ? b = "https:" + b.substring(5) : "//" == b.substring(0, 2) && (b = (c ? "https:" : "") + b), c = 0; c < a.length; c++) a[c].adIconUrl = b
    }
    ng = y(ng, "aiIID");

    function og() {
        this.Ga = !1;
        this.Cb = {
            x: 0,
            y: 0
        };
        this.Tc = this.Tc.bind(this);
        this.Sc = this.Sc.bind(this);
        this.Rc = this.Rc.bind(this)
    }

    function pg(a, b) {
        var c = qg;
        "ontouchstart" in document.documentElement ? (a.addEventListener("touchstart", c.Tc), a.addEventListener("touchmove", c.Sc), a.addEventListener("touchend", function(d) {
            return c.Rc(d, b)
        })) : a.addEventListener("mousedown", function(d) {
            (d.which ? 2 > d.which : 2 > d.button) && b.call()
        })
    }
    og.prototype.Tc = function(a) {
        this.Ga = !1;
        a = a.touches;
        1 == a.length && (a = a[0], this.Cb.x = a.clientX, this.Cb.y = a.clientY, this.Ga = !0)
    };
    og.prototype.Sc = function(a) {
        a = a.touches[0];
        if (10 < Math.abs(a.clientX - this.Cb.x) || 10 < Math.abs(a.clientY - this.Cb.y)) this.Ga = !1
    };
    og.prototype.Rc = function(a, b) {
        this.Ga && b.call();
        this.Ga = !1
    };

    function rg() {};

    function sg(a, b) {
        a.addEventListener("mouseup", function(c) {
            2 !== c.button && b(c)
        })
    };

    function tg(a) {
        var b = "https" == window.location.protocol;
        a = a.clicktrackUrl;
        return Pa().data.ct && wa(a) ? Ya(a, function(c) {
            return !(0 == c.indexOf("http:") && b)
        }) : []
    }

    function ug(a, b) {
        a = a.getElementsByTagName("a");
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            (d.hasAttribute ? d.hasAttribute("data-notrack") : d.getAttribute("data-notrack")) || sg(d, function() {
                for (var e = [], f = p(b), g = f.next(); !g.done; g = f.next()) g = new Fc(g.value), v(g, "nc", [Math.round(9E6 * Math.random()), (new Date).getTime()].join("")), e.push(Gc(g));
                if (window.navigator.sendBeacon)
                    for (e = p(e), g = e.next(); !g.done; g = e.next()) window.navigator.sendBeacon(g.value);
                else
                    for (f = 0; f < e.length; f++) kc(e[f])
            })
        }
    }

    function vg(a, b, c) {
        if (Pa().data.ct && (a = tg(a), 0 < a.length))
            if (Pa().data.alct) {
                c = ze("block", "" + c, a);
                a = Za(Zd("div", "b_", b));
                a = a.concat(Za(Zd("tr", "b_", b)));
                a = a.concat(Za(Zd("li", "b_", b)));
                var d;
                for (b = 0; d = a[b]; b++) {
                    var e = c;
                    e = ze("ad", "" + (b + 1), e);
                    ug(d, e)
                }
            } else ug(b, a)
    };
    var wg = z(function(a, b) {
        var c = a.resultsPageBaseUrl,
            d = a.resultsPageQueryParam,
            e = b[0] && b[0].adtype;
        b = p(b);
        for (var f = b.next(); !f.done; f = b.next()) {
            f = f.value;
            e && (f = f[e]);
            var g = f.t,
                h = f.afdt;
            if (null != g && null != h) {
                if (!c) throw ad("resultsPageBaseUrl resultsPageBaseUrl needs to be set.");
                var k = new Fc(c);
                v(k, d, g);
                v(k, "afdToken", h);
                null != a.personalizedAds && v(k, "pcsa", "" + a.personalizedAds);
                f.l = Gc(k);
                f.u = Gc(k)
            }
        }
    }, "fRSCL");

    function xg() {
        var a = {
            qc: Bc()
        };
        a = a || {};
        var b = a.qc;
        return J("<style" + (a.sg ? ' data-permanent="true"' : "") + ">body{-webkit-text-size-adjust:100%; font-family:arial,sans-serif;}div{" + yg(0) + "max-width:100%;}span:last-child, div:last-child{" + yg(1) + "}." + N("x_") + "{" + yg(1) + "}." + N("l_") + ">span:last-child, ." + N("l_") + ">div:last-child, ." + N("y_") + ", ." + N("y_") + ":last-child{" + yg(0) + "}." + N("n_") + "{-ms-overflow-style:none; scrollbar-width:none;}." + N("n_") + "::-webkit-scrollbar{display:none;}a{text-decoration:none; text-transform:none; color:inherit; display:inline-block;}span{" +
            yg(0) + "display:inline-block; overflow:hidden; text-transform:none;}img{border:none; max-width:100%; max-height:100%;" + (b ? "min-width:1px; min-height:1px;" : "") + "}." + N("k_") + "{display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; display:flex;" + zg("flex-start") + "box-sizing:border-box; overflow:hidden;}." + N("u_") + "{position:relative; display:inline-block;}." + N("w_") + "{position:absolute; top:0; left:0; height:100%; background-repeat:no-repeat; background-size:auto 100%;}." + N("v_") + "{display:block;}." +
            N("t_") + "{" + Ag() + "}." + N("s_") + "{box-sizing:border-box; max-width:100%; max-height:100%; overflow:hidden;" + Ag() + "}." + N("p_") + "{-ms-flex-negative:1; text-overflow:ellipsis; white-space:nowrap;}." + N("r_") + "{-ms-flex-negative:1; max-width: 100%;}." + N("o_") + "{overflow:hidden;}." + N("q_") + "{white-space:nowrap;}." + N("z_") + "{cursor:pointer;}." + N("aa_") + "{display:none; position:absolute; z-index:1;}." + N("m_") + ">div:not(." + N("aa_") + ") {display:-webkit-inline-box; display:-moz-inline-box; display:-ms-inline-flexbox; display:-webkit-inline-flex; display:inline-flex; vertical-align:middle;}." +
            N("m_") + ".topAlign>div{vertical-align:top;}." + N("m_") + ".centerAlign>div{vertical-align:middle;}." + N("m_") + ".bottomAlign>div{vertical-align:bottom;}." + N("m_") + ">span, ." + N("m_") + ">a, ." + N("m_") + ">img, ." + N("m_") + "{display:inline; vertical-align:middle;}.si101:nth-of-type(5n+1) > .si141{border-left: #1f8a70 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+2) > .si141{border-left: #1f8a70 7px solid;}.si101:nth-of-type(5n+3) > .si141{border-left: #bedb39 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+4) > .si141{border-left: #bedb39 7px solid;}.si101:nth-of-type(5n+5) > .si141{border-left: #ffe11a 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+6) > .si141{border-left: #ffe11a 7px solid}.si101:nth-of-type(5n+2) > .si141{border-left: #fd7400 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+3) > .si141{border-left: #fd7400 7px solid;}.si101:nth-of-type(5n+4) > .si141{border-left: #004358 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+5) > .si141{border-left: #004358 7px solid;}." +
            N("ba_") + "{cursor:pointer;}.si130{display:inline; text-transform:inherit;}</style>")
    }

    function Ag() {
        return Df("display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; display:flex;" + zg("center") + Bg("center"))
    }

    function Cg(a, b) {
        var c = "",
            d = b ? "right" : "left";
        b = b ? "left" : "right";
        for (var e = Ef(a), f = e.length, g = 0; g < f; g++) {
            var h = e[g];
            switch (xa(h) ? h.toString() : h) {
                case "fw":
                    c += "font-weight:";
                    h = a.fw;
                    switch (xa(h) ? h.toString() : h) {
                        case 1:
                            c += "100";
                            break;
                        case 2:
                            c += "400";
                            break;
                        case 3:
                            c += "700";
                            break;
                        case 0:
                            c += "400"
                    }
                    break;
                case "bac":
                    c += "background-color:" + N(a.bac);
                    break;
                case "br":
                    c += "border-radius:" + N(a.br) + "px";
                    break;
                case "bw":
                    c += "border:" + N(a.bw) + "px solid " + N(a.boc);
                    break;
                case "bb":
                    c += "border-bottom:" + N(a.bb.w) + "px solid " +
                        N(a.bb.c);
                    break;
                case "bl":
                    c += "border-left:" + N(a.bl.w) + "px solid " + N(a.bl.c);
                    break;
                case "brt":
                    c += "border-right:" + N(a.brt.w) + "px solid " + N(a.brt.c);
                    break;
                case "bt":
                    c += "border-top:" + N(a.bt.w) + "px solid " + N(a.bt.c);
                    break;
                case "ff":
                    c += "font-family:" + N(a.ff) + ",arial,sans-serif;";
                    break;
                case "fs":
                    c += "font-size:" + N(a.fs) + "px";
                    break;
                case "h":
                    c += "height:" + N(a.h) + (-1 != ("" + a.h).indexOf("%") ? "" : "px");
                    break;
                case "i":
                    c += "font-style:" + N(K(a.i, !0) ? "italic" : "normal");
                    break;
                case "lh":
                    c += "line-height:" + N(a.lh) + "px";
                    break;
                case "maxh":
                    c += "max-height:" + N(a.maxh) + "px";
                    break;
                case "maxw":
                    c += "max-width:" + N(a.maxw) + "px";
                    break;
                case "mb":
                    c += "margin-bottom:" + N(a.mb) + "px";
                    break;
                case "minh":
                    c += "min-height:" + N(a.minh) + "px";
                    break;
                case "minw":
                    c += "min-width:" + N(a.minw) + "px";
                    break;
                case "ml":
                    c += "margin-" + N(d) + ":" + N(a.ml) + "px";
                    break;
                case "mr":
                    c += "margin-" + N(b) + ":" + N(a.mr) + "px";
                    break;
                case "mt":
                    c += "margin-top:" + N(a.mt) + "px";
                    break;
                case "op":
                    c += "opacity:" + N(a.op);
                    break;
                case "pb":
                    c += "padding-bottom:" + N(a.pb) + "px";
                    break;
                case "pl":
                    c += "padding-" +
                        N(d) + ": " + N(a.pl) + "px";
                    break;
                case "pr":
                    c += "padding-" + N(b) + ": " + N(a.pr) + "px";
                    break;
                case "pt":
                    c += "padding-top:" + N(a.pt) + "px";
                    break;
                case "tc":
                    c += "color:" + N(a.tc);
                    break;
                case "u":
                    c += "text-decoration:" + N(a.u ? "underline" : "none");
                    break;
                case "st":
                    c += "text-decoration:" + N(a.st ? "line-through" : "none");
                    break;
                case "po":
                    h = a.po;
                    h = Df((h.t ? N(void 0) + "top:" + N(h.t) + "px;" : "") + (h.r ? N(void 0) + N(b) + ":" + N(h.r) + "px;" : "") + (h.b ? N(void 0) + "bottom:" + N(h.b) + "px;" : "") + (h.l ? N(void 0) + N(d) + ":" + N(h.l) + "px;" : ""));
                    c += h + "position:absolute";
                    break;
                case "bos":
                    h = a.bos;
                    for (var k = "", m = h.length, q = 0; q < m; q++) {
                        var n = h[q];
                        k += N(n.xo) + "px " + N(n.yo) + "px " + (n.br ? N(n.br) + "px " + (n.sr ? N(n.sr) + "px " : "") : "") + N(n.sc) + (q != Ff(h).length - 1 ? "," : "")
                    }
                    h = Df(k);
                    h = Kf("" + h);
                    h = Df("-webkit-box-shadow:" + N(h) + "; -moz-box-shadow:" + N(h) + "; -ms-box-shadow:" + N(h) + "; box-shadow:" + N(h) + ";");
                    c += h;
                    break;
                case "w":
                    c += "width:" + N(a.w) + (-1 != ("" + a.w).indexOf("%") ? "; -ms-flex-negative:1;" + yg(1) : "px");
                    break;
                case "tt":
                    switch (c += "text-transform:", h = a.tt, xa(h) ? h.toString() : h) {
                        case 1:
                            c +=
                                "uppercase";
                            break;
                        default:
                            c += "initial"
                    }
            }
            c += ";"
        }
        return Df(c)
    }

    function yg(a) {
        return Df("-webkit-box-flex:" + N(a) + " 0; -webkit-flex-shrink:" + N(a) + "; flex-shrink:" + N(a) + ";")
    }

    function zg(a) {
        var b = "",
            c = "" + (0 == ("" + Ff(a)).indexOf("flex-") ? N(("" + Ff(a)).substring(5)) : N(a));
        c = Kf(c);
        b += "-ms-flex-align:" + N(c) + "; -webkit-box-align:" + N(c) + "; -webkit-align-items:" + N(a) + "; align-items:" + N(a) + ";";
        return Df(b)
    }

    function Bg(a) {
        var b = "",
            c = "" + (0 == ("" + Ff(a)).indexOf("flex-") ? N(("" + Ff(a)).substring(5)) : N(a));
        c = Kf(c);
        b += "-ms-flex-pack:" + N(c) + "; -webkit-box-pack:" + N(c) + "; -webkit-justify-content:" + N(a) + "; justify-content:" + N(a) + ";";
        return Df(b)
    };

    function Dg(a, b) {
        var c = [];
        b = p(b.s || []);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = d.r;
            e && e.hasOwnProperty("ff") && (e.ff = Df(e.ff));
            (e = d.hr) && e.hasOwnProperty("ff") && (e.ff = Df(e.ff));
            c.push({
                className: d.sk,
                rules: d.r || {},
                jb: d.hr || {}
            })
        }
        a = a.isRtl;
        b = "<style>";
        d = c.length;
        for (e = 0; e < d; e++) {
            var f = c[e];
            b += (L(f.rules) && 0 < Ef(f.rules).length ? "." + N(f.className) + "{" + Cg(f.rules, a) + "}" : "") + (L(f.jb) && 0 < Ef(f.jb).length ? "." + N(f.className) + ":hover{" + Cg(f.jb, a) + "}" : "")
        }
        return J(b + "</style>")
    };

    function Eg(a) {
        return ac(a)
    };

    function Fg(a) {
        if (null !== a && void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
    };

    function Gg(a, b) {
        a.src = ub(b);
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        var d = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]");
        (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function Hg(a) {
        a.write.apply(a, ja(sa.apply(1, arguments).map(Eg)))
    };

    function Ig(a, b) {
        if (!a) return !1;
        if (3 == a.nodeType && a.nodeValue && (b && (a.nodeValue += " ..."), 4 < a.nodeValue.length)) {
            b = a.nodeValue;
            var c = a.nodeValue.length - 1;
            b.length > c && (b = b.substring(0, c - 3) + "...");
            a.nodeValue = b;
            return !1
        }
        c = a.textContent || a.innerText;
        if (!c || c.length <= (b ? 0 : 4)) return a.parentNode.removeChild(a), !0;
        for (b = Ig(a.lastChild, b); b;) b = Ig(a.lastChild, b);
        return !1
    }

    function Mg(a, b) {
        if (!(0 >= b)) {
            for (var c = a.innerHTML.length; 0 < c && a.offsetHeight > b; c--)
                for (var d = a, e = Ig(d.lastChild, !1); e;) e = Ig(d.lastChild, e);
            a.offsetHeight > b && (Fg(a), a.innerHTML = ac(dc))
        }
    };
    var Ng = 1;

    function Og(a, b, c) {
        if (!c) return null;
        if ("." == c[0]) return b[c.substring(1)];
        c = p(c.split("."));
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            if (null == a) return null;
            if (Array.isArray(a)) {
                b = parseInt(b, 10);
                if (isNaN(b)) return null;
                a = a[b]
            } else if (xa(a) && a.hasOwnProperty(b)) a = a[b];
            else return null
        }
        return a
    };
    var Pg = null;

    function Qg(a, b, c) {
        var d = "A" === c.tagName ? c : c.querySelector("a");
        b.addEventListener("click", function(e) {
            Rg(a, b, c);
            Sg(e)
        });
        b.addEventListener("keydown", function(e) {
            if (32 == e.keyCode || 13 == e.keyCode) Rg(a, b, c), Sg(e), d && d.focus()
        });
        a.addEventListener("click", Tg);
        a.addEventListener("scroll", Tg);
        b.setAttribute("role", "button");
        b.setAttribute("tabindex", 0);
        d && b.setAttribute("aria-label", c.textContent)
    }

    function Sg(a) {
        a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = !0, a.returnValue = !1)
    }

    function Rg(a, b, c) {
        Pg && Pg != c && (Pg.style.display = "none", Pg = null);
        if (c.style.display && "none" != c.style.display) c.style.display = "none", Pg = null;
        else {
            a.appendChild(c);
            var d = he(b),
                e = ie(b),
                f = ie(c),
                g = ie(a),
                h = he(a),
                k = d.x + a.scrollLeft - h.x;
            d = d.y + a.scrollTop - h.y;
            switch (b.getAttribute("data-position")) {
                case "over":
                    b = e.width / 2 - f.width / 2;
                    e = e.height / 2 - f.height / 2;
                    break;
                default:
                    b = e.width / 2 - f.width / 2, e = e.height
            }
            h = a.scrollTop;
            var m = a.scrollTop + g.height - f.height - 10;
            c.style.left = Math.min(Math.max(Math.round(k + b), a.scrollLeft),
                a.scrollLeft + g.width - f.width - 10) + "px";
            c.style.top = Math.min(Math.max(Math.round(d + e), h), m) + "px";
            c.style.display = "block";
            Pg = c
        }
    }

    function Tg() {
        Pg && (Pg.style.display = "none", Pg = null)
    };

    function Ug(a) {
        var b = a.orientation,
            c = a.id,
            d = a.O,
            e = a.Xd,
            f = a.overflow,
            g = a.Ge,
            h = a.qe,
            k = a.mf,
            m = a.href,
            q = a.qc,
            n = "",
            w = "" + N(0 == b ? "row" : "column");
        w = Kf(w);
        w = "-ms-flex-direction:" + N(w) + "; -webkit-box-orient:" + N(0 == b ? "horizontal" : "vertical") + "; -webkit-flex-direction:" + N(w) + "; flex-direction:" + N(w) + ";";
        w = Kf(w);
        var r = K(e, 0) || K(e, 1) || K(e, 2),
            x = K(e, 6) || K(e, 7) || K(e, 8),
            u = K(e, 3) || K(e, 4) || K(e, 5);
        var C = null != e ? Bg(K(e, 0) || K(e, 3) || K(e, 9) || K(e, 6) ? "flex-start" : K(e, 1) || K(e, 4) || K(e, 10) || K(e, 7) ? "center" : K(e, 2) || K(e, 5) || K(e,
            11) || K(e, 8) ? "flex-end" : "") : "";
        C = Kf("" + C);
        e = null != e ? zg(r ? "flex-start" : u ? "flex-end" : x ? "center" : K(e, 9) || K(e, 10) || K(e, 11) ? "stretch" : "") : "";
        e = Kf("" + e);
        var B = "";
        switch (f) {
            case 2:
                B += "-ms-flex-wrap:wrap; -webkit-flex-wrap:wrap; flex-wrap:wrap;";
                break;
            case 3:
            case 4:
                B += "overflow-" + N(0 == b ? "x" : "y") + ":auto; -webkit-overflow-scrolling: touch; scroll-behavior: smooth;" + (L(q) && 3 == f ? "padding-" + N(0 == b ? "bottom" : "right") + ": 25px;" : "")
        }
        b = Kf(B);
        q = r ? "topAlign" : x ? "centerAlign" : u ? "bottomAlign" : "";
        c = (c ? 'id="' + M(c) + '"' : "") +
            ' class="' + M("k_") + (d ? " " + M(d) : "") + (K(f, 3) ? " " + M("l_") : "") + (K(g, 4) ? " " + M("m_") + " " + M(q) : "") + (K(f, 4) ? " " + M("l_") + " " + M("n_") : "") + '"' + (h ? ' data-drop="true"' : "") + ' style="' + M(N(w)) + M(N(C)) + M(N(e)) + M(N(b)) + (k ? "position:relative;" : "") + '"';
        c = Jf(c);
        n += m ? "<a" + Rf(Vg(a)) + Rf(Pf(c)) + "></a>" : "<div" + Rf(Pf(c)) + "></div>";
        return J(n)
    }

    function Wg(a) {
        a = a || {};
        var b = a.id,
            c = a.text,
            d = a.Yd,
            e = a.O,
            f = a.Af,
            g = a.$f,
            h = a.fb,
            k = a.eb,
            m = a.href,
            q = "",
            n = K(f, 1) ? "o_ " + (K(g, 0) ? "p_" : "q_") : "r_";
        g = null != f ? 'data-lines="' + M(f) + '"' + (null != g ? ' data-truncate="' + M(g) + '"' : ' data-truncate="0"') : "";
        g = Jf(g);
        c = (L(h) && L(f) && 1 < f ? "<span" + Rf(Pf(g)) + ' style="display: -webkit-inline-box; -webkit-box-orient: vertical; overflow: hidden;' + (k ? "-webkit-line-clamp: " + M(N(f)) + ";" : "") + '">' : "") + yf(null != c ? c : "") + (L(h) && L(f) && 1 < f ? "</span>" : "");
        c = Hf(c);
        q += m ? "<a" + (b ? ' id="' + M(b) + '"' :
            "") + ' class="' + M(n) + " " + M(null != e ? e : "") + '" aria-label="' + M(null != d ? d : "") + '"' + (L(h) && L(f) && 1 < f ? "" : Rf(Pf(g))) + Rf(Vg(a)) + ">" + c + "</a>" : "<span" + (b ? ' id="' + M(b) + '"' : "") + ' aria-label="' + M(null != d ? d : "") + '"' + (L(h) && L(f) && 1 < f ? "" : Rf(Pf(g))) + ' class="' + M(n) + " " + M(null != e ? e : "") + '">' + c + "</span>";
        return J(q)
    }

    function Xg(a) {
        var b = a.src,
            c = a.id,
            d = a.gf,
            e = a.Zd,
            f = a.O,
            g = a.href,
            h = a.xf,
            k = "";
        c = (c ? 'id="' + M(c) + '"' : "") + (e ? ' aria-hidden="true" tabindex="-1"' : "") + ' class="' + M("s_") + (f ? " " + M(f) : "") + '"';
        c = Jf(c);
        b = '<img src="' + M(Xf(b)) + '"' + (d ? ' aria-label="' + M(d) + '"' : "") + (h ? ' loading="lazy"' : "") + ">";
        b = Hf(b);
        k += g ? "<a" + Rf(Vg(a)) + Rf(Pf(c)) + ">" + b + "</a>" : "<div" + Rf(Pf(c)) + ">" + b + "</div>";
        return J(k)
    }

    function Yg(a) {
        var b = a.Ef,
            c = a.Ff,
            d = a.id,
            e = a.Sf,
            f = a.Tf,
            g = a.ug,
            h = a.vg,
            k = a.O,
            m = a.href,
            q = a.vb,
            n = a.Oc,
            w = a.Zb,
            r = "";
        h = null != h ? h : "";
        a = "" + Sf((a.tg ? "" : h) + (null != e ? e : "/images/afs/sr-star-off.png"));
        a = If(a);
        f = "" + Sf((g ? "" : h) + (null != f ? f : "/images/afs/sr-star-on.png"));
        f = If(f);
        b = b = {
            href: m,
            vb: q,
            Oc: n,
            Zb: w,
            He: Hf("<div" + (d ? ' id="' + M(d) + '"' : "") + ' class="' + M("t_") + (k ? " " + M(k) : "") + '"><div class="' + M("u_") + '"><img src="' + M(Xf(a)) + '" class="' + M("v_") + '" role="none"/><div class="' + M("w_") + '" style="background-image: url(' +
                M(Xf(f)) + "); width: " + M(N(20 * Math.max(Math.min(b, 5), 0))) + '%" role="img"' + (c ? ' aria-label="' + M(c) + '"' : ' aria-hidden="true"') + "></div></div></div>")
        };
        c = b.He;
        b = J(b.href ? "<a" + Rf(Vg(b)) + ">" + yf(c) + "</a>" : yf(c));
        return J(r + b)
    }

    function Vg(a) {
        a = a || {};
        var b = a.vb,
            c = a.Oc,
            d = a.Zb;
        return Cf('href="' + M(Sf(a.href)) + '"' + (d ? ' data-notrack="true"' : "") + (null != c ? ' data-nb="' + M(c) + '"' : "") + Rf(Cf('target="' + (b ? "_blank" : "_top") + '"')))
    };
    var Zg = {},
        $g = null;

    function ah(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 3;
        void 0 === a && (a = 0);
        if (!$g)
            for ($g = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Zg[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === $g[h] && ($g[h] = g)
                }
            }
        a = Zg[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | m >> 4];
            m = a[(m & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = "" + g + k + m + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = "" + a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var bh = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;
    var ch = Object,
        dh = ch.freeze,
        eh = [];
    Object.isFrozen(eh) || (bh ? eh[bh] |= 1 : void 0 !== eh.pc ? eh.pc |= 1 : Object.defineProperties(eh, {
        pc: {
            value: 1,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }));
    dh.call(ch, eh);

    function fh() {
        this.Je = Wd();
        this.Eb = null
    }

    function gh(a, b) {
        var c = hh,
            d = c.Eb ? c.Eb.getData() : {};
        c = c.Je;
        return fg(a(b || gg, d), c)
    }
    fh.prototype.Ad = function(a) {
        a = a({}, this.Eb ? this.Eb.getData() : {});
        return String(a)
    };
    var ih = 0;

    function jh(a) {
        if (!a) return {};
        var b = {};
        a = p(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[c.sk] = {
            rules: c.r,
            jb: c.hr
        };
        return b
    }
    var hh = new fh,
        kh = {},
        lh = (kh[2] = "x_", kh[3] = "y_", kh);

    function mh(a, b, c, d, e, f) {
        function g(r, x, u) {
            var C = "adBlock" == r.dbk;
            u = {
                id: C ? "adBlock" : x,
                O: (r.sk || "") + " " + (void 0 === u ? "" : u),
                vb: d
            };
            x = "ctc" === r.dbk;
            var B = "ctc.bt" === r.dbk;
            if (m || q || x || B) u.vb = !1;
            B = r.dbk ? Og(c, b, r.dbk) : void 0;
            var F = r.acc && r.acc.alt ? Og(c, b, r.acc.alt) : void 0,
                I = r.acc && r.acc.ah;
            if (r.dbk && !B && !C || r.hnk && null != Og(c, b, r.hnk)) return null;
            x = null;
            var G = 0;
            if (r.ac) {
                var Q = r.ac[0],
                    W = Q.act,
                    X = Q.dbk ? Og(c, b, Q.dbk) : void 0,
                    Tb = {};
                if (Q.ad)
                    for (var Ua = p(Q.ad), ma = Ua.next(); !ma.done; ma = Ua.next()) ma = ma.value, Tb[ma.n] =
                        ma.v;
                Ua = Q.en;
                var Ub = ma = void 0;
                switch (W) {
                    case 0:
                        u.href = X;
                        u.Zb = !!Q.nm;
                        u.Oc = null != Q.nb ? Q.nb : Tb.nb;
                        break;
                    case 3:
                        u.O += " z_";
                        Ub = "aa_";
                        ma = "e" + Ng++;
                        u.id || (u.id = "e" + Ng++);
                        k.push({
                            df: u.id,
                            me: ma
                        });
                        break;
                    case 5:
                        if (G = parseInt(X, 10)) u.O += " ba_"
                }
                Ua && (x = g(Ua, ma, Ub))
            }
            X = null;
            Q = r.nt;
            W = r.lr || {};
            X = (h[r.sk] || {}).rules || {};
            switch (Q) {
                case 0:
                    B = W.o;
                    null == B && (B = 0);
                    u.orientation = B;
                    u.Xd = W.a;
                    u.qe = 1 == W.t;
                    u.overflow = W.ov;
                    u.Ge = W.cf;
                    u.mf = W.ap && !X.po;
                    u.qc = Bc();
                    X = Ug;
                    break;
                case 1:
                    u.text = J(B);
                    u.Yd = u.text.toString().replace(/(<([^>]+)>)/g,
                        "");
                    u.Af = W.nl;
                    u.$f = W.t;
                    u.fb = Ja().fb();
                    u.eb = Ja().eb();
                    X = Wg;
                    break;
                case 2:
                    u.src = X.sfc && "svg" == B.substr(-3) ? B + "?c=" + encodeURIComponent(X.sfc) : B;
                    ih += 1;
                    u.xf = !!Ja().data.elli && ih > Ka();
                    u.gf = F;
                    u.Zd = I;
                    X = Xg;
                    break;
                case 4:
                    "string" == typeof B && (B = parseFloat(B));
                    if ("number" != typeof B || isNaN(B)) return null;
                    u.Sf = X.bu;
                    u.Tf = X.fu;
                    u.Ef = B;
                    u.Ff = F;
                    X = Yg;
                    break;
                default:
                    return null
            }
            if (B = lh[W.sb]) u.O += " " + B;
            var P = gh(X, u);
            r.hasOwnProperty("hne") && w[r.hne].push(P);
            if (C) {
                var Lc = z(function() {
                    for (var fa = p(w[1]), ha = fa.next(); !ha.done; ha =
                        fa.next()) {
                        ha = ha.value;
                        var Ha = !1;
                        "auto" === P.style.overflowX ? Ha = 0 !== P.scrollLeft : "auto" === P.style.overflowY && (Ha = 0 !== P.scrollTop);
                        ha.style.visibility = Ha ? "visible" : "hidden"
                    }
                    fa = p(w[2]);
                    for (ha = fa.next(); !ha.done; ha = fa.next()) ha = ha.value, Ha = !0, "auto" === P.style.overflowX ? Ha = P.scrollLeft !== P.scrollWidth - P.clientWidth : "auto" === P.style.overflowY && (Ha = P.scrollTop !== P.scrollHeight - P.clientHeight), ha.style.visibility = Ha ? "visible" : "hidden"
                }, "hneSc");
                z(function() {
                    e && (P.addEventListener("scroll", Lc), e.addEventListener("resize",
                        Lc))
                }, "hneAsc")()
            }
            G && P.addEventListener("click", function() {
                var fa = P.ownerDocument.getElementById("adBlock");
                "auto" === fa.style.overflowX ? fa.scrollLeft += G : "auto" === fa.style.overflowY && (fa.scrollTop += G)
            });
            r = r.ch;
            if (0 == Q && r && 0 < r.length) {
                C = !1;
                for (u = 0; u < r.length; u++) B = g(r[u]), null != B && (C = !0, P.appendChild(B));
                if (!C) return null
            }
            return x ? (r = document.createDocumentFragment(), r.appendChild(P), r.appendChild(x), r) : P
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? [] : f;
        var h = jh(a.s),
            k = [],
            m = !!Og(c, b, "ctc.cott"),
            q = !!Og(c, b, "ctd"),
            n = {},
            w = (n[1] = [], n[2] = [], n);
        n = "e" + Ng++;
        a = g(a.l || {}, n, f.join(" "));
        a || (a = document.createElement("span"), a.id = n);
        return {
            rootElement: a,
            lg: k,
            Of: n
        }
    }

    function nh(a, b) {
        function c(n) {
            var w = n.style.wordWrap,
                r = n.style.whiteSpace;
            n.style.whiteSpace = "nowrap";
            n.style.wordWrap = "normal";
            var x = n.offsetHeight;
            n.style.whiteSpace = r;
            n.style.wordWrap = w;
            return x
        }

        function d(n, w) {
            var r = 0 == n.childElementCount;
            w = w && "true" == n.getAttribute("data-drop");
            if (r || w) r = n.parentNode, r.removeChild(n), n.id != b && d(r, w)
        }
        a = a.querySelectorAll("[data-lines]");
        for (var e = a.length - 1; 0 <= e; e--) {
            var f = a[e],
                g = f.parentNode,
                h = parseInt(f.getAttribute("data-lines"), 10),
                k = parseInt(f.getAttribute("data-truncate"),
                    10);
            if (1 != h || 0 != k) {
                var m = f.getBoundingClientRect(),
                    q = g.getBoundingClientRect();
                m = q.left > m.left || q.right < m.right;
                q = Ja().fb() && Ja().eb() && yc();
                0 !== k || q ? 1 === k && (k = 1 < h ? c(f) : void 0, q = Bc() ? -1 : 0, (1 == h ? f.offsetWidth < f.scrollWidth + q : 1 < h && f.offsetHeight / k > h) || m) && (g.removeChild(f), d(g, !0)) : (g = c(f), (1 < h && f.offsetHeight / g > h || m) && Mg(f, (g + 1) * h))
            }
        }
    };

    function oh(a, b) {
        return J('<div style="display:none;"' + (b ? ' id="_' + M(b) + "_" + M(null != a ? a : "unknown_pubId") + '"' : "") + "></div>")
    };

    function ph(a) {
        this.Fb = a = a.url;
        var b = /[?&]dsh=1(&|$)/.test(a);
        this.rc = !b && /[?&]ae=1(&|$)/.test(a);
        this.rd = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.ha = /[?&]adurl=([^&]*)/.exec(a)) && this.ha[1]) {
            try {
                var c = decodeURIComponent(this.ha[1])
            } catch (d) {
                c = null
            }
            this.Jb = c
        }
    }

    function qh(a, b) {
        return a.rc && a.Jb || a.rd ? 1 == b ? a.rc ? a.Jb : rh(a, "&dct=1") : 2 == b ? rh(a, "&ri=2") : rh(a, "&ri=16") : a.Fb
    }

    function rh(a, b) {
        return a.ha ? a.Fb.slice(0, a.ha.index) + b + a.Fb.slice(a.ha.index) : a.Fb + b
    };
    var sh = /^((market|itms|intent|itms-appss):\/\/)/i;
    var th = z(function(a) {
        if (a.hasAttribute("data-ohref")) var b = a.getAttribute("data-ohref");
        else b = a.href, a.setAttribute("data-ohref", b);
        var c = b;
        var d = new ph({
            url: c
        });
        c = d.rc && d.Jb || d.rd ? navigator.sendBeacon ? navigator.sendBeacon(rh(d, "&act=1&ri=1"), "") ? qh(d, 1) : qh(d, 2) : qh(d, 0) : c;
        c = c instanceof Kb || !sh.test(c) ? c : new Kb(c, Lb);
        b != c && fc(a, c)
    }, "mDS");
    var uh = /([?|&]{1}nm=)([\d]{1,})/,
        vh = /(\?|&)clkt=-?[\d]*/g,
        wh = /(\?|&)bg=[^&]*/g,
        xh = /(\?|&)nx=-?[\d]+/g,
        yh = /(\?|&)ny=-?[\d]+/g;

    function zh(a) {
        return function() {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.Aa) {
                    var d = c.element.href,
                        e = d.match(uh);
                    e ? 3 == e.length && (d = d.replace(uh, e[1] + (parseInt(e[2], 10) + 1))) : d += (-1 == d.indexOf("?") ? "?" : "&") + "nm=1";
                    Ah(c, d)
                }
            }
        }
    }

    function Bh(a) {
        return function() {
            if (a.wc) {
                var b = "&clkt=" + ((new Date).getTime() - a.wc),
                    c = a.element.href;
                c = c.replace(vh, "");
                Ah(a, c + b)
            }
        }
    }

    function Ch(a) {
        return function(b) {
            a.wc = (new Date).getTime();
            var c = ge(a.element),
                d = Math.round(b.clientX - c.x);
            b = Math.round(b.clientY - c.y);
            c = a.element.href;
            c = c.replace(xh, "");
            c = c.replace(yh, "");
            Ah(a, c + ("&nx=" + d) + ("&ny=" + b))
        }
    }

    function Dh(a) {
        return function() {
            var b = a.element.ownerDocument;
            if (b = (b.defaultView || b.parentWindow).csabg) {
                b = "&bg=" + b.ic();
                var c = a.element.href;
                c = c.replace(wh, "");
                Ah(a, c + b)
            }
        }
    }

    function Eh(a) {
        a.Aa && (a.element.addEventListener("mouseover", zh([a])), a.element.addEventListener("mousedown", Ch(a)));
        var b = Bh(a),
            c = Dh(a);
        sg(a.element, function(d) {
            Ja().data.ecde && (vd(".aCS", Date.now()), ud());
            a.Aa && (b(d), c(d));
            try {
                th(a.element)
            } catch (e) {}
        })
    }

    function Fh(a, b, c) {
        return -1 == a.indexOf(b) && 16334 > a.length + b.length && (a += b + encodeURIComponent(c), 16334 < a.length) ? a.substring(0, 16334) : a
    }

    function Gh(a, b) {
        Le(a.element, "mousedown", function() {
            try {
                var c = Te(b, !0);
                var d = Te(b, !1)
            } catch (f) {}
            if (c && d) {
                var e = a.element.href;
                e = Fh(e, "&is=", [d, c].join("x"));
                Ah(a, e)
            }
        })
    }

    function Hh(a, b, c, d) {
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            Eh(f);
            if (f.Aa) {
                var g = f.element.href;
                g = g.replace(Ih, "");
                g = -1 == g.indexOf("?") ? g + f.kd.replace(/^&/, "?") : g + f.kd;
                Ah(f, g)
            }
            if (f.Aa && (Gh(f, c), void 0 != d.refererUrl && (g = d.refererUrl, g = void 0 == g ? document.referrer : g, "" != g))) {
                var h = f.element.href;
                h = Fh(h, "&rurl=", g);
                Ah(f, h)
            }
        }
        0 < a.length && b.addEventListener("mouseover", zh(a))
    };

    function Jh(a, b, c) {
        this.kd = "&nb=" + (void 0 === b ? "" : b);
        this.Aa = void 0 === c ? !0 : c;
        this.element = a;
        this.wc = null
    }

    function Ah(a, b) {
        16384 < b.length || fc(a.element, b)
    }
    var Ih = /[&\?]nb=\d/;
    var Kh = {
        nt: 0,
        sk: "si128"
    };

    function Lh(a, b, c, d, e, f, g, h) {
        g = void 0 === g ? [] : g;
        h = void 0 === h ? null : h;
        this.ae = Hh;
        this.ga = [];
        this.Wa = null;
        this.I = f;
        this.Vf = eg(Dg(b, c));
        a: {
            var k = p(c.s || []);
            for (var m = k.next(); !m.done; m = k.next())
                if (m = m.value, "si128" == m.sk && m.r && m.r.bac) {
                    k = m;
                    break a
                }
            k = null
        }
        null != k && (this.Wa = mh({
            s: [k],
            l: Kh
        }, {}, {}).rootElement, this.Wa.removeAttribute("id"));
        a = p(a);
        for (m = a.next(); !m.done; m = a.next()) m = m.value, this.ga.push(mh(c, d, m[m.adtype], e, f, ["b_"]));
        this.$c = c.at;
        this.If = d;
        this.Nb = b;
        this.Bf = e;
        this.Qb = h;
        a: if (e = g, this.Wa)
            if (b =
                ((k || {}).r || {}).rsi) c = b;
            else {
                d = b = !1;
                if (4 == this.$c)
                    for (c = p(c.s || []), e = c.next(); !e.done; e = c.next())
                        if (e = e.value, "si101" === e.sk) {
                            if ("100%" !== e.r.w) {
                                c = [];
                                break a
                            }
                        } else {
                            if ("si144" === e.sk) {
                                d = b = !0;
                                break
                            }
                        }
                else b = e.includes(2), d = e.includes(3);
                c = [];
                for (e = 0; e < this.ga.length - 1; e++) c.push(e);
                b && c.unshift(-1);
                d && c.push(this.ga.length - 1)
            }
        else c = [];
        this.Dd = c
    }

    function Mh(a, b) {
        var c = a.I.document.head,
            d = b.parentNode;
        c.appendChild(a.Vf);
        var e = b;
        a.Qb && (c.appendChild(eg(Dg(a.Nb, a.Qb))), e = mh(a.Qb, a.If, {}, a.Bf, a.I).rootElement, d.replaceChild(e, b), e = d.querySelector("#adBlock"), e.setAttribute("aria-label", document.title), e.setAttribute("role", "region"));
        b = 0;
        for (d = -1; d < a.ga.length; d++) 0 <= d && e.appendChild(a.ga[d].rootElement), b < a.Dd.length && a.Dd[b] === d && (e.appendChild(a.Wa.cloneNode(!0)), b++);
        a = a = {
            Na: Na(Ma()),
            Wd: a.$c
        };
        b = a.Na;
        d = "";
        switch (a.Wd) {
            case 1:
                d += oh(b, "googAFS");
                break;
            case 2:
                d += oh(b, "googAFShPLAs");
                break;
            default:
                d += oh()
        }
        a = J(d);
        a = eg(a);
        e.appendChild(a);
        a.setAttribute("data-render-complete", !0);
        return e
    }
    Lh.prototype.Ad = function(a) {
        var b = this,
            c = null,
            d = Me();
        if ("MutationObserver" in window) return (new MutationObserver(function(e, f) {
            e = p(e);
            for (var g = e.next(); !g.done; g = e.next()) "data-render-complete" == g.value.attributeName && (d.resolve(c), f.disconnect())
        })).observe(a.parentElement, {
            subtree: !0,
            attributes: !0,
            attributeFilter: ["data-render-complete"]
        }), c = Mh(this, a), d.promise.then(function(e) {
            return Ne(b.I, e)
        }).then(function(e) {
            Nh(b, e, b.I, b.Nb);
            return e
        });
        c = Mh(this, a);
        this.I.setTimeout(function() {
            Nh(b, c, b.I,
                b.Nb);
            Ma().data.icv2 && "requestAnimationFrame" in b.I ? b.I.requestAnimationFrame(function() {
                d.resolve(c)
            }) : d.resolve(c)
        }, 0);
        return d.promise
    };

    function Nh(a, b, c, d) {
        for (var e = [], f = p(b.querySelectorAll("a[href]")), g = f.next(); !g.done; g = f.next())
            if (g = g.value, "true" != g.getAttribute("data-notrack")) {
                var h = g.getAttribute("data-nb") || void 0;
                e.push(new Jh(g, h, !!h))
            }
        f = p(b.querySelectorAll(".b_"));
        for (g = f.next(); !g.done; g = f.next()) g.value.setAttribute("data-bg", "true");
        a.ae(e, b, c.document.body, d);
        a = p(a.ga);
        for (d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            e = c;
            f = p(d.lg || []);
            for (g = f.next(); !g.done; g = f.next()) h = g.value, g = e.document.getElementById(h.me), h =
                e.document.getElementById(h.df), g && h && Qg(e.document.getElementById("adBlock"), h, g);
            nh(b, d.Of)
        }
    };

    function Oh(a, b) {
        a.addEventListener && a.addEventListener("message", b, !1)
    };

    function Ph(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Qh(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }

    function Rh(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (Qh(a, b)) return a;
            a: {
                try {
                    var d = a.parent;
                    if (d && d != a) {
                        var e = d;
                        break a
                    }
                } catch (f) {}
                e = null
            }
            if (!(a = e)) break
        }
        return null
    }

    function Sh() {
        var a = window;
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };

    function Th(a, b, c) {
        c = void 0 === c ? document : c;
        var d = Wd(c).createElement("SCRIPT");
        d.type = "text/javascript";
        b && (void 0 !== d.onreadystatechange ? d.onreadystatechange = function() {
            if ("complete" == d.readyState || "loaded" == d.readyState) try {
                b && b()
            } catch (f) {}
        } : d.onload = b);
        gc(d, vb(a));
        var e = c.getElementsByTagName("head")[0];
        if (e) try {
            t.setTimeout(function() {
                e.appendChild(d)
            }, 0)
        } catch (f) {}
    };

    function Uh(a, b, c) {
        var d = this;
        this.Uf = b;
        this.Ke = c;
        this.$ = "0";
        this.jd = null;
        this.I = a;
        this.qa = null;
        a && a.document && "complete" === a.document.readyState ? this.ab() : Le(a, "load", function() {
            return d.ab()
        })
    }
    l = Uh.prototype;
    l.ab = function() {
        var a = this;
        if (!this.qa) {
            var b = (new Xd(this.I.document)).createElement("IFRAME");
            b.frameBorder = "0";
            b.style.height = 0;
            b.style.width = 0;
            b.style.position = "absolute";
            this.qa = b;
            this.I.document.body && (this.I.document.body.appendChild(b), this.qa.contentDocument ? this.xb() : Le(this.qa, "load", function() {
                return a.xb()
            }))
        }
    };
    l.xb = function() {
        var a = this,
            b = this.qa;
        b && (b = b.contentDocument ? b.contentDocument : b.contentWindow ? b.contentWindow.document : null) && (this.$ = "1", b.open(), Hg(b, cc("<!doctype html><html><head></head><body></body></html>", null)), b.close(), Th(this.Uf, function() {
            return a.Tb()
        }, b))
    };
    l.Tb = function() {
        var a = this.qa;
        if (a)
            if (a = a.contentWindow, this.$ = "", a.botguard)
                if (a = a.botguard.bg) try {
                    this.jd = new a(this.Ke)
                } catch (b) {
                    this.$ = "5"
                } else this.$ = "3";
                else this.$ = "2"
    };
    l.ic = function() {
        if (this.$) return this.$;
        var a = this.jd;
        if (!a) return "5";
        if (!a.invoke) return "4";
        var b = "";
        try {
            a.invoke(function(c) {
                b = c
            })
        } catch (c) {
            return "6"
        }
        return "string" !== typeof b || 0 == b.length ? "6" : 3 > b.length ? "7" : 1350 < b.length ? "8" : b
    };
    l.ab = y(Uh.prototype.ab, "BGcI");
    l.xb = y(Uh.prototype.xb, "BGpI");
    l.Tb = y(Uh.prototype.Tb, "BGcBV");
    l.ic = y(Uh.prototype.ic, "BGgBR");

    function Vh(a) {
        var b = {};
        a = p(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = c.at;
            b[d] = b[d] || {};
            if (c.c) {
                b[d].containerMap = b[d].containerMap || {};
                for (var e = p(c.c), f = e.next(); !f.done; f = e.next()) b[d].containerMap[f.value] = c
            } else b[d]["default"] = c
        }
        this.Pc = b
    }

    function Wh(a, b, c) {
        var d = Xh[b];
        if (!a.Pc[d]) return null;
        b = a.Pc[d]["default"];
        return (a = a.Pc[d].containerMap) ? a[c] || b : b
    }
    var Yh = {},
        Xh = (Yh[0] = 1, Yh[3] = 2, Yh[2] = 4, Yh);
    var Zh = document;

    function $h(a, b) {
        b = b.document;
        var c = b.createElement("link");
        c.rel = "stylesheet";
        c.href = ub(a).toString();
        (a = hc('style[nonce],link[rel="stylesheet"][nonce]', c.ownerDocument && c.ownerDocument.defaultView)) && c.setAttribute("nonce", a);
        b.head.appendChild(c)
    }

    function ai() {
        this.ec = Ma().data.wftl || [];
        if (0 < this.ec.length) {
            var a = Ab(new db(eb, "https://fonts.googleapis.com/css"), {
                family: this.ec.join("|")
            });
            var b = Ja().data.fd || null;
            b && (a = sb(a, {
                display: b
            }))
        } else a = null;
        this.Id = a;
        this.uc = null;
        this.md = !1
    }

    function bi(a) {
        if (!a.md && Zh.fonts && "function" == typeof Zh.fonts.load) {
            a.md = !0;
            a = p(a.ec);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                var c = "",
                    d = b.split(":");
                2 === d.length && (b = d[0], "700" === d[1] && (c = "bold "));
                Zh.fonts.load(c + "12px " + b).catch(function(e) {
                    return void $c.log(e, "mffl")
                })
            }
        }
    };
    var qg = new og,
        ci = null,
        di = {
            ads: 0,
            rss: 2,
            pbs: 3,
            ad_data: 8
        },
        ei = {
            text_ads: 0,
            pla_npack: 3,
            related_search: 2
        };
    di.sbs = 5;
    var fi = {
            statusAdult: "s.aDULT",
            statusFaillisted: "s.fL",
            statusTrademark: "s.tM",
            statusNeedsReview: "s.nR"
        },
        O = {},
        gi = !1;

    function hi(a) {
        !ci && a.name && (ci = (a = a.name.match(/master-(\d+)/)) && a[1] ? a[1] : null);
        ci || (ci = -1);
        return ci
    }
    hi = y(hi, "gMN");
    var ii = {},
        ji = (ii.c_ = "0", ii.sl = "6", ii.d_ = "14", ii);

    function ki(a) {
        var b = [];
        a = a.getElementsByTagName("a");
        for (var c, d = 0; c = a[d]; d++)
            for (var e in ji) {
                if (c.classList) var f = c.classList.contains(e);
                else f = c.classList ? c.classList : ("string" == typeof c.className ? c.className : c.getAttribute && c.getAttribute("class") || "").match(/\S+/g) || [], f = 0 <= Wa(f, e);
                if (f) {
                    b.push(new Jh(c, ji[e]));
                    break
                }
            }
        return b
    }
    ki = y(ki, "gTASSL");

    function li(a) {
        var b = "master-" + hi(a);
        return Je(b, a)
    }
    li = y(li, "gMI");

    function mi(a, b, c) {
        try {
            if (a.document.getElementsByTagName("html")) {
                var d = a.document.getElementsByTagName("html")[0];
                d && (!d.lang && b && (d.lang = b), !d.dir && c && (d.dir = c))
            }
        } catch (e) {}
    }
    mi = y(mi, "sSILD");

    function ni(a, b) {
        var c = {};
        a = p(a);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, c[d.k] = d.v;
        b = p(b);
        for (d = b.next(); !d.done; d = b.next()) a = d.value, c[a.k] = a.v;
        return c
    }

    function oi(a, b, c, d, e, f, g, h, k, m, q) {
        function n(B) {
            var F = {};
            B = p(B.getElementsByTagName("a"));
            for (var I = B.next(); !I.done; F = {
                    Ra: F.Ra,
                    Sa: F.Sa
                }, I = B.next()) I = I.value, I.classList.contains("si133") || (F.Ra = me(I.href, encodeURIComponent(e[e.name].resultsPageQueryParam)), F.Sa = me(I.href, encodeURIComponent("afdToken")), F.Ra && F.Sa ? (I.setAttribute("target", "_self"), I.href = "#", pg(I, function(G) {
                return function() {
                    td("rsrc", {
                        q: G.Ra,
                        rsToken: G.Sa,
                        uid: Date.now()
                    }, qd.j);
                    ud()
                }
            }(F))) : $c.log("Could not parse query or rsToken from url: " +
                I.href, "rRHWC"))
        }

        function w(B) {
            var F = ye(b);
            vg(h, B, F);
            a.requestAnimationFrame && a.requestAnimationFrame(function() {
                B.style.transform = "rotateZ(0deg)"
            })
        }
        var r = ni(g.r || [], k.r || []),
            x = 2 === d[0].type,
            u = x ? !1 : "_blank" == (h.linkTarget ? h.linkTarget : "_blank"),
            C = xg();
        a.document.head.appendChild(eg(C));
        d = new Lh(d, f, k, r, u, a, q, m);
        "iev" in k && wd(b + ".eV", k.iev);
        "tp" in g && td(b + ".ptp", g.tp, qd.j);
        c = d.Ad(c).then(function(B) {
            w(B);
            wd("wrs", !0);
            return B
        });
        x && h.relatedSearchUseResultCallback && (c = c.then(function(B) {
            n(B);
            return B
        }));
        return c
    }
    oi = y(oi, "fSA");

    function pi(a, b, c, d, e, f, g, h) {
        var k = !Ra().data.hm;
        f.isRtl && (a.document.dir = "rtl");
        a = h.type || "ads";
        "ads" == a && 2 == d[0].type && (a = "relatedsearch");
        if ("relatedsearch" == a) {
            var m = g.rs_attr.t,
                q = g.rs_attr.u;
            h.horizontalFlow && (m += ":");
            m && (q = J('<h2 id=\'attrHeader\'><span class="lhHeader" id="attribution"><a href="' + M(Sf(q)) + '" target="_blank">' + yf(m) + "</a></span></h2>"), c.appendChild(eg(q)))
        }
        lg(f, c, h, e, {
            Qc: k,
            type: a
        });
        "tp" in g && td(b + ".ptp", g.tp, qd.j);
        qi(d, c, h, f);
        b = ye(b);
        vg(h, c, b);
        ri(c, f)
    }
    pi = y(pi, "fA");

    function ri(a, b) {
        var c = Za(Zd("div", "e_", a));
        c = c.concat(Za(Zd("tr", "e_", a)));
        for (var d, e = 0; d = c[e]; e++) Hh(ki(d), d, a, b)
    }
    ri = y(ri, "aSSTATU");

    function si(a, b) {
        for (var c = document.getElementById("ssrab"), d = hi(a), e = Pa(); c.firstElementChild;) {
            var f = c.removeChild(c.firstElementChild),
                g = f.id.split("-");
            if (!(2 > g.length)) {
                var h = g.shift();
                if ("ssrad" === h || "ssrs" === h) {
                    g.push(d.toString());
                    g = g.join("-");
                    var k = Je(g, a);
                    if (null != k)
                        if ("ssrs" === h) k.document.head.appendChild(f);
                        else {
                            h = null;
                            try {
                                h = k.document.getElementById("adBlock"), Ee[g] = !0
                            } catch (F) {}
                            if (null != h) {
                                for (var m = 0; f.firstElementChild;) h.appendChild(f.removeChild(f.firstElementChild)), m++;
                                var q =
                                    void 0;
                                f = void 0;
                                var n = h,
                                    w = b;
                                f = void 0 === f ? Hh : f;
                                q = void 0 === q ? Qg : q;
                                for (var r = p(n.querySelectorAll("[data-wta-bubble]")), x = r.next(); !x.done; x = r.next()) {
                                    x = x.value;
                                    var u = x.getAttribute("data-wta-bubble");
                                    if (u) {
                                        var C = k.document.getElementById(u);
                                        if (!C) throw Error("Could not find element with id: " + u);
                                        q(n, x, C)
                                    }
                                }
                                k = p(n.querySelectorAll(".clicktrackedAd_js"));
                                for (q = k.next(); !q.done; q = k.next()) q.value.setAttribute("data-bg", "true");
                                k = [];
                                q = p(n.querySelectorAll("a[href]"));
                                for (r = q.next(); !r.done; r = q.next()) r = r.value,
                                    "true" !== r.getAttribute("data-notrack") && (x = r.getAttribute("data-nb") || void 0, k.push(new Jh(r, x, !!x)));
                                f(k, n, n, w);
                                f = ye(g);
                                n = lf(g, a);
                                vg(n, h, f);
                                wd(g + ".hA", 0 < m);
                                e.data.cgna && vd(g + ".aC", m);
                                delete O[g]
                            }
                        }
                }
            }
        }
        for (var B in O) wd(B + ".hA", !1), e.data.cgna && vd(B + ".aC", 0), delete O[B];
        document.body.removeChild(c);
        ud()
    }
    si = y(si, "pSRA");

    function ti(a, b, c) {
        var d = li(a);
        if (d) {
            var e = d.document.documentElement.lang;
            var f = d.document.documentElement.dir
        }
        var g = (d = c.at) && 0 < d.length ? new Vh(d) : void 0;
        d = (d = c.act) ? new Vh(d) : void 0;
        var h = [];
        if (!gi)
            for (var k in a) !O.hasOwnProperty(k) && a[k] instanceof Object && "ads" === a[k].type && h.push(k);
        k = Object.keys(O).slice();
        h = new ai;
        var m = [],
            q = [];
        if (ui()) si(a, b), q.push(Promise.resolve());
        else
            for (var n in O) {
                var w = O[n],
                    r = w[0].type,
                    x = Je(n, a);
                if (null != x) {
                    mi(x, e, f);
                    var u = null;
                    try {
                        u = x.document.getElementById("adBlock")
                    } catch (Q) {}
                    if (null !=
                        u) {
                        u.setAttribute("aria-label", document.title);
                        u.setAttribute("role", "region");
                        if (h.Id) try {
                            $h(h.Id, x)
                        } catch (Q) {
                            h.uc = Q
                        }
                        bi(h);
                        var C = 2 == r,
                            B = 5 == r,
                            F = lf(n, a),
                            I = !!Ja().data.rsn && C && g && Wh(g, 2, F.container),
                            G = Promise.resolve();
                        !g || !I && C || B ? pi(x, n, u, w, a, b, c, F) : (G = Wh(g, r, F.container), r = d ? Wh(d, r, F.container) : null, C && wg(F, w), C = vi(n, k), G = oi(x, n, u, w, a, b, c, F, G, r, C));
                        c.bg && (w = new Uh(x, c.bg.i, c.bg.p), x.csabg = w);
                        q.push(G);
                        Ee[n] = !0;
                        m.push(n);
                        delete O[n]
                    }
                }
            }
        h.uc && $c.log(h.uc, "lwf2");
        return Pe(q).then(function() {
            wi(a, !!g)
        })
    }
    ti = y(ti, "mPAASH");
    var xi = null;

    function wi(a, b) {
        var c = "function" === typeof ResizeObserver && !!Ja().data.uro,
            d = Ie(a).frames;
        if (c)
            for (xi && xi.disconnect(), xi = new ResizeObserver(function() {
                    cf(a)
                }), d = p(d), c = d.next(); !c.done; c = d.next()) xi.observe(c.value.document.body);
        else
            for (d = p(d), c = d.next(); !c.done; c = d.next()) c.value.onresize = function() {
                cf(a)
            };
        b ? cf(a) : setTimeout(function() {
            cf(a)
        }, 0)
    }

    function vi(a, b) {
        var c = a.split("-");
        a = a.split("-");
        c.splice(c.length - 1, 0, "a");
        c = c.join("-");
        a.splice(a.length - 1, 0, "b");
        a = a.join("-");
        var d = [];
        b.includes(c) && d.push(2);
        b.hasOwnProperty(a) && d.push(3);
        return d
    }

    function yi(a, b, c) {
        var d = Math.max.apply(Math, a);
        a = Math.min.apply(Math, a);
        if (d - a > pe)
            for (a = d - pe, d = 0; d < b.length; d++) {
                var e = b[d];
                c[e] < a && (c[e] = a)
            }
        return c
    }
    yi = y(yi, "pBDF");

    function zi(a, b) {
        var c = {},
            d = !1,
            e = [],
            f = [],
            g;
        for (g in b)
            if (g in a) {
                var h = b[g],
                    k = a[g];
                if ("undefined" != typeof k) {
                    k = h.g.C(k);
                    if (null == k && !h.F) throw ad(h.key + " has an invalid value. Valid input values: [" + h.g.H() + "].");
                    null != k && (c[g] = k, h.g == qe && (e.push(k), f.push(g)), d = !0)
                }
            }
        0 < e.length && (c = yi(e, f, c));
        return d ? c : null
    }
    zi = y(zi, "vO");

    function Ai(a, b) {
        return (ue(a) || /^master-\d+$/.test(a)) && "object" == typeof b
    }
    Ai = y(Ai, "iPABO");

    function Bi(a) {
        try {
            if (!a) throw Error("Null, undefined or empty window.name.");
            var b = JSON.parse(a)
        } catch (d) {
            var c = d.message;
            a && (c = "Invalid window.name: " + a.split(",")[0]);
            $c.log(c, "pNAO")
        }
        return b || {}
    }
    Bi = y(Bi, "pNAO");

    function Ci(a, b) {
        var c = {},
            d;
        for (d in a) {
            var e = a[d];
            "name" == d ? c[d] = ue(e) || /^master-\d+$/.test(e) ? e : null : Ai(d, e) && (e = zi(e, b), c[d] = e, O[d] = [])
        }
        return c
    }
    Ci = y(Ci, "vNAO");

    function Di(a, b, c, d) {
        var e = b.horizontalFlow ? -1 : b.columns;
        if (2 <= e && !(0 >= e)) {
            for (var f = [], g = 0, h = 0; h < e; h++)
                for (var k = Math.ceil((a.length - g) / (e - h)), m = 0; m < k; m++) f[m * e + h] = a[g++];
            a = f
        }
        f = void 0 === d ? !1 : d;
        d = a;
        g = !b.horizontalFlow;
        b = void 0 === f ? !1 : f;
        if (c.zd && 1 == e) {
            b = a.length;
            a = c.zd.split(",");
            e = [];
            for (f = 0; f < b; f++) e.push(a[f % a.length]);
            b = c.pf;
            g = '<div class="' + M("f_") + '">';
            c = d.length;
            for (a = 0; a < c; a++) {
                k = d[a];
                f = k.adIconUrl;
                h = '<div class="' + M("g_") + '" style="border-' + (b ? "right" : "left") + "-color: " + M(N(e[a])) + '"><a href="' +
                    M(Sf(k.l)) + '" class="' + M("c_") + ' popstripeRs" data-notrack="true" target="_top">' + (k.furl ? '<div class="' + M("h_") + '"><img src="' + M(Xf(k.furl)) + '" class="' + M("i_") + '"></div>' : "");
                m = k.t;
                k = J;
                if (0 < ("" + Ff("" + m)).length) {
                    var q = void 0;
                    var n = xf(m);
                    if (null == n) {
                        q = q || null != m && m.N === mf;
                        var w = n = 0,
                            r = !1;
                        q = kb(m + "", q).split(ob);
                        for (var x = 0; x < q.length; x++) {
                            var u = q[x];
                            mb.test(kb(u, void 0)) ? (n++, w++) : nb.test(u) ? r = !0 : lb.test(kb(u, void 0)) ? w++ : pb.test(u) && (r = !0)
                        }
                        n = 0 == w ? r ? 1 : 0 : .4 < n / w ? -1 : 1
                    }
                    m = '<span dir="' + (0 > n ? "rtl" : "ltr") +
                        '">' + yf(m) + "</span>"
                } else m = "";
                k = k(m);
                g += h + k + '<div class="' + M("j_") + '" style="background-image: url(' + M(Xf(null != f ? f : "//www.gstatic.com/domainads/images/chevron-white.png")) + ')"></div></a></div>'
            }
            d = J(g + "</div>")
        } else {
            f = '<table cellspacing="0" cellpadding="0"' + (2 <= e || g ? ' width="100%"' : "") + "><tbody><tr>";
            c = d.length;
            for (a = 0; a < c; a++) g = d[a], h = 0 > e || 2 <= e && a < e, h = (0 != a && 0 < e && 0 == a % e ? "</tr><tr>" : "") + '<td class="col' + (a == Ff(d).length - 1 ? " l" : "") + '"' + (2 <= e ? ' width="' + M(100 / e) + '%"' : "") + '><div class="ad' + (0 == a ? " f" :
                "") + (h ? " fr" : "") + (a == Ff(d).length - 1 ? " l" : "") + (!h && 2 <= e && a >= d.length - (d.length % e ? d.length % e : e) ? " lr" : "") + '"><div class="' + M("a_") + " " + M("b_") + ' radlinkC">', k = J(g.adIconUrl ? '<img class="adIcon" src="' + M(Xf(g.adIconUrl)) + '"/>' : ""), h = h + k + '<div class="adD">', b ? (k = If("" + Sf(g.l)), g = Hf("" + yf(g.t)), g = J('<div class="adStd"><a href="' + M(Sf(k)) + '" class="radlinkButtonLink" data-notrack="true" target="_top">' + J('<span style="height:20px;line-height:20px;width:20px;margin-right:5px"><svg class="radlinkSvg" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span>') +
                g + "</a></div>")) : (k = If("" + Sf(g.l)), g = Hf("" + yf(g.t)), g = J('<div class="adStd"><a href="' + M(Sf(k)) + '" class="' + M("c_") + '" data-notrack="true" target="_top">' + g + "</a></div>")), f += h + g + "</div></div></div></td>";
            d = J(f + "</tr></tbody></table>")
        }
        return d
    }
    Di = y(Di, "cRSN");

    function qi(a, b, c, d) {
        if (!(0 >= a.length)) {
            var e = null;
            if (Pa().data.cucai) {
                var f = "https:" == window.location.protocol;
                null != c.adIconUrl && 0 < c.adIconHeight && 0 < c.adIconWidth && ng(a, c.adIconUrl, f)
            }
            wg(c, a);
            f = c.type || "ads";
            "ads" == f && 2 == a[0].type && (f = "relatedsearch");
            d = {
                pf: !!d.isRtl,
                zd: d.popstripeRs
            };
            if ("relatedsearch" == f) e = Di(a, c, d);
            else if ("searchbox" == f) {
                f = c.resultsPageBaseUrl;
                if (!f) throw ad("resultsPageBaseUrl needs to be set.");
                e = a[0].afdt;
                a = a[0].label;
                d = Be(f);
                null != c.personalizedAds && (d.pcsa = "" + c.personalizedAds);
                c = '<div class="adStd"><form action="' + M(Sf(f)) + '" target="_top" method="get" accept-charset="UTF-8">';
                f = Ef(d);
                for (var g = f.length, h = 0; h < g; h++) {
                    var k = f[h];
                    c += '<input type="hidden" name="' + M(k) + '" value="' + M(d[k]) + '"/>'
                }
                c += '<table class="sb-table" cellspacing="0" cellpadding="0"><tbody><tr><td class="sbi-td"><input class="sbi" type="text" name="query" maxlength="63" title="Enter a search" autocomplete="off"/></td><td><input class="sbb" type="submit" value="' + (a ? M(a) : "Search") + '"/></td></tr></tbody></table><input type="hidden" name="afdToken" value="' +
                    M(e) + '"/><input type="hidden" name="search" value="1"/></form></div>';
                e = J(c)
            }
            c = c = {
                Na: Na(Ma())
            };
            c = J(oh(c.Na, "googAFS"));
            b.appendChild(eg(c));
            e && b.appendChild(eg(e))
        }
    }
    qi = y(qi, "cAN");

    function Ei(a, b, c) {
        var d = Fi(a);
        a = hi(b);
        var e = Pa(),
            f = Ma(),
            g = Ja();
        c.queryId && (td("qi", c.queryId, E.j), Sc().yb = c.queryId || "");
        var h = f.data.eawp || null;
        h && td("eawp", h, E.j);
        (g = !!g.data.sbn) && wd("sbn", g);
        h = {};
        g = !1;
        if (!ui())
            for (var k = 0; k < d.length; k++) {
                var m = d[k].adtype,
                    q = void 0 != m,
                    n = d[k],
                    w = n.fn;
                w.startsWith("slave-0") && (gi = !0);
                w = w + "-" + a;
                O[w] || ($c.log(w, "pAJ2"), O[w] = []);
                O[w].push(n);
                q && (n = n[m], g = !0);
                3 != n.type && (n.v && (n.visDomain = n.v.replace(/<[^>^<]*>/g, "").replace(/\/.*$/, "").replace(/^www\./, ""), n.nonBreakingVisDomain =
                    n.visDomain.replace(/-/g, "&#8209;")), e.data.cgavu && n.v && (h[n.v.replace(/<[^>^<]*>/g, "")] = 1))
            }
        e.data.cgavu && (d = Object.keys(h).sort().join("|"), td("v." + a, d, E.j));
        if (!ui())
            for (var r in O)
                if (d = O[r], h = d.length, 0 < h && !g && (k = d[0], 3 == k.type && (h = k.plas ? k.plas.length : 0)), gi && /^master-\d+$/.test(r)) 0 < h && $c.log(d.length, "pAJ3"), delete O[r];
                else if (wd(r + ".hA", 0 < h), e.data.cgna && vd(r + ".aC", h), 1 > h) {
            if (d = Je(r, b)) try {
                var x = d.document.getElementById("adBlock");
                if (x) {
                    var u = {
                        Na: Na(f)
                    };
                    u = u || {};
                    var C = J(oh(u.Na, "googNoAds"));
                    x.appendChild(eg(C))
                }
            } catch (F) {}
            delete O[r]
        }
        for (var B in fi) c[B] && wd(fi[B], !0);
        (b = c.statusErrorCode) && vd("s.eC", parseInt(b, 10));
        wd("s.b", !!c.statusBlocked);
        Ma().data.isi && wd("s.iSI", !0);
        e.data.cgna && wd("aD." + a, !0);
        ud()
    }
    Ei = y(Ei, "pAJ");

    function Fi(a) {
        var b = [],
            c;
        for (c in di) {
            var d = a[c];
            if (d) {
                for (var e = di[c], f = 0; f < d.length; f++) d[f].type = "ad_data" == c ? ei[d[f].adtype] : e;
                b = b.concat(d)
            }
        }
        return b
    }
    Fi = y(Fi, "cAA");

    function Gi(a, b, c) {
        var d = null;
        window.XMLHttpRequest ? d = new XMLHttpRequest : window.ActiveXObject && (d = new ActiveXObject("Microsoft.XMLHTTP"));
        if (d) d.open("GET", "/afs/ads?" + c, !0), d.setRequestHeader("Duplicate", "1"), d.onreadystatechange = function() {
            if (4 == d.readyState) {
                var e = JSON.parse(d.responseText.substr(d.responseText.indexOf("//") + 2));
                if (!e) throw Error("Unable to use waitForAds");
                window.ad_json = e;
                Hi(a, b)
            }
        }, d.send();
        else throw Error("Unable to create the HTTP request object.");
    }
    Gi = y(Gi, "rCAAC");

    function Ii(a) {
        if (a) {
            var b = {};
            a = p(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = d.n;
                d = d.v;
                "t" === d ? b[c] = !0 : "f" !== d && (b[c] = d)
            }
        } else b = {};
        return b
    }
    Ii = y(Ii, "cPATO");

    function Ji(a, b, c) {
        window.sPH = function() {
            cf(a)
        };
        window.mPAASH = function() {
            ti(a, b, c)
        };
        return ti(a, b, c)
    }
    Ji = y(Ji, "sCFC");

    function Ki(a) {
        return function(b) {
            b = b.data.split(":");
            2 == b.length && "orientation" == b[0] && cf(a)
        }
    }
    Ki = y(Ki, "bOCH");

    function Hi(a, b) {
        var c = Fa(),
            d = Ii(c.caps);
        a = Ci(b, a);
        Ei(c, a, d);
        c = Ji(a, d, c);
        Ra().data.hm && window.addEventListener("message", Ki(a));
        return c
    }
    Hi = y(Hi, "raa");

    function Li(a, b) {
        var c = b.name,
            d = b && b[c] && te(b[c]);
        Mi();
        if (sc("sma")) {
            var e = oc("cei", qc()) || "";
            e.includes("17300001") ? vd("scs_mismatch_analysis_value", 1) : e.includes("17300002") ? vd("scs_mismatch_analysis_value", 2) : vd("scs_mismatch_analysis_value", 3);
            ud()
        }
        return d ? (Gi(a, b, b[c].adRequestUrlParams), Promise.resolve()) : Hi(a, b)
    }
    Li = y(Li, "init");

    function ui() {
        return null !== document.getElementById("ssrab")
    }
    ui = y(ui, "iSSRE");

    function Mi() {
        td("it", document.title, E.j);
        ud()
    }
    Mi = y(Mi, "setTitle");

    function Ni() {
        this.Z = Oi;
        this.ob = void 0
    }
    Ni.prototype.H = function() {
        var a = this.Z.H() + " (one by itself, or multiple in an Array";
        this.ob && (a += " with fewer than " + (this.ob + 1) + " elements");
        return a + ")"
    };
    Ni.prototype.C = function(a) {
        a = Array.isArray(a) ? a : [a];
        if (this.ob && a.length > this.ob) return null;
        for (var b = [], c = 0; c < a.length; c++) {
            var d = this.Z.C(a[c]);
            if (null == d) return null;
            b.push(d)
        }
        return 0 == b.length ? null : b
    };
    Ni.prototype.G = function(a) {
        a = this.C(a);
        return null == a || 1 > a.length ? null : this.Z.G(a[0])
    };

    function R(a, b) {
        this.Ka = Math.ceil(a);
        this.Ja = Math.floor(b)
    }
    R.prototype.H = function() {
        return this.Ka + " - " + this.Ja
    };
    R.prototype.C = function(a) {
        a = parseInt(a, 10);
        return a >= this.Ka && a <= this.Ja ? a : null
    };
    R.prototype.G = function(a) {
        return this.C(a)
    };

    function Pi() {}
    Pi.prototype.H = function() {
        return "A function"
    };
    Pi.prototype.C = function(a) {
        return "function" === typeof a ? !0 : !1
    };
    Pi.prototype.G = function() {
        return null
    };
    var Qi = new Pi;
    var Ri = /#(.)(.)(.)/,
        Si = /^#(?:[0-9a-f]{3}){1,2}$/i,
        Ti = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    var Ui = {
        black: "#000000",
        blue: "#0000ff",
        darkorange: "#ff8c00",
        darkred: "#8b0000",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        grey: "#808080",
        orange: "#ffa500",
        red: "#ff0000",
        royalblue: "#4169e1",
        skyblue: "#87ceeb",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00"
    };

    function Vi(a) {
        this.bd = a
    }
    Vi.prototype.H = function() {
        var a = "A hexadecimal color string";
        this.bd && (a += " or 'transparent'");
        return a
    };
    Vi.prototype.C = function(a) {
        var b = Bb("" + a).toLowerCase();
        if (this.bd && "transparent" == b) return "transparent";
        if (Ui[b]) return Ui[b];
        a = null;
        try {
            var c = "#" == b.charAt(0) ? b : "#" + b;
            if (!Si.test(c)) throw Error("'" + c + "' is not a valid hex color");
            4 == c.length && (c = c.replace(Ri, "#$1$1$2$2$3$3"));
            a = c.toLowerCase()
        } catch (n) {}
        if (!a) try {
            a: {
                var d = b.match(Ti);
                if (d) {
                    var e = Number(d[1]),
                        f = Number(d[2]),
                        g = Number(d[3]);
                    if (0 <= e && 255 >= e && 0 <= f && 255 >= f && 0 <= g && 255 >= g) {
                        var h = [e, f, g];
                        break a
                    }
                }
                h = []
            }
            c = h;
            if (!c.length) throw Error(b + " is not a valid RGB color");
            var k = c[0],
                m = c[1],
                q = c[2];k = Number(k);m = Number(m);q = Number(q);
            if (k != (k & 255) || m != (m & 255) || q != (q & 255)) throw Error('"(' + k + "," + m + "," + q + '") is not a valid RGB color');m = k << 16 | m << 8 | q;a = 16 > k ? "#" + (16777216 | m).toString(16).substr(1) : "#" + m.toString(16)
        }
        catch (n) {}
        return a
    };
    Vi.prototype.G = function() {
        return null
    };
    var Wi = new Vi(!1),
        Xi = new Vi(!0);

    function Yi(a) {
        this.Z = a
    }
    Yi.prototype.H = function() {
        return this.Z.H() + " (one or more, comma separated)"
    };
    Yi.prototype.C = function(a) {
        a = Zi(a);
        for (var b = [], c = 0; c < a.length; c++) {
            var d = this.Z.C(a[c]);
            null != d && b.push(d)
        }
        return 0 == b.length ? null : b.join(",")
    };
    Yi.prototype.G = function(a) {
        a = Zi(a);
        for (var b = 0; b < a.length; b++) {
            var c = this.Z.G(a[b]);
            if (null != c) return c
        }
        return null
    };

    function Zi(a) {
        if ("string" !== typeof a) return [];
        a = a.split(",");
        for (var b = [], c = 0; c < a.length; c++) b.push(Bb(a[c]));
        return b
    };

    function $i(a, b) {
        b = void 0 === b ? 0 : b;
        this.Vc = a;
        this.Wc = {};
        for (a = 0; a < this.Vc.length; a++) {
            var c = this.Vc[a];
            this.Wc[c.toLowerCase()] = new aj(c, b + a)
        }
    }
    $i.prototype.H = function() {
        return this.Vc.join(", ") + " (case insensitive)"
    };

    function bj(a, b) {
        if (!b || "string" !== typeof b) return cj;
        b = b.toLowerCase();
        return a.Wc.hasOwnProperty(b) ? a.Wc[b] : cj
    }
    $i.prototype.C = function(a) {
        return bj(this, a).Cf
    };
    $i.prototype.G = function(a) {
        return bj(this, a).id
    };

    function aj(a, b) {
        this.Cf = a;
        this.id = b
    }
    var cj = new aj(null, null);
    var dj = /^\d+px$/i,
        ej = /^\d+%$/,
        fj = /^[0-9]+\.[0-9]{1,}$/;

    function gj() {}
    gj.prototype.H = function() {
        return "Width in px (e.g. '500px') or 'auto'"
    };
    gj.prototype.C = function(a) {
        var b = hj(a);
        return null != b ? b + "px" : "string" !== typeof a || "auto" != a && !ej.test(a) ? null : a
    };
    gj.prototype.G = function(a) {
        return hj(a)
    };

    function hj(a) {
        var b;
        (b = "number" === typeof a) || (b = "string" === typeof a && (!/[^0-9]/.test(a) || fj.test(a) || dj.test(a)));
        return b ? (a = parseInt(a, 10), isNaN(a) ? null : a) : null
    }
    var ij = new gj;
    var jj = /^[0-9a-zA-Z]*$/;

    function kj() {}
    kj.prototype.G = function() {
        return null
    };
    kj.prototype.H = function() {
        return "A settings id"
    };
    kj.prototype.C = function(a) {
        return ("string" === typeof a || "number" === typeof a && !Number.isNaN(a)) && jj.test(a) ? "" + a : null
    };

    function lj() {}
    lj.prototype.H = function() {
        return "A string"
    };
    lj.prototype.C = function(a) {
        return "string" === typeof a ? a : null
    };
    lj.prototype.G = function() {
        return null
    };
    var mj = new lj;

    function nj() {}
    nj.prototype.H = function() {
        return "An http(s) url"
    };
    nj.prototype.C = function(a) {
        return "string" === typeof a && oj.test(a) ? a : null
    };
    nj.prototype.G = function() {
        return null
    };
    var oj = /^((https?):)?\/\/([a-zA-Z0-9~!@#\$&\*\(\)_\+\-=:;',\.\?\/%]*)$/,
        Oi = new nj;
    var pj = new R(2, 400),
        qj = new R(0, 400),
        rj = new R(8, 50),
        sj = new Yi(new $i("verdana;arial;tahoma;times new roman;georgia;trebuchet ms;meiryo;ms gothic;roboto;helvetica neue".split(";"), 1)),
        tj = new Yi(new $i(["right", "left", "top", "bottom"])),
        uj = [{
            key: "adsafe",
            g: new $i(["off", "low", "med", "high"]),
            vd: !0
        }, {
            key: "adtest",
            g: H,
            vd: !0
        }, {
            key: "clicktrackUrl",
            g: new Ni
        }, {
            key: "container",
            g: mj
        }, {
            key: "styleId",
            g: new kj
        }, {
            key: "personalizedAds",
            g: H
        }, {
            key: "personalisedAds",
            g: H
        }],
        vj = [{
            key: "colorAdBorder",
            g: Wi,
            A: !0
        }, {
            key: "colorAdSeparator",
            g: Wi,
            A: !0
        }, {
            key: "colorText",
            g: Wi,
            F: !0,
            A: !0
        }, {
            key: "colorTitleLink",
            g: Wi,
            F: !0,
            A: !0
        }, {
            key: "colorBorder",
            g: Wi,
            F: !0,
            A: !0
        }, {
            key: "colorAttribution",
            g: Wi,
            A: !0
        }, {
            key: "colorKeyword",
            g: Wi,
            A: !0
        }, {
            key: "fontFamily",
            g: sj,
            P: "ff",
            F: !0,
            A: !0
        }, {
            key: "fontFamilyAttribution",
            g: sj,
            P: "fa",
            A: !0
        }, {
            key: "titleBold",
            g: H,
            F: !0,
            A: !0
        }, {
            key: "rolloverLinkBold",
            g: H,
            F: !0,
            A: !0
        }, {
            key: "rolloverLinkColor",
            g: Wi,
            F: !0,
            A: !0
        }, {
            key: "rolloverLinkBackgroundColor",
            g: Wi,
            F: !0,
            A: !0
        }, {
            key: "rolloverLinkUnderline",
            g: H,
            F: !0,
            A: !0
        }, {
            key: "noTitleUnderline",
            g: H,
            A: !0
        }, {
            key: "adBorderSelections",
            g: tj,
            A: !0
        }, {
            key: "borderSelections",
            g: tj,
            A: !0
        }, {
            key: "position",
            g: new $i(["top", "right", "bottom"])
        }, {
            key: "cseGoogleHosting",
            g: new $i(["full", "iframe", "partner"])
        }, {
            key: "adIconUrl",
            g: Oi,
            A: !0
        }, {
            key: "adIconWidth",
            g: pj,
            A: !0
        }, {
            key: "adIconHeight",
            g: pj,
            A: !0
        }, {
            key: "adIconSpacingAbove",
            g: qj,
            F: !0,
            A: !0
        }, {
            key: "adIconSpacingBefore",
            g: qj,
            A: !0
        }, {
            key: "adIconSpacingAfter",
            g: qj,
            A: !0
        }, {
            key: "adIconSpacingBelow",
            g: qj,
            A: !0
        }, {
            key: "lineHeightTitle",
            g: rj,
            P: "lt",
            A: !0
        }, {
            key: "adRequestUrlParams",
            g: mj
        }, {
            key: "waitForAds",
            g: H,
            P: "wa"
        }, {
            key: "heightConstrained",
            g: H,
            P: "hc"
        }, {
            key: "width",
            g: ij,
            P: "wi",
            F: !0
        }, {
            key: "attributionSpacingBelow",
            g: new R(0, 40),
            A: !0
        }, {
            key: "resultsPageBaseUrl",
            g: Oi
        }, {
            key: "radlinkBaseUrl",
            g: Oi
        }, {
            key: "radlinkQueryParam",
            g: mj
        }, {
            key: "hl",
            g: mj
        }, {
            key: "columns",
            g: new R(1, 20),
            oa: 1
        }, {
            key: "columnSpacing",
            g: new R(2, 100)
        }, {
            key: "horizontalFlow",
            g: H
        }, {
            key: "horizontalAlignment",
            g: new $i(["center", "left", "right"]),
            oa: "left"
        }, {
            key: "resultsPageQueryParam",
            g: mj,
            oa: "query"
        }, {
            key: "adLoadedCallback",
            g: Qi
        }, {
            key: "rurlOverride",
            g: mj
        }, {
            key: "terms",
            g: mj
        }, {
            key: "kw",
            g: mj
        }, {
            key: "referrerAdCreative",
            g: mj
        }, {
            key: "relatedSearchResultClickedCallback",
            g: Qi
        }, {
            key: "relatedSearchUseResultCallback",
            g: H
        }, {
            key: "adfiliateWp",
            g: mj
        }],
        wj = [
            ["adLoadedCallback"], "adpage", "adPage", ["adRequestUrlParams"],
            ["adsafe"], "adsResponseCallback", ["adtest"], "bgresponse", "channel", ["clicktrackUrl"],
            ["cmpSdkId"],
            ["container"],
            ["cpp"], "cref", "cx", "deb", "debug", "domainName", "e", "expflags", "fakeads", "fcap", "fexp", "forceEx", "gcsc", ["gdprApplies"],
            ["hl"], "iframeHeightCallback", "jsSrc", ["linkTarget"], "masterNumber", "ms", "noAdLoadedCallback", "number", ["personalizedAds"], "personalisedAds", "propertyCode", "pubId", ["query"],
            ["radlinkBaseUrl"],
            ["radlinkQueryParam"], "role", "rowkeyV2", ["rurlOverride"], "sbsignals", "settingsId", "slaveNumber", "source", "source_ip", "styleId", ["tcString"],
            ["type"], "uideb", "userAgent", ["usPrivacy"], "uuld", ["width"],
            ["uap"],
            ["uapv"],
            ["uaa"],
            ["uafv"],
            ["uam"],
            ["uab"],
            ["trustToken"],
            ["tt_state"],
            ["sct"],
            ["sc_status"]
        ],
        xj = [
            ["adBorderSelections"],
            ["adIconHeight"],
            ["adIconSpacingAbove"],
            ["adIconSpacingAfter"],
            ["adIconSpacingBefore"],
            ["adIconSpacingBelow"],
            ["adIconUrl"],
            ["adIconWidth"], "adstyle", "afdToken", "attmas", ["attributionSpacingBelow"],
            ["borderSelections"],
            ["colorAdBorder"],
            ["colorAdSeparator"],
            ["colorAttribution"],
            ["colorBackground"],
            ["colorBorder"],
            ["colorKeyword"],
            ["colorText"],
            ["colorTitleLink"],
            ["columns"],
            ["columnSpacing"], "consumerRatings", ["cseGoogleHosting"], "detailedAttribution", ["fontFamily"],
            ["fontFamilyAttribution"],
            ["fontSizeAttribution"],
            ["fontSizeTitle"], "gcs", "gcse_nc", ["gl"], "gm", "gr", ["heightConstrained"],
            ["horizontalAlignment"],
            ["horizontalFlow"], "ie", ["lineHeightTitle"], "maxTermLength", "maxTop", "minTop", ["noTitleUnderline"], "numRepeated", "oe", ["position"], "queryContext", "queryLink", "referrer", ["relatedSearchResultClickedCallback"],
            ["relatedSearchUseResultCallback"], "relatedSearches", ["resultsPageBaseUrl"],
            ["resultsPageQueryParam"], "rightHandAttribution", ["rolloverAdBackgroundColor"], "rolloverLinkBackgroundColor", ["rolloverLinkBold"],
            ["rolloverLinkColor"],
            ["rolloverLinkUnderline"],
            ["titleBold"],
            ["verticalSpacing"], "visibleUrlsCallback", ["waitForAds"],
            ["terms"],
            ["kw"],
            ["referrerAdCreative"],
            ["adfiliateWp"]
        ];

    function yj() {}
    yj.prototype.H = function() {
        return "A web font"
    };
    yj.prototype.C = function(a) {
        return "string" !== typeof a || /[^a-zA-Z0-9 ]/.test(a) ? null : a
    };
    yj.prototype.G = function() {
        return null
    };
    var zj = new yj;
    var Aj = new R(10, Ad),
        Bj = [{
            key: "rolloverAdBackgroundColor",
            g: Xi,
            F: !0,
            A: !0
        }, {
            key: "colorBackground",
            g: Xi,
            F: !0,
            A: !0
        }, {
            key: "verticalSpacing",
            g: new R(2, 24)
        }, {
            key: "type",
            g: new $i(["ads", "textads", "relatedsearch", "searchbox", "dynamic"])
        }, {
            key: "fontSizeTitle",
            g: qe,
            P: "st",
            F: !0,
            A: !0,
            oa: 18
        }, {
            key: "fontSizeAttribution",
            g: qe,
            P: "sa",
            F: !0,
            A: !0,
            oa: 13
        }, {
            key: "linkTarget",
            g: new $i(["_top", "_blank"]),
            oa: "_blank",
            F: !0
        }],
        Cj = [{
                key: "hideSearchInputBorder",
                g: H
            }, {
                key: "hideSearchButtonBorder",
                g: H
            }, {
                key: "colorSearchBox",
                g: Xi
            },
            {
                key: "colorSearchButton",
                g: Xi
            }, {
                key: "colorSearchButtonText",
                g: Xi
            }, {
                key: "widthSearchInput",
                g: new R(1, 1E3),
                F: !0
            }, {
                key: "widthSearchButton",
                g: new R(100, 1E3),
                F: !0
            }, {
                key: "fontSizeSearchInput",
                g: Aj
            }, {
                key: "fontSizeSearchButton",
                g: Aj
            }, {
                key: "heightSearchInput",
                g: new R(1, 50)
            }, {
                key: "heightSearchButton",
                g: new R(1, 50)
            }, {
                key: "colorSearchButtonBorder",
                g: Xi
            }, {
                key: "widthSearchButtonBorder",
                g: new R(0, 5)
            }, {
                key: "radiusSearchInputBorder",
                g: new R(0, 20)
            }, {
                key: "attributionBold",
                g: H
            }, {
                key: "attributionUppercase",
                g: H
            }, {
                key: "titleUppercase",
                g: H
            }, {
                key: "webFontFamily",
                g: zj
            }, {
                key: "webFontFamilyAttribution",
                g: zj
            }, {
                key: "uiOptimize",
                g: H
            }, {
                key: "adBorderWidth",
                g: new R(0, 20)
            }, {
                key: "relatedSearchTargeting",
                g: new $i(ab(re || []))
            }
        ];

    function Ij() {
        var a = {};
        xd(a, uj);
        xd(a, vj);
        xd(a, Bj);
        xd(a, Cj);
        return a
    }
    var Jj = "adBorderWidth attributionBold attributionUppercase colorSearchBox colorSearchButton colorSearchButtonBorder colorSearchButtonText domainRegistrant domainSessionToken firstAdBlock fontSizeSearchButton fontSizeSearchInput heightSearchButton heightSearchInput hideSearchButtonBorder hideSearchInputBorder languageCode pageLoadedCallback radiusSearchInputBorder relatedSearchTargeting size titleUppercase ui_optimize uiOptimize webFontFamily webFontFamilyAttribution widthSearchButton widthSearchButtonBorder widthSearchInput".split(" "),
        Kj = {
            container: 1,
            role: 1
        };

    function Lj() {
        var a = [].concat(ja(wj), ja(xj), ja(Jj)),
            b = {};
        a = p(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[c] = c in Kj ? 2 : 1;
        return b
    };

    function Mj() {
        var a = Bi(window.name),
            b = Lj(),
            c = Ij();
        c = se(c, b);
        Li(c, a)
    }
    window.IS_GOOGLE_AFS_IFRAME_ && (Bc() ? window.onload = Mj : Mj());

    function Nj(a, b) {
        this.Ca = a;
        this.Xf = void 0 === b ? 500 : b;
        this.la = null;
        this.xd = {};
        this.ne = 0;
        this.Kb = null
    }
    ra(Nj, rg);

    function Oj(a) {
        var b;
        return "function" === typeof(null === (b = a.Ca) || void 0 === b ? void 0 : b.__uspapi) || null != a.Ba()
    }

    function Pj(a, b) {
        var c = {};
        if (Oj(a)) {
            var d = Ta(function() {
                return b(c)
            });
            Qj(a, function(e, f) {
                f && (c = e);
                d()
            });
            setTimeout(d, a.Xf)
        } else b(c)
    }

    function Qj(a, b) {
        var c;
        if ("function" === typeof(null === (c = a.Ca) || void 0 === c ? void 0 : c.__uspapi)) a = a.Ca.__uspapi, a("getUSPData", 1, b);
        else if (a.Ba()) {
            Rj(a);
            var d = ++a.ne;
            a.xd[d] = b;
            a.la && (b = {}, a.la.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: d
            }, b), "*"))
        }
    }
    Nj.prototype.Ba = function() {
        return this.la ? this.la : this.la = Rh(this.Ca, "__uspapiLocator")
    };

    function Rj(a) {
        a.Kb || (a.Kb = function(b) {
            var c;
            try {
                var d = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__uspapiReturn;
                null === (c = a.xd) || void 0 === c ? void 0 : c[d.callId](d.returnValue, d.success)
            } catch (e) {}
        }, Oh(a.Ca, a.Kb))
    };
    var Tj = z(function() {
        var a = pc("uatm"),
            b = null != a ? a : 5;
        a = new Nj(window);
        return Oj(a) ? (a = Sj(a), Promise.race([a, Oe(b, 4)]).then(function(c) {
            return 2 === c ? {
                wb: !1,
                ka: c
            } : 4 === c ? (console.warn("Reached" + b + "ms timeout and before USP response was received."), {
                wb: !1,
                ka: c
            }) : 6 === c ? {
                wb: !1,
                ka: c
            } : {
                wb: !0,
                ka: c
            }
        })) : null
    }, "gCAD");

    function Sj(a) {
        function b(d) {
            d && "string" === typeof d.uspString ? c.resolve(Uj(d.uspString)) : c.resolve(3)
        }
        var c = Me();
        try {
            Pj(a, b)
        } catch (d) {
            c.resolve(6), console.warn("USP returned error status: " + d)
        }
        return c.promise
    }

    function Uj(a) {
        if (/^[1-9][nyNY\-][nyNY][nyNY\-]$/.test(a)) {
            var b = a.charAt(2);
            if (/^Y|y/.test(b)) return 2;
            if (/^N|n/.test(b)) return 1
        }
        if ("1---" === a) return 5;
        b = "3:" + a;
        console.warn("CCPA US Privacy string " + a + " is malformed and personalization intent was unable to be fetched.");
        return b
    };

    function Vj() {}
    Vj.prototype.kc = function() {
        return null
    };
    Vj.prototype.td = function() {
        return !1
    };

    function Wj(a, b, c, d) {
        this.Jd = a;
        this.Rb = b;
        this.Va = c;
        this.ud = d;
        this.Hb = !1;
        this.cc = 0
    }

    function Xj(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.Jd--;
        a.Hb = a.Hb || b;
        c > a.cc && (a.cc = c);
        if (0 == a.Jd)
            if (a.Hb) {
                if (a.Va) {
                    b = void 0;
                    switch (a.cc) {
                        case 2:
                            b = !0;
                            break;
                        case 1:
                            b = !1
                    }
                    try {
                        a.Va(a.Rb, !0, b, d)
                    } catch (e) {}
                }
            } else {
                if (a.ud) try {
                    a.ud(a.Rb, !1, void 0, d)
                } catch (e) {}
                if (a.Va) try {
                    a.Va(a.Rb, !1, void 0, d)
                } catch (e) {}
            }
    };
    var Yj = window;

    function Zj(a) {
        var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
        Ph(a, function(c, d) {
            c && (b += "&" + d + "=" + encodeURIComponent(c))
        });
        ak(b)
    }

    function ak(a) {
        var b = window;
        if (b.fetch) b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        });
        else {
            b.google_image_requests || (b.google_image_requests = []);
            var c = b.document;
            c = void 0 === c ? document : c;
            c = c.createElement("img");
            c.src = a;
            b.google_image_requests.push(c)
        }
    };

    function bk(a, b) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return $d(b || window).round()
        } catch (c) {
            return new Vd(-12245933, -12245933)
        }
    };

    function ck() {
        var a = void 0 === a ? t.top : a;
        return Qh(a, "googlefcInactive")
    };

    function dk(a, b) {
        this.dc = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    var ek = new dk(1956, !0),
        fk = new dk(1928),
        gk = new dk(1941),
        hk = new dk(370946349),
        ik = new dk(392736476),
        jk = new function(a, b) {
            this.dc = a;
            this.defaultValue = void 0 === b ? 0 : b
        }(406149835);

    function kk() {
        var a = lk,
            b = "oc";
        if (a.oc && a.hasOwnProperty(b)) return a.oc;
        var c = new a;
        a.oc = c;
        a.hasOwnProperty(b);
        return c
    };

    function lk() {
        var a = {};
        this.Ve = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.We = function() {
            var b = jk.dc,
                c = jk.defaultValue;
            return null != a[b] ? a[b] : c
        }
    }

    function mk(a) {
        return kk().Ve(a.dc, a.defaultValue)
    };

    function nk(a) {
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }

    function ok() {
        var a = void 0 === a ? window : a;
        if (!nk(a) && mk(fk) || nk(a) && mk(gk)) {
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        }
        return !1
    }
    var S = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r",
            shouldRedeemToken: function() {
                return ok()
            },
            shouldRequestToken: function() {
                return ok()
            }
        },
        T = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s",
            shouldRedeemToken: function() {
                return !0
            },
            shouldRequestToken: function() {
                return !0
            }
        };
    kk();

    function pk(a) {
        var b = this;
        this.pd = void 0 === a ? !1 : a;
        a = [];
        ok() && a.push(S);
        mk(ik) && a.push(T);
        if (document.hasTrustToken && !mk(hk) && !Array.isArray(window.goog_tt_state)) {
            var c = a.map(function(d) {
                return {
                    issuerOrigin: d.issuerOrigin,
                    state: b.pd ? 1 : 12
                }
            });
            Object.defineProperty(window, "goog_tt_state", {
                configurable: !1,
                get: function() {
                    return c.slice()
                }
            })
        }
    }
    ra(pk, rg);

    function qk(a) {
        return a.some(function(b) {
            return b.hasRedemptionRecord
        })
    }

    function rk(a) {
        var b = {};
        a = a.filter(function(c) {
            return c.hasRedemptionRecord
        }).map(function(c) {
            return c.issuerOrigin
        });
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        b && 0 < Object.keys(b).length && (a.additionalSigningData = ah(JSON.stringify(b)));
        return a
    }

    function U(a, b, c) {
        var d = window.goog_tt_state.find(function(e) {
            return e.issuerOrigin === a
        });
        d && (d.state = b, void 0 != c && (d.hasRedemptionRecord = c))
    }

    function sk() {
        var a = window.goog_tt_state;
        return Array.isArray(a) && a.some(function(b) {
            return 1 != b.state
        })
    }

    function tk() {
        var a = "" + S.issuerOrigin + S.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: S.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        U(S.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            U(S.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? U(S.issuerOrigin, 6, !0) : U(S.issuerOrigin, 5)
        })
    }

    function uk() {
        var a = "" + S.issuerOrigin + S.issuancePath;
        U(S.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            U(S.issuerOrigin, 10);
            return tk()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return U(S.issuerOrigin, 10), tk();
            U(S.issuerOrigin, 9)
        })
    }

    function vk() {
        U(S.issuerOrigin, 13);
        return document.hasTrustToken(S.issuerOrigin).then(function(a) {
            return a ? tk() : uk()
        })
    }

    function wk() {
        U(T.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(T.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return window.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = "" + T.issuerOrigin + T.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            U(T.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    U(T.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f &&
                        "NoModificationAllowedError" === f.name) U(T.issuerOrigin, 18, !0);
                    else {
                        if (e) return window.Promise.reject({
                            state: 17,
                            error: f
                        });
                        U(T.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(T.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return window.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = "" + T.issuerOrigin + T.getStatePath;
                U(T.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [T.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status +
                        ": Network response was not ok!");
                    U(T.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return window.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = Sh();
            return a.then(function(e) {
                var f = "" + T.issuerOrigin + T.issuancePath;
                return e && e.srqt && e.cs ? (U(T.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    U(T.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return window.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return U(T.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    U(T.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return window.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                U(T.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        U(T.issuerOrigin, e.state);
                        var f = kk().We();
                        Math.random() <= f && Zj({
                            state: e.state,
                            err: e.error.toString()
                        })
                    } else throw Error(e);
                else throw e;
            })
        }
    };

    function V(a, b, c, d, e, f, g, h, k, m, q) {
        q = void 0 === q ? [] : q;
        this.M = a;
        this.ia = b;
        this.La = this.ub = this.tb = 0;
        this.options = {};
        this.container = null;
        this.aa = void 0 === m ? 1 : m;
        this.Kc = d;
        this.V = k || [];
        this.wd = f || null;
        this.Ia = this.hd = this.Ya = !1;
        this.K = Sc();
        this.va = this.X = this.W = this.Hd = "";
        this.Ha = this.L = !1;
        this.nd = "";
        this.Xa = new Fc("");
        this.wa = q;
        this.zb = this.Ea = 0;
        this.Bd = e;
        this.za = null;
        this.Zc = [];
        this.ja = {};
        this.fa = this.lb = null;
        this.mc(c, g, h, k)
    }
    l = V.prototype;
    l.Sb = function(a) {
        if (this.L) return "n0";
        var b = this.ub,
            c = this.tb,
            d = this.La;
        null != a && (b += "minTop" in a ? a.minTop : 0, c += "maxTop" in a ? a.maxTop : 0, d += "rhs" in a ? a.rhs : 0);
        if (c && b > c) throw ad("Cannot request more minTop ads than maxTop.");
        return (0 < d ? "n" + d : "") + (0 < c ? "p" + c : "") + (0 < b ? "a" + b : "")
    };
    l.Vb = function(a, b) {
        a = this.U(a);
        b && 0 < b.length && (b.splice(0, 0, a), a = b.join("|"));
        return a
    };
    l.U = function(a) {
        this.La = a.number;
        var b;
        this.tb || this.ub ? b = "p" : this.La && (b = "n");
        return "" + b + (this.tb || this.ub || this.La || 0)
    };
    l.Xc = function(a, b, c) {
        var d = {};
        a.settingsId && !a.styleId && (a.styleId = a.settingsId);
        a.styleId && delete a.settingsId;
        a.hasOwnProperty("personalisedAds") && (a.hasOwnProperty("personalizedAds") ? a.personalizedAds = a.personalisedAds && a.personalizedAds : a.personalizedAds = a.personalisedAds);
        a.hasOwnProperty("personalizedAds") && delete a.personalisedAds;
        a.referrerAdCreative && (a.kw ? console.warn("Cannot set both referrerAdCreative and kw, ignoring referrerAdCreative") : a.kw = a.referrerAdCreative, delete a.referrerAdCreative);
        a.cmpSdkId && !a.tcString && (a.tcString = "tcunavailable");
        1 == a.gdprApplies ? a.gdprApplies = !0 : 0 == a.gdprApplies && (a.gdprApplies = !1);
        if (rc("ecfc2", qc()) && a.usPrivacy) {
            var e = Uj(a.usPrivacy);
            a.cpp = e;
            2 === e && (d.personalizedAds = !1)
        }
        "plas" == a.type && a.styleId && (this.ia.width = 1, this.ia.height = 1);
        for (var f in this.ia)
            if (this.ia.hasOwnProperty(f))
                if (2 != this.ia[f] || ("query" != f || null != a[f] && "" != a[f]) && ("query" == f || a[f])) "undefined" != typeof a[f] && null != a[f] && (d[f] = a[f]);
                else throw ad("Missing option '" + f + "'.");
        a.rurlOverride &&
            (console.warn("adtest is enabled when an rurlOverride value is provided"), d.adtest = "on");
        if (e = Ae(t.location.href, "google_afsexp")) d.afsexp = e, d.adtest = "on", console.warn("adtest is enabled when google_afsexp is used");
        this.L = "m" != a.role;
        this.ya(d);
        this.L || xk(d);
        d.adLoadedCallback = a.adLoadedCallback || a.callback || null;
        d.oe = d.oe || "UTF-8";
        d.ie = d.ie || "UTF-8";
        d.number = yk(d.number);
        d.minTop = yk(d.minTop);
        d.maxTop = yk(d.maxTop);
        d.fexp = (d.fexp ? d.fexp + "," : "") + (d.gcsc ? "20606" : "21404");
        (e = oc("cei", qc())) && (d.fexp +=
            "," + e);
        void 0 != d.forceEx && ("MostLaunches" === d.forceEx ? (d.e = "MostLaunches", delete d.forceEx) : d.e || (d.e = "OnlyForcedExperiments"));
        d.gcsc && "top" == a.position && (d.maxTop = a.number, d.number = null);
        d.format = this.L ? this.U(d) : this.Vb(d, b);
        this.nd = d.format;
        d.ads = this.Sb(c);
        d.nocache = [Math.floor(1E3 * Math.random()), Date.now()].join("");
        d.num = "0";
        d.output = "afd_ads";
        if (this.Kc.td()) try {
            d.domainName || (d.domainName = window.document.domain), d.domainName = d.domainName.substring(0, 80)
        } catch (h) {} else delete d.domainName;
        d.gcsc && (d.source = "gcsc");
        d.v = te(d) ? "4" : "3";
        "string" !== typeof d.pubId && (d.pubId = "" + d.pubId);
        0 == d.pubId.indexOf("partner-") && (d.pubId = d.pubId.substring(8));
        a = ck() ? 4 : 0;
        var g;
        b = g = void 0 === g ? t : g;
        b = void 0 === b ? t : b;
        (b = !!b.googlefc) || (g = g.top, g = void 0 === g ? t.top : g, b = Qh(g, "googlefcPresent"));
        if (b && !ck() || 0 != a) d.fcsa = a;
        d = zk(d);
        !d.titleBold || !0 !== d.titleBold && 1 != d.titleBold ? d.titleBold && delete d.titleBold : d.titleBold = 1;
        return d
    };
    l.Ac = function(a) {
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && c in this.M && this.M[c].P && b.push(Ak(a[c], this.M[c]));
        return b.join("")
    };
    l.xa = function(a, b) {
        var c = [],
            d;
        for (d in a) !(a.hasOwnProperty(d) && d in this.M && this.M[d].P) || d in b && b[d] == a[d] || c.push(Ak(a[d], this.M[d]));
        return c.join("")
    };
    l.Xb = function(a, b, c) {
        var d = b.filter(function(f) {
            return 1 === f.aa
        });
        if (0 == d.length) return this.xa(a, {}) + "-";
        c.pubId = a.pubId;
        c = zk(c);
        b = this.Ac(c);
        var e = [];
        e.push(this.xa(a, c));
        a = p(d);
        for (d = a.next(); !d.done; d = a.next()) d = d.value, d.options.slaveNumber && 0 != d.options.slaveNumber && e.push(this.xa(d.options, c));
        return [b, e.join("-")].join("-")
    };

    function Bk(a) {
        return a.options && a.options.type ? "searchbox" === a.options.type : !1
    }
    l.Ub = function(a, b) {
        var c = /^[A-Za-z]+[\w\-:\.]*$/,
            d = [];
        this.Ha || Bk(this) || (a = a.container, d.push(c.test(a) ? a : ""));
        b = p(b);
        for (a = b.next(); !a.done; a = b.next()) a = a.value, Bk(a) || 1 !== a.aa || (a = a.options.container, d.push(c.test(a) ? a : ""));
        return d.join("|")
    };
    l.Yb = function(a) {
        var b = new Fc(vc() + "/afs/ads");
        this.Ib(a, b);
        3 == window.googleAltLoader ? v(b, "bsl", 8) : 4 == window.googleAltLoader && v(b, "bsl", 10);
        v(b, "pac", Ck(a));
        if (!this.L) {
            var c = void 0 === c ? window : c;
            var d = void 0 === d ? document : d;
            var e = void 0 === e ? new Date : e;
            var f = c;
            f = void 0 === f ? Yj : f;
            try {
                var g = f.history.length
            } catch (m) {
                g = 0
            }
            v(b, "u_his", g);
            v(b, "u_tz", -e.getTimezoneOffset());
            v(b, "dt", e.getTime());
            v(b, "u_w", c.screen.width);
            v(b, "u_h", c.screen.height);
            e = bk(!0, c);
            v(b, "biw", e.width);
            v(b, "bih", e.height);
            c.top != c &&
                (e = bk(!1, c), v(b, "isw", e.width), v(b, "ish", e.height));
            d.body ? (e = !c.scrollY && "CSS1Compat" != d.compatMode, d = new Vd(e ? d.body.scrollWidth : d.body.offsetWidth, e ? d.body.scrollHeight : d.body.offsetHeight)) : d = new Vd(-1, -1);
            v(b, "psw", d.width);
            v(b, "psh", d.height);
            if (c.top == c) var h = 0;
            else {
                c = c.top;
                try {
                    var k;
                    if (k = !!c && null != c.location.href) b: {
                        try {
                            Dd(c.foo);
                            k = !0;
                            break b
                        } catch (m) {}
                        k = !1
                    }
                    h = k
                } catch (m) {
                    h = !1
                }
                h = h ? 1 : 2
            }
            v(b, "frm", h)
        }
        v(b, "uio", this.Hd);
        v(b, "cont", this.Ub(this.options, this.V));
        v(b, "jsv", Yc().substring(0, 5), !0);
        a.radlinkBaseUrl && a.radlinkQueryParam && v(b, "qup", "1");
        a.rurlOverride ? v(b, "rurl", a.rurlOverride, !0) : v(b, "rurl", window.location.href, !0);
        v(b, Dk.referer, document.referrer, !0);
        a.referrer && v(b, "optref", a.referrer, !0);
        h = this.V;
        a = [];
        this.Ha || Bk(this) || a.push(this.D());
        h = p(h);
        for (k = h.next(); !k.done; k = h.next()) k = k.value, Bk(k) || a.push(k.D());
        v(b, "inames", a.join("|"));
        return b
    };
    l.Ib = function(a, b) {
        for (var c in a)
            if (a.hasOwnProperty(c) && Dk.hasOwnProperty(c)) {
                var d = Dk[c],
                    e = a[c];
                "clkwd" == d && (e = "t");
                "type" == d && (e = oe[a[c]]);
                "domainSessionToken" == c && "afdToken" in a && d == Dk.afdToken || v(b, d, e)
            }
    };
    l.D = function() {
        var a = [];
        "m" == this.options.role || void 0 === this.options.slaveNumber ? a.push("master") : (a.push("slave"), a.push(this.options.slaveNumber));
        2 == this.aa ? a.push("a") : 3 == this.aa && a.push("b");
        a.push(this.options.masterNumber);
        return a.join("-")
    };
    l.jc = function(a, b, c, d) {
        var e = {};
        e.name = b;
        a = c.concat([a]);
        b = d.concat([b]);
        for (d = 0; d < a.length; d++) {
            c = b[d];
            var f = void 0,
                g = a[d],
                h = this.M,
                k = {};
            for (f in h)
                if (h.hasOwnProperty(f) && !h[f].vd) {
                    var m = g[f],
                        q = h[f].oa;
                    "undefined" == typeof m || "container" == f && "object" == typeof m ? "undefined" != typeof q && (k[f] = q) : k[f] = m
                }
            e[c] = k
        }
        return JSON.stringify(e)
    };
    l.fc = function(a, b, c, d) {
        document.getElementById(a) && $c.log("iframe: " + a + ". pubId: " + d + ". ", "dI");
        d = ce(document, "IFRAME");
        d.frameBorder = "0";
        d.marginWidth = "0";
        d.marginHeight = "0";
        d.vspace = 0;
        d.hspace = 0;
        d.setAttribute("allowTransparency", "true");
        d.scrolling = "no";
        d.style.visibility = "hidden";
        d.width = "100%";
        d.style.height = "0px";
        d.style.display = "block";
        d.name = b;
        d.id = a;
        d.src = c;
        Ce() && (d.dataset.observe = this.options.masterNumber, this.L || (d.setAttribute("data-ad-src", c), d.src = "about:blank"));
        (a = window.trustToken) &&
        qk(a) && (a = rk(a), null != a && (d.trustToken = a));
        this.Ea = Date.now();
        2 === this.aa && 1 <= this.container.childElementCount ? this.container.insertBefore(d, this.container.children[0]) : 1 === this.aa && 2 === this.container.childElementCount ? this.container.insertBefore(d, this.container.children[1]) : this.container.appendChild(d);
        try {
            d.contentWindow.name = b
        } catch (e) {}
        return d
    };
    l.Ob = function(a) {
        var b = window.innerWidth < window.innerHeight;
        if (this.Ia && !b || !this.Ia && b) {
            this.Ia = b;
            try {
                a.contentWindow.postMessage("orientation:" + (this.Ia ? "portrait" : "landscape"), "*")
            } catch (c) {}
        }
    };
    l.Fa = function(a, b, c, d) {
        var e = this,
            f = this.fc(a, b, c, d);
        this.L || (this.nc(f), "postMessage" in window && (this.Ia = window.innerWidth < window.innerHeight, window.addEventListener("resize", function() {
            return e.Ob(f)
        })))
    };
    l.Bc = function() {
        var a = {},
            b;
        for (b in this.options) this.options.hasOwnProperty(b) && (a[b] = this.options[b]);
        a.ads = "n0";
        a[""] = "";
        a.slaveNumber = "0";
        a.role = "s";
        a = Ek(this.M, this.ia, a, Date.now(), void 0, void 0, void 0, void 0, 1, this.wa);
        Y[a.D()] = a;
        this.V.splice(0, 0, a);
        a = document.createElement("div");
        document.body.appendChild(a);
        a.style.height = "0px";
        a.style.visibility = "hidden";
        this.options.container = a;
        this.Ha = this.options.preload = !0;
        this.wa = []
    };
    l.mc = function(a, b, c, d) {
        this.options = this.Xc(a, b, c, d);
        this.K.Pb = this.options.pubId;
        this.K.Db = this.options.styleId || "";
        this.cb() || this.L || !document.body || this.Bc();
        this.Hd = null == this.wd ? "" : this.Xb(this.options, this.V, this.wd);
        this.Xa = (this.L ? this.Kc.kc() : null) || this.Yb(this.options);
        this.X = this.W = this.D();
        this.Xa.gb = encodeURI(this.W);
        this.va = Gc(this.Xa);
        if (1 === this.aa)
            for (this.za = new Wj(this.wa.length + 1, this.options.container, this.options.adLoadedCallback, this.options.noAdLoadedCallback), a = p(this.wa),
                b = a.next(); !b.done; b = a.next()) b.value.za = this.za;
        if (!this.L) {
            Sc().Pb = this.options.pubId;
            Sc().Db = this.options.styleId || "";
            if (this.options.hasOwnProperty("tcString") && 0 < this.options.tcString.length && !this.va.includes(Dk.tcString + "=")) throw Vc(this.K, "tl", "TC string of length " + this.options.tcString.length + " does not fit in URL"), ad("A transparency consent string was collected but is too long to fit in the CSA ad request URL. No ads are being requested.");
            a = [];
            b = [];
            for (c = 0; c < this.V.length; c++) a.push(this.V[c].D()),
                b.push(this.V[c].options);
            te(this.options) && (this.options.adRequestUrlParams = this.va.substr(this.va.indexOf("?") + 1));
            this.X = this.jc(this.options, this.W, b, a)
        }
    };
    l.$a = function() {
        var a = this,
            b = Me(),
            c = z(function() {
                if (!a.cb()) return !1;
                a.Bb(a.options.container);
                if (a.options.width && !a.Ha) {
                    if ("plas" == a.options.type && void 0 != a.M.width && null == a.M.width.g.C(a.options.width)) throw ad("width " + a.options.width + " is invalid.");
                    "auto" == a.options.width ? a.container.style.width = "100%" : Fk(a.options.width) && (a.container.style.width = a.options.width)
                }
                var f = a.container;
                Fg(f);
                f.innerHTML = ac(dc);
                f = p(a.wa);
                for (var g = f.next(); !g.done; g = f.next()) g = g.value, g.Bb(a.options.container), g.qb();
                a.qb();
                b.resolve();
                return !0
            }, "cI_mA");
        if (!c()) var d = Date.now(),
            e = window.setInterval(function() {
                if (c()) clearInterval(e);
                else if (6E4 < Date.now() - d) throw clearInterval(e), ad('container "' + a.options.container + '" does not exist.');
            }, 5);
        return b.promise
    };
    l.qb = function() {
        if (this.Xa) {
            var a = this.Kc.kc();
            if (!rc("usm", qc()) && a && Gc(a) && te(this.options)) {
                !0 === this.options.debug && v(a, "debug", !0);
                a.gb = encodeURI(this.W);
                var b = Gc(a);
                if (this.L) this.Fa(this.W, this.X, b, this.options.pubId);
                else {
                    var c = this;
                    window.google.renderCsaAds = function() {
                        c.Fa(c.W, c.X, b, c.options.pubId)
                    };
                    Hg(document, cc('<script src="' + this.va + '">\x3c/script>', null))
                }
            } else this.Fa(this.W, this.X, this.va, this.options.pubId)
        }
    };
    l.Uc = function(a) {
        var b = this;
        if (this.hd) {
            var c = this.D(),
                d = document.getElementById(c);
            setTimeout(function() {
                return b.Ab(d, c, a, !0)
            }, 1500)
        }
    };
    l.nc = function(a) {
        var b = this,
            c = "" + this.options.masterNumber,
            d = new kd(c, a),
            e = oc("cei", qc()) || "",
            f = 3;
        e.includes("17300001") ? f = 1 : e.includes("17300002") && (f = 2);
        var g = !1;
        A(d, "scs_mismatch_analysis_value", pd.j, function(k, m, q, n) {
            g || (g = !0, n != f && (k = b.K, n = "sma." + f + "," + n, m = Tc(k), v(m, "pbt", "ri"), v(m, "action", n), k.da(Gc(m))))
        });
        A(d, "aD." + c, D.j, Gk);
        A(d, "qi", E.j, function(k, m, q, n) {
            b.K.yb = n || ""
        });
        A(d, "eawp", E.j);
        A(d, "it", E.j, function(k, m, q, n) {
            a.title = n
        });
        A(d, "wrs", D.j, Hk);
        A(d, ".aCS", pd.j, function(k, m, q, n) {
            Ik(b, n)
        });
        A(d, "s.b", D.j, this.yc.bind(this));
        A(d, "s.aDULT", D.j);
        A(d, "s.fL", D.j);
        A(d, "s.tM", D.j);
        A(d, "s.nR", D.j);
        A(d, "s.iSI", D.j);
        A(d, "s.eC", pd.j);
        e = null;
        this.Ha || (e = this.D(), A(d, e + ".hA", D.j, Jk), A(d, e + ".fs", qd.j, Kk), A(d, e + ".w", pd.j, function(k, m, q, n) {
            Lk(k, m, q, n)
        }), A(d, e + ".aC", pd.j));
        A(d, "v." + c, E.j, Mk);
        var h = this.options.relatedSearchResultClickedCallback;
        this.options.relatedSearchUseResultCallback && h && A(d, "rsrc", qd.j, function(k, m, q, n) {
            try {
                h(n.q, n.rsToken)
            } catch (w) {}
        });
        c = p(this.V);
        for (e = c.next(); !e.done; e = c.next()) e =
            e.value.D(), A(d, e + ".hA", D.j, Jk), A(d, e + ".fs", qd.j, Kk), A(d, e + ".aC", pd.j)
    };

    function Ik(a, b) {
        a.lb = b;
        if (!a.fa) {
            var c = ["mousemove", "mousedown", "scroll", "keydown", "touchstart"];
            a.fa = function() {
                if (a.lb) {
                    var e = a.K,
                        f = Date.now() - a.lb,
                        g = Tc(e);
                    v(g, "pbt", "cd");
                    v(g, "csacd", f);
                    e.da(Gc(g));
                    a.lb = null
                }
                if (a.fa) {
                    e = p(c);
                    for (f = e.next(); !f.done; f = e.next()) document.body.removeEventListener(f.value, a.fa);
                    a.fa = null
                }
            };
            b = p(c);
            for (var d = b.next(); !d.done; d = b.next()) document.body.addEventListener(d.value, a.fa)
        }
    }
    l.yc = function(a, b) {
        if ((b = Y["master-" + b]) && b.options && b.options.pageLoadedCallback) {
            var c = md(a, "s.b"),
                d = {};
            if (c) {
                var e = a.B["s.eC"].value;
                e && (d.error_code = e);
                md(a, "s.fL") && (d.faillisted = !0, md(a, "s.tM") ? d.faillistReason = "trademark" : d.faillistReason = "other")
            } else {
                e = Be(Nk.location.href);
                var f = b.options.pubId || "",
                    g = f.indexOf("dp-");
                f = 0 > g ? "" : 0 == g ? "partner-" + f : 0 == f.indexOf("partner-dp-") || 0 == f.indexOf("ca-dp-") ? "partner-" + f.substr(g) : "";
                d.client = f;
                "1" == e.search && (d.user_search = !0);
                e.query && (d.query = e.query)
            }
            d.adult = !!md(a, "s.aDULT");
            md(a, "s.nR") && (d.needsreview = !0);
            md(a, "s.iSI") && (d.invalid_style_id = !0);
            this.ja.cafRequestAccepted = !c && !d.needsreview;
            this.ja.cafStatus = d;
            try {
                b.options.pageLoadedCallback(this.ja.cafRequestAccepted, d)
            } catch (h) {}
        }
    };
    l.xc = function(a) {
        if (!this.Ya && (this.Ya = !0, Xj(this.za, !1, 0, this.ja), md(a, "sbn"))) {
            var b = this.D(),
                c = document.getElementById(b);
            this.zb = Date.now();
            this.Ab(c, b, a, !1)
        }
    };
    l.Nc = function(a, b) {
        var c = zc(Cc),
            d = zc(Dc);
        /Mobile/i.test(xc) && (0 < c || 0 < d) ? (a.style.width = "1px", a.style.minWidth = "100%", a.removeAttribute("width")) : a.width = "100%";
        a.style.visibility = 0 < b ? "visible" : "hidden";
        a.style.height = b + "px";
        this.container.style.height = "auto"
    };
    l.Mc = function(a) {
        this.container.style.width = a + "px";
        var b = zc(Cc),
            c = zc(Dc);
        if (0 < b || 0 < c)
            if (b = document.getElementById(this.D())) b.style.width = a + "px", b.removeAttribute("width")
    };
    l.kb = function(a) {
        return De(a)
    };

    function Ok(a, b, c) {
        var d = new IntersectionObserver(function(e) {
            var f = !1;
            e = p(e);
            for (var g = e.next(); !g.done; g = e.next()) 0 < g.value.intersectionRatio && (f = !0);
            f && (Uc(a.K, "io", c), d.unobserve(b))
        }, {
            threshold: .3
        });
        d.observe(b)
    }
    l.Ab = function(a, b, c, d) {
        var e = this,
            f = ge(a),
            g = {
                top: f.y,
                left: f.x,
                height: a.offsetHeight,
                width: a.offsetWidth,
                Ua: this.Zc.join(","),
                ke: b,
                Le: ld(c, "eawp"),
                rf: Yc(),
                ef: this.Ea - this.Bd,
                Ud: this.zb - this.Ea,
                uf: a.hasAttribute("data-lle"),
                vf: pc("llrm") || 0,
                kf: this.kb(a),
                cg: md(c, "wrs") || !1
            };
        if (b = Pk(this, c)) g.tf = b;
        if (d) {
            Uc(this.K, "bs", g);
            var h = null;
            h = setInterval(z(function() {
                e.kb(a) && (Uc(e.K, "bv", g), clearInterval(h))
            }, "sPIV"), 500);
            window.IntersectionObserver && sc("_enableIntersectionObserverPingback") && Ok(this, a, g)
        } else Uc(this.K,
            "bn", g)
    };

    function Pk(a, b) {
        if (b = ld(b, "irt")) {
            var c = b.split("|");
            b = parseInt(c[0], 10);
            c = parseInt(c[1], 10);
            return a.Ea - a.Bd + "|" + (b - a.Ea) + "|" + (c - b) + "|" + (a.zb - c)
        }
        return null
    }
    l.Jc = function(a) {
        if (Ic) {
            var b = "",
                c;
            try {
                var d = zi(this.options, this.M)
            } catch (e) {
                d = this.options, d.sanitizeFailure = !0
            }
            d.measuredWidth = a;
            for (a = 0; c = Qk[a]; a++) d && d.hasOwnProperty(c) && (c = d[c], null == c && (c = ""), c = c.toString().replace(/\|/g, "&#124;"), b += c), b += "|";
            d = this.K;
            a = this.D();
            Ic && (c = Tc(d), v(c, "pbt", "bo"), v(c, "adbn", a), v(c, "uio", b), d.da(Gc(c).replace(/%7C/g, "|")))
        }
    };
    l.Ic = function(a, b) {
        var c = this.D(),
            d = document.getElementById(c);
        if (d) {
            var e = a.frameHeight;
            this.Zc = a.Ua;
            this.Nc(d, e);
            if (!this.Ya && 0 < e) {
                this.zb = Date.now();
                this.hd = this.Ya = !0;
                this.Uc(b);
                this.Jc(d.offsetWidth);
                d = md(b, c + ".eV");
                a = 0;
                !0 === d ? a = 2 : !1 === d && (a = 1);
                c += ".ptp";
                if (b = b.B.hasOwnProperty(c) ? b.B[c].value : null) this.ja.termPositions = b;
                Xj(this.za, !0, a, this.ja)
            }
        }
    };
    l.cb = function() {
        var a = this.options.container;
        return "string" == typeof a ? (a = document.getElementById(a), !!a) : "string" == typeof a.innerHTML ? !0 : !1
    };
    l.Bb = function(a) {
        this.container = "string" == typeof a ? document.getElementById(a) : a
    };
    l.ya = function(a) {
        a.number = a.number || a.maxTop || a.minTop || 10;
        delete a.minTop;
        delete a.maxTop;
        a.hasOwnProperty("resultsPageBaseUrl") && (a.resultsPageBaseUrl = Rk(a.resultsPageBaseUrl));
        var b = a.relatedSearchTargeting;
        b in re && (a.rs_tt = re[b])
    };

    function xk(a) {
        if (!a.query && !a.afdToken) {
            var b = Be(window.location.href),
                c = b.query;
            b = b.afdToken;
            c && b && (a.query = c, a.afdToken = b)
        }
        c = Ae(window.location.href, "pcsa");
        null != c && null == a.personalizedAds && (a.personalizedAds = c)
    }
    var Ak = z(function(a, b) {
        var c = b.P;
        a = b.g.G(a);
        return null != a && Fk(a) ? Sk.hasOwnProperty(c) ? a ? c.charAt(0) + c.charAt(1).toUpperCase() : c : c + a : ""
    }, "gPFO");

    function yk(a) {
        try {
            var b = parseInt(a, 10);
            return !isNaN(b) && 0 <= b ? b : null
        } catch (c) {
            return null
        }
    }

    function Fk(a) {
        a = parseInt(a, 10);
        return !isNaN(a) && 0 <= a
    }
    var zk = z(function(a) {
            for (var b = ["fontSizeTitle", "fontSizeAttribution"], c = 0; c < b.length; c++) {
                var d = b[c];
                if (a[d]) {
                    var e = "string" == typeof a[d] ? parseInt(a[d].replace("px", ""), 10) : a[d];
                    e = e > Ad ? Ad : e;
                    e = 10 > e ? 10 : e;
                    a[d] = e + "px"
                }
            }
            return a
        }, "vFS"),
        Rk = z(function(a) {
            return a && a.startsWith("//") ? document.location.protocol + a : a
        }, "rRP"),
        Ck = z(function(a) {
            a = a.fexp || "";
            return a.includes("17300001") ? 1 : a.includes("17300002") ? 2 : 0
        }, "gPPV"),
        Qk = ["columns", "horizontalFlow", "type", "measuredWidth"],
        Z = {},
        Dk = (Z.adPage = "adpage", Z.adpage =
            "adpage", Z.ads = "ad", Z.adsafe = "adsafe", Z.adstyle = "adstyle", Z.adtest = "adtest", Z.afdToken = "afdt", Z.afsexp = "afsexp", Z.allwcallad = "allwcallad", Z.bgresponse = "bgresponse", Z.channel = "channel", Z.colorKeyword = "clkwd", Z.cont = "cont", Z.cref = "cref", Z.cx = "cx", Z.deb = "deb", Z.debug = "debug", Z.domainName = "domain_name", Z.e = "e", Z.expflags = "expflags", Z.fakeads = "fakeads", Z.fcap = "fcap", Z.fcsa = "fcsa", Z.fexp = "fexp", Z.forceEx = "expid", Z.format = "format", Z.gcs = "gcs", Z.gcse_nc = "gcse_nc", Z.gl = "gl", Z.glp = "glp", Z.gm = "gm", Z.gpcId = "gpcId",
            Z.gr = "gr", Z.hl = "hl", Z.ie = "ie", Z.jsSrc = "csa_js_src", Z.languageCode = "hl", Z.maxTermLength = "max_radlink_len", Z.ms = "ms", Z.nocache = "nocache", Z.num = "num", Z.numRepeated = "adrep", Z.oe = "oe", Z.output = "output", Z.preload = "preload", Z.priceCurrency = "pfcrncy", Z.priceMax = "pfmax", Z.priceMin = "pfmin", Z.pubId = "client", Z.query = "q", Z.queryContext = "qry_ctxt", Z.queryLink = "qry_lnk", Z.referer = "referer", Z.role = "r", Z.rowkeyV2 = "rowkeyV2", Z.rs_tt = "rs_tt", Z.rurl = "rurl", Z.safe = "safe", Z.sbsignals = "sbsignals", Z.source = "source", Z.source_ip =
            "source_ip", Z.styleId = "psid", Z.textColorPalette = "tcpal", Z.theme = "theme", Z.type = "type", Z.uideb = "uideb", Z.userAgent = "useragent", Z.uuld = "uuld", Z.v = "v", Z.adfiliateWp = "adfwp", Z.cpp = "cpp", Z.personalizedAds = "pcsa", Z.attmas = "attmas", Z.cmpSdkId = "iab_cmpSdkId", Z.gdprApplies = "iab_gdprApplies", Z.tcString = "iab_tcString", Z.trustToken = "trustToken", Z.tt_state = "tt_state", Z.sc_status = "sc_status", Z.sct = "sct", Z.uaa = "uaa", Z.uab = "uab", Z.uafv = "uafv", Z.uam = "uam", Z.uap = "uap", Z.uapv = "uapv", Z.uiOptimize = "uiopt", Z.ui_optimize =
            "uiopt", Z.domainRegistrant = "swp", Z.domainSessionToken = "afdt", Z.kw = "kw", Z.terms = "terms", Z),
        Sk = {
            hc: 1
        };
    l = V.prototype;
    l.Sb = y(V.prototype.Sb, "cAA");
    l.Vb = y(V.prototype.Vb, "cFAM");
    l.U = y(V.prototype.U, "cFA");
    l.Xc = y(V.prototype.Xc, "vASDO");
    l.Ac = y(V.prototype.Ac, "oTPP");
    l.xa = y(V.prototype.xa, "oTBP");
    l.Ub = y(V.prototype.Ub, "cCP");
    l.Xb = y(V.prototype.Xb, "cUIP");
    l.Yb = y(V.prototype.Yb, "cU");
    l.Ib = y(V.prototype.Ib, "aOTU");
    l.D = y(V.prototype.D, "gFN");
    l.jc = y(V.prototype.jc, "gFNAOAJ");
    l.fc = y(V.prototype.fc, "gAI");
    l.Ob = y(V.prototype.Ob, "cO");
    l.Fa = y(V.prototype.Fa, "iAI");
    l.Bc = y(V.prototype.Bc, "pM");
    l.mc = y(V.prototype.mc, "i");
    l.$a = y(V.prototype.$a, "cI");
    l.qb = y(V.prototype.qb, "mA");
    l.Uc = y(V.prototype.Uc, "tSP");
    l.nc = y(V.prototype.nc, "iFS");
    l.xc = y(V.prototype.xc, "nNA");
    l.Nc = y(V.prototype.Nc, "sIH");
    l.Mc = y(V.prototype.Mc, "sCW");
    l.Ab = y(V.prototype.Ab, "sP");
    l.Jc = y(V.prototype.Jc, "sUOP");
    l.Ic = y(V.prototype.Ic, "rIS");
    l.cb = y(V.prototype.cb, "dCE");
    l.Bb = y(V.prototype.Bb, "sC");
    l.ya = y(V.prototype.ya, "cVASDO");
    l.kb = y(V.prototype.kb, "iIV");
    l.yc = y(V.prototype.yc, "pLC");
    xk = y(xk, "cVASDPO");

    function Tk() {}
    ra(Tk, Vj);
    Tk.prototype.kc = function() {
        return new Fc(vc() + "/afs/ads/i/iframe.html")
    };
    Tk.prototype.td = function() {
        return !0
    };

    function Uk(a, b, c, d, e, f, g, h, k, m, q) {
        q = void 0 === q ? [] : q;
        V.call(this, a, b, c, d, e, f, g, h, k, void 0 === m ? 1 : m, q)
    }
    ra(Uk, V);
    Uk.prototype.U = function(a) {
        var b = a.relatedSearches;
        b || 0 === b || (b = a.number) || 0 === b || (b = 10);
        return "r" + b
    };
    Uk.prototype.U = y(Uk.prototype.U, "cFA_RS");

    function Vk(a, b, c, d, e, f, g, h, k, m, q) {
        q = void 0 === q ? [] : q;
        V.call(this, a, b, c, d, e, f, g, h, k, void 0 === m ? 1 : m, q)
    }
    ra(Vk, V);
    Vk.prototype.U = function() {
        return "s"
    };
    Vk.prototype.ya = function(a) {
        V.prototype.ya.call(this, a);
        a.colorBackground || (a.colorBackground = "transparent")
    };
    var Ek = z(function(a, b, c, d, e, f, g, h, k, m) {
        m = void 0 === m ? [] : m;
        var q = new Tk;
        c.relatedSearches && (c.type = "relatedsearch");
        c.type || (c.type = "ads");
        switch (c.type) {
            case "relatedsearch":
                var n = Uk;
                break;
            case "searchbox":
                n = Vk;
                break;
            case "ads":
            case "textads":
                c.type = "ads";
                n = V;
                break;
            default:
                throw ad("invalid block type: " + c.type);
        }
        return new n(a, b, c, q, d, e, f, g, h, void 0 === k ? 1 : k, m)
    }, "nAB_CAF");

    function Wk(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function Xk(a, b) {
        this.Qa = a;
        this.ma = null;
        this.yd = {};
        this.pe = 0;
        this.Gd = void 0 === b ? 500 : b;
        this.Lb = null
    }
    ra(Xk, rg);
    Xk.prototype.addEventListener = function(a) {
        function b(f, g) {
            clearTimeout(e);
            f ? (c = f, c.internalErrorState = Wk(c), g && 0 === c.internalErrorState || (c.tcString = "tcunavailable", g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        }
        var c = {},
            d = Ta(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.Gd && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.Gd));
        try {
            Yk(this, "addEventListener", b)
        } catch (f) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e),
                e = 0), d()
        }
    };
    Xk.prototype.removeEventListener = function(a) {
        a && a.listenerId && Yk(this, "removeEventListener", null, a.listenerId)
    };

    function Yk(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.Qa.__tcfapi) a = a.Qa.__tcfapi, a(b, 2, c, d);
        else if (a.Ba()) {
            Zk(a);
            var e = ++a.pe;
            a.yd[e] = c;
            a.ma && (c = {}, a.ma.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }
    Xk.prototype.Ba = function() {
        return this.ma ? this.ma : this.ma = Rh(this.Qa, "__tcfapiLocator")
    };

    function Zk(a) {
        a.Lb || (a.Lb = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.yd[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Oh(a.Qa, a.Lb))
    };

    function $k(a) {
        if (!1 === a.gdprApplies) var b = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = Wk(a)), b = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (!b) return !1;
        if (!1 === a.gdprApplies || "tcunavailable" === a.tcString) return !0;
        var c = void 0 === c ? "755" : c;
        b: {
            if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                b = b[void 0 === c ? "755" : c];
                break b
            }
            b = void 0
        }
        0 === b ? c = !1 :
            a.purpose && a.vendor ? (b = a.vendor.consents, (c = !(!b || !b[void 0 === c ? "755" : c])) && a.purposeOneTreatment && ((mk(ek) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? c = !0 : c && (c = a.purpose.consents, c = !(!c || !c["1"]))) : c = !0;
        return c ? !0 : (console.warn(ad("TC string lacks purpose 1 consent for Google (GVL ID: 755). CSA ads will not be requested until consent is given. TC string: " + a.tcString)), !1)
    }
    var al = z(function(a) {
        var b = new Xk(window, -1);
        if ("function" === typeof b.Qa.__tcfapi || null != b.Ba()) {
            var c = Me(),
                d = 0;
            d = setTimeout(function() {
                d = 0;
                console.warn(ad("No response received from CMP after 10 seconds. CSA ads have not been requested."))
            }, 1E4);
            b.addEventListener(function(e) {
                d && (clearTimeout(d), d = 0);
                if ($k(e)) {
                    if (0 !== e.internalErrorState) {
                        var f = new Rc(a);
                        switch (e.internalErrorState) {
                            case 1:
                                Vc(f, "to", JSON.stringify(e));
                                console.warn(ad("Reached timeout before a response was received from CMP."));
                                break;
                            case 2:
                                Vc(f, "it", JSON.stringify(e));
                                console.warn(ad("Invalid types in received tcData."));
                                break;
                            case 3:
                                Vc(f, "er", JSON.stringify(e)), console.warn(ad("CMP returned error status."))
                        }
                    }
                    b.removeEventListener(e);
                    c.resolve({
                        tcString: e.tcString,
                        gdprApplies: e.gdprApplies
                    })
                }
            });
            return c.promise
        }
        return null
    }, "gTAD");

    function bl(a, b) {
        var c = a.createElement("script");
        Gg(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function cl(a) {
        this.R = a;
        this.vc = 0;
        this.Cd = null
    }

    function dl(a, b) {
        if (!b || !b._cookies_[0]) return Promise.resolve({
            cookie: null,
            status: 4
        });
        b = new Date(Date.now());
        var c = new Date(b);
        c.setMonth(b.getMonth() + 3);
        b = b.getTime() / 1E3 + ";" + c.getTime() / 1E3;
        a.R.localStorage.setItem("__gsas", b);
        return Promise.resolve({
            cookie: b,
            status: 3
        })
    }

    function el(a) {
        if (0 === a.vc) {
            a: {
                try {
                    a.R.localStorage.setItem("GoogleAdServingTest", "Good")
                } catch (d) {
                    var b = !1;
                    break a
                }
                b = a.R.localStorage.getItem("GoogleAdServingTest");
                var c = "Good" === b;
                "Good" === b && a.R.localStorage.removeItem("GoogleAdServingTest");b = c
            }
            a.vc = b ? 2 : 1
        }
        return 2 === a.vc
    }

    function fl(a) {
        var b = a.R.localStorage.getItem("__gsas");
        b && parseInt(b.split(";")[1], 10) <= (new Date(Date.now())).getTime() / 1E3 && a.R.localStorage.removeItem("__gsas")
    }

    function gl(a, b) {
        b = {
            domain: a.R.location.hostname,
            client: b || "undefined",
            product: "SAS",
            callback: "__sasCookie"
        };
        var c = sb(vb(gb(new db(eb, "https://partner.googleadservices.com/gampad/cookie.js"))), b);
        return new Promise(function(d) {
            a.R.__sasCookie = function(e) {
                dl(a, a.Cd ? a.Cd : e).then(function(f) {
                    d(f)
                })
            };
            bl(a.R.document, c)
        })
    }
    var hl = z(function(a) {
            if (null == a) return null;
            if (!el(a)) return Promise.resolve({
                ua: 0,
                na: null
            });
            fl(a);
            return (a = a.R.localStorage.getItem("__gsas")) ? Promise.resolve({
                ua: 6,
                na: a
            }) : null
        }, "sasCkeErr"),
        il = z(function(a) {
            var b = new cl(window);
            if (!el(b)) return Promise.resolve({
                ua: 0,
                na: null
            });
            fl(b);
            var c = hl(b);
            return c ? c : gl(b, a).then(function(d) {
                return {
                    ua: d.status,
                    na: d.cookie
                }
            })
        }, "scErr");
    var jl = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function kl(a, b, c, d, e, f) {
        this.platform = a;
        this.platformVersion = b;
        this.architecture = c;
        this.model = d;
        this.uaFullVersion = e;
        this.bitness = f
    }
    var ll = z(function(a) {
        if (!a.navigator || !a.navigator.userAgentData || "function" !== typeof a.navigator.userAgentData.getHighEntropyValues) return null;
        var b = a.navigator.userAgentData.getHighEntropyValues(jl);
        return b ? Promise.race([b.catch(function(c) {
            $c.log(c, "uachPrr")
        }), Oe(300, null)]).then(function(c) {
            if (c) return c = new kl(c.platform, c.platformVersion, c.architecture, c.model, c.uaFullVersion, c.bitness), a.uachNonBlockingData = c
        }) : null
    }, "uachErr");
    var ml = z(function(a, b) {
        b = void 0 === b ? window : b;
        var c = [Tj(), al(a)],
            d = -1,
            e = -1,
            f = -1,
            g = 2;
        if (sc("_blockAdRequestOnUach")) {
            var h = ll(b);
            c.push(h);
            f = g;
            g++
        }
        var k = /startpage/,
            m, q;
        h = null == (m = b.location) ? void 0 : null == (q = m.href) ? void 0 : q.match(k);
        sc("_enableSasCookie") && !h && (a = il(a), c.push(a), d = g, g++);
        sc("enableNonblockingSasCookie") && !h && (b = hl(new cl(b)), c.push(b), e = g, g++);
        return c.every(function(n) {
            return null == n
        }) ? null : Pe(c).then(function(n) {
            for (var w, r, x, u, C, B, F, I = 0; I < n.length; I++) {
                var G = n[I];
                if (G) switch (I) {
                    case 0:
                        w =
                            G.ka;
                        r = G.wb;
                        break;
                    case 1:
                        x = G.tcString;
                        u = G.gdprApplies;
                        break;
                    case d:
                    case e:
                        C = G.na;
                        B = G.ua;
                        break;
                    case f:
                        F = G
                }
            }
            return {
                ka: w,
                ue: r,
                tcString: x,
                gdprApplies: u,
                ag: F,
                ua: B,
                na: C
            }
        }).catch(function(n) {
            $c.log(n, "usdPrErr")
        })
    }, "usdErr");

    function nl(a) {
        for (var b = new ol, c = a[0], d, e = !1, f = 1; f < a.length; f++) {
            d = new pl;
            var g = void 0,
                h = void 0,
                k = d,
                m = a[f];
            for (h in m) m.hasOwnProperty(h) && (k.options[h] = m[h]);
            for (g in c) c.hasOwnProperty(g) && (k.options[g] || (k.options[g] = c[g]));
            e || a[f].type && "ads" != a[f].type && "textads" != a[f].type || (e = d.options.firstAdBlock = !0);
            b.Gb.push(d)
        }
        for (var q in c) c.hasOwnProperty(q) && (b.zc[q] = c[q]);
        return b
    }

    function pl() {
        this.options = {}
    }

    function ol() {
        this.zc = {};
        this.Gb = []
    };
    var ql = "clicktrackUrl container iframeHeightCallback linkTarget query settingsId styleId waitForAds".split(" "),
        rl = null,
        sl = !1;

    function tl(a) {
        if (2 > a.length) throw ad("No options specified.");
        return 1 < a.length && a[1] instanceof Array ? [a[0]].concat(a[1]) : Array.prototype.slice.call(a, 0)
    }
    tl = y(tl, "ppata");

    function ul(a) {
        var b = !Be(window.location.href).query,
            c = b ? "relatedsearch" : "ads";
        b = b ? 15 : 5;
        for (var d = !1, e = 1; e < a.length; ++e)
            if (a[e].type == c) {
                d = !0;
                break
            }
        e = [];
        a = p(a);
        for (var f = a.next(); !f.done; f = a.next()) f = f.value, "dynamic" == f.type ? d || (f.type = c, f.number || (f.number = b), e.push(f)) : e.push(f);
        return e
    }

    function vl(a, b) {
        b.platform && (a.uap = btoa(b.platform));
        b.platformVersion && (a.uapv = btoa(b.platformVersion));
        b.architecture && (a.uaa = btoa(b.architecture));
        b.uaFullVersion && (a.uafv = btoa(b.uaFullVersion));
        b.model && (a.uam = btoa(b.model));
        b.bitness && (a.uab = btoa(b.bitness))
    }

    function wl(a, b) {
        var c = b.ag,
            d = b.ka,
            e = b.ue,
            f = b.tcString,
            g = b.gdprApplies,
            h = b.ua;
        b = b.na;
        c && vl(a, c);
        null != d && (a.cpp = d);
        !1 === e && (a.personalizedAds = !1);
        f && (a.tcString = f);
        null != g && (a.gdprApplies = g);
        null != h && (a.sc_status = h);
        b && (a.sct = b)
    }
    wl = y(wl, "aUDTA");

    function xl(a, b, c, d, e, f) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? "" : e;
        f = f || Date.now();
        c = tl(c);
        if (!Ec()) {
            c = ul(c);
            e && (c[0].type = e);
            d && wl(c[0], d);
            (d = window.uachNonBlockingData) && vl(c[0], d);
            d = nl(c);
            var g = {};
            e = function(q) {
                q = p(ab(q));
                for (var n = q.next(); !n.done; n = q.next()) {
                    n = n.value;
                    var w = a[n];
                    w && w.A && (g[n] = !0)
                }
            };
            e(d.zc);
            c = p(d.Gb);
            for (var h = c.next(); !h.done; h = c.next()) e(h.value.options);
            e = ab(g);
            0 < e.length && (rl = "The following CSA option(s) were ignored due to being overridden by native style controls: " + e);
            e = {};
            b = yl(a, b, d.zc, d.Gb, f, e);
            var k = zl;
            b.then(function() {
                Al(k)
            });
            if (Bc()) {
                b = [];
                for (var m in e) b.push(m.replace(/ /g, "+"));
                0 < b.length && (WebFontConfig = {
                    google: {
                        families: b
                    }
                }, m = ce(document, "SCRIPT"), Gg(m, vb(gb(new db(eb, (rc("ah", qc()) ? "https:" : "") + "//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js")))), m.async = !0, b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(m, b))
            }
        }
    }
    xl = y(xl, "aasi");

    function Al(a) {
        if (Ce()) {
            var b = '[data-observe="' + a + '"]',
                c = function() {
                    for (var f = p(document.querySelectorAll("iframe[data-ad-src]" + b)), g = f.next(); !g.done; g = f.next()) {
                        g = g.value;
                        var h = vb(g.getAttribute("data-ad-src"));
                        g.src = ub(h).toString();
                        g.removeAttribute("data-ad-src")
                    }
                };
            a = p(document.querySelectorAll("iframe" + b));
            for (var d = a.next(); !d.done; d = a.next())
                if (d = d.value, null == d.offsetParent || De(d)) {
                    c();
                    return
                }
            var e = new IntersectionObserver(function(f) {
                var g = !1;
                f = p(f);
                for (var h = f.next(); !h.done; h = f.next()) 0 <
                    h.value.intersectionRatio && (g = !0);
                if (g)
                    for (c(), g = p(document.querySelectorAll("iframe" + b)), f = g.next(); !f.done; f = g.next()) e.unobserve(f.value)
            }, {
                rootMargin: "0px 0px " + (pc("llrm") || 0) + "px 0px",
                threshold: 0
            });
            a = p(document.querySelectorAll("iframe" + b));
            for (d = a.next(); !d.done; d = a.next()) d = d.value, e.observe(d), d.setAttribute("data-lle", "1")
        }
    }
    Al = y(Al, "mILL");

    function yl(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        var g = Promise.resolve();
        if (0 == d.length) return g;
        var h = [],
            k = [],
            m = {
                maxTop: 0,
                minTop: 0,
                rhs: 0
            };
        zl++;
        for (var q = d.length - 1; 0 <= q; q--) {
            var n = d[q].options,
                w = n.gcsc,
                r = Nk.location.href.includes("ampproject.net"),
                x = [];
            if (n.firstAdBlock && (!n.type && !n.relatedSearches || "ads" === n.type || "textads" === n.type) && !w && !r) {
                w = {};
                r = p(ql);
                for (var u = r.next(); !u.done; u = r.next()) u = u.value, w[u] = n[u];
                w.role = "s";
                w.masterNumber = zl;
                0 < q && (w.slaveNumber = q);
                r = Ek(a, b, w, e, void 0, void 0, void 0, void 0,
                    2);
                w = Ek(a, b, w, e, void 0, void 0, void 0, void 0, 3);
                k.unshift(w);
                k.unshift(r);
                x.push(r);
                x.push(w);
                Y[r.D()] = r;
                Y[w.D()] = w
            }
            0 === q ? (n.role = "m", n.masterNumber = zl, x = Ek(a, b, n, e, c, h, m, k, 1, x), Y[x.D()] = x) : (n.role = "s", n.slaveNumber = q, n.masterNumber = zl, x = Ek(a, b, n, e, void 0, void 0, void 0, void 0, 1, x), h.unshift(x.nd), k.unshift(x), m.maxTop += x.tb, m.minTop += x.ub, m.rhs += x.La, Y[x.D()] = x);
            Bc() && (n.webFontFamily && (f[n.webFontFamily] = !0), n.webFontFamilyAttribution && (f[n.webFontFamilyAttribution] = !0))
        }
        a = "master-" + zl;
        for (var C in Y) ue(C) &&
            (Y[C].X += "|" + Y[a].X);
        for (d = d.length - 1; 0 <= d; d--) C = ["slave", d, zl].join("-"), Y.hasOwnProperty(C) && Y[C].$a();
        Y.hasOwnProperty(a) ? g = Y[a].$a() : $c.log("Missing ad block for " + a, "cAFOMM");
        return g
    }
    yl = y(yl, "cAFO");

    function Jk(a, b, c, d) {
        d || Y[c.split(".")[0]].xc(a)
    }
    Jk = y(Jk, "hAC");
    var Bl = {};

    function Kk(a, b, c, d) {
        b = d.fw;
        var e = d.fh;
        d = d.ah;
        d = "number" === typeof b && "number" === typeof e && d instanceof Array ? new Ke(b, e, d) : null;
        if (null != d && (c = c.split(".")[0], b = Y[c], b.Ic(d, a), b.options && b.options.iframeHeightCallback && (a = b.container.offsetHeight, Bl[c] != a))) {
            Bl[c] = a;
            try {
                b.options.iframeHeightCallback(a)
            } catch (f) {}
        }
    }
    Kk = y(Kk, "hC");

    function Lk(a, b, c, d) {
        Y[c.split(".")[0]].Mc(d)
    }
    Lk = y(Lk, "wC");

    function Hk(a, b, c, d) {
        d && rl && !sl && (console.warn(rl), sl = !0)
    }

    function Cl(a, b) {
        var c = {},
            d;
        for (d in Y)
            if (Y.hasOwnProperty(d)) {
                var e = Y[d];
                e.options && e.options.masterNumber == b && "string" == typeof e.options.container && (e = e.options.container, c[e] = (c[e] || 0) + a.B[d + ".aC"].value)
            }
        return c
    }
    Cl = y(Cl, "gAC");

    function Gk(a, b) {
        var c = Y["master-" + b];
        if (c && c.options && c.options.adsResponseCallback) {
            a = Cl(a, b);
            try {
                c.options.adsResponseCallback(a)
            } catch (d) {}
        }
    }
    Gk = y(Gk, "aCC");

    function Mk(a, b, c, d) {
        if ((a = Y["master-" + b]) && a.options && a.options.visibleUrlsCallback) {
            d = d ? d.split("|") : [];
            try {
                a.options.visibleUrlsCallback(d)
            } catch (e) {}
        }
    }
    Mk = y(Mk, "vUC");
    var zl = 0,
        Y = {},
        Nk = window;
    var Dl = z(function() {
            if (!sc("tt")) return Promise.resolve();
            a: {
                var a = new pk(!1);
                if (document.hasTrustToken && !mk(hk) && a.pd) {
                    if (sk()) {
                        a = window.goog_tt_promise;
                        break a
                    }
                    a = [];
                    ok() && a.push(vk());
                    mk(ik) && a.push(wk());
                    if (window.Promise && window.Promise.all) {
                        a = window.Promise.all(a);
                        "object" != typeof window.goog_tt_promise && Object.defineProperty(window, "goog_tt_promise", {
                            configurable: !1,
                            value: a,
                            writable: !1
                        });
                        break a
                    }
                }
                a = void 0
            }
            return a
        }, "tTO"),
        El = z(function(a, b) {
            return sc("enableNonblockingSasCookie") ? il(b).then(function(c) {
                a[0].sct =
                    c.cookieTimestamp;
                a[0].sc_status = c.prefetchStatus
            }) : Promise.resolve()
        }, "nbCookieErr");
    var Fl = xl,
        Gl = z(function(a) {
            var b = a && a[0] && a[0].pubId || null;
            Dl(a);
            El(a, b);
            sc("_doNotBlockAdRequestOnUach") && ll(window);
            (b = ml(b)) ? b.then(function(c) {
                Fl(Ij(), Lj(), a, c)
            }): Fl(Ij(), Lj(), a)
        }, "cafCstr");

    function Hl(a) {
        Gl(arguments)
    }
    if (!(window.IS_GOOGLE_AFS_IFRAME_ || window.google && window.google.ads && window.google.ads.domains && window.google.ads.domains.Caf)) {
        var Il = ["google", "ads", "domains", "Caf"],
            Jl = t;
        Il[0] in Jl || "undefined" == typeof Jl.execScript || Jl.execScript("var " + Il[0]);
        for (var Kl; Il.length && (Kl = Il.shift());) Il.length || void 0 === Hl ? Jl = Jl[Kl] && Jl[Kl] !== Object.prototype[Kl] ? Jl[Kl] : Jl[Kl] = {} : Jl[Kl] = Hl
    };
})();