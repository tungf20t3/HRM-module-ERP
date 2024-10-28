<%@ Page AutoEventWireup="false" MasterPageFile="~/Main/MasterPage.master" Inherits="AI_ERP.ReportExtender.UI.Page"
    v="Điều chỉnh danh sách lao động thanh toán theo chế độ" e="Data Adjustment for Social Insurance Benefits" %>

<asp:Content ID="headContent" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="mainContent" ContentPlaceHolderID="AI_ERP" runat="server">
    <div>
        <asp:Panel ID="panelReport" runat="server" />
    </div>
    <AI_ERP:ReportExtender ID="MainReport" runat="server" TargetControlID="panelReport"
        ReadOnly="true" Controller="hrSocialInsuranceBenefitsAdjustment" FilterMode="true" />
</asp:Content>
