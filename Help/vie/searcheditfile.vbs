MsgBox("Bắt đầu...")
todolist =InputBox("1. Tìm đánh dấu Sửa"  + chrw(13)+ "2. Tìm đánh dấu Xóa" + chrw(13)+ "3. Tìm ký tự", "Tùy chọn làm việc","3")
Do While (CInt(todolist)>3)
	todolist = InputBox("1. Bỏ đánh dấu Sửa"  + chrw(13)+ "2. Bỏ đánh dấu Xóa" + chrw(13)+ "3. Tìm ký tự", "Tùy chọn làm việc","3")
Loop

searchingtext = InputBox("Nhập chuỗi cần tìm", "Chuỗi tìm","")

Dim sCurPath
sCurPath = CreateObject("Scripting.FileSystemObject").GetAbsolutePathName(".") + "\"
Set objFSO = CreateObject("Scripting.FileSystemObject")
objStartFolder = sCurPath
'varNamefilestr = ""+ chrw(34)
nFcount = 0
Set objFolder = objFSO.GetFolder(objStartFolder)
Set colFiles = objFolder.Files
Select Case todolist
	Case "1"
'If todolist = "1" Then
	Set ResultFile = CreateObject("Scripting.FileSystemObject").CreateTextFile("editlist.txt", 2)
'Else 
	Case "2"
	Set ResultFile = CreateObject("Scripting.FileSystemObject").CreateTextFile("Deletelist.txt", 2)	
	Case "3"
	Set ResultFile = CreateObject("Scripting.FileSystemObject").CreateTextFile("Searchlist.txt", 2)	
'End If
End Select

ResultFile.Close

For Each objFile in colFiles  

	If (right(objFile.Name, 4) = ".htm") Then
'		If todolist = "1" Then
	Select Case todolist
		Case "1"
			Searchstr objStartFolder + objFile.Name, "x" + chrw(34) + ">" ' ("x>)
'		Else
		Case "2"
			Searchstr objStartFolder + objFile.Name, "z" + chrw(34) + ">" ' ("z>)	
'		End If
		Case "3"
			Searchstr objStartFolder + objFile.Name, searchingtext
		End Select
	End If
Next

If nFcount  <> 0 Then
'	If todolist = "1" Then
	Select Case todolist
		Case "1"
		fnShellExecute(objStartFolder + "editlist.txt" )
'	Else
		Case "2"
		fnShellExecute(objStartFolder + "Deletelist.txt" )		

		Case "3"

		fnShellExecute(objStartFolder + "Searchlist.txt" )		
'	End If
	End Select
Else 
	WScript.Echo "Không có file cần tìm"
End If

Function Searchstr(strFilename, strFind) 
Set SearchFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(strFilename, 1)
strSearchFile = SearchFile.ReadAll
SearchFile.Close
Set SearchFile = Nothing
	If InStr(strSearchFile, strFind) <> 0 then
		If Filecatch <> strFilename then
			nFcount  = nFcount +1 
'			WScript.Echo "Founded :" + strFilename
'			If todolist = "1" Then
			Select Case todolist
				Case "1"
				Set ResultFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("editlist.txt", 8)
'			Else
				Case "2"
				Set ResultFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("deletelist.txt", 8)
'			End If		
				Case "3"
				Set ResultFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("Searchlist.txt" , 8)
			End Select
			ResultFile.WriteLine
			ResultFile.Write(strFilename)
			ResultFile.Close
			Set ResultFile = Nothing
		End If
	End If
End Function

function fnShellExecute(ObjFile)
    dim objShell
    set objShell = CreateObject("Shell.Application")
    select case InputBox("1. Xem file text"  +chrw(13)+ "2. Mở htm" + chrw(13) + "3. Không làm gì cả" ,"Chọn mở kết quả","1")
    	Case "1"
	    	objShell.ShellExecute "notepad.exe", ObjFile, "", "open", 1
    	Case "2"
    		Set objFolder = objFSO.GetFolder(objStartFolder)
			Set colFiles = objFolder.Files
			Set ResultFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(ObjFile,1)
			Do Until ResultFile.AtEndOfStream
				strline = ResultFile.ReadLine
	    		objShell.ShellExecute "IExplore.exe", strline, "", "open"
			Loop
			ResultFile.Close
    	Case else
    	    Msgbox "Nothing !!!"	    	
    End Select	
    set objShell = nothing
end function