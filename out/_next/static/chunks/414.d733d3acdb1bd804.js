"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{82414:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(34051),i=t.n(r),o=t(85893),a=t(67294),c=t(91487),u=t(67095),s=t(47981);function l(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){l(o,r,i,a,c,"next",e)}function c(e){l(o,r,i,a,c,"throw",e)}a(void 0)}))}}function f(){var e=(0,a.useContext)(u._).walletId,n=(0,a.useState)(!1),t=n[0],r=n[1],l=function(){var n=d(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),c.ZP.isInitialized()||c.ZP.init("world-id-container",{action_id:"wid_ffd5517edf0edab10e52c67a05397a46",signal:e}),r(!1),n.prev=3,n.next=6,c.ZP.enable();case 6:t=n.sent,console.log("World ID verified successfully:",t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),console.warn("World ID verification failed:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(){return n.apply(this,arguments)}}();return(0,o.jsxs)("div",{className:"page",children:[(0,o.jsx)("button",{onClick:d(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:"Get QR Code"}),t&&(0,o.jsx)(s.Z,{}),(0,o.jsx)("div",{id:"world-id-container"})]})}},47981:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(67294),i=t(4529),o=t(71511),a="Waveform-module_bar__5hNhf";function c(e){var n=e.size,t=void 0===n?40:n,o=e.color,c=void 0===o?"black":o,u=e.lineWeight,s=void 0===u?3.5:u,l=e.speed,d=void 0===l?1:l;return(0,i.Z)("Waveform","size",t,"number"),(0,i.Z)("Waveform","color",c,"string"),(0,i.Z)("Waveform","speed",d,"number"),(0,i.Z)("Waveform","lineWeight",s,"number"),r.createElement("div",{className:"Waveform-module_container__kGWZq",style:{"--uib-size":t+"px","--uib-color":c,"--uib-line-weight":s+"px","--uib-speed":d+"s"}},r.createElement("div",{className:a}),r.createElement("div",{className:a}),r.createElement("div",{className:a}),r.createElement("div",{className:a}))}(0,o.s)(".Waveform-module_container__kGWZq{align-items:center;display:flex;height:calc(var(--uib-size)*.9);justify-content:space-between;width:var(--uib-size)}.Waveform-module_bar__5hNhf{background-color:var(--uib-color);height:100%;width:var(--uib-line-weight)}.Waveform-module_bar__5hNhf:first-child{animation:Waveform-module_grow__KV1Si var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.45) infinite}.Waveform-module_bar__5hNhf:nth-child(2){animation:Waveform-module_grow__KV1Si var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.3) infinite}.Waveform-module_bar__5hNhf:nth-child(3){animation:Waveform-module_grow__KV1Si var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.15) infinite}.Waveform-module_bar__5hNhf:nth-child(4){animation:Waveform-module_grow__KV1Si var(--uib-speed) ease-in-out infinite}@keyframes Waveform-module_grow__KV1Si{0%,to{transform:scaleY(.3)}50%{transform:scaleY(1)}}")},4529:function(e,n,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n,t,i){if(r(t)!==i)throw new TypeError("Invalid prop '".concat(n,"' of type '").concat(r(t),"' supplied to '").concat(e,"', expected '").concat(i,"'."))}t.d(n,{Z:function(){return i}})},71511:function(e,n,t){function r(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}t.d(n,{s:function(){return r}})}}]);