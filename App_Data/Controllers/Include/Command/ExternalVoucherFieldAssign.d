﻿<![CDATA[
#IF @@action = 'New' #THEN
  declare @currentDate smalldatetime
  select @currentDate = convert(char(8), getdate(), 112)
  if @voucherBook <> '' begin
    if not exists(select 1 from v20dmnk where status = 1 and ma_nk = @voucherBook and so_ct0 <> so_ct2 and (ma_dvcs = @@unit or ma_dvcs = '') and (@currentDate between ngay_hl_tu and ngay_hl_den or ((ngay_hl_tu is null and @currentDate <= ngay_hl_den) or (ngay_hl_den is null and ngay_hl_tu <= @currentDate)) or (ngay_hl_tu is null and ngay_hl_den is null)) and ma_nk in (select ma_nk from v20dmctnk where ma_ct = @@id and (lstuser = '' or charindex(rtrim(@@userName) + ',', replace(lstuser, ' ', '') + ',') > 0))) begin
      select @voucherBook = ''
    end
  end
#END

if @voucherBook = '' select @currentNumber = '', @minNumber = '', @maxNumber = ''
  else select @currentNumber = rtrim(ltrim(so_ct0)), @minNumber = rtrim(ltrim(so_ct1)), @maxNumber = rtrim(ltrim(so_ct2)) from v20dmnk where ma_nk = @voucherBook
#IF @@action = 'New' and @@copying = 0 #THEN
  select @defaultExchangeRate = ty_gia from (select top 1 ty_gia from dmtgnt where ma_nt = @defaultCurrency and ngay_ct <= getdate() order by ngay_ct desc) a
#END
]]>