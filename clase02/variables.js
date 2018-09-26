/*****************************************************/
/**********   VARIABLES: var, let, const  ************/
/*****************************************************/

//una variable es como un vaso vacio, en el cual puedo agregar un valor

//ECMASCRIPT 5 (ES5)
var edad = 23;
var colorPiel = 'blanca';

// ECMASCRIPT 6 a más (ES6+)
let edad = 30;
const colorPiel = 'blanca'; //

const cantidadCasas = 2 // Sólo recibe un valor único, no cambiante y requiere siempre un valor
cantidadCasas = 3 

let edad; // Declaracion de varialbe
edad = 23; // Declaración y asignación



/*****************************************************/
/*****************   Tipos de Datos  *****************/
/*****************************************************/

// 1- STRING:
'Jorge Callalle'
const nombreCompleto = 'Jorge Callalle'; 

// 2- NUMBER
51
const area = 51;

// 3-  BOOLEANO 
false
true
const cursosOnline = false 
let EstaLuzEncendida = false;
!false
true

//numero 0 siempre da False
//numero distinto a 0 me da true

Boolean(0) //False
Boolean(1) //True
Boolean(2) // True
Boolean(3) // True

Boolean('Area 51') //True
Boolean() //False
Boolean('') //False

!false
true
!true
false

!0 // 0 es False y su contrario
true
!'' // false y su contrario es trye
true
!123123123 // numer es true y su contrario es false
false
!"asdasdasd" // texto es true y su contrario es false
false
!!'asdasd' // contrario de !
true

let carrera; // Haz declarado la variable carrera
const brazoz; // Muestrar error, porque se necesita iniciar valor;
const autos = 3; // He declarado una constante de valor 3; tipo dato number
const titulo = 'Aplicaciones Móviles'; // tipo de datos String

//Estandares de varialbles
// no permitido
//let 23area 
//let @asdasd 

// si permitido
let _sdfsd
let esta_luz_encendida //guion medio no se recomienda


/* 
- JavaScript está diseñado en un paradigma basado en objetos. 
- Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre y un valor.
- Un valor de propiedad puede ser una función, la cual es conocida entonces como un método del objeto
- Además de los objetos que están predefinidos en el navegador, tu puedes definir tus propios objetos.
En JavaScript, un objecto es un entidad independiente con propiedades y tipos. Compárelo con una taza por ejemplo. 
Una taza es un objeto, con propiedades. Una copa tiene un color, un diseño, peso, un material del que fue hecho, etc. De la misma manera, los objetos de JavaScript pueden tener propiedades, que definen sus características.
*/


// 4- OBJETOS 

//Hay 2 formas 
const miObjecto = {}; //correcta 
const miObjecto2 = new Object();

miObjecto
{}
miObjecto2
{}

//Cuando se crea un objeto, siempre se va agregar propiedades
//si veo que tiene llave es de tipo Object {}

const miObjeto3 = { nombre : 'Jorge'};
// el nombre es una propiedad de mi objeto
// el texto es el valor que contiene la prepiedad

miObjeto3.nombre
"Jorge"

const miObjeto5 = {}
undefined
miObjeto5.nombre = 'Andrea';

miObjeto5.edad = 23;
miObjeto5.edad
miObjeto5
{nombre: "Andrea", edad: 23}

const miObjeto6 = {nombre:'Renzo', edad: 34};
miObjeto6

// Si se declara un objeto de una propiedad, se realiza en 1 linea
const auto1 = { marca: 'Toyota' };

// Si tiene más de 2 propiedades se usa 2 lineas, con linter (plugin) te notifica
const auto2 = {
  marca: 'Toyota',
  color: 'Verde'
}

const auto3 = {};
auto3.marca = 'Ford'; // Dentro de una propiedad, puedo asignar Tipo de Datos 'String'
auto3.color = 'Gris';
auto3.tieneAlarma = true; 

auto3.piezas = {}; // el objeto auto3 tiene una propiedad objeto piezas
auto3.piezas.motor = 'v8';



