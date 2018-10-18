/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/utils */ \"./src/modules/utils.js\");\n/* harmony import */ var _modules_calculo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calculo */ \"./src/modules/calculo.js\");\nfetch('http://data.fixer.io/api/latest?access_key=9e1910b221f5db999a84e0c82d049cf0').then(function (response) {\n  return response.json();\n}).then(function (json) {\n  console.log(json); //manipular json\n\n  var precioDolar = json.rates.USD;\n  var listaTipos = json.rates;\n  var keynames = Object.keys(listaTipos);\n  var valores = Object.values(listaTipos); //console.log(`El precio del Dolar es ${precioDolar}`)\n  //console.log(`listaTipo ${listaTipos}`);\n  //console.log(`keynames ${keynames}`);\n  //console.log(`valores ${valores}`);\n  //-- EJERCICIO 1:  Calcular: EUR a USD  \n\n  var inputEuro = document.querySelector('#input-euros');\n  var inputDolar = document.querySelector('#input-dolar');\n  var btnEnvio = document.querySelector('#btn-envio');\n\n  var onClickCalcular = function onClickCalcular(event) {\n    var valorEuro = inputEuro.value;\n    var convertir = parseInt(valorEuro) * precioDolar;\n    var resultadoDecimal = convertir.toFixed(2);\n\n    if (!valorEuro == '') {\n      inputDolar.value = resultadoDecimal;\n      console.log(\"La conversion de \".concat(valorEuro, \" euros equivale a:  \").concat(resultadoDecimal, \" USD\"));\n    } else {\n      alert('Ingresar cantidad de euros');\n    }\n  };\n\n  btnEnvio.addEventListener('click', onClickCalcular); //-- EJERCICIO 2:  Calcular: SELECT a USD  \n\n  var selectTipo = document.querySelector('#select-tipo');\n  var inputMoneda = document.querySelector('#inputMoneda');\n  var dolarSelect = document.querySelector('#dolarSelect');\n  var btnEnvioSelect = document.querySelector('#btn-envio-select'); //-- Mostrar Select Tipo Cambio\n\n  keynames.forEach(function (key, i, arreglo) {\n    var opt = keynames[i];\n    selectTipo.innerHTML += \"<option value = '\".concat(valores[i], \"'> \").concat(keynames[i], \" </option>\");\n  }); //-- Mostrar Precio\n\n  var onChangeSelect = function onChangeSelect(event) {\n    var valorSelect = event.target.value;\n    console.log(valorSelect);\n    var cantidad = document.querySelector('#cantidad');\n    cantidad.innerHTML = valorSelect;\n    var showPrecio = document.querySelector('#precio');\n    showPrecio.style.display = 'block';\n\n    if (valorSelect == 'Selecccione') {\n      showPrecio.style.display = 'none';\n    }\n  };\n\n  selectTipo.addEventListener('change', onChangeSelect);\n\n  var onClickCalcularSelect = function onClickCalcularSelect(event) {\n    var precioCantidad = document.querySelector('#cantidad').textContent;\n    var valorMoneda = inputMoneda.value;\n    var calculo = valorMoneda * precioCantidad;\n    var calculoUSD = calculo * precioDolar;\n    var calculoUSDFinal = calculoUSD.toFixed(2); //console.log('precio cantidad', precioCantidad);\n    //console.log('valor moneda', valorMoneda);\n    //console.log('calculo', calculo);\n    //console.log('calculoUSD', calculoUSD);\n\n    if (!valorMoneda == '') {\n      dolarSelect.value = calculoUSDFinal;\n    } else {\n      alert('Ingresar cantidad moneda');\n    }\n  };\n\n  btnEnvioSelect.addEventListener('click', onClickCalcularSelect);\n}); // ./src/index.js\n//import: importa funciones que han sido exportadas desde un módulo externo\n\n\nvar resultadoSumar = Object(_modules_utils__WEBPACK_IMPORTED_MODULE_0__[\"sumar\"])(5, 2);\n\nvar resultadoMultiplicar = Object(_modules_calculo__WEBPACK_IMPORTED_MODULE_1__[\"multiplicar\"])(5, 3);\nconsole.log('El resultado de la suma es', resultadoSumar);\nconsole.log('El resultado de la multiplicar es:', resultadoMultiplicar);\nObject(_modules_calculo__WEBPACK_IMPORTED_MODULE_1__[\"saludo\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/calculo.js":
/*!********************************!*\
  !*** ./src/modules/calculo.js ***!
  \********************************/
/*! exports provided: multiplicar, saludo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiplicar\", function() { return multiplicar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saludo\", function() { return saludo; });\n// ./src/modules/calculo.js\n//crea módulo para exportar funciones\n//exponer variable sumar para los que importan\n// dentro del objeto, tenemos una propiedad llamda sumar y una funcion sumar\nvar multiplicar = function multiplicar(a, b) {\n  return a * b;\n};\nvar saludo = function saludo() {\n  return console.log('Hola Modulo ES6');\n}; //ES5\n\n/*\nfunction sumar(a, b) {\n  return a + b;\n}\n\n//ES6\nconst sumar = (a, b) => {\n  return a + b;\n}\n\nconst sumar = (a, b) => a + b;\n*/\n\n//# sourceURL=webpack:///./src/modules/calculo.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/*! exports provided: sumar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sumar\", function() { return sumar; });\n// ./src/modules/utils.js\n//crea módulo para exportar funciones\n//exponer variable sumar para los que importan\n// dentro del objeto, tenemos una propiedad llamda sumar y una funcion sumar\nvar sumar = function sumar(a, b) {\n  return a + b;\n};\n\n//# sourceURL=webpack:///./src/modules/utils.js?");

/***/ })

/******/ });