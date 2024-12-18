<fields identity="true" name="stt" index="&PMTranViewIndex;">
  <field name="ma_kh" column="." allowNulls="false" upperCase="true" resource="master" list="#detailData" check="ma_kh not in (select ma_kh from dmkh)" errorCode="00001" category="1"/>
  <field name="ngay_ct" column="." allowNulls="false" type="DateTime" resource="master, detail, tax, charge, inquiry, general, inputTax"/>
  <field name="so_ct" column="." allowNulls="false" upperCase="true" resource="master, detail, tax, charge, inquiry, general, inputTax"/>
  <field name="ngay_ct0" column="." type="DateTime" resource="master"/>
  <field name="so_ct0" column="." upperCase="true" resource="master"/>
  <field name="so_seri0" column="." upperCase="true" resource="master"/>
  <field name="dien_giai" column="." resource="master"/>

  <field name="ma_vt" column="." reference="1" upperCase="true" resource="detail" list="#detailData" check="ma_vt not in (select ma_vt from dmvt)" errorCode="00001" category="1"/>
  <field name="dvt" column="." reference="1" resource="detail" list="#detailData"/>
  <field name="ma_kho" column="." reference="1" upperCase="true" resource="detail" list="#detailData" check="ma_kho not in (select ma_kho from dmkho)&And;exists(select 1 from #unit b where #detailData.ngay_ct = b.ngay_ct and #detailData.so_ct = b.so_ct having count(b.ma_dvcs) > 1)" errorCode="00001&And;00002" category="2"/>

  <field name="ma_vi_tri" column="." reference="1" upperCase="true" resource="detail" list="#detailData" check="#detailData.ma_vi_tri = '' and exists(select 1 from dmvitri b where #detailData.ma_kho = b.ma_kho)&And;#detailData.ma_vi_tri &lt;&gt; '' and not exists(select 1 from dmvitri b where #detailData.ma_kho = b.ma_kho and #detailData.ma_vi_tri = b.ma_vi_tri)" errorCode="invalidValueMessage&And;00001"  category="2"/>
  <field name="ma_lo" column="." reference="1" upperCase="true" resource="detail" list="#detailData" check="#detailData.ma_lo = '' and exists(select 1 from dmvt b where #detailData.ma_vt = b.ma_vt and b.lo_yn = 1)&And;#detailData.ma_lo &lt;&gt; '' and not exists(select 1 from dmvt b where #detailData.ma_vt = b.ma_vt and b.lo_yn = 1)&And;ma_lo &lt;&gt; '' and not exists(select 1 from dmlo b where #detailData.ma_vt = b.ma_vt and #detailData.ma_lo = b.ma_lo)" errorCode="invalidValueMessage&And;00002&And;00001" category="2"/>

  <field name="so_luong" column="." type="Decimal" resource="detail" list="#detailData" check="exists(select 1 from dmvt b where #detailData.ma_vt = b.ma_vt and b.gia_ton = 3 and #detailData.so_luong = 0)" errorCode="00002" category="2"/>
  <field name="gia_nt0" column="." type="Decimal" resource="detail"/>
  <field name="tien_nt0" column="." type="Decimal" resource="detail"/>

  <field name="gia_nt3" column="." type="Decimal" resource="detail"/>
  <field name="tien_nt3" column="." type="Decimal" resource="detail"/>
  <field name="nk_nt" column="." type="Decimal" resource="detail"/>
  <field name="ttdb_nt" column="." type="Decimal" resource="detail"/>
  <field name="thue_nt" column="." type="Decimal" resource="detail"/>

  <field name="ma_thue_nk" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check="ma_thue_nk &lt;&gt; '' and ma_thue_nk not in (select ma_thue from dmthuenk)" errorCode="00001" category="3"/>
  <field name="ma_thue_ttdb" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check="ma_thue_ttdb &lt;&gt; '' and ma_thue_ttdb not in (select ma_thue from dmthuettdb)" errorCode="00001" category="3"/>
  <field name="ma_thue_d" column="." reference="1.ma_thue" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check="ma_thue_d &lt;&gt; '' and ma_thue_d not in (select ma_thue from dmthue)" errorCode="00001" category="3"/>

  <field name="ma_nt" column="." upperCase="true" resource="master, tax, inputTax" list="#detailData" check="ma_nt not in (select ma_nt from dmnt)" errorCode="00001" category="2"/>
  <field name="ty_gia" column="." type="Decimal" defaultValue="1" resource="master, tax, inputTax"/>

  <field name="gia0" column="." type="Decimal" resource="detail"/>
  <field name="tien0" column="." type="Decimal" resource="detail"/>

  <field name="gia3" column="." type="Decimal" resource="detail"/>
  <field name="tien3" column="." type="Decimal" resource="detail"/>

  <field name="nk" column="." type="Decimal" resource="detail"/>
  <field name="ttdb" column="." type="Decimal" resource="detail"/>
  <field name="thue" column="." type="Decimal" resource="detail"/>

  <field name="tk" column="." upperCase="true" resource="master" list="#detailData" check="tk not in (select tk from dmtk where loai_tk = 1)" errorCode="00001" category="3"/>
  <field name="tk_vt" column="." reference="1" upperCase="true" resource="detail" list="#detailData" check="tk_vt not in (select tk from dmtk where loai_tk = 1)" errorCode="00001" category="3"/>

  <field name="ma_tt" column="." upperCase="true" resource="master, tax, inputTax" list="#detailData" check="ma_tt &lt;&gt; '' and ma_tt not in (select ma_tt from dmtt)" errorCode="00001" category="3"/>
  <field name="mau_bc" column="." reference="2" upperCase="true" resource="tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and mau_bc not in (select mau_bc from dmmaubc3)" errorCode="00001" category="4"/>
  <field name="ma_tc" column="." reference="2" upperCase="true" resource="tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and ma_tc not in (select ma_tc from v20dmtcthue)" errorCode="00001" category="4"/>
  <field name="ma_mau_ct" column="." reference="2" upperCase="true" resource="tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and ma_mau_ct &lt;&gt; '' and ma_mau_ct not in (select ma_mau_ct from dmmauct)" errorCode="00001" category="4"/>
  <field name="so_ct0_i" column="." reference="2.so_ct0" upperCase="true" insertValue="so_ct0" relation="so_ct0" resource="tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and so_ct0_i = ''" errorCode="invalidValueMessage" category="4"/>
  <field name="so_seri0_i" column="." reference="2.so_seri0" upperCase="true" insertValue="so_seri0" relation="so_seri0" resource="tax, inputTax" list="#taxData"/>
  <field name="ngay_ct0_i" column="." reference="2.ngay_ct0" type="DateTime" insertValue="ngay_ct0" relation="ngay_ct0" resource="tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and ngay_ct0_i is null" errorCode="invalidValueMessage" category="4"/>
  <field name="ma_kh_i" column="." reference="2.ma_kh" upperCase="true" insertValue="ma_kh" relation="ma_kh" resource="tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and ma_kh_i &lt;&gt; '' and ma_kh_i not in (select ma_kh from dmkh where cc_yn = 1)" errorCode="00001" category="4"/>
  <field name="ten_kh_i" column="." reference="2.ten_kh" insertValue="ten_kh" relation="ten_kh" resource="tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and ten_kh_i = ''" errorCode="invalidValueMessage" category="4"/>
  <field name="dia_chi_i" column="." reference="2.dia_chi" insertValue="dia_chi" relation="dia_chi" resource="tax, inputTax" list="#taxData"/>
  <field name="ma_so_thue" column="." reference="2" resource="tax, inputTax" list="#taxData"/>
  <field name="ten_vt" column="." reference="2" resource="tax, inputTax"/>
  <field name="t_tien_nt" column="." type="Decimal" resource="master, tax, inputTax"/>
  <field name="t_tien" column="." type="Decimal" resource="master, tax, inputTax"/>
  <field name="ma_thue" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and ma_thue not in (select ma_thue from dmthue)&And;ma_thue = '' and ((tk_thue_no &lt;&gt; '') or (t_thue_nt &lt;&gt; 0) or (mau_bc &lt;&gt; '') or (ma_tc &lt;&gt; '') or (ma_mau_ct &lt;&gt; '') or (so_ct0_i &lt;&gt; '') or (so_seri0_i &lt;&gt; '') or (ngay_ct0_i is not null) or (ma_kh_i &lt;&gt; '') or (ten_kh_i &lt;&gt; '') or (dia_chi_i &lt;&gt; '') or (ma_so_thue &lt;&gt; '') or (ten_vt &lt;&gt; '') or (ma_kh2 &lt;&gt; '') or (ghi_chu &lt;&gt; ''))" errorCode="00001&And;invalidValueMessage" category="3"/>
  <field name="tk_thue_no" column="." reference="2" upperCase="true" resource="master, detail, tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and tk_thue_no not in (select tk from dmtk where loai_tk = 1)" errorCode="00001" category="4"/>
  <field name="tk_du" column="." reference="2" upperCase="true" resource="master, tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and tk_du not in (select tk from dmtk where loai_tk = 1)" errorCode="00001" category="4"/>
  <field name="t_thue_nt" column="." type="Decimal" resource="master, tax, inputTax"/>
  <field name="t_thue" column="." type="Decimal" resource="master, tax, inputTax"/>

  <field name="ma_kh2" column="." reference="2" upperCase="true" resource="tax, inputTax" list="#taxData" check="ma_thue &lt;&gt; '' and ma_kh2 = '' and (exists(select 1 from dmtk b where #taxData.tk_thue_no = b.tk and b.tk_cn = 1) or exists(select 1 from dmtk b where #taxData.tk_du = b.tk and b.tk_cn = 1))&And;ma_thue &lt;&gt; '' and ma_kh2 &lt;&gt; '' and ma_kh2 not in (select ma_kh from dmkh)" errorCode="invalidValueMessage&And;00001" category="4"/>
  <field name="ghi_chu" column="." reference="2" resource="tax, inputTax"/>

  <field name="ma_vv" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check="ma_vv &lt;&gt; '' and ma_vv not in (select ma_vv from dmvv)" errorCode="00001" category="5"/>
  <field name="ma_bp" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check="ma_bp &lt;&gt; '' and ma_bp not in (select ma_bp from dmbp)" errorCode="00001" category="5"/>
  <field name="so_lsx" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check="so_lsx &lt;&gt; '' and so_lsx not in (select so_lsx from phlsx)" errorCode="00001" category="5"/>
  <field name="ma_sp" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check="ma_sp &lt;&gt; '' and ma_sp not in (select ma_vt from vdmsp)" errorCode="00001" category="5"/>
  <field name="ma_hd" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check=" ma_hd &lt;&gt; '' and ma_hd not in (select ma_hd from dmhd)" errorCode="00001" category="5"/>
  <field name="ma_phi" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check="ma_phi &lt;&gt; '' and ma_phi not in (select ma_phi from dmphi)" errorCode="00001" category="5"/>
  <field name="ma_ku" column="." reference="1" upperCase="true" resource="detail, tax, inputTax" list="#detailData" check="ma_ku &lt;&gt; '' and ma_ku not in (select ma_ku from dmku)" errorCode="00001" category="5"/>

  <field name="ma_cp" column="." reference="3" upperCase="true" resource="charge" list="#chargeData" check="ma_cp &lt;&gt; '' and ma_cp not in (select ma_loai from dmcp)" errorCode="00001" category="5"/>
  <field name="tien_cp_nt" column="." reference="3" type="Decimal" resource="charge"/>
  <field name="tien_cp" column="." type="Decimal" resource="charge"/>

  <field name="stt_rec" column="None" resource="master, detail, tax, charge, inquiry, general, inputTax"/>
  <field name="stt_rec0" column="None" resource="detail, tax, charge, inputTax"/>
  <field name="ma_dvcs" column="None" resource="master, tax, charge, inquiry, general, inputTax"/>
  <field name="ma_ct" column="None" insertValue="@voucherID" expression="''' + @voucherID + '''" resource="master, detail, tax, charge, inputTax"/>
  <field name="loai_ct" column="None" insertValue="'2'" expression="''2''" resource="master, tax, charge, inputTax"/>
  <field name="ma_gd" column="None" insertValue="'2'" expression="''2''" resource="master"/>
  <field name="ngay_lct" column="None" type="DateTime" insertValue="ngay_ct" resource="master, tax, charge, inputTax"/>

  <field name="he_so" column="None" type="Decimal" resource="detail"/>
  <field name="gia" column="None" type="Decimal" resource="detail"/>
  <field name="gia_nt" column="None" type="Decimal" resource="detail"/>
  <field name="tien_nt" column="None" type="Decimal" resource="detail"/>
  <field name="tien" column="None" type="Decimal" resource="detail"/>

  <field name="thue_suat_nk" column="None" type="Decimal" resource="detail"/>
  <field name="tk_thue_nk" column="None" resource="detail"/>

  <field name="thue_suat_ttdb" column="None" type="Decimal" resource="detail"/>
  <field name="tk_thue_ttdb" column="None" resource="detail"/>

  <field name="thue_suat" column="None" type="Decimal" resource="detail, tax, inputTax"/>

  <field name="tt" column="None" type="Decimal" resource="detail"/>
  <field name="tt_nt" column="None" type="Decimal" resource="detail"/>
  <field name="tien_hang" column="None" type="Decimal" insertValue="tien0" resource="detail"/>
  <field name="tien_hang_nt" column="None" type="Decimal" insertValue="tien_nt0" resource="detail"/>
  <field name="line_nbr" column="None" type="Int" resource="detail, tax, inputTax"/>

  <field name="cp_bh" column="None" type="Decimal" resource="detail"/>
  <field name="cp_bh_nt" column="None" type="Decimal" resource="detail"/>
  <field name="cp_vc" column="None" type="Decimal" resource="detail"/>
  <field name="cp_vc_nt" column="None" type="Decimal" resource="detail"/>
  <field name="cp_khac" column="None" type="Decimal" resource="detail"/>
  <field name="cp_khac_nt" column="None" type="Decimal" resource="detail"/>
  <field name="cp" column="None" type="Decimal" resource="detail"/>
  <field name="cp_nt" column="None" type="Decimal" resource="detail"/>

  <field name="t_so_luong" column="None" type="Decimal" resource="master"/>
  <field name="t_tt_nt" column="None" type="Decimal" resource="master"/>
  <field name="t_tt" column="None" type="Decimal" resource="master"/>
  <field name="t_tien0" column="None" type="Decimal" resource="master"/>
  <field name="t_tien_nt0" column="None" type="Decimal" resource="master"/>
  <field name="t_nk" column="None" type="Decimal" resource="master"/>
  <field name="t_nk_nt" column="None" type="Decimal" resource="master"/>
  <field name="t_ttdb" column="None" type="Decimal" resource="master"/>
  <field name="t_ttdb_nt" column="None" type="Decimal" resource="master"/>
  <field name="t_cp" column="None" type="Decimal" resource="master"/>
  <field name="t_cp_nt" column="None" type="Decimal" resource="master"/>
  <field name="t_tien_nt3" column="None" type="Decimal" resource="master"/>
  <field name="t_tien3" column="None" type="Decimal" resource="master"/>

  <field name="c$" column="None" resource="inquiry"/>
  <field name="m$" column="None" resource="inquiry"/>
  <field name="d$" column="None" resource="inquiry"/>
  <field name="e$" column="None" resource="inquiry"/>

  <field name="status" column="None" insertValue="@status" expression="' + @status + '" resource="master, tax, charge, inquiry, general, inputTax"/>
  <field name="datetime0" column="None" type="DateTime" insertValue="@datetime0" expression="''' + @datetime0 + '''" resource="master, tax, charge, inputTax"/>
  <field name="datetime2" column="None" type="DateTime" insertValue="@datetime0" expression="''' + @datetime0 + '''" resource="master, tax, charge, inputTax"/>
  <field name="user_id0" column="None" type="Int" insertValue="@user" expression="' + rtrim(@user) + '" resource="master, tax, charge, inquiry, general, inputTax"/>
  <field name="user_id2" column="None" type="Int" insertValue="@user" expression="' + rtrim(@user) + '" resource="master, tax, charge, inputTax"/>
</fields>