Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.TimeSpan = function () {
    var n = this;
    if (arguments.length == 0) n._ctor$0.apply(n, arguments);
    else if (arguments.length == 1) n._ctor$1.apply(n, arguments);
    else if (arguments.length == 3) n._ctor$2.apply(n, arguments);
    else if (arguments.length == 4) n._ctor$3.apply(n, arguments);
    else if (arguments.length == 5) n._ctor$4.apply(n, arguments);
    else throw Error.parameterCount();
}, AjaxControlToolkit.TimeSpan.prototype = {
    _ctor$0: function () {
        this._ticks = 0
    },
    _ctor$1: function (n) {
        this._ctor$0(), this._ticks = n
    },
    _ctor$2: function (n, t, i) {
        this._ctor$0(), this._ticks = n * AjaxControlToolkit.TimeSpan.TicksPerHour + t * AjaxControlToolkit.TimeSpan.TicksPerMinute + i * AjaxControlToolkit.TimeSpan.TicksPerSecond
    },
    _ctor$3: function (n, t, i, r) {
        this._ctor$0(), this._ticks = n * AjaxControlToolkit.TimeSpan.TicksPerDay + t * AjaxControlToolkit.TimeSpan.TicksPerHour + i * AjaxControlToolkit.TimeSpan.TicksPerMinute + r * AjaxControlToolkit.TimeSpan.TicksPerSecond
    },
    _ctor$4: function (n, t, i, r, u) {
        this._ctor$0(), this._ticks = n * AjaxControlToolkit.TimeSpan.TicksPerDay + t * AjaxControlToolkit.TimeSpan.TicksPerHour + i * AjaxControlToolkit.TimeSpan.TicksPerMinute + r * AjaxControlToolkit.TimeSpan.TicksPerSecond + u * AjaxControlToolkit.TimeSpan.TicksPerMillisecond
    },
    getDays: function () {
        return Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerDay)
    },
    getHours: function () {
        return Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerHour) % 24
    },
    getMinutes: function () {
        return Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerMinute) % 60
    },
    getSeconds: function () {
        return Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerSecond) % 60
    },
    getMilliseconds: function () {
        return Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerMillisecond) % 1e3
    },
    getDuration: function () {
        return new AjaxControlToolkit.TimeSpan(Math.abs(this._ticks))
    },
    getTicks: function () {
        return this._ticks
    },
    getTotalDays: function () {
        Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerDay)
    },
    getTotalHours: function () {
        return Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerHour)
    },
    getTotalMinutes: function () {
        return Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerMinute)
    },
    getTotalSeconds: function () {
        return Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerSecond)
    },
    getTotalMilliseconds: function () {
        return Math.floor(this._ticks / AjaxControlToolkit.TimeSpan.TicksPerMillisecond)
    },
    add: function (n) {
        return new AjaxControlToolkit.TimeSpan(this._ticks + n.getTicks())
    },
    subtract: function (n) {
        return new AjaxControlToolkit.TimeSpan(this._ticks - n.getTicks())
    },
    negate: function () {
        return new AjaxControlToolkit.TimeSpan(-this._ticks)
    },
    equals: function (n) {
        return this._ticks == n.getTicks()
    },
    compareTo: function (n) {
        return this._ticks > n.getTicks() ? 1 : this._ticks < n.getTicks() ? -1 : 0
    },
    toString: function () {
        return this.format("F")
    },
    format: function (n) {
        var u, t;
        if (n || (n = "F"), n.length == 1) switch (n) {
            case "t":
                n = AjaxControlToolkit.TimeSpan.ShortTimeSpanPattern;
                break;
            case "T":
                n = AjaxControlToolkit.TimeSpan.LongTimeSpanPattern;
                break;
            case "F":
                n = AjaxControlToolkit.TimeSpan.FullTimeSpanPattern;
                break;
            default:
                throw Error.createError(String.format(AjaxControlToolkit.Resources.Common_DateTime_InvalidTimeSpan, n));
        }
        var f = /dd|d|hh|h|mm|m|ss|s|nnnn|nnn|nn|n/g,
            i = new Sys.StringBuilder,
            r = this._ticks;
        for (r < 0 && (i.append("-"), r = -r); ;) {
            if (u = f.lastIndex, t = f.exec(n), i.append(n.slice(u, t ? t.index : n.length)), !t) break;
            switch (t[0]) {
                case "dd":
                case "d":
                    i.append($common.padLeft(Math.floor(r / AjaxControlToolkit.TimeSpan.TicksPerDay, t[0].length, "0")));
                    break;
                case "hh":
                case "h":
                    i.append($common.padLeft(Math.floor(r / AjaxControlToolkit.TimeSpan.TicksPerHour) % 24, t[0].length, "0"));
                    break;
                case "mm":
                case "m":
                    i.append($common.padLeft(Math.floor(r / AjaxControlToolkit.TimeSpan.TicksPerMinute) % 60, t[0].length, "0"));
                    break;
                case "ss":
                case "s":
                    i.append($common.padLeft(Math.floor(r / AjaxControlToolkit.TimeSpan.TicksPerSecond) % 60, t[0].length, "0"));
                    break;
                case "nnnn":
                case "nnn":
                case "nn":
                case "n":
                    i.append($common.padRight(Math.floor(r / AjaxControlToolkit.TimeSpan.TicksPerMillisecond) % 1e3, t[0].length, "0", !0));
                    break;
                default:
                    Sys.Debug.assert(!1)
            }
        }
        return i.toString()
    }
}, AjaxControlToolkit.TimeSpan.parse = function (n) {
    var r = ".",
        t = n.split(":"),
        h = 0,
        s = 0,
        o = 0,
        u = 0,
        f = 0,
        e = 0,
        i;
    switch (t.length) {
        case 1:
            t[0].indexOf(r) != -1 ? (i = t[0].split(r), u = parseInt(i[0]), f = parseInt(i[1])) : e = parseInt(t[0]);
            break;
        case 2:
            s = parseInt(t[0]), o = parseInt(t[1]);
            break;
        case 3:
            s = parseInt(t[0]), o = parseInt(t[1]), t[2].indexOf(r) != -1 ? (i = t[2].split(r), u = parseInt(i[0]), f = parseInt(i[1])) : u = parseInt(t[2]);
            break;
        case 4:
            h = parseInt(t[0]), s = parseInt(t[1]), o = parseInt(t[2]), t[3].indexOf(r) != -1 ? (i = t[3].split(r), u = parseInt(i[0]), f = parseInt(i[1])) : u = parseInt(t[3])
    }
    if (e += h * AjaxControlToolkit.TimeSpan.TicksPerDay + s * AjaxControlToolkit.TimeSpan.TicksPerHour + o * AjaxControlToolkit.TimeSpan.TicksPerMinute + u * AjaxControlToolkit.TimeSpan.TicksPerSecond + f * AjaxControlToolkit.TimeSpan.TicksPerMillisecond, !isNaN(e)) return new AjaxControlToolkit.TimeSpan(e);
    throw Error.create(AjaxControlToolkit.Resources.Common_DateTime_InvalidFormat);
}, AjaxControlToolkit.TimeSpan.fromTicks = function (n) {
    return new AjaxControlToolkit.TimeSpan(n)
}, AjaxControlToolkit.TimeSpan.fromDays = function (n) {
    return new AjaxControlToolkit.TimeSpan(n * AjaxControlToolkit.TimeSpan.TicksPerDay)
}, AjaxControlToolkit.TimeSpan.fromHours = function (n) {
    return new AjaxControlToolkit.TimeSpan(n * AjaxControlToolkit.TimeSpan.TicksPerHour)
}, AjaxControlToolkit.TimeSpan.fromMinutes = function (n) {
    return new AjaxControlToolkit.TimeSpan(n * AjaxControlToolkit.TimeSpan.TicksPerMinute)
}, AjaxControlToolkit.TimeSpan.fromSeconds = function () {
    return new AjaxControlToolkit.TimeSpan(minutes * AjaxControlToolkit.TimeSpan.TicksPerSecond)
}, AjaxControlToolkit.TimeSpan.fromMilliseconds = function () {
    return new AjaxControlToolkit.TimeSpan(minutes * AjaxControlToolkit.TimeSpan.TicksPerMillisecond)
}, AjaxControlToolkit.TimeSpan.TicksPerDay = 864e9, AjaxControlToolkit.TimeSpan.TicksPerHour = 36e9, AjaxControlToolkit.TimeSpan.TicksPerMinute = 6e8, AjaxControlToolkit.TimeSpan.TicksPerSecond = 1e7, AjaxControlToolkit.TimeSpan.TicksPerMillisecond = 1e4, AjaxControlToolkit.TimeSpan.FullTimeSpanPattern = "dd:hh:mm:ss.nnnn", AjaxControlToolkit.TimeSpan.ShortTimeSpanPattern = "hh:mm", AjaxControlToolkit.TimeSpan.LongTimeSpanPattern = "hh:mm:ss", Date.prototype.getTimeOfDay = function () {
    var n = this;
    return new AjaxControlToolkit.TimeSpan(0, n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())
}, Date.prototype.getDateOnly = function () {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate())
}, Date.prototype.add = function (n) {
    return new Date(this.getTime() + n.getTotalMilliseconds())
}, Date.prototype.subtract = function (n) {
    return this.add(n.negate())
}, Date.prototype.getTicks = function () {
    return this.getTime() * AjaxControlToolkit.TimeSpan.TicksPerMillisecond
}, AjaxControlToolkit.FirstDayOfWeek = function () { }, AjaxControlToolkit.FirstDayOfWeek.prototype = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Default: 7
}, AjaxControlToolkit.FirstDayOfWeek.registerEnum("AjaxControlToolkit.FirstDayOfWeek"), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.DeferredOperation = function (n, t, i) {
    var u = null,
        r = this;
    r._delay = n, r._context = t, r._callback = i, r._completeCallback = u, r._errorCallback = u, r._timer = u, r._callArgs = u, r._isComplete = !1, r._completedSynchronously = !1, r._asyncResult = u, r._exception = u, r._throwExceptions = !0, r._oncomplete$delegate = Function.createDelegate(r, r._oncomplete), r.post = Function.createDelegate(r, r.post)
}, AjaxControlToolkit.DeferredOperation.prototype = {
    get_isPending: function () {
        return this._timer != null
    },
    get_isComplete: function () {
        return this._isComplete
    },
    get_completedSynchronously: function () {
        return this._completedSynchronously
    },
    get_exception: function () {
        return this._exception
    },
    get_throwExceptions: function () {
        return this._throwExceptions
    },
    set_throwExceptions: function (n) {
        this._throwExceptions = n
    },
    get_delay: function () {
        return this._delay
    },
    set_delay: function (n) {
        this._delay = n
    },
    post: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this.beginPost(t, null, null)
    },
    beginPost: function (n, t, i) {
        var r = this;
        if (r.cancel(), r._callArgs = Array.clone(n || []), r._completeCallback = t, r._errorCallback = i, r._delay == -1) try {
            r._oncomplete()
        } finally {
                r._completedSynchronously = !0
            } else r._timer = setTimeout(r._oncomplete$delegate, r._delay)
    },
    cancel: function () {
        var t = null,
            n = this;
        n._timer && (clearTimeout(n._timer), n._timer = t), n._callArgs = t, n._isComplete = !1, n._asyncResult = t, n._completeCallback = t, n._errorCallback = t, n._exception = t, n._completedSynchronously = !1
    },
    call: function () {
        for (var n = this, i = [], t = 0; t < arguments.length; t++) i[t] = arguments[t];
        n.cancel(), n._callArgs = i, n._completeCallback = null, n._errorCallback = null;
        try {
            n._oncomplete()
        } finally {
            n._completedSynchronously = !0
        }
        if (n._exception) throw n._exception;
        return n._asyncResult
    },
    complete: function () {
        var n = this;
        if (n._timer) {
            try {
                n._oncomplete()
            } finally {
                n._completedSynchronously = !0
            }
            return n._asyncResult
        }
        if (n._isComplete) return n._asyncResult
    },
    _oncomplete: function () {
        var n = this,
            r = n._callArgs,
            i = n._completeCallback,
            t = n._errorCallback;
        n.cancel();
        try {
            n._asyncResult = r ? n._callback.apply(n._context, r) : n._callback.call(n._context), n._isComplete = !0, n._completedSynchronously = !1, i && i(n)
        } catch (u) {
            if (n._isComplete = !0, n._completedSynchronously = !1, n._exception = u, t && t(n)) return;
            if (n._throwExceptions) throw u;
        }
    }
}, AjaxControlToolkit.DeferredOperation.registerClass("AjaxControlToolkit.DeferredOperation"), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.AutoCompleteBehavior = function (n) {
    var r = !1,
        i = null,
        t = this;
    AjaxControlToolkit.AutoCompleteBehavior.initializeBase(t, [n]), t._servicePath = i, t._serviceMethod = i, t._contextKey = i, t._useContextKey = r, t._minimumPrefixLength = 3, t._completionSetCount = 10, t._completionInterval = 1e3, t._completionListElementID = i, t._completionListElement = i, t._textColor = "windowtext", t._textBackground = "window", t._popupBehavior = i, t._popupBehaviorHiddenHandler = i, t._onShowJson = i, t._onHideJson = i, t._timer = i, t._cache = i, t._currentPrefix = i, t._selectIndex = -1, t._focusHandler = i, t._blurHandler = i, t._bodyClickHandler = i, t._completionListBlurHandler = i, t._keyDownHandler = i, t._mouseDownHandler = i, t._mouseUpHandler = i, t._mouseOverHandler = i, t._tickHandler = i, t._enableCaching = !0, t._flyoutHasFocus = r, t._textBoxHasFocus = r, t._completionListCssClass = i, t._completionListItemCssClass = i, t._highlightedItemCssClass = i, t._delimiterCharacters = i, t._firstRowSelected = r, t._showOnlyCurrentWordInCompletionListItem = r, t._webRequest = i
}, AjaxControlToolkit.AutoCompleteBehavior.prototype = {
    initialize: function () {
        var i = null,
            n = this,
            t;
        AjaxControlToolkit.AutoCompleteBehavior.callBaseMethod(n, "initialize"), $common.prepareHiddenElementForATDeviceUpdate(), n._popupBehaviorHiddenHandler = Function.createDelegate(n, n._popupHidden), n._tickHandler = Function.createDelegate(n, n._onTimerTick), n._focusHandler = Function.createDelegate(n, n._onGotFocus), n._blurHandler = Function.createDelegate(n, n._onLostFocus), n._keyDownHandler = Function.createDelegate(n, n._onKeyDown), n._mouseDownHandler = Function.createDelegate(n, n._onListMouseDown), n._mouseUpHandler = Function.createDelegate(n, n._onListMouseUp), n._mouseOverHandler = Function.createDelegate(n, n._onListMouseOver), n._completionListBlurHandler = Function.createDelegate(n, n._onCompletionListBlur), n._bodyClickHandler = Function.createDelegate(n, n._onCompletionListBlur), n._timer = new Sys.Timer, n.initializeTimer(n._timer), t = n.get_element(), n.initializeTextBox(t), n._completionListElementID !== i && (n._completionListElement = $get(n._completionListElementID)), n._completionListElement == i && (n._completionListElement = document.createElement("ul"), n._completionListElement.id = n.get_id() + "_completionListElem", Sys.Browser.agent === Sys.Browser.Safari ? document.body.appendChild(n._completionListElement) : t.parentNode.insertBefore(n._completionListElement, t.nextSibling)), n.initializeCompletionList(n._completionListElement), n._popupBehavior = $create(AjaxControlToolkit.PopupBehavior, {
            id: n.get_id() + "PopupBehavior",
            parentElement: t,
            positioningMode: AjaxControlToolkit.PositioningMode.BottomLeft
        }, i, i, n._completionListElement), n._popupBehavior.add_hidden(n._popupBehaviorHiddenHandler), n._onShowJson && n._popupBehavior.set_onShow(n._onShowJson), n._onHideJson && n._popupBehavior.set_onHide(n._onHideJson)
    },
    dispose: function () {
        var t = null,
            n = this,
            i;
        n._onShowJson = t, n._onHideJson = t, n._popupBehavior && (n._popupBehaviorHiddenHandler && n._popupBehavior.remove_hidden(n._popupBehaviorHiddenHandler), n._popupBehavior.dispose(), n._popupBehavior = t), n._timer && (n._timer.dispose(), n._timer = t), i = n.get_element(), i && ($removeHandler(i, "focus", n._focusHandler), $removeHandler(i, "blur", n._blurHandler), $removeHandler(i, "keydown", n._keyDownHandler), $removeHandler(n._completionListElement, "blur", n._completionListBlurHandler), $removeHandler(n._completionListElement, "mousedown", n._mouseDownHandler), $removeHandler(n._completionListElement, "mouseup", n._mouseUpHandler), $removeHandler(n._completionListElement, "mouseover", n._mouseOverHandler)), n._bodyClickHandler && ($removeHandler(document.body, "click", n._bodyClickHandler), n._bodyClickHandler = t), n._popupBehaviorHiddenHandler = t, n._tickHandler = t, n._focusHandler = t, n._blurHandler = t, n._keyDownHandler = t, n._completionListBlurHandler = t, n._mouseDownHandler = t, n._mouseUpHandler = t, n._mouseOverHandler = t, AjaxControlToolkit.AutoCompleteBehavior.callBaseMethod(n, "dispose")
    },
    initializeTimer: function (n) {
        n.set_interval(this._completionInterval), n.add_tick(this._tickHandler)
    },
    initializeTextBox: function (n) {
        n.autocomplete = "off", $addHandler(n, "focus", this._focusHandler), $addHandler(n, "blur", this._blurHandler), $addHandler(n, "keydown", this._keyDownHandler)
    },
    initializeCompletionList: function (n) {
        var i = this,
            t;
        i._completionListCssClass ? Sys.UI.DomElement.addCssClass(n, i._completionListCssClass) : (t = n.style, t.textAlign = "left", t.visibility = "hidden", t.cursor = "default", t.listStyle = "none", t.padding = "0px", t.margin = "0px! important", Sys.Browser.agent === Sys.Browser.Safari ? (t.border = "solid 1px gray", t.backgroundColor = "white", t.color = "black") : (t.border = "solid 1px buttonshadow", t.backgroundColor = i._textBackground, t.color = i._textColor)), $addHandler(n, "mousedown", i._mouseDownHandler), $addHandler(n, "mouseup", i._mouseUpHandler), $addHandler(n, "mouseover", i._mouseOverHandler), $addHandler(n, "blur", i._completionListBlurHandler), $addHandler(document.body, "click", i._bodyClickHandler)
    },
    _currentCompletionWord: function () {
        var t = this,
            f = t.get_element(),
            r = f.value,
            u = r,
            n, i;
        return t.get_isMultiWord() && (n = t._getCurrentWordStartIndex(), i = t._getCurrentWordEndIndex(n), u = i <= n ? r.substring(n) : r.substring(n, i)), u
    },
    _getCursorIndex: function () {
        return this.get_element().selectionStart
    },
    _getCurrentWordStartIndex: function () {
        for (var t = this, u, e = t.get_element(), f = e.value.substring(0, t._getCursorIndex()), n = 0, i = -1, r = 0; r < t._delimiterCharacters.length; ++r) u = f.lastIndexOf(t._delimiterCharacters.charAt(r)), u > i && (i = u);
        return n = i, n >= t._getCursorIndex() && (n = 0), n < 0 ? 0 : n + 1
    },
    _getCurrentWordEndIndex: function (n) {
        for (var i, u = this.get_element(), f = u.value.substring(n), t = 0, r = 0; r < this._delimiterCharacters.length; ++r) i = f.indexOf(this._delimiterCharacters.charAt(r)), i > 0 && (i < t || t == 0) && (t = i);
        return t <= 0 ? u.value.length : t + n
    },
    get_isMultiWord: function () {
        return this._delimiterCharacters != null && this._delimiterCharacters != ""
    },
    _getTextWithInsertedWord: function (n) {
        var i = this,
            e = n,
            h = 0,
            s = i.get_element(),
            f = s.value;
        if (i.get_isMultiWord()) {
            var t = i._getCurrentWordStartIndex(),
                u = i._getCurrentWordEndIndex(t),
                r = "",
                o = "";
            t > 0 && (r = f.substring(0, t)), u > t && (o = f.substring(u)), e = r + n + o
        }
        return e
    },
    _hideCompletionList: function () {
        var n = new Sys.CancelEventArgs;
        (this.raiseHiding(n), n.get_cancel()) || this.hidePopup()
    },
    showPopup: function () {
        return
    },
    hidePopup: function () {
        this._popupBehavior ? this._popupBehavior.hide() : this._popupHidden()
    },
    _popupHidden: function () {
        var n = this;
        n._completionListElement.innerHTML = "", n._selectIndex = -1, n._flyoutHasFocus = !1, n.raiseHidden(Sys.EventArgs.Empty)
    },
    _highlightItem: function (n) {
        for (var i = this, t, u = i._completionListElement.childNodes, r = 0; r < u.length; r++) t = u[r], t._highlighted && (i._completionListItemCssClass ? (Sys.UI.DomElement.removeCssClass(t, i._highlightedItemCssClass), Sys.UI.DomElement.addCssClass(t, i._completionListItemCssClass)) : Sys.Browser.agent === Sys.Browser.Safari ? (t.style.backgroundColor = "white", t.style.color = "black") : (t.style.backgroundColor = i._textBackground, t.style.color = i._textColor), i.raiseItemOut(new AjaxControlToolkit.AutoCompleteItemEventArgs(t, t.firstChild.nodeValue, t._value)));
        i._highlightedItemCssClass ? (Sys.UI.DomElement.removeCssClass(n, i._completionListItemCssClass), Sys.UI.DomElement.addCssClass(n, i._highlightedItemCssClass)) : Sys.Browser.agent === Sys.Browser.Safari ? n.style.backgroundColor = "lemonchiffon" : (n.style.backgroundColor = "highlight", n.style.color = "highlighttext"), n._highlighted = !0, i.raiseItemOver(new AjaxControlToolkit.AutoCompleteItemEventArgs(n, n.firstChild.nodeValue, n._value))
    },
    _onCompletionListBlur: function () {
        this._hideCompletionList()
    },
    _onListMouseDown: function (n) {
        return
    },
    _onListMouseUp: function () {
        try {
            this.get_element().focus()
        } catch (n) { }
    },
    _onListMouseOver: function (n) {
        return
    },
    _onGotFocus: function () {
        var n = this;
        n._textBoxHasFocus = !0, n._flyoutHasFocus && n._hideCompletionList(), n._minimumPrefixLength == 0 && !n.get_element().value && n._timer.set_enabled(!0)
    },
    _onKeyDown: function (n) {
        return
    },
    _handleScroll: function (n, t) {
        return
    },
    _handleFlyoutFocus: function () {
        var n = this;
        n._textBoxHasFocus || n._flyoutHasFocus || (n._webRequest && (n._webRequest.get_executor().abort(), n._webRequest = null), n._hideCompletionList())
    },
    _onLostFocus: function () {
        return
    },
    _onMethodComplete: function (n, t) {
        return
    },
    _onMethodFailed: function () {
        return
    },
    _onTimerTick: function (n, t) {
        return
    },
    _setText: function (n) {
        return
    },
    _update: function (n, t, i) {
        return
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
    get_completionInterval: function () {
        return this._completionInterval
    },
    set_completionInterval: function (n) {
        this._completionInterval != n && (this._completionInterval = n, this.raisePropertyChanged("completionInterval"))
    },
    get_completionList: function () {
        return this._completionListElement
    },
    set_completionList: function (n) {
        this._completionListElement != n && (this._completionListElement = n, this.raisePropertyChanged("completionList"))
    },
    get_completionSetCount: function () {
        return this._completionSetCount
    },
    set_completionSetCount: function (n) {
        this._completionSetCount != n && (this._completionSetCount = n, this.raisePropertyChanged("completionSetCount"))
    },
    get_minimumPrefixLength: function () {
        return this._minimumPrefixLength
    },
    set_minimumPrefixLength: function (n) {
        this._minimumPrefixLength != n && (this._minimumPrefixLength = n, this.raisePropertyChanged("minimumPrefixLength"))
    },
    get_serviceMethod: function () {
        return this._serviceMethod
    },
    set_serviceMethod: function (n) {
        this._serviceMethod != n && (this._serviceMethod = n, this.raisePropertyChanged("serviceMethod"))
    },
    get_servicePath: function () {
        return this._servicePath
    },
    set_servicePath: function (n) {
        this._servicePath != n && (this._servicePath = n, this.raisePropertyChanged("servicePath"))
    },
    get_contextKey: function () {
        return this._contextKey
    },
    set_contextKey: function (n) {
        var t = this;
        t._contextKey != n && (t._contextKey = n, t.set_useContextKey(!0), t.raisePropertyChanged("contextKey"))
    },
    get_useContextKey: function () {
        return this._useContextKey
    },
    set_useContextKey: function (n) {
        this._useContextKey != n && (this._useContextKey = n, this.raisePropertyChanged("useContextKey"))
    },
    get_enableCaching: function () {
        return this._enableCaching
    },
    set_enableCaching: function (n) {
        this._enableCaching != n && (this._enableCaching = n, this.raisePropertyChanged("enableCaching"))
    },
    get_completionListElementID: function () {
        return this._completionListElementID
    },
    set_completionListElementID: function (n) {
        this._completionListElementID != n && (this._completionListElementID = n, this.raisePropertyChanged("completionListElementID"))
    },
    get_completionListCssClass: function () {
        return this._completionListCssClass
    },
    set_completionListCssClass: function (n) {
        this._completionListCssClass != n && (this._completionListCssClass = n, this.raisePropertyChanged("completionListCssClass"))
    },
    get_completionListItemCssClass: function () {
        return this._completionListItemCssClass
    },
    set_completionListItemCssClass: function (n) {
        this._completionListItemCssClass != n && (this._completionListItemCssClass = n, this.raisePropertyChanged("completionListItemCssClass"))
    },
    get_highlightedItemCssClass: function () {
        return this._highlightedItemCssClass
    },
    set_highlightedItemCssClass: function (n) {
        this._highlightedItemCssClass != n && (this._highlightedItemCssClass = n, this.raisePropertyChanged("highlightedItemCssClass"))
    },
    get_delimiterCharacters: function () {
        return this._delimiterCharacters
    },
    set_delimiterCharacters: function (n) {
        this._delimiterCharacters != n && (this._delimiterCharacters = n, this.raisePropertyChanged("delimiterCharacters"))
    },
    get_firstRowSelected: function () {
        return this._firstRowSelected
    },
    set_firstRowSelected: function (n) {
        this._firstRowSelected != n && (this._firstRowSelected = n, this.raisePropertyChanged("firstRowSelected"))
    },
    get_showOnlyCurrentWordInCompletionListItem: function () {
        return this._showOnlyCurrentWordInCompletionListItem
    },
    set_showOnlyCurrentWordInCompletionListItem: function (n) {
        this._showOnlyCurrentWordInCompletionListItem != n && (this._showOnlyCurrentWordInCompletionListItem = n, this.raisePropertyChanged("showOnlyCurrentWordInCompletionListItem"))
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
    },
    add_itemSelected: function (n) {
        this.get_events().addHandler("itemSelected", n)
    },
    remove_itemSelected: function (n) {
        this.get_events().removeHandler("itemSelected", n)
    },
    raiseItemSelected: function (n) {
        var t = this.get_events().getHandler("itemSelected");
        t && t(this, n)
    },
    add_itemOver: function (n) {
        this.get_events().addHandler("itemOver", n)
    },
    remove_itemOver: function (n) {
        this.get_events().removeHandler("itemOver", n)
    },
    raiseItemOver: function (n) {
        var t = this.get_events().getHandler("itemOver");
        t && t(this, n)
    },
    add_itemOut: function (n) {
        this.get_events().addHandler("itemOut", n)
    },
    remove_itemOut: function (n) {
        this.get_events().removeHandler("itemOut", n)
    },
    raiseItemOut: function (n) {
        var t = this.get_events().getHandler("itemOut");
        t && t(this, n)
    }
}, AjaxControlToolkit.AutoCompleteBehavior.registerClass("AjaxControlToolkit.AutoCompleteBehavior", AjaxControlToolkit.BehaviorBase), AjaxControlToolkit.AutoCompleteBehavior.descriptor = {
    properties: [{
        name: "completionInterval",
        type: Number
    }, {
        name: "completionList",
        isDomElement: !0
    }, {
        name: "completionListElementID",
        type: String
    }, {
        name: "completionSetCount",
        type: Number
    }, {
        name: "minimumPrefixLength",
        type: Number
    }, {
        name: "serviceMethod",
        type: String
    }, {
        name: "servicePath",
        type: String
    }, {
        name: "enableCaching",
        type: Boolean
    }, {
        name: "showOnlyCurrentWordInCompletionListItem",
        type: Boolean
    }]
}, AjaxControlToolkit.AutoCompleteItemEventArgs = function (n, t, i) {
    var r = this;
    AjaxControlToolkit.AutoCompleteItemEventArgs.initializeBase(r), r._item = n, r._text = t, r._value = i !== undefined ? i : null
}, AjaxControlToolkit.AutoCompleteItemEventArgs.prototype = {
    get_item: function () {
        return this._item
    },
    set_item: function (n) {
        this._item = n
    },
    get_text: function () {
        return this._text
    },
    set_text: function (n) {
        this._text = n
    },
    get_value: function () {
        return this._value
    },
    set_value: function (n) {
        this._value = n
    }
}, AjaxControlToolkit.AutoCompleteItemEventArgs.registerClass("AjaxControlToolkit.AutoCompleteItemEventArgs", Sys.EventArgs), Type.registerNamespace("Web"), Web || (Web = {}), Web.Command = {}, Web.Command.Asc = function (n) {
    return n.charCodeAt(0)
}, Web.Command.Chr = function (n) {
    return String.fromCharCode(n)
}, Web.Command.Len = function (n) {
    return n.length
}, Web.Command.UCase = function (n) {
    return n.toUpperCase()
}, Web.Command.LCase = function (n) {
    return n.toLowerCase()
}, Web.Command.Trim = function (n) {
    return n.replace(/^\s+|\s+$/g, "")
}, Web.Command.LTrim = function (n) {
    return n.replace(/^\s+/, "")
}, Web.Command.RTrim = function (n) {
    return n.replace(/\s+$/, "")
}, Web.Command.Mid = function (n, t, i) {
    return n.substr(t - 1, i)
}, Web.Command.Left = function (n, t) {
    return Web.Command.Mid(n, 1, t)
}, Web.Command.Right = function (n, t) {
    return Web.Command.Mid(n, n.length - t + 1, t)
}, Web.Command.Val = function (n) {
    return Web.Command.Trim(n) == "-" ? 0 : parseFloat(n.replace(/[^\d\x2D\x2E]/g, ""))
}, Web.Command.Replicate = function (n, t) {
    for (var i = "", r = 0; r < t; r++) i = i + n;
    return i
}, Web.Command.Space = function (n, t) {
    return Web.Command.Replicate(" ", t)
}, Web.Command.Str = function (n, t) {
    if (t == 0) return String(n);
    if (n == 0) return "0." + Web.Command.Replicate(0, t);
    var u = Math.pow(10, t),
        i = String(Math.round(n * u)),
        r = i.length - t;
    return r < 0 ? n.toFixed(t) : i.substring(0, r) == "" ? "0." + i.substring(r) : i.substring(0, r) + "." + i.substring(r)
}, Web.Command.InStr = function (n, t) {
    return n.indexOf(t) + 1
}, Web.Command.GetWordCount = function (n) {
    return n.split(",").length
}, Web.Command.GetWordNum = function (n, t) {
    return n.split(",")[t - 1]
}, Web.Command.SetSelectionStart = function (n, t) {
    Web.Command.SetSelectionRange(n, t, t)
}, Web.Command.GetSelectionLength = function (n) {
    return Web.Command.GetSelectionEnd(n) - Web.Command.GetSelectionStart(n)
}, Web.Command.SetSelectionRange = function (n, t, i) {
    var u = "character",
        r;
    n.setSelectionRange ? n.setSelectionRange(t, i) : n.createTextRange && (r = n.createTextRange(), r.collapse(!0), r.moveEnd(u, i), r.moveStart(u, t), r.select())
}, Web.Command.GetSelectionStart = function (n) {
    if (n.selectionStart == null && n.createTextRange) {
        var t = document.selection.createRange().duplicate();
        return (t.moveEnd("character", n.value.length), t.text == "") ? n.value.length : n.value.lastIndexOf(t.text)
    }
    return n.selectionStart
}, Web.Command.GetSelectionEnd = function (n) {
    if (n.selectionEnd == null && n.createTextRange) {
        var t = document.selection.createRange().duplicate();
        return t.moveStart("character", -n.value.length), t.text.length
    }
    return n.selectionEnd
}, Web.Command.NumberFormat = function (n, t) {
    for (var o = "0", r, e, u, f, c, l, s, h = "", i = t.length; i > 0 && !(Web.Command.Mid(t, i, 1) == "#") && !(Web.Command.Mid(t, i, 1) == o);) h = Web.Command.Mid(t, i, 1) + h, i = i - 1;
    for (t = Web.Command.Left(t, i), s = "", i = 1; i < t.length && Web.Command.Mid(t, i, 1) !== "#" && Web.Command.Mid(t, i, 1) !== o;) s = s + Web.Command.Mid(t, i, 1), i = i + 1;
    if ((t = Web.Command.Right(t, t.length - i + 1), n == 0 && t.indexOf(o) < 0 && h == "" && s == "") || n == 0 && t.indexOf(".") > 0 && h == "" && s == "" && t.indexOf("0.") < 0) return "";
    if (u = t.indexOf(".") + 1, u > 0 && (u = t.length - u), f = Web.Command.Str(n, u), u > 0 && (u = u + 1), r = Web.Command.Right(f, u), u > 0) {
        for (i = 1; Web.Command.Right(r, 1) == o && Web.Command.Mid(t, t.length - i + 1, 1) == "#";) r = Web.Command.Left(r, r.length - 1), i = i + 1;
        r == "." && (r = "")
    }
    for (i = u + 1, e = u + 1; i <= t.length && e <= f.length;) c = Web.Command.Mid(t, t.length - i + 1, 1), l = Web.Command.Mid(f, f.length - e + 1, 1), c !== "#" && c !== o ? e == f.length && n < 0 ? i = i + 1 : (r = c + r, i = i + 1) : (r = l + r, i = i + 1, e = e + 1);
    for (e <= f.length && (r = Web.Command.Left(f, f.length - e + 1) + r); i <= t.length && Web.Command.Mid(t, i - e + 1, 1) == o;) r = o + r, i = i + 1;
    return s + r + h
}, Web.Command.GetDatePart = function (n, t, i) {
    var u = "00",
        e = Web.Command.InStr(t, i),
        o = i.length,
        r = e > 0 ? Web.Command.Trim(Web.Command.Mid(n, e, o)) : "",
        f = new Date;
    if (r == "") switch (i) {
        case "yyyy":
            r = Web.Command.Str(f.getFullYear(), 0);
            break;
        case "MM":
            r = Web.Command.NumberFormat(f.getMonth() + 1, u);
            break;
        case "dd":
            r = Web.Command.NumberFormat(f.getDate(), u);
            break;
        case "HH":
            r = u;
            break;
        case "hh":
            r = u;
            break;
        case "mm":
            r = u;
            break;
        case "ss":
            r = u
    } else r = Web.Command.NumberFormat(Web.Command.Val(r), Web.Command.Replicate("0", o));
    return r
}, Web.Command.Nothing = function () {
    return !1
}, Web.Command.IsDateTime = function (n, t, i, r, u, f) {
    return Web.Command.IsDate(n, t, i) && Web.Command.IsTime(r, u, f)
}, Web.Command.IsDate = function (n, t, i) {
    return i > 0 && t > 0 && n > 0 && (i <= [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t] || i == 29 && t == 2 && n % 4 == 0 && (n % 100 > 0 || n % 400 == 0))
}, Web.Command.IsTime = function (n, t, i) {
    return n < 24 && t < 60 && i < 60
}, Web.Command.SetNumericFormatValue = function (n, t, i) {
    if (Web.Command.Val(t) == 0) {
        n.value = Web.Command.Trim(Web.Command.NumberFormat(0, i));
        return
    }
    n.value = t.indexOf("-") >= 0 ? "-" + Web.Command.Trim(Web.Command.NumberFormat(Web.Command.Val(t.replace("-", "")), i)) : Web.Command.Trim(Web.Command.NumberFormat(Web.Command.Val(t), i))
}, Web.Command.isNumericNormalChar = function (n, t) {
    var u = null,
        f = "undefined",
        r = !1,
        i = !0;
    if (t < 32) i = r;
    else if (Sys.Browser.agent != Sys.Browser.InternetExplorer || n.type == "keydown") switch (t) {
        case 33:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 34:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 35:
            i = r;
            break;
        case 36:
            i = r;
            break;
        case 37:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 38:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 39:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 40:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r)
    }
    return i
}, Web.Command.isMaskNormalChar = function (n, t) {
    var u = null,
        f = "undefined",
        r = !1,
        i = !0;
    if (t < 32) i = r;
    else if (Sys.Browser.agent != Sys.Browser.InternetExplorer || n.type == "keydown") switch (t) {
        case 33:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 34:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 35:
            i = r;
            break;
        case 36:
            i = r;
            break;
        case 37:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 38:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 39:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 40:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r)
    }
    return i
}, Web.Command.isDateNormalChar = function (n, t) {
    var u = null,
        f = "undefined",
        r = !1,
        i = !0;
    if (t < 32) i = r;
    else if (Sys.Browser.agent != Sys.Browser.InternetExplorer || n.type == "keydown") switch (t) {
        case 33:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 34:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 35:
            i = r;
            break;
        case 36:
            i = r;
            break;
        case 37:
        case 38:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r);
            break;
        case 39:
        case 40:
            typeof n.rawEvent.which != f && n.rawEvent.which != u && n.rawEvent.which == 0 && (i = r)
    }
    return i
}, Web.Command.KeyCode = function (n) {
    return s = 0, n.keyIdentifier && (n.charCode == 63272 ? s = 46 : n.charCode == 63302 ? s = 45 : n.charCode == 63233 ? s = 40 : n.charCode == 63235 ? s = 39 : n.charCode == 63232 ? s = 38 : n.charCode == 63234 ? s = 37 : n.charCode == 63273 ? s = 36 : n.charCode == 63275 ? s = 35 : n.charCode == 63277 ? s = 34 : n.charCode == 63276 ? s = 33 : n.charCode == 3 && (s = 13)), s == 0 && n.charCode && (s = n.charCode), s == 0 && (s = n.keyCode), s
}, Web.Command.CancelEvent = function (n) {
    var t = "undefined";
    typeof n.returnValue != t && (n.returnValue = !1), typeof n.cancelBubble != t && (n.cancelBubble = !0), typeof n.preventDefault != t && n.preventDefault(), typeof n.stopPropagation != t && n.stopPropagation()
}, Web.Command.onNumericKeyDown = function (n, t, i) {
    var r = i.keyCode;
    if (i.ctrlKey && r == 86) {
        Web.Command.CancelEvent(i);
        return
    }
    if (r == 46 || r == 127 || r == 8) {
        if (Web.Command.CancelEvent(i), r == 46 || r == 127) Web.Command.onNumericKeyDelete(n, t);
        if (r == 8) Web.Command.onNumericKeyBackSpace(n, t)
    }
}, Web.Command.onNumericKeyPress = function (n, t, i) {
    var r = Web.Command.KeyCode(i);
    (Web.Command.isNumericNormalChar(i, r) && Web.Command.CancelEvent(i), r > 47 && r < 58 || r == 46 && (Sys.Browser.agent == Sys.Browser.InternetExplorer || i.rawEvent.which != 0) || r == 45) && Web.Command.NumericKeyPress(n, t, i, r)
}, Web.Command.NumericKeyPress = function (n, t, i, r) {
    var f, r, o, e, u;
    if (f = Web.Command.GetSelectionStart(n), u = n.value, o = u.indexOf("."), String.fromCharCode(r) == "-") {
        Web.Command.onNumericKeySign(n, t);
        return
    }
    if (String.fromCharCode(r) == ".") {
        Web.Command.onNumericKeyPoint(n, t);
        return
    }
    if (o >= 0 && f >= o + 1) {
        Web.Command.onNumericKeyPrecision(n, t, String.fromCharCode(r));
        return
    }
    if (Web.Command.Trim(u).length >= Web.Command.Trim(t).length) {
        if (e = this.Mid(u, f + 1, 1).charCodeAt(0), e < 48 || e > 57) return;
        Web.Command.onNumericKeyInsert(n, t, String.fromCharCode(r));
        return
    }
    Web.Command.onNumericKeyChar(n, t, String.fromCharCode(r))
}, Web.Command.onNumericKeyDelete = function (n, t) {
    var r, u, i, f, e;
    if (r = Web.Command.GetSelectionStart(n), i = n.value, u = Web.Command.GetSelectionLength(n), f = i.indexOf("."), e = i.length, u == e) {
        n.value = Web.Command.NumberFormat(0, t), Web.Command.SetSelectionStart(n, 1);
        return
    }
    if (r != f || u != 0 || !(f >= 0)) {
        if (e == 1 && f < 0) {
            Web.Command.SetNumericFormatValue(n, "0", t);
            return
        }
        i = f >= 0 && r + u >= f + 1 && r <= f ? Web.Command.Left(i, r) + "." + Web.Command.Right(i, i.length - r - u) : u == 0 ? Web.Command.Left(i, r) + Web.Command.Right(i, i.length - r - 1) : Web.Command.Left(i, r) + Web.Command.Right(i, i.length - r - u), Web.Command.SetNumericFormatValue(n, i, t), Web.Command.SetSelectionStart(n, r + u + n.value.length - e + (u == 0 && e > n.value.length ? 1 : 0))
    }
}, Web.Command.onNumericKeyBackSpace = function (n, t) {
    var i, r, u, f;
    if (i = Web.Command.GetSelectionStart(n) - 1, r = n.value, u = r.indexOf("."), f = r.length, i == u && u >= 0) {
        Web.Command.SetSelectionStart(n, i);
        return
    }
    if (f == 1 && u < 0) {
        Web.Command.SetNumericFormatValue(n, "0", t);
        return
    }
    r = u >= 0 && i >= u + 1 && i <= u ? Web.Command.Left(r, i) + "." + Web.Command.Right(r, r.length - i) : Web.Command.Left(r, i) + Web.Command.Right(r, r.length - i - 1), Web.Command.SetNumericFormatValue(n, r, t), u >= 0 && i > u ? Web.Command.SetSelectionStart(n, i + n.value.length - f) : Web.Command.SetSelectionStart(n, i + n.value.length - f + 1)
}, Web.Command.onNumericKeySign = function (n) {
    var r, t, i;
    (r = Web.Command.GetSelectionStart(n), t = n.value, i = t.length, Web.Command.Val(t) != 0) && (n.value = t.indexOf("-") < 0 ? "-" + Web.Command.Trim(t) : n.value.replace("-", ""), Web.Command.SetSelectionStart(n, r + n.value.length - i))
}, Web.Command.onNumericKeyPoint = function (n) {
    var i, t;
    (i = n.value, t = i.indexOf("."), t < 0) || Web.Command.SetSelectionStart(n, t + 1)
}, Web.Command.onNumericKeyPrecision = function (n, t, i) {
    var r, e, u, o, f;
    (r = Web.Command.GetSelectionStart(n), u = n.value, e = Web.Command.GetSelectionLength(n), o = u.indexOf("."), f = u.length, r != f) && (f - r > 1 ? (Web.Command.SetNumericFormatValue(n, Web.Command.Trim(Web.Command.Left(u, r)) + i + Web.Command.Trim(Web.Command.Right(u, u.length - r - 1 - (e == 0 ? 0 : e - 1))), t), Web.Command.SetSelectionStart(n, r + 1)) : (n.value = Web.Command.Trim(Web.Command.Left(u, r)) + i, Web.Command.SetSelectionStart(n, r)))
}, Web.Command.onNumericKeyChar = function (n, t, i) {
    var u, f, r, e, o;
    u = Web.Command.GetSelectionStart(n), r = n.value, f = Web.Command.GetSelectionLength(n), e = r.indexOf("."), o = r.length, r = e >= 0 && u + f >= e + 1 ? Web.Command.Left(r, u) + i + "." + Web.Command.Right(r, r.length - u - f) : Web.Command.Left(r, u) + i + Web.Command.Right(r, r.length - u - f), Web.Command.SetNumericFormatValue(n, r, t), e >= 0 && u + f >= e + 1 ? Web.Command.SetSelectionStart(n, n.value.indexOf(".")) : Web.Command.SetSelectionStart(n, u + f + n.value.length - o)
}, Web.Command.onNumericKeyInsert = function (n, t, i) {
    var u, f, r, e, o, s;
    u = Web.Command.GetSelectionStart(n), r = n.value, f = Web.Command.GetSelectionLength(n), e = r.indexOf("."), o = r.length, r = e >= 0 && u + f >= e + 1 ? Web.Command.Left(r, u) + i + "." + Web.Command.Right(r, r.length - u - f) : f == 0 ? Web.Command.Left(r, u == o ? u - 1 : u) + i + Web.Command.Right(r, r.length - u - 1) : Web.Command.Left(r, u == o ? u - 1 : u) + i + Web.Command.Right(r, r.length - u - f), Web.Command.SetNumericFormatValue(n, r, t), e >= 0 && u + f >= e + 1 ? Web.Command.SetSelectionStart(n, n.value.indexOf(".")) : (s = u + f + n.value.length - o + 1, s > n.value.length ? Web.Command.SetSelectionStart(n, n.value.length) : Web.Command.SetSelectionStart(n, s))
}, Web.Command.onMaskKeyDown = function (n, t, i) {
    var r = i.keyCode;
    if (Web.Command.InStr(t, ",") != 0 && (i.ctrlKey && r == 86 || r == 127 || r == 46 && (Sys.Browser.agent == Sys.Browser.InternetExplorer || i.rawEvent.which != 0) || r == 8)) {
        Web.Command.CancelEvent(i);
        return
    }
}, Web.Command.onMaskKeyPress = function (n, t, i) {
    var f = Web.Command.KeyCode(i),
        u, o, s, r, e;
    if (t.toUpperCase() != "X") {
        if (String.fromCharCode(f) == ",") {
            Web.Command.CancelEvent(i);
            return
        }
        if (Web.Command.InStr(t, ",") == 0) {
            Web.Command.InStr(t, String.fromCharCode(f)) < 0 && Web.Command.CancelEvent(i);
            return
        }
        if (u = String.fromCharCode(f).toUpperCase(), Web.Command.isMaskNormalChar(i, f) && Web.Command.CancelEvent(i), u == " ") {
            if (o = n.value, s = Web.Command.GetWordCount(t), o == "") {
                n.value = Web.Command.GetWordNum(t, 1);
                return
            }
            for (r = 1; !(Web.Command.Trim(Web.Command.GetWordNum(t, r)) == Web.Command.Trim(o)) && r <= s;) r = r + 1;
            r = r == s ? 1 : r + 1, e = Web.Command.GetWordNum(t, r), n.value = Web.Command.Trim(e) == "" ? " " : Web.Command.Trim(e), Web.Command.SetSelectionStart(n, 0);
            return
        }
        if (t.indexOf(u) >= 0) {
            n.value = u, Web.Command.SetSelectionStart(n, 0);
            return
        }
    }
}, Web.Command.onDateKeyDown = function (n, t, i) {
    var r = i.keyCode,
        u;
    if (i.ctrlKey && r == 86) {
        Web.Command.CancelEvent(i);
        return
    }
    if (r == 46 || r == 127 || r == 8 || r == 37 && !i.shiftKey || r == 39 && !i.shiftKey) {
        if ((r == 37 || r == 39) && (u = Web.Command.GetSelectionStart(n), r == 37 && u > 0 && (u -= 1), r == 39 && u < t.length && (u += 1), Web.Command.Mid(Web.Command.DateBlankFormat(t), u + 1, 1) == " ")) return;
        Web.Command.CancelEvent(i), (r == 46 || r == 127) && Web.Command.DateKeyPressDel(n, t), r == 8 && Web.Command.DateKeyPressBackSpace(n, t), r == 37 && Web.Command.DateKeyPressLeft(n, t), r == 39 && Web.Command.DateKeyPressRight(n, t)
    }
}, Web.Command.onDateKeyPress = function (n, t, i) {
    var r = Web.Command.KeyCode(i);
    (Web.Command.isDateNormalChar(i, r) && Web.Command.CancelEvent(i), r > 47 && r < 58 && r != 37 && r != 39) && Web.Command.DateKeyPress(n, t, String.fromCharCode(r))
}, Web.Command.DateKeyPressLeft = function (n, t) {
    if (1) {
        var i = Web.Command.DateCursor(Web.Command.GetSelectionStart(n) - 1, t, -1);
        Web.Command.SetSelectionStart(n, i)
    }
}, Web.Command.DateKeyPressRight = function (n, t) {
    if (1) {
        var i = Web.Command.DateCursor(Web.Command.GetSelectionStart(n) + 1, t, 1);
        Web.Command.SetSelectionStart(n, i)
    }
}, Web.Command.DateKeyPressBackSpace = function (n, t) {
    var i, r, u, f, e;
    if (i = Web.Command.GetSelectionStart(n), r = n.value, f = r.length, e = 1, i != 0) {
        if (i = i - 1, u = Web.Command.DateGetKeyCode(r, i + 1, t), (u < 48 || u > 57) && u != 32) {
            Web.Command.SetSelectionStart(n, i - 1);
            return
        }
        r = Web.Command.Left(r, i) + " " + Web.Command.Right(r, r.length - i - 1), n.value = r, i == f - 1 ? Web.Command.SetSelectionStart(n, i) : Web.Command.SetSelectionStart(n, Web.Command.DateCursor(i, t, 1))
    }
}, Web.Command.DateKeyPressDel = function (n, t) {
    var i, f, r, u, e, o;
    if (i = Web.Command.GetSelectionStart(n), r = n.value, f = Web.Command.GetSelectionLength(n), u = Web.Command.DateGetKeyCode(r, i + 1, t), e = r.length, o = 1, (u < 48 || u > 57) && f > 0 && (i += 1, f -= 1, o = 0), i != e) {
        if (f == 0) {
            if ((u < 48 || u > 57) && u != 32) {
                Web.Command.SetSelectionStart(n, i);
                return
            }
            r = Web.Command.Left(r, i) + " " + Web.Command.Right(r, r.length - i - 1)
        } else r = Web.Command.Left(r, i) + " " + Web.Command.Mid(Web.Command.DateBlankFormat(t), i + 2, f - 1) + Web.Command.Right(r, r.length - i - f);
        n.value = r, i == e - 1 ? Web.Command.SetSelectionStart(n, i) : Web.Command.SetSelectionStart(n, Web.Command.DateCursor(i, t, 1))
    }
}, Web.Command.DateKeyPress = function (n, t, i) {
    var r, f, u, e, h, s, o;
    if (r = Web.Command.GetSelectionStart(n), u = n.value, f = Web.Command.GetSelectionLength(n), e = Web.Command.DateGetKeyCode(u, r + 1, t), h = u.length, s = 1, o = !1, n.value == Web.Command.DateBlankFormat(t) && f == 10 && (o = !0), (e < 48 || e > 57) && f > 0 && (r += 1, f -= 1, s = 0), r != h) {
        if (f == 0) {
            if ((e < 48 || e > 57) && e != 32) {
                Web.Command.SetSelectionStart(n, r + (s == 1 ? 1 : 0));
                return
            }
            u = Web.Command.Left(u, r) + i + Web.Command.Right(u, u.length - r - 1)
        } else o && (r = 0, f = 10), u = Web.Command.Left(u, r) + i + Web.Command.Mid(Web.Command.DateBlankFormat(t), r + 2, f - 1) + Web.Command.Right(u, u.length - r - f);
        n.value = u, r == h - 1 ? Web.Command.SetSelectionStart(n, r) : Web.Command.SetSelectionStart(n, Web.Command.DateCursor(r + 1, t, 1))
    }
}, Web.Command.DateBlankFormat = function (n) {
    return n.replace(/y/gi, " ").replace(/M/gi, " ").replace(/d/gi, " ").replace(/h/gi, " ").replace(/s/gi, " ")
}, Web.Command.DateCursor = function (n, t, i) {
    return Web.Command.DateGetKeyCode(Web.Command.DateBlankFormat(t), n + 1, t) != 32 ? n + i : n
}, Web.Command.DateGetKeyCode = function (n, t, i) {
    return Web.Command.Mid(i, t, 1).charCodeAt(0) == 32 ? 0 : Web.Command.Mid(n, t, 1).charCodeAt(0)
}, Web.Command.onDateFocus = function (n) {
    n.setAttribute("text", n.value)
}, Web.Command.onDateBlur = function (n, t) {
    var c = Web.Command.DateBlankFormat(t),
        i, l, r, f, e, o, s, h, u, a, v;
    (u = n.getAttribute("text"), i = n.value, u != i) && c != i && (a = new Date, v = a.getFullYear(), r = Web.Command.GetDatePart(i, t, "yyyy"), Web.Command.Val(r) < 1e3 && (r = Web.Command.NumberFormat(parseInt(v / 1e3) * 1e3 + Web.Command.Val(r), "0000")), f = Web.Command.GetDatePart(i, t, "MM"), e = Web.Command.GetDatePart(i, t, "dd"), o = Web.Command.GetDatePart(i, t, "HH"), s = Web.Command.GetDatePart(i, t, "mm"), h = Web.Command.GetDatePart(i, t, "ss"), l = t.replace(/yyyy/gi, r).replace(/MM/g, f).replace(/dd/gi, e).replace(/HH/gi, o).replace(/mm/g, s).replace(/ss/gi, h), n.value = Web.Command.IsDateTime(Web.Command.Val(r), Web.Command.Val(f), Web.Command.Val(e), Web.Command.Val(o), Web.Command.Val(s), Web.Command.Val(h)) ? l : u ? u : c)
}, Web.Command.focus = function (n) {
    n.select(), n.focus()
}, Web.Command.setLabelText = function (n, t) {
    while (n.firstChild !== null) n.removeChild(n.firstChild);
    n.appendChild(document.createTextNode(t))
}, Web.Command.replaceAll = function (n, t, i) {
    for (var r = 0, u = ""; n.indexOf(t, r) != -1;) u += n.substring(r, n.indexOf(t, r)), u += i, r = n.indexOf(t, r) + t.length;
    return u += n.substring(r, n.length)
}, typeof Sys != "undefined" && Sys.Application.notifyScriptLoaded(), Type.registerNamespace("AI_ERP.AjaxControlExtender"), AI_ERP.AjaxControlExtender.MaskExtender = function (n) {
    var t = this,
        i;
    AI_ERP.AjaxControlExtender.MaskExtender.initializeBase(t, [n]), i = t.get_element(), t._format = "", t._keypressdown = null, t._keypressHandler = null, t._contextHandler = null
}, AI_ERP.AjaxControlExtender.MaskExtender.prototype = {
    initialize: function () {
        var n = this,
            t;
        AI_ERP.AjaxControlExtender.MaskExtender.callBaseMethod(n, "initialize"), t = n.get_element(), t.readOnly || (n._keypressdown = Function.createDelegate(n, n._onKeyPressdown), n._keypressHandler = Function.createDelegate(n, n._onKeyPress), n._contextHandler = Function.createDelegate(n, n._onContextMenu), n._focusHandler = Function.createDelegate(n, n._onFocus), n._blurHandler = Function.createDelegate(n, n._onBlur), $addHandler(t, "keydown", n._keypressdown), $addHandler(t, "keypress", n._keypressHandler), $addHandler(t, "focus", n._focusHandler), $addHandler(t, "blur", n._blurHandler), $addHandler(t, "contextmenu", n._contextHandler), n._format == "X" && (t.style.textTransform = "uppercase"), n._format == "x" && (t.style.textTransform = "lowercase"))
    },
    dispose: function () {
        var i = null,
            n = this,
            t = n.get_element();
        n._blurHandler && ($removeHandler(t, "blur", n._blurHandler), n._blurHandler = i), n._focusHandler && ($removeHandler(t, "focus", n._focusHandler), n._focusHandler = i), n._contextHandler && ($removeHandler(t, "contextmenu", n._contextHandler), n._contextHandler = i), n._keypressHandler && ($removeHandler(t, "keypress", n._keypressHandler), n._keypressHandler = i), n._keypressdown && ($removeHandler(t, "keydown", n._keypressdown), n._keypressdown = i), AI_ERP.AjaxControlExtender.MaskExtender.callBaseMethod(n, "dispose")
    },
    get_format: function () {
        return this._format
    },
    set_format: function (n) {
        this._format != n && (this._format = n)
    },
    _onKeyPressdown: function (n) {
        var i = this.get_element(),
            t = this._format;
        Web.Command.onMaskKeyDown(i, t, n)
    },
    _onKeyPress: function (n) {
        var i = this.get_element(),
            t = this._format;
        Web.Command.onMaskKeyPress(i, t, n)
    },
    _onFocus: function () { },
    _onBlur: function () { },
    _onContextMenu: function () {
        return Web.Command.Nothing()
    }
}, AI_ERP.AjaxControlExtender.MaskExtender.registerClass("AI_ERP.AjaxControlExtender.MaskExtender", Sys.UI.Control), typeof Sys != "undefined" && Sys.Application.notifyScriptLoaded(), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.CalendarBehavior = function (n) {
    var r = !1,
        i = null,
        t = this;
    AjaxControlToolkit.CalendarBehavior.initializeBase(t, [n]), t._textbox = AjaxControlToolkit.TextBoxWrapper.get_Wrapper(n), t._format = "d", t._todaysDateFormat = "MMMM d, yyyy", t._daysModeTitleFormat = "MMMM, yyyy", t._cssClass = "ajax__calendar", t._enabled = !0, t._animated = !0, t._buttonID = i, t._layoutRequested = 0, t._layoutSuspended = r, t._button = i, t._popupMouseDown = r, t._selectedDate = i, t._visibleDate = i, t._todaysDate = i, t._firstDayOfWeek = AjaxControlToolkit.FirstDayOfWeek.Default, t._firstPopUp = !0, t._container = i, t._popupDiv = i, t._header = i, t._prevArrow = i, t._nextArrow = i, t._title = i, t._body = i, t._today = i, t._days = i, t._daysTable = i, t._daysTableHeader = i, t._daysTableHeaderRow = i, t._daysBody = i, t._months = i, t._monthsTable = i, t._monthsBody = i, t._years = i, t._yearsTable = i, t._yearsBody = i, t._popupPosition = AjaxControlToolkit.CalendarPosition.BottomLeft, t._defaultView = AjaxControlToolkit.CalendarDefaultView.Days, t._popupBehavior = i, t._modeChangeAnimation = i, t._modeChangeMoveTopOrLeftAnimation = i, t._modeChangeMoveBottomOrRightAnimation = i, t._mode = "days", t._selectedDateChanging = r, t._isOpen = r, t._isAnimating = r, t._clearTime = r, t._width = 211, t._height = 213, t._modes = {
        days: i,
        months: i,
        years: i
    }, t._modeOrder = {
        days: 0,
        months: 1,
        years: 2
    }, t._hourOffsetForDst = 12, t._blur = new AjaxControlToolkit.DeferredOperation(1, t, t.blur), t._button$delegates = {
        click: Function.createDelegate(t, t._button_onclick),
        keypress: Function.createDelegate(t, t._button_onkeypress),
        blur: Function.createDelegate(t, t._button_onblur)
    }, t._element$delegates = {
        change: Function.createDelegate(t, t._element_onchange),
        keypress: Function.createDelegate(t, t._element_onkeypress),
        click: Function.createDelegate(t, t._element_onclick),
        focus: Function.createDelegate(t, t._element_onfocus),
        blur: Function.createDelegate(t, t._element_onblur)
    }, t._popup$delegates = {
        mousedown: Function.createDelegate(t, t._popup_onmousedown),
        mouseup: Function.createDelegate(t, t._popup_onmouseup),
        drag: Function.createDelegate(t, t._popup_onevent),
        dragstart: Function.createDelegate(t, t._popup_onevent),
        select: Function.createDelegate(t, t._popup_onevent)
    }, t._cell$delegates = {
        mouseover: Function.createDelegate(t, t._cell_onmouseover),
        mouseout: Function.createDelegate(t, t._cell_onmouseout),
        click: Function.createDelegate(t, t._cell_onclick)
    }
}, AjaxControlToolkit.CalendarBehavior.prototype = {
    get_clearTime: function () {
        return this._clearTime
    },
    set_clearTime: function (n) {
        this._clearTime != n && (this._clearTime = n, this.raisePropertyChanged("_clearTime"))
    },
    get_animated: function () {
        return this._animated
    },
    set_animated: function (n) {
        this._animated != n && (this._animated = n, this.raisePropertyChanged("animated"))
    },
    get_enabled: function () {
        return this._enabled
    },
    set_enabled: function (n) {
        this._enabled != n && (this._enabled = n, this.raisePropertyChanged("enabled"))
    },
    get_button: function () {
        return this._button
    },
    set_button: function (n) {
        var t = this;
        t._button != n && (t._button && t.get_isInitialized() && $common.removeHandlers(t._button, t._button$delegates), t._button = n, t._button && t.get_isInitialized() && $addHandlers(t._button, t._button$delegates), t.raisePropertyChanged("button"))
    },
    get_popupPosition: function () {
        return this._popupPosition
    },
    set_popupPosition: function (n) {
        this._popupPosition != n && (this._popupPosition = n, this.raisePropertyChanged("popupPosition"))
    },
    get_format: function () {
        return this._format
    },
    set_format: function (n) {
        this._format != n && (this._format = n, this.raisePropertyChanged("format"))
    },
    get_todaysDateFormat: function () {
        return this._todaysDateFormat
    },
    set_todaysDateFormat: function (n) {
        this._todaysDateFormat != n && (this._todaysDateFormat = n, this.raisePropertyChanged("todaysDateFormat"))
    },
    get_daysModeTitleFormat: function () {
        return this._daysModeTitleFormat
    },
    set_daysModeTitleFormat: function (n) {
        this._daysModeTitleFormat != n && (this._daysModeTitleFormat = n, this.raisePropertyChanged("daysModeTitleFormat"))
    },
    get_selectedDate: function () {
        var t = this,
            n;
        return t._selectedDate == null && (n = t._textbox.get_Value(), n && (n = t._parseTextValue(n), n && (t._selectedDate = n.getDateOnly()))), t._selectedDate
    },
    set_selectedDate: function (n) {
        var t = this,
            r, i;
        n && String.isInstanceOfType(n) && n.length != 0 && (n = new Date(n)), n && (n = n.getDateOnly()), t._selectedDate != n && (t._selectedDate = n, t._selectedDateChanging = !0, r = "", n && (r = n.localeFormat(t._format), t._clearTime || (i = t._textbox.get_Value(), i && (i = t._parseTextValue(i)), i && n != i.getDateOnly() && (r = n.add(i.getTimeOfDay()).localeFormat(t._format)))), r != t._textbox.get_Value() && (t._textbox.set_Value(r), t._fireChanged()), t._selectedDateChanging = !1, t.invalidate(), t.raisePropertyChanged("selectedDate"))
    },
    get_defaultView: function () {
        return this._defaultView
    },
    set_defaultView: function (n) {
        this._defaultView != n && (this._defaultView = n, this.raisePropertyChanged("defaultView"))
    },
    get_visibleDate: function () {
        return this._visibleDate
    },
    set_visibleDate: function (n) {
        var t = this;
        n && (n = n.getDateOnly()), t._visibleDate != n && (t._switchMonth(n, !t._isOpen), t.raisePropertyChanged("visibleDate"))
    },
    get_isOpen: function () {
        return this._isOpen
    },
    get_todaysDate: function () {
        return this._todaysDate != null ? this._todaysDate : (new Date).getDateOnly()
    },
    set_todaysDate: function (n) {
        var t = this;
        n && (n = n.getDateOnly()), t._todaysDate != n && (t._todaysDate = n, t.invalidate(), t.raisePropertyChanged("todaysDate"))
    },
    get_firstDayOfWeek: function () {
        return this._firstDayOfWeek
    },
    set_firstDayOfWeek: function (n) {
        var t = this;
        t._firstDayOfWeek != n && (t._firstDayOfWeek = n, t.invalidate(), t.raisePropertyChanged("firstDayOfWeek"))
    },
    get_cssClass: function () {
        return this._cssClass
    },
    set_cssClass: function (n) {
        var t = this;
        t._cssClass != n && (t._cssClass && t.get_isInitialized() && Sys.UI.DomElement.removeCssClass(t._container, t._cssClass), t._cssClass = n, t._cssClass && t.get_isInitialized() && Sys.UI.DomElement.addCssClass(t._container, t._cssClass), t.raisePropertyChanged("cssClass"))
    },
    get_todayButton: function () {
        return this._today
    },
    get_dayCell: function (n, t) {
        return this._daysBody ? this._daysBody.rows[n].cells[t].firstChild : null
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
    raiseShown: function () {
        var n = this.get_events().getHandler("shown");
        n && n(this, Sys.EventArgs.Empty)
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
    raiseHidden: function () {
        var n = this.get_events().getHandler("hidden");
        n && n(this, Sys.EventArgs.Empty)
    },
    add_dateSelectionChanged: function (n) {
        this.get_events().addHandler("dateSelectionChanged", n)
    },
    remove_dateSelectionChanged: function (n) {
        this.get_events().removeHandler("dateSelectionChanged", n)
    },
    raiseDateSelectionChanged: function () {
        var n = this.get_events().getHandler("dateSelectionChanged");
        n && n(this, Sys.EventArgs.Empty)
    },
    initialize: function () {
        var t = null,
            n = this,
            r, i;
        AjaxControlToolkit.CalendarBehavior.callBaseMethod(n, "initialize"), r = n.get_element(), $addHandlers(r, n._element$delegates), n._button && $addHandlers(n._button, n._button$delegates), n._modeChangeMoveTopOrLeftAnimation = new AjaxControlToolkit.Animation.LengthAnimation(t, t, t, "style", t, 0, 0, "px"), n._modeChangeMoveBottomOrRightAnimation = new AjaxControlToolkit.Animation.LengthAnimation(t, t, t, "style", t, 0, 0, "px"), n._modeChangeAnimation = new AjaxControlToolkit.Animation.ParallelAnimation(t, .25, t, [n._modeChangeMoveTopOrLeftAnimation, n._modeChangeMoveBottomOrRightAnimation]), i = n.get_selectedDate(), i && n.set_selectedDate(i)
    },
    dispose: function () {
        var t = null,
            n = this,
            r, u, i, f;
        if (n._popupBehavior && (n._popupBehavior.dispose(), n._popupBehavior = t), n._modes = t, n._modeOrder = t, n._modeChangeMoveTopOrLeftAnimation && (n._modeChangeMoveTopOrLeftAnimation.dispose(), n._modeChangeMoveTopOrLeftAnimation = t), n._modeChangeMoveBottomOrRightAnimation && (n._modeChangeMoveBottomOrRightAnimation.dispose(), n._modeChangeMoveBottomOrRightAnimation = t), n._modeChangeAnimation && (n._modeChangeAnimation.dispose(), n._modeChangeAnimation = t), n._container && (n._container.parentNode && n._container.parentNode.removeChild(n._container), n._container = t), n._popupDiv && ($common.removeHandlers(n._popupDiv, n._popup$delegates), n._popupDiv = t), n._prevArrow && ($common.removeHandlers(n._prevArrow, n._cell$delegates), n._prevArrow = t), n._nextArrow && ($common.removeHandlers(n._nextArrow, n._cell$delegates), n._nextArrow = t), n._title && ($common.removeHandlers(n._title, n._cell$delegates), n._title = t), n._today && ($common.removeHandlers(n._today, n._cell$delegates), n._today = t), n._button && ($common.removeHandlers(n._button, n._button$delegates), n._button = t), n._daysBody) {
            for (r = 0; r < n._daysBody.rows.length; r++)
                for (u = n._daysBody.rows[r], i = 0; i < u.cells.length; i++) $common.removeHandlers(u.cells[i].firstChild, n._cell$delegates);
            n._daysBody = t
        }
        if (n._monthsBody) {
            for (r = 0; r < n._monthsBody.rows.length; r++)
                for (u = n._monthsBody.rows[r], i = 0; i < u.cells.length; i++) $common.removeHandlers(u.cells[i].firstChild, n._cell$delegates);
            n._monthsBody = t
        }
        if (n._yearsBody) {
            for (r = 0; r < n._yearsBody.rows.length; r++)
                for (u = n._yearsBody.rows[r], i = 0; i < u.cells.length; i++) $common.removeHandlers(u.cells[i].firstChild, n._cell$delegates);
            n._yearsBody = t
        }
        f = n.get_element(), $common.removeHandlers(f, n._element$delegates), AjaxControlToolkit.CalendarBehavior.callBaseMethod(n, "dispose")
    },
    show: function () {
        var t = !0,
            n = this,
            i;
        if (n._ensureCalendar(), !n._isOpen) {
            if (i = new Sys.CancelEventArgs, n.raiseShowing(i), i.get_cancel()) return;
            if (n._isOpen = t, n._popupBehavior.show(), n._firstPopUp) {
                n._switchMonth(null, t);
                switch (n._defaultView) {
                    case AjaxControlToolkit.CalendarDefaultView.Months:
                        n._switchMode("months", t);
                        break;
                    case AjaxControlToolkit.CalendarDefaultView.Years:
                        n._switchMode("years", t)
                }
                n._firstPopUp = !1
            }
            n.raiseShown()
        }
    },
    hide: function () {
        var n = this,
            t;
        if (n._isOpen) {
            if (t = new Sys.CancelEventArgs, n.raiseHiding(t), t.get_cancel()) return;
            n._container && n._popupBehavior.hide(), n._isOpen = !1, n.raiseHidden(), n._popupMouseDown = !1
        }
    },
    focus: function () {
        this._button ? this._button.focus() : this.get_element().focus()
    },
    blur: function (n) {
        var t = this;
        n || Sys.Browser.agent !== Sys.Browser.Opera ? (!t._popupMouseDown && t.hide(), t._popupMouseDown = !1) : t._blur.post(!0)
    },
    suspendLayout: function () {
        this._layoutSuspended++
    },
    resumeLayout: function () {
        var n = this;
        n._layoutSuspended--, n._layoutSuspended <= 0 && (n._layoutSuspended = 0, n._layoutRequested && n._performLayout())
    },
    invalidate: function () {
        this._layoutSuspended > 0 ? this._layoutRequested = !0 : this._performLayout()
    },
    _buildCalendar: function () {
        var n = this,
            i = n.get_element(),
            t = n.get_id();
        n._container = $common.createElementFromTemplate({
            nodeName: "div",
            properties: {
                id: t + "_container"
            },
            cssClasses: [n._cssClass],
            visible: !1
        }, i.parentNode), n._popupDiv = $common.createElementFromTemplate({
            nodeName: "div",
            events: n._popup$delegates,
            properties: {
                id: t + "_popupDiv"
            },
            cssClasses: ["ajax__calendar_container"]
        }, n._container)
    },
    _buildHeader: function () {
        var t = "div",
            n = this,
            i = n.get_id(),
            f, u, r;
        n._header = $common.createElementFromTemplate({
            nodeName: t,
            properties: {
                id: i + "_header"
            },
            cssClasses: ["ajax__calendar_header"]
        }, n._popupDiv), f = $common.createElementFromTemplate({
            nodeName: t
        }, n._header), n._prevArrow = $common.createElementFromTemplate({
            nodeName: t,
            properties: {
                id: i + "_prevArrow",
                mode: "prev"
            },
            events: n._cell$delegates,
            cssClasses: ["ajax__calendar_prev"]
        }, f), u = $common.createElementFromTemplate({
            nodeName: t
        }, n._header), n._nextArrow = $common.createElementFromTemplate({
            nodeName: t,
            properties: {
                id: i + "_nextArrow",
                mode: "next"
            },
            events: n._cell$delegates,
            cssClasses: ["ajax__calendar_next"]
        }, u), r = $common.createElementFromTemplate({
            nodeName: t
        }, n._header), n._title = $common.createElementFromTemplate({
            nodeName: t,
            properties: {
                id: i + "_title",
                mode: "title"
            },
            events: n._cell$delegates,
            cssClasses: ["ajax__calendar_title"]
        }, r)
    },
    _buildBody: function () {
        var n = this;
        n._body = $common.createElementFromTemplate({
            nodeName: "div",
            properties: {
                id: n.get_id() + "_body"
            },
            cssClasses: ["ajax__calendar_body"]
        }, n._popupDiv), n._buildDays(), n._buildMonths(), n._buildYears()
    },
    _buildFooter: function () {
        var n = this,
            t = $common.createElementFromTemplate({
                nodeName: "div"
            }, n._popupDiv);
        n._today = $common.createElementFromTemplate({
            nodeName: "div",
            properties: {
                id: n.get_id() + "_today",
                mode: "today"
            },
            events: n._cell$delegates,
            cssClasses: ["ajax__calendar_footer", "ajax__calendar_today"]
        }, t)
    },
    _buildDays: function () {
        return
    },
    _buildMonths: function () {
        return
    },
    _buildYears: function () {
        var n = this,
            r = n.get_id(),
            i, f, t, u, e;
        for (n._years = $common.createElementFromTemplate({
            nodeName: "div",
            properties: {
                id: r + "_years"
            },
            cssClasses: ["ajax__calendar_years"],
            visible: !1
        }, n._body), n._modes.years = n._years, n._yearsTable = $common.createElementFromTemplate({
            nodeName: "table",
            properties: {
                id: r + "_yearsTable",
                cellPadding: 0,
                cellSpacing: 0,
                border: 0,
                style: {
                    margin: "auto"
                }
            }
        }, n._years), n._yearsBody = $common.createElementFromTemplate({
            nodeName: "tbody",
            properties: {
                id: r + "_yearsBody"
            }
        }, n._yearsTable), i = 0; i < 3; i++)
            for (f = $common.createElementFromTemplate({
                nodeName: "tr"
            }, n._yearsBody), t = 0; t < 4; t++) u = $common.createElementFromTemplate({
                nodeName: "td"
            }, f), e = $common.createElementFromTemplate({
                nodeName: "div",
                properties: {
                    id: r + "_year_" + i + "_" + t,
                    mode: "year",
                    year: i * 4 + t - 1
                },
                events: n._cell$delegates,
                cssClasses: ["ajax__calendar_year"]
            }, u)
    },
    _performLayout: function () {
        return
    },
    _ensureCalendar: function () {
        return
    },
    _fireChanged: function () {
        var t = this.get_element(),
            n;
        document.createEventObject ? t.fireEvent("onchange") : document.createEvent && (n = document.createEvent("HTMLEvents"), n.initEvent("change", !0, !0), t.dispatchEvent(n))
    },
    _switchMonth: function (n, t) {
        var e = "left",
            f = !0,
            i = this,
            o, u, r, s;
        i._isAnimating || (o = i._getEffectiveVisibleDate(), n && n.getFullYear() == o.getFullYear() && n.getMonth() == o.getMonth() && (t = f), i._animated && !t ? (i._isAnimating = f, u = i._modes[i._mode], r = u.cloneNode(f), i._body.appendChild(r), o > n ? ($common.setLocation(u, {
            x: -162,
            y: 0
        }), $common.setVisible(u, f), i._modeChangeMoveTopOrLeftAnimation.set_propertyKey(e), i._modeChangeMoveTopOrLeftAnimation.set_target(u), i._modeChangeMoveTopOrLeftAnimation.set_startValue(-i._width), i._modeChangeMoveTopOrLeftAnimation.set_endValue(0), $common.setLocation(r, {
            x: 0,
            y: 0
        }), $common.setVisible(r, f), i._modeChangeMoveBottomOrRightAnimation.set_propertyKey(e), i._modeChangeMoveBottomOrRightAnimation.set_target(r), i._modeChangeMoveBottomOrRightAnimation.set_startValue(0), i._modeChangeMoveBottomOrRightAnimation.set_endValue(i._width)) : ($common.setLocation(r, {
            x: 0,
            y: 0
        }), $common.setVisible(r, f), i._modeChangeMoveTopOrLeftAnimation.set_propertyKey(e), i._modeChangeMoveTopOrLeftAnimation.set_target(r), i._modeChangeMoveTopOrLeftAnimation.set_endValue(-i._width), i._modeChangeMoveTopOrLeftAnimation.set_startValue(0), $common.setLocation(u, {
            x: 162,
            y: 0
        }), $common.setVisible(u, f), i._modeChangeMoveBottomOrRightAnimation.set_propertyKey(e), i._modeChangeMoveBottomOrRightAnimation.set_target(u), i._modeChangeMoveBottomOrRightAnimation.set_endValue(0), i._modeChangeMoveBottomOrRightAnimation.set_startValue(i._width)), i._visibleDate = n, i.invalidate(), s = Function.createDelegate(i, function () {
            this._body.removeChild(r), r = null, this._isAnimating = !1, this._modeChangeAnimation.remove_ended(s)
        }), i._modeChangeAnimation.add_ended(s), i._modeChangeAnimation.play()) : (i._visibleDate = n, i.invalidate()))
    },
    _switchMode: function (n, t) {
        var e = "top",
            f = !0,
            i = this,
            o;
        if (!i._isAnimating && i._mode != n) {
            var s = i._modeOrder[i._mode] < i._modeOrder[n],
                u = i._modes[i._mode],
                r = i._modes[n];
            i._mode = n, i._animated && !t ? (i._isAnimating = f, i.invalidate(), s ? ($common.setLocation(r, {
                x: 0,
                y: -i._height
            }), $common.setVisible(r, f), i._modeChangeMoveTopOrLeftAnimation.set_propertyKey(e), i._modeChangeMoveTopOrLeftAnimation.set_target(r), i._modeChangeMoveTopOrLeftAnimation.set_startValue(-i._height), i._modeChangeMoveTopOrLeftAnimation.set_endValue(0), $common.setLocation(u, {
                x: 0,
                y: 0
            }), $common.setVisible(u, f), i._modeChangeMoveBottomOrRightAnimation.set_propertyKey(e), i._modeChangeMoveBottomOrRightAnimation.set_target(u), i._modeChangeMoveBottomOrRightAnimation.set_startValue(0), i._modeChangeMoveBottomOrRightAnimation.set_endValue(i._height)) : ($common.setLocation(u, {
                x: 0,
                y: 0
            }), $common.setVisible(u, f), i._modeChangeMoveTopOrLeftAnimation.set_propertyKey(e), i._modeChangeMoveTopOrLeftAnimation.set_target(u), i._modeChangeMoveTopOrLeftAnimation.set_endValue(-i._height), i._modeChangeMoveTopOrLeftAnimation.set_startValue(0), $common.setLocation(r, {
                x: 0,
                y: 213
            }), $common.setVisible(r, f), i._modeChangeMoveBottomOrRightAnimation.set_propertyKey(e), i._modeChangeMoveBottomOrRightAnimation.set_target(r), i._modeChangeMoveBottomOrRightAnimation.set_endValue(0), i._modeChangeMoveBottomOrRightAnimation.set_startValue(i._height)), o = Function.createDelegate(i, function () {
                this._isAnimating = !1, this._modeChangeAnimation.remove_ended(o)
            }), i._modeChangeAnimation.add_ended(o), i._modeChangeAnimation.play()) : (i._mode = n, $common.setVisible(u, !1), i.invalidate(), $common.setVisible(r, f), $common.setLocation(r, {
                x: 0,
                y: 0
            }))
        }
    },
    _isSelected: function (n, t) {
        var r = !1,
            i = this.get_selectedDate();
        if (!i) return r;
        switch (t) {
            case "d":
                if (n.getDate() != i.getDate()) return r;
            case "M":
                if (n.getMonth() != i.getMonth()) return r;
            case "y":
                if (n.getFullYear() != i.getFullYear()) return r
        }
        return !0
    },
    _isOther: function (n, t) {
        var r = this._getEffectiveVisibleDate(),
            i;
        switch (t) {
            case "d":
                return n.getFullYear() != r.getFullYear() || n.getMonth() != r.getMonth();
            case "M":
                return !1;
            case "y":
                return i = Math.floor(r.getFullYear() / 10) * 10, n.getFullYear() < i || i + 10 <= n.getFullYear()
        }
        return !1
    },
    _getCssClass: function (n, t) {
        return this._isSelected(n, t) ? "ajax__calendar_active" : this._isOther(n, t) ? "ajax__calendar_other" : ""
    },
    _getEffectiveVisibleDate: function () {
        var t = this,
            n = t.get_visibleDate();
        return n == null && (n = t.get_selectedDate()), n == null && (n = t.get_todaysDate()), new Date(n.getFullYear(), n.getMonth(), 1, t._hourOffsetForDst)
    },
    _getFirstDayOfWeek: function () {
        return this.get_firstDayOfWeek() != AjaxControlToolkit.FirstDayOfWeek.Default ? this.get_firstDayOfWeek() : Sys.CultureInfo.CurrentCulture.dateTimeFormat.FirstDayOfWeek
    },
    _parseTextValue: function (n) {
        var t = null;
        return n && (t = Date.parseLocale(n, this.get_format())), isNaN(t) && (t = null), t
    },
    _element_onfocus: function () { },
    _element_onblur: function () {
        this._enabled && !this._button && this.blur()
    },
    _element_onchange: function () {
        var n = this,
            t;
        n._selectedDateChanging || (t = n._parseTextValue(n._textbox.get_Value()), t && (t = t.getDateOnly()), n._selectedDate = t, n._isOpen && n._switchMonth(n._selectedDate, n._selectedDate == null))
    },
    _element_onkeypress: function (n) {
        this._enabled && (this._button || n.charCode != Sys.UI.Key.esc || (n.stopPropagation(), n.preventDefault(), this.hide()))
    },
    _element_onclick: function () { },
    _popup_onevent: function (n) {
        n.stopPropagation(), n.preventDefault()
    },
    _popup_onmousedown: function () {
        this._popupMouseDown = !0
    },
    _popup_onmouseup: function () {
        var n = this;
        Sys.Browser.agent === Sys.Browser.Opera && n._blur.get_isPending() && n._blur.cancel(), n._popupMouseDown = !1, n.focus()
    },
    _cell_onmouseover: function (n) {
        var f = "ajax__calendar_hover",
            i, r, t, u;
        if (n.stopPropagation(), Sys.Browser.agent === Sys.Browser.Safari)
            for (i = 0; i < this._daysBody.rows.length; i++)
                for (r = this._daysBody.rows[i], t = 0; t < r.cells.length; t++) Sys.UI.DomElement.removeCssClass(r.cells[t].firstChild.parentNode, f);
        u = n.target, Sys.UI.DomElement.addCssClass(u.parentNode, f)
    },
    _cell_onmouseout: function (n) {
        n.stopPropagation();
        var t = n.target;
        Sys.UI.DomElement.removeCssClass(t.parentNode, "ajax__calendar_hover")
    },
    _cell_onclick: function (n) {
        var r = "months",
            f = "days",
            t = this,
            i, u;
        if (n.stopPropagation(), n.preventDefault(), t._enabled) {
            i = n.target, u = t._getEffectiveVisibleDate(), Sys.UI.DomElement.removeCssClass(i.parentNode, "ajax__calendar_hover");
            switch (i.mode) {
                case "prev":
                case "next":
                    t._switchMonth(i.date);
                    break;
                case "title":
                    switch (t._mode) {
                        case f:
                            t._switchMode(r);
                            break;
                        case r:
                            t._switchMode("years")
                    }
                    break;
                case "month":
                    i.month == u.getMonth() ? t._switchMode(f) : (t._visibleDate = i.date, t._switchMode(f));
                    break;
                case "year":
                    i.date.getFullYear() == u.getFullYear() ? t._switchMode(r) : (t._visibleDate = i.date, t._switchMode(r));
                    break;
                case "day":
                    t.set_selectedDate(i.date), t._switchMonth(i.date), t._blur.post(!0), t.raiseDateSelectionChanged();
                    break;
                case "today":
                    t.set_selectedDate(i.date), t._switchMonth(i.date), t._blur.post(!0), t.raiseDateSelectionChanged()
            }
        }
    },
    _button_onclick: function (n) {
        var t = this;
        (n.preventDefault(), n.stopPropagation(), t._enabled) && (t._isOpen ? t.hide() : t.show(), t.focus(), t._popupMouseDown = !1)
    },
    _button_onblur: function () {
        var n = this;
        n._enabled && (!n._popupMouseDown && n.hide(), n._popupMouseDown = !1)
    },
    _button_onkeypress: function (n) {
        this._enabled && (n.charCode == Sys.UI.Key.esc && (n.stopPropagation(), n.preventDefault(), this.hide()), this._popupMouseDown = !1)
    }
}, AjaxControlToolkit.CalendarBehavior.registerClass("AjaxControlToolkit.CalendarBehavior", AjaxControlToolkit.BehaviorBase), AjaxControlToolkit.CalendarPosition = function () {
    throw Error.invalidOperation();
}, AjaxControlToolkit.CalendarPosition.prototype = {
    BottomLeft: 0,
    BottomRight: 1,
    TopLeft: 2,
    TopRight: 3,
    Right: 4,
    Left: 5
}, AjaxControlToolkit.CalendarPosition.registerEnum("AjaxControlToolkit.CalendarPosition"), AjaxControlToolkit.CalendarDefaultView = function () {
    throw Error.invalidOperation();
}, AjaxControlToolkit.CalendarDefaultView.prototype = {
    Days: 0,
    Months: 1,
    Years: 2
}, AjaxControlToolkit.CalendarDefaultView.registerEnum("AjaxControlToolkit.CalendarDefaultView"), Type.registerNamespace("AI_ERP.AjaxControlExtender"), AI_ERP.AjaxControlExtender.NumericExtender = function (n) {
    var i = null,
        t = this,
        r;
    AI_ERP.AjaxControlExtender.NumericExtender.initializeBase(t, [n]), r = t.get_element(), t._format = "", t._valueString = i, t._textbox = AjaxControlToolkit.TextBoxWrapper.get_Wrapper(n), r.style.textAlign = "right", t._keypressdown = i, t._keypressHandler = i, t._contextHandler = i
}, AI_ERP.AjaxControlExtender.NumericExtender.prototype = {
    initialize: function () {
        var n = this,
            t;
        AI_ERP.AjaxControlExtender.NumericExtender.callBaseMethod(n, "initialize"), t = n.get_element(), t.readOnly || (n._keypressdown = Function.createDelegate(n, n._onKeyPressdown), n._keypressHandler = Function.createDelegate(n, n._onKeyPress), n._contextHandler = Function.createDelegate(n, n._onContextMenu), $addHandler(t, "keydown", n._keypressdown), $addHandler(t, "keypress", n._keypressHandler), $addHandler(t, "contextmenu", n._contextHandler))
    },
    dispose: function () {
        var n = this,
            t = n.get_element();
        n._contextHandler && ($removeHandler(t, "contextmenu", n._contextHandler), n._contextHandler = null), n._keypressHandler && ($removeHandler(t, "keypress", n._keypressHandler), n._keypressHandler = null), n._keypressdown && ($removeHandler(t, "keydown", n._keypressdown), n._keypressdown = null), AI_ERP.AjaxControlExtender.NumericExtender.callBaseMethod(n, "dispose")
    },
    get_format: function () {
        return this._format
    },
    set_format: function (n) {
        this._format != n && (this._format = n)
    },
    get_valueString: function () {
        return this._valueString = this._textbox.get_Value().replace(/ /g, "")
    },
    set_valueString: function (n) {
        var t = this;
        t._valueString != n && (t._valueString = n, t._textbox.set_Value(Web.Command.NumberFormat(parseFloat(t._valueString), t._format)))
    },
    _onKeyPressdown: function (n) {
        var i = this.get_element(),
            t = this._format;
        Web.Command.onNumericKeyDown(i, t, n)
    },
    _onKeyPress: function (n) {
        var i = this.get_element(),
            t = this._format;
        Web.Command.onNumericKeyPress(i, t, n)
    },
    _onContextMenu: function () {
        return Web.Command.Nothing()
    }
}, AI_ERP.AjaxControlExtender.NumericExtender.registerClass("AI_ERP.AjaxControlExtender.NumericExtender", Sys.UI.Control), typeof Sys != "undefined" && Sys.Application.notifyScriptLoaded(), Type.registerNamespace("AI_ERP.AjaxControlExtender"), AI_ERP.AjaxControlExtender.ModalPopupExtender = function (n) {
    AI_ERP.AjaxControlExtender.ModalPopupExtender.initializeBase(this, [n])
}, AI_ERP.AjaxControlExtender.ModalPopupExtender.prototype = {
    disableTab: function () { },
    disableTabIndexes: function () {
        AI_ERP.AjaxControlExtender.ModalPopupExtender.callBaseMethod(this, "disableTab"), Array.clear(this._saveTabIndexes)
    }
}, AI_ERP.AjaxControlExtender.ModalPopupExtender.inheritsFrom(AjaxControlToolkit.ModalPopupBehavior), AI_ERP.AjaxControlExtender.ModalPopupExtender.registerClass("AI_ERP.AjaxControlExtender.ModalPopupExtender", AjaxControlToolkit.ModalPopupBehavior), typeof Sys != "undefined" && Sys.Application.notifyScriptLoaded(), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.ScrollBars = function () { }, AjaxControlToolkit.ScrollBars.prototype = {
    None: 0,
    Horizontal: 1,
    Vertical: 2,
    Both: 3,
    Auto: 4
}, AjaxControlToolkit.ScrollBars.registerEnum("AjaxControlToolkit.ScrollBars", !0), AjaxControlToolkit.TabContainer = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.TabContainer.initializeBase(t, [n]), t._cachedActiveTabIndex = -1, t._activeTabIndex = -1, t._scrollBars = AjaxControlToolkit.ScrollBars.None, t._tabs = i, t._header = i, t._body = i, t._loaded = !1, t._autoPostBackId = i, t._app_onload$delegate = Function.createDelegate(t, t._app_onload)
}, AjaxControlToolkit.TabContainer.prototype = {
    add_activeTabChanged: function (n) {
        this.get_events().addHandler("activeTabChanged", n)
    },
    remove_activeTabChanged: function (n) {
        this.get_events().removeHandler("activeTabChanged", n)
    },
    raiseActiveTabChanged: function () {
        var n = this,
            t = n.get_events().getHandler("activeTabChanged");
        t && t(n, Sys.EventArgs.Empty), n._autoPostBackId && __doPostBack(n._autoPostBackId, "activeTabChanged:" + n.get_activeTabIndex())
    },
    get_activeTabIndex: function () {
        return this._cachedActiveTabIndex > -1 ? this._cachedActiveTabIndex : this._activeTabIndex
    },
    set_activeTabIndex: function (n) {
        var t = this,
            i = n,
            r;
        if (t.get_isInitialized()) {
            if (i < -1) throw Error.argumentOutOfRange("value");
            i >= t.get_tabs().length && (i = t.get_tabs().length - 1), t._activeTabIndex != -1 && t.get_tabs()[t._activeTabIndex]._set_active(!1), r = t._activeTabIndex != i, t._activeTabIndex = i, t._activeTabIndex != -1 && t.get_tabs()[t._activeTabIndex]._set_active(!0), t._loaded && r && t.raiseActiveTabChanged(), t.raisePropertyChanged("activeTabIndex")
        } else t._cachedActiveTabIndex = i
    },
    get_tabs: function () {
        return this._tabs == null && (this._tabs = []), this._tabs
    },
    get_activeTab: function () {
        return this._activeTabIndex > -1 ? this.get_tabs()[this._activeTabIndex] : null
    },
    set_activeTab: function (n) {
        var t = Array.indexOf(this.get_tabs(), n);
        if (t == -1) throw Error.argument("value", AjaxControlToolkit.Resources.Tabs_ActiveTabArgumentOutOfRange);
        this.set_activeTabIndex(t)
    },
    get_autoPostBackId: function () {
        return this._autoPostBackId
    },
    set_autoPostBackId: function (n) {
        this._autoPostBackId = n
    },
    get_scrollBars: function () {
        return this._scrollBars
    },
    set_scrollBars: function (n) {
        var t = this;
        t._scrollBars != n && (t._scrollBars = n, t._invalidate(), t.raisePropertyChanged("scrollBars"))
    },
    initialize: function () {
        var n = this;
        AjaxControlToolkit.TabContainer.callBaseMethod(n, "initialize");
        var r = n.get_element(),
            i = n._header = $get(n.get_id() + "_header"),
            t = n._body = $get(n.get_id() + "_body");
        $common.addCssClasses(r, ["ajax__tab_container", "ajax__tab_default"]), Sys.UI.DomElement.addCssClass(i, "ajax__tab_header"), Sys.UI.DomElement.addCssClass(t, "ajax__tab_body"), n._invalidate(), Sys.Application.add_load(n._app_onload$delegate)
    },
    dispose: function () {
        Sys.Application.remove_load(this._app_onload$delegate), AjaxControlToolkit.TabContainer.callBaseMethod(this, "dispose")
    },
    getFirstTab: function (n) {
        for (var i = this.get_tabs(), t = 0; t < i.length; t++)
            if (n || i[t].get_enabled()) return i[t];
        return null
    },
    getLastTab: function (n) {
        for (var i = this.get_tabs(), t = i.length - 1; t >= 0; t--)
            if (n || i[t].get_enabled()) return i[t];
        return null
    },
    getNextTab: function (n) {
        for (var u, r, t = this.get_tabs(), f = this.get_activeTabIndex(), i = 1; i < t.length; i++)
            if (u = (f + i) % t.length, r = t[u], n || r.get_enabled()) return r;
        return null
    },
    getPreviousTab: function (n) {
        for (var u, r, t = this.get_tabs(), f = this.get_activeTabIndex(), i = 1; i < t.length; i++)
            if (u = (t.length + (f - i)) % t.length, r = t[u], n || r.get_enabled()) return r;
        return null
    },
    getNearestTab: function (n) {
        var t = this,
            r = t.getPreviousTab(n),
            i = t.getNextTab(n);
        return r && r.get_tabIndex() < t._activeTabIndex ? r : i && i.get_tabIndex() > t._activeTabIndex ? i : null
    },
    saveClientState: function () {
        for (var t, r = this.get_tabs(), i = [], n = 0; n < r.length; n++) Array.add(i, r[n].get_enabled());
        return t = {
            ActiveTabIndex: this._activeTabIndex,
            TabState: i
        }, Sys.Serialization.JavaScriptSerializer.serialize(t)
    },
    _invalidate: function () {
        var i = "ajax__scroll_auto",
            r = "ajax__scroll_both",
            u = "ajax__scroll_vert",
            t = "ajax__scroll_horiz",
            n = this;
        if (n.get_isInitialized()) {
            $common.removeCssClasses(n._body, [t, u, r, i]);
            switch (n._scrollBars) {
                case AjaxControlToolkit.ScrollBars.Horizontal:
                    Sys.UI.DomElement.addCssClass(n._body, t);
                    break;
                case AjaxControlToolkit.ScrollBars.Vertical:
                    Sys.UI.DomElement.addCssClass(n._body, u);
                    break;
                case AjaxControlToolkit.ScrollBars.Both:
                    Sys.UI.DomElement.addCssClass(n._body, r);
                    break;
                case AjaxControlToolkit.ScrollBars.Auto:
                    Sys.UI.DomElement.addCssClass(n._body, i)
            }
        }
    },
    _app_onload: function () {
        var n = this;
        n._cachedActiveTabIndex != -1 && (n.set_activeTabIndex(n._cachedActiveTabIndex), n._cachedActiveTabIndex = -1), n._loaded = !0
    }
}, AjaxControlToolkit.TabContainer.registerClass("AjaxControlToolkit.TabContainer", AjaxControlToolkit.ControlBase), AjaxControlToolkit.TabPanel = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.TabPanel.initializeBase(t, [n]), t._active = !1, t._tab = i, t._headerOuter = i, t._headerInner = i, t._header = i, t._owner = i, t._ownerID = i, t._enabled = !0, t._tabIndex = -1, t._dynamicContextKey = i, t._dynamicServicePath = i, t._dynamicServiceMethod = i, t._dynamicPopulateBehavior = i, t._scrollBars = AjaxControlToolkit.ScrollBars.None, t._header_onclick$delegate = Function.createDelegate(t, t._header_onclick), t._header_onmouseover$delegate = Function.createDelegate(t, t._header_onmouseover), t._header_onmouseout$delegate = Function.createDelegate(t, t._header_onmouseout), t._header_onmousedown$delegate = Function.createDelegate(t, t._header_onmousedown), t._dynamicPopulate_onpopulated$delegate = Function.createDelegate(t, t._dynamicPopulate_onpopulated), t._oncancel$delegate = Function.createDelegate(t, t._oncancel)
}, AjaxControlToolkit.TabPanel.prototype = {
    add_click: function (n) {
        this.get_events().addHandler("click", n)
    },
    remove_click: function (n) {
        this.get_events().removeHandler("click", n)
    },
    raiseClick: function () {
        var n = this.get_events().getHandler("click");
        n && n(this, Sys.EventArgs.Empty)
    },
    add_populating: function (n) {
        this.get_events().addHandler("populating", n)
    },
    remove_populating: function (n) {
        this.get_events().removeHandler("populating", n)
    },
    raisePopulating: function () {
        var n = this.get_events().getHandler("populating");
        n && n(this, Sys.EventArgs.Empty)
    },
    add_populated: function (n) {
        this.get_events().addHandler("populated", n)
    },
    remove_populated: function (n) {
        this.get_events().removeHandler("populated", n)
    },
    raisePopulated: function () {
        var n = this.get_events().getHandler("populated");
        n && n(this, Sys.EventArgs.Empty)
    },
    get_headerText: function () {
        return this.get_isInitialized() ? this._header.innerHTML : ""
    },
    set_headerText: function (n) {
        var i = "headerText",
            t = this;
        if (!t.get_isInitialized()) throw Error.invalidOperation(String.format(AjaxControlToolkit.Resources.Tabs_PropertySetBeforeInitialization, i));
        t.get_headerText() != n && (t._header.innerHTML = n, t.raisePropertyChanged(i))
    },
    get_headerTab: function () {
        return this._header
    },
    set_headerTab: function (n) {
        var t = this;
        if (t._header != n) {
            if (t.get_isInitialized()) throw Error.invalidOperation(String.format(AjaxControlToolkit.Resources.Tabs_PropertySetAfterInitialization, "headerTab"));
            t._header = n, t.raisePropertyChanged("value")
        }
    },
    get_enabled: function () {
        return this._enabled
    },
    set_enabled: function (n) {
        var t = this;
        n != t._enabled && (t._enabled = n, t.get_isInitialized() && t._makeEnabled(t._enabled), t.raisePropertyChanged("enabled"))
    },
    get_owner: function () {
        return this._owner
    },
    set_owner: function (n) {
        var t = this;
        if (t._owner != n) {
            if (t.get_isInitialized()) throw Error.invalidOperation(String.format(AjaxControlToolkit.Resources.Tabs_PropertySetAfterInitialization, "owner"));
            t._owner = n, t.raisePropertyChanged("owner")
        }
    },
    get_ownerID: function () {
        return this._ownerID
    },
    set_ownerID: function (n) {
        this._ownerID = n
    },
    get_scrollBars: function () {
        return this._scrollBars
    },
    set_scrollBars: function (n) {
        this._scrollBars != n && (this._scrollBars = n, this.raisePropertyChanged("scrollBars"))
    },
    get_tabIndex: function () {
        return this._tabIndex
    },
    get_dynamicContextKey: function () {
        return this._dynamicContextKey
    },
    set_dynamicContextKey: function (n) {
        this._dynamicContextKey != n && (this._dynamicContextKey = n, this.raisePropertyChanged("dynamicContextKey"))
    },
    get_dynamicServicePath: function () {
        return this._dynamicServicePath
    },
    set_dynamicServicePath: function (n) {
        this._dynamicServicePath != n && (this._dynamicServicePath = n, this.raisePropertyChanged("dynamicServicePath"))
    },
    get_dynamicServiceMethod: function () {
        return this._dynamicServiceMethod
    },
    set_dynamicServiceMethod: function (n) {
        this._dynamicServiceMethod != n && (this._dynamicServiceMethod = n, this.raisePropertyChanged("dynamicServiceMethod"))
    },
    _get_active: function () {
        return this._active
    },
    _set_active: function (n) {
        this._active = n, n ? this._activate() : this._deactivate()
    },
    initialize: function () {
        var u = "span",
            n = this,
            t = n.get_owner(),
            r, i;
        if (t || (t = $find(n.get_ownerID()), t && (t.initialize(), n.set_owner(t))), AjaxControlToolkit.TabPanel.callBaseMethod(n, "initialize"), !t) throw Error.invalidOperation(AjaxControlToolkit.Resources.Tabs_OwnerExpected);
        n._tabIndex = t.get_tabs().length, Array.add(t.get_tabs(), n), r = n.get_id() + "_tab", n._tab = document.getElementById(r), i = n._tab != null, i || (n._headerOuterWrapper = document.createElement(u), n._headerInnerWrapper = document.createElement(u), n._tab = document.createElement(u), n._tab.id = r, n._header.parentNode.replaceChild(n._tab, n._header), n._tab.appendChild(n._headerOuterWrapper), n._headerOuterWrapper.appendChild(n._headerInnerWrapper), n._headerInnerWrapper.appendChild(n._header)), $addHandlers(n._header, {
            mousedown: n._header_onmousedown$delegate,
            dragstart: n._oncancel$delegate,
            selectstart: n._oncancel$delegate,
            select: n._oncancel$delegate
        }), n._enabled ? n._addHandlersOnEnabled() : Sys.UI.DomElement.addCssClass(n._tab, "ajax__tab_disabled"), i || (Sys.UI.DomElement.addCssClass(n._headerOuterWrapper, "ajax__tab_outer"), Sys.UI.DomElement.addCssClass(n._headerInnerWrapper, "ajax__tab_inner"), Sys.UI.DomElement.addCssClass(n._header, "ajax__tab_tab"), Sys.UI.DomElement.addCssClass(n.get_element(), "ajax__tab_panel"))
    },
    dispose: function () {
        var n = this;
        n._dynamicPopulateBehavior && (n._dynamicPopulateBehavior.dispose(), n._dynamicPopulateBehavior = null), $common.removeHandlers(n._header, {
            mousedown: n._header_onmousedown$delegate,
            dragstart: n._oncancel$delegate,
            selectstart: n._oncancel$delegate,
            select: n._oncancel$delegate
        }), n._enabled && n._removeHandlersOnEnabled(), AjaxControlToolkit.TabPanel.callBaseMethod(n, "dispose")
    },
    _addHandlersOnEnabled: function () {
        var n = this;
        $addHandlers(n._header, {
            click: n._header_onclick$delegate,
            mouseover: n._header_onmouseover$delegate,
            mouseout: n._header_onmouseout$delegate
        })
    },
    _removeHandlersOnEnabled: function () {
        var n = this;
        $common.removeHandlers(n._header, {
            click: n._header_onclick$delegate,
            mouseover: n._header_onmouseover$delegate,
            mouseout: n._header_onmouseout$delegate
        })
    },
    populate: function (n) {
        var t = this;
        t._dynamicPopulateBehavior && t._dynamicPopulateBehavior.get_element() != t.get_element() && (t._dynamicPopulateBehavior.dispose(), t._dynamicPopulateBehavior = null), !t._dynamicPopulateBehavior && t._dynamicServiceMethod && (t._dynamicPopulateBehavior = $create(AjaxControlToolkit.DynamicPopulateBehavior, {
            ContextKey: t._dynamicContextKey,
            ServicePath: t._dynamicServicePath,
            ServiceMethod: t._dynamicServiceMethod
        }, {
            populated: t._dynamicPopulate_onpopulated$delegate
        }, null, t.get_element())), t._dynamicPopulateBehavior && (t.raisePopulating(), t._dynamicPopulateBehavior.populate(n ? n : t._dynamicContextKey))
    },
    _activate: function () {
        var n = this,
            i, t;
        n._enabled ? (i = n.get_element(), $common.setVisible(i, !0), Sys.UI.DomElement.addCssClass(n._tab, "ajax__tab_active"), n.populate()) : n._get_active() && (t = n._owner.getNearestTab(!1), !!t && n._owner.set_activeTab(t)), n._owner.get_element().style.visibility = "visible"
    },
    _deactivate: function () {
        var n = this.get_element();
        $common.setVisible(n, !1), Sys.UI.DomElement.removeCssClass(this._tab, "ajax__tab_active")
    },
    _show: function () {
        this._tab.style.display = ""
    },
    _hide: function () {
        var n = this,
            t;
        n._tab.style.display = "none", n._get_active() && (t = n._owner.getNearestTab(!1), !!t && n._owner.set_activeTab(t)), n._deactivate()
    },
    _makeEnabled: function (n) {
        var r = "ajax__tab_disabled",
            t = this,
            i;
        n ? (t._addHandlersOnEnabled(), Sys.UI.DomElement.removeCssClass(t._tab, r)) : (t._removeHandlersOnEnabled(), t._get_active() && (i = t._owner.getNearestTab(!1), !!i && t._owner.set_activeTab(i)), t._deactivate(), Sys.UI.DomElement.addCssClass(t._tab, r))
    },
    _header_onclick: function () {
        this.raiseClick(), this.get_owner().set_activeTab(this)
    },
    _header_onmouseover: function () {
        Sys.UI.DomElement.addCssClass(this._tab, "ajax__tab_hover")
    },
    _header_onmouseout: function () {
        Sys.UI.DomElement.removeCssClass(this._tab, "ajax__tab_hover")
    },
    _header_onmousedown: function (n) {
        n.preventDefault()
    },
    _oncancel: function (n) {
        n.stopPropagation(), n.preventDefault()
    },
    _dynamicPopulate_onpopulated: function () {
        this.raisePopulated()
    }
}, AjaxControlToolkit.TabPanel.registerClass("AjaxControlToolkit.TabPanel", Sys.UI.Control), Type.registerNamespace("AjaxControlToolkit"), AjaxControlToolkit.ResizableControlBehavior = function (n) {
    var i = null,
        t = this;
    AjaxControlToolkit.ResizableControlBehavior.initializeBase(t, [n]), t._HandleCssClass = "", t._ResizableCssClass = "", t._HandleOffsetX = 0, t._HandleOffsetY = 0, t._MinimumWidth = 0, t._MinimumHeight = 0, t._MaximumWidth = 1e5, t._MaximumHeight = 1e5, t._frame = i, t._handle = i, t._handleHolder = i, t._lining = i, t._tracking = !1, t._lastClientX = 0, t._lastClientY = 0, t._onmouseoverDelegate = i, t._onmouseoutDelegate = i, t._onmousedownDelegate = i, t._onmousemoveDelegate = i, t._onmouseupDelegate = i, t._onselectstartDelegate = i
}, AjaxControlToolkit.ResizableControlBehavior.prototype = {
    initialize: function () {
        var r = "absolute",
            n = this,
            t, i;
        AjaxControlToolkit.ResizableControlBehavior.callBaseMethod(n, "initialize"), n._frame = n.get_element(), t = AjaxControlToolkit.ResizableControlBehavior.callBaseMethod(n, "get_ClientState"), t && -1 != t.indexOf(",") && (i = t.split(","), n._frame.style.width = i[0] + "px", n._frame.style.height = i[1] + "px"), n._lining = document.createElement("DIV"), n._lining.style.width = $common.getCurrentStyle(n._frame, "width"), n._lining.style.height = $common.getCurrentStyle(n._frame, "height"), n._lining.style.position = r, n._lining.style.backgroundColor = "black", n._lining.style.opacity = "0", n._lining.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=0)", n._lining.style.visibility = "hidden", n._frame.insertBefore(n._lining, n._frame.firstChild), n._handleHolder = document.createElement("DIV"), n._handleHolder.style.width = "0px", n._handleHolder.style.height = "0px", n._handleHolder.style.position = Sys.Browser.agent === Sys.Browser.Opera ? "relative" : r, n._frame.insertBefore(n._handleHolder, n._frame.firstChild), n._handle = document.createElement("DIV"), n._handle.className = n._HandleCssClass, n._handle.style.position = r, n._handleHolder.appendChild(n._handle), n._onmouseoverDelegate = Function.createDelegate(n, n._onmouseover), $addHandler(n._handle, "mouseover", n._onmouseoverDelegate), n._onmouseoutDelegate = Function.createDelegate(n, n._onmouseout), $addHandler(n._handle, "mouseout", n._onmouseoutDelegate), n._onmousedownDelegate = Function.createDelegate(n, n._onmousedown), $addHandler(n._handle, "mousedown", n._onmousedownDelegate), n._onmousemoveDelegate = Function.createDelegate(n, n._onmousemove), n._onmouseupDelegate = Function.createDelegate(n, n._onmouseup), n._onselectstartDelegate = Function.createDelegate(n, n._onselectstart), n._resizeControl(0, 0, 0, 0), n._rememberSize()
    },
    dispose: function () {
        var i = "mousedown",
            t = null,
            n = this;
        n._onmouseoverDelegate && ($removeHandler(n._handle, "mouseover", n._onmouseoverDelegate), n._onmouseoverDelegate = t), n._onmouseoutDelegate && ($removeHandler(n._handle, "mouseout", n._onmouseoutDelegate), n._onmouseoutDelegate = t), n._onmousedownDelegate && ($removeHandler(n._handle, i, n._onmousedownDelegate), n._onmousedownDelegate = t), n._onmousemoveDelegate && (n.tracking && $removeHandler(document, "mousemove", n._onmousemoveDelegate), n._onmousemoveDelegate = t), n._onmouseupDelegate && (n.tracking && $removeHandler(document, "mouseup", n._onmouseupDelegate), n._onmouseupDelegate = t), n._onselectstartDelegate && (n.tracking && ($removeHandler(document, "selectstart", n._onselectstartDelegate), Sys.Browser.agent === Sys.Browser.Opera && $removeHandler(document, i, n._onselectstartDelegate)), n._onselectstartDelegate = t), AjaxControlToolkit.ResizableControlBehavior.callBaseMethod(n, "dispose")
    },
    _onmouseover: function () {
        Sys.UI.DomElement.addCssClass(this._frame, this._ResizableCssClass)
    },
    _onmouseout: function () {
        !this._tracking && Sys.UI.DomElement.removeCssClass(this._frame, this._ResizableCssClass)
    },
    _onmousedown: function (n) {
        n || (n = event), this._onmousedownImplementation(n.clientX, n.clientY)
    },
    _onmousedownImplementation: function (n, t) {
        var i = this;
        i._tracking = !0, i._resizeControl(n, t, 0, 0), i._lining.style.visibility = "visible", $addHandler(document, "mousemove", i._onmousemoveDelegate), $addHandler(document, "mouseup", i._onmouseupDelegate), $addHandler(document, "selectstart", i._onselectstartDelegate), Sys.Browser.agent === Sys.Browser.Opera && $addHandler(document, "mousedown", i._onselectstartDelegate), i.raiseResizeBegin()
    },
    _onmousemove: function (n) {
        n || (n = event), this._onmousemoveImplementation(n.clientX, n.clientY)
    },
    _onmousemoveImplementation: function (n, t) {
        var i = this,
            u, r;
        i._tracking && (u = n - i._lastClientX, r = t - i._lastClientY, i._resizeControl(n, t, u, r))
    },
    _onmouseup: function () {
        var n = this;
        n._tracking = !1, n._rememberSize(), n._lining.style.visibility = "hidden", $removeHandler(document, "mousemove", n._onmousemoveDelegate), $removeHandler(document, "mouseup", n._onmouseupDelegate), $removeHandler(document, "selectstart", n._onselectstartDelegate), Sys.Browser.agent === Sys.Browser.Opera && $removeHandler(document, "mousedown", n._onselectstartDelegate), Sys.UI.DomElement.removeCssClass(n._frame, n._ResizableCssClass)
    },
    _onselectstart: function (n) {
        return n.preventDefault(), !1
    },
    _resizeControl: function (n, t, i, r) {
        var f = "px",
            u = this,
            o, e, h, s;
        u._lastClientX = n, u._lastClientY = t, o = Math.min(Math.max(u._lining.offsetWidth + i, Math.max(u._MinimumWidth, u._handle.offsetWidth)), u._MaximumWidth), e = Math.min(Math.max(u._lining.offsetHeight + r, Math.max(u._MinimumHeight, u._handle.offsetHeight)), u._MaximumHeight), u._lining.style.width = o + f, u._lining.style.height = e + f, u._frame.style.width = o + f, u._frame.style.height = e + f, h = u._lining.offsetWidth - u._handle.offsetWidth + u._HandleOffsetX, s = u._lining.offsetHeight - u._handle.offsetHeight + u._HandleOffsetY, u._handle.style.left = h + f, u._handle.style.top = s + f, u.raiseResizing()
    },
    _rememberSize: function () {
        var n = this.get_Size();
        AjaxControlToolkit.ResizableControlBehavior.callBaseMethod(this, "set_ClientState", [n.width + "," + n.height]), this.raiseResize()
    },
    _measurementToNumber: function (n) {
        return n.replace("px", "")
    },
    get_HandleCssClass: function () {
        return this._HandleCssClass
    },
    set_HandleCssClass: function (n) {
        var t = "HandleCssClass";
        if (this._HandleCssClass) throw String.format(AjaxControlToolkit.Resources.ResizableControlBehavior_CannotChangeProperty, t);
        this._HandleCssClass = n, this.raisePropertyChanged(t)
    },
    get_ResizableCssClass: function () {
        return this._ResizableCssClass
    },
    set_ResizableCssClass: function (n) {
        var t = "ResizableCssClass";
        if (this._ResizableCssClass) throw String.format(AjaxControlToolkit.Resources.ResizableControlBehavior_CannotChangeProperty, t);
        this._ResizableCssClass = n, this.raisePropertyChanged(t)
    },
    get_HandleOffsetX: function () {
        return this._HandleOffsetX
    },
    set_HandleOffsetX: function (n) {
        this._HandleOffsetX != n && (this._HandleOffsetX = n, this.raisePropertyChanged("HandleOffsetX"))
    },
    get_HandleOffsetY: function () {
        return this._HandleOffsetY
    },
    set_HandleOffsetY: function (n) {
        this._HandleOffsetY != n && (this._HandleOffsetY = n, this.raisePropertyChanged("HandleOffsetY"))
    },
    get_MinimumWidth: function () {
        return this._MinimumWidth
    },
    set_MinimumWidth: function (n) {
        this._MinimumWidth != n && (this._MinimumWidth = n, this.raisePropertyChanged("MinimumWidth"))
    },
    get_MinimumHeight: function () {
        return this._MinimumHeight
    },
    set_MinimumHeight: function (n) {
        this._MinimumHeight != n && (this._MinimumHeight = n, this.raisePropertyChanged("MinimumHeight"))
    },
    get_MaximumWidth: function () {
        return this._MaximumWidth
    },
    set_MaximumWidth: function (n) {
        this._MaximumWidth != n && (this._MaximumWidth = n, this.raisePropertyChanged("MaximumWidth"))
    },
    get_MaximumHeight: function () {
        return this._MaximumHeight
    },
    set_MaximumHeight: function (n) {
        this._MaximumHeight != n && (this._MaximumHeight = n, this.raisePropertyChanged("MaximumHeight"))
    },
    add_resizing: function (n) {
        this.get_events().addHandler("resizing", n)
    },
    remove_resizing: function (n) {
        this.get_events().removeHandler("resizing", n)
    },
    raiseResizing: function () {
        var n = this.get_events().getHandler("resizing");
        n && n(this, Sys.EventArgs.Empty)
    },
    get_resizing: function () {
        return this.get_events().getHandler("resizing")
    },
    set_resizing: function (n) {
        if (n && 0 < n.length) {
            var t = $common.resolveFunction(n);
            if (t) this.add_resizing(t);
            else throw Error.argumentType("value", typeof n, "Function", String.format(AjaxControlToolkit.Resources.ResizableControlBehavior_InvalidHandler, "resizing"));
        }
    },
    add_resize: function (n) {
        this.get_events().addHandler("resize", n)
    },
    remove_resize: function (n) {
        this.get_events().removeHandler("resize", n)
    },
    raiseResize: function () {
        var n = this.get_events().getHandler("resize");
        n && n(this, Sys.EventArgs.Empty)
    },
    get_resize: function () {
        return this.get_events().getHandler("resize")
    },
    set_resize: function (n) {
        if (n && 0 < n.length) {
            var t = $common.resolveFunction(n);
            if (t) this.add_resize(t);
            else throw Error.argumentType("value", typeof n, "Function", String.format(AjaxControlToolkit.Resources.ResizableControlBehavior_InvalidHandler, "resize"));
        }
    },
    add_resizebegin: function (n) {
        this.get_events().addHandler("resizebegin", n)
    },
    remove_resizebegin: function (n) {
        this.get_events().removeHandler("resizebegin", n)
    },
    raiseResizeBegin: function () {
        var n = this.get_events().getHandler("resizebegin");
        n && n(this, Sys.EventArgs.Empty)
    },
    get_resizebegin: function () {
        return this.get_events().getHandler("resizebegin")
    },
    set_resizebegin: function (n) {
        if (n && 0 < n.length) {
            var t = $common.resolveFunction(n);
            if (t) this.add_resizebegin(t);
            else throw Error.argumentType("value", typeof n, "Function", String.format(AjaxControlToolkit.Resources.ResizableControlBehavior_InvalidHandler, "resizebegin"));
        }
    },
    get_Size: function () {
        var n = this;
        return {
            width: n._measurementToNumber($common.getCurrentStyle(n._lining, "width")),
            height: n._measurementToNumber($common.getCurrentStyle(n._lining, "height"))
        }
    },
    set_Size: function (n) {
        var t = this,
            r = n.width - t._measurementToNumber($common.getCurrentStyle(t._lining, "width")),
            i = n.height - t._measurementToNumber($common.getCurrentStyle(t._lining, "height"));
        t._resizeControl(0, 0, r, i), t._rememberSize(), t.raisePropertyChanged("Size")
    }
}, AjaxControlToolkit.ResizableControlBehavior.registerClass("AjaxControlToolkit.ResizableControlBehavior", AjaxControlToolkit.BehaviorBase), typeof Sys != "undefined" && Sys.Application.notifyScriptLoaded();