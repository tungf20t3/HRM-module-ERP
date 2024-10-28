﻿<![CDATA[
function isCheck$Grid(g) {
  var msg = (g._language == 'v' ? 'Chưa có bản ghi nào được chọn, phải đánh dấu trước khi thực hiện chức năng này.' : 'No record selected, please select at least one record to process.');
  if (g._$k.length == 0) {
    $message.show(msg, String.format('$find(\'{0}\')._focusWhenTabChanged();', g.get_id()));
    return false;
  }
  return true;
}
function fill$Grid(g, f) {
  if (f && g._$k.length == 0) return;
  for (var r = 1; r <= g._rowCount; r++) {
    var k = row$Key(g, r), i = Array.indexOf(g._$k, k);
    g._setItemValue(r, g._$t, (i > -1));
  }
}
function toggle$Grid(o) {
  var c = o.parentNode.parentNode.parentNode.id, g = $find($func.left(c, c.length - 11));
  for (var r = 1; r <= g._rowCount; r++) {
    var k = row$Key(g, r), i = Array.indexOf(g._$k, k);
    if (i == -1) Array.add(g._$k, k);
      else Array.removeAt(g._$k, i);
    g._setItemValue(r, g._$t, (i == -1));
  }
  g._focusWhenTabChanged();
}
function onChange$SelectedValue(o) {
  var r = $func.getLocationCell(o)[0], g = $find(o.id.split('_inputCell_')[0]), k = row$Key(g, r), i = Array.indexOf(g._$k, k);
  if (i == -1) Array.add(g._$k, k);
    else Array.removeAt(g._$k, i);
}
function row$Key(g, r) {return g._getItemValue(r, g._$i);}
]]>