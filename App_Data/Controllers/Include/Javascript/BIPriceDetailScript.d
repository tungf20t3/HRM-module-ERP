﻿<![CDATA[
function priceDetail$FillGrid(n,t,i){var r=n.get_element().parentForm,s,e,f,u,o,h;if(t!=""){for(s=eval(t),e=0;e<s.length;e++)for(n._appendRow(null,!0),f=0;f<i.length;f++)u=s[e][f],o=i[f],o>=0&&(h=n._fields[o-1],h.Type=="DateTime"&&u&&(u=new Date(u.substring(0,4),u.substring(4,6)-1,u.substring(6,8))),n._setItemValue(n._rowCount,o,u));n._rowCount>0&&r._action!="View"&&n._getItem(1,1).focus()}else r._action!="View"&&n._appendRow(null,!0);r._action!="View"?n._getItem(1,1).focus():(r._buttonFocus=r._findButton(r._break?"Close":"Cancel"),window.setTimeout(function(){r._buttonFocus.focus()},200))}function priceDetail$SetGridHiddenFields(n,t){var r,u,i,e,s,f,o;if(t){for(r=t,u="",i=0;i<r.length;i++){for(e=r[i].Fields.split(","),s=r[i].Value,f=0;f<e.length;f++)o=n._getColumnOrder($func.trim(e[f])),o!=-1&&n._setColumnVisible(o,!s);r[i].Value&&(u+=(u==""?"":",")+r[i].Fields)}n._externalHiddenFields=u}}function priceDetail$ChangeItemFormat(n,t,i){var r=n.getItem(t);r.control._format=i;n.setItemValue(t,r.value)}function priceDetail$GetJson(n,t,i){var e,u,o,s,f,h;if(t._rowCount<=0)return null;for(e=[],u=!0,o=1;o<=t._rowCount;o++){for(s=[],f=0;f<i.length;f++){var c=i[f],l=t._fields[c-1],r=t._getItemValue(o,c);l.Type=="DateTime"&&r?(r=r.getFullYear()+String(r.getMonth()+1).padStart(2,"0")+String(r.getDate()).padStart(2,"0"),u=!1):l.Type=="Decimal"&&r!=0?u=!1:r!=""&&(u=!1);s[f]=r}u||e.push(s)}return h="",e.length>0&&(h=JSON.stringify(e)),h}function priceDetail$TransferData(n,t,i,r){var u=priceDetail$GetJson(n,t,i,r),e,f,o;return u?(e=n.grid,f=e._detailInfo,f.maxLength>0&&u.length<=f.maxLength?(n.cancelDialog(),u):(n._checked=!1,o=n._language=="v"?"Dữ liệu chi tiết vượt quá giới hạn cho phép.":"Detail data has reached your maximum limit of characters allowed.",$message.show(o,String.format("var g = $find('{0}');if (g._rowCount > 0) g._getItem(1, 1).focus();",t.get_id())),null)):null}function priceDetail$Swap(n,t,i){var r=n[t];n[t]=n[i];n[i]=r}function priceDetail$Partition(n,t,i,r){for(var e=n[Math.floor((i+t)/2)][r],u=t,f=i;u<=f;){while(n[u][r]<e)u++;while(n[f][r]>e)f--;u<=f&&(priceDetail$Swap(n,u,f),u++,f--)}return u}function priceDetail$QuickSort(n,t,i,r){var u;return n.length>1&&(u=priceDetail$Partition(n,t,i,r),t<u-1&&priceDetail$QuickSort(n,t,u-1,r),u<i&&priceDetail$QuickSort(n,u,i,r)),n}function priceDetail$Sort(n,t){return priceDetail$QuickSort(n,0,n.length-1,t)}function priceDetail$Calculate$Scale(n,t,i,r){var e,c,f,o,u,s,h;if(!t)return null;for(e=eval(t),c=eval("["+i+"]"),f=0;f<e.length&&e[f][0]<=n;)f++;return(f--,f>=0&&f<e.length)?(o=e[f][1],r.p=o,e[f][3]!=""?(u=priceDetail$Calculate$ConditionType(o,e[f][3],i),s=u[0],n>0&&(u[1]!=0||u[2]!=0||u[3]!=0||u[4]!=0)&&(h=n*u[0]-u[3]+u[4]-n*u[1]+n*u[2],s=h/n),[u[0],u[1],u[2],u[3],u[4],s]):[o,0,0,0,0,o]):[0,0,0,0,0,0]}function priceDetail$Calculate$ConditionType(n,t,i,r,u){var f,d,y,o,w,p,it,rt,b,v,ut,bt,h,k;if(!t)return null;var s=eval(t),l=eval(i),ct=0,lt=0,at=0,vt=0,yt=0;for(f=0;f<s.length;f++)s[f][1]==""&&(s[f][1]=s[f][0]);for((u=="undefined"||u==null)&&(u=[]),y=[],r=="undefined"||r==null?(f=0,d=s.length):(f=r,d=r+1),f;f<d;f++){var kt=s[f][1].toUpperCase(),g=s[f][2],pt=s[f][3],nt=l[f][0],dt=l[f][1],a=l[f][2],gt=l[f][3],e=0;if(u.indexOf(f)>=0)return null;if(u.push(f),nt=="1"?dt=="1"?(p=priceDetail$GetValueByMethod(n,y,0,f-1),e=g/100*p):e=g/100*n:nt=="2"&&(e=g),nt=="9"&&pt!=""){o=pt;w=0;o=o.replaceAll(/%p0/gi,n);f>0&&o.search(/%pp/i)>=0&&(p=priceDetail$GetValueByMethod(n,y,0,f-1),o=o.replaceAll(/%pp/gi,p));for(var tt=[],wt=[],c=o.indexOf("[");c>=0;){if(it=o.indexOf("]",c+1),it>=0){if(rt=o.substr(c+1,it-c-1),b=rt.toUpperCase(),w=0,b!=""&&b!=kt){for(v=-1,h=0;h<s.length;h++)if(s[h][1]==b){v=h;break}v>=0&&(ut=priceDetail$Calculate$ConditionType(n,t,i,v,u),bt=l[v][3],ut!=null&&(w=priceDetail$GetValueByStyle(n,ut,bt)))}tt.push(rt);wt.push(w)}else break;c=o.indexOf("[",c+1)}for(h=0;h<tt.length;h++)o=o.replace("["+tt[h]+"]",wt[h]);k=0;try{k=eval(o)}catch(ni){}isNaN(k)||(e=k)}u.pop();var ft=0,et=0,ot=0,st=0,ht=0;switch(gt){case"1":ft=a==1?e:-e;ct+=ft;break;case"2":et=a==1?e:-e;lt+=et;break;case"3":ot=a==1?e:-e;at+=ot;break;case"4":st=a==1?e:-e;vt+=st;break;case"5":ht=a==1?e:-e;yt+=ht}y.push([ft,et,ot,st,ht])}return[n+ct,lt,at,vt,yt]}function priceDetail$GetValueByStyle(n,t,i){var r=0;switch(i){case"1":r=t[0]-n;break;case"2":r=t[1];break;case"3":r=t[2];break;case"4":r=t[3];break;case"5":r=t[4]}return r}function priceDetail$GetValueByMethod(n,t,i,r){for(var u=[0,0,0],f=i;f<=r;f++)u[0]+=t[f][0],u[1]+=t[f][1],u[2]+=t[f][2];return n+(u[0]-u[1]+u[2])}function priceDetail$InitPrice(n,t,i,r,u,f,e,o){var h,s,t,c;if((u==null||u=="undefined")&&(u=""),r==null&&(r=n._getItemValue(t,n._getColumnOrder("ct_gia_pv")),r!=""?f="scl":(r=n._getItemValue(t,n._getColumnOrder("ct_gia_dk")),r!=""&&(f="ct"))),r=="")return null;if((o==null||o=="undefined")&&(o=0),f=="scl"){if(h=eval(r),u==""||e)for(s=0;s<h.length;s++)h[s].push("");else for(t=eval("["+u+"]"),s=0;s<h.length;s++)h[s].push(JSON.stringify(t[s]));if(h=priceDetail$Sort(h,0),e)return h[e][4]=u,[JSON.stringify(h),u,f];for(s=0;s<h.length&&h[s][0]<=i;)s++;if(s--,s>=0&&s<h.length){if(c=h[s][5]?"":eval(h[s][5]),h[s][3]!=""&&(c==null||c=="undefined"||c=="")&&o<=0)return n.request(n,"PriceDetailConditionTypeRef","PriceDetailConditionTypeRef",[],[["jData","String",""+h[s][3]],["runIndex","Decimal",s],["runTimes","Decimal",0],["activeRow","Decimal",n._activeRow]]),null;u=h[s][5]}return[JSON.stringify(h),u,f]}return u==""&&o<=0?(n.request(n,"PriceDetailConditionTypeRef","PriceDetailConditionTypeRef",[],[["jData","String",r],["runIndex","Decimal",t],["runTimes","Decimal",0],["activeRow","Decimal",n._activeRow]]),null):[r,u,f]}function priceDetail$CalcPrice(n,t,i,r,u){var h=u[0],c=u[1],a=u[2],e,f,o,s,l;return a=="scl"?(o={p:0},f=priceDetail$Calculate$Scale(i,h,c,o),e=o.p):(f=priceDetail$Calculate$ConditionType(r,h,c),s=f[0],i>0&&(f[1]!=0||f[2]!=0||f[3]!=0||f[4]!=0)&&(l=i*f[0]-f[3]+f[4]-i*f[1]+i*f[2],s=l/i),e=r,f[5]=s),[e,f]}function priceDetail$CheckFormula(n,t,i,r){for(var c,y,f,s,e,h,o,l=n._getColumnOrder(t),a=n._getColumnOrder(i),v=n._getColumnOrder(r),u=1;u<=n._rowCount;u++)if(o=n._getItemValue(u,a),c=n._getItemValue(u,v),o=="9"){for(ct=n._getItemValue(u,l),ct=ct.replaceAll(/%p0/gi,0),ct=ct.replaceAll(/%pp/gi,0),y=[],f=ct.indexOf("[");f>=0;){if(s=ct.indexOf("]",f+1),s>=0&&s>f){if(e=ct.substr(f,s-f+1),h=e.substr(1,e.length-2).toUpperCase(),e=="[]"||h==""||h==c)return u;ct=ct.replace(e,0)}f=ct.indexOf("[",f+1)}try{if(o=eval(ct),ct!=""&&isNaN(o))return u}catch(p){return u}}return 0}function priceDetail$InitRetrieve(n,t,i){var e=t.data,c=t.ref,o=t.type,r=n._activeRow,f=e!=null&&e!="",s=n._getItem(r,o=="scl"?i[0]:i[1]),h=n._getItemValue(r,o=="scl"?i[0]:i[1]),u=n._getItemValue(r,i[2]);return h==""||s._$Information$Reference!=null&&s._$Information$Reference!=""||u||(s._$Information$Reference=h),u=u&&!f?!1:e!=null&&s._$Information$Reference!=null&&e!=s._$Information$Reference||e!=null&&s._$Information$Reference==null,n._setItemValue(r,o=="scl"?i[0]:i[1],e),n._setItemValue(r,i[4],o=="scl"?f:!1),n._setItemValue(r,i[7],f),n._setItemValue(r,i[2],u),u&&i[8]>0&&n._setItemValue(r,i[8],""),o=="scl"?($func.setObjectWhen(n._getItem(r,i[3]),!(u&&f)),$func.setObjectWhen(n._getItem(r,i[5]),!(u&&f)),$func.setObjectWhen(n._getItem(r,i[6]),!(u&&f))):($func.setObjectWhen(n._getItem(r,i[5]),!(u&&f)),$func.setObjectWhen(n._getItem(r,i[6]),!(u&&f))),[e,c,o]}function form$Dialog$SetTitle(n,t){var r=n.get_id(),i=$get(String.format("{0}_updateDlgTitleText",r));i&&(i.innerText=t)}
]]>