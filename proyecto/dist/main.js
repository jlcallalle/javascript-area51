!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);fetch("http://data.fixer.io/api/latest?access_key=9e1910b221f5db999a84e0c82d049cf0").then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.rates.USD,n=e.rates,o=Object.keys(n),r=Object.values(n),c=document.querySelector("#input-euros"),u=document.querySelector("#input-dolar");document.querySelector("#btn-envio").addEventListener("click",function(e){var n=c.value,o=(parseInt(n)*t).toFixed(2);""==!n?(u.value=o,console.log("La conversion de ".concat(n," euros equivale a:  ").concat(o," USD"))):alert("Ingresar cantidad de euros")});var l=document.querySelector("#select-tipo"),a=document.querySelector("#inputMoneda"),i=document.querySelector("#dolarSelect"),d=document.querySelector("#btn-envio-select");o.forEach(function(e,t,n){o[t];l.innerHTML+="<option value = '".concat(r[t],"'> ").concat(o[t]," </option>")});l.addEventListener("change",function(e){var t=e.target.value;console.log("valor select",t),document.querySelector("#cantidad").innerHTML=t;var n=document.querySelector("#precio");n.style.display="block","Selecccione"==t&&(n.style.display="none")});d.addEventListener("click",function(e){var n=document.querySelector("#cantidad").textContent,o=a.value,r=(o*n*t).toFixed(2);""==!o?i.value=r:alert("Ingresar cantidad moneda")})});var o=function(e,t){return e+t}(5,2),r=function(e,t){return e*t}(5,10);console.log("El resultado de la suma es",o),console.log("El resultado de la multiplicar es:",r),console.log("Hola Modulo ES6")}]);