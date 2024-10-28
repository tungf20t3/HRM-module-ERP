﻿<![CDATA[
objectBehavior$Dir$Irregular = {
  checkCode: function(f, checkValidCodeFields, force, source) {
    if (checkValidCodeFields) {
      var a = checkValidCodeFields.split(',');
      var s = source ? source : '\'`~!@#$%^&*(),;"<>?/\\,_';
      var d = $func.htmlEncode(s);
      var r = /[^\u0000-\u00ff]/;
      for (var i = 0; i < a.length; i++) {
        var e = null, u, name = $func.trim(a[i]);
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