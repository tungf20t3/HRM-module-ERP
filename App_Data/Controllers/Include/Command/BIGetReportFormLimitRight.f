<![CDATA[
if @@admin <> 1 begin
  if exists(select 1 from @@sysDatabaseName..sysvaluelimits where user_id = @@userID) or exists(select 1 from @@sysDatabaseName..sysvaluelimitsdetail where user_id = @@userID and controller = ']]>&Controller;<![CDATA[') begin
    select @message = 'setReportForm$LimitRight(this, ''' + replace(isnull(filter_form_default, ''), ' ', '') + ''', ''' + replace(isnull(filter_form_hidden, ''), ' ', '') + ''', ''' + replace(isnull(grid_form_hidden, ''), ' ', '') + ''', 1);'
      from @@sysDatabaseName..sysvaluelimitsdeclare
      where controller = ']]>&Controller;<![CDATA['
  end
end
select @message = @message + 'setReportForm$InactivateSelection(this, ''mau_bc, loai_du_lieu'');'
]]>