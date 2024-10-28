<%@ Page AutoEventWireup="false" MasterPageFile="~/Main/MasterPage.master" Inherits="AI_ERP.ReportExtender.UI.Page" v="Báo cáo thống kê trình độ học vấn theo bộ phận, vị trí công việc" e="Education Statistics by Department and Position" %>

<asp:Content ID="headContent" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="mainContent" ContentPlaceHolderID="AI_ERP" runat="server">
    <asp:Panel ID="ResourcePanel" runat="server" Width="0" Height="0">
    </asp:Panel>
    <script runat="server">
        Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
            ResourcePanel.Controls.Add(LoadControl("Chart.ascx"))
        End Sub
    </script>
    <div>
        <asp:Panel ID="panelReport" runat="server" />
    </div>
    <AI_ERP:reportextender id="MainReport" runat="server" targetcontrolid="panelReport" readonly="true" controller="hrptEduStatisticsByDeptPos" filtermode="true" />
</asp:Content>