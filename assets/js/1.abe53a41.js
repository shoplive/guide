(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{308:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"f",(function(){return s})),r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"h",(function(){return c})),r.d(t,"e",(function(){return d})),r.d(t,"g",(function(){return u}));class n extends Error{constructor(e){super(e),this.code="ERR_JOSE_GENERIC",this.name=this.constructor.name,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}class s extends n{constructor(e,t="unspecified",r="unspecified"){super(e),this.code="ERR_JWT_CLAIM_VALIDATION_FAILED",this.claim=t,this.reason=r}}class a extends n{constructor(){super(...arguments),this.code="ERR_JOSE_ALG_NOT_ALLOWED"}}class o extends n{constructor(){super(...arguments),this.code="ERR_JOSE_NOT_SUPPORTED"}}class i extends n{constructor(){super(...arguments),this.code="ERR_JWS_INVALID"}}class c extends n{constructor(){super(...arguments),this.code="ERR_JWT_INVALID"}}class d extends n{constructor(){super(...arguments),this.code="ERR_JWS_SIGNATURE_VERIFICATION_FAILED",this.message="signature verification failed"}}class u extends s{constructor(){super(...arguments),this.code="ERR_JWT_EXPIRED"}}},310:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return a}));const n=new TextEncoder,s=new TextDecoder;function a(...e){const t=e.reduce((e,{length:t})=>e+t,0),r=new Uint8Array(t);let n=0;return e.forEach(e=>{r.set(e,n),n+=e.length}),r}},312:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},320:function(e,t,r){"use strict";t.a=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;throw new Error("unable to locate global object")}()},321:function(e,t,r){var n=r(0),s=r(332);n({global:!0,forced:parseInt!=s},{parseInt:s})},322:function(e,t,r){var n=r(22),s="["+r(312)+"]",a=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),i=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(a,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:i(1),end:i(2),trim:i(3)}},323:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));const n="function"==typeof atob,s="function"==typeof Buffer,a=("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder&&new TextEncoder,[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]),o=(e=>{let t={};return e.forEach((e,r)=>t[e]=r),t})(a),i=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,c=String.fromCharCode.bind(String),d="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),u=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),h=e=>{if(e=e.replace(/\s+/g,""),!i.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r,n,s="";for(let a=0;a<e.length;)t=o[e.charAt(a++)]<<18|o[e.charAt(a++)]<<12|(r=o[e.charAt(a++)])<<6|(n=o[e.charAt(a++)]),s+=64===r?c(t>>16&255):64===n?c(t>>16&255,t>>8&255):c(t>>16&255,t>>8&255,255&t);return s},f=n?e=>atob(u(e)):s?e=>Buffer.from(e,"base64").toString("binary"):h,p=s?e=>d(Buffer.from(e,"base64")):e=>d(f(e),e=>e.charCodeAt(0)),l=e=>p(y(e)),y=e=>u(e.replace(/[-_]/g,e=>"-"==e?"+":"/"))},332:function(e,t,r){var n=r(2),s=r(322).trim,a=r(312),o=n.parseInt,i=/^[+-]?0[Xx]/,c=8!==o(a+"08")||22!==o(a+"0x16");e.exports=c?function(e,t){var r=s(String(e));return o(r,t>>>0||(i.test(r)?16:10))}:o},335:function(e,t,r){"use strict";t.a=(...e)=>{const t=e.filter(Boolean);if(0===t.length||1===t.length)return!0;let r;for(const e of t){const t=Object.keys(e);if(r&&0!==r.size)for(const e of t){if(r.has(e))return!1;r.add(e)}else r=new Set(t)}return!0}},336:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r(310),s=r(320);const a=e=>{let t=e;"string"==typeof t&&(t=n.c.encode(t));return s.a.btoa(String.fromCharCode.apply(0,[...t])).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},o=e=>{let t=e;return t instanceof Uint8Array&&(t=n.b.decode(t)),t=t.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,""),new Uint8Array(s.a.atob(t).split("").map(e=>e.charCodeAt(0)))}},337:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(308);function s(e){switch(e){case"HS256":return{hash:"SHA-256",name:"HMAC"};case"HS384":return{hash:"SHA-384",name:"HMAC"};case"HS512":return{hash:"SHA-512",name:"HMAC"};case"PS256":return{hash:"SHA-256",name:"RSA-PSS",saltLength:32};case"PS384":return{hash:"SHA-384",name:"RSA-PSS",saltLength:48};case"PS512":return{hash:"SHA-512",name:"RSA-PSS",saltLength:64};case"RS256":return{hash:"SHA-256",name:"RSASSA-PKCS1-v1_5"};case"RS384":return{hash:"SHA-384",name:"RSASSA-PKCS1-v1_5"};case"RS512":return{hash:"SHA-512",name:"RSASSA-PKCS1-v1_5"};case"ES256":return{hash:"SHA-256",name:"ECDSA",namedCurve:"P-256"};case"ES384":return{hash:"SHA-384",name:"ECDSA",namedCurve:"P-384"};case"ES512":return{hash:"SHA-512",name:"ECDSA",namedCurve:"P-521"};default:throw new n.c(`alg ${e} is unsupported either by JOSE or your javascript runtime`)}}},338:function(e,t,r){"use strict";r.d(t,"b",(function(){return a}));var n=r(308),s=r(320);function a(){if(!s.a.isSecureContext&&!s.a.crypto.subtle)throw new n.b("Web Cryptography API is available only in Secure Contexts. See: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts")}t.a=s.a.crypto},339:function(e,t,r){"use strict";t.a=(e,t)=>{if(e.startsWith("HS")){const r=parseInt(e.substr(-3),10),{length:n}=t.algorithm;if("number"!=typeof n||n<r)throw new TypeError(`${e} requires symmetric keys to be ${r} bits or larger`)}if(e.startsWith("RS")||e.startsWith("PS")){const{modulusLength:r}=t.algorithm;if("number"!=typeof r||r<2048)throw new TypeError(e+" requires key modulusLength to be 2048 bits or larger")}}},340:function(e,t,r){"use strict";t.a=(e,t)=>{if(e.startsWith("HS")||"dir"===e||e.startsWith("PBES2")||e.match(/^A\d{3}(?:GCM)KW$/)){if(t instanceof Uint8Array||"secret"===t.type)return;throw new TypeError('CryptoKey or KeyObject instances for symmetric algorithms must be of type "secret"')}if(t instanceof Uint8Array)throw new TypeError("CryptoKey or KeyObject instances must be used for asymmetric algorithms");if("secret"===t.type)throw new TypeError('CryptoKey or KeyObject instances for asymmetric algorithms must not be of type "secret"')}},341:function(e,t,r){"use strict";var n=r(308);t.a=function(e,t,r,s,a){if(void 0!==a.crit&&void 0===s.crit)throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');if(!s||void 0===s.crit)return new Set;if(!Array.isArray(s.crit)||0===s.crit.length||s.crit.some(e=>"string"!=typeof e||0===e.length))throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');let o;o=void 0!==r?new Map([...Object.entries(r),...t.entries()]):t;for(const t of s.crit){if(!o.has(t))throw new n.c(`Extension Header Parameter "${t}" is not recognized`);if(void 0===a[t])throw new e(`Extension Header Parameter "${t}" is missing`);if(o.get(t)&&void 0===s[t])throw new e(`Extension Header Parameter "${t}" MUST be integrity protected`)}return new Set(s.crit)}},342:function(e,t,r){"use strict";t.a=e=>Math.floor(e.getTime()/1e3)},343:function(e,t,r){"use strict";function n(e){return!!e&&e.constructor===Object}r.d(t,"a",(function(){return n}))},344:function(e,t,r){"use strict";const n=/^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;t.a=e=>{const t=n.exec(e);if(!t)throw new TypeError("invalid time period format");const r=parseFloat(t[1]);switch(t[2].toLowerCase()){case"sec":case"secs":case"second":case"seconds":case"s":return Math.round(r);case"minute":case"minutes":case"min":case"mins":case"m":return Math.round(60*r);case"hour":case"hours":case"hr":case"hrs":case"h":return Math.round(3600*r);case"day":case"days":case"d":return Math.round(86400*r);case"week":case"weeks":case"w":return Math.round(604800*r);default:return Math.round(31557600*r)}}},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var n=r(335),s=r(308),a=r(310),o=r(336),i=r(337),c=r(338),d=r(339);var u=async(e,t,r)=>{let n;if(Object(c.b)(),t instanceof Uint8Array){if(!e.startsWith("HS"))throw new TypeError("symmetric keys are only applicable for HMAC-based algorithms");n=await c.a.subtle.importKey("raw",t,{hash:"SHA-"+e.substr(-3),name:"HMAC"},!1,["sign"])}else n=t;Object(d.a)(e,n);const s=await c.a.subtle.sign(Object(i.a)(e),n,r);return new Uint8Array(s)},h=r(340);const f=r(341).a.bind(void 0,s.d,new Map([["b64",!0]]));class p{constructor(e){this._payload=e}setProtectedHeader(e){if(this._protectedHeader)throw new TypeError("setProtectedHeader can only be called once");return this._protectedHeader=e,this}setUnprotectedHeader(e){if(this._unprotectedHeader)throw new TypeError("setUnprotectedHeader can only be called once");return this._unprotectedHeader=e,this}async sign(e,t){if(!this._protectedHeader&&!this._unprotectedHeader)throw new s.d("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");if(!Object(n.a)(this._protectedHeader,this._unprotectedHeader))throw new s.d("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");const r={...this._protectedHeader,...this._unprotectedHeader};let i=!0;if(f(null==t?void 0:t.crit,this._protectedHeader,r).has("b64")&&(i=this._protectedHeader.b64,"boolean"!=typeof i))throw new s.d('The "b64" (base64url-encode payload) Header Parameter must be a boolean');const{alg:c}=r;if("string"!=typeof c||!c)throw new s.d('JWS "alg" (Algorithm) Header Parameter missing or invalid');Object(h.a)(c,e);let d,p=this._payload;i&&(p=a.c.encode(Object(o.b)(p))),d=this._protectedHeader?a.c.encode(Object(o.b)(JSON.stringify(this._protectedHeader))):a.c.encode("");const l=Object(a.a)(d,a.c.encode("."),p),y=await u(c,e,l),b={signature:Object(o.b)(y)};return i&&(b.payload=a.b.decode(p)),this._unprotectedHeader&&(b.header=this._unprotectedHeader),this._protectedHeader&&(b.protected=a.b.decode(d)),b}}class l{constructor(e){this._flattened=new p(e)}setProtectedHeader(e){return this._flattened.setProtectedHeader(e),this}async sign(e,t){const r=await this._flattened.sign(e,t);if(void 0===r.payload)throw new TypeError("use the flattened module for creating JWS with b64: false");return`${r.protected}.${r.payload}.${r.signature}`}}var y=r(342),b=r(343),w=r(344);class S extends class{constructor(e){if(!Object(b.a)(e))throw new TypeError("JWT Claims Set MUST be an object");this._payload=e}setIssuer(e){return this._payload={...this._payload,iss:e},this}setSubject(e){return this._payload={...this._payload,sub:e},this}setAudience(e){return this._payload={...this._payload,aud:e},this}setJti(e){return this._payload={...this._payload,jti:e},this}setNotBefore(e){return this._payload="number"==typeof e?{...this._payload,nbf:e}:{...this._payload,nbf:Object(y.a)(new Date)+Object(w.a)(e)},this}setExpirationTime(e){return this._payload="number"==typeof e?{...this._payload,exp:e}:{...this._payload,exp:Object(y.a)(new Date)+Object(w.a)(e)},this}setIssuedAt(e){return this._payload=void 0===e?{...this._payload,iat:Object(y.a)(new Date)}:{...this._payload,iat:e},this}}{setProtectedHeader(e){return this._protectedHeader=e,this}async sign(e,t){var r;const n=new l(a.c.encode(JSON.stringify(this._payload)));if(n.setProtectedHeader(this._protectedHeader),(null===(r=this._protectedHeader.crit)||void 0===r?void 0:r.includes("b64"))&&!1===this._protectedHeader.b64)throw new s.h("JWTs MUST NOT use unencoded payload");return n.sign(e,t)}}}}]);