//PRACTICA

//Declarar una variable nombre titulo y en la misma linea asignar valor carrera de sistemas;
let nombreTitulo = 'Carrera de Sistemas';

//En ES6 Si existen las constantes, en ES5 no tiene constantes
// Crear constante anhos, con valor 5
const anhos = 5;

//Crear constante empleado, de tipo objeto sin propiedades
//Se asigna valor a propiedades con '=') 

const empleado = {}
empleado.nombre = 'Jorge';
empleado.edad = 29;

empleado
{nombre: "Jorge", edad: 29}

//Hay otra forma, cuando se declara el objeto y se asigna propiedades, 
//Se asigna valor a propiedades con ' : ') 
const empleado = { nombre: 'Jorge', edad: 34 };


//Nota
let nombre = 'Renzo'
let nombre = 'Jorge' // va salir error,  se declara una vez y luego se cambia el valor

nombre = 'Jorge2';

// Nota: -----------------
//JS no es un LP que no sigue las rutas de puristas
//JS no tiene tipado de datos: es decir desde su declaracion no se le asigna que tipo de datos es.

let x;
//TypeScript
//te da esa forma de agregar el tipo de datos a tus variables.
//let x: number;
//let miArreglo2:Array<string> = ["Renzo", "Castro"]
//let miArreglo2:Array<*> = ["Renzo", 29]
// -----------------



// 4- ARRAYS

// Hay 2 tipos
// Solo contiene valores, no propiedades
// Se recomienda trabajar un solo tipo de variable para el contenido del array

//Declaracion
const miArreglo1 = new Array();
const miArreglo2 = []; // recomendable

//Solo String
const miArreglo3 = ["Jorge"];
const miArreglo4 = ["Renzo", "Castro"];  //o
const miArreglo4 = [
  "Renzo", 
  "Castro"
];

//Solo Numbers
const miArreglo5 = [ 29 ];
const edades = [21, 33, 27];

//Mixto
const miArreglo7 = ["Renzo", 1]
// el procesamiento de array es mucho mams rapido si los valores tienen el mismo tipo de datos

//PUSH  
//gregar Contenido en ARRAYS
//Push es una funcion, para usarlo se usa ()

const amigos = [];
amigos.push('Pedro');
amigos.push('Lucas');
amigos.push('Juan');

amigos.push('Jorge');
amigos.length // Muestra cantidad
amigos[0]
"Pedro"
amigos[1]
"Lucas"


Para auto:
- Propiedades: kilometraje; valor: 120
  - Propuedades: color; valor: Rojo

const auto = {};
auto.kilometraje = 120;
auto.color = 'rojo';

Para alumnos:
- Agregar Julio
  - Agregar Diana

const alumnos = [];
alumnos.push('Julio')
alumnos.push('Diana')

const colores = ['blanco', 'verde', 'rojo'];
colores.push('azul');

console.log(colores); // (4) ["blanco", "verde", "rojo", "azul"]
console.log(colores[2]); 
console.log(colores[1 + 1]); 

//Mostrar las mascotas
const mascotas = [];
mascotas.push('Perro')
mascotas.push('Gatos')
mascotas.push('Loro')
mascotas.push('Serpiente')
mascotas[4]
mascotas[3]
mascotas[3] = 'Mono';
mascotas[5] = 'Vaca';

mascotas
  (6) ["Perro", "Gatos", "Loro", "Serpiente", empty, "Vaca"]

  

//PROOUEDADES POR DEFECTO DE LOS TIPOS DE DATOS
//Todo programacion como base tiene objetos  
//los numeros son objetos, los textos son objetos

En Object,
- hasOwnProperty

const empleado = {};
empleado.hasOwnProperty('nombre');
false
empleado.nombre = "Jorge"

empleado.hasOwnProperty('nombre');
true
empleado
{nombre: "Jorge"}

//En Arrays, tanto para String hay propiedades
 - .push()
 - length  // empleado.nombre.length
 - hasOwnProperty

