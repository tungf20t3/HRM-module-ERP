<![CDATA[
function objectBehavior$Grid$Irregular(g, checkValidCodeFields, force, source, none) {
  if (checkValidCodeFields) {
    var a = checkValidCodeFields.split(',');
    var s = source ? source : '\'`~!@#$%^&*(),;"<>?/\\,_';
    var d = $func.htmlEncode(s);
    var r = /[^\u0000-\u00ff]/;
    for (var i = 0; i < a.length; i++) {
      var e = null, u, name = $func.trim(a[i]), col = g._getColumnOrder(name);
      for (var row = 1; row <= g._rowCount; row++) {
        var o = g._getItem(row, col);
        var c = o.value, l = g._fields[col - 1].Label;
        if (c.length > 0) {
          if (c[0] == ' ') e = true;
          else {
            for (var j = 0; j < c.length; j++) {
              if (s.indexOf(c[j]) >= 0) {
                e = true;
                break;
              }
            }
            if !(e || none) {e = (r.test(c));}
          }
        }
        if (e) {
          g._errorObject = o;
          var msg = (g._language == 'v' ? 'Trường <span class="Highlight">{0}</span> không được phép có khoảng trắng ở đầu hoặc chứa các ký tự: <span class="Highlight">{1} hoặc ký tự đặc biệt khác</span>.' : 'Field <span class="Highlight">{0}</span> cannot contain blank at the beginning or any of the following characters: <span class="Highlight">{1} or other special character</span>.');
          msg = String.format(msg, l, d);
          g._errorMsg = msg;
          return false;
        }
      }
    }
  }
  return true;
}
]]>