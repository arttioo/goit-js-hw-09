function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var l=i("7Y9D8");const r=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),s=document.querySelector('input[name="amount"]');function d(e,o){const n=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{n?(t({position:e,delay:o}),console.log({position:e,delay:o})):i({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const n=Number(r.value),t=Number(u.value),i=Number(s.value);for(let o=0;o<=i;o+=1){const i=n+t*(o-1);console.log(i),d(o,i).then((({position:o,delay:n})=>{console.log({position:o,delay:n}),e(l).Notify.success(`Fulfilled promise ${o} in ${n}ms`),console.log({position:o,delay:n})})).catch((({position:o,delay:n})=>{e(l).Notify.failure(`Rejected promise ${o} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.691303f0.js.map
