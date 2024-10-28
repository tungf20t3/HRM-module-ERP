<![CDATA[
declare @wsID varchar(1)
select @wsID = rtrim(val) from options where name = 'm_ws_id'
create table #idNumber (stt_rec varchar(32))
insert into #idNumber exec AI_ERP$App$GetIdentityNumber @wsID, @@id, @@master, @@userID
select @stt_rec = stt_rec from #idNumber
drop table #idNumber
]]>