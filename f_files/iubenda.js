(function(e,t){// Copyright (c) 2011-2013 Felix Gnass
"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define("_iub_spinner",function(){e.IubSpinner=t()}):e.IubSpinner=t()})(this,function(){"use strict";function e(e,t){var i,n=document.createElement(e||"div");for(i in t)n[i]=t[i];return n}function t(e){for(var t=1,i=arguments.length;i>t;t++)e.appendChild(arguments[t]);return e}function i(e,t,i,n){var r=["opacity",t,~~(100*e),i,n].join("-"),o=.01+100*(i/n),a=Math.max(1-(1-e)/t*(100-o),e),s=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return f[r]||(p.insertRule("@"+l+"keyframes "+r+"{"+"0%{opacity:"+a+"}"+o+"%{opacity:"+e+"}"+(o+.01)+"%{opacity:1}"+(o+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+a+"}"+"}",p.cssRules.length),f[r]=1),r}function n(e,t){var i,n,r=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<c.length;n++)if(i=c[n]+t,r[i]!==void 0)return i;return r[t]!==void 0?t:void 0}function r(e,t){for(var i in t)e.style[n(e,i)||i]=t[i];return e}function o(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)e[n]===void 0&&(e[n]=i[n])}return e}function a(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function s(e,t){return"string"==typeof e?e:e[t%e.length]}function l(e){return"undefined"==typeof this?new l(e):(this.opts=o(e||{},l.defaults,h),void 0)}function d(){function i(t,i){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}p.addRule(".spin-vml","behavior:url(#default#VML)"),l.prototype.lines=function(e,n){function o(){return r(i("group",{coordsize:u+" "+u,coordorigin:-d+" "+-d}),{width:u,height:u})}function a(e,a,l){t(f,t(r(o(),{rotation:360/n.lines*e+"deg",left:~~a}),t(r(i("roundrect",{arcsize:n.corners}),{width:d,height:n.width,left:n.radius,top:-n.width>>1,filter:l}),i("fill",{color:s(n.color,e),opacity:n.opacity}),i("stroke",{opacity:0}))))}var l,d=n.length+n.width,u=2*d,c=-(n.width+n.length)*2+"px",f=r(o(),{position:"absolute",top:c,left:c});if(n.shadow)for(l=1;l<=n.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=n.lines;l++)a(l);return t(e,f)},l.prototype.opacity=function(e,t,i,n){var r=e.firstChild;n=n.shadow&&n.lines||0,r&&t+n<r.childNodes.length&&(r=r.childNodes[t+n],r=r&&r.firstChild,r=r&&r.firstChild,r&&(r.opacity=i))}}var u,c=["webkit","Moz","ms","O"],f={},p=function(){var i=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),h={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={},o(l.prototype,{spin:function(t){this.stop();var i,n,o=this,s=o.opts,l=o.el=r(e(0,{className:s.className}),{position:s.position,width:0,zIndex:s.zIndex}),d=s.radius+s.length+s.width;if(t&&(t.insertBefore(l,t.firstChild||null),n=a(t),i=a(l),r(l,{left:(s.left=="auto"?n.x-i.x+(t.offsetWidth>>1):parseInt(s.left,10)+d)+"px",top:(s.top=="auto"?n.y-i.y+(t.offsetHeight>>1):parseInt(s.top,10)+d)+"px"})),l.setAttribute("role","progressbar"),o.lines(l,o.opts),!u){var c,f=0,p=(s.lines-1)*(1-s.direction)/2,h=s.fps,b=h/s.speed,g=(1-s.opacity)/(b*s.trail/100),m=b/s.lines;(function y(){f++;for(var e=0;e<s.lines;e++)c=Math.max(1-(f+(s.lines-e)*m)%b*g,s.opacity),o.opacity(l,e*s.direction+p,c,s);o.timeout=o.el&&setTimeout(y,~~(1e3/h))})()}return o},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(n,o){function a(t,i){return r(e(),{position:"absolute",width:o.length+o.width+"px",height:o.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*d+o.rotate)+"deg) translate("+o.radius+"px"+",0)",borderRadius:(o.corners*o.width>>1)+"px"})}for(var l,d=0,c=(o.lines-1)*(1-o.direction)/2;d<o.lines;d++)l=r(e(),{position:"absolute",top:1+~(o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:u&&i(o.opacity,o.trail,c+d*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&t(l,r(a("#000","0 0 4px #000"),{top:"2px"})),t(n,t(l,a(s(o.color,d),"0 0 1px rgba(0,0,0,.1)")));return n},opacity:function(e,t,i){t<e.childNodes.length&&(e.childNodes[t].style.opacity=i)}});var b=r(e("group"),{behavior:"url(#default#VML)"});return!n(b,"transform")&&b.adj?d():u=n(b,"animation"),l}),function(){typeof String.prototype.trim!="function"&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})}();var _iub=_iub||[];_iub.badges=_iub.badges||[],_iub.embedBs=_iub.embedBs||[],function(e,t){function i(){return C}function n(){var e=x("iubenda-embed",t);if(e.length==0){var i=t.getElementById("iubenda-embed");i&&r(i)}else for(var n=0;n<e.length;n++){var o=e[n],a={ppId:k(o.getAttribute("href")),isLegal:A(o)};m(o.className.split(" "),"iub-body-embed")!=-1?B({linkA:o,embedB:!0})||(a.index=Math.floor(Math.random()*1e10),a.linkA=r(o,a.index),_iub.embedBs.push(a)):B({linkA:o})||(a.linkA=r(o),_iub.badges.push(a))}}function r(e,i){var n=e,r=!1,d=!1,u=!1,c=!1,f=!1,p=!1,h="iubenda-white",g=e.getAttribute("href").split("?")[0],x=k(g),N="//",A=parseInt(e.getAttribute("data-iub-z-index"))||null,B=e.getAttribute("data-iub-overflow")||"html",C=e.className.split(" ");v(C,"no-brand")&&(r=!0),v(C,"skip-track")&&(d=!0),v(C,"iub-body-embed")&&(u=!0),v(C,"iub-legal-only")&&(c=!0),v(C,"iub-anchor")&&(f=!0),v(C,"iub-no-markup")&&(p=!0),g.indexOf("http://")!=-1?N="http://":g.indexOf("https://")!=-1&&(N="https://");var M=w(I,N),S=w(E,N),O=w(L,N),P=w(T,N);if(m(C,"iubenda-no-icon")!=-1?h="iubenda-nostyle":(h=y(["iubenda-green","iubenda-green-m","iubenda-green-s","iubenda-green-xs","iubenda-lowgray","iubenda-lowgray-m","iubenda-lowgray-s","iubenda-lowgray-xs","iubenda-midgray","iubenda-midgray-m","iubenda-midgray-s","iubenda-midgray-xs","iubenda-darkgray","iubenda-darkgray-m","iubenda-darkgray-s","iubenda-darkgray-xs","iubenda-white","iubenda-black","iubenda-nostyle"],C),-1==h&&(h="iubenda-white")),"iubenda-nostyle"!=h&&(e.style.outline="0px",e.style.border="0px",e.style.textDecoration="none",e.style.display="inline-block",e.style.background="none"),u)n=l(e,P,c,p,N,i);else if(m(["iubenda-white","iubenda-black"],h)!=-1)n=s(e,h,null,null,x,r,M,S,O,d,c,f,N,A,B);else{if(c&&(e.href=e.href+"/full-legal"),"iubenda-nostyle"!=h){var j=116,z=25,D=".gif";(h.indexOf("-m")!=-1&&h.indexOf("-mid")==-1||h.indexOf("midgray-m")!=-1)&&(j=81,z=21),(h.indexOf("-s")!=-1||h.indexOf("-xs")!=-1)&&(j=82,z=17,D=".png"),e.style.width=j+"px",e.style.height=z+"px",h+=D,o(e,M+h,j,z)}b(S,e,{onLoadCallB:function(){var i=_(M,e.href);_iub.ifr.iubendaStartBadge({linkA:e,embedP:t.getElementsByTagName("body")[0],iFrUrl:e.href,cdnBaseUrl:i,useProtocol:N,zIndex:A,overflow:B})}}),d||a(e,x),n=e}return"undefined"!=typeof editLinkA&&null!=editLinkA&&(editLinkA=null),n}function o(e,t,i,n){p(e.id,t,100,i,n)}function a(){}function s(e,i,n,r,o,s,l,d,u,c,p,h,b,g,m){e.style.display="none";var l=_(l,e.href),y=e.innerHTML.trim()||"Privacy Policy",v=e.getAttribute("title")||"Privacy Policy",b=b||"//",x={"Informativa Privacy":136,"Datenschutzerklärung":154,"Política de privacidad":146,"Politique de confidentialité":178,"Terms and Conditions":145,"Termini e Condizioni":137},N=n||x[y]||105,k=r||22,A=t.createElement("IFRAME"),B=h?"iubenda-ibadge iubenda-iframe-anchor":"iubenda-ibadge";A.setAttribute("class",B),A.setAttribute("scrolling","no"),A.setAttribute("frameBorder","0"),A.setAttribute("allowtransparency","true");var C="width:"+N+"px; height:"+k+"px;";h&&(C+=" z-index:9998; position:fixed; bottom:0px; right:0px;"),f(A,C),e.parentNode.insertBefore(A,e.nextSibling),e.parentNode.removeChild(e);var I=A.contentWindow.document;I.open(),I.write();var E=e.href.split("?")[0];E=p?E+"/full-legal":E,E=w(E,b);var L=null,T='<html><head><title>iubenda badge</title><meta name="viewport" content="width=device-width"><link type="text/css" rel="stylesheet" href="'+u+'" media="screen" />'+'<script type="text/javascript" src="'+d+'"></script></head>'+'<body onload="try{_iub.ifr.iubendaStartBadge({'+(L?"iFrUrl:'"+L+"',":"")+"useProtocol:'"+b+"',zIndex:'"+g+"',overflow:'"+m+"',cdnBaseUrl:'"+l+"'});}catch(exc){console.log('IUBENDA: error while loading [iubendaStartBadge]. Please contact info@iubenda.com for support and troubleshooting.')}\"><a href=\""+E+'" class="'+i+" "+(s?"no-brand":"")+" "+(h?"iub-anchor":"")+'" id="i_badge-link" title="'+v+'" target="_parent" >'+y+"</a></body></html>";return I.write(T),I.close(),c||a(A,o),A}function l(e,t,i,n,r,o){var r=r||"//";n||d(t);var a=e.href.split("?")[0],s=a+(n?"/embed-no-markup.json":i?"/embed-legal.json":"/embed.json")+"?i="+o;if(s=w(s,r),"undefined"!=typeof IubSpinner){var l={lines:8,length:2,width:2,radius:2,color:"#696969",speed:1.2,trail:60,shadow:!1},u=new IubSpinner(l).spin();u.el.className="_iub-pp-loading-alert",f(u.el,"position:relative; display:inline-block; padding: 6px;"),e.parentNode.insertBefore(u.el,e)}return e.style.display="none",b(s,e,{tries:1}),e}function d(e){var i=t.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,t.getElementsByTagName("head")[0].appendChild(i)}function u(e){try{var i=null;if(e.i&&e.i!=null?(i=B({index:parseInt(e.i),embedB:!0,inDom:!0}),i||(i=B({ppId:parseInt(e.pp_id),isLegal:e.is_legal,embedB:!0,inDom:!0}))):i=B({ppId:parseInt(e.pp_id),isLegal:e.is_legal,embedB:!0,inDom:!0}),i&&i.linkA){var n=i.linkA,r=t.createElement("div");r.setAttribute("id","iub-pp-container"),r.innerHTML=e.content,n.parentNode.insertBefore(r,n.nextSibling);var o=n.previousSibling;o.className=="_iub-pp-loading-alert"&&o.parentNode.removeChild(o),n.parentNode.removeChild(n),c(r)}}catch(a){console.log("IUBENDA: Error while loading [ "+a.message+" ]. Please contact info@iubenda.com for support and troubleshooting.")}}function c(e){function i(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()}function n(e){var i=e.text||e.textContent||e.innerHTML||"",n=t.getElementsByTagName("head")[0]||t.documentElement,r=t.createElement("script");r.type="text/javascript";try{r.appendChild(t.createTextNode(i))}catch(o){r.text=i}n.insertBefore(r,n.firstChild),n.removeChild(r)}function r(e,t,i){var n=i+1;if(n<=Math.max(1,d)){t.push(e);for(var o=e.childNodes,a=0;a<o.length;a++)o[a].nodeType==1&&r(o[a],t,n)}}for(var o,a,s=[],l=[],d=8,u=e.childNodes,c=0;c<u.length;c++)u[c].nodeType==1&&r(u[c],l,1);for(var c=0;l[c];c++)a=l[c],!i(a,"script")||a.type&&a.type.toLowerCase()!=="text/javascript"||s.push(a);for(var c=0;s[c];c++)o=s[c],o.parentNode&&o.parentNode.removeChild(o),n(s[c])}function f(e,t){var i=h();-1!=i&&8>i?e.style.cssText=t:e.setAttribute("style",t)}function p(e,i,n,r,o){if(!(0>=n)){var a=t.getElementById(e),s=t.createElement("img");s.src=i,s.style.width=r+"px",s.style.height=o+"px",s.style.border="0px",a&&s.width?(s.alt=a.firstChild.nodeValue,s.title=a.firstChild.nodeValue,a.replaceChild(s,a.firstChild)):setTimeout("_iub.imageFastReplace('"+e+"','"+i+"',"+--n+","+r+","+o+");",150)}}function h(){var e=-1;if(navigator.appName=="Microsoft Internet Explorer"){var t=navigator.userAgent,i=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");i.exec(t)!=null&&(e=parseFloat(RegExp.$1))}return e}function b(e,i,n){var n=n||{},r=e,o=i,a=n.onLoadCallB,s=n.tries,l=t.createElement("script");l.setAttribute("type","text/javascript"),l.setAttribute("src",e),i.parentNode.insertBefore(l,i.nextSibling),"function"==typeof a&&g(l,a),l.onerror=function(){s>0&&b(N(r,"t",s),o,{onLoadCallB:a,tries:s-1})}}function g(e,t){var i=h();-1!=i&&9>i?e.onreadystatechange=function(){(this.readyState=="loaded"||this.readyState=="complete")&&t()}:e.onload=function(){t()}}function m(e,t){var i=Object(e),n=i.length>>>0;if(0===n)return-1;var r=0;if(arguments.length>0&&(r=Number(arguments[1]),r!==r?r=0:0!==r&&r!==1/0&&r!==-(1/0)&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=n)return-1;for(var o=r>=0?r:Math.max(n-Math.abs(r),0);n>o;o++)if(o in i&&i[o]===t)return o;return-1}function y(e,t){var i=Object(e),n=i.length>>>0;if(0===n)return-1;for(var r=0;r<t.length;r++)if(m(i,t[r])!=-1)return t[r];return-1}function v(e,t){return m(e,t)!=-1?(e.splice(m(e,t),1),!0):!1}function x(e,i){i||(i=t.getElementsByTagName("body")[0]);for(var n=[],r=new RegExp("\\b"+e+"\\b"),o=i.getElementsByTagName("*"),a=0,s=o.length;s>a;a++)r.test(o[a].className)&&n.push(o[a]);return n}function w(e,t){var i=e.indexOf("//")!=-1?e.split("//")[1]:e;return t.concat(i)}function N(e,t,i){if(i){var n=e.split("#")[0],r=e.split("#")[1];return n+=(n.indexOf("?")!=-1?"&":"?")+t+"="+i,r?n+"#"+r:n}return e}function k(e){for(var t=e.split("/"),i=t.length-1;i>-1;i--)if(!isNaN(parseInt(t[i])))return parseInt(t[i]);return null}function A(e){return e.getAttribute("href").indexOf("/legal")!=-1||e.getAttribute("href").indexOf("/full-legal")!=-1||m(e.className.split(" "),"iub-legal-only")!=-1||m(e.className.split(" "),"iub-no-markup")!=-1}function B(e){for(var e=e||{},i=e.embedB?_iub.embedBs:_iub.badges,n=e.inDom==1,r=0;r<i.length;r++)if(e.index){if(i[r].index==e.index&&(!n||t.body.contains(i[r].linkA)))return i[r]}else if(e.linkA){if(i[r].linkA==e.linkA&&(!n||t.body.contains(i[r].linkA)))return i[r]}else if(i[r].ppId==e.ppId&&i[r].isLegal===e.isLegal&&(!n||t.body.contains(i[r].linkA)))return i[r];return null}function _(e,t){var i,n=["/privacy-policy","/terms-and-conditions"];if(e)return e;for(var r=0,o=n.length;o>r;r++)if(i=n[r],t.indexOf(i)>-1)return t.split(i)[0]+"/cdn/"}var C="1.1.3",I="https://cdn.iubenda.com/",E="https://cdn.iubenda.com/iubenda_i_badge.js",L="https://cdn.iubenda.com/iubenda_i_badge.css",T="https://www.iubenda.com/assets/privacy_policy.css";(function(){try{n()}catch(e){console.log("IUBENDA: Error while loading [ "+e.message+" ]. Please contact info@iubenda.com for support and troubleshooting.")}})(),e._iub.setStyle=function(e,t){f(e,t)},e._iub.onLoadCall=function(e,t){g(e,t)},e._iub.imageFastReplace=function(e,t,i,n,r){p(e,t,i,n,r)},e._iub.getElementsByClassName=function(e,t){return x(e,t)},e._iub.loadPPContent=function(e){u(e)},e._iub.version=function(){return i()}}(window,document);