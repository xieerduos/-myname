!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=144)}({144:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(145);function r(e){const n=document.createElement("script");n.textContent=";("+e.toString()+")(window)",document.documentElement.appendChild(n),n.parentNode.removeChild(n)}window.addEventListener("message",e=>{e.source===window&&e.data.vueDetected&&chrome.runtime.sendMessage(e.data)}),document instanceof HTMLDocument&&(r(function(e){setTimeout(()=>{const n=document.querySelectorAll("*");let t;for(let e=0;e<n.length;e++)if(n[e].__vue__){t=n[e];break}if(t){let n=Object.getPrototypeOf(t.__vue__).constructor;for(;n.super;)n=n.super;e.postMessage({devtoolsEnabled:n.config.devtools,vueDetected:!0},"*")}},100)}),r(o.a))},145:function(e,n,t){"use strict";n.a=function(e){let n=null,t=0;const o={normal:"#3BA776",warn:"#DB6B00",error:"#DB2600"};function r(){clearTimeout(t),n&&(document.body.removeChild(n),n=null)}e.__VUE_DEVTOOLS_TOAST__=((e,c)=>{const d=o[c]||o.normal;console.log(`%c vue-devtools %c ${e} %c `,"background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",`background: ${d}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff`,"background:transparent"),n?n.querySelector(".vue-wrapper").style.background=d:((n=document.createElement("div")).addEventListener("click",r),n.innerHTML=`\n      <div id="vue-devtools-toast" style="\n        position: fixed;\n        bottom: 6px;\n        left: 0;\n        right: 0;\n        height: 0;\n        display: flex;\n        align-items: flex-end;\n        justify-content: center;\n        z-index: 999999999999999999999;\n        font-family: Menlo, Consolas, monospace;\n        font-size: 14px;\n      ">\n        <div class="vue-wrapper" style="\n          padding: 6px 12px;\n          background: ${d};\n          color: white;\n          border-radius: 3px;\n          flex: auto 0 1;\n          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n          cursor: pointer;\n        ">\n          <div class="vue-content"></div>\n        </div>\n      </div>\n      `,document.body.appendChild(n)),n.querySelector(".vue-content").innerText=e,clearTimeout(t),t=setTimeout(r,5e3)})}}});