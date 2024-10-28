<!ENTITY ExtenderInvoke ", @invoke as invoke">
<!ENTITY PostField SYSTEM "..\Include\XML\PostField.txt">
<!ENTITY PostView SYSTEM "..\Include\XML\PostView.xml">
<!ENTITY PostCategory SYSTEM "..\Include\XML\PostCategory.xml">

<!ENTITY PostScript SYSTEM "..\Include\Javascript\PostScript.txt">
<!ENTITY PostCreate "
create$Post$Extender(f, f.getItemValue('&PostIdentity;'), '&PostController;');
f._$post$Order = &PostOrder;
if (f._categories) {
  for (var i = 0; i &lt; f._categories.length; i++) {
    if (f._categories[i].Index == &PostIndex;) {
      f._$post$Order = i;
      break;
    }
  }
}
">
<!ENTITY PostDispose "
if (f._post$Extender) {
  f._post$Extender.dispose();
  f._post$Extender = null;
}">

<!ENTITY PostChecking "
if (this._checked) {
  var recordID = (this._post$Extender._process == true ? this._recordID : '');
  this.setItemValue('recordID', recordID);
}">

<!ENTITY PostInserted "
update post set &PostIdentity; = @&PostIdentity; where &PostIdentity; = @$recordID
delete post2 where &PostIdentity; = @$recordID
">

<!ENTITY PostDeleted "
delete post where id in (select id from post2 where dateadd(day, 1, datetime0) &lt; getdate())
delete post2 where dateadd(day, 1, datetime0) &lt; getdate()
select @invoke = @invoke + case when @invoke = '' then '' else '&amp;' + char(255) + ';' end + 'PostExtender.PostExtender.Process.DeleteFile(&PostController;,' + @&PostIdentity; + ',@@appDatabaseName)'
">
<!ENTITY PostShown "f._post$Extender._recordID = f.getItemValue('&PostIdentity;');">
<!ENTITY PostTabFocus "if (sender.parentForm._tabContainer._activeTabIndex == sender.parentForm._$post$Order) sender.parentForm._post$Extender.focus();">
<!ENTITY PostCurrencySelected "if (e.object._form._tabContainer._activeTabIndex == sender.get_element().parentForm._$post$Order) e.object._form._post$Extender.focus();">
<!ENTITY PostScattering "
f._post$Extender._recordID = f.getItemValue('&PostIdentity;');
f._post$Extender._action = f._action;
f._post$Extender._process = false;
if (f._action == 'New') f._post$Extender._load();">

<!ENTITY PostRefresh "
f._post$Extender._recordID = f.getItemValue('&PostIdentity;');
f._post$Extender._action = f._action;
f._post$Extender._load();">