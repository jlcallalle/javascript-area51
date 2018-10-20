import { format } from "util";

//Resolviendo Projecto - Profe
//Primero se va a cargar la datam solo cuando se haga la conversion
//1) primero asignacion de variables
//2) usamos fech,  para obtener data de un js

//Fech Promesas
//them
  function (response) {
    return Response.json  // se
  }
//segundo them, es una funcion
//para la espera de la optencion, se agrega un html indicando que esta cargandoxº
//HTTML 200, Servidores
//Calculo Fecha


//DATE

let d2 = new Date();
d2.getTime();

new Date().getTime();

//Recomienda usar
Date.now()

//Si se necesita mostrar
//'Domingo', 'Lunes', 'Martes'

1000 * 60 * 10
const tenMinutes = 1000 * 60 * 10;
//let d5 = new Date();
//d5.getTime();
let t1 = Date.now()




// FUNCIONES  - Clases
//Diferentes tipos deClases
function saludo() {
  console.log('Hola'); 
}

const saludo = function () {
  console.log('Hola');
};

const saludo = () => {
  console.log('Hola');
};

// Clases
  saludo() {
    console.log('Hola');
  }
  // Dentro del 'constructor'
  this.saludo = () => {
    console.log('Hola');
  };
// --

// function short in Object

let persona = {
	nombre: 'Pedro',
	saludar() {
		console.log('Hola');
	}
};

// Es el equivalente a:

let persona = {
	nombre: 'Pedro',
	saludar: () => {
		console.log('Hola');
	}
};


// arguments palabras reservada que solo funciona en una funcion, solo de la forma normal, si hacemos como flechas no funcional

//--
// Rest parameters


// jQuery Reference: https://api.jquery.com/on/#on-events-selector-data-handler
const on = (...parametros) => {
	const event = parametros[0];
	let selector;
	let handler;

	switch (typeof parametros[1]) {
		case 'string':
			selector = parametros[1];
			break;
		
		case 'function':
			handler = parametros[1];
			return;
			break;
	}

	handler = parametros[2];
}

let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const saludo1 = (p1, p2, p3) => {
	console.log(p1, p2, p3);
}

saludo1(...diasSemana);


const saludo2 = (...parametros) => {
	console.log(parametros);
}

saludo2(...diasSemana);


/* 

const saludo = (...parametros) => {
	console.log(parametros);
}

saludo4('hola');

const alumnos = (mensaje, ...parametros) => {
	console.log(mensaje, parametros);
}

alumnos('Alumnos', 'juan', 'jorge')

typeof ""
"string"
typeof  12
"number"
typeof  []
"object"
typeof  {}
"object"
typeof  function() {}
"function"

const saludo = (p1, p2, p3) => {
	console.log(p1, p2, p3);
}

let diasSemana = ['Lunes', 'Martes','Miercoles', 'Jueves'];

saludo(diasSemana);

*/


// --
// Default parameters

const agregarUsurio= (nombre, tipo ) => {
  console.log(nombre, tipo);
}

agregarUsurio('Julia','admin');
agregarUsurio('Pedro','usuario');
agregarUsurio('Carlos');

//Agregar x default, si no se ingresa contenido
const agregarUsurio2= (nombre, tipo = 'usuario') => {
  console.log(nombre, tipo);
}

agregarUsurio2('Julia','admin');
agregarUsurio2('Pedro','usuario');
agregarUsurio2('Carlos');

//Otra forma de hacer clases

let persona = {
  nombre : 'Pedro',
  saludar() {
    console.log('Hola');
  }
}
let persona = {
  nombre : 'Pedro',
  saludar() => {
    console.log('Hola');
  }
}

//http://bit.ly/2CWIqZJ

//MAP es similar que el objeto, pero es mejor en cuanto a performance


//Object ... fun short

ES6 Map = como un objet, pero más rapido y s eusa de otra format
ES6 Set = cini yb array

let s1 = new Set([1],[2], [3])

let a1 = [1,2,3,4]
let a2 = [5,6,7,8]
let juntos = [...a1, ...a2];
console.log(juntos);
//[...a1, 'dato en medio ' ...a2]

//GENERADORES
function* recorrer () {
	yield 1;
	yield 2;
	yield 3;
}
let r1 = recorrer()
console.log( r1.next().value); // 1
console.log( r1.next().value); // 2
console.log( r1.next().value); // 3

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre','Diciembre'];

let obj = {
  [Symbol.iterator]: function*() {
    for(let mes of meses) {
      yield mes;
    }
  }
}

// //Como un flag, que activa ciertas funcionalidades en tipos de datos, la mas comun, iterator, le dices al objeto que puede ser recorrido, uno decido como armarlo

obj[0] //undefined

[...obj]
(12) ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]

//si cuenta con el termino iterator, cuanta con interacion,

//[...obj].map(mes =>)





//Despues de breack

//EJERCICIO 1

//convertir texto a arrays
  let frutas = 'banana, manzana, fresa'.split(',');  //solo split aplica a string
  //convetir de array a texto
  //let textoFrutas = frutas.join(',');  // soloj join aplica a arreglos

  //- Con Array forEach
  const mostrarFrutas = function (fruta) {
    console.log(fruta);
  };
  frutas.forEach(mostrarFrutas);


  //- Con parameters
  const prepararJugo = (fruta1, fruta2, fruta3) => {
    console.log(fruta1, fruta2, fruta3);
  }

  prepararJugo(frutas[0], frutas[1], frutas[2]);
  prepararJugo(...frutas);

  const prepararJugo = (fruta1, fruta2, fruta3) => {
    console.log(fruta1, fruta2, fruta3);
  }

  const prepararJugo = (...parametros) => {
    console.log(...parametros);
  }
  prepararJugo(...frutas);


  //EJERCICIO 2
  //las clases me permiten manipular objetos **** VER

  //Crear una clase empleado, tiene 3 propiedades, nombre, apellido y email
  //un metodo que se llame nombreCompleto, que devuelve el nombre completo
  //let empleado = new Empleado();
  //empleado.nombre = 'Diana';
  //empleado.apellido = 'Lopez';
  //empleado.email = 'dlopez@gmai.com'

  class Empleado {
    constructor() {
      this.nombre = '';
      this.apellido = '';
      this.email = '';
    }

    nombreCompleto() {
      return `${this.nombre}  ${this.apellido}`;
    }
  }

  const e1 = new Empleado();
  e1.nombre = 'Diana';
  e1.apellido = 'Lopez';
  e1.email = 'dlopez@gmai.com';

  console.log( e1.nombreCompleto() );

//typeof Empleado

//Las clases se deben hacer acciones

//Nuevo ejemplo
class Empleado {
  constructor() {
    this.nombre = '';
    this.apellido = '';
    this._email = '';
  }

  //Lectura
  get email() {
    return this._email;
    //muestra en consola
  }

  //Escritura
  set email(value) {
    this._email =  value;
    //cuando registro un empleado
  }

  get nombreCompleto() {
    return `${this.nombre}  ${this.apellido}`;
  }
}

const e1 = new Empleado();
e1.nombre = 'Diana';
e1.apellido = 'Lopez';
e1.email = 'dlopez@gmai.com';

console.log( e1.nombreCompleto );

//json-server

//npm i  -D json-server
//creamos db.json , ingresamos js
// en package.json , escribimos json-server --watch db.json

const endpoint = "http://localhost:3000/empleados";

fetch(endpoint)
  .then(response => response.json())
  .then(json=> {

  })
  ..........


  //Tarea de mostrar en contenido json , cuando se carga la página 