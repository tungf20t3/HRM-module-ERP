﻿<![CDATA[
declare @$lockedDate nvarchar(512)
select @$lockedDate = case when @@language = 'v' then N'Đã khóa số liệu, kiểm tra lại ngày khóa sổ.' else N'Data is locked, you must modify system locked date.' end
if exists(select 1 from dmstt where year(ngay_ks) >= nam_bd) begin
  select 'this._denyNew = true;this._denyEdit = true;this._denyDelete = true;this._denyMessage=''' + @$lockedDate + '''' as message
  return
end
if exists(select 1 from dmdvcsks where ma_dvcs = @@unit and year(ngay_ks) >= (select nam_bd from dmstt)) begin
   select 'this._denyNew = true;this._denyMessage=''' + @$lockedDate + '''' as message
  return
end
if @@admin <> 1 begin
  if not exists(select 1 from sysunitrights where user_id = @@userID and ma_dvcs = @@unit and r_new = 1) begin
    select 'this._denyNew = true;' as message
    return
  end
end
]]>