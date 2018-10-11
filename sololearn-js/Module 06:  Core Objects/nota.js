//CORE OBJECTS

//--  1.- Arrays
//Arrays almacenan múltiples valores en una sola variable.

var courses = new Array("HTML", "CSS", "JS"); 
// Esta sintaxis declara una matriz llamada cursos, que almacena tres valores o elementos.

//Accediendo al Array
var courses = new Array("HTML", "CSS", "JS");
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 
// [0] es el primer elemento en una matriz. [1] es el segundo. Los índices de matrices comienzan con 0.

//Al intentar acceder a un índice fuera de la matriz, se devuelve el valor indefinido.
// Nuestra "array" de cursos tiene solo 3 elementos, por lo que el 10º índice, que es el 11º elemento, no existe (no está definido)


//--  2.- Creacion de Arrays
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

// Una matriz es un tipo especial de objeto.
// Una matriz usa números para acceder a sus elementos, y un objeto usa nombres para acceder a sus miembros.
// Las matrices de JavaScript son dinámicas, por lo que puede declarar una matriz y no pasar ningún argumento con el constructor Array (). A continuación, puede agregar los elementos dinámicamente.

//Array Literal

var courses = ["HTML", "CSS", "JS"]; 
// Esto da como resultado la misma matriz que la creada con la nueva sintaxis Array ().


//--  3.- Propiedades Array y Métodos
// Las matrices de JavaScript tienen propiedades y métodos incorporados útiles.

  //a) Array length: retorna el número de sus elementos.
  // Si la matriz está vacía, la propiedad length devuelve 0.
  // La propiedad length es por que array es un objeto

//Combinando Array

//El método concat() de JavaScript le permite unir matrices y crear una matriz completamente nueva.
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);

//La operación de concat no afecta a las matrices c1 y c2; devuelve la concatenación resultante como una nueva matriz.


//--  4.- Arrays Asociativo
// Si bien muchos lenguajes de programación admiten matrices con índices con nombre (texto en lugar de números), 
// denominados matrices asociativas, JavaScript no lo hace. Sin embargo, aún puede usar la sintaxis de matriz nombrada, que producirá un objeto.

var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);
//Outputs "46"

//Ahora, la persona se trata como un objeto, en lugar de ser una matriz.
// Los índices con nombre "nombre" y "edad" se convierten en propiedades del objeto persona.

person.length
//Como la matriz de personas se trata como un objeto, los métodos y propiedades de la matriz estándar producirán resultados incorrectos. 
//Por ejemplo, person.length devolverá 0.

//Array Asociativo, el numero index son remplezados por 'String';

//Associative Arrays
// Recuerde que JavaScript no admite matrices con índices con nombre.
// En JavaScript, las matrices siempre usan índices numerados.
// Es mejor usar un objeto cuando desea que el índice sea una cadena (texto).
// Utilice una matriz cuando desee que el índice sea un número.



//--  5.- The Math Object / El objeto matematico
// El objeto Math te permite realizar tareas matemáticas e incluye varias propiedades.

document.write(Math.PI);
//Outputs 3.141592653589793

//Math Object Methods
// El objeto Math contiene varios métodos que se utilizan para los cálculos:

//Por ejemplo, lo siguiente calculará la raíz cuadrada de un número.

//To get a random number between 1 - 10, use Math.random(), which gives you a number between 0 - 1. 
//Then multiply the number by 10, and then take Math.ceil() from it: Math.ceil(Math.random() * 10).

//Vamos a crear un programa que le pedirá al usuario que ingrese un número y que alerte su raíz cuadrada.
var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer)


//--  6.-The Date Object
// setInterval, este metodo llama a una función o evalúa una expresión a intervalos especificados (en milisegundos).
// Continuará llamando a la función hasta que se llame a  " clearInterval ()"  o se cierre la ventana.


function myAlert() {
  alert("Hi");
}
setInterval(myAlert, 3000);

//Escriba el nombre de la función sin paréntesis al pasarla al método setInterval.


//El "objeto Date" nos permite trabajar con fechas.
// Una fecha consta de un año, un mes, un día, una hora, un minuto, un segundo y milisegundos.

// Usando new Date (), cree un nuevo objeto de fecha, con la fecha y hora actuales.

var d = new Date();
//d stores the current date and time
// Las otras formas de inicializar fechas permiten la creación de nuevos objetos de fecha a partir de la fecha y hora especificadas.

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

//Las fechas de JavaScript se calculan en milisegundos a partir del 1 de enero de 1970, 00:00:00, hora universal (UTC). Un día contiene 86,400,000 milisegundos.

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000);

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88, 5, 11, 11, 42, 0, 0);

// JavaScript cuenta los meses del 0 al 11. Enero es 0 y diciembre es 11. 
//Los objetos de fecha son estáticos, en lugar de dinámicos. La hora de la computadora está marcando, pero los objetos de fecha no cambian, una vez creados.


//Date Metodo
var d = new Date();
var hours = d.getHours();
//hours is equal to the current hour


//Vamos a crear un programa que imprima la hora actual en el navegador una vez por segundo.
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000);

// Declaramos una función printTime(), que obtiene la hora actual del objeto de fecha y la imprime en la pantalla.
// Luego llamamos a la función una vez por segundo, usando el método setInterval.

// La propiedad innerHTML establece o devuelve el contenido HTML de un elemento.
// En nuestro caso, estamos cambiando el contenido HTML del cuerpo de nuestro documento. 
//Esto sobrescribe el contenido cada segundo, en lugar de imprimirlo repetidamente en la pantalla.
