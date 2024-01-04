/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={501:function(e,n,t){var r;e=t.nmd(e),function(o){var i=(e&&e.exports,"object"==typeof t.g&&t.g);i.global!==i&&i.window;var s=function(e){this.message=e};(s.prototype=new Error).name="InvalidCharacterError";var d=function(e){throw new s(e)},a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=/[\t\n\f\r ]/g,c={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&d("The string to be encoded contains characters outside of the Latin1 range.");for(var n,t,r,o,i=e.length%3,s="",u=-1,c=e.length-i;++u<c;)n=e.charCodeAt(u)<<16,t=e.charCodeAt(++u)<<8,r=e.charCodeAt(++u),s+=a.charAt((o=n+t+r)>>18&63)+a.charAt(o>>12&63)+a.charAt(o>>6&63)+a.charAt(63&o);return 2==i?(n=e.charCodeAt(u)<<8,t=e.charCodeAt(++u),s+=a.charAt((o=n+t)>>10)+a.charAt(o>>4&63)+a.charAt(o<<2&63)+"="):1==i&&(o=e.charCodeAt(u),s+=a.charAt(o>>2)+a.charAt(o<<4&63)+"=="),s},decode:function(e){var n=(e=String(e).replace(u,"")).length;n%4==0&&(n=(e=e.replace(/==?$/,"")).length),(n%4==1||/[^+a-zA-Z0-9/]/.test(e))&&d("Invalid character: the string to be decoded is not correctly encoded.");for(var t,r,o=0,i="",s=-1;++s<n;)r=a.indexOf(e.charAt(s)),t=o%4?64*t+r:r,o++%4&&(i+=String.fromCharCode(255&t>>(-2*o&6)));return i},version:"0.1.0"};void 0===(r=function(){return c}.call(n,t,n,e))||(e.exports=r)}()},756:(e,n,t)=>{"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=t(948),s=i.encodeConsentString,d=i.getMaxVendorId,a=i.encodeVendorIdsToBits,u=i.encodePurposeIdsToBits,c=t(658).decodeConsentString,l=t(977).vendorVersionMap,f=/^[a-z]{2}$/,p=void 0,v=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.maxVendorId=0,this.created=new Date,this.lastUpdated=new Date,this.version=1,this.vendorList=null,this.vendorListVersion=null,this.cmpId=null,this.cmpVersion=null,this.consentScreen=null,this.consentLanguage=null,this.allowedPurposeIds=[],this.allowedVendorIds=[],n&&(p=n,Object.assign(this,c(n)))}return o(e,[{key:"getConsentString",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=void 0;if(p&&!e)n=p;else{if(!this.vendorList)throw new Error("ConsentString - A vendor list is required to encode a consent string");!0===e&&(this.lastUpdated=new Date),n=s({version:this.getVersion(),vendorList:this.vendorList,allowedPurposeIds:this.allowedPurposeIds,allowedVendorIds:this.allowedVendorIds,created:this.created,lastUpdated:this.lastUpdated,cmpId:this.cmpId,cmpVersion:this.cmpVersion,consentScreen:this.consentScreen,consentLanguage:this.consentLanguage,vendorListVersion:this.vendorListVersion}),p=n}return n}},{key:"getLastUpdated",value:function(){return this.lastUpdated}},{key:"setLastUpdated",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;p="",this.lastUpdated=e?new Date(e):new Date}},{key:"getCreated",value:function(){return this.created}},{key:"setCreated",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;p="",this.created=e?new Date(e):new Date}},{key:"getMaxVendorId",value:function(){return this.maxVendorId||this.vendorList&&(this.maxVendorId=d(this.vendorList.vendors)),this.maxVendorId}},{key:"getParsedVendorConsents",value:function(){return a(d(this.vendorList.vendors),this.allowedVendorIds)}},{key:"getParsedPurposeConsents",value:function(){return u(this.vendorList.purposes,this.allowedPurposeIds)}},{key:"getMetadataString",value:function(){return s({version:this.getVersion(),created:this.created,lastUpdated:this.lastUpdated,cmpId:this.cmpId,cmpVersion:this.cmpVersion,consentScreen:this.consentScreen,vendorListVersion:this.vendorListVersion})}},{key:"getVersion",value:function(){return this.version}},{key:"getVendorListVersion",value:function(){return this.vendorListVersion}},{key:"setGlobalVendorList",value:function(e){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("ConsentString - You must provide an object when setting the global vendor list");if(!e.vendorListVersion||!Array.isArray(e.purposes)||!Array.isArray(e.vendors))throw new Error("ConsentString - The provided vendor list does not respect the schema from the IAB EU’s GDPR Consent and Transparency Framework");this.vendorList&&this.vendorListVersion===e.vendorListVersion||(p="",this.vendorList={vendorListVersion:e.vendorListVersion,lastUpdated:e.lastUpdated,purposes:e.purposes,features:e.features,vendors:e.vendors.slice(0).sort((function(e,n){return e.id<n.id?-1:1}))},this.vendorListVersion=e.vendorListVersion)}},{key:"getGlobalVendorList",value:function(){return this.vendorList}},{key:"setCmpId",value:function(e){e!==this.cmpId&&(p="",this.cmpId=e)}},{key:"getCmpId",value:function(){return this.cmpId}},{key:"setCmpVersion",value:function(e){e!==this.cmpVersion&&(p="",this.cmpVersion=e)}},{key:"getCmpVersion",value:function(){return this.cmpVersion}},{key:"setConsentScreen",value:function(e){e!==this.consentScreen&&(p="",this.consentScreen=e)}},{key:"getConsentScreen",value:function(){return this.consentScreen}},{key:"setConsentLanguage",value:function(e){if(!1===f.test(e))throw new Error("ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)");e!==this.consentLanguage&&(p="",this.consentLanguage=e)}},{key:"getConsentLanguage",value:function(){return this.consentLanguage}},{key:"setPurposesAllowed",value:function(e){p="",this.allowedPurposeIds=e}},{key:"getPurposesAllowed",value:function(){return this.allowedPurposeIds}},{key:"setPurposeAllowed",value:function(e,n){var t=this.allowedPurposeIds.indexOf(e);p="",!0===n?-1===t&&this.allowedPurposeIds.push(e):!1===n&&-1!==t&&this.allowedPurposeIds.splice(t,1)}},{key:"isPurposeAllowed",value:function(e){return-1!==this.allowedPurposeIds.indexOf(e)}},{key:"setVendorsAllowed",value:function(e){p="",this.allowedVendorIds=e}},{key:"getVendorsAllowed",value:function(){return this.allowedVendorIds}},{key:"setVendorAllowed",value:function(e,n){var t=this.allowedVendorIds.indexOf(e);p="",!0===n?-1===t&&this.allowedVendorIds.push(e):!1===n&&-1!==t&&this.allowedVendorIds.splice(t,1)}},{key:"isVendorAllowed",value:function(e){return-1!==this.allowedVendorIds.indexOf(e)}}],[{key:"decodeMetadataString",value:function(e){var n=c(e),t={};return l[n.version].metadataFields.forEach((function(e){t[e]=n[e]})),t}}]),e}();e.exports={ConsentString:v}},658:(e,n,t)=>{"use strict";var r=t(90),o=r.decodeBitsToIds,i=r.decodeFromBase64;e.exports={decodeConsentString:function(e){var n=i(e),t=n.version,r=n.cmpId,s=n.vendorListVersion,d=n.purposeIdBitString,a=n.maxVendorId,u=n.created,c=n.lastUpdated,l=n.isRange,f=n.defaultConsent,p=n.vendorIdBitString,v=n.vendorRangeList,h=n.cmpVersion,g=n.consentScreen,m=n.consentLanguage,y={version:t,cmpId:r,vendorListVersion:s,allowedPurposeIds:o(d),maxVendorId:a,created:u,lastUpdated:c,cmpVersion:h,consentScreen:g,consentLanguage:m};if(l){var w=v.reduce((function(e,n){for(var t=n.isRange,r=n.startVendorId,o=n.endVendorId,i=t?o:r,s=r;s<=i;s+=1)e[s]=!0;return e}),{});y.allowedVendorIds=[];for(var V=1;V<=a;V+=1)(f&&!w[V]||!f&&w[V])&&-1===y.allowedVendorIds.indexOf(V)&&y.allowedVendorIds.push(V)}else y.allowedVendorIds=o(p);return y}}},948:(e,n,t)=>{"use strict";var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=t(90),i=o.encodeToBase64,s=o.padRight;function d(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t="",r=1;r<=e;r+=1)t+=-1!==n.indexOf(r)?"1":"0";return s(t,Math.max(0,e-t.length))}function a(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,t=0,r=0;r<e.length;r+=1)t=Math.max(t,e[r].id);for(var o=0;o<n.length;o+=1)t=Math.max(t,n[o]);for(var i="",s=1;s<=t;s+=1)i+=-1!==n.indexOf(s)?"1":"0";return i}function u(e,n){for(var t=[],r=[],o=e.map((function(e){return e.id})),i=0;i<e.length;i+=1){var s=e[i].id;if(-1!==n.indexOf(s)&&t.push(s),(-1===n.indexOf(s)||i===e.length-1||-1===o.indexOf(s+1))&&t.length){var d=t.shift(),a=t.pop();t=[],r.push({isRange:"number"==typeof a,startVendorId:d,endVendorId:a})}}return r}function c(e){var n=0;return e.forEach((function(e){e.id>n&&(n=e.id)})),n}e.exports={convertVendorsToRanges:u,encodeConsentString:function(e){var n=e.maxVendorId,t=e.vendorList,o=void 0===t?{}:t,s=e.allowedPurposeIds,l=e.allowedVendorIds,f=o.vendors,p=void 0===f?[]:f,v=o.purposes,h=void 0===v?[]:v;n||(n=c(p));var g=i(r({},e,{maxVendorId:n,purposeIdBitString:a(h,s),isRange:!1,vendorIdBitString:d(n,l)})),m=u(p,l),y=i(r({},e,{maxVendorId:n,purposeIdBitString:a(h,s),isRange:!0,defaultConsent:!1,numEntries:m.length,vendorRangeList:m}));return g.length<y.length?g:y},getMaxVendorId:c,encodeVendorIdsToBits:d,encodePurposeIdsToBits:a}},462:(e,n,t)=>{"use strict";var r=t(756).ConsentString,o=t(658).decodeConsentString,i=t(948).encodeConsentString;e.exports={ConsentString:r,decodeConsentString:o,encodeConsentString:i}},90:(e,n,t)=>{"use strict";var r=t(501),o=t(977),i=o.versionNumBits,s=o.vendorVersionMap;function d(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",t="",r=0;r<e;r+=1)t+=n;return t}function a(e,n){return d(Math.max(0,n))+e}function u(e,n){return e+d(Math.max(0,n))}function c(e,n){var t="";return"number"!=typeof e||isNaN(e)||(t=parseInt(e,10).toString(2)),n>=t.length&&(t=a(t,n-t.length)),t.length>n&&(t=t.substring(0,n)),t}function l(e){return c(!0===e?1:0,1)}function f(e,n){return e instanceof Date?c(e.getTime()/100,n):c(e,n)}function p(e,n){return c(e.toUpperCase().charCodeAt(0)-65,n)}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return p(e.slice(0,1),n/2)+p(e.slice(1),n/2)}function h(e,n,t){return parseInt(e.substr(n,t),2)}function g(e,n,t){return new Date(100*h(e,n,t))}function m(e,n){return 1===parseInt(e.substr(n,1),2)}function y(e){var n=h(e);return String.fromCharCode(n+65).toLowerCase()}function w(e,n,t){var r=e.substr(n,t);return y(r.slice(0,t/2))+y(r.slice(t/2))}function V(e){var n=e.input,t=e.field,r=t.name,o=t.type,i=t.numBits,s=t.encoder,d=t.validator;if("function"==typeof d&&!d(n))return"";if("function"==typeof s)return s(n);var a="function"==typeof i?i(n):i,p=n[r],h=null==p?"":p;switch(o){case"int":return c(h,a);case"bool":return l(h);case"date":return f(h,a);case"bits":return u(h,a-h.length).substring(0,a);case"list":return h.reduce((function(e,n){return e+I({input:n,fields:t.fields})}),"");case"language":return v(h,a);default:throw new Error("ConsentString - Unknown field type "+o+" for encoding")}}function I(e){var n=e.input;return e.fields.reduce((function(e,t){return e+V({input:n,field:t})}),"")}function S(e){var n=e.input,t=e.fields,r=e.startPosition,o=void 0===r?0:r;return{decodedObject:t.reduce((function(e,t){var r=t.name,i=t.numBits,s=function(e){var n=e.input,t=e.output,r=e.startPosition,o=e.field,i=o.type,s=o.numBits,d=o.decoder,a=o.validator,u=o.listCount;if("function"==typeof a&&!a(t))return{newPosition:r};if("function"==typeof d)return d(n,t,r);var c="function"==typeof s?s(t):s;switch(i){case"int":return{fieldValue:h(n,r,c)};case"bool":return{fieldValue:m(n,r)};case"date":return{fieldValue:g(n,r,c)};case"bits":return{fieldValue:n.substr(r,c)};case"list":return function(e,n,t,r,o){var i=0;"function"==typeof o?i=o(n):"number"==typeof o&&(i=o);for(var s=t,d=[],a=0;a<i;a+=1){var u=S({input:e,fields:r.fields,startPosition:s});s=u.newPosition,d.push(u.decodedObject)}return{fieldValue:d,newPosition:s}}(n,t,r,o,u);case"language":return{fieldValue:w(n,r,c)};default:throw new Error("ConsentString - Unknown field type "+i+" for decoding")}}({input:n,output:e,startPosition:o,field:t}),d=s.fieldValue,a=s.newPosition;return void 0!==d&&(e[r]=d),void 0!==a?o=a:"number"==typeof i&&(o+=i),e}),{}),newPosition:o}}function C(e,n){var t=e.version;if("number"!=typeof t)throw new Error("ConsentString - No version field to encode");if(n[t])return I({input:e,fields:n[t].fields});throw new Error("ConsentString - No definition for version "+t)}e.exports={padRight:u,padLeft:a,encodeField:V,encodeDataToBits:C,encodeIntToBits:c,encodeBoolToBits:l,encodeDateToBits:f,encodeLanguageToBits:v,encodeLetterToBits:p,encodeToBase64:function(e){var n=C(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:s);if(n){for(var t=u(n,7-(n.length+7)%8),o="",i=0;i<t.length;i+=8)o+=String.fromCharCode(parseInt(t.substr(i,8),2));return r.encode(o).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}return null},decodeBitsToIds:function(e){return e.split("").reduce((function(e,n,t){return"1"===n&&-1===e.indexOf(t+1)&&e.push(t+1),e}),[])},decodeBitsToInt:h,decodeBitsToDate:g,decodeBitsToBool:m,decodeBitsToLanguage:w,decodeBitsToLetter:y,decodeFromBase64:function(e,n){for(var t=e;t.length%4!=0;)t+="=";t=t.replace(/-/g,"+").replace(/_/g,"/");for(var o=r.decode(t),d="",u=0;u<o.length;u+=1){var c=o.charCodeAt(u).toString(2);d+=a(c,8-c.length)}return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,t=h(e,0,i);if("number"!=typeof t)throw new Error("ConsentString - Unknown version number in the string to decode");if(!s[t])throw new Error("ConsentString - Unsupported version "+t+" in the string to decode");return S({input:e,fields:n[t].fields}).decodedObject}(d,n)}}},977:e=>{"use strict";e.exports={versionNumBits:6,vendorVersionMap:{1:{version:1,metadataFields:["version","created","lastUpdated","cmpId","cmpVersion","consentScreen","vendorListVersion"],fields:[{name:"version",type:"int",numBits:6},{name:"created",type:"date",numBits:36},{name:"lastUpdated",type:"date",numBits:36},{name:"cmpId",type:"int",numBits:12},{name:"cmpVersion",type:"int",numBits:12},{name:"consentScreen",type:"int",numBits:6},{name:"consentLanguage",type:"language",numBits:12},{name:"vendorListVersion",type:"int",numBits:12},{name:"purposeIdBitString",type:"bits",numBits:24},{name:"maxVendorId",type:"int",numBits:16},{name:"isRange",type:"bool",numBits:1},{name:"vendorIdBitString",type:"bits",numBits:function(e){return e.maxVendorId},validator:function(e){return!e.isRange}},{name:"defaultConsent",type:"bool",numBits:1,validator:function(e){return e.isRange}},{name:"numEntries",numBits:12,type:"int",validator:function(e){return e.isRange}},{name:"vendorRangeList",type:"list",listCount:function(e){return e.numEntries},validator:function(e){return e.isRange},fields:[{name:"isRange",type:"bool",numBits:1},{name:"startVendorId",type:"int",numBits:16},{name:"endVendorId",type:"int",numBits:16,validator:function(e){return e.isRange}}]}]}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{const{ConsentString:e}=t(462),n=document.querySelector(".input"),r=document.querySelector(".output"),o=t=>{try{if(r.classList.remove("error"),n.value){const t=new e(n.value.replace(/"/g,""));r.textContent=JSON.stringify(t,null,2)}else r.textContent="Nothing to decode"}catch(t){r.textContent=t,r.classList.add("error")}};n.addEventListener("keyup",o,!1),o()})()})();