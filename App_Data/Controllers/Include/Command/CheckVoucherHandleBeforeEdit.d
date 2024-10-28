<![CDATA[
#IF @@view = 0 #THEN
  #IF @@action = 'Edit' #THEN
    declare @$checkVoucherHandle varchar(32), @ownerID int, @fullEdit bit
    select @$checkVoucherHandle = status, @ownerID = user_id0 from @@inquiry$partition$current where stt_rec = @stt_rec
    if exists(select 1 from dmttct where ma_ct = @@id and status = @$checkVoucherHandle and xedit = 1) begin
      select @message as script, '$NotAuthorized' as message
      return
    end
    if (@@admin <> 1) and (@$checkVoucherHandle is not null) and exists(select 1 from dmttct where ma_ct = @@id and status = @$checkVoucherHandle and right_yn = 1) begin
      if not exists(select 1 from @@sysDatabaseName..sysactionrights where user_id = @@userID and ma_ct = @@id and action_id = @$checkVoucherHandle and right_yn = 1) begin
        select @message as script, '$NotAuthorized' as message
        return
      end
      if exists(select 1 from @@sysDatabaseName..sysstatusrights where user_id = @@userID and ma_ct = @@id and status_id = @$checkVoucherHandle and r_edit = 1) begin
        select @message as script, '$NotAuthorized' as message
        return
      end
    end
    #IF @@admin <> 1 #THEN
      if @ownerID <> @@userID begin
        exec @@sysDatabaseName.dbo.AI_ERP$System$GetShareAccess @@id, @@userID, @@admin, 1, @fullEdit output
        if (@fullEdit = 0) begin
          select @message as script, '$NotAuthorized' as message
          return
        end
      end
    #END
  #END
#END
]]>