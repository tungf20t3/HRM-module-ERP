<![CDATA[
function initialize(f, contact, transactionCode, transactionType, handle) {
  var g = f.grid, fields = f.grid._dirInfor.Fields;
  if (g._dvContactType != null && contact) $func.findField(contact, fields).Disabled = (f.grid._dvContactType == 0);
  if (g._dvTransactionCode != null && transactionCode) $func.findField(transactionCode, fields).DefaultValue = g._dvTransactionCode;
  if (g._dvTransactionType != null && transactionType) $func.findField(transactionType, fields).DefaultValue = g._dvTransactionType;
  if (g._dvHandle != null && handle) $func.findField(handle, fields).ClientDefault = g._dvHandle;
}
function udf$Detail$(g, force) {
  var v = g.get_element().parentForm.grid;
  if (force) {
    var n = g._getColumnOrder('ma_vv');
    if (n > 0) {
      g._fields[n - 1].HandleRight = true;
      force = null;
    }
  }
  udf$Field$(g, 'ma_bp', force, v._udfDepartment);
  udf$Field$(g, 'so_lsx', force, v._udfMO);
  udf$Field$(g, 'ma_sp', force, v._udfProduct);
  udf$Field$(g, 'ma_hd', force, v._udfContract);
  udf$Field$(g, 'ma_phi', force, v._udfExpense);
  udf$Field$(g, 'ma_ku', force, v._udfLoanContract);
}
function udf$Field$(g, c, force, visible) {
  var n = g._getColumnOrder(c);
  if (n > 0) {
    try {
      if (!visible) g._setColumnVisible(n, false);
      if (force && !g.HandleRight) {
        g._fields[n - 1].HandleRight = true;
        g.HandleRight = true;
      }
    } catch (ex) {};
  }
}
]]>