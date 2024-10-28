<%@ Page Language="vb" AutoEventWireup="false" Inherits="AI_ERP.LoginExtender.Login" %> <%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %> <%@ Register Assembly="AI_ERP.LoginExtender" Namespace="AI_ERP.LoginExtender" TagPrefix="cc2" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title>ERP - HRM</title>
        <meta http-equiv="X-UA-Compatible" content="IE=8;IE=edge;" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link href="~/Images/favicon.ico" rel="shortcut icon" type="image/ico" />
        <%--
        <link href="~/Css/Control.css" rel="stylesheet" type="text/css" />
        --%>
        <link rel="preconnect" href="~/font/" />
        <link rel="stylesheet" href="~/font/inter.css" />

        <asp:Panel ID="ResourcePanel" runat="server" Width="0" Height="0"> </asp:Panel>
        <script runat="server">
            Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
                   Dim f As String = HttpContext.Current.Server.MapPath("~\App_Data\Controllers\Include") & "\TFA.txt"
                   If IO.File.Exists(f) Then
                       Dim v As String = IO.File.ReadAllText(f)
                       If v = "INCLUDE" Then
                           ResourcePanel.Controls.Add(LoadControl("TFA.ascx"))
                       End If
                   End If
               End Sub
        </script>
        <style>
            @media only screen and (max-width: 1024px) {
                .LoginContainer div.section-icon {
                    display: none;
                }

                .LoginContainer div.section {
                    display: contents;
                }
            }

            @media only screen and (min-width: 1025px) {
                .LoginContainer div.section-icon {
                    width: 50%;
                    left: 0 !important;
                }
            }
        </style>
    </head>

    <body>
        <form id="LoginForm" runat="server">
            <asp:ScriptManager ID="LoginScriptManager" runat="server" EnablePageMethods="true" ScriptMode="Release" LoadScriptsBeforeUI="false" EnablePartialRendering="false">
                <CompositeScript ScriptMode="Release" Path="~/ClientScript/j8.js">
                    <Scripts>
                        <asp:ScriptReference Name="MicrosoftAjax.js" />
                        <asp:ScriptReference Name="AjaxControlToolkit.ExtenderBase.BaseScripts.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.Common.Common.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.Compat.Timer.Timer.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.Compat.DragDrop.DragDropScripts.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.Animation.Animations.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.Animation.AnimationBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.HoverExtender.HoverBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.PopupExtender.PopupBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.DynamicPopulate.DynamicPopulateBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.DropDown.DropDownBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.DropShadow.DropShadowBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.DragPanel.FloatingBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.PopupControl.PopupControlBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.ModalPopup.ModalPopupBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.RoundedCorners.RoundedCornersBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AjaxControlToolkit.AlwaysVisibleControl.AlwaysVisibleControlBehavior.js" Assembly="AjaxControlToolkit" />
                    </Scripts>
                </CompositeScript>
            </asp:ScriptManager>

            <asp:ScriptManagerProxy ID="ScriptProxyLoginPage" runat="server">
                <CompositeScript ScriptMode="Release">
                    <Scripts>
                        <asp:ScriptReference Name="AjaxControlToolkit.NoBot.NoBotBehavior.js" Assembly="AjaxControlToolkit" />
                        <asp:ScriptReference Name="AI_ERP.LoginExtender.LoginExtender.js" Assembly="AI_ERP.LoginExtender" />
                    </Scripts>
                </CompositeScript>
            </asp:ScriptManagerProxy>
            <cc1:NoBot ID="PageNoBot" runat="server" OnGenerateChallengeAndResponse="PageGenerateChallengeAndResponse" ResponseMinimumDelaySeconds="3" CutoffMaximumInstances="30" CutoffWindowSeconds="60" />
            <div style="display: none">
                <input type="password" />
            </div>
            <asp:Panel ID="LoginPanel" runat="server" />
            <cc2:LoginExtender ID="LoginExtender" runat="server" TargetControlID="LoginPanel" Url="../Default.aspx" Incompatible="../incompatible.htm" InformationUrl="~/Main/user.aspx" ResetPasswordUrl="~/Main/PasswordRecovery.aspx" />
        </form>
    </body>
</html>
