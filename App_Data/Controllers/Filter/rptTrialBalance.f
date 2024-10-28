<?xml version="1.0" encoding="utf-8"?>

<!DOCTYPE dir [
  <!ENTITY XMLWhenFilterInit SYSTEM "..\Include\XML\WhenFilterInit.xml">
  <!ENTITY XMLWhenFilterLoading SYSTEM "..\Include\XML\WhenFilterLoading.xml">
  <!ENTITY XMLWhenFilterClosing SYSTEM "..\Include\XML\WhenFilterClosing.xml">
  <!ENTITY ScriptFilterInit SYSTEM "..\Include\Javascript\FilterInit.txt">
  <!ENTITY ScriptQueryFilterString SYSTEM "..\Include\Javascript\QueryFilterString.txt">
  <!ENTITY OutlineCss SYSTEM "..\Include\Javascript\OutlineCss.txt">
  <!ENTITY OutlineEntry SYSTEM "..\Include\Javascript\OutlineEntry.txt">
  <!ENTITY OnSelectionOutline SYSTEM "..\Include\Javascript\OnSelectionOutline.txt">
  <!ENTITY JavascriptReportFilter SYSTEM "..\Include\Javascript\ReportFilter.txt">
  <!ENTITY % CompactMode SYSTEM "..\Include\CompactMode.ent">
  %CompactMode;

  <!ENTITY % Tiny.External SYSTEM "..\Include\Tiny.External.ent">
  %Tiny.External;
  %Tiny.External.rptTrialBalance;

  <!ENTITY ReportMarginCategoryIndex "&ReportSign.Filter.CategoryIndex;">
  <!ENTITY % ReportMargin.rptTrialBalance SYSTEM "..\Include\ReportMargin.rptTrialBalance">
  %ReportMargin.rptTrialBalance;
  <!ENTITY % ReportMargin SYSTEM "..\Include\ReportMargin.ent">
  %ReportMargin;
  <!ENTITY % TabHeightFomula SYSTEM "..\Include\TabHeightFomula.ent">
  %TabHeightFomula;
]>

<dir id="1" type="Report" cache="true" xmlns="urn:schemas-ai-erp:data-dir">
  <title v="Điều kiện lọc" e="Filter Condition"></title>

  <fields>
    <field name="ngay1" type="DateTime" dataFormatString="@datetimeFormat" allowNulls="false" aliasName="fromDate" defaultValue="new Date()">
      <header v="Từ ngày" e="Date from"></header>
      <footer v="Từ/đến ngày" e="Date from/to"></footer>
    </field>
    <field name="ngay2" type="DateTime" dataFormatString="@datetimeFormat" allowNulls="false" aliasName="toDate" defaultValue="new Date()">
      <header v="Đến ngày" e="Date to"></header>
    </field>
    <field name="bu_tru" type="Boolean" categoryIndex="1">
      <header v="Bù trừ số dư" e="Clear Balance Amount"></header>
      <items style="CheckBox">
      </items>
    </field>
    <field name="ma_dvcs" categoryIndex="1">
      <header v="Đơn vị" e="Unit"></header>
      <items style="Lookup" controller="Unit" key="status = '1'" check="1 = 1"/>
    </field>
    <field name="mau_bc" categoryIndex="1">
      <header v="Mẫu báo cáo" e="Report Form"></header>
      <items style="DropDownList">
        <item value="001">
          <text v="Mẫu chuẩn" e="Standard Form"/>
        </item>
        <item value="002">
          <text v="Mẫu ngoại tệ" e="FC Form"/>
        </item>
        &ReportFormAccumulationFields;
      </items>
      <clientScript>&OnSelectionOutline;</clientScript>
    </field>


    <field name="tk_so_cai" type="Boolean" clientDefault="1" categoryIndex="&Tiny.External.Form.CategoryIndex.rptTrialBalance;" hidden="true" readOnly="true">
      <header v="Xem tk số cái" e="View GL Account"></header>
      <items style="CheckBox"></items>
    </field>
    <field name="tk_so_cai_1" dataFormatString="0, 1" clientDefault="0" align="right" categoryIndex="&Tiny.External.Form.CategoryIndex.rptTrialBalance;" hidden="true" readOnly="true">
      <header v="" e=""></header>
      <footer v="0 - Xem tất, 1 - Chỉ xem tk sổ cái" e="0 - All, 1 - GL Account"/>
      <items style="Mask"></items>
    </field>
    <field name="tk" type="Boolean" clientDefault="1" categoryIndex="&Tiny.External.Form.CategoryIndex.rptTrialBalance;">
      <header v="Xem tài khoản" e="Account"></header>
      <items style="CheckBox"></items>
      <clientScript><![CDATA[<Encrypted>53lcxu1wPM+GB4vvtbvkQw+jm1+s561HnEfVa/3ft4Uyh49hJmXI/uDzWsq4UhFZt1iwrZXkZDXm1DJ1mdMEdQ==</Encrypted>]]></clientScript>
    </field>
    <field name="tk_1" categoryIndex="&Tiny.External.Form.CategoryIndex.rptTrialBalance;">
      <header v="" e=""></header>
      <items style="AutoComplete" controller="Account" reference="ten_tk%l" key="status = '1'" check="1 = 1">
      </items>
    </field>
    <field name="ten_tk%l" external="true" readOnly="true">
      <header v="" e=""></header>
    </field>
    <field name="tk_bac" type="Boolean" categoryIndex="&Tiny.External.Form.CategoryIndex.rptTrialBalance;">
      <header v="Xem tk có bậc &lt;=" e="Level &lt;="></header>
      <items style="CheckBox"></items>
      <clientScript><![CDATA[<Encrypted>53lcxu1wPM+GB4vvtbvkQw+jm1+s561HnEfVa/3ft4Uyh49hJmXI/uDzWsq4UhFZt1iwrZXkZDXm1DJ1mdMEdQ==</Encrypted>]]></clientScript>
    </field>
    <field name="tk_bac_1" dataFormatString="###" maxLength="3" clientDefault="99" categoryIndex="&Tiny.External.Form.CategoryIndex.rptTrialBalance;">
      <header v="" e=""></header>
      <items style="Numeric"></items>
    </field>
    <field name="xem_tat" type="Boolean" categoryIndex="&Tiny.External.Form.CategoryIndex.rptTrialBalance;">
      <header v="Xem tất" e="All"></header>
      <items style="CheckBox"></items>
      <clientScript><![CDATA[<Encrypted>53lcxu1wPM+GB4vvtbvkQw+jm1+s561HnEfVa/3ft4Uyh49hJmXI/uDzWsq4UhFZt1iwrZXkZDXm1DJ1mdMEdQ==</Encrypted>]]></clientScript>
    </field>
    <field name="tk_chi_tiet" type="Boolean" categoryIndex="&Tiny.External.Form.CategoryIndex.rptTrialBalance;">
      <header v="Chỉ xem tài khoản chi tiết" e="Only Detail Account"></header>
      <items style="CheckBox"></items>
      <clientScript><![CDATA[<Encrypted>53lcxu1wPM+GB4vvtbvkQw+jm1+s561HnEfVa/3ft4Uyh49hJmXI/uDzWsq4UhFZt1iwrZXkZDXm1DJ1mdMEdQ==</Encrypted>]]></clientScript>
    </field>
    &ReportSign.Filter.Fields;
    &ReportMarginFieldExtend;
  </fields>

  <views>
    &Tiny.External.Form.View.rptTrialBalance;
  </views>

  <commands>
    <command event="Initialize">
      <text>
        <![CDATA[<Encrypted>4uSCnJUqqCaFnh/i5Y03lwcQ0gi92C3QywHfihneKzKLHBxssCq6mNcX83wSVutoDPoewWNX3u6rnqBUMK+adFKvnw5+2plPcLLBBUiOTJhuZWYvF1jI17ZO3c4SW5np</Encrypted>]]>&ReportSign.Filter.Initialize;<![CDATA[<Encrypted>Bf+Hq04ftZ3NcjhBF1I/tp11JygJH5U13GlbFKKUPA+IzUoc58ZA/FsQpQRD0dA6BgVtSFqnWfZlRajPdqCXBQ==</Encrypted>]]>
      </text>
    </command>

    &XMLWhenFilterLoading;
    &XMLWhenFilterClosing;

    <command event="Processing">
      <text>
        <![CDATA[<Encrypted>YBCvRWNLsm7mZbyV+V593QKsmDyfyxYyD9+zq6f5pEB6tv/9vbtY/6/+BatKZNwwZx+dPbkTw7QtzwdpReKIPN9fsoZ2bLWn4jrzNmutUoKIH9YzJ1A6oOHflijsMLtcVGo6JWTYjUVuqlNPU/iEIgssoF6leyp0uq3ACLUC5FnXogYBgFs1S0hH9U6t3y2B5js3dNoSybqqUrOhYPucF+wPoNv3kUMQDVYX0JxN46kuSyJ7BYfa46dj9sIVnoH9KYVYujbnGQ+zifl7hDbD0QMVigwO4YnlYPZHeLlfBndy+1F3sJy0Tx7Tq5DVn/anxnrJT8yhYEsFtkojbiLe/fafelJ6+sLWai5F7FPkTY09pLiue64/YeBP3pDUxPAA8lmwVW77qOBxIWtVPvQE7Ia1wqlFwxGx9WuBPswz4oLrIof5m+UEmFq7DgxJAfT8Av1A9d9xKueQvtkgXA/MBDqiAHxABe7QawmD9fpp5njax67HvriwUKwD6PcqubLmCh99xygVp4Bh8WMSILOHlAHwcr4n56oGpzuN87LODkpOFO7lQbt7f5vGkg53SlS70oTb78HxXnPX/pgNkLApe1S9wENlzikZXFr6GgRKM/DLhFm/FhOy8Uklk34ok2hMKTfS38xnAlY+E0NWxwyHWg==</Encrypted>]]>
        &ReportMarginProcessing;
        &ReportSign.Filter.Query;
      </text>
    </command>
  </commands>

  <script>
    <text>
      &OutlineEntry;
      &ScriptQueryFilterString;
      &JavascriptReportFilter;
      &ScriptFilterInit;
      <![CDATA[<Encrypted>ZM0070gnCJy1mdbI+Ofq5nFJoRTRSBwBApJJE31pozBIOR/eb4tHmlc/tkLN210KFhGVfuHSfnuUcooegRANxuzENwjPinwVF2z0pUW6oTS+G/qVpXPE+txZqn9HrNG20aL2T9r5ll9TUI1yojxxQi2wBMM4jjjeZDzO4Sp5CCdpxbedNDGFPelvMX3g8PZJOXVhZazLfeZGyHRK6UZ8/yZaGT5C1Qykx8DO3L5uV+sj2x7o0UoGzFIIuVfFISspdK7hDwsUfPMjof2tJ7n9qHtH/mxE4OJ3oa7LYftv7bpyYrO6OlbpkCdmHMEfoPcXE/bO7WXhP9y2xLvxAEbWt7TEfj7UGuJnbQGOlrgesWWbKd+/ovDyUmS78Uc2sibjTlnkylAsVzF4oqCnYJ2lmnGvhSj85C9lHQycsixLShY68WCYawMRSXz2lPJSlziZ</Encrypted>]]>&ReportSign.Filter.Active;<![CDATA[<Encrypted>kGG5noMoFyy78fd8+mbEXG52iuloBd9ZJGTjz1a+vqDfOPJEmZRVt89RMlBu55m0kR8AgLSow/njtP0Vt4aVGB5OVl8EtX2Tk6JYGFLOyvGYEyaRbCZDV1W5VRttd6wvr5Y4QkcgTQ5ra76rKeRZLmJsS7t0NoZMTJklBpFPVkRpIApWXHMOXVtJ7hioUc/L6rhBsN9FXAf/cIqtbPjskUaZBJiGYK50WerUZB9uInZsysMeLeRKG0qxEhulhGOpiK+0/kiJKsSTFPn6prbzwhUbEYSkNsYcNvbDu5wdzttVSjqZ87mpH6mmD7KeeVNtQiWofSyCNQ+UAQzOp3VDfQPV1kZcyYU0zgpDdppMINjBply+bjcyGgbymHIv0sY/NLzz4YJnjugCcXIQJJADTFy/nNYHdgLGr8LKvbvUwoiVN/v1mQtmPo3IfCmtW3uG2v258qT2f0S9WdRv9q5IWzDz1E4I7cYhPm0agpMZdAyjc8NLluy/SAa6qFTlDLraucKozsRdno3if7gHpkR1yFcZfh1DB43tu0A0F3CbR+lnFoptS/dj0PkOHUjbsjKT3LVt0zhKQ4HUOUYZgpRHag7EeliIRaUZl2+3wx2PR7Spbv9Nw9XjIUtnWNgTUfDWEYY9xmbBGHXO9Gf/bIdrQ7KvFVmNpif86KGHlc64RHR1fwQsCZBNl/6zu820v9clVlEjLHCxGY54zY/eXo4RXJobloYZXbv8REisyyYdrL7f+yE89sMbwueW67RZso2x9IYKB9pqMcsutmK+P17uabvIH2/LekbuinlBZ18HQbiXzxuqZ7k7uOCQ5vbvFFFEIHeAbUTLKl57Bw5rkCCNEN0g1oOCCiMSJaAo+53j8szVMO+Ib139Oy4doPJL90OopTDmJJhEXLBdS3156RK9G4eRok7eFiy9ZDbXK8AIDAcercsdp5WpY5mbc4H1UbWts8x7KtSEVAmOU7cO0l1cHqZoxtv8tgu6UdYw/EdhMG9Bu9T2SZdCSVLmM8TIeexDN5pGM+vx8p82jv0DJRedsNUwvXrZJDwb3pPkQ4AjLZwvb159VLnIlV1/AEDxy7FFUcp5uM1FrwBQ6GkcITOwG4deAf5RAiO42Lz3iFxGDkAnZIgtiXzfRkbXx3ZsqzbK</Encrypted>]]>
    </text>
  </script>

  &OutlineCss;

</dir>