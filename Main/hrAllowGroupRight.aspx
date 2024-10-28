<%@ Page AutoEventWireup="false" MasterPageFile="~/Main/MasterPage.master" Inherits="AI_ERP.ReportExtender.UI.Page" v="Phân quyền nhóm người sử dụng" e="Group Access Control"%>
<asp:Content ID="headContent" ContentPlaceHolderID="head" runat="server"></asp:Content>
<asp:Content ID="mainContent" ContentPlaceHolderID="AI_ERP" runat="server">
    <div>
        <asp:Panel ID="panelReport" runat="server"/>
    </div>
    <AI_ERP:ReportExtender ID="MainReport" runat="server" TargetControlID="panelReport" ReadOnly="true" FilterMode="true" Controller="hrAllowGroupRight"/>
</asp:Content>