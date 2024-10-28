<!ENTITY ScriptQueryData SYSTEM "..\Include\Javascript\QueryData.txt">

<!ENTITY UnitFields SYSTEM "..\Include\XML\UnitFields.txt">
<!ENTITY UnitViews SYSTEM "..\Include\XML\UnitViews.xml">
<!ENTITY UnitCategory SYSTEM "..\Include\XML\UnitCategory.xml">

<!ENTITY UnitBeforeInsert SYSTEM "..\Include\Command\UnitBeforeInsert.txt">
<!ENTITY UnitBeforeUpdate SYSTEM "..\Include\Command\UnitBeforeUpdate.txt">
<!ENTITY UnitAfterUpdate SYSTEM "..\Include\Command\UnitAfterUpdate.txt">

<!ENTITY UnitPostInsert SYSTEM "..\Include\Command\UnitPostInsert.txt">
<!ENTITY UnitPostUpdate SYSTEM "..\Include\Command\UnitPostUpdate.txt">
<!ENTITY UnitPostDelete SYSTEM "..\Include\Command\UnitPostDelete.txt">

<!ENTITY TransferID "">
<!ENTITY Parameters "">
<!ENTITY UnitTag "&Tag;">
<!ENTITY UnitResult "@q">
<!ENTITY UnitFilter "@@0">
<!ENTITY UnitQuery "declare @q varchar(1024), @alias nvarchar(32); exec @@sysDatabaseName..AI_ERP$Fields$GetValue 'LF02', '&TransferID;', @alias output; select @alias = case when isnull(@alias, '') = '' then '&Tag;' else ltrim(@alias) end; exec AI_ERP$System$GetUnitFilter '', @@userID, @@admin, @alias, '&k;', 'ma_dvcs', 'ds_dvcs', '&UnitTag;dv', @q output&Parameters;; select '&amp;' + char(255) + ';' + &UnitResult; as value">

<!ENTITY UnitTab SYSTEM "..\Include\Javascript\UnitTab.txt">
<!ENTITY UnitCheck SYSTEM "..\Include\Javascript\UnitCheck.txt">

<!ENTITY GeneralCategoryIndex "1">
<!ENTITY BottomCategoryIndex "-1">
<!ENTITY OtherCategoryIndex "9">

<!ENTITY ClientDefault "">