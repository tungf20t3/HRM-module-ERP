function TreeView(n, t, i, r) {
    if ($func.isIE) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (f) { } (navigator.userAgent.indexOf("Safari") != -1 || navigator.userAgent.indexOf("Konqueror") != -1) && (this._krv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari") + 7, 5)));
    this.parentObject = $get(n);
    this.parentObject.style.overflow = "hidden";
    this.parentObject.style.width = Math.round(this.parentObject.offsetWidth * 1.3).toString() + 'px';

    this.height = i;
    this.rootId = r;
    this.xmlloadingWarning = 0;
    this._path = "";
    this._tscheck = !0;
    this._enableTreeImages = !1;
    this._selected = [];
    this._ids = {};
    this._im = [
        ["c0.png", "c1.png", "c2.png"],
        ["r0.gif", "r1.gif", "r1.gif", "r0.gif", "r1.gif", "r1.gif"],
        ["l0.gif", "l1.gif", "l2.gif", "b.gif", "b.gif", "l3.gif"],
        ["m0.png", "m1.png", "m2.png", "m3.png", "m4.png"],
        ["p0.png", "p1.png", "p2.png", "p3.png", "p4.png"],
        ["i0.gif", "i1.gif", "i2.gif"]
    ];
    this.htmlNode = new TreeItemObject(this.rootId, "", 0, this);
    var u = this.htmlNode.htmlNode.childNodes[0].childNodes[0];
    return u.style.display = "none", u.childNodes[0].className = "TreeHiddenRow", this._tree = this.createTree(), this._tree.appendChild(this.htmlNode.htmlNode), $func.isFF && (this._tree.childNodes[0].width = "100%", this._tree.childNodes[0].style.overflow = "hidden"), this.XMLLoader = new XMLLoaderObject(this._parseXMLTree, this, !0), this._template = "", this._hasTemplate = !1, this
}

function xmlPointer(n) {
    this.d = n
}

function XMLLoaderObject(n, t, i) {
    return this._xmlDoc = "", this._async = typeof i != "undefined" ? i : !0, this._onload = n || null, this._element = t || null, this._ie = $func.isIE, this
}

function TreeItemObject(n, t, i, r, u, f) {
    return this.htmlNode = "", this.tr = 0, this.childsCount = 0, this.span = 0, this.closeble = 1, this.childNodes = [], this.checkstate = 0, this.treeNode = r, this.label = t, this.parentObject = i, this.actionHandler = u, this.images = [r._im[5][0], r._im[5][1], r._im[5][2]], this.id = r.storage(n, this), this.htmlNode = this.treeNode.checkBoxOff ? this.treeNode.h$(1, this, f) : this.treeNode.h$(0, this, f), this
}
TreeView.prototype = {
    set_path: function (n) {
        this._path = n
    },
    enableThreeStateCheckboxes: function (n) {
        this._tscheck = this.cb(n)
    },
    inheritFromParentNode: function (n) {
        this._inherit = this.cb(n)
    },
    enableTreeImages: function (n) {
        this._enableTreeImages = this.cb(n)
    },
    enableCheckBoxes: function (n, t) {
        this.checkBoxOff = this.cb(n);
        this.cBROf = !(this.checkBoxOff || this.cb(t))
    },
    loadXMLString: function (n) {
        this.XMLLoader.loadXMLString(n)
    },
    loadTemplate: function (n) {
        this._template = n;
        (n = !0) && (this._hasTemplate = !0)
    },
    createTree: function () {
        var n = document.createElement("div");
        return n.className = "TreeTableStyle", n.style.width = this.width, n.style.height = this.height, this.parentObject.appendChild(n), n
    },
    _getImg: function () {
        var n = document.createElement("div");
        return n.innerHTML = "&nbsp;", n.className = "TreeImgFix", n
    },
    _setImg: function (n, t) {
        n.style.backgroundImage = "url('" + t + "')"
    },
    _parseXMLTree: function (n, t, i, r, u) {
        var f = new xmlPointer(u.getXMLTopNode("tree"));
        n._parse(f)
    },
    _parse: function (n, t, i, r) {
        var f, o, s, h, e, u;
        if (n.exists()) {
            if (t || (t = n.get("id"), n.get("radio") && (this.htmlNode._r_logic = !0), this.parsingOn = t, this.parsedArray = [], this.checkedList = "", this.nodeRequired = ""), f = this.j$(t), !f) {
                o = $message._getResources("Dialog.Error");
                s = "XML refers to not existing parent: " + t;
                $message.show(o, null, null, null, s);
                return
            }
            if (this.parsCount = this.parsCount ? this.parsCount + 1 : 1, this.xmlloadingWarning = 1, n.each("item", function (n) {
                f.XMLload = 1;
                this.a$(n, f, 0, 0)
            }, this, r), !i) {
                for (f.XMLload = 1, h = this.j$(this.parsingOn), u = 0; u < this.parsedArray.length; u++) f.htmlNode.childNodes[0].appendChild(this.parsedArray[u]);
                for (this.parsedArray = [], this.lastLoadedXMLId = t, this.xmlloadingWarning = 0, e = this.checkedList.split(","), u = 0; u < e.length; u++) this._inherit ? this.v$(this._ids[e[u]], !0) : e[u] && this.u$(e[u], 1, !0);
                this.c$(this, null, r);
                this._branchUpdate && this.d$(n)
            }
            return this.parsCount == 1 && (this.parsingOn = null), this.parsCount--, this.nodeRequired
        }
    },
    a$: function (n, t, i, r) {
        var u = n.gets(),
            e = [],
            f, s, o;
        u.select && e.push("SELECT");
        u.top && e.push("TOP");
        u.call && (this.nodeRequired = u.id);
        u.checked == -1 ? e.push("HCHECKED") : u.checked && e.push("CHECKED");
        u.open && e.push("OPEN");
        f = this.b$(t, u.id, u.text, 0, u.im0, u.im1, u.im2, e.join(","), u.child, r || 0, i);
        u.radio && (f._r_logic = !0);
        u.nocheckbox && (s = f.span.parentNode.previousSibling.previousSibling, s.childNodes[0].style.display = "none", this._krv && (s.style.display = "none"), f.nocheckbox = !0);
        u.disabled && (u.checked != null && this.v$(f, u.checked), this.disableCheckbox(f, 1));
        f._acc = u.child || 0;
        (u.closeable == "0" || u.closeable == "1") && this.D$(f, u.closeable);
        o = "";
        n.contain("item") && (o = this._parse(n, u.id, 1));
        o != "" && (this.nodeRequired = o)
    },
    b$: function (n, t, i, r, u, f, e, o, s, h, c) {
        var y, v, a, k, l, w, d, b, p;
        if (h && h.parentObject && (n = h.parentObject), y = n.childsCount, v = n.childNodes, c && c.tr.previousSibling && (c.tr.previousSibling.previousSibling ? h = c.tr.previousSibling.nodem : o = o.replace("TOP", "") + ",TOP"), h) {
            for (a = 0; a < y; a++)
                if (v[a] == h) {
                    for (k = y; k != a; k--) v[1 + k] = v[k];
                    break
                } a++;
            y = a
        }
        if (o)
            for (b = o.split(","), p = 0; p < b.length; p++) switch (b[p]) {
                case "TOP":
                    for (n.childsCount > 0 && (h = {}, h.tr = n.childNodes[0].tr.previousSibling), n._has_top = !0, a = y; a > 0; a--) v[a] = v[a - 1];
                    y = 0
            }
        if ((l = this._ids[t]) && l.span == -1 || (l = v[y] = new TreeItemObject(t, i, n, this, r, 1), t = v[y].id, n.childsCount++), l.htmlNode || (l.label = i, l.htmlNode = this.h$(this.checkBoxOff ? 1 : 0, l)), u && (l.images[0] = u), f && (l.images[1] = f), e && (l.images[2] = e), w = this.i$(l.htmlNode), (this.xmlloadingWarning || this._hAdI) && (d = Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 9, l.htmlNode.parentNode.parentNode.style.display = this._inherit ? d ? "inline" : "inline_block" : "none"), h && h.tr.nextSibling ? n.htmlNode.childNodes[0].insertBefore(w, h.tr.nextSibling) : this.parsingOn == n.id ? this.parsedArray[this.parsedArray.length] = w : n.htmlNode.childNodes[0].appendChild(w), h && !h.span && (h = null), l.tr = w, w.nodem = l, n.itemId == 0 && (w.childNodes[0].className = "TreeHiddenRow"), (n._r_logic || this._frbtr) && this._setImg(l.htmlNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0], this._path + this._im[1][0]), o)
            for (b = o.split(","), p = 0; p < b.length; p++) switch (b[p]) {
                case "SELECT":
                    this.selectItem(t, !1);
                    break;
                case "CALL":
                    this.selectItem(t, !0);
                    break;
                case "CHILD":
                    l.XMLload = 0;
                    break;
                case "CHECKED":
                    this.xmlloadingWarning ? this.checkedList += "," + t : this.u$(t, 1);
                    break;
                case "HCHECKED":
                    this.v$(l, "unsure");
                    break;
                case "OPEN":
                    l.openNode = 1
            }
        return this.xmlloadingWarning || (this.q$(n) < 0 && !this._hAdI && this.A$(n.id), h && (this.g$(h), this.f$(h)), this.g$(n), this.f$(n), this.g$(l), n.childsCount >= 2 && (this.g$(v[n.childsCount - 2]), this.f$(v[n.childsCount - 2])), n.childsCount != 2 && this.g$(v[0]), this._tscheck && this.e$(n)), l
    },
    c$: function (n, t, i, r) {
        var u, e, f;
        if (t) u = t;
        else if (u = n.j$(n.lastLoadedXMLId), n.lastLoadedXMLId = -1, !u) return 0;
        for (e = 0, f = i ? i - 1 : 0; f < u.childsCount; f++) this._branchUpdate && this.q$(u) != 1 || t && r != 1 || (u.childNodes[f].htmlNode.parentNode.parentNode.style.display = ""), u.childNodes[f].openNode == 1 && (this.B$(u.childNodes[f]), u.childNodes[f].openNode = 0), n.c$(n, u.childNodes[f]);
        u.unParsed || (u._acc = e);
        n.f$(u);
        n.g$(u)
    },
    d$: function (n) {
        n.each("item", function (n) {
            var t = n.get("id");
            (!this._ids[t] || this._ids[t].XMLload) && this._branchUpdate++
        }, this);
        this._branchUpdate--
    },
    e$: function (n) {
        var t;
        if (this._tscheck && n && n.id != this.rootId) {
            var r = n.childNodes,
                i = 0,
                u = 0;
            if (n.childsCount != 0) {
                for (t = 0; t < n.childsCount; t++)
                    if (!r[t].dscheck)
                        if (r[t].checkstate == 0) i = 1;
                        else if (r[t].checkstate == 1) u = 1;
                        else {
                            i = 1;
                            u = 1;
                            break
                        }
                i && u ? this.v$(n, "unsure") : i ? this.v$(n, !1) : this.v$(n, !0);
                this.e$(n.parentObject)
            }
        }
    },
    f$: function (n) {
        var u, r, t, i;
        if (n.htmlNode && (u = n.parentObject, r = n.htmlNode.childNodes[0], u))
            if (this.s$(n.id, u) == 0)
                for (t = 1; t <= n.childsCount; t++) {
                    if (!r.childNodes[t]) break;
                    i = r.childNodes[t].childNodes[0];
                    i.style.backgroundImage = "";
                    i.style.backgroundRepeat = ""
                } else
                for (t = 1; t <= n.childsCount; t++) {
                    if (!r.childNodes[t]) break;
                    i = r.childNodes[t].childNodes[0];
                    i.style.backgroundImage = "url(" + this._path + this._im[2][5] + ")";
                    i.style.backgroundRepeat = "repeat-y"
                }
    },
    g$: function (n) {
        var i, u;
        if (n.htmlNode) {
            var t = n.htmlNode.childNodes[0],
                f = t.childNodes[0].childNodes[0].lastChild,
                r = t.childNodes[0].childNodes[2].childNodes[0],
                i = this._im[2];
            n.childsCount || n.unParsed ? t.childNodes[1] && t.childNodes[1].style.display != "none" ? (n.wsign || (i = this._im[3]), this._setImg(r, this._path + n.images[1])) : (n.wsign || (i = this._im[4]), this._setImg(r, this._path + n.images[2])) : this._setImg(r, this._path + n.images[0]);
            u = 2;
            n.treeNode.treeLinesOn ? (n.parentObject && (u = this.r$(n.id, n.parentObject)), this._setImg(f, this._path + i[u])) : this._setImg(f, this._path + i[3])
        }
    },
    h$: function (n, t, i) {
        var p = t.label == "-",
            v = "absmiddle",
            w = "TreeStandartImage",
            s = document.createElement("table"),
            b = document.createElement("tbody"),
            c, h, f, l, u, o, r, e, a;
        if (s.cellSpacing = 0, s.cellPadding = 0, s.border = 0, s.style.margin = 0, s.style.padding = 0, c = document.createElement("tr"), h = document.createElement("td"), h.className = w, f = this._getImg(t.id), f.border = "0", f.tagName == "IMG" && (f.align = v), h.appendChild(f), f.style.padding = f.style.margin = 0, f.style.width = f.style.height = "20px", l = document.createElement("td"), u = this._getImg(this.cBROf ? this.rootId : t.id), u.checked = 0, this._path && this._setImg(u, this._path + this._im[0][0]), u.style.width = u.style.height = "20px", n || (($func.isIE ? u : l).style.display = "none"), l.appendChild(u), this.cBROf || u.tagName != "IMG" || (u.align = v), u.onclick = this.t$, u.treeNode = this, u.parentObject = t, l.style.width = this._krv ? "20px" : "20px", o = document.createElement("td"), o.className = w, r = this._getImg(this._enableTreeImages ? t.id : this.rootId), r.border = "0", r.parentObject = t, r.tagName == "IMG" && (r.align = v), r.onclick = this.onRowSelect, i || this._setImg(r, this._path + this._im[5][0]), o.appendChild(r), r.style.padding = r.style.margin = 0, this._enableTreeImages ? o.style.width = r.style.width = r.style.height = "20px" : (r.style.width = r.style.height = "0px", ($func.isOpr || this._krv) && (o.style.display = "none")), e = document.createElement("td"), e.className = "TreeItem", e.noWrap = !0, $func.isIE ? e.style.width = "9999px" : this._krv || (e.style.width = "100%"), o.style.display = "none", p) t.span = document.createElement("div"), t.span.className = "TreeBreak", r.style.width = r.style.height = "0px", h.style.display = l.style.display = o.style.display = "none";
        else if (this._hasTemplate) {
            t.span = document.createElement("div");
            t.span.className = "TreeItem";
            var d = String.fromCharCode(255) + ";",
                y = this._template,
                k = t.label.split(d);
            for (a = 0; a < k.length; a++) y = y.replace(String.format("<%{0}%>", a), k[a]);
            t.span.innerHTML = y
        } else t.span = document.createElement("span"), t.span.className = "TreeItem", t.span.innerHTML = t.label;
        return e.appendChild(t.span), e.parentObject = t, h.parentObject = t, h.onclick = this.onRowClick, p || (t.span.style.paddingLeft = t.span.style.paddingRight = "5px"), e.style.verticalAlign = "", c.appendChild(h), c.appendChild(l), c.appendChild(o), c.appendChild(e), b.appendChild(c), s.appendChild(b), s
    },
    i$: function (n) {
        var t = document.createElement("tr"),
            r = document.createElement("td"),
            i = document.createElement("td");
        return r.appendChild(document.createTextNode(" ")), i.colSpan = 3, i.appendChild(n), t.appendChild(r), t.appendChild(i), t
    },
    storage: function (n, t) {
        return this.j$(n, 1, 1) ? (n = n + "_" + (new Date).valueOf(), this.storage(n, t)) : (this._ids[n] = t, n)
    },
    j$: function (n) {
        var t = this._ids[n];
        return t ? t : null
    },
    k$: function () {
        for (var t = [], n = 0; n < this._selected.length; n++) t[n] = this._selected[n].id;
        return t.join(",")
    },
    _selectItem: function (n) {
        this.n$();
        this.l$(n)
    },
    l$: function (n) {
        n.span.className = "TreeSelected";
        n.i_sel = !0;
        this._selected[this._selected.length] = n
    },
    m$: function (n) {
        if (n && n.i_sel) {
            n.span.className = "TreeItem";
            n.i_sel = !1;
            for (var t = 0; t < this._selected.length; t++)
                if (!this._selected[t].i_sel) {
                    this._selected.splice(t, 1);
                    break
                }
        }
    },
    n$: function () {
        for (var t, n = 0; n < this._selected.length; n++) t = this._selected[n], t.span.className = "TreeItem", t.i_sel = !1;
        this._selected = []
    },
    onRowClick: function () {
        var n = this.parentObject.treeNode;
        this.parentObject.closeble && this.parentObject.closeble != "0" ? n.E$(this.parentObject) : n.E$(this.parentObject, 2)
    },
    onRowSelect: function (n, t) {
        var i, r, u;
        n = n || window.event;
        i = this.parentObject;
        t && (i = t.parentObject);
        r = i.treeNode;
        u = r.k$();
        n && n.skipUnSel || r._selectItem(i, n)
    },
    getAllSubItems: function (n) {
        return this.o$(n)
    },
    getAllChecked: function () {
        return this.p$("", "", 1)
    },
    getAllCheckedBranches: function () {
        var n = [this.p$("", "", 1)],
            t;
        return this._inherit ? n.join(",") : (t = this.p$("", "", 2), t && n.push(t), n.join(","))
    },
    o$: function (n, t, i) {
        var r, u, f;
        if (r = i ? i : this.j$(n), !r) return 0;
        for (t = "", u = 0; u < r.childsCount; u++) t ? t += "," + r.childNodes[u].id : t = r.childNodes[u].id, f = this.o$(0, t, r.childNodes[u]), f && (t += "," + f);
        return t
    },
    p$: function (n, t, i) {
        var u, r;
        for (n || (n = this.htmlNode), n.checkstate == i && (n.nocheckbox || (t ? t += "," + n.id : t = n.id)), u = n.childsCount, r = 0; r < u; r++)
            if (this._inherit) {
                if (n.checkstate == 1) return t;
                t = this.p$(n.childNodes[r], t, i)
            } else t = this.p$(n.childNodes[r], t, i);
        return t ? t : ""
    },
    q$: function (n) {
        if (!n.htmlNode) return 0;
        var t = n.htmlNode.childNodes[0].childNodes;
        return t.length <= 1 ? 0 : t[1].style.display != "none" ? 1 : -1
    },
    r$: function (n, t) {
        return t.childsCount <= 1 ? t.id == this.rootId ? 4 : 0 : t.childNodes[0].id == n ? t.id == this.rootId ? 2 : 1 : t.childNodes[t.childsCount - 1].id == n ? 0 : 1
    },
    s$: function (n, t) {
        return t.childNodes[t.childsCount - 1].id == n ? 0 : 1
    },
    t$: function () {
        if (this.treeNode._inherit) {
            if (this.parentObject.parentObject.checkstate == 1) return;
            if (this.parentObject.dscheck) return !0;
            this.treeNode._tscheck ? this.parentObject.checkstate == 1 ? this.treeNode.x$(!1, this.parentObject) : this.treeNode.x$(!0, this.parentObject) : this.parentObject.checkstate == 1 ? this.treeNode.v$(this.parentObject, !1) : this.treeNode.v$(this.parentObject, !0)
        } else {
            if (this.parentObject.dscheck) return !0;
            this.treeNode._tscheck ? this.parentObject.checkstate == 1 ? this.treeNode.x$(!1, this.parentObject) : this.treeNode.x$(!0, this.parentObject) : this.parentObject.checkstate == 1 ? this.treeNode.v$(this.parentObject, !1) : this.treeNode.v$(this.parentObject, !0);
            this.treeNode.e$(this.parentObject.parentObject)
        }
    },
    u$: function (n, t, i) {
        var r = this.j$(n, 0, 1);
        r && (i && r.childsCount || (t == "unsure" ? this.v$(r, t) : (t = this.cb(t), this._tscheck ? this.x$(t, r) : this.v$(r, t)), this.e$(r.parentObject)))
    },
    v$: function (n, t) {
        var i, r;
        if (n) {
            if ((n.parentObject._r_logic || this._frbtr) && t)
                if (this._frbtrs) this._frbtrL && this.u$(this._frbtrL.id, 0), this._frbtrL = n;
                else
                    for (i = 0; i < n.parentObject.childsCount; i++) this.v$(n.parentObject.childNodes[i], 0);
            r = n.htmlNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0];
            n.checkstate = t == "unsure" ? 2 : t ? 1 : 0;
            n.dscheck && (n.checkstate = n.dscheck);
            this._setImg(r, this._path + (n.parentObject._r_logic || this._frbtr ? this._im[1] : this._im[0])[n.checkstate])
        }
    },
    w$: function (n, t) {
        var i = this.j$(n);
        this.x$(t, i);
        this.e$(i.parentObject)
    },
    x$: function (n, t) {
        var i, r;
        if (n = this.cb(n), t) {
            if ((t.parentObject._r_logic || this._frbtr) && n)
                for (i = 0; i < t.parentObject.childsCount; i++) this.x$(0, t.parentObject.childNodes[i]);
            if (t._r_logic || this._frbtr) this.x$(n, t.childNodes[0]);
            else
                for (i = 0; i < t.childsCount; i++) this.x$(n, t.childNodes[i]);
            r = t.htmlNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0];
            t.checkstate = n ? 1 : 0;
            t.dscheck && (t.checkstate = t.dscheck);
            this._setImg(r, this._path + (t.parentObject._r_logic || this._frbtr ? this._im[1] : this._im[0])[t.checkstate])
        }
    },
    y$: function (n) {
        var t = this.j$(n);
        return t ? this.q$(t) : ""
    },
    z$: function (n) {
        var t = this.j$(n);
        return !t || !t.parentObject ? "" : t.parentObject.id
    },
    A$: function (n) {
        var t = this.j$(n);
        return t ? this.B$(t) : 0
    },
    B$: function (n) {
        var t = this.q$(n);
        t < 0 && this.E$(n, 2);
        n.parentObject && !this._skip_open_parent && this.B$(n.parentObject)
    },
    C$: function (n) {
        if (this.rootId == n) return 0;
        var t = this.j$(n);
        if (!t) return 0;
        t.closeble && this.E$(t, 1)
    },
    D$: function (n, t) {
        var i;
        if (t = this.cb(t), i = n && n.span ? n : this.j$(n), !i) return 0;
        i.closeble = t
    },
    selectItem: function (n, t, i) {
        t = this.cb(t);
        var r = this.j$(n),
            u = null;
        if (!r || !r.parentObject) return 0;
        if (this.xmlloadingWarning ? r.parentObject.openNode = 1 : this.B$(r.parentObject), i && (u = {}, u.ctrlKey = !0, r.i_sel && (u.skipUnSel = !0)), t) this.onRowSelect(u, r.htmlNode.childNodes[0].childNodes[0].childNodes[3], !1);
        else this.onRowSelect(u, r.htmlNode.childNodes[0].childNodes[0].childNodes[3], !0)
    },
    E$: function (n, t) {
        var r = n.htmlNode.childNodes[0].childNodes,
            u = r.length,
            i;
        if (u > 1)
            for ((r[1].style.display != "none" || t == 1) && t != 2 ? (this._tree.childNodes[0].border = "1", this._tree.childNodes[0].border = "0", nodestyle = "none") : nodestyle = "", i = 1; i < u; i++) r[i].style.display = nodestyle;
        this.g$(n);
        $func.isIE && (this._tree.style.overflowY = "scroll")
    },
    disableCheckbox: function (n, t) {
        var i;
        (i = typeof n != "object" ? this.j$(n, 0, 1) : n, i) && (i.dscheck = this.cb(t) ? (i.checkstate || 0) % 3 + 3 : i.checkstate > 2 ? i.checkstate - 3 : i.checkstate, this.v$(i), i.dscheck < 3 && (i.dscheck = !1))
    },
    cb: function (n) {
        typeof n == "string" && (n = n.toLowerCase());
        switch (n) {
            case "1":
            case "true":
            case "yes":
            case "y":
            case 1:
            case !0:
                return !0;
            default:
                return !1
        }
    },
    dispose: function () {
        this.parentObject.innerHTML = "";
        this._ids = null;
        this.XMLLoader && (this.XMLLoader.dispose(), this.XMLLoader = null)
    }
};
xmlPointer.prototype = {
    text: function () {
        if (!$func.isFF) return this.d.xml;
        var n = new XMLSerializer;
        return n.serializeToString(this.d)
    },
    get: function (n) {
        return this.d.getAttribute(n)
    },
    set: function (n, t) {
        this.d.setAttribute(n, t)
    },
    exists: function () {
        return !!this.d
    },
    content: function () {
        return this.d.firstChild ? this.d.firstChild.data : ""
    },
    each: function (n, t, i, r) {
        var u = this.d.childNodes,
            f = new xmlPointer;
        if (u.length)
            for (r = r || 0; r < u.length; r++)
                if (u[r].tagName == n && (f.d = u[r], t.apply(i, [f, r]) == -1)) return
    },
    gets: function () {
        for (var i = {}, t = this.d.attributes, n = 0; n < t.length; n++) i[t[n].name] = t[n].value;
        return i
    },
    sub: function (n) {
        var i = this.d.childNodes,
            r = new xmlPointer,
            t;
        if (i.length)
            for (t = 0; t < i.length; t++)
                if (i[t].tagName == n) return r.d = i[t], r
    },
    up: function () {
        return new xmlPointer(this.d.parentNode)
    },
    clone: function () {
        return new xmlPointer(this.d)
    },
    contain: function (n) {
        var i = this.d.childNodes,
            t;
        if (i.length)
            for (t = 0; t < i.length; t++)
                if (i[t].tagName == n) return !0;
        return !1
    },
    through: function (n, t, i, r, u) {
        var e = this.d.childNodes,
            f, o, s;
        if (e.length)
            for (f = 0; f < e.length; f++) e[f].tagName != n || e[f].getAttribute(t) == null || e[f].getAttribute(t) == "" || i && e[f].getAttribute(t) != i || (o = new xmlPointer(e[f]), r.apply(u, [o, f])), s = this.d, this.d = e[f], this.through(n, t, i, r, u), this.d = s
    }
};
XMLLoaderObject.prototype = {
    getXMLTopNode: function (n) {
        var t = null,
            i, r, u;
        return (this._xmlDoc.responseXML ? (i = this._xmlDoc.responseXML.getElementsByTagName(n), i.length == 0 && n.indexOf(":") != -1 && (i = this._xmlDoc.responseXML.getElementsByTagName(n.split(":")[1])), t = i[0]) : t = this._xmlDoc.documentElement, t) ? (this._retry = !1, t) : this._ie && !this._retry ? (r = this._xmlDoc.responseText, u = this._xmlDoc, this._retry = !0, this._xmlDoc = new ActiveXObject("Microsoft.XMLDOM"), this._xmlDoc.async = !1, this._xmlDoc.loadXML(r), this.getXMLTopNode(n, u)) : document.createElement("div")
    },
    loadXMLString: function (n) {
        if (this._ie) this._xmlDoc = new ActiveXObject("Microsoft.XMLDOM"), this._xmlDoc.async = this._async, this._xmlDoc.onreadystatechange = function () { }, this._xmlDoc.loadXML(n);
        else {
            var t = new DOMParser;
            this._xmlDoc = t.parseFromString(n, "text/xml")
        }
        this._onload && this._onload(this._element, null, null, null, this)
    },
    dispose: function () {
        this._onload && (this._onload = null);
        this._xmlDoc && (this._xmlDoc = null)
    }
};
typeof Sys != "undefined" && Sys.Application.notifyScriptLoaded()