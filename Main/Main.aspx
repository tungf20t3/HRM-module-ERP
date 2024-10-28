<%@ page autoeventwireup="false" masterpagefile="~/Main/MasterPage.master" inherits="AI_ERP.ReportExtender.UI.Page" v="Tổng quan" e="Main Dashboard" %>

<%@ register assembly="Dashboard" namespace="Dashboard" tagprefix="Dashboard" %>
<asp:Content ID="mainContent" ContentPlaceHolderID="AI_ERP" runat="server">
    <asp:Panel ID="ResourcePanel" runat="server" Width="0" Height="0">
    </asp:Panel>
    <script runat="server">
        Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
            ResourcePanel.Controls.Add(LoadControl("Chart.ascx"))
        End Sub
    </script>
</asp:Content>
