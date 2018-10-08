//Clase 5

//Question, Funcion Anonima, Callback, Prototype
//for in, for array
//form of, for funtion
//map, reduce, filter

//Tipos de funciones

//ES5
function sumar(a,b) {
	return a + b;
}

var sumar = function (a,b) {
	return a + b;
};

//ES6
const sumar = (a,b) => {
	return a + b;
}
const sumar = (a,b) => a + b;


function sumar (a) {
	return function (b){
		return a + b;
	}
}

sumar(3);
sumar(3)(6);

//cont..
// ..

const fullname =  (firstName, lastName) => {
	console.log(`${firstName} ${lastName} `);
};

fullname('Jorge', 'Callalle');
fullname('Jorge', 'Callalle').lenght
fullname('Jorge', 'Callalle')[1] // O

//..

//Funciones anidadas
function operaciones(a,b) {
	function sumar(n1,n2) {
		return n1 + n2;
	}
	function restar(n1,n2)  {
		return n1 - n2;
	}
	return [
		sumar(a,b),
		restar(a,b)
	]
}
operaciones(5,3);

//Scope, es el entorno, em ambito de ejecucion

function operaciones(a,b) {
	function sumar() {
		return a + b;
	}
	function restar()  {
		return a - b;
	}
	return [
		sumar(),
		restar()
	]
}
operaciones(5,3);


//------PROMESAS -------//

//No son tipos de funciones, es otra forma de logica dentro de JS
//Es algo que va a ocurrir a futuro

const saludo = () => console.log('Hola');
saludo()

//settimeOut(function, milisegundos);
//setTimeout(saludo, 3000)
let timeId = setTimeout(saludo, 3000);
clearTimeout(timeId);

//El settime esta en una cola de ejecucuin que se llama CallStack

Promise
 - resolve() // yo decido que hacer, responde bien
 - reject() // responde mal

 //Síncrona : Quien envía permanece bloqueado esperando a que llegue una respuesta del receptor antes de realizar cualquier otra tarea.
 
 //Asíncrona:  Quien envía continúa con su ejecución inmediatamente después de enviar el mensaje al receptor.
 
 //Clase instancia
 Nosotros somos instancia de humanos, humanos es unico y como personas somos nuchos

 //Promesa
 Array.map (Function)
 new Promise( /* ejecutor */ function(resolver, rechazar) { ... } );
 new Promise( /* ejecutor */ function(resolver, rechazar) { ... } );
 //pago.then( /*Resolve */ Function, /*Resolve */  Function)

  //resolve, reject, tambien son funciones
 // pago recibe una instancia de promesa

 //example 1
 const pago = new Promise(function( resolve, reject ){
	console.log('La funcion dentro de Promise');

		setTimeout(() => {
			resolve();
		}, 5000);

 })
 console.log(pago);   //muestra pendiente, si esta bien o mal
 pago.then( () => console.log('ok'));  // el them esta ala escucha de la ejecucion
 console.log(pago); 


 //example2
 const pago = new Promise(function( resolve, reject ){
	console.log('La funcion dentro de Promise');

		setTimeout(() => {
			resolve();
		}, 5000);

 })

 const onResolve = data => console.log('RESOLVE', data);
 const onReject = data => console.log('REJECT', data);

 pago.then(onResolve, onReject)
 console.log(pago); 


 //Fech

 fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(json => {
	 console.log(json);
 })

 //DEMO ..supuesto
 function fech (url) {
	 return new Promise(function (resolve, reject){

	 })
 }

 //estas peticiones son en paralelos
fetch('https://data.com/page1')
 	.then(data => {console.log(1, data)});

fetch('https://data.com/page2')
 	.then(data => {console.log(2, data)});

//
Promise.all(fetch('https://data.com/page1') , fetch('https://data.com/page2'))



//RETO PROMESA
// https://gist.github.com/renzocastro/5e5be729aa83a2409c9ebf3ee9f1aa64
// http://bit.ly/2E1Ys5M

//-
const request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function () {
	console.log('DONE', request.responseText);
};

request.onerror = function () {
	console.log('FAIL', 'Error loading page');
};

request.send();


//-

const nuevo = new Promise(function( resolve, reject ){

	const request = new XMLHttpRequest()
	request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
	
	request.onload = function () {
		console.log('DONE', request.responseText);
		resolve(request.responseText);
	};
	
	request.onerror = function () {
		console.log('FAIL', 'Error loading page');
		reject('Error landing page');
	};
	
	request.send();

 })


 //-
 const fecth2 =  url => {
 
	return  new Promise(function( resolve, reject ){
		
			const request = new XMLHttpRequest()
			request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
			
			request.onload = function () {
				console.log('DONE', request.responseText);
				resolve(request.responseText);
			};
			
			request.onerror = function () {
				console.log('FAIL', 'Error loading page');
				reject('Error landing page');
			};
			
			request.send();
		
		})
	
	};

// async / await, se usan en promesas
//async function ().... 
// va pasar codigo



// FUNCIONES ES6

function fullName(persona) {
	return `${persona.nombre} ${persona.apellidos}`;
}

const empleado = {
	nombre: 'Carlos',
	apellidos: 'Martinez'
}
fullName(empleado);

const nombre= empleado.nombre;
console.log(nombre);


function fullName2({ nombre, apellidos}) {
	return `${nombre} ${apellidos}`;
}

const empleado = {
	nombre: 'Carlos',
	apellidos: 'Martinez'
}
fullName2(empleado);

const {nombre}= empleado;
console.log(nombre);

//-
const peso = 80;
const personas = {
	nombres: 'carlos',
	pesos:peso
}

console.log(permisos);

//-
const peso = 80;
const personas = {
	nombres: 'carlos',
	pesos
}

console.log(permisos);



//Mostre ejemplo
// Json: //Json PI: comunicacion de 2 json en diferentes ervidires
//ver vanilla jsonp
A51-08:clase04 alumno$ npm -v
A51-08:clase04 alumno$ npm i http-server -g
A51-08:clase04 alumno$ cd /Users/alumno/Desktop/Jorge/javascript-area51/clase04/
A51-08:clase04 alumno$ npm init -y
A51-08:clase04 alumno$ npm i http-server -D
node_modules/.bin/http-server . --port 4000


//Node es el interprete de JS
//tiene algunas api para ingresar al so, archivos de sistema, archivos binarios§ß

//NPM se instala junto con node, es el manejador de paquetes de note.

echo 'console.log(2 +3)' > test2.js
521  ls
//... no se completo, pedir
