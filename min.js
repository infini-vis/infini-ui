self.iui=function(t){"use strict";function n(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function e(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,a=void 0;try{for(var u,i=t[Symbol.iterator]();!(r=(u=i.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return e}(t,n)||o(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/*! (c) Andrea Giammarchi - ISC */()}function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,n){if(t){if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var u={};u.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){return n.prototype=new n("").constructor.prototype,n;function n(t,n){n||(n={});var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!!n.bubbles,!!n.cancelable,n.detail),e}}();var i=u.CustomEvent,c={};
/*! (c) Andrea Giammarchi - ISC */try{c.WeakSet=WeakSet}catch(t){!function(t){var n=new t,e=r.prototype;function r(e){n.set(this,new t),e&&e.forEach(this.add,this)}e.add=function(t){return n.get(this).set(t,1),this},e.delete=function(t){return n.get(this).delete(t)},e.has=function(t){return n.get(this).has(t)},c.WeakSet=r}(WeakMap)}var l=c.WeakSet;
/*! (c) Andrea Giammarchi */var f="function"==typeof cancelAnimationFrame,s=f?cancelAnimationFrame:clearTimeout,v=f?requestAnimationFrame:setTimeout;var d=function(t){return{get:function(n){return t.get(n)},set:function(n,e){return t.set(n,e),e}}},p=null,h=d(new WeakMap),y=function(t,n,e){t.apply(n,e)},m={async:!1,always:!1},g=function(t,n){return"function"==typeof n?n(t):n},b=function(t,n,e,r){var o=p.i++,a=p,u=a.hook,i=a.args,c=a.stack,l=a.length;o===l&&(p.length=c.push({}));var d=c[o];if(d.args=i,o===l){var b="function"==typeof e,w=(b?r:e)||r||m,k=w.async,A=w.always;d.$=b?e(n):g(void 0,n),d._=k?h.get(u)||h.set(u,function(t){var n,e,r,o,a;return i(),function(t,i,l){return r=t,o=i,a=l,e||(e=v(u)),--n<0&&c(!0),c};function u(){i(),r.apply(o,a||[])}function i(){n=t||1/0,e=f?0:null}function c(t){var n=!!e;return n&&(s(e),t&&u()),n}}()):y,d.f=function(n){var e=t(d.$,n);(A||d.$!==e)&&(d.$=e,d._(u,null,d.args))}}return[d.$,d.f]},w=function(t,n){return b(g,t,void 0,n)},k=new WeakMap,A=function(t){(k.get(t)||[]).forEach((function(t){var n=t.clean;(0,t.stop)(),n&&(t.clean=null,n())}))},N=k.has.bind(k),E=function(t){var n=t.Event,e=t.WeakSet,r=!0,o=null;return function(t){return r&&(r=!r,o=new e,function(t){var r=new e,a=new e;try{new MutationObserver(l).observe(t,{subtree:!0,childList:!0})}catch(n){var u=0,i=[],c=function(t){i.push(t),clearTimeout(u),u=setTimeout((function(){l(i.splice(u=0,i.length))}),0)};t.addEventListener("DOMNodeRemoved",(function(t){c({addedNodes:[],removedNodes:[t.target]})}),!0),t.addEventListener("DOMNodeInserted",(function(t){c({addedNodes:[t.target],removedNodes:[]})}),!0)}function l(t){for(var n,e=t.length,o=0;o<e;o++)f((n=t[o]).removedNodes,"disconnected",a,r),f(n.addedNodes,"connected",r,a)}function f(t,e,r,o){for(var a,u=new n(e),i=t.length,c=0;c<i;1===(a=t[c++]).nodeType&&s(a,u,e,r,o));}function s(t,n,e,r,a){o.has(t)&&!r.has(t)&&(a.delete(t),r.add(t),t.dispatchEvent(n));for(var u=t.children||[],i=u.length,c=0;c<i;s(u[c++],n,e,r,a));}}(t.ownerDocument)),o.add(t),t}}({Event:i,WeakSet:l}),C=function t(n,e){var r=n.nodeType;if(r){var o=1===r?n:function(t){for(var n=t.firstChild;n&&1!==n.nodeType;)n=n.nextSibling;if(n)return n;throw"unobservable"}(n);E(o),o.addEventListener("disconnected",e,!1)}else{var a=n.valueOf();a!==n&&t(a,e)}},S=function(t){var n=null,e=function(t){var n=[];return function e(){var r=p,o=[];p={hook:e,args:arguments,stack:n,i:0,length:n.length,after:o};try{return t.apply(null,arguments)}finally{p=r;for(var a=0,u=o.length;a<u;a++)o[a]()}}}(t);return function(){var t=e.apply(this,arguments);return N(e)&&C(t,n||(n=A.bind(null,e))),t}},x=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,T=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,O=/<[a-z][^>]+$/i,M=/>[^<>]*$/,j=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,L=/\s+$/,W=function(t,n,e){return T.test(n)?t:"<".concat(n).concat(e.replace(L,""),"></").concat(n,">")},$=function(t,n,e){for(var r=[],o=t.length,a=function(e){var o=t[e-1];r.push(x.test(o)&&function t(n,e){return 0<e--&&(O.test(n[e])||!M.test(n[e])&&t(n,e))}(t,e)?o.replace(x,(function(t,r,o){return"".concat(n).concat(e-1,"=").concat(o||'"').concat(r).concat(o?"":'"')})):"".concat(o,"\x3c!--").concat(n).concat(e-1,"--\x3e"))},u=1;u<o;u++)a(u);r.push(t[o-1]);var i=r.join("").trim();return e?i:i.replace(j,W)},B=Array.isArray,D=[],I=D.indexOf,z=D.slice,_=function(t,n){return 111===t.nodeType?1/n<0?n?function(t){var n=t.firstChild,e=t.lastChild,r=document.createRange();return r.setStartAfter(n),r.setEndAfter(e),r.deleteContents(),n}(t):t.lastChild:n?t.valueOf():t.firstChild:t},F=function(t){var n="content"in r("template")?function(t){var n=r("template");return n.innerHTML=t,n.content}:function(t){var n=r("fragment"),o=r("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var u=RegExp.$1;o.innerHTML="<table>"+t+"</table>",a=o.querySelectorAll(u)}else o.innerHTML=t,a=o.childNodes;return e(n,a),n};return function(t,e){return("svg"===e?o:n)(t)};function e(t,n){for(var e=n.length;e--;)t.appendChild(n[0])}function r(n){return"fragment"===n?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",n)}function o(t){var n=r("fragment"),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",e(n,o.firstChild.childNodes),n}}(document),H=function(t,n){return t.childNodes[n]},R=function(t){for(var n=[],e=t.parentNode;e;)n.push(I.call(e.childNodes,t)),e=(t=e).parentNode;return n},q=document,P=q.createTreeWalker,U=q.importNode,G=1!=U.length,J=G?function(t,n){return U.call(document,F(t,n),!0)}:F,K=G?function(t){return P.call(document,t,129,null,!1)}:function(t){return P.call(document,t,129)},Q=function(t,n,e){return function(t,n,e,r,o){for(var a=e.length,u=n.length,i=a,c=0,l=0,f=null;c<u||l<i;)if(u===c)for(var s=i<a?l?r(e[l-1],-0).nextSibling:r(e[i-l],0):o;l<i;)t.insertBefore(r(e[l++],1),s);else if(i===l)for(;c<u;)f&&f.has(n[c])||t.removeChild(r(n[c],-1)),c++;else if(n[c]===e[l])c++,l++;else if(n[u-1]===e[i-1])u--,i--;else if(n[c]===e[i-1]&&e[l]===n[u-1]){var v=r(n[--u],-1).nextSibling;t.insertBefore(r(e[l++],1),r(n[c++],-1).nextSibling),t.insertBefore(r(e[--i],1),v),n[u]=e[i]}else{if(!f){f=new Map;for(var d=l;d<i;)f.set(e[d],d++)}if(f.has(n[c])){var p=f.get(n[c]);if(l<p&&p<i){for(var h=c,y=1;++h<u&&h<i&&f.get(n[h])===p+y;)y++;if(y>p-l)for(var m=r(n[c],0);l<p;)t.insertBefore(r(e[l++],1),m);else t.replaceChild(r(e[l++],1),r(n[c++],-1))}else c++}else t.removeChild(r(n[c++],-1))}return e}(t.parentNode,n,e,_,t)},V=function(t,n){return"ref"===n?function(t){return function(n){"function"==typeof n?n(t):n.current=t}}(t):"aria"===n?function(t){return function(n){for(var e in n)t.setAttribute("role"===e?e:"aria-".concat(e),n[e])}}(t):".dataset"===n?function(t){var n=t.dataset;return function(t){for(var e in t)n[e]=t[e]}}(t):"."===n.slice(0,1)?function(t,n){return function(e){t[n]=e}}(t,n.slice(1)):"on"===n.slice(0,2)?function(t,n){var e,r=n.slice(2);return!(n in t)&&n.toLowerCase()in t&&(r=r.toLowerCase()),function(n){var o=B(n)?n:[n,!1];e!==o[0]&&(e&&t.removeEventListener(r,e,o[1]),(e=o[0])&&t.addEventListener(r,e,o[1]))}}(t,n):function(t,n){var e,r=!0,o=document.createAttributeNS(null,n);return function(n){e!==n&&(null==(e=n)?r||(t.removeAttributeNode(o),r=!0):(o.value=n,r&&(t.setAttributeNodeNS(o),r=!1)))}}(t,n)};
/*! (c) Andrea Giammarchi - ISC */function X(t){var n=t.type,e=t.path.reduceRight(H,this);return"node"===n?function(t){var n,e,r=[];return function o(a){switch(typeof a){case"string":case"number":case"boolean":n!==a&&(n=a,e?e.textContent=a:e=document.createTextNode(a),r=Q(t,r,[e]));break;case"object":case"undefined":if(null==a){n!=a&&(n=a,r=Q(t,r,[]));break}if(B(a)){n=a,0===a.length?r=Q(t,r,[]):"object"==typeof a[0]?r=Q(t,r,a):o(String(a));break}"ELEMENT_NODE"in a&&n!==a&&(n=a,r=Q(t,r,11===a.nodeType?z.call(a.childNodes):[a]))}}}(e):"attr"===n?V(e,t.name):function(t){var n;return function(e){n!=e&&(n=e,t.textContent=null==e?"":e)}}(e)}var Y=d(new WeakMap),Z=function(t,n){var e=Y.get(n)||Y.set(n,function(t,n){for(var e=$(n,"isµ","svg"===t),r=J(e,t),o=K(r),a=[],u=n.length-1,i=0,c="".concat("isµ").concat(i);i<u;){var l=o.nextNode();if(!l)throw"bad template: ".concat(e);if(8===l.nodeType)l.textContent===c&&(a.push({type:"node",path:R(l)}),c="".concat("isµ").concat(++i));else{for(;l.hasAttribute(c);)a.push({type:"attr",path:R(l),name:l.getAttribute(c)}),l.removeAttribute(c),c="".concat("isµ").concat(++i);/^(?:style|textarea)$/i.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(c,"--\x3e")&&(a.push({type:"text",path:R(l)}),c="".concat("isµ").concat(++i))}}return{content:r,nodes:a}}(t,n)),r=e.content,o=e.nodes,a=U.call(document,r,!0);return{content:a,updates:o.map(X,a)}},tt=function(t,n){var e=n.type,r=n.template,o=n.values,a=o.length;nt(t,o,a);var u=t.entry;u&&u.template===r&&u.type===e||(t.entry=u=function(t,n){var e=Z(t,n);return{type:t,template:n,content:e.content,updates:e.updates,wire:null}}(e,r));for(var i=u,c=i.content,l=i.updates,f=i.wire,s=0;s<a;s++)l[s](o[s]);return f||(u.wire=function(t){var n=t.childNodes,e=n.length;if(e<2)return n[0];var r=z.call(n,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[e-1],valueOf:function(){if(n.length!==e)for(var o=0;o<e;)t.appendChild(r[o++]);return t}}}(c))},nt=function t(n,e,r){for(var o=n.stack,a=0;a<r;a++){var u=e[a];u instanceof et?e[a]=tt(o[a]||(o[a]={stack:[],entry:null,wire:null}),u):B(u)?t(o[a]||(o[a]={stack:[],entry:null,wire:null}),u,u.length):o[a]=null}r<o.length&&o.splice(r)};function et(t,n,e){this.type=t,this.template=n,this.values=e}var rt=Object.create,ot=Object.defineProperties,at=function(t){var n=d(new WeakMap);return ot((function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return new et(t,n,r)}),{for:{value:function(e,r){var o=n.get(e)||n.set(e,rt(null));return o[r]||(o[r]=function(n){return function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return tt(n,{type:t,template:e,values:o})}}({stack:[],entry:null,wire:null}))}},node:{value:function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return tt({stack:[],entry:null,wire:null},{type:t,template:n,values:r}).valueOf()}}})},ut=at("html"),it=at("svg"),ct=Array.isArray,lt=Object.create,ft=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return new et("html",t,e)};ft.for=function(t){var n=d(new WeakMap);return function(e,r){var o=n.get(e)||n.set(e,lt(null)),a=o[r]||(o[r]={stack:[],entry:null});return function(n){for(var o=arguments.length,u=new Array(o>1?o-1:0),i=1;i<o;i++)u[i-1]=arguments[i];return dt(a,u),t.for(e,r).apply(void 0,[n].concat(u))}}}(ut);var st=function(t,n){var e,o=n.fn,a=n.template,u=n.values,i=t.entry;return i&&i.fn===o||(t.entry=i={fn:o,hook:null},i.hook=function(t,n){return S((function(){var e=n.fn.apply(null,arguments);return e instanceof et?(vt(t,e),pt(n,e)):e}))}({stack:[],entry:null},i)),(e=i).hook.apply(e,[a].concat(r(u)))},vt=function(t,n){var e=n.values;dt(t,e,e.length)},dt=function t(n,e,r){for(var o=n.stack,a=0;a<r;a++){var u=e[a];u instanceof yt?e[a]=st(o[a]||(o[a]={stack:[],entry:null}),u):u instanceof et?vt(o[a]||(o[a]={stack:[],entry:null}),u):ct(u)?t(o[a]||(o[a]={stack:[],entry:null}),u,u.length):o[a]=null}r<o.length&&o.splice(r)},pt=function(t,n){var e=n.type,o=n.template,a=n.values;return("svg"===e?it:ut).for(t,e).apply(void 0,[o].concat(r(a)))};function ht(t){return function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return new yt(t,n,r)}}function yt(t,n,e){this.fn=t,this.template=n,this.values=e}function mt(){var t=n(['<button onclick="','">'," ","</button>"]);return mt=function(){return t},t}var gt=ht((function(t){var n=e(w(0),2),r=n[0],o=n[1];return ft(mt(),(function(){return o(r+1)}),t.title,r)}));function bt(){var t=n(['<button onclick="','">'," ","</button>"]);return bt=function(){return t},t}var wt=ht((function(t){var n=e(w(0),2),r=n[0],o=n[1];return ft(bt(),(function(){return o(r+1)}),t.title,r)}));return t.Button=gt,t.NextButton=wt,t}({});