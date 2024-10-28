<![CDATA[
function initFormFilter(f) {
  var t = f.getItem('chon_tt'), r;
  r = (f._reportType == 1 ? 3 : 2);
  t.remove(r);
  t.options[0].selected = true;
}
]]>