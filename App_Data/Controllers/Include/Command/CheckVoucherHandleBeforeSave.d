﻿<![CDATA[
#IF @@admin <> 1 #THEN
  if exists(select 1 from dmttct where ma_ct = @@id and status = @status and right_yn = 1) begin
    if not exists(select 1 from @@sysDatabaseName..sysactionrights where user_id = @@userID and ma_ct = @@id and action_id = @status and right_yn = 1) begin
      select '$NotAuthorized' as message
      return
    end
  end
#END
]]>