//Practicar  https://bit.ly/2xyQAD8  //repaso clase3-ejemplo-profe
//cuando una funcion no tiene nombre se conoce como una funcion anonima

// ES5
var saltar = function (metros) {
  console.log('Salto ' + metros + ' metros');
};

// ES6+
const saltar = function (metros) {
  console.log(`Salto ${metros} metros`);
};

// ES6+
const saltar = (metros) => {
  console.log(`Salto ${metros} metros`);
};

//si se usa un parametro, puede o no mantener el ()
const saltar = metros => {
  console.log(`Salto ${metros} metros`);
};


//si vas a usar varios parametros si obligado los parentecis
const fullname =  (firstName, lastName) => {
	console.log(`${firstName} ${lastName} `);
};


// --

function sumar(a, b) {
  console.log(`La suma de ${a} + ${b} es ${a + b}`);
}
sumar(6, 2);

const sumar = (a, b) => {
  return a + b;
};

const sumar = (a, b) => a + b;

// --

const sumarDoble = a => {
  return a + a;
};

const sumarDoble = a => a + a;


//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

const numeros = [1, 2, 3, 4];
numeros.map(sumarDoble); // [2, 4, 6, 8]
numeros.map(a => a + a); // // [2, 4, 6, 



//Before Breack
