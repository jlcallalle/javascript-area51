
// Concatenación

let mensaje;

// ES5
mensaje = 'Hola ' + 123;

// ES6+
mensaje = `Hola ${123}`;

console.log(mensaje);

// --

function saltar(metros) {
	console.log(`Salto ${metros} metros`);
}
saltar(4);
// --
function sumar(a, b) {
	console.log(`La suma de ${a} + ${b} es ${a + b}`);
}
sumar(6, 2);
// --
function alCuadrado(numero) {
	console.log(`${numero} al cuadrado es igual a ${numero * numero}`);
}
alCuadrado(3);
// --

function sumar(a, b) {
	const resultado = a + b;
	return resultado;
}

let resultadoSuma = sumar(6, 3);
console.log(resultadoSuma);

// --

function sumar(a, b) {
	return a + b;
}

let resultadoSuma = sumar(6, 3);
console.log(resultadoSuma);

// --

function alCubo(numero) {
  return numero * numero * numero;
}

console.log( alCubo(3) ); // 27
console.log( `El resultado es: ${alCubo(3)}` );

// --

function obtenerNombreCompleto(nombre, apellidoPaterno, apellidoMaterno) {
	return `${nombre} ${apellidoPaterno} ${apellidoMaterno}`;
}

let nombreCompleto = obtenerNombreCompleto('Diana', 'Lagos', 'Perez');

console.log(nombreCompleto);

// --

function obtenerSaludo(nombre, apellidoPaterno) {
  return `Hola ${nombre} ${apellidoPaterno} :)`;
}

let mensaje = obtenerSaludo('Diana', 'Lopez');
console.log(mensaje); // 'Hola Diana Lopez :)'

// --

function obtenerMensajeEdad(nombre, edad) {
	return `${nombre} tiene ${edad} años`;
}
let mensaje = obtenerMensajeEdad('Diana', 27);
console.log(mensaje); // "Diana tiene 27 años"


// --

const juguetePrecio = 45;

function obtenerMensajeCosto(nombre, cantidadJuguetes) {
	// console.log(juguetePrecio);
	return `${nombre} tiene ${cantidadJuguetes} juguetes. Le costo ${cantidadJuguetes * juguetePrecio} soles.`;
}
let resultado = obtenerMensajeCosto('Carlos', 3);
console.log(resultado); // "Carlos tiene 3 juguetes. Le costo 135 soles."

// --

const alumnos = [];

function agregarAlumno(nombre) {
	alumnos.push(nombre);
}

agregarAlumno('Diana');
agregarAlumno('Carlos');

console.log(`Total de Alumnos: ${alumnos.length}`); // "Total de Alumnos: 2"

// --

if (1 > 2) {
  console.log('1 SÍ es mayor que 2');
} else {
  // Esto se mostrará en la Consola
  console.log('1 NO es mayor que 2');
}

// --

const edad = 14;
const edadMinimaPermitida = 18;

if (edad >= edadMinimaPermitida) {
  console.log('Puede salir de juerga');
} else {
  // Esto se mostrará en la Consola
  console.log('No puede salir');
}

// --

// Bucles / Iteraciones

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*
  i++  // i = i + 1 (después)
  ++i  // i = i + 1

  i--  // i = i - 1 (después)
  --i  // i = i - 1

  i =+ 1   // i = i + 1
  i =- 1   // i = i - 1

  i =+ 3   // i = i + 3
  i =- 3   // i = i - 3
*/

let i;
for (i = 0; i < 5; ++i) {
  console.log(i);
}


// Bucle de todos los números pares entre 1 y 11
let i;
for (i = 1; i < 11; ++i) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let i;
// for (i = 2; i <= 10; i = i + 2) {
for (i = 2; i <= 10; i += 2) {
  console.log(i);
}


//

// break
// continue

let i;
for (i = 0; i < 10; ++i) {
  console.log(i);

  if (i === 2) {
    continue;
  }

  if (i === 5) {
    break;
  }

  console.log('FINAL');
}



// --

const alumnos = ['Carlos', 'Diana', 'Pedro'];

let i;
for(i = 0; i < alumnos.length; ++i) {
  console.log(`${i} es ${alumnos[i]}`);
}

// --

// do ... while
let i = 0;

do {
  i++;
  console.log(i);
} while(i < 3);

// while
let i = 0;

while(i < 3) {
  i++;
  console.log(i);
}

// for in
let key;
const auto = { marca: 'ford', color: 'azul' };

for (key in auto) {
  console.log(key, auto[key]);
}
// marca
// color


// for of   // ES6+
let alumno;
const alumnos = ['Pedro', 'Diana', 'Jorge'];

for (alumno of alumnos) {
  console.log(alumno);
}
// Pedro
// Diana
// Jorge




// --

const alumnos = ['Carlos', 'Diana', 'Pedro'];

alumnos.forEach(function (alumno, indice, arreglo) {
  console.log(alumno, indice, arreglo);
});

alumnos.forEach(function (alumno, indice) {
  console.log(alumno, indice);
});

alumnos.forEach(function (alumno) {
  console.log(alumno);
});

// -- Array forEach
const alumnos = ['Carlos', 'Diana', 'Pedro'];

const mostrarAlumno = function (alumno) {
  console.log(alumno);
};

alumnos.forEach(mostrarAlumno);

// -- Array map

const alumnos = ['Carlos', 'Diana', 'Pedro'];

const convertirAMayusculas = function (texto) {
  return texto.toUpperCase();
};

const alumnosMayuscula = alumnos.map(convertirAMayusculas);
console.log(alumnosMayuscula);

// --

const numeros = [2, 3, 4];

const mostrarNumero = function (numero) {
  console.log(numero);
};

numeros.forEach(mostrarNumero);

// 2
// 3
// 4


// -- usar Array map

const numeros = [2, 3, 4];

const masUno = function (numero) {
  return numero + 1;
};

const nuevosNumeros = numeros.map(masUno);
console.log(nuevosNumeros);

// [3, 4, 5]


// -- .map

const empleados = ['Adriana', 'Maria', 'Yessi'];

const convertirAMayusculas = function (texto, indice) {
  return `${indice} ${texto.toUpperCase()}`;
};

const resultado = empleados.map(convertirAMayusculas);
console.log(resultado);

// ["0 ADRIANA", "1 MARIA", "2 YESSI"]


// -- .map
const mascotas = ['Perro', 'Gato', 'Loro'];

const convertirAMinusculas = function (texto) {
  return `${texto.toLowerCase()} ${texto.length}`;
};

const resultado = mascotas.map(convertirAMinusculas);
console.log(resultado);

// ['perro 5', 'gato 4', 'loro 4']




// -- .map

const mascotas = ['Perro', 'Gato', 'Loro'];

const miBucle = function (f) {
  let indice;

  for (indice = 0; indice < mascotas.length; indice++) {
    const mascota = mascotas[indice];

    f( mascota, indice, mascotas );
  }

};

const mostrar = function (mascota, indice, arreglo) {
  console.log(mascota, indice, arreglo);
};


miBucle(mostrar);

mascotas.forEach(mostrar);









// callback
const prueba = function (f) {
  f('hola');
};

const mostrar = function (mensaje) {
  console.log(mensaje);
};

prueba(mostrar);



// -- .map

const alumnos = [
  { nombre: 'Pedro', edad: 23 },
  { nombre: 'Juan', edad: 21 },
  { nombre: 'Rosa', edad: 25 }
];

const cambiar = function (alumno) {
  return `${alumno.nombre.toUpperCase()} ${alumno.edad}`;
}

alumnos.map(cambiar);

// ["PEDRO 23", "JUAN 21", "ROSA 25"]


// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array


// --

const propiedad = 'nombre';

alumno[propiedad]

alumno['edad']



// Tarea :
//  - Array (todas las funciones)
//  - Object .keys y .values
// SoloLearn.com



// SoloLearn.com

// HackerRank.com


// YOU MIGHT NOT NEED JQUERY
// http://youmightnotneedjquery.com/








cjmunoz131@gmail.com   Cesar Muñoz Martinez
jlcallalle@gmail.com   Jorge Callalle Torres
ams_t2@hotmail.com   Andrea Moscoso Sivirichi
juliusflores92@gmail Julio Flores Choñocca
alexisespinozaalmanza@gmail.com alexis espinoza

renzo.vista@gmail.com   Renzo Castro Jurado



https://gist.github.com/renzocastro/2b14511ff24839119d6317c506248ba5