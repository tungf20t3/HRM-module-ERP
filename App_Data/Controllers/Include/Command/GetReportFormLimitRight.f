﻿<![CDATA[
if @@admin <> 1 begin
  if exists(select 1 from @@sysDatabaseName..sysvaluelimits where user_id = @@userID) or exists(select 1 from @@sysDatabaseName..sysvaluelimitsdetail where user_id = @@userID and controller = ']]>&Controller;<![CDATA[') begin
    select @message = 'setReportForm$LimitRight(this, ''' + replace(isnull(filter_form_default, ''), ' ', '') + ''', ''' + replace(isnull(filter_form_hidden, ''), ' ', '') + ''', ''' + replace(isnull(grid_form_hidden, ''), ' ', '') + ''', 1);'
      from @@sysDatabaseName..sysvaluelimitsdeclare
      where controller = ']]>&Controller;<![CDATA['
  end
  
  declare @stockRights char(1)
  select @stockRights = dbo.AI_ERP$Function$System$GetStockRights(@@userID)
  if (@stockRights != '*') select @message = @message + 'setReportForm$RemoveOptionValue(this, ''loai_du_lieu'', ' + case when @stockRights = '1' then '''2, 4'', 1' else '''1, 3'', 2' end + ');'
end
select @message = @message + 'setReportForm$InactivateSelection(this, ''mau_bc, loai_du_lieu'');'
]]>