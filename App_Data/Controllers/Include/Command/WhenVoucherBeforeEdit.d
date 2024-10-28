<![CDATA[
#IF @@view = 0 #THEN
  #IF @@action = 'Edit' #THEN
    declare @$lockedDate nvarchar(512), @$denyAccess nvarchar(512), @$checkVoucherLockedDate smalldatetime, @$checkVoucherUnit varchar(32), @$rlockedDate int, @$clockedDate varchar(128), @$alockedDate int, @$mlockedDate nvarchar(4000)
    select @$denyAccess = '$NotAuthorized', @$lockedDate = null, @$checkVoucherLockedDate = null

    select @$checkVoucherLockedDate = ngay_ct, @$checkVoucherUnit = ma_dvcs from @@inquiry$partition$current where stt_rec = @stt_rec
    if @$checkVoucherLockedDate is not null begin
      create table #lockedDate (r int)
      insert into #lockedDate exec fs20_CheckLockedDateOnVoucher @@id, @$checkVoucherLockedDate, @@userID, @$checkVoucherUnit, 1, 1
      if not exists(select * from #lockedDate where r = 1) begin
        select top 1 @$rlockedDate = r from #lockedDate where r <> 1 order by r

        if @$rlockedDate <> 0 begin
          select @$clockedDate = case @$rlockedDate when 2 then 'LockedDate' when 3 then 'UnitLocking' when 4 then 'VoucherLocking' when 5 then 'WorkingDate' else null end, @$lockedDate = case when @@language = 'v' then N'Đã khóa số liệu, kiểm tra lại' else N'Data is locked, you must modify' end,
            @$mlockedDate = case when @@language = 'v' then case @$rlockedDate when 2 then N'ngày khóa sổ' when 3 then N'ngày khóa sổ theo đơn vị' when 4 then N'ngày khóa sổ theo chứng từ' when 5 then N'ngày làm việc' end else case @$rlockedDate when 2 then N'data closing date' when 3 then N'unit locking date' when 4 then N'voucher locking date' when 5 then N'working date' end end
          select @$alockedDate = @@sysDatabaseName.dbo.AI_ERP$System$GetAuthorize(@@admin, @@userID, @$clockedDate, 'Access')
          if @$alockedDate = 1
            select @$lockedDate = @$lockedDate + N' <a href="' + rtrim(link) + '" target="_blank" style="color:#035ab8;">' + @$mlockedDate + '</a>.' from @@sysDatabaseName..wcommand where sysid = @$clockedDate
          else
            select @$lockedDate = case when @@language = 'v' then N'Đã khóa số liệu, liên hệ với người quản trị hệ thống kiểm tra lại' else N'Data is locked, contact the system administrator to check' end + N' <span class="Highlight">' + @$mlockedDate + '</span>.'
        end else select @$lockedDate = case when @@language = 'v' then N'Đã khóa số liệu, liên hệ với người quản trị hệ thống kiểm tra lại <span class="Highlight">ngày giới hạn hệ thống</span>.' else N'Data is locked, contact the system administrator to check <span class="Highlight">system locked date</span>.' end

        select @message as script, @$lockedDate as message
        return
      end
    end
    #IF @@admin <> 1 #THEN
      if not exists(select 1 from sysunitrights where user_id = @@userID and ma_dvcs = @$checkVoucherUnit and r_edit = 1) begin
        select @message as script, @$denyAccess as message
        return
      end
    #END
  #END
#END
]]>