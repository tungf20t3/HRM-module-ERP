<fields identity="true" name="stt" index="&SVTranViewIndex;">
  <field name="ma_kh" column="A" allowNulls="false" upperCase="true" resource="master" check="ma_kh not in (select ma_kh from dmkh)" errorCode="00001" category="1"/>
  <field name="ngay_ct" column="C" allowNulls="false" type="DateTime" resource="master, detail, inquiry, general"/>
  <field name="so_ct" column="D" allowNulls="false" upperCase="true" resource="master, detail, inquiry, general"/>
  <field name="so_seri" column="E" allowNulls="false" upperCase="true" resource="master"/>
  <field name="dien_giai" column="F" resource="master"/>
  <field name="ma_nvbh" column="G" upperCase="true" resource="master" check="ma_nvbh &lt;&gt; '' and ma_nvbh not in (select ma_nvbh from dmnvbh)" errorCode="00001" category="1"/>

  <field name="ma_vt" column="I" allowNulls="false" reference="1" upperCase="true" resource="detail" check="ma_vt not in (select ma_vt from dmvt)" errorCode="00001" category="2"/>
  <field name="dvt" column="K" reference="1" resource="detail"/>
  &VoucherGoodsTypeImportFields;
  &PromotionFields;
  <field name="ma_kho" column="L" reference="1" upperCase="true" resource="detail" check="ma_kho not in (select ma_kho from dmkho)&And;exists(select 1 from #unit b where @@table.ngay_ct = b.ngay_ct and @@table.so_ct = b.so_ct having count(b.ma_dvcs) > 1)" errorCode="00001&And;00002" category="3"/>
  <field name="ma_vi_tri" column="M" reference="1" upperCase="true" resource="detail" check="@localtionCheck = 1 and @@table.ma_vi_tri = '' and exists(select 1 from dmvitri b where @@table.ma_kho = b.ma_kho)&And;@localtionCheck = 1 and @@table.ma_vi_tri &lt;&gt; '' and not exists(select 1 from dmvitri b where @@table.ma_kho = b.ma_kho and @@table.ma_vi_tri = b.ma_vi_tri)" errorCode="invalidValueMessage&And;00001" category="3"/>
  <field name="ma_lo" column="N" reference="1" upperCase="true" resource="detail" check="@lotCheck = 1 and @@table.ma_lo = '' and exists(select 1 from dmvt b where @@table.ma_vt = b.ma_vt and b.lo_yn = 1)&And;@lotCheck = 1 and @@table.ma_lo &lt;&gt; '' and not exists(select 1 from dmvt b where @@table.ma_vt = b.ma_vt and b.lo_yn = 1)&And;ma_lo &lt;&gt; '' and not exists(select 1 from dmlo b where @@table.ma_vt = b.ma_vt and @@table.ma_lo = b.ma_lo)"  errorCode="invalidValueMessage&And;00002&And;00001" category="3"/>
  <field name="so_luong" column="O" type="Decimal" resource="detail" check="exists(select 1 from dmvt b where @@table.ma_vt = b.ma_vt and b.gia_ton = 3 and @@table.so_luong = 0)" errorCode="00002" category="3"/>
  <field name="gia_nt2" column="P" type="Decimal" resource="detail"/>
  <field name="tien_nt2" column="Q" type="Decimal" resource="detail"/>
  <field name="tl_ck" column="R" type="Decimal" resource="detail"/>
  <field name="ck_nt" column="S" type="Decimal" resource="detail"/>

  <field name="ma_thue" column="T" allowNulls="false" upperCase="true" resource="master" check="ma_thue not in (select ma_thue from dmthue)" errorCode="00001" category="3"/>
  <field name="thue_nt" column="U" type="Decimal" resource="detail"/>

  <field name="ma_nt" column="V" upperCase="true" resource="master" check="ma_nt not in (select ma_nt from dmnt)" errorCode="00001" category="3"/>
  <field name="ty_gia" column="W" type="Decimal" defaultValue="1" resource="master"/>

  <field name="tk" column="X" upperCase="true" resource="master" check="tk not in (select tk from dmtk where loai_tk = 1)" errorCode="00001" category="3"/>
  <field name="tk_dt" column="Y" reference="1" upperCase="true" resource="detail" check="tk_dt not in (select tk from dmtk where loai_tk = 1)" errorCode="00001" category="3"/>
  <field name="tk_ck" column="Z" reference="1" upperCase="true" resource="detail" check="tk_ck &lt;&gt; '' and tk_ck not in (select tk from dmtk where loai_tk = 1)" errorCode="00001" category="3"/>

  <field name="tk_gv" column="AA" reference="1" upperCase="true" resource="detail" check="tk_gv not in (select tk from dmtk where loai_tk = 1)" errorCode="00001" category="3"/>
  &PromotionAccountFields;

  <field name="tk_thue_co" column="AB" upperCase="true" resource="master" check="tk_thue_co not in (select tk from dmtk where loai_tk = 1)" errorCode="00001" category="3"/>
  <field name="ma_kh2" column="AC" upperCase="true" resource="master" check="ma_kh2 = '' and exists(select 1 from dmtk b where @@table.tk_thue_co = b.tk and b.tk_cn = 1)&And;ma_kh2 &lt;&gt; '' and not exists(select 1 from dmkh b where @@table.ma_kh2 = b.ma_kh)" errorCode="invalidValueMessage&And;00001" category="3"/>

  <field name="ma_tt" column="AD" upperCase="true" resource="master" check="ma_tt &lt;&gt; '' and ma_tt not in (select ma_tt from dmtt)" errorCode="00001" category="3"/>

  <field name="px_gia_dd" column="AE" type="Boolean" resource="detail"/>
  <field name="gia_nt" column="AF" type="Decimal" resource="detail"/>
  <field name="tien_nt" column="AG" type="Decimal" resource="detail"/>

  <field name="ma_vv" column="AH" reference="1" upperCase="true" resource="detail" check="ma_vv &lt;&gt; '' and ma_vv not in (select ma_vv from dmvv)" errorCode="00001" category="3"/>
  <field name="ma_bp" column="AI" reference="1" upperCase="true" resource="detail" check="ma_bp &lt;&gt; '' and ma_bp not in (select ma_bp from dmbp)" errorCode="00001" category="3"/>
  <field name="so_lsx" column="AJ" reference="1" upperCase="true" resource="detail" check="so_lsx &lt;&gt; '' and so_lsx not in (select so_lsx from phlsx)" errorCode="00001" category="3"/>
  <field name="ma_sp" column="AK" reference="1" upperCase="true" resource="detail" check="ma_sp &lt;&gt; '' and ma_sp not in (select ma_vt from vdmsp)" errorCode="00001" category="3"/>
  <field name="ma_hd" column="AL" reference="1" upperCase="true" resource="detail" check="ma_hd &lt;&gt; '' and ma_hd not in (select ma_hd from dmhd)" errorCode="00001" category="3"/>
  <field name="ma_phi" column="AM" reference="1" upperCase="true" resource="detail" check="ma_phi &lt;&gt; '' and ma_phi not in (select ma_phi from dmphi)" errorCode="00001" category="3"/>
  <field name="ma_ku" column="AN" reference="1" upperCase="true" resource="detail" check="ma_ku &lt;&gt; '' and ma_ku not in (select ma_ku from dmku)" errorCode="00001" category="3"/>

  <field name="stt_rec" column="None" resource="master, detail, inquiry, general"/>
  <field name="stt_rec0" column="None" resource="detail"/>
  <field name="ma_dvcs" column="None" resource="master, inquiry, general"/>
  <field name="ma_ct" column="None" insertValue="@voucherID" expression="''' + @voucherID + '''" resource="master, detail"/>
  <field name="loai_ct" column="None" insertValue="'2'" expression="''2''" resource="master"/>
  <field name="ma_gd" column="None" insertValue="'2'" expression="''2''" resource="master"/>
  <field name="ngay_lct" column="None" type="DateTime" insertValue="ngay_ct" resource="master"/>
  <field name="tk_vt" column="None" resource="detail"/>
  <field name="tk_thue_no" column="None" insertValue="tk" resource="master"/>

  <field name="he_so" column="None" type="Decimal" resource="detail"/>
  <field name="gia2" column="None" type="Decimal" resource="detail"/>
  <field name="thue" column="None" type="Decimal" resource="detail"/>

  <field name="tien2" column="None" type="Decimal" resource="detail"/>
  <field name="ck" column="None" type="Decimal" resource="detail"/>
  <field name="line_nbr" column="None" type="Int" resource="detail"/>

  <field name="gia" column="None" type="Decimal" resource="detail"/>
  <field name="tien" column="None" type="Decimal" resource="detail"/>
  <field name="t_tien" column="None" type="Decimal" resource="master"/>
  <field name="t_tien_nt" column="None" type="Decimal" resource="master"/>

  <field name="t_so_luong" column="None" type="Decimal" resource="master"/>
  <field name="t_thue" column="None" type="Decimal" resource="master"/>
  <field name="t_thue_nt" column="None" type="Decimal" resource="master"/>
  <field name="t_tien2" column="None" insertValue="t_tien2&VoucherGoodsTypeImportFieldMasterInsertTotal.BaseCurrency;" type="Decimal" resource="master"/>
  <field name="t_tien_nt2" column="None" insertValue="t_tien_nt2&VoucherGoodsTypeImportFieldMasterInsertTotal.ForeignCurrency;" type="Decimal" resource="master"/>
  <field name="t_tc_tien2" column="None" insertValue="t_tien2 + t_ck&PromotionFieldMasterInsertTotal.BaseCurrency;&VoucherGoodsTypeImportFieldMasterInsertTotal.BaseCurrency;" type="Decimal" resource="master"/>
  <field name="t_tc_tien_nt2" column="None" insertValue="t_tien_nt2 + t_ck_nt&PromotionFieldMasterInsertTotal.ForeignCurrency;&VoucherGoodsTypeImportFieldMasterInsertTotal.ForeignCurrency;" type="Decimal" resource="master"/>
  <field name="t_tc_thue" column="None" insertValue="t_thue" type="Decimal" resource="master"/>
  <field name="t_tc_thue_nt" column="None" insertValue="t_thue_nt" type="Decimal" resource="master"/>
  <field name="t_tt" column="None" insertValue="t_tien2 + t_thue&VoucherGoodsTypeImportFieldMasterInsertTotal.BaseCurrency;" type="Decimal" resource="master"/>
  <field name="t_tt_nt" column="None" insertValue="t_tien_nt2 + t_thue_nt&VoucherGoodsTypeImportFieldMasterInsertTotal.ForeignCurrency;" type="Decimal" resource="master"/>

  <field name="t_ck_nt" column="None" type="Decimal" resource="master"/>
  <field name="t_ck" column="None" type="Decimal" resource="master"/>

  &PromotionTotalFields;

  <field name="c$" column="None" resource="inquiry"/>
  <field name="m$" column="None" resource="inquiry"/>
  <field name="d$" column="None" resource="inquiry"/>
  <field name="e$" column="None" resource="inquiry"/>

  <field name="status" column="None" insertValue="@status" expression="' + @status + '" resource="master, inquiry, general"/>
  <field name="datetime0" column="None" type="DateTime" insertValue="@datetime0" expression="''' + @datetime0 + '''" resource="master"/>
  <field name="datetime2" column="None" type="DateTime" insertValue="@datetime0" expression="''' + @datetime0 + '''" resource="master"/>
  <field name="user_id0" column="None" type="Int" insertValue="@user" expression="' + rtrim(@user) + '" resource="master, inquiry, general"/>
  <field name="user_id2" column="None" type="Int" insertValue="@user" expression="' + rtrim(@user) + '" resource="master"/>
</fields>