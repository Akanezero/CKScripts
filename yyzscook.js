/*
用药助手13.15
脚本作者：@ios151 
特别说明：CK且用且珍惜,<临床指南→指南专题>没有100%解锁.如需解锁完整版单独使用yyzsck.js版
免责声明：仅供学习 请勿传播，请勿在闲鱼售卖
更新时间: 2023.9.10.23.26

[rewrite_local]
#纯会员数据共享(单独使用的话放本地)
^https://newdrugs.dxy.cn url script-request-header https://raw.githubusercontent.com/Yu9191/Script/main/yyzscook.js
#修改个人用户信息
^https://newdrugs.dxy.cn url script-response-body https://raw.githubusercontent.com/Yu9191/Script/main/yyzs2.js
#pdf获取 测试远程不行 放本地用吧
#^https:\/\/file1\.dxycdn\.com\/ url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/pdf-url.js

[mitm]
hostname = newdrugs.dxy.cn, file1.dxycdn.com

*/
var version_='jsjiami.com.v7';const r=b;(function(c,d,e,f,g,h,i){return c=c>>0x5,h='hs',i='hs',function(j,k,l,m,n){const q=b;m='tfi',h=m+h,n='up',i+=n,h=l(h),i=l(i),l=0x0;const o=j();while(!![]&&--f+k){try{m=parseInt(q(0x1a3,'WsBz'))/0x1+-parseInt(q(0x1b7,'^z%5'))/0x2*(parseInt(q(0x1ae,'awgC'))/0x3)+-parseInt(q(0x1a2,'Mfm3'))/0x4*(-parseInt(q(0x1ac,'Clb('))/0x5)+parseInt(q(0x19e,'awgC'))/0x6+-parseInt(q(0x1a9,'[]g^'))/0x7+-parseInt(q(0x19f,'4NsZ'))/0x8+parseInt(q(0x1a7,'6lJv'))/0x9*(-parseInt(q(0x19d,'UKNW'))/0xa);}catch(p){m=l;}finally{n=o[h]();if(c<=f)l?g?m=n:g=n:l=n;else{if(l==g['replace'](/[RxVBDNIqtMQXylWHOAkug=]/g,'')){if(m===k){o['un'+h](n);break;}o[i](n);}}}}}(e,d,function(j,k,l,m,n,o,p){return k='\x73\x70\x6c\x69\x74',j=arguments[0x0],j=j[k](''),l='\x72\x65\x76\x65\x72\x73\x65',j=j[l]('\x76'),m='\x6a\x6f\x69\x6e',(0x13e5e4,j[m](''));});}(0x1920,0x8e572,a,0xcb),a)&&(version_=a);function b(c,d){const e=a();return b=function(f,g){f=f-0x19a;let h=e[f];if(b['WlfCLa']===undefined){var i=function(n){const o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let p='',q='';for(let r=0x0,s,t,u=0x0;t=n['charAt'](u++);~t&&(s=r%0x4?s*0x40+t:t,r++%0x4)?p+=String['fromCharCode'](0xff&s>>(-0x2*r&0x6)):0x0){t=o['indexOf'](t);}for(let v=0x0,w=p['length'];v<w;v++){q+='%'+('00'+p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(q);};const m=function(n,o){let p=[],q=0x0,r,t='';n=i(n);let u;for(u=0x0;u<0x100;u++){p[u]=u;}for(u=0x0;u<0x100;u++){q=(q+p[u]+o['charCodeAt'](u%o['length']))%0x100,r=p[u],p[u]=p[q],p[q]=r;}u=0x0,q=0x0;for(let v=0x0;v<n['length'];v++){u=(u+0x1)%0x100,q=(q+p[u])%0x100,r=p[u],p[u]=p[q],p[q]=r,t+=String['fromCharCode'](n['charCodeAt'](v)^p[(p[u]+p[q])%0x100]);}return t;};b['QfERZn']=m,c=arguments,b['WlfCLa']=!![];}const j=e[0x0],k=f+j,l=c[k];return!l?(b['EQbHnT']===undefined&&(b['EQbHnT']=!![]),h=b['QfERZn'](h,g),c[k]=h):h=l,h;},b(c,d);}function a(){const s=(function(){return[version_,'IIyjWMsuQjOxiatImXkNiR.qVBcHgoWmDl.vQWA7==','WPLfWRRdJCkHWORdIIFdOueGW7ynvCo8o0z+WRJdQmojsmo4D8krFSorfmk7xICiW5eBW5hdOa3dQhRdVmoRWO3dUSkVWRVcMCkVBCoYE8kEaCk4WO3cVSkKxgJcUZldH8kjnsekWPCJahhdO2xcMe3dRXDqzSkrj8k5W6BdQHOgtaFdVCkTbtbGWQhcPCo5W5yMWR9qWO4XB8kwCt7cHrBcOLy4mu/dKSoko27cLSk8oCo8WOHsW7L4W7tcTdldMmkDsSk2W7Tms28dW6pdHrhcKdFdRmozfmoRvqRcJalcKmkjW75vWOv5BmoLganAWROJW444fCkfW6GgxexcOmomWPydiGtdVZ3cIMvBWRPYEHrmW78duwT7W5CrWR4KWPNcQh3dJh/cISoiWPJcHJWlnmoUWRX4W7NdKmk1W4SmWQZcUSowWO06CHCUWP5xW6GCwaFdLmkKW6PKFCotW4iPnc9XW64tWQBdLCk9WOSPDfNcVeXhW4/cHKRdUSo3nvLRW6BcHt5dFdBdH8o1W5FcSIRdKCozW5TJzSk8rmk7y8oAWOKOWOtdHa/dG8k6hCkXW4pdPMJcHmklWOGiW63dKHaos8oNhCoavKWPWR7dNmkmgH0KWRtdQ0nsWP3cSbZdJ8kKdCkQW5WbW7fQWPBdHNTzW7vtxmoYE8kYWRldI8orWRWhWQhdQKtcT8oeWOX4W4Gkb8kcvgDkWOtcNmk/WPpdRwjlCuKex1iJW5TnySk4W7qoW5ucuIeUWPG1WQPrsKKJWQ/cTw9HbGvlvgBcJmoEWPZdRvCUaSk/lLxdGmkrg8o+WOJdMGiZWOGVsmoSWQZcGmochmk2fSkDxCkMh8oHWOj5WRedWOxdNNJdS8k7W6tcKr49B8kio8k8W7bYFslcPmoeWRGRBemUrKFdGK/dS3BdGaG1W67dGSkWWQSgq3ZdOwBdUSoeWRv4omk9W7FcRIX4W7bslmkTW5FcPYlcLmoKWRxdM15NW6G0W794cXGIWRNdUbD2WPnJWRNdOCk7s8oEWOddG8oVW7lcHsyuh3VcQL5AWQGEWOJdHCoMWOJdGSk2fSoeW5ZcS8keW50xWOyBW69LWR5jWOvCeJbjWQpdHmornsnLW7JdM8kWoXNcISoCWPldISkSCCkXlLJcPXJdNSoaW5eJySoYWPPszgOqW6CKW5FdPCo3leFcMKJdUSkTvmkTivWTW4ZcO8kqESocW6u6nMXkB0P4WRTuCcBdSCkOW4xcJYKyW7mFFSk5rmoPASkxW7hcOCkLW7j1W5/cImoUWQRdUSoUxSocWPrDp8oKjNzOBwjUWQeUW79Ub8kwdIFcSSoNWPTMWQaTW7yPE8o4WPDZWOGuxf7dLYNdISkzW6K8W4C9AtBdP1vOECogE8oYW6ddJSoUWODgqCoHWRhdNtRdLbybuerqW6tdOxzGp8kIW4KgW6hdNNhcHXXfW4VdNSk/WQtcJmkRySk0cmoFW4rRvCoXaSk1WR5vW5JcRIuVsIxcUCoooctdLHKEB8oGWRnUamoWeh7cIvhdOYmxB8oenJT5W5jEdg9IugVdPgH0W7NcQZCtCSobW7jbpCkCCCkjBSkQFCoYimoyWPBdQCo+WO10W7CDW7RcISoRW6baz8ooACoRWR4+W6pdR8oxW6WisXxcVCkwWRhcICoUW6NdSZHGpmkjWR1vWPDtWQHtW47cKxuub8khlWGqjCkUW6yTW7pcUaX+uh0IW7tcSrX0DSoFW4pcNGayWPpdVt3dJwZdKN3cT2FcOSkkW7/cGCoFWRlcJSkgWR5xvxJcNcr8WPGfBSopngbcaZ7cGx7cRSo3WPtcOSoyWPujW7NdSCkeqCoEW7FdQurIifjonSkdcrVcPNeVW59BxGZdVKBdPrBcUSonWR9vsCkXW7ddRSo5ASohECkbWPtdOCk9W7GzBfNdPmkAWR7dOG','WQhdUMPbESk+a0FdKdhcIq','btWklvlcGG','W5xdICobW5bmb1xdJSk7v2XLEq','WQWRthOWh1JdKNK8W4C','uhfDq0tcGvNcOqLFWPBcGq','aMnadI7cUCk0W4JdTK4','W4O0WRxcVtvIg2hdNSoQxmkfWQb0WPpdK8o0WPHAWRldJ8kQCCkGnSkrWQ3cOaf3lwhcPSkKF2qhW43cICkpWQ7cHmk0b8owWPb1W7y','WP49fGLKW4pcNtbgW4NcSG','WRpdHxdcTJRdUdldPSkEcCkIpmoxjrNcGG3dT8k/AGu6W7xcT3NcPK4cW7xcVmoQWRRdGd/dKCodBgtcV8oOigJdR04TWPyUlhFdVCk7W4jyWRq2W7ddMSosC8kjWRddNX/cLYfvqmo/BmokE1q'].concat((function(){return['BtXwW7e+fq','WRv6W5BdLCkbWQqAW4VdIXnTp1pcTxGKW4FdLMFdPhNdN11WqsZdQmk4zqWoW43cJGSf','vSo/WQRcVYSTF8oOzmov','sZlcQ2/dM3yo','WQ9XW6a','aCkni08dWQJdJ011WORdHJ5sWPldMf7dUf3dKCoJWRhcPmo2','W6qBW4ZdMgu1wh/cPCkjiSk9W4T1W4xcMCk8W5D8WRhcGCk7FCo9dmo4W4FdTG81DxFdVCoaFtyzW7ldSSkqWQ7dMmk2FSoqWPn4','AxSjWRmDWOBdGW','W47dKItcSHeOW60kCCk0','W4yKq0TkBG','kSoYmCo+cLK','W7vMlthcSaVcHa/cTv3dKSkHsG'].concat((function(){return['sK0ObJHlxHzbWPm','WPW6eG9VWP/dVtHHW4JcPhjD','pvhdNmo7WOqzW7hdLhBdPGhcVhi','putcRmoVlW','lSobWOVdVmocCeVcImoDB8oeW7f6','W6FcKSkrCJqeWQRcOxK0','WQuPtxm3BcldV3yWW43cTZG','W6NdP0JcTCoFWQZdOSoSW7vi','pc0gW5OrrSk8kSoAW5NdKmoIW690k0X+W4hcHCkhW64jW6JdRmoEqWm9jhLLdfzNW4OEwf3dOCofWRuKWRunsHddNN8'];}()));}()));}());a=function(){return s;};return a();};const newHeaders={'Host':'newdrugs.dxy.cn','Cookie':r(0x1a6,'Y5AD'),'app-sandbox':'0','Accept':r(0x1b4,'YtGM'),'app-version':r(0x1a0,'Fc)o'),'app-os':r(0x1a8,'$WQC'),'app-username':r(0x1ab,'$WQC'),'app-mc':r(0x1a5,'5iOA'),'app-mt':'iPhone_iOS15.1.1','Accept-Encoding':r(0x1b1,'8dxf'),'app-hard-name':r(0x1b0,'5iOA'),'Referer':r(0x1b5,'IVU#'),'User-Agent':r(0x1af,'%&PZ'),'Accept-Language':r(0x1b6,'[ohE'),'Connection':r(0x1b8,'mogN'),'app-ac':'4124c5f1-1029-4fda-b06f-a87ac5ad8d9f','DXY-AUTH-TOKEN':r(0x1ad,'[ohE'),'app-os-version':r(0x19b,'2sf6')},requestHeaders=$request[r(0x1b3,'1F9D')];Object[r(0x19a,'5ARf')](requestHeaders,newHeaders),$done({'headers':requestHeaders});var version_ = 'jsjiami.com.v7';

