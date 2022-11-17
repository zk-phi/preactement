import{h as t,Fragment as e,render as n}from"preact";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},o.apply(this,arguments)}var r;!function(t){t.Promise="Error: Promises cannot be used for SSR",t.Missing="Error: Cannot find component in provided function",t.Json="Error: Invalid JSON string passed to component"}(r||(r={}));const i=t=>t&&"function"==typeof t.then,s=["area","base","br","col","hr","img","input","link","meta","source","embed","param","track","wbr"];function c(t){const{tagName:e}=this,{formatProps:n}=this.__options;let o={};try{o=JSON.parse(t)}catch(t){console.error(r.Json,`: <${e.toLowerCase()}>`)}return n&&(o=n(o)),o}function l(t){const e={};if(null==t||!t.length)return e;for(let n=t.length-1;n>=0;n--){const o=t[n];e[o.name]=o.value}return e}function a(t){const e=t.trim().replace(/[\s_]/g,"-");return e.charAt(0).toLowerCase()+e.slice(1).replace(/-([a-z])/g,({1:t})=>t.toUpperCase())}function u(){const{attributes:t=[]}=this.__options;return this.hasAttributes()?function(t,e){const n=l(t);let o={};for(const t of Object.keys(n))-1!==(null==e?void 0:e.indexOf(t))&&(o[a(t)]=n[t]);return o}(this.attributes,t):{}}const p=["slot"];function h(){const t=function(t){const e=`<!DOCTYPE html>\n<html><body>${t}</body></html>`;let n;try{n=(new DOMParser).parseFromString(e,"text/html")}catch(t){}if(n)return n.body}(this.innerHTML);if(!t)return;const e=f.call(this,t);return()=>e}function f(n){var o;if(3===n.nodeType)return(null==(o=n.textContent)?void 0:o.trim())||"";if(1!==n.nodeType)return null;const r=String(n.nodeName).toLowerCase(),i=Array.from(n.childNodes),c=()=>i.map(t=>f.call(this,t)),u=l(n.attributes),{slot:h}=u,_=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e.indexOf(n=i[o])>=0||(r[n]=t[n]);return r}(u,p);return"script"===r?null:"body"===r?t(e,{},c()):s.includes(r)?t(r,_):h?(this.__slots[a(h)]=function(n){return n.every(t=>"string"==typeof t)?n.join(" "):t(e,{},n)}(c()),null):t(r,_,c())}function _(e,n,o={}){const{wrapComponent:s}=o,c="undefined"==typeof window,l=function(t){let e=t.toLowerCase();return e.indexOf("-")<0&&(e="component-"+e),e}(e);if(!c)return void customElements.define(l,function(t,e={}){var n;const{attributes:o=[],formAssociated:r=!1}=e;if("undefined"!=typeof Reflect&&Reflect.construct){const n=function n(){const o=Reflect.construct(HTMLElement,[],n);return o.__mounted=!1,o.__component=t,o.__properties={},o.__slots={},o.__children=void 0,o.__options=e,o};return n.observedAttributes=["props",...o],n.formAssociated=r,n.prototype=Object.create(HTMLElement.prototype),n.prototype.constructor=n,n.prototype.connectedCallback=d,n.prototype.attributeChangedCallback=m,n.prototype.disconnectedCallback=b,n}return(n=class extends HTMLElement{constructor(...n){super(...n),this.__mounted=!1,this.__component=t,this.__properties={},this.__slots={},this.__children=void 0,this.__options=e}connectedCallback(){d.call(this)}attributeChangedCallback(...t){m.call(this,...t)}disconnectedCallback(){b.call(this)}}).observedAttributes=["props",...o],n.formAssociated=r,n}(n,o));const a=n();if(i(a))throw new Error(`${r.Promise} : <${e}>`);let u=a;return s&&(u=s(a)),e=>t(l,{server:!0},[t("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}}),t(u,e)])}function d(){const e=u.call(this),n=this.getAttribute("props"),r=this.querySelector('[type="application/json"]'),s=c.call(this,n||(null==r?void 0:r.innerHTML)||"{}");null==r||r.remove();let l=this.__children;this.__mounted||this.hasAttribute("server")||(l=t(h.call(this),{})),this.__properties=o({},this.__slots,s,e),this.__children=l||[],this.removeAttribute("server"),this.innerHTML="";const a=this.__component(),p=t=>y.call(this,t);var f,_;i(a)?(f=a,_=this.tagName,f.then(t=>function(t,e){let n;return"function"==typeof t?t:("object"==typeof t&&(n=t[(o=e,(o=o.toLowerCase()).replace(/(^\w|-\w)/g,t=>t.replace(/-/,"").toUpperCase()))]||void 0),n);var o}(t,_))).then(p):p(a)}function m(e,r,i){if(!this.__mounted)return;i=null==i?void 0:i;let s=this.__properties;"props"===e?s=o({},s,c.call(this,i)):s[a(e)]=i,this.__properties=s,n(t(this.__instance,o({},s,{parent:this,children:this.__children})),this)}function b(){n(null,this)}function y(e){const{tagName:i}=this,{wrapComponent:s}=this.__options;if(!e)return void console.error(r.Missing,`: <${i.toLowerCase()}>`);s&&(e=s(e)),this.__instance=e,this.__mounted=!0;const c=o({},this.__properties,{parent:this,children:this.__children});n(t(e,c),this)}export{_ as define};
//# sourceMappingURL=define.modern.mjs.map
