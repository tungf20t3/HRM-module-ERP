dim filesys
strsource = ""
strtarget = ""
nFcount = 0
FNotixist = ""
sCurPath = CreateObject("Scripting.FileSystemObject").GetAbsolutePathName(".") + "\"
Set objFSO = CreateObject("Scripting.FileSystemObject")
objStartFolder = sCurPath
Set objFolder = objFSO.GetFolder(objStartFolder)
Copyoption =InputBox("1. Chép từ Robohelp về"  +chrw(13)+ "2. Chép lại Robohelp, tạo index"+chrw(13)+ "3. Tạo release"+chrw(13)+ "4. Tạo update","Tùy chọn cập nhật","4")
Do While (CInt(Copyoption) >4)
	Copyoption =InputBox("Chỉ chọn giá trị: "+chrw(13)+ "1. Chép từ Robohelp về"+chrw(13)+ " hoặc" +chrw(13)+ "2. Chép lại Robohelp, tạo index"+chrw(13)+ "3. Tạo release"+chrw(13)+ "4. Tạo update","Chọn lại","1")
Loop
Select case Copyoption 'Chép về
	Case "1"
		strtarget =  getoptionfolder("0001") + "\" '0001 Working folder
		strprj  = getoptionfolder("0004") + "\"'0004 SSL
'WScript.Echo 		strtarget +chrw(13)+		strprj
		Set revFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("copyfromprj.txt", 1)
		Set filesys = CreateObject("Scripting.FileSystemObject") 
		Do Until revFile.AtEndOfStream
			strline = revFile.ReadLine
			caseoption = left(strline,1)
			Select case caseoption
'				Case "!" ' lấy tên thu mục copy file
'					If(Left(strline,7) = "!target") then
'						strtarget = Mid(strline, 9) + "\"
'					Else
'						strsource = Mid(strline, 9) + "\"
'					End If
				Case "*" ' tên project
					filesys.CopyFile strprj   +  Replace(strline, "*","") + "_csh.htm", strtarget + "help_csh.htm"	
					filesys.CopyFile strprj   +  Replace(strline, "*","") + "_rhc.htm", strtarget + "help_rhc.htm"	
'					filesys.CopyFile strprj   +  Replace(strline, "*","") + ".htm", strtarget + "help.htm"
				Case "\" ' thư mục copy hết
					filesys.CopyFolder strprj   + "whdata", strtarget + "whdata", true
					filesys.CopyFolder strprj   + "resource", strtarget + "resource", true
					filesys.CopyFolder strprj   + "whxdata", strtarget + "whxdata", true
				Case else	
'WScript.Echo strprj   + trim(strline)	
					filesys.CopyFile strprj   + trim(strline) , strtarget +trim(strline), true

					nFcount = nFcount + 1
			End Select
		Loop
		revFile.Close
		WScript.Echo nFcount
	Case "2" ' Chép ngược lại để tạo index mới
		strsource  = sCurPath
		strtarget =  getoptionfolder("0003") + "\" '0003 index folder
		strprj  = getoptionfolder("0002") + "\"'0002 project

		Set filesys = CreateObject("Scripting.FileSystemObject") 
		filesys.deletefile(strtarget + "\*.*")
		WScript.Echo (strsource +"whxdata\whtdata0.xml")		
		Set SearchFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(strsource +"whxdata\whtdata0.xml", 1)		
		
			Do Until SearchFile.AtEndOfStream
			strline = SearchFile.ReadLine
			If (Instr(strline,"item name") > 0) Then
				strlineArray = Split(strline,"url="+chrw(34), -1, 1)
					'(replace(strlineArray(1),chrw(34) + " />",""))
					If filesys.FileExists(strsource + trim((replace(strlineArray(1),chrw(34) + " />","")))) Then
							filesys.CopyFile strsource + trim((replace(strlineArray(1),chrw(34) + " />",""))) , strtarget +trim((replace(strlineArray(1),chrw(34) + " />","")))
					End If
			End If	
		Loop
	
		SearchFile.Close 
	Case "3"	' Tạo danh sách file theo project và copy lên thư mục release
	'msgbox "Cập nhật các file htm có chi tiết vào file Copylowlevel.txt"
		strsource = sCurPath 
		strtarget = inputbox("Copy đường dẫn bỏ vào đây: ", "Nhập thư mục release","D:\test2")
		strtarget = strtarget +"\"
	'Tạo danh sách file cấp 2
'		Set LowlevelFilelist = CreateObject("Scripting.FileSystemObject").CreateTextFile(strsource + "CopyLowlevelFilelist.txt", 8)
		Set LowlevelFilelist = CreateObject("Scripting.FileSystemObject").CreateTextFile("C:\" + "CopyLowlevelFilelist.txt", 8)
		Set levelFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("Copylowlevel.txt", 1)
		Do Until levelFile.AtEndOfStream
			strLine = levelFile.ReadLine
			If strLine <> "" Then
				Set LowlevelFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(strLine, 1)
				Do Until lowlevelFile.AtEndOfStream
					lowstrLine = lowlevelFile.ReadLine
					lowstrLine = replace(lowstrLine," ","")
					If Instr(lowstrline,"ahref") > 0 Then
						iBg = InStr(1,lowstrLine,"ahref")
						iEnd  = InStr(ibg,lowstrLine,chrw(34)+">",1)
						strlowhtm = Mid(lowstrLine,iBg + 7, iEnd - iBg - 7)
						LowlevelFilelist.WriteLine
						LowlevelFilelist.Write(strlowhtm)
'						WScript.Echo strline  +chrw(13)+ strlowhtm
					End If
				Loop
				LowlevelFile.close
			End If
		Loop
		LowlevelFilelist.close
		levelFile.close
		
		
		
'WScript.Echo "Chk here.."
		 		
'Tạo danh sách file nội dung		từ file cấp 2
		Set ResultFile = CreateObject("Scripting.FileSystemObject").CreateTextFile("C:\" + "copytointerdep.txt", 8)
		Set SearchFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("C:\" + "CopyLowlevelFilelist.txt", 1)
		
		Do Until SearchFile.AtEndOfStream
		strline = SearchFile.ReadLine
		ResultFile.WriteLine
		ResultFile.Write(strline)
			If strline <> "" Then
					Set SearchpictureFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(strline, 1)
					Do Until SearchpictureFile.AtEndOfStream 'Kiem tra cac picture va tao danh sach copy
						Picturefile = SearchpictureFile.ReadLine
						iBg = InStr(1,Picturefile,"<img ")	
						While ( iBg < Len(Picturefile) and iBg > 0 )	
							iEnd = InStr(iBg,Picturefile,"/>",1)	
							iBg = InStr(iBg,Picturefile,"src=""",1)	
							iEnd = InStr(iBg+5,Picturefile,"""",1)
							If iBg > 0 then
								strImg = Mid(Picturefile,iBg + 5, iEnd - iBg - 5)		
							ResultFile.WriteLine
							ResultFile.Write(strImg)
							End if
							iBg = InStr(iEnd,Picturefile,"<img ",1)	
						Wend  
					Loop
					SearchpictureFile.Close
			End IF
		Loop

		ResultFile.Close
		SearchFile.close 
		
	
'Tạo danh sách file nội dung		

		Set ResultFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("C:\" + "copytointerdep.txt", 8)
		Set SearchFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(objFolder +"\whxdata\whtdata0.xml", 1)
		Set filesys = CreateObject("Scripting.FileSystemObject") 
		Do Until SearchFile.AtEndOfStream
			strline = SearchFile.ReadLine
			If (Instr(strline,"item name") > 0) Then
				strlineArray = Split(strline,"url="+chrw(34), -1, 1)
					ResultFile.WriteLine
					ResultFile.Write(replace(strlineArray(1),chrw(34) + " />",""))
					Set SearchpictureFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(RTrim(objFolder + "\" + replace(strlineArray(1),chrw(34) + " />","")), 1)
					Do Until SearchpictureFile.AtEndOfStream 'Kiem tra cac picture va tao danh sach copy
						Picturefile = SearchpictureFile.ReadLine
						If instr(Picturefile,"/...") = 0 Then 'Xoa /..
						
							iBg = InStr(1,Picturefile,"<img ")	
							While ( iBg < Len(Picturefile) and iBg > 0 )	
								iEnd = InStr(iBg,Picturefile,"/>",1)	
								iBg = InStr(iBg,Picturefile,"src=""",1)	
								iEnd = InStr(iBg+5,Picturefile,"""",1)
								If iBg > 0 then
									strImg = Mid(Picturefile,iBg + 5, iEnd - iBg - 5)		
								ResultFile.WriteLine
								ResultFile.Write(strImg)
								End if
								iBg = InStr(iEnd,Picturefile,"<img ",1)	
							Wend  
						End If
					Loop
					SearchpictureFile.Close
'				End If
			End If	
		Loop
		ResultFile.WriteLine
		ResultFile.Write("cshdat_robohelp.htm" + Chr(13)+Chr(10) + "cshdat_webhelp.htm" + Chr(13)+Chr(10) + "whcsh_home.htm" + Chr(13)+Chr(10) + "whcshdata.htm" + Chr(13)+Chr(10) + "whfbody.htm" + Chr(13)+Chr(10) + "whfdhtml.htm" + Chr(13)+Chr(10) + "whfform.htm" + Chr(13)+Chr(10) + "whgbody.htm" + Chr(13)+Chr(10) + "whgdef.htm" + Chr(13)+Chr(10) + "whgdhtml.htm" + Chr(13)+Chr(10) + "whibody.htm" + Chr(13)+Chr(10) + "whidhtml.htm" + Chr(13)+Chr(10) + "whiform.htm" + Chr(13)+Chr(10) + "whnjs.htm" + Chr(13)+Chr(10) + "whproj.htm" + Chr(13)+Chr(10) + "whskin_banner.htm" + Chr(13)+Chr(10) + "whskin_blank.htm" + Chr(13)+Chr(10) + "whskin_ep_start.htm" + Chr(13)+Chr(10) + "whskin_frmset01.htm" + Chr(13)+Chr(10) + "whskin_frmset010.htm" + Chr(13)+Chr(10) + "whskin_homepage.htm" + Chr(13)+Chr(10) + "whskin_info.htm" + Chr(13)+Chr(10) + "whskin_mbars.htm" + Chr(13)+Chr(10) + "whskin_pdhtml.htm" + Chr(13)+Chr(10) + "whskin_pickup.htm" + Chr(13)+Chr(10) + "whskin_plist.htm" + Chr(13)+Chr(10) + "whskin_tbars.htm" + Chr(13)+Chr(10) + "whskin_tw.htm" + Chr(13)+Chr(10) + "whtdhtml.htm" + Chr(13)+Chr(10) + "whbrs.xml" + Chr(13)+Chr(10) + "whproj.xml" + Chr(13)+Chr(10) + "whres.xml" + Chr(13)+Chr(10) + "whskin_ep_ins.xml" + Chr(13)+Chr(10) + "whst_topics.xml"+ Chr(13)+Chr(10) +"help_csh.htm"+ Chr(13)+Chr(10) +"help_rhc.htm"+ Chr(13)+Chr(10) +"help.htm"+ Chr(13)+Chr(10) +"ai_erp_bancai.css")
		ResultFile.Close
		SearchFile.close 
		
		Set ErrorFile = CreateObject("Scripting.FileSystemObject").CreateTextFile("C:\" + "Errors.txt", 8)
		'ErrorFile.Close
		'Set ErrorFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("C:\" + "Errors.txt", 8)
		Set ResultFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("C:\" + "copytointerdep.txt", 1)
		Do Until ResultFile.AtEndOfStream
			strline = ResultFile.ReadLine
			If strline <> "" then
				If Instr(LCase(strline),"vie") > 0  then
					If not filesys.FolderExists(strtarget + "Vie") then
						filesys.CreateFolder(strtarget + "Vie")
					End if
				End if	
				If Instr(LCase(strline),"eng") > 0  then
					If not filesys.FolderExists(strtarget + "Eng") then
						filesys.CreateFolder(strtarget + "Eng")
					End if
				End if	
				If filesys.FileExists(strsource +  strline) then
					If Instr(LCase(strline),"css") > 0  Then
						filesys.CopyFile strsource +  strline, strtarget + "ai_erp.css"
					Else
						filesys.CopyFile strsource +  strline, strtarget + strline 	
								If err.Number <> 0 Then
									WScript.Echo strline + chrw(13) + "không thể chép dòng này"
									ErrorFile.WriteLine
									ErrorFile.Write(strline + "không thể chép dòng này")
								End If			
					'Bo format 
					End If
					If Instr(LCase(strline),"htm") > 0  Then
'						WScript.Echo strtarget + strline
						Set revFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("3.txt", 1)
						Do Until revFile.AtEndOfStream
							str3text = revFile.ReadLine
							If(Left(str3text,2) <> "//") then 
'				 				crstr = Left(strline, InStrRev(strline, "|")-1)
				 				strsegment = Split(str3text,"|", -1, 1)
								crstr = strsegment(0)
								nwstr = strsegment(1)								
'								nwstr = Mid(strline, InStrRev(strline, "|")+1)
								If filesys.FileExists(strtarget +  strline) then
									FindAndReplace strtarget + strline, crstr, nwstr 
								Else 
									WScript.Echo strtarget + strline
								End If	
							End If
						Loop
						revFile.Close
					End If
					'Ket thuc bo format
				Else 
					WScript.Echo strline + chrw(13) + "không tồn tại tệp này"
					ErrorFile.WriteLine
					ErrorFile.Write(strline)
				End if	
			End If
		Loop		
		filesys.CopyFile strsource +  "*.png", strtarget 	'Copy cac file png, gif, jpg
		filesys.CopyFile strsource +  "*.gif", strtarget
		filesys.CopyFile strsource +  "*.jpg", strtarget
		filesys.CopyFile strsource +  "*.ico", strtarget
		filesys.CopyFile strsource +  "*.js", strtarget		
								
		filesys.CopyFolder strsource + "whdata", strtarget + "whdata", true
		filesys.CopyFolder strsource + "resource", strtarget + "resource", true
		filesys.CopyFolder strsource + "whxdata", strtarget + "whxdata", true
		

'---------------------------------------------------------------------------------------------------
	Case "4"	' Tạo danh sách file theo danh sách update và copy lên thư mục release
		strsource = sCurPath 
		strtarget = inputbox("Copy đường dẫn update bỏ vào đây: ", "Nhập thư mục update","W:\Interdept\yyyymmdd-SP-update\FAOxl\Help\Vie")
		strlistupdate = inputbox("Nhập file txt list update: ", "Nhập file txt list update","SP18-xxx")
		strtarget = strtarget +"\"
	'Tạo danh sách file cấp 2  --Bỏ

'Tạo danh sách file nội dung		
		Set ResultFile = CreateObject("Scripting.FileSystemObject").CreateTextFile("C:\" + "copytointerdep.txt", 8)
		ResultFile.Close
		Set ResultFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("C:\" + "copytointerdep.txt", 8)
		

'		Set SearchFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(objFolder +"\whxdata\whtdata0.xml", 1)
		Set SearchFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(objFolder +"\"+strlistupdate+".txt", 1)
		Set filesys = CreateObject("Scripting.FileSystemObject") 
		Do Until SearchFile.AtEndOfStream
			strline = SearchFile.ReadLine
			ResultFile.WriteLine
			ResultFile.Write(strline+".htm")
			Set SearchpictureFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(RTrim(objFolder + "\" + strline+".htm"), 1)
				Do Until SearchpictureFile.AtEndOfStream 'Kiem tra cac picture va tao danh sach copy
					Picturefile = SearchpictureFile.ReadLine
					If instr(Picturefile,"/...") = 0 Then 'Xoa /..
						iBg = InStr(1,Picturefile,"<img ")	
							While ( iBg < Len(Picturefile) and iBg > 0 )	
								iEnd = InStr(iBg,Picturefile,"/>",1)	
								iBg = InStr(iBg,Picturefile,"src=""",1)	
								iEnd = InStr(iBg+5,Picturefile,"""",1)
								If iBg > 0 then
									strImg = Mid(Picturefile,iBg + 5, iEnd - iBg - 5)		
								ResultFile.WriteLine
								ResultFile.Write(strImg)
								End if
								iBg = InStr(iEnd,Picturefile,"<img ",1)	
							Wend  
					End If
				Loop
				SearchpictureFile.Close
		Loop

		ResultFile.Close
		SearchFile.close 

		Set ResultFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("C:\" + "copytointerdep.txt", 1)
		Do Until ResultFile.AtEndOfStream
			strline = ResultFile.ReadLine
			If strline <> "" then
				If Instr(LCase(strline),"vie") > 0  then
					If not filesys.FolderExists(strtarget + "Vie") then
						filesys.CreateFolder(strtarget + "Vie")
					End if
				End if	
				If Instr(LCase(strline),"eng") > 0  then
					If not filesys.FolderExists(strtarget + "Eng") then
						filesys.CreateFolder(strtarget + "Eng")
					End if
				End if	
				If filesys.FileExists(strsource +  strline) then
					filesys.CopyFile strsource +  strline, strtarget + strline 	
								If err.Number <> 0 Then
									WScript.Echo strline + chrw(13) + "không thể chép dòng này"
								End If			
					
					'Bo format 
					If Instr(LCase(strline),"htm") > 0  Then
'						WScript.Echo strtarget + strline
						Set revFile = CreateObject("Scripting.FileSystemObject").OpenTextFile("3.txt", 1)
						Do Until revFile.AtEndOfStream
							str3text = revFile.ReadLine
							If(Left(str3text,2) <> "//") then 
'				 				crstr = Left(strline, InStrRev(strline, "|")-1)
				 				strsegment = Split(str3text,"|", -1, 1)
								crstr = strsegment(0)
								nwstr = strsegment(1)								
'								nwstr = Mid(strline, InStrRev(strline, "|")+1)
								If filesys.FileExists(strtarget +  strline) then
									FindAndReplace strtarget + strline, crstr, nwstr 
								Else 
									WScript.Echo strtarget + strline
								End If	
							End If
						Loop
						revFile.Close
					End If
					'Ket thuc bo format
				Else 
					WScript.Echo strline + chrw(13) + "không tồn tại tệp này"
				End if	
			End If
		Loop		
	
End Select
WScript.Echo "Xong!!"
'---------------------------------------------------------------------------------------------------
Function FindAndReplace(strFilename, strFind, strReplace) 
'WScript.Echo strFilename
Set inputFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(strFilename, 1)
strInputFile = inputFile.ReadAll
inputFile.Close
Set inputFile = Nothing
	If InStr(strInputFile, strFind) <> 0 then
		If Filecatch <> strFilename then
			nFcount = nFcount + 1
'			WScript.Echo strInputFile
		End If
		Set outputFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(strFilename, 2)
		outputFile.Write Replace(strInputFile, strFind, strReplace)
		outputFile.Close
		Set outputFile = Nothing
		Filecatch = strFilename
	End If
End Function
'---------------------------------------------------------------------------------------------------
Function NotExistfile(FNotixist)
	Set fileNotexist = CreateObject("Scripting.FileSystemObject") 
	If Not(fileNotexist.FileExists(sCurPath+"NotExist.txt")) Then
		Set objFile = objFSO.CreateTextFile(sCurPath+"NotExist.txt",True)
		objFile.Close
		WScript.Echo "Not exist !!!"	
	End If
	Set writing = fileNotexist.OpenTextFile(sCurPath+"NotExist.txt", 2) 
	If (FNotixist <>"") Then
		writing.Write FNotixist
	End If
	FileNotexist.Close 
End Function
'---------------------------------------------------------------------------------------------------
Function getoptionfolder(stroption)
Dim sysstr 
	Set Sysoption = CreateObject("Scripting.FileSystemObject").OpenTextFile(sCurPath + "syscopyfolder.txt", 1)		
		Do Until Sysoption.AtEndOfStream
			sysline = Sysoption.ReadLine
			If InStr(sysline, stroption) <> 0 Then
	
				sysstr = split(sysline,"|",-1,1)
				getoptionfolder = sysstr(2)
				Exit Do
			End IF
		Loop
	Sysoption.Close 	
End Function