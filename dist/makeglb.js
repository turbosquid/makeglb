!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("MakeGLB",[],t):"object"==typeof exports?exports.MakeGLB=t():e.MakeGLB=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){(function(e,r){var o=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(e).replace(o,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),s=r[n];n<i;s=r[++n])d(s)||!w(s)?u+=" "+s:u+=" "+c(s);return u},t.deprecate=function(n,o){if(m(e.process))return function(){return t.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0}return n.apply(this,arguments)}};var i,u={};function c(e,n){var r={seen:[],stylize:f};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&t._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),a(r,e,r.depth)}function s(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function f(e,t){return e}function a(e,n,r){if(e.customInspect&&n&&x(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=a(e,o,r)),o}var i=function(e,t){if(m(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(h(t))return e.stylize(""+t,"number");if(g(t))return e.stylize(""+t,"boolean");if(d(t))return e.stylize("null","null")}(e,n);if(i)return i;var u=Object.keys(n),c=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),O(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return l(n);if(0===u.length){if(x(n)){var s=n.name?": "+n.name:"";return e.stylize("[Function"+s+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return e.stylize(Date.prototype.toString.call(n),"date");if(O(n))return l(n)}var f,w="",S=!1,T=["{","}"];(y(n)&&(S=!0,T=["[","]"]),x(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),j(n)&&(w=" "+Date.prototype.toUTCString.call(n)),O(n)&&(w=" "+l(n)),0!==u.length||S&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),f=S?function(e,t,n,r,o){for(var i=[],u=0,c=t.length;u<c;++u)E(t,String(u))?i.push(p(e,t,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))}),i}(e,n,r,c,u):u.map(function(t){return p(e,n,r,c,t,S)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(f,w,T)):T[0]+w+T[1]}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,i){var u,c,s;if((s=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=s.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):s.set&&(c=e.stylize("[Setter]","special")),E(r,o)||(u="["+o+"]"),c||(e.seen.indexOf(s.value)<0?(c=d(n)?a(e,s.value,null):a(e,s.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n")):c=e.stylize("[Circular]","special")),m(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function y(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function d(e){return null===e}function h(e){return"number"==typeof e}function b(e){return"string"==typeof e}function m(e){return void 0===e}function v(e){return w(e)&&"[object RegExp]"===S(e)}function w(e){return"object"==typeof e&&null!==e}function j(e){return w(e)&&"[object Date]"===S(e)}function O(e){return w(e)&&("[object Error]"===S(e)||e instanceof Error)}function x(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function T(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(m(i)&&(i=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!u[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=r.pid;u[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else u[e]=function(){};return u[e]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=g,t.isNull=d,t.isNullOrUndefined=function(e){return null==e},t.isNumber=h,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=m,t.isRegExp=v,t.isObject=w,t.isDate=j,t.isError=O,t.isFunction=x,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(3);var z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n;console.log("%s - %s",(e=new Date,n=[T(e.getHours()),T(e.getMinutes()),T(e.getSeconds())].join(":"),[e.getDate(),z[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n(4),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(1),n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var s,f=[],a=!1,l=-1;function p(){a&&s&&(a=!1,s.length?f=s.concat(f):l=-1,f.length&&y())}function y(){if(!a){var e=c(p);a=!0;for(var t=f.length;t;){for(s=f,f=[];++l<t;)s&&s[l].run();l=-1,t=f.length}s=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new g(e,t)),1!==f.length||a||c(y)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){"use strict";n.r(t);var r=n(0);const o={"image/png":["png"],"image/jpeg":["jpg","jpeg"],"text/plain":["glsl","vert","vs","frag","fs","txt"],"image/vnd-ms.dds":["dds"]},i=(e,t)=>{let n=0;if(e>0){const r=e%t;n=e+(0===r?0:t-r)}return n},u=async(e,t)=>{let n=0;const r={},u=(e=>{const t=[];return e.buffers.forEach(e=>{const{uri:n}=e;t.push({type:"buffer",uri:n})}),e.images&&e.images.forEach(e=>{const{uri:n}=e;t.push({type:"image",uri:n})}),t})(e),c=await(async(e,t)=>{const n=e.map(e=>{const{uri:n}=e;return new Promise(async e=>{if(t){const r=n.split("/"),o=r[r.length-1].toLowerCase();e(t[o])}else{const t=await fetch(n);e(await t.arrayBuffer())}})});return new Promise(t=>{Promise.all(n).then(n=>{const r=e.map((e,t)=>{const{type:r}=e;return{index:t,type:r,data:n[t]}});t(r)})})})(u,t);return e.buffers.map((e,t)=>{delete e.uri,e.byteLength=c[t].data.byteLength,r[t]=n,n+=i(c[t].data.byteLength,4)}),e.images&&e.images.map((t,u)=>{const s=e.buffers.length+u;r[s]=n;const f={buffer:0,byteOffset:n,byteLength:c[s].data.byteLength};n+=i(c[s].data.byteLength,4);const a=e.bufferViews.length;e.bufferViews.push(f),t.bufferView=a,t.mimeType=(e=>{const t=Object.keys(o);for(let n=0;n<t.length;++n){const r=t[n];for(let t=0;t<o[r].length;++t){const n=o[r][t];if(e.toLowerCase().indexOf(n)>0)return r}}return"application/octet-stream"})(t.uri),delete t.uri}),{bufferMap:r,bufferSize:n,buffers:c}},c=async(e,t)=>{const n=JSON.parse(JSON.stringify(e)),{bufferMap:o,bufferSize:c,buffers:s}=await u(n,t);n.buffers=[{byteLength:c}];const f=(new r.TextEncoder).encode(JSON.stringify(n)),a=i(f.length,4),l=a-f.length,p=20+a+8+c,y=new ArrayBuffer(p),g=new DataView(y);let d=0;g.setUint32(d,1179937895,!0),d+=4,g.setUint32(d,2,!0),d+=4,g.setUint32(d,p,!0),d+=4,g.setUint32(d,a,!0),d+=4,g.setUint32(d,1313821514,!0),d+=4;for(let e=0;e<f.length;++e)g.setUint8(d,f[e]),d+=1;for(let e=0;e<l;++e)g.setUint8(d,32),d+=1;g.setUint32(d,c,!0),d+=4,g.setUint32(d,5130562,!0),d+=4;for(let e=0;e<s.length;++e){const t=d+o[e],n=new Uint8Array(s[e].data);for(let r=0;r<s[e].data.byteLength;++r)g.setUint8(t+r,n[r])}return y},s=e=>new Blob([e],{type:"model/json-binary"});n.d(t,"GLBfromGLTF",function(){return c}),n.d(t,"BLOBfromGLB",function(){return s})}])});