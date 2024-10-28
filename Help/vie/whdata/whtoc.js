//	WebHelp 5.10.001
// const strings
function setRoot(n){gsRoot=n}function aPE(n,t){gaProj[gaProj.length]=new tocProjEntry(n,t)}function tocProjEntry(n,t){n.lastIndexOf("/")!=n.length-1&&(n+="/"),this.sPPath=n,this.sRPath=t}function window_OnLoad(){parent&&parent!=this&&parent.projReady&&parent.projReady(gsRoot,gaProj)}var gaProj=[],gsRoot="";window.onload=window_OnLoad;