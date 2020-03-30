// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"public/js/index.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var gender = null;
var formMale = document.querySelector('input[value=male]');
var formFemale = document.querySelector('input[value=female]');
var neckV = document.querySelector('input[value=v-neck]');
var neckReg = document.querySelector('input[value=reg-neck]');
var sizeS = document.querySelector('input[value=small]');
var sizeM = document.querySelector('input[value=regular]');
var sizeL = document.querySelector('input[value=large]');
var sizeXL = document.querySelector('input[value=x-large]');
var colorRed = document.querySelector('input[value=red]');
var colorGreen = document.querySelector('input[value=green]');
var colorWhite = document.querySelector('input[value=white]');
var colorBlack = document.querySelector('input[value=black]');
var colorBlue = document.querySelector('input[value=blue]');
var colorPink = document.querySelector('input[value=pink]');
formMale.addEventListener('click', function () {
  changeShirt(formMale);
});
formFemale.addEventListener('click', function () {
  changeShirt(formFemale);
});
neckReg.addEventListener('click', function () {
  changeShirt(neckReg);
});
neckV.addEventListener('click', function () {
  changeShirt(neckV);
});
sizeS.addEventListener('click', function () {
  changeShirt(sizeS);
});
sizeM.addEventListener('click', function () {
  changeShirt(sizeM);
});
sizeL.addEventListener('click', function () {
  changeShirt(sizeL);
});
sizeXL.addEventListener('click', function () {
  changeShirt(sizeXL);
});
colorRed.addEventListener('click', function () {
  changeShirt(colorRed);
});
colorGreen.addEventListener('click', function () {
  changeShirt(colorGreen);
});
colorWhite.addEventListener('click', function () {
  changeShirt(colorWhite);
});
colorBlack.addEventListener('click', function () {
  changeShirt(colorBlack);
});
colorBlue.addEventListener('click', function () {
  changeShirt(colorBlue);
});
colorPink.addEventListener('click', function () {
  changeShirt(colorPink);
});

