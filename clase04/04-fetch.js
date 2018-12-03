

//After Breack

const alumnos = [
  { nombre: 'Pedro', edad: 23 },
  { nombre: 'Juan', edad: 21 },
  { nombre: 'Rosa', edad: 25 }
];

alumnos
  .map(function (a) {
    return a.edad;
  })
  .reduce(function (a, b) {
    return a + b;
  })

alumnos.map(a => a.edad).reduce((a, b) => (a + b));



//NUEVO TEMA: CONSUMIR DATOS
//https://jsonplaceholder.typicode.com/


//ES5
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);
// El objeto XMLHttpRequest se puede usar para solicitar datos de un servidor web.

//ES6 
fech()
//axios es una buena sistema de peticiones https://github.com/axios/axios

//Mostrar Datos de un json
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))

  /*
  EN6
  const onComplete = responsve => response.json(); es EN6 

  EN5
	const onComplete = function(responsve){   
		return response.json();
	}
  */
  

	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
	.then(json => {
		console.log(json);
		const nombres = json.map(user => user.name);
    console.log(nombres);
    
    //document.getElementById("jorge").innerHTML = nombres;

		const email = json.map(user => user.email);
		console.log(email);

		const empresa = json.map(user => user.company.name);
    console.log(empresa);
    


	})

	//https://bit.ly/2y0FRkv
	
	const shoppingList = [
		{
			name: 'Arroz',
			price: 2.7,
			cant: 2
		},
		{
			name: 'Papa',
			price: 1.4,
			cant: 1.5
		},
		{
			name: 'Pollo',
			price: 7.5,
			cant: 1
		}
	];

	//Indicar de sumar los precios
	//reduce xk queremos obtener un solo resultado

const priceTotal = shoppingList
	.map(prod => prod.price * prod.cant)
	.reduce((a,b) => a + b);

console.log(priceTotal);


/*
// ES6+
const saltar = function (metros) {
	console.log(`Salto ${metros} metros`);
};

// ES6+
const saltar = (metros) => {
	console.log(`Salto ${metros} metros`);
};

const saltar = metros => {
	console.log(`Salto ${metros} metros`);
};

*/

/* 
https://www.twitch.tv/videos/312655175
*/

// https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec

//call Stack
function despues()
//modelo de concurrencia
//event loop: mira si la pila esta completamente vacia

//Premier League JSON: https://raw.githubusercontent.com/openfootball/football.json/master/2017-18/en.1.clubs.json