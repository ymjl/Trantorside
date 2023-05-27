/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function(s, n) {
    "use strict";
    function e(e) {
        return 0 <= function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                if (+n[a] > +o[a])
                    return 1;
                if (+n[a] < +o[a])
                    return -1
            }
            return 0
        }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.4.0";
    var t = Object.create(null)
      , o = (s.migrateDisablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            t[arguments[e]] = !0
    }
    ,
    s.migrateEnablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            delete t[arguments[e]]
    }
    ,
    s.migrateIsPatchEnabled = function(e) {
        return !t[e]
    }
    ,
    n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion)),
    {});
    function i(e, t) {
        var r = n.console;
        !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0,
        s.migrateWarnings.push(t + " [" + e + "]"),
        r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t),
        s.migrateTrace && r.trace && r.trace()))
    }
    function r(e, t, r, n, o) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return i(n, o),
                r
            },
            set: function(e) {
                i(n, o),
                r = e
            }
        })
    }
    function a(e, t, r, n, o) {
        var a = e[t];
        e[t] = function() {
            return o && i(n, o),
            (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        }
    }
    function u(e, t, r, n, o) {
        if (!o)
            throw new Error("No warning message provided");
        a(e, t, r, n, o)
    }
    function d(e, t, r, n) {
        a(e, t, r, n)
    }
    s.migrateDeduplicateWarnings = !0,
    s.migrateWarnings = [],
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    s.migrateReset = function() {
        o = {},
        s.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === n.document.compatMode && i("quirks", "jQuery is not compatible with Quirks Mode");
    var c, l, p, f = {}, m = s.fn.init, y = s.find, h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (c in d(s.fn, "init", function(e) {
        var t = Array.prototype.slice.call(arguments);
        return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (i("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
        t[0] = []),
        m.apply(this, t)
    }, "selector-empty-id"),
    s.fn.init.prototype = s.fn,
    d(s, "find", function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
            try {
                n.document.querySelector(t)
            } catch (e) {
                t = t.replace(g, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    n.document.querySelector(t),
                    i("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]),
                    r[0] = t
                } catch (e) {
                    i("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                }
            }
        return y.apply(this, r)
    }, "selector-hash"),
    y)
        Object.prototype.hasOwnProperty.call(y, c) && (s.find[c] = y[c]);
    u(s.fn, "size", function() {
        return this.length
    }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"),
    u(s, "parseJSON", function() {
        return JSON.parse.apply(null, arguments)
    }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"),
    u(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"),
    u(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.1.1") && u(s, "trim", function(e) {
        return null == e ? "" : (e + "").replace(v, "")
    }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"),
    e("3.2.0") && (u(s, "nodeName", function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "nodeName", "jQuery.nodeName is deprecated"),
    u(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")),
    e("3.3.0") && (u(s, "isNumeric", function(e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "isNumeric", "jQuery.isNumeric() is deprecated"),
    s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }),
    u(s, "type", function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "type", "jQuery.type is deprecated"),
    u(s, "isFunction", function(e) {
        return "function" == typeof e
    }, "isFunction", "jQuery.isFunction() is deprecated"),
    u(s, "isWindow", function(e) {
        return null != e && e === e.window
    }, "isWindow", "jQuery.isWindow() is deprecated")),
    s.ajax && (l = s.ajax,
    p = /(=)\?(?=&|$)|\?\?/,
    d(s, "ajax", function() {
        var e = l.apply(this, arguments);
        return e.promise && (u(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"),
        u(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"),
        u(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")),
        e
    }, "jqXHR-methods"),
    e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
        !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && i("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
    }));
    var j = s.fn.removeAttr
      , b = s.fn.toggleClass
      , w = /\S+/g;
    function Q(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    d(s.fn, "removeAttr", function(e) {
        var r = this;
        return s.each(e.match(w), function(e, t) {
            s.expr.match.bool.test(t) && (i("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1))
        }),
        j.apply(this, arguments)
    }, "removeAttr-bool"),
    d(s.fn, "toggleClass", function(t) {
        return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (i("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
    }, "toggleClass-bool");
    var x, A = !1, R = /^[a-z]/, T = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return A = !0,
            e = r.apply(this, arguments),
            A = !1,
            e
        }
        )
    }),
    d(s, "swap", function(e, t, r, n) {
        var o, a = {};
        for (o in A || i("swap", "jQuery.swap() is undocumented and deprecated"),
        t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = r.apply(e, n || []),
        t)
            e.style[o] = a[o];
        return r
    }, "swap"),
    e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
        set: function() {
            return i("cssProps", "jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    e("4.0.0") && "undefined" != typeof Proxy && (s.cssNumber = new Proxy({
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },{
        get: function() {
            return i("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.get.apply(this, arguments)
        },
        set: function() {
            return i("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    x = s.fn.css,
    d(s.fn, "css", function(e, t) {
        var r, n = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
            s.fn.css.call(n, e, t)
        }),
        this) : ("number" == typeof t && (t = Q(e),
        r = t,
        R.test(r) && T.test(r[0].toUpperCase() + r.slice(1)) || s.cssNumber[t] || i("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
        x.apply(this, arguments))
    }, "css-number");
    function C(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e,
        t.body && t.body.innerHTML
    }
    var S, N, P, k, H, E, M, q = s.data, D = (d(s, "data", function(e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (a in n = s.hasData(e) && q.call(this, e),
            o = {},
            t)
                a !== Q(a) ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a),
                n[a] = t[a]) : o[a] = t[a];
            return q.call(this, e, o),
            t
        }
        return t && "string" == typeof t && t !== Q(t) && (n = s.hasData(e) && q.call(this, e)) && t in n ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : q.apply(this, arguments)
    }, "data-camelCase"),
    s.fx && (P = s.Tween.prototype.run,
    k = function(e) {
        return e
    }
    ,
    d(s.Tween.prototype, "run", function() {
        1 < s.easing[this.easing].length && (i("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        s.easing[this.easing] = k),
        P.apply(this, arguments)
    }, "easing-one-arg"),
    S = s.fx.interval,
    N = "jQuery.fx.interval is deprecated",
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || i("fx-interval", N),
            s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
        },
        set: function(e) {
            i("fx-interval", N),
            S = e
        }
    })),
    s.fn.load), F = s.event.add, W = s.event.fix, O = (s.event.props = [],
    s.event.fixHooks = {},
    r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"),
    d(s.event, "fix", function(e) {
        var t = e.type
          , r = this.fixHooks[t]
          , n = s.event.props;
        if (n.length) {
            i("event-old-patch", "jQuery.event.props are deprecated and removed: " + n.join());
            while (n.length)
                s.event.addProp(n.pop())
        }
        if (r && !r._migrated_ && (r._migrated_ = !0,
        i("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + t),
        (n = r.props) && n.length))
            while (n.length)
                s.event.addProp(n.pop());
        return t = W.call(this, e),
        r && r.filter ? r.filter(t, e) : t
    }, "event-old-patch"),
    d(s.event, "add", function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && i("load-after-event", "jQuery(window).on('load'...) called after load event occurred"),
        F.apply(this, arguments)
    }, "load-after-event"),
    s.each(["load", "unload", "error"], function(e, t) {
        d(s.fn, t, function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? D.apply(this, e) : (i("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }, "shorthand-removed-v3")
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        u(s.fn, r, function(e, t) {
            return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
    }),
    s(function() {
        s(n.document).triggerHandler("ready")
    }),
    s.event.special.ready = {
        setup: function() {
            this === n.document && i("ready-event", "'ready' event is deprecated")
        }
    },
    u(s.fn, "bind", function(e, t, r) {
        return this.on(e, null, t, r)
    }, "pre-on-methods", "jQuery.fn.bind() is deprecated"),
    u(s.fn, "unbind", function(e, t) {
        return this.off(e, null, t)
    }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"),
    u(s.fn, "delegate", function(e, t, r, n) {
        return this.on(t, e, r, n)
    }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"),
    u(s.fn, "undelegate", function(e, t, r) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
    }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"),
    u(s.fn, "hover", function(e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }, "pre-on-methods", "jQuery.fn.hover() is deprecated"),
    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi), _ = (s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
        s.migrateEnablePatches("self-closed-tags")
    }
    ,
    d(s, "htmlPrefilter", function(e) {
        var t, r;
        return (r = (t = e).replace(O, "<$1></$2>")) !== t && C(t) !== C(r) && i("self-closed-tags", "HTML tags must be properly nested and closed: " + t),
        e.replace(O, "<$1></$2>")
    }, "self-closed-tags"),
    s.migrateDisablePatches("self-closed-tags"),
    s.fn.offset);
    return d(s.fn, "offset", function() {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (i("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"),
        arguments.length ? this : void 0)
    }, "offset-valid-elem"),
    s.ajax && (H = s.param,
    d(s, "param", function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (i("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        t = r),
        H.call(this, e, t)
    }, "param-ajax-traditional")),
    u(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
    s.Deferred && (E = s.Deferred,
    M = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
    d(s, "Deferred", function(e) {
        var a = E()
          , i = a.promise();
        function t() {
            var o = arguments;
            return s.Deferred(function(n) {
                s.each(M, function(e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                    })
                }),
                o = null
            }).promise()
        }
        return u(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        u(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        e && e.call(a, a),
        a
    }, "deferred-pipe"),
    s.Deferred.exceptionHook = E.exceptionHook),
    s
});
;var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
    isMobile = true;

var lighbox_array = [];
;isAutoplaySupported = function(callback) {
    if (typeof callback !== 'function') {
        return false;
    }
    if (!sessionStorage.autoplaySupported) {
        var video = document.createElement('video');
        video.autoplay = true;
        video.muted = true;
        video.setAttribute('webkit-playsinline', 'webkit-playsinline');
        video.setAttribute('playsinline', 'playsinline');
        video.src = 'data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAFoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAHVOAAAH0gABAAAAAAOtbWRpYQAAACBtZGhkAAAAANLEP5XSxD+VAAB1MAAAdU5VxAAAAAAANmhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABMLVNNQVNIIFZpZGVvIEhhbmRsZXIAAAADT21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAw9zdGJsAAAAwXN0c2QAAAAAAAAAAQAAALFhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoABaABIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAAAAAEHBhc3AAAAABAAAAAQAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAAQBjdHRzAAAAAAAAAB4AAAABAAAH0gAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAB9IAAAAUc3RzcwAAAAAAAAABAAAAAQAAACpzZHRwAAAAAKaWlpqalpaampaWmpqWlpqalpaampaWmpqWlpqalgAAABxzdHNjAAAAAAAAAAEAAAABAAAAHgAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAA5YAAAAVAAAAEwAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABRzdGNvAAAAAAAAAAEAAAT6AAAAGHNncGQBAAAAcm9sbAAAAAIAAAAAAAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAeAAAAAAAAAAhmcmVlAAAGC21kYXQAAAMfBgX///8b3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMTEgNzU5OTIxMCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTUgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xMSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgc3RpdGNoYWJsZT0xIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz0ycGFzcyBtYnRyZWU9MSBiaXRyYXRlPTExMiByYXRldG9sPTEuMCBxY29tcD0wLjYwIHFwbWluPTUgcXBtYXg9NjkgcXBzdGVwPTQgY3BseGJsdXI9MjAuMCBxYmx1cj0wLjUgdmJ2X21heHJhdGU9ODI1IHZidl9idWZzaXplPTkwMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAG9liIQAFf/+963fgU3DKzVrulc4tMurlDQ9UfaUpni2SAAAAwAAAwAAD/DNvp9RFdeXpgAAAwB+ABHAWYLWHUFwGoHeKCOoUwgBAAADAAADAAADAAADAAAHgvugkks0lyOD2SZ76WaUEkznLgAAFFEAAAARQZokbEFf/rUqgAAAAwAAHVAAAAAPQZ5CeIK/AAADAAADAA6ZAAAADwGeYXRBXwAAAwAAAwAOmAAAAA8BnmNqQV8AAAMAAAMADpkAAAAXQZpoSahBaJlMCCv//rUqgAAAAwAAHVEAAAARQZ6GRREsFf8AAAMAAAMADpkAAAAPAZ6ldEFfAAADAAADAA6ZAAAADwGep2pBXwAAAwAAAwAOmAAAABdBmqxJqEFsmUwIK//+tSqAAAADAAAdUAAAABFBnspFFSwV/wAAAwAAAwAOmQAAAA8Bnul0QV8AAAMAAAMADpgAAAAPAZ7rakFfAAADAAADAA6YAAAAF0Ga8EmoQWyZTAgr//61KoAAAAMAAB1RAAAAEUGfDkUVLBX/AAADAAADAA6ZAAAADwGfLXRBXwAAAwAAAwAOmQAAAA8Bny9qQV8AAAMAAAMADpgAAAAXQZs0SahBbJlMCCv//rUqgAAAAwAAHVAAAAARQZ9SRRUsFf8AAAMAAAMADpkAAAAPAZ9xdEFfAAADAAADAA6YAAAADwGfc2pBXwAAAwAAAwAOmAAAABdBm3hJqEFsmUwIK//+tSqAAAADAAAdUQAAABFBn5ZFFSwV/wAAAwAAAwAOmAAAAA8Bn7V0QV8AAAMAAAMADpkAAAAPAZ+3akFfAAADAAADAA6ZAAAAF0GbvEmoQWyZTAgr//61KoAAAAMAAB1QAAAAEUGf2kUVLBX/AAADAAADAA6ZAAAADwGf+XRBXwAAAwAAAwAOmAAAAA8Bn/tqQV8AAAMAAAMADpkAAAAXQZv9SahBbJlMCCv//rUqgAAAAwAAHVE=';
        video.load();
        video.style.display = 'none';
        video.playing = false;
        video.play();
        video.onplay = function() {
            this.playing = true;
        }
        ;
        ;video.oncanplay = function() {
            if (video.playing) {
                sessionStorage.autoplaySupported = 'true';
                jQuery('<div/>', {
                    id: 'greenlight',
                    style: 'display:none'
                }).appendTo('body');
                callback(true);
            } else {
                sessionStorage.autoplaySupported = 'false';
                jQuery('<div/>', {
                    id: 'redlight',
                    style: 'display:none'
                }).appendTo('body');
                callback(false);
            }
        }
        ;
    } else {
        if (sessionStorage.autoplaySupported === 'true') {
            jQuery('<div/>', {
                id: 'greenlight',
                style: 'display:none'
            }).appendTo('body');
            callback(true);
        } else {
            jQuery('<div/>', {
                id: 'redlight',
                style: 'display:none'
            }).appendTo('body');
            callback(false);
        }
    }
}
isAutoplaySupported(function(supported) {});
;var url_base = 'https://dashcreative.co/';
var theme_base = 'https://dashcreative.co/wp-content/themes/dash2018';
;/*! lazysizes - v5.3.1 */
!function(e) {
    var t = function(u, D, f) {
        "use strict";
        var k, H;
        if (function() {
            var e;
            var t = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                fastLoadedClass: "ls-is-cached",
                iframeLoadMode: 1,
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: true,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: true,
                ricTimeout: 0,
                throttleDelay: 125
            };
            H = u.lazySizesConfig || u.lazysizesConfig || {};
            for (e in t) {
                if (!(e in H)) {
                    H[e] = t[e]
                }
            }
        }(),
        !D || !D.getElementsByClassName) {
            return {
                init: function() {},
                cfg: H,
                noSupport: true
            }
        }
        var O = D.documentElement
          , i = u.HTMLPictureElement
          , P = "addEventListener"
          , $ = "getAttribute"
          , q = u[P].bind(u)
          , I = u.setTimeout
          , U = u.requestAnimationFrame || I
          , o = u.requestIdleCallback
          , j = /^picture$/i
          , r = ["load", "error", "lazyincluded", "_lazyloaded"]
          , a = {}
          , G = Array.prototype.forEach
          , J = function(e, t) {
            if (!a[t]) {
                a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")
            }
            return a[t].test(e[$]("class") || "") && a[t]
        }
          , K = function(e, t) {
            if (!J(e, t)) {
                e.setAttribute("class", (e[$]("class") || "").trim() + " " + t)
            }
        }
          , Q = function(e, t) {
            var a;
            if (a = J(e, t)) {
                e.setAttribute("class", (e[$]("class") || "").replace(a, " "))
            }
        }
          , V = function(t, a, e) {
            var i = e ? P : "removeEventListener";
            if (e) {
                V(t, a)
            }
            r.forEach(function(e) {
                t[i](e, a)
            })
        }
          , X = function(e, t, a, i, r) {
            var n = D.createEvent("Event");
            if (!a) {
                a = {}
            }
            a.instance = k;
            n.initEvent(t, !i, !r);
            n.detail = a;
            e.dispatchEvent(n);
            return n
        }
          , Y = function(e, t) {
            var a;
            if (!i && (a = u.picturefill || H.pf)) {
                if (t && t.src && !e[$]("srcset")) {
                    e.setAttribute("srcset", t.src)
                }
                a({
                    reevaluate: true,
                    elements: [e]
                })
            } else if (t && t.src) {
                e.src = t.src
            }
        }
          , Z = function(e, t) {
            return (getComputedStyle(e, null) || {})[t]
        }
          , s = function(e, t, a) {
            a = a || e.offsetWidth;
            while (a < H.minSize && t && !e._lazysizesWidth) {
                a = t.offsetWidth;
                t = t.parentNode
            }
            return a
        }
          , ee = function() {
            var a, i;
            var t = [];
            var r = [];
            var n = t;
            var s = function() {
                var e = n;
                n = t.length ? r : t;
                a = true;
                i = false;
                while (e.length) {
                    e.shift()()
                }
                a = false
            };
            var e = function(e, t) {
                if (a && !t) {
                    e.apply(this, arguments)
                } else {
                    n.push(e);
                    if (!i) {
                        i = true;
                        (D.hidden ? I : U)(s)
                    }
                }
            };
            e._lsFlush = s;
            return e
        }()
          , te = function(a, e) {
            return e ? function() {
                ee(a)
            }
            : function() {
                var e = this;
                var t = arguments;
                ee(function() {
                    a.apply(e, t)
                })
            }
        }
          , ae = function(e) {
            var a;
            var i = 0;
            var r = H.throttleDelay;
            var n = H.ricTimeout;
            var t = function() {
                a = false;
                i = f.now();
                e()
            };
            var s = o && n > 49 ? function() {
                o(t, {
                    timeout: n
                });
                if (n !== H.ricTimeout) {
                    n = H.ricTimeout
                }
            }
            : te(function() {
                I(t)
            }, true);
            return function(e) {
                var t;
                if (e = e === true) {
                    n = 33
                }
                if (a) {
                    return
                }
                a = true;
                t = r - (f.now() - i);
                if (t < 0) {
                    t = 0
                }
                if (e || t < 9) {
                    s()
                } else {
                    I(s, t)
                }
            }
        }
          , ie = function(e) {
            var t, a;
            var i = 99;
            var r = function() {
                t = null;
                e()
            };
            var n = function() {
                var e = f.now() - a;
                if (e < i) {
                    I(n, i - e)
                } else {
                    (o || r)(r)
                }
            };
            return function() {
                a = f.now();
                if (!t) {
                    t = I(n, i)
                }
            }
        }
          , e = function() {
            var v, m, c, h, e;
            var y, z, g, p, C, b, A;
            var n = /^img$/i;
            var d = /^iframe$/i;
            var E = "onscroll"in u && !/(gle|ing)bot/.test(navigator.userAgent);
            var _ = 0;
            var w = 0;
            var M = 0;
            var N = -1;
            var L = function(e) {
                M--;
                if (!e || M < 0 || !e.target) {
                    M = 0
                }
            };
            var x = function(e) {
                if (A == null) {
                    A = Z(D.body, "visibility") == "hidden"
                }
                return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden")
            };
            var W = function(e, t) {
                var a;
                var i = e;
                var r = x(e);
                g -= t;
                b += t;
                p -= t;
                C += t;
                while (r && (i = i.offsetParent) && i != D.body && i != O) {
                    r = (Z(i, "opacity") || 1) > 0;
                    if (r && Z(i, "overflow") != "visible") {
                        a = i.getBoundingClientRect();
                        r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1
                    }
                }
                return r
            };
            var t = function() {
                var e, t, a, i, r, n, s, o, l, u, f, c;
                var d = k.elements;
                if ((h = H.loadMode) && M < 8 && (e = d.length)) {
                    t = 0;
                    N++;
                    for (; t < e; t++) {
                        if (!d[t] || d[t]._lazyRace) {
                            continue
                        }
                        if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
                            R(d[t]);
                            continue
                        }
                        if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
                            n = w
                        }
                        if (!u) {
                            u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
                            k._defEx = u;
                            f = u * H.expFactor;
                            c = H.hFac;
                            A = null;
                            if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) {
                                w = f;
                                N = 0
                            } else if (h > 1 && N > 1 && M < 6) {
                                w = u
                            } else {
                                w = _
                            }
                        }
                        if (l !== n) {
                            y = innerWidth + n * c;
                            z = innerHeight + n;
                            s = n * -1;
                            l = n
                        }
                        a = d[t].getBoundingClientRect();
                        if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) {
                            R(d[t]);
                            r = true;
                            if (M > 9) {
                                break
                            }
                        } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
                            i = v[0] || d[t]
                        }
                    }
                    if (i && !r) {
                        R(i)
                    }
                }
            };
            var a = ae(t);
            var S = function(e) {
                var t = e.target;
                if (t._lazyCache) {
                    delete t._lazyCache;
                    return
                }
                L(e);
                K(t, H.loadedClass);
                Q(t, H.loadingClass);
                V(t, B);
                X(t, "lazyloaded")
            };
            var i = te(S);
            var B = function(e) {
                i({
                    target: e.target
                })
            };
            var T = function(e, t) {
                var a = e.getAttribute("data-load-mode") || H.iframeLoadMode;
                if (a == 0) {
                    e.contentWindow.location.replace(t)
                } else if (a == 1) {
                    e.src = t
                }
            };
            var F = function(e) {
                var t;
                var a = e[$](H.srcsetAttr);
                if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
                    e.setAttribute("media", t)
                }
                if (a) {
                    e.setAttribute("srcset", a)
                }
            };
            var s = te(function(t, e, a, i, r) {
                var n, s, o, l, u, f;
                if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
                    if (i) {
                        if (a) {
                            K(t, H.autosizesClass)
                        } else {
                            t.setAttribute("sizes", i)
                        }
                    }
                    s = t[$](H.srcsetAttr);
                    n = t[$](H.srcAttr);
                    if (r) {
                        o = t.parentNode;
                        l = o && j.test(o.nodeName || "")
                    }
                    f = e.firesLoad || "src"in t && (s || n || l);
                    u = {
                        target: t
                    };
                    K(t, H.loadingClass);
                    if (f) {
                        clearTimeout(c);
                        c = I(L, 2500);
                        V(t, B, true)
                    }
                    if (l) {
                        G.call(o.getElementsByTagName("source"), F)
                    }
                    if (s) {
                        t.setAttribute("srcset", s)
                    } else if (n && !l) {
                        if (d.test(t.nodeName)) {
                            T(t, n)
                        } else {
                            t.src = n
                        }
                    }
                    if (r && (s || l)) {
                        Y(t, {
                            src: n
                        })
                    }
                }
                if (t._lazyRace) {
                    delete t._lazyRace
                }
                Q(t, H.lazyClass);
                ee(function() {
                    var e = t.complete && t.naturalWidth > 1;
                    if (!f || e) {
                        if (e) {
                            K(t, H.fastLoadedClass)
                        }
                        S(u);
                        t._lazyCache = true;
                        I(function() {
                            if ("_lazyCache"in t) {
                                delete t._lazyCache
                            }
                        }, 9)
                    }
                    if (t.loading == "lazy") {
                        M--
                    }
                }, true)
            });
            var R = function(e) {
                if (e._lazyRace) {
                    return
                }
                var t;
                var a = n.test(e.nodeName);
                var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
                var r = i == "auto";
                if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
                    return
                }
                t = X(e, "lazyunveilread").detail;
                if (r) {
                    re.updateElem(e, true, e.offsetWidth)
                }
                e._lazyRace = true;
                M++;
                s(e, t, r, i, a)
            };
            var r = ie(function() {
                H.loadMode = 3;
                a()
            });
            var o = function() {
                if (H.loadMode == 3) {
                    H.loadMode = 2
                }
                r()
            };
            var l = function() {
                if (m) {
                    return
                }
                if (f.now() - e < 999) {
                    I(l, 999);
                    return
                }
                m = true;
                H.loadMode = 3;
                a();
                q("scroll", o, true)
            };
            return {
                _: function() {
                    e = f.now();
                    k.elements = D.getElementsByClassName(H.lazyClass);
                    v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
                    q("scroll", a, true);
                    q("resize", a, true);
                    q("pageshow", function(e) {
                        if (e.persisted) {
                            var t = D.querySelectorAll("." + H.loadingClass);
                            if (t.length && t.forEach) {
                                U(function() {
                                    t.forEach(function(e) {
                                        if (e.complete) {
                                            R(e)
                                        }
                                    })
                                })
                            }
                        }
                    });
                    if (u.MutationObserver) {
                        new MutationObserver(a).observe(O, {
                            childList: true,
                            subtree: true,
                            attributes: true
                        })
                    } else {
                        O[P]("DOMNodeInserted", a, true);
                        O[P]("DOMAttrModified", a, true);
                        setInterval(a, 999)
                    }
                    q("hashchange", a, true);
                    ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
                        D[P](e, a, true)
                    });
                    if (/d$|^c/.test(D.readyState)) {
                        l()
                    } else {
                        q("load", l);
                        D[P]("DOMContentLoaded", a);
                        I(l, 2e4)
                    }
                    if (k.elements.length) {
                        t();
                        ee._lsFlush()
                    } else {
                        a()
                    }
                },
                checkElems: a,
                unveil: R,
                _aLSL: o
            }
        }()
          , re = function() {
            var a;
            var n = te(function(e, t, a, i) {
                var r, n, s;
                e._lazysizesWidth = i;
                i += "px";
                e.setAttribute("sizes", i);
                if (j.test(t.nodeName || "")) {
                    r = t.getElementsByTagName("source");
                    for (n = 0,
                    s = r.length; n < s; n++) {
                        r[n].setAttribute("sizes", i)
                    }
                }
                if (!a.detail.dataAttr) {
                    Y(e, a.detail)
                }
            });
            var i = function(e, t, a) {
                var i;
                var r = e.parentNode;
                if (r) {
                    a = s(e, r, a);
                    i = X(e, "lazybeforesizes", {
                        width: a,
                        dataAttr: !!t
                    });
                    if (!i.defaultPrevented) {
                        a = i.detail.width;
                        if (a && a !== e._lazysizesWidth) {
                            n(e, r, i, a)
                        }
                    }
                }
            };
            var e = function() {
                var e;
                var t = a.length;
                if (t) {
                    e = 0;
                    for (; e < t; e++) {
                        i(a[e])
                    }
                }
            };
            var t = ie(e);
            return {
                _: function() {
                    a = D.getElementsByClassName(H.autosizesClass);
                    q("resize", t)
                },
                checkElems: t,
                updateElem: i
            }
        }()
          , t = function() {
            if (!t.i && D.getElementsByClassName) {
                t.i = true;
                re._();
                e._()
            }
        };
        return I(function() {
            H.init && t()
        }),
        k = {
            cfg: H,
            autoSizer: re,
            loader: e,
            init: t,
            uP: Y,
            aC: K,
            rC: Q,
            hC: J,
            fire: X,
            gW: s,
            rAF: ee
        }
    }(e, e.document, Date);
    e.lazySizes = t,
    "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {});
;/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);
;/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function(c, d, b) {
    var h = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || c.msRequestAnimationFrame || function(a) {
        c.setTimeout(a, 1e3 / 60)
    }
      , a = function() {
        var a = {}, f = d.createElement('div').style, g = function() {
            for (var b = ['t', 'webkitT', 'MozT', 'msT', 'OT'], c, a = 0, d = b.length; a < d; a++)
                if (c = b[a] + 'ransform',
                c in f)
                    return b[a].substr(0, b[a].length - 1);
            return !1
        }(), h;
        function e(a) {
            return g !== !1 && (g === '' ? a : g + a.charAt(0).toUpperCase() + a.substr(1))
        }
        return a.getTime = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        a.extend = function(c, a) {
            for (var b in a)
                c[b] = a[b]
        }
        ,
        a.addEvent = function(a, b, c, d) {
            a.addEventListener(b, c, !!d)
        }
        ,
        a.removeEvent = function(a, b, c, d) {
            a.removeEventListener(b, c, !!d)
        }
        ,
        a.prefixPointerEvent = function(a) {
            return c.MSPointerEvent ? 'MSPointer' + a.charAt(9).toUpperCase() + a.substr(10) : a
        }
        ,
        a.momentum = function(h, j, k, i, g, e) {
            var d = h - j, c = b.abs(d) / k, a, f;
            return e = e === void 0 ? 6e-4 : e,
            a = h + c * c / (2 * e) * (d < 0 ? -1 : 1),
            f = c / e,
            a < i ? (a = g ? i - g / 2.5 * (c / 8) : i,
            d = b.abs(a - h),
            f = d / c) : a > 0 && (a = g ? g / 2.5 * (c / 8) : 0,
            d = b.abs(h) + a,
            f = d / c),
            {
                destination: b.round(a),
                duration: f
            }
        }
        ,
        h = e('transform'),
        a.extend(a, {
            hasTransform: h !== !1,
            hasPerspective: e('perspective')in f,
            hasTouch: 'ontouchstart'in c,
            hasPointer: c.PointerEvent || c.MSPointerEvent,
            hasTransition: e('transition')in f
        }),
        a.isBadAndroid = /Android /.test(c.navigator.appVersion) && !/Chrome\/\d/.test(c.navigator.appVersion),
        a.extend(a.style = {}, {
            transform: h,
            transitionTimingFunction: e('transitionTimingFunction'),
            transitionDuration: e('transitionDuration'),
            transitionDelay: e('transitionDelay'),
            transformOrigin: e('transformOrigin')
        }),
        a.hasClass = function(a, b) {
            var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
            return c.test(a.className)
        }
        ,
        a.addClass = function(b, c) {
            if (a.hasClass(b, c))
                return;
            var d = b.className.split(' ');
            d.push(c),
            b.className = d.join(' ')
        }
        ,
        a.removeClass = function(b, c) {
            if (!a.hasClass(b, c))
                return;
            var d = new RegExp("(^|\\s)" + c + "(\\s|$)",'g');
            b.className = b.className.replace(d, ' ')
        }
        ,
        a.offset = function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                b -= a.offsetLeft,
                c -= a.offsetTop;
            return {
                left: b,
                top: c
            }
        }
        ,
        a.preventDefaultException = function(c, a) {
            for (var b in a)
                if (a[b].test(c[b]))
                    return !0;
            return !1
        }
        ,
        a.extend(a.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        a.extend(a.ease = {}, {
            quadratic: {
                style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fn: function(a) {
                    return a * (2 - a)
                }
            },
            circular: {
                style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
                fn: function(a) {
                    return b.sqrt(1 - --a * a)
                }
            },
            back: {
                style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                fn: function(a) {
                    var b = 4;
                    return (a = a - 1) * a * ((b + 1) * a + b) + 1
                }
            },
            bounce: {
                style: '',
                fn: function(a) {
                    return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }
            },
            elastic: {
                style: '',
                fn: function(a) {
                    var c = .22
                      , d = .4;
                    return a === 0 ? 0 : a == 1 ? 1 : d * b.pow(2, -10 * a) * b.sin((a - c / 4) * (2 * b.PI) / c) + 1
                }
            }
        }),
        a.tap = function(b, c) {
            var a = d.createEvent('Event');
            a.initEvent(c, !0, !0),
            a.pageX = b.pageX,
            a.pageY = b.pageY,
            b.target.dispatchEvent(a)
        }
        ,
        a.click = function(a) {
            var b = a.target, c;
            /(SELECT|INPUT|TEXTAREA)/i.test(b.tagName) || (c = d.createEvent('MouseEvents'),
            c.initMouseEvent('click', !0, !0, a.view, 1, b.screenX, b.screenY, b.clientX, b.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null),
            c._constructed = !0,
            b.dispatchEvent(c))
        }
        ,
        a
    }();
    function e(b, c) {
        this.wrapper = typeof b == 'string' ? d.querySelector(b) : b,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: '',
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        };
        for (var e in c)
            this.options[e] = c[e];
        this.translateZ = this.options.HWCompositing && a.hasPerspective ? ' translateZ(0)' : '',
        this.options.useTransition = a.hasTransition && this.options.useTransition,
        this.options.useTransform = a.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? 'vertical' : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = this.options.eventPassthrough != 'vertical' && this.options.scrollY,
        this.options.scrollX = this.options.eventPassthrough != 'horizontal' && this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = this.options.resizePolling === void 0 ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = 'tap'),
        this.options.shrinkScrollbars == 'scale' && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    e.prototype = {
        version: '5.1.3',
        _init: function() {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0),
            this._execEvent('destroy')
        },
        _transitionEnd: function(a) {
            if (a.target != this.scroller || !this.isInTransition)
                return;
            this._transitionTime(),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
            this._execEvent('scrollEnd'))
        },
        _start: function(c) {
            if (a.eventType[c.type] != 1)
                if (c.button !== 0)
                    return;
            if (!this.enabled || this.initiated && a.eventType[c.type] !== this.initiated)
                return;
            this.options.preventDefault && !a.isBadAndroid && !a.preventDefaultException(c.target, this.options.preventDefaultException) && c.preventDefault();
            var e = c.touches ? c.touches[0] : c, d;
            this.initiated = a.eventType[c.type],
            this.moved = !1,
            this.distX = 0,
            this.distY = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.directionLocked = 0,
            this._transitionTime(),
            this.startTime = a.getTime(),
            this.options.useTransition && this.isInTransition ? (this.isInTransition = !1,
            d = this.getComputedPosition(),
            this._translate(b.round(d.x), b.round(d.y)),
            this._execEvent('scrollEnd')) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
            this._execEvent('scrollEnd')),
            this.startX = this.x,
            this.startY = this.y,
            this.absStartX = this.x,
            this.absStartY = this.y,
            this.pointX = e.pageX,
            this.pointY = e.pageY,
            this._execEvent('beforeScrollStart')
        },
        _move: function(e) {
            if (!this.enabled || a.eventType[e.type] !== this.initiated)
                return;
            this.options.preventDefault && e.preventDefault();
            var h = e.touches ? e.touches[0] : e, c = h.pageX - this.pointX, d = h.pageY - this.pointY, k = a.getTime(), f, g, i, j;
            if (this.pointX = h.pageX,
            this.pointY = h.pageY,
            this.distX += c,
            this.distY += d,
            i = b.abs(this.distX),
            j = b.abs(this.distY),
            k - this.endTime > 300 && i < 10 && j < 10)
                return;
            if (!this.directionLocked && !this.options.freeScroll && (i > j + this.options.directionLockThreshold ? this.directionLocked = 'h' : j >= i + this.options.directionLockThreshold ? this.directionLocked = 'v' : this.directionLocked = 'n'),
            this.directionLocked == 'h') {
                if (this.options.eventPassthrough == 'vertical')
                    e.preventDefault();
                else if (this.options.eventPassthrough == 'horizontal') {
                    this.initiated = !1;
                    return
                }
                d = 0
            } else if (this.directionLocked == 'v') {
                if (this.options.eventPassthrough == 'horizontal')
                    e.preventDefault();
                else if (this.options.eventPassthrough == 'vertical') {
                    this.initiated = !1;
                    return
                }
                c = 0
            }
            c = this.hasHorizontalScroll ? c : 0,
            d = this.hasVerticalScroll ? d : 0,
            f = this.x + c,
            g = this.y + d,
            (f > 0 || f < this.maxScrollX) && (f = this.options.bounce ? this.x + c / 3 : f > 0 ? 0 : this.maxScrollX),
            (g > 0 || g < this.maxScrollY) && (g = this.options.bounce ? this.y + d / 3 : g > 0 ? 0 : this.maxScrollY),
            this.directionX = c > 0 ? -1 : c < 0 ? 1 : 0,
            this.directionY = d > 0 ? -1 : d < 0 ? 1 : 0,
            this.moved || this._execEvent('scrollStart'),
            this.moved = !0,
            this._translate(f, g),
            k - this.startTime > 300 && (this.startTime = k,
            this.startX = this.x,
            this.startY = this.y)
        },
        _end: function(e) {
            var n, h, i, g, d, c, l, m, j, k, f;
            if (!this.enabled || a.eventType[e.type] !== this.initiated)
                return;
            if (this.options.preventDefault && !a.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault(),
            n = e.changedTouches ? e.changedTouches[0] : e,
            g = a.getTime() - this.startTime,
            d = b.round(this.x),
            c = b.round(this.y),
            l = b.abs(d - this.startX),
            m = b.abs(c - this.startY),
            j = 0,
            k = '',
            this.isInTransition = 0,
            this.initiated = 0,
            this.endTime = a.getTime(),
            this.resetPosition(this.options.bounceTime))
                return;
            if (this.scrollTo(d, c),
            !this.moved) {
                this.options.tap && a.tap(e, this.options.tap),
                this.options.click && a.click(e),
                this._execEvent('scrollCancel');
                return
            }
            if (this._events.flick && g < 200 && l < 100 && m < 100) {
                this._execEvent('flick');
                return
            }
            if (this.options.momentum && g < 300 && (h = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, g, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                destination: d,
                duration: 0
            },
            i = this.hasVerticalScroll ? a.momentum(this.y, this.startY, g, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                destination: c,
                duration: 0
            },
            d = h.destination,
            c = i.destination,
            j = b.max(h.duration, i.duration),
            this.isInTransition = 1),
            this.options.snap && (f = this._nearestSnap(d, c),
            this.currentPage = f,
            j = this.options.snapSpeed || b.max(b.max(b.min(b.abs(d - f.x), 1e3), b.min(b.abs(c - f.y), 1e3)), 300),
            d = f.x,
            c = f.y,
            this.directionX = 0,
            this.directionY = 0,
            k = this.options.bounceEasing),
            d != this.x || c != this.y) {
                (d > 0 || d < this.maxScrollX || c > 0 || c < this.maxScrollY) && (k = a.ease.quadratic),
                this.scrollTo(d, c, j, k);
                return
            }
            this._execEvent('scrollEnd')
        },
        _resize: function() {
            var a = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function() {
                a.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(c) {
            var a = this.x
              , b = this.y;
            return !(c = c || 0,
            !this.hasHorizontalScroll || this.x > 0 ? a = 0 : this.x < this.maxScrollX && (a = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? b = 0 : this.y < this.maxScrollY && (b = this.maxScrollY),
            a == this.x && b == this.y) && (this.scrollTo(a, b, c, this.options.bounceEasing),
            !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            var b = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0,
            this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0,
            this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = a.offset(this.wrapper),
            this._execEvent('refresh'),
            this.resetPosition()
        },
        on: function(a, b) {
            this._events[a] || (this._events[a] = []),
            this._events[a].push(b)
        },
        off: function(a, c) {
            if (!this._events[a])
                return;
            var b = this._events[a].indexOf(c);
            b > -1 && this._events[a].splice(b, 1)
        },
        _execEvent: function(a) {
            if (!this._events[a])
                return;
            var b = 0
              , c = this._events[a].length;
            if (!c)
                return;
            for (; b < c; b++)
                this._events[a][b].apply(this, [].slice.call(arguments, 1))
        },
        scrollBy: function(a, b, c, d) {
            a = this.x + a,
            b = this.y + b,
            c = c || 0,
            this.scrollTo(a, b, c, d)
        },
        scrollTo: function(d, e, c, b) {
            b = b || a.ease.circular,
            this.isInTransition = this.options.useTransition && c > 0,
            !c || this.options.useTransition && b.style ? (this._transitionTimingFunction(b.style),
            this._transitionTime(c),
            this._translate(d, e)) : this._animate(d, e, c, b.fn)
        },
        scrollToElement: function(d, e, f, g, h) {
            if (d = d.nodeType ? d : this.scroller.querySelector(d),
            !d)
                return;
            var c = a.offset(d);
            c.left -= this.wrapperOffset.left,
            c.top -= this.wrapperOffset.top,
            f === !0 && (f = b.round(d.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
            g === !0 && (g = b.round(d.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
            c.left -= f || 0,
            c.top -= g || 0,
            c.left = c.left > 0 ? 0 : c.left < this.maxScrollX ? this.maxScrollX : c.left,
            c.top = c.top > 0 ? 0 : c.top < this.maxScrollY ? this.maxScrollY : c.top,
            e = e === void 0 || e === null || e === 'auto' ? b.max(b.abs(this.x - c.left), b.abs(this.y - c.top)) : e,
            this.scrollTo(c.left, c.top, e, h)
        },
        _transitionTime: function(b) {
            if (b = b || 0,
            this.scrollerStyle[a.style.transitionDuration] = b + 'ms',
            !b && a.isBadAndroid && (this.scrollerStyle[a.style.transitionDuration] = '0.001s'),
            this.indicators)
                for (var c = this.indicators.length; c--; )
                    this.indicators[c].transitionTime(b)
        },
        _transitionTimingFunction: function(b) {
            if (this.scrollerStyle[a.style.transitionTimingFunction] = b,
            this.indicators)
                for (var c = this.indicators.length; c--; )
                    this.indicators[c].transitionTimingFunction(b)
        },
        _translate: function(c, d) {
            if (this.options.useTransform ? this.scrollerStyle[a.style.transform] = 'translate(' + c + 'px,' + d + 'px)' + this.translateZ : (c = b.round(c),
            d = b.round(d),
            this.scrollerStyle.left = c + 'px',
            this.scrollerStyle.top = d + 'px'),
            this.x = c,
            this.y = d,
            this.indicators)
                for (var e = this.indicators.length; e--; )
                    this.indicators[e].updatePosition()
        },
        _initEvents: function(e) {
            var b = e ? a.removeEvent : a.addEvent
              , d = this.options.bindToWrapper ? this.wrapper : c;
            b(c, 'orientationchange', this),
            b(c, 'resize', this),
            this.options.click && b(this.wrapper, 'click', this, !0),
            this.options.disableMouse || (b(this.wrapper, 'mousedown', this),
            b(d, 'mousemove', this),
            b(d, 'mousecancel', this),
            b(d, 'mouseup', this)),
            a.hasPointer && !this.options.disablePointer && (b(this.wrapper, a.prefixPointerEvent('pointerdown'), this),
            b(d, a.prefixPointerEvent('pointermove'), this),
            b(d, a.prefixPointerEvent('pointercancel'), this),
            b(d, a.prefixPointerEvent('pointerup'), this)),
            a.hasTouch && !this.options.disableTouch && (b(this.wrapper, 'touchstart', this),
            b(d, 'touchmove', this),
            b(d, 'touchcancel', this),
            b(d, 'touchend', this)),
            b(this.scroller, 'transitionend', this),
            b(this.scroller, 'webkitTransitionEnd', this),
            b(this.scroller, 'oTransitionEnd', this),
            b(this.scroller, 'MSTransitionEnd', this)
        },
        getComputedPosition: function() {
            var b = c.getComputedStyle(this.scroller, null), d, e;
            return this.options.useTransform ? (b = b[a.style.transform].split(')')[0].split(', '),
            d = +(b[12] || b[4]),
            e = +(b[13] || b[5])) : (d = +b.left.replace(/[^-\d.]/g, ''),
            e = +b.top.replace(/[^-\d.]/g, '')),
            {
                x: d,
                y: e
            }
        },
        _initIndicators: function() {
            var d = this.options.interactiveScrollbars, e = typeof this.options.scrollbars != 'string', b = [], h = this, c, i;
            this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (c = {
                el: f('v', d, this.options.scrollbars),
                interactive: d,
                defaultScrollbars: !0,
                customStyle: e,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            },
            this.wrapper.appendChild(c.el),
            b.push(c)),
            this.options.scrollX && (c = {
                el: f('h', d, this.options.scrollbars),
                interactive: d,
                defaultScrollbars: !0,
                customStyle: e,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            },
            this.wrapper.appendChild(c.el),
            b.push(c))),
            this.options.indicators && (b = b.concat(this.options.indicators));
            for (i = b.length; i--; )
                this.indicators.push(new g(this,b[i]));
            function a(b) {
                for (var a = h.indicators.length; a--; )
                    b.call(h.indicators[a])
            }
            this.options.fadeScrollbars && (this.on('scrollEnd', function() {
                a(function() {
                    this.fade()
                })
            }),
            this.on('scrollCancel', function() {
                a(function() {
                    this.fade()
                })
            }),
            this.on('scrollStart', function() {
                a(function() {
                    this.fade(1)
                })
            }),
            this.on('beforeScrollStart', function() {
                a(function() {
                    this.fade(1, !0)
                })
            })),
            this.on('refresh', function() {
                a(function() {
                    this.refresh()
                })
            }),
            this.on('destroy', function() {
                a(function() {
                    this.destroy()
                }),
                delete this.indicators
            })
        },
        _initWheel: function() {
            a.addEvent(this.wrapper, 'wheel', this),
            a.addEvent(this.wrapper, 'mousewheel', this),
            a.addEvent(this.wrapper, 'DOMMouseScroll', this),
            this.on('destroy', function() {
                a.removeEvent(this.wrapper, 'wheel', this),
                a.removeEvent(this.wrapper, 'mousewheel', this),
                a.removeEvent(this.wrapper, 'DOMMouseScroll', this)
            })
        },
        _wheel: function(a) {
            if (!this.enabled)
                return;
            a.preventDefault(),
            a.stopPropagation();
            var d, c, e, f, g = this;
            if (this.wheelTimeout === void 0 && g._execEvent('scrollStart'),
            clearTimeout(this.wheelTimeout),
            this.wheelTimeout = setTimeout(function() {
                g._execEvent('scrollEnd'),
                g.wheelTimeout = void 0
            }, 400),
            'deltaX'in a)
                a.deltaMode === 1 ? (d = -a.deltaX * this.options.mouseWheelSpeed,
                c = -a.deltaY * this.options.mouseWheelSpeed) : (d = -a.deltaX,
                c = -a.deltaY);
            else if ('wheelDeltaX'in a)
                d = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                c = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
            else if ('wheelDelta'in a)
                d = c = a.wheelDelta / 120 * this.options.mouseWheelSpeed;
            else if ('detail'in a)
                d = c = -a.detail / 3 * this.options.mouseWheelSpeed;
            else
                return;
            if (d *= this.options.invertWheelDirection,
            c *= this.options.invertWheelDirection,
            this.hasVerticalScroll || (d = c,
            c = 0),
            this.options.snap) {
                e = this.currentPage.pageX,
                f = this.currentPage.pageY,
                d > 0 ? e-- : d < 0 && e++,
                c > 0 ? f-- : c < 0 && f++,
                this.goToPage(e, f);
                return
            }
            e = this.x + b.round(this.hasHorizontalScroll ? d : 0),
            f = this.y + b.round(this.hasVerticalScroll ? c : 0),
            e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX),
            f > 0 ? f = 0 : f < this.maxScrollY && (f = this.maxScrollY),
            this.scrollTo(e, f, 0)
        },
        _initSnap: function() {
            this.currentPage = {},
            typeof this.options.snap == 'string' && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on('refresh', function() {
                var a = 0, g, f = 0, j, i, h, e = 0, d, k = this.options.snapStepX || this.wrapperWidth, l = this.options.snapStepY || this.wrapperHeight, c;
                if (this.pages = [],
                !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight)
                    return;
                if (this.options.snap === !0)
                    for (i = b.round(k / 2),
                    h = b.round(l / 2); e > -this.scrollerWidth; ) {
                        for (this.pages[a] = [],
                        g = 0,
                        d = 0; d > -this.scrollerHeight; )
                            this.pages[a][g] = {
                                x: b.max(e, this.maxScrollX),
                                y: b.max(d, this.maxScrollY),
                                width: k,
                                height: l,
                                cx: e - i,
                                cy: d - h
                            },
                            d -= l,
                            g++;
                        e -= k,
                        a++
                    }
                else
                    for (c = this.options.snap,
                    g = c.length,
                    j = -1; a < g; a++)
                        (a === 0 || c[a].offsetLeft <= c[a - 1].offsetLeft) && (f = 0,
                        j++),
                        this.pages[f] || (this.pages[f] = []),
                        e = b.max(-c[a].offsetLeft, this.maxScrollX),
                        d = b.max(-c[a].offsetTop, this.maxScrollY),
                        i = e - b.round(c[a].offsetWidth / 2),
                        h = d - b.round(c[a].offsetHeight / 2),
                        this.pages[f][j] = {
                            x: e,
                            y: d,
                            width: c[a].offsetWidth,
                            height: c[a].offsetHeight,
                            cx: i,
                            cy: h
                        },
                        e > this.maxScrollX && f++;
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold,
                this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = b.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold),
                this.snapThresholdY = b.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
            }),
            this.on('flick', function() {
                var a = this.options.snapSpeed || b.max(b.max(b.min(b.abs(this.x - this.startX), 1e3), b.min(b.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a)
            })
        },
        _nearestSnap: function(d, e) {
            if (!this.pages.length)
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
            var a = 0
              , f = this.pages.length
              , c = 0;
            if (b.abs(d - this.absStartX) < this.snapThresholdX && b.abs(e - this.absStartY) < this.snapThresholdY)
                return this.currentPage;
            for (d > 0 ? d = 0 : d < this.maxScrollX && (d = this.maxScrollX),
            e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); a < f; a++)
                if (d >= this.pages[a][0].cx) {
                    d = this.pages[a][0].x;
                    break
                }
            for (f = this.pages[a].length; c < f; c++)
                if (e >= this.pages[0][c].cy) {
                    e = this.pages[0][c].y;
                    break
                }
            return a == this.currentPage.pageX && (a += this.directionX,
            a < 0 ? a = 0 : a >= this.pages.length && (a = this.pages.length - 1),
            d = this.pages[a][0].x),
            c == this.currentPage.pageY && (c += this.directionY,
            c < 0 ? c = 0 : c >= this.pages[0].length && (c = this.pages[0].length - 1),
            e = this.pages[0][c].y),
            {
                x: d,
                y: e,
                pageX: a,
                pageY: c
            }
        },
        goToPage: function(a, c, d, e) {
            e = e || this.options.bounceEasing,
            a >= this.pages.length ? a = this.pages.length - 1 : a < 0 && (a = 0),
            c >= this.pages[a].length ? c = this.pages[a].length - 1 : c < 0 && (c = 0);
            var f = this.pages[a][c].x
              , g = this.pages[a][c].y;
            d = d === void 0 ? this.options.snapSpeed || b.max(b.max(b.min(b.abs(f - this.x), 1e3), b.min(b.abs(g - this.y), 1e3)), 300) : d,
            this.currentPage = {
                x: f,
                y: g,
                pageX: a,
                pageY: c
            },
            this.scrollTo(f, g, d, e)
        },
        next: function(c, d) {
            var a = this.currentPage.pageX
              , b = this.currentPage.pageY;
            a++,
            a >= this.pages.length && this.hasVerticalScroll && (a = 0,
            b++),
            this.goToPage(a, b, c, d)
        },
        prev: function(c, d) {
            var a = this.currentPage.pageX
              , b = this.currentPage.pageY;
            a--,
            a < 0 && this.hasVerticalScroll && (a = 0,
            b--),
            this.goToPage(a, b, c, d)
        },
        _initKeys: function(e) {
            var d = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            }, b;
            if (typeof this.options.keyBindings == 'object') {
                for (b in this.options.keyBindings)
                    typeof this.options.keyBindings[b] == 'string' && (this.options.keyBindings[b] = this.options.keyBindings[b].toUpperCase().charCodeAt(0))
            } else
                this.options.keyBindings = {};
            for (b in d)
                this.options.keyBindings[b] = this.options.keyBindings[b] || d[b];
            a.addEvent(c, 'keydown', this),
            this.on('destroy', function() {
                a.removeEvent(c, 'keydown', this)
            })
        },
        _key: function(h) {
            if (!this.enabled)
                return;
            var c = this.options.snap, d = c ? this.currentPage.pageX : this.x, e = c ? this.currentPage.pageY : this.y, g = a.getTime(), i = this.keyTime || 0, j = .25, f;
            switch (this.options.useTransition && this.isInTransition && (f = this.getComputedPosition(),
            this._translate(b.round(f.x), b.round(f.y)),
            this.isInTransition = !1),
            this.keyAcceleration = g - i < 200 ? b.min(this.keyAcceleration + j, 50) : 0,
            h.keyCode) {
            case this.options.keyBindings.pageUp:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? d += c ? 1 : this.wrapperWidth : e += c ? 1 : this.wrapperHeight;
                break;
            case this.options.keyBindings.pageDown:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? d -= c ? 1 : this.wrapperWidth : e -= c ? 1 : this.wrapperHeight;
                break;
            case this.options.keyBindings.end:
                d = c ? this.pages.length - 1 : this.maxScrollX,
                e = c ? this.pages[0].length - 1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                d = 0,
                e = 0;
                break;
            case this.options.keyBindings.left:
                d += c ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.up:
                e += c ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.right:
                d -= c ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.down:
                e -= c ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            default:
                return
            }
            if (c) {
                this.goToPage(d, e);
                return
            }
            d > 0 ? (d = 0,
            this.keyAcceleration = 0) : d < this.maxScrollX && (d = this.maxScrollX,
            this.keyAcceleration = 0),
            e > 0 ? (e = 0,
            this.keyAcceleration = 0) : e < this.maxScrollY && (e = this.maxScrollY,
            this.keyAcceleration = 0),
            this.scrollTo(d, e, 0),
            this.keyTime = g
        },
        _animate: function(c, d, e, l) {
            var b = this
              , g = this.x
              , i = this.y
              , j = a.getTime()
              , k = j + e;
            function f() {
                var m = a.getTime(), o, p, n;
                if (m >= k) {
                    b.isAnimating = !1,
                    b._translate(c, d),
                    b.resetPosition(b.options.bounceTime) || b._execEvent('scrollEnd');
                    return
                }
                m = (m - j) / e,
                n = l(m),
                o = (c - g) * n + g,
                p = (d - i) * n + i,
                b._translate(o, p),
                b.isAnimating && h(f)
            }
            this.isAnimating = !0,
            f()
        },
        handleEvent: function(a) {
            switch (a.type) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(a);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(a);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(a);
                break;
            case 'orientationchange':
            case 'resize':
                this._resize();
                break;
            case 'transitionend':
            case 'webkitTransitionEnd':
            case 'oTransitionEnd':
            case 'MSTransitionEnd':
                this._transitionEnd(a);
                break;
            case 'wheel':
            case 'DOMMouseScroll':
            case 'mousewheel':
                this._wheel(a);
                break;
            case 'keydown':
                this._key(a);
                break;
            case 'click':
                a._constructed || (a.preventDefault(),
                a.stopPropagation());
                break
            }
        }
    };
    function f(e, f, c) {
        var a = d.createElement('div')
          , b = d.createElement('div');
        return c === !0 && (a.style.cssText = 'position:absolute;z-index:9999',
        b.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px'),
        b.className = 'iScrollIndicator',
        e == 'h' ? (c === !0 && (a.style.cssText += ';height:7px;left:2px;right:2px;bottom:0',
        b.style.height = '100%'),
        a.className = 'iScrollHorizontalScrollbar') : (c === !0 && (a.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px',
        b.style.width = '100%'),
        a.className = 'iScrollVerticalScrollbar'),
        a.style.cssText += ';overflow:hidden',
        f || (a.style.pointerEvents = 'none'),
        a.appendChild(b),
        a
    }
    function g(f, b) {
        this.wrapper = typeof b.el == 'string' ? d.querySelector(b.el) : b.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = f,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var e in b)
            this.options[e] = b[e];
        this.sizeRatioX = 1,
        this.sizeRatioY = 1,
        this.maxPosX = 0,
        this.maxPosY = 0,
        this.options.interactive && (this.options.disableTouch || (a.addEvent(this.indicator, 'touchstart', this),
        a.addEvent(c, 'touchend', this)),
        this.options.disablePointer || (a.addEvent(this.indicator, a.prefixPointerEvent('pointerdown'), this),
        a.addEvent(c, a.prefixPointerEvent('pointerup'), this)),
        this.options.disableMouse || (a.addEvent(this.indicator, 'mousedown', this),
        a.addEvent(c, 'mouseup', this))),
        this.options.fade && (this.wrapperStyle[a.style.transform] = this.scroller.translateZ,
        this.wrapperStyle[a.style.transitionDuration] = a.isBadAndroid ? '0.001s' : '0ms',
        this.wrapperStyle.opacity = '0')
    }
    g.prototype = {
        handleEvent: function(a) {
            switch (a.type) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(a);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(a);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(a);
                break
            }
        },
        destroy: function() {
            this.options.interactive && (a.removeEvent(this.indicator, 'touchstart', this),
            a.removeEvent(this.indicator, a.prefixPointerEvent('pointerdown'), this),
            a.removeEvent(this.indicator, 'mousedown', this),
            a.removeEvent(c, 'touchmove', this),
            a.removeEvent(c, a.prefixPointerEvent('pointermove'), this),
            a.removeEvent(c, 'mousemove', this),
            a.removeEvent(c, 'touchend', this),
            a.removeEvent(c, a.prefixPointerEvent('pointerup'), this),
            a.removeEvent(c, 'mouseup', this)),
            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(b) {
            var d = b.touches ? b.touches[0] : b;
            b.preventDefault(),
            b.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = d.pageX,
            this.lastPointY = d.pageY,
            this.startTime = a.getTime(),
            this.options.disableTouch || a.addEvent(c, 'touchmove', this),
            this.options.disablePointer || a.addEvent(c, a.prefixPointerEvent('pointermove'), this),
            this.options.disableMouse || a.addEvent(c, 'mousemove', this),
            this.scroller._execEvent('beforeScrollStart')
        },
        _move: function(b) {
            var c = b.touches ? b.touches[0] : b, d, e, f, g, h = a.getTime();
            this.moved || this.scroller._execEvent('scrollStart'),
            this.moved = !0,
            d = c.pageX - this.lastPointX,
            this.lastPointX = c.pageX,
            e = c.pageY - this.lastPointY,
            this.lastPointY = c.pageY,
            f = this.x + d,
            g = this.y + e,
            this._pos(f, g),
            b.preventDefault(),
            b.stopPropagation()
        },
        _end: function(e) {
            var d, f;
            if (!this.initiated)
                return;
            this.initiated = !1,
            e.preventDefault(),
            e.stopPropagation(),
            a.removeEvent(c, 'touchmove', this),
            a.removeEvent(c, a.prefixPointerEvent('pointermove'), this),
            a.removeEvent(c, 'mousemove', this),
            this.scroller.options.snap && (d = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
            f = this.options.snapSpeed || b.max(b.max(b.min(b.abs(this.scroller.x - d.x), 1e3), b.min(b.abs(this.scroller.y - d.y), 1e3)), 300),
            (this.scroller.x != d.x || this.scroller.y != d.y) && (this.scroller.directionX = 0,
            this.scroller.directionY = 0,
            this.scroller.currentPage = d,
            this.scroller.scrollTo(d.x, d.y, f, this.scroller.options.bounceEasing))),
            this.moved && this.scroller._execEvent('scrollEnd')
        },
        transitionTime: function(b) {
            b = b || 0,
            this.indicatorStyle[a.style.transitionDuration] = b + 'ms',
            !b && a.isBadAndroid && (this.indicatorStyle[a.style.transitionDuration] = '0.001s')
        },
        transitionTimingFunction: function(b) {
            this.indicatorStyle[a.style.transitionTimingFunction] = b
        },
        refresh: function() {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none' : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none' : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none',
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, 'iScrollBothScrollbars'),
            a.removeClass(this.wrapper, 'iScrollLoneScrollbar'),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = '8px' : this.wrapper.style.bottom = '8px')) : (a.removeClass(this.wrapper, 'iScrollBothScrollbars'),
            a.addClass(this.wrapper, 'iScrollLoneScrollbar'),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = '2px' : this.wrapper.style.bottom = '2px'));
            var c = this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
            this.options.resize ? (this.indicatorWidth = b.max(b.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
            this.indicatorStyle.width = this.indicatorWidth + 'px') : this.indicatorWidth = this.indicator.clientWidth,
            this.maxPosX = this.wrapperWidth - this.indicatorWidth,
            this.options.shrink == 'clip' ? (this.minBoundaryX = -this.indicatorWidth + 8,
            this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0,
            this.maxBoundaryX = this.maxPosX),
            this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight,
            this.options.resize ? (this.indicatorHeight = b.max(b.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
            this.indicatorStyle.height = this.indicatorHeight + 'px') : this.indicatorHeight = this.indicator.clientHeight,
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            this.options.shrink == 'clip' ? (this.minBoundaryY = -this.indicatorHeight + 8,
            this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0,
            this.maxBoundaryY = this.maxPosY),
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function() {
            var c = this.options.listenX && b.round(this.sizeRatioX * this.scroller.x) || 0
              , d = this.options.listenY && b.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (c < this.minBoundaryX ? (this.options.shrink == 'scale' && (this.width = b.max(this.indicatorWidth + c, 8),
            this.indicatorStyle.width = this.width + 'px'),
            c = this.minBoundaryX) : c > this.maxBoundaryX ? this.options.shrink == 'scale' ? (this.width = b.max(this.indicatorWidth - (c - this.maxPosX), 8),
            this.indicatorStyle.width = this.width + 'px',
            c = this.maxPosX + this.indicatorWidth - this.width) : c = this.maxBoundaryX : this.options.shrink == 'scale' && this.width != this.indicatorWidth && (this.width = this.indicatorWidth,
            this.indicatorStyle.width = this.width + 'px'),
            d < this.minBoundaryY ? (this.options.shrink == 'scale' && (this.height = b.max(this.indicatorHeight + d * 3, 8),
            this.indicatorStyle.height = this.height + 'px'),
            d = this.minBoundaryY) : d > this.maxBoundaryY ? this.options.shrink == 'scale' ? (this.height = b.max(this.indicatorHeight - (d - this.maxPosY) * 3, 8),
            this.indicatorStyle.height = this.height + 'px',
            d = this.maxPosY + this.indicatorHeight - this.height) : d = this.maxBoundaryY : this.options.shrink == 'scale' && this.height != this.indicatorHeight && (this.height = this.indicatorHeight,
            this.indicatorStyle.height = this.height + 'px')),
            this.x = c,
            this.y = d,
            this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = 'translate(' + c + 'px,' + d + 'px)' + this.scroller.translateZ : (this.indicatorStyle.left = c + 'px',
            this.indicatorStyle.top = d + 'px')
        },
        _pos: function(a, c) {
            a < 0 ? a = 0 : a > this.maxPosX && (a = this.maxPosX),
            c < 0 ? c = 0 : c > this.maxPosY && (c = this.maxPosY),
            a = this.options.listenX ? b.round(a / this.sizeRatioX) : this.scroller.x,
            c = this.options.listenY ? b.round(c / this.sizeRatioY) : this.scroller.y,
            this.scroller.scrollTo(a, c)
        },
        fade: function(b, c) {
            if (c && !this.visible)
                return;
            clearTimeout(this.fadeTimeout),
            this.fadeTimeout = null;
            var d = b ? 250 : 500
              , e = b ? 0 : 300;
            b = b ? '1' : '0',
            this.wrapperStyle[a.style.transitionDuration] = d + 'ms',
            this.fadeTimeout = setTimeout(function(a) {
                this.wrapperStyle.opacity = a,
                this.visible = +a
            }
            .bind(this, b), e)
        }
    },
    e.utils = a,
    typeof module != 'undefined' && module.exports ? module.exports = e : c.IScroll = e
}
)(window, document, Math);
(function(a, c, n, b) {
    var d = 'stellar'
      , l = {
        scrollProperty: 'scroll',
        positionProperty: 'position',
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function(a) {
            a.hide()
        },
        showElement: function(a) {
            a.show()
        }
    }
      , g = {
        scroll: {
            getLeft: function(a) {
                return a.scrollLeft()
            },
            setLeft: function(a, b) {
                a.scrollLeft(b)
            },
            getTop: function(a) {
                return a.scrollTop()
            },
            setTop: function(a, b) {
                a.scrollTop(b)
            }
        },
        position: {
            getLeft: function(a) {
                return parseInt(a.css('left'), 10) * -1
            },
            getTop: function(a) {
                return parseInt(a.css('top'), 10) * -1
            }
        },
        margin: {
            getLeft: function(a) {
                return parseInt(a.css('margin-left'), 10) * -1
            },
            getTop: function(a) {
                return parseInt(a.css('margin-top'), 10) * -1
            }
        },
        transform: {
            getLeft: function(b) {
                var a = getComputedStyle(b[0])[h];
                return a !== 'none' ? parseInt(a.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
            },
            getTop: function(b) {
                var a = getComputedStyle(b[0])[h];
                return a !== 'none' ? parseInt(a.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
            }
        }
    }
      , j = {
        position: {
            setLeft: function(a, b) {
                a.css('left', b)
            },
            setTop: function(a, b) {
                a.css('top', b)
            }
        },
        transform: {
            setPosition: function(a, b, c, d, e) {
                a[0].style[h] = 'translate3d(' + (b - c) + 'px, ' + (d - e) + 'px, 0)'
            }
        }
    }
      , o = function() {
        var e = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, c = a('script')[0].style, b = '', d;
        for (d in c)
            if (e.test(d)) {
                b = d.match(e)[0];
                break
            }
        return 'WebkitOpacity'in c && (b = 'Webkit'),
        'KhtmlOpacity'in c && (b = 'Khtml'),
        function(a) {
            return b + (b.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
        }
    }()
      , h = o('transform')
      , k = a('<div />', {
        style: 'background:#fff'
    }).css('background-position-x') !== b
      , f = k ? function(a, b, c) {
        a.css({
            'background-position-x': b,
            'background-position-y': c
        })
    }
    : function(a, b, c) {
        a.css('background-position', b + ' ' + c)
    }
      , m = k ? function(a) {
        return [a.css('background-position-x'), a.css('background-position-y')]
    }
    : function(a) {
        return a.css('background-position').split(' ')
    }
      , i = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || c.msRequestAnimationFrame || function(a) {
        setTimeout(a, 1e3 / 60)
    }
    ;
    function e(b, c) {
        this.element = b,
        this.options = a.extend({}, l, c),
        this._defaults = l,
        this._name = d,
        this.init()
    }
    e.prototype = {
        init: function() {
            this.options.name = d + '_' + Math.floor(Math.random() * 1e9),
            this._defineElements(),
            this._defineGetters(),
            this._defineSetters(),
            this._handleWindowLoadAndResize(),
            this._detectViewport(),
            this.refresh({
                firstLoad: !0
            }),
            this.options.scrollProperty === 'scroll' ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === n.body && (this.element = c),
            this.$scrollElement = a(this.element),
            this.$element = this.element === c ? a('body') : this.$scrollElement,
            this.$viewportElement = this.options.viewportElement !== b ? a(this.options.viewportElement) : this.$scrollElement[0] === c || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var a = this
              , b = g[a.options.scrollProperty];
            this._getScrollLeft = function() {
                return b.getLeft(a.$scrollElement)
            }
            ,
            this._getScrollTop = function() {
                return b.getTop(a.$scrollElement)
            }
        },
        _defineSetters: function() {
            var b = this
              , d = g[b.options.scrollProperty]
              , c = j[b.options.positionProperty]
              , e = d.setLeft
              , f = d.setTop;
            this._setScrollLeft = typeof e == 'function' ? function(a) {
                e(b.$scrollElement, a)
            }
            : a.noop,
            this._setScrollTop = typeof f == 'function' ? function(a) {
                f(b.$scrollElement, a)
            }
            : a.noop,
            this._setPosition = c.setPosition || function(a, d, e, f, g) {
                b.options.horizontalScrolling && c.setLeft(a, d, e),
                b.options.verticalScrolling && c.setTop(a, f, g)
            }
        },
        _handleWindowLoadAndResize: function() {
            var b = this
              , d = a(c);
            b.options.responsive && d.bind('load.' + this.name, function() {
                b.refresh()
            }),
            d.bind('resize.' + this.name, function() {
                b._detectViewport(),
                b.options.responsive && b.refresh()
            })
        },
        refresh: function(d) {
            var b = this
              , e = b._getScrollLeft()
              , f = b._getScrollTop();
            (!d || !d.firstLoad) && this._reset(),
            this._setScrollLeft(0),
            this._setScrollTop(0),
            this._setOffsets(),
            this._findParticles(),
            this._findBackgrounds(),
            d && d.firstLoad && /WebKit/.test(navigator.userAgent) && a(c).load(function() {
                var a = b._getScrollLeft()
                  , c = b._getScrollTop();
                b._setScrollLeft(a + 1),
                b._setScrollTop(c + 1),
                b._setScrollLeft(a),
                b._setScrollTop(c)
            }),
            this._setScrollLeft(e),
            this._setScrollTop(f)
        },
        _detectViewport: function() {
            var a = this.$viewportElement.offset()
              , c = a !== null && a !== b;
            this.viewportWidth = this.$viewportElement.width(),
            this.viewportHeight = this.$viewportElement.height(),
            this.viewportOffsetTop = c ? a.top : 0,
            this.viewportOffsetLeft = c ? a.left : 0
        },
        _findParticles: function() {
            var c = this, e = this._getScrollLeft(), f = this._getScrollTop(), d;
            if (this.particles !== b)
                for (d = this.particles.length - 1; d >= 0; d--)
                    this.particles[d].$element.data('stellar-elementIsActive', b);
            if (this.particles = [],
            !this.options.parallaxElements)
                return;
            this.$element.find('[data-stellar-ratio]').each(function(r) {
                var d = a(this), l, g, h, i, j, k, e, m, n, o = 0, p = 0, q = 0, f = 0;
                if (d.data('stellar-elementIsActive')) {
                    if (d.data('stellar-elementIsActive') !== this)
                        return
                } else
                    d.data('stellar-elementIsActive', this);
                c.options.showElement(d),
                d.data('stellar-startingLeft') ? (d.css('left', d.data('stellar-startingLeft')),
                d.css('top', d.data('stellar-startingTop'))) : (d.data('stellar-startingLeft', d.css('left')),
                d.data('stellar-startingTop', d.css('top'))),
                h = d.position().left,
                i = d.position().top,
                j = d.css('margin-left') === 'auto' ? 0 : parseInt(d.css('margin-left'), 10),
                k = d.css('margin-top') === 'auto' ? 0 : parseInt(d.css('margin-top'), 10),
                m = d.offset().left - j,
                n = d.offset().top - k,
                d.parents().each(function() {
                    var b = a(this);
                    if (b.data('stellar-offset-parent') === !0)
                        return o = q,
                        p = f,
                        e = b,
                        !1;
                    q += b.position().left,
                    f += b.position().top
                }),
                l = d.data('stellar-horizontal-offset') !== b ? d.data('stellar-horizontal-offset') : e !== b && e.data('stellar-horizontal-offset') !== b ? e.data('stellar-horizontal-offset') : c.horizontalOffset,
                g = d.data('stellar-vertical-offset') !== b ? d.data('stellar-vertical-offset') : e !== b && e.data('stellar-vertical-offset') !== b ? e.data('stellar-vertical-offset') : c.verticalOffset,
                c.particles.push({
                    $element: d,
                    $offsetParent: e,
                    isFixed: d.css('position') === 'fixed',
                    horizontalOffset: l,
                    verticalOffset: g,
                    startingPositionLeft: h,
                    startingPositionTop: i,
                    startingOffsetLeft: m,
                    startingOffsetTop: n,
                    parentOffsetLeft: o,
                    parentOffsetTop: p,
                    stellarRatio: d.data('stellar-ratio') !== b ? d.data('stellar-ratio') : 1,
                    width: d.outerWidth(!0),
                    height: d.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var d = this, e = this._getScrollLeft(), g = this._getScrollTop(), c;
            if (this.backgrounds = [],
            !this.options.parallaxBackgrounds)
                return;
            c = this.$element.find('[data-stellar-background-ratio]'),
            this.$element.data('stellar-background-ratio') && (c = c.add(this.$element)),
            c.each(function() {
                var c = a(this), h = m(c), r, o, v, u, n, j, p, q, i, s = 0, l = 0, k = 0, t = 0;
                if (c.data('stellar-backgroundIsActive')) {
                    if (c.data('stellar-backgroundIsActive') !== this)
                        return
                } else
                    c.data('stellar-backgroundIsActive', this);
                c.data('stellar-backgroundStartingLeft') ? f(c, c.data('stellar-backgroundStartingLeft'), c.data('stellar-backgroundStartingTop')) : (c.data('stellar-backgroundStartingLeft', h[0]),
                c.data('stellar-backgroundStartingTop', h[1])),
                n = c.css('margin-left') === 'auto' ? 0 : parseInt(c.css('margin-left'), 10),
                j = c.css('margin-top') === 'auto' ? 0 : parseInt(c.css('margin-top'), 10),
                p = c.offset().left - n - e,
                q = c.offset().top - j - g,
                c.parents().each(function() {
                    var b = a(this);
                    if (b.data('stellar-offset-parent') === !0)
                        return s = k,
                        l = t,
                        i = b,
                        !1;
                    k += b.position().left,
                    t += b.position().top
                }),
                r = c.data('stellar-horizontal-offset') !== b ? c.data('stellar-horizontal-offset') : i !== b && i.data('stellar-horizontal-offset') !== b ? i.data('stellar-horizontal-offset') : d.horizontalOffset,
                o = c.data('stellar-vertical-offset') !== b ? c.data('stellar-vertical-offset') : i !== b && i.data('stellar-vertical-offset') !== b ? i.data('stellar-vertical-offset') : d.verticalOffset,
                d.backgrounds.push({
                    $element: c,
                    $offsetParent: i,
                    isFixed: c.css('background-attachment') === 'fixed',
                    horizontalOffset: r,
                    verticalOffset: o,
                    startingValueLeft: h[0],
                    startingValueTop: h[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(h[0], 10)) ? 0 : parseInt(h[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(h[1], 10)) ? 0 : parseInt(h[1], 10),
                    startingPositionLeft: c.position().left,
                    startingPositionTop: c.position().top,
                    startingOffsetLeft: p,
                    startingOffsetTop: q,
                    parentOffsetLeft: s,
                    parentOffsetTop: l,
                    stellarRatio: c.data('stellar-background-ratio') === b ? 1 : c.data('stellar-background-ratio')
                })
            })
        },
        _reset: function() {
            var b, d, e, c, a;
            for (a = this.particles.length - 1; a >= 0; a--)
                b = this.particles[a],
                d = b.$element.data('stellar-startingLeft'),
                e = b.$element.data('stellar-startingTop'),
                this._setPosition(b.$element, d, d, e, e),
                this.options.showElement(b.$element),
                b.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
            for (a = this.backgrounds.length - 1; a >= 0; a--)
                c = this.backgrounds[a],
                c.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null),
                f(c.$element, c.startingValueLeft, c.startingValueTop)
        },
        destroy: function() {
            this._reset(),
            this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name),
            this._animationLoop = a.noop,
            a(c).unbind('load.' + this.name).unbind('resize.' + this.name)
        },
        _setOffsets: function() {
            var b = this
              , d = a(c);
            d.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name),
            typeof this.options.horizontalOffset == 'function' ? (this.horizontalOffset = this.options.horizontalOffset(),
            d.bind('resize.horizontal-' + this.name, function() {
                b.horizontalOffset = b.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset,
            typeof this.options.verticalOffset == 'function' ? (this.verticalOffset = this.options.verticalOffset(),
            d.bind('resize.vertical-' + this.name, function() {
                b.verticalOffset = b.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var g = this._getScrollLeft(), e = this._getScrollTop(), q, p, a, d, b, n, o, l = !0, m = !0, k, h, i, j, c;
            if (this.currentScrollLeft === g && this.currentScrollTop === e && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight)
                return;
            this.currentScrollLeft = g,
            this.currentScrollTop = e,
            this.currentWidth = this.viewportWidth,
            this.currentHeight = this.viewportHeight;
            for (c = this.particles.length - 1; c >= 0; c--)
                a = this.particles[c],
                d = a.isFixed ? 1 : 0,
                this.options.horizontalScrolling ? (k = (g + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + d - 1) + a.startingPositionLeft,
                i = k - a.startingPositionLeft + a.startingOffsetLeft) : (k = a.startingPositionLeft,
                i = a.startingOffsetLeft),
                this.options.verticalScrolling ? (h = (e + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + d - 1) + a.startingPositionTop,
                j = h - a.startingPositionTop + a.startingOffsetTop) : (h = a.startingPositionTop,
                j = a.startingOffsetTop),
                this.options.hideDistantElements && (m = !this.options.horizontalScrolling || i + a.width > (a.isFixed ? 0 : g) && i < (a.isFixed ? 0 : g) + this.viewportWidth + this.viewportOffsetLeft,
                l = !this.options.verticalScrolling || j + a.height > (a.isFixed ? 0 : e) && j < (a.isFixed ? 0 : e) + this.viewportHeight + this.viewportOffsetTop),
                m && l ? (a.isHidden && (this.options.showElement(a.$element),
                a.isHidden = !1),
                this._setPosition(a.$element, k, a.startingPositionLeft, h, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element),
                a.isHidden = !0);
            for (c = this.backgrounds.length - 1; c >= 0; c--)
                b = this.backgrounds[c],
                d = b.isFixed ? 0 : 1,
                n = this.options.horizontalScrolling ? (g + b.horizontalOffset - this.viewportOffsetLeft - b.startingOffsetLeft + b.parentOffsetLeft - b.startingBackgroundPositionLeft) * (d - b.stellarRatio) + 'px' : b.startingValueLeft,
                o = this.options.verticalScrolling ? (e + b.verticalOffset - this.viewportOffsetTop - b.startingOffsetTop + b.parentOffsetTop - b.startingBackgroundPositionTop) * (d - b.stellarRatio) + 'px' : b.startingValueTop,
                f(b.$element, n, o)
        },
        _handleScrollEvent: function() {
            var c = this
              , a = !1
              , d = function() {
                c._repositionElements(),
                a = !1
            }
              , b = function() {
                a || (i(d),
                a = !0)
            };
            this.$scrollElement.bind('scroll.' + this.name, b),
            b()
        },
        _startAnimationLoop: function() {
            var a = this;
            this._animationLoop = function() {
                i(a._animationLoop),
                a._repositionElements()
            }
            ,
            this._animationLoop()
        }
    },
    a.fn[d] = function(c) {
        var f = arguments;
        if (c === b || typeof c == 'object')
            return this.each(function() {
                a.data(this, 'plugin_' + d) || a.data(this, 'plugin_' + d, new e(this,c))
            });
        if (typeof c == 'string' && c[0] !== '_' && c !== 'init')
            return this.each(function() {
                var b = a.data(this, 'plugin_' + d);
                b instanceof e && typeof b[c] == 'function' && b[c].apply(b, Array.prototype.slice.call(f, 1)),
                c === 'destroy' && a.data(this, 'plugin_' + d, null)
            })
    }
    ,
    a[d] = function(d) {
        var b = a(c);
        return b.stellar.apply(b, Array.prototype.slice.call(arguments, 0))
    }
    ,
    a[d].scrollProperty = g,
    a[d].positionProperty = j,
    c.Stellar = e
}
)(jQuery, this, document);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            a.extend(e, e.initials),
            e.activeBreakpoint = null,
            e.animType = null,
            e.animProp = null,
            e.breakpoints = [],
            e.breakpointSettings = [],
            e.cssTransitions = !1,
            e.focussed = !1,
            e.interrupted = !1,
            e.hidden = "hidden",
            e.paused = !0,
            e.positionProp = null,
            e.respondTo = null,
            e.rowCount = 1,
            e.shouldClick = !0,
            e.$slider = a(c),
            e.$slidesCache = null,
            e.transformType = null,
            e.transitionType = null,
            e.visibilityChange = "visibilitychange",
            e.windowWidth = 0,
            e.windowTimer = null,
            f = a(c).data("slick") || {},
            e.options = a.extend({}, e.defaults, d, f),
            e.currentSlide = e.options.initialSlide,
            e.originalSettings = e.options,
            "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden",
            e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden",
            e.visibilityChange = "webkitvisibilitychange"),
            e.autoPlay = a.proxy(e.autoPlay, e),
            e.autoPlayClear = a.proxy(e.autoPlayClear, e),
            e.autoPlayIterator = a.proxy(e.autoPlayIterator, e),
            e.changeSlide = a.proxy(e.changeSlide, e),
            e.clickHandler = a.proxy(e.clickHandler, e),
            e.selectHandler = a.proxy(e.selectHandler, e),
            e.setPosition = a.proxy(e.setPosition, e),
            e.swipeHandler = a.proxy(e.swipeHandler, e),
            e.dragHandler = a.proxy(e.dragHandler, e),
            e.keyHandler = a.proxy(e.keyHandler, e),
            e.instanceUid = b++,
            e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            e.registerBreakpoints(),
            e.init(!0)
        }
        var b = 0;
        return c
    }(),
    b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c,
            c = null;
        else if (0 > c || c >= e.slideCount)
            return !1;
        e.unload(),
        "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack),
        e.$slides = e.$slideTrack.children(this.options.slide),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.append(e.$slides),
        e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }),
        e.$slidesCache = e.$slides,
        e.reinit()
    }
    ,
    b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }
    ,
    b.prototype.animateSlide = function(b, c) {
        var d = {}
          , e = this;
        e.animateHeight(),
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
        a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a),
                e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)",
                e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)",
                e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(),
        b = Math.ceil(b),
        e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)",
        e.$slideTrack.css(d),
        c && setTimeout(function() {
            e.disableTransition(),
            c.call()
        }, e.options.speed))
    }
    ,
    b.prototype.getNavTarget = function() {
        var b = this
          , c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)),
        c
    }
    ,
    b.prototype.asNavFor = function(b) {
        var c = this
          , d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }
    ,
    b.prototype.applyTransition = function(a) {
        var b = this
          , c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase,
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(),
        a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }
    ,
    b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }
    ,
    b.prototype.autoPlayIterator = function() {
        var a = this
          , b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll,
        a.currentSlide - 1 === 0 && (a.direction = 1))),
        a.slideHandler(b))
    }
    ,
    b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"),
        b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"),
        b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
        b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"),
            d = a("<ul />").addClass(b.options.dotsClass),
            c = 0; c <= b.getDotCount(); c += 1)
                d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots),
            b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }),
        b.$slider.addClass("slick-slider"),
        b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
        b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        b.$slideTrack.css("opacity", 0),
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        b.options.draggable === !0 && b.$list.addClass("draggable")
    }
    ,
    b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(),
        g = a.$slider.children(),
        a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows,
            f = Math.ceil(g.length / h),
            b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)),
        d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints)
                d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f,
            "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b)),
            h = f) : (d.activeBreakpoint = f,
            "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b)),
            h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null,
            d.options = d.originalSettings,
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b),
            h = f),
            b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }
    ,
    b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this, e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(),
        e.is("li") || (e = e.closest("li")),
        h = d.slideCount % d.options.slidesToScroll !== 0,
        f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll,
        b.data.message) {
        case "previous":
            g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f,
            d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
            break;
        case "next":
            g = 0 === f ? d.options.slidesToScroll : f,
            d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
            break;
        case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c),
            e.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(),
        d = 0,
        a > c[c.length - 1])
            a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }
    ,
    b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
        b.$slider.off("focus.slick blur.slick"),
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.cleanUpSlideEvents(),
        b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }
    ,
    b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(),
        b.removeAttr("style"),
        a.$slider.empty().append(b))
    }
    ,
    b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(),
        a.stopPropagation(),
        a.preventDefault())
    }
    ,
    b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(),
        c.touchObject = {},
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }),
        c.$slideTrack.children(this.options.slide).detach(),
        c.$slideTrack.detach(),
        c.$list.detach(),
        c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.$slider.removeClass("slick-dotted"),
        c.unslicked = !0,
        b || c.$slider.trigger("destroy", [c])
    }
    ,
    b.prototype.disableTransition = function(a) {
        var b = this
          , c = {};
        c[b.transitionType] = "",
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }),
        c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a),
        c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }),
        b && setTimeout(function() {
            c.disableTransition(a),
            b.call()
        }, c.options.speed))
    }
    ,
    b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a),
        b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }
    ,
    b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides,
        b.unload(),
        b.$slideTrack.children(this.options.slide).detach(),
        b.$slidesCache.filter(a).appendTo(b.$slideTrack),
        b.reinit())
    }
    ,
    b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"),
                b.autoPlay())
            }, 0)
        })
    }
    ,
    b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }
    ,
    b.prototype.getDotCount = function() {
        var a = this
          , b = 0
          , c = 0
          , d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0)
            d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else
            d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }
    ,
    b.prototype.getLeft = function(a) {
        var c, d, f, b = this, e = 0;
        return b.slideOffset = 0,
        d = b.$slides.first().outerHeight(!0),
        b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1,
        e = d * b.options.slidesToShow * -1),
        b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1,
        e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1,
        e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth,
        e = (a + b.options.slidesToShow - b.slideCount) * d),
        b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0,
        e = 0),
        b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0,
        b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)),
        c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e,
        b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow),
        c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0,
        b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1),
        c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0,
        c += (b.$list.width() - f.outerWidth()) / 2)),
        c
    }
    ,
    b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }
    ,
    b.prototype.getNavigableIndexes = function() {
        var e, a = this, b = 0, c = 0, d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll,
        c = -1 * a.options.slidesToScroll,
        e = 2 * a.slideCount); e > b; )
            d.push(b),
            b = c + a.options.slidesToScroll,
            c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }
    ,
    b.prototype.getSlick = function() {
        return this
    }
    ,
    b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0,
        b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f,
            !1) : void 0
        }),
        c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }
    ,
    b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }
    ,
    b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots(),
        c.checkResponsive(!0),
        c.focusHandler()),
        b && c.$slider.trigger("init", [c]),
        c.options.accessibility === !0 && c.initADA(),
        c.options.autoplay && (c.paused = !1,
        c.autoPlay())
    }
    ,
    b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }),
        null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        b.activateADA()
    }
    ,
    b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide),
        a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }
    ,
    b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide),
        b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }
    ,
    b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }
    ,
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(),
        b.initDotEvents(),
        b.initSlideEvents(),
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler),
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler),
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
        a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(),
        a.$nextArrow.show()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }
    ,
    b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }
    ,
    b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this)
                  , d = a(this).attr("data-lazy")
                  , e = document.createElement("img");
                e.onload = function() {
                    c.animate({
                        opacity: 0
                    }, 100, function() {
                        c.attr("src", d).animate({
                            opacity: 1
                        }, 200, function() {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }
                ,
                e.onerror = function() {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    b.$slider.trigger("lazyLoadError", [b, c, d])
                }
                ,
                e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1),
        f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)),
        f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide,
        f = Math.ceil(e + b.options.slidesToShow),
        b.options.fade === !0 && (e > 0 && e--,
        f <= b.slideCount && f++)),
        c = b.$slider.find(".slick-slide").slice(e, f),
        g(c),
        b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"),
        g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow),
        g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow),
        g(d))
    }
    ,
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(),
        a.$slideTrack.css({
            opacity: 1
        }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }
    ,
    b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(),
        a.setPosition()
    }
    ,
    b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(),
        a.paused = !0
    }
    ,
    b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(),
        a.options.autoplay = !0,
        a.paused = !1,
        a.focussed = !1,
        a.interrupted = !1
    }
    ,
    b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]),
        b.animating = !1,
        b.setPosition(),
        b.swipeLeft = null,
        b.options.autoplay && b.autoPlay(),
        b.options.accessibility === !0 && b.initADA())
    }
    ,
    b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }
    ,
    b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(),
        f = e.attr("data-lazy"),
        g = document.createElement("img"),
        g.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"),
            c.options.adaptiveHeight === !0 && c.setPosition(),
            c.$slider.trigger("lazyLoaded", [c, e, f]),
            c.progressiveLazyLoad()
        }
        ,
        g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            c.$slider.trigger("lazyLoadError", [c, e, f]),
            c.progressiveLazyLoad())
        }
        ,
        g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }
    ,
    b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow,
        !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
        c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
        d = c.currentSlide,
        c.destroy(!0),
        a.extend(c, c.initials, {
            currentSlide: d
        }),
        c.init(),
        b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }
    ,
    b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this, f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1,
                d = f[c].breakpoint,
                f.hasOwnProperty(c)) {
                    for (; e >= 0; )
                        b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1),
                        e--;
                    b.breakpoints.push(d),
                    b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }
    ,
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.cleanUpSlideEvents(),
        b.initSlideEvents(),
        b.checkResponsive(!1, !0),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        b.setPosition(),
        b.focusHandler(),
        b.paused = !b.options.autoplay,
        b.autoPlay(),
        b.$slider.trigger("reInit", [b])
    }
    ,
    b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay),
        b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(),
            b.checkResponsive(),
            b.unslicked || b.setPosition()
        }, 50))
    }
    ,
    b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a,
        a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a,
        d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(),
        c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
        d.$slides = d.$slideTrack.children(this.options.slide),
        d.$slideTrack.children(this.options.slide).detach(),
        d.$slideTrack.append(d.$slides),
        d.$slidesCache = d.$slides,
        void d.reinit())
    }
    ,
    b.prototype.setCSS = function(a) {
        var d, e, b = this, c = {};
        b.options.rtl === !0 && (a = -a),
        d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px",
        e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px",
        c[b.positionProp] = a,
        b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {},
        b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")",
        b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)",
        b.$slideTrack.css(c)))
    }
    ,
    b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow),
        a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })),
        a.listWidth = a.$list.width(),
        a.listHeight = a.$list.height(),
        a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow),
        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth),
        a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }
    ,
    b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1,
            b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }),
        b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }
    ,
    b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this, g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0],
        g = arguments[1],
        h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0],
        f = arguments[1],
        g = arguments[2],
        "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")),
        "single" === h)
            b.options[e] = f;
        else if ("multiple" === h)
            a.each(e, function(a, c) {
                b.options[a] = c
            });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive))
                    b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0; )
                        b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1),
                        c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(),
        b.reinit())
    }
    ,
    b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(),
        a.$slider.trigger("setPosition", [a])
    }
    ,
    b.prototype.setProps = function() {
        var a = this
          , b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left",
        "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
        a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex),
        void 0 !== b.OTransform && (a.animType = "OTransform",
        a.transformType = "-o-transform",
        a.transitionType = "OTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.MozTransform && (a.animType = "MozTransform",
        a.transformType = "-moz-transform",
        a.transitionType = "MozTransition",
        void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
        void 0 !== b.webkitTransform && (a.animType = "webkitTransform",
        a.transformType = "-webkit-transform",
        a.transitionType = "webkitTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.msTransform && (a.animType = "msTransform",
        a.transformType = "-ms-transform",
        a.transitionType = "msTransition",
        void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform",
        a.transformType = "transform",
        a.transitionType = "transition"),
        a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }
    ,
    b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        b.$slides.eq(a).addClass("slick-current"),
        b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2),
        b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
        d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")),
        b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow,
        e = b.options.infinite === !0 ? b.options.slidesToShow + a : a,
        b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }
    ,
    b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1),
        b.options.infinite === !0 && b.options.fade === !1 && (d = null,
        b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow,
            c = b.slideCount; c > b.slideCount - e; c -= 1)
                d = c - 1,
                a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1)
                d = c,
                a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }
    ,
    b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(),
        b.interrupted = a
    }
    ,
    b.prototype.selectHandler = function(b) {
        var c = this
          , d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide")
          , e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0),
        c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e),
        void c.asNavFor(e)) : void c.slideHandler(e)
    }
    ,
    b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null, i = this;
        return b = b || !1,
        i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a),
        d = a,
        h = i.getLeft(d),
        g = i.getLeft(i.currentSlide),
        i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft,
        i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer),
        e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d,
        i.animating = !0,
        i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
        f = i.currentSlide,
        i.currentSlide = e,
        i.setSlideClasses(i.currentSlide),
        i.options.asNavFor && (j = i.getNavTarget(),
        j = j.slick("getSlick"),
        j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)),
        i.updateDots(),
        i.updateArrows(),
        i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f),
        i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e),
        void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }
    ,
    b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(),
        a.$nextArrow.hide()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
        a.$slider.addClass("slick-loading")
    }
    ,
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX,
        b = e.touchObject.startY - e.touchObject.curY,
        c = Math.atan2(b, a),
        d = Math.round(180 * c / Math.PI),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }
    ,
    b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1,
        b.interrupted = !1,
        b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0,
        void 0 === b.touchObject.curX)
            return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
            case "left":
            case "down":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(),
                b.currentDirection = 0;
                break;
            case "right":
            case "up":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(),
                b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c),
            b.touchObject = {},
            b.$slider.trigger("swipe", [b, d]))
        } else
            b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide),
            b.touchObject = {})
    }
    ,
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend"in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1,
            b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold,
            b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
            a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
    }
    ,
    b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null,
        !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide),
        b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX,
        b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY,
        b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))),
        b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))),
        e = b.swipeDirection(),
        "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(),
        g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1),
        b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
        f = b.touchObject.swipeLength,
        b.touchObject.edgeHit = !1,
        b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction,
        b.touchObject.edgeHit = !0),
        b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g,
        b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
        b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null,
        !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }
    ,
    b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0,
        1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {},
        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]),
        b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX,
        b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY,
        void (b.dragging = !0))
    }
    ,
    b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(),
        a.$slideTrack.children(this.options.slide).detach(),
        a.$slidesCache.appendTo(a.$slideTrack),
        a.reinit())
    }
    ,
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
        b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
        b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]),
        b.destroy()
    }
    ,
    b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2),
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }
    ,
    a.fn.slick = function() {
        var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f],c) : g = a[f].slick[c].apply(a[f].slick, d),
            "undefined" != typeof g)
                return g;
        return a
    }
});
;// ON DOCUMENT READY
var stellar = '';
jQuery(document).ready(ready_function);

function ready_function() {

    // INPUT PLACEHOLDER FOR OLD BROWSERS
    //jQuery('input, textarea').placeholder({ customClass: 'placeholder-ie' });

    //FITVIDS
    //jQuery('.text').fitVids();

    wow_offset = 30;
    if (jQuery(window).width() < 500)
        wow_offset = 30;

    /*jQuery('.sized-image, .btn').not('.not-wow, .not-wow *, .header .btn, .home-projects .sized-image').addClass('wow fadeInUp');
    jQuery('.sized-image, .btn').not('.not-wow, .not-wow *, .header .btn, .home-projects .sized-image').attr({'data-wow-delay':'0s', 'data-wow-offset':wow_offset, 'data-wow-duration':'1s'});        
    
    jQuery('h1, h2, h3, h4, h5, h6, p, input, textarea, .text li, .text img, video, .images-module img').not('#menu-bar *, .not-wow *, .not-wow').addClass('wow fadeInUp');
    jQuery('h1, h2, h3, h4, h5, h6, p, input, textarea, .text li, .text img, video, .images-module img').not('#menu-bar *, .not-wow *, .not-wow').attr({'data-wow-delay':'0s', 'data-wow-offset':wow_offset, 'data-wow-duration':'1s'});*/

    jQuery('.home-projects .sized-image, .home-projects .text').addClass('wow fadeInUp');
    jQuery('.home-projects .sized-image, .home-projects .text').attr({
        'data-wow-delay': '0s',
        'data-wow-offset': wow_offset,
        'data-wow-duration': '1.4s'
    });

    jQuery('.text-module').find('.intro, .blocks-title, .one_col_text, .col:nth-child(2n+1)').not('.studio-new .col1').addClass('wow fadeInUp');
    jQuery('.text-module').find('.intro, .blocks-title, .one_col_text, .col:nth-child(2n+1)').not('.studio-new .col1').attr({
        'data-wow-delay': '0s',
        'data-wow-offset': wow_offset,
        'data-wow-duration': '1.4s'
    });

    jQuery('.text-module').find('.col:nth-child(2n)').addClass('wow fadeInUp');
    jQuery('.text-module').find('.col:nth-child(2n)').attr({
        'data-wow-delay': '0.2s',
        'data-wow-offset': wow_offset,
        'data-wow-duration': '1.4s'
    });

    jQuery('.studio-new .col1').addClass('wow fadeIn');
    jQuery('.studio-new .col1').attr({
        'data-wow-delay': '0.2s',
        'data-wow-offset': wow_offset,
        'data-wow-duration': '1.4s'
    });

    jQuery('.images-module .single-image .image').addClass('wow fadeInUpSmall');
    jQuery('.images-module .single-image .image').attr({
        'data-wow-delay': '0s',
        'data-wow-offset': 0,
        'data-wow-duration': '1s'
    });

    jQuery('.images-module .studio-image .image').addClass('wow fadeInLeft');
    jQuery('.images-module .studio-image .image').attr({
        'data-wow-delay': '0s',
        'data-wow-offset': 0,
        'data-wow-duration': '1s'
    });

    jQuery('.text-module .tags li').addClass('wow fadeInUpSmall');
    jQuery('.text-module .tags li').attr({
        'data-wow-delay': '0s',
        'data-wow-offset': 0,
        'data-wow-duration': '1s'
    });

    delay = 0;
    jQuery('.work-listing .work').not('.not-wow *').each(function() {
        if (jQuery(this).offset().top > jQuery(window).height())
            delay = 0;
        jQuery(this).addClass('wow fadeInUp');
        jQuery(this).attr({
            'data-wow-delay': delay + 's',
            'data-wow-offset': 0,
            'data-wow-duration': '1.4s'
        });
        delay += 0.15;
    })

    jQuery('.images-module .images').each(function() {
        delay = 0;
        i = 1;
        wow_offset = 10;
        jQuery('.images-module .images img').each(function() {
            if (i == 2)
                wow_offset = -20;
            jQuery(this).addClass('wow fadeInUpSmall');
            jQuery(this).attr({
                'data-wow-delay': delay + 's',
                'data-wow-offset': wow_offset,
                'data-wow-duration': '1s'
            });
            delay += 0.3;
            i++;
        });
    })

    jQuery('.text-module.height-100-minus-90 h1').not('.home h1').each(function() {
        jQuery(this).parent().removeClass('wow fadeInUp');

        jQuery(this).addClass('home-initial-anim wow');
        jQuery(this).attr({
            'data-wow-delay': '2s'
        });

        if (jQuery(window).width() >= 768) {
            temp_h1 = jQuery(this).html();
            temp = temp_h1.split('<br>');
            temp_h1 = '';
            jQuery.each(temp, function(i, v) {
                temp_h1 += '<span class="h1row"><span>' + v + '</span></span>';
            })
            jQuery(this).html(temp_h1);
        } else {
            temp_h1 = jQuery(this).html();
            /*temp = temp_h1.split('<br>');
            temp_h1 = '';
            jQuery.each(temp, function(i,v){
                
            })*/
            temp_h1 = '<span class="h1row"><span>' + temp_h1 + '</span></span>';
            jQuery(this).html(temp_h1);
        }
    });

    /*if(jQuery('.home .home-initial-anim').length > 0){
        setTimeout(function(){jQuery('.home-initial-anim .word1').addClass('active');}, 800);
        setTimeout(function(){jQuery('.home-initial-anim .word2').addClass('active');}, 1000);
        setTimeout(function(){jQuery('.home-initial-anim .word3').addClass('active');}, 1200);
        setTimeout(function(){jQuery('.home-initial-anim h3').animate({'opacity': 1}, 1200);}, 1300);
        setTimeout(function(){jQuery('.home-initial-anim .underline-anim').addClass('active');}, 2000);                
    }*/

    jQuery('.wow').each(function() {
        window_h = jQuery(window).height();
        temp_y = jQuery(this).offset().top;
        if (temp_y < window_h) {
            jQuery(this).addClass('fadeIn').attr('data-wow-delay', '0s').removeClass('fadeInUpSmall, fadeInUp')
        }
    })

    var wow = new WOW({
        animateClass: 'animated',
        callback: function(box) {
            if (jQuery(box).hasClass('home-initial-anim') && !jQuery(box).is('.home h1')) {
                box_delay = 300;
                if (jQuery(box).closest('.text-module').is(jQuery('.text-module:first-child')))
                    box_delay = 700;

                setTimeout(function() {
                    h1_anim_offset = 0;
                    jQuery(box).find('.h1row:nth-child(1)').addClass('active');
                    h1_anim_offset += 200;
                    setTimeout(function() {
                        jQuery(box).find('.h1row:nth-child(2)').addClass('active');
                    }, h1_anim_offset)
                    h1_anim_offset += 100;
                    setTimeout(function() {
                        jQuery(box).find('.h1row:nth-child(3)').addClass('active');
                    }, h1_anim_offset)
                }, box_delay);
            }
        }
    });
    wow.init();

    //BR MOBILE IN TITLES
    jQuery('h1, h2, h3, h4, h5, h6, .text p').find('br').not('#footer br').replaceWith('<span class="br"> </span>');

    //MENU ISCROLL    
    //scroll_menu = new IScroll('#menu-wrapper', {click : true, scrollbars: false, mouseWheel:true, keyBindings:true});

    //CENTERED SWIPERS
    /*if(jQuery('.centered-swiper').length > 0){
        var centered_swipers = [];
        var ics = 1;
        
        jQuery('.centered-swiper').each(function(){
            jQuery(this).attr('id', 'centered_swiper_' + ics);
            jQuery(this).attr('data-num-swiper', ics);
            
            centered_swipers[ics] =  new Swiper ('#centered_swiper_' + ics, {
                loop: false,
                autoplay: 0,
                speed: 1000,
                keyboardControl: false,
                slidesPerView: 'auto',
                freeMode: true,
            })
            ics++;
        })
        
        
        function center_swiper(){
            //return false;
            jQuery('.centered-swiper').each(function(){                            
                id_swiper = jQuery(this).attr('id');
                num_swiper = jQuery(this).attr('data-num-swiper');
                
                swiper_w = 0;
                jQuery(this).find('.swiper-slide').each(function(){
                    swiper_w += jQuery(this).outerWidth();
                });

                if(swiper_w > jQuery(window).width()) swiper_w = jQuery(window).width();

                jQuery(this).css('width', swiper_w + 'px');
                centered_swipers[num_swiper].update();
            });
        }; center_swiper();
        
        my_images1 = jQuery('.centered-swiper img');
        load_counter1 = 0;
        jQuery.each(my_images1, function(i, item) {
            jQuery(item).load(function() {
                load_counter1 ++;
                if (load_counter1 == my_images1.length) {
                    center_swiper();                    
                }
            })
        })
    }*/

    //SIZED IMAGES
    function sized_images() {
        jQuery('.sized-image').each(function() {
            ratio = jQuery(this).attr('data-ratio');
            img_w = jQuery(this).width();
            jQuery(this).css('height', img_w / ratio);
        });
    }
    ;sized_images();

    // COLUMNS WITH SAME HEIGHT
    function same_height_col() {
        jQuery('.same-height .col').css('height', '100%');
        jQuery('.same-height').each(function() {
            if (jQuery(this).find('.col').length < 1)
                return true;
            var max_h = 0;
            var line_y = jQuery(this).find('.col').first().offset().top;
            var line_y_last = jQuery(this).find('.col').last().offset().top;
            jQuery(this).find('.col').each(function() {
                if (jQuery(this).offset().top > line_y) {
                    jQuery(this).closest('.same-height').find('.col.calculate').css('height', max_h + 'px');
                    jQuery(this).closest('.same-height').find('.col.calculate').removeClass('calculate');
                    max_h = 0;
                }

                line_y = jQuery(this).offset().top;

                if (jQuery(this).outerHeight() > max_h)
                    max_h = jQuery(this).outerHeight();

                jQuery(this).addClass('calculate');
            });

            jQuery(this).find('.calculate').css('height', max_h + 'px').removeClass('calculate');

        });

        jQuery('.text-module .studio-new .col').css('height', 'auto');
        jQuery('.text-module .studio-new').each(function() {
            if (jQuery(window).width() < 768)
                return false;
            title1_y = jQuery(this).find('.col2').first().offset().top;
            title2_y = jQuery(this).find('.col2').last().offset().top;
            title2_h = jQuery(this).find('.col2').last().outerHeight();
            col1_h = title2_y + title2_h - title1_y + 100;
            jQuery(this).find('.col1').css('height', col1_h + 'px');
        })

    }
    same_height_col();

    /*if(jQuery('#studio-new-fixed-title').length > 0){
        jQuery('#studio-new-fixed-title').fixTo('#studio-news-col1', {useNativeSticky:false, top: 0, fixToBottom: false, mind: '.logo'});
    }*/

    /*my_images2 = jQuery('.same-height img');
    load_counter2 = 0;
    jQuery.each(my_images2, function(i, item) {
        jQuery(item).load(function() {
            load_counter2++;
            same_height_col();
            if (load_counter2 == my_images2.length) {
                same_height_col();                
            }
        })
    })*/

    //SHORTCODE P FIX
    /*jQuery('.shortcode_div').each(function(){
        jQuery(this).prev('p').remove();
        jQuery(this).next('p').remove();        
    })*/

    //READ MORE
    /*jQuery.fn.almComplete = function(){      
        sized_images();
        same_height_col();
    };*/

    /* logo & menu dark*/
    var pos_logo_s = [];
    var pos_logo_e = [];
    var pos_menu_s = [];
    var pos_menu_e = [];

    function get_positions() {

        pos_logo_s = [];
        pos_logo_e = [];
        pos_menu_s = [];
        pos_menu_e = [];

        if (jQuery(window).width() < 768) {
            m1 = ', .menu-is-white';
            m2 = ', .logo-is-white';
        } else {
            m1 = '';
            m2 = '';
        }

        i = 0;
        jQuery('.logo-is-white' + m1).each(function() {
            t1 = jQuery(this).offset();
            //if(i!=0) console.log(t1.top +'-'+pos_logo_e[i-1]);
            if (i != 0 && Math.round(t1.top) == Math.round(pos_logo_e[i - 1])) {
                pos_logo_e[i - 1] = t1.top + jQuery(this).outerHeight();
            } else {
                pos_logo_s.push(t1.top);
                pos_logo_e.push(t1.top + jQuery(this).outerHeight());
            }
            i++;
        });

        i = 0;
        jQuery('.menu-is-white' + m2).each(function() {
            t2 = jQuery(this).offset();
            if (i != 0 && Math.round(t2.top) == Math.round(pos_menu_e[i - 1])) {
                pos_menu_e[i - 1] = t2.top + jQuery(this).outerHeight();
            } else {
                pos_menu_s.push(t2.top);
                pos_menu_e.push(t2.top + jQuery(this).outerHeight());
            }
            i++;
        });

    }
    ;get_positions();

    var scroll_direction = 'scrolling-down';
    var is_logo_black = true;
    var is_menu_black = true;
    var perc_overlap_logo = '99%';
    var perc_overlap_menu = '99%';

    function logo_and_menu() {

        //LOGO
        logo_s = jQuery('.logo img').first().offset().top;
        logo_h = jQuery('.logo img').first().height();
        logo_e = logo_s + logo_h;

        jQuery.each(pos_logo_s, function(i, v) {

            if (logo_e > v && logo_s < pos_logo_e[i]) {

                if (v < logo_s && pos_logo_e[i] > logo_e) {
                    perc_overlap_logo = '0%';
                    //jQuery('.logo .logo-white').css('-webkit-clip-path', 'polygon(0 '+perc_overlap_logo+', 100% '+perc_overlap_logo+', 100% 100%, 0% 100%)');
                    //jQuery('.logo .logo-white').css('clip-path', 'polygon(0 '+perc_overlap_logo+', 100% '+perc_overlap_logo+', 100% 100%, 0% 100%)');
                    jQuery('.logo .logo-white').css('-webkit-clip-path', 'none');
                    jQuery('.logo .logo-white').css('clip-path', 'none');
                    jQuery('.logo .logo-black').css('-webkit-clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
                    jQuery('.logo .logo-black').css('clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
                } else if (v > logo_e && pos_logo_e[i] > logo_e) {
                    perc_overlap_logo = '100%';
                    //jQuery('.logo .logo-white').css('-webkit-clip-path', 'polygon(0 '+perc_overlap_logo+', 100% '+perc_overlap_logo+', 100% 100%, 0% 100%)');
                    //jQuery('.logo .logo-white').css('clip-path', 'polygon(0 '+perc_overlap_logo+', 100% '+perc_overlap_logo+', 100% 100%, 0% 100%)');
                    jQuery('.logo .logo-white').css('-webkit-clip-path', 'none');
                    jQuery('.logo .logo-white').css('clip-path', 'none');
                    jQuery('.logo .logo-black').css('-webkit-clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
                    jQuery('.logo .logo-black').css('clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
                } else if (logo_e > v && logo_s < v) {
                    diff = v - logo_s;
                    perc_overlap_logo = ((100 / logo_h) * diff);
                    perc_overlap_logo += '%';
                    jQuery('.logo .logo-white').css('-webkit-clip-path', 'polygon(0 ' + perc_overlap_logo + ', 100% ' + perc_overlap_logo + ', 100% 100%, 0% 100%)');
                    jQuery('.logo .logo-white').css('clip-path', 'polygon(0 ' + perc_overlap_logo + ', 100% ' + perc_overlap_logo + ', 100% 100%, 0% 100%)');
                    jQuery('.logo .logo-black').css('-webkit-clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
                    jQuery('.logo .logo-black').css('clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
                } else if (logo_e > pos_logo_e[i] && logo_s < pos_logo_e[i]) {
                    diff = pos_logo_e[i] - logo_s;
                    perc_overlap_logo = (100 / logo_h) * diff;
                    perc_overlap_logo += '%';
                    jQuery('.logo .logo-black').css('-webkit-clip-path', 'polygon(0 ' + perc_overlap_logo + ', 100% ' + perc_overlap_logo + ', 100% 100%, 0% 100%)');
                    jQuery('.logo .logo-black').css('clip-path', 'polygon(0 ' + perc_overlap_logo + ', 100% ' + perc_overlap_logo + ', 100% 100%, 0% 100%)');
                    jQuery('.logo .logo-white').css('-webkit-clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
                    jQuery('.logo .logo-white').css('clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
                }
                is_logo_black = false;
                return false;

            } else {
                is_logo_black = true;
            }
        });

        if (is_logo_black && perc_overlap_logo != '100%') {
            perc_overlap_logo = '100%';
            jQuery('.logo .logo-white').css('-webkit-clip-path', 'polygon(0 ' + perc_overlap_logo + ', 100% ' + perc_overlap_logo + ', 100% 100%, 0% 100%)');
            jQuery('.logo .logo-white').css('clip-path', 'polygon(0 ' + perc_overlap_logo + ', 100% ' + perc_overlap_logo + ', 100% 100%, 0% 100%)');
            jQuery('.logo .logo-black').css('-webkit-clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
            jQuery('.logo .logo-black').css('clip-path', 'polygon(0 0, 100% 0%, 100% ' + perc_overlap_logo + ', 0% ' + perc_overlap_logo + ')');
        }

        //MENU
        menu_s = jQuery('.main-menu li').first().offset().top;
        menu_h = jQuery('.main-menu li').first().height();
        menu_e = menu_s + menu_h;
        text_col = '#202020';

        jQuery.each(pos_menu_s, function(i, v) {

            if (menu_e > v && menu_s < pos_menu_e[i]) {

                if (v < menu_s && pos_menu_e[i] > menu_e) {
                    perc_overlap_menu = '0%';
                    jQuery('.main-menu li, .menu-toggle li').css('background', 'linear-gradient(to bottom, ' + text_col + ' ' + perc_overlap_menu + ',#ffffff ' + perc_overlap_menu + ')');
                } else if (v > menu_e && pos_menu_e[i] > menu_e) {
                    perc_overlap_menu = '100%';
                    jQuery('.main-menu li, .menu-toggle li').css('background', 'transparent');
                } else if (menu_e > v && menu_s < v) {
                    diff = v - menu_s;
                    perc_overlap_menu = ((100 / menu_h) * diff);
                    perc_overlap_menu += '%';
                    jQuery('.main-menu li, .menu-toggle li').css('background', 'linear-gradient(to bottom, ' + text_col + ' ' + perc_overlap_menu + ',#ffffff ' + perc_overlap_menu + ')');
                } else if (menu_e > pos_menu_e[i] && menu_s < pos_menu_e[i]) {
                    diff = pos_menu_e[i] - menu_s;
                    perc_overlap_menu = (100 / menu_h) * diff;
                    perc_overlap_menu += '%';
                    jQuery('.main-menu li, .menu-toggle li').css('background', 'linear-gradient(to bottom, #ffffff ' + perc_overlap_menu + ',' + text_col + ' ' + perc_overlap_menu + ')');

                }
                is_menu_black = false;
                return false;

            } else {
                is_menu_black = true;
            }
        });

        if (is_menu_black && perc_overlap_menu != '100%') {
            perc_overlap_menu = '100%';
            jQuery('.main-menu li, .menu-toggle li').css('background', 'linear-gradient(to bottom, ' + text_col + ' ' + perc_overlap_menu + ',#ffffff ' + perc_overlap_menu + ')');
        }
    }
    logo_and_menu();

    //SCROLL DOWN BTN
    var scroll_y;
    scroll_y = jQuery(document).scrollTop();
    function scroll_down_btn() {
        if (scroll_y > 20 && !jQuery('.scroll-down-btn').hasClass('hide-btn')) {
            jQuery('.scroll-down-btn').addClass('hide-btn')
            setTimeout(function() {
                jQuery('.scroll-down-btn').hide()
            }, 500);
        } else if (scroll_y <= 20 && jQuery('.main-menu').hasClass('hide-menu')) {
            jQuery('.scroll-down-btn').show();
            setTimeout(function() {
                jQuery('.scroll-down-btn').removeClass('hide-btn')
            }, 100);
        }
    }
    ;if (jQuery('.scroll-down-btn').length > 0)
        scroll_down_btn();

    jQuery('.scroll-down-btn').on('click', function(e) {
        e.preventDefault();
        goto = jQuery(this).closest('.section').height();
        jQuery('html, body').animate({
            scrollTop: goto
        }, 600);
    });

    if (jQuery('.scroll-down-btn').closest('.section').next().is('.logo-is-white.menu-is-white')) {
        jQuery('.scroll-down-btn').addClass('white').removeClass('ligher-text-color');
    }

    //MAIN MENU HIDE    
    var mouse_over_menu = false;
    function hide_main_menu() {
        if (mouse_over_menu && !isMobile)
            return false;
        if (scroll_y > 20 && !jQuery('.main-menu').hasClass('hide-menu')) {
            hide_menu();
        } else if (scroll_y <= 20 && jQuery('.main-menu').hasClass('hide-menu')) {
            show_menu();
        }
    }
    ;hide_main_menu();

    jQuery('.menu-toggle li').on('click', function(e) {
        if (!isMobile)
            return false;
        if (scroll_y <= 20)
            return false;
        show_menu();
    })

    jQuery('.menu-toggle li').on('mouseenter', function(e) {
        if (isMobile)
            return false;
        if (scroll_y <= 20)
            return false;
        show_menu();
        mouse_over_menu = true;
        jQuery('.main-menu li:last-child').mouseenter();
    })

    jQuery('.main-menu').on('mouseleave', function() {
        if (isMobile)
            return false;
        mouse_over_menu = false;
        //if(scroll_y <= 20) return false;
        //hide_menu();              
    })

    function hide_menu() {
        jQuery('.main-menu').addClass('hide-menu');
        setTimeout(function() {
            jQuery('.menu-toggle').removeClass('hide-menu');
        }, 170);
    }
    function show_menu() {
        jQuery('.menu-toggle').addClass('hide-menu');
        setTimeout(function() {
            jQuery('.main-menu').removeClass('hide-menu');
        }, 200);
    }

    //HOME FIRST SCREEN ANIMATION     
    if (jQuery('.home .home-initial-anim').length > 0) {
        setTimeout(function() {
            jQuery('.home-initial-anim .word1').addClass('active');
        }, 800);
        setTimeout(function() {
            jQuery('.home-initial-anim .word2').addClass('active');
        }, 1000);
        setTimeout(function() {
            jQuery('.home-initial-anim .word3').addClass('active');
        }, 1200);
        setTimeout(function() {
            jQuery('.home-initial-anim h3').animate({
                'opacity': 1
            }, 1200);
        }, 1300);
        setTimeout(function() {
            jQuery('.home-initial-anim .underline-anim').addClass('active');
        }, 2000);

        /*setTimeout(function(){jQuery('.home-initial-anim .word:nth-child(1)').animate({'opacity': 1}, 1600);}, 300);
        setTimeout(function(){jQuery('.home-initial-anim .word:nth-child(2)').animate({'opacity': 1}, 1600);}, 1000)
        setTimeout(function(){jQuery('.home-initial-anim .word:nth-child(3)').animate({'opacity': 1}, 1600);}, 1600)
        setTimeout(function(){jQuery('.home-initial-anim h3').animate({'opacity': 1}, 1600);}, 2100)*/
    }

    //HOME PARALLAX    
    if (!isMobile) {
        //if(jQuery('.home-projects').length > 0 && !isMobile){
        jQuery('.home-projects .sized-image .bg').attr('data-stellar-ratio', '1.1');
        jQuery('.home-projects .text').attr('data-stellar-ratio', '0.8');

        if (stellar) {
            jQuery(window).data('plugin_stellar').destroy();
        }

        stellar = jQuery(window).stellar({
            horizontalScrolling: false,
            horizontalOffset: 0,
            parallaxBackgrounds: false,
            hideDistantElements: false,
            responsive: true,
        });
        //}else{            
        //jQuery(window).data('plugin_stellar').refresh();
        //console.log('stellar 2');
        //}  
    }

    //HOME SCROLLMAGIC
    /*if(jQuery('.home-projects .project, .banner-module.height-100').length > 0){
        var controller = new ScrollMagic.Controller();            
    }
    
    var i = 0;
    jQuery('.home-projects .project').each(function(){
        
        pr_id = 'home_project_' + i;
        jQuery(this).attr('id', pr_id);
        
        var tween_r = TweenMax.staggerFromTo('#'+pr_id+' .sized-image', 2, {right: '-100%'}, {right: 0, ease: Linear.easeIn}, 0.15);
        var tween_op = TweenMax.staggerFromTo('#'+pr_id+' .sized-image', 2, {opacity: 0}, {opacity:1, ease: Linear.easeNone}, 0.15);
        
        new ScrollMagic.Scene({
            triggerElement: '#'+pr_id+' .sized-image',
            triggerHook: 'onEnter',
            duration: 500,
            offset: -50
        })        
        .setTween(tween_r)        
        .addTo(controller);
        
        new ScrollMagic.Scene({
            triggerElement: '#'+pr_id+' .sized-image',
            triggerHook: 'onEnter',
            duration: 600,
            offset: 0
        })        
        .setTween(tween_op)        
        .addTo(controller);
        
        
        new ScrollMagic.Scene({
            triggerElement: '#'+pr_id+' .container',
            triggerHook: 'onEnter', //'onLeave',
            duration: 1400,
            //offset: -40%
        })
        .setTween('#'+pr_id+' .container', {y: "200%", ease: Linear.easeIn})        
        //.setPin('#'+pr_id)
        .addTo(controller);
        i++;
    });*/

    //FIRST BANNER ANIMATION
    if (jQuery('.banner-module.height-100').length > 0) {

        /*first_ban_id = jQuery('.banner-module.height-100').attr('id');        
        var tween_b = TweenMax.staggerFromTo('#'+first_ban_id, 2, {height: '100vh'}, {height: '60vh', ease: Linear.easeIn}, 0.15);        
        
        new ScrollMagic.Scene({
            triggerElement: '#'+first_ban_id,
            triggerHook: 'onLeave',
            duration: 150,
            offset: 0
        })        
        .setTween(tween_b)        
        .addTo(controller); */

        setTimeout(function() {
            if (jQuery(document).scrollTop() < 5) {
                hw = Math.round(jQuery(window).height() / 2)
                jQuery('html, body').animate({
                    scrollTop: hw
                }, 600);
            }
        }, 1200)
    }

    //HOME UNDERLINE HOVER
    /*jQuery('a.linkhoveranim').wrap('<section class="hoveranim"></section>');
    jQuery('a.linkhoveranim').wrapInner('<span class="hovertext"></span>');
    jQuery('a.linkhoveranim').append('<span class="line -right"></span><span class="line -top"></span><span class="line -left"></span><span class="line -bottom"></span>');*/

    //SHOPIFY LOGO HOME
    jQuery('.shopify-plus-home').each(function() {
        jQuery(this).find('.text > *:last-child').append('<span class="shopify-plus"></span>');
    })

    //SHOPIFY LOGO PAGE
    jQuery('.shopify-plus-page .fw-page-builder-content .text-module').first().find('.col1 > *:first-child').append('<span class="shopify-plus"></span>');

    //WORK LISTING HOVER
    /*jQuery('.works-2020').slick({
        //slidesToScroll: 1,
        autoplay: false,        
        dots: false,
        infinite: true,
        speed: 500,
        accessibility: false,
        arrows: false,
        adaptiveHeight: true,
        vertical: true,
        verticalSwiping: true,
        //slidesToShow: 3,
        //slidesToScroll: 3,
        centerMode: true,
    });*/

    //jQuery('.work-listing-thumbs .thumb').hide().css('opacity', 1);

    jQuery('.work-listing .work a').mouseenter(function() {
        _this = jQuery(this).closest('.work');
        work_listing_mouse_enter(_this)
    })
    jQuery('.work-listing .work a').mouseleave(function() {
        work_listing_mouse_leave();
    })

    function work_listing_mouse_enter(el) {
        jQuery(el).removeClass('op');
        jQuery('.work-listing .work').not(el).addClass('op');
        /*num = jQuery(el).attr('data-num');
        thumb = jQuery('.work-listing-thumbs .thumb[data-num="'+num+'"]');
        jQuery('.work-listing-thumbs .thumb.active').not(thumb).hide().removeClass('active');
        jQuery(thumb).show().addClass('active');*/
    }

    function work_listing_mouse_leave() {
        jQuery('.work-listing .work.op').removeClass('op');
        //jQuery('.work-listing-thumbs .thumb.active').hide().removeClass('active');
    }

    function work_listing_scroll() {
        if (jQuery(window).width() < 768)
            return true;
        win_h_half = scroll_y + Math.round(jQuery(window).height() / 100) * 50;
        offset = 20;
        num = 0;
        jQuery('.works-2020 .work').each(function() {
            if (scroll_direction == 'scrolling-up') {
                _y = jQuery(this).offset().top + jQuery(this).height() - 20;
            } else {
                _y = jQuery(this).offset().top;
            }
            if (_y < (win_h_half + offset) && _y > (win_h_half - offset) && !jQuery(this).hasClass('active')) {
                num = jQuery(this).attr('data-num');
            } else if ((_y >= (win_h_half + offset) || _y <= (win_h_half - offset)) && jQuery(this).hasClass('active')) {//jQuery(this).removeClass('active');                
            }
        })

        if (num) {
            jQuery('.works-2020 .work.active').not('.work[data-num="' + num + '"]').removeClass('active');
            jQuery('.works-2020 .work[data-num="' + num + '"]').addClass('active');

            thumb = jQuery('.work-listing-thumbs .thumb[data-num="' + num + '"]');
            jQuery('.work-listing-thumbs .thumb.active').not(thumb).removeClass('active');
            jQuery(thumb).addClass('active');
        }

        //infinite scroll
        if (scroll_y + jQuery(window).height() > jQuery(document).height() - 100) {
            jQuery('.works-2020').append('<div class="appended">' + work_listing_2020 + '</div>');
        }

    }

    //MENU HOVER
    /*if(!isMobile){
        jQuery('.main-menu li').on('mouseenter', function(){
            jQuery(this).removeClass('op');
            jQuery('.main-menu li').not(this).addClass('op');
        })
        jQuery('.main-menu li').on('mouseleave', function(){
            jQuery('.main-menu li').removeClass('op');
        })
    }*/

    //BANNER MODULE Z-INDEX
    function banner_z_index() {
        window_h = jQuery(window).height() + 100;
        if (scroll_y > window_h && jQuery('.banner-module.height-100').css('z-index') == 1)
            jQuery('.banner-module.height-100').css('z-index', -1);
        else if (scroll_y <= window_h && jQuery('.banner-module.height-100').css('z-index') == -1)
            jQuery('.banner-module.height-100').css('z-index', 1);
    }
    ;if (jQuery('.banner-module.height-100').length > 0)
        banner_z_index();

    //IMAGE MODULE MODULE SWIPER
    jQuery('.images-module .images-mobile').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        accessibility: false,
        arrows: false,
        adaptiveHeight: true,
    });

    //UL ROW
    function ul_row() {
        jQuery('.ul-row li.last').removeClass('last');
        jQuery('.ul-row').each(function() {
            jQuery(this).children('li').each(function() {
                if (jQuery(this).next().length < 1)
                    return false;
                if (jQuery(this).position().top != jQuery(this).next().position().top)
                    jQuery(this).addClass('last');
            })
        })
    }
    ;ul_row();

    //TABS
    jQuery('.tabs .tab-title > span').on('click', function(e) {
        e.preventDefault();
        _this = jQuery(this).parent();
        jQuery(_this).toggleClass('active');
        jQuery(_this).next().toggleClass('active');

        jQuery('.tabs .tab-title.active').not(_this).next().removeClass('active').slideUp(300);
        jQuery('.tabs .tab-title.active').not(_this).removeClass('active');

        if (jQuery(_this).hasClass('active')) {
            jQuery(_this).next().slideDown(300);
        } else {
            jQuery(_this).next().slideUp(300);
        }
        setTimeout(same_height_col, 300);
    })

    // ON SCROLL
    var scroll_y_old = jQuery(document).scrollTop();
    jQuery(window).on('scroll', function() {

        //if(jQuery('.work-listing').length > 0 && !isMobile && jQuery('.work-listing .work:hover').length < 1 && jQuery('.work-listing .work.op').length > 0){                                                        
        /*if(jQuery('.work-listing').length > 0 && !isMobile && jQuery('.work-listing .work:hover').length < 1 && jQuery('.work-listing .work.op').length > 0){
            console.log('out!');
            work_listing_mouse_leave();
        }*/
        /*if(jQuery('.work-listing').length > 0 && !isMobile && jQuery('#work-listing > .container:hover').length < 1){
            work_listing_mouse_leave();
            console.log('out!');
        }*/

        scroll_y = jQuery(document).scrollTop();
        if (scroll_y_old < scroll_y && !scroll_direction != 'scrolling-down') {
            scroll_direction = 'scrolling-down';
        } else if (scroll_y_old > scroll_y && !scroll_direction != 'scrolling-up') {
            scroll_direction = 'scrolling-up';
        }
        scroll_y_old = scroll_y;

        logo_and_menu();

        hide_main_menu();
        if (jQuery('.scroll-down-btn').length > 0)
            scroll_down_btn();
        if (jQuery('.banner-module.height-100').length > 0)
            banner_z_index();

        if (jQuery('.work-listing-2020').length > 0) {
            work_listing_scroll();
        }

        clearTimeout(jQuery.data(this, 'scrollTimer'));
        jQuery.data(this, 'scrollTimer', setTimeout(function() {//when scroll ends                           
        }, 200));
    });

    // ON RESIZE
    var doit;
    var old_w = jQuery(window).width();
    var new_w = '';
    window.onresize = function() {
        new_w = jQuery(window).width();
        if (old_w == new_w)
            return false;

        clearTimeout(doit);
        doit = setTimeout(resizedw, 300);
    }
    ;

    function resizedw() {
        // on resize ends        
        sized_images();
        same_height_col();

        ul_row();

        get_positions();
        logo_and_menu();

        if (jQuery('.banner-module.height-100').length > 0)
            banner_z_index();
        //if(jQuery('.centered-swiper').length > 0) center_swiper();
        //if(jQuery('.menu-toggle').first().hasClass('active')) jQuery('.menu-toggle').first().click();                  

        if (jQuery('.work-listing-2020').length > 0) {
            work_listing_scroll();
        }
    }

    jQuery(window).on("orientationchange", function(event) {
        resizedw();
    });

    jQuery(window).load(function() {
        resizedw();
    });

    all_images = jQuery('img');
    all_load_counter = 0;
    jQuery.each(all_images, function(i, item) {
        jQuery(item).load(function() {
            all_load_counter++;
            if (all_load_counter == all_images.length) {
                resizedw();
            }
        })
    })
}
;
// ENABLE DISABLE SCROLL
var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1,
    32: 1
};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener)
        // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault;
    // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault;
    // older browsers, IE
    window.ontouchmove = preventDefault;
    // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

;jQuery(document).ready(function(g) {
    var a = !1
      , b = ''
      , c = !1;
    jQuery('#main-container').on('click', 'a:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])', function(c) {
        c.preventDefault();
        var b = jQuery(this).attr('href');
        if (b.charAt(0) == '#' || !b)
            return !1;
        a || d(b, !0)
    }),
    jQuery(window).on('popstate', function() {
        if (c) {
            var e = location.pathname.split('/')
              , f = e[e.length - 1];
            if (location.hash == '#')
                return !1;
            !a && b != f && d(f, !1)
        }
        c = !0
    });
    function d(c, d) {
        a = !0,
        jQuery('body').addClass('page-is-changing'),
        scroll_y = jQuery(document).scrollTop(),
        jQuery('html, body').animate({
            scrollTop: scroll_y + 400
        }, 600),
        jQuery('.overlay-page-transitions').fadeIn(500),
        setTimeout(function() {
            jQuery('body').addClass('page-covered'),
            f(c, d),
            b = c
        }, 800)
    }
    function f(b, d) {
        var f, c;
        b = '' == b ? url_base : b,
        f = jQuery('<div class="cd-main-content"></div>'),
        c = jQuery('<div id="uploaded-page" style="display:none;"></div>'),
        jQuery.get(b, function(g) {
            var h = new DOMParser, i, f, j;
            doc = h.parseFromString(g, "text/html"),
            i = doc.body.getAttribute('class'),
            f = doc.getElementsByTagName("title")[0],
            f = f.childNodes[0],
            f = f.nodeValue,
            i += ' page-is-changing page-covered',
            h = doc = null,
            c = jQuery(c).html(g).find('#main-container').html(),
            jQuery('#main-container').html(c),
            jQuery('body').attr('class', '').addClass(i),
            jQuery('title').text(f),
            jQuery('html, body').scrollTop(0),
            j = e() ? 1200 : 0,
            j = 800,
            setTimeout(function() {
                jQuery('body').removeClass('page-covered').removeClass('page-is-changing'),
                jQuery('.overlay-page-transitions').fadeOut(400),
                a = !1
            }, j),
            b != window.location && d ? (window.history.pushState({
                path: b
            }, '', b),
            jQuery(window).off('scroll'),
            window.onresize = null,
            ready_function(jQuery)) : (jQuery(window).off('scroll'),
            window.onresize = null,
            ready_function(jQuery))
        })
    }
    function e() {
        return jQuery('html').hasClass('csstransitions')
    }
})