function changeShirt(inputField) {
  var imageContainer = document.getElementsByClassName('image')[0];
  var svg = document.getElementsByTagName('svg')[0];

  if (inputField === formMale) {
    gender = formMale;
    imageContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 168.47 182.56\">\n    <defs>\n      <style>\n        .cls-2{stroke-miterlimit:10;stroke-width:.5px;fill:none;stroke:#000}\n      </style>\n    </defs>\n    <g id=\"Layer_2\" data-name=\"Layer 2\">\n      <g id=\"Objects\">\n        <path d=\"M62.77.31C58.73 4.42 44.23 12.23 33.3 16c-4.3 2.38-7.47 5.3-11.06 8.68C15.16 31.35.81 81.31.32 84c-.62 3.38 3.17 6.38 5.76 8.12 11.92 7.54 24.47 7.22 26.45 6.43a89 89 0 002.95-9.26l.27 5.06c-.27 18.28-4 76.56-4 76.56.57 2.55 2.43 3.13 4.78 4.17 2 .88 23.16 7.49 40.54 7.23 39.58-.93 47.48-5.44 51.31-7.09 4.35-1.89 8.48-3.41 7.75-8.81-.36-2.71-6-33.11-3.72-60.4a121.82 121.82 0 00-.53-12.45c-.29-3-1.37-9.35.2-11.91 1.33 4.29 4.83 15.09 4.83 15.09s18 2.91 31.26-10.33c0 0-7.95-42.12-16.69-56.16-9.24-19.34-43.68-23.31-49.05-29.9-2.43 2.06-22.31 9.1-39.66.23\" stroke-width=\".5\" stroke-miterlimit=\"10\" fill=\"#333\" stroke=\"#333\"/>\n        <path class=\"cls-2\" d=\"M2 77.67c.65 3 4.25 5.73 6.59 7.42 11.4 7.41 24.11 8.45 26 7.68\"/>\n        <path class=\"cls-2\" d=\"M135.62 92.37s21.19.93 31.65-11\"/>\n        <path class=\"cls-2\" d=\"M135.09 90.78s24.5.13 31.39-11.66\"/>\n        <path class=\"cls-2\" d=\"M1.31 80.58s8.35 12.85 32.58 14.57\"/>\n        <path class=\"cls-2\" d=\"M61.71 4.82s19.6 10.73 41.26 0\"/>\n        <path class=\"cls-2\" d=\"M58.07 4.22s-.8 13.31 23.24 15.3c0 0 20.66.6 27.42-15.3\"/>\n        <path class=\"cls-2\" d=\"M60.65 2s.79 12.31 21.66 12.71c0 0 14.9.6 22.65-12.52\"/>\n        <path class=\"cls-2\" d=\"M32.91 165s33.41 26.69 102.3 3\"/>\n        <path class=\"cls-2\" d=\"M32.65 162.8s33.93 25.86 102.82 2.2\"/>\n        <g>\n          <path class=\"cls-2\" d=\"M132.11 81.65s-7.67-54.43 7.66-63.89\"/>\n          <path d=\"M35.47 88.9s8.87-58.12-8.86-68.22\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" stroke=\"#000\" stroke-width=\".5\"/>\n        </g>\n      </g>\n    </g>\n  </svg>\n  ";
  }

  if (inputField === formFemale) {
    gender = formFemale;
    imageContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 170.27 190.42\">\n  <defs>\n    <style>\n      .cls-4{stroke-miterlimit:10}.cls-3,.cls-4{stroke-width:.5px;fill:none;stroke:#000}.cls-3{stroke-linecap:round;stroke-linejoin:round}\n    </style>\n  </defs>\n  <g id=\"Layer_2\" data-name=\"Layer 2\">\n    <g id=\"Objects\">\n      <path d=\"M61.6.31s19 32.73 45.7.13c0 0 25.46 0 46.6 28.27l16 23.93-27.21 23.69-9.42-8.92s-5.09 35.15-1 52 6.88 55.26 6.37 62.9a235 235 0 01-55.52 7.9c-17.08.23-36.18-4.09-50.41-7.9 0 0 0-50.17 6.62-63.15 0 0 5.6-28.27-3.31-49.4l-7.64 9.16S17.92 70.7 13.56 66.23A165 165 0 00.35 54.94l23.78-31.8S30 12 61.6.31z\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke=\"#333\" fill=\"#333\"/>\n      <path d=\"M62.42 1.09s19.37 34.54 43.68.38c0 0-25.27 9.78-43.68-.38z\" fill=\"#333\"/>\n      <path class=\"cls-3\" d=\"M64.67 4.69s15.2 8.71 39.54-.23\"/>\n      <path class=\"cls-3\" d=\"M62.52 1.43s15.95 9 43.77 0\"/>\n      <path class=\"cls-3\" d=\"M24.13 23.14S36.14 55.75 36 69.71\"/>\n      <path class=\"cls-3\" d=\"M147.13 21.14S132.83 53.75 133 67.71\"/>\n      <path class=\"cls-3\" d=\"M32.85 177s50.34 18.33 105.34 0\"/>\n      <path class=\"cls-3\" d=\"M32.85 175s50.34 18.33 105.34 0\"/>\n      <path class=\"cls-4\" d=\"M61.6.31s8.94 15.09 24.27 23.55c0 0 13.09-10.63 21.35-23.67\"/>\n      <path class=\"cls-4\" d=\"M58.4 1.37s4.81 14.08 27.33 26.45c0 0 15.89-10.43 25-26.89\"/>\n    </g>\n  </g>\n</svg>\n";
  }

  if (inputField === neckV && gender === formMale) {
    imageContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 168.47 182.56\">\n  <defs>\n    <style>\n      .cls-2{stroke-miterlimit:10;stroke-width:.5px;fill:none;stroke:#000}\n    </style>\n  </defs>\n  <g id=\"Layer_2\" data-name=\"Layer 2\">\n    <g id=\"Objects\">\n      <path d=\"M62.77.31C58.73 4.42 44.23 12.23 33.3 16c-4.3 2.38-7.47 5.3-11.06 8.68C15.16 31.35.81 81.31.32 84c-.62 3.38 3.17 6.38 5.76 8.12 11.92 7.54 24.47 7.22 26.45 6.43a89 89 0 002.95-9.26l.27 5.06c-.27 18.28-4 76.56-4 76.56.57 2.55 2.43 3.13 4.78 4.17 2 .88 23.16 7.49 40.54 7.23 39.58-.93 47.48-5.44 51.31-7.09 4.35-1.89 8.48-3.41 7.75-8.81-.36-2.71-6-33.11-3.72-60.4a121.82 121.82 0 00-.53-12.45c-.29-3-1.37-9.35.2-11.91 1.33 4.29 4.83 15.09 4.83 15.09s18 2.91 31.26-10.33c0 0-7.95-42.12-16.69-56.16-9.24-19.34-43.68-23.31-49.05-29.9-2.43 2.06-22.31 9.1-39.66.23\" stroke-width=\".5\" stroke-miterlimit=\"10\" fill=\"#333\" stroke=\"#333\"/>\n      <path class=\"cls-2\" d=\"M2 77.67c.65 3 4.25 5.73 6.59 7.42 11.4 7.41 24.11 8.45 26 7.68\"/>\n      <path class=\"cls-2\" d=\"M135.62 92.37s21.19.93 31.65-11\"/>\n      <path class=\"cls-2\" d=\"M135.09 90.78s24.5.13 31.39-11.66\"/>\n      <path class=\"cls-2\" d=\"M1.31 80.58s8.35 12.85 32.58 14.57\"/>\n      <path class=\"cls-2\" d=\"M61.71 4.82s19.6 10.73 41.26 0\"/>\n      <path class=\"cls-2\" d=\"M57.26 4.22s4.45 13.53 27 25.9c0 0 15.44-9.44 24.51-25.9\"/>\n      <path class=\"cls-2\" d=\"M60.16 2.48s8.73 14.85 24.06 23.31c0 0 13-10.44 20.74-23.56\"/>\n      <path class=\"cls-2\" d=\"M32.91 165s33.41 26.69 102.3 3\"/>\n      <path class=\"cls-2\" d=\"M32.65 162.8s33.93 25.86 102.82 2.2\"/>\n      <path class=\"cls-2\" d=\"M132.11 81.65s-7.67-54.43 7.66-63.89\"/>\n      <path d=\"M35.47 88.9s8.87-58.12-8.86-68.22\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" stroke=\"#000\" stroke-width=\".5\"/>\n    </g>\n  </g>\n</svg>\n";
  }

  if (inputField === neckV && gender === formFemale) {
    imageContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 170.27 190.42\">\n  <defs>\n    <style>\n      .cls-4{stroke-miterlimit:10}.cls-3,.cls-4{stroke-width:.5px;fill:none;stroke:#000}.cls-3{stroke-linecap:round;stroke-linejoin:round}\n    </style>\n  </defs>\n  <g id=\"Layer_2\" data-name=\"Layer 2\">\n    <g id=\"Objects\">\n      <path d=\"M61.6.31s19 32.73 45.7.13c0 0 25.46 0 46.6 28.27l16 23.93-27.21 23.69-9.42-8.92s-5.09 35.15-1 52 6.88 55.26 6.37 62.9a235 235 0 01-55.52 7.9c-17.08.23-36.18-4.09-50.41-7.9 0 0 0-50.17 6.62-63.15 0 0 5.6-28.27-3.31-49.4l-7.64 9.16S17.92 70.7 13.56 66.23A165 165 0 00.35 54.94l23.78-31.8S30 12 61.6.31z\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke=\"#333\" fill=\"#333\"/>\n      <path d=\"M62.42 1.09s19.37 34.54 43.68.38c0 0-25.27 9.78-43.68-.38z\" fill=\"#333\"/>\n      <path class=\"cls-3\" d=\"M64.67 4.69s15.2 8.71 39.54-.23\"/>\n      <path class=\"cls-3\" d=\"M62.52 1.43s15.95 9 43.77 0\"/>\n      <path class=\"cls-3\" d=\"M24.13 23.14S36.14 55.75 36 69.71\"/>\n      <path class=\"cls-3\" d=\"M147.13 21.14S132.83 53.75 133 67.71\"/>\n      <path class=\"cls-3\" d=\"M32.85 177s50.34 18.33 105.34 0\"/>\n      <path class=\"cls-3\" d=\"M32.85 175s50.34 18.33 105.34 0\"/>\n      <path class=\"cls-4\" d=\"M61.6.31s8.94 15.09 24.27 23.55c0 0 13.09-10.63 21.35-23.67\"/>\n      <path class=\"cls-4\" d=\"M58.4 1.37s4.81 14.08 27.33 26.45c0 0 15.89-10.43 25-26.89\"/>\n    </g>\n  </g>\n</svg>\n";
  }

  if (inputField === neckReg && gender === formMale) {
    imageContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 168.47 182.56\">\n  <defs>\n    <style>\n      .cls-2{stroke-miterlimit:10;stroke-width:.5px;fill:none;stroke:#000}\n    </style>\n  </defs>\n  <g id=\"Layer_2\" data-name=\"Layer 2\">\n    <g id=\"Objects\">\n      <path d=\"M62.77.31C58.73 4.42 44.23 12.23 33.3 16c-4.3 2.38-7.47 5.3-11.06 8.68C15.16 31.35.81 81.31.32 84c-.62 3.38 3.17 6.38 5.76 8.12 11.92 7.54 24.47 7.22 26.45 6.43a89 89 0 002.95-9.26l.27 5.06c-.27 18.28-4 76.56-4 76.56.57 2.55 2.43 3.13 4.78 4.17 2 .88 23.16 7.49 40.54 7.23 39.58-.93 47.48-5.44 51.31-7.09 4.35-1.89 8.48-3.41 7.75-8.81-.36-2.71-6-33.11-3.72-60.4a121.82 121.82 0 00-.53-12.45c-.29-3-1.37-9.35.2-11.91 1.33 4.29 4.83 15.09 4.83 15.09s18 2.91 31.26-10.33c0 0-7.95-42.12-16.69-56.16-9.24-19.34-43.68-23.31-49.05-29.9-2.43 2.06-22.31 9.1-39.66.23\" stroke-width=\".5\" stroke-miterlimit=\"10\" fill=\"#333\" stroke=\"#333\"/>\n      <path class=\"cls-2\" d=\"M2 77.67c.65 3 4.25 5.73 6.59 7.42 11.4 7.41 24.11 8.45 26 7.68\"/>\n      <path class=\"cls-2\" d=\"M135.62 92.37s21.19.93 31.65-11\"/>\n      <path class=\"cls-2\" d=\"M135.09 90.78s24.5.13 31.39-11.66\"/>\n      <path class=\"cls-2\" d=\"M1.31 80.58s8.35 12.85 32.58 14.57\"/>\n      <path class=\"cls-2\" d=\"M61.71 4.82s19.6 10.73 41.26 0\"/>\n      <path class=\"cls-2\" d=\"M58.07 4.22s-.8 13.31 23.24 15.3c0 0 20.66.6 27.42-15.3\"/>\n      <path class=\"cls-2\" d=\"M60.65 2s.79 12.31 21.66 12.71c0 0 14.9.6 22.65-12.52\"/>\n      <path class=\"cls-2\" d=\"M32.91 165s33.41 26.69 102.3 3\"/>\n      <path class=\"cls-2\" d=\"M32.65 162.8s33.93 25.86 102.82 2.2\"/>\n      <g>\n        <path class=\"cls-2\" d=\"M132.11 81.65s-7.67-54.43 7.66-63.89\"/>\n        <path d=\"M35.47 88.9s8.87-58.12-8.86-68.22\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" stroke=\"#000\" stroke-width=\".5\"/>\n      </g>\n    </g>\n  </g>\n</svg>\n";
  }

  if (inputField === neckReg && gender === formFemale) {
    imageContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 170.27 190.42\">\n  <defs>\n    <style>\n      .cls-3{stroke-width:.5px;fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}\n    </style>\n  </defs>\n  <g id=\"Layer_2\" data-name=\"Layer 2\">\n    <g id=\"Objects\">\n      <path d=\"M62.42 1.09s19.37 34.54 43.68.38c0 0-25.27 9.78-43.68-.38z\" fill=\"#333\"/>\n      <path d=\"M61.6.31s19 32.73 45.7.13c0 0 25.46 0 46.6 28.27l16 23.93-27.21 23.69-9.42-8.92s-5.09 35.15-1 52 6.88 55.26 6.37 62.9a235 235 0 01-55.52 7.9c-17.08.23-36.18-4.09-50.41-7.9 0 0 0-50.17 6.62-63.15 0 0 5.6-28.27-3.31-49.4l-7.64 9.16S17.92 70.7 13.56 66.23A165 165 0 00.35 54.94l23.78-31.8S30 12 61.6.31z\" stroke-width=\".5\" stroke=\"#333\" stroke-miterlimit=\"10\" fill=\"#333\"/>\n      <path class=\"cls-3\" d=\"M58.94 1.26S80.82 38.35 110.3.69\"/>\n      <path class=\"cls-3\" d=\"M65 4.68s14.15 8.94 38.5 0\"/>\n      <path class=\"cls-3\" d=\"M62.52 1.43s16.18 8.94 44 0\"/>\n      <path class=\"cls-3\" d=\"M24.13 23.14S36.14 55.75 36 69.71\"/>\n      <path class=\"cls-3\" d=\"M147.13 21.14S132.83 53.75 133 67.71\"/>\n      <path class=\"cls-3\" d=\"M32.85 177s50.34 18.33 105.34 0\"/>\n      <path class=\"cls-3\" d=\"M32.85 175s50.34 18.33 105.34 0\"/>\n    </g>\n  </g>\n</svg>\n";
  }

  if (inputField === sizeS) {
    imageContainer.className = 'image sizeS';
  }

  if (inputField === sizeM) {
    imageContainer.className = 'image sizeM';
  }

  if (inputField === sizeL) {
    imageContainer.className = 'image sizeL';
  }

  if (inputField === sizeXL) {
    imageContainer.className = 'image sizeXL';
  }

  if (inputField === colorRed) {
    imageContainer.id = 'red';
  }

  if (inputField === colorGreen) {
    imageContainer.id = 'green';
  }

  if (inputField === colorWhite) {
    imageContainer.id = 'white';
  }

  if (inputField === colorBlack) {
    imageContainer.id = 'black';
  }

  if (inputField === colorBlue) {
    imageContainer.id = 'blue';
  }

  if (inputField === colorPink) {
    imageContainer.id = 'pink';
  }
} // Form progressive disclossure


