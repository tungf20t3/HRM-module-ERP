<![CDATA[
declare @$exists nvarchar(512), @$warning nvarchar(4000), @$idVoucherNumber char(13)
select @$warning = ''
select @$exists = case when @@language = 'v' then N'Số chứng từ <span class="Highlight">%s</span> không đúng hoặc đã có trong chứng từ.' else N'The invoice number <span class="Highlight">%s</span> is invalid or already exists.' end
create table #checkNumber (r int)
select @so_ct = space(datalength(@so_ct) - len(rtrim(@so_ct))) + rtrim(@so_ct), @$idVoucherNumber = case when @@action = 'New' then '' else @stt_rec end
insert into #checkNumber exec AI_ERP$App$CheckVoucherNumber @ma_nk, @@id, @ngay_ct, @so_ct, @@master, @$idVoucherNumber
if exists(select * from #checkNumber where r = 0) begin
  select 'so_ct' as field, replace(@$exists, '%s', replace(replace(replace(rtrim(@so_ct), '&', '&amp;'), '<', '&lt;'), '>', '&gt;')) as message
  return
end else begin if exists(select * from #checkNumber where r = -1) select @$warning = @$warning + replace(@$exists, '%s', replace(replace(replace(rtrim(@so_ct), '&', '&amp;'), '<', '&lt;'), '>', '&gt;')) end
]]>