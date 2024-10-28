<![CDATA[
function getQueryFilterString(f, s) {
  var q = '', a = s.split(',');
  for (var i = 0; i < a.length; i++) {
    var c = $func.trim(a[i]), e = c.endsWith('*');
    if (e) c = c.substring(0, c.length - 1);
    var o = f.getItem(c), v = (o ? f.getItemValue(c) : c);
    if (e) v = base64EncodeUnicode(v);
    q += String.fromCharCode(253);
    if (o) {
      switch (o.field.Type) {
        case 'DateTime':
          q += v ? $func.formatDateOrder(v) : 'null';
          break;
        case 'Boolean':
          q += (v ? '1' : '0');
          break;
        case 'Int16':
        case 'Int32':
        case 'Int64':
        case 'Decimal':
          q += (v);
          break;
        default:
          q += $func.replace(v, '\'', String.fromCharCode(252));
          break;
      }
    } else q += $func.replace(v, '\'', String.fromCharCode(252));
  }
  return q;
}
function base64EncodeUnicode(v) {
  b = encodeURIComponent(v).replace(/%([0-9A-F]{2})/g, function (match, p) {
    return String.fromCharCode('0x' + p);
  });
  return btoa(b);
}
]]>