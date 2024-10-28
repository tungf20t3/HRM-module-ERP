<![CDATA[
declare @$lockedDate nvarchar(512)
select @$lockedDate = case when @@language = 'v' then N'Đã khóa số liệu, kiểm tra lại ngày giới hạn hoặc ngày khóa sổ.' else N'Data is locked, you must modify system locked date.' end
if exists(select 1 from dmstt where ngay_ks >= cast(str(@nam, 4) + replace(str(@ky1, 2), ' ', '0') + '01' as smalldatetime)) begin
  select 'ky1' as field, @$lockedDate as message
  return
end
if @ma_kho <> '' begin
	if exists(select 1 from dmdvcsks where ma_dvcs in (select ma_dvcs from dmkho where ma_kho = @ma_kho) and ngay_ks >= cast(str(@nam, 4) + replace(str(@ky1, 2), ' ', '0') + '01' as smalldatetime)) begin
	  select 'ky1' as field, @$lockedDate as message
	  return
	end
end else begin
  if @ma_nh <> '' begin
    if exists(select 1 from dmdvcsks where ma_dvcs in (select distinct ma_dvcs from dmkho where ma_nh = @ma_nh) and ngay_ks >= cast(str(@nam, 4) + replace(str(@ky1, 2), ' ', '0') + '01' as smalldatetime)) begin
	  select 'ky1' as field, @$lockedDate as message
	  return
    end
  end else begin
    if exists(select 1 from dmdvcsks where ma_dvcs in (select ma_dvcs from sysunitrights where user_id = @@userID) and ngay_ks >= cast(str(@nam, 4) + replace(str(@ky1, 2), ' ', '0') + '01' as smalldatetime)) begin
	  select 'ky1' as field, @$lockedDate as message
	  return
    end
  end
end
]]>