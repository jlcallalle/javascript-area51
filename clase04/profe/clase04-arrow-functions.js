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

const saltar = metros => {
	console.log(`Salto ${metros} metros`);
};


// --


const fullname = (firstName, lastName) => {
	console.log(`${firstName} ${lastName}`);
};


// --


const sumar = (a, b) => {
	return a + b;
};

const sumar = (a, b) => a + b;


// --

const sumarDoble = a => {
	return a + a;
};

const sumarDoble = a => a + a;

// Ejemplo

const numeros = [1, 2, 3, 4];
numeros.map(sumarDoble); // [2, 4, 6, 8]
numeros.map(a => a + a); // // [2, 4, 6, 8]



