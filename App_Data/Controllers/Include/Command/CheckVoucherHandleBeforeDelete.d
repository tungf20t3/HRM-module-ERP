<![CDATA[
declare @$checkVoucherHandle varchar(32), @ownerID int, @fullDelete bit
select @$checkVoucherHandle = status, @ownerID = user_id0 from @@inquiry$partition$current where stt_rec = @stt_rec
if exists(select 1 from dmttct where ma_ct = @@id and status = @$checkVoucherHandle and xdel = 1) begin
  select '$NotAuthorized' as message
  return
end
#IF @@admin <> 1 #THEN
  if (@$checkVoucherHandle is not null) and exists(select 1 from dmttct where ma_ct = @@id and status = @$checkVoucherHandle and right_yn = 1) begin
    if not exists(select 1 from @@sysDatabaseName..sysactionrights where user_id = @@userID and ma_ct = @@id and action_id = @$checkVoucherHandle and right_yn = 1) begin
      select '$NotAuthorized' as message
      return
    end
    if exists(select 1 from @@sysDatabaseName..sysstatusrights where user_id = @@userID and ma_ct = @@id and status_id = @$checkVoucherHandle and r_del = 1) begin
      select '$NotAuthorized' as message
      return
    end
  end
  if @ownerID <> @@userID begin
    exec @@sysDatabaseName.dbo.AI_ERP$System$GetShareAccess @@id, @@userID, @@admin, 2, @fullDelete output
    if (@fullDelete = 0) begin
      select '$NotAuthorized' as message
      return
    end
  end
#END
]]>