(function(){var t,e,n,a,o,r,i,c,l,s,d,u,h,p,f,b,m,g,w,y,v,C,x,E,S,_,N,A;"undefined"!=typeof window&&(h=window.document,p=window.encodeURIComponent,u=window.decodeURIComponent,s=function(t){return h.createElement(t)},d=function(t){return h.createTextNode(t)},r=window.Math,t=(/^http:/.test(h.location)?"http":"https")+"://buttons.github.io/",e="github-button",n="https://api.github.com",a="octicon",o=a+"-mark-github",i="faa75404-3b97-5585-b449-4bc51338fbd1",A=function(t){var e,n,a;n=[];for(e in t)null!=(a=t[e])&&n.push(p(e)+"="+p(a));return n.join("&")},v=function(t){var e,n,a,o,r,i;for(o={},i=t.split("&"),e=0,n=i.length;e<n;e++)""!==(a=i[e])&&(r=a.split("="),""!==r[0]&&(o[u(r[0])]=u(r.slice(1).join("="))));return o},m=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},g=function(t,e,n){var a;a=function(o){return t.removeEventListener?t.removeEventListener(""+e,a):t.detachEvent("on"+e,a),n(o||window.event)},m(t,e,a)},w=function(t,e){var n,a;a=0,n=function(){!a&&(a=1)&&e()},m(t,"load",n),m(t,"error",n),m(t,"readystatechange",function(){/i/.test(t.readyState)||n()})},function(t){var e;/m/.test(h.readyState)||!/g/.test(h.readyState)&&!h.documentElement.doScroll?window.setTimeout(t):h.addEventListener?g(h,"DOMContentLoaded",t):(e=function(){/m/.test(h.readyState)&&(h.detachEvent("onreadystatechange",e),t())},h.attachEvent("onreadystatechange",e))},b=function(t,e){var n,a,o,r;r=s("script"),r.async=!0,o=t.split("?"),a=v(o.slice(1).join("?")),a.callback="_",r.src=o[0]+"?"+A(a),window._=function(t){delete window._,e(t)},window._.$=r,m(r,"error",function(){delete window._}),r.readyState&&m(r,"readystatechange",function(){"loaded"===r.readyState&&r.children&&"loading"===r.readyState&&delete window._}),n=h.getElementsByTagName("head")[0],"[object Opera]"==={}.toString.call(window.opera)?m(h,"DOMContentLoaded",function(){n.appendChild(r)}):n.appendChild(r)},c=function(t){var e;return e=window.devicePixelRatio||1,(e>1?r.ceil(r.round(t*e)/e*2)/2:r.ceil(t))||0},f=function(t){var e,n,a,o,i,l;return a=t.contentWindow.document,i=a.documentElement,e=a.body,l=i.scrollWidth,o=i.scrollHeight,e.getBoundingClientRect&&(e.style.display="inline-block",n=e.getBoundingClientRect(),l=r.max(l,c(n.width||n.right-n.left)),o=r.max(o,c(n.height||n.bottom-n.top)),e.style.display=""),[l,o]},N=function(t,e){t.style.width=e[0]+"px",t.style.height=e[1]+"px"},y=function(t){var e,n,a,o,r;for(n={href:t.href,"aria-label":t.getAttribute("aria-label")},r=["text","show-count","style","icon"],a=0,o=r.length;a<o;a++)e=r[a],e="data-"+e,n[e]=t.getAttribute(e);return null==n["data-text"]&&(n["data-text"]=t.textContent||t.innerText),t.getAttribute("data-count-api")&&(console&&console.warn("GitHub Buttons deprecated `data-count-api`: use `data-show-count` instead. Please refer to https://github.com/ntkme/github-buttons for more info."),n["data-show-count"]=1),n},l=function(t,e){var n,a,o,r,i;if(n=s("a"),i="javascript:",(n.href=e)&&n.protocol!==i)try{if(null==(r=new URL(t,e).href))throw r;n.href=r}catch(r){a=h.getElementsByTagName("base")[0],a.href=e,n.href=t,o=s("div"),o.innerHTML=n.outerHTML,n.href=o.lastChild.href,o=null,a.href=h.location.href,a.removeAttribute("href")}else n.href=t;return n.protocol!==i&&/\.github\.com$/.test("."+n.hostname)||(n.href="#",n.target="_self"),/^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(n.href)&&(n.target="_top"),n},E=function(t){var e,n,r,i;return e=l(t.href,null),e.className="button",(n=t["aria-label"])&&e.setAttribute("aria-label",n),r=e.appendChild(s("i")),r.className=a+" "+(t["data-icon"]||o),r.setAttribute("aria-hidden","true"),e.appendChild(d(" ")),i=e.appendChild(s("span")),i.appendChild(d(t["data-text"]||"")),h.body.appendChild(e)},S=function(t){var e,a,o,r;"github.com"===t.hostname&&(o=t.pathname.replace(/^(?!\/)/,"/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/))&&!o[6]&&(o[2]?(a="/"+o[1]+"/"+o[2],e="/repos"+a,o[3]?(r="subscribers_count",a+="/watchers"):o[4]?(r="forks_count",a+="/network"):o[5]?(r="open_issues_count",a+="/issues"):(r="stargazers_count",a+="/stargazers")):(e="/users/"+o[1],r="followers",a="/"+o[1]+"/"+r),b(n+e,function(e){var n,o,i;200===e.meta.status&&(o=e.data[r],n=l(a,t.href),n.className="count",n.setAttribute("aria-label",o+" "+r.replace(/_count$/,"").replace("_"," ")+" on GitHub"),n.appendChild(s("b")),n.appendChild(s("i")),i=n.appendChild(s("span")),i.appendChild(d((""+o).replace(/\B(?=(\d{3})+(?!\d))/g,","))),t.parentNode.insertBefore(n,t.nextSibling))}))},_=function(t){var e;t&&(h.body.className=t["data-style"]||"",e=E(t),/^(true|1)$/i.test(t["data-show-count"])&&S(e))},C=function(e,n){var a,o,r,c,l,d,u;if(null==e)return x();null==n&&(n=y(e)),o="#"+A(n),r=s("iframe"),d={allowtransparency:!0,scrolling:"no",frameBorder:0};for(c in d)u=d[c],r.setAttribute(c,u);N(r,[1,0]),r.style.border="none",r.src="javascript:0",h.body.appendChild(r),l=function(){var n;n=f(r),r.parentNode.removeChild(r),g(r,"load",function(){N(r,n)}),r.src=t+"buttons.html"+o,e.parentNode.replaceChild(r,e)},g(r,"load",function(){var t;(t=r.contentWindow._)?w(t.$,l):l()}),a=r.contentWindow.document,a.open().write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+i+'</title><base>\x3c!--[if lte IE 6]></base><![endif]--\x3e<link rel="stylesheet" href="'+t+'assets/css/buttons.css"><script>document.location.hash = "'+o+'";<\/script></head><body><script src="'+t+'buttons.js"><\/script></body></html>'),a.close()},x=function(){var t,n,a,o,r,i,c;if(n=[],h.querySelectorAll)n=n.slice.call(h.querySelectorAll("a."+e));else for(c=h.getElementsByTagName("a"),a=0,r=c.length;a<r;a++)t=c[a],~(" "+t.className+" ").replace(/[ \t\n\f\r]+/g," ").indexOf(" "+e+" ")&&n.push(t);for(o=0,i=n.length;o<i;o++)t=n[o],C(t)},"function"==typeof define&&define.amd?define([],{render:C}):"object"==typeof exports&&"string"!=typeof exports.nodeName?exports.render=C:(!{}.hasOwnProperty.call(h,"currentScript")&&delete h.currentScript&&h.currentScript&&(t=h.currentScript.src.replace(/[^\/]*([?#].*)?$/,"")),h.title===i?_(v(h.location.hash.replace(/^#/,""))):C()))}).call(this);
//# sourceMappingURL=buttons.js.map