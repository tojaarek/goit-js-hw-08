function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,u=setTimeout(O,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function O(){var e=p();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function h(e){return u=void 0,g&&o?b(e):(o=i=void 0,a)}function w(){var e=p(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,v(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(p())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),S=document.querySelector("input[name='email']"),j=document.querySelector("textarea[name='message']"),O=document.querySelector("button[type='submit']"),h=e(t)((()=>{const e={email:S.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);b.addEventListener("input",h),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));S.value=e.email,j.value=e.message}(),O.addEventListener("click",(e=>{e.stopPropagation(),function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(`email: ${t.email}, message: ${t.message}`),b.reset(),localStorage.removeItem("feedback-form-state")}(e)}));
//# sourceMappingURL=03-feedback.8b58db30.js.map