En number hay propiedades:
 - toFixed
 
 let pago = 45.53
 let pago = 45.53
 pago
45.53

Math.round(pago) // convierte decimales
46

pago.toFixed(4) // agregar 4 digitos
"45.5300"

pago.toFixed(0)
"46"

//Se ussa para
pago.toFixed(2)
"45.53"

//console.log()
//console = es un objeto 
//log = funcion 
// ----------


/*****************************************************/
/********** Creando estructura de datos  *************/
/*****************************************************/

// Los objetos son similares, pero los valores cambian
// Este es un array que contiene 2 objetos (Arreglo de Objetos)

const menu = [
  {
    name: 'Inicio',
    url: '/index.html'
  },
  {
    name: 'Productos',
    url: '/productos.html'
  }
];

menu[1] //para acceder a arrays es con []
> {name: "Productos", url: "/productos.html"}
menu[1].name //para acceder a objetos es con .
> "Productos"
menu[0]
> {name: "Inicio", url: "/index.html"}
menu[0].url
> "/index.html"
menu[0].name
> "Inicio"

const menu2 = [];
menu2.push({ name: 'Inicio', url: '/index.html' });
> 1
menu[0]
> {name: "Inicio", url: "/index.html"}
menu[0].name
> "Inicio"
menu2.push({ name: 'Productos', url: '/productos.html' });
> 2
menu[1]
> {name: "Productos", url: "/productos.html"}
menu[1].url
>  "/productos.html"


const menu3 = [
  {
    name: 'Inicio',
    url: '/index.html'
  },
  {
    name: 'Productos',
    children: [
      {
        name: 'Secadora',
        url: 'productos/secadora.html'
      },
      {
        name: 'Lavadora',
        url: 'productos/lavadora.html'
      },
      {
        name: 'Escobas',
        url: 'productos/escobas.html'
      },
    ]
  }
];


//Objeto de arreglos
const auto = {
  llantas : [
    { estado: 'ok'},
    { estado: 'ok'},
    { estado: 'ok'},
    { estado: 'pinchada'}
  ]
}

auto.llantas[3]
> {estado: "pinchada"}
auto.llantas[3].estado
> "pinchada"

const familia2 = {
  padre: { nombre: 'Alberto'},
  madre: { nombre: 'Andre'},
  hijos: [
    { nombre: 'julio'},
    { nombre: 'Carlos'},
    { nombre: 'Jorge'}
  ]
}

//Para llamar un objeto {} se usa .
familia2.madre.nombre
>  "Andre"
familia2.padre.nombre
>  "Alberto"
familia2.hijos[2]
>  {nombre: "Jorge"}
familia2.hijos[2].nombre
>  "Jorge"


// En objetos hay una asignación
const obj = {
  name: 'Liz'
}
familia.push ( { nombre: 'Carlos'}  ) 




//EJERCICIOS
//Un padre tienes 2 hijos, cada hijo tiene un nombre y una edad.
 
const padre = {
  nombre: 'Julio',
  hijos: [
    {
      nombre: 'Pedro',
      edad: 12
    },
    {
      nombre: 'Juan',
      edad: 7
    }
  ]
};

console.log(padre.hijos[0].nombre); // Pedro

//--

const padre = {
  nombre: 'Julio',
  hijos: [
    {
      nombre: 'Pedro',
      edad: 36,
      hijos: [
        {
          nombre: 'Mateo',
          edad: 3
        },
        {
          nombre: 'Diana',
          edad: 1
        }
      ]
    },
    {
      nombre: 'Juan',
      edad: 17
    }
  ]
};

console.log(padre.hijos[0].hijos[1].nombre); // Diana

//--

const tabla1 = [
	{ name: 'AmeriGas', shares: 200 },
	{ name: 'Duke Energy', shares: 150 }
];
console.log(tabla1[0].shares); // 200


const item1 = { name: 'AmeriGas', shares: 200 };
const item2 = { name: 'Duke Energy', shares: 150 };
const tabla2 = [ item1, item2 ];

console.log( tabla2[1].shares ); // 150


/*****************************************************/
/*****************   FUNCIONES  *****************/
/*****************************************************/


// Es un tipo de dato,  se puede usar directamente

//Declaración de funcion, es declarativo no se ejecuta solo
function saludo() {
  let edad = 23;
  const nombre = 'Area';
  console.log(nombre, edad);
}

//Ejecución (o uso) de la función
saludo();

//Declaracion de funcion, esperando un parametro (argumento)
//considere este argumento como variable predeclarada
function saludo2(mensaje) {
  console.log(mensaje);
}

saludo2('Hola Area51');


// Usando una variable del scope superior:
let nombre = 'Carlos';
function saludo() {
	console.log('Hola ' + nombre + '!');
}
saludo();


//Usando un parámetro:
function saludo(nombre) {
	console.log('Hola ' + nombre + '!');
}
saludo('Carlos');

//Function Sumar

function sumar (a, b) {
	let resultado = a + b; 
	console.log(resultado);
}

sumar(2,3)
> 5

//En JS, lo primero que guarda de forma declarativa es function(), si lo ejecutas arriba o abajo no hay problema
//En const siempre: se hace el llamado despues de la declaracion
// en cambio si escribo una funcion normal, puede ejecutarlo en cualquier lugar

const saludo = function () {
	console.log('Hola');
}
//el tipo de dato que tiene saludo es function
saludo();

//Llenado de un Array usando una función:

let categorias = [];

function insertarCategoria(nombreCategoria) {
	categorias.push(nombreCategoria);
}

insertarCategoria('Computadoras');
insertarCategoria('Audio y Video');


//Llenado de un Array formateado como tabla de multiplicar del 2:

let tabla = [];

function agregarLinea(n) {
	tabla.push('2 x ' + n + ' = ' + (2 * n));
}

agregarLinea(1);
agregarLinea(2);
agregarLinea(3);
agregarLinea(4);
agregarLinea(5);

console.log(tabla);
/*
[
	'2 x 1 = 2',
	'2 x 2 = 4',
	'2 x 3 = 6',
	'2 x 4 = 8',
	'2 x 5 = 10'
]
*/


//Tipo de variable funcion, tiene varios metodos:
saludo.call()  
saludo.apply()  //SCOPE y Alcance

//Operadores Matemáticos
1 + 2
> 3
6 - 2
> 4
6 + 12
> 18
6 / 2
> 3
6 % 2
> 0
3 % 2
> 1
5 % 2
> 1
5 / 2
> 2.5

// Condicionales
const familia2 = {
	hijos: [
      { nombre: 'Pedro'}
	]
}

familia2.hijos.length
> 1
!familia2.hijos.length  //negacion
>false

familia2.hijos.length == 1
> true
familia2.hijos.length == 0
> false
familia2.hijos.length > 1
> false


== comparacion siempre arroja valor boleano
== igual a
> mayor que
< menor que
>= mayor o igual a
<= menor o igual a
!= distinto de

Boolean(0)
> false
Boolean(12312312)
> true
1 == 0
> false
1 == 1
> true
'1' == 1
> true
'hola' == 'adios'
> false
'hola' == 'hola'
> true
'hola' == 'Hola'
> false
"1" == 1
> true
1 == '1'
> true
"1" == 0
> false
"1" === 1
> false
"1" == 1
> true


Operadores de comparación
Si ve que es un formato distinto lo va a convertir a un dato numerico

"1" == 1
true

Ademas de su contenido, si son el mismo de datos, 
para asegurarse que los que se comparan son iguales

"1" === 1
false

!== estricamente ...


if (1 === 1) {
	console.log('Es igual');
}

if (1 === 0) {
	console.log('Es igual');
}

if (1 === 1) {
	console.log('Es igual');
} else {
	console.log('No es igual');
}

if (1 === 0) {
	console.log('Es igual');
} else {
	console.log('No es igual');
}