var formCount = 0;

function carousel(number) {
  var formParts = document.getElementsByTagName('fieldset');

  if (number === null) {
    if (formCount <= formParts.length) {
      formCount++;

      for (var i = 0; i < formParts.length; i++) {
        var transformPercentage = 100 * formCount;
        formParts[i].style.transform = "translateX(-".concat(transformPercentage, "%)");
      }
    }
  } else {
    var _transformPercentage = 100 * number;

    for (var _i = 0; _i < formParts.length; _i++) {
      formParts[_i].style.transform = "translateX(-".concat(_transformPercentage, "%)");
    }

    formCount = number;
  }
} // Event listeners


document.getElementsByClassName('container')[0].classList.add('carousel-active');
var inputArray = document.getElementsByClassName('input');

var _iterator = _createForOfIteratorHelper(inputArray),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var input = _step.value;
    input.addEventListener('click', function () {
      carousel(null);
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var form = document.getElementById('form');
form.addEventListener('click', function (e) {
  carousel(0);
  e.preventDefault();
});
var neck = document.getElementById('neck');
neck.addEventListener('click', function (e) {
  carousel(1);
  e.preventDefault();
});
var size = document.getElementById('size');
size.addEventListener('click', function (e) {
  carousel(2);
  e.preventDefault();
});
var color = document.getElementById('color');
color.addEventListener('click', function (e) {
  carousel(3);
  e.preventDefault();
});
var text = document.getElementById('text');
text.addEventListener('click', function (e) {
  carousel(4);
  e.preventDefault();
}); // Generate text

var textDisplay = document.getElementsByClassName('text-display')[0];
var inputText = document.getElementsByName('text')[0];
inputText.addEventListener('keyup', changeText);

function changeText() {
  textDisplay.textContent = inputText.value;
}

function changeFont() {
  textDisplay.id = this.value;
}

function changeColor() {
  textDisplay.className = 'text-display ' + this.value;
}

document.getElementById('font-list').onchange = changeFont;
document.getElementById('text-color').onchange = changeColor;
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58715" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","public/js/index.js"], null)
//# sourceMappingURL=/js.d7e5c97d.js.map