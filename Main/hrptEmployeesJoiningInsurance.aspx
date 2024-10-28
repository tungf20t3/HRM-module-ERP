<%@ Page AutoEventWireup="false" MasterPageFile="~/Main/MasterPage.master" Inherits="AI_ERP.ReportExtender.UI.Page" v="Danh sách lao động tham gia bảo hiểm" e="Employees Joining Insurance"%>
<asp:Content ID="headContent" ContentPlaceHolderID="head" runat="server"></asp:Content>
<asp:Content ID="mainContent" ContentPlaceHolderID="AI_ERP" runat="server">
    <div>
        <asp:Panel ID="panelReport" runat="server"/>
    </div>
    <AI_ERP:ReportExtender ID="MainReport" runat="server" TargetControlID="panelReport" Controller="hrptEmployeesJoiningInsurance" readOnly="true" FilterMode="true"/>
</asp:Content>