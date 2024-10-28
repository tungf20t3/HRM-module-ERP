<![CDATA[
function load$GridReport$(g) {
  g.add_onRender(on$GridReport$Render);
  g.add_commandEvent(on$GridReport$ExecuteCommand);
}
function dispose$GridReport$(g) {
  try {g.remove_commandEvent(on$GridReport$ExecuteCommand);} catch (ex) {}
  try {g.remove_onRender(on$GridReport$Render);} catch (ex) {}
}
function on$GridReport$ExecuteCommand(sender, e) {
  var action = e.type.Action, g = sender;
  switch (action) {
    case 'View':
      e.type.cancelEvent = true;
      if ($func.trim(g._getItemValue(g._activeRow, g._getColumnOrder(']]>&k;<![CDATA[')))) g._navigate(g._activeCell, ']]>&Url;<![CDATA[');
      break;
    default:
      break;
  }
}
function passQueryParameters(g) {]]>&Parameter;<![CDATA[
  var a = []]>&Memvar;<![CDATA[], c = $func.dataFieldName(']]>&Fields;<![CDATA[', g._language).split(','), seprate = ]]>&Seprate;<![CDATA[;
  for (var i = 0; i < c.length; i++) {
    var name = $func.trim(c[i]).split(:), c1 = name[0], c2 = (name.length > 1 ? name[1] : c1);
    var value = (i < seprate ? $func.findMemvar(c1, g._memvars).NewValue : g._getItemValue(g._activeRow, g._getColumnOrder(c1)));
    var memvar = {Name: c2, Value: value};
    Array.add(a, memvar);
  }
  var session = {Memvar: a, Script: 'this._convection = true;']]>&Session;<![CDATA[};
  g._passParameter(session);
}
function on$GridReport$Render(sender, eventArgs) {
  var g = eventArgs.grid;  
  if (g._hiddenFields) {
    var a = g._hiddenFields, h = '';
    for (var i = 0; i < a.length; i++) {
      setGridHiddenFields(g, a[i].Fields, a[i].Value);
      if (a[i].Value) h += (h == '' ? '' : ',') + a[i].Fields;
    }
    g._externalHiddenFields = h;
  }
}
function setGridHiddenFields(g, c, v) {
  var a = c.split(',');
  for (var i = 0; i < a.length; i++) {    
    g._setColumnVisible(g._getColumnOrder($func.trim(a[i])), !v);
  }
}
function beforeDrillDown(g) {g._args.cancelEvent = !($func.trim(g._getItemValue(g._activeRow, g._activeColumn)));}
function formatDateView(c) {return String.format('{0}/{1}/{2}', c.substring(6, 8), c.substring(4, 6), c.substring(0, 4));}
]]>