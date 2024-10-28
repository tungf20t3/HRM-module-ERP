<![CDATA[
function dispose$GridVoucherCharge$(b){b.$a=null;try{b.remove_commandEvent(on$GridVoucherCharge$ExecuteCommand)}catch(a){}try{b.remove_itemValueChanged(onChange$GridVoucherCharge$)}catch(a){}}function onChange$GridVoucherCharge$(c,a){var e=a.get_object(),g=e.grid,d=g.get_element().parentForm,b=e.field.Name;switch(b){case"tien_cp_nt":g.validExpression(e,[g.$a.y_tien_cp],[g.$a.t_cp_nt,g.$a.t_cp],[g.$a.t_tt_nt,g.$a.t_tt],"tien_cp");break;case"tien_cp":g.validExpression(e,null,[g.$a.t_cp],[g.$a.t_tt]);break;default:break}}function on$GridVoucherCharge$ExecuteCommand(a,d){var c=d.type.Action,g=a,b=g.get_element().parentForm;switch(c){case"AfterRemoveRow":on$GridVoucherCharge$RowChange(g,b);break;case"AfterCloneRow":g.setItemFieldValue("stt_rec0",d.type.Value,"");on$GridVoucherCharge$RowChange(g,b);break;default:break}}function on$GridVoucherCharge$RowChange(b,a){b.executeAggregate([b.$a.t_cp_nt,b.$a.t_cp]);a.executeExpression([b.$a.t_tt_nt,b.$a.t_tt])};
function load$GridVoucherCharge$(y) {
  y.add_itemValueChanged(onChange$GridVoucherCharge$);
  y.add_commandEvent(on$GridVoucherCharge$ExecuteCommand);
  y.$a = {
    y_tien_cp: '[tien_cp]:=[tien_cp_nt]*[$ty_gia]',
    t_cp_nt: ['t_cp_nt', 'tien_cp_nt'],
    t_cp: ['t_cp', 'tien_cp']
]]>