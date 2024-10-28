<%@ Page AutoEventWireup="false" MasterPageFile="~/Main/MasterPage.master" Inherits="AI_ERP.ReportExtender.UI.Page" v="Báo cáo thống kê số lần đi muộn, về sớm" e="Employee Late In/ Early Out Statistics"%>
<asp:Content ID="headContent" ContentPlaceHolderID="head" runat="server"></asp:Content>
<asp:Content ID="mainContent" ContentPlaceHolderID="AI_ERP" runat="server">
    <div>
        <asp:Panel ID="panelReport" runat="server"/>
    </div>
    <AI_ERP:ReportExtender ID="MainReport" runat="server" TargetControlID="panelReport" Controller="hrptEmployeeLateInEarlyOutStatistics" FilterMode="true" readOnly="true"/>
</asp:Content>