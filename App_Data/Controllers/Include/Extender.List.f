<!ENTITY ExtenderInvoke ", @invoke as invoke">
<!ENTITY ListField SYSTEM "..\Include\XML\ListField.txt">
<!ENTITY ListView SYSTEM "..\Include\XML\ListView.xml">
<!ENTITY ListCategory SYSTEM "..\Include\XML\ListCategory.xml">
<!ENTITY ListShowing SYSTEM "..\Include\XML\ListVoucherShowing.xml">
<!ENTITY ListCommand SYSTEM "..\Include\Command\ListCommand.txt">
<!ENTITY ListScript SYSTEM "..\Include\Javascript\ListScript.txt">
<!ENTITY ListTicket SYSTEM "..\Include\XML\ListGetTicket.xml">

<!ENTITY ListShowingMessage "
declare @fileTicket nvarchar(256)
select @fileTicket = lower(replace(newid(),'&#45;',''));
insert into @@sysDatabaseName..ticket(ticket, user_id, data, datetime0) values(@fileTicket, @@userID, '@@appDatabaseName', getdate());
select @message = isnull(@message, '') + 'this._ticket = ''' + @fileTicket + ''';'
">

<!ENTITY ListChecking "
if (this._checked) {
  this.setItemValue('fileticket', this._ticket);
  this._upload$Extender.upload();
}">

<!ENTITY ListDeleted "
  select @invoke = @invoke + case when @invoke = '' then '' else '&amp;' + char(255) + ';' end + 'FileUploadExtender.UploadExtender.Process.DeleteFile(&ListControlerName;,List,' + @stt_rec + ',' + @@language + ',@@appDatabaseName,' + rtrim(@@userID) + ')'
">
<!ENTITY ListCreate "create$Upload$Extender(f, f.getItemValue('stt_rec'));">
<!ENTITY ListDispose "
if (f._upload$Extender) {
  try {f._upload$Extender.remove_commandEvent(listView$ExecuteCommand);} catch (ex) {}
  f._upload$Extender.dispose();
  f._upload$Extender = null;
}">
<!ENTITY ListShown "
f._upload$Extender.switchViewMode();
f._upload$Extender._uploadKey = f.getItemValue('stt_rec');
">
<!ENTITY ListScattering "
f._upload$Extender._uploadKey = f._replication ? '' : f.getItemValue('stt_rec');
f._upload$Extender._load(1);
f._upload$Extender.disableUpload(false);
">
<!ENTITY ListRefresh "
f._upload$Extender._uploadKey = f.getItemValue('stt_rec');
f._upload$Extender._load(1);
">
<!ENTITY ListResponseTicket "
case 'ListTicket':
  f._ticket = result[0].Value;
  break;
">