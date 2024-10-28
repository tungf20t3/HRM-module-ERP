<%@ Page AutoEventWireup="false" MasterPageFile="~/Main/MasterPage.master" Inherits="AI_ERP.ReportExtender.UI.Page" v="Khai báo quyền bộ phận" e="Defining Department Access Control"%>
<asp:Content ID="headContent" ContentPlaceHolderID="head" runat="server"></asp:Content>
<asp:Content ID="mainContent" ContentPlaceHolderID="AI_ERP" runat="server">

    <asp:Panel ID="ResourcePanel" runat="server" Width="0" Height="0">
    </asp:Panel>
    <script runat="server">
        Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
            ResourcePanel.Controls.Add(LoadControl("TreeView.ascx"))
        End Sub
    </script>
	
    <div>
        <asp:Panel ID="panelReport" runat="server"/>
    </div>
    <AI_ERP:ReportExtender ID="MainReport" runat="server" TargetControlID="panelReport" ReadOnly="true" Controller="hrAllowDepartmentRight"/>
</asp:Content>