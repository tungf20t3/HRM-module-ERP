function MD5(n) {
    function a(n, t) {
        return n << t | n >>> 32 - t
    }

    function o(n, t) {
        var h = 1073741823,
            f = 1073741824,
            e = 2147483648,
            o, s, r, u, i;
        return r = n & e, u = t & e, o = n & f, s = t & f, i = (n & h) + (t & h), o & s ? i ^ e ^ r ^ u : o | s ? i & f ? i ^ 3221225472 ^ r ^ u : i ^ f ^ r ^ u : i ^ r ^ u
    }

    function yt(n, t, i) {
        return n & t | ~n & i
    }

    function bt(n, t, i) {
        return n & i | t & ~i
    }

    function kt(n, t, i) {
        return n ^ t ^ i
    }

    function wt(n, t, i) {
        return t ^ (n | ~i)
    }

    function s(n, t, i, r, u, f, e) {
        return n = o(n, o(o(yt(t, i, r), u), e)), o(a(n, f), t)
    }

    function h(n, t, i, r, u, f, e) {
        return n = o(n, o(o(bt(t, i, r), u), e)), o(a(n, f), t)
    }

    function c(n, t, i, r, u, f, e) {
        return n = o(n, o(o(kt(t, i, r), u), e)), o(a(n, f), t)
    }

    function l(n, t, i, r, u, f, e) {
        return n = o(n, o(o(wt(t, i, r), u), e)), o(a(n, f), t)
    }

    function pt(n) {
        for (var r, u = n.length, o = u + 8, s = (o - o % 64) / 64, e = (s + 1) * 16, i = Array(e - 1), f = 0, t = 0; t < u;) r = (t - t % 4) / 4, f = t % 4 * 8, i[r] = i[r] | n.charCodeAt(t) << f, t++;
        return r = (t - t % 4) / 4, f = t % 4 * 8, i[r] = i[r] | 128 << f, i[e - 2] = u << 3, i[e - 1] = u >>> 29, i
    }

    function ut(n) {
        for (var t = "", i = "", u, r = 0; r <= 3; r++) u = n >>> r * 8 & 255, i = "0" + u.toString(16), t = t + i.substr(i.length - 2, 2);
        return t
    }
    var e = Array(),
        f, vt, at, lt, ct, u, r, i, t, b = 7,
        w = 12,
        p = 17,
        y = 22,
        v = 5,
        tt = 9,
        st = 14,
        k = 20,
        d = 4,
        nt = 11,
        g = 16,
        it = 23,
        rt = 6,
        ft = 10,
        et = 15,
        ot = 21,
        ht;
    for (e = pt(n), u = 1732584193, r = 4023233417, i = 2562383102, t = 271733878, f = 0; f < e.length; f += 16) vt = u, at = r, lt = i, ct = t, u = s(u, r, i, t, e[f + 0], b, 3614090360), t = s(t, u, r, i, e[f + 1], w, 3905402710), i = s(i, t, u, r, e[f + 2], p, 606105819), r = s(r, i, t, u, e[f + 3], y, 3250441966), u = s(u, r, i, t, e[f + 4], b, 4118548399), t = s(t, u, r, i, e[f + 5], w, 1200080426), i = s(i, t, u, r, e[f + 6], p, 2821735955), r = s(r, i, t, u, e[f + 7], y, 4249261313), u = s(u, r, i, t, e[f + 8], b, 1770035416), t = s(t, u, r, i, e[f + 9], w, 2336552879), i = s(i, t, u, r, e[f + 10], p, 4294925233), r = s(r, i, t, u, e[f + 11], y, 2304563134), u = s(u, r, i, t, e[f + 12], b, 1804603682), t = s(t, u, r, i, e[f + 13], w, 4254626195), i = s(i, t, u, r, e[f + 14], p, 2792965006), r = s(r, i, t, u, e[f + 15], y, 1236535329), u = h(u, r, i, t, e[f + 1], v, 4129170786), t = h(t, u, r, i, e[f + 6], tt, 3225465664), i = h(i, t, u, r, e[f + 11], st, 643717713), r = h(r, i, t, u, e[f + 0], k, 3921069994), u = h(u, r, i, t, e[f + 5], v, 3593408605), t = h(t, u, r, i, e[f + 10], tt, 38016083), i = h(i, t, u, r, e[f + 15], st, 3634488961), r = h(r, i, t, u, e[f + 4], k, 3889429448), u = h(u, r, i, t, e[f + 9], v, 568446438), t = h(t, u, r, i, e[f + 14], tt, 3275163606), i = h(i, t, u, r, e[f + 3], st, 4107603335), r = h(r, i, t, u, e[f + 8], k, 1163531501), u = h(u, r, i, t, e[f + 13], v, 2850285829), t = h(t, u, r, i, e[f + 2], tt, 4243563512), i = h(i, t, u, r, e[f + 7], st, 1735328473), r = h(r, i, t, u, e[f + 12], k, 2368359562), u = c(u, r, i, t, e[f + 5], d, 4294588738), t = c(t, u, r, i, e[f + 8], nt, 2272392833), i = c(i, t, u, r, e[f + 11], g, 1839030562), r = c(r, i, t, u, e[f + 14], it, 4259657740), u = c(u, r, i, t, e[f + 1], d, 2763975236), t = c(t, u, r, i, e[f + 4], nt, 1272893353), i = c(i, t, u, r, e[f + 7], g, 4139469664), r = c(r, i, t, u, e[f + 10], it, 3200236656), u = c(u, r, i, t, e[f + 13], d, 681279174), t = c(t, u, r, i, e[f + 0], nt, 3936430074), i = c(i, t, u, r, e[f + 3], g, 3572445317), r = c(r, i, t, u, e[f + 6], it, 76029189), u = c(u, r, i, t, e[f + 9], d, 3654602809), t = c(t, u, r, i, e[f + 12], nt, 3873151461), i = c(i, t, u, r, e[f + 15], g, 530742520), r = c(r, i, t, u, e[f + 2], it, 3299628645), u = l(u, r, i, t, e[f + 0], rt, 4096336452), t = l(t, u, r, i, e[f + 7], ft, 1126891415), i = l(i, t, u, r, e[f + 14], et, 2878612391), r = l(r, i, t, u, e[f + 5], ot, 4237533241), u = l(u, r, i, t, e[f + 12], rt, 1700485571), t = l(t, u, r, i, e[f + 3], ft, 2399980690), i = l(i, t, u, r, e[f + 10], et, 4293915773), r = l(r, i, t, u, e[f + 1], ot, 2240044497), u = l(u, r, i, t, e[f + 8], rt, 1873313359), t = l(t, u, r, i, e[f + 15], ft, 4264355552), i = l(i, t, u, r, e[f + 6], et, 2734768916), r = l(r, i, t, u, e[f + 13], ot, 1309151649), u = l(u, r, i, t, e[f + 4], rt, 4149444226), t = l(t, u, r, i, e[f + 11], ft, 3174756917), i = l(i, t, u, r, e[f + 2], et, 718787259), r = l(r, i, t, u, e[f + 9], ot, 3951481745), u = o(u, vt), r = o(r, at), i = o(i, lt), t = o(t, ct);
    return ht = ut(u) + ut(r) + ut(i) + ut(t), ht.toLowerCase()
}

function Sys$Enum$parse(n, t) {
    var i = this,
        r, u, c, e, o, s, h, f, l;
    if (t) {
        if (r = i.__lowerCaseValues, !r) {
            i.__lowerCaseValues = r = {}, e = i.prototype;
            for (o in e) r[o.toLowerCase()] = e[o]
        }
    } else r = i.prototype;
    if (i.__flags) {
        for (s = (t ? n.toLowerCase() : n).split(","), h = 0, f = s.length - 1; f >= 0; f--) {
            if (l = s[f].trim(), u = r[l], typeof u != "number") throw Error.argument("value", String.format(Sys.Res.enumInvalidValue, n.split(",")[f].trim(), i.__typeName));
            h |= u
        }
        return h
    }
    if (c = t ? n.toLowerCase() : n, u = r[c.trim()], typeof u != "number") throw Error.argument("value", String.format(Sys.Res.enumInvalidValue, n, i.__typeName));
    return u
}

function Sys$Enum$toString(n) {
    var r = this,
        u, t, i, f, o, s, e;
    if (typeof n == "undefined" || n === null) return r.__string;
    if (u = r.prototype, r.__flags && n !== 0) {
        if (i = r.__sortedValues, !i) {
            i = [];
            for (t in u) i[i.length] = {
                key: t,
                value: u[t]
            };
            i.sort(function (n, t) {
                return n.value - t.value
            }), r.__sortedValues = i
        }
        for (f = [], o = n, t = i.length - 1; t >= 0; t--)
            if ((s = i[t], e = s.value, e !== 0) && (e & n) === e && (f[f.length] = s.key, o -= e, o === 0)) break;
        if (f.length && o === 0) return f.reverse().join(", ")
    } else
        for (t in u)
            if (u[t] === n) return t;
    return ""
}

function Sys$Component$_setProperties(n, t) {
    var c = "function",
        u, l = Object.getType(n),
        e = l === Object || l === Sys.UI.DomElement,
        a = Sys.Component.isInstanceOfType(n) && !n.get_isUpdating(),
        r, i, f, o, s;
    a && n.beginUpdate();
    for (r in t)
        if (i = t[r], f = e ? null : n["get_" + r], e || typeof f != c) o = n[r], i && typeof i == "object" && (!e || o) ? Sys$Component$_setProperties(o, i) : n[r] = i;
        else if (s = n["set_" + r], typeof s == c) s.apply(n, [i]);
        else if (i instanceof Array) {
            u = f.apply(n);
            for (var h = 0, v = u.length, y = i.length; h < y; h++, v++) u[v] = i[h]
        } else typeof i == "object" && Object.getType(i) === Object && (u = f.apply(n), Sys$Component$_setProperties(u, i));
    a && n.endUpdate()
}

function Sys$Component$_setReferences(n, t) {
    var i, r, u;
    for (i in t) r = n["set_" + i], u = $find(t[i]), r.apply(n, [u])
}
var $create, $get, $find, __cultureInfo, CommonToolkitScripts, $common, $AA;
typeof Sys != "undefined" && Sys.Application.notifyScriptLoaded(), Function.__typeName = "Function", Function.__class = !0, Function.createCallback = function (n, t) {
    return function () {
        var u = arguments.length,
            r, i;
        if (u > 0) {
            for (r = [], i = 0; i < u; i++) r[i] = arguments[i];
            return r[u] = t, n.apply(this, r)
        }
        return n.call(this, t)
    }
}, Function.createDelegate = function (n, t) {
    return function () {
        return t.apply(n, arguments)
    }
}, Function.emptyFunction = Function.emptyMethod = function () { }, Function._validateParams = function (n, t) {
    var i, r, u, f;
    if (i = Function._validateParameterCount(n, t), i) return i.popStackFrame(), i;
    for (r = 0; r < n.length; r++)
        if (u = t[Math.min(r, t.length - 1)], f = u.name, u.parameterArray && (f += "[" + (r - t.length + 1) + "]"), i = Function._validateParameter(n[r], u, f), i) return i.popStackFrame(), i;
    return null
}, Function._validateParameterCount = function (n, t) {
    for (var u = t.length, f = 0, r, i = 0; i < t.length; i++) t[i].parameterArray ? u = Number.MAX_VALUE : t[i].optional || f++;
    return n.length < f || n.length > u ? (r = Error.parameterCount(), r.popStackFrame(), r) : null
}, Function._validateParameter = function (n, t, i) {
    var r, o = t.type,
        l = !!t.integer,
        a = !!t.domElement,
        v = !!t.mayBeNull,
        f, e, s, h, u, c;
    if (r = Function._validateParameterType(n, o, l, a, v, i), r) return r.popStackFrame(), r;
    if (f = t.elementType, e = !!t.elementMayBeNull, o === Array && typeof n != "undefined" && n !== null && (f || !e))
        for (s = !!t.elementInteger, h = !!t.elementDomElement, u = 0; u < n.length; u++)
            if (c = n[u], r = Function._validateParameterType(c, f, s, h, e, i + "[" + u + "]"), r) return r.popStackFrame(), r;
    return null
}, Function._validateParameterType = function (n, t, i, r, u, f) {
    var o = null,
        p = "undefined",
        e, s, y, l, h, a, c, v;
    if (typeof n == p) return u ? o : (e = Error.argumentUndefined(f), e.popStackFrame(), e);
    if (n === o) return u ? o : (e = Error.argumentNull(f), e.popStackFrame(), e);
    if (t && t.__enum) {
        if (typeof n != "number") return e = Error.argumentType(f, Object.getType(n), t), e.popStackFrame(), e;
        if (n % 1 == 0)
            if (s = t.prototype, t.__flags && n !== 0) {
                y = n;
                for (l in s)
                    if ((h = s[l], h !== 0) && ((h & n) === h && (y -= h), y === 0)) return o
            } else
                for (l in s)
                    if (s[l] === n) return o;
        return e = Error.argumentOutOfRange(f, n, String.format(Sys.Res.enumInvalidValue, n, t.getName())), e.popStackFrame(), e
    }
    return r && (typeof n.nodeType != "number" ? (c = n.ownerDocument || n.document || n, c != n ? (v = c.defaultView || c.parentWindow, a = v != n && !(v.document && n.document && v.document === n.document)) : a = typeof c.body == p) : a = n.nodeType === 3, a) ? (e = Error.argument(f, Sys.Res.argumentDomElement), e.popStackFrame(), e) : t && !t.isInstanceOfType(n) ? (e = Error.argumentType(f, Object.getType(n), t), e.popStackFrame(), e) : t === Number && i && n % 1 != 0 ? (e = Error.argumentOutOfRange(f, n, Sys.Res.argumentInteger), e.popStackFrame(), e) : o
}, Error.__typeName = "Error", Error.__class = !0, Error.create = function (n, t) {
    var i = new Error(n),
        r;
    if (i.message = n, t)
        for (r in t) i[r] = t[r];
    return i.popStackFrame(), i
}, Error.argument = function (n, t) {
    var r = "Sys.ArgumentException: " + (t ? t : Sys.Res.argument),
        i;
    return n && (r += "\n" + String.format(Sys.Res.paramName, n)), i = Error.create(r, {
        name: "Sys.ArgumentException",
        paramName: n
    }), i.popStackFrame(), i
}, Error.argumentNull = function (n, t) {
    var r = "Sys.ArgumentNullException: " + (t ? t : Sys.Res.argumentNull),
        i;
    return n && (r += "\n" + String.format(Sys.Res.paramName, n)), i = Error.create(r, {
        name: "Sys.ArgumentNullException",
        paramName: n
    }), i.popStackFrame(), i
}, Error.argumentOutOfRange = function (n, t, i) {
    var r = "Sys.ArgumentOutOfRangeException: " + (i ? i : Sys.Res.argumentOutOfRange),
        u;
    return n && (r += "\n" + String.format(Sys.Res.paramName, n)), typeof t != "undefined" && t !== null && (r += "\n" + String.format(Sys.Res.actualValue, t)), u = Error.create(r, {
        name: "Sys.ArgumentOutOfRangeException",
        paramName: n,
        actualValue: t
    }), u.popStackFrame(), u
}, Error.argumentType = function (n, t, i, r) {
    var u = "Sys.ArgumentTypeException: ",
        f;
    return u += r ? r : t && i ? String.format(Sys.Res.argumentTypeWithTypes, t.getName(), i.getName()) : Sys.Res.argumentType, n && (u += "\n" + String.format(Sys.Res.paramName, n)), f = Error.create(u, {
        name: "Sys.ArgumentTypeException",
        paramName: n,
        actualType: t,
        expectedType: i
    }), f.popStackFrame(), f
}, Error.argumentUndefined = function (n, t) {
    var r = "Sys.ArgumentUndefinedException: " + (t ? t : Sys.Res.argumentUndefined),
        i;
    return n && (r += "\n" + String.format(Sys.Res.paramName, n)), i = Error.create(r, {
        name: "Sys.ArgumentUndefinedException",
        paramName: n
    }), i.popStackFrame(), i
}, Error.format = function (n) {
    var i = "Sys.FormatException: " + (n ? n : Sys.Res.format),
        t = Error.create(i, {
            name: "Sys.FormatException"
        });
    return t.popStackFrame(), t
}, Error.invalidOperation = function (n) {
    var i = "Sys.InvalidOperationException: " + (n ? n : Sys.Res.invalidOperation),
        t = Error.create(i, {
            name: "Sys.InvalidOperationException"
        });
    return t.popStackFrame(), t
}, Error.notImplemented = function (n) {
    var i = "Sys.NotImplementedException: " + (n ? n : Sys.Res.notImplemented),
        t = Error.create(i, {
            name: "Sys.NotImplementedException"
        });
    return t.popStackFrame(), t
}, Error.parameterCount = function (n) {
    var i = "Sys.ParameterCountException: " + (n ? n : Sys.Res.parameterCount),
        t = Error.create(i, {
            name: "Sys.ParameterCountException"
        });
    return t.popStackFrame(), t
}, Error.prototype.popStackFrame = function () {
    var t = null,
        i = "undefined",
        n = this,
        f, u;
    if (typeof n.stack != i && n.stack !== t && typeof n.fileName != i && n.fileName !== t && typeof n.lineNumber != i && n.lineNumber !== t) {
        for (var r = n.stack.split("\n"), e = r[0], o = n.fileName + ":" + n.lineNumber; typeof e != i && e !== t && e.indexOf(o) === -1;) r.shift(), e = r[0];
        (f = r[1], typeof f != i && f !== t) && (u = f.match(/@(.*):(\d+)$/), typeof u != i && u !== t) && (n.fileName = u[1], n.lineNumber = parseInt(u[2]), r.shift(), n.stack = r.join("\n"))
    }
}, Object.__typeName = "Object", Object.__class = !0, Object.getType = function (n) {
    var t = n.constructor;
    return !t || typeof t != "function" || !t.__typeName || t.__typeName === "Object" ? Object : t
}, Object.getTypeName = function (n) {
    return Object.getType(n).getName()
}, String.__typeName = "String", String.__class = !0, String.prototype.endsWith = function (n) {
    return this.substr(this.length - n.length) === n
}, String.prototype.startsWith = function (n) {
    return this.substr(0, n.length) === n
}, String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
}, String.prototype.trimEnd = function () {
    return this.replace(/\s+$/, "")
}, String.prototype.trimStart = function () {
    return this.replace(/^\s+/, "")
}, String.format = function () {
    return String._toFormattedString(!1, arguments)
}, String.localeFormat = function () {
    return String._toFormattedString(!0, arguments)
}, String._toFormattedString = function (n, t) {
    for (var e = "", f = t[0], o, u, i = 0; ;) {
        if (o = f.indexOf("{", i), u = f.indexOf("}", i), o < 0 && u < 0) {
            e += f.slice(i);
            break
        }
        if (u > 0 && (u < o || o < 0)) {
            e += f.slice(i, u + 1), i = u + 2;
            continue
        }
        if (e += f.slice(i, o), i = o + 1, f.charAt(i) === "{") {
            e += "{", i++;
            continue
        }
        if (u < 0) break;
        var s = f.substring(i, u),
            h = s.indexOf(":"),
            l = parseInt(h < 0 ? s : s.substring(0, h), 10) + 1,
            c = h < 0 ? "" : s.substring(h + 1),
            r = t[l];
        (typeof r == "undefined" || r === null) && (r = ""), e += r.toFormattedString ? r.toFormattedString(c) : n && r.localeFormat ? r.localeFormat(c) : r.format ? r.format(c) : r.toString(), i = u + 1
    }
    return e
}, Boolean.__typeName = "Boolean", Boolean.__class = !0, Boolean.parse = function (n) {
    var t = n.trim().toLowerCase();
    return t === "false" ? !1 : t === "true" ? !0 : void 0
}, Date.__typeName = "Date", Date.__class = !0, Date._appendPreOrPostMatch = function (n, t) {
    for (var f = 0, i = !1, r, u = 0, e = n.length; u < e; u++) {
        r = n.charAt(u);
        switch (r) {
            case "'":
                i ? t.append("'") : f++, i = !1;
                break;
            case "\\":
                i && t.append("\\"), i = !i;
                break;
            default:
                t.append(r), i = !1
        }
    }
    return f
}, Date._expandFormat = function (n, t) {
    if (t || (t = "F"), t.length === 1) switch (t) {
        case "d":
            return n.ShortDatePattern;
        case "D":
            return n.LongDatePattern;
        case "t":
            return n.ShortTimePattern;
        case "T":
            return n.LongTimePattern;
        case "F":
            return n.FullDateTimePattern;
        case "M":
        case "m":
            return n.MonthDayPattern;
        case "s":
            return n.SortableDateTimePattern;
        case "Y":
        case "y":
            return n.YearMonthPattern;
        default:
            throw Error.format(Sys.Res.formatInvalidString);
    }
    return t
}, Date._expandYear = function (n, t) {
    if (t < 100) {
        var i = (new Date).getFullYear();
        if (t += i - i % 100, t > n.Calendar.TwoDigitYearMax) return t - 100
    }
    return t
}, Date._getParseRegExp = function (n, t) {
    var r, o, s, f;
    if (n._parseRegExp) {
        if (n._parseRegExp[t]) return n._parseRegExp[t]
    } else n._parseRegExp = {};
    r = Date._expandFormat(n, t), r = r.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1");
    for (var i = new Sys.StringBuilder("^"), h = [], e = 0, c = 0, l = Date._getTokenRegExp(), u;
        (u = l.exec(r)) !== null;) {
        if (o = r.slice(e, u.index), e = l.lastIndex, c += Date._appendPreOrPostMatch(o, i), c % 2 == 1) {
            i.append(u[0]);
            continue
        }
        switch (u[0]) {
            case "dddd":
            case "ddd":
            case "MMMM":
            case "MMM":
                i.append("(\\D+)");
                break;
            case "tt":
            case "t":
                i.append("(\\D*)");
                break;
            case "yyyy":
                i.append("(\\d{4})");
                break;
            case "fff":
                i.append("(\\d{3})");
                break;
            case "ff":
                i.append("(\\d{2})");
                break;
            case "f":
                i.append("(\\d)");
                break;
            case "dd":
            case "d":
            case "MM":
            case "M":
            case "yy":
            case "y":
            case "HH":
            case "H":
            case "hh":
            case "h":
            case "mm":
            case "m":
            case "ss":
            case "s":
                i.append("(\\d\\d?)");
                break;
            case "zzz":
                i.append("([+-]?\\d\\d?:\\d{2})");
                break;
            case "zz":
            case "z":
                i.append("([+-]?\\d\\d?)")
        }
        Array.add(h, u[0])
    }
    return Date._appendPreOrPostMatch(r.slice(e), i), i.append("$"), s = i.toString().replace(/\s+/g, "\\s+"), f = {
        regExp: s,
        groups: h
    }, n._parseRegExp[t] = f, f
}, Date._getTokenRegExp = function () {
    return /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g
}, Date.parseLocale = function (n) {
    return Date._parse(n, Sys.CultureInfo.CurrentCulture, arguments)
}, Date.parseInvariant = function (n) {
    return Date._parse(n, Sys.CultureInfo.InvariantCulture, arguments)
}, Date._parse = function (n, t, i) {
    for (var s = !1, f, e, u, r = 1, o = i.length; r < o; r++)
        if (f = i[r], f && (s = !0, u = Date._parseExact(n, f, t), u)) return u;
    if (!s)
        for (e = t._getDateTimeFormats(), r = 0, o = e.length; r < o; r++)
            if (u = Date._parseExact(n, e[r], t), u) return u;
    return null
}, Date._parseExact = function (n, t, i) {
    var f = 10,
        r = null,
        y, rt, u, o, it, w, p, l, e, tt;
    n = n.trim();
    var d = i.dateTimeFormat,
        ut = Date._getParseRegExp(d, t),
        et = new RegExp(ut.regExp).exec(n);
    if (et === r) return r;
    var ft = ut.groups,
        c = r,
        o = r,
        v = r,
        a = r,
        s = 0,
        g = 0,
        k = 0,
        h = 0,
        b = r,
        nt = !1;
    for (y = 0, rt = ft.length; y < rt; y++)
        if (u = et[y + 1], u) switch (ft[y]) {
            case "dd":
            case "d":
                if (v = parseInt(u, f), v < 1 || v > 31) return r;
                break;
            case "MMMM":
                if (o = i._getMonthIndex(u), o < 0 || o > 11) return r;
                break;
            case "MMM":
                if (o = i._getAbbrMonthIndex(u), o < 0 || o > 11) return r;
                break;
            case "M":
            case "MM":
                if (o = parseInt(u, f) - 1, o < 0 || o > 11) return r;
                break;
            case "y":
            case "yy":
                if (c = Date._expandYear(d, parseInt(u, f)), c < 0 || c > 9999) return r;
                break;
            case "yyyy":
                if (c = parseInt(u, f), c < 0 || c > 9999) return r;
                break;
            case "h":
            case "hh":
                if (s = parseInt(u, f), s === 12 && (s = 0), s < 0 || s > 11) return r;
                break;
            case "H":
            case "HH":
                if (s = parseInt(u, f), s < 0 || s > 23) return r;
                break;
            case "m":
            case "mm":
                if (g = parseInt(u, f), g < 0 || g > 59) return r;
                break;
            case "s":
            case "ss":
                if (k = parseInt(u, f), k < 0 || k > 59) return r;
                break;
            case "tt":
            case "t":
                if (it = u.toUpperCase(), nt = it === d.PMDesignator.toUpperCase(), !nt && it !== d.AMDesignator.toUpperCase()) return r;
                break;
            case "f":
                if (h = parseInt(u, f) * 100, h < 0 || h > 999) return r;
                break;
            case "ff":
                if (h = parseInt(u, f) * f, h < 0 || h > 999) return r;
                break;
            case "fff":
                if (h = parseInt(u, f), h < 0 || h > 999) return r;
                break;
            case "dddd":
                if (a = i._getDayIndex(u), a < 0 || a > 6) return r;
                break;
            case "ddd":
                if (a = i._getAbbrDayIndex(u), a < 0 || a > 6) return r;
                break;
            case "zzz":
                if ((w = u.split(/:/), w.length !== 2) || (l = parseInt(w[0], f), l < -12 || l > 13) || (p = parseInt(w[1], f), p < 0 || p > 59)) return r;
                b = l * 60 + (u.startsWith("-") ? -p : p);
                break;
            case "z":
            case "zz":
                if (l = parseInt(u, f), l < -12 || l > 13) return r;
                b = l * 60
        }
    return (e = new Date, c === r && (c = e.getFullYear()), o === r && (o = e.getMonth()), v === r && (v = e.getDate()), e.setFullYear(c, o, v), e.getDate() !== v) ? r : a !== r && e.getDay() !== a ? r : (nt && s < 12 && (s += 12), e.setHours(s, g, k, h), b !== r && (tt = e.getMinutes() - (b + e.getTimezoneOffset()), e.setHours(e.getHours() + parseInt(tt / 60, f), tt % 60)), e)
}, Date.prototype.format = function (n) {
    return this._toFormattedString(n, Sys.CultureInfo.InvariantCulture)
}, Date.prototype.localeFormat = function (n) {
    return this._toFormattedString(n, Sys.CultureInfo.CurrentCulture)
}, Date.prototype._toFormattedString = function (n, t) {
    function e(n) {
        return n < 10 ? "0" + n : n.toString()
    }

    function s(n) {
        return n < 10 ? "00" + n : n < 100 ? "0" + n : n.toString()
    }
    var r = this,
        f, i, u, h, c;
    if (!n || n.length === 0 || n === "i") return t && t.name.length > 0 ? r.toLocaleString() : r.toString();
    for (f = t.dateTimeFormat, n = Date._expandFormat(f, n), i = new Sys.StringBuilder, h = 0, c = Date._getTokenRegExp(); ;) {
        var l = c.lastIndex,
            o = c.exec(n),
            a = n.slice(l, o ? o.index : n.length);
        if (h += Date._appendPreOrPostMatch(a, i), !o) break;
        if (h % 2 == 1) {
            i.append(o[0]);
            continue
        }
        switch (o[0]) {
            case "dddd":
                i.append(f.DayNames[r.getDay()]);
                break;
            case "ddd":
                i.append(f.AbbreviatedDayNames[r.getDay()]);
                break;
            case "dd":
                i.append(e(r.getDate()));
                break;
            case "d":
                i.append(r.getDate());
                break;
            case "MMMM":
                i.append(f.MonthNames[r.getMonth()]);
                break;
            case "MMM":
                i.append(f.AbbreviatedMonthNames[r.getMonth()]);
                break;
            case "MM":
                i.append(e(r.getMonth() + 1));
                break;
            case "M":
                i.append(r.getMonth() + 1);
                break;
            case "yyyy":
                i.append(r.getFullYear());
                break;
            case "yy":
                i.append(e(r.getFullYear() % 100));
                break;
            case "y":
                i.append(r.getFullYear() % 100);
                break;
            case "hh":
                u = r.getHours() % 12, u === 0 && (u = 12), i.append(e(u));
                break;
            case "h":
                u = r.getHours() % 12, u === 0 && (u = 12), i.append(u);
                break;
            case "HH":
                i.append(e(r.getHours()));
                break;
            case "H":
                i.append(r.getHours());
                break;
            case "mm":
                i.append(e(r.getMinutes()));
                break;
            case "m":
                i.append(r.getMinutes());
                break;
            case "ss":
                i.append(e(r.getSeconds()));
                break;
            case "s":
                i.append(r.getSeconds());
                break;
            case "tt":
                i.append(r.getHours() < 12 ? f.AMDesignator : f.PMDesignator);
                break;
            case "t":
                i.append((r.getHours() < 12 ? f.AMDesignator : f.PMDesignator).charAt(0));
                break;
            case "f":
                i.append(s(r.getMilliseconds()).charAt(0));
                break;
            case "ff":
                i.append(s(r.getMilliseconds()).substr(0, 2));
                break;
            case "fff":
                i.append(s(r.getMilliseconds()));
                break;
            case "z":
                u = r.getTimezoneOffset() / 60, i.append((u <= 0 ? "+" : "-") + Math.floor(Math.abs(u)));
                break;
            case "zz":
                u = r.getTimezoneOffset() / 60, i.append((u <= 0 ? "+" : "-") + e(Math.floor(Math.abs(u))));
                break;
            case "zzz":
                u = r.getTimezoneOffset() / 60, i.append((u <= 0 ? "+" : "-") + e(Math.floor(Math.abs(u))) + f.TimeSeparator + e(Math.abs(r.getTimezoneOffset() % 60)))
        }
    }
    return i.toString()
}, Number.__typeName = "Number", Number.__class = !0, Number.parseLocale = function (n) {
    return Number._parse(n, Sys.CultureInfo.CurrentCulture)
}, Number.parseInvariant = function (n) {
    return Number._parse(n, Sys.CultureInfo.InvariantCulture)
}, Number._parse = function (n, t) {
    var l = null,
        a, u, f, r, v, y, p, o, s;
    if (n = n.trim(), n.match(/^[+-]?infinity$/i)) return parseFloat(n);
    if (n.match(/^0x[a-f0-9]+$/i)) return parseInt(n);
    var i = t.numberFormat,
        h = Number._parseNumberNegativePattern(n, i, i.NumberNegativePattern),
        c = h[0],
        e = h[1];
    return (c === "" && i.NumberNegativePattern !== 1 && (h = Number._parseNumberNegativePattern(n, i, 1), c = h[0], e = h[1]), c === "" && (c = "+"), f = e.indexOf("e"), f < 0 && (f = e.indexOf("E")), f < 0 ? (u = e, a = l) : (u = e.substr(0, f), a = e.substr(f + 1)), y = u.indexOf(i.NumberDecimalSeparator), y < 0 ? (r = u, v = l) : (r = u.substr(0, y), v = u.substr(y + i.NumberDecimalSeparator.length)), r = r.split(i.NumberGroupSeparator).join(""), p = i.NumberGroupSeparator.replace(/\u00A0/g, " "), i.NumberGroupSeparator !== p && (r = r.split(p).join("")), o = c + r, v !== l && (o += "." + v), a !== l && (s = Number._parseNumberNegativePattern(a, i, 1), s[0] === "" && (s[0] = "+"), o += "e" + s[0] + s[1]), o.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/)) ? parseFloat(o) : Number.NaN
}, Number._parseNumberNegativePattern = function (n, t, i) {
    var r = t.NegativeSign,
        u = t.PositiveSign;
    switch (i) {
        case 4:
            r = " " + r, u = " " + u;
        case 3:
            if (n.endsWith(r)) return ["-", n.substr(0, n.length - r.length)];
            if (n.endsWith(u)) return ["+", n.substr(0, n.length - u.length)];
            break;
        case 2:
            r += " ", u += " ";
        case 1:
            if (n.startsWith(r)) return ["-", n.substr(r.length)];
            if (n.startsWith(u)) return ["+", n.substr(u.length)];
            break;
        case 0:
            if (n.startsWith("(") && n.endsWith(")")) return ["-", n.substr(1, n.length - 2)]
    }
    return ["", n]
}, Number.prototype.format = function (n) {
    return this._toFormattedString(n, Sys.CultureInfo.InvariantCulture)
}, Number.prototype.localeFormat = function (n) {
    return this._toFormattedString(n, Sys.CultureInfo.CurrentCulture)
}, Number.prototype._toFormattedString = function (n, t) {
    function h(n, t, i) {
        for (var r = n.length; r < t; r++) n = i ? "0" + n : n + "0";
        return n
    }

    function l(n, t, i, r, u) {
        var a = i[0],
            v = 1,
            p = Math.pow(10, t),
            y = Math.round(n * p) / p,
            w, o, c;
        isFinite(y) || (y = n), n = y;
        var e = n.toString(),
            f = "",
            s, l = e.split(/e/i);
        for (e = l[0], s = l.length > 1 ? parseInt(l[1]) : 0, l = e.split("."), e = l[0], f = l.length > 1 ? l[1] : "", s > 0 ? (f = h(f, s, !1), e += f.slice(0, s), f = f.substr(s)) : s < 0 && (s = -s, e = h(e, s + 1, !0), f = e.slice(-s, e.length) + f, e = e.slice(0, -s)), t > 0 ? (f = f.length > t ? f.slice(0, t) : h(f, t, !1), f = u + f) : f = "", o = e.length - 1, c = ""; o >= 0;) {
            if (a === 0 || a > o) return c.length > 0 ? e.slice(0, o + 1) + r + c + f : e.slice(0, o + 1) + f;
            c = c.length > 0 ? e.slice(o - a + 1, o + 1) + r + c : e.slice(o - a + 1, o + 1), o -= a, v < i.length && (a = i[v], v++)
        }
        return e.slice(0, o + 1) + r + c + f
    }
    var u = this,
        i, f, r, o, c, e, a, s;
    if (!n || n.length === 0 || n === "i") return t && t.name.length > 0 ? u.toLocaleString() : u.toString();
    var y = ["n %", "n%", "%n"],
        p = ["-n %", "-n%", "-%n"],
        w = ["(n)", "-n", "- n", "n-", "n -"],
        v = ["$n", "n$", "$ n", "n $"],
        b = ["($n)", "-$n", "$-n", "$n-", "(n$)", "-n$", "n-$", "n$-", "-n $", "-$ n", "n $-", "$ n-", "$ -n", "n- $", "($ n)", "(n $)"];
    i = t.numberFormat, f = Math.abs(u), n || (n = "D"), r = -1, n.length > 1 && (r = parseInt(n.slice(1), 10));
    switch (n.charAt(0)) {
        case "d":
        case "D":
            o = "n", r !== -1 && (f = h("" + f, r, !0)), u < 0 && (f = -f);
            break;
        case "c":
        case "C":
            o = u < 0 ? b[i.CurrencyNegativePattern] : v[i.CurrencyPositivePattern], r === -1 && (r = i.CurrencyDecimalDigits), f = l(Math.abs(u), r, i.CurrencyGroupSizes, i.CurrencyGroupSeparator, i.CurrencyDecimalSeparator);
            break;
        case "n":
        case "N":
            o = u < 0 ? w[i.NumberNegativePattern] : "n", r === -1 && (r = i.NumberDecimalDigits), f = l(Math.abs(u), r, i.NumberGroupSizes, i.NumberGroupSeparator, i.NumberDecimalSeparator);
            break;
        case "p":
        case "P":
            o = u < 0 ? p[i.PercentNegativePattern] : y[i.PercentPositivePattern], r === -1 && (r = i.PercentDecimalDigits), f = l(Math.abs(u) * 100, r, i.PercentGroupSizes, i.PercentGroupSeparator, i.PercentDecimalSeparator);
            break;
        default:
            throw Error.format(Sys.Res.formatBadFormatSpecifier);
    }
    for (c = /n|\$|-|%/g, e = ""; ;) {
        if (a = c.lastIndex, s = c.exec(o), e += o.slice(a, s ? s.index : o.length), !s) break;
        switch (s[0]) {
            case "n":
                e += f;
                break;
            case "$":
                e += i.CurrencySymbol;
                break;
            case "-":
                e += i.NegativeSign;
                break;
            case "%":
                e += i.PercentSymbol
        }
    }
    return e
}, RegExp.__typeName = "RegExp", RegExp.__class = !0, Array.__typeName = "Array", Array.__class = !0, Array.add = Array.enqueue = function (n, t) {
    n[n.length] = t
}, Array.addRange = function (n, t) {
    n.push.apply(n, t)
}, Array.clear = function (n) {
    n.length = 0
}, Array.clone = function (n) {
    return n.length === 1 ? [n[0]] : Array.apply(null, n)
}, Array.contains = function (n, t) {
    return Array.indexOf(n, t) >= 0
}, Array.dequeue = function (n) {
    return n.shift()
}, Array.forEach = function (n, t, i) {
    for (var u, r = 0, f = n.length; r < f; r++) u = n[r], typeof u != "undefined" && t.call(i, u, r, n)
}, Array.indexOf = function (n, t, i) {
    var f = "undefined",
        u, r;
    if (typeof t == f) return -1;
    if (u = n.length, u !== 0)
        for (i = +i, isNaN(i) ? i = 0 : (isFinite(i) && (i = i - i % 1), i < 0 && (i = Math.max(0, u + i))), r = i; r < u; r++)
            if (typeof n[r] != f && n[r] === t) return r;
    return -1
}, Array.insert = function (n, t, i) {
    n.splice(t, 0, i)
}, Array.parse = function (value) {
    return value ? eval(value) : []
}, Array.remove = function (n, t) {
    var i = Array.indexOf(n, t);
    return i >= 0 && n.splice(i, 1), i >= 0
}, Array.removeAt = function (n, t) {
    n.splice(t, 1)
}, window || (this.window = this), window.Type = Function, Type.prototype.callBaseMethod = function (n, t, i) {
    var r = this.getBaseMethod(n, t);
    return i ? r.apply(n, i) : r.apply(n)
}, Type.prototype.getBaseMethod = function (n, t) {
    var r = this.getBaseType(),
        i;
    return r ? (i = r.prototype[t], i instanceof Function ? i : null) : null
}, Type.prototype.getBaseType = function () {
    return typeof this.__baseType == "undefined" ? null : this.__baseType
}, Type.prototype.getInterfaces = function () {
    for (var n = [], t = this, i, r, f, u; t;) {
        if (i = t.__interfaces, i)
            for (r = 0, f = i.length; r < f; r++) u = i[r], Array.contains(n, u) || (n[n.length] = u);
        t = t.__baseType
    }
    return n
}, Type.prototype.getName = function () {
    return typeof this.__typeName == "undefined" ? "" : this.__typeName
}, Type.prototype.implementsInterface = function (n) {
    var r = this,
        u, t, f, i, e;
    if (r.resolveInheritance(), u = n.getName(), t = r.__interfaceCache, t) {
        if (f = t[u], typeof f != "undefined") return f
    } else t = r.__interfaceCache = {};
    for (i = r; i;) {
        if (e = i.__interfaces, e && Array.indexOf(e, n) !== -1) return t[u] = !0;
        i = i.__baseType
    }
    return t[u] = !1
}, Type.prototype.inheritsFrom = function (n) {
    this.resolveInheritance();
    for (var t = this.__baseType; t;) {
        if (t === n) return !0;
        t = t.__baseType
    }
    return !1
}, Type.prototype.initializeBase = function (n, t) {
    var i = this;
    return i.resolveInheritance(), i.__baseType && (t ? i.__baseType.apply(n, t) : i.__baseType.apply(n)), n
}, Type.prototype.isImplementedBy = function (n) {
    if (typeof n == "undefined" || n === null) return !1;
    var t = Object.getType(n);
    return !!(t.implementsInterface && t.implementsInterface(this))
}, Type.prototype.isInstanceOfType = function (n) {
    var i = this,
        t;
    return typeof n == "undefined" || n === null ? !1 : n instanceof i ? !0 : (t = Object.getType(n), !!(t === i) || t.inheritsFrom && t.inheritsFrom(i) || t.implementsInterface && t.implementsInterface(i))
}, Type.prototype.registerClass = function (n, t, i) {
    var r = this,
        u, f, e;
    if (r.prototype.constructor = r, r.__typeName = n, r.__class = !0, t && (r.__baseType = t, r.__basePrototypePending = !0), Sys.__upperCaseTypes[n.toUpperCase()] = r, i)
        for (r.__interfaces = [], u = 2, f = arguments.length; u < f; u++) e = arguments[u], r.__interfaces.push(e);
    return r
}, Type.prototype.registerInterface = function (n) {
    var t = this;
    return Sys.__upperCaseTypes[n.toUpperCase()] = t, t.prototype.constructor = t, t.__typeName = n, t.__interface = !0, t
}, Type.prototype.resolveInheritance = function () {
    var n = this,
        t, i, r;
    if (n.__basePrototypePending) {
        t = n.__baseType, t.resolveInheritance();
        for (i in t.prototype) r = t.prototype[i], n.prototype[i] || (n.prototype[i] = r);
        delete n.__basePrototypePending
    }
}, Type.getRootNamespaces = function () {
    return Array.clone(Sys.__rootNamespaces)
}, Type.isClass = function (n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__class
}, Type.isInterface = function (n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__interface
}, Type.isNamespace = function (n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__namespace
}, Type.parse = function (typeName, ns) {
    var fn;
    return ns ? (fn = Sys.__upperCaseTypes[ns.getName().toUpperCase() + "." + typeName.toUpperCase()], fn || null) : typeName ? (Type.__htClasses || (Type.__htClasses = {}), fn = Type.__htClasses[typeName], fn || (fn = eval(typeName), Type.__htClasses[typeName] = fn), fn) : null
}, Type.registerNamespace = function (n) {
    for (var r = window, u = n.split("."), f, t, i = 0; i < u.length; i++) f = u[i], t = r[f], t || (t = r[f] = {
        __namespace: !0,
        __typeName: u.slice(0, i + 1).join(".")
    }, i === 0 && (Sys.__rootNamespaces[Sys.__rootNamespaces.length] = t), t.getName = function () {
        return this.__typeName
    }), r = t
}, window.Sys = {
    __namespace: !0,
    __typeName: "Sys",
    getName: function () {
        return "Sys"
    },
    __upperCaseTypes: {}
}, Sys.__rootNamespaces = [Sys], Sys.IDisposable = function () { }, Sys.IDisposable.prototype = {}, Sys.IDisposable.registerInterface("Sys.IDisposable"), Sys.StringBuilder = function (n) {
    this._parts = typeof n != "undefined" && n !== null && n !== "" ? [n.toString()] : [], this._value = {}, this._len = 0
}, Sys.StringBuilder.prototype = {
    append: function (n) {
        this._parts[this._parts.length] = n
    },
    appendLine: function (n) {
        this._parts[this._parts.length] = typeof n == "undefined" || n === null || n === "" ? "\r\n" : n + "\r\n"
    },
    clear: function () {
        this._parts = [], this._value = {}, this._len = 0
    },
    isEmpty: function () {
        return this._parts.length === 0 ? !0 : this.toString() === ""
    },
    toString: function (n) {
        var f = "undefined",
            r = this,
            t, u, i;
        if (n = n || "", t = r._parts, r._len !== t.length && (r._value = {}, r._len = t.length), u = r._value, typeof u[n] == f) {
            if (n !== "")
                for (i = 0; i < t.length;) typeof t[i] == f || t[i] === "" || t[i] === null ? t.splice(i, 1) : i++;
            u[n] = r._parts.join(n)
        }
        return u[n]
    }
}, Sys.StringBuilder.registerClass("Sys.StringBuilder"), window.XMLHttpRequest || (window.XMLHttpRequest = function () {
    for (var t = ["Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP"], n = 0, i = t.length; n < i; n++) try {
        return new ActiveXObject(t[n])
    } catch (r) { }
    return null
}), Sys.Browser = {}, Sys.Browser.InternetExplorer = {}, Sys.Browser.Firefox = {}, Sys.Browser.Safari = {}, Sys.Browser.Opera = {}, Sys.Browser.agent = null, Sys.Browser.hasDebuggerStatement = !1, Sys.Browser.name = navigator.appName, Sys.Browser.version = parseFloat(navigator.appVersion), Sys.Browser.documentMode = 0, navigator.userAgent.indexOf(" MSIE ") > -1 ? (Sys.Browser.agent = Sys.Browser.InternetExplorer, Sys.Browser.version = parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]), Sys.Browser.version >= 8 && document.documentMode >= 7 && (Sys.Browser.documentMode = document.documentMode), Sys.Browser.hasDebuggerStatement = !0) : navigator.userAgent.indexOf(" Firefox/") > -1 ? (Sys.Browser.agent = Sys.Browser.Firefox, Sys.Browser.version = parseFloat(navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1]), Sys.Browser.name = "Firefox", Sys.Browser.hasDebuggerStatement = !0) : navigator.userAgent.indexOf(" AppleWebKit/") > -1 ? (Sys.Browser.agent = Sys.Browser.Safari, Sys.Browser.version = parseFloat(navigator.userAgent.match(/AppleWebKit\/(\d+(\.\d+)?)/)[1]), Sys.Browser.name = "Safari") : navigator.userAgent.indexOf("Opera/") > -1 && (Sys.Browser.agent = Sys.Browser.Opera), Type.registerNamespace("Sys.UI"), Sys._Debug = function () { }, Sys._Debug.prototype = {
    _appendConsole: function (n) {
        typeof Debug != "undefined" && Debug.writeln, window.console && window.console.log && window.console.log(n), window.opera && window.opera.postError(n), window.debugService && window.debugService.trace(n)
    },
    _appendTrace: function (n) {
        var t = document.getElementById("TraceConsole");
        t && t.tagName.toUpperCase() === "TEXTAREA" && (t.value += n + "\n")
    },
    assert: function (n, t, i) {
        n || (t = i && this.assert.caller ? String.format(Sys.Res.assertFailedCaller, t, this.assert.caller) : String.format(Sys.Res.assertFailed, t), confirm(String.format(Sys.Res.breakIntoDebugger, t)) && this.fail(t))
    },
    clearTrace: function () {
        var n = document.getElementById("TraceConsole");
        n && n.tagName.toUpperCase() === "TEXTAREA" && (n.value = "")
    },
    fail: function (message) {
        this._appendConsole(message), Sys.Browser.hasDebuggerStatement && eval("debugger")
    },
    trace: function (n) {
        this._appendConsole(n), this._appendTrace(n)
    },
    traceDump: function (n, t) {
        var i = this._traceDump(n, t, !0)
    },
    _traceDump: function (n, t, i, r, u) {
        var o = "string",
            f = this,
            s, h, e, a, v, c, l;
        if (t = t ? t : "traceDump", r = r ? r : "", n === null) {
            f.trace(r + t + ": null");
            return
        }
        switch (typeof n) {
            case "undefined":
                f.trace(r + t + ": Undefined");
                break;
            case "number":
            case o:
            case "boolean":
                f.trace(r + t + ": " + n);
                break;
            default:
                if (Date.isInstanceOfType(n) || RegExp.isInstanceOfType(n)) {
                    f.trace(r + t + ": " + n.toString());
                    break
                }
                if (u) {
                    if (Array.contains(u, n)) {
                        f.trace(r + t + ": ...");
                        return
                    }
                } else u = [];
                if (Array.add(u, n), n == window || n === document || window.HTMLElement && n instanceof HTMLElement || typeof n.nodeName == o) s = n.tagName ? n.tagName : "DomElement", n.id && (s += " - " + n.id), f.trace(r + t + " {" + s + "}");
                else if (h = Object.getTypeName(n), f.trace(r + t + (typeof h == o ? " {" + h + "}" : "")), r === "" || i)
                    if (r += "    ", Array.isInstanceOfType(n))
                        for (a = n.length, e = 0; e < a; e++) f._traceDump(n[e], "[" + e + "]", i, r, u);
                    else
                        for (c in n) l = n[c], Function.isInstanceOfType(l) || f._traceDump(l, c, i, r, u);
                Array.remove(u, n)
        }
    }
}, Sys._Debug.registerClass("Sys._Debug"), Sys.Debug = new Sys._Debug, Sys.Debug.isDebug = !1, Type.prototype.registerEnum = function (n, t) {
    var i = this,
        r;
    Sys.__upperCaseTypes[n.toUpperCase()] = i;
    for (r in i.prototype) i[r] = i.prototype[r];
    i.__typeName = n, i.parse = Sys$Enum$parse, i.__string = i.toString(), i.toString = Sys$Enum$toString, i.__flags = t, i.__enum = !0
}, Type.isEnum = function (n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__enum
}, Type.isFlags = function (n) {
    return typeof n == "undefined" || n === null ? !1 : !!n.__flags
}, Sys.EventHandlerList = function () {
    this._list = {}
}, Sys.EventHandlerList.prototype = {
    addHandler: function (n, t) {
        Array.add(this._getEvent(n, !0), t)
    },
    removeHandler: function (n, t) {
        var i = this._getEvent(n);
        i && Array.remove(i, t)
    },
    getHandler: function (n) {
        var t = this._getEvent(n);
        return !t || t.length === 0 ? null : (t = Array.clone(t), function (n, i) {
            for (var r = 0, u = t.length; r < u; r++) t[r](n, i)
        })
    },
    _getEvent: function (n, t) {
        if (!this._list[n]) {
            if (!t) return null;
            this._list[n] = []
        }
        return this._list[n]
    }
}, Sys.EventHandlerList.registerClass("Sys.EventHandlerList"), Sys.EventArgs = function () { }, Sys.EventArgs.registerClass("Sys.EventArgs"), Sys.EventArgs.Empty = new Sys.EventArgs, Sys.CancelEventArgs = function () {
    Sys.CancelEventArgs.initializeBase(this), this._cancel = !1
}, Sys.CancelEventArgs.prototype = {
    get_cancel: function () {
        return this._cancel
    },
    set_cancel: function (n) {
        this._cancel = n
    }
}, Sys.CancelEventArgs.registerClass("Sys.CancelEventArgs", Sys.EventArgs), Sys.INotifyPropertyChange = function () { }, Sys.INotifyPropertyChange.prototype = {}, Sys.INotifyPropertyChange.registerInterface("Sys.INotifyPropertyChange"), Sys.PropertyChangedEventArgs = function (n) {
    Sys.PropertyChangedEventArgs.initializeBase(this), this._propertyName = n
}, Sys.PropertyChangedEventArgs.prototype = {
    get_propertyName: function () {
        return this._propertyName
    }
}, Sys.PropertyChangedEventArgs.registerClass("Sys.PropertyChangedEventArgs", Sys.EventArgs), Sys.INotifyDisposing = function () { }, Sys.INotifyDisposing.prototype = {}, Sys.INotifyDisposing.registerInterface("Sys.INotifyDisposing"), Sys.Component = function () {
    Sys.Application && Sys.Application.registerDisposableObject(this)
}, Sys.Component.prototype = {
    _id: null,
    _initialized: !1,
    _updating: !1,
    get_events: function () {
        return this._events || (this._events = new Sys.EventHandlerList), this._events
    },
    get_id: function () {
        return this._id
    },
    set_id: function (n) {
        this._id = n
    },
    get_isInitialized: function () {
        return this._initialized
    },
    get_isUpdating: function () {
        return this._updating
    },
    add_disposing: function (n) {
        this.get_events().addHandler("disposing", n)
    },
    remove_disposing: function (n) {
        this.get_events().removeHandler("disposing", n)
    },
    add_propertyChanged: function (n) {
        this.get_events().addHandler("propertyChanged", n)
    },
    remove_propertyChanged: function (n) {
        this.get_events().removeHandler("propertyChanged", n)
    },
    beginUpdate: function () {
        this._updating = !0
    },
    dispose: function () {
        var n = this,
            t;
        n._events && (t = n._events.getHandler("disposing"), t && t(n, Sys.EventArgs.Empty)), delete n._events, Sys.Application.unregisterDisposableObject(n), Sys.Application.removeComponent(n)
    },
    endUpdate: function () {
        var n = this;
        n._updating = !1, n._initialized || n.initialize(), n.updated()
    },
    initialize: function () {
        this._initialized = !0
    },
    raisePropertyChanged: function (n) {
        if (this._events) {
            var t = this._events.getHandler("propertyChanged");
            t && t(this, new Sys.PropertyChangedEventArgs(n))
        }
    },
    updated: function () { }
}, Sys.Component.registerClass("Sys.Component", null, Sys.IDisposable, Sys.INotifyPropertyChange, Sys.INotifyDisposing), $create = Sys.Component.create = function (n, t, i, r, u) {
    var f = u ? new n(u) : new n,
        e = Sys.Application,
        s = e.get_isCreatingComponents(),
        o;
    if (f.beginUpdate(), t && Sys$Component$_setProperties(f, t), i)
        for (o in i) f["add_" + o](i[o]);
    return f.get_id() && e.addComponent(f), s ? (e._createdComponents[e._createdComponents.length] = f, r ? e._addComponentToSecondPass(f, r) : f.endUpdate()) : (r && Sys$Component$_setReferences(f, r), f.endUpdate()), f
}, Sys.UI.MouseButton = function () {
    throw Error.notImplemented();
}, Sys.UI.MouseButton.prototype = {
    leftButton: 0,
    middleButton: 1,
    rightButton: 2
}, Sys.UI.MouseButton.registerEnum("Sys.UI.MouseButton"), Sys.UI.Key = function () {
    throw Error.notImplemented();
}, Sys.UI.Key.prototype = {
    backspace: 8,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    del: 127
}, Sys.UI.Key.registerEnum("Sys.UI.Key"), Sys.UI.Point = function (n, t) {
    this.x = n, this.y = t
}, Sys.UI.Point.registerClass("Sys.UI.Point"), Sys.UI.Bounds = function (n, t, i, r) {
    var u = this;
    u.x = n, u.y = t, u.height = r, u.width = i
}, Sys.UI.Bounds.registerClass("Sys.UI.Bounds"), Sys.UI.DomEvent = function (n) {
    var r = "undefined",
        i = this,
        t = n,
        e = i.type = t.type.toLowerCase(),
        u, f;
    i.rawEvent = t, i.altKey = t.altKey, typeof t.button != r && (i.button = typeof t.which != r ? t.button : t.button === 4 ? Sys.UI.MouseButton.middleButton : t.button === 2 ? Sys.UI.MouseButton.rightButton : Sys.UI.MouseButton.leftButton), e === "keypress" ? i.charCode = t.charCode || t.keyCode : i.keyCode = t.keyCode && t.keyCode === 46 ? 127 : t.keyCode, i.clientX = t.clientX, i.clientY = t.clientY, i.ctrlKey = t.ctrlKey, i.target = t.target ? t.target : t.srcElement, e.startsWith("key") || (typeof t.offsetX != r && typeof t.offsetY != r ? (i.offsetX = t.offsetX, i.offsetY = t.offsetY) : i.target && i.target.nodeType !== 3 && typeof t.clientX == "number" && (u = Sys.UI.DomElement.getLocation(i.target), f = Sys.UI.DomElement._getWindow(i.target), i.offsetX = (f.pageXOffset || 0) + t.clientX - u.x, i.offsetY = (f.pageYOffset || 0) + t.clientY - u.y)), i.screenX = t.screenX, i.screenY = t.screenY, i.shiftKey = t.shiftKey
}, Sys.UI.DomEvent.prototype = {
    preventDefault: function () {
        this.rawEvent.preventDefault ? this.rawEvent.preventDefault() : window.event && (this.rawEvent.returnValue = !1)
    },
    stopPropagation: function () {
        this.rawEvent.stopPropagation ? this.rawEvent.stopPropagation() : window.event && (this.rawEvent.cancelBubble = !0)
    }
}, Sys.UI.DomEvent.registerClass("Sys.UI.DomEvent");
var $addHandler = Sys.UI.DomEvent.addHandler = function (n, t, i) {
    var r, u;
    n._events || (n._events = {}), r = n._events[t], r || (n._events[t] = r = []), n.addEventListener ? (u = function (t) {
        return i.call(n, new Sys.UI.DomEvent(t))
    }, n.addEventListener(t, u, !1)) : n.attachEvent && (u = function () {
        var t = {};
        try {
            t = Sys.UI.DomElement._getWindow(n).event
        } catch (r) { }
        return i.call(n, new Sys.UI.DomEvent(t))
    }, n.attachEvent("on" + t, u)), r[r.length] = {
        handler: i,
        browserHandler: u
    }
},
    $addHandlers = Sys.UI.DomEvent.addHandlers = function (n, t, i) {
        var u, r;
        for (u in t) r = t[u], i && (r = Function.createDelegate(i, r)), $addHandler(n, u, r)
    },
    $clearHandlers = Sys.UI.DomEvent.clearHandlers = function (n) {
        var i, r, u, t;
        if (n._events) {
            i = n._events;
            for (r in i)
                for (u = i[r], t = u.length - 1; t >= 0; t--) $removeHandler(n, r, u[t].handler);
            n._events = null
        }
    },
    $removeHandler = Sys.UI.DomEvent.removeHandler = function (n, t, i) {
        for (var f = null, u = n._events[t], r = 0, e = u.length; r < e; r++)
            if (u[r].handler === i) {
                f = u[r].browserHandler;
                break
            } n.removeEventListener ? n.removeEventListener(t, f, !1) : n.detachEvent && n.detachEvent("on" + t, f), u.splice(r, 1)
    };
Sys.UI.DomElement = function () { }, Sys.UI.DomElement.registerClass("Sys.UI.DomElement"), Sys.UI.DomElement.addCssClass = function (n, t) {
    Sys.UI.DomElement.containsCssClass(n, t) || (n.className === "" ? n.className = t : n.className += " " + t)
}, Sys.UI.DomElement.containsCssClass = function (n, t) {
    return Array.contains(n.className.split(" "), t)
}, Sys.UI.DomElement.getBounds = function (n) {
    var t = Sys.UI.DomElement.getLocation(n);
    return new Sys.UI.Bounds(t.x, t.y, n.offsetWidth || 0, n.offsetHeight || 0)
}, $get = Sys.UI.DomElement.getElementById = function (n, t) {
    var u, f, r, i;
    if (!t) return document.getElementById(n);
    if (t.getElementById) return t.getElementById(n);
    for (u = [], f = t.childNodes, r = 0; r < f.length; r++) i = f[r], i.nodeType == 1 && (u[u.length] = i);
    while (u.length) {
        if (i = u.shift(), i.id == n) return i;
        for (f = i.childNodes, r = 0; r < f.length; r++) i = f[r], i.nodeType == 1 && (u[u.length] = i)
    }
    return null
};
switch (Sys.Browser.agent) {
    case Sys.Browser.InternetExplorer:
        Sys.UI.DomElement.getLocation = function (n) {
            var t, i, r;
            if (n.self || n.nodeType === 9) return new Sys.UI.Point(0, 0);
            if (t = n.getBoundingClientRect(), !t) return new Sys.UI.Point(0, 0);
            var u = n.ownerDocument.documentElement,
                f = t.left - 2 + u.scrollLeft,
                e = t.top - 2 + u.scrollTop;
            try {
                i = n.ownerDocument.parentWindow.frameElement || null, i && (r = i.frameBorder === "0" || i.frameBorder === "no" ? 2 : 0, f += r, e += r)
            } catch (o) { }
            return new Sys.UI.Point(f, e)
        };
        break;
    case Sys.Browser.Safari:
        Sys.UI.DomElement.getLocation = function (n) {
            var f = "absolute",
                r = null,
                u, e, t, o;
            if (n.window && n.window === n || n.nodeType === 9) return new Sys.UI.Point(0, 0);
            var s = 0,
                h = 0,
                l = r,
                c = r,
                i;
            for (t = n; t; l = t, c = i, t = t.offsetParent) i = Sys.UI.DomElement._getCurrentStyle(t), u = t.tagName ? t.tagName.toUpperCase() : r, (t.offsetLeft || t.offsetTop) && (u !== "BODY" || !c || c.position !== f) && (s += t.offsetLeft, h += t.offsetTop);
            if (i = Sys.UI.DomElement._getCurrentStyle(n), e = i ? i.position : r, !e || e !== f)
                for (t = n.parentNode; t; t = t.parentNode)
                    if (u = t.tagName ? t.tagName.toUpperCase() : r, u !== "BODY" && u !== "HTML" && (t.scrollLeft || t.scrollTop) && (s -= t.scrollLeft || 0, h -= t.scrollTop || 0), i = Sys.UI.DomElement._getCurrentStyle(t), o = i ? i.position : r, o && o === f) break;
            return new Sys.UI.Point(s, h)
        };
        break;
    case Sys.Browser.Opera:
        Sys.UI.DomElement.getLocation = function (n) {
            var i, u, r, t, f;
            if (n.window && n.window === n || n.nodeType === 9) return new Sys.UI.Point(0, 0);
            var e = 0,
                o = 0,
                s = null;
            for (t = n; t; s = t, t = t.offsetParent) i = t.tagName, e += t.offsetLeft || 0, o += t.offsetTop || 0;
            for (u = n.style.position, r = u && u !== "static", t = n.parentNode; t; t = t.parentNode) i = t.tagName ? t.tagName.toUpperCase() : null, i !== "BODY" && i !== "HTML" && (t.scrollLeft || t.scrollTop) && r && (t.style.overflow === "scroll" || t.style.overflow === "auto") && (e -= t.scrollLeft || 0, o -= t.scrollTop || 0), f = t && t.style ? t.style.position : null, r = r || f && f !== "static";
            return new Sys.UI.Point(e, o)
        };
        break;
    default:
        Sys.UI.DomElement.getLocation = function (n) {
            var o = "absolute",
                u = null,
                r, s, t;
            if (n.window && n.window === n || n.nodeType === 9) return new Sys.UI.Point(0, 0);
            var f = 0,
                e = 0,
                c = u,
                h = u,
                i = u;
            for (t = n; t; c = t, h = i, t = t.offsetParent) r = t.tagName ? t.tagName.toUpperCase() : u, i = Sys.UI.DomElement._getCurrentStyle(t), !t.offsetLeft && !t.offsetTop || r === "BODY" && (!h || h.position !== o) || (f += t.offsetLeft, e += t.offsetTop), c !== u && i && (r !== "TABLE" && r !== "TD" && r !== "HTML" && (f += parseInt(i.borderLeftWidth) || 0, e += parseInt(i.borderTopWidth) || 0), r === "TABLE" && (i.position === "relative" || i.position === o) && (f += parseInt(i.marginLeft) || 0, e += parseInt(i.marginTop) || 0));
            if (i = Sys.UI.DomElement._getCurrentStyle(n), s = i ? i.position : u, !s || s !== o)
                for (t = n.parentNode; t; t = t.parentNode) r = t.tagName ? t.tagName.toUpperCase() : u, r !== "BODY" && r !== "HTML" && (t.scrollLeft || t.scrollTop) && (f -= t.scrollLeft || 0, e -= t.scrollTop || 0, i = Sys.UI.DomElement._getCurrentStyle(t), i && (f += parseInt(i.borderLeftWidth) || 0, e += parseInt(i.borderTopWidth) || 0));
            return new Sys.UI.Point(f, e)
        }
}
Sys.UI.DomElement.removeCssClass = function (n, t) {
    var i = " " + n.className + " ",
        r = i.indexOf(" " + t + " ");
    r >= 0 && (n.className = (i.substr(0, r) + " " + i.substring(r + t.length + 1, i.length)).trim())
}, Sys.UI.DomElement.setLocation = function (n, t, i) {
    var r = n.style;
    r.position = "absolute", r.left = t + "px", r.top = i + "px"
}, Sys.UI.DomElement.toggleCssClass = function (n, t) {
    Sys.UI.DomElement.containsCssClass(n, t) ? Sys.UI.DomElement.removeCssClass(n, t) : Sys.UI.DomElement.addCssClass(n, t)
}, Sys.UI.DomElement.getVisibilityMode = function (n) {
    return n._visibilityMode === Sys.UI.VisibilityMode.hide ? Sys.UI.VisibilityMode.hide : Sys.UI.VisibilityMode.collapse
}, Sys.UI.DomElement.setVisibilityMode = function (n, t) {
    Sys.UI.DomElement._ensureOldDisplayMode(n), n._visibilityMode !== t && (n._visibilityMode = t, Sys.UI.DomElement.getVisible(n) === !1 && (n.style.display = n._visibilityMode === Sys.UI.VisibilityMode.hide ? n._oldDisplayMode : "none"), n._visibilityMode = t)
}, Sys.UI.DomElement.getVisible = function (n) {
    var t = n.currentStyle || Sys.UI.DomElement._getCurrentStyle(n);
    return t ? t.visibility !== "hidden" && t.display !== "none" : !0
}, Sys.UI.DomElement.setVisible = function (n, t) {
    t !== Sys.UI.DomElement.getVisible(n) && (Sys.UI.DomElement._ensureOldDisplayMode(n), n.style.visibility = t ? "visible" : "hidden", n.style.display = t || n._visibilityMode === Sys.UI.VisibilityMode.hide ? n._oldDisplayMode : "none")
}, Sys.UI.DomElement._ensureOldDisplayMode = function (n) {
    if (!n._oldDisplayMode) {
        var t = n.currentStyle || Sys.UI.DomElement._getCurrentStyle(n);
        if (n._oldDisplayMode = t ? t.display : null, !n._oldDisplayMode || n._oldDisplayMode === "none") switch (n.tagName.toUpperCase()) {
            case "DIV":
            case "P":
            case "ADDRESS":
            case "BLOCKQUOTE":
            case "BODY":
            case "COL":
            case "COLGROUP":
            case "DD":
            case "DL":
            case "DT":
            case "FIELDSET":
            case "FORM":
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
            case "HR":
            case "IFRAME":
            case "LEGEND":
            case "OL":
            case "PRE":
            case "TABLE":
            case "TD":
            case "TH":
            case "TR":
            case "UL":
                n._oldDisplayMode = "block";
                break;
            case "LI":
                n._oldDisplayMode = "list-item";
                break;
            default:
                n._oldDisplayMode = "inline"
        }
    }
}, Sys.UI.DomElement._getWindow = function (n) {
    var t = n.ownerDocument || n.document || n;
    return t.defaultView || t.parentWindow
}, Sys.UI.DomElement._getCurrentStyle = function (n) {
    var t, i, f, e, r, u;
    if (n.nodeType === 3) return null;
    if (t = Sys.UI.DomElement._getWindow(n), n.documentElement && (n = n.documentElement), i = t && n !== t && t.getComputedStyle ? t.getComputedStyle(n, null) : n.currentStyle || n.style, !i && Sys.Browser.agent === Sys.Browser.Safari && n.style) {
        f = n.style.display, e = n.style.position, n.style.position = "absolute", n.style.display = "block", r = t.getComputedStyle(n, null), n.style.display = f, n.style.position = e, i = {};
        for (u in r) i[u] = r[u];
        i.display = "none"
    }
    return i
}, Sys.IContainer = function () { }, Sys.IContainer.prototype = {}, Sys.IContainer.registerInterface("Sys.IContainer"), Sys._ScriptLoader = function () {
    var n = this;
    n._scriptsToLoad = null, n._sessions = [], n._scriptLoadedDelegate = Function.createDelegate(n, n._scriptLoadedHandler)
}, Sys._ScriptLoader.prototype = {
    dispose: function () {
        var n = this;
        n._stopSession(), n._loading = !1, n._events && delete n._events, n._sessions = null, n._currentSession = null, n._scriptLoadedDelegate = null
    },
    loadScripts: function (n, t, i, r) {
        var u = this,
            f = {
                allScriptsLoadedCallback: t,
                scriptLoadFailedCallback: i,
                scriptLoadTimeoutCallback: r,
                scriptsToLoad: u._scriptsToLoad,
                scriptTimeout: n
            };
        u._scriptsToLoad = null, u._sessions[u._sessions.length] = f, u._loading || u._nextSession()
    },
    notifyScriptLoaded: function () {
        var n = this;
        n._loading && (n._currentTask._notified++, Sys.Browser.agent === Sys.Browser.Safari && n._currentTask._notified === 1 && window.setTimeout(Function.createDelegate(n, function () {
            this._scriptLoadedHandler(this._currentTask.get_scriptElement(), !0)
        }), 0))
    },
    queueCustomScriptTag: function (n) {
        this._scriptsToLoad || (this._scriptsToLoad = []), Array.add(this._scriptsToLoad, n)
    },
    queueScriptBlock: function (n) {
        this._scriptsToLoad || (this._scriptsToLoad = []), Array.add(this._scriptsToLoad, {
            text: n
        })
    },
    queueScriptReference: function (n) {
        this._scriptsToLoad || (this._scriptsToLoad = []), Array.add(this._scriptsToLoad, {
            src: n
        })
    },
    _createScriptElement: function (n) {
        var t = document.createElement("script"),
            i;
        t.type = "text/javascript";
        for (i in n) t[i] = n[i];
        return t
    },
    _loadScriptsInternal: function () {
        var n = this,
            i = n._currentSession,
            r, t, u;
        i.scriptsToLoad && i.scriptsToLoad.length > 0 ? (r = Array.dequeue(i.scriptsToLoad), t = n._createScriptElement(r), t.text && Sys.Browser.agent === Sys.Browser.Safari && (t.innerHTML = t.text, delete t.text), typeof r.src == "string" ? (n._currentTask = new Sys._ScriptLoaderTask(t, n._scriptLoadedDelegate), n._currentTask.execute()) : (document.getElementsByTagName("head")[0].appendChild(t), Sys._ScriptLoader._clearScript(t), n._loadScriptsInternal())) : (n._stopSession(), u = i.allScriptsLoadedCallback, u && u(n), n._nextSession())
    },
    _nextSession: function () {
        var n = this,
            t;
        if (n._sessions.length === 0) {
            n._loading = !1, n._currentSession = null;
            return
        }
        n._loading = !0, t = Array.dequeue(n._sessions), n._currentSession = t, t.scriptTimeout > 0 && (n._timeoutCookie = window.setTimeout(Function.createDelegate(n, n._scriptLoadTimeoutHandler), t.scriptTimeout * 1e3)), n._loadScriptsInternal()
    },
    _raiseError: function (n) {
        var t = this,
            i = t._currentSession.scriptLoadFailedCallback,
            r = t._currentTask.get_scriptElement();
        if (t._stopSession(), i) i(t, r, n), t._nextSession();
        else {
            t._loading = !1;
            throw Sys._ScriptLoader._errorScriptLoadFailed(r.src, n);
        }
    },
    _scriptLoadedHandler: function (n, t) {
        var i = this;
        t && i._currentTask._notified ? i._currentTask._notified > 1 ? i._raiseError(!0) : (Array.add(Sys._ScriptLoader._getLoadedScripts(), n.src), i._currentTask.dispose(), i._currentTask = null, i._loadScriptsInternal()) : i._raiseError(!1)
    },
    _scriptLoadTimeoutHandler: function () {
        var n = this,
            t = n._currentSession.scriptLoadTimeoutCallback;
        n._stopSession(), t && t(n), n._nextSession()
    },
    _stopSession: function () {
        var n = this;
        n._timeoutCookie && (window.clearTimeout(n._timeoutCookie), n._timeoutCookie = null), n._currentTask && (n._currentTask.dispose(), n._currentTask = null)
    }
}, Sys._ScriptLoader.registerClass("Sys._ScriptLoader", null, Sys.IDisposable), Sys._ScriptLoader.getInstance = function () {
    var n = Sys._ScriptLoader._activeInstance;
    return n || (n = Sys._ScriptLoader._activeInstance = new Sys._ScriptLoader), n
}, Sys._ScriptLoader.isScriptLoaded = function (n) {
    var t = document.createElement("script");
    return t.src = n, Array.contains(Sys._ScriptLoader._getLoadedScripts(), t.src)
}, Sys._ScriptLoader.readLoadedScripts = function () {
    var t, r, u, n;
    if (!Sys._ScriptLoader._referencedScripts)
        for (t = Sys._ScriptLoader._referencedScripts = [], r = document.getElementsByTagName("script"), i = r.length - 1; i >= 0; i--) u = r[i], n = u.src, n.length && (Array.contains(t, n) || Array.add(t, n))
}, Sys._ScriptLoader._clearScript = function (n) {
    Sys.Debug.isDebug || n.parentNode.removeChild(n)
}, Sys._ScriptLoader._errorScriptLoadFailed = function (n, t) {
    var r, u, i;
    return r = t ? Sys.Res.scriptLoadMultipleCallbacks : Sys.Res.scriptLoadFailed, u = "Sys.ScriptLoadFailedException: " + String.format(r, n), i = Error.create(u, {
        name: "Sys.ScriptLoadFailedException",
        scriptUrl: n
    }), i.popStackFrame(), i
}, Sys._ScriptLoader._getLoadedScripts = function () {
    return Sys._ScriptLoader._referencedScripts || (Sys._ScriptLoader._referencedScripts = [], Sys._ScriptLoader.readLoadedScripts()), Sys._ScriptLoader._referencedScripts
}, Sys._ScriptLoaderTask = function (n, t) {
    this._scriptElement = n, this._completedCallback = t, this._notified = 0
}, Sys._ScriptLoaderTask.prototype = {
    get_scriptElement: function () {
        return this._scriptElement
    },
    dispose: function () {
        var n = this;
        n._disposed || (n._disposed = !0, n._removeScriptElementHandlers(), Sys._ScriptLoader._clearScript(n._scriptElement), n._scriptElement = null)
    },
    execute: function () {
        this._addScriptElementHandlers(), document.getElementsByTagName("head")[0].appendChild(this._scriptElement)
    },
    _addScriptElementHandlers: function () {
        var n = this;
        n._scriptLoadDelegate = Function.createDelegate(n, n._scriptLoadHandler), Sys.Browser.agent !== Sys.Browser.InternetExplorer ? (n._scriptElement.readyState = "loaded", $addHandler(n._scriptElement, "load", n._scriptLoadDelegate)) : $addHandler(n._scriptElement, "readystatechange", n._scriptLoadDelegate), n._scriptElement.addEventListener && (n._scriptErrorDelegate = Function.createDelegate(n, n._scriptErrorHandler), n._scriptElement.addEventListener("error", n._scriptErrorDelegate, !1))
    },
    _removeScriptElementHandlers: function () {
        var n = this,
            t;
        n._scriptLoadDelegate && (t = n.get_scriptElement(), Sys.Browser.agent !== Sys.Browser.InternetExplorer ? $removeHandler(t, "load", n._scriptLoadDelegate) : $removeHandler(t, "readystatechange", n._scriptLoadDelegate), n._scriptErrorDelegate && (n._scriptElement.removeEventListener("error", n._scriptErrorDelegate, !1), n._scriptErrorDelegate = null), n._scriptLoadDelegate = null)
    },
    _scriptErrorHandler: function () {
        this._disposed || this._completedCallback(this.get_scriptElement(), !1)
    },
    _scriptLoadHandler: function () {
        var n, t;
        this._disposed || (n = this.get_scriptElement(), n.readyState === "loaded" || n.readyState === "complete") && (t = this, window.setTimeout(function () {
            t._completedCallback(n, !0)
        }, 0))
    }
}, Sys._ScriptLoaderTask.registerClass("Sys._ScriptLoaderTask", null, Sys.IDisposable), Sys.ApplicationLoadEventArgs = function (n, t) {
    Sys.ApplicationLoadEventArgs.initializeBase(this), this._components = n, this._isPartialLoad = t
}, Sys.ApplicationLoadEventArgs.prototype = {
    get_components: function () {
        return this._components
    },
    get_isPartialLoad: function () {
        return this._isPartialLoad
    }
}, Sys.ApplicationLoadEventArgs.registerClass("Sys.ApplicationLoadEventArgs", Sys.EventArgs), Sys.HistoryEventArgs = function (n) {
    Sys.HistoryEventArgs.initializeBase(this), this._state = n
}, Sys.HistoryEventArgs.prototype = {
    get_state: function () {
        return this._state
    }
}, Sys.HistoryEventArgs.registerClass("Sys.HistoryEventArgs", Sys.EventArgs), Sys._Application = function () {
    var i = !1,
        t = null,
        n = this;
    Sys._Application.initializeBase(n), n._disposableObjects = [], n._components = {}, n._createdComponents = [], n._secondPassComponents = [], n._appLoadHandler = t, n._beginRequestHandler = t, n._clientId = t, n._currentEntry = "", n._endRequestHandler = t, n._history = t, n._enableHistory = i, n._historyFrame = t, n._historyInitialized = i, n._historyInitialLength = 0, n._historyLength = 0, n._historyPointIsNew = i, n._ignoreTimer = i, n._initialState = t, n._state = {}, n._timerCookie = 0, n._timerHandler = t, n._uniqueId = t, n._unloadHandlerDelegate = Function.createDelegate(n, n._unloadHandler), n._loadHandlerDelegate = Function.createDelegate(n, n._loadHandler), Sys.UI.DomEvent.addHandler(window, "unload", n._unloadHandlerDelegate), Sys.UI.DomEvent.addHandler(window, "load", n._loadHandlerDelegate)
}, Sys._Application.prototype = {
    _creatingComponents: !1,
    _disposing: !1,
    get_isCreatingComponents: function () {
        return this._creatingComponents
    },
    get_stateString: function () {
        var t = this,
            n = window.location.hash,
            i;
        return t._isSafari2() && (i = t._getHistory(), i && (n = i[window.history.length - t._historyInitialLength])), n.length > 0 && n.charAt(0) === "#" && (n = n.substring(1)), Sys.Browser.agent === Sys.Browser.Firefox && (n = t._serializeState(t._deserializeState(n, !0))), n
    },
    get_enableHistory: function () {
        return this._enableHistory
    },
    set_enableHistory: function (n) {
        this._enableHistory = n
    },
    add_init: function (n) {
        this._initialized ? n(this, Sys.EventArgs.Empty) : this.get_events().addHandler("init", n)
    },
    remove_init: function (n) {
        this.get_events().removeHandler("init", n)
    },
    add_load: function (n) {
        this.get_events().addHandler("load", n)
    },
    remove_load: function (n) {
        this.get_events().removeHandler("load", n)
    },
    add_navigate: function (n) {
        this.get_events().addHandler("navigate", n)
    },
    remove_navigate: function (n) {
        this.get_events().removeHandler("navigate", n)
    },
    add_unload: function (n) {
        this.get_events().addHandler("unload", n)
    },
    remove_unload: function (n) {
        this.get_events().removeHandler("unload", n)
    },
    addComponent: function (n) {
        this._components[n.get_id()] = n
    },
    addHistoryPoint: function (n, t) {
        var i = this,
            r, u, f, e;
        i._ensureHistory(), r = i._state;
        for (u in n) f = n[u], f === null ? typeof r[u] != "undefined" && delete r[u] : r[u] = f;
        e = i._serializeState(r), i._historyPointIsNew = !0, i._setState(e, t), i._raiseNavigate()
    },
    beginCreateComponents: function () {
        this._creatingComponents = !0
    },
    dispose: function () {
        var n = this,
            i, r, t, f, u;
        if (!n._disposing) {
            for (n._disposing = !0, n._timerCookie && (window.clearTimeout(n._timerCookie), delete n._timerCookie), n._endRequestHandler && (Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(n._endRequestHandler), delete n._endRequestHandler), n._beginRequestHandler && (Sys.WebForms.PageRequestManager.getInstance().remove_beginRequest(n._beginRequestHandler), delete n._beginRequestHandler), window.pageUnload && window.pageUnload(n, Sys.EventArgs.Empty), i = n.get_events().getHandler("unload"), i && i(n, Sys.EventArgs.Empty), r = Array.clone(n._disposableObjects), t = 0, f = r.length; t < f; t++) r[t].dispose();
            Array.clear(n._disposableObjects), Sys.UI.DomEvent.removeHandler(window, "unload", n._unloadHandlerDelegate), n._loadHandlerDelegate && (Sys.UI.DomEvent.removeHandler(window, "load", n._loadHandlerDelegate), n._loadHandlerDelegate = null), u = Sys._ScriptLoader.getInstance(), u && u.dispose(), Sys._Application.callBaseMethod(n, "dispose")
        }
    },
    endCreateComponents: function () {
        for (var t = this._secondPassComponents, i, n = 0, r = t.length; n < r; n++) i = t[n].component, Sys$Component$_setReferences(i, t[n].references), i.endUpdate();
        this._secondPassComponents = [], this._creatingComponents = !1
    },
    findComponent: function (n, t) {
        return t ? Sys.IContainer.isInstanceOfType(t) ? t.findComponent(n) : t[n] || null : Sys.Application._components[n] || null
    },
    getComponents: function () {
        var n = [],
            t = this._components,
            i;
        for (i in t) n[n.length] = t[i];
        return n
    },
    initialize: function () {
        var n = this;
        n._initialized || n._initializing || (n._initializing = !0, window.setTimeout(Function.createDelegate(n, n._doInitialize), 0))
    },
    notifyScriptLoaded: function () {
        var n = Sys._ScriptLoader.getInstance();
        n && n.notifyScriptLoaded()
    },
    registerDisposableObject: function (n) {
        this._disposing || (this._disposableObjects[this._disposableObjects.length] = n)
    },
    raiseLoad: function () {
        var n = this,
            t = n.get_events().getHandler("load"),
            i = new Sys.ApplicationLoadEventArgs(Array.clone(n._createdComponents), !n._initializing);
        t && t(n, i), window.pageLoad && window.pageLoad(n, i), n._createdComponents = []
    },
    removeComponent: function (n) {
        var t = n.get_id();
        t && delete this._components[t]
    },
    setServerId: function (n, t) {
        this._clientId = n, this._uniqueId = t
    },
    setServerState: function (n) {
        this._ensureHistory(), this._state.__s = n, this._updateHiddenField(n)
    },
    unregisterDisposableObject: function (n) {
        this._disposing || Array.remove(this._disposableObjects, n)
    },
    _addComponentToSecondPass: function (n, t) {
        this._secondPassComponents[this._secondPassComponents.length] = {
            component: n,
            references: t
        }
    },
    _deserializeState: function (n, t) {
        var e = {},
            i, o, f, h, r, u, c, s;
        for (n = n || "", i = n.indexOf("&&"), i !== -1 && i + 2 < n.length && (e.__s = n.substr(i + 2), n = n.substr(0, i)), o = n.split("&"), f = 0, h = o.length; f < h; f++) r = o[f], u = r.indexOf("="), u !== -1 && u + 1 < r.length && (c = r.substr(0, u), s = r.substr(u + 1), e[c] = t ? s : decodeURIComponent(s));
        return e
    },
    _doInitialize: function () {
        var n = this,
            t, i;
        Sys._Application.callBaseMethod(n, "initialize"), t = n.get_events().getHandler("init"), t && (n.beginCreateComponents(), t(n, Sys.EventArgs.Empty), n.endCreateComponents()), Sys.WebForms && (n._beginRequestHandler = Function.createDelegate(n, n._onPageRequestManagerBeginRequest), Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(n._beginRequestHandler), n._endRequestHandler = Function.createDelegate(n, n._onPageRequestManagerEndRequest), Sys.WebForms.PageRequestManager.getInstance().add_endRequest(n._endRequestHandler)), i = n.get_stateString(), i !== n._currentEntry && n._navigate(i), n.raiseLoad(), n._initializing = !1
    },
    _enableHistoryInScriptManager: function () {
        this._enableHistory = !0
    },
    _ensureHistory: function () {
        var n = this,
            t;
        if (!n._historyInitialized && n._enableHistory) {
            (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.documentMode < 8 && (n._historyFrame = document.getElementById("__historyFrame"), n._ignoreIFrame = !0), n._isSafari2()) && (t = document.getElementById("__history"), n._setHistory([window.location.hash]), n._historyInitialLength = window.history.length), n._timerHandler = Function.createDelegate(n, n._onIdle), n._timerCookie = window.setTimeout(n._timerHandler, 100);
            try {
                n._initialState = n._deserializeState(n.get_stateString())
            } catch (i) { }
            n._historyInitialized = !0
        }
    },
    _getHistory: function () {
        var t = document.getElementById("__history"),
            n;
        return t ? (n = t.value, n ? Sys.Serialization.JavaScriptSerializer.deserialize(n, !0) : "") : ""
    },
    _isSafari2: function () {
        return Sys.Browser.agent === Sys.Browser.Safari && Sys.Browser.version <= 419.3
    },
    _loadHandler: function () {
        var n = this;
        n._loadHandlerDelegate && (Sys.UI.DomEvent.removeHandler(window, "load", n._loadHandlerDelegate), n._loadHandlerDelegate = null), n.initialize()
    },
    _navigate: function (n) {
        var t = this,
            i, u, r;
        if (t._ensureHistory(), i = t._deserializeState(n), t._uniqueId && (u = t._state.__s || "", r = i.__s || "", r !== u)) {
            t._updateHiddenField(r), __doPostBack(t._uniqueId, r), t._state = i;
            return
        }
        t._setState(n), t._state = i, t._raiseNavigate()
    },
    _onIdle: function () {
        var n = this,
            t;
        delete n._timerCookie, t = n.get_stateString(), t !== n._currentEntry ? n._ignoreTimer || (n._historyPointIsNew = !1, n._navigate(t), n._historyLength = window.history.length) : n._ignoreTimer = !1, n._timerCookie = window.setTimeout(n._timerHandler, 100)
    },
    _onIFrameLoad: function (n) {
        var t = this;
        t._ensureHistory(), t._ignoreIFrame || (t._historyPointIsNew = !1, t._navigate(n)), t._ignoreIFrame = !1
    },
    _onPageRequestManagerBeginRequest: function () {
        this._ignoreTimer = !0
    },
    _onPageRequestManagerEndRequest: function (n, t) {
        var i = this,
            f = t.get_dataItems()[i._clientId],
            r = document.getElementById("__EVENTTARGET"),
            u;
        r && r.value === i._uniqueId && (r.value = ""), typeof f != "undefined" ? (i.setServerState(f), i._historyPointIsNew = !0) : i._ignoreTimer = !1, u = i._serializeState(i._state), u !== i._currentEntry && (i._ignoreTimer = !0, i._setState(u), i._raiseNavigate())
    },
    _raiseNavigate: function () {
        var n = this,
            i = n.get_events().getHandler("navigate"),
            r = {},
            t, u;
        for (t in n._state) t !== "__s" && (r[t] = n._state[t]);
        u = new Sys.HistoryEventArgs(r), i && i(n, u)
    },
    _serializeState: function (n) {
        var i = [],
            t, r, u;
        for (t in n) r = n[t], t === "__s" ? u = r : i[i.length] = t + "=" + encodeURIComponent(r);
        return i.join("&") + (u ? "&&" + u : "")
    },
    _setHistory: function (n) {
        var t = document.getElementById("__history");
        t && (t.value = Sys.Serialization.JavaScriptSerializer.serialize(n))
    },
    _setState: function (n, t) {
        var i = this,
            u, e, f, s, o, r;
        n = n || "", n !== i._currentEntry && (window.theForm && (u = window.theForm.action, e = u.indexOf("#"), window.theForm.action = (e !== -1 ? u.substring(0, e) : u) + "#" + n), i._historyFrame && i._historyPointIsNew && (i._ignoreIFrame = !0, i._historyPointIsNew = !1, f = i._historyFrame.contentWindow.document, f.open("javascript:'<html></html>'"), f.write("<html><head><title>" + (t || document.title) + '</title><script type="text/javascript">parent.Sys.Application._onIFrameLoad(\'' + n + "');<\/script></head><body></body></html>"), f.close()), i._ignoreTimer = !1, s = i.get_stateString(), i._currentEntry = n, n !== s && (i._isSafari2() ? (o = i._getHistory(), o[window.history.length - i._historyInitialLength + 1] = n, i._setHistory(o), i._historyLength = window.history.length + 1, r = document.createElement("form"), r.method = "get", r.action = "#" + n, document.appendChild(r), r.submit(), document.removeChild(r)) : window.location.hash = n, typeof t != "undefined" && t !== null && (document.title = t)))
    },
    _unloadHandler: function () {
        this.dispose()
    },
    _updateHiddenField: function (n) {
        if (this._clientId) {
            var t = document.getElementById(this._clientId);
            t && (t.value = n)
        }
    }
}, Sys._Application.registerClass("Sys._Application", Sys.Component, Sys.IContainer), Sys.Application = new Sys._Application, $find = Sys.Application.findComponent, Type.registerNamespace("Sys.Net"), Sys.Net.WebRequestExecutor = function () {
    this._webRequest = null, this._resultObject = null
}, Sys.Net.WebRequestExecutor.prototype = {
    get_webRequest: function () {
        return this._webRequest
    },
    _set_webRequest: function (n) {
        this._webRequest = n
    },
    get_started: function () {
        throw Error.notImplemented();
    },
    get_responseAvailable: function () {
        throw Error.notImplemented();
    },
    get_timedOut: function () {
        throw Error.notImplemented();
    },
    get_aborted: function () {
        throw Error.notImplemented();
    },
    get_responseData: function () {
        throw Error.notImplemented();
    },
    get_statusCode: function () {
        throw Error.notImplemented();
    },
    get_statusText: function () {
        throw Error.notImplemented();
    },
    get_xml: function () {
        throw Error.notImplemented();
    },
    get_object: function () {
        var n = this;
        return n._resultObject || (n._resultObject = Sys.Serialization.JavaScriptSerializer.deserialize(n.get_responseData())), n._resultObject
    },
    executeRequest: function () {
        throw Error.notImplemented();
    },
    abort: function () {
        throw Error.notImplemented();
    },
    getResponseHeader: function () {
        throw Error.notImplemented();
    },
    getAllResponseHeaders: function () {
        throw Error.notImplemented();
    }
}, Sys.Net.WebRequestExecutor.registerClass("Sys.Net.WebRequestExecutor"), Sys.Net.XMLDOM = function (n) {
    var r, i, u, t, f;
    if (window.DOMParser) try {
        return f = new window.DOMParser, f.parseFromString(n, "text/xml")
    } catch (e) { } else
        for (r = ["Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument"], i = 0, u = r.length; i < u; i++) try {
            return t = new ActiveXObject(r[i]), t.async = !1, t.loadXML(n), t.setProperty("SelectionLanguage", "XPath"), t
        } catch (e) { }
    return null
}, Sys.Net.XMLHttpExecutor = function () {
    var r = !1,
        i = null,
        t = this,
        n;
    Sys.Net.XMLHttpExecutor.initializeBase(t), n = t, t._xmlHttpRequest = i, t._webRequest = i, t._responseAvailable = r, t._timedOut = r, t._timer = i, t._aborted = r, t._started = r, t._onReadyStateChange = function () {
        if (n._xmlHttpRequest.readyState === 4) {
            try {
                if (typeof n._xmlHttpRequest.status == "undefined") return
            } catch (t) {
                return
            }
            n._clearTimer(), n._responseAvailable = !0;
            try {
                n._webRequest.completed(Sys.EventArgs.Empty)
            } finally {
                n._xmlHttpRequest != i && (n._xmlHttpRequest.onreadystatechange = Function.emptyMethod, n._xmlHttpRequest = i)
            }
        }
    }, t._clearTimer = function () {
        n._timer != i && (window.clearTimeout(n._timer), n._timer = i)
    }, t._onTimeout = function () {
        n._responseAvailable || (n._clearTimer(), n._timedOut = !0, n._xmlHttpRequest.onreadystatechange = Function.emptyMethod, n._xmlHttpRequest.abort(), n._webRequest.completed(Sys.EventArgs.Empty), n._xmlHttpRequest = i)
    }
}, Sys.Net.XMLHttpExecutor.prototype = {
    get_timedOut: function () {
        return this._timedOut
    },
    get_started: function () {
        return this._started
    },
    get_responseAvailable: function () {
        return this._responseAvailable
    },
    get_aborted: function () {
        return this._aborted
    },
    executeRequest: function () {
        var o = "Content-Type",
            n = this,
            i, t, r, u, f, e;
        if (n._webRequest = n.get_webRequest(), i = n._webRequest.get_body(), t = n._webRequest.get_headers(), n._xmlHttpRequest = new XMLHttpRequest, n._xmlHttpRequest.onreadystatechange = n._onReadyStateChange, r = n._webRequest.get_httpVerb(), n._xmlHttpRequest.open(r, n._webRequest.getResolvedUrl(), !0), t)
            for (u in t) f = t[u], typeof f != "function" && n._xmlHttpRequest.setRequestHeader(u, f);
        r.toLowerCase() === "post" && (t !== null && t[o] || n._xmlHttpRequest.setRequestHeader(o, "application/x-www-form-urlencoded; charset=utf-8"), i || (i = "")), e = n._webRequest.get_timeout(), e > 0 && (n._timer = window.setTimeout(Function.createDelegate(n, n._onTimeout), e)), n._xmlHttpRequest.send(i), n._started = !0
    },
    getResponseHeader: function (n) {
        var t;
        try {
            t = this._xmlHttpRequest.getResponseHeader(n)
        } catch (i) { }
        return t || (t = ""), t
    },
    getAllResponseHeaders: function () {
        return this._xmlHttpRequest.getAllResponseHeaders()
    },
    get_responseData: function () {
        return this._xmlHttpRequest.responseText
    },
    get_statusCode: function () {
        var n = 0;
        try {
            n = this._xmlHttpRequest.status
        } catch (t) { }
        return n
    },
    get_statusText: function () {
        return this._xmlHttpRequest.statusText
    },
    get_xml: function () {
        var t = "parsererror",
            n = this._xmlHttpRequest.responseXML;
        if (n && n.documentElement) navigator.userAgent.indexOf("MSIE") !== -1 && n.setProperty("SelectionLanguage", "XPath");
        else if (n = Sys.Net.XMLDOM(this._xmlHttpRequest.responseText), !n || !n.documentElement) return null;
        return n.documentElement.namespaceURI === "http://www.mozilla.org/newlayout/xml/parsererror.xml" && n.documentElement.tagName === t ? null : n.documentElement.firstChild && n.documentElement.firstChild.tagName === t ? null : n
    },
    abort: function () {
        var n = this;
        n._aborted || n._responseAvailable || n._timedOut || (n._aborted = !0, n._clearTimer(), n._xmlHttpRequest && !n._responseAvailable && (n._xmlHttpRequest.onreadystatechange = Function.emptyMethod, n._xmlHttpRequest.abort(), n._xmlHttpRequest = null, n._webRequest.completed(Sys.EventArgs.Empty)))
    }
}, Sys.Net.XMLHttpExecutor.registerClass("Sys.Net.XMLHttpExecutor", Sys.Net.WebRequestExecutor), Sys.Net._WebRequestManager = function () {
    this._defaultTimeout = 0, this._defaultExecutorType = "Sys.Net.XMLHttpExecutor"
}, Sys.Net._WebRequestManager.prototype = {
    add_invokingRequest: function (n) {
        this._get_eventHandlerList().addHandler("invokingRequest", n)
    },
    remove_invokingRequest: function (n) {
        this._get_eventHandlerList().removeHandler("invokingRequest", n)
    },
    add_completedRequest: function (n) {
        this._get_eventHandlerList().addHandler("completedRequest", n)
    },
    remove_completedRequest: function (n) {
        this._get_eventHandlerList().removeHandler("completedRequest", n)
    },
    _get_eventHandlerList: function () {
        return this._events || (this._events = new Sys.EventHandlerList), this._events
    },
    get_defaultTimeout: function () {
        return this._defaultTimeout
    },
    set_defaultTimeout: function (n) {
        this._defaultTimeout = n
    },
    get_defaultExecutorType: function () {
        return this._defaultExecutorType
    },
    set_defaultExecutorType: function (n) {
        this._defaultExecutorType = n
    },
    executeRequest: function (webRequest) {
        var executor = webRequest.get_executor(),
            failed, executorType, evArgs, handler;
        if (!executor) {
            failed = !1;
            try {
                executorType = eval(this._defaultExecutorType), executor = new executorType
            } catch (a) {
                failed = !0
            }
            webRequest.set_executor(executor)
        }
        executor.get_aborted() || (evArgs = new Sys.Net.NetworkRequestEventArgs(webRequest), handler = this._get_eventHandlerList().getHandler("invokingRequest"), handler && handler(this, evArgs), evArgs.get_cancel() || executor.executeRequest())
    }
}, Sys.Net._WebRequestManager.registerClass("Sys.Net._WebRequestManager"), Sys.Net.WebRequestManager = new Sys.Net._WebRequestManager, Sys.Net.NetworkRequestEventArgs = function (n) {
    Sys.Net.NetworkRequestEventArgs.initializeBase(this), this._webRequest = n
}, Sys.Net.NetworkRequestEventArgs.prototype = {
    get_webRequest: function () {
        return this._webRequest
    }
}, Sys.Net.NetworkRequestEventArgs.registerClass("Sys.Net.NetworkRequestEventArgs", Sys.CancelEventArgs), Sys.Net.WebRequest = function () {
    var t = null,
        n = this;
    n._url = "", n._headers = {}, n._body = t, n._userContext = t, n._httpVerb = t, n._executor = t, n._invokeCalled = !1, n._timeout = 0
}, Sys.Net.WebRequest.prototype = {
    add_completed: function (n) {
        this._get_eventHandlerList().addHandler("completed", n)
    },
    remove_completed: function (n) {
        this._get_eventHandlerList().removeHandler("completed", n)
    },
    completed: function (n) {
        var t = Sys.Net.WebRequestManager._get_eventHandlerList().getHandler("completedRequest");
        t && t(this._executor, n), t = this._get_eventHandlerList().getHandler("completed"), t && t(this._executor, n)
    },
    _get_eventHandlerList: function () {
        return this._events || (this._events = new Sys.EventHandlerList), this._events
    },
    get_url: function () {
        return this._url
    },
    set_url: function (n) {
        this._url = n
    },
    get_headers: function () {
        return this._headers
    },
    get_httpVerb: function () {
        return this._httpVerb === null ? this._body === null ? "GET" : "POST" : this._httpVerb
    },
    set_httpVerb: function (n) {
        this._httpVerb = n
    },
    get_body: function () {
        return this._body
    },
    set_body: function (n) {
        this._body = n
    },
    get_userContext: function () {
        return this._userContext
    },
    set_userContext: function (n) {
        this._userContext = n
    },
    get_executor: function () {
        return this._executor
    },
    set_executor: function (n) {
        this._executor = n, this._executor._set_webRequest(this)
    },
    get_timeout: function () {
        return this._timeout === 0 ? Sys.Net.WebRequestManager.get_defaultTimeout() : this._timeout
    },
    set_timeout: function (n) {
        this._timeout = n
    },
    getResolvedUrl: function () {
        return Sys.Net.WebRequest._resolveUrl(this._url)
    },
    invoke: function () {
        Sys.Net.WebRequestManager.executeRequest(this), this._invokeCalled = !0
    }
}, Sys.Net.WebRequest._resolveUrl = function (n, t) {
    var r, i, u, f, e;
    return n && n.indexOf("://") !== -1 ? n : (t && t.length !== 0 || (r = document.getElementsByTagName("base")[0], t = r && r.href && r.href.length > 0 ? r.href : document.URL), i = t.indexOf("?"), i !== -1 && (t = t.substr(0, i)), i = t.indexOf("#"), i !== -1 && (t = t.substr(0, i)), t = t.substr(0, t.lastIndexOf("/") + 1), !n || n.length === 0) ? t : n.charAt(0) === "/" ? (u = t.indexOf("://"), f = t.indexOf("/", u + 3), t.substr(0, f) + n) : (e = t.lastIndexOf("/"), t.substr(0, e + 1) + n)
}, Sys.Net.WebRequest._createQueryString = function (n, t) {
    var i, r, u, f, e;
    t || (t = encodeURIComponent), i = new Sys.StringBuilder, r = 0;
    for (u in n) (f = n[u], typeof f != "function") && (e = Sys.Serialization.JavaScriptSerializer.serialize(f), r !== 0 && i.append("&"), i.append(u), i.append("="), i.append(t(e)), r++);
    return i.toString()
}, Sys.Net.WebRequest._createUrl = function (n, t) {
    var i, r;
    return t ? (i = Sys.Net.WebRequest._createQueryString(t), i.length > 0 ? (r = "?", n && n.indexOf("?") !== -1 && (r = "&"), n + r + i) : n) : n
}, Sys.Net.WebRequest.registerClass("Sys.Net.WebRequest"), Sys.Net.WebServiceProxy = function () { }, Sys.Net.WebServiceProxy.prototype = {
    get_timeout: function () {
        return this._timeout
    },
    set_timeout: function (n) {
        if (n < 0) throw Error.argumentOutOfRange("value", n, Sys.Res.invalidTimeout);
        this._timeout = n
    },
    get_defaultUserContext: function () {
        return this._userContext
    },
    set_defaultUserContext: function (n) {
        this._userContext = n
    },
    get_defaultSucceededCallback: function () {
        return this._succeeded
    },
    set_defaultSucceededCallback: function (n) {
        this._succeeded = n
    },
    get_defaultFailedCallback: function () {
        return this._failed
    },
    set_defaultFailedCallback: function (n) {
        this._failed = n
    },
    get_path: function () {
        return this._path
    },
    set_path: function (n) {
        this._path = n
    },
    _invoke: function (n, t, i, r, u, f, e) {
        var s = "undefined",
            o = this;
        return (u === null || typeof u == s) && (u = o.get_defaultSucceededCallback()), (f === null || typeof f == s) && (f = o.get_defaultFailedCallback()), (e === null || typeof e == s) && (e = o.get_defaultUserContext()), Sys.Net.WebServiceProxy.invoke(n, t, i, r, u, f, e, o.get_timeout())
    }
}, Sys.Net.WebServiceProxy.registerClass("Sys.Net.WebServiceProxy"), Sys.Net.WebServiceProxy.invoke = function (n, t, i, r, u, f, e, o) {
    function a(n) {
        var h = "application/json",
            r, i, o, c, s, a;
        if (n.get_responseAvailable()) {
            r = n.get_statusCode(), i = null;
            try {
                o = n.getResponseHeader(l), i = o.startsWith(h) ? n.get_object() : o.startsWith("text/xml") ? n.get_xml() : n.get_responseData()
            } catch (v) { }
            c = n.getResponseHeader("jsonerror"), s = c === "true", s ? i && (i = new Sys.Net.WebServiceError(!1, i.Message, i.StackTrace, i.ExceptionType)) : o.startsWith(h) && (i = i.d), r < 200 || r >= 300 || s ? f && (i && s || (i = new Sys.Net.WebServiceError(!1, String.format(Sys.Res.webServiceFailedNoMsg, t), "", "")), i._statusCode = r, f(i, e, t)) : u && u(i, e, t)
        } else a = n.get_timedOut() ? String.format(Sys.Res.webServiceTimedOut, t) : String.format(Sys.Res.webServiceFailedNoMsg, t), f && f(new Sys.Net.WebServiceError(n.get_timedOut(), a, "", ""), e, t)
    }
    var l = "Content-Type",
        s = new Sys.Net.WebRequest,
        c, h;
    return s.get_headers()[l] = "application/json; charset=utf-8", r || (r = {}), c = r, i && c || (c = {}), s.set_url(Sys.Net.WebRequest._createUrl(n + "/" + encodeURIComponent(t), c)), h = null, i || (h = Sys.Serialization.JavaScriptSerializer.serialize(r), h === "{}" && (h = "")), s.set_body(h), s.add_completed(a), o && o > 0 && s.set_timeout(o), s.invoke(), s
}, Sys.Net.WebServiceProxy._generateTypedConstructor = function (n) {
    return function (t) {
        if (t)
            for (var i in t) this[i] = t[i];
        this.__type = n
    }
}, Sys.Net.WebServiceError = function (n, t, i, r) {
    var u = this;
    u._timedOut = n, u._message = t, u._stackTrace = i, u._exceptionType = r, u._statusCode = -1
}, Sys.Net.WebServiceError.prototype = {
    get_timedOut: function () {
        return this._timedOut
    },
    get_statusCode: function () {
        return this._statusCode
    },
    get_message: function () {
        return this._message
    },
    get_stackTrace: function () {
        return this._stackTrace
    },
    get_exceptionType: function () {
        return this._exceptionType
    }
}, Sys.Net.WebServiceError.registerClass("Sys.Net.WebServiceError"), Type.registerNamespace("Sys.Services"), Sys.Services._ProfileService = function () {
    Sys.Services._ProfileService.initializeBase(this), this.properties = {}
}, Sys.Services._ProfileService.DefaultWebServicePath = "", Sys.Services._ProfileService.prototype = {
    _defaultLoadCompletedCallback: null,
    _defaultSaveCompletedCallback: null,
    _path: "",
    _timeout: 0,
    get_defaultLoadCompletedCallback: function () {
        return this._defaultLoadCompletedCallback
    },
    set_defaultLoadCompletedCallback: function (n) {
        this._defaultLoadCompletedCallback = n
    },
    get_defaultSaveCompletedCallback: function () {
        return this._defaultSaveCompletedCallback
    },
    set_defaultSaveCompletedCallback: function (n) {
        this._defaultSaveCompletedCallback = n
    },
    get_path: function () {
        return this._path || ""
    },
    load: function (n, t, i, r) {
        var u = this,
            f, e;
        n ? (e = "GetPropertiesForCurrentUser", f = {
            properties: u._clonePropertyNames(n),
            authenticatedUserOnly: !1
        }) : (e = "GetAllPropertiesForCurrentUser", f = {
            authenticatedUserOnly: !1
        }), u._invoke(u._get_path(), e, !1, f, Function.createDelegate(u, u._onLoadComplete), Function.createDelegate(u, u._onLoadFailed), [t, i, r])
    },
    save: function (n, t, i, r) {
        var u = this,
            f = u._flattenProperties(n, u.properties);
        u._invoke(u._get_path(), "SetPropertiesForCurrentUser", !1, {
            values: f.value,
            authenticatedUserOnly: !1
        }, Function.createDelegate(u, u._onSaveComplete), Function.createDelegate(u, u._onSaveFailed), [t, i, r, f.count])
    },
    _clonePropertyNames: function (n) {
        for (var r = [], u = {}, t, i = 0; i < n.length; i++) t = n[i], u[t] || (Array.add(r, t), u[t] = !0);
        return r
    },
    _flattenProperties: function (n, t, i) {
        var r = {},
            u, f, o = 0,
            e, s, h, c, l;
        if (n && n.length === 0) return {
            value: r,
            count: 0
        };
        for (e in t)
            if (u = t[e], f = i ? i + "." + e : e, Sys.Services.ProfileGroup.isInstanceOfType(u)) {
                s = this._flattenProperties(n, u, f), h = s.value, o += s.count;
                for (c in h) l = h[c], r[c] = l
            } else n && Array.indexOf(n, f) === -1 || (r[f] = u, o++);
        return {
            value: r,
            count: o
        }
    },
    _get_path: function () {
        var n = this.get_path();
        if (n.length || (n = Sys.Services._ProfileService.DefaultWebServicePath), !n || !n.length) throw Error.invalidOperation(Sys.Res.servicePathNotSet);
        return n
    },
    _onLoadComplete: function (n, t, i) {
        var r = this,
            u, f, e, o;
        if (typeof n != "object") throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType, i, "Object"));
        u = r._unflattenProperties(n);
        for (f in u) r.properties[f] = u[f];
        e = t[0] || r.get_defaultLoadCompletedCallback() || r.get_defaultSucceededCallback(), e && (o = t[2] || r.get_defaultUserContext(), e(n.length, o, "Sys.Services.ProfileService.load"))
    },
    _onLoadFailed: function (n, t) {
        var i = t[1] || this.get_defaultFailedCallback(),
            r;
        i && (r = t[2] || this.get_defaultUserContext(), i(n, r, "Sys.Services.ProfileService.load"))
    },
    _onSaveComplete: function (n, t, i) {
        var r = t[3],
            u, f;
        if (n !== null)
            if (n instanceof Array) r -= n.length;
            else if (typeof n == "number") r = n;
            else throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType, i, "Array"));
        u = t[0] || this.get_defaultSaveCompletedCallback() || this.get_defaultSucceededCallback(), u && (f = t[2] || this.get_defaultUserContext(), u(r, f, "Sys.Services.ProfileService.save"))
    },
    _onSaveFailed: function (n, t) {
        var i = t[1] || this.get_defaultFailedCallback(),
            r;
        i && (r = t[2] || this.get_defaultUserContext(), i(n, r, "Sys.Services.ProfileService.save"))
    },
    _unflattenProperties: function (n) {
        var r = {},
            u, f, o = 0,
            t, e, i;
        for (t in n) o++, f = n[t], u = t.indexOf("."), u !== -1 ? (e = t.substr(0, u), t = t.substr(u + 1), i = r[e], i && Sys.Services.ProfileGroup.isInstanceOfType(i) || (i = new Sys.Services.ProfileGroup, r[e] = i), i[t] = f) : r[t] = f;
        return n.length = o, r
    }
}, Sys.Services._ProfileService.registerClass("Sys.Services._ProfileService", Sys.Net.WebServiceProxy), Sys.Services.ProfileService = new Sys.Services._ProfileService, Sys.Services.ProfileGroup = function (n) {
    if (n)
        for (var t in n) this[t] = n[t]
}, Sys.Services.ProfileGroup.registerClass("Sys.Services.ProfileGroup"), Sys.Services._AuthenticationService = function () {
    Sys.Services._AuthenticationService.initializeBase(this)
}, Sys.Services._AuthenticationService.DefaultWebServicePath = "", Sys.Services._AuthenticationService.prototype = {
    _defaultLoginCompletedCallback: null,
    _defaultLogoutCompletedCallback: null,
    _path: "",
    _timeout: 0,
    _authenticated: !1,
    get_defaultLoginCompletedCallback: function () {
        return this._defaultLoginCompletedCallback
    },
    set_defaultLoginCompletedCallback: function (n) {
        this._defaultLoginCompletedCallback = n
    },
    get_defaultLogoutCompletedCallback: function () {
        return this._defaultLogoutCompletedCallback
    },
    set_defaultLogoutCompletedCallback: function (n) {
        this._defaultLogoutCompletedCallback = n
    },
    get_isLoggedIn: function () {
        return this._authenticated
    },
    get_path: function () {
        return this._path || ""
    },
    login: function (n, t, i, r, u, f, e, o) {
        var s = this;
        s._invoke(s._get_path(), "Login", !1, {
            userName: n,
            password: t,
            createPersistentCookie: i
        }, Function.createDelegate(s, s._onLoginComplete), Function.createDelegate(s, s._onLoginFailed), [n, t, i, r, u, f, e, o])
    },
    logout: function (n, t, i, r) {
        var u = this;
        u._invoke(u._get_path(), "Logout", !1, {}, Function.createDelegate(u, u._onLogoutComplete), Function.createDelegate(u, u._onLogoutFailed), [n, t, i, r])
    },
    _get_path: function () {
        var n = this.get_path();
        if (n.length || (n = Sys.Services._AuthenticationService.DefaultWebServicePath), !n || !n.length) throw Error.invalidOperation(Sys.Res.servicePathNotSet);
        return n
    },
    _onLoginComplete: function (n, t, i) {
        var e = "Sys.Services.AuthenticationService.login",
            r = this;
        if (typeof n != "boolean") throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType, i, "Boolean"));
        var f = t[4],
            o = t[7] || r.get_defaultUserContext(),
            u = t[5] || r.get_defaultLoginCompletedCallback() || r.get_defaultSucceededCallback();
        n ? (r._authenticated = !0, u && u(!0, o, e), typeof f != "undefined" && f !== null && (window.location.href = f)) : u && u(!1, o, e)
    },
    _onLoginFailed: function (n, t) {
        var i = t[6] || this.get_defaultFailedCallback(),
            r;
        i && (r = t[7] || this.get_defaultUserContext(), i(n, r, "Sys.Services.AuthenticationService.login"))
    },
    _onLogoutComplete: function (n, t, i) {
        var r = this;
        if (n !== null) throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType, i, "null"));
        var u = t[0],
            e = t[3] || r.get_defaultUserContext(),
            f = t[1] || r.get_defaultLogoutCompletedCallback() || r.get_defaultSucceededCallback();
        r._authenticated = !1, f && f(null, e, "Sys.Services.AuthenticationService.logout"), u ? window.location.href = u : window.location.reload()
    },
    _onLogoutFailed: function (n, t) {
        var i = t[2] || this.get_defaultFailedCallback();
        i && i(n, t[3], "Sys.Services.AuthenticationService.logout")
    },
    _setAuthenticated: function (n) {
        this._authenticated = n
    }
}, Sys.Services._AuthenticationService.registerClass("Sys.Services._AuthenticationService", Sys.Net.WebServiceProxy), Sys.Services.AuthenticationService = new Sys.Services._AuthenticationService, Sys.Services._RoleService = function () {
    Sys.Services._RoleService.initializeBase(this), this._roles = []
}, Sys.Services._RoleService.DefaultWebServicePath = "", Sys.Services._RoleService.prototype = {
    _defaultLoadCompletedCallback: null,
    _rolesIndex: null,
    _timeout: 0,
    _path: "",
    get_defaultLoadCompletedCallback: function () {
        return this._defaultLoadCompletedCallback
    },
    set_defaultLoadCompletedCallback: function (n) {
        this._defaultLoadCompletedCallback = n
    },
    get_path: function () {
        return this._path || ""
    },
    get_roles: function () {
        return Array.clone(this._roles)
    },
    isUserInRole: function (n) {
        var t = this._get_rolesIndex()[n.trim().toLowerCase()];
        return !!t
    },
    load: function (n, t, i) {
        var r = this;
        Sys.Net.WebServiceProxy.invoke(r._get_path(), "GetRolesForCurrentUser", !1, {}, Function.createDelegate(r, r._onLoadComplete), Function.createDelegate(r, r._onLoadFailed), [n, t, i], r.get_timeout())
    },
    _get_path: function () {
        var n = this.get_path();
        if (n && n.length || (n = Sys.Services._RoleService.DefaultWebServicePath), !n || !n.length) throw Error.invalidOperation(Sys.Res.servicePathNotSet);
        return n
    },
    _get_rolesIndex: function () {
        var n = this,
            i, t;
        if (!n._rolesIndex) {
            for (i = {}, t = 0; t < n._roles.length; t++) i[n._roles[t].toLowerCase()] = !0;
            n._rolesIndex = i
        }
        return n._rolesIndex
    },
    _onLoadComplete: function (n, t, i) {
        var r = this,
            u, f, e;
        if (n && !(n instanceof Array)) throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType, i, "Array"));
        r._roles = n, r._rolesIndex = null, u = t[0] || r.get_defaultLoadCompletedCallback() || r.get_defaultSucceededCallback(), u && (f = t[2] || r.get_defaultUserContext(), e = Array.clone(n), u(e, f, "Sys.Services.RoleService.load"))
    },
    _onLoadFailed: function (n, t) {
        var i = t[1] || this.get_defaultFailedCallback(),
            r;
        i && (r = t[2] || this.get_defaultUserContext(), i(n, r, "Sys.Services.RoleService.load"))
    }
}, Sys.Services._RoleService.registerClass("Sys.Services._RoleService", Sys.Net.WebServiceProxy), Sys.Services.RoleService = new Sys.Services._RoleService, Type.registerNamespace("Sys.Serialization"), Sys.Serialization.JavaScriptSerializer = function () { }, Sys.Serialization.JavaScriptSerializer.registerClass("Sys.Serialization.JavaScriptSerializer"), Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs = [], Sys.Serialization.JavaScriptSerializer._charsToEscape = [], Sys.Serialization.JavaScriptSerializer._dateRegEx = new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"', "g"), Sys.Serialization.JavaScriptSerializer._escapeChars = {}, Sys.Serialization.JavaScriptSerializer._escapeRegEx = new RegExp('["\\\\\\x00-\\x1F]', "i"), Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal = new RegExp('["\\\\\\x00-\\x1F]', "g"), Sys.Serialization.JavaScriptSerializer._jsonRegEx = new RegExp("[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]", "g"), Sys.Serialization.JavaScriptSerializer._jsonStringRegEx = new RegExp('"(\\\\.|[^"\\\\])*"', "g"), Sys.Serialization.JavaScriptSerializer._serverTypeFieldName = "__type", Sys.Serialization.JavaScriptSerializer._init = function () {
    var i = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000b", "\\f", "\\r", "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a", "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f"],
        n, t;
    for (Sys.Serialization.JavaScriptSerializer._charsToEscape[0] = "\\", Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs["\\"] = new RegExp("\\\\", "g"), Sys.Serialization.JavaScriptSerializer._escapeChars["\\"] = "\\\\", Sys.Serialization.JavaScriptSerializer._charsToEscape[1] = '"', Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs['"'] = new RegExp('"', "g"), Sys.Serialization.JavaScriptSerializer._escapeChars['"'] = '\\"', n = 0; n < 32; n++) t = String.fromCharCode(n), Sys.Serialization.JavaScriptSerializer._charsToEscape[n + 2] = t, Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[t] = new RegExp(t, "g"), Sys.Serialization.JavaScriptSerializer._escapeChars[t] = i[n]
}, Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder = function (n, t) {
    t.append(n.toString())
}, Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder = function (n, t) {
    if (isFinite(n)) t.append(String(n));
    else throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers);
}, Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder = function (n, t) {
    var r, i;
    if (t.append('"'), Sys.Serialization.JavaScriptSerializer._escapeRegEx.test(n))
        if (Sys.Serialization.JavaScriptSerializer._charsToEscape.length === 0 && Sys.Serialization.JavaScriptSerializer._init(), n.length < 128) n = n.replace(Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal, function (n) {
            return Sys.Serialization.JavaScriptSerializer._escapeChars[n]
        });
        else
            for (r = 0; r < 34; r++) i = Sys.Serialization.JavaScriptSerializer._charsToEscape[r], n.indexOf(i) !== -1 && (n = Sys.Browser.agent === Sys.Browser.Opera || Sys.Browser.agent === Sys.Browser.FireFox ? n.split(i).join(Sys.Serialization.JavaScriptSerializer._escapeChars[i]) : n.replace(Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[i], Sys.Serialization.JavaScriptSerializer._escapeChars[i]));
    t.append(n), t.append('"')
}, Sys.Serialization.JavaScriptSerializer._serializeWithBuilder = function (n, t, i, r) {
    var u, f, e, o, h, s;
    switch (typeof n) {
        case "object":
            if (n)
                if (Number.isInstanceOfType(n)) Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(n, t);
                else if (Boolean.isInstanceOfType(n)) Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(n, t);
                else if (String.isInstanceOfType(n)) Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(n, t);
                else if (Array.isInstanceOfType(n)) {
                    for (t.append("["), u = 0; u < n.length; ++u) u > 0 && t.append(","), Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(n[u], t, !1, r);
                    t.append("]")
                } else {
                    if (Date.isInstanceOfType(n)) {
                        t.append('"\\/Date('), t.append(n.getTime()), t.append(')\\/"');
                        break
                    }
                    f = [], e = 0;
                    for (o in n) o.startsWith("$") || (o === Sys.Serialization.JavaScriptSerializer._serverTypeFieldName && e !== 0 ? (f[e++] = f[0], f[0] = o) : f[e++] = o);
                    for (i && f.sort(), t.append("{"), h = !1, u = 0; u < e; u++) s = n[f[u]], typeof s != "undefined" && typeof s != "function" && (h ? t.append(",") : h = !0, Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(f[u], t, i, r), t.append(":"), Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(s, t, i, r));
                    t.append("}")
                } else t.append("null");
            break;
        case "number":
            Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(n, t);
            break;
        case "string":
            Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(n, t);
            break;
        case "boolean":
            Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(n, t);
            break;
        default:
            t.append("null")
    }
}, Sys.Serialization.JavaScriptSerializer.serialize = function (n) {
    var t = new Sys.StringBuilder;
    return Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(n, t, !1), t.toString()
}, Sys.Serialization.JavaScriptSerializer.deserialize = function (n, t) {
    if (n.length === 0) throw Error.argument("data", Sys.Res.cannotDeserializeEmptyString);
    try {
        var r = window._offsetTime && n.startsWith('{"d":{') ? String.format("+($2%100000==0?({0}):0)", window._offsetTime) : "",
            i = n.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx, String.format("$1new Date($2{0})", r));
        if (t && Sys.Serialization.JavaScriptSerializer._jsonRegEx.test(i.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx, ""))) throw null;
        return eval("(" + i + ")")
    } catch (u) {
        throw Error.argument("data", Sys.Res.cannotDeserializeInvalidJson);
    }
}, Sys.CultureInfo = function (n, t, i) {
    this.name = n, this.numberFormat = t, this.dateTimeFormat = i
}, Sys.CultureInfo.prototype = {
    _getDateTimeFormats: function () {
        var t = this,
            n;
        return t._dateTimeFormats || (n = t.dateTimeFormat, t._dateTimeFormats = [n.MonthDayPattern, n.YearMonthPattern, n.ShortDatePattern, n.ShortTimePattern, n.LongDatePattern, n.LongTimePattern, n.FullDateTimePattern, n.RFC1123Pattern, n.SortableDateTimePattern, n.UniversalSortableDateTimePattern]), t._dateTimeFormats
    },
    _getMonthIndex: function (n) {
        var t = this;
        return t._upperMonths || (t._upperMonths = t._toUpperArray(t.dateTimeFormat.MonthNames)), Array.indexOf(t._upperMonths, t._toUpper(n))
    },
    _getAbbrMonthIndex: function (n) {
        var t = this;
        return t._upperAbbrMonths || (t._upperAbbrMonths = t._toUpperArray(t.dateTimeFormat.AbbreviatedMonthNames)), Array.indexOf(t._upperAbbrMonths, t._toUpper(n))
    },
    _getDayIndex: function (n) {
        var t = this;
        return t._upperDays || (t._upperDays = t._toUpperArray(t.dateTimeFormat.DayNames)), Array.indexOf(t._upperDays, t._toUpper(n))
    },
    _getAbbrDayIndex: function (n) {
        var t = this;
        return t._upperAbbrDays || (t._upperAbbrDays = t._toUpperArray(t.dateTimeFormat.AbbreviatedDayNames)), Array.indexOf(t._upperAbbrDays, t._toUpper(n))
    },
    _toUpperArray: function (n) {
        for (var i = [], t = 0, r = n.length; t < r; t++) i[t] = this._toUpper(n[t]);
        return i
    },
    _toUpper: function (n) {
        return n.split(" ").join(" ").toUpperCase()
    }
}, Sys.CultureInfo._parse = function (n) {
    var t = Sys.Serialization.JavaScriptSerializer.deserialize(n);
    return new Sys.CultureInfo(t.name, t.numberFormat, t.dateTimeFormat)
}, Sys.CultureInfo.registerClass("Sys.CultureInfo"), Sys.CultureInfo.InvariantCulture = Sys.CultureInfo._parse('{"name":"","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":true,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"¤","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"‰","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":true},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, dd MMMM yyyy HH:mm:ss","LongDatePattern":"dddd, dd MMMM yyyy","LongTimePattern":"HH:mm:ss","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'","ShortDatePattern":"MM/dd/yyyy","ShortTimePattern":"HH:mm","SortableDateTimePattern":"yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'","YearMonthPattern":"yyyy MMMM","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":true,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]}}'), typeof __cultureInfo == "undefined" && (__cultureInfo = '{"name":"en-US","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":false,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"$","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"‰","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":false},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, MMMM dd, yyyy h:mm:ss tt","LongDatePattern":"dddd, MMMM dd, yyyy","LongTimePattern":"h:mm:ss tt","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'","ShortDatePattern":"M/d/yyyy","ShortTimePattern":"h:mm tt","SortableDateTimePattern":"yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'","YearMonthPattern":"MMMM, yyyy","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":false,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]}}'), Sys.CultureInfo.CurrentCulture = Sys.CultureInfo._parse(__cultureInfo), delete __cultureInfo, Sys.UI.Behavior = function (n) {
    var t = this,
        i;
    Sys.UI.Behavior.initializeBase(t), t._element = n, i = n._behaviors, i ? i[i.length] = t : n._behaviors = [t]
}, Sys.UI.Behavior.prototype = {
    _name: null,
    get_element: function () {
        return this._element
    },
    get_id: function () {
        var n = this,
            t = Sys.UI.Behavior.callBaseMethod(n, "get_id");
        return t ? t : !n._element || !n._element.id ? "" : n._element.id + "$" + n.get_name()
    },
    get_name: function () {
        var t = this,
            n, i;
        return t._name ? t._name : (n = Object.getTypeName(t), i = n.lastIndexOf("."), i != -1 && (n = n.substr(i + 1)), t.get_isInitialized() || (t._name = n), n)
    },
    set_name: function (n) {
        this._name = n
    },
    initialize: function () {
        var n = this,
            t;
        Sys.UI.Behavior.callBaseMethod(n, "initialize"), t = n.get_name(), t && (n._element[t] = n)
    },
    dispose: function () {
        var n = this,
            t;
        (Sys.UI.Behavior.callBaseMethod(n, "dispose"), n._element) && (t = n.get_name(), t && (n._element[t] = null), Array.remove(n._element._behaviors, n), delete n._element)
    }
}, Sys.UI.Behavior.registerClass("Sys.UI.Behavior", Sys.Component), Sys.UI.Behavior.getBehaviorByName = function (n, t) {
    var i = n[t];
    return i && Sys.UI.Behavior.isInstanceOfType(i) ? i : null
}, Sys.UI.Behavior.getBehaviors = function (n) {
    return n._behaviors ? Array.clone(n._behaviors) : []
}, Sys.UI.Behavior.getBehaviorsByType = function (n, t) {
    var r = n._behaviors,
        u = [],
        i, f;
    if (r)
        for (i = 0, f = r.length; i < f; i++) t.isInstanceOfType(r[i]) && (u[u.length] = r[i]);
    return u
}, Sys.UI.VisibilityMode = function () {
    throw Error.notImplemented();
}, Sys.UI.VisibilityMode.prototype = {
    hide: 0,
    collapse: 1
}, Sys.UI.VisibilityMode.registerEnum("Sys.UI.VisibilityMode"), Sys.UI.Control = function (n) {
    Sys.UI.Control.initializeBase(this), this._element = n, n.control = this
}, Sys.UI.Control.prototype = {
    _parent: null,
    _visibilityMode: Sys.UI.VisibilityMode.hide,
    get_element: function () {
        return this._element
    },
    get_id: function () {
        return this._element ? this._element.id : ""
    },
    set_id: function () {
        throw Error.invalidOperation(Sys.Res.cantSetId);
    },
    get_parent: function () {
        var t = this,
            n;
        if (t._parent) return t._parent;
        if (!t._element) return null;
        for (n = t._element.parentNode; n;) {
            if (n.control) return n.control;
            n = n.parentNode
        }
        return null
    },
    set_parent: function (n) {
        this._parent = n
    },
    get_visibilityMode: function () {
        return Sys.UI.DomElement.getVisibilityMode(this._element)
    },
    set_visibilityMode: function (n) {
        Sys.UI.DomElement.setVisibilityMode(this._element, n)
    },
    get_visible: function () {
        return Sys.UI.DomElement.getVisible(this._element)
    },
    set_visible: function (n) {
        Sys.UI.DomElement.setVisible(this._element, n)
    },
    addCssClass: function (n) {
        Sys.UI.DomElement.addCssClass(this._element, n)
    },
    dispose: function () {
        var n = this;
        Sys.UI.Control.callBaseMethod(n, "dispose"), n._element && (n._element.control = undefined, delete n._element), n._parent && delete n._parent
    },
    onBubbleEvent: function () {
        return !1
    },
    raiseBubbleEvent: function (n, t) {
        for (var i = this.get_parent(); i;) {
            if (i.onBubbleEvent(n, t)) return;
            i = i.get_parent()
        }
    },
    removeCssClass: function (n) {
        Sys.UI.DomElement.removeCssClass(this._element, n)
    },
    toggleCssClass: function (n) {
        Sys.UI.DomElement.toggleCssClass(this._element, n)
    }
}, Sys.UI.Control.registerClass("Sys.UI.Control", Sys.Component), Type.registerNamespace("Sys"), Sys.Res = {
    argumentInteger: "Value must be an integer.",
    scriptLoadMultipleCallbacks: "The script '{0}' contains multiple calls to Sys.Application.notifyScriptLoaded(). Only one is allowed.",
    invokeCalledTwice: "Cannot call invoke more than once.",
    webServiceFailed: "The server method '{0}' failed with the following error: {1}",
    webServiceInvalidJsonWrapper: "The server method '{0}' returned invalid data. The 'd' property is missing from the JSON wrapper.",
    argumentType: "Object cannot be converted to the required type.",
    argumentNull: "Value cannot be null.",
    controlCantSetId: "The id property can't be set on a control.",
    formatBadFormatSpecifier: "Format specifier was invalid.",
    webServiceFailedNoMsg: "The server method '{0}' failed.",
    argumentDomElement: "Value must be a DOM element.",
    invalidExecutorType: "Could not create a valid Sys.Net.WebRequestExecutor from: {0}.",
    cannotCallBeforeResponse: "Cannot call {0} when responseAvailable is false.",
    actualValue: "Actual value was {0}.",
    enumInvalidValue: "'{0}' is not a valid value for enum {1}.",
    scriptLoadFailed: "The script '{0}' could not be loaded.",
    parameterCount: "Parameter count mismatch.",
    cannotDeserializeEmptyString: "Cannot deserialize empty string.",
    formatInvalidString: "Input string was not in a correct format.",
    invalidTimeout: "Value must be greater than or equal to zero.",
    cannotAbortBeforeStart: "Cannot abort when executor has not started.",
    argument: "Value does not fall within the expected range.",
    cannotDeserializeInvalidJson: "Cannot deserialize. The data does not correspond to valid JSON.",
    invalidHttpVerb: "httpVerb cannot be set to an empty or null string.",
    nullWebRequest: "Cannot call executeRequest with a null webRequest.",
    eventHandlerInvalid: "Handler was not added through the Sys.UI.DomEvent.addHandler method.",
    cannotSerializeNonFiniteNumbers: "Cannot serialize non finite numbers.",
    argumentUndefined: "Value cannot be undefined.",
    webServiceInvalidReturnType: "The server method '{0}' returned an invalid type. Expected type: {1}",
    servicePathNotSet: "The path to the web service has not been set.",
    argumentTypeWithTypes: "Object of type '{0}' cannot be converted to type '{1}'.",
    cannotCallOnceStarted: "Cannot call {0} once started.",
    badBaseUrl1: "Base URL does not contain ://.",
    badBaseUrl2: "Base URL does not contain another /.",
    badBaseUrl3: "Cannot find last / in base URL.",
    setExecutorAfterActive: "Cannot set executor after it has become active.",
    paramName: "Parameter name: {0}",
    cannotCallOutsideHandler: "Cannot call {0} outside of a completed event handler.",
    cannotSerializeObjectWithCycle: "Cannot serialize object with cyclic reference within child properties.",
    format: "One of the identified items was in an invalid format.",
    assertFailedCaller: "Assertion Failed: {0}\r\nat {1}",
    argumentOutOfRange: "Specified argument was out of the range of valid values.",
    webServiceTimedOut: "The server method '{0}' timed out.",
    notImplemented: "The method or operation is not implemented.",
    assertFailed: "Assertion Failed: {0}",
    invalidOperation: "Operation is not valid due to the current state of the object.",
    breakIntoDebugger: "{0}\r\n\r\nBreak into debugger?"
}, Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.BehaviorBase = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.BehaviorBase.initializeBase(t, [n]), t._clientStateFieldID = i, t._pageRequestManager = i, t._partialUpdateBeginRequestHandler = i, t._partialUpdateEndRequestHandler = i
}, AjaxControlToolkit.BehaviorBase.prototype = {
    initialize: function () {
        AjaxControlToolkit.BehaviorBase.callBaseMethod(this, "initialize")
    },
    dispose: function () {
        var n = this;
        AjaxControlToolkit.BehaviorBase.callBaseMethod(n, "dispose"), n._pageRequestManager && (n._partialUpdateBeginRequestHandler && (n._pageRequestManager.remove_beginRequest(n._partialUpdateBeginRequestHandler), n._partialUpdateBeginRequestHandler = null), n._partialUpdateEndRequestHandler && (n._pageRequestManager.remove_endRequest(n._partialUpdateEndRequestHandler), n._partialUpdateEndRequestHandler = null), n._pageRequestManager = null)
    },
    get_ClientStateFieldID: function () {
        return this._clientStateFieldID
    },
    set_ClientStateFieldID: function (n) {
        this._clientStateFieldID != n && (this._clientStateFieldID = n, this.raisePropertyChanged("ClientStateFieldID"))
    },
    get_ClientState: function () {
        if (this._clientStateFieldID) {
            var n = document.getElementById(this._clientStateFieldID);
            if (n) return n.value
        }
        return null
    },
    set_ClientState: function (n) {
        if (this._clientStateFieldID) {
            var t = document.getElementById(this._clientStateFieldID);
            t && (t.value = n)
        }
    },
    registerPartialUpdateEvents: function () {
        var n = this;
        Sys && Sys.WebForms && Sys.WebForms.PageRequestManager && (n._pageRequestManager = Sys.WebForms.PageRequestManager.getInstance(), n._pageRequestManager && (n._partialUpdateBeginRequestHandler = Function.createDelegate(n, n._partialUpdateBeginRequest), n._pageRequestManager.add_beginRequest(n._partialUpdateBeginRequestHandler), n._partialUpdateEndRequestHandler = Function.createDelegate(n, n._partialUpdateEndRequest), n._pageRequestManager.add_endRequest(n._partialUpdateEndRequestHandler)))
    },
    _partialUpdateBeginRequest: function () { },
    _partialUpdateEndRequest: function () { }
}, AjaxControlToolkit.BehaviorBase.registerClass("AjaxControlToolkit.BehaviorBase", Sys.UI.Behavior), AjaxControlToolkit.DynamicPopulateBehaviorBase = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.DynamicPopulateBehaviorBase.initializeBase(t, [n]), t._DynamicControlID = i, t._DynamicContextKey = i, t._DynamicServicePath = i, t._DynamicServiceMethod = i, t._cacheDynamicResults = !1, t._dynamicPopulateBehavior = i, t._populatingHandler = i, t._populatedHandler = i
}, AjaxControlToolkit.DynamicPopulateBehaviorBase.prototype = {
    initialize: function () {
        var n = this;
        AjaxControlToolkit.DynamicPopulateBehaviorBase.callBaseMethod(n, "initialize"), n._populatingHandler = Function.createDelegate(n, n._onPopulating), n._populatedHandler = Function.createDelegate(n, n._onPopulated)
    },
    dispose: function () {
        var n = this;
        n._populatedHandler && (n._dynamicPopulateBehavior && n._dynamicPopulateBehavior.remove_populated(n._populatedHandler), n._populatedHandler = null), n._populatingHandler && (n._dynamicPopulateBehavior && n._dynamicPopulateBehavior.remove_populating(n._populatingHandler), n._populatingHandler = null), n._dynamicPopulateBehavior && (n._dynamicPopulateBehavior.dispose(), n._dynamicPopulateBehavior = null), AjaxControlToolkit.DynamicPopulateBehaviorBase.callBaseMethod(n, "dispose")
    },
    populate: function (n) {
        var t = this;
        t._dynamicPopulateBehavior && t._dynamicPopulateBehavior.get_element() != $get(t._DynamicControlID) && (t._dynamicPopulateBehavior.dispose(), t._dynamicPopulateBehavior = null), !t._dynamicPopulateBehavior && t._DynamicControlID && t._DynamicServiceMethod && (t._dynamicPopulateBehavior = $create(AjaxControlToolkit.DynamicPopulateBehavior, {
            id: t.get_id() + "_DynamicPopulateBehavior",
            ContextKey: t._DynamicContextKey,
            ServicePath: t._DynamicServicePath,
            ServiceMethod: t._DynamicServiceMethod,
            cacheDynamicResults: t._cacheDynamicResults
        }, null, null, $get(t._DynamicControlID)), t._dynamicPopulateBehavior.add_populating(t._populatingHandler), t._dynamicPopulateBehavior.add_populated(t._populatedHandler)), t._dynamicPopulateBehavior && t._dynamicPopulateBehavior.populate(n ? n : t._DynamicContextKey)
    },
    _onPopulating: function (n, t) {
        this.raisePopulating(t)
    },
    _onPopulated: function (n, t) {
        this.raisePopulated(t)
    },
    get_dynamicControlID: function () {
        return this._DynamicControlID
    },
    get_DynamicControlID: this.get_dynamicControlID,
    set_dynamicControlID: function (n) {
        var t = this;
        t._DynamicControlID != n && (t._DynamicControlID = n, t.raisePropertyChanged("dynamicControlID"), t.raisePropertyChanged("DynamicControlID"))
    },
    set_DynamicControlID: this.set_dynamicControlID,
    get_dynamicContextKey: function () {
        return this._DynamicContextKey
    },
    get_DynamicContextKey: this.get_dynamicContextKey,
    set_dynamicContextKey: function (n) {
        var t = this;
        t._DynamicContextKey != n && (t._DynamicContextKey = n, t.raisePropertyChanged("dynamicContextKey"), t.raisePropertyChanged("DynamicContextKey"))
    },
    set_DynamicContextKey: this.set_dynamicContextKey,
    get_dynamicServicePath: function () {
        return this._DynamicServicePath
    },
    get_DynamicServicePath: this.get_dynamicServicePath,
    set_dynamicServicePath: function (n) {
        var t = this;
        t._DynamicServicePath != n && (t._DynamicServicePath = n, t.raisePropertyChanged("dynamicServicePath"), t.raisePropertyChanged("DynamicServicePath"))
    },
    set_DynamicServicePath: this.set_dynamicServicePath,
    get_dynamicServiceMethod: function () {
        return this._DynamicServiceMethod
    },
    get_DynamicServiceMethod: this.get_dynamicServiceMethod,
    set_dynamicServiceMethod: function (n) {
        var t = this;
        t._DynamicServiceMethod != n && (t._DynamicServiceMethod = n, t.raisePropertyChanged("dynamicServiceMethod"), t.raisePropertyChanged("DynamicServiceMethod"))
    },
    set_DynamicServiceMethod: this.set_dynamicServiceMethod,
    get_cacheDynamicResults: function () {
        return this._cacheDynamicResults
    },
    set_cacheDynamicResults: function (n) {
        this._cacheDynamicResults != n && (this._cacheDynamicResults = n, this.raisePropertyChanged("cacheDynamicResults"))
    },
    add_populated: function (n) {
        this.get_events().addHandler("populated", n)
    },
    remove_populated: function (n) {
        this.get_events().removeHandler("populated", n)
    },
    raisePopulated: function (n) {
        var t = this.get_events().getHandler("populated");
        t && t(this, n)
    },
    add_populating: function (n) {
        this.get_events().addHandler("populating", n)
    },
    remove_populating: function (n) {
        this.get_events().removeHandler("populating", n)
    },
    raisePopulating: function (n) {
        var t = this.get_events().getHandler("populating");
        t && t(this, n)
    }
}, AjaxControlToolkit.DynamicPopulateBehaviorBase.registerClass("AjaxControlToolkit.DynamicPopulateBehaviorBase", AjaxControlToolkit.BehaviorBase), AjaxControlToolkit.ControlBase = function (n) {
    var t = this;
    AjaxControlToolkit.ControlBase.initializeBase(t, [n]), t._clientStateField = null, t._callbackTarget = null, t._onsubmit$delegate = Function.createDelegate(t, t._onsubmit), t._oncomplete$delegate = Function.createDelegate(t, t._oncomplete), t._onerror$delegate = Function.createDelegate(t, t._onerror)
}, AjaxControlToolkit.ControlBase.__doPostBack = function (n, t) {
    if (!Sys.WebForms.PageRequestManager.getInstance().get_isInAsyncPostBack())
        for (var i = 0; i < AjaxControlToolkit.ControlBase.onsubmitCollection.length; i++) AjaxControlToolkit.ControlBase.onsubmitCollection[i]();
    Function.createDelegate(window, AjaxControlToolkit.ControlBase.__doPostBackSaved)(n, t)
}, AjaxControlToolkit.ControlBase.prototype = {
    initialize: function () {
        var t = "undefined",
            n = this;
        AjaxControlToolkit.ControlBase.callBaseMethod(n, "initialize"), n._clientStateField && n.loadClientState(n._clientStateField.value), typeof Sys.WebForms !== t && typeof Sys.WebForms.PageRequestManager !== t ? (Array.add(Sys.WebForms.PageRequestManager.getInstance()._onSubmitStatements, n._onsubmit$delegate), (AjaxControlToolkit.ControlBase.__doPostBackSaved == null || typeof AjaxControlToolkit.ControlBase.__doPostBackSaved == t) && (AjaxControlToolkit.ControlBase.__doPostBackSaved = window.__doPostBack, window.__doPostBack = AjaxControlToolkit.ControlBase.__doPostBack, AjaxControlToolkit.ControlBase.onsubmitCollection = []), Array.add(AjaxControlToolkit.ControlBase.onsubmitCollection, n._onsubmit$delegate)) : $addHandler(document.forms[0], "submit", n._onsubmit$delegate)
    },
    dispose: function () {
        var t = "undefined",
            n = this;
        typeof Sys.WebForms !== t && typeof Sys.WebForms.PageRequestManager !== t ? (Array.remove(AjaxControlToolkit.ControlBase.onsubmitCollection, n._onsubmit$delegate), Array.remove(Sys.WebForms.PageRequestManager.getInstance()._onSubmitStatements, n._onsubmit$delegate)) : $removeHandler(document.forms[0], "submit", n._onsubmit$delegate), AjaxControlToolkit.ControlBase.callBaseMethod(n, "dispose")
    },
    findElement: function (n) {
        return $get(this.get_id() + "_" + n.split(":").join("_"))
    },
    get_clientStateField: function () {
        return this._clientStateField
    },
    set_clientStateField: function (n) {
        var t = this;
        if (t.get_isInitialized()) throw Error.invalidOperation(AjaxControlToolkit.Resources.ExtenderBase_CannotSetClientStateField);
        t._clientStateField != n && (t._clientStateField = n, t.raisePropertyChanged("clientStateField"))
    },
    loadClientState: function () { },
    saveClientState: function () {
        return null
    },
    _invoke: function (n, t, i) {
        var r = this,
            f, u, e, o;
        if (!r._callbackTarget) throw Error.invalidOperation(AjaxControlToolkit.Resources.ExtenderBase_ControlNotRegisteredForCallbacks);
        if (typeof WebForm_DoCallback == "undefined") throw Error.invalidOperation(AjaxControlToolkit.Resources.ExtenderBase_PageNotRegisteredForCallbacks);
        for (f = [], u = 0; u < t.length; u++) f[u] = t[u];
        if (e = r.saveClientState(), e != null && !String.isInstanceOfType(e)) throw Error.invalidOperation(AjaxControlToolkit.Resources.ExtenderBase_InvalidClientStateType);
        o = Sys.Serialization.JavaScriptSerializer.serialize({
            name: n,
            args: f,
            state: r.saveClientState()
        }), WebForm_DoCallback(r._callbackTarget, o, r._oncomplete$delegate, i, r._onerror$delegate, !0)
    },
    _oncomplete: function (n, t) {
        if (n = Sys.Serialization.JavaScriptSerializer.deserialize(n), n.error) throw Error.create(n.error);
        this.loadClientState(n.state), t(n.result)
    },
    _onerror: function (n) {
        throw Error.create(n);
    },
    _onsubmit: function () {
        return this._clientStateField && (this._clientStateField.value = this.saveClientState()), !0
    }
}, AjaxControlToolkit.ControlBase.registerClass("AjaxControlToolkit.ControlBase", Sys.UI.Control), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.Resources = {
    Animation_ChildrenNotAllowed: 'AjaxControlToolkit.Animation.createAnimation cannot add child animations to type "{0}" that does not derive from AjaxControlToolkit.Animation.ParentAnimation',
    ExtenderBase_CannotSetClientStateField: "clientStateField can only be set before initialization",
    Animation_TargetNotFound: 'AjaxControlToolkit.Animation.Animation.set_animationTarget requires the ID of a Sys.UI.DomElement or Sys.UI.Control.  No element or control could be found corresponding to "{0}"',
    Common_InvalidBorderWidthUnit: 'A unit type of "{0}"\' is invalid for parseBorderWidth',
    Tabs_PropertySetBeforeInitialization: "{0} cannot be changed before initialization",
    CascadingDropDown_MethodTimeout: "[Method timeout]",
    ExtenderBase_PageNotRegisteredForCallbacks: "This Page has not been registered for callbacks",
    Animation_NoDynamicPropertyFound: 'AjaxControlToolkit.Animation.createAnimation found no property corresponding to "{0}" or "{1}"',
    Animation_InvalidBaseType: "AjaxControlToolkit.Animation.registerAnimation can only register types that inherit from AjaxControlToolkit.Animation.Animation",
    ResizableControlBehavior_InvalidHandler: "{0} handler not a function, function name, or function text",
    Animation_InvalidColor: 'Color must be a 7-character hex representation (e.g. #246ACF), not "{0}"',
    CascadingDropDown_NoParentElement: 'Failed to find parent element "{0}"',
    ReorderList_DropWatcherBehavior_CallbackError: "Reorder failed, see details below.\\r\\n\\r\\n{0}",
    PopupControl_NoDefaultProperty: 'No default property supported for control "{0}" of type "{1}"',
    PopupExtender_NoParentElement: 'Couldn\'t find parent element "{0}"',
    ResizableControlBehavior_CannotChangeProperty: "Changes to {0} not supported",
    Common_InvalidPaddingUnit: 'A unit type of "{0}" is invalid for parsePadding',
    ExtenderBase_ControlNotRegisteredForCallbacks: "This Control has not been registered for callbacks",
    Calendar_Today: "Today: {0}",
    MultiHandleSlider_CssHeightWidthRequired: "You must specify a CSS width and height for all handle styles as well as the rail.",
    Common_DateTime_InvalidFormat: "Invalid format",
    Animation_UknownAnimationName: 'AjaxControlToolkit.Animation.createAnimation could not find an Animation corresponding to the name "{0}"',
    ExtenderBase_InvalidClientStateType: "saveClientState must return a value of type String",
    Tabs_OwnerExpected: "owner must be set before initialize",
    DynamicPopulate_WebServiceTimeout: "Web service call timed out",
    Animation_MissingAnimationName: "AjaxControlToolkit.Animation.createAnimation requires an object with an AnimationName property",
    Tabs_ActiveTabArgumentOutOfRange: "Argument is not a member of the tabs collection",
    AlwaysVisible_ElementRequired: "AjaxControlToolkit.AlwaysVisibleControlBehavior must have an element",
    DynamicPopulate_WebServiceError: "Web Service call failed: {0}",
    Animation_NoPropertyFound: 'AjaxControlToolkit.Animation.createAnimation found no property corresponding to "{0}"',
    Tabs_PropertySetAfterInitialization: "{0} cannot be changed after initialization",
    CascadingDropDown_MethodError: "[Method error {0}]",
    Common_UnitHasNoDigits: "No digits",
    Common_DateTime_InvalidTimeSpan: '"{0}" is not a valid TimeSpan format',
    Animation_CannotNestSequence: "AjaxControlToolkit.Animation.SequenceAnimation cannot be nested inside AjaxControlToolkit.Animation.ParallelAnimation"
}, Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.BoxSide = function () { }, AjaxControlToolkit.BoxSide.prototype = {
    Top: 0,
    Right: 1,
    Bottom: 2,
    Left: 3
}, AjaxControlToolkit.BoxSide.registerEnum("AjaxControlToolkit.BoxSide", !1), AjaxControlToolkit._CommonToolkitScripts = function () { }, AjaxControlToolkit._CommonToolkitScripts.prototype = {
    _borderStyleNames: ["borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"],
    _borderWidthNames: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
    _paddingWidthNames: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    _marginWidthNames: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    getCurrentStyle: function (n, t, i) {
        var f = "undefined",
            r = null,
            u;
        return n && (n.currentStyle ? r = n.currentStyle[t] : document.defaultView && document.defaultView.getComputedStyle && (u = document.defaultView.getComputedStyle(n, null), u && (r = u[t])), !r && n.style.getPropertyValue ? r = n.style.getPropertyValue(t) : !r && n.style.getAttribute && (r = n.style.getAttribute(t))), r && r != "" && typeof r !== f || (r = typeof i != f ? i : null), r
    },
    getInheritedBackgroundColor: function (n) {
        var r = "backgroundColor",
            i = "#FFFFFF",
            t;
        if (!n) return i;
        t = this.getCurrentStyle(n, r);
        try {
            while (!t || t == "" || t == "transparent" || t == "rgba(0, 0, 0, 0)") n = n.parentNode, t = n ? this.getCurrentStyle(n, r) : i
        } catch (u) {
            t = i
        }
        return t
    },
    getLocation: function (n) {
        return Sys.UI.DomElement.getLocation(n)
    },
    setLocation: function (n, t) {
        Sys.UI.DomElement.setLocation(n, t.x, t.y)
    },
    getContentSize: function (n) {
        if (!n) throw Error.argumentNull("element");
        var t = this.getSize(n),
            i = this.getBorderBox(n),
            r = this.getPaddingBox(n);
        return {
            width: t.width - i.horizontal - r.horizontal,
            height: t.height - i.vertical - r.vertical
        }
    },
    getSize: function (n) {
        if (!n) throw Error.argumentNull("element");
        return {
            width: n.offsetWidth,
            height: n.offsetHeight
        }
    },
    setContentSize: function (n, t) {
        var f = "border-box",
            i = this,
            r, u, e;
        if (!n) throw Error.argumentNull("element");
        if (!t) throw Error.argumentNull("size");
        (i.getCurrentStyle(n, "MozBoxSizing") == f || i.getCurrentStyle(n, "BoxSizing") == f) && (r = i.getBorderBox(n), u = i.getPaddingBox(n), t = {
            width: t.width + r.horizontal + u.horizontal,
            height: t.height + r.vertical + u.vertical
        }), n.style.width = t.width.toString() + "px", e = t.height < 0 ? 0 : t.height, n.style.height = e.toString() + "px"
    },
    setSize: function (n, t) {
        if (!n) throw Error.argumentNull("element");
        if (!t) throw Error.argumentNull("size");
        var i = this.getBorderBox(n),
            r = this.getPaddingBox(n),
            u = {
                width: t.width - i.horizontal - r.horizontal,
                height: t.height - i.vertical - r.vertical
            };
        this.setContentSize(n, u)
    },
    getBounds: function (n) {
        return Sys.UI.DomElement.getBounds(n)
    },
    setBounds: function (n, t) {
        if (!n) throw Error.argumentNull("element");
        if (!t) throw Error.argumentNull("bounds");
        this.setSize(n, t), $common.setLocation(n, t)
    },
    getClientBounds: function () {
        var n, t;
        return document.compatMode == "CSS1Compat" ? (n = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : (n = document.body.clientWidth, t = document.body.clientHeight), new Sys.UI.Bounds(0, 0, n, t)
    },
    getMarginBox: function (n) {
        var i = this,
            t;
        if (!n) throw Error.argumentNull("element");
        return t = {
            top: i.getMargin(n, AjaxControlToolkit.BoxSide.Top),
            right: i.getMargin(n, AjaxControlToolkit.BoxSide.Right),
            bottom: i.getMargin(n, AjaxControlToolkit.BoxSide.Bottom),
            left: i.getMargin(n, AjaxControlToolkit.BoxSide.Left)
        }, t.horizontal = t.left + t.right, t.vertical = t.top + t.bottom, t
    },
    getBorderBox: function (n) {
        var i = this,
            t;
        if (!n) throw Error.argumentNull("element");
        return t = {
            top: i.getBorderWidth(n, AjaxControlToolkit.BoxSide.Top),
            right: i.getBorderWidth(n, AjaxControlToolkit.BoxSide.Right),
            bottom: i.getBorderWidth(n, AjaxControlToolkit.BoxSide.Bottom),
            left: i.getBorderWidth(n, AjaxControlToolkit.BoxSide.Left)
        }, t.horizontal = t.left + t.right, t.vertical = t.top + t.bottom, t
    },
    getPaddingBox: function (n) {
        var i = this,
            t;
        if (!n) throw Error.argumentNull("element");
        return t = {
            top: i.getPadding(n, AjaxControlToolkit.BoxSide.Top),
            right: i.getPadding(n, AjaxControlToolkit.BoxSide.Right),
            bottom: i.getPadding(n, AjaxControlToolkit.BoxSide.Bottom),
            left: i.getPadding(n, AjaxControlToolkit.BoxSide.Left)
        }, t.horizontal = t.left + t.right, t.vertical = t.top + t.bottom, t
    },
    isBorderVisible: function (n, t) {
        if (!n) throw Error.argumentNull("element");
        if (t < AjaxControlToolkit.BoxSide.Top || t > AjaxControlToolkit.BoxSide.Left) throw Error.argumentOutOfRange(String.format(Sys.Res.enumInvalidValue, t, "AjaxControlToolkit.BoxSide"));
        var i = this._borderStyleNames[t],
            r = this.getCurrentStyle(n, i);
        return r != "none"
    },
    getMargin: function (n, t) {
        if (!n) throw Error.argumentNull("element");
        if (t < AjaxControlToolkit.BoxSide.Top || t > AjaxControlToolkit.BoxSide.Left) throw Error.argumentOutOfRange(String.format(Sys.Res.enumInvalidValue, t, "AjaxControlToolkit.BoxSide"));
        var i = this._marginWidthNames[t],
            r = this.getCurrentStyle(n, i);
        try {
            return this.parsePadding(r)
        } catch (u) {
            return 0
        }
    },
    getBorderWidth: function (n, t) {
        var i = this,
            r, u;
        if (!n) throw Error.argumentNull("element");
        if (t < AjaxControlToolkit.BoxSide.Top || t > AjaxControlToolkit.BoxSide.Left) throw Error.argumentOutOfRange(String.format(Sys.Res.enumInvalidValue, t, "AjaxControlToolkit.BoxSide"));
        return i.isBorderVisible(n, t) ? (r = i._borderWidthNames[t], u = i.getCurrentStyle(n, r), i.parseBorderWidth(u)) : 0
    },
    getPadding: function (n, t) {
        if (!n) throw Error.argumentNull("element");
        if (t < AjaxControlToolkit.BoxSide.Top || t > AjaxControlToolkit.BoxSide.Left) throw Error.argumentOutOfRange(String.format(Sys.Res.enumInvalidValue, t, "AjaxControlToolkit.BoxSide"));
        var i = this._paddingWidthNames[t],
            r = this.getCurrentStyle(n, i);
        return this.parsePadding(r)
    },
    parseBorderWidth: function (n) {
        var o = "thick",
            s = "medium",
            h = "thin",
            u = this,
            r, t, i, f, e;
        if (u._borderThicknesses || (r = {}, t = document.createElement("div"), t.style.visibility = "hidden", t.style.position = "absolute", t.style.fontSize = "1px", document.body.appendChild(t), i = document.createElement("div"), i.style.height = "0px", i.style.overflow = "hidden", t.appendChild(i), f = t.offsetHeight, i.style.borderTop = "solid black", i.style.borderTopWidth = h, r[h] = t.offsetHeight - f, i.style.borderTopWidth = s, r[s] = t.offsetHeight - f, i.style.borderTopWidth = o, r[o] = t.offsetHeight - f, t.removeChild(i), document.body.removeChild(t), u._borderThicknesses = r), n) {
            switch (n) {
                case h:
                case s:
                case o:
                    return u._borderThicknesses[n];
                case "inherit":
                    return 0
            }
            return e = u.parseUnit(n), Sys.Debug.assert(e.type == "px", String.format(AjaxControlToolkit.Resources.Common_InvalidBorderWidthUnit, e.type)), e.size
        }
        return 0
    },
    parsePadding: function (n) {
        if (n) {
            if (n == "inherit") return 0;
            var t = this.parseUnit(n);
            return Sys.Debug.assert(t.type == "px", String.format(AjaxControlToolkit.Resources.Common_InvalidPaddingUnit, t.type)), t.size
        }
        return 0
    },
    parseUnit: function (n) {
        var t, f, r;
        if (!n) throw Error.argumentNull("value");
        n = n.trim().toLowerCase();
        for (var e = n.length, i = -1, u = 0; u < e; u++) {
            if (t = n.substr(u, 1), (t < "0" || t > "9") && t != "-" && t != "." && t != ",") break;
            i = u
        }
        if (i == -1) throw Error.create(AjaxControlToolkit.Resources.Common_UnitHasNoDigits);
        return f = i < e - 1 ? n.substring(i + 1).trim() : "px", r = parseFloat(n.substr(0, i + 1)), f == "px" && (r = Math.floor(r)), {
            size: r,
            type: f
        }
    },
    getElementOpacity: function (n) {
        var t, i, r, u;
        if (!n) throw Error.argumentNull("element");
        return (t = !1, n.filters ? (r = n.filters, r.length !== 0 && (u = r["DXImageTransform.Microsoft.Alpha"], u && (i = u.opacity / 100, t = !0))) : (i = this.getCurrentStyle(n, "opacity", 1), t = !0), t === !1) ? 1 : parseFloat(i)
    },
    setElementOpacity: function (n, t) {
        var i, r, u;
        if (!n) throw Error.argumentNull("element");
        n.filters ? (i = n.filters, r = !0, i.length !== 0 && (u = i["DXImageTransform.Microsoft.Alpha"], u && (r = !1, u.opacity = t * 100)), r && (n.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + t * 100 + ")")) : n.style.opacity = t
    },
    getVisible: function (n) {
        return n && "none" != $common.getCurrentStyle(n, "display") && "hidden" != $common.getCurrentStyle(n, "visibility")
    },
    setVisible: function (n, t) {
        n && t != $common.getVisible(n) && (t ? n.style.removeAttribute ? n.style.removeAttribute("display") : n.style.removeProperty("display") : n.style.display = "none", n.style.visibility = t ? "visible" : "hidden")
    },
    resolveFunction: function (value) {
        if (value) {
            if (value instanceof Function) return value;
            if (String.isInstanceOfType(value) && value.length > 0) {
                var func;
                if ((func = window[value]) instanceof Function || (func = eval(value)) instanceof Function) return func
            }
        }
        return null
    },
    addCssClasses: function (n, t) {
        for (var i = 0; i < t.length; i++) Sys.UI.DomElement.addCssClass(n, t[i])
    },
    removeCssClasses: function (n, t) {
        for (var i = 0; i < t.length; i++) Sys.UI.DomElement.removeCssClass(n, t[i])
    },
    setStyle: function (n, t) {
        $common.applyProperties(n.style, t)
    },
    removeHandlers: function (n, t) {
        for (var i in t) $removeHandler(n, i, t[i])
    },
    overlaps: function (n, t) {
        return n.x < t.x + t.width && t.x < n.x + n.width && n.y < t.y + t.height && t.y < n.y + n.height
    },
    containsPoint: function (n, t, i) {
        return t >= n.x && t < n.x + n.width && i >= n.y && i < n.y + n.height
    },
    isKeyDigit: function (n) {
        return 48 <= n && n <= 57
    },
    isKeyNavigation: function (n) {
        return Sys.UI.Key.left <= n && n <= Sys.UI.Key.down
    },
    padLeft: function (n, t, i, r) {
        return $common._pad(n, t || 2, i || " ", "l", r || !1)
    },
    padRight: function (n, t, i, r) {
        return $common._pad(n, t || 2, i || " ", "r", r || !1)
    },
    _pad: function (n, t, i, r, u) {
        var o, e, f;
        for (n = n.toString(), o = n.length, e = new Sys.StringBuilder, r == "r" && e.append(n); o < t;) e.append(i), o++;
        return r == "l" && e.append(n), f = e.toString(), u && f.length > t && (f = r == "l" ? f.substr(f.length - t, t) : f.substr(0, t)), f
    },
    __DOMEvents: {
        focusin: {
            eventGroup: "UIEvents",
            init: function (n) {
                n.initUIEvent("focusin", !0, !1, window, 1)
            }
        },
        focusout: {
            eventGroup: "UIEvents",
            init: function (n) {
                n.initUIEvent("focusout", !0, !1, window, 1)
            }
        },
        activate: {
            eventGroup: "UIEvents",
            init: function (n) {
                n.initUIEvent("activate", !0, !0, window, 1)
            }
        },
        focus: {
            eventGroup: "UIEvents",
            init: function (n) {
                n.initUIEvent("focus", !1, !1, window, 1)
            }
        },
        blur: {
            eventGroup: "UIEvents",
            init: function (n) {
                n.initUIEvent("blur", !1, !1, window, 1)
            }
        },
        click: {
            eventGroup: "MouseEvents",
            init: function (n, t) {
                var i = !1;
                n.initMouseEvent("click", !0, !0, window, 1, t.screenX || 0, t.screenY || 0, t.clientX || 0, t.clientY || 0, t.ctrlKey || i, t.altKey || i, t.shiftKey || i, t.metaKey || i, t.button || 0, t.relatedTarget || null)
            }
        },
        dblclick: {
            eventGroup: "MouseEvents",
            init: function (n, t) {
                var i = !1;
                n.initMouseEvent("click", !0, !0, window, 2, t.screenX || 0, t.screenY || 0, t.clientX || 0, t.clientY || 0, t.ctrlKey || i, t.altKey || i, t.shiftKey || i, t.metaKey || i, t.button || 0, t.relatedTarget || null)
            }
        },
        mousedown: {
            eventGroup: "MouseEvents",
            init: function (n, t) {
                var i = !1;
                n.initMouseEvent("mousedown", !0, !0, window, 1, t.screenX || 0, t.screenY || 0, t.clientX || 0, t.clientY || 0, t.ctrlKey || i, t.altKey || i, t.shiftKey || i, t.metaKey || i, t.button || 0, t.relatedTarget || null)
            }
        },
        mouseup: {
            eventGroup: "MouseEvents",
            init: function (n, t) {
                var i = !1;
                n.initMouseEvent("mouseup", !0, !0, window, 1, t.screenX || 0, t.screenY || 0, t.clientX || 0, t.clientY || 0, t.ctrlKey || i, t.altKey || i, t.shiftKey || i, t.metaKey || i, t.button || 0, t.relatedTarget || null)
            }
        },
        mouseover: {
            eventGroup: "MouseEvents",
            init: function (n, t) {
                var i = !1;
                n.initMouseEvent("mouseover", !0, !0, window, 1, t.screenX || 0, t.screenY || 0, t.clientX || 0, t.clientY || 0, t.ctrlKey || i, t.altKey || i, t.shiftKey || i, t.metaKey || i, t.button || 0, t.relatedTarget || null)
            }
        },
        mousemove: {
            eventGroup: "MouseEvents",
            init: function (n, t) {
                var i = !1;
                n.initMouseEvent("mousemove", !0, !0, window, 1, t.screenX || 0, t.screenY || 0, t.clientX || 0, t.clientY || 0, t.ctrlKey || i, t.altKey || i, t.shiftKey || i, t.metaKey || i, t.button || 0, t.relatedTarget || null)
            }
        },
        mouseout: {
            eventGroup: "MouseEvents",
            init: function (n, t) {
                var i = !1;
                n.initMouseEvent("mousemove", !0, !0, window, 1, t.screenX || 0, t.screenY || 0, t.clientX || 0, t.clientY || 0, t.ctrlKey || i, t.altKey || i, t.shiftKey || i, t.metaKey || i, t.button || 0, t.relatedTarget || null)
            }
        },
        load: {
            eventGroup: "HTMLEvents",
            init: function (n) {
                n.initEvent("load", !1, !1)
            }
        },
        unload: {
            eventGroup: "HTMLEvents",
            init: function (n) {
                n.initEvent("unload", !1, !1)
            }
        },
        select: {
            eventGroup: "HTMLEvents",
            init: function (n) {
                n.initEvent("select", !0, !1)
            }
        },
        change: {
            eventGroup: "HTMLEvents",
            init: function (n) {
                n.initEvent("change", !0, !1)
            }
        },
        submit: {
            eventGroup: "HTMLEvents",
            init: function (n) {
                n.initEvent("submit", !0, !0)
            }
        },
        reset: {
            eventGroup: "HTMLEvents",
            init: function (n) {
                n.initEvent("reset", !0, !1)
            }
        },
        resize: {
            eventGroup: "HTMLEvents",
            init: function (n) {
                n.initEvent("resize", !0, !1)
            }
        },
        scroll: {
            eventGroup: "HTMLEvents",
            init: function (n) {
                n.initEvent("scroll", !0, !1)
            }
        }
    },
    tryFireRawEvent: function (n, t) {
        try {
            if (n.fireEvent) return n.fireEvent("on" + t.type, t), !0;
            if (n.dispatchEvent) return n.dispatchEvent(t), !0
        } catch (i) { }
        return !1
    },
    tryFireEvent: function (n, t, i) {
        var u, r;
        try {
            if (document.createEventObject) return r = document.createEventObject(), $common.applyProperties(r, i || {}), n.fireEvent("on" + t, r), !0;
            if (document.createEvent && (u = $common.__DOMEvents[t], u)) return r = document.createEvent(u.eventGroup), u.init(r, i || {}), n.dispatchEvent(r), !0
        } catch (f) { }
        return !1
    },
    wrapElement: function (n, t, i) {
        var r = n.parentNode;
        r.replaceChild(t, n), (i || t).appendChild(n)
    },
    unwrapElement: function (n, t) {
        var i = t.parentNode;
        i != null && ($common.removeElement(n), i.replaceChild(n, t))
    },
    removeElement: function (n) {
        var t = n.parentNode;
        t != null && t.removeChild(n)
    },
    applyProperties: function (n, t) {
        var r, i, u;
        for (r in t) i = t[r], i != null && Object.getType(i) === Object ? (u = n[r], $common.applyProperties(u, i)) : n[r] = i
    },
    createElementFromTemplate: function (n, t, i) {
        var r = null,
            u = "undefined",
            o, l, f, s, c, a, h, e;
        if (typeof n.nameTable != u && (o = n.nameTable, String.isInstanceOfType(o) && (o = i[o]), o != r && (i = o)), l = r, typeof n.name !== u && (l = n.name), f = document.createElement(n.nodeName), typeof n.name !== u && i && (i[n.name] = f), typeof n.parent !== u && t == r && (s = n.parent, String.isInstanceOfType(s) && (s = i[s]), s != r && (t = s)), typeof n.properties !== u && n.properties != r && $common.applyProperties(f, n.properties), typeof n.cssClasses !== u && n.cssClasses != r && $common.addCssClasses(f, n.cssClasses), typeof n.events !== u && n.events != r && $addHandlers(f, n.events), typeof n.visible !== u && n.visible != r && this.setVisible(f, n.visible), t && t.appendChild(f), typeof n.opacity !== u && n.opacity != r && $common.setElementOpacity(f, n.opacity), typeof n.children !== u && n.children != r)
            for (c = 0; c < n.children.length; c++) a = n.children[c], $common.createElementFromTemplate(a, f, i);
        return h = f, typeof n.contentPresenter !== u && n.contentPresenter != r && (h = i[h]), typeof n.content !== u && n.content != r && (e = n.content, String.isInstanceOfType(e) && (e = i[e]), e.parentNode ? $common.wrapElement(e, f, h) : h.appendChild(e)), f
    },
    prepareHiddenElementForATDeviceUpdate: function () {
        var t = "hiddenInputToUpdateATBuffer_CommonToolkitScripts",
            n = document.getElementById(t);
        n || (n = document.createElement("input"), n.setAttribute("type", "hidden"), n.setAttribute("value", "1"), n.setAttribute("id", t), n.setAttribute("name", t), document.forms[0] && document.forms[0].appendChild(n))
    },
    updateFormToRefreshATDeviceBuffer: function () {
        var t = "value",
            n = document.getElementById("hiddenInputToUpdateATBuffer_CommonToolkitScripts");
        n && (n.getAttribute(t) == "1" ? n.setAttribute(t, "0") : n.setAttribute(t, "1"))
    },
    appendElementToFormOrBody: function (n) {
        document.forms && document.forms[0] ? document.forms[0].appendChild(n) : document.body.appendChild(n)
    }
}, Sys.UI.DomElement.getLocation = document.documentElement.getBoundingClientRect ? function (n) {
    var u, f, o;
    if (n.self || n.nodeType === 9 || n === document.documentElement || n.parentNode === n.ownerDocument.documentElement) return new Sys.UI.Point(0, 0);
    if (u = n.getBoundingClientRect(), !u) return new Sys.UI.Point(0, 0);
    var c, e = n.ownerDocument.documentElement,
        i = Math.round(u.left) + e.scrollLeft,
        r = Math.round(u.top) + e.scrollTop;
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        try {
            f = n.ownerDocument.parentWindow.frameElement || null, f && (o = f.frameBorder === "0" || f.frameBorder === "no" ? 2 : 0, i += o, r += o)
        } catch (l) { }
        if (Sys.Browser.version === 7 && !document.documentMode) {
            var s = document.body,
                h = s.getBoundingClientRect(),
                t = (h.right - h.left) / s.clientWidth;
            t = Math.round(t * 100), t = (t - t % 5) / 100, isNaN(t) || t === 1 || (i = Math.round(i / t), r = Math.round(r / t))
        } (document.documentMode || 0) < 8 && (i -= e.clientLeft, r -= e.clientTop)
    }
    return new Sys.UI.Point(i, r)
} : Sys.Browser.agent === Sys.Browser.Safari ? function (n) {
    var o = "absolute",
        r = null,
        u, s, h;
    if (n.window && n.window === n || n.nodeType === 9) return new Sys.UI.Point(0, 0);
    for (var f = 0, e = 0, l = r, c = r, i, t = n; t; l = t, c = i, t = t.offsetParent) i = Sys.UI.DomElement._getCurrentStyle(t), u = t.tagName ? t.tagName.toUpperCase() : r, (t.offsetLeft || t.offsetTop) && (u !== "BODY" || !c || c.position !== o) && (f += t.offsetLeft, e += t.offsetTop), l && Sys.Browser.version >= 3 && (f += parseInt(i.borderLeftWidth), e += parseInt(i.borderTopWidth));
    if (i = Sys.UI.DomElement._getCurrentStyle(n), s = i ? i.position : r, !s || s !== o)
        for (t = n.parentNode; t; t = t.parentNode)
            if (u = t.tagName ? t.tagName.toUpperCase() : r, u !== "BODY" && u !== "HTML" && (t.scrollLeft || t.scrollTop) && (f -= t.scrollLeft || 0, e -= t.scrollTop || 0), i = Sys.UI.DomElement._getCurrentStyle(t), h = i ? i.position : r, h && h === o) break;
    return new Sys.UI.Point(f, e)
} : function (n) {
    var o = "absolute",
        u = null,
        r, s;
    if (n.window && n.window === n || n.nodeType === 9) return new Sys.UI.Point(0, 0);
    for (var f = 0, e = 0, c = u, h = u, i = u, t = n; t; c = t, h = i, t = t.offsetParent) r = t.tagName ? t.tagName.toUpperCase() : u, i = Sys.UI.DomElement._getCurrentStyle(t), !t.offsetLeft && !t.offsetTop || r === "BODY" && (!h || h.position !== o) || (f += t.offsetLeft, e += t.offsetTop), c !== u && i && (r !== "TABLE" && r !== "TD" && r !== "HTML" && (f += parseInt(i.borderLeftWidth) || 0, e += parseInt(i.borderTopWidth) || 0), r === "TABLE" && (i.position === "relative" || i.position === o) && (f += parseInt(i.marginLeft) || 0, e += parseInt(i.marginTop) || 0));
    if (i = Sys.UI.DomElement._getCurrentStyle(n), s = i ? i.position : u, !s || s !== o)
        for (t = n.parentNode; t; t = t.parentNode) r = t.tagName ? t.tagName.toUpperCase() : u, r !== "BODY" && r !== "HTML" && (t.scrollLeft || t.scrollTop) && (f -= t.scrollLeft || 0, e -= t.scrollTop || 0, i = Sys.UI.DomElement._getCurrentStyle(t), i && (f += parseInt(i.borderLeftWidth) || 0, e += parseInt(i.borderTopWidth) || 0));
    return new Sys.UI.Point(f, e)
}, CommonToolkitScripts = AjaxControlToolkit.CommonToolkitScripts = new AjaxControlToolkit._CommonToolkitScripts, $common = CommonToolkitScripts, Sys.UI.DomElement.getVisible = $common.getVisible, Sys.UI.DomElement.setVisible = $common.setVisible, Sys.UI.Control.overlaps = $common.overlaps, AjaxControlToolkit._DomUtility = function () { }, AjaxControlToolkit._DomUtility.prototype = {
    isDescendant: function (n, t) {
        for (var i = t.parentNode; i != null; i = i.parentNode)
            if (i == n) return !0;
        return !1
    },
    isDescendantOrSelf: function (n, t) {
        return n === t ? !0 : AjaxControlToolkit.DomUtility.isDescendant(n, t)
    },
    isAncestor: function (n, t) {
        return AjaxControlToolkit.DomUtility.isDescendant(t, n)
    },
    isAncestorOrSelf: function (n, t) {
        return n === t ? !0 : AjaxControlToolkit.DomUtility.isDescendant(t, n)
    },
    isSibling: function (n, t) {
        for (var r = n.parentNode, i = 0; i < r.childNodes.length; i++)
            if (r.childNodes[i] == t) return !0;
        return !1
    }
}, AjaxControlToolkit._DomUtility.registerClass("AjaxControlToolkit._DomUtility"), AjaxControlToolkit.DomUtility = new AjaxControlToolkit._DomUtility, AjaxControlToolkit.TextBoxWrapper = function (n) {
    var t = this;
    AjaxControlToolkit.TextBoxWrapper.initializeBase(t, [n]), t._current = n.value, t._watermark = null, t._isWatermarked = !1
}, AjaxControlToolkit.TextBoxWrapper.prototype = {
    dispose: function () {
        this.get_element().AjaxControlToolkitTextBoxWrapper = null, AjaxControlToolkit.TextBoxWrapper.callBaseMethod(this, "dispose")
    },
    get_Current: function () {
        return this._current = this.get_element().value
    },
    set_Current: function (n) {
        this._current = n, this._updateElement()
    },
    get_Value: function () {
        return this.get_IsWatermarked() ? "" : this.get_Current()
    },
    set_Value: function (n) {
        var t = this;
        t.set_Current(n), n && 0 != n.length ? t.set_IsWatermarked(!1) : null != t._watermark && t.set_IsWatermarked(!0)
    },
    get_Watermark: function () {
        return this._watermark
    },
    set_Watermark: function (n) {
        this._watermark = n, this._updateElement()
    },
    get_IsWatermarked: function () {
        return this._isWatermarked
    },
    set_IsWatermarked: function (n) {
        var t = this;
        t._isWatermarked != n && (t._isWatermarked = n, t._updateElement(), t._raiseWatermarkChanged())
    },
    _updateElement: function () {
        var n = this,
            t = n.get_element();
        n._isWatermarked ? t.value != n._watermark && (t.value = n._watermark) : t.value != n._current && (t.value = n._current)
    },
    add_WatermarkChanged: function (n) {
        this.get_events().addHandler("WatermarkChanged", n)
    },
    remove_WatermarkChanged: function (n) {
        this.get_events().removeHandler("WatermarkChanged", n)
    },
    _raiseWatermarkChanged: function () {
        var n = this.get_events().getHandler("WatermarkChanged");
        n && n(this, Sys.EventArgs.Empty)
    }
}, AjaxControlToolkit.TextBoxWrapper.get_Wrapper = function (n) {
    return null == n.AjaxControlToolkitTextBoxWrapper && (n.AjaxControlToolkitTextBoxWrapper = new AjaxControlToolkit.TextBoxWrapper(n)), n.AjaxControlToolkitTextBoxWrapper
}, AjaxControlToolkit.TextBoxWrapper.registerClass("AjaxControlToolkit.TextBoxWrapper", Sys.UI.Behavior), AjaxControlToolkit.TextBoxWrapper.validatorGetValue = function (n) {
    var t = $get(n);
    return t && t.AjaxControlToolkitTextBoxWrapper ? t.AjaxControlToolkitTextBoxWrapper.get_Value() : AjaxControlToolkit.TextBoxWrapper._originalValidatorGetValue(n)
}, typeof ValidatorGetValue == "function" && (AjaxControlToolkit.TextBoxWrapper._originalValidatorGetValue = ValidatorGetValue, ValidatorGetValue = AjaxControlToolkit.TextBoxWrapper.validatorGetValue), Sys.CultureInfo.prototype._getAbbrMonthIndex && (Sys.CultureInfo.prototype._getAbbrMonthIndex = function (n) {
    var t = this;
    return t._upperAbbrMonths || (t._upperAbbrMonths = t._toUpperArray(t.dateTimeFormat.AbbreviatedMonthNames)), Array.indexOf(t._upperAbbrMonths, t._toUpper(n))
}, Sys.CultureInfo.CurrentCulture._getAbbrMonthIndex = Sys.CultureInfo.prototype._getAbbrMonthIndex, Sys.CultureInfo.InvariantCulture._getAbbrMonthIndex = Sys.CultureInfo.prototype._getAbbrMonthIndex), Sys.Timer = function () {
    var n = this;
    Sys.Timer.initializeBase(n), n._interval = 1e3, n._enabled = !1, n._timer = null
}, Sys.Timer.prototype = {
    get_interval: function () {
        return this._interval
    },
    set_interval: function (n) {
        var t = this;
        t._interval !== n && (t._interval = n, t.raisePropertyChanged("interval"), t.get_isUpdating() || t._timer === null || (t._stopTimer(), t._startTimer()))
    },
    get_enabled: function () {
        return this._enabled
    },
    set_enabled: function (n) {
        var t = this;
        n !== t.get_enabled() && (t._enabled = n, t.raisePropertyChanged("enabled"), t.get_isUpdating() || (n ? t._startTimer() : t._stopTimer()))
    },
    add_tick: function (n) {
        this.get_events().addHandler("tick", n)
    },
    remove_tick: function (n) {
        this.get_events().removeHandler("tick", n)
    },
    dispose: function () {
        this.set_enabled(!1), this._stopTimer(), Sys.Timer.callBaseMethod(this, "dispose")
    },
    updated: function () {
        var n = this;
        Sys.Timer.callBaseMethod(n, "updated"), n._enabled && (n._stopTimer(), n._startTimer())
    },
    _timerCallback: function () {
        var n = this.get_events().getHandler("tick");
        n && n(this, Sys.EventArgs.Empty)
    },
    _startTimer: function () {
        var n = this;
        n._timer = window.setInterval(Function.createDelegate(n, n._timerCallback), n._interval)
    },
    _stopTimer: function () {
        window.clearInterval(this._timer), this._timer = null
    }
}, Sys.Timer.descriptor = {
    properties: [{
        name: "interval",
        type: Number
    }, {
        name: "enabled",
        type: Boolean
    }],
    events: [{
        name: "tick"
    }]
}, Sys.Timer.registerClass("Sys.Timer", Sys.Component), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.IDragSource = function () { }, AjaxControlToolkit.IDragSource.prototype = {
    get_dragDataType: function () {
        throw Error.notImplemented();
    },
    getDragData: function () {
        throw Error.notImplemented();
    },
    get_dragMode: function () {
        throw Error.notImplemented();
    },
    onDragStart: function () {
        throw Error.notImplemented();
    },
    onDrag: function () {
        throw Error.notImplemented();
    },
    onDragEnd: function () {
        throw Error.notImplemented();
    }
}, AjaxControlToolkit.IDragSource.registerInterface("AjaxControlToolkit.IDragSource"), AjaxControlToolkit.IDropTarget = function () { }, AjaxControlToolkit.IDropTarget.prototype = {
    get_dropTargetElement: function () {
        throw Error.notImplemented();
    },
    canDrop: function () {
        throw Error.notImplemented();
    },
    drop: function () {
        throw Error.notImplemented();
    },
    onDragEnterTarget: function () {
        throw Error.notImplemented();
    },
    onDragLeaveTarget: function () {
        throw Error.notImplemented();
    },
    onDragInTarget: function () {
        throw Error.notImplemented();
    }
}, AjaxControlToolkit.IDropTarget.registerInterface("AjaxControlToolkit.IDropTarget"), AjaxControlToolkit.DragMode = function () {
    throw Error.invalidOperation();
}, AjaxControlToolkit.DragMode.prototype = {
    Copy: 0,
    Move: 1
}, AjaxControlToolkit.DragMode.registerEnum("AjaxControlToolkit.DragMode"), AjaxControlToolkit.DragDropEventArgs = function (n, t, i) {
    this._dragMode = n, this._dataType = t, this._data = i
}, AjaxControlToolkit.DragDropEventArgs.prototype = {
    get_dragMode: function () {
        return this._dragMode || null
    },
    get_dragDataType: function () {
        return this._dataType || null
    },
    get_dragData: function () {
        return this._data || null
    }
}, AjaxControlToolkit.DragDropEventArgs.registerClass("AjaxControlToolkit.DragDropEventArgs"), AjaxControlToolkit._DragDropManager = function () {
    this._instance = null, this._events = null
}, AjaxControlToolkit._DragDropManager.prototype = {
    add_dragStart: function (n) {
        this.get_events().addHandler("dragStart", n)
    },
    remove_dragStart: function (n) {
        this.get_events().removeHandler("dragStart", n)
    },
    get_events: function () {
        return this._events || (this._events = new Sys.EventHandlerList), this._events
    },
    add_dragStop: function (n) {
        this.get_events().addHandler("dragStop", n)
    },
    remove_dragStop: function (n) {
        this.get_events().removeHandler("dragStop", n)
    },
    _getInstance: function () {
        var n = this;
        return n._instance || (n._instance = Sys.Browser.agent === Sys.Browser.InternetExplorer ? new AjaxControlToolkit.IEDragDropManager : new AjaxControlToolkit.GenericDragDropManager, n._instance.initialize(), n._instance.add_dragStart(Function.createDelegate(n, n._raiseDragStart)), n._instance.add_dragStop(Function.createDelegate(n, n._raiseDragStop))), n._instance
    },
    startDragDrop: function (n, t, i, r) {
        this._getInstance().startDragDrop(n, t, i, r)
    },
    registerDropTarget: function (n) {
        this._getInstance().registerDropTarget(n)
    },
    unregisterDropTarget: function (n) {
        this._getInstance().unregisterDropTarget(n)
    },
    dispose: function () {
        delete this._events, Sys.Application.unregisterDisposableObject(this), Sys.Application.removeComponent(this)
    },
    _raiseDragStart: function (n, t) {
        var i = this.get_events().getHandler("dragStart");
        i && i(this, t)
    },
    _raiseDragStop: function (n, t) {
        var i = this.get_events().getHandler("dragStop");
        i && i(this, t)
    }
}, AjaxControlToolkit._DragDropManager.registerClass("AjaxControlToolkit._DragDropManager"), AjaxControlToolkit.DragDropManager = new AjaxControlToolkit._DragDropManager, AjaxControlToolkit.IEDragDropManager = function () {
    var t = null,
        n = this;
    AjaxControlToolkit.IEDragDropManager.initializeBase(n), n._dropTargets = t, n._radius = 10, n._useBuiltInDragAndDropFunctions = !0, n._activeDragVisual = t, n._activeContext = t, n._activeDragSource = t, n._underlyingTarget = t, n._oldOffset = t, n._potentialTarget = t, n._isDragging = !1, n._mouseUpHandler = t, n._documentMouseMoveHandler = t, n._documentDragOverHandler = t, n._dragStartHandler = t, n._mouseMoveHandler = t, n._dragEnterHandler = t, n._dragLeaveHandler = t, n._dragOverHandler = t, n._dropHandler = t
}, AjaxControlToolkit.IEDragDropManager.prototype = {
    add_dragStart: function (n) {
        this.get_events().addHandler("dragStart", n)
    },
    remove_dragStart: function (n) {
        this.get_events().removeHandler("dragStart", n)
    },
    add_dragStop: function (n) {
        this.get_events().addHandler("dragStop", n)
    },
    remove_dragStop: function (n) {
        this.get_events().removeHandler("dragStop", n)
    },
    initialize: function () {
        var n = this;
        AjaxControlToolkit.IEDragDropManager.callBaseMethod(n, "initialize"), n._mouseUpHandler = Function.createDelegate(n, n._onMouseUp), n._documentMouseMoveHandler = Function.createDelegate(n, n._onDocumentMouseMove), n._documentDragOverHandler = Function.createDelegate(n, n._onDocumentDragOver), n._dragStartHandler = Function.createDelegate(n, n._onDragStart), n._mouseMoveHandler = Function.createDelegate(n, n._onMouseMove), n._dragEnterHandler = Function.createDelegate(n, n._onDragEnter), n._dragLeaveHandler = Function.createDelegate(n, n._onDragLeave), n._dragOverHandler = Function.createDelegate(n, n._onDragOver), n._dropHandler = Function.createDelegate(n, n._onDrop)
    },
    dispose: function () {
        var n = this,
            t;
        if (n._dropTargets) {
            for (t = 0; t < n._dropTargets; t++) n.unregisterDropTarget(n._dropTargets[t]);
            n._dropTargets = null
        }
        AjaxControlToolkit.IEDragDropManager.callBaseMethod(n, "dispose")
    },
    startDragDrop: function (n, t, i, r) {
        var u = this,
            h = window._event,
            o, c, f, e, l, s;
        u._isDragging || (u._underlyingTarget = null, u._activeDragSource = n, u._activeDragVisual = t, u._activeContext = i, u._useBuiltInDragAndDropFunctions = typeof r != "undefined" ? r : !0, o = {
            x: h.clientX,
            y: h.clientY
        }, t.originalPosition = t.style.position, t.style.position = "absolute", document._lastPosition = o, t.startingPoint = o, c = u.getScrollOffset(t, !0), t.startingPoint = u.addPoints(t.startingPoint, c), f = parseInt(t.style.left), e = parseInt(t.style.top), isNaN(f) && (f = "0"), isNaN(e) && (e = "0"), t.startingPoint = u.subtractPoints(t.startingPoint, {
            x: f,
            y: e
        }), u._prepareForDomChanges(), n.onDragStart(), l = new AjaxControlToolkit.DragDropEventArgs(n.get_dragMode(), n.get_dragDataType(), n.getDragData(i)), s = u.get_events().getHandler("dragStart"), s && s(u, l), u._recoverFromDomChanges(), u._wireEvents(), u._drag(!0))
    },
    _stopDragDrop: function (n) {
        var i = null,
            t = this,
            u = window._event,
            r;
        if (t._activeDragSource != i) {
            t._unwireEvents(), n || (n = t._underlyingTarget == i), !n && t._underlyingTarget != i && t._underlyingTarget.drop(t._activeDragSource.get_dragMode(), t._activeDragSource.get_dragDataType(), t._activeDragSource.getDragData(t._activeContext));
            t._activeDragSource.onDragEnd(n);
            r = t.get_events().getHandler("dragStop"), r && r(t, Sys.EventArgs.Empty), t._activeDragVisual.style.position = t._activeDragVisual.originalPosition, t._activeDragSource = i, t._activeContext = i, t._activeDragVisual = i, t._isDragging = !1, t._potentialTarget = i, u.preventDefault()
        }
    },
    _drag: function (n) {
        var i = null,
            t = this,
            f = window._event,
            e = {
                x: f.clientX,
                y: f.clientY
            },
            o, r, u;
        (document._lastPosition = e, o = t.getScrollOffset(t._activeDragVisual, !0), r = t.addPoints(t.subtractPoints(e, t._activeDragVisual.startingPoint), o), n || parseInt(t._activeDragVisual.style.left) != r.x || parseInt(t._activeDragVisual.style.top) != r.y) && ($common.setLocation(t._activeDragVisual, r), t._prepareForDomChanges(), t._activeDragSource.onDrag(), t._recoverFromDomChanges(), t._potentialTarget = t._findPotentialTarget(t._activeDragSource, t._activeDragVisual), u = t._potentialTarget != t._underlyingTarget || t._potentialTarget == i, u && t._underlyingTarget != i && t._leaveTarget(t._activeDragSource, t._underlyingTarget), t._potentialTarget != i ? u ? (t._underlyingTarget = t._potentialTarget, t._enterTarget(t._activeDragSource, t._underlyingTarget)) : t._moveInTarget(t._activeDragSource, t._underlyingTarget) : t._underlyingTarget = i)
    },
    _wireEvents: function () {
        var t = "mousemove",
            n = this;
        n._useBuiltInDragAndDropFunctions ? ($addHandler(document, "mouseup", n._mouseUpHandler), $addHandler(document, t, n._documentMouseMoveHandler), $addHandler(document.body, "dragover", n._documentDragOverHandler), $addHandler(n._activeDragVisual, "dragstart", n._dragStartHandler), $addHandler(n._activeDragVisual, "dragend", n._mouseUpHandler), $addHandler(n._activeDragVisual, "drag", n._mouseMoveHandler)) : ($addHandler(document, "mouseup", n._mouseUpHandler), $addHandler(document, t, n._mouseMoveHandler))
    },
    _unwireEvents: function () {
        var t = "mousemove",
            n = this;
        n._useBuiltInDragAndDropFunctions ? ($removeHandler(n._activeDragVisual, "drag", n._mouseMoveHandler), $removeHandler(n._activeDragVisual, "dragend", n._mouseUpHandler), $removeHandler(n._activeDragVisual, "dragstart", n._dragStartHandler), $removeHandler(document.body, "dragover", n._documentDragOverHandler), $removeHandler(document, t, n._documentMouseMoveHandler), $removeHandler(document, "mouseup", n._mouseUpHandler)) : ($removeHandler(document, t, n._mouseMoveHandler), $removeHandler(document, "mouseup", n._mouseUpHandler))
    },
    registerDropTarget: function (n) {
        var t = this;
        t._dropTargets == null && (t._dropTargets = []), Array.add(t._dropTargets, n), t._wireDropTargetEvents(n)
    },
    unregisterDropTarget: function (n) {
        this._unwireDropTargetEvents(n), this._dropTargets && Array.remove(this._dropTargets, n)
    },
    _wireDropTargetEvents: function (n) {
        var i = this,
            t = n.get_dropTargetElement();
        t._dropTarget = n, $addHandler(t, "dragenter", i._dragEnterHandler), $addHandler(t, "dragleave", i._dragLeaveHandler), $addHandler(t, "dragover", i._dragOverHandler), $addHandler(t, "drop", i._dropHandler)
    },
    _unwireDropTargetEvents: function (n) {
        var i = this,
            t = n.get_dropTargetElement();
        t._dropTarget && (t._dropTarget = null, $removeHandler(t, "dragenter", i._dragEnterHandler), $removeHandler(t, "dragleave", i._dragLeaveHandler), $removeHandler(t, "dragover", i._dragOverHandler), $removeHandler(t, "drop", i._dropHandler))
    },
    _onDragStart: function (n) {
        var i, r, t;
        window._event = n, document.selection.empty(), i = n.dataTransfer, !i && n.rawEvent && (i = n.rawEvent.dataTransfer), r = this._activeDragSource.get_dragDataType().toLowerCase(), t = this._activeDragSource.getDragData(this._activeContext), t && (r != "text" && r != "url" && (r = "text", t.innerHTML != null && (t = t.innerHTML)), i.effectAllowed = "move", i.setData(r, t.toString()))
    },
    _onMouseUp: function (n) {
        window._event = n, this._stopDragDrop(!1)
    },
    _onDocumentMouseMove: function (n) {
        window._event = n, this._dragDrop()
    },
    _onDocumentDragOver: function (n) {
        window._event = n, this._potentialTarget && n.preventDefault()
    },
    _onMouseMove: function (n) {
        window._event = n, this._drag()
    },
    _onDragEnter: function (n) {
        if (window._event = n, this._isDragging) n.preventDefault();
        else
            for (var i = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(n.target)), t = 0; t < i.length; t++) this._dropTarget.onDragEnterTarget(AjaxControlToolkit.DragMode.Copy, i[t].type, i[t].value)
    },
    _onDragLeave: function (n) {
        if (window._event = n, this._isDragging) n.preventDefault();
        else
            for (var i = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(n.target)), t = 0; t < i.length; t++) this._dropTarget.onDragLeaveTarget(AjaxControlToolkit.DragMode.Copy, i[t].type, i[t].value)
    },
    _onDragOver: function (n) {
        if (window._event = n, this._isDragging) n.preventDefault();
        else
            for (var i = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(n.target)), t = 0; t < i.length; t++) this._dropTarget.onDragInTarget(AjaxControlToolkit.DragMode.Copy, i[t].type, i[t].value)
    },
    _onDrop: function (n) {
        if (window._event = n, !this._isDragging)
            for (var i = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(n.target)), t = 0; t < i.length; t++) this._dropTarget.drop(AjaxControlToolkit.DragMode.Copy, i[t].type, i[t].value);
        n.preventDefault()
    },
    _getDropTarget: function (n) {
        while (n) {
            if (n._dropTarget != null) return n._dropTarget;
            n = n.parentNode
        }
        return null
    },
    _dragDrop: function () {
        this._isDragging || (this._isDragging = !0, this._activeDragVisual.dragDrop(), document.selection.empty())
    },
    _moveInTarget: function (n, t) {
        this._prepareForDomChanges();
        t.onDragInTarget(n.get_dragMode(), n.get_dragDataType(), n.getDragData(this._activeContext));
        this._recoverFromDomChanges()
    },
    _enterTarget: function (n, t) {
        this._prepareForDomChanges();
        t.onDragEnterTarget(n.get_dragMode(), n.get_dragDataType(), n.getDragData(this._activeContext));
        this._recoverFromDomChanges()
    },
    _leaveTarget: function (n, t) {
        this._prepareForDomChanges();
        t.onDragLeaveTarget(n.get_dragMode(), n.get_dragDataType(), n.getDragData(this._activeContext));
        this._recoverFromDomChanges()
    },
    _findPotentialTarget: function (n) {
        var t = this,
            r = window._event;
        if (t._dropTargets == null) return null;
        for (var e = n.get_dragDataType(), o = n.get_dragMode(), s = n.getDragData(t._activeContext), u = t.getScrollOffset(document.body, !0), h = r.clientX + u.x, c = r.clientY + u.y, l = {
            x: h - t._radius,
            y: c - t._radius,
            width: t._radius * 2,
            height: t._radius * 2
        }, f, i = 0; i < t._dropTargets.length; i++)
            if (f = $common.getBounds(t._dropTargets[i].get_dropTargetElement()), $common.overlaps(l, f) && t._dropTargets[i].canDrop(o, e, s)) return t._dropTargets[i];
        return null
    },
    _prepareForDomChanges: function () {
        this._oldOffset = $common.getLocation(this._activeDragVisual)
    },
    _recoverFromDomChanges: function () {
        var n = this,
            t = $common.getLocation(n._activeDragVisual),
            i;
        (n._oldOffset.x != t.x || n._oldOffset.y != t.y) && (n._activeDragVisual.startingPoint = n.subtractPoints(n._activeDragVisual.startingPoint, n.subtractPoints(n._oldOffset, t)), scrollOffset = n.getScrollOffset(n._activeDragVisual, !0), i = n.addPoints(n.subtractPoints(document._lastPosition, n._activeDragVisual.startingPoint), scrollOffset), $common.setLocation(n._activeDragVisual, i))
    },
    addPoints: function (n, t) {
        return {
            x: n.x + t.x,
            y: n.y + t.y
        }
    },
    subtractPoints: function (n, t) {
        return {
            x: n.x - t.x,
            y: n.y - t.y
        }
    },
    getScrollOffset: function (n, t) {
        var r = n.scrollLeft,
            u = n.scrollTop,
            i;
        if (t)
            for (i = n.parentNode; i != null && i.scrollLeft != null;) {
                if (r += i.scrollLeft, u += i.scrollTop, i == document.body && r != 0 && u != 0) break;
                i = i.parentNode
            }
        return {
            x: r,
            y: u
        }
    },
    getBrowserRectangle: function () {
        var n = window.innerWidth,
            t = window.innerHeight;
        return n == null && (n = document.documentElement.clientWidth), t == null && (t = document.documentElement.clientHeight), {
            x: 0,
            y: 0,
            width: n,
            height: t
        }
    },
    getNextSibling: function (n) {
        for (n = n.nextSibling; n != null; n = n.nextSibling)
            if (n.innerHTML != null) return n;
        return null
    },
    hasParent: function (n) {
        return n.parentNode != null && n.parentNode.tagName != null
    }
}, AjaxControlToolkit.IEDragDropManager.registerClass("AjaxControlToolkit.IEDragDropManager", Sys.Component), AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget = function (n) {
    var i;
    if (n == null) return [];
    for (var f = window._event, e = [], r = ["URL", "Text"], u, t = 0; t < r.length; t++) i = f.dataTransfer, !i && f.rawEvent && (i = f.rawEvent.dataTransfer), u = i.getData(r[t]), n.canDrop(AjaxControlToolkit.DragMode.Copy, r[t], u) && u && Array.add(e, {
        type: r[t],
        value: u
    });
    return e
}, AjaxControlToolkit.GenericDragDropManager = function () {
    var t = null,
        n = this;
    AjaxControlToolkit.GenericDragDropManager.initializeBase(n), n._dropTargets = t, n._scrollEdgeConst = 40, n._scrollByConst = 10, n._scroller = t, n._scrollDeltaX = 0, n._scrollDeltaY = 0, n._activeDragVisual = t, n._activeContext = t, n._activeDragSource = t, n._oldOffset = t, n._potentialTarget = t, n._mouseUpHandler = t, n._mouseMoveHandler = t, n._keyPressHandler = t, n._scrollerTickHandler = t
}, AjaxControlToolkit.GenericDragDropManager.prototype = {
    initialize: function () {
        var n = this;
        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(n, "initialize"), n._mouseUpHandler = Function.createDelegate(n, n._onMouseUp), n._mouseMoveHandler = Function.createDelegate(n, n._onMouseMove), n._keyPressHandler = Function.createDelegate(n, n._onKeyPress), n._scrollerTickHandler = Function.createDelegate(n, n._onScrollerTick), Sys.Browser.agent === Sys.Browser.Safari && AjaxControlToolkit.GenericDragDropManager.__loadSafariCompatLayer(n), n._scroller = new Sys.Timer, n._scroller.set_interval(10), n._scroller.add_tick(n._scrollerTickHandler)
    },
    startDragDrop: function (n, t, i) {
        var r = this;
        r._activeDragSource = n, r._activeDragVisual = t, r._activeContext = i, AjaxControlToolkit.GenericDragDropManager.callBaseMethod(r, "startDragDrop", [n, t, i])
    },
    _stopDragDrop: function (n) {
        this._scroller.set_enabled(!1), AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "_stopDragDrop", [n])
    },
    _drag: function (n) {
        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "_drag", [n]), this._autoScroll()
    },
    _wireEvents: function () {
        $addHandler(document, "mouseup", this._mouseUpHandler), $addHandler(document, "mousemove", this._mouseMoveHandler), $addHandler(document, "keypress", this._keyPressHandler)
    },
    _unwireEvents: function () {
        $removeHandler(document, "keypress", this._keyPressHandler), $removeHandler(document, "mousemove", this._mouseMoveHandler), $removeHandler(document, "mouseup", this._mouseUpHandler)
    },
    _wireDropTargetEvents: function () { },
    _unwireDropTargetEvents: function () { },
    _onMouseUp: function (n) {
        window._event = n, this._stopDragDrop(!1)
    },
    _onMouseMove: function (n) {
        window._event = n, this._drag()
    },
    _onKeyPress: function (n) {
        window._event = n;
        var t = n.keyCode ? n.keyCode : n.rawEvent.keyCode;
        t == 27 && this._stopDragDrop(!0)
    },
    _autoScroll: function () {
        var n = this,
            i = window._event,
            t = n.getBrowserRectangle();
        t.width > 0 && (n._scrollDeltaX = n._scrollDeltaY = 0, i.clientX < t.x + n._scrollEdgeConst ? n._scrollDeltaX = -n._scrollByConst : i.clientX > t.width - n._scrollEdgeConst && (n._scrollDeltaX = n._scrollByConst), i.clientY < t.y + n._scrollEdgeConst ? n._scrollDeltaY = -n._scrollByConst : i.clientY > t.height - n._scrollEdgeConst && (n._scrollDeltaY = n._scrollByConst), n._scrollDeltaX != 0 || n._scrollDeltaY != 0 ? n._scroller.set_enabled(!0) : n._scroller.set_enabled(!1))
    },
    _onScrollerTick: function () {
        var t = document.body.scrollLeft,
            i = document.body.scrollTop;
        window.scrollBy(this._scrollDeltaX, this._scrollDeltaY);
        var r = document.body.scrollLeft,
            u = document.body.scrollTop,
            n = this._activeDragVisual,
            f = {
                x: parseInt(n.style.left) + (r - t),
                y: parseInt(n.style.top) + (u - i)
            };
        $common.setLocation(n, f)
    }
}, AjaxControlToolkit.GenericDragDropManager.registerClass("AjaxControlToolkit.GenericDragDropManager", AjaxControlToolkit.IEDragDropManager), Sys.Browser.agent === Sys.Browser.Safari && (AjaxControlToolkit.GenericDragDropManager.__loadSafariCompatLayer = function (n) {
    n._getScrollOffset = n.getScrollOffset, n.getScrollOffset = function () {
        return {
            x: 0,
            y: 0
        }
    }, n._getBrowserRectangle = n.getBrowserRectangle, n.getBrowserRectangle = function () {
        var t = n._getBrowserRectangle(),
            i = n._getScrollOffset(document.body, !0);
        return {
            x: t.x + i.x,
            y: t.y + i.y,
            width: t.width + i.x,
            height: t.height + i.y
        }
    }
}), Type.registerNamespace("AjaxControlToolkit.Animation"), $AA = AjaxControlToolkit.Animation, $AA.registerAnimation = function (n, t) {
    if (t && (t === $AA.Animation || t.inheritsFrom && t.inheritsFrom($AA.Animation))) $AA.__animations || ($AA.__animations = {}), $AA.__animations[n.toLowerCase()] = t, t.play = function () {
        var n = new t,
            i;
        t.apply(n, arguments), n.initialize(), i = Function.createDelegate(n, function () {
            n.remove_ended(i), i = null, n.dispose()
        }), n.add_ended(i), n.play()
    };
    else throw Error.argumentType("type", t, $AA.Animation, AjaxControlToolkit.Resources.Animation_InvalidBaseType);
}, $AA.buildAnimation = function (n, t) {
    if (!n || n === "") return null;
    var i;
    if (n = "(" + n + ")", Sys.Debug.isDebug) i = Sys.Serialization.JavaScriptSerializer.deserialize(n);
    else try {
        i = Sys.Serialization.JavaScriptSerializer.deserialize(n)
    } catch (r) { }
    return $AA.createAnimation(i, t)
}, $AA.createAnimation = function (n, t) {
    var s = "obj",
        i, u, h, a, o, c, f, e, l, r;
    if (!n || !n.AnimationName) throw Error.argument(s, AjaxControlToolkit.Resources.Animation_MissingAnimationName);
    if (i = $AA.__animations[n.AnimationName.toLowerCase()], !i) throw Error.argument("type", String.format(AjaxControlToolkit.Resources.Animation_UknownAnimationName, n.AnimationName));
    if (u = new i, t && u.set_target(t), n.AnimationChildren && n.AnimationChildren.length)
        if ($AA.ParentAnimation.isInstanceOfType(u))
            for (h = 0; h < n.AnimationChildren.length; h++) a = $AA.createAnimation(n.AnimationChildren[h]), a && u.add(a);
        else throw Error.argument(s, String.format(AjaxControlToolkit.Resources.Animation_ChildrenNotAllowed, i.getName()));
    if (o = i.__animationProperties, !o) {
        i.__animationProperties = {}, i.resolveInheritance();
        for (c in i.prototype) c.startsWith("set_") && (i.__animationProperties[c.substr(4).toLowerCase()] = c);
        delete i.__animationProperties.id, o = i.__animationProperties
    }
    for (f in n)
        if (e = f.toLowerCase(), e != "animationname" && e != "animationchildren")
            if (l = n[f], r = o[e], r && String.isInstanceOfType(r) && u[r])
                if (Sys.Debug.isDebug) u[r](l);
                else try {
                    u[r](l)
                } catch (v) { } else if (e.endsWith("script")) {
                    if (r = o[e.substr(0, f.length - 6)], r && String.isInstanceOfType(r) && u[r]) u.DynamicProperties[r] = l;
                    else if (Sys.Debug.isDebug) throw Error.argument(s, String.format(AjaxControlToolkit.Resources.Animation_NoDynamicPropertyFound, f, f.substr(0, f.length - 5)));
                } else if (Sys.Debug.isDebug) throw Error.argument(s, String.format(AjaxControlToolkit.Resources.Animation_NoPropertyFound, f));
    return u
}, $AA.Animation = function (n, t, i) {
    var u = null,
        r = this;
    $AA.Animation.initializeBase(r), r._duration = 1, r._fps = 25, r._target = u, r._tickHandler = u, r._timer = u, r._percentComplete = 0, r._percentDelta = u, r._owner = u, r._parentAnimation = u, r.DynamicProperties = {}, n && r.set_target(n), t && r.set_duration(t), i && r.set_fps(i)
}, $AA.Animation.prototype = {
    dispose: function () {
        var n = this;
        n._timer && (n._timer.dispose(), n._timer = null), n._tickHandler = null, n._target = null, $AA.Animation.callBaseMethod(n, "dispose")
    },
    play: function () {
        var n = this,
            t;
        n._owner || (t = !0, n._timer || (t = !1, n._tickHandler || (n._tickHandler = Function.createDelegate(n, n._onTimerTick)), n._timer = new Sys.Timer, n._timer.add_tick(n._tickHandler), n.onStart(), n._timer.set_interval(1e3 / n._fps), n._percentDelta = 100 / (n._duration * n._fps), n._updatePercentComplete(0, !0)), n._timer.set_enabled(!0), n.raisePropertyChanged("isPlaying"), !t && n.raisePropertyChanged("isActive"))
    },
    pause: function () {
        var n = this;
        n._owner || n._timer && (n._timer.set_enabled(!1), n.raisePropertyChanged("isPlaying"))
    },
    stop: function (n) {
        var t = this,
            i;
        t._owner || (i = t._timer, t._timer = null, i && (i.dispose(), t._percentComplete !== 100 && (t._percentComplete = 100, t.raisePropertyChanged("percentComplete"), (n || n === undefined) && t.onStep(100)), t.onEnd(), t.raisePropertyChanged("isPlaying"), t.raisePropertyChanged("isActive")))
    },
    onStart: function () {
        var a = this,
            property;
        a.raiseStarted();
        for (property in a.DynamicProperties) try {
            a[property](eval(a.DynamicProperties[property]))
        } catch (a) {
            if (Sys.Debug.isDebug) throw a;
        }
    },
    onStep: function (n) {
        this.setValue(this.getAnimatedValue(n)), this.raiseStep()
    },
    onEnd: function () {
        this.raiseEnded()
    },
    getAnimatedValue: function () {
        throw Error.notImplemented();
    },
    setValue: function () {
        throw Error.notImplemented();
    },
    interpolate: function (n, t, i) {
        return n + (t - n) * (i / 100)
    },
    _onTimerTick: function () {
        this._updatePercentComplete(this._percentComplete + this._percentDelta, !0)
    },
    _updatePercentComplete: function (n, t) {
        var i = this;
        n > 100 && (n = 100), i._percentComplete = n, i.raisePropertyChanged("percentComplete"), t && i.onStep(n), n === 100 && i.stop(!1)
    },
    setOwner: function (n) {
        this._owner = n
    },
    raiseStarted: function () {
        var n = this.get_events().getHandler("started");
        n && n(this, Sys.EventArgs.Empty)
    },
    add_started: function (n) {
        this.get_events().addHandler("started", n)
    },
    remove_started: function (n) {
        this.get_events().removeHandler("started", n)
    },
    raiseEnded: function () {
        var n = this.get_events().getHandler("ended");
        n && n(this, Sys.EventArgs.Empty)
    },
    add_ended: function (n) {
        this.get_events().addHandler("ended", n)
    },
    remove_ended: function (n) {
        this.get_events().removeHandler("ended", n)
    },
    raiseStep: function () {
        var n = this.get_events().getHandler("step");
        n && n(this, Sys.EventArgs.Empty)
    },
    add_step: function (n) {
        this.get_events().addHandler("step", n)
    },
    remove_step: function (n) {
        this.get_events().removeHandler("step", n)
    },
    get_target: function () {
        var n = this;
        return !n._target && n._parentAnimation ? n._parentAnimation.get_target() : n._target
    },
    set_target: function (n) {
        this._target != n && (this._target = n, this.raisePropertyChanged("target"))
    },
    set_animationTarget: function (n) {
        var i = null,
            t = $get(n),
            r;
        if (t ? i = t : (r = $find(n), r && (t = r.get_element(), t && (i = t))), i) this.set_target(i);
        else throw Error.argument("id", String.format(AjaxControlToolkit.Resources.Animation_TargetNotFound, n));
    },
    get_duration: function () {
        return this._duration
    },
    set_duration: function (n) {
        var t = this;
        n = t._getFloat(n), t._duration != n && (t._duration = n, t.raisePropertyChanged("duration"))
    },
    get_fps: function () {
        return this._fps
    },
    set_fps: function (n) {
        var t = this;
        n = t._getInteger(n), t.fps != n && (t._fps = n, t.raisePropertyChanged("fps"))
    },
    get_isActive: function () {
        return this._timer !== null
    },
    get_isPlaying: function () {
        return this._timer !== null && this._timer.get_enabled()
    },
    get_percentComplete: function () {
        return this._percentComplete
    },
    _getBoolean: function (n) {
        return String.isInstanceOfType(n) ? Boolean.parse(n) : n
    },
    _getInteger: function (n) {
        return String.isInstanceOfType(n) ? parseInt(n) : n
    },
    _getFloat: function (n) {
        return String.isInstanceOfType(n) ? parseFloat(n) : n
    },
    _getEnum: function (n, t) {
        return String.isInstanceOfType(n) && t && t.parse ? t.parse(n) : n
    }
}, $AA.Animation.registerClass("AjaxControlToolkit.Animation.Animation", Sys.Component), $AA.registerAnimation("animation", $AA.Animation), $AA.ParentAnimation = function (n, t, i, r) {
    if ($AA.ParentAnimation.initializeBase(this, [n, t, i]), this._animations = [], r && r.length)
        for (var u = 0; u < r.length; u++) this.add(r[u])
}, $AA.ParentAnimation.prototype = {
    initialize: function () {
        var n = this,
            t, i;
        if ($AA.ParentAnimation.callBaseMethod(n, "initialize"), n._animations)
            for (t = 0; t < n._animations.length; t++) i = n._animations[t], i && !i.get_isInitialized && i.initialize()
    },
    dispose: function () {
        this.clear(), this._animations = null, $AA.ParentAnimation.callBaseMethod(this, "dispose")
    },
    get_animations: function () {
        return this._animations
    },
    add: function (n) {
        var t = this;
        t._animations && (n && (n._parentAnimation = t), Array.add(t._animations, n), t.raisePropertyChanged("animations"))
    },
    remove: function (n) {
        this._animations && (n && n.dispose(), Array.remove(this._animations, n), this.raisePropertyChanged("animations"))
    },
    removeAt: function (n) {
        var t = this,
            i;
        t._animations && (i = t._animations[n], i && i.dispose(), Array.removeAt(t._animations, n), t.raisePropertyChanged("animations"))
    },
    clear: function () {
        var n = this,
            t;
        if (n._animations) {
            for (t = n._animations.length - 1; t >= 0; t--) n._animations[t].dispose(), n._animations[t] = null;
            Array.clear(n._animations), n._animations = [], n.raisePropertyChanged("animations")
        }
    }
}, $AA.ParentAnimation.registerClass("AjaxControlToolkit.Animation.ParentAnimation", $AA.Animation), $AA.registerAnimation("parent", $AA.ParentAnimation), $AA.ParallelAnimation = function (n, t, i, r) {
    $AA.ParallelAnimation.initializeBase(this, [n, t, i, r])
}, $AA.ParallelAnimation.prototype = {
    add: function (n) {
        $AA.ParallelAnimation.callBaseMethod(this, "add", [n]), n.setOwner(this)
    },
    onStart: function () {
        $AA.ParallelAnimation.callBaseMethod(this, "onStart");
        for (var t = this.get_animations(), n = 0; n < t.length; n++) t[n].onStart()
    },
    onStep: function (n) {
        for (var i = this.get_animations(), t = 0; t < i.length; t++) i[t].onStep(n)
    },
    onEnd: function () {
        for (var t = this.get_animations(), n = 0; n < t.length; n++) t[n].onEnd();
        $AA.ParallelAnimation.callBaseMethod(this, "onEnd")
    }
}, $AA.ParallelAnimation.registerClass("AjaxControlToolkit.Animation.ParallelAnimation", $AA.ParentAnimation), $AA.registerAnimation("parallel", $AA.ParallelAnimation), $AA.SequenceAnimation = function (n, t, i, r, u) {
    var f = this;
    $AA.SequenceAnimation.initializeBase(f, [n, t, i, r]), f._handler = null, f._paused = !1, f._playing = !1, f._index = 0, f._remainingIterations = 0, f._iterations = u !== undefined ? u : 1
}, $AA.SequenceAnimation.prototype = {
    dispose: function () {
        this._handler = null, $AA.SequenceAnimation.callBaseMethod(this, "dispose")
    },
    stop: function () {
        var n = this,
            t, i;
        if (n._playing) {
            if (t = n.get_animations(), n._index < t.length)
                for (t[n._index].remove_ended(n._handler), i = n._index; i < t.length; i++) t[i].stop();
            n._playing = !1, n._paused = !1, n.raisePropertyChanged("isPlaying"), n.onEnd()
        }
    },
    pause: function () {
        var n = this,
            t;
        n.get_isPlaying() && (t = n.get_animations()[n._index], t != null && t.pause(), n._paused = !0, n.raisePropertyChanged("isPlaying"))
    },
    play: function () {
        var r = "isPlaying",
            n = this,
            u = n.get_animations(),
            i, t;
        n._playing || (n._playing = !0, n._paused ? (n._paused = !1, i = u[n._index], i != null && (i.play(), n.raisePropertyChanged(r))) : (n.onStart(), n._index = 0, t = u[n._index], t ? (t.add_ended(n._handler), t.play(), n.raisePropertyChanged(r)) : n.stop()))
    },
    onStart: function () {
        var n = this;
        $AA.SequenceAnimation.callBaseMethod(n, "onStart"), n._remainingIterations = n._iterations - 1, n._handler || (n._handler = Function.createDelegate(n, n._onEndAnimation))
    },
    _onEndAnimation: function () {
        var n = this,
            t = n.get_animations(),
            u = t[n._index++],
            i, r;
        u && u.remove_ended(n._handler), n._index < t.length ? (i = t[n._index], i.add_ended(n._handler), i.play()) : n._remainingIterations >= 1 || n._iterations <= 0 ? (n._remainingIterations--, n._index = 0, r = t[0], r.add_ended(n._handler), r.play()) : n.stop()
    },
    onStep: function () {
        throw Error.invalidOperation(AjaxControlToolkit.Resources.Animation_CannotNestSequence);
    },
    onEnd: function () {
        this._remainingIterations = 0, $AA.SequenceAnimation.callBaseMethod(this, "onEnd")
    },
    get_isActive: function () {
        return !0
    },
    get_isPlaying: function () {
        return this._playing && !this._paused
    },
    get_iterations: function () {
        return this._iterations
    },
    set_iterations: function (n) {
        var t = this;
        n = t._getInteger(n), t._iterations != n && (t._iterations = n, t.raisePropertyChanged("iterations"))
    },
    get_isInfinite: function () {
        return this._iterations <= 0
    }
}, $AA.SequenceAnimation.registerClass("AjaxControlToolkit.Animation.SequenceAnimation", $AA.ParentAnimation), $AA.registerAnimation("sequence", $AA.SequenceAnimation), $AA.SelectionAnimation = function (n, t, i, r) {
    $AA.SelectionAnimation.initializeBase(this, [n, t, i, r]), this._selectedIndex = -1, this._selected = null
}, $AA.SelectionAnimation.prototype = {
    getSelectedIndex: function () {
        throw Error.notImplemented();
    },
    onStart: function () {
        var n = this,
            t;
        $AA.SelectionAnimation.callBaseMethod(n, "onStart"), t = n.get_animations(), n._selectedIndex = n.getSelectedIndex(), n._selectedIndex >= 0 && n._selectedIndex < t.length && (n._selected = t[n._selectedIndex], n._selected && (n._selected.setOwner(n), n._selected.onStart()))
    },
    onStep: function (n) {
        this._selected && this._selected.onStep(n)
    },
    onEnd: function () {
        var n = this;
        n._selected && (n._selected.onEnd(), n._selected.setOwner(null)), n._selected = null, n._selectedIndex = null, $AA.SelectionAnimation.callBaseMethod(n, "onEnd")
    }
}, $AA.SelectionAnimation.registerClass("AjaxControlToolkit.Animation.SelectionAnimation", $AA.ParentAnimation), $AA.registerAnimation("selection", $AA.SelectionAnimation), $AA.ConditionAnimation = function (n, t, i, r, u) {
    $AA.ConditionAnimation.initializeBase(this, [n, t, i, r]), this._conditionScript = u
}, $AA.ConditionAnimation.prototype = {
    getSelectedIndex: function () {
        var selected = -1;
        if (this._conditionScript && this._conditionScript.length > 0) try {
            selected = eval(this._conditionScript) ? 0 : 1
        } catch (a) { }
        return selected
    },
    get_conditionScript: function () {
        return this._conditionScript
    },
    set_conditionScript: function (n) {
        this._conditionScript != n && (this._conditionScript = n, this.raisePropertyChanged("conditionScript"))
    }
}, $AA.ConditionAnimation.registerClass("AjaxControlToolkit.Animation.ConditionAnimation", $AA.SelectionAnimation), $AA.registerAnimation("condition", $AA.ConditionAnimation), $AA.CaseAnimation = function (n, t, i, r, u) {
    $AA.CaseAnimation.initializeBase(this, [n, t, i, r]), this._selectScript = u
}, $AA.CaseAnimation.prototype = {
    getSelectedIndex: function () {
        var selected = -1,
            result;
        if (this._selectScript && this._selectScript.length > 0) try {
            result = eval(this._selectScript), result !== undefined && (selected = result)
        } catch (a) { }
        return selected
    },
    get_selectScript: function () {
        return this._selectScript
    },
    set_selectScript: function (n) {
        this._selectScript != n && (this._selectScript = n, this.raisePropertyChanged("selectScript"))
    }
}, $AA.CaseAnimation.registerClass("AjaxControlToolkit.Animation.CaseAnimation", $AA.SelectionAnimation), $AA.registerAnimation("case", $AA.CaseAnimation), $AA.FadeEffect = function () {
    throw Error.invalidOperation();
}, $AA.FadeEffect.prototype = {
    FadeIn: 0,
    FadeOut: 1
}, $AA.FadeEffect.registerEnum("AjaxControlToolkit.Animation.FadeEffect", !1), $AA.FadeAnimation = function (n, t, i, r, u, f, e) {
    var o = this;
    $AA.FadeAnimation.initializeBase(o, [n, t, i]), o._effect = r !== undefined ? r : $AA.FadeEffect.FadeIn, o._max = f !== undefined ? f : 1, o._min = u !== undefined ? u : 0, o._start = o._min, o._end = o._max, o._layoutCreated = !1, o._forceLayoutInIE = e === undefined || e === null ? !0 : e, o._currentTarget = null, o._resetOpacities()
}, $AA.FadeAnimation.prototype = {
    _resetOpacities: function () {
        var n = this;
        n._effect == $AA.FadeEffect.FadeIn ? (n._start = n._min, n._end = n._max) : (n._start = n._max, n._end = n._min)
    },
    _createLayout: function () {
        var n = this,
            t = n._currentTarget,
            i;
        t && (n._originalWidth = $common.getCurrentStyle(t, "width"), i = $common.getCurrentStyle(t, "height"), n._originalBackColor = $common.getCurrentStyle(t, "backgroundColor"), n._originalWidth && n._originalWidth != "" && n._originalWidth != "auto" || i && i != "" && i != "auto" || (t.style.width = t.offsetWidth + "px"), n._originalBackColor && n._originalBackColor != "" && n._originalBackColor != "transparent" && n._originalBackColor != "rgba(0, 0, 0, 0)" || (t.style.backgroundColor = $common.getInheritedBackgroundColor(t)), n._layoutCreated = !0)
    },
    onStart: function () {
        var n = this;
        $AA.FadeAnimation.callBaseMethod(n, "onStart"), n._currentTarget = n.get_target(), n.setValue(n._start), n._forceLayoutInIE && !n._layoutCreated && Sys.Browser.agent == Sys.Browser.InternetExplorer && n._createLayout()
    },
    getAnimatedValue: function (n) {
        return this.interpolate(this._start, this._end, n)
    },
    setValue: function (n) {
        this._currentTarget && $common.setElementOpacity(this._currentTarget, n)
    },
    get_effect: function () {
        return this._effect
    },
    set_effect: function (n) {
        var t = this;
        n = t._getEnum(n, $AA.FadeEffect), t._effect != n && (t._effect = n, t._resetOpacities(), t.raisePropertyChanged("effect"))
    },
    get_minimumOpacity: function () {
        return this._min
    },
    set_minimumOpacity: function (n) {
        var t = this;
        n = t._getFloat(n), t._min != n && (t._min = n, t._resetOpacities(), t.raisePropertyChanged("minimumOpacity"))
    },
    get_maximumOpacity: function () {
        return this._max
    },
    set_maximumOpacity: function (n) {
        var t = this;
        n = t._getFloat(n), t._max != n && (t._max = n, t._resetOpacities(), t.raisePropertyChanged("maximumOpacity"))
    },
    get_forceLayoutInIE: function () {
        return this._forceLayoutInIE
    },
    set_forceLayoutInIE: function (n) {
        var t = this;
        n = t._getBoolean(n), t._forceLayoutInIE != n && (t._forceLayoutInIE = n, t.raisePropertyChanged("forceLayoutInIE"))
    },
    set_startValue: function (n) {
        n = this._getFloat(n), this._start = n
    }
}, $AA.FadeAnimation.registerClass("AjaxControlToolkit.Animation.FadeAnimation", $AA.Animation), $AA.registerAnimation("fade", $AA.FadeAnimation), $AA.FadeInAnimation = function (n, t, i, r, u, f) {
    $AA.FadeInAnimation.initializeBase(this, [n, t, i, $AA.FadeEffect.FadeIn, r, u, f])
}, $AA.FadeInAnimation.prototype = {
    onStart: function () {
        var n = this;
        $AA.FadeInAnimation.callBaseMethod(n, "onStart"), n._currentTarget && n.set_startValue($common.getElementOpacity(n._currentTarget))
    }
}, $AA.FadeInAnimation.registerClass("AjaxControlToolkit.Animation.FadeInAnimation", $AA.FadeAnimation), $AA.registerAnimation("fadeIn", $AA.FadeInAnimation), $AA.FadeOutAnimation = function (n, t, i, r, u, f) {
    $AA.FadeOutAnimation.initializeBase(this, [n, t, i, $AA.FadeEffect.FadeOut, r, u, f])
}, $AA.FadeOutAnimation.prototype = {
    onStart: function () {
        var n = this;
        $AA.FadeOutAnimation.callBaseMethod(n, "onStart"), n._currentTarget && n.set_startValue($common.getElementOpacity(n._currentTarget))
    }
}, $AA.FadeOutAnimation.registerClass("AjaxControlToolkit.Animation.FadeOutAnimation", $AA.FadeAnimation), $AA.registerAnimation("fadeOut", $AA.FadeOutAnimation), $AA.PulseAnimation = function (n, t, i, r, u, f, e) {
    var o = this;
    $AA.PulseAnimation.initializeBase(o, [n, t, i, null, r !== undefined ? r : 3]), o._out = new $AA.FadeOutAnimation(n, t, i, u, f, e), o.add(o._out), o._in = new $AA.FadeInAnimation(n, t, i, u, f, e), o.add(o._in)
}, $AA.PulseAnimation.prototype = {
    get_minimumOpacity: function () {
        return this._out.get_minimumOpacity()
    },
    set_minimumOpacity: function (n) {
        var t = this;
        n = t._getFloat(n), t._out.set_minimumOpacity(n), t._in.set_minimumOpacity(n), t.raisePropertyChanged("minimumOpacity")
    },
    get_maximumOpacity: function () {
        return this._out.get_maximumOpacity()
    },
    set_maximumOpacity: function (n) {
        var t = this;
        n = t._getFloat(n), t._out.set_maximumOpacity(n), t._in.set_maximumOpacity(n), t.raisePropertyChanged("maximumOpacity")
    },
    get_forceLayoutInIE: function () {
        return this._out.get_forceLayoutInIE()
    },
    set_forceLayoutInIE: function (n) {
        var t = this;
        n = t._getBoolean(n), t._out.set_forceLayoutInIE(n), t._in.set_forceLayoutInIE(n), t.raisePropertyChanged("forceLayoutInIE")
    },
    set_duration: function (n) {
        var t = this;
        n = t._getFloat(n), $AA.PulseAnimation.callBaseMethod(t, "set_duration", [n]), t._in.set_duration(n), t._out.set_duration(n)
    },
    set_fps: function (n) {
        var t = this;
        n = t._getInteger(n), $AA.PulseAnimation.callBaseMethod(t, "set_fps", [n]), t._in.set_fps(n), t._out.set_fps(n)
    }
}, $AA.PulseAnimation.registerClass("AjaxControlToolkit.Animation.PulseAnimation", $AA.SequenceAnimation), $AA.registerAnimation("pulse", $AA.PulseAnimation), $AA.PropertyAnimation = function (n, t, i, r, u) {
    var f = this;
    $AA.PropertyAnimation.initializeBase(f, [n, t, i]), f._property = r, f._propertyKey = u, f._currentTarget = null
}, $AA.PropertyAnimation.prototype = {
    onStart: function () {
        $AA.PropertyAnimation.callBaseMethod(this, "onStart"), this._currentTarget = this.get_target()
    },
    setValue: function (n) {
        var t = this,
            i = t._currentTarget;
        i && t._property && t._property.length > 0 && (t._propertyKey && t._propertyKey.length > 0 && i[t._property] ? i[t._property][t._propertyKey] = n : i[t._property] = n)
    },
    getValue: function () {
        var n = this,
            i = n.get_target(),
            t;
        return i && n._property && n._property.length > 0 && (t = i[n._property], t) ? n._propertyKey && n._propertyKey.length > 0 ? t[n._propertyKey] : t : null
    },
    get_property: function () {
        return this._property
    },
    set_property: function (n) {
        this._property != n && (this._property = n, this.raisePropertyChanged("property"))
    },
    get_propertyKey: function () {
        return this._propertyKey
    },
    set_propertyKey: function (n) {
        this._propertyKey != n && (this._propertyKey = n, this.raisePropertyChanged("propertyKey"))
    }
}, $AA.PropertyAnimation.registerClass("AjaxControlToolkit.Animation.PropertyAnimation", $AA.Animation), $AA.registerAnimation("property", $AA.PropertyAnimation), $AA.DiscreteAnimation = function (n, t, i, r, u, f) {
    $AA.DiscreteAnimation.initializeBase(this, [n, t, i, r, u]), this._values = f && f.length ? f : []
}, $AA.DiscreteAnimation.prototype = {
    getAnimatedValue: function (n) {
        var t = Math.floor(this.interpolate(0, this._values.length - 1, n));
        return this._values[t]
    },
    get_values: function () {
        return this._values
    },
    set_values: function (n) {
        this._values != n && (this._values = n, this.raisePropertyChanged("values"))
    }
}, $AA.DiscreteAnimation.registerClass("AjaxControlToolkit.Animation.DiscreteAnimation", $AA.PropertyAnimation), $AA.registerAnimation("discrete", $AA.DiscreteAnimation), $AA.InterpolatedAnimation = function (n, t, i, r, u, f, e) {
    $AA.InterpolatedAnimation.initializeBase(this, [n, t, i, r !== undefined ? r : "style", u]), this._startValue = f, this._endValue = e
}, $AA.InterpolatedAnimation.prototype = {
    get_startValue: function () {
        return this._startValue
    },
    set_startValue: function (n) {
        var t = this;
        n = t._getFloat(n), t._startValue != n && (t._startValue = n, t.raisePropertyChanged("startValue"))
    },
    get_endValue: function () {
        return this._endValue
    },
    set_endValue: function (n) {
        var t = this;
        n = t._getFloat(n), t._endValue != n && (t._endValue = n, t.raisePropertyChanged("endValue"))
    }
}, $AA.InterpolatedAnimation.registerClass("AjaxControlToolkit.Animation.InterpolatedAnimation", $AA.PropertyAnimation), $AA.registerAnimation("interpolated", $AA.InterpolatedAnimation), $AA.ColorAnimation = function (n, t, i, r, u, f, e) {
    var o = this;
    $AA.ColorAnimation.initializeBase(o, [n, t, i, r, u, f, e]), o._start = null, o._end = null, o._interpolateRed = !1, o._interpolateGreen = !1, o._interpolateBlue = !1
}, $AA.ColorAnimation.prototype = {
    onStart: function () {
        var n = this;
        $AA.ColorAnimation.callBaseMethod(n, "onStart"), n._start = $AA.ColorAnimation.getRGB(n.get_startValue()), n._end = $AA.ColorAnimation.getRGB(n.get_endValue()), n._interpolateRed = n._start.Red != n._end.Red, n._interpolateGreen = n._start.Green != n._end.Green, n._interpolateBlue = n._start.Blue != n._end.Blue
    },
    getAnimatedValue: function (n) {
        var t = this,
            i = t._start.Red,
            r = t._start.Green,
            u = t._start.Blue;
        return t._interpolateRed && (i = Math.round(t.interpolate(i, t._end.Red, n))), t._interpolateGreen && (r = Math.round(t.interpolate(r, t._end.Green, n))), t._interpolateBlue && (u = Math.round(t.interpolate(u, t._end.Blue, n))), $AA.ColorAnimation.toColor(i, r, u)
    },
    set_startValue: function (n) {
        this._startValue != n && (this._startValue = n, this.raisePropertyChanged("startValue"))
    },
    set_endValue: function (n) {
        this._endValue != n && (this._endValue = n, this.raisePropertyChanged("endValue"))
    }
}, $AA.ColorAnimation.getRGB = function (n) {
    if (!n || n.length != 7) throw String.format(AjaxControlToolkit.Resources.Animation_InvalidColor, n);
    return {
        Red: parseInt(n.substr(1, 2), 16),
        Green: parseInt(n.substr(3, 2), 16),
        Blue: parseInt(n.substr(5, 2), 16)
    }
}, $AA.ColorAnimation.toColor = function (n, t, i) {
    var r = n.toString(16),
        u = t.toString(16),
        f = i.toString(16);
    return r.length == 1 && (r = "0" + r), u.length == 1 && (u = "0" + u), f.length == 1 && (f = "0" + f), "#" + r + u + f
}, $AA.ColorAnimation.registerClass("AjaxControlToolkit.Animation.ColorAnimation", $AA.InterpolatedAnimation), $AA.registerAnimation("color", $AA.ColorAnimation), $AA.LengthAnimation = function (n, t, i, r, u, f, e, o) {
    $AA.LengthAnimation.initializeBase(this, [n, t, i, r, u, f, e]), this._unit = o != null ? o : "px"
}, $AA.LengthAnimation.prototype = {
    getAnimatedValue: function (n) {
        var t = this,
            i = t.interpolate(t.get_startValue(), t.get_endValue(), n);
        return Math.round(i) + t._unit
    },
    get_unit: function () {
        return this._unit
    },
    set_unit: function (n) {
        this._unit != n && (this._unit = n, this.raisePropertyChanged("unit"))
    }
}, $AA.LengthAnimation.registerClass("AjaxControlToolkit.Animation.LengthAnimation", $AA.InterpolatedAnimation), $AA.registerAnimation("length", $AA.LengthAnimation), $AA.MoveAnimation = function (n, t, i, r, u, f, e) {
    var s = null,
        o = this;
    $AA.MoveAnimation.initializeBase(o, [n, t, i, s]), o._horizontal = r ? r : 0, o._vertical = u ? u : 0, o._relative = f === undefined ? !0 : f, o._horizontalAnimation = new $AA.LengthAnimation(n, t, i, "style", "left", s, s, e), o._verticalAnimation = new $AA.LengthAnimation(n, t, i, "style", "top", s, s, e), o.add(o._verticalAnimation), o.add(o._horizontalAnimation)
}, $AA.MoveAnimation.prototype = {
    onStart: function () {
        var n = this,
            t;
        $AA.MoveAnimation.callBaseMethod(n, "onStart"), t = n.get_target(), n._horizontalAnimation.set_startValue(t.offsetLeft), n._horizontalAnimation.set_endValue(n._relative ? t.offsetLeft + n._horizontal : n._horizontal), n._verticalAnimation.set_startValue(t.offsetTop), n._verticalAnimation.set_endValue(n._relative ? t.offsetTop + n._vertical : n._vertical)
    },
    get_horizontal: function () {
        return this._horizontal
    },
    set_horizontal: function (n) {
        var t = this;
        n = t._getFloat(n), t._horizontal != n && (t._horizontal = n, t.raisePropertyChanged("horizontal"))
    },
    get_vertical: function () {
        return this._vertical
    },
    set_vertical: function (n) {
        var t = this;
        n = t._getFloat(n), t._vertical != n && (t._vertical = n, t.raisePropertyChanged("vertical"))
    },
    get_relative: function () {
        return this._relative
    },
    set_relative: function (n) {
        var t = this;
        n = t._getBoolean(n), t._relative != n && (t._relative = n, t.raisePropertyChanged("relative"))
    },
    get_unit: function () {
        this._horizontalAnimation.get_unit()
    },
    set_unit: function (n) {
        var t = this,
            i = t._horizontalAnimation.get_unit();
        i != n && (t._horizontalAnimation.set_unit(n), t._verticalAnimation.set_unit(n), t.raisePropertyChanged("unit"))
    }
}, $AA.MoveAnimation.registerClass("AjaxControlToolkit.Animation.MoveAnimation", $AA.ParallelAnimation), $AA.registerAnimation("move", $AA.MoveAnimation), $AA.ResizeAnimation = function (n, t, i, r, u, f) {
    var o = null,
        e = this;
    $AA.ResizeAnimation.initializeBase(e, [n, t, i, o]), e._width = r, e._height = u, e._horizontalAnimation = new $AA.LengthAnimation(n, t, i, "style", "width", o, o, f), e._verticalAnimation = new $AA.LengthAnimation(n, t, i, "style", "height", o, o, f), e.add(e._horizontalAnimation), e.add(e._verticalAnimation)
}, $AA.ResizeAnimation.prototype = {
    onStart: function () {
        var n = this,
            t;
        $AA.ResizeAnimation.callBaseMethod(n, "onStart"), t = n.get_target(), n._horizontalAnimation.set_startValue(t.offsetWidth), n._verticalAnimation.set_startValue(t.offsetHeight), n._horizontalAnimation.set_endValue(n._width !== null && n._width !== undefined ? n._width : t.offsetWidth), n._verticalAnimation.set_endValue(n._height !== null && n._height !== undefined ? n._height : t.offsetHeight)
    },
    get_width: function () {
        return this._width
    },
    set_width: function (n) {
        var t = this;
        n = t._getFloat(n), t._width != n && (t._width = n, t.raisePropertyChanged("width"))
    },
    get_height: function () {
        return this._height
    },
    set_height: function (n) {
        var t = this;
        n = t._getFloat(n), t._height != n && (t._height = n, t.raisePropertyChanged("height"))
    },
    get_unit: function () {
        this._horizontalAnimation.get_unit()
    },
    set_unit: function (n) {
        var t = this,
            i = t._horizontalAnimation.get_unit();
        i != n && (t._horizontalAnimation.set_unit(n), t._verticalAnimation.set_unit(n), t.raisePropertyChanged("unit"))
    }
}, $AA.ResizeAnimation.registerClass("AjaxControlToolkit.Animation.ResizeAnimation", $AA.ParallelAnimation), $AA.registerAnimation("resize", $AA.ResizeAnimation), $AA.ScaleAnimation = function (n, t, i, r, u, f, e, o) {
    var h = null,
        s = this;
    $AA.ScaleAnimation.initializeBase(s, [n, t, i]), s._scaleFactor = r !== undefined ? r : 1, s._unit = u !== undefined ? u : "px", s._center = f, s._scaleFont = e, s._fontUnit = o !== undefined ? o : "pt", s._element = h, s._initialHeight = h, s._initialWidth = h, s._initialTop = h, s._initialLeft = h, s._initialFontSize = h
}, $AA.ScaleAnimation.prototype = {
    getAnimatedValue: function (n) {
        return this.interpolate(1, this._scaleFactor, n)
    },
    onStart: function () {
        var n = this;
        $AA.ScaleAnimation.callBaseMethod(n, "onStart"), n._element = n.get_target(), n._element && (n._initialHeight = n._element.offsetHeight, n._initialWidth = n._element.offsetWidth, n._center && (n._initialTop = n._element.offsetTop, n._initialLeft = n._element.offsetLeft), n._scaleFont && (n._initialFontSize = parseFloat($common.getCurrentStyle(n._element, "fontSize"))))
    },
    setValue: function (n) {
        var t = this,
            r, u, i;
        t._element && (r = Math.round(t._initialWidth * n), u = Math.round(t._initialHeight * n), t._element.style.width = r + t._unit, t._element.style.height = u + t._unit, t._center && (t._element.style.top = t._initialTop + Math.round((t._initialHeight - u) / 2) + t._unit, t._element.style.left = t._initialLeft + Math.round((t._initialWidth - r) / 2) + t._unit), t._scaleFont && (i = t._initialFontSize * n, (t._fontUnit == "px" || t._fontUnit == "pt") && (i = Math.round(i)), t._element.style.fontSize = i + t._fontUnit))
    },
    onEnd: function () {
        var t = null,
            n = this;
        n._element = t, n._initialHeight = t, n._initialWidth = t, n._initialTop = t, n._initialLeft = t, n._initialFontSize = t, $AA.ScaleAnimation.callBaseMethod(n, "onEnd")
    },
    get_scaleFactor: function () {
        return this._scaleFactor
    },
    set_scaleFactor: function (n) {
        var t = this;
        n = t._getFloat(n), t._scaleFactor != n && (t._scaleFactor = n, t.raisePropertyChanged("scaleFactor"))
    },
    get_unit: function () {
        return this._unit
    },
    set_unit: function (n) {
        this._unit != n && (this._unit = n, this.raisePropertyChanged("unit"))
    },
    get_center: function () {
        return this._center
    },
    set_center: function (n) {
        var t = this;
        n = t._getBoolean(n), t._center != n && (t._center = n, t.raisePropertyChanged("center"))
    },
    get_scaleFont: function () {
        return this._scaleFont
    },
    set_scaleFont: function (n) {
        var t = this;
        n = t._getBoolean(n), t._scaleFont != n && (t._scaleFont = n, t.raisePropertyChanged("scaleFont"))
    },
    get_fontUnit: function () {
        return this._fontUnit
    },
    set_fontUnit: function (n) {
        this._fontUnit != n && (this._fontUnit = n, this.raisePropertyChanged("fontUnit"))
    }
}, $AA.ScaleAnimation.registerClass("AjaxControlToolkit.Animation.ScaleAnimation", $AA.Animation), $AA.registerAnimation("scale", $AA.ScaleAnimation), $AA.Action = function (n, t, i) {
    $AA.Action.initializeBase(this, [n, t, i]), t === undefined && this.set_duration(0)
}, $AA.Action.prototype = {
    onEnd: function () {
        this.doAction(), $AA.Action.callBaseMethod(this, "onEnd")
    },
    doAction: function () {
        throw Error.notImplemented();
    },
    getAnimatedValue: function () { },
    setValue: function () { }
}, $AA.Action.registerClass("AjaxControlToolkit.Animation.Action", $AA.Animation), $AA.registerAnimation("action", $AA.Action), $AA.EnableAction = function (n, t, i, r) {
    $AA.EnableAction.initializeBase(this, [n, t, i]), this._enabled = r !== undefined ? r : !0
}, $AA.EnableAction.prototype = {
    doAction: function () {
        var n = this.get_target();
        n && (n.disabled = !this._enabled)
    },
    get_enabled: function () {
        return this._enabled
    },
    set_enabled: function (n) {
        var t = this;
        n = t._getBoolean(n), t._enabled != n && (t._enabled = n, t.raisePropertyChanged("enabled"))
    }
}, $AA.EnableAction.registerClass("AjaxControlToolkit.Animation.EnableAction", $AA.Action), $AA.registerAnimation("enableAction", $AA.EnableAction), $AA.HideAction = function (n, t, i, r) {
    $AA.HideAction.initializeBase(this, [n, t, i]), this._visible = r
}, $AA.HideAction.prototype = {
    doAction: function () {
        var n = this.get_target();
        n && $common.setVisible(n, this._visible)
    },
    get_visible: function () {
        return this._visible
    },
    set_visible: function (n) {
        this._visible != n && (this._visible = n, this.raisePropertyChanged("visible"))
    }
}, $AA.HideAction.registerClass("AjaxControlToolkit.Animation.HideAction", $AA.Action), $AA.registerAnimation("hideAction", $AA.HideAction), $AA.StyleAction = function (n, t, i, r, u) {
    $AA.StyleAction.initializeBase(this, [n, t, i]), this._attribute = r, this._value = u
}, $AA.StyleAction.prototype = {
    doAction: function () {
        var n = this.get_target();
        n && (n.style[this._attribute] = this._value)
    },
    get_attribute: function () {
        return this._attribute
    },
    set_attribute: function (n) {
        this._attribute != n && (this._attribute = n, this.raisePropertyChanged("attribute"))
    },
    get_value: function () {
        return this._value
    },
    set_value: function (n) {
        this._value != n && (this._value = n, this.raisePropertyChanged("value"))
    }
}, $AA.StyleAction.registerClass("AjaxControlToolkit.Animation.StyleAction", $AA.Action), $AA.registerAnimation("styleAction", $AA.StyleAction), $AA.OpacityAction = function (n, t, i, r) {
    $AA.OpacityAction.initializeBase(this, [n, t, i]), this._opacity = r
}, $AA.OpacityAction.prototype = {
    doAction: function () {
        var n = this.get_target();
        n && $common.setElementOpacity(n, this._opacity)
    },
    get_opacity: function () {
        return this._opacity
    },
    set_opacity: function (n) {
        var t = this;
        n = t._getFloat(n), t._opacity != n && (t._opacity = n, t.raisePropertyChanged("opacity"))
    }
}, $AA.OpacityAction.registerClass("AjaxControlToolkit.Animation.OpacityAction", $AA.Action), $AA.registerAnimation("opacityAction", $AA.OpacityAction), $AA.ScriptAction = function (n, t, i, r) {
    $AA.ScriptAction.initializeBase(this, [n, t, i]), this._script = r
}, $AA.ScriptAction.prototype = {
    doAction: function () {
        try {
            eval(this._script)
        } catch (a) { }
    },
    get_script: function () {
        return this._script
    },
    set_script: function (n) {
        this._script != n && (this._script = n, this.raisePropertyChanged("script"))
    }
}, $AA.ScriptAction.registerClass("AjaxControlToolkit.Animation.ScriptAction", $AA.Action), $AA.registerAnimation("scriptAction", $AA.ScriptAction), Type.registerNamespace("AjaxControlToolkit.Animation"), AjaxControlToolkit.Animation.AnimationBehavior = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.Animation.AnimationBehavior.initializeBase(t, [n]), t._onLoad = i, t._onClick = i, t._onMouseOver = i, t._onMouseOut = i, t._onHoverOver = i, t._onHoverOut = i, t._onClickHandler = i, t._onMouseOverHandler = i, t._onMouseOutHandler = i
}, AjaxControlToolkit.Animation.AnimationBehavior.prototype = {
    initialize: function () {
        var n = this,
            t;
        AjaxControlToolkit.Animation.AnimationBehavior.callBaseMethod(n, "initialize"), t = n.get_element(), t && (n._onClickHandler = Function.createDelegate(n, n.OnClick), $addHandler(t, "click", n._onClickHandler), n._onMouseOverHandler = Function.createDelegate(n, n.OnMouseOver), $addHandler(t, "mouseover", n._onMouseOverHandler), n._onMouseOutHandler = Function.createDelegate(n, n.OnMouseOut), $addHandler(t, "mouseout", n._onMouseOutHandler))
    },
    dispose: function () {
        var t = null,
            n = this,
            i = n.get_element();
        i && (n._onClickHandler && ($removeHandler(i, "click", n._onClickHandler), n._onClickHandler = t), n._onMouseOverHandler && ($removeHandler(i, "mouseover", n._onMouseOverHandler), n._onMouseOverHandler = t), n._onMouseOutHandler && ($removeHandler(i, "mouseout", n._onMouseOutHandler), n._onMouseOutHandler = t)), n._onLoad = t, n._onClick = t, n._onMouseOver = t, n._onMouseOut = t, n._onHoverOver = t, n._onHoverOut = t, AjaxControlToolkit.Animation.AnimationBehavior.callBaseMethod(n, "dispose")
    },
    get_OnLoad: function () {
        return this._onLoad ? this._onLoad.get_json() : null
    },
    set_OnLoad: function (n) {
        var t = this;
        t._onLoad || (t._onLoad = new AjaxControlToolkit.Animation.GenericAnimationBehavior(t.get_element()), t._onLoad.initialize()), t._onLoad.set_json(n), t.raisePropertyChanged("OnLoad"), t._onLoad.play()
    },
    get_OnLoadBehavior: function () {
        return this._onLoad
    },
    get_OnClick: function () {
        return this._onClick ? this._onClick.get_json() : null
    },
    set_OnClick: function (n) {
        var t = this;
        t._onClick || (t._onClick = new AjaxControlToolkit.Animation.GenericAnimationBehavior(t.get_element()), t._onClick.initialize()), t._onClick.set_json(n), t.raisePropertyChanged("OnClick")
    },
    get_OnClickBehavior: function () {
        return this._onClick
    },
    OnClick: function () {
        this._onClick && this._onClick.play()
    },
    get_OnMouseOver: function () {
        return this._onMouseOver ? this._onMouseOver.get_json() : null
    },
    set_OnMouseOver: function (n) {
        var t = this;
        t._onMouseOver || (t._onMouseOver = new AjaxControlToolkit.Animation.GenericAnimationBehavior(t.get_element()), t._onMouseOver.initialize()), t._onMouseOver.set_json(n), t.raisePropertyChanged("OnMouseOver")
    },
    get_OnMouseOverBehavior: function () {
        return this._onMouseOver
    },
    OnMouseOver: function () {
        var n = this;
        n._onMouseOver && n._onMouseOver.play(), n._onHoverOver && (n._onHoverOut && n._onHoverOut.quit(), n._onHoverOver.play())
    },
    get_OnMouseOut: function () {
        return this._onMouseOut ? this._onMouseOut.get_json() : null
    },
    set_OnMouseOut: function (n) {
        var t = this;
        t._onMouseOut || (t._onMouseOut = new AjaxControlToolkit.Animation.GenericAnimationBehavior(t.get_element()), t._onMouseOut.initialize()), t._onMouseOut.set_json(n), t.raisePropertyChanged("OnMouseOut")
    },
    get_OnMouseOutBehavior: function () {
        return this._onMouseOut
    },
    OnMouseOut: function () {
        var n = this;
        n._onMouseOut && n._onMouseOut.play(), n._onHoverOut && (n._onHoverOver && n._onHoverOver.quit(), n._onHoverOut.play())
    },
    get_OnHoverOver: function () {
        return this._onHoverOver ? this._onHoverOver.get_json() : null
    },
    set_OnHoverOver: function (n) {
        var t = this;
        t._onHoverOver || (t._onHoverOver = new AjaxControlToolkit.Animation.GenericAnimationBehavior(t.get_element()), t._onHoverOver.initialize()), t._onHoverOver.set_json(n), t.raisePropertyChanged("OnHoverOver")
    },
    get_OnHoverOverBehavior: function () {
        return this._onHoverOver
    },
    get_OnHoverOut: function () {
        return this._onHoverOut ? this._onHoverOut.get_json() : null
    },
    set_OnHoverOut: function (n) {
        var t = this;
        t._onHoverOut || (t._onHoverOut = new AjaxControlToolkit.Animation.GenericAnimationBehavior(t.get_element()), t._onHoverOut.initialize()), t._onHoverOut.set_json(n), t.raisePropertyChanged("OnHoverOut")
    },
    get_OnHoverOutBehavior: function () {
        return this._onHoverOut
    }
}, AjaxControlToolkit.Animation.AnimationBehavior.registerClass("AjaxControlToolkit.Animation.AnimationBehavior", AjaxControlToolkit.BehaviorBase), AjaxControlToolkit.Animation.GenericAnimationBehavior = function (n) {
    AjaxControlToolkit.Animation.GenericAnimationBehavior.initializeBase(this, [n]), this._json = null, this._animation = null
}, AjaxControlToolkit.Animation.GenericAnimationBehavior.prototype = {
    dispose: function () {
        this.disposeAnimation(), AjaxControlToolkit.Animation.GenericAnimationBehavior.callBaseMethod(this, "dispose")
    },
    disposeAnimation: function () {
        this._animation && this._animation.dispose(), this._animation = null
    },
    play: function () {
        var n = this;
        n._animation && !n._animation.get_isPlaying() && (n.stop(), n._animation.play())
    },
    stop: function () {
        this._animation && this._animation.get_isPlaying() && this._animation.stop(!0)
    },
    quit: function () {
        this._animation && this._animation.get_isPlaying() && this._animation.stop(!1)
    },
    get_json: function () {
        return this._json
    },
    set_json: function (n) {
        var t = this,
            i;
        t._json != n && (t._json = n, t.raisePropertyChanged("json"), t.disposeAnimation(), i = t.get_element(), i && (t._animation = AjaxControlToolkit.Animation.buildAnimation(t._json, i), t._animation && t._animation.initialize(), t.raisePropertyChanged("animation")))
    },
    get_animation: function () {
        return this._animation
    }
}, AjaxControlToolkit.Animation.GenericAnimationBehavior.registerClass("AjaxControlToolkit.Animation.GenericAnimationBehavior", AjaxControlToolkit.BehaviorBase), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.HoverBehavior = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.HoverBehavior.initializeBase(t, [n]), t._elementHandlers = i, t._hoverElementHandlers = i, t._hoverElement = i, t._hoverCount = 0, t._unhoverDelay = 0, t._hoverDelay = 0, t._hoverScript = i, t._unhoverScript = i, t._hoverFired = !1
}, AjaxControlToolkit.HoverBehavior.prototype = {
    _setupHandlersArray: function () {
        var n = this,
            t = [];
        return t[0] = Function.createDelegate(n, n._onHover), t[1] = Function.createDelegate(n, n._onUnhover), t
    },
    get_elementHandlers: function () {
        var n = this;
        return n._elementHandlers || (n._elementHandlers = n._setupHandlersArray()), n._elementHandlers
    },
    get_hoverElementHandlers: function () {
        var n = this;
        return n._hoverElementHandlers || (n._hoverElementHandlers = n._setupHandlersArray()), n._hoverElementHandlers
    },
    get_hoverElement: function () {
        return this._hoverElement
    },
    set_hoverElement: function (n) {
        var t = this;
        n != t._hoverElement && (t._hoverElement && t._setupHandlers(t._hoverElement, t.get_hoverElementHandlers(), !1), t._hoverElement = n, t._hoverElement && t._setupHandlers(t._hoverElement, t.get_hoverElementHandlers(), !0))
    },
    get_hoverDelay: function () {
        return this._hoverDelay
    },
    set_hoverDelay: function (n) {
        this._hoverDelay = n, this.raisePropertyChanged("hoverDelay")
    },
    get_hoverScript: function () {
        return this._hoverScript
    },
    set_hoverScript: function (n) {
        this._hoverScript = n
    },
    get_unhoverDelay: function () {
        return this._unhoverDelay
    },
    set_unhoverDelay: function (n) {
        this._unhoverDelay = n, this.raisePropertyChanged("unhoverDelay")
    },
    get_unhoverScript: function () {
        return this._unhoverScript
    },
    set_unhoverScript: function (n) {
        this._unhoverScript = n
    },
    dispose: function () {
        var n = this,
            i = n.get_element(),
            t;
        n._elementHandlers && (t = n.get_elementHandlers(), n._setupHandlers(i, t, !1), n._elementHandlers = null), n._hoverElement && (t = n.get_hoverElementHandlers(), n._setupHandlers(n._hoverElement, t, !1), n._hoverElement = null), AjaxControlToolkit.HoverBehavior.callBaseMethod(n, "dispose")
    },
    initialize: function () {
        var n = this,
            t;
        AjaxControlToolkit.HoverBehavior.callBaseMethod(n, "initialize"), t = n.get_elementHandlers(), n._setupHandlers(n.get_element(), t, !0), n._hoverElement && (t = n.get_hoverElementHandlers(), n._setupHandlers(n._hoverElement, t, !0))
    },
    add_hover: function (n) {
        this.get_events().addHandler("hover", n)
    },
    remove_hover: function (n) {
        this.get_events().removeHandler("hover", n)
    },
    _fireHover: function () {
        var a = this,
            handler;
        a._hoverCount && !a._hoverFired && (handler = a.get_events().getHandler("hover"), handler && handler(a, Sys.EventArgs.Empty), a._hoverScript && eval(a._hoverScript), a._hoverFired = !0)
    },
    _onHover: function () {
        var n = this;
        n._hoverCount++, n._hoverDelay ? window.setTimeout(Function.createDelegate(n, n._fireHover), n._hoverDelay) : n._fireHover()
    },
    add_unhover: function (n) {
        this.get_events().addHandler("unhover", n)
    },
    remove_unhover: function (n) {
        this.get_events().removeHandler("unhover", n)
    },
    _fireUnhover: function () {
        var a = this,
            handler;
        a._hoverFired && !a._hoverCount && (a._hoverFired = !1, handler = a.get_events().getHandler("unhover"), handler && handler(a, Sys.EventArgs.Empty), a._unhoverScript && eval(a._unhoverScript))
    },
    _onUnhover: function () {
        var n = this;
        n._hoverCount--, n._hoverCount <= 0 && (n._hoverCount = 0, n._unhoverDelay ? window.setTimeout(Function.createDelegate(n, n._fireUnhover), n._unhoverDelay) : n._fireUnhover())
    },
    _setupHandlers: function (n, t, i) {
        var r = "mouseout",
            u = "mouseover";
        this.get_isInitialized() && n && (i ? ($addHandler(n, u, t[0]), $addHandler(n, "focus", t[0]), $addHandler(n, r, t[1]), $addHandler(n, "blur", t[1])) : ($removeHandler(n, u, t[0]), $removeHandler(n, "focus", t[0]), $removeHandler(n, r, t[1]), $removeHandler(n, "blur", t[1])))
    }
}, AjaxControlToolkit.HoverBehavior.descriptor = {
    properties: [{
        name: "hoverElement",
        isDomElement: !0
    }, {
        name: "unhoverDelay",
        type: Number
    }],
    events: [{
        name: "hover"
    }, {
        name: "unhover"
    }]
}, AjaxControlToolkit.HoverBehavior.registerClass("AjaxControlToolkit.HoverBehavior", AjaxControlToolkit.BehaviorBase), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.PopupBehavior = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.PopupBehavior.initializeBase(t, [n]), t._x = 0, t._y = 0, t._positioningMode = AjaxControlToolkit.PositioningMode.Absolute, t._parentElement = i, t._parentElementID = i, t._moveHandler = i, t._firstPopup = !0, t._originalParent = i, t._visible = !1, t._onParentRepositionHandler = i, t._elementsWithAttachedRepositionHandlers = i, t._onShow = i, t._onShowEndedHandler = i, t._onHide = i, t._onHideEndedHandler = i
}, AjaxControlToolkit.PopupBehavior.prototype = {
    initialize: function () {
        var n = this;
        AjaxControlToolkit.PopupBehavior.callBaseMethod(n, "initialize"), n._hidePopup(), n._prepareElement(), n._onShowEndedHandler = Function.createDelegate(n, n._onShowEnded), n._onHideEndedHandler = Function.createDelegate(n, n._onHideEnded)
    },
    dispose: function () {
        var t = null,
            n = this,
            i = n.get_element(),
            r;
        if (i && (n._visible && n.hide(), n._originalParent && (i.parentNode.removeChild(i), n._originalParent.appendChild(i), n._originalParent = t), i._hideWindowedElementsIFrame = t), n._parentElement = t, n._onShow && n._onShow.get_animation() && n._onShowEndedHandler && n._onShow.get_animation().remove_ended(n._onShowEndedHandler), n._onShowEndedHandler = t, n._onShow = t, n._onHide && n._onHide.get_animation() && n._onHideEndedHandler && n._onHide.get_animation().remove_ended(n._onHideEndedHandler), n._onHideEndedHandler = t, n._onHide = t, n._onParentRepositionHandler != t && $removeHandler(window, "resize", n._onParentRepositionHandler), n._elementsWithAttachedRepositionHandlers != t) {
            for (r = 0; r < n._elementsWithAttachedRepositionHandlers.length; r++) $removeHandler(n._elementsWithAttachedRepositionHandlers[r], "resize", n._onParentRepositionHandler), $removeHandler(n._elementsWithAttachedRepositionHandlers[r], "scroll", n._onParentRepositionHandler);
            n._elementsWithAttachedRepositionHandlers = t
        }
        n._onParentRepositionHandler = t, AjaxControlToolkit.PopupBehavior.callBaseMethod(n, "dispose")
    },
    _prepareElement: function () {
        var n = this,
            i = n.get_element(),
            t;
        for (n._onParentRepositionHandler = Function.createDelegate(n, n._reposition), n._elementsWithAttachedRepositionHandlers = [], t = i.parentNode; t;) {
            if (t == document.body) break;
            $addHandler(t, "scroll", n._onParentRepositionHandler), $addHandler(t, "resize", n._onParentRepositionHandler), n._elementsWithAttachedRepositionHandlers.push(t), t = t.parentNode
        }
        $addHandler(window, "resize", n._onParentRepositionHandler), i.style.position = "absolute", $common.appendElementToFormOrBody(i)
    },
    _reposition: function () {
        this._visible && this.setupPopup()
    },
    show: function () {
        var n = this,
            t, i;
        n._visible || (t = new Sys.CancelEventArgs, n.raiseShowing(t), t.get_cancel()) || (n._visible = !0, i = n.get_element(), $common.setVisible(i, !0), n.setupPopup(), n._onShow ? ($common.setVisible(i, !1), n.onShow()) : n.raiseShown(Sys.EventArgs.Empty))
    },
    hide: function () {
        var n = this,
            t;
        n._visible && ((t = new Sys.CancelEventArgs, n.raiseHiding(t), t.get_cancel()) || (n._visible = !1, n._onHide ? n.onHide() : (n._hidePopup(), n._hideCleanup())))
    },
    getBounds: function () {
        var r = this,
            i = r.get_element(),
            h = i.offsetParent || document.documentElement,
            e, n, o, u, f, s, t;
        r._parentElement ? (n = $common.getBounds(r._parentElement), o = $common.getLocation(h), e = {
            x: n.x - o.x,
            y: n.y - o.y
        }) : (n = $common.getBounds(h), e = {
            x: 0,
            y: 0
        }), u = i.offsetWidth - (i.clientLeft ? i.clientLeft * 2 : 0), f = i.offsetHeight - (i.clientTop ? i.clientTop * 2 : 0), r._firstpopup && (i.style.width = u + "px", r._firstpopup = !1);
        switch (r._positioningMode) {
            case AjaxControlToolkit.PositioningMode.Center:
                t = {
                    x: Math.round(n.width / 2 - u / 2),
                    y: Math.round(n.height / 2 - f / 2),
                    altX: Math.round(n.width / 2 - u / 2),
                    altY: Math.round(n.height / 2 - f / 2)
                };
                break;
            case AjaxControlToolkit.PositioningMode.BottomLeft:
                t = {
                    x: 0,
                    y: n.height,
                    altX: n.width - u,
                    altY: 0 - f
                };
                break;
            case AjaxControlToolkit.PositioningMode.BottomRight:
                t = {
                    x: n.width - u,
                    y: n.height,
                    altX: 0,
                    altY: 0 - f
                };
                break;
            case AjaxControlToolkit.PositioningMode.TopLeft:
                t = {
                    x: 0,
                    y: -i.offsetHeight,
                    altX: n.width - u,
                    altY: n.height
                };
                break;
            case AjaxControlToolkit.PositioningMode.TopRight:
                t = {
                    x: n.width - u,
                    y: -i.offsetHeight,
                    altX: 0,
                    altY: n.height
                };
                break;
            case AjaxControlToolkit.PositioningMode.Right:
                t = {
                    x: n.width,
                    y: 0,
                    altX: -i.offsetWidth,
                    altY: n.height - f
                };
                break;
            case AjaxControlToolkit.PositioningMode.Left:
                t = {
                    x: -i.offsetWidth,
                    y: 0,
                    altX: n.width,
                    altY: n.height - f
                };
                break;
            default:
                t = {
                    x: 0,
                    y: 0,
                    altX: 0,
                    altY: 0
                }
        }
        return t.x += r._x + e.x, t.altX += r._x + e.x, t.y += r._y + e.y, t.altY += r._y + e.y, s = r._verifyPosition(t, u, f, n), new Sys.UI.Bounds(s.x, s.y, u, f)
    },
    _verifyPosition: function (n, t, i) {
        var u = 0,
            f = 0,
            r = this._getWindowBounds(),
            e;
        return n.x + t > r.x + r.width || n.x < r.x ? (u = n.altX, n.altX < r.x ? n.x > n.altX && (u = n.x) : r.width + r.x - n.altX < t && (e = n.x > n.altX ? Math.abs(r.x - n.x) : r.x - n.x, e < t - r.width - r.x + n.altX && (u = n.x))) : u = n.x, n.y + i > r.y + r.height || n.y < r.y ? (f = n.altY, n.altY < r.y ? r.y - n.altY > i - r.height - r.y + n.y && (f = n.y) : r.height + r.y - n.altY < i && r.y - n.y < i - r.height - r.y + n.altY && (f = n.y)) : f = n.y, {
            x: u,
            y: f
        }
    },
    _getWindowBounds: function () {
        var n = this;
        return {
            x: n._getWindowScrollLeft(),
            y: n._getWindowScrollTop(),
            width: n._getWindowWidth(),
            height: n._getWindowHeight()
        }
    },
    _getWindowHeight: function () {
        var n = 0;
        return document.documentElement && document.documentElement.clientHeight ? n = document.documentElement.clientHeight : document.body && document.body.clientHeight && (n = document.body.clientHeight), n
    },
    _getWindowWidth: function () {
        var n = 0;
        return document.documentElement && document.documentElement.clientWidth ? n = document.documentElement.clientWidth : document.body && document.body.clientWidth && (n = document.body.clientWidth), n
    },
    _getWindowScrollTop: function () {
        var n = 0;
        return typeof window.pageYOffset == "number" && (n = window.pageYOffset), document.body && document.body.scrollTop ? n = document.body.scrollTop : document.documentElement && document.documentElement.scrollTop && (n = document.documentElement.scrollTop), n
    },
    _getWindowScrollLeft: function () {
        var n = 0;
        return typeof window.pageXOffset == "number" ? n = window.pageXOffset : document.body && document.body.scrollLeft ? n = document.body.scrollLeft : document.documentElement && document.documentElement.scrollLeft && (n = document.documentElement.scrollLeft), n
    },
    adjustPopupPosition: function (n) {
        var r = this.get_element(),
            t, i;
        n || (n = this.getBounds()), t = $common.getBounds(r), i = !1, t.x < 0 && (n.x -= t.x, i = !0), t.y < 0 && (n.y -= t.y, i = !0), i && $common.setLocation(r, n)
    },
    addBackgroundIFrame: function () {
        var i = this,
            t = i.get_element(),
            n;
        Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 7 && (n = t._hideWindowedElementsIFrame, n || (n = document.createElement("iframe"), n.src = "javascript:'<html></html>';", n.style.position = "absolute", n.style.display = "none", n.scrolling = "no", n.frameBorder = "0", n.tabIndex = "-1", n.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)", t.parentNode.insertBefore(n, t), t._hideWindowedElementsIFrame = n, i._moveHandler = Function.createDelegate(i, i._onMove), Sys.UI.DomEvent.addHandler(t, "move", i._moveHandler)), $common.setBounds(n, $common.getBounds(t)), n.style.left = t.style.left, n.style.top = t.style.top, n.style.display = t.style.display, t.currentStyle && t.currentStyle.zIndex ? n.style.zIndex = t.currentStyle.zIndex : t.style.zIndex && (n.style.zIndex = t.style.zIndex))
    },
    setupPopup: function () {
        var n = this,
            t = n.get_element(),
            i = n.getBounds();
        $common.setLocation(t, i), n.adjustPopupPosition(i), t.style.zIndex = 1e3, n.addBackgroundIFrame()
    },
    _hidePopup: function () {
        var n = this.get_element();
        $common.setVisible(n, !1), n.originalWidth && (n.style.width = n.originalWidth + "px", n.originalWidth = null)
    },
    _hideCleanup: function () {
        var n = this,
            i = n.get_element(),
            t;
        n._moveHandler && (Sys.UI.DomEvent.removeHandler(i, "move", n._moveHandler), n._moveHandler = null), Sys.Browser.agent === Sys.Browser.InternetExplorer && (t = i._hideWindowedElementsIFrame, t && (t.style.display = "none")), n.raiseHidden(Sys.EventArgs.Empty)
    },
    _onMove: function () {
        var n = this.get_element();
        n._hideWindowedElementsIFrame && (n.parentNode.insertBefore(n._hideWindowedElementsIFrame, n), n._hideWindowedElementsIFrame.style.top = n.style.top, n._hideWindowedElementsIFrame.style.left = n.style.left)
    },
    get_onShow: function () {
        return this._onShow ? this._onShow.get_json() : null
    },
    set_onShow: function (n) {
        var t = this,
            i;
        t._onShow || (t._onShow = new AjaxControlToolkit.Animation.GenericAnimationBehavior(t.get_element()), t._onShow.initialize()), t._onShow.set_json(n), i = t._onShow.get_animation(), i && i.add_ended(t._onShowEndedHandler), t.raisePropertyChanged("onShow")
    },
    get_onShowBehavior: function () {
        return this._onShow
    },
    onShow: function () {
        var n = this;
        n._onShow && (n._onHide && n._onHide.quit(), n._onShow.play())
    },
    _onShowEnded: function () {
        this.adjustPopupPosition(), this.addBackgroundIFrame(), this.raiseShown(Sys.EventArgs.Empty)
    },
    get_onHide: function () {
        return this._onHide ? this._onHide.get_json() : null
    },
    set_onHide: function (n) {
        var t = this,
            i;
        t._onHide || (t._onHide = new AjaxControlToolkit.Animation.GenericAnimationBehavior(t.get_element()), t._onHide.initialize()), t._onHide.set_json(n), i = t._onHide.get_animation(), i && i.add_ended(t._onHideEndedHandler), t.raisePropertyChanged("onHide")
    },
    get_onHideBehavior: function () {
        return this._onHide
    },
    onHide: function () {
        var n = this;
        n._onHide && (n._onShow && n._onShow.quit(), n._onHide.play())
    },
    _onHideEnded: function () {
        this._hideCleanup()
    },
    get_parentElement: function () {
        var n = this;
        return !n._parentElement && n._parentElementID && (n.set_parentElement($get(n._parentElementID)), Sys.Debug.assert(n._parentElement != null, String.format(AjaxControlToolkit.Resources.PopupExtender_NoParentElement, n._parentElementID))), n._parentElement
    },
    set_parentElement: function (n) {
        this._parentElement = n, this.raisePropertyChanged("parentElement")
    },
    get_parentElementID: function () {
        return this._parentElement ? this._parentElement.id : this._parentElementID
    },
    set_parentElementID: function (n) {
        this._parentElementID = n, this.get_isInitialized() && this.set_parentElement($get(n))
    },
    get_positioningMode: function () {
        return this._positioningMode
    },
    set_positioningMode: function (n) {
        this._positioningMode = n, this.raisePropertyChanged("positioningMode")
    },
    get_x: function () {
        return this._x
    },
    set_x: function (n) {
        var t = this;
        n != t._x && (t._x = n, t._visible && t.setupPopup(), t.raisePropertyChanged("x"))
    },
    get_y: function () {
        return this._y
    },
    set_y: function (n) {
        var t = this;
        n != t._y && (t._y = n, t._visible && t.setupPopup(), t.raisePropertyChanged("y"))
    },
    get_visible: function () {
        return this._visible
    },
    add_showing: function (n) {
        this.get_events().addHandler("showing", n)
    },
    remove_showing: function (n) {
        this.get_events().removeHandler("showing", n)
    },
    raiseShowing: function (n) {
        var t = this.get_events().getHandler("showing");
        t && t(this, n)
    },
    add_shown: function (n) {
        this.get_events().addHandler("shown", n)
    },
    remove_shown: function (n) {
        this.get_events().removeHandler("shown", n)
    },
    raiseShown: function (n) {
        var t = this.get_events().getHandler("shown");
        t && t(this, n)
    },
    add_hiding: function (n) {
        this.get_events().addHandler("hiding", n)
    },
    remove_hiding: function (n) {
        this.get_events().removeHandler("hiding", n)
    },
    raiseHiding: function (n) {
        var t = this.get_events().getHandler("hiding");
        t && t(this, n)
    },
    add_hidden: function (n) {
        this.get_events().addHandler("hidden", n)
    },
    remove_hidden: function (n) {
        this.get_events().removeHandler("hidden", n)
    },
    raiseHidden: function (n) {
        var t = this.get_events().getHandler("hidden");
        t && t(this, n)
    }
}, AjaxControlToolkit.PopupBehavior.registerClass("AjaxControlToolkit.PopupBehavior", AjaxControlToolkit.BehaviorBase), AjaxControlToolkit.PositioningMode = function () {
    throw Error.invalidOperation();
}, AjaxControlToolkit.PositioningMode.prototype = {
    Absolute: 0,
    Center: 1,
    BottomLeft: 2,
    BottomRight: 3,
    TopLeft: 4,
    TopRight: 5,
    Right: 6,
    Left: 7
}, AjaxControlToolkit.PositioningMode.registerEnum("AjaxControlToolkit.PositioningMode"), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.DynamicPopulateBehavior = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.DynamicPopulateBehavior.initializeBase(t, [n]), t._servicePath = i, t._serviceMethod = i, t._contextKey = i, t._cacheDynamicResults = !1, t._populateTriggerID = i, t._setUpdatingCssClass = i, t._clearDuringUpdate = !0, t._customScript = i, t._clickHandler = i, t._callID = 0, t._currentCallID = -1, t._populated = !1
}, AjaxControlToolkit.DynamicPopulateBehavior.prototype = {
    initialize: function () {
        var n = this,
            t;
        AjaxControlToolkit.DynamicPopulateBehavior.callBaseMethod(n, "initialize"), $common.prepareHiddenElementForATDeviceUpdate(), n._populateTriggerID && (t = $get(n._populateTriggerID), t && (n._clickHandler = Function.createDelegate(n, n._onPopulateTriggerClick), $addHandler(t, "click", n._clickHandler)))
    },
    dispose: function () {
        var n = this,
            t;
        n._populateTriggerID && n._clickHandler && (t = $get(n._populateTriggerID), t && $removeHandler(t, "click", n._clickHandler), n._populateTriggerID = null, n._clickHandler = null), AjaxControlToolkit.DynamicPopulateBehavior.callBaseMethod(n, "dispose")
    },
    populate: function (contextKey) {
        var a = this,
            eventArgs, scriptResult;
        if (!a._populated || !a._cacheDynamicResults) {
            if (a._currentCallID == -1) {
                if (eventArgs = new Sys.CancelEventArgs, a.raisePopulating(eventArgs), eventArgs.get_cancel()) return;
                a._setUpdating(!0)
            }
            a._customScript ? (scriptResult = eval(a._customScript), a._setTargetHtml(scriptResult), a._setUpdating(!1)) : (a._currentCallID = ++a._callID, a._servicePath && a._serviceMethod && (Sys.Net.WebServiceProxy.invoke(a._servicePath, a._serviceMethod, !1, {
                contextKey: contextKey ? contextKey : a._contextKey
            }, Function.createDelegate(a, a._onMethodComplete), Function.createDelegate(a, a._onMethodError), a._currentCallID), $common.updateFormToRefreshATDeviceBuffer()))
        }
    },
    _onMethodComplete: function (n, t) {
        t == this._currentCallID && (this._setTargetHtml(n), this._setUpdating(!1))
    },
    _onMethodError: function (n, t) {
        var i = this;
        t == i._currentCallID && (n.get_timedOut() ? i._setTargetHtml(AjaxControlToolkit.Resources.DynamicPopulate_WebServiceTimeout) : i._setTargetHtml(String.format(AjaxControlToolkit.Resources.DynamicPopulate_WebServiceError, n.get_statusCode())), i._setUpdating(!1))
    },
    _onPopulateTriggerClick: function () {
        this.populate(this._contextKey)
    },
    _setUpdating: function (n) {
        var t = this;
        t.setStyle(n), n || (t._currentCallID = -1, t._populated = !0, t.raisePopulated(t, Sys.EventArgs.Empty))
    },
    _setTargetHtml: function (n) {
        var t = this.get_element();
        t && (t.tagName == "INPUT" ? t.value = n : t.innerHTML = n)
    },
    setStyle: function (n) {
        var t = this,
            i = t.get_element();
        t._setUpdatingCssClass && (n ? (t._oldCss = i.className, i.className = t._setUpdatingCssClass) : (i.className = t._oldCss, t._oldCss = null)), n && t._clearDuringUpdate && t._setTargetHtml("")
    },
    get_ClearContentsDuringUpdate: function () {
        return this._clearDuringUpdate
    },
    set_ClearContentsDuringUpdate: function (n) {
        this._clearDuringUpdate != n && (this._clearDuringUpdate = n, this.raisePropertyChanged("ClearContentsDuringUpdate"))
    },
    get_ContextKey: function () {
        return this._contextKey
    },
    set_ContextKey: function (n) {
        this._contextKey != n && (this._contextKey = n, this.raisePropertyChanged("ContextKey"))
    },
    get_PopulateTriggerID: function () {
        return this._populateTriggerID
    },
    set_PopulateTriggerID: function (n) {
        this._populateTriggerID != n && (this._populateTriggerID = n, this.raisePropertyChanged("PopulateTriggerID"))
    },
    get_ServicePath: function () {
        return this._servicePath
    },
    set_ServicePath: function (n) {
        this._servicePath != n && (this._servicePath = n, this.raisePropertyChanged("ServicePath"))
    },
    get_ServiceMethod: function () {
        return this._serviceMethod
    },
    set_ServiceMethod: function (n) {
        this._serviceMethod != n && (this._serviceMethod = n, this.raisePropertyChanged("ServiceMethod"))
    },
    get_cacheDynamicResults: function () {
        return this._cacheDynamicResults
    },
    set_cacheDynamicResults: function (n) {
        this._cacheDynamicResults != n && (this._cacheDynamicResults = n, this.raisePropertyChanged("cacheDynamicResults"))
    },
    get_UpdatingCssClass: function () {
        return this._setUpdatingCssClass
    },
    set_UpdatingCssClass: function (n) {
        this._setUpdatingCssClass != n && (this._setUpdatingCssClass = n, this.raisePropertyChanged("UpdatingCssClass"))
    },
    get_CustomScript: function () {
        return this._customScript
    },
    set_CustomScript: function (n) {
        this._customScript != n && (this._customScript = n, this.raisePropertyChanged("CustomScript"))
    },
    add_populating: function (n) {
        this.get_events().addHandler("populating", n)
    },
    remove_populating: function (n) {
        this.get_events().removeHandler("populating", n)
    },
    raisePopulating: function (n) {
        var t = this.get_events().getHandler("populating");
        t && t(this, n)
    },
    add_populated: function (n) {
        this.get_events().addHandler("populated", n)
    },
    remove_populated: function (n) {
        this.get_events().removeHandler("populated", n)
    },
    raisePopulated: function (n) {
        var t = this.get_events().getHandler("populated");
        t && t(this, n)
    }
}, AjaxControlToolkit.DynamicPopulateBehavior.registerClass("AjaxControlToolkit.DynamicPopulateBehavior", AjaxControlToolkit.BehaviorBase), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.DropDownBehavior = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.DropDownBehavior.initializeBase(t, [n]), t._dropDownControl = i, t._highlightBorderColor = "#2353B2", t._highlightBackgroundColor = "#FFF3DB", t._dropArrowBackgroundColor = "#C6E1FF", t._dropArrowImageUrl = i, t._dropArrowWidth = "16px", t._oldBackgroundColor = i, t._dropFrame = i, t._dropArrow = i, t._dropArrowImage = i, t._dropWrapper = i, t._isOpen = !1, t._isOver = !1, t._wasClicked = i, t._dropWrapperHoverBehavior = i, t._dropPopupPopupBehavior = i, t._onShowJson = i, t._onHideJson = i, t._dropDownControl$delegates = {
        click: Function.createDelegate(t, t._dropDownControl_onclick),
        contextmenu: Function.createDelegate(t, t._dropDownControl_oncontextmenu)
    }, t._dropFrame$delegates = {
        click: Function.createDelegate(t, t._dropFrame_onclick),
        contextmenu: Function.createDelegate(t, t._dropFrame_oncontextmenu)
    }, t._dropWrapper$delegates = {
        click: Function.createDelegate(t, t._dropWrapper_onclick),
        contextmenu: Function.createDelegate(t, t._dropWrapper_oncontextmenu)
    }, t._document$delegates = {
        click: Function.createDelegate(t, t._document_onclick),
        contextmenu: Function.createDelegate(t, t._document_oncontextmenu)
    }, t._dropWrapperHoverBehavior$delegates = {
        hover: Function.createDelegate(t, t._dropWrapperHoverBehavior_onhover),
        unhover: Function.createDelegate(t, t._dropWrapperHoverBehavior_onunhover)
    }
}, AjaxControlToolkit.DropDownBehavior.prototype = {
    initialize: function () {
        var o = "_dropWrapper",
            s = "ajax__dropdown_arrow",
            u = "ajax__dropdown_frame_line",
            t = "div",
            i = null,
            n = this,
            r, f, e;
        AjaxControlToolkit.DropDownBehavior.callBaseMethod(n, "initialize"), r = n.get_element(), f = r.parentNode, n._dropDownControl == i && $common.createElementFromTemplate({
            parent: f,
            nameTable: n,
            name: "_dropDownControl",
            nodeName: t,
            visible: !1,
            cssClasses: n._dropDownControl ? i : ["ajax__dropdown_panel"],
            properties: {
                __GENERATED: !0
            }
        }), $addHandlers(n._dropDownControl, n._dropDownControl$delegates), e = {}, n._dropArrowImageUrl && (e.src = n._dropArrowImageUrl), $common.createElementFromTemplate({
            parent: f,
            nameTable: n,
            name: "_dropFrame",
            nodeName: "span",
            visible: !1,
            children: [{
                name: "_dropFrameTop",
                nodeName: t,
                cssClasses: [u]
            }, {
                name: "_dropFrameRight",
                nodeName: t,
                cssClasses: [u]
            }, {
                name: "_dropFrameBottom",
                nodeName: t,
                cssClasses: [u]
            }, {
                name: "_dropFrameLeft",
                nodeName: t,
                cssClasses: [u]
            }, {
                name: "_dropArrow",
                nodeName: t,
                cssClasses: n._dropArrowImageUrl ? [s] : [s, "ajax__dropdown_arrow_image"],
                properties: {
                    style: {
                        width: n._dropArrowWidth,
                        backgroundColor: n._dropArrowBackgroundColor
                    }
                },
                events: n._dropFrame$delegates,
                children: [{
                    name: "_dropArrowWrapper",
                    nodeName: t,
                    visible: !!n._dropArrowImageUrl,
                    cssClasses: ["ajax__dropdown_arrow_wrapper"],
                    children: [{
                        name: "_dropArrowImage",
                        nodeName: "img",
                        properties: e
                    }]
                }]
            }]
        }), $common.createElementFromTemplate({
            parent: i,
            nameTable: n,
            name: o,
            nodeName: "span",
            properties: {
                id: r.id + o,
                style: {
                    cursor: "default"
                }
            },
            events: n._dropWrapper$delegates,
            content: r
        }), n._dropPopupPopupBehavior = $create(AjaxControlToolkit.PopupBehavior, {
            positioningMode: AjaxControlToolkit.PositioningMode.BottomRight,
            parentElement: r,
            y: -1
        }, i, i, n._dropDownControl), n._onShowJson && n._dropPopupPopupBehavior.set_onShow(n._onShowJson), n._onHideJson && n._dropPopupPopupBehavior.set_onHide(n._onHideJson), n._dropWrapperHoverBehavior = $create(AjaxControlToolkit.HoverBehavior, {
            hoverElement: n._dropFrame
        }, n._dropWrapperHoverBehavior$delegates, i, n._dropWrapper), $addHandlers(document, n._document$delegates)
    },
    dispose: function () {
        var t = null,
            n = this,
            i = n.get_element();
        n._isOpen && (n.hide(), n.unhover(), n._isOpen = !1), $common.removeHandlers(document, n._document$delegates), n._onShowJson = t, n._onHideJson = t, n._dropPopupPopupBehavior && (n._dropPopupPopupBehavior.dispose(), n._dropPopupPopupBehavior = t), n._dropWrapperHoverBehavior && (n._dropWrapperHoverBehavior.dispose(), n._dropWrapperHoverBehavior = t), n._dropFrame && ($common.removeElement(n._dropFrame), n._dropFrame = t, n._dropFrameTop = t, n._dropFrameRight = t, n._dropFrameBottom = t, n._dropFrameLeft = t, n._dropArrow = t, n._dropArrowWrapper = t, n._dropArrowImage = t), n._dropWrapper && ($common.removeHandlers(n._dropWrapper, n._dropWrapper$delegates), $common.unwrapElement(i, n._dropWrapper), n._dropWrapper = t), n._dropDownControl && ($common.removeHandlers(n._dropDownControl, n._dropDownControl$delegates), n._dropDownControl.__GENERATED && $common.removeElement(n._dropDownControl), n._dropDownControl = t), AjaxControlToolkit.DropDownBehavior.callBaseMethod(n, "dispose")
    },
    hover: function () {
        var n = this,
            i = n.get_element(),
            t, r;
        n._isOver || (n._isOver = !0, n.raiseHoverOver(Sys.EventArgs.Empty), t = $common.getBounds(i), $common.setLocation(n._dropFrame, {
            x: 0,
            y: 0
        }), $common.setVisible(n._dropFrame, !0), r = $common.getLocation(n._dropFrame), $common.setVisible(n._dropFrame, !1), t.x -= r.x, t.y -= r.y, $common.setBounds(n._dropFrameTop, {
            x: t.x,
            y: t.y,
            width: t.width,
            height: 1
        }), $common.setBounds(n._dropFrameRight, {
            x: t.x + t.width - 1,
            y: t.y,
            width: 1,
            height: t.height
        }), $common.setBounds(n._dropFrameBottom, {
            x: t.x,
            y: t.y + t.height - 1,
            width: t.width,
            height: 1
        }), $common.setBounds(n._dropFrameLeft, {
            x: t.x,
            y: t.y,
            width: 1,
            height: t.height
        }), $common.setBounds(n._dropArrow, {
            x: t.x + t.width - 17,
            y: t.y + 1,
            width: 16,
            height: t.height - 2
        }), n._dropFrameTop.style.backgroundColor = n._highlightBorderColor, n._dropFrameRight.style.backgroundColor = n._highlightBorderColor, n._dropFrameBottom.style.backgroundColor = n._highlightBorderColor, n._dropFrameLeft.style.backgroundColor = n._highlightBorderColor, $common.setVisible(n._dropFrame, !0), n._oldBackgroundColor || (n._oldBackgroundColor = $common.getCurrentStyle(i, "backgroundColor")), i.style.backgroundColor = n._highlightBackgroundColor)
    },
    unhover: function () {
        var n = this,
            t = n.get_element();
        (n._isOver || !n._isOpen) && (n._isOver = !1, n._isOpen || ($common.setVisible(n._dropFrame, !1), n._oldBackgroundColor ? (t.style.backgroundColor = n._oldBackgroundColor, n._oldBackgroundColor = null) : t.style.backgroundColor = "transparent"), n.raiseHoverOut(Sys.EventArgs.Empty))
    },
    show: function () {
        var n = this,
            t;
        if (!n._isOpen) {
            if (n.hover(), t = new Sys.CancelEventArgs, n.raiseShowing(t), n.raisePopup(t), t.get_cancel()) return;
            n._isOpen = !0, n.populate(), (!n._dynamicPopulateBehavior || n._dynamicPopulateBehavior._populated && n._cacheDynamicResults) && n._showPopup()
        }
    },
    _showPopup: function () {
        this._dropPopupPopupBehavior.show(), this.raiseShown(Sys.EventArgs.Empty)
    },
    hide: function () {
        var n = this,
            t;
        if (n._isOpen) {
            if (t = new Sys.CancelEventArgs, n.raiseHiding(t), t.get_cancel()) return;
            n._isOpen = !1, n._dropPopupPopupBehavior.hide(), n.raiseHidden(Sys.EventArgs.Empty)
        }
    },
    _dropWrapperHoverBehavior_onhover: function () {
        this.hover()
    },
    _dropWrapperHoverBehavior_onunhover: function () {
        this.unhover()
    },
    _dropWrapper_onclick: function (n) {
        var t = this;
        n.target.tagName != "A" && (t._isOpen ? t.hide() : t.show(), t._wasClicked = !0)
    },
    _dropWrapper_oncontextmenu: function (n) {
        n.target.tagName != "A" && (this._wasClicked = !0, n.preventDefault(), this.show())
    },
    _dropFrame_onclick: function () {
        var n = this;
        n._isOpen ? n.hide() : n.show(), n._wasClicked = !0
    },
    _dropFrame_oncontextmenu: function (n) {
        this._wasClicked = !0, n.preventDefault(), this.show()
    },
    _dropDownControl_onclick: function () { },
    _dropDownControl_oncontextmenu: function (n) {
        this._wasClicked = !0, n.preventDefault()
    },
    _document_onclick: function () {
        var n = this;
        n._wasClicked ? n._wasClicked = !1 : n._isOpen && (n.hide(), n.unhover())
    },
    _document_oncontextmenu: function () {
        var n = this;
        n._wasClicked ? n._wasClicked = !1 : n._isOpen && (n.hide(), n.unhover())
    },
    _onPopulated: function (n, t) {
        AjaxControlToolkit.DropDownBehavior.callBaseMethod(this, "_onPopulated", [n, t]), this._isOpen && this._showPopup()
    },
    get_onShow: function () {
        return this._dropPopupPopupBehavior ? this._dropPopupPopupBehavior.get_onShow() : this._onShowJson
    },
    set_onShow: function (n) {
        var t = this;
        t._dropPopupPopupBehavior ? t._dropPopupPopupBehavior.set_onShow(n) : t._onShowJson = n, t.raisePropertyChanged("onShow")
    },
    get_onShowBehavior: function () {
        return this._dropPopupPopupBehavior ? this._dropPopupPopupBehavior.get_onShowBehavior() : null
    },
    onShow: function () {
        this._dropPopupPopupBehavior && this._dropPopupPopupBehavior.onShow()
    },
    get_onHide: function () {
        return this._dropPopupPopupBehavior ? this._dropPopupPopupBehavior.get_onHide() : this._onHideJson
    },
    set_onHide: function (n) {
        var t = this;
        t._dropPopupPopupBehavior ? t._dropPopupPopupBehavior.set_onHide(n) : t._onHideJson = n, t.raisePropertyChanged("onHide")
    },
    get_onHideBehavior: function () {
        return this._dropPopupPopupBehavior ? this._dropPopupPopupBehavior.get_onHideBehavior() : null
    },
    onHide: function () {
        this._dropPopupPopupBehavior && this._dropPopupPopupBehavior.onHide()
    },
    get_dropDownControl: function () {
        return this._dropDownControl
    },
    set_dropDownControl: function (n) {
        this._dropDownControl != n && (this._dropDownControl = n, this.raisePropertyChanged("dropDownControl"))
    },
    get_highlightBorderColor: function () {
        return this._highlightBorderColor
    },
    set_highlightBorderColor: function (n) {
        this._highlightBorderColor != n && (this._highlightBorderColor = n, this.raisePropertyChanged("highlightBorderColor"))
    },
    get_highlightBackgroundColor: function () {
        return this._highlightBackgroundColor
    },
    set_highlightBackgroundColor: function (n) {
        var t = this;
        t._highlightBackgroundColor != n && (t._highlightBackgroundColor = n, t.get_isInitialized() && t._isOpen && (t._dropWrapper.style.backgroundColor = n), t.raisePropertyChanged("highlightBackgroundColor"))
    },
    get_dropArrowBackgroundColor: function () {
        return this._dropArrowBackgroundColor
    },
    set_dropArrowBackgroundColor: function (n) {
        var t = this;
        t._dropArrowBackgroundColor != n && (t._dropArrowBackgroundColor = n, t.get_isInitialized() && (t._dropArrow.style.backgroundColor = n), t.raisePropertyChanged("dropArrowBackgroundColor"))
    },
    get_dropArrowImageUrl: function () {
        return this._dropArrowImageUrl
    },
    set_dropArrowImageUrl: function (n) {
        var t = this;
        t._dropArrowImageUrl != n && (t._dropArrowImageUrl = n, t.get_isInitialized() && (t._dropArrow.className && (t._dropArrow.className = "", t._dropArrowWrapper.style.display = "block"), t._dropArrowImage.src = n), t.raisePropertyChanged("dropArrowImageUrl"))
    },
    get_dropArrowWidth: function () {
        return this._dropArrowWidth
    },
    set_dropArrowWidth: function (n) {
        var t = this;
        t._dropArrowWidth != n && (t._dropArrowWidth = n, t.get_isInitialized() && (t._dropArrow.style.width = n), t.raisePropertyChanged("dropArrowWidth"))
    },
    get_isOver: function () {
        return this._isOver
    },
    get_isOpen: function () {
        return this._isOpen
    },
    add_showing: function (n) {
        this.get_events().addHandler("showing", n)
    },
    remove_showing: function (n) {
        this.get_events().removeHandler("showing", n)
    },
    raiseShowing: function (n) {
        var t = this.get_events().getHandler("showing");
        t && t(this, n)
    },
    add_shown: function (n) {
        this.get_events().addHandler("shown", n)
    },
    remove_shown: function (n) {
        this.get_events().removeHandler("shown", n)
    },
    raiseShown: function (n) {
        var t = this.get_events().getHandler("shown");
        t && t(this, n)
    },
    add_popup: function (n) {
        this.get_events().addHandler("popup", n)
    },
    remove_popup: function (n) {
        this.get_events().removeHandler("popup", n)
    },
    raisePopup: function (n) {
        var t = this.get_events().getHandler("popup");
        t && t(this, n)
    },
    add_hiding: function (n) {
        this.get_events().addHandler("hiding", n)
    },
    remove_hiding: function (n) {
        this.get_events().removeHandler("hiding", n)
    },
    raiseHiding: function (n) {
        var t = this.get_events().getHandler("hiding");
        t && t(this, n)
    },
    add_hidden: function (n) {
        this.get_events().addHandler("hidden", n)
    },
    remove_hidden: function (n) {
        this.get_events().removeHandler("hidden", n)
    },
    raiseHidden: function (n) {
        var t = this.get_events().getHandler("hidden");
        t && t(this, n)
    },
    add_hoverOver: function (n) {
        this.get_events().addHandler("hoverOver", n)
    },
    remove_hoverOver: function (n) {
        this.get_events().removeHandler("hoverOver", n)
    },
    raiseHoverOver: function (n) {
        var t = this.get_events().getHandler("hoverOver");
        t && t(this, n)
    },
    add_hoverOut: function (n) {
        this.get_events().addHandler("hoverOut", n)
    },
    remove_hoverOut: function (n) {
        this.get_events().removeHandler("hoverOut", n)
    },
    raiseHoverOut: function (n) {
        var t = this.get_events().getHandler("hoverOut");
        t && t(this, n)
    }
}, AjaxControlToolkit.DropDownBehavior.registerClass("AjaxControlToolkit.DropDownBehavior", AjaxControlToolkit.DynamicPopulateBehaviorBase), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.DropShadowBehavior = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.DropShadowBehavior.initializeBase(t, [n]), t._opacity = 1, t._width = 5, t._shadowDiv = i, t._trackPosition = i, t._trackPositionDelay = 50, t._timer = i, t._tickHandler = i, t._roundedBehavior = i, t._shadowRoundedBehavior = i, t._rounded = !1, t._radius = 5, t._lastX = i, t._lastY = i, t._lastW = i, t._lastH = i
}, AjaxControlToolkit.DropShadowBehavior.prototype = {
    initialize: function () {
        var n = this,
            t;
        AjaxControlToolkit.DropShadowBehavior.callBaseMethod(n, "initialize"), t = n.get_element(), $common.getCurrentStyle(t, "position", t.style.position) != "absolute" && (t.style.position = "relative"), n._rounded && n.setupRounded(), n._trackPosition && n.startTimer(), n.setShadow()
    },
    dispose: function () {
        this.stopTimer(), this.disposeShadowDiv(), AjaxControlToolkit.DropShadowBehavior.callBaseMethod(this, "dispose")
    },
    buildShadowDiv: function () {
        var n = this,
            i = n.get_element(),
            t;
        n.get_isInitialized() && i && n._width && (t = document.createElement("DIV"), t.style.backgroundColor = "black", t.style.position = "absolute", i.id && (t.id = i.id + "_DropShadow"), n._shadowDiv = t, i.parentNode.appendChild(t), n._rounded ? (n._shadowDiv.style.height = Math.max(0, i.offsetHeight - 2 * n._radius) + "px", n._shadowRoundedBehavior ? n._shadowRoundedBehavior.set_Radius(n._radius) : n._shadowRoundedBehavior = $create(AjaxControlToolkit.RoundedCornersBehavior, {
            Radius: n._radius
        }, null, null, n._shadowDiv)) : n._shadowRoundedBehavior && n._shadowRoundedBehavior.set_Radius(0), n._opacity != 1 && n.setupOpacity(), n.setShadow(!1, !0), n.updateZIndex())
    },
    disposeShadowDiv: function () {
        var n = this;
        n._shadowDiv && (n._shadowDiv.parentNode && n._shadowDiv.parentNode.removeChild(n._shadowDiv), n._shadowDiv = null), n._shadowRoundedBehavior && (n._shadowRoundedBehavior.dispose(), n._shadowRoundedBehavior = null)
    },
    onTimerTick: function () {
        this.setShadow()
    },
    startTimer: function () {
        var n = this;
        n._timer || (n._tickHandler || (n._tickHandler = Function.createDelegate(n, n.onTimerTick)), n._timer = new Sys.Timer, n._timer.set_interval(n._trackPositionDelay), n._timer.add_tick(n._tickHandler), n._timer.set_enabled(!0))
    },
    stopTimer: function () {
        var n = this;
        n._timer && (n._timer.remove_tick(n._tickHandler), n._timer.set_enabled(!1), n._timer.dispose(), n._timer = null)
    },
    setShadow: function (n, t) {
        var i = this,
            f = i.get_element(),
            e, r, o, u;
        i.get_isInitialized() && f && (i._width || n) && (e = i._shadowDiv, !e && i.buildShadowDiv(), r = {
            x: f.offsetLeft,
            y: f.offsetTop
        }, (n || i._lastX != r.x || i._lastY != r.y || !e) && (i._lastX = r.x, i._lastY = r.y, u = i.get_Width(), r.x += u, r.y += u, $common.setLocation(i._shadowDiv, r)), o = f.offsetHeight, u = f.offsetWidth, (n || o != i._lastH || u != i._lastW || !e) && (i._lastW = u, i._lastH = o, i._rounded && e && !t ? (i.disposeShadowDiv(), i.setShadow()) : (i._shadowDiv.style.width = u + "px", i._shadowDiv.style.height = o + "px")), i._shadowDiv && (i._shadowDiv.style.visibility = $common.getCurrentStyle(f, "visibility")))
    },
    setupOpacity: function () {
        var n = this;
        n.get_isInitialized() && n._shadowDiv && $common.setElementOpacity(n._shadowDiv, n._opacity)
    },
    setupRounded: function () {
        var n = this;
        !n._roundedBehavior && n._rounded && (n._roundedBehavior = $create(AjaxControlToolkit.RoundedCornersBehavior, null, null, null, n.get_element())), n._roundedBehavior && n._roundedBehavior.set_Radius(n._rounded ? n._radius : 0)
    },
    updateZIndex: function () {
        var t = this;
        if (t._shadowDiv) {
            var r = t.get_element(),
                n = r.style.zIndex,
                i = t._shadowDiv.style.zIndex;
            i && n && n > i || (n = Math.max(2, n), i = n - 1, r.style.zIndex = n, t._shadowDiv.style.zIndex = i)
        }
    },
    updateRoundedCorners: function () {
        var n = this;
        n.get_isInitialized() && (n.setupRounded(), n.disposeShadowDiv(), n.setShadow())
    },
    get_Opacity: function () {
        return this._opacity
    },
    set_Opacity: function (n) {
        var t = this;
        t._opacity != n && (t._opacity = n, t.setupOpacity(), t.raisePropertyChanged("Opacity"))
    },
    get_Rounded: function () {
        return this._rounded
    },
    set_Rounded: function (n) {
        var t = this;
        n != t._rounded && (t._rounded = n, t.updateRoundedCorners(), t.raisePropertyChanged("Rounded"))
    },
    get_Radius: function () {
        return this._radius
    },
    set_Radius: function (n) {
        var t = this;
        n != t._radius && (t._radius = n, t.updateRoundedCorners(), t.raisePropertyChanged("Radius"))
    },
    get_Width: function () {
        return this._width
    },
    set_Width: function (n) {
        var t = this;
        n != t._width && (t._width = n, t._shadowDiv && $common.setVisible(t._shadowDiv, n > 0), t.setShadow(!0), t.raisePropertyChanged("Width"))
    },
    get_TrackPositionDelay: function () {
        return this._trackPositionDelay
    },
    set_TrackPositionDelay: function (n) {
        var t = this;
        n != t._trackPositionDelay && (t._trackPositionDelay = n, t._trackPosition && (t.stopTimer(), t.startTimer()), t.raisePropertyChanged("TrackPositionDelay"))
    },
    get_TrackPosition: function () {
        return this._trackPosition
    },
    set_TrackPosition: function (n) {
        var t = this;
        n != t._trackPosition && (t._trackPosition = n, t.get_element() && (n ? t.startTimer() : t.stopTimer()), t.raisePropertyChanged("TrackPosition"))
    }
}, AjaxControlToolkit.DropShadowBehavior.registerClass("AjaxControlToolkit.DropShadowBehavior", AjaxControlToolkit.BehaviorBase), AjaxControlToolkit.FloatingBehavior = function (n) {
    function v(n) {
        window._event = n;
        var t = this.get_element();
        this.checkCanDrag(n.target) && (c = $common.getLocation(t), n.preventDefault(), this.startDragDrop(t))
    }
    var s = "_floatingObject",
        h = "location",
        e = "mousedown",
        f = null,
        o = "move",
        t = this,
        r, i, c, l, a, u;
    AjaxControlToolkit.FloatingBehavior.initializeBase(t, [n]), u = Function.createDelegate(t, v), t.add_move = function (n) {
        this.get_events().addHandler(o, n)
    }, t.remove_move = function (n) {
        this.get_events().removeHandler(o, n)
    }, t.get_handle = function () {
        return r
    }, t.set_handle = function (n) {
        r != f && $removeHandler(r, e, u), r = n, $addHandler(r, e, u)
    }, t.get_profileProperty = function () {
        return l
    }, t.set_profileProperty = function (n) {
        l = n
    }, t.get_profileComponent = function () {
        return a
    }, t.set_profileComponent = function (n) {
        a = n
    }, t.get_location = function () {
        return i
    }, t.set_location = function (n) {
        i != n && (i = n, this.get_isInitialized() && $common.setLocation(this.get_element(), i), this.raisePropertyChanged(h))
    }, t.initialize = function () {
        AjaxControlToolkit.FloatingBehavior.callBaseMethod(this, "initialize"), AjaxControlToolkit.DragDropManager.registerDropTarget(this);
        var n = this.get_element();
        i || (i = $common.getLocation(n)), n.style.position = "fixed", $common.setLocation(n, i), $common.appendElementToFormOrBody(n)
    }, t.dispose = function () {
        AjaxControlToolkit.DragDropManager.unregisterDropTarget(this), r && u && $removeHandler(r, e, u), u = f, AjaxControlToolkit.FloatingBehavior.callBaseMethod(this, "dispose")
    }, t.checkCanDrag = function (n) {
        var i = ["input", "button", "select", "textarea", "label"],
            t = n.tagName;
        return t.toLowerCase() == "a" && n.href != f && n.href.length > 0 ? !1 : Array.indexOf(i, t.toLowerCase()) > -1 ? !1 : !0
    }, t.get_dragDataType = function () {
        return s
    }, t.getDragData = function () {
        return f
    }, t.get_dragMode = function () {
        return AjaxControlToolkit.DragMode.Move
    }, t.onDragStart = function () { }, t.onDrag = function () { }, t.onDragEnd = function (n) {
        var t = this,
            r, u, f;
        n || (r = t.get_events().getHandler(o), r && (u = new Sys.CancelEventArgs, r(t, u), n = u.get_cancel())), f = t.get_element(), n ? $common.setLocation(f, c) : (i = $common.getLocation(f), t.raisePropertyChanged(h))
    }, t.startDragDrop = function (n) {
        AjaxControlToolkit.DragDropManager.startDragDrop(this, n, f)
    }, t.get_dropTargetElement = function () {
        return document.body
    }, t.canDrop = function (n, t) {
        return t == s
    }, t.drop = function () { }, t.onDragEnterTarget = function () { }, t.onDragLeaveTarget = function () { }, t.onDragInTarget = function () { }
}, AjaxControlToolkit.FloatingBehavior.registerClass("AjaxControlToolkit.FloatingBehavior", AjaxControlToolkit.BehaviorBase, AjaxControlToolkit.IDragSource, AjaxControlToolkit.IDropTarget, Sys.IDisposable), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.PopupControlBehavior = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.PopupControlBehavior.initializeBase(t, [n]), t._popupControlID = i, t._commitProperty = i, t._commitScript = i, t._position = i, t._offsetX = 0, t._offsetY = 0, t._extenderControlID = i, t._popupElement = i, t._popupBehavior = i, t._popupVisible = !1, t._focusHandler = i, t._popupKeyDownHandler = i, t._popupClickHandler = i, t._bodyClickHandler = i, t._onShowJson = i, t._onHideJson = i
}, AjaxControlToolkit.PopupControlBehavior.prototype = {
    initialize: function () {
        var i = "click",
            n = this,
            t;
        AjaxControlToolkit.PopupControlBehavior.callBaseMethod(n, "initialize"), t = n.get_element(), n._popupElement = $get(n._popupControlID), n._popupBehavior = $create(AjaxControlToolkit.PopupBehavior, {
            id: n.get_id() + "PopupBehavior",
            parentElement: t
        }, null, null, n._popupElement), n._onShowJson && n._popupBehavior.set_onShow(n._onShowJson), n._onHideJson && n._popupBehavior.set_onHide(n._onHideJson), n._focusHandler = Function.createDelegate(n, n._onFocus), n._popupClickHandler = Function.createDelegate(n, n._onPopupClick), n._bodyClickHandler = Function.createDelegate(n, n._onBodyClick), n._popupKeyDownHandler = Function.createDelegate(n, n._onPopupKeyDown), $addHandler(t, "focus", n._focusHandler), $addHandler(t, i, n._focusHandler), $addHandler(document.body, i, n._bodyClickHandler), $addHandler(n._popupElement, i, n._popupClickHandler), $addHandler(n._popupElement, "keydown", n._popupKeyDownHandler), n.registerPartialUpdateEvents(), AjaxControlToolkit.PopupControlBehavior.__VisiblePopup && n.get_id() == AjaxControlToolkit.PopupControlBehavior.__VisiblePopup.get_id() && n._onFocus(null)
    },
    dispose: function () {
        var i = "click",
            t = null,
            n = this,
            r = n.get_element();
        n._onShowJson = t, n._onHideJson = t, n._popupBehavior && (n._popupBehavior.dispose(), n._popupBehavior = t), n._focusHandler && ($removeHandler(r, "focus", n._focusHandler), $removeHandler(r, i, n._focusHandler), n._focusHandler = t), n._bodyClickHandler && ($removeHandler(document.body, i, n._bodyClickHandler), n._bodyClickHandler = t), n._popupClickHandler && ($removeHandler(n._popupElement, i, n._popupClickHandler), n._popupClickHandler = t), n._popupKeyDownHandler && ($removeHandler(n._popupElement, "keydown", n._popupKeyDownHandler), n._popupKeyDownHandler = t), AjaxControlToolkit.PopupControlBehavior.callBaseMethod(n, "dispose")
    },
    showPopup: function () {
        var n = this,
            t = AjaxControlToolkit.PopupControlBehavior.__VisiblePopup;
        t && t._popupBehavior && t.hidePopup(), AjaxControlToolkit.PopupControlBehavior.callBaseMethod(n, "populate"), n._popupBehavior.set_x(n._getLeftOffset()), n._popupBehavior.set_y(n._getTopOffset()), n._popupBehavior.show(), n._popupVisible = !0, AjaxControlToolkit.PopupControlBehavior.__VisiblePopup = n
    },
    hidePopup: function () {
        this._popupBehavior.hide(), this._popupVisible = !1, AjaxControlToolkit.PopupControlBehavior.__VisiblePopup = null
    },
    _onFocus: function (n) {
        !this._popupVisible && this.showPopup(), n && n.stopPropagation()
    },
    _onPopupKeyDown: function (n) {
        this._popupVisible && n.keyCode == 27 && this.get_element().focus()
    },
    _onPopupClick: function (n) {
        n.stopPropagation()
    },
    _onBodyClick: function () {
        this._popupVisible && this.hidePopup()
    },
    _close: function (result) {
        var a = this,
            e = a.get_element();
        null != result && ("$$CANCEL$$" != result && (a._commitProperty ? e[a._commitProperty] = result : "text" == e.type ? e.value = result : Sys.Debug.assert(!1, String.format(AjaxControlToolkit.Resources.PopupControl_NoDefaultProperty, e.id, e.type)), a._commitScript && eval(a._commitScript)), a.hidePopup())
    },
    _partialUpdateEndRequest: function (n, t) {
        var i = this,
            r;
        AjaxControlToolkit.PopupControlBehavior.callBaseMethod(i, "_partialUpdateEndRequest", [n, t]), i.get_element() && (r = t.get_dataItems()[i.get_element().id], undefined === r && AjaxControlToolkit.PopupControlBehavior.__VisiblePopup && i.get_id() == AjaxControlToolkit.PopupControlBehavior.__VisiblePopup.get_id() && (r = t.get_dataItems()._PopupControl_Proxy_ID_), undefined !== r && i._close(r))
    },
    _onPopulated: function (n, t) {
        AjaxControlToolkit.PopupControlBehavior.callBaseMethod(this, "_onPopulated", [n, t]), this._popupVisible && this._popupBehavior.show()
    },
    _getLeftOffset: function () {
        var n = this;
        return AjaxControlToolkit.PopupControlPopupPosition.Left == n._position ? -1 * n.get_element().offsetWidth + n._offsetX : AjaxControlToolkit.PopupControlPopupPosition.Right == n._position ? n.get_element().offsetWidth + n._offsetX : n._offsetX
    },
    _getTopOffset: function () {
        var n = this,
            t;
        return t = AjaxControlToolkit.PopupControlPopupPosition.Top == n._position ? -1 * n.get_element().offsetHeight + n._offsetY : AjaxControlToolkit.PopupControlPopupPosition.Bottom == n._position ? n.get_element().offsetHeight + n._offsetY : n._offsetY
    },
    get_onShow: function () {
        return this._popupBehavior ? this._popupBehavior.get_onShow() : this._onShowJson
    },
    set_onShow: function (n) {
        var t = this;
        t._popupBehavior ? t._popupBehavior.set_onShow(n) : t._onShowJson = n, t.raisePropertyChanged("onShow")
    },
    get_onShowBehavior: function () {
        return this._popupBehavior ? this._popupBehavior.get_onShowBehavior() : null
    },
    onShow: function () {
        this._popupBehavior && this._popupBehavior.onShow()
    },
    get_onHide: function () {
        return this._popupBehavior ? this._popupBehavior.get_onHide() : this._onHideJson
    },
    set_onHide: function (n) {
        var t = this;
        t._popupBehavior ? t._popupBehavior.set_onHide(n) : t._onHideJson = n, t.raisePropertyChanged("onHide")
    },
    get_onHideBehavior: function () {
        return this._popupBehavior ? this._popupBehavior.get_onHideBehavior() : null
    },
    onHide: function () {
        this._popupBehavior && this._popupBehavior.onHide()
    },
    get_PopupControlID: function () {
        return this._popupControlID
    },
    set_PopupControlID: function (n) {
        this._popupControlID != n && (this._popupControlID = n, this.raisePropertyChanged("PopupControlID"))
    },
    get_CommitProperty: function () {
        return this._commitProperty
    },
    set_CommitProperty: function (n) {
        this._commitProperty != n && (this._commitProperty = n, this.raisePropertyChanged("CommitProperty"))
    },
    get_CommitScript: function () {
        return this._commitScript
    },
    set_CommitScript: function (n) {
        this._commitScript != n && (this._commitScript = n, this.raisePropertyChanged("CommitScript"))
    },
    get_Position: function () {
        return this._position
    },
    set_Position: function (n) {
        this._position != n && (this._position = n, this.raisePropertyChanged("Position"))
    },
    get_ExtenderControlID: function () {
        return this._extenderControlID
    },
    set_ExtenderControlID: function (n) {
        this._extenderControlID != n && (this._extenderControlID = n, this.raisePropertyChanged("ExtenderControlID"))
    },
    get_OffsetX: function () {
        return this._offsetX
    },
    set_OffsetX: function (n) {
        this._offsetX != n && (this._offsetX = n, this.raisePropertyChanged("OffsetX"))
    },
    get_OffsetY: function () {
        return this._offsetY
    },
    set_OffsetY: function (n) {
        this._offsetY != n && (this._offsetY = n, this.raisePropertyChanged("OffsetY"))
    },
    get_PopupVisible: function () {
        return this._popupVisible
    },
    add_showing: function (n) {
        this._popupBehavior && this._popupBehavior.add_showing(n)
    },
    remove_showing: function (n) {
        this._popupBehavior && this._popupBehavior.remove_showing(n)
    },
    raiseShowing: function (n) {
        this._popupBehavior && this._popupBehavior.raiseShowing(n)
    },
    add_shown: function (n) {
        this._popupBehavior && this._popupBehavior.add_shown(n)
    },
    remove_shown: function (n) {
        this._popupBehavior && this._popupBehavior.remove_shown(n)
    },
    raiseShown: function (n) {
        this._popupBehavior && this._popupBehavior.raiseShown(n)
    },
    add_hiding: function (n) {
        this._popupBehavior && this._popupBehavior.add_hiding(n)
    },
    remove_hiding: function (n) {
        this._popupBehavior && this._popupBehavior.remove_hiding(n)
    },
    raiseHiding: function (n) {
        this._popupBehavior && this._popupBehavior.raiseHiding(n)
    },
    add_hidden: function (n) {
        this._popupBehavior && this._popupBehavior.add_hidden(n)
    },
    remove_hidden: function (n) {
        this._popupBehavior && this._popupBehavior.remove_hidden(n)
    },
    raiseHidden: function (n) {
        this._popupBehavior && this._popupBehavior.raiseHidden(n)
    }
}, AjaxControlToolkit.PopupControlBehavior.registerClass("AjaxControlToolkit.PopupControlBehavior", AjaxControlToolkit.DynamicPopulateBehaviorBase), AjaxControlToolkit.PopupControlBehavior.__VisiblePopup = null, AjaxControlToolkit.PopupControlPopupPosition = function () {
    throw Error.invalidOperation();
}, AjaxControlToolkit.PopupControlPopupPosition.prototype = {
    Center: 0,
    Top: 1,
    Left: 2,
    Bottom: 3,
    Right: 4
}, AjaxControlToolkit.PopupControlPopupPosition.registerEnum("AjaxControlToolkit.PopupControlPopupPosition", !1), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.ModalPopupRepositionMode = function () {
    throw Error.invalidOperation();
}, AjaxControlToolkit.ModalPopupRepositionMode.prototype = {
    None: 0,
    RepositionOnWindowResize: 1,
    RepositionOnWindowScroll: 2,
    RepositionOnWindowResizeAndScroll: 3
}, AjaxControlToolkit.ModalPopupRepositionMode.registerEnum("AjaxControlToolkit.ModalPopupRepositionMode"), AjaxControlToolkit.ModalPopupBehavior = function (n) {
    var r = !1,
        i = null,
        t = this;
    AjaxControlToolkit.ModalPopupBehavior.initializeBase(t, [n]), t._PopupControlID = i, t._PopupDragHandleControlID = i, t._BackgroundCssClass = i, t._DropShadow = r, t._Drag = r, t._OkControlID = i, t._CancelControlID = i, t._OnOkScript = i, t._OnCancelScript = i, t._xCoordinate = -1, t._yCoordinate = -1, t._repositionMode = AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowResizeAndScroll, t._backgroundElement = i, t._foregroundElement = i, t._relativeOrAbsoluteParentElement = i, t._popupElement = i, t._dragHandleElement = i, t._showHandler = i, t._okHandler = i, t._cancelHandler = i, t._scrollHandler = i, t._resizeHandler = i, t._windowHandlersAttached = r, t._dropShadowBehavior = i, t._dragBehavior = i, t._isIE6 = r, t._saveTabIndexes = [], t._saveDesableSelect = [], t._tagWithTabIndex = ["A", "AREA", "BUTTON", "INPUT", "OBJECT", "SELECT", "TEXTAREA", "IFRAME"]
}, AjaxControlToolkit.ModalPopupBehavior.prototype = {
    initialize: function () {
        var t = "click",
            n = this;
        AjaxControlToolkit.ModalPopupBehavior.callBaseMethod(n, "initialize"), n._isIE6 = Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 7, n._PopupDragHandleControlID && (n._dragHandleElement = $get(n._PopupDragHandleControlID)), n._popupElement = $get(n._PopupControlID), n._DropShadow ? (n._foregroundElement = document.createElement("div"), n._foregroundElement.id = n.get_id() + "_foregroundElement", n._popupElement.parentNode.appendChild(n._foregroundElement), n._foregroundElement.appendChild(n._popupElement)) : n._foregroundElement = n._popupElement, n._backgroundElement = document.createElement("div"), n._backgroundElement.id = n.get_id() + "_backgroundElement", n._backgroundElement.style.display = "none", n._backgroundElement.style.position = Sys.Browser.agent == Sys.Browser.InternetExplorer && document.compatMode != "CSS1Compat" ? "absolute" : "fixed", n._backgroundElement.style.left = "0px", n._backgroundElement.style.top = "0px", n._backgroundElement.style.zIndex = 1e4, n._BackgroundCssClass && (n._backgroundElement.className = n._BackgroundCssClass), $common.appendElementToFormOrBody(n._foregroundElement), $common.appendElementToFormOrBody(n._backgroundElement), n._foregroundElement.style.display = "none", n._foregroundElement.style.position = "fixed", n._foregroundElement.style.zIndex = $common.getCurrentStyle(n._backgroundElement, "zIndex", n._backgroundElement.style.zIndex) + 1, n._showHandler = Function.createDelegate(n, n._onShow), $addHandler(n.get_element(), t, n._showHandler), n._OkControlID && (n._okHandler = Function.createDelegate(n, n._onOk), $addHandler($get(n._OkControlID), t, n._okHandler)), n._CancelControlID && (n._cancelHandler = Function.createDelegate(n, n._onCancel), $addHandler($get(n._CancelControlID), t, n._cancelHandler)), n._scrollHandler = Function.createDelegate(n, n._onLayout), n._resizeHandler = Function.createDelegate(n, n._onLayout), n.registerPartialUpdateEvents()
    },
    dispose: function () {
        var i = "click",
            t = null,
            n = this;
        n._hideImplementation(), n._foregroundElement && n._foregroundElement.parentNode && (n._backgroundElement.parentNode.removeChild(n._backgroundElement), n._DropShadow && (n._foregroundElement.parentNode.appendChild(n._popupElement), n._foregroundElement.parentNode.removeChild(n._foregroundElement))), n._scrollHandler = t, n._resizeHandler = t, n._cancelHandler && $get(n._CancelControlID) && ($removeHandler($get(n._CancelControlID), i, n._cancelHandler), n._cancelHandler = t), n._okHandler && $get(n._OkControlID) && ($removeHandler($get(n._OkControlID), i, n._okHandler), n._okHandler = t), n._showHandler && ($removeHandler(n.get_element(), i, n._showHandler), n._showHandler = t), AjaxControlToolkit.ModalPopupBehavior.callBaseMethod(n, "dispose")
    },
    _attachPopup: function () {
        var t = null,
            n = this;
        n._DropShadow && !n._dropShadowBehavior && (n._dropShadowBehavior = $create(AjaxControlToolkit.DropShadowBehavior, {}, t, t, n._popupElement)), n._dragHandleElement && !n._dragBehavior && (n._dragBehavior = $create(AjaxControlToolkit.FloatingBehavior, {
            handle: n._dragHandleElement
        }, t, t, n._foregroundElement)), $addHandler(window, "resize", n._resizeHandler), $addHandler(window, "scroll", n._scrollHandler), n._windowHandlersAttached = !0
    },
    _detachPopup: function () {
        var n = this;
        n._windowHandlersAttached && (n._scrollHandler && $removeHandler(window, "scroll", n._scrollHandler), n._resizeHandler && $removeHandler(window, "resize", n._resizeHandler), n._windowHandlersAttached = !1), n._dragBehavior && (n._dragBehavior.dispose(), n._dragBehavior = null), n._dropShadowBehavior && (n._dropShadowBehavior.dispose(), n._dropShadowBehavior = null)
    },
    _onShow: function (n) {
        if (!this.get_element().disabled) return this.show(), n.preventDefault(), !1
    },
    _onOk: function (n) {
        var t = this,
            i = $get(t._OkControlID);
        if (i && !i.disabled) return t.hide() && t._OnOkScript && window.setTimeout(t._OnOkScript, 0), n.preventDefault(), !1
    },
    _onCancel: function (n) {
        var t = this,
            i = $get(t._CancelControlID);
        if (i && !i.disabled) return t.hide() && t._OnCancelScript && window.setTimeout(t._OnCancelScript, 0), n.preventDefault(), !1
    },
    _onLayout: function (n) {
        var t = this,
            i = t.get_repositionMode();
        (i === AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowScroll || i === AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowResizeAndScroll) && n.type === "scroll" ? t._layout() : (i === AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowResize || i === AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowResizeAndScroll) && n.type === "resize" ? t._layout() : t._layoutBackgroundElement()
    },
    show: function () {
        var i = "absolute",
            n = this,
            r = new Sys.CancelEventArgs,
            t;
        if (n.raiseShowing(r), !r.get_cancel()) {
            if (n.populate(), n._attachPopup(), n._backgroundElement.style.display = "", n._foregroundElement.style.display = "", n._popupElement.style.display = "", n._isIE6)
                for (n._foregroundElement.style.position = i, n._backgroundElement.style.position = i, t = n._foregroundElement.parentNode; t && t != document.documentElement;)
                    if (t.style.position != "relative" && t.style.position != i) t = t.parentNode;
                    else {
                        n._relativeOrAbsoluteParentElement = t;
                        break
                    } n.disableTab(), n._layout(), n._layout(), n.raiseShown(Sys.EventArgs.Empty), typeof $func != "undefined" && $func.disableAccessKey(n)
        }
    },
    disableTab: function () {
        var i = this,
            r = 0,
            t, e = [],
            f, u, n;
        for (Array.clear(i._saveTabIndexes), u = 0; u < i._tagWithTabIndex.length; u++)
            for (t = i._foregroundElement.getElementsByTagName(i._tagWithTabIndex[u]), n = 0; n < t.length; n++) e[r] = t[n], r++;
        for (r = 0, u = 0; u < i._tagWithTabIndex.length; u++)
            for (t = document.getElementsByTagName(i._tagWithTabIndex[u]), n = 0; n < t.length; n++) Array.indexOf(e, t[n]) == -1 && (i._saveTabIndexes[r] = {
                tag: t[n],
                index: t[n].tabIndex
            }, t[n].tabIndex = "-1", r++);
        if (r = 0, Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 7) {
            for (f = [], u = 0; u < i._tagWithTabIndex.length; u++)
                for (t = i._foregroundElement.getElementsByTagName("SELECT"), n = 0; n < t.length; n++) f[r] = t[n], r++;
            for (r = 0, Array.clear(i._saveDesableSelect), t = document.getElementsByTagName("SELECT"), n = 0; n < t.length; n++) Array.indexOf(f, t[n]) == -1 && (i._saveDesableSelect[r] = {
                tag: t[n],
                visib: $common.getCurrentStyle(t[n], "visibility")
            }, t[n].style.visibility = "hidden", r++)
        }
    },
    restoreTab: function () {
        for (var n = this, t, i = 0; i < n._saveTabIndexes.length; i++) n._saveTabIndexes[i].tag.tabIndex = n._saveTabIndexes[i].index;
        if (Array.clear(n._saveTabIndexes), Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 7) {
            for (t = 0; t < n._saveDesableSelect.length; t++) n._saveDesableSelect[t].tag.style.visibility = n._saveDesableSelect[t].visib;
            Array.clear(n._saveDesableSelect)
        }
    },
    hide: function () {
        var n = new Sys.CancelEventArgs;
        return (this.raiseHiding(n), n.get_cancel()) ? !1 : (typeof $func != "undefined" && $func.restoreAccessKey(this), this._hideImplementation(), this.raiseHidden(Sys.EventArgs.Empty), !0)
    },
    _hideImplementation: function () {
        var n = this;
        n._backgroundElement.style.display = "none", n._foregroundElement.style.display = "none", n.restoreTab(), n._detachPopup()
    },
    _layout: function () {
        var r = "px",
            e = "absolute",
            n = this,
            u = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft,
            f = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop,
            o = $common.getClientBounds(),
            c = o.width,
            l = o.height,
            t, i, s, h;
        n._layoutBackgroundElement(), t = 0, i = 0, n._xCoordinate < 0 ? (s = n._foregroundElement.offsetWidth ? n._foregroundElement.offsetWidth : n._foregroundElement.scrollWidth, t = Math.round((c - s) / 2), n._foregroundElement.style.position == e && (t += u), n._foregroundElement.style.left = t + r) : n._isIE6 ? (n._foregroundElement.style.left = n._xCoordinate + u + r, t = n._xCoordinate + u) : (n._foregroundElement.style.left = n._xCoordinate + r, t = n._xCoordinate), n._yCoordinate < 0 ? (h = n._foregroundElement.offsetHeight ? n._foregroundElement.offsetHeight : n._foregroundElement.scrollHeight, i = Math.round((l - h) / 2), n._foregroundElement.style.position == e && (i += f), n._foregroundElement.style.top = i + r) : n._isIE6 ? (n._foregroundElement.style.top = n._yCoordinate + f + r, i = n._yCoordinate + f) : (n._foregroundElement.style.top = n._yCoordinate + r, i = n._yCoordinate), n._layoutForegroundElement(t, i), n._dropShadowBehavior && (n._dropShadowBehavior.setShadow(), window.setTimeout(Function.createDelegate(n, n._fixupDropShadowBehavior), 0)), n._layoutBackgroundElement()
    },
    _layoutForegroundElement: function (n, t) {
        var i = this,
            r;
        if (i._isIE6 && i._relativeOrAbsoluteParentElement) {
            var u = $common.getLocation(i._foregroundElement),
                f = $common.getLocation(i._relativeOrAbsoluteParentElement),
                e = u.x;
            e != n && (i._foregroundElement.style.left = n - f.x + "px"), r = u.y, r != t && (i._foregroundElement.style.top = t - f.y + "px")
        }
    },
    _layoutBackgroundElement: function () {
        var t = "px",
            n = this,
            i, r, u;
        n._isIE6 && (i = $common.getLocation(n._backgroundElement), r = i.x, r != 0 && (n._backgroundElement.style.left = -r + t), u = i.y, u != 0 && (n._backgroundElement.style.top = -u + t));
        var f = $common.getClientBounds(),
            e = f.width,
            o = f.height;
        Sys.Browser.agent == Sys.Browser.InternetExplorer && document.compatMode != "CSS1Compat" ? (n._backgroundElement.style.width = document.body.scrollWidth + t, n._backgroundElement.style.height = document.body.scrollHeight + t) : (n._backgroundElement.style.width = Math.max(Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), e) + t, n._backgroundElement.style.height = Math.max(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), o) + t)
    },
    _fixupDropShadowBehavior: function () {
        this._dropShadowBehavior && this._dropShadowBehavior.setShadow()
    },
    _partialUpdateEndRequest: function (n, t) {
        var i = this,
            r;
        AjaxControlToolkit.ModalPopupBehavior.callBaseMethod(i, "_partialUpdateEndRequest", [n, t]), i.get_element() && (r = t.get_dataItems()[i.get_element().id], "show" == r ? i.show() : "hide" == r && i.hide()), i._layout()
    },
    _onPopulated: function (n, t) {
        AjaxControlToolkit.ModalPopupBehavior.callBaseMethod(this, "_onPopulated", [n, t]), this._layout()
    },
    get_PopupControlID: function () {
        return this._PopupControlID
    },
    set_PopupControlID: function (n) {
        this._PopupControlID != n && (this._PopupControlID = n, this.raisePropertyChanged("PopupControlID"))
    },
    get_X: function () {
        return this._xCoordinate
    },
    set_X: function (n) {
        this._xCoordinate != n && (this._xCoordinate = n, this.raisePropertyChanged("X"))
    },
    get_Y: function () {
        return this._yCoordinate
    },
    set_Y: function (n) {
        this._yCoordinate != n && (this._yCoordinate = n, this.raisePropertyChanged("Y"))
    },
    get_PopupDragHandleControlID: function () {
        return this._PopupDragHandleControlID
    },
    set_PopupDragHandleControlID: function (n) {
        this._PopupDragHandleControlID != n && (this._PopupDragHandleControlID = n, this.raisePropertyChanged("PopupDragHandleControlID"))
    },
    get_BackgroundCssClass: function () {
        return this._BackgroundCssClass
    },
    set_BackgroundCssClass: function (n) {
        this._BackgroundCssClass != n && (this._BackgroundCssClass = n, this.raisePropertyChanged("BackgroundCssClass"))
    },
    get_DropShadow: function () {
        return this._DropShadow
    },
    set_DropShadow: function (n) {
        this._DropShadow != n && (this._DropShadow = n, this.raisePropertyChanged("DropShadow"))
    },
    get_Drag: function () {
        return this._Drag
    },
    set_Drag: function (n) {
        this._Drag != n && (this._Drag = n, this.raisePropertyChanged("Drag"))
    },
    get_OkControlID: function () {
        return this._OkControlID
    },
    set_OkControlID: function (n) {
        this._OkControlID != n && (this._OkControlID = n, this.raisePropertyChanged("OkControlID"))
    },
    get_CancelControlID: function () {
        return this._CancelControlID
    },
    set_CancelControlID: function (n) {
        this._CancelControlID != n && (this._CancelControlID = n, this.raisePropertyChanged("CancelControlID"))
    },
    get_OnOkScript: function () {
        return this._OnOkScript
    },
    set_OnOkScript: function (n) {
        this._OnOkScript != n && (this._OnOkScript = n, this.raisePropertyChanged("OnOkScript"))
    },
    get_OnCancelScript: function () {
        return this._OnCancelScript
    },
    set_OnCancelScript: function (n) {
        this._OnCancelScript != n && (this._OnCancelScript = n, this.raisePropertyChanged("OnCancelScript"))
    },
    get_repositionMode: function () {
        return this._repositionMode
    },
    set_repositionMode: function (n) {
        this._repositionMode !== n && (this._repositionMode = n, this.raisePropertyChanged("RepositionMode"))
    },
    add_showing: function (n) {
        this.get_events().addHandler("showing", n)
    },
    remove_showing: function (n) {
        this.get_events().removeHandler("showing", n)
    },
    raiseShowing: function (n) {
        var t = this.get_events().getHandler("showing");
        t && t(this, n)
    },
    add_shown: function (n) {
        this.get_events().addHandler("shown", n)
    },
    remove_shown: function (n) {
        this.get_events().removeHandler("shown", n)
    },
    raiseShown: function (n) {
        var t = this.get_events().getHandler("shown");
        t && t(this, n)
    },
    add_hiding: function (n) {
        this.get_events().addHandler("hiding", n)
    },
    remove_hiding: function (n) {
        this.get_events().removeHandler("hiding", n)
    },
    raiseHiding: function (n) {
        var t = this.get_events().getHandler("hiding");
        t && t(this, n)
    },
    add_hidden: function (n) {
        this.get_events().addHandler("hidden", n)
    },
    remove_hidden: function (n) {
        this.get_events().removeHandler("hidden", n)
    },
    raiseHidden: function (n) {
        var t = this.get_events().getHandler("hidden");
        t && t(this, n)
    }
}, AjaxControlToolkit.ModalPopupBehavior.registerClass("AjaxControlToolkit.ModalPopupBehavior", AjaxControlToolkit.DynamicPopulateBehaviorBase), AjaxControlToolkit.ModalPopupBehavior.invokeViaServer = function (n, t) {
    var i = $find(n);
    i && (t ? i.show() : i.hide())
}, Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.BoxCorners = function () {
    throw Error.invalidOperation();
}, AjaxControlToolkit.BoxCorners.prototype = {
    None: 0,
    TopLeft: 1,
    TopRight: 2,
    BottomRight: 4,
    BottomLeft: 8,
    Top: 3,
    Right: 6,
    Bottom: 12,
    Left: 9,
    All: 15
}, AjaxControlToolkit.BoxCorners.registerEnum("AjaxControlToolkit.BoxCorners", !0), AjaxControlToolkit.RoundedCornersBehavior = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.RoundedCornersBehavior.initializeBase(t, [n]), t._corners = AjaxControlToolkit.BoxCorners.All, t._radius = 5, t._color = i, t._parentDiv = i, t._originalStyle = i, t._borderColor = i, t._isDirty = !0
}, AjaxControlToolkit.RoundedCornersBehavior.prototype = {
    initialize: function () {
        AjaxControlToolkit.RoundedCornersBehavior.callBaseMethod(this, "initialize"), this.update()
    },
    dispose: function () {
        this.disposeParentDiv(), AjaxControlToolkit.RoundedCornersBehavior.callBaseMethod(this, "dispose")
    },
    update: function () {
        var a = !0,
            u = "1px",
            f = "solid",
            e = "none",
            o = "px",
            n = this,
            r = n.get_element(),
            p, s, h;
        if (r && n._isDirty && !n.get_isUpdating()) {
            n.disposeParentDiv();
            var g = n.getBackgroundColor(),
                k = r.offsetWidth,
                t = r.cloneNode(!1);
            n.moveChildren(r, t), n._originalStyle = r.style.cssText, r.style.backgroundColor = "transparent", r.style.verticalAlign = "top", r.style.padding = "0", r.style.overflow = "", r.style.className = "", r.style.height && r.style.height != "auto" ? r.style.height = parseInt($common.getCurrentStyle(r, "height")) + n._radius * 2 + o : !r.style.width && 0 < k && (r.style.width = k + o), t.style.position = "", t.style.border = "", t.style.margin = "", t.style.width = "100%", t.id = "", t.removeAttribute("control"), n._borderColor ? (t.style.borderTopStyle = e, t.style.borderBottomStyle = e, t.style.borderLeftStyle = f, t.style.borderRightStyle = f, t.style.borderLeftColor = n._borderColor, t.style.borderRightColor = n._borderColor, t.style.borderLeftWidth = u, t.style.borderRightWidth = u, n._radius == 0 && (t.style.borderTopStyle = f, t.style.borderBottomStyle = f, t.style.borderTopColor = n._borderColor, t.style.borderBottomColor = n._borderColor, t.style.borderTopWidth = u, t.style.borderBottomWidth = u)) : (t.style.borderTopStyle = e, t.style.borderBottomStyle = e, t.style.borderLeftStyle = e, t.style.borderRightStyle = e);
            for (var l = null, y = n._radius, w = n._radius, b = 0, c = w; c > 0; c--) {
                var d = Math.acos(c / y),
                    v = y - Math.round(Math.sin(d) * y),
                    i = document.createElement("DIV");
                i.__roundedDiv = a, i.style.backgroundColor = g, i.style.marginLeft = v + o, i.style.marginRight = v - (n._borderColor ? 2 : 0) + o, i.style.height = u, i.style.fontSize = u, i.style.overflow = "hidden", n._borderColor && (i.style.borderLeftStyle = f, i.style.borderRightStyle = f, i.style.borderLeftColor = n._borderColor, i.style.borderRightColor = n._borderColor, p = Math.max(0, b - v - 1), i.style.borderLeftWidth = p + 1 + o, i.style.borderRightWidth = p + 1 + o, c == w && (i.__roundedDivNoBorder = a, i.style.backgroundColor = n._borderColor)), r.insertBefore(i, l), s = i, i = i.cloneNode(a), i.__roundedDiv = a, r.insertBefore(i, l), h = i, l = i, b = v, n.isCornerSet(AjaxControlToolkit.BoxCorners.TopLeft) || (s.style.marginLeft = "0", n._borderColor && (s.style.borderLeftWidth = u)), n.isCornerSet(AjaxControlToolkit.BoxCorners.TopRight) || (s.style.marginRight = "0", n._borderColor && (s.style.borderRightWidth = u, s.style.marginRight = "-2px")), n.isCornerSet(AjaxControlToolkit.BoxCorners.BottomLeft) || (h.style.marginLeft = "0", n._borderColor && (h.style.borderLeftWidth = u)), n.isCornerSet(AjaxControlToolkit.BoxCorners.BottomRight) || (h.style.marginRight = "0", n._borderColor && (h.style.borderRightWidth = u, h.style.marginRight = "-2px"))
            }
            r.insertBefore(t, l), n._parentDiv = t, n._isDirty = !1
        }
    },
    disposeParentDiv: function () {
        var n = this,
            t;
        if (n._parentDiv) {
            for (var i = n.get_element(), u = i.childNodes, r = u.length - 1; r >= 0; r--)
                if (t = u[r], t) {
                    t == n._parentDiv && n.moveChildren(t, i);
                    try {
                        i.removeChild(t)
                    } catch (f) { }
                } n._originalStyle && (i.style.cssText = n._originalStyle, n._originalStyle = null), n._parentDiv = null
        }
    },
    getBackgroundColor: function () {
        return this._color ? this._color : $common.getCurrentStyle(this.get_element(), "backgroundColor")
    },
    moveChildren: function (n, t) {
        for (var r = 0, i; n.hasChildNodes();) i = n.childNodes[0], i = n.removeChild(i), t.appendChild(i), r++;
        return r
    },
    isCornerSet: function (n) {
        return (this._corners & n) != AjaxControlToolkit.BoxCorners.None
    },
    setCorner: function (n, t) {
        var i = this;
        t ? i.set_Corners(i._corners | n) : i.set_Corners(i._corners & ~n)
    },
    get_Color: function () {
        return this._color
    },
    set_Color: function (n) {
        var t = this;
        n != t._color && (t._color = n, t._isDirty = !0, t.update(), t.raisePropertyChanged("Color"))
    },
    get_Radius: function () {
        return this._radius
    },
    set_Radius: function (n) {
        var t = this;
        n != t._radius && (t._radius = n, t._isDirty = !0, t.update(), t.raisePropertyChanged("Radius"))
    },
    get_Corners: function () {
        return this._corners
    },
    set_Corners: function (n) {
        var t = this;
        n != t._corners && (t._corners = n, t._isDirty = !0, t.update(), t.raisePropertyChanged("Corners"))
    },
    get_BorderColor: function () {
        return this._borderColor
    },
    set_BorderColor: function (n) {
        var t = this;
        n != t._borderColor && (t._borderColor = n, t._isDirty = !0, t.update(), t.raisePropertyChanged("BorderColor"))
    }
}, AjaxControlToolkit.RoundedCornersBehavior.registerClass("AjaxControlToolkit.RoundedCornersBehavior", AjaxControlToolkit.BehaviorBase), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.HorizontalSide = function () {
    throw Error.invalidOperation();
}, AjaxControlToolkit.HorizontalSide.prototype = {
    Left: 0,
    Center: 1,
    Right: 2
}, AjaxControlToolkit.HorizontalSide.registerEnum("AjaxControlToolkit.HorizontalSide", !1), AjaxControlToolkit.VerticalSide = function () {
    throw Error.invalidOperation();
}, AjaxControlToolkit.VerticalSide.prototype = {
    Top: 0,
    Middle: 1,
    Bottom: 2
}, AjaxControlToolkit.VerticalSide.registerEnum("AjaxControlToolkit.VerticalSide", !1), AjaxControlToolkit.AlwaysVisibleControlBehavior = function (n) {
    var t = this;
    AjaxControlToolkit.AlwaysVisibleControlBehavior.initializeBase(t, [n]), t._horizontalOffset = 0, t._horizontalSide = AjaxControlToolkit.HorizontalSide.Left, t._verticalOffset = 0, t._verticalSide = AjaxControlToolkit.VerticalSide.Top, t._scrollEffectDuration = .1, t._repositionHandler = null, t._animate = !1, t._animation = null
}, AjaxControlToolkit.AlwaysVisibleControlBehavior.prototype = {
    initialize: function () {
        var n = this,
            t;
        if (AjaxControlToolkit.AlwaysVisibleControlBehavior.callBaseMethod(n, "initialize"), t = n.get_element(), !t) throw Error.invalidOperation(AjaxControlToolkit.Resources.AlwaysVisible_ElementRequired);
        n._repositionHandler = Function.createDelegate(n, n._reposition), Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 7 && (n._animate = !0), n._animate ? (n._animation = new AjaxControlToolkit.Animation.MoveAnimation(t, n._scrollEffectDuration, 25, 0, 0, !1, "px"), t.style.position = "absolute") : t.style.position = "fixed", $addHandler(window, "resize", n._repositionHandler), n._animate && $addHandler(window, "scroll", n._repositionHandler), n._reposition()
    },
    dispose: function () {
        var n = this;
        n._repositionHandler && (n._animate && $removeHandler(window, "scroll", n._repositionHandler), $removeHandler(window, "resize", n._repositionHandler), n._repositionHandler = null), n._animation && (n._animation.dispose(), n._animation = null), AjaxControlToolkit.AlwaysVisibleControlBehavior.callBaseMethod(n, "dispose")
    },
    _reposition: function () {
        var n = this,
            r = n.get_element(),
            t, i;
        if (r) {
            n.raiseRepositioning(Sys.EventArgs.Empty), t = 0, i = 0, n._animate && (document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollLeft, i = document.documentElement.scrollTop) : (t = document.body.scrollLeft, i = document.body.scrollTop));
            var u = $common.getClientBounds(),
                f = u.width,
                e = u.height;
            switch (n._horizontalSide) {
                case AjaxControlToolkit.HorizontalSide.Center:
                    t = Math.max(0, Math.floor(t + f / 2 - r.offsetWidth / 2 - n._horizontalOffset));
                    break;
                case AjaxControlToolkit.HorizontalSide.Right:
                    t = Math.max(0, t + f - r.offsetWidth - n._horizontalOffset);
                    break;
                case AjaxControlToolkit.HorizontalSide.Left:
                default:
                    t += n._horizontalOffset
            }
            switch (n._verticalSide) {
                case AjaxControlToolkit.VerticalSide.Middle:
                    i = Math.max(0, Math.floor(i + e / 2 - r.offsetHeight / 2 - n._verticalOffset));
                    break;
                case AjaxControlToolkit.VerticalSide.Bottom:
                    i = Math.max(0, i + e - r.offsetHeight - n._verticalOffset);
                    break;
                case AjaxControlToolkit.VerticalSide.Top:
                default:
                    i += n._verticalOffset
            }
            n._animate && n._animation ? (n._animation.stop(), n._animation.set_horizontal(t), n._animation.set_vertical(i), n._animation.play()) : (r.style.left = t + "px", r.style.top = i + "px"), n.raiseRepositioned(Sys.EventArgs.Empty)
        }
    },
    get_HorizontalOffset: function () {
        return this._horizontalOffset
    },
    set_HorizontalOffset: function (n) {
        var t = this;
        t._horizontalOffset != n && (t._horizontalOffset = n, t._reposition(), t.raisePropertyChanged("HorizontalOffset"))
    },
    get_HorizontalSide: function () {
        return this._horizontalSide
    },
    set_HorizontalSide: function (n) {
        var t = this;
        t._horizontalSide != n && (t._horizontalSide = n, t._reposition(), t.raisePropertyChanged("HorizontalSide"))
    },
    get_VerticalOffset: function () {
        return this._verticalOffset
    },
    set_VerticalOffset: function (n) {
        var t = this;
        t._verticalOffset != n && (t._verticalOffset = n, t._reposition(), t.raisePropertyChanged("VerticalOffset"))
    },
    get_VerticalSide: function () {
        return this._verticalSide
    },
    set_VerticalSide: function (n) {
        var t = this;
        t._verticalSide != n && (t._verticalSide = n, t._reposition(), t.raisePropertyChanged("VerticalSide"))
    },
    get_ScrollEffectDuration: function () {
        return this._scrollEffectDuration
    },
    set_ScrollEffectDuration: function (n) {
        var t = this;
        t._scrollEffectDuration != n && (t._scrollEffectDuration = n, t._animation && t._animation.set_duration(n), t.raisePropertyChanged("ScrollEffectDuration"))
    },
    get_useAnimation: function () {
        return this._animate
    },
    set_useAnimation: function (n) {
        n |= Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 7, this._animate != n && (this._animate = n, this.raisePropertyChanged("useAnimation"))
    },
    add_repositioning: function (n) {
        this.get_events().addHandler("repositioning", n)
    },
    remove_repositioning: function (n) {
        this.get_events().removeHandler("repositioning", n)
    },
    raiseRepositioning: function (n) {
        var t = this.get_events().getHandler("repositioning");
        t && t(this, n)
    },
    add_repositioned: function (n) {
        this.get_events().addHandler("repositioned", n)
    },
    remove_repositioned: function (n) {
        this.get_events().removeHandler("repositioned", n)
    },
    raiseRepositioned: function (n) {
        var t = this.get_events().getHandler("repositioned");
        t && t(this, n)
    }
}, AjaxControlToolkit.AlwaysVisibleControlBehavior.registerClass("AjaxControlToolkit.AlwaysVisibleControlBehavior", AjaxControlToolkit.BehaviorBase), typeof Sys != "undefined" && Sys.Application.notifyScriptLoaded();