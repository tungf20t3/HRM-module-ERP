﻿<![CDATA[
objectBehavior$Dir$Code = {
  create: function(f, check, code, table) {
    f._checkValidCodeFields = check;
    if (code) {
      f._suggestionCode = code;
      f._suggestionTable = table;
      f._suggestionElement = f.getItem(code);
      f._suggestionKeyHandler = Function.createDelegate(this, this.onKeydown);
      $addHandler(f._suggestionElement, 'keydown', f._suggestionKeyHandler);
      if (!this._suggestionElements) this._suggestionElements = [];
      Array.add(this._suggestionElements, f._suggestionElement.id);
    }
  },
  dispose: function(f) {
    if (this._suggestionElements) {
      var index = this._suggestionElements.length;
      if (index > 0) Array.removeAt(this._suggestionElements, index - 1);
    }
    if (f._suggestionKeyHandler) {
      $removeHandler(f._suggestionElement, 'keydown', f._suggestionKeyHandler);
      f._suggestionKeyHandler = null;
    }
  },
  onKeydown: function(e) {
    if (e.keyCode == Sys.UI.Key.down) {
      if (this._suggestionElements) {
        var index = this._suggestionElements.length;
        if (index > 0) {
          var f = $get(this._suggestionElements[index - 1]).parentForm;
          if (f._action != 'New') return;
          var v = f._suggestionElement.value;
          if (v.length > 0) f.request('Suggestion', 'Suggestion', [['suggestionCode', 'String', f._suggestionCode], ['suggestionTable', 'String', f._suggestionTable], ['suggestionValue', 'String', v]]);
        }
      }
    }
  },
  suggestion: function(f, r) {
    var v = $func.increaseNumber(r);
    var l1 = $func.trim(f._suggestionElement.value).length, l2 = $func.trim(v).length;
    if (l2 > l1) {
      f._suggestionElement.value = v;
      $func.setSelectionRange(f._suggestionElement, l1, l2);
    }
  },
  checkCode: function(f, force) {
    if (f._checkValidCodeFields) {
      var a = f._checkValidCodeFields.split(',');
      var s = '\'`~!@#$%^&*(),;"<>?/\\,_';
      var d = $func.htmlEncode(s);
      var r = /[^\u0000-\u00ff]/;
      for (var i = 0; i < a.length; i++) {
        var e = null, name = $func.trim(a[i]);
        var o = f.getItem(name);
        var c = o.value, l = o.field.Label;
        if (c.length > 0) {
          if (c[0] == ' ') e = true;
          else {
            for (var j = 0; j < c.length; j++) {
              if (s.indexOf(c[j]) >= 0) {
                e = true;
                break;
              }
            }
            if !(e || force) {e = (r.test(c));}
          }
        }
        if (e) {
          var msg = (f._language == 'v' ? 'Trường <span class="Highlight">{0}</span> không được phép có khoảng trắng ở đầu hoặc chứa các ký tự: <span class="Highlight">{1} hoặc ký tự đặc biệt khác</span>.' : 'Field <span class="Highlight">{0}</span> cannot contain blank at the beginning or any of the following characters: <span class="Highlight">{1} or other special character</span>.');
          msg = String.format(msg, l, d);
          f._checked = false;
          $func.hideWait(f.get_id());
          $message.show(msg, String.format('$find(\'{0}\').getItem(\'' + name + '\').focus();', f.get_id()));
          return false;
        }
      }
    }
    return true;
  }
}
]]>