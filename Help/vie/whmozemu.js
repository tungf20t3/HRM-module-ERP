﻿if(!window.gbIE4&&(window.gbNav6||gbSafari3)&&!document.childNodes[0].insertAdjacentHTML){HTMLElement.prototype.insertAdjacentElement=function(a,b){switch(a){case"beforeBegin":this.parentNode.insertBefore(b,this);break;case"afterBegin":this.insertBefore(b,this.firstChild);break;case"beforeEnd":this.appendChild(b);break;case"afterEnd":if(this.nextSibling){this.parentNode.insertBefore(b,this.nextSibling)}else{this.parentNode.appendChild(b)}break}};HTMLElement.prototype.insertAdjacentHTML=function(b,d){var c=this.ownerDocument.createRange();c.setStartBefore(this);var a=c.createContextualFragment(d);this.insertAdjacentElement(b,a)};HTMLElement.prototype.insertAdjacentText=function(b,c){var a=document.createTextNode(c);this.insertAdjacentElement(b,a)}}function testScroll(){if(window._pageXOffset==null){window._pageXOffset=window.pageXOffset;window._pageYOffset=window.pageYOffset}document.scrollTop=window.pageYOffset;document.scrollLeft=window.pageXOffset;window.document.scrollHeight=document.height;window.document.scrollWidth=document.width;window.document.clientWidth=window.innerWidth;window.document.clientHeight=window.innerHeight;if(((window.pageXOffset!=window._pageXOffset)||(window.pageYOffset!=window._pageYOffset))&&(window.onscroll)){window.onscroll()}window._pageXOffset=window.pageXOffset;window._pageYOffset=window.pageYOffset}if(window.gbNav6&&!window.gbNav7){setInterval("testScroll()",50)};if(typeof(Sys)!=="undefined"){Sys.Application.notifyScriptLoaded()};