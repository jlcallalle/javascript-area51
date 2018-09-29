//https://bit.ly/2xyQAD8

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

// -----
function sumar( a, b ) {
    const resultado = a + b;
    return resultado;
}
//
let resultadoSuma = sumar(6, 3);
console.log(resultadoSuma);

// --
function alCubo(numero) {
    return numero * numero * numero;
}
  
console.log( alCubo(3) ); // 27
console.log( `El resultado es: ${alCubo(3)}` );
  
//var elevado = 3 ** 3;

//EJERCICIOS 


function obtenerNombreCompleto(nombre, apellidoPaterno, apellidoMaterno) {
    return `${nombre} ${apellidoPaterno}`;
}
let nombreCompeto = obtenerNombreCompleto('Diana', 'Saes', 'Perez');
console.log(nombreCompeto);

// --
function obtenerSaludo(nombre, apellidoPaterno) {
    return `hola  ${nombre} ${apellidoPaterno} :)`;
}
let mensaje = obtenerSaludo('Diana', 'Lopez');
console.log(mensaje);

// --
function obtenerMensajeEdad(nombre, edad) {
    return `${nombre} tiene ${edad}`;
}
let mensaje = obtenerMensajeEdad('Diana', 27);
console.log(mensaje);


// ---
const juguetePrecio = 45;

function obtenerMensajeCosto(nombre, cantidadJuguetes) {
    return `${nombre} tiene ${cantidadJuguetes} . Le costo ${cantidadJuguetes * juguetePrecio}  soles.`
}
let resultado = obtenerMensajeCosto('Carlos', 3);
console.log(resultado); // "Carlos tiene 3 juguetes. Le costo 135 soles."


// ---

const alumnos = [];

function agregarAlumno(nombre) {
    alumnos.push(nombre);
}

agregarAlumno('Diana');
agregarAlumno('Carlos');

console.log(`Total de Alumnos: ${alumnos.length} `); // "Total de Alumnos: 2"

// Extensiones Visual Studio Code
// Material Icon Theme (cambia iconos de tema)

/*
control p> para mostrar achivos
control ship p: muestra configuracion
 ingreso theme, elegir editor

 -subliem text keymap
 -editor config

 control shif p : editorconfig
 root = true

 [*]
 indent_style = space
 indent_size = 4
 end_of_line = lf
 charset = utf-8
 trim_trailing_whitespace = false
 insert_final_newline = true para mandar al final derecha

 "editor.renderWhitespace": "none",
elegir bundary

Project Manager
*/


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
    console.log('No puede salir');
  }


  /*****************************************************/
/**********   Bucles o Iteraciones   ************/
/*****************************************************/

//la primera area es decalrativa, se lee una sola vez
//segundo, siempre se ejecuta cada interacion, vale 0 a inicio
// el tercero, es un incremento mas uno
for (var i = 0; i < 5; i++) {
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


//usar siempre menor o mayor que

//la recomendacion, afuera declarar y aisgnar adentro
let i;
for ( i = 0; i < 5; ++i) {
    console.log(i);
}


let a = 2;
undefined
console.log(a++);
2

a
3
let b = 2;
console.log(++b);
3

//Buble de todos los numeros pares entre 1 y 11
let i;
for ( i = 1; i < 11; ++i) {

    if (i % 2 === 0) {
        console.log(i);
    }
}

let i;
for ( i = 2; i < 11; ++i) {

    if (i % 2 === 0) {
        console.log(i);
    }
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

//breack, finaliza
//continuo, no contnua el siguiente, pero si itera


// Ejercicios

// recorrer un array

const alumnos = ['carlos','diana','pedro'];

let i;
for ( i = 0; i < alumnos.length; ++i) {
    console.log(`${i} es ${alumnos[i]}`);
}


// --

// while
let i = 0;

while (i < 3) {
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


// -- usar Array map (se utiliza mas para obtener un array)

//Si se quiere recorer un array, FOR OF
/* for each no retorna, pero map si retorna
en el caso el array , para cambiar el contenido del arrego se usa map */


const numeros = [2, 3, 4];

const masUno = function (numero) {
  return numero + 1;
};

const nuevosNumeros = numeros.map(masUno);
console.log(nuevosNumeros);

//EJERCICOS 

/// /--.map
// Mostrar  ["0 ADRIANA", "1 MARIA", "2 YESSI"]

//primero necesitamos una funcion que nos haga el cambio

const empleados = ['Adriana', 'Maria', 'Yessi'];

const convertirAMayusculas = function (texto, indice) {
  return `${indice} ${texto.toUpperCase()}`;
};

const resultado = empleados.map(convertirAMayusculas);
console.log(resultado);

// -- .map
// Mostrar ['perro 5', 'gato 4', 'loro 4']
const mascotas = ['Perro', 'Gato', 'Loro'];
const nuevoMascota = function (texto) {
    return `${texto.toLowerCase()} ${texto.length}  `;
};

const resultado = mascotas.map(nuevoMascota);
console.log(resultado);

// ['perro 5', 'gato 4', 'loro 4']

// --
const mascotas = ['Perro', 'Gato', 'Loro'];

const miBucle = function (f) {
  let indice;

  for (indice = 0; indice < mascotas.length; indice++) {
    const mascota = mascotas[indice];

    f(mascota, indice, mascotas);
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

  // ["PEDRO 23", "JUAN 21", "ROSA 25"]

  const cambiar = function (alumno) {
    return `${alumno.nombre.toUpperCase()} ${alumno.edad}`;
  };

  alumnos.map(cambiar);
  //const resultado = alumnos.map(cambiar);
  //console.log(resultado);


  const numeros = [4,3,2,1];
  const sumar = function (a,b) {
      return a = b;
  }

  //reduce suma a y b y el resultado lo almacena en a

  //ARRAY TEMAS
  push, agregar
  shift, remueve
  Pop
  .join , une, retorna string

  forEach
  .map
  .filter
  .reduce , estan recorren

  obtener una parte o removerla
  .slice
  .splice

  .reverse
  .sort
  ordenar elementos de un array

  .some
  every, averiguar


// NUEVO TEMA
//vimos que para recorrer un objeto usamos for in

const auto = { marca : 'toyota', color : 'rojo'};

Object.keys(auto)
(2) ["marca", "color"]
Object.values(auto)
(2) ["toyota", "rojo"]

alumno[1] arreglo ,  Es un arreglo si esta entre [] y es número
alumno['asdasdsd'], Es un objeto, si entre [] es un string


TAREA
En una hoja, traer en una hoja con explicacion de los temas de la pisarra
concepto y ejemplo

y tambien
Object.keys(auto)
(2) ["marca", "color"]
Object.values(auto)
(2) ["toyota", "rojo"]

https://www.sololearn.com/Course/JavaScript/, recomienda
llevar cursos, ecma scrip5,
la diferencia, se usa const y let y flecha


https://www.enki.com/

https://www.codility.com/ , una opcion
https://www.hackerrank.com/   serecomienda
http://youmightnotneedjquery.com/


cjmunoz131@gmail.com Cesar Munoz
ams_t2@hotmail.com Andrea Moscoso Sivirichi / estudia Ing. Sistemas
juliusflores92@gmail.com Julio Flores
alexiseptiniza> alexis espinoza
renzo.vista@gmail.com  Renzo Castro: Profesor



//TAREA

//1. El método push() agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.

const equipos = ['Arsenal', 'Liverpol', 'Chelsea'];
equipos.push('Manchester United');
//(4) ["Arsenal", "Liverpol", "Chelsea", "Manchester United"]

//2.- Shift: Eliminar elemento del inicio de un Array
(4) ["Arsenal", "Liverpol", "Chelsea", "Manchester United"]
equipos.shift();
(3) ["Liverpol", "Chelsea", "Manchester United"]

//3.- Pop:  Eliminar elemento del final de un Array
(3) ["Liverpol", "Chelsea", "Manchester United"
equipos.pop();
"Manchester United"
["Liverpol", "Chelsea"]

//4.- JOIN: El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

const equipos = ['Arsenal', 'Liverpol', 'Chelsea'];
equipos.join('-');
"Arsenal-Liverpol-Chelsea"



forEach
.map
.filter
.reduce , estan recorren

obtener una parte o removerla
.slice
.splice

.reverse
.sort
ordenar elementos de un array

.some
every, averiguarkbkb