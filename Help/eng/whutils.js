var gsFileName="";var gsDivName="";var xmlDoc=null;var sdocPath=null;var gsInsertBeforeEndHTML="";var sReplaceStringsSrc=new Array();var gsDivName="dataDiv";var gnLoadDivNum=0;var xmlHttp=null;sReplaceStringsSrc[0]="&amp;";sReplaceStringsSrc[1]="&gt;";sReplaceStringsSrc[2]="&lt;";sReplaceStringsSrc[3]="&quot;";sReplaceStringsSrc[4]=String.fromCharCode(8364);sReplaceStringsSrc[5]="&nbsp;";var sReplaceStringsDst=new Array();sReplaceStringsDst[0]="&";sReplaceStringsDst[1]=">";sReplaceStringsDst[2]="<";sReplaceStringsDst[3]='"';sReplaceStringsDst[4]=String.fromCharCode(128);sReplaceStringsDst[5]=" ";var goHighLighted=null;var c_sEnginePath="/robo/bin/robo.dll";var gbSearchPage=false;var gIllegalTopicNameChars="*?'\"<>|[];";function _getRelativePath(a,c){if(_isAbsPath(c)){return _getPath(c)}a=_replaceSlash(a);a=_getPath(a);c=_replaceSlash(c);c=_getPath(c);for(var b=0;b<a.length&&b<c.length;b++){if(a.charAt(b)!=c.charAt(b)){break}}a=a.substring(b);c=c.substring(b);var d=0;while(d!=-1){d=a.indexOf("/");if(d!=-1){a=a.substring(d+1);c="../"+c}}return c}function _getRelativeFileName(a,c){a=_replaceSlash(a);a=_getPath(a);c=_replaceSlash(c);for(var b=0;b<a.length&&b<c.length;b++){if(a.charAt(b)!=c.charAt(b)){break}}a=a.substring(b);c=c.substring(b);var d=0;while(d!=-1){d=a.indexOf("/");if(d!=-1){a=a.substring(d+1);c="../"+c}}return c}function _isAbsPathToHost(a){return(a.indexOf("/")==0)}function _getHost(a){var b=a.indexOf("//");if(b>0){var c=a.indexOf("/",b+2);if(c>0){return a.substring(0,c)}else{return a}}return a}function _getFullPath(c,d){if(_isAbsPath(d)){return d}else{if(_isAbsPathToHost(d)){return _getHost(c)+d}else{var b=c;var e=0;while(e!=-1){var e=d.indexOf("../");if(e!=-1){d=d.substring(e+3);b=b.substring(0,b.length-1);var a=b.lastIndexOf("/");if(a!=-1){b=b.substring(0,a+1)}else{break}}}b+=d;return b}}}function _getFullPathInAIR(d,b){var a=_getFullPath(_getPath(d),b);var c=new window.runtime.flash.filesystem.File(a);return c.nativePath}function _isAbsPath(b){var a=b.toUpperCase();return(a.indexOf(":")!=-1||a.indexOf("\\\\")==0)}function _replaceSlash(c){var b=new RegExp("\\\\","g");var a=c.replace(b,"/");return a}function _getPath(d){var c=0;var b=d.indexOf("#");var a=d.indexOf("?");if(b>=0){if(a>=0){c=(b>a)?a:b}else{c=b}}else{if(a>=0){c=a}else{c=d.length}}d=d.substring(0,c);pathpos=d.lastIndexOf("/");if(pathpos>0){return d.substring(0,pathpos+1)}else{return""}}function removeItemFromArray(d,b){if(d.length&&b>=0&&b<d.length){var a=d.length;for(var c=b;c<a-1;c++){d[c]=d[c+1]}d.length=a-1}}function insertItemIntoArray(d,b,e){if(d.length&&b>=0&&b<=d.length){var a=d.length;for(var c=a;c>b;c--){d[c]=d[c-1]}d[b]=e}}function loadData(c){var a=gnLoadDivNum;var b=gsDivName+gnLoadDivNum++;loadData_2(c,b)}function loadData_2(d,b){if(!getElement(b)){if(!insertDataDiv(b)){gsFileName=d;gsDivName=b;return}}var c="";if(gbMac){c+='<iframe src="'+d+'"></iframe>'}else{c+='<iframe style="visibility:hidden;width:0;height:0" src="'+d+'"></iframe>'}var a=getElement(b);if(a){if(gbNav6){if(a.getElementsByTagName&&a.getElementsByTagName("iFrame").length>0){a.getElementsByTagName("iFrame")[0].src=d}else{a.innerHTML=c}}else{a.innerHTML=c}}}function IsHTTPURL(a){var b=true;switch(window.location.protocol){case"file:":b=false;break}return b}function loadDataXML(h,b){try{var a=_getPath(document.location.href);var d=true;if(b!="undefined"){d=b}sdocPath=_getFullPath(a,h);if(gbIE5){var g=false;if(gbAIRSSL){g=IsHTTPURL(sdocPath)}else{g=mrIsOnEngine()}if(g){xmlDoc=new ActiveXObject("Microsoft.XMLHTTP");xmlDoc.onreadystatechange=checkState;if(document.body!=null){xmlDoc.Open("get",sdocPath,d);xmlDoc.Send("")}}else{xmlDoc=new ActiveXObject("Microsoft.XMLDOM");xmlDoc.onreadystatechange=checkState;xmlDoc.async=d;if(document.body!=null){xmlDoc.load(sdocPath)}}}else{if(gbNav6&&!gbAIR){var c=new XMLHttpRequest();c.open("GET",sdocPath,false);c.send(null);xmlDoc=c.responseXML;initializeData()}else{if(gbSafari||gbAIR){if(window.XMLHttpRequest&&!(window.ActiveXObject)){xmlHttp=new XMLHttpRequest();if(xmlHttp){xmlHttp.onreadystatechange=onXMLResponse;xmlHttp.open("GET",sdocPath,false);xmlHttp.send(null)}}}}}}catch(f){onLoadXMLError()}}function onXMLResponse(){if(xmlHttp){if(xmlHttp.readyState==4){xmlDoc=xmlHttp.responseXML;if(xmlDoc!=null){putDataXML(xmlDoc,sdocPath)}else{onLoadXMLError()}}}}function initializeData(){if(xmlDoc!=null){putDataXML(xmlDoc,sdocPath)}}function checkState(){if(xmlDoc!=null){var b=xmlDoc.readyState;if(b==4){if(xmlDoc.responseXML!=null){xmlDoc=xmlDoc.responseXML}var a=xmlDoc.parseError;if(a.errorCode==0){putDataXML(xmlDoc,sdocPath)}else{onLoadXMLError()}}}}function insertDataDiv(b){var a="";if(gbMac){a+="<div id="+b+' style="display:none;"></div>'}else{a+="<div id="+b+' style="visibility:hidden"></div>'}if((gbIE5||gbNav6||gbSafari3)&&document.body){document.body.insertAdjacentHTML("beforeEnd",a)}else{gsInsertBeforeEndHTML=a;setTimeout("insertWhenBodyReady();",100);return false}return true}function insertWhenBodyReady(){if(gsInsertBeforeEndHTML==""){return}if(document.body){document.body.insertAdjacentHTML("beforeEnd",gsInsertBeforeEndHTML);gsInsertBeforeEndHTML="";loadData_2(gsFileName,gsDivName)}else{setTimeout("insertWhenBodyReady();",100)}}function window_BUnload(){for(var b=0;b<gnLoadDivNum;b++){var a=getElement(gsDivName+b);if(a){a.innerHTML=""}}}function removeThis(a){if(a.parentNode){a.parentNode.removeChild(a)}else{a.outerHTML=""}}function getParentNode(a){if(a.parentNode){return a.parentNode}else{if(a.parentElement){return a.parentElement}}return null}function getElement(a){if(document.getElementById){return document.getElementById(a)}else{if(document.all){return document.all(a)}}return null}function getChildrenByTag(d,a){if(d.getElementsByTagName){var c=new Array();var e=getElementsByTag(d,a);if(e!=null){for(var b=0;b<e.length;b++){if(e[b].parentNode==d){c[c.length]=e[b]}}return c}else{return new Array()}}else{if(d.children){return d.children.tags(a)}}}function getElementsByTag(b,a){if(b.getElementsByTagName){return b.getElementsByTagName(a)}else{if(b.all){return b.all.tags(a)}}return null}function _htmlToText(d){if(d==null){return null}var a=d;for(var b=0;b<sReplaceStringsSrc.length;b++){var c=new RegExp(sReplaceStringsSrc[b],"g");a=a.replace(c,sReplaceStringsDst[b])}return a}function _textToHtml_nonbsp(a){if(a==null){return null}var d=a;for(var b=0;b<sReplaceStringsSrc.length-1;b++){var c=new RegExp(sReplaceStringsDst[b],"g");d=d.replace(c,sReplaceStringsSrc[b])}return d}function _textToHtml(a){if(a==null){return null}var d=a;for(var b=0;b<sReplaceStringsSrc.length;b++){var c=new RegExp(sReplaceStringsDst[b],"g");d=d.replace(c,sReplaceStringsSrc[b])}return d}function getInnerText(d){var c=new RegExp("\xa0","g");if(d.innerText){var a=d.innerText;a=a.replace(c," ");return a}else{if(d.nodeValue){var e=d.nodeValue;e=e.replace(c," ");return e}else{var a="";var b=d.firstChild;while(b!=null){a+=getInnerText(b);b=b.nextSibling}return a}}}function HighLightElement(c,b,a){if(c!=null){resetHighLight(a);if(c.style){c.style.backgroundColor=b}goHighLighted=c}}function resetHighLight(a){if(goHighLighted!=null){if(goHighLighted.style){goHighLighted.style.backgroundColor=a}goHighLighted=null}}function whFont(e,f,b,d,a,c){this.sName=e;this.sSize=f;this.sColor=b;this.sStyle=d;this.sWeight=a;this.sDecoration=c}function getFontStyle(a){var b="";if(a){b+="font-family:"+a.sName+";";b+="font-size:"+a.sSize+";";b+="font-style:"+a.sStyle+";";b+="font-weight:"+a.sWeight+";";b+="text-decoration:"+a.sDecoration+";";b+="color:"+a.sColor+";"}return b}function _browserStringToText(a){var b="";var e=a.indexOf("%");while(e!=-1){b+=a.substring(0,e);a=a.substring(e+1);var d="";var c=0;while(a.charAt(c)>="0"&&a.charAt(c)<="9"){d+=a.charAt(c++)}if(d!=""){var f=parseInt(d,16);b+=String.fromCharCode(f);a=a.substring(c)}e=a.indexOf("%")}b+=a;return b}function IsInternal(c){if(!IsValidInternalTopicURL(c)){return false}var a=unescape(c);if(!IsValidInternalTopicURL(a)){return false}var b=decodeURI(c);if(!IsValidInternalTopicURL(b)){return false}return true}function IsValidInternalTopicURL(a){if(a.indexOf(":")!=-1||a.indexOf("//")!=-1||a.indexOf("&#")!=-1||(!IsValidTopicURL(a))){return false}return true}function IsValidTopicURL(b){for(var a=0;a<gIllegalTopicNameChars.length;a++){if(b.indexOf(gIllegalTopicNameChars.charAt(a))!=-1){return false}}return true}function IsNonAscii(c){var a;for(var b=0;b<c.length;b++){a=c.charCodeAt(b);if(a>128){return true}}return false}function excapeSingleQuotandSlash(e){if(e==null){return null}var c=0;var d="";var a=e.indexOf("\\",c);while(a!=-1){d+=e.substring(c,a+1)+"\\";c=a+1;a=e.indexOf("\\",c)}if(c<e.length){d+=e.substring(c)}var b=new RegExp("'","g");d=d.replace(b,"\\'");return d}function mrGetRootWindow(){var a=window;while(a!=null){if(a.cMRServer!=null&&String(a.cMRServer)!="undefined"){return a}a=a.parent}return null}function mrGetProjName(){var f=mrGetRootWindow();if(f==null){return""}var d=unescape(f.location.search);if(d==""){d=unescape(f.location.hash)}var a,e,c;var b="";if((a=d.indexOf("prj="))>=0){if((nEnd=d.indexOf("&",a))<0){nEnd=d.length}if((e=d.indexOf(">",a))<0){e=d.length}if(nEnd>e){nEnd=e}b=d.substring(a+4,nEnd)}return b}function mrInitialize(){var a=mrGetProjName();var b=mrGetRootWindow();if(a!=""&&b!=null){b.cMRServer.m_bEngine=true;b.cMRServer.m_sProjName=a}}function mrIsOnEngine(){var a=mrGetRootWindow();return a&&a.cMRServer&&a.cMRServer.m_bEngine==true}function mrGetEngineUrl(){return c_sEnginePath}function getClientHeight(){if(gbSafari3&&window.innerHeight){return window.innerHeight}return document.body.clientHeight}function PatchParametersForEscapeChar(a){var b=a;if(gbSafari){b=b.replace(/%3c/gi,"<");b=b.replace(/%3e/gi,">")}return b}function SeeForSearch(a){if(gbAIRSSL&&gbSearchPage){loadFts_context(a);goOdinHunter.strQuery=GetSearchTextFromURL();Query()}}var RH_BreadCrumbDataStringVariable="";function RH_Document_Write(a){RH_BreadCrumbDataStringVariable+=a}function RH_AddMasterBreadcrumbs(h,f,l,c,d){delete gaBreadcrumbsTrail;gaBreadcrumbsTrail=new Array();var b=_getPath(document.location.href);var g=_getFullPath(b,h);var a=_getPath(g);var k=_getFullPath(a,"MasterData.xml");try{GetMasterBreadcrumbs(k,f,l)}catch(e){}var j=gaBreadcrumbsTrail.length;if(j==0){var m='<a style="'+f+'" href="'+d+'">'+c+"</a> "+l+" ";RH_Document_Write(m)}else{while(j>0){RH_Document_Write(gaBreadcrumbsTrail[j-1]);j--}}return}var gbWhUtil=true;if(typeof(Sys)!=="undefined"){Sys.Application.notifyScriptLoaded()};