parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wFKc":[function(require,module,exports) {
function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c,a=!0,r=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return a=e.done,e},e:function(e){r=!0,c=e},f:function(){try{a||null==l.return||l.return()}finally{if(r)throw c}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(s):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var s=null,l=document.querySelector("input[value=male]"),c=document.querySelector("input[value=female]"),a=document.querySelector("input[value=v-neck]"),r=document.querySelector("input[value=reg-neck]"),i=document.querySelector("input[value=small]"),d=document.querySelector("input[value=regular]"),o=document.querySelector("input[value=large]"),u=document.querySelector("input[value=x-large]"),p=document.querySelector("input[value=red]"),m=document.querySelector("input[value=green]"),h=document.querySelector("input[value=white]"),f=document.querySelector("input[value=black]"),v=document.querySelector("input[value=blue]"),g=document.querySelector("input[value=pink]");function k(e){var t=document.getElementsByClassName("image")[0];document.getElementsByTagName("svg")[0];e===l&&(s=l,t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.47 182.56">\n    <defs>\n      <style>\n        .cls-2{stroke-miterlimit:10;stroke-width:.5px;fill:none;stroke:#000}\n      </style>\n    </defs>\n    <g id="Layer_2" data-name="Layer 2">\n      <g id="Objects">\n        <path d="M62.77.31C58.73 4.42 44.23 12.23 33.3 16c-4.3 2.38-7.47 5.3-11.06 8.68C15.16 31.35.81 81.31.32 84c-.62 3.38 3.17 6.38 5.76 8.12 11.92 7.54 24.47 7.22 26.45 6.43a89 89 0 002.95-9.26l.27 5.06c-.27 18.28-4 76.56-4 76.56.57 2.55 2.43 3.13 4.78 4.17 2 .88 23.16 7.49 40.54 7.23 39.58-.93 47.48-5.44 51.31-7.09 4.35-1.89 8.48-3.41 7.75-8.81-.36-2.71-6-33.11-3.72-60.4a121.82 121.82 0 00-.53-12.45c-.29-3-1.37-9.35.2-11.91 1.33 4.29 4.83 15.09 4.83 15.09s18 2.91 31.26-10.33c0 0-7.95-42.12-16.69-56.16-9.24-19.34-43.68-23.31-49.05-29.9-2.43 2.06-22.31 9.1-39.66.23" stroke-width=".5" stroke-miterlimit="10" fill="#333" stroke="#333"/>\n        <path class="cls-2" d="M2 77.67c.65 3 4.25 5.73 6.59 7.42 11.4 7.41 24.11 8.45 26 7.68"/>\n        <path class="cls-2" d="M135.62 92.37s21.19.93 31.65-11"/>\n        <path class="cls-2" d="M135.09 90.78s24.5.13 31.39-11.66"/>\n        <path class="cls-2" d="M1.31 80.58s8.35 12.85 32.58 14.57"/>\n        <path class="cls-2" d="M61.71 4.82s19.6 10.73 41.26 0"/>\n        <path class="cls-2" d="M58.07 4.22s-.8 13.31 23.24 15.3c0 0 20.66.6 27.42-15.3"/>\n        <path class="cls-2" d="M60.65 2s.79 12.31 21.66 12.71c0 0 14.9.6 22.65-12.52"/>\n        <path class="cls-2" d="M32.91 165s33.41 26.69 102.3 3"/>\n        <path class="cls-2" d="M32.65 162.8s33.93 25.86 102.82 2.2"/>\n        <g>\n          <path class="cls-2" d="M132.11 81.65s-7.67-54.43 7.66-63.89"/>\n          <path d="M35.47 88.9s8.87-58.12-8.86-68.22" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000" stroke-width=".5"/>\n        </g>\n      </g>\n    </g>\n  </svg>\n  '),e===c&&(s=c,t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.27 190.42">\n  <defs>\n    <style>\n      .cls-4{stroke-miterlimit:10}.cls-3,.cls-4{stroke-width:.5px;fill:none;stroke:#000}.cls-3{stroke-linecap:round;stroke-linejoin:round}\n    </style>\n  </defs>\n  <g id="Layer_2" data-name="Layer 2">\n    <g id="Objects">\n      <path d="M61.6.31s19 32.73 45.7.13c0 0 25.46 0 46.6 28.27l16 23.93-27.21 23.69-9.42-8.92s-5.09 35.15-1 52 6.88 55.26 6.37 62.9a235 235 0 01-55.52 7.9c-17.08.23-36.18-4.09-50.41-7.9 0 0 0-50.17 6.62-63.15 0 0 5.6-28.27-3.31-49.4l-7.64 9.16S17.92 70.7 13.56 66.23A165 165 0 00.35 54.94l23.78-31.8S30 12 61.6.31z" stroke-width=".5" stroke-miterlimit="10" stroke="#333" fill="#333"/>\n      <path d="M62.42 1.09s19.37 34.54 43.68.38c0 0-25.27 9.78-43.68-.38z" fill="#333"/>\n      <path class="cls-3" d="M64.67 4.69s15.2 8.71 39.54-.23"/>\n      <path class="cls-3" d="M62.52 1.43s15.95 9 43.77 0"/>\n      <path class="cls-3" d="M24.13 23.14S36.14 55.75 36 69.71"/>\n      <path class="cls-3" d="M147.13 21.14S132.83 53.75 133 67.71"/>\n      <path class="cls-3" d="M32.85 177s50.34 18.33 105.34 0"/>\n      <path class="cls-3" d="M32.85 175s50.34 18.33 105.34 0"/>\n      <path class="cls-4" d="M61.6.31s8.94 15.09 24.27 23.55c0 0 13.09-10.63 21.35-23.67"/>\n      <path class="cls-4" d="M58.4 1.37s4.81 14.08 27.33 26.45c0 0 15.89-10.43 25-26.89"/>\n    </g>\n  </g>\n</svg>\n'),e===a&&s===l&&(t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.47 182.56">\n  <defs>\n    <style>\n      .cls-2{stroke-miterlimit:10;stroke-width:.5px;fill:none;stroke:#000}\n    </style>\n  </defs>\n  <g id="Layer_2" data-name="Layer 2">\n    <g id="Objects">\n      <path d="M62.77.31C58.73 4.42 44.23 12.23 33.3 16c-4.3 2.38-7.47 5.3-11.06 8.68C15.16 31.35.81 81.31.32 84c-.62 3.38 3.17 6.38 5.76 8.12 11.92 7.54 24.47 7.22 26.45 6.43a89 89 0 002.95-9.26l.27 5.06c-.27 18.28-4 76.56-4 76.56.57 2.55 2.43 3.13 4.78 4.17 2 .88 23.16 7.49 40.54 7.23 39.58-.93 47.48-5.44 51.31-7.09 4.35-1.89 8.48-3.41 7.75-8.81-.36-2.71-6-33.11-3.72-60.4a121.82 121.82 0 00-.53-12.45c-.29-3-1.37-9.35.2-11.91 1.33 4.29 4.83 15.09 4.83 15.09s18 2.91 31.26-10.33c0 0-7.95-42.12-16.69-56.16-9.24-19.34-43.68-23.31-49.05-29.9-2.43 2.06-22.31 9.1-39.66.23" stroke-width=".5" stroke-miterlimit="10" fill="#333" stroke="#333"/>\n      <path class="cls-2" d="M2 77.67c.65 3 4.25 5.73 6.59 7.42 11.4 7.41 24.11 8.45 26 7.68"/>\n      <path class="cls-2" d="M135.62 92.37s21.19.93 31.65-11"/>\n      <path class="cls-2" d="M135.09 90.78s24.5.13 31.39-11.66"/>\n      <path class="cls-2" d="M1.31 80.58s8.35 12.85 32.58 14.57"/>\n      <path class="cls-2" d="M61.71 4.82s19.6 10.73 41.26 0"/>\n      <path class="cls-2" d="M57.26 4.22s4.45 13.53 27 25.9c0 0 15.44-9.44 24.51-25.9"/>\n      <path class="cls-2" d="M60.16 2.48s8.73 14.85 24.06 23.31c0 0 13-10.44 20.74-23.56"/>\n      <path class="cls-2" d="M32.91 165s33.41 26.69 102.3 3"/>\n      <path class="cls-2" d="M32.65 162.8s33.93 25.86 102.82 2.2"/>\n      <path class="cls-2" d="M132.11 81.65s-7.67-54.43 7.66-63.89"/>\n      <path d="M35.47 88.9s8.87-58.12-8.86-68.22" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000" stroke-width=".5"/>\n    </g>\n  </g>\n</svg>\n'),e===a&&s===c&&(t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.27 190.42">\n  <defs>\n    <style>\n      .cls-4{stroke-miterlimit:10}.cls-3,.cls-4{stroke-width:.5px;fill:none;stroke:#000}.cls-3{stroke-linecap:round;stroke-linejoin:round}\n    </style>\n  </defs>\n  <g id="Layer_2" data-name="Layer 2">\n    <g id="Objects">\n      <path d="M61.6.31s19 32.73 45.7.13c0 0 25.46 0 46.6 28.27l16 23.93-27.21 23.69-9.42-8.92s-5.09 35.15-1 52 6.88 55.26 6.37 62.9a235 235 0 01-55.52 7.9c-17.08.23-36.18-4.09-50.41-7.9 0 0 0-50.17 6.62-63.15 0 0 5.6-28.27-3.31-49.4l-7.64 9.16S17.92 70.7 13.56 66.23A165 165 0 00.35 54.94l23.78-31.8S30 12 61.6.31z" stroke-width=".5" stroke-miterlimit="10" stroke="#333" fill="#333"/>\n      <path d="M62.42 1.09s19.37 34.54 43.68.38c0 0-25.27 9.78-43.68-.38z" fill="#333"/>\n      <path class="cls-3" d="M64.67 4.69s15.2 8.71 39.54-.23"/>\n      <path class="cls-3" d="M62.52 1.43s15.95 9 43.77 0"/>\n      <path class="cls-3" d="M24.13 23.14S36.14 55.75 36 69.71"/>\n      <path class="cls-3" d="M147.13 21.14S132.83 53.75 133 67.71"/>\n      <path class="cls-3" d="M32.85 177s50.34 18.33 105.34 0"/>\n      <path class="cls-3" d="M32.85 175s50.34 18.33 105.34 0"/>\n      <path class="cls-4" d="M61.6.31s8.94 15.09 24.27 23.55c0 0 13.09-10.63 21.35-23.67"/>\n      <path class="cls-4" d="M58.4 1.37s4.81 14.08 27.33 26.45c0 0 15.89-10.43 25-26.89"/>\n    </g>\n  </g>\n</svg>\n'),e===r&&s===l&&(t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.47 182.56">\n  <defs>\n    <style>\n      .cls-2{stroke-miterlimit:10;stroke-width:.5px;fill:none;stroke:#000}\n    </style>\n  </defs>\n  <g id="Layer_2" data-name="Layer 2">\n    <g id="Objects">\n      <path d="M62.77.31C58.73 4.42 44.23 12.23 33.3 16c-4.3 2.38-7.47 5.3-11.06 8.68C15.16 31.35.81 81.31.32 84c-.62 3.38 3.17 6.38 5.76 8.12 11.92 7.54 24.47 7.22 26.45 6.43a89 89 0 002.95-9.26l.27 5.06c-.27 18.28-4 76.56-4 76.56.57 2.55 2.43 3.13 4.78 4.17 2 .88 23.16 7.49 40.54 7.23 39.58-.93 47.48-5.44 51.31-7.09 4.35-1.89 8.48-3.41 7.75-8.81-.36-2.71-6-33.11-3.72-60.4a121.82 121.82 0 00-.53-12.45c-.29-3-1.37-9.35.2-11.91 1.33 4.29 4.83 15.09 4.83 15.09s18 2.91 31.26-10.33c0 0-7.95-42.12-16.69-56.16-9.24-19.34-43.68-23.31-49.05-29.9-2.43 2.06-22.31 9.1-39.66.23" stroke-width=".5" stroke-miterlimit="10" fill="#333" stroke="#333"/>\n      <path class="cls-2" d="M2 77.67c.65 3 4.25 5.73 6.59 7.42 11.4 7.41 24.11 8.45 26 7.68"/>\n      <path class="cls-2" d="M135.62 92.37s21.19.93 31.65-11"/>\n      <path class="cls-2" d="M135.09 90.78s24.5.13 31.39-11.66"/>\n      <path class="cls-2" d="M1.31 80.58s8.35 12.85 32.58 14.57"/>\n      <path class="cls-2" d="M61.71 4.82s19.6 10.73 41.26 0"/>\n      <path class="cls-2" d="M58.07 4.22s-.8 13.31 23.24 15.3c0 0 20.66.6 27.42-15.3"/>\n      <path class="cls-2" d="M60.65 2s.79 12.31 21.66 12.71c0 0 14.9.6 22.65-12.52"/>\n      <path class="cls-2" d="M32.91 165s33.41 26.69 102.3 3"/>\n      <path class="cls-2" d="M32.65 162.8s33.93 25.86 102.82 2.2"/>\n      <g>\n        <path class="cls-2" d="M132.11 81.65s-7.67-54.43 7.66-63.89"/>\n        <path d="M35.47 88.9s8.87-58.12-8.86-68.22" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000" stroke-width=".5"/>\n      </g>\n    </g>\n  </g>\n</svg>\n'),e===r&&s===c&&(t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.27 190.42">\n  <defs>\n    <style>\n      .cls-3{stroke-width:.5px;fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}\n    </style>\n  </defs>\n  <g id="Layer_2" data-name="Layer 2">\n    <g id="Objects">\n      <path d="M62.42 1.09s19.37 34.54 43.68.38c0 0-25.27 9.78-43.68-.38z" fill="#333"/>\n      <path d="M61.6.31s19 32.73 45.7.13c0 0 25.46 0 46.6 28.27l16 23.93-27.21 23.69-9.42-8.92s-5.09 35.15-1 52 6.88 55.26 6.37 62.9a235 235 0 01-55.52 7.9c-17.08.23-36.18-4.09-50.41-7.9 0 0 0-50.17 6.62-63.15 0 0 5.6-28.27-3.31-49.4l-7.64 9.16S17.92 70.7 13.56 66.23A165 165 0 00.35 54.94l23.78-31.8S30 12 61.6.31z" stroke-width=".5" stroke="#333" stroke-miterlimit="10" fill="#333"/>\n      <path class="cls-3" d="M58.94 1.26S80.82 38.35 110.3.69"/>\n      <path class="cls-3" d="M65 4.68s14.15 8.94 38.5 0"/>\n      <path class="cls-3" d="M62.52 1.43s16.18 8.94 44 0"/>\n      <path class="cls-3" d="M24.13 23.14S36.14 55.75 36 69.71"/>\n      <path class="cls-3" d="M147.13 21.14S132.83 53.75 133 67.71"/>\n      <path class="cls-3" d="M32.85 177s50.34 18.33 105.34 0"/>\n      <path class="cls-3" d="M32.85 175s50.34 18.33 105.34 0"/>\n    </g>\n  </g>\n</svg>\n'),e===i&&(t.className="image sizeS"),e===d&&(t.className="image sizeM"),e===o&&(t.className="image sizeL"),e===u&&(t.className="image sizeXL"),e===p&&(t.id="red"),e===m&&(t.id="green"),e===h&&(t.id="white"),e===f&&(t.id="black"),e===v&&(t.id="blue"),e===g&&(t.id="pink")}l.addEventListener("click",function(){k(l)}),c.addEventListener("click",function(){k(c)}),r.addEventListener("click",function(){k(r)}),a.addEventListener("click",function(){k(a)}),i.addEventListener("click",function(){k(i)}),d.addEventListener("click",function(){k(d)}),o.addEventListener("click",function(){k(o)}),u.addEventListener("click",function(){k(u)}),p.addEventListener("click",function(){k(p)}),m.addEventListener("click",function(){k(m)}),h.addEventListener("click",function(){k(h)}),f.addEventListener("click",function(){k(f)}),v.addEventListener("click",function(){k(v)}),g.addEventListener("click",function(){k(g)});var y=0;function M(e){var t=document.getElementsByTagName("fieldset");if(null===e){if(y<=t.length){y++;for(var n=0;n<t.length;n++){var s=100*y;t[n].style.transform="translateX(-".concat(s,"%)")}}}else{for(var l=100*e,c=0;c<t.length;c++)t[c].style.transform="translateX(-".concat(l,"%)");y=e}}document.getElementsByClassName("container")[0].classList.add("carousel-active");var w,L=document.getElementsByClassName("input"),E=e(L);try{for(E.s();!(w=E.n()).done;){var S=w.value;S.addEventListener("click",function(){M(null)})}}catch(T){E.e(T)}finally{E.f()}var x=document.getElementById("form");x.addEventListener("click",function(e){M(0),e.preventDefault()});var b=document.getElementById("neck");b.addEventListener("click",function(e){M(1),e.preventDefault()});var B=document.getElementById("size");B.addEventListener("click",function(e){M(2),e.preventDefault()});var j=document.getElementById("color");j.addEventListener("click",function(e){M(3),e.preventDefault()});var q=document.getElementById("text");q.addEventListener("click",function(e){M(4),e.preventDefault()});var C=document.getElementsByClassName("text-display")[0],N=document.getElementsByName("text")[0];function z(){C.textContent=N.value}function I(){C.id=this.value}function A(){C.className="text-display "+this.value}N.addEventListener("keyup",z),document.getElementById("font-list").onchange=I,document.getElementById("text-color").onchange=A;
},{}]},{},["wFKc"], null)
//# sourceMappingURL=/js.9f2b18db.js.map