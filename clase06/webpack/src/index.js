// const mensaje = 'Hola';
// console.log(mensaje);

import _ from 'lodash';
// var _ = require('lodash');

// importo la proiedad de un objeto
import { sumar, restar, multiplicar, dividir } from './modules/utils';

import Humano from './modules/Humano';
// import { restar } from './modules/utils';
// import { multiplicar } from './modules/utils';
// import { dividir } from './modules/utils';

const resultado = sumar(5, 3);
const resultadoRestar = restar(5, 3);
const resultadoMultiplicar = multiplicar(5, 3);
const resultadoDividir = dividir(5, 3);


console.log('El resultado de la suma es ', resultado);
console.log('El resultado de la resta es : ', resultadoRestar);
console.log('El resultado de la multiplicacion es : ', resultadoMultiplicar);
console.log('El resultado de la dividir es : ', resultadoDividir);

// Para ver resultado en consola node: node dist/main
// el ambiente de nodejs, funciona en consola, servidor, no tienes acceso al dom

// https://github.com/airbnb/javascript 

const personas = [
  { nombre: 'Pedro', edad: 21 },
  { nombre: 'Juana', edad: 27 },
  { nombre: 'Marco', edad: 31 },
];

console.log( personas.map(item => item.edad) );

const pedroHumano = new Humano();
console.log(pedroHumano);