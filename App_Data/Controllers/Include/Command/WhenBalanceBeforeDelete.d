﻿<![CDATA[
if @@admin <> 1 begin
  if not exists(select 1 from sysunitrights where user_id = @@userID and ma_dvcs = @ma_dvcs and r_del = 1) begin
    select '$NotAuthorized' as message
    return
  end
end
declare @$lockedDate nvarchar(512)
select @$lockedDate = case when @@language = 'v' then N'Đã khóa số liệu, kiểm tra lại ngày khóa sổ.' else N'Data is locked, you must modify system locked date.' end
if exists(select 1 from dmdvcsks where ma_dvcs = @ma_dvcs and year(ngay_ks) >= (select nam_bd from dmstt)) begin
  select @$lockedDate as message
  return
end
]]>