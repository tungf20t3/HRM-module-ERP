Type.registerNamespace('AI_ERP.AjaxControlExtender');

AI_ERP.AjaxControlExtender.Certificate = function(r, g, id, f) {
    var t = this;
    t._message = AI_ERP.AjaxControlExtender.Certificate.Resources.Message;
    t.init(r, g, id, f);
    t.initObject();
}

AI_ERP.AjaxControlExtender.Certificate.prototype = {
    init: function(r, g, id, f) {
        var t = this;
        t._grid = g;
        t._form = f;
        t._id = id;
        t._r = r;
        t._json = null;
    },
    initObject: function() {
        var o = document.createElement('object'), a = ['id', 'name', 'classid', 'width', 'height'], v = ['TOKENSIGN', 'TOKENSIGN', 'clsid:9803d151-92e3-4729-8e57-b39a2f91546f', '0px', '0px'];
        for (var i = 0; i < a.length; i++) o.setAttribute(a[i], v[i]);
        document.getElementsByTagName('body')[0].appendChild(o);
    },
    dispose: function() { return true; },
    checkPlugin: function(g) { return true; },
    focusString: function() { return String.format('$find(\'{0}\')._focusWhenTabChanged();', this._id) },
    updateSerialNumber: function(g, id, a) {
        var t = this;
        if (!!document.documentMode) {
            var r = ie_getCertificate(), k = Base64.decode(r), p = JSON.parse(k);
            if (p.result == "ok") {
                t.onRequestSerialNumber(g, p.serial, a);
            } else {
                $func.hideWait(id);
                g._busy(false);
            }
        }
        else {
            if (!window.Promise) {
                $func.hideWait(id);
                g._busy(false);
                $message.show(g._language == 'v' ? t._message.Unsupport.v : t._message.Unsupport.e, t.focusString());
                return;
            }
            window.hwcrypto.selectCertSerial
                (
                    { lang: "en" }
                ).then(
                function(r) {
                    t.onRequestSerialNumber(g, r.value.serial, a);
                },
                function(e) {
                    $func.hideWait(id);
                    g._busy(false);
                    $message.show(g._language == 'v' ? t._message.Error.v : t._message.Error.e, t.focusString());
                }
            );
        }
    },
    onRequestSerialNumber: function(g, s, a) {
        var r = (g._activeCell ? g._activeRow : 1);
        g._serial$Number = s;
        g.request(g, a, a, [['serialCertificate', 'String', s], ['profile', 'String', g._getItemValue(r, g._getColumnOrder('ma_kn'))]]);
    },
    onRequestTokenCompleted: function(r, g, id, f) {
        this.init(r, g, id, f);
        var t = this, j = JSON.parse(t._r.Message), hash = [];
        for (var i = 0; i < j.Data.length; i++)
            hash.push(t.getFieldValue(j, i, 'hashValue'));
        t.signHashData(j, t._grid, t._id, hash, t._form);
    },
    onRequestWithTokenCompleted: function(t, r, id) {
        var g = t._grid, msg, v = g._language == 'v', refresh = true, f = t._form;
        if (r.Success == '1') msg = v ? t._message.Successful.v : t._message.Successful.e;
        else {
            msg = (v ? t._message.Error.v : t._message.Error.e);
            if (r.Reference) msg += String.format(' <span class="Highlight">{0}</span>', String.format(r.Message, r.Reference));
        }
        $func.hideWait(id);
        g._busy(false);
        if (f) t.busyPage(f, false);
        $message.show(msg, refresh ? String.format('refresh$Page($find(\'{0}\'));', id) : t.focusString());
        if (f) f.cancelDialog();
    },
    onRequestFailed: function(e, id) {
        var g = $find(id);
        $func.hideWait(id);
        g._busy(false);
        $message.showError(e);
    },

    signHashData: function(j, g, id, hash, f) {
        var t = this, hashType = 'xmlwithcert';
        t._json = j;
        if (!!document.documentMode) {
            var responseCertificate = ie_getCertificate(), keyPair = Base64.decode(responseCertificate), parsed = JSON.parse(keyPair), certificate = parsed.cert;
            var response = ie_signMultiXMLData(hash, {
                hashtype: hashType,
                cer: certificate
            });
            var k = Base64.decode(response);
            var p = JSON.parse(k);

            if (p.result == 'ok') t.signHashValueSuccess(t, p.signature, true);
            else t.signError(t, p);
        }
        else {
            if (!window.Promise) {
                $message.show(g._language == 'v' ? t._message.Unsupport.v : t._message.Unsupport.e, t.focusString());
                return;
            }
            window.hwcrypto.selectCertSerial({ lang: 'en' }).then(function(r) { t.signMultiHash(r, hashType, hash); }, function(e) { t.signError(t, e); });
        }
    },
    signMultiHash: function(response, hashType, hash) {
        var t = this, certificate = response.value.cert;
        window.hwcrypto.signHashData(certificate, { type: hashType, hex: hash }, { lang: 'en' }).then(function(r) { t.signSuccess(r, t); }, function(e) { t.signError(t, e); });
    },
    signSuccess: function(r, t) { t.signHashValueSuccess(t, r.value.signature, true); },
    signHashValueSuccess: function(t, s, b) {
        var id = t._id, j = t._json, g = t._grid, col = ['key', 'idInv', 'pattern', 'serial'], m1 = ['310', '320', '350', '319', '328', '358', '330', '338', '4310', '4320', '4350', '5310', '5320', '5350', '6310', '6320', '6350'], m2 = ['315', '325', '355', '329', '349', '359', '4315', '4325', '4355','5315', '5325', '5355','6315', '6325', '6355'];
        var q = {
            'Header': ['key', 'idInv', 'pattern', 'serial', 'signValue'],
            'Data': [],
            'unit': g._$unit,
            'idNumber': g._$k.toString(),
            'voucherCode': g._$voucherCode
        };
        for (var i = 0; i < j.Data.length; i++) {
            var a = [];
            for (var c = 0; c <= 3; c++) a.push(t.getFieldValue(j, i, col[c]));
            a.push(b ? (s[i].signedValue ? s[i].signedValue : '') : '');
            q.Data.push(a);
        }
        Sys.Net.WebServiceProxy.invoke($func.resolveClientUrl(g._url$EInvoice, g._baseUrl), g._service$Method, false, {
            method: (g._$resign ? m2[g._$resign - 1] : m1[g._$process - 1]),
            action: '320',
            query: Sys.Serialization.JavaScriptSerializer.serialize(q)
        }, function(r, id) { t.onRequestWithTokenCompleted(t, r, id); }, t.onRequestFailed, g._id);
    },
    signError: function(t, e) { t.signHashValueSuccess(t, null, false); },
    busyPage: function(f, type) {
        var id = f._id;
        f._busy = type;
        if (type) $func.showWait(id);
        else $func.hideWait(id);
        $func.enableButtons(!type);
    },
    getFieldValue: function(j, r, n) {
        for (var i = 0; i < j.Header.length; i++) {
            if (n == j.Header[i]) return (j.Data[r][i] ? j.Data[r][i] : '');
        }
        return '';
    },
    signHashValues: function(hash, callbackSucess, callbackError) {
        var t = this, hashType = 'xmlwithcert';
        if (!!document.documentMode) {
            var responseCertificate = ie_getCertificate(), keyPair = Base64.decode(responseCertificate), parsed = JSON.parse(keyPair), certificate = parsed.cert;
            var response = ie_signMultiXMLData(hash, {
                hashtype: hashType,
                cer: certificate
            });
            var k = Base64.decode(response);
            var p = JSON.parse(k);
            if (p.result == 'ok')
                if (typeof callbackSucess === "function") callbackSucess(p.signature);
            else
                if (typeof callbackError === "function") callbackError(p);
        }
        else {
            if (!window.Promise) {
                $message.show(g._language == 'v' ? t._message.Unsupport.v : t._message.Unsupport.e, t.focusString());
                return;
            }
            window.hwcrypto.selectCertSerial({ lang: 'en' }).then(
                function(response) {
                    var cert = response.value.cert;
                    window.hwcrypto.signHashData(cert, { type: hashType, hex: hash }, { lang: 'en' }).then(
                        function(r) { if (typeof callbackSucess === "function") callbackSucess(r.value.signature); },
                        function(e) { if (typeof callbackError === "function") callbackError(e); });
                },
                function(e) { if (typeof callbackError === "function") callbackError(e); }
            );
        }
    }
}

AI_ERP.AjaxControlExtender.Certificate.Resources = {
    Message: {
        Unsupport: { v: 'Trình duyệt chưa được hỗ trợ, liên hệ với người quản trị hệ thống để biết thêm thông tin.', e: 'Unsupported browser, Contact the System administrator for more information.' },
        Successful: { v: 'Chương trình đã thực hiện xong.', e: 'The process was completed successfully.' },
        Error: { v: 'Phát sinh lỗi trong quá trình thực hiện.', e: 'The process was failed.' }
    }
}
if (typeof (Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();