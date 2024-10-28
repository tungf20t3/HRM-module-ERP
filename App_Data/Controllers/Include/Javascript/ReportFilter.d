<![CDATA[
function remove$GridReport$Filter(g) {
  var h = [], a = g._hiddenFields, r = [], name, i, j;
  if (g._externalHiddenFields) h = g._externalHiddenFields.replace(/ /g,'').split(',');
  for (i = 0; i < a.length; i++) {
    var fields = a[i].Fields.replace(/ /g,'').split(','), value = a[i].Value;
    for (j = 0; j < fields.length; j++) {
      var name = fields[j];
      if (value || h.includes(name)) Array.add(r, name);
    }
  }
  for (i = 0; i < r.length; i++) {
    for (var j = 0; j < g._filter.length; j++) {
      name = $func.dataFieldName(r[i], g._language)
      var field = $func.findField(name, g._fields)
      if (field) field.FilterPanelValue = '';
      if (g._filter[j].match(/^(\w+):/)[1] == name) {
        Array.removeAt(g._filter, j);
        break;
      }
    }
  }
}
]]>