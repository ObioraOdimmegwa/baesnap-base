! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 17)
}([function(e, t, n) {
    e.exports = n(8)
}, function(e, t) {
    function n(e, t, n, i, a, r, o) {
        try {
            var s = e[r](o),
                l = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(l) : Promise.resolve(l).then(i, a)
    }
    e.exports = function(e) {
        return function() {
            var t = this,
                i = arguments;
            return new Promise((function(a, r) {
                var o = e.apply(t, i);

                function s(e) {
                    n(o, a, r, s, l, "next", e)
                }

                function l(e) {
                    n(o, a, r, s, l, "throw", e)
                }
                s(void 0)
            }))
        }
    }
}, function(e, t, n) {
    var i, a;
    /*!
     * JavaScript Cookie v2.2.1
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */
    ! function(r) {
        if (void 0 === (a = "function" == typeof(i = r) ? i.call(t, n, t, e) : i) || (e.exports = a), !0, e.exports = r(), !!0) {
            var o = window.Cookies,
                s = window.Cookies = r();
            s.noConflict = function() {
                return window.Cookies = o, s
            }
        }
    }((function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) t[i] = n[i]
            }
            return t
        }

        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function n(i) {
            function a() {}

            function r(t, n, r) {
                if ("undefined" != typeof document) {
                    "number" == typeof(r = e({
                        path: "/"
                    }, a.defaults, r)).expires && (r.expires = new Date(1 * new Date + 864e5 * r.expires)), r.expires = r.expires ? r.expires.toUTCString() : "";
                    try {
                        var o = JSON.stringify(n);
                        /^[\{\[]/.test(o) && (n = o)
                    } catch (e) {}
                    n = i.write ? i.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var l in r) r[l] && (s += "; " + l, !0 !== r[l] && (s += "=" + r[l].split(";")[0]));
                    return document.cookie = t + "=" + n + s
                }
            }

            function o(e, n) {
                if ("undefined" != typeof document) {
                    for (var a = {}, r = document.cookie ? document.cookie.split("; ") : [], o = 0; o < r.length; o++) {
                        var s = r[o].split("="),
                            l = s.slice(1).join("=");
                        n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                        try {
                            var c = t(s[0]);
                            if (l = (i.read || i)(l, c) || t(l), n) try {
                                l = JSON.parse(l)
                            } catch (e) {}
                            if (a[c] = l, e === c) break
                        } catch (e) {}
                    }
                    return e ? a[e] : a
                }
            }
            return a.set = r, a.get = function(e) {
                return o(e, !1)
            }, a.getJSON = function(e) {
                return o(e, !0)
            }, a.remove = function(t, n) {
                r(t, "", e(n, {
                    expires: -1
                }))
            }, a.defaults = {}, a.withConverter = n, a
        }((function() {}))
    }))
}, function(e, t) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
}, function(e, t, n) {
    var i = n(3);
    e.exports = function(e, t) {
        if (e) {
            if ("string" == typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
        }
    }
}, function(e, t, n) {
    (function(i) {
        var a, r;

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        "object" == ("undefined" == typeof navigator ? "undefined" : o(navigator)) && function(i, s) {
            "object" == o(t) && void 0 !== e ? e.exports = s() : void 0 === (r = "function" == typeof(a = s) ? a.call(t, n, t, e) : a) || (e.exports = r)
        }(0, (function() {
            "use strict";

            function e(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function n(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                        var n = [],
                            i = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                i || null == s.return || s.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return n
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            var c = {
                addCSS: !0,
                thumbWidth: 15,
                watch: !0
            };

            function u(e, t) {
                return function() {
                    return Array.from(document.querySelectorAll(t)).includes(this)
                }.call(e, t)
            }
            var d = function(e) {
                    return null != e ? e.constructor : null
                },
                h = function(e, t) {
                    return Boolean(e && t && e instanceof t)
                },
                p = function(e) {
                    return d(e) === String
                },
                f = function(e) {
                    return Array.isArray(e)
                },
                m = function(e) {
                    return h(e, NodeList)
                },
                g = p,
                y = f,
                v = m,
                b = function(e) {
                    return h(e, Element)
                },
                w = function(e) {
                    return h(e, Event)
                },
                k = function(e) {
                    return function(e) {
                        return null == e
                    }(e) || (p(e) || f(e) || m(e)) && !e.length || function(e) {
                        return d(e) === Object
                    }(e) && !Object.keys(e).length
                };
            var T, C, S, A = function() {
                    function t(n, i) {
                        e(this, t), b(n) ? this.element = n : g(n) && (this.element = document.querySelector(n)), b(this.element) && k(this.element.rangeTouch) && (this.config = Object.assign({}, c, i), this.init())
                    }
                    return n(t, [{
                        key: "init",
                        value: function() {
                            t.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            t.enabled && (this.listeners(!1), this.element.rangeTouch = null)
                        }
                    }, {
                        key: "listeners",
                        value: function(e) {
                            var t = this,
                                n = e ? "addEventListener" : "removeEventListener";
                            ["touchstart", "touchmove", "touchend"].forEach((function(e) {
                                t.element[n](e, (function(e) {
                                    return t.set(e)
                                }), !1)
                            }))
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            if (!t.enabled || !w(e)) return null;
                            var n, i = e.target,
                                a = e.changedTouches[0],
                                r = parseFloat(i.getAttribute("min")) || 0,
                                o = parseFloat(i.getAttribute("max")) || 100,
                                s = parseFloat(i.getAttribute("step")) || 1,
                                l = o - r,
                                c = i.getBoundingClientRect(),
                                u = 100 / c.width * (this.config.thumbWidth / 2) / 100;
                            return (n = 100 / c.width * (a.clientX - c.left)) < 0 ? n = 0 : n > 100 && (n = 100), n < 50 ? n -= (100 - 2 * n) * u : n > 50 && (n += 2 * (n - 50) * u), r + function(e, t) {
                                if (t < 1) {
                                    var n = (i = "".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (i[1] ? i[1].length : 0) - (i[2] ? +i[2] : 0)) : 0;
                                    return parseFloat(e.toFixed(n))
                                }
                                var i;
                                return Math.round(e / t) * t
                            }(l * (n / 100), s)
                        }
                    }, {
                        key: "set",
                        value: function(e) {
                            t.enabled && w(e) && !e.target.disabled && (e.preventDefault(), e.target.value = this.get(e), function(e, t) {
                                if (e && t) {
                                    var n = new Event(t);
                                    e.dispatchEvent(n)
                                }
                            }(e.target, "touchend" === e.type ? "change" : "input"))
                        }
                    }], [{
                        key: "setup",
                        value: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = null;
                            if (k(e) || g(e) ? i = Array.from(document.querySelectorAll(g(e) ? e : 'input[type="range"]')) : b(e) ? i = [e] : v(e) ? i = Array.from(e) : y(e) && (i = e.filter(b)), k(i)) return null;
                            var a = Object.assign({}, c, n);
                            if (g(e) && a.watch) {
                                var r = new MutationObserver((function(n) {
                                    Array.from(n).forEach((function(n) {
                                        Array.from(n.addedNodes).forEach((function(n) {
                                            b(n) && u(n, e) && new t(n, a)
                                        }))
                                    }))
                                }));
                                r.observe(document.body, {
                                    childList: !0,
                                    subtree: !0
                                })
                            }
                            return i.map((function(e) {
                                return new t(e, n)
                            }))
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return "ontouchstart" in document.documentElement
                        }
                    }]), t
                }(),
                E = function(e) {
                    return null != e ? e.constructor : null
                },
                x = function(e, t) {
                    return Boolean(e && t && e instanceof t)
                },
                P = function(e) {
                    return null == e
                },
                L = function(e) {
                    return E(e) === Object
                },
                _ = function(e) {
                    return E(e) === String
                },
                M = function(e) {
                    return Array.isArray(e)
                },
                N = function(e) {
                    return x(e, NodeList)
                },
                I = function(e) {
                    return P(e) || (_(e) || M(e) || N(e)) && !e.length || L(e) && !Object.keys(e).length
                },
                O = P,
                j = L,
                q = function(e) {
                    return E(e) === Number && !Number.isNaN(e)
                },
                H = _,
                F = function(e) {
                    return E(e) === Boolean
                },
                D = function(e) {
                    return E(e) === Function
                },
                R = M,
                V = N,
                B = function(e) {
                    return x(e, Element)
                },
                U = function(e) {
                    return x(e, Event)
                },
                z = function(e) {
                    return x(e, KeyboardEvent)
                },
                W = function(e) {
                    return x(e, TextTrack) || !P(e) && _(e.kind)
                },
                K = function(e) {
                    if (x(e, window.URL)) return !0;
                    if (!_(e)) return !1;
                    var t = e;
                    e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
                    try {
                        return !I(new URL(t).hostname)
                    } catch (e) {
                        return !1
                    }
                },
                Y = I,
                G = (T = document.createElement("span"), C = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }, S = Object.keys(C).find((function(e) {
                    return void 0 !== T.style[e]
                })), !!H(S) && C[S]);

            function J(e, t) {
                setTimeout((function() {
                    try {
                        e.hidden = !0, e.offsetHeight, e.hidden = !1
                    } catch (e) {}
                }), t)
            }
            var Q = {
                isIE:
                    /* @cc_on!@ */
                    !!document.documentMode,
                isEdge: window.navigator.userAgent.includes("Edge"),
                isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
            };

            function X(e, t) {
                return t.split(".").reduce((function(e, t) {
                    return e && e[t]
                }), e)
            }

            function $() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                if (!n.length) return e;
                var r = n.shift();
                return j(r) ? (Object.keys(r).forEach((function(t) {
                    j(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, a({}, t, {})), $(e[t], r[t])) : Object.assign(e, a({}, t, r[t]))
                })), $.apply(void 0, [e].concat(n))) : e
            }

            function Z(e, t) {
                var n = e.length ? e : [e];
                Array.from(n).reverse().forEach((function(e, n) {
                    var i = n > 0 ? t.cloneNode(!0) : t,
                        a = e.parentNode,
                        r = e.nextSibling;
                    i.appendChild(e), r ? a.insertBefore(i, r) : a.appendChild(i)
                }))
            }

            function ee(e, t) {
                B(e) && !Y(t) && Object.entries(t).filter((function(e) {
                    var t = s(e, 2)[1];
                    return !O(t)
                })).forEach((function(t) {
                    var n = s(t, 2),
                        i = n[0],
                        a = n[1];
                    return e.setAttribute(i, a)
                }))
            }

            function te(e, t, n) {
                var i = document.createElement(e);
                return j(t) && ee(i, t), H(n) && (i.innerText = n), i
            }

            function ne(e, t, n, i) {
                B(t) && t.appendChild(te(e, n, i))
            }

            function ie(e) {
                V(e) || R(e) ? Array.from(e).forEach(ie) : B(e) && B(e.parentNode) && e.parentNode.removeChild(e)
            }

            function ae(e) {
                if (B(e))
                    for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
            }

            function re(e, t) {
                return B(t) && B(t.parentNode) && B(e) ? (t.parentNode.replaceChild(e, t), e) : null
            }

            function oe(e, t) {
                if (!H(e) || Y(e)) return {};
                var n = {},
                    i = $({}, t);
                return e.split(",").forEach((function(e) {
                    var t = e.trim(),
                        a = t.replace(".", ""),
                        r = t.replace(/[[\]]/g, "").split("="),
                        o = s(r, 1)[0],
                        l = r.length > 1 ? r[1].replace(/["']/g, "") : "";
                    switch (t.charAt(0)) {
                        case ".":
                            H(i.class) ? n.class = "".concat(i.class, " ").concat(a) : n.class = a;
                            break;
                        case "#":
                            n.id = t.replace("#", "");
                            break;
                        case "[":
                            n[o] = l
                    }
                })), $(i, n)
            }

            function se(e, t) {
                if (B(e)) {
                    var n = t;
                    F(n) || (n = !e.hidden), e.hidden = n
                }
            }

            function le(e, t, n) {
                if (V(e)) return Array.from(e).map((function(e) {
                    return le(e, t, n)
                }));
                if (B(e)) {
                    var i = "toggle";
                    return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t)
                }
                return !1
            }

            function ce(e, t) {
                return B(e) && e.classList.contains(t)
            }

            function ue(e, t) {
                return function() {
                    return Array.from(document.querySelectorAll(t)).includes(this)
                }.call(e, t)
            }

            function de(e) {
                return this.elements.container.querySelectorAll(e)
            }

            function he(e) {
                return this.elements.container.querySelector(e)
            }

            function pe() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                B(e) && (e.focus({
                    preventScroll: !0
                }), t && le(e, this.config.classNames.tabFocus))
            }
            var fe, me = {
                    "audio/ogg": "vorbis",
                    "audio/wav": "1",
                    "video/webm": "vp8, vorbis",
                    "video/mp4": "avc1.42E01E, mp4a.40.2",
                    "video/ogg": "theora"
                },
                ge = {
                    audio: "canPlayType" in document.createElement("audio"),
                    video: "canPlayType" in document.createElement("video"),
                    check: function(e, t, n) {
                        var i = Q.isIPhone && n && ge.playsinline,
                            a = ge[e] || "html5" !== t;
                        return {
                            api: a,
                            ui: a && ge.rangeInput && ("video" !== e || !Q.isIPhone || i)
                        }
                    },
                    pip: !(Q.isIPhone || !D(te("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || te("video").disablePictureInPicture)),
                    airplay: D(window.WebKitPlaybackTargetAvailabilityEvent),
                    playsinline: "playsInline" in document.createElement("video"),
                    mime: function(e) {
                        if (Y(e)) return !1;
                        var t = s(e.split("/"), 1)[0],
                            n = e;
                        if (!this.isHTML5 || t !== this.type) return !1;
                        Object.keys(me).includes(n) && (n += '; codecs="'.concat(me[e], '"'));
                        try {
                            return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
                        } catch (e) {
                            return !1
                        }
                    },
                    textTracks: "textTracks" in document.createElement("video"),
                    rangeInput: (fe = document.createElement("input"), fe.type = "range", "range" === fe.type),
                    touch: "ontouchstart" in document.documentElement,
                    transitions: !1 !== G,
                    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                },
                ye = function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                return e = !0, null
                            }
                        });
                        window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                    } catch (e) {}
                    return e
                }();

            function ve(e, t, n) {
                var i = this,
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                if (e && "addEventListener" in e && !Y(t) && D(n)) {
                    var s = t.split(" "),
                        l = o;
                    ye && (l = {
                        passive: r,
                        capture: o
                    }), s.forEach((function(t) {
                        i && i.eventListeners && a && i.eventListeners.push({
                            element: e,
                            type: t,
                            callback: n,
                            options: l
                        }), e[a ? "addEventListener" : "removeEventListener"](t, n, l)
                    }))
                }
            }

            function be(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                ve.call(this, e, t, n, !0, i, a)
            }

            function we(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                ve.call(this, e, t, n, !1, i, a)
            }

            function ke(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = function o() {
                        we(e, n, o, a, r);
                        for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
                        i.apply(t, l)
                    };
                ve.call(this, e, n, o, !0, a, r)
            }

            function Te(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (B(e) && !Y(t)) {
                    var a = new CustomEvent(t, {
                        bubbles: n,
                        detail: o({}, i, {
                            plyr: this
                        })
                    });
                    e.dispatchEvent(a)
                }
            }

            function Ce() {
                this && this.eventListeners && (this.eventListeners.forEach((function(e) {
                    var t = e.element,
                        n = e.type,
                        i = e.callback,
                        a = e.options;
                    t.removeEventListener(n, i, a)
                })), this.eventListeners = [])
            }

            function Se() {
                var e = this;
                return new Promise((function(t) {
                    return e.ready ? setTimeout(t, 0) : be.call(e, e.elements.container, "ready", t)
                })).then((function() {}))
            }

            function Ae(e) {
                return !!(R(e) || H(e) && e.includes(":")) && (R(e) ? e : e.split(":")).map(Number).every(q)
            }

            function Ee(e) {
                if (!R(e) || !e.every(q)) return null;
                var t = s(e, 2),
                    n = t[0],
                    i = t[1],
                    a = function e(t, n) {
                        return 0 === n ? t : e(n, t % n)
                    }(n, i);
                return [n / a, i / a]
            }

            function xe(e) {
                var t = function(e) {
                        return Ae(e) ? e.split(":").map(Number) : null
                    },
                    n = t(e);
                if (null === n && (n = t(this.config.ratio)), null === n && !Y(this.embed) && R(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
                    var i = this.media;
                    n = Ee([i.videoWidth, i.videoHeight])
                }
                return n
            }

            function Pe(e) {
                if (!this.isVideo) return {};
                var t = this.elements.wrapper,
                    n = xe.call(this, e),
                    i = s(R(n) ? n : [0, 0], 2),
                    a = 100 / i[0] * i[1];
                if (t.style.paddingBottom = "".concat(a, "%"), this.isVimeo && this.supported.ui) {
                    var r = (240 - a) / 4.8;
                    this.media.style.transform = "translateY(-".concat(r, "%)")
                } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
                return {
                    padding: a,
                    ratio: n
                }
            }
            var Le = {
                getSources: function() {
                    var e = this;
                    return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) {
                        var n = t.getAttribute("type");
                        return !!Y(n) || ge.mime.call(e, n)
                    })) : []
                },
                getQualityOptions: function() {
                    return this.config.quality.forced ? this.config.quality.options : Le.getSources.call(this).map((function(e) {
                        return Number(e.getAttribute("size"))
                    })).filter(Boolean)
                },
                setup: function() {
                    if (this.isHTML5) {
                        var e = this;
                        e.options.speed = e.config.speed.options, Y(this.config.ratio) || Pe.call(e), Object.defineProperty(e.media, "quality", {
                            get: function() {
                                var t = Le.getSources.call(e).find((function(t) {
                                    return t.getAttribute("src") === e.source
                                }));
                                return t && Number(t.getAttribute("size"))
                            },
                            set: function(t) {
                                if (e.quality !== t) {
                                    if (e.config.quality.forced && D(e.config.quality.onChange)) e.config.quality.onChange(t);
                                    else {
                                        var n = Le.getSources.call(e).find((function(e) {
                                            return Number(e.getAttribute("size")) === t
                                        }));
                                        if (!n) return;
                                        var i = e.media,
                                            a = i.currentTime,
                                            r = i.paused,
                                            o = i.preload,
                                            s = i.readyState,
                                            l = i.playbackRate;
                                        e.media.src = n.getAttribute("src"), ("none" !== o || s) && (e.once("loadedmetadata", (function() {
                                            e.speed = l, e.currentTime = a, r || e.play()
                                        })), e.media.load())
                                    }
                                    Te.call(e, e.media, "qualitychange", !1, {
                                        quality: t
                                    })
                                }
                            }
                        })
                    }
                },
                cancelRequests: function() {
                    this.isHTML5 && (ie(Le.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
                }
            };

            function _e(e) {
                return R(e) ? e.filter((function(t, n) {
                    return e.indexOf(t) === n
                })) : e
            }

            function Me(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return Y(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) {
                    return n[t].toString()
                }))
            }

            function Ne() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
            }

            function Ie() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e.toString().replace(/\w\S*/g, (function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                }))
            }

            function Oe() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = e.toString();
                return t = Ne(t, "-", " "), t = Ne(t, "_", " "), Ne(t = Ie(t), " ", "")
            }

            function je(e) {
                var t = document.createElement("div");
                return t.appendChild(e), t.innerHTML
            }
            var qe = {
                    pip: "PIP",
                    airplay: "AirPlay",
                    html5: "HTML5",
                    vimeo: "Vimeo",
                    youtube: "YouTube"
                },
                He = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (Y(e) || Y(t)) return "";
                    var n = X(t.i18n, e);
                    if (Y(n)) return Object.keys(qe).includes(e) ? qe[e] : "";
                    var i = {
                        "{seektime}": t.seekTime,
                        "{title}": t.title
                    };
                    return Object.entries(i).forEach((function(e) {
                        var t = s(e, 2),
                            i = t[0],
                            a = t[1];
                        n = Ne(n, i, a)
                    })), n
                },
                Fe = function() {
                    function t(n) {
                        e(this, t), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key
                    }
                    return n(t, [{
                        key: "get",
                        value: function(e) {
                            if (!t.supported || !this.enabled) return null;
                            var n = window.localStorage.getItem(this.key);
                            if (Y(n)) return null;
                            var i = JSON.parse(n);
                            return H(e) && e.length ? i[e] : i
                        }
                    }, {
                        key: "set",
                        value: function(e) {
                            if (t.supported && this.enabled && j(e)) {
                                var n = this.get();
                                Y(n) && (n = {}), $(n, e), window.localStorage.setItem(this.key, JSON.stringify(n))
                            }
                        }
                    }], [{
                        key: "supported",
                        get: function() {
                            try {
                                return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0)
                            } catch (e) {
                                return !1
                            }
                        }
                    }]), t
                }();

            function De(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                return new Promise((function(n, i) {
                    try {
                        var a = new XMLHttpRequest;
                        if (!("withCredentials" in a)) return;
                        a.addEventListener("load", (function() {
                            if ("text" === t) try {
                                n(JSON.parse(a.responseText))
                            } catch (e) {
                                n(a.responseText)
                            } else n(a.response)
                        })), a.addEventListener("error", (function() {
                            throw new Error(a.status)
                        })), a.open("GET", e, !0), a.responseType = t, a.send()
                    } catch (e) {
                        i(e)
                    }
                }))
            }

            function Re(e, t) {
                if (H(e)) {
                    var n = H(t),
                        i = function() {
                            return null !== document.getElementById(t)
                        },
                        a = function(e, t) {
                            e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e)
                        };
                    if (!n || !i()) {
                        var r = Fe.supported,
                            o = document.createElement("div");
                        if (o.setAttribute("hidden", ""), n && o.setAttribute("id", t), r) {
                            var s = window.localStorage.getItem("".concat("cache", "-").concat(t));
                            if (null !== s) {
                                var l = JSON.parse(s);
                                a(o, l.content)
                            }
                        }
                        De(e).then((function(e) {
                            Y(e) || (r && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
                                content: e
                            })), a(o, e))
                        })).catch((function() {}))
                    }
                }
            }
            var Ve = function(e) {
                    return Math.trunc(e / 60 / 60 % 60, 10)
                },
                Be = function(e) {
                    return Math.trunc(e / 60 % 60, 10)
                },
                Ue = function(e) {
                    return Math.trunc(e % 60, 10)
                };

            function ze() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!q(e)) return ze(void 0, t, n);
                var i = function(e) {
                        return "0".concat(e).slice(-2)
                    },
                    a = Ve(e),
                    r = Be(e),
                    o = Ue(e);
                return a = t || a > 0 ? "".concat(a, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(a).concat(i(r), ":").concat(i(o))
            }
            var We = {
                getIconUrl: function() {
                    var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || Q.isIE && !window.svg4everybody;
                    return {
                        url: this.config.iconUrl,
                        cors: e
                    }
                },
                findElements: function() {
                    try {
                        return this.elements.controls = he.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                            play: de.call(this, this.config.selectors.buttons.play),
                            pause: he.call(this, this.config.selectors.buttons.pause),
                            restart: he.call(this, this.config.selectors.buttons.restart),
                            rewind: he.call(this, this.config.selectors.buttons.rewind),
                            fastForward: he.call(this, this.config.selectors.buttons.fastForward),
                            mute: he.call(this, this.config.selectors.buttons.mute),
                            pip: he.call(this, this.config.selectors.buttons.pip),
                            airplay: he.call(this, this.config.selectors.buttons.airplay),
                            settings: he.call(this, this.config.selectors.buttons.settings),
                            captions: he.call(this, this.config.selectors.buttons.captions),
                            fullscreen: he.call(this, this.config.selectors.buttons.fullscreen)
                        }, this.elements.progress = he.call(this, this.config.selectors.progress), this.elements.inputs = {
                            seek: he.call(this, this.config.selectors.inputs.seek),
                            volume: he.call(this, this.config.selectors.inputs.volume)
                        }, this.elements.display = {
                            buffer: he.call(this, this.config.selectors.display.buffer),
                            currentTime: he.call(this, this.config.selectors.display.currentTime),
                            duration: he.call(this, this.config.selectors.display.duration)
                        }, B(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
                    } catch (e) {
                        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                    }
                },
                createIcon: function(e, t) {
                    var n = We.getIconUrl.call(this),
                        i = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
                        a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    ee(a, $(t, {
                        role: "presentation",
                        focusable: "false"
                    }));
                    var r = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                        o = "".concat(i, "-").concat(e);
                    return "href" in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(r), a
                },
                createLabel: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = He(e, this.config),
                        i = o({}, t, {
                            class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                        });
                    return te("span", i, n)
                },
                createBadge: function(e) {
                    if (Y(e)) return null;
                    var t = te("span", {
                        class: this.config.classNames.menu.value
                    });
                    return t.appendChild(te("span", {
                        class: this.config.classNames.menu.badge
                    }, e)), t
                },
                createButton: function(e, t) {
                    var n = this,
                        i = $({}, t),
                        a = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = e.toString();
                            return (t = Oe(t)).charAt(0).toLowerCase() + t.slice(1)
                        }(e),
                        r = {
                            element: "button",
                            toggle: !1,
                            label: null,
                            icon: null,
                            labelPressed: null,
                            iconPressed: null
                        };
                    switch (["element", "icon", "label"].forEach((function(e) {
                        Object.keys(i).includes(e) && (r[e] = i[e], delete i[e])
                    })), "button" !== r.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((function(e) {
                        return e === n.config.classNames.control
                    })) || $(i, {
                        class: "".concat(i.class, " ").concat(this.config.classNames.control)
                    }) : i.class = this.config.classNames.control, e) {
                        case "play":
                            r.toggle = !0, r.label = "play", r.labelPressed = "pause", r.icon = "play", r.iconPressed = "pause";
                            break;
                        case "mute":
                            r.toggle = !0, r.label = "mute", r.labelPressed = "unmute", r.icon = "volume", r.iconPressed = "muted";
                            break;
                        case "captions":
                            r.toggle = !0, r.label = "enableCaptions", r.labelPressed = "disableCaptions", r.icon = "captions-off", r.iconPressed = "captions-on";
                            break;
                        case "fullscreen":
                            r.toggle = !0, r.label = "enterFullscreen", r.labelPressed = "exitFullscreen", r.icon = "enter-fullscreen", r.iconPressed = "exit-fullscreen";
                            break;
                        case "play-large":
                            i.class += " ".concat(this.config.classNames.control, "--overlaid"), a = "play", r.label = "play", r.icon = "play";
                            break;
                        default:
                            Y(r.label) && (r.label = a), Y(r.icon) && (r.icon = e)
                    }
                    var o = te(r.element);
                    return r.toggle ? (o.appendChild(We.createIcon.call(this, r.iconPressed, {
                        class: "icon--pressed"
                    })), o.appendChild(We.createIcon.call(this, r.icon, {
                        class: "icon--not-pressed"
                    })), o.appendChild(We.createLabel.call(this, r.labelPressed, {
                        class: "label--pressed"
                    })), o.appendChild(We.createLabel.call(this, r.label, {
                        class: "label--not-pressed"
                    }))) : (o.appendChild(We.createIcon.call(this, r.icon)), o.appendChild(We.createLabel.call(this, r.label))), $(i, oe(this.config.selectors.buttons[a], i)), ee(o, i), "play" === a ? (R(this.elements.buttons[a]) || (this.elements.buttons[a] = []), this.elements.buttons[a].push(o)) : this.elements.buttons[a] = o, o
                },
                createRange: function(e, t) {
                    var n = te("input", $(oe(this.config.selectors.inputs[e]), {
                        type: "range",
                        min: 0,
                        max: 100,
                        step: .01,
                        value: 0,
                        autocomplete: "off",
                        role: "slider",
                        "aria-label": He(e, this.config),
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": 0
                    }, t));
                    return this.elements.inputs[e] = n, We.updateRangeFill.call(this, n), A.setup(n), n
                },
                createProgress: function(e, t) {
                    var n = te("progress", $(oe(this.config.selectors.display[e]), {
                        min: 0,
                        max: 100,
                        value: 0,
                        role: "progressbar",
                        "aria-hidden": !0
                    }, t));
                    if ("volume" !== e) {
                        n.appendChild(te("span", null, "0"));
                        var i = {
                                played: "played",
                                buffer: "buffered"
                            }[e],
                            a = i ? He(i, this.config) : "";
                        n.innerText = "% ".concat(a.toLowerCase())
                    }
                    return this.elements.display[e] = n, n
                },
                createTime: function(e, t) {
                    var n = oe(this.config.selectors.display[e], t),
                        i = te("div", $(n, {
                            class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                            "aria-label": He(e, this.config)
                        }), "00:00");
                    return this.elements.display[e] = i, i
                },
                bindMenuItemShortcuts: function(e, t) {
                    var n = this;
                    be.call(this, e, "keydown keyup", (function(i) {
                        if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
                            var a, r = ue(e, '[role="menuitemradio"]');
                            !r && [32, 39].includes(i.which) ? We.showMenuPanel.call(n, t, !0) : 32 !== i.which && (40 === i.which || r && 39 === i.which ? (a = e.nextElementSibling, B(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, B(a) || (a = e.parentNode.lastElementChild)), pe.call(n, a, !0))
                        }
                    }), !1), be.call(this, e, "keyup", (function(e) {
                        13 === e.which && We.focusFirstMenuItem.call(n, null, !0)
                    }))
                },
                createMenuItem: function(e) {
                    var t = this,
                        n = e.value,
                        i = e.list,
                        a = e.type,
                        r = e.title,
                        o = e.badge,
                        s = void 0 === o ? null : o,
                        l = e.checked,
                        c = void 0 !== l && l,
                        u = oe(this.config.selectors.inputs[a]),
                        d = te("button", $(u, {
                            type: "button",
                            role: "menuitemradio",
                            class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
                            "aria-checked": c,
                            value: n
                        })),
                        h = te("span");
                    h.innerHTML = r, B(s) && h.appendChild(s), d.appendChild(h), Object.defineProperty(d, "checked", {
                        enumerable: !0,
                        get: function() {
                            return "true" === d.getAttribute("aria-checked")
                        },
                        set: function(e) {
                            e && Array.from(d.parentNode.children).filter((function(e) {
                                return ue(e, '[role="menuitemradio"]')
                            })).forEach((function(e) {
                                return e.setAttribute("aria-checked", "false")
                            })), d.setAttribute("aria-checked", e ? "true" : "false")
                        }
                    }), this.listeners.bind(d, "click keyup", (function(e) {
                        if (!z(e) || 32 === e.which) {
                            switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, a) {
                                case "language":
                                    t.currentTrack = Number(n);
                                    break;
                                case "quality":
                                    t.quality = n;
                                    break;
                                case "speed":
                                    t.speed = parseFloat(n)
                            }
                            We.showMenuPanel.call(t, "home", z(e))
                        }
                    }), a, !1), We.bindMenuItemShortcuts.call(this, d, a), i.appendChild(d)
                },
                formatTime: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!q(e)) return e;
                    var n = Ve(this.duration) > 0;
                    return ze(e, n, t)
                },
                updateTimeDisplay: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    B(e) && q(t) && (e.innerText = We.formatTime(t, n))
                },
                updateVolume: function() {
                    this.supported.ui && (B(this.elements.inputs.volume) && We.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), B(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                },
                setRange: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    B(e) && (e.value = t, We.updateRangeFill.call(this, e))
                },
                updateProgress: function(e) {
                    var t = this;
                    if (this.supported.ui && U(e)) {
                        var n, i, a = 0;
                        if (e) switch (e.type) {
                            case "timeupdate":
                            case "seeking":
                            case "seeked":
                                n = this.currentTime, i = this.duration, a = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && We.setRange.call(this, this.elements.inputs.seek, a);
                                break;
                            case "playing":
                            case "progress":
                                ! function(e, n) {
                                    var i = q(n) ? n : 0,
                                        a = B(e) ? e : t.elements.display.buffer;
                                    if (B(a)) {
                                        a.value = i;
                                        var r = a.getElementsByTagName("span")[0];
                                        B(r) && (r.childNodes[0].nodeValue = i)
                                    }
                                }(this.elements.display.buffer, 100 * this.buffered)
                        }
                    }
                },
                updateRangeFill: function(e) {
                    var t = U(e) ? e.target : e;
                    if (B(t) && "range" === t.getAttribute("type")) {
                        if (ue(t, this.config.selectors.inputs.seek)) {
                            t.setAttribute("aria-valuenow", this.currentTime);
                            var n = We.formatTime(this.currentTime),
                                i = We.formatTime(this.duration),
                                a = He("seekLabel", this.config);
                            t.setAttribute("aria-valuetext", a.replace("{currentTime}", n).replace("{duration}", i))
                        } else if (ue(t, this.config.selectors.inputs.volume)) {
                            var r = 100 * t.value;
                            t.setAttribute("aria-valuenow", r), t.setAttribute("aria-valuetext", "".concat(r.toFixed(1), "%"))
                        } else t.setAttribute("aria-valuenow", t.value);
                        Q.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
                    }
                },
                updateSeekTooltip: function(e) {
                    var t = this;
                    if (this.config.tooltips.seek && B(this.elements.inputs.seek) && B(this.elements.display.seekTooltip) && 0 !== this.duration) {
                        var n = "".concat(this.config.classNames.tooltip, "--visible"),
                            i = function(e) {
                                return le(t.elements.display.seekTooltip, n, e)
                            };
                        if (this.touch) i(!1);
                        else {
                            var a = 0,
                                r = this.elements.progress.getBoundingClientRect();
                            if (U(e)) a = 100 / r.width * (e.pageX - r.left);
                            else {
                                if (!ce(this.elements.display.seekTooltip, n)) return;
                                a = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                            }
                            a < 0 ? a = 0 : a > 100 && (a = 100), We.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * a), this.elements.display.seekTooltip.style.left = "".concat(a, "%"), U(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
                        }
                    }
                },
                timeUpdate: function(e) {
                    var t = !B(this.elements.display.duration) && this.config.invertTime;
                    We.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || We.updateProgress.call(this, e)
                },
                durationUpdate: function() {
                    if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                        if (this.duration >= Math.pow(2, 32)) return se(this.elements.display.currentTime, !0), void se(this.elements.progress, !0);
                        B(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                        var e = B(this.elements.display.duration);
                        !e && this.config.displayDuration && this.paused && We.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && We.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), We.updateSeekTooltip.call(this)
                    }
                },
                toggleMenuButton: function(e, t) {
                    se(this.elements.settings.buttons[e], !t)
                },
                updateSetting: function(e, t, n) {
                    var i = this.elements.settings.panels[e],
                        a = null,
                        r = t;
                    if ("captions" === e) a = this.currentTrack;
                    else {
                        if (a = Y(n) ? this[e] : n, Y(a) && (a = this.config[e].default), !Y(this.options[e]) && !this.options[e].includes(a)) return void this.debug.warn("Unsupported value of '".concat(a, "' for ").concat(e));
                        if (!this.config[e].options.includes(a)) return void this.debug.warn("Disabled value of '".concat(a, "' for ").concat(e))
                    }
                    if (B(r) || (r = i && i.querySelector('[role="menu"]')), B(r)) {
                        this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = We.getLabel.call(this, e, a);
                        var o = r && r.querySelector('[value="'.concat(a, '"]'));
                        B(o) && (o.checked = !0)
                    }
                },
                getLabel: function(e, t) {
                    switch (e) {
                        case "speed":
                            return 1 === t ? He("normal", this.config) : "".concat(t, "&times;");
                        case "quality":
                            if (q(t)) {
                                var n = He("qualityLabel.".concat(t), this.config);
                                return n.length ? n : "".concat(t, "p")
                            }
                            return Ie(t);
                        case "captions":
                            return Ge.getLabel.call(this);
                        default:
                            return null
                    }
                },
                setQualityMenu: function(e) {
                    var t = this;
                    if (B(this.elements.settings.panels.quality)) {
                        var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                        R(e) && (this.options.quality = _e(e).filter((function(e) {
                            return t.config.quality.options.includes(e)
                        })));
                        var i = !Y(this.options.quality) && this.options.quality.length > 1;
                        if (We.toggleMenuButton.call(this, "quality", i), ae(n), We.checkMenu.call(this), i) {
                            var a = function(e) {
                                var n = He("qualityBadge.".concat(e), t.config);
                                return n.length ? We.createBadge.call(t, n) : null
                            };
                            this.options.quality.sort((function(e, n) {
                                var i = t.config.quality.options;
                                return i.indexOf(e) > i.indexOf(n) ? 1 : -1
                            })).forEach((function(e) {
                                We.createMenuItem.call(t, {
                                    value: e,
                                    list: n,
                                    type: "quality",
                                    title: We.getLabel.call(t, "quality", e),
                                    badge: a(e)
                                })
                            })), We.updateSetting.call(this, "quality", n)
                        }
                    }
                },
                setCaptionsMenu: function() {
                    var e = this;
                    if (B(this.elements.settings.panels.captions)) {
                        var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                            n = Ge.getTracks.call(this),
                            i = Boolean(n.length);
                        if (We.toggleMenuButton.call(this, "captions", i), ae(t), We.checkMenu.call(this), i) {
                            var a = n.map((function(n, i) {
                                return {
                                    value: i,
                                    checked: e.captions.toggled && e.currentTrack === i,
                                    title: Ge.getLabel.call(e, n),
                                    badge: n.language && We.createBadge.call(e, n.language.toUpperCase()),
                                    list: t,
                                    type: "language"
                                }
                            }));
                            a.unshift({
                                value: -1,
                                checked: !this.captions.toggled,
                                title: He("disabled", this.config),
                                list: t,
                                type: "language"
                            }), a.forEach(We.createMenuItem.bind(this)), We.updateSetting.call(this, "captions", t)
                        }
                    }
                },
                setSpeedMenu: function() {
                    var e = this;
                    if (B(this.elements.settings.panels.speed)) {
                        var t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                        this.options.speed = this.options.speed.filter((function(t) {
                            return t >= e.minimumSpeed && t <= e.maximumSpeed
                        }));
                        var n = !Y(this.options.speed) && this.options.speed.length > 1;
                        We.toggleMenuButton.call(this, "speed", n), ae(t), We.checkMenu.call(this), n && (this.options.speed.forEach((function(n) {
                            We.createMenuItem.call(e, {
                                value: n,
                                list: t,
                                type: "speed",
                                title: We.getLabel.call(e, "speed", n)
                            })
                        })), We.updateSetting.call(this, "speed", t))
                    }
                },
                checkMenu: function() {
                    var e = this.elements.settings.buttons,
                        t = !Y(e) && Object.values(e).some((function(e) {
                            return !e.hidden
                        }));
                    se(this.elements.settings.menu, !t)
                },
                focusFirstMenuItem: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!this.elements.settings.popup.hidden) {
                        var n = e;
                        B(n) || (n = Object.values(this.elements.settings.panels).find((function(e) {
                            return !e.hidden
                        })));
                        var i = n.querySelector('[role^="menuitem"]');
                        pe.call(this, i, t)
                    }
                },
                toggleMenu: function(e) {
                    var t = this.elements.settings.popup,
                        n = this.elements.buttons.settings;
                    if (B(t) && B(n)) {
                        var i = t.hidden,
                            a = i;
                        if (F(e)) a = e;
                        else if (z(e) && 27 === e.which) a = !1;
                        else if (U(e)) {
                            var r = D(e.composedPath) ? e.composedPath()[0] : e.target,
                                o = t.contains(r);
                            if (o || !o && e.target !== n && a) return
                        }
                        n.setAttribute("aria-expanded", a), se(t, !a), le(this.elements.container, this.config.classNames.menu.open, a), a && z(e) ? We.focusFirstMenuItem.call(this, null, !0) : a || i || pe.call(this, n, z(e))
                    }
                },
                getMenuSize: function(e) {
                    var t = e.cloneNode(!0);
                    t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
                    var n = t.scrollWidth,
                        i = t.scrollHeight;
                    return ie(t), {
                        width: n,
                        height: i
                    }
                },
                showMenuPanel: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
                    if (B(i)) {
                        var a = i.parentNode,
                            r = Array.from(a.children).find((function(e) {
                                return !e.hidden
                            }));
                        if (ge.transitions && !ge.reducedMotion) {
                            a.style.width = "".concat(r.scrollWidth, "px"), a.style.height = "".concat(r.scrollHeight, "px");
                            var o = We.getMenuSize.call(this, i),
                                s = function t(n) {
                                    n.target === a && ["width", "height"].includes(n.propertyName) && (a.style.width = "", a.style.height = "", we.call(e, a, G, t))
                                };
                            be.call(this, a, G, s), a.style.width = "".concat(o.width, "px"), a.style.height = "".concat(o.height, "px")
                        }
                        se(r, !0), se(i, !1), We.focusFirstMenuItem.call(this, i, n)
                    }
                },
                setDownloadUrl: function() {
                    var e = this.elements.buttons.download;
                    B(e) && e.setAttribute("href", this.download)
                },
                create: function(e) {
                    var t = this,
                        n = We.bindMenuItemShortcuts,
                        i = We.createButton,
                        a = We.createProgress,
                        r = We.createRange,
                        o = We.createTime,
                        s = We.setQualityMenu,
                        l = We.setSpeedMenu,
                        c = We.showMenuPanel;
                    this.elements.controls = null, this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                    var u = te("div", oe(this.config.selectors.controls.wrapper));
                    this.elements.controls = u;
                    var d = {
                        class: "plyr__controls__item"
                    };
                    return _e(this.config.controls).forEach((function(s) {
                        if ("restart" === s && u.appendChild(i.call(t, "restart", d)), "rewind" === s && u.appendChild(i.call(t, "rewind", d)), "play" === s && u.appendChild(i.call(t, "play", d)), "fast-forward" === s && u.appendChild(i.call(t, "fast-forward", d)), "progress" === s) {
                            var l = te("div", {
                                    class: "".concat(d.class, " plyr__progress__container")
                                }),
                                h = te("div", oe(t.config.selectors.progress));
                            if (h.appendChild(r.call(t, "seek", {
                                    id: "plyr-seek-".concat(e.id)
                                })), h.appendChild(a.call(t, "buffer")), t.config.tooltips.seek) {
                                var p = te("span", {
                                    class: t.config.classNames.tooltip
                                }, "00:00");
                                h.appendChild(p), t.elements.display.seekTooltip = p
                            }
                            t.elements.progress = h, l.appendChild(t.elements.progress), u.appendChild(l)
                        }
                        if ("current-time" === s && u.appendChild(o.call(t, "currentTime", d)), "duration" === s && u.appendChild(o.call(t, "duration", d)), "mute" === s || "volume" === s) {
                            var f = t.elements.volume;
                            if (B(f) && u.contains(f) || (f = te("div", $({}, d, {
                                    class: "".concat(d.class, " plyr__volume").trim()
                                })), t.elements.volume = f, u.appendChild(f)), "mute" === s && f.appendChild(i.call(t, "mute")), "volume" === s && !Q.isIos) {
                                var m = {
                                    max: 1,
                                    step: .05,
                                    value: t.config.volume
                                };
                                f.appendChild(r.call(t, "volume", $(m, {
                                    id: "plyr-volume-".concat(e.id)
                                })))
                            }
                        }
                        if ("captions" === s && u.appendChild(i.call(t, "captions", d)), "settings" === s && !Y(t.config.settings)) {
                            var g = te("div", $({}, d, {
                                class: "".concat(d.class, " plyr__menu").trim(),
                                hidden: ""
                            }));
                            g.appendChild(i.call(t, "settings", {
                                "aria-haspopup": !0,
                                "aria-controls": "plyr-settings-".concat(e.id),
                                "aria-expanded": !1
                            }));
                            var y = te("div", {
                                    class: "plyr__menu__container",
                                    id: "plyr-settings-".concat(e.id),
                                    hidden: ""
                                }),
                                v = te("div"),
                                b = te("div", {
                                    id: "plyr-settings-".concat(e.id, "-home")
                                }),
                                w = te("div", {
                                    role: "menu"
                                });
                            b.appendChild(w), v.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function(i) {
                                var a = te("button", $(oe(t.config.selectors.buttons.settings), {
                                    type: "button",
                                    class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                                    role: "menuitem",
                                    "aria-haspopup": !0,
                                    hidden: ""
                                }));
                                n.call(t, a, i), be.call(t, a, "click", (function() {
                                    c.call(t, i, !1)
                                }));
                                var r = te("span", null, He(i, t.config)),
                                    o = te("span", {
                                        class: t.config.classNames.menu.value
                                    });
                                o.innerHTML = e[i], r.appendChild(o), a.appendChild(r), w.appendChild(a);
                                var s = te("div", {
                                        id: "plyr-settings-".concat(e.id, "-").concat(i),
                                        hidden: ""
                                    }),
                                    l = te("button", {
                                        type: "button",
                                        class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                                    });
                                l.appendChild(te("span", {
                                    "aria-hidden": !0
                                }, He(i, t.config))), l.appendChild(te("span", {
                                    class: t.config.classNames.hidden
                                }, He("menuBack", t.config))), be.call(t, s, "keydown", (function(e) {
                                    37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0))
                                }), !1), be.call(t, l, "click", (function() {
                                    c.call(t, "home", !1)
                                })), s.appendChild(l), s.appendChild(te("div", {
                                    role: "menu"
                                })), v.appendChild(s), t.elements.settings.buttons[i] = a, t.elements.settings.panels[i] = s
                            })), y.appendChild(v), g.appendChild(y), u.appendChild(g), t.elements.settings.popup = y, t.elements.settings.menu = g
                        }
                        if ("pip" === s && ge.pip && u.appendChild(i.call(t, "pip", d)), "airplay" === s && ge.airplay && u.appendChild(i.call(t, "airplay", d)), "download" === s) {
                            var k = $({}, d, {
                                element: "a",
                                href: t.download,
                                target: "_blank"
                            });
                            t.isHTML5 && (k.download = "");
                            var T = t.config.urls.download;
                            !K(T) && t.isEmbed && $(k, {
                                icon: "logo-".concat(t.provider),
                                label: t.provider
                            }), u.appendChild(i.call(t, "download", k))
                        }
                        "fullscreen" === s && u.appendChild(i.call(t, "fullscreen", d))
                    })), this.isHTML5 && s.call(this, Le.getQualityOptions.call(this)), l.call(this), u
                },
                inject: function() {
                    var e = this;
                    if (this.config.loadSprite) {
                        var t = We.getIconUrl.call(this);
                        t.cors && Re(t.url, "sprite-plyr")
                    }
                    this.id = Math.floor(1e4 * Math.random());
                    var n = null;
                    this.elements.controls = null;
                    var i = {
                            id: this.id,
                            seektime: this.config.seekTime,
                            title: this.config.title
                        },
                        a = !0;
                    D(this.config.controls) && (this.config.controls = this.config.controls.call(this, i)), this.config.controls || (this.config.controls = []), B(this.config.controls) || H(this.config.controls) ? n = this.config.controls : (n = We.create.call(this, {
                        id: this.id,
                        seektime: this.config.seekTime,
                        speed: this.speed,
                        quality: this.quality,
                        captions: Ge.getLabel.call(this)
                    }), a = !1);
                    var r, o = function(e) {
                        var t = e;
                        return Object.entries(i).forEach((function(e) {
                            var n = s(e, 2),
                                i = n[0],
                                a = n[1];
                            t = Ne(t, "{".concat(i, "}"), a)
                        })), t
                    };
                    if (a && (H(this.config.controls) ? n = o(n) : B(n) && (n.innerHTML = o(n.innerHTML))), H(this.config.selectors.controls.container) && (r = document.querySelector(this.config.selectors.controls.container)), B(r) || (r = this.elements.container), r[B(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), B(this.elements.controls) || We.findElements.call(this), !Y(this.elements.buttons)) {
                        var l = function(t) {
                            var n = e.config.classNames.controlPressed;
                            Object.defineProperty(t, "pressed", {
                                enumerable: !0,
                                get: function() {
                                    return ce(t, n)
                                },
                                set: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    le(t, n, e)
                                }
                            })
                        };
                        Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) {
                            R(e) || V(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e)
                        }))
                    }
                    if (Q.isEdge && J(r), this.config.tooltips.controls) {
                        var c = this.config,
                            u = c.classNames,
                            d = c.selectors,
                            h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
                            p = de.call(this, h);
                        Array.from(p).forEach((function(t) {
                            le(t, e.config.classNames.hidden, !1), le(t, e.config.classNames.tooltip, !0)
                        }))
                    }
                }
            };

            function Ke(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = e;
                if (t) {
                    var i = document.createElement("a");
                    i.href = n, n = i.href
                }
                try {
                    return new URL(n)
                } catch (e) {
                    return null
                }
            }

            function Ye(e) {
                var t = new URLSearchParams;
                return j(e) && Object.entries(e).forEach((function(e) {
                    var n = s(e, 2),
                        i = n[0],
                        a = n[1];
                    t.set(i, a)
                })), t
            }
            var Ge = {
                    setup: function() {
                        if (this.supported.ui)
                            if (!this.isVideo || this.isYouTube || this.isHTML5 && !ge.textTracks) R(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this);
                            else {
                                if (B(this.elements.captions) || (this.elements.captions = te("div", oe(this.config.selectors.captions)), function(e, t) {
                                        B(e) && B(t) && t.parentNode.insertBefore(e, t.nextSibling)
                                    }(this.elements.captions, this.elements.wrapper)), Q.isIE && window.URL) {
                                    var e = this.media.querySelectorAll("track");
                                    Array.from(e).forEach((function(e) {
                                        var t = e.getAttribute("src"),
                                            n = Ke(t);
                                        null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && De(t, "blob").then((function(t) {
                                            e.setAttribute("src", window.URL.createObjectURL(t))
                                        })).catch((function() {
                                            ie(e)
                                        }))
                                    }))
                                }
                                var t = _e((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) {
                                        return e.split("-")[0]
                                    }))),
                                    n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                                "auto" === n && (n = s(t, 1)[0]);
                                var i = this.storage.get("captions");
                                if (F(i) || (i = this.config.captions.active), Object.assign(this.captions, {
                                        toggled: !1,
                                        active: i,
                                        language: n,
                                        languages: t
                                    }), this.isHTML5) {
                                    var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                    be.call(this, this.media.textTracks, a, Ge.update.bind(this))
                                }
                                setTimeout(Ge.update.bind(this), 0)
                            }
                    },
                    update: function() {
                        var e = this,
                            t = Ge.getTracks.call(this, !0),
                            n = this.captions,
                            i = n.active,
                            a = n.language,
                            r = n.meta,
                            o = n.currentTrackNode,
                            s = Boolean(t.find((function(e) {
                                return e.language === a
                            })));
                        this.isHTML5 && this.isVideo && t.filter((function(e) {
                            return !r.get(e)
                        })).forEach((function(t) {
                            e.debug.log("Track added", t), r.set(t, {
                                default: "showing" === t.mode
                            }), t.mode = "hidden", be.call(e, t, "cuechange", (function() {
                                return Ge.updateCues.call(e)
                            }))
                        })), (s && this.language !== a || !t.includes(o)) && (Ge.setLanguage.call(this, a), Ge.toggle.call(this, i && s)), le(this.elements.container, this.config.classNames.captions.enabled, !Y(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && We.setCaptionsMenu.call(this)
                    },
                    toggle: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (this.supported.ui) {
                            var n = this.captions.toggled,
                                i = this.config.classNames.captions.active,
                                a = O(e) ? !n : e;
                            if (a !== n) {
                                if (t || (this.captions.active = a, this.storage.set({
                                        captions: a
                                    })), !this.language && a && !t) {
                                    var r = Ge.getTracks.call(this),
                                        o = Ge.findTrack.call(this, [this.captions.language].concat(l(this.captions.languages)), !0);
                                    return this.captions.language = o.language, void Ge.set.call(this, r.indexOf(o))
                                }
                                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = a), le(this.elements.container, i, a), this.captions.toggled = a, We.updateSetting.call(this, "captions"), Te.call(this, this.media, a ? "captionsenabled" : "captionsdisabled")
                            }
                        }
                    },
                    set: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = Ge.getTracks.call(this);
                        if (-1 !== e)
                            if (q(e))
                                if (e in n) {
                                    if (this.captions.currentTrack !== e) {
                                        this.captions.currentTrack = e;
                                        var i = n[e],
                                            a = i || {},
                                            r = a.language;
                                        this.captions.currentTrackNode = i, We.updateSetting.call(this, "captions"), t || (this.captions.language = r, this.storage.set({
                                            language: r
                                        })), this.isVimeo && this.embed.enableTextTrack(r), Te.call(this, this.media, "languagechange")
                                    }
                                    Ge.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Ge.updateCues.call(this)
                                } else this.debug.warn("Track not found", e);
                        else this.debug.warn("Invalid caption argument", e);
                        else Ge.toggle.call(this, !1, t)
                    },
                    setLanguage: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (H(e)) {
                            var n = e.toLowerCase();
                            this.captions.language = n;
                            var i = Ge.getTracks.call(this),
                                a = Ge.findTrack.call(this, [n]);
                            Ge.set.call(this, i.indexOf(a), t)
                        } else this.debug.warn("Invalid language argument", e)
                    },
                    getTracks: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = Array.from((this.media || {}).textTracks || []);
                        return n.filter((function(n) {
                            return !e.isHTML5 || t || e.captions.meta.has(n)
                        })).filter((function(e) {
                            return ["captions", "subtitles"].includes(e.kind)
                        }))
                    },
                    findTrack: function(e) {
                        var t, n = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = Ge.getTracks.call(this),
                            r = function(e) {
                                return Number((n.captions.meta.get(e) || {}).default)
                            },
                            o = Array.from(a).sort((function(e, t) {
                                return r(t) - r(e)
                            }));
                        return e.every((function(e) {
                            return !(t = o.find((function(t) {
                                return t.language === e
                            })))
                        })), t || (i ? o[0] : void 0)
                    },
                    getCurrentTrack: function() {
                        return Ge.getTracks.call(this)[this.currentTrack]
                    },
                    getLabel: function(e) {
                        var t = e;
                        return !W(t) && ge.textTracks && this.captions.toggled && (t = Ge.getCurrentTrack.call(this)), W(t) ? Y(t.label) ? Y(t.language) ? He("enabled", this.config) : e.language.toUpperCase() : t.label : He("disabled", this.config)
                    },
                    updateCues: function(e) {
                        if (this.supported.ui)
                            if (B(this.elements.captions))
                                if (O(e) || Array.isArray(e)) {
                                    var t = e;
                                    if (!t) {
                                        var n = Ge.getCurrentTrack.call(this);
                                        t = Array.from((n || {}).activeCues || []).map((function(e) {
                                            return e.getCueAsHTML()
                                        })).map(je)
                                    }
                                    var i = t.map((function(e) {
                                        return e.trim()
                                    })).join("\n");
                                    if (i !== this.elements.captions.innerHTML) {
                                        ae(this.elements.captions);
                                        var a = te("span", oe(this.config.selectors.caption));
                                        a.innerHTML = i, this.elements.captions.appendChild(a), Te.call(this, this.media, "cuechange")
                                    }
                                } else this.debug.warn("updateCues: Invalid input", e);
                        else this.debug.warn("No captions element to render to")
                    }
                },
                Je = {
                    enabled: !0,
                    title: "",
                    debug: !1,
                    autoplay: !1,
                    autopause: !0,
                    playsinline: !0,
                    seekTime: 10,
                    volume: 1,
                    muted: !1,
                    duration: null,
                    displayDuration: !0,
                    invertTime: !0,
                    toggleInvert: !0,
                    ratio: null,
                    clickToPlay: !0,
                    hideControls: !0,
                    resetOnEnd: !1,
                    disableContextMenu: !0,
                    loadSprite: !0,
                    iconPrefix: "plyr",
                    iconUrl: "https://cdn.plyr.io/3.5.10/plyr.svg",
                    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                    quality: {
                        default: 576,
                        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                        forced: !1,
                        onChange: null
                    },
                    loop: {
                        active: !1
                    },
                    speed: {
                        selected: 1,
                        options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
                    },
                    keyboard: {
                        focused: !0,
                        global: !1
                    },
                    tooltips: {
                        controls: !1,
                        seek: !0
                    },
                    captions: {
                        active: !1,
                        language: "auto",
                        update: !1
                    },
                    fullscreen: {
                        enabled: !0,
                        fallback: !0,
                        iosNative: !1
                    },
                    storage: {
                        enabled: !0,
                        key: "plyr"
                    },
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                    settings: ["captions", "quality", "speed"],
                    i18n: {
                        restart: "Restart",
                        rewind: "Rewind {seektime}s",
                        play: "Play",
                        pause: "Pause",
                        fastForward: "Forward {seektime}s",
                        seek: "Seek",
                        seekLabel: "{currentTime} of {duration}",
                        played: "Played",
                        buffered: "Buffered",
                        currentTime: "Current time",
                        duration: "Duration",
                        volume: "Volume",
                        mute: "Mute",
                        unmute: "Unmute",
                        enableCaptions: "Enable captions",
                        disableCaptions: "Disable captions",
                        download: "Download",
                        enterFullscreen: "Enter fullscreen",
                        exitFullscreen: "Exit fullscreen",
                        frameTitle: "Player for {title}",
                        captions: "Captions",
                        settings: "Settings",
                        pip: "PIP",
                        menuBack: "Go back to previous menu",
                        speed: "Speed",
                        normal: "Normal",
                        quality: "Quality",
                        loop: "Loop",
                        start: "Start",
                        end: "End",
                        all: "All",
                        reset: "Reset",
                        disabled: "Disabled",
                        enabled: "Enabled",
                        advertisement: "Ad",
                        qualityBadge: {
                            2160: "4K",
                            1440: "HD",
                            1080: "HD",
                            720: "HD",
                            576: "SD",
                            480: "SD"
                        }
                    },
                    urls: {
                        download: null,
                        vimeo: {
                            sdk: "https://player.vimeo.com/api/player.js",
                            iframe: "https://player.vimeo.com/video/{0}?{1}",
                            api: "https://vimeo.com/api/v2/video/{0}.json"
                        },
                        youtube: {
                            sdk: "https://www.youtube.com/iframe_api",
                            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                        },
                        googleIMA: {
                            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                        }
                    },
                    listeners: {
                        seek: null,
                        play: null,
                        pause: null,
                        restart: null,
                        rewind: null,
                        fastForward: null,
                        mute: null,
                        volume: null,
                        captions: null,
                        download: null,
                        fullscreen: null,
                        pip: null,
                        airplay: null,
                        speed: null,
                        quality: null,
                        loop: null,
                        language: null
                    },
                    events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                    selectors: {
                        editable: "input, textarea, select, [contenteditable]",
                        container: ".plyr",
                        controls: {
                            container: null,
                            wrapper: ".plyr__controls"
                        },
                        labels: "[data-plyr]",
                        buttons: {
                            play: '[data-plyr="play"]',
                            pause: '[data-plyr="pause"]',
                            restart: '[data-plyr="restart"]',
                            rewind: '[data-plyr="rewind"]',
                            fastForward: '[data-plyr="fast-forward"]',
                            mute: '[data-plyr="mute"]',
                            captions: '[data-plyr="captions"]',
                            download: '[data-plyr="download"]',
                            fullscreen: '[data-plyr="fullscreen"]',
                            pip: '[data-plyr="pip"]',
                            airplay: '[data-plyr="airplay"]',
                            settings: '[data-plyr="settings"]',
                            loop: '[data-plyr="loop"]'
                        },
                        inputs: {
                            seek: '[data-plyr="seek"]',
                            volume: '[data-plyr="volume"]',
                            speed: '[data-plyr="speed"]',
                            language: '[data-plyr="language"]',
                            quality: '[data-plyr="quality"]'
                        },
                        display: {
                            currentTime: ".plyr__time--current",
                            duration: ".plyr__time--duration",
                            buffer: ".plyr__progress__buffer",
                            loop: ".plyr__progress__loop",
                            volume: ".plyr__volume--display"
                        },
                        progress: ".plyr__progress",
                        captions: ".plyr__captions",
                        caption: ".plyr__caption"
                    },
                    classNames: {
                        type: "plyr--{0}",
                        provider: "plyr--{0}",
                        video: "plyr__video-wrapper",
                        embed: "plyr__video-embed",
                        videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                        embedContainer: "plyr__video-embed__container",
                        poster: "plyr__poster",
                        posterEnabled: "plyr__poster-enabled",
                        ads: "plyr__ads",
                        control: "plyr__control",
                        controlPressed: "plyr__control--pressed",
                        playing: "plyr--playing",
                        paused: "plyr--paused",
                        stopped: "plyr--stopped",
                        loading: "plyr--loading",
                        hover: "plyr--hover",
                        tooltip: "plyr__tooltip",
                        cues: "plyr__cues",
                        hidden: "plyr__sr-only",
                        hideControls: "plyr--hide-controls",
                        isIos: "plyr--is-ios",
                        isTouch: "plyr--is-touch",
                        uiSupported: "plyr--full-ui",
                        noTransition: "plyr--no-transition",
                        display: {
                            time: "plyr__time"
                        },
                        menu: {
                            value: "plyr__menu__value",
                            badge: "plyr__badge",
                            open: "plyr--menu-open"
                        },
                        captions: {
                            enabled: "plyr--captions-enabled",
                            active: "plyr--captions-active"
                        },
                        fullscreen: {
                            enabled: "plyr--fullscreen-enabled",
                            fallback: "plyr--fullscreen-fallback"
                        },
                        pip: {
                            supported: "plyr--pip-supported",
                            active: "plyr--pip-active"
                        },
                        airplay: {
                            supported: "plyr--airplay-supported",
                            active: "plyr--airplay-active"
                        },
                        tabFocus: "plyr__tab-focus",
                        previewThumbnails: {
                            thumbContainer: "plyr__preview-thumb",
                            thumbContainerShown: "plyr__preview-thumb--is-shown",
                            imageContainer: "plyr__preview-thumb__image-container",
                            timeContainer: "plyr__preview-thumb__time-container",
                            scrubbingContainer: "plyr__preview-scrubbing",
                            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                        }
                    },
                    attributes: {
                        embed: {
                            provider: "data-plyr-provider",
                            id: "data-plyr-embed-id"
                        }
                    },
                    ads: {
                        enabled: !1,
                        publisherId: "",
                        tagUrl: ""
                    },
                    previewThumbnails: {
                        enabled: !1,
                        src: ""
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        speed: !0,
                        transparent: !1,
                        sidedock: !1,
                        controls: !1,
                        referrerPolicy: null
                    },
                    youtube: {
                        noCookie: !1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        modestbranding: 1
                    }
                },
                Qe = "picture-in-picture",
                Xe = {
                    html5: "html5",
                    youtube: "youtube",
                    vimeo: "vimeo"
                },
                $e = function() {},
                Ze = function() {
                    function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e(this, t), this.enabled = window.console && n, this.enabled && this.log("Debugging enabled")
                    }
                    return n(t, [{
                        key: "log",
                        get: function() {
                            return this.enabled ? Function.prototype.bind.call(console.log, console) : $e
                        }
                    }, {
                        key: "warn",
                        get: function() {
                            return this.enabled ? Function.prototype.bind.call(console.warn, console) : $e
                        }
                    }, {
                        key: "error",
                        get: function() {
                            return this.enabled ? Function.prototype.bind.call(console.error, console) : $e
                        }
                    }]), t
                }(),
                et = function() {
                    function t(n) {
                        var i = this;
                        e(this, t), this.player = n, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = {
                            x: 0,
                            y: 0
                        }, this.forceFallback = "force" === n.config.fullscreen.fallback, be.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() {
                            i.onChange()
                        })), be.call(this.player, this.player.elements.container, "dblclick", (function(e) {
                            B(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle()
                        })), be.call(this, this.player.elements.container, "keydown", (function(e) {
                            return i.trapFocus(e)
                        })), this.update()
                    }
                    return n(t, [{
                        key: "onChange",
                        value: function() {
                            if (this.enabled) {
                                var e = this.player.elements.buttons.fullscreen;
                                B(e) && (e.pressed = this.active), Te.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                            }
                        }
                    }, {
                        key: "toggleFallback",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (e ? this.scrollPosition = {
                                    x: window.scrollX || 0,
                                    y: window.scrollY || 0
                                } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", le(this.target, this.player.config.classNames.fullscreen.fallback, e), Q.isIos) {
                                var t = document.head.querySelector('meta[name="viewport"]'),
                                    n = "viewport-fit=cover";
                                t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                                var i = H(t.content) && t.content.includes(n);
                                e ? (this.cleanupViewport = !i, i || (t.content += ",".concat(n))) : this.cleanupViewport && (t.content = t.content.split(",").filter((function(e) {
                                    return e.trim() !== n
                                })).join(","))
                            }
                            this.onChange()
                        }
                    }, {
                        key: "trapFocus",
                        value: function(e) {
                            if (!Q.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
                                var t = document.activeElement,
                                    n = de.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                                    i = s(n, 1)[0],
                                    a = n[n.length - 1];
                                t !== a || e.shiftKey ? t === i && e.shiftKey && (a.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                            }
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e;
                            this.enabled ? (e = this.forceFallback ? "Fallback (forced)" : t.native ? "Native" : "Fallback", this.player.debug.log("".concat(e, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled"), le(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                        }
                    }, {
                        key: "enter",
                        value: function() {
                            this.enabled && (Q.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !t.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? Y(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
                                navigationUI: "hide"
                            }))
                        }
                    }, {
                        key: "exit",
                        value: function() {
                            if (this.enabled)
                                if (Q.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
                                else if (!t.native || this.forceFallback) this.toggleFallback(!1);
                            else if (this.prefix) {
                                if (!Y(this.prefix)) {
                                    var e = "moz" === this.prefix ? "Cancel" : "Exit";
                                    document["".concat(this.prefix).concat(e).concat(this.property)]()
                                }
                            } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                        }
                    }, {
                        key: "toggle",
                        value: function() {
                            this.active ? this.exit() : this.enter()
                        }
                    }, {
                        key: "usingNative",
                        get: function() {
                            return t.native && !this.forceFallback
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return (t.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                        }
                    }, {
                        key: "active",
                        get: function() {
                            return !!this.enabled && (!t.native || this.forceFallback ? ce(this.target, this.player.config.classNames.fullscreen.fallback) : (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target)
                        }
                    }, {
                        key: "target",
                        get: function() {
                            return Q.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
                        }
                    }], [{
                        key: "native",
                        get: function() {
                            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                        }
                    }, {
                        key: "prefix",
                        get: function() {
                            if (D(document.exitFullscreen)) return "";
                            var e = "";
                            return ["webkit", "moz", "ms"].some((function(t) {
                                return !(!D(document["".concat(t, "ExitFullscreen")]) && !D(document["".concat(t, "CancelFullScreen")]) || (e = t, 0))
                            })), e
                        }
                    }, {
                        key: "property",
                        get: function() {
                            return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                        }
                    }]), t
                }();

            function tt(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return new Promise((function(n, i) {
                    var a = new Image,
                        r = function() {
                            delete a.onload, delete a.onerror, (a.naturalWidth >= t ? n : i)(a)
                        };
                    Object.assign(a, {
                        onload: r,
                        onerror: r,
                        src: e
                    })
                }))
            }
            var nt = {
                    addStyleHook: function() {
                        le(this.elements.container, this.config.selectors.container.replace(".", ""), !0), le(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                    },
                    toggleNativeControls: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                    },
                    build: function() {
                        var e = this;
                        if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void nt.toggleNativeControls.call(this, !0);
                        B(this.elements.controls) || (We.inject.call(this), this.listeners.controls()), nt.toggleNativeControls.call(this), this.isHTML5 && Ge.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, We.updateVolume.call(this), We.timeUpdate.call(this), nt.checkPlaying.call(this), le(this.elements.container, this.config.classNames.pip.supported, ge.pip && this.isHTML5 && this.isVideo), le(this.elements.container, this.config.classNames.airplay.supported, ge.airplay && this.isHTML5), le(this.elements.container, this.config.classNames.isIos, Q.isIos), le(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() {
                            Te.call(e, e.media, "ready")
                        }), 0), nt.setTitle.call(this), this.poster && nt.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && We.durationUpdate.call(this)
                    },
                    setTitle: function() {
                        var e = He("play", this.config);
                        if (H(this.config.title) && !Y(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(t) {
                                t.setAttribute("aria-label", e)
                            })), this.isEmbed) {
                            var t = he.call(this, "iframe");
                            if (!B(t)) return;
                            var n = Y(this.config.title) ? "video" : this.config.title,
                                i = He("frameTitle", this.config);
                            t.setAttribute("title", i.replace("{title}", n))
                        }
                    },
                    togglePoster: function(e) {
                        le(this.elements.container, this.config.classNames.posterEnabled, e)
                    },
                    setPoster: function(e) {
                        var t = this,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("poster", e), this.isHTML5 ? Promise.resolve(e) : Se.call(this).then((function() {
                            return tt(e)
                        })).catch((function(n) {
                            throw e === t.poster && nt.togglePoster.call(t, !1), n
                        })).then((function() {
                            if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                        })).then((function() {
                            return Object.assign(t.elements.poster.style, {
                                backgroundImage: "url('".concat(e, "')"),
                                backgroundSize: ""
                            }), nt.togglePoster.call(t, !0), e
                        })))
                    },
                    checkPlaying: function(e) {
                        var t = this;
                        le(this.elements.container, this.config.classNames.playing, this.playing), le(this.elements.container, this.config.classNames.paused, this.paused), le(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(e) {
                            Object.assign(e, {
                                pressed: t.playing
                            }), e.setAttribute("aria-label", He(t.playing ? "pause" : "play", t.config))
                        })), U(e) && "timeupdate" === e.type || nt.toggleControls.call(this)
                    },
                    checkLoading: function(e) {
                        var t = this;
                        this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() {
                            le(t.elements.container, t.config.classNames.loading, t.loading), nt.toggleControls.call(t)
                        }), this.loading ? 250 : 0)
                    },
                    toggleControls: function(e) {
                        var t = this.elements.controls;
                        if (t && this.config.hideControls) {
                            var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
                        }
                    }
                },
                it = function() {
                    function t(n) {
                        e(this, t), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
                    }
                    return n(t, [{
                        key: "handleKey",
                        value: function(e) {
                            var t = this.player,
                                n = t.elements,
                                i = e.keyCode ? e.keyCode : e.which,
                                a = "keydown" === e.type,
                                r = a && i === this.lastKey;
                            if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && q(i))
                                if (a) {
                                    var o = document.activeElement;
                                    if (B(o)) {
                                        var s = t.config.selectors.editable;
                                        if (o !== n.inputs.seek && ue(o, s)) return;
                                        if (32 === e.which && ue(o, 'button, [role^="menuitem"]')) return
                                    }
                                    switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
                                        case 48:
                                        case 49:
                                        case 50:
                                        case 51:
                                        case 52:
                                        case 53:
                                        case 54:
                                        case 55:
                                        case 56:
                                        case 57:
                                            r || (t.currentTime = t.duration / 10 * (i - 48));
                                            break;
                                        case 32:
                                        case 75:
                                            r || t.togglePlay();
                                            break;
                                        case 38:
                                            t.increaseVolume(.1);
                                            break;
                                        case 40:
                                            t.decreaseVolume(.1);
                                            break;
                                        case 77:
                                            r || (t.muted = !t.muted);
                                            break;
                                        case 39:
                                            t.forward();
                                            break;
                                        case 37:
                                            t.rewind();
                                            break;
                                        case 70:
                                            t.fullscreen.toggle();
                                            break;
                                        case 67:
                                            r || t.toggleCaptions();
                                            break;
                                        case 76:
                                            t.loop = !t.loop
                                    }
                                    27 === i && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = i
                                } else this.lastKey = null
                        }
                    }, {
                        key: "toggleMenu",
                        value: function(e) {
                            We.toggleMenu.call(this.player, e)
                        }
                    }, {
                        key: "firstTouch",
                        value: function() {
                            var e = this.player,
                                t = e.elements;
                            e.touch = !0, le(t.container, e.config.classNames.isTouch, !0)
                        }
                    }, {
                        key: "setTabFocus",
                        value: function(e) {
                            var t = this.player,
                                n = t.elements;
                            if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                                "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                                var i, a = e.timeStamp - this.lastKeyDown <= 20;
                                ("focus" !== e.type || a) && (i = t.config.classNames.tabFocus, le(de.call(t, ".".concat(i)), i, !1), this.focusTimer = setTimeout((function() {
                                    var e = document.activeElement;
                                    n.container.contains(e) && le(document.activeElement, t.config.classNames.tabFocus, !0)
                                }), 10))
                            }
                        }
                    }, {
                        key: "global",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = this.player;
                            t.config.keyboard.global && ve.call(t, window, "keydown keyup", this.handleKey, e, !1), ve.call(t, document.body, "click", this.toggleMenu, e), ke.call(t, document.body, "touchstart", this.firstTouch), ve.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0)
                        }
                    }, {
                        key: "container",
                        value: function() {
                            var e = this.player,
                                t = e.config,
                                n = e.elements,
                                i = e.timers;
                            !t.keyboard.global && t.keyboard.focused && be.call(e, n.container, "keydown keyup", this.handleKey, !1), be.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
                                var a = n.controls;
                                a && "enterfullscreen" === t.type && (a.pressed = !1, a.hover = !1);
                                var r = 0;
                                ["touchstart", "touchmove", "mousemove"].includes(t.type) && (nt.toggleControls.call(e, !0), r = e.touch ? 3e3 : 2e3), clearTimeout(i.controls), i.controls = setTimeout((function() {
                                    return nt.toggleControls.call(e, !1)
                                }), r)
                            }));
                            var a = function(t) {
                                    if (!t) return Pe.call(e);
                                    var i = n.container.getBoundingClientRect(),
                                        a = i.width,
                                        r = i.height;
                                    return Pe.call(e, "".concat(a, ":").concat(r))
                                },
                                r = function() {
                                    clearTimeout(i.resized), i.resized = setTimeout(a, 50)
                                };
                            be.call(e, n.container, "enterfullscreen exitfullscreen", (function(t) {
                                var i = e.fullscreen,
                                    o = i.target,
                                    l = i.usingNative;
                                if (o === n.container && (e.isEmbed || !Y(e.config.ratio))) {
                                    var c = "enterfullscreen" === t.type,
                                        u = a(c);
                                    u.padding, ! function(t, n, i) {
                                        if (e.isVimeo) {
                                            var a = e.elements.wrapper.firstChild,
                                                r = s(t, 2)[1],
                                                o = s(xe.call(e), 2),
                                                l = o[0],
                                                c = o[1];
                                            a.style.maxWidth = i ? "".concat(r / c * l, "px") : null, a.style.margin = i ? "0 auto" : null
                                        }
                                    }(u.ratio, 0, c), l || (c ? be.call(e, window, "resize", r) : we.call(e, window, "resize", r))
                                }
                            }))
                        }
                    }, {
                        key: "media",
                        value: function() {
                            var e = this,
                                t = this.player,
                                n = t.elements;
                            if (be.call(t, t.media, "timeupdate seeking seeked", (function(e) {
                                    return We.timeUpdate.call(t, e)
                                })), be.call(t, t.media, "durationchange loadeddata loadedmetadata", (function(e) {
                                    return We.durationUpdate.call(t, e)
                                })), be.call(t, t.media, "ended", (function() {
                                    t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause())
                                })), be.call(t, t.media, "progress playing seeking seeked", (function(e) {
                                    return We.updateProgress.call(t, e)
                                })), be.call(t, t.media, "volumechange", (function(e) {
                                    return We.updateVolume.call(t, e)
                                })), be.call(t, t.media, "playing play pause ended emptied timeupdate", (function(e) {
                                    return nt.checkPlaying.call(t, e)
                                })), be.call(t, t.media, "waiting canplay seeked playing", (function(e) {
                                    return nt.checkLoading.call(t, e)
                                })), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                                var i = he.call(t, ".".concat(t.config.classNames.video));
                                if (!B(i)) return;
                                be.call(t, n.container, "click", (function(a) {
                                    ([n.container, i].includes(a.target) || i.contains(a.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(a, t.restart, "restart"), e.proxy(a, t.play, "play")) : e.proxy(a, t.togglePlay, "play")))
                                }))
                            }
                            t.supported.ui && t.config.disableContextMenu && be.call(t, n.wrapper, "contextmenu", (function(e) {
                                e.preventDefault()
                            }), !1), be.call(t, t.media, "volumechange", (function() {
                                t.storage.set({
                                    volume: t.volume,
                                    muted: t.muted
                                })
                            })), be.call(t, t.media, "ratechange", (function() {
                                We.updateSetting.call(t, "speed"), t.storage.set({
                                    speed: t.speed
                                })
                            })), be.call(t, t.media, "qualitychange", (function(e) {
                                We.updateSetting.call(t, "quality", null, e.detail.quality)
                            })), be.call(t, t.media, "ready qualitychange", (function() {
                                We.setDownloadUrl.call(t)
                            }));
                            var a = t.config.events.concat(["keyup", "keydown"]).join(" ");
                            be.call(t, t.media, a, (function(e) {
                                var i = e.detail,
                                    a = void 0 === i ? {} : i;
                                "error" === e.type && (a = t.media.error), Te.call(t, n.container, e.type, !0, a)
                            }))
                        }
                    }, {
                        key: "proxy",
                        value: function(e, t, n) {
                            var i = this.player,
                                a = i.config.listeners[n],
                                r = !0;
                            D(a) && (r = a.call(i, e)), !1 !== r && D(t) && t.call(i, e)
                        }
                    }, {
                        key: "bind",
                        value: function(e, t, n, i) {
                            var a = this,
                                r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                o = this.player,
                                s = o.config.listeners[i],
                                l = D(s);
                            be.call(o, e, t, (function(e) {
                                return a.proxy(e, n, i)
                            }), r && !l)
                        }
                    }, {
                        key: "controls",
                        value: function() {
                            var e = this,
                                t = this.player,
                                n = t.elements,
                                i = Q.isIE ? "change" : "input";
                            if (n.buttons.play && Array.from(n.buttons.play).forEach((function(n) {
                                    e.bind(n, "click", t.togglePlay, "play")
                                })), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", t.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(n.buttons.mute, "click", (function() {
                                    t.muted = !t.muted
                                }), "mute"), this.bind(n.buttons.captions, "click", (function() {
                                    return t.toggleCaptions()
                                })), this.bind(n.buttons.download, "click", (function() {
                                    Te.call(t, t.media, "download")
                                }), "download"), this.bind(n.buttons.fullscreen, "click", (function() {
                                    t.fullscreen.toggle()
                                }), "fullscreen"), this.bind(n.buttons.pip, "click", (function() {
                                    t.pip = "toggle"
                                }), "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", (function(e) {
                                    e.stopPropagation(), e.preventDefault(), We.toggleMenu.call(t, e)
                                }), null, !1), this.bind(n.buttons.settings, "keyup", (function(e) {
                                    var n = e.which;
                                    [13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), We.toggleMenu.call(t, e)) : We.focusFirstMenuItem.call(t, null, !0))
                                }), null, !1), this.bind(n.settings.menu, "keydown", (function(e) {
                                    27 === e.which && We.toggleMenu.call(t, e)
                                })), this.bind(n.inputs.seek, "mousedown mousemove", (function(e) {
                                    var t = n.progress.getBoundingClientRect(),
                                        i = 100 / t.width * (e.pageX - t.left);
                                    e.currentTarget.setAttribute("seek-value", i)
                                })), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(e) {
                                    var n = e.currentTarget,
                                        i = e.keyCode ? e.keyCode : e.which;
                                    if (!z(e) || 39 === i || 37 === i) {
                                        t.lastSeekTime = Date.now();
                                        var a = n.hasAttribute("play-on-seeked"),
                                            r = ["mouseup", "touchend", "keyup"].includes(e.type);
                                        a && r ? (n.removeAttribute("play-on-seeked"), t.play()) : !r && t.playing && (n.setAttribute("play-on-seeked", ""), t.pause())
                                    }
                                })), Q.isIos) {
                                var a = de.call(t, 'input[type="range"]');
                                Array.from(a).forEach((function(t) {
                                    return e.bind(t, i, (function(e) {
                                        return J(e.target)
                                    }))
                                }))
                            }
                            this.bind(n.inputs.seek, i, (function(e) {
                                var n = e.currentTarget,
                                    i = n.getAttribute("seek-value");
                                Y(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration
                            }), "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", (function(e) {
                                return We.updateSeekTooltip.call(t, e)
                            })), this.bind(n.progress, "mousemove touchmove", (function(e) {
                                var n = t.previewThumbnails;
                                n && n.loaded && n.startMove(e)
                            })), this.bind(n.progress, "mouseleave touchend click", (function() {
                                var e = t.previewThumbnails;
                                e && e.loaded && e.endMove(!1, !0)
                            })), this.bind(n.progress, "mousedown touchstart", (function(e) {
                                var n = t.previewThumbnails;
                                n && n.loaded && n.startScrubbing(e)
                            })), this.bind(n.progress, "mouseup touchend", (function(e) {
                                var n = t.previewThumbnails;
                                n && n.loaded && n.endScrubbing(e)
                            })), Q.isWebkit && Array.from(de.call(t, 'input[type="range"]')).forEach((function(n) {
                                e.bind(n, "input", (function(e) {
                                    return We.updateRangeFill.call(t, e.target)
                                }))
                            })), t.config.toggleInvert && !B(n.display.duration) && this.bind(n.display.currentTime, "click", (function() {
                                0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, We.timeUpdate.call(t))
                            })), this.bind(n.inputs.volume, i, (function(e) {
                                t.volume = e.target.value
                            }), "volume"), this.bind(n.controls, "mouseenter mouseleave", (function(e) {
                                n.controls.hover = !t.touch && "mouseenter" === e.type
                            })), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) {
                                n.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                            })), this.bind(n.controls, "focusin", (function() {
                                var i = t.config,
                                    a = t.timers;
                                le(n.controls, i.classNames.noTransition, !0), nt.toggleControls.call(t, !0), setTimeout((function() {
                                    le(n.controls, i.classNames.noTransition, !1)
                                }), 0);
                                var r = e.touch ? 3e3 : 4e3;
                                clearTimeout(a.controls), a.controls = setTimeout((function() {
                                    return nt.toggleControls.call(t, !1)
                                }), r)
                            })), this.bind(n.inputs.volume, "wheel", (function(e) {
                                var n = e.webkitDirectionInvertedFromDevice,
                                    i = s([e.deltaX, -e.deltaY].map((function(e) {
                                        return n ? -e : e
                                    })), 2),
                                    a = i[0],
                                    r = i[1],
                                    o = Math.sign(Math.abs(a) > Math.abs(r) ? a : r);
                                t.increaseVolume(o / 50);
                                var l = t.media.volume;
                                (1 === o && l < 1 || -1 === o && l > 0) && e.preventDefault()
                            }), "volume", !1)
                        }
                    }]), t
                }();
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i || "undefined" != typeof self && self;
            var at = function(e, t) {
                return function(e, t) {
                    e.exports = function() {
                        var e = function() {},
                            t = {},
                            n = {},
                            i = {};

                        function a(e, t) {
                            if (e) {
                                var a = i[e];
                                if (n[e] = t, a)
                                    for (; a.length;) a[0](e, t), a.splice(0, 1)
                            }
                        }

                        function r(t, n) {
                            t.call && (t = {
                                success: t
                            }), n.length ? (t.error || e)(n) : (t.success || e)(t)
                        }

                        function o(t, n, i, a) {
                            var r, s, l = document,
                                c = i.async,
                                u = (i.numRetries || 0) + 1,
                                d = i.before || e,
                                h = t.replace(/[\?|#].*$/, ""),
                                p = t.replace(/^(css|img)!/, "");
                            a = a || 0, /(^css!|\.css$)/.test(h) ? ((s = l.createElement("link")).rel = "stylesheet", s.href = p, (r = "hideFocus" in s) && s.relList && (r = 0, s.rel = "preload", s.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (s = l.createElement("img")).src = p : ((s = l.createElement("script")).src = t, s.async = void 0 === c || c), s.onload = s.onerror = s.onbeforeload = function(e) {
                                var l = e.type[0];
                                if (r) try {
                                    s.sheet.cssText.length || (l = "e")
                                } catch (e) {
                                    18 != e.code && (l = "e")
                                }
                                if ("e" == l) {
                                    if ((a += 1) < u) return o(t, n, i, a)
                                } else if ("preload" == s.rel && "style" == s.as) return s.rel = "stylesheet";
                                n(t, l, e.defaultPrevented)
                            }, !1 !== d(t, s) && l.head.appendChild(s)
                        }

                        function s(e, n, i) {
                            var s, l;
                            if (n && n.trim && (s = n), l = (s ? i : n) || {}, s) {
                                if (s in t) throw "LoadJS";
                                t[s] = !0
                            }

                            function c(t, n) {
                                ! function(e, t, n) {
                                    var i, a, r = (e = e.push ? e : [e]).length,
                                        s = r,
                                        l = [];
                                    for (i = function(e, n, i) {
                                            if ("e" == n && l.push(e), "b" == n) {
                                                if (!i) return;
                                                l.push(e)
                                            }--r || t(l)
                                        }, a = 0; a < s; a++) o(e[a], i, n)
                                }(e, (function(e) {
                                    r(l, e), t && r({
                                        success: t,
                                        error: n
                                    }, e), a(s, e)
                                }), l)
                            }
                            if (l.returnPromise) return new Promise(c);
                            c()
                        }
                        return s.ready = function(e, t) {
                            return function(e, t) {
                                e = e.push ? e : [e];
                                var a, r, o, s = [],
                                    l = e.length,
                                    c = l;
                                for (a = function(e, n) {
                                        n.length && s.push(e), --c || t(s)
                                    }; l--;) r = e[l], (o = n[r]) ? a(r, o) : (i[r] = i[r] || []).push(a)
                            }(e, (function(e) {
                                r(t, e)
                            })), s
                        }, s.done = function(e) {
                            a(e, [])
                        }, s.reset = function() {
                            t = {}, n = {}, i = {}
                        }, s.isDefined = function(e) {
                            return e in t
                        }, s
                    }()
                }(t = {
                    exports: {}
                }), t.exports
            }();

            function rt(e) {
                return new Promise((function(t, n) {
                    at(e, {
                        success: t,
                        error: n
                    })
                }))
            }

            function ot(e) {
                e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Te.call(this, this.media, e ? "play" : "pause"))
            }
            var st = {
                setup: function() {
                    var e = this;
                    le(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Pe.call(e), j(window.Vimeo) ? st.ready.call(e) : rt(e.config.urls.vimeo.sdk).then((function() {
                        st.ready.call(e)
                    })).catch((function(t) {
                        e.debug.warn("Vimeo SDK (player.js) failed to load", t)
                    }))
                },
                ready: function() {
                    var e = this,
                        t = this,
                        n = t.config.vimeo,
                        i = Ye($({}, {
                            loop: t.config.loop.active,
                            autoplay: t.autoplay,
                            muted: t.muted,
                            gesture: "media",
                            playsinline: !this.config.fullscreen.iosNative
                        }, n)),
                        a = t.media.getAttribute("src");
                    Y(a) && (a = t.media.getAttribute(t.config.attributes.embed.id));
                    var r, o = Y(r = a) ? null : q(Number(r)) ? r : r.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : r,
                        l = te("iframe"),
                        c = Me(t.config.urls.vimeo.iframe, o, i);
                    l.setAttribute("src", c), l.setAttribute("allowfullscreen", ""), l.setAttribute("allowtransparency", ""), l.setAttribute("allow", "autoplay"), Y(n.referrerPolicy) || l.setAttribute("referrerPolicy", n.referrerPolicy);
                    var u = te("div", {
                        poster: t.poster,
                        class: t.config.classNames.embedContainer
                    });
                    u.appendChild(l), t.media = re(u, t.media), De(Me(t.config.urls.vimeo.api, o), "json").then((function(e) {
                        if (!Y(e)) {
                            var n = new URL(e[0].thumbnail_large);
                            n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"), nt.setPoster.call(t, n.href).catch((function() {}))
                        }
                    })), t.embed = new window.Vimeo.Player(l, {
                        autopause: t.config.autopause,
                        muted: t.muted
                    }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
                        return ot.call(t, !0), t.embed.play()
                    }, t.media.pause = function() {
                        return ot.call(t, !1), t.embed.pause()
                    }, t.media.stop = function() {
                        t.pause(), t.currentTime = 0
                    };
                    var d = t.media.currentTime;
                    Object.defineProperty(t.media, "currentTime", {
                        get: function() {
                            return d
                        },
                        set: function(e) {
                            var n = t.embed,
                                i = t.media,
                                a = t.paused,
                                r = t.volume,
                                o = a && !n.hasPlayed;
                            i.seeking = !0, Te.call(t, i, "seeking"), Promise.resolve(o && n.setVolume(0)).then((function() {
                                return n.setCurrentTime(e)
                            })).then((function() {
                                return o && n.pause()
                            })).then((function() {
                                return o && n.setVolume(r)
                            })).catch((function() {}))
                        }
                    });
                    var h = t.config.speed.selected;
                    Object.defineProperty(t.media, "playbackRate", {
                        get: function() {
                            return h
                        },
                        set: function(e) {
                            t.embed.setPlaybackRate(e).then((function() {
                                h = e, Te.call(t, t.media, "ratechange")
                            }))
                        }
                    });
                    var p = t.config.volume;
                    Object.defineProperty(t.media, "volume", {
                        get: function() {
                            return p
                        },
                        set: function(e) {
                            t.embed.setVolume(e).then((function() {
                                p = e, Te.call(t, t.media, "volumechange")
                            }))
                        }
                    });
                    var f = t.config.muted;
                    Object.defineProperty(t.media, "muted", {
                        get: function() {
                            return f
                        },
                        set: function(e) {
                            var n = !!F(e) && e;
                            t.embed.setVolume(n ? 0 : t.config.volume).then((function() {
                                f = n, Te.call(t, t.media, "volumechange")
                            }))
                        }
                    });
                    var m, g = t.config.loop;
                    Object.defineProperty(t.media, "loop", {
                        get: function() {
                            return g
                        },
                        set: function(e) {
                            var n = F(e) ? e : t.config.loop.active;
                            t.embed.setLoop(n).then((function() {
                                g = n
                            }))
                        }
                    }), t.embed.getVideoUrl().then((function(e) {
                        m = e, We.setDownloadUrl.call(t)
                    })).catch((function(t) {
                        e.debug.warn(t)
                    })), Object.defineProperty(t.media, "currentSrc", {
                        get: function() {
                            return m
                        }
                    }), Object.defineProperty(t.media, "ended", {
                        get: function() {
                            return t.currentTime === t.duration
                        }
                    }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(n) {
                        var i = s(n, 2),
                            a = i[0],
                            r = i[1];
                        t.embed.ratio = [a, r], Pe.call(e)
                    })), t.embed.setAutopause(t.config.autopause).then((function(e) {
                        t.config.autopause = e
                    })), t.embed.getVideoTitle().then((function(n) {
                        t.config.title = n, nt.setTitle.call(e)
                    })), t.embed.getCurrentTime().then((function(e) {
                        d = e, Te.call(t, t.media, "timeupdate")
                    })), t.embed.getDuration().then((function(e) {
                        t.media.duration = e, Te.call(t, t.media, "durationchange")
                    })), t.embed.getTextTracks().then((function(e) {
                        t.media.textTracks = e, Ge.setup.call(t)
                    })), t.embed.on("cuechange", (function(e) {
                        var n = e.cues,
                            i = (void 0 === n ? [] : n).map((function(e) {
                                return function(e) {
                                    var t = document.createDocumentFragment(),
                                        n = document.createElement("div");
                                    return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                                }(e.text)
                            }));
                        Ge.updateCues.call(t, i)
                    })), t.embed.on("loaded", (function() {
                        t.embed.getPaused().then((function(e) {
                            ot.call(t, !e), e || Te.call(t, t.media, "playing")
                        })), B(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
                    })), t.embed.on("bufferstart", (function() {
                        Te.call(t, t.media, "waiting")
                    })), t.embed.on("bufferend", (function() {
                        Te.call(t, t.media, "playing")
                    })), t.embed.on("play", (function() {
                        ot.call(t, !0), Te.call(t, t.media, "playing")
                    })), t.embed.on("pause", (function() {
                        ot.call(t, !1)
                    })), t.embed.on("timeupdate", (function(e) {
                        t.media.seeking = !1, d = e.seconds, Te.call(t, t.media, "timeupdate")
                    })), t.embed.on("progress", (function(e) {
                        t.media.buffered = e.percent, Te.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Te.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function(e) {
                            e !== t.media.duration && (t.media.duration = e, Te.call(t, t.media, "durationchange"))
                        }))
                    })), t.embed.on("seeked", (function() {
                        t.media.seeking = !1, Te.call(t, t.media, "seeked")
                    })), t.embed.on("ended", (function() {
                        t.media.paused = !0, Te.call(t, t.media, "ended")
                    })), t.embed.on("error", (function(e) {
                        t.media.error = e, Te.call(t, t.media, "error")
                    })), setTimeout((function() {
                        return nt.build.call(t)
                    }), 0)
                }
            };

            function lt(e) {
                e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Te.call(this, this.media, e ? "play" : "pause"))
            }

            function ct(e) {
                return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
            }
            var ut, dt = {
                    setup: function() {
                        var e = this;
                        if (le(this.elements.wrapper, this.config.classNames.embed, !0), j(window.YT) && D(window.YT.Player)) dt.ready.call(this);
                        else {
                            var t = window.onYouTubeIframeAPIReady;
                            window.onYouTubeIframeAPIReady = function() {
                                D(t) && t(), dt.ready.call(e)
                            }, rt(this.config.urls.youtube.sdk).catch((function(t) {
                                e.debug.warn("YouTube API failed to load", t)
                            }))
                        }
                    },
                    getTitle: function(e) {
                        var t = this;
                        De(Me(this.config.urls.youtube.api, e)).then((function(e) {
                            if (j(e)) {
                                var n = e.title,
                                    i = e.height,
                                    a = e.width;
                                t.config.title = n, nt.setTitle.call(t), t.embed.ratio = [a, i]
                            }
                            Pe.call(t)
                        })).catch((function() {
                            Pe.call(t)
                        }))
                    },
                    ready: function() {
                        var e = this,
                            t = e.media && e.media.getAttribute("id");
                        if (Y(t) || !t.startsWith("youtube-")) {
                            var n = e.media.getAttribute("src");
                            Y(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                            var i, a, r = Y(i = n) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i,
                                o = (a = e.provider, "".concat(a, "-").concat(Math.floor(1e4 * Math.random()))),
                                s = te("div", {
                                    id: o,
                                    poster: e.poster
                                });
                            e.media = re(s, e.media);
                            var l = function(e) {
                                return "https://i.ytimg.com/vi/".concat(r, "/").concat(e, "default.jpg")
                            };
                            tt(l("maxres"), 121).catch((function() {
                                return tt(l("sd"), 121)
                            })).catch((function() {
                                return tt(l("hq"))
                            })).then((function(t) {
                                return nt.setPoster.call(e, t.src)
                            })).then((function(t) {
                                t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                            })).catch((function() {}));
                            var c = e.config.youtube;
                            e.embed = new window.YT.Player(o, {
                                videoId: r,
                                host: ct(c),
                                playerVars: $({}, {
                                    autoplay: e.config.autoplay ? 1 : 0,
                                    hl: e.config.hl,
                                    controls: e.supported.ui ? 0 : 1,
                                    disablekb: 1,
                                    playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                                    cc_load_policy: e.captions.active ? 1 : 0,
                                    cc_lang_pref: e.config.captions.language,
                                    widget_referrer: window ? window.location.href : null
                                }, c),
                                events: {
                                    onError: function(t) {
                                        if (!e.media.error) {
                                            var n = t.data,
                                                i = {
                                                    2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                                    5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                                    100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                                    101: "The owner of the requested video does not allow it to be played in embedded players.",
                                                    150: "The owner of the requested video does not allow it to be played in embedded players."
                                                }[n] || "An unknown error occured";
                                            e.media.error = {
                                                code: n,
                                                message: i
                                            }, Te.call(e, e.media, "error")
                                        }
                                    },
                                    onPlaybackRateChange: function(t) {
                                        var n = t.target;
                                        e.media.playbackRate = n.getPlaybackRate(), Te.call(e, e.media, "ratechange")
                                    },
                                    onReady: function(t) {
                                        if (!D(e.media.play)) {
                                            var n = t.target;
                                            dt.getTitle.call(e, r), e.media.play = function() {
                                                lt.call(e, !0), n.playVideo()
                                            }, e.media.pause = function() {
                                                lt.call(e, !1), n.pauseVideo()
                                            }, e.media.stop = function() {
                                                n.stopVideo()
                                            }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                                get: function() {
                                                    return Number(n.getCurrentTime())
                                                },
                                                set: function(t) {
                                                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Te.call(e, e.media, "seeking"), n.seekTo(t)
                                                }
                                            }), Object.defineProperty(e.media, "playbackRate", {
                                                get: function() {
                                                    return n.getPlaybackRate()
                                                },
                                                set: function(e) {
                                                    n.setPlaybackRate(e)
                                                }
                                            });
                                            var i = e.config.volume;
                                            Object.defineProperty(e.media, "volume", {
                                                get: function() {
                                                    return i
                                                },
                                                set: function(t) {
                                                    i = t, n.setVolume(100 * i), Te.call(e, e.media, "volumechange")
                                                }
                                            });
                                            var a = e.config.muted;
                                            Object.defineProperty(e.media, "muted", {
                                                get: function() {
                                                    return a
                                                },
                                                set: function(t) {
                                                    var i = F(t) ? t : a;
                                                    a = i, n[i ? "mute" : "unMute"](), Te.call(e, e.media, "volumechange")
                                                }
                                            }), Object.defineProperty(e.media, "currentSrc", {
                                                get: function() {
                                                    return n.getVideoUrl()
                                                }
                                            }), Object.defineProperty(e.media, "ended", {
                                                get: function() {
                                                    return e.currentTime === e.duration
                                                }
                                            });
                                            var o = n.getAvailablePlaybackRates();
                                            e.options.speed = o.filter((function(t) {
                                                return e.config.speed.options.includes(t)
                                            })), e.supported.ui && e.media.setAttribute("tabindex", -1), Te.call(e, e.media, "timeupdate"), Te.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function() {
                                                e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Te.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Te.call(e, e.media, "canplaythrough"))
                                            }), 200), setTimeout((function() {
                                                return nt.build.call(e)
                                            }), 50)
                                        }
                                    },
                                    onStateChange: function(t) {
                                        var n = t.target;
                                        switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, Te.call(e, e.media, "seeked")), t.data) {
                                            case -1:
                                                Te.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), Te.call(e, e.media, "progress");
                                                break;
                                            case 0:
                                                lt.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : Te.call(e, e.media, "ended");
                                                break;
                                            case 1:
                                                e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (lt.call(e, !0), Te.call(e, e.media, "playing"), e.timers.playing = setInterval((function() {
                                                    Te.call(e, e.media, "timeupdate")
                                                }), 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), Te.call(e, e.media, "durationchange"))) : e.media.pause();
                                                break;
                                            case 2:
                                                e.muted || e.embed.unMute(), lt.call(e, !1);
                                                break;
                                            case 3:
                                                Te.call(e, e.media, "waiting")
                                        }
                                        Te.call(e, e.elements.container, "statechange", !1, {
                                            code: t.data
                                        })
                                    }
                                }
                            })
                        }
                    }
                },
                ht = {
                    setup: function() {
                        this.media ? (le(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), le(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && le(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = te("div", {
                            class: this.config.classNames.video
                        }), Z(this.media, this.elements.wrapper), this.isEmbed && (this.elements.poster = te("div", {
                            class: this.config.classNames.poster
                        }), this.elements.wrapper.appendChild(this.elements.poster))), this.isHTML5 ? Le.setup.call(this) : this.isYouTube ? dt.setup.call(this) : this.isVimeo && st.setup.call(this)) : this.debug.warn("No media element found!")
                    }
                },
                pt = function() {
                    function t(n) {
                        var i = this;
                        e(this, t), this.player = n, this.config = n.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                            container: null,
                            displayContainer: null
                        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(e, t) {
                            i.on("loaded", e), i.on("error", t)
                        })), this.load()
                    }
                    return n(t, [{
                        key: "load",
                        value: function() {
                            var e = this;
                            this.enabled && (j(window.google) && j(window.google.ima) ? this.ready() : rt(this.player.config.urls.googleIMA.sdk).then((function() {
                                e.ready()
                            })).catch((function() {
                                e.trigger("error", new Error("Google IMA SDK failed to load"))
                            })))
                        }
                    }, {
                        key: "ready",
                        value: function() {
                            var e, t = this;
                            this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((function() {
                                t.clearSafetyTimer("onAdsManagerLoaded()")
                            })), this.listeners(), this.setupIMA()
                        }
                    }, {
                        key: "setupIMA",
                        value: function() {
                            this.elements.container = te("div", {
                                class: this.player.config.classNames.ads
                            }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.requestAds()
                        }
                    }, {
                        key: "requestAds",
                        value: function() {
                            var e = this,
                                t = this.player.elements.container;
                            try {
                                this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(t) {
                                    return e.onAdsManagerLoaded(t)
                                }), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) {
                                    return e.onAdError(t)
                                }), !1);
                                var n = new google.ima.AdsRequest;
                                n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n)
                            } catch (e) {
                                this.onAdError(e)
                            }
                        }
                    }, {
                        key: "pollCountdown",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                            var n = function() {
                                var t = ze(Math.max(e.manager.getRemainingTime(), 0)),
                                    n = "".concat(He("advertisement", e.player.config), " - ").concat(t);
                                e.elements.container.setAttribute("data-badge-text", n)
                            };
                            this.countdownTimer = setInterval(n, 100)
                        }
                    }, {
                        key: "onAdsManagerLoaded",
                        value: function(e) {
                            var t = this;
                            if (this.enabled) {
                                var n = new google.ima.AdsRenderingSettings;
                                n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
                                    return t.onAdError(e)
                                })), Object.keys(google.ima.AdEvent.Type).forEach((function(e) {
                                    t.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) {
                                        return t.onAdEvent(e)
                                    }))
                                })), this.trigger("loaded")
                            }
                        }
                    }, {
                        key: "addCuePoints",
                        value: function() {
                            var e = this;
                            Y(this.cuePoints) || this.cuePoints.forEach((function(t) {
                                if (0 !== t && -1 !== t && t < e.player.duration) {
                                    var n = e.player.elements.progress;
                                    if (B(n)) {
                                        var i = 100 / e.player.duration * t,
                                            a = te("span", {
                                                class: e.player.config.classNames.cues
                                            });
                                        a.style.left = "".concat(i.toString(), "%"), n.appendChild(a)
                                    }
                                }
                            }))
                        }
                    }, {
                        key: "onAdEvent",
                        value: function(e) {
                            var t = this,
                                n = this.player.elements.container,
                                i = e.getAd(),
                                a = e.getAdData();
                            switch (function(e) {
                                Te.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
                            }(e.type), e.type) {
                                case google.ima.AdEvent.Type.LOADED:
                                    this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                                    break;
                                case google.ima.AdEvent.Type.STARTED:
                                    this.manager.setVolume(this.player.volume);
                                    break;
                                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                    this.loadAds();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                    this.pauseContent();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                    this.pollCountdown(), this.resumeContent();
                                    break;
                                case google.ima.AdEvent.Type.LOG:
                                    a.adError && this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()))
                            }
                        }
                    }, {
                        key: "onAdError",
                        value: function(e) {
                            this.cancel(), this.player.debug.warn("Ads error", e)
                        }
                    }, {
                        key: "listeners",
                        value: function() {
                            var e, t = this,
                                n = this.player.elements.container;
                            this.player.on("canplay", (function() {
                                t.addCuePoints()
                            })), this.player.on("ended", (function() {
                                t.loader.contentComplete()
                            })), this.player.on("timeupdate", (function() {
                                e = t.player.currentTime
                            })), this.player.on("seeked", (function() {
                                var n = t.player.currentTime;
                                Y(t.cuePoints) || t.cuePoints.forEach((function(i, a) {
                                    e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(a, 1))
                                }))
                            })), window.addEventListener("resize", (function() {
                                t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL)
                            }))
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var e = this,
                                t = this.player.elements.container;
                            this.managerPromise || this.resumeContent(), this.managerPromise.then((function() {
                                e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();
                                try {
                                    e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                                } catch (t) {
                                    e.onAdError(t)
                                }
                            })).catch((function() {}))
                        }
                    }, {
                        key: "resumeContent",
                        value: function() {
                            this.elements.container.style.zIndex = "", this.playing = !1, this.player.media.play()
                        }
                    }, {
                        key: "pauseContent",
                        value: function() {
                            this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                        }
                    }, {
                        key: "loadAds",
                        value: function() {
                            var e = this;
                            this.managerPromise.then((function() {
                                e.manager && e.manager.destroy(), e.managerPromise = new Promise((function(t) {
                                    e.on("loaded", t), e.player.debug.log(e.manager)
                                })), e.requestAds()
                            })).catch((function() {}))
                        }
                    }, {
                        key: "trigger",
                        value: function(e) {
                            for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                            var r = this.events[e];
                            R(r) && r.forEach((function(e) {
                                D(e) && e.apply(t, i)
                            }))
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            return R(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
                        }
                    }, {
                        key: "startSafetyTimer",
                        value: function(e, t) {
                            var n = this;
                            this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout((function() {
                                n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                            }), e)
                        }
                    }, {
                        key: "clearSafetyTimer",
                        value: function(e) {
                            O(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            var e = this.config;
                            return this.player.isHTML5 && this.player.isVideo && e.enabled && (!Y(e.publisherId) || K(e.tagUrl))
                        }
                    }, {
                        key: "tagUrl",
                        get: function() {
                            var e = this.config;
                            if (K(e.tagUrl)) return e.tagUrl;
                            var t = {
                                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                                AV_URL: window.location.hostname,
                                cb: Date.now(),
                                AV_WIDTH: 640,
                                AV_HEIGHT: 480,
                                AV_CDIM2: e.publisherId
                            };
                            return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(Ye(t))
                        }
                    }]), t
                }(),
                ft = function(e, t) {
                    var n = {};
                    return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n
                },
                mt = function() {
                    function t(n) {
                        e(this, t), this.player = n, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                            thumb: {},
                            scrubbing: {}
                        }, this.load()
                    }
                    return n(t, [{
                        key: "load",
                        value: function() {
                            var e = this;
                            this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((function() {
                                e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0)
                            }))
                        }
                    }, {
                        key: "getThumbnails",
                        value: function() {
                            var e = this;
                            return new Promise((function(t) {
                                var n = e.player.config.previewThumbnails.src;
                                if (Y(n)) throw new Error("Missing previewThumbnails.src config attribute");
                                var i = (H(n) ? [n] : n).map((function(t) {
                                    return e.getThumbnail(t)
                                }));
                                Promise.all(i).then((function() {
                                    e.thumbnails.sort((function(e, t) {
                                        return e.height - t.height
                                    })), e.player.debug.log("Preview thumbnails", e.thumbnails), t()
                                }))
                            }))
                        }
                    }, {
                        key: "getThumbnail",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(n) {
                                De(e).then((function(i) {
                                    var a, r, o = {
                                        frames: (a = i, r = [], a.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
                                            var t = {};
                                            e.split(/\r\n|\n|\r/).forEach((function(e) {
                                                if (q(t.startTime)) {
                                                    if (!Y(e.trim()) && Y(t.text)) {
                                                        var n = e.trim().split("#xywh="),
                                                            i = s(n, 1);
                                                        if (t.text = i[0], n[1]) {
                                                            var a = s(n[1].split(","), 4);
                                                            t.x = a[0], t.y = a[1], t.w = a[2], t.h = a[3]
                                                        }
                                                    }
                                                } else {
                                                    var r = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                                    r && (t.startTime = 60 * Number(r[1] || 0) * 60 + 60 * Number(r[2]) + Number(r[3]) + Number("0.".concat(r[4])), t.endTime = 60 * Number(r[6] || 0) * 60 + 60 * Number(r[7]) + Number(r[8]) + Number("0.".concat(r[9])))
                                                }
                                            })), t.text && r.push(t)
                                        })), r),
                                        height: null,
                                        urlPrefix: ""
                                    };
                                    o.frames[0].text.startsWith("/") || o.frames[0].text.startsWith("http://") || o.frames[0].text.startsWith("https://") || (o.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                    var l = new Image;
                                    l.onload = function() {
                                        o.height = l.naturalHeight, o.width = l.naturalWidth, t.thumbnails.push(o), n()
                                    }, l.src = o.urlPrefix + o.frames[0].text
                                }))
                            }))
                        }
                    }, {
                        key: "startMove",
                        value: function(e) {
                            if (this.loaded && U(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                                if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                else {
                                    var t = this.player.elements.progress.getBoundingClientRect(),
                                        n = 100 / t.width * (e.pageX - t.left);
                                    this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = ze(this.seekTime)
                                }
                                this.showImageAtCurrentTime()
                            }
                        }
                    }, {
                        key: "endMove",
                        value: function() {
                            this.toggleThumbContainer(!1, !0)
                        }
                    }, {
                        key: "startScrubbing",
                        value: function(e) {
                            (O(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                        }
                    }, {
                        key: "endScrubbing",
                        value: function() {
                            var e = this;
                            this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : ke.call(this.player, this.player.media, "timeupdate", (function() {
                                e.mouseDown || e.toggleScrubbingContainer(!1)
                            }))
                        }
                    }, {
                        key: "listeners",
                        value: function() {
                            var e = this;
                            this.player.on("play", (function() {
                                e.toggleThumbContainer(!1, !0)
                            })), this.player.on("seeked", (function() {
                                e.toggleThumbContainer(!1)
                            })), this.player.on("timeupdate", (function() {
                                e.lastTime = e.player.media.currentTime
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.elements.thumb.container = te("div", {
                                class: this.player.config.classNames.previewThumbnails.thumbContainer
                            }), this.elements.thumb.imageContainer = te("div", {
                                class: this.player.config.classNames.previewThumbnails.imageContainer
                            }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                            var e = te("div", {
                                class: this.player.config.classNames.previewThumbnails.timeContainer
                            });
                            this.elements.thumb.time = te("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), B(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = te("div", {
                                class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                            }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                        }
                    }, {
                        key: "showImageAtCurrentTime",
                        value: function() {
                            var e = this;
                            this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                            var t = this.thumbnails[0].frames.findIndex((function(t) {
                                    return e.seekTime >= t.startTime && e.seekTime <= t.endTime
                                })),
                                n = t >= 0,
                                i = 0;
                            this.mouseDown || this.toggleThumbContainer(n), n && (this.thumbnails.forEach((function(n, a) {
                                e.loadedImages.includes(n.frames[t].text) && (i = a)
                            })), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(i)))
                        }
                    }, {
                        key: "loadImage",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                n = this.showingThumb,
                                i = this.thumbnails[t],
                                a = i.urlPrefix,
                                r = i.frames[n],
                                o = i.frames[n].text,
                                s = a + o;
                            if (this.currentImageElement && this.currentImageElement.dataset.filename === o) this.showImage(this.currentImageElement, r, t, n, o, !1), this.currentImageElement.dataset.index = n, this.removeOldImages(this.currentImageElement);
                            else {
                                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                var l = new Image;
                                l.src = s, l.dataset.index = n, l.dataset.filename = o, this.showingThumbFilename = o, this.player.debug.log("Loading image: ".concat(s)), l.onload = function() {
                                    return e.showImage(l, r, t, n, o, !0)
                                }, this.loadingImage = l, this.removeOldImages(l)
                            }
                        }
                    }, {
                        key: "showImage",
                        value: function(e, t, n, i, a) {
                            var r = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                            this.player.debug.log("Showing thumb: ".concat(a, ". num: ").concat(i, ". qual: ").concat(n, ". newimg: ").concat(r)), this.setImageSizeAndOffset(e, t), r && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(a) || this.loadedImages.push(a)), this.preloadNearby(i, !0).then(this.preloadNearby(i, !1)).then(this.getHigherQuality(n, e, t, a))
                        }
                    }, {
                        key: "removeOldImages",
                        value: function(e) {
                            var t = this;
                            Array.from(this.currentImageContainer.children).forEach((function(n) {
                                if ("img" === n.tagName.toLowerCase()) {
                                    var i = t.usingSprites ? 500 : 1e3;
                                    if (n.dataset.index !== e.dataset.index && !n.dataset.deleting) {
                                        n.dataset.deleting = !0;
                                        var a = t.currentImageContainer;
                                        setTimeout((function() {
                                            a.removeChild(n), t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))
                                        }), i)
                                    }
                                }
                            }))
                        }
                    }, {
                        key: "preloadNearby",
                        value: function(e) {
                            var t = this,
                                n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return new Promise((function(i) {
                                setTimeout((function() {
                                    var a = t.thumbnails[0].frames[e].text;
                                    if (t.showingThumbFilename === a) {
                                        var r;
                                        r = n ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
                                        var o = !1;
                                        r.forEach((function(e) {
                                            var n = e.text;
                                            if (n !== a && !t.loadedImages.includes(n)) {
                                                o = !0, t.player.debug.log("Preloading thumb filename: ".concat(n));
                                                var r = t.thumbnails[0].urlPrefix + n,
                                                    s = new Image;
                                                s.src = r, s.onload = function() {
                                                    t.player.debug.log("Preloaded thumb filename: ".concat(n)), t.loadedImages.includes(n) || t.loadedImages.push(n), i()
                                                }
                                            }
                                        })), o || i()
                                    }
                                }), 300)
                            }))
                        }
                    }, {
                        key: "getHigherQuality",
                        value: function(e, t, n, i) {
                            var a = this;
                            if (e < this.thumbnails.length - 1) {
                                var r = t.naturalHeight;
                                this.usingSprites && (r = n.h), r < this.thumbContainerHeight && setTimeout((function() {
                                    a.showingThumbFilename === i && (a.player.debug.log("Showing higher quality thumb for: ".concat(i)), a.loadImage(e + 1))
                                }), 300)
                            }
                        }
                    }, {
                        key: "toggleThumbContainer",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                            this.elements.thumb.container.classList.toggle(n, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                        }
                    }, {
                        key: "toggleScrubbingContainer",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                            this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                        }
                    }, {
                        key: "determineContainerAutoSizing",
                        value: function() {
                            (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                        }
                    }, {
                        key: "setThumbContainerSizeAndPos",
                        value: function() {
                            if (this.sizeSpecifiedInCSS) {
                                if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                                    var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                                    this.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                                } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                                    var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                                    this.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                                }
                            } else {
                                var n = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(n, "px")
                            }
                            this.setThumbContainerPos()
                        }
                    }, {
                        key: "setThumbContainerPos",
                        value: function() {
                            var e = this.player.elements.progress.getBoundingClientRect(),
                                t = this.player.elements.container.getBoundingClientRect(),
                                n = this.elements.thumb.container,
                                i = t.left - e.left + 10,
                                a = t.right - e.left - n.clientWidth - 10,
                                r = this.mousePosX - e.left - n.clientWidth / 2;
                            r < i && (r = i), r > a && (r = a), n.style.left = "".concat(r, "px")
                        }
                    }, {
                        key: "setScrubbingContainerSize",
                        value: function() {
                            var e = ft(this.thumbAspectRatio, {
                                    width: this.player.media.clientWidth,
                                    height: this.player.media.clientHeight
                                }),
                                t = e.width,
                                n = e.height;
                            this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(n, "px")
                        }
                    }, {
                        key: "setImageSizeAndOffset",
                        value: function(e, t) {
                            if (this.usingSprites) {
                                var n = this.thumbContainerHeight / t.h;
                                e.style.height = "".concat(e.naturalHeight * n, "px"), e.style.width = "".concat(e.naturalWidth * n, "px"), e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px")
                            }
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                        }
                    }, {
                        key: "currentImageContainer",
                        get: function() {
                            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                        }
                    }, {
                        key: "usingSprites",
                        get: function() {
                            return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                        }
                    }, {
                        key: "thumbAspectRatio",
                        get: function() {
                            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                        }
                    }, {
                        key: "thumbContainerHeight",
                        get: function() {
                            return this.mouseDown ? ft(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                        }
                    }, {
                        key: "currentImageElement",
                        get: function() {
                            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                        },
                        set: function(e) {
                            this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                        }
                    }]), t
                }(),
                gt = {
                    insertElements: function(e, t) {
                        var n = this;
                        H(t) ? ne(e, this.media, {
                            src: t
                        }) : R(t) && t.forEach((function(t) {
                            ne(e, n.media, t)
                        }))
                    },
                    change: function(e) {
                        var t = this;
                        X(e, "sources.length") ? (Le.cancelRequests.call(this), this.destroy.call(this, (function() {
                            t.options.quality = [], ie(t.media), t.media = null, B(t.elements.container) && t.elements.container.removeAttribute("class");
                            var n = e.sources,
                                i = e.type,
                                a = s(n, 1)[0],
                                r = a.provider,
                                o = void 0 === r ? Xe.html5 : r,
                                l = a.src,
                                c = "html5" === o ? i : "div",
                                u = "html5" === o ? {} : {
                                    src: l
                                };
                            Object.assign(t, {
                                provider: o,
                                type: i,
                                supported: ge.check(i, o, t.config.playsinline),
                                media: te(c, u)
                            }), t.elements.container.appendChild(t.media), F(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), Y(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), nt.addStyleHook.call(t), t.isHTML5 && gt.insertElements.call(t, "source", n), t.config.title = e.title, ht.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && gt.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && nt.build.call(t), t.isHTML5 && t.media.load(), Y(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new mt(t))), t.fullscreen.update()
                        }), !0)) : this.debug.warn("Invalid source format")
                    }
                },
                yt = function() {
                    function t(n, i) {
                        var a = this;
                        if (e(this, t), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = ge.touch, this.media = n, H(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || V(this.media) || R(this.media)) && (this.media = this.media[0]), this.config = $({}, Je, t.defaults, i || {}, function() {
                                try {
                                    return JSON.parse(a.media.getAttribute("data-plyr-config"))
                                } catch (e) {
                                    return {}
                                }
                            }()), this.elements = {
                                container: null,
                                captions: null,
                                buttons: {},
                                display: {},
                                progress: {},
                                inputs: {},
                                settings: {
                                    popup: null,
                                    menu: null,
                                    panels: {},
                                    buttons: {}
                                }
                            }, this.captions = {
                                active: null,
                                currentTrack: -1,
                                meta: new WeakMap
                            }, this.fullscreen = {
                                active: !1
                            }, this.options = {
                                speed: [],
                                quality: []
                            }, this.debug = new Ze(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", ge), !O(this.media) && B(this.media))
                            if (this.media.plyr) this.debug.warn("Target already setup");
                            else if (this.config.enabled)
                            if (ge.check().api) {
                                var r = this.media.cloneNode(!0);
                                r.autoplay = !1, this.elements.original = r;
                                var o = this.media.tagName.toLowerCase(),
                                    s = null,
                                    l = null;
                                switch (o) {
                                    case "div":
                                        if (s = this.media.querySelector("iframe"), B(s)) {
                                            if (l = Ke(s.getAttribute("src")), this.provider = function(e) {
                                                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Xe.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Xe.vimeo : null
                                                }(l.toString()), this.elements.container = this.media, this.media = s, this.elements.container.className = "", l.search.length) {
                                                var c = ["1", "true"];
                                                c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0
                                            }
                                        } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                        if (Y(this.provider) || !Object.keys(Xe).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                        this.type = "video";
                                        break;
                                    case "video":
                                    case "audio":
                                        this.type = o, this.provider = Xe.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                        break;
                                    default:
                                        return void this.debug.error("Setup failed: unsupported type")
                                }
                                this.supported = ge.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new it(this), this.storage = new Fe(this), this.media.plyr = this, B(this.elements.container) || (this.elements.container = te("div", {
                                    tabindex: 0
                                }), Z(this.media, this.elements.container)), nt.addStyleHook.call(this), ht.setup.call(this), this.config.debug && be.call(this, this.elements.container, this.config.events.join(" "), (function(e) {
                                    a.debug.log("event: ".concat(e.type))
                                })), (this.isHTML5 || this.isEmbed && !this.supported.ui) && nt.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new et(this), this.config.ads.enabled && (this.ads = new pt(this)), this.isHTML5 && this.config.autoplay && setTimeout((function() {
                                    return a.play()
                                }), 10), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new mt(this))) : this.debug.error("Setup failed: no support")
                            } else this.debug.error("Setup failed: no support");
                        else this.debug.error("Setup failed: disabled by config");
                        else this.debug.error("Setup failed: no suitable element passed")
                    }
                    return n(t, [{
                        key: "play",
                        value: function() {
                            var e = this;
                            return D(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() {
                                return e.ads.play()
                            })).catch((function() {
                                return e.media.play()
                            })), this.media.play()) : null
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            return this.playing && D(this.media.pause) ? this.media.pause() : null
                        }
                    }, {
                        key: "togglePlay",
                        value: function(e) {
                            return (F(e) ? e : !this.playing) ? this.play() : this.pause()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.isHTML5 ? (this.pause(), this.restart()) : D(this.media.stop) && this.media.stop()
                        }
                    }, {
                        key: "restart",
                        value: function() {
                            this.currentTime = 0
                        }
                    }, {
                        key: "rewind",
                        value: function(e) {
                            this.currentTime -= q(e) ? e : this.config.seekTime
                        }
                    }, {
                        key: "forward",
                        value: function(e) {
                            this.currentTime += q(e) ? e : this.config.seekTime
                        }
                    }, {
                        key: "increaseVolume",
                        value: function(e) {
                            var t = this.media.muted ? 0 : this.volume;
                            this.volume = t + (q(e) ? e : 0)
                        }
                    }, {
                        key: "decreaseVolume",
                        value: function(e) {
                            this.increaseVolume(-e)
                        }
                    }, {
                        key: "toggleCaptions",
                        value: function(e) {
                            Ge.toggle.call(this, e, !1)
                        }
                    }, {
                        key: "airplay",
                        value: function() {
                            ge.airplay && this.media.webkitShowPlaybackTargetPicker()
                        }
                    }, {
                        key: "toggleControls",
                        value: function(e) {
                            if (this.supported.ui && !this.isAudio) {
                                var t = ce(this.elements.container, this.config.classNames.hideControls),
                                    n = void 0 === e ? void 0 : !e,
                                    i = le(this.elements.container, this.config.classNames.hideControls, n);
                                if (i && this.config.controls.includes("settings") && !Y(this.config.settings) && We.toggleMenu.call(this, !1), i !== t) {
                                    var a = i ? "controlshidden" : "controlsshown";
                                    Te.call(this, this.media, a)
                                }
                                return !i
                            }
                            return !1
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            be.call(this, this.elements.container, e, t)
                        }
                    }, {
                        key: "once",
                        value: function(e, t) {
                            ke.call(this, this.elements.container, e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            we(this.elements.container, e, t)
                        }
                    }, {
                        key: "destroy",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (this.ready) {
                                var i = function() {
                                    document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (ie(t.elements.buttons.play), ie(t.elements.captions), ie(t.elements.controls), ie(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), D(e) && e()) : (Ce.call(t), re(t.elements.original, t.elements.container), Te.call(t, t.elements.original, "destroyed", !0), D(e) && e.call(t.elements.original), t.ready = !1, setTimeout((function() {
                                        t.elements = null, t.media = null
                                    }), 200))
                                };
                                this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (nt.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && D(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                            }
                        }
                    }, {
                        key: "supports",
                        value: function(e) {
                            return ge.mime.call(this, e)
                        }
                    }, {
                        key: "isHTML5",
                        get: function() {
                            return this.provider === Xe.html5
                        }
                    }, {
                        key: "isEmbed",
                        get: function() {
                            return this.isYouTube || this.isVimeo
                        }
                    }, {
                        key: "isYouTube",
                        get: function() {
                            return this.provider === Xe.youtube
                        }
                    }, {
                        key: "isVimeo",
                        get: function() {
                            return this.provider === Xe.vimeo
                        }
                    }, {
                        key: "isVideo",
                        get: function() {
                            return "video" === this.type
                        }
                    }, {
                        key: "isAudio",
                        get: function() {
                            return "audio" === this.type
                        }
                    }, {
                        key: "playing",
                        get: function() {
                            return Boolean(this.ready && !this.paused && !this.ended)
                        }
                    }, {
                        key: "paused",
                        get: function() {
                            return Boolean(this.media.paused)
                        }
                    }, {
                        key: "stopped",
                        get: function() {
                            return Boolean(this.paused && 0 === this.currentTime)
                        }
                    }, {
                        key: "ended",
                        get: function() {
                            return Boolean(this.media.ended)
                        }
                    }, {
                        key: "currentTime",
                        set: function(e) {
                            if (this.duration) {
                                var t = q(e) && e > 0;
                                this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                            }
                        },
                        get: function() {
                            return Number(this.media.currentTime)
                        }
                    }, {
                        key: "buffered",
                        get: function() {
                            var e = this.media.buffered;
                            return q(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                        }
                    }, {
                        key: "seeking",
                        get: function() {
                            return Boolean(this.media.seeking)
                        }
                    }, {
                        key: "duration",
                        get: function() {
                            var e = parseFloat(this.config.duration),
                                t = (this.media || {}).duration,
                                n = q(t) && t !== 1 / 0 ? t : 0;
                            return e || n
                        }
                    }, {
                        key: "volume",
                        set: function(e) {
                            var t = e;
                            H(t) && (t = Number(t)), q(t) || (t = this.storage.get("volume")), q(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !Y(e) && this.muted && t > 0 && (this.muted = !1)
                        },
                        get: function() {
                            return Number(this.media.volume)
                        }
                    }, {
                        key: "muted",
                        set: function(e) {
                            var t = e;
                            F(t) || (t = this.storage.get("muted")), F(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                        },
                        get: function() {
                            return Boolean(this.media.muted)
                        }
                    }, {
                        key: "hasAudio",
                        get: function() {
                            return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                        }
                    }, {
                        key: "speed",
                        set: function(e) {
                            var t = this,
                                n = null;
                            q(e) && (n = e), q(n) || (n = this.storage.get("speed")), q(n) || (n = this.config.speed.selected);
                            var i = this.minimumSpeed,
                                a = this.maximumSpeed;
                            n = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                                return Math.min(Math.max(e, t), n)
                            }(n, i, a), this.config.speed.selected = n, setTimeout((function() {
                                t.media.playbackRate = n
                            }), 0)
                        },
                        get: function() {
                            return Number(this.media.playbackRate)
                        }
                    }, {
                        key: "minimumSpeed",
                        get: function() {
                            return this.isYouTube ? Math.min.apply(Math, l(this.options.speed)) : this.isVimeo ? .5 : .0625
                        }
                    }, {
                        key: "maximumSpeed",
                        get: function() {
                            return this.isYouTube ? Math.max.apply(Math, l(this.options.speed)) : this.isVimeo ? 2 : 16
                        }
                    }, {
                        key: "quality",
                        set: function(e) {
                            var t = this.config.quality,
                                n = this.options.quality;
                            if (n.length) {
                                var i = [!Y(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(q),
                                    a = !0;
                                if (!n.includes(i)) {
                                    var r = function(e, t) {
                                        return R(e) && e.length ? e.reduce((function(e, n) {
                                            return Math.abs(n - t) < Math.abs(e - t) ? n : e
                                        })) : null
                                    }(n, i);
                                    this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(r, " instead")), i = r, a = !1
                                }
                                t.selected = i, this.media.quality = i, a && this.storage.set({
                                    quality: i
                                })
                            }
                        },
                        get: function() {
                            return this.media.quality
                        }
                    }, {
                        key: "loop",
                        set: function(e) {
                            var t = F(e) ? e : this.config.loop.active;
                            this.config.loop.active = t, this.media.loop = t
                        },
                        get: function() {
                            return Boolean(this.media.loop)
                        }
                    }, {
                        key: "source",
                        set: function(e) {
                            gt.change.call(this, e)
                        },
                        get: function() {
                            return this.media.currentSrc
                        }
                    }, {
                        key: "download",
                        get: function() {
                            var e = this.config.urls.download;
                            return K(e) ? e : this.source
                        },
                        set: function(e) {
                            K(e) && (this.config.urls.download = e, We.setDownloadUrl.call(this))
                        }
                    }, {
                        key: "poster",
                        set: function(e) {
                            this.isVideo ? nt.setPoster.call(this, e, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video")
                        },
                        get: function() {
                            return this.isVideo ? this.media.getAttribute("poster") : null
                        }
                    }, {
                        key: "ratio",
                        get: function() {
                            if (!this.isVideo) return null;
                            var e = Ee(xe.call(this));
                            return R(e) ? e.join(":") : e
                        },
                        set: function(e) {
                            this.isVideo ? H(e) && Ae(e) ? (this.config.ratio = e, Pe.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
                        }
                    }, {
                        key: "autoplay",
                        set: function(e) {
                            var t = F(e) ? e : this.config.autoplay;
                            this.config.autoplay = t
                        },
                        get: function() {
                            return Boolean(this.config.autoplay)
                        }
                    }, {
                        key: "currentTrack",
                        set: function(e) {
                            Ge.set.call(this, e, !1)
                        },
                        get: function() {
                            var e = this.captions,
                                t = e.toggled,
                                n = e.currentTrack;
                            return t ? n : -1
                        }
                    }, {
                        key: "language",
                        set: function(e) {
                            Ge.setLanguage.call(this, e, !1)
                        },
                        get: function() {
                            return (Ge.getCurrentTrack.call(this) || {}).language
                        }
                    }, {
                        key: "pip",
                        set: function(e) {
                            if (ge.pip) {
                                var t = F(e) ? e : !this.pip;
                                D(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Qe : "inline"), D(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                            }
                        },
                        get: function() {
                            return ge.pip ? Y(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Qe : null
                        }
                    }], [{
                        key: "supported",
                        value: function(e, t, n) {
                            return ge.check(e, t, n)
                        }
                    }, {
                        key: "loadSprite",
                        value: function(e, t) {
                            return Re(e, t)
                        }
                    }, {
                        key: "setup",
                        value: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = null;
                            return H(e) ? i = Array.from(document.querySelectorAll(e)) : V(e) ? i = Array.from(e) : R(e) && (i = e.filter(B)), Y(i) ? null : i.map((function(e) {
                                return new t(e, n)
                            }))
                        }
                    }]), t
                }();
            return yt.defaults = (ut = Je, JSON.parse(JSON.stringify(ut))), yt
        }))
    }).call(this, n(10))
}, function(e, t, n) {
    var i = n(11),
        a = n(12),
        r = n(4),
        o = n(13);
    e.exports = function(e) {
        return i(e) || a(e) || r(e) || o()
    }
}, function(e, t, n) {
    var i = n(14),
        a = n(15),
        r = n(4),
        o = n(16);
    e.exports = function(e, t) {
        return i(e) || a(e, t) || r(e, t) || o()
    }
}, function(e, t, n) {
    (function(e) {
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var n = function(e) {
            "use strict";
            var n = Object.prototype,
                i = n.hasOwnProperty,
                a = "function" == typeof Symbol ? Symbol : {},
                r = a.iterator || "@@iterator",
                o = a.asyncIterator || "@@asyncIterator",
                s = a.toStringTag || "@@toStringTag";

            function l(e, t, n, i) {
                var a = t && t.prototype instanceof d ? t : d,
                    r = Object.create(a.prototype),
                    o = new C(i || []);
                return r._invoke = function(e, t, n) {
                    var i = "suspendedStart";
                    return function(a, r) {
                        if ("executing" === i) throw new Error("Generator is already running");
                        if ("completed" === i) {
                            if ("throw" === a) throw r;
                            return A()
                        }
                        for (n.method = a, n.arg = r;;) {
                            var o = n.delegate;
                            if (o) {
                                var s = w(o, n);
                                if (s) {
                                    if (s === u) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === i) throw i = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = "executing";
                            var l = c(e, t, n);
                            if ("normal" === l.type) {
                                if (i = n.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (i = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }(e, n, o), r
            }

            function c(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = l;
            var u = {};

            function d() {}

            function h() {}

            function p() {}
            var f = {};
            f[r] = function() {
                return this
            };
            var m = Object.getPrototypeOf,
                g = m && m(m(S([])));
            g && g !== n && i.call(g, r) && (f = g);
            var y = p.prototype = d.prototype = Object.create(f);

            function v(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                }))
            }

            function b(e, n) {
                var a;
                this._invoke = function(r, o) {
                    function s() {
                        return new n((function(a, s) {
                            ! function a(r, o, s, l) {
                                var u = c(e[r], e, o);
                                if ("throw" !== u.type) {
                                    var d = u.arg,
                                        h = d.value;
                                    return h && "object" === t(h) && i.call(h, "__await") ? n.resolve(h.__await).then((function(e) {
                                        a("next", e, s, l)
                                    }), (function(e) {
                                        a("throw", e, s, l)
                                    })) : n.resolve(h).then((function(e) {
                                        d.value = e, s(d)
                                    }), (function(e) {
                                        return a("throw", e, s, l)
                                    }))
                                }
                                l(u.arg)
                            }(r, o, a, s)
                        }))
                    }
                    return a = a ? a.then(s, s) : s()
                }
            }

            function w(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return u;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var i = c(n, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, u;
                var a = i.arg;
                return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
            }

            function k(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function T(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function C(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(k, this), this.reset(!0)
            }

            function S(e) {
                if (e) {
                    var t = e[r];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1,
                            a = function t() {
                                for (; ++n < e.length;)
                                    if (i.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                        return a.next = a
                    }
                }
                return {
                    next: A
                }
            }

            function A() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = y.constructor = p, p.constructor = h, p[s] = h.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(y), e
            }, e.awrap = function(e) {
                return {
                    __await: e
                }
            }, v(b.prototype), b.prototype[o] = function() {
                return this
            }, e.AsyncIterator = b, e.async = function(t, n, i, a, r) {
                void 0 === r && (r = Promise);
                var o = new b(l(t, n, i, a), r);
                return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                    return e.done ? e.value : o.next()
                }))
            }, v(y), y[s] = "Generator", y[r] = function() {
                return this
            }, y.toString = function() {
                return "[object Generator]"
            }, e.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var i = t.pop();
                            if (i in e) return n.value = i, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, e.values = S, C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !e)
                        for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(n, i) {
                        return o.type = "throw", o.arg = e, t.next = n, i && (t.method = "next", t.arg = void 0), !!i
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var r = this.tryEntries[a],
                            o = r.completion;
                        if ("root" === r.tryLoc) return n("end");
                        if (r.tryLoc <= this.prev) {
                            var s = i.call(r, "catchLoc"),
                                l = i.call(r, "finallyLoc");
                            if (s && l) {
                                if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                            } else if (s) {
                                if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var r = a;
                            break
                        }
                    }
                    r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                    var o = r ? r.completion : {};
                    return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), u
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var a = i.arg;
                                T(n)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: S(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, e
        }("object" === t(e) ? e.exports : {});
        try {
            regeneratorRuntime = n
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(n)
        }
    }).call(this, n(9)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var i = n(3);
    e.exports = function(e) {
        if (Array.isArray(e)) return i(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
                i = !0,
                a = !1,
                r = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
            } catch (e) {
                a = !0, r = e
            } finally {
                try {
                    i || null == s.return || s.return()
                } finally {
                    if (a) throw r
                }
            }
            return n
        }
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0),
        a = n.n(i),
        r = n(1),
        o = n.n(r),
        s = n(5),
        l = n.n(s);

    function c() {
        return '<div class="c-plyr-overlay">\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\n</div>\n<div class="c-controls c-controls--hidden">\n\n    <div data-plyr="play" \n        class="c-controls__button c-controls__toggle-play c-controls__toggle-play--paused"\n        aria-label="Play, {title}">\n        \x3c!-- play --\x3e\n        <svg class="c-icon c-icon--playing" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\n        \x3c!-- pause --\x3e\n        <svg class="c-icon c-icon--paused" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\n    </div>\n\n    <span class="c-controls__time plyr__time--current"></span>\n\n    <div class="c-progress-bar">\n        <input data-plyr="seek" class="c-progress-bar__input" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">\n        <div class="c-progress-bar__after"></div>\n    </div>\n    \n    <div data-plyr="mute"\n        class="c-controls__button c-controls__toggle-mute"\n        aria-label="Mute">\n        \x3c!-- mute --\x3e\n        <svg class=\'c-icon c-icon--mute\' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\n        \x3c!-- unmute --\x3e\n        <svg class=\'c-icon c-icon--unmute\' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>    \n    </div>\n\n    <div data-plyr="fullscreen" \n        class="c-controls__button c-controls__toggle-fullscreen"\n        aria-label="Fullscreen">\n        <div class="c-fullscreen-icon-grid">\n            <span class="c-fullscreen-icon-grid__up">↗</span>\n            <span class="c-fullscreen-icon-grid__down">↙</span>\n        </div>\n    </div>\n\n</div>'
    }
    var u = function() {
            function e() {
                document.querySelectorAll("[data-plyr]").forEach((function(e) {
                    var t = "true" === e.getAttribute("data-plyr-autoplay");
                    if (!t) {
                        var n = {
                            title: e.dataset["plyr-title"] || "Video",
                            debug: !1,
                            controls: c,
                            captions: {
                                active: !1,
                                update: !1
                            },
                            keyboard: {
                                focused: !0,
                                global: !1
                            },
                            invertTime: !1
                        };
                        t && (n.autopause = !1, n.autoplay = !0, n.muted = !0, n.loop = {
                            active: !0
                        }, n.hideControls = !1, n.controls = [], n.clickToPlay = !1, n.fullscreen = {
                            enabled: !1
                        });
                        var i = new l.a(e, n);
                        i.on("ready", (function(e) {
                            var n = i.media.parentElement.parentElement,
                                a = n.querySelector(".c-plyr-overlay"),
                                r = n.querySelector(".c-controls");
                            if (t) a.classList.add("c-plyr-overlay--hidden");
                            else {
                                i.on("play", (function(e) {
                                    a.classList.add("c-plyr-overlay--hidden"), r.classList.remove("c-controls--hidden")
                                }));
                                var o = n.querySelector(".c-progress-bar__input");
                                n.addEventListener("click", (function() {
                                    o.focus()
                                })), i.elements.progress || (i.elements.progress = o);
                                var s = n.querySelector(".c-progress-bar__after");
                                i.on("timeupdate", (function(e) {
                                    if (i.duration) {
                                        var t = i.currentTime / i.duration * 100;
                                        s.style.setProperty("--slider-progress", "".concat(100 - t, "%"))
                                    }
                                }));
                                var l = n.querySelector(".c-controls__toggle-play");
                                i.on("playing", (function(e) {
                                    l.classList.remove("c-controls__toggle-play--paused")
                                })), i.on("pause", (function(e) {
                                    l.classList.add("c-controls__toggle-play--paused")
                                }));
                                var c = n.querySelector(".c-controls__toggle-fullscreen");
                                i.on("exitfullscreen", (function(e) {
                                    c.classList.remove("c-controls__toggle-fullscreen--full")
                                })), i.on("enterfullscreen", (function(e) {
                                    c.classList.add("c-controls__toggle-fullscreen--full")
                                }));
                                var u = n.querySelector(".c-controls__toggle-mute");
                                i.on("volumechange", (function(e) {
                                    i.muted ? u.classList.add("c-controls__toggle-mute--muted") : u.classList.remove("c-controls__toggle-mute--muted")
                                })), n.addEventListener("touchstart", (function(e) {
                                    i.playing ? i.pause() : i.play()
                                })), r.addEventListener("touchstart", (function(e) {
                                    e.stopPropagation()
                                }))
                            }
                        }))
                    }
                }))
            }
            "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", (function() {
                e()
            }))
        },
        d = n(2),
        h = n.n(d),
        p = n(6),
        f = n.n(p),
        m = n(7),
        g = n.n(m),
        y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "twitch.lohp.countryCode",
                t = h.a.get(e);
            if (t) return t.toLowerCase()
        },
        v = function() {
            var e = window.location.search,
                t = /[?&]country=([\w-]+)/.exec(e) || [],
                n = g()(t, 2),
                i = (n[0], n[1]);
            if (i) return i.toLowerCase()
        },
        b = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "data-available-countries",
                t = f()(document.querySelectorAll("[".concat(e, "]"))),
                n = v() || y();
            t.forEach((function(t) {
                t.getAttribute(e).split(",").map((function(e) {
                    return e.trim().toLowerCase()
                })).includes(n) ? t.removeAttribute(e) : t.remove()
            }))
        };
    o()(a.a.mark((function e() {
        return a.a.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    b(), u();
                case 2:
                case "end":
                    return e.stop()
            }
        }), e)
    })))()
}]);