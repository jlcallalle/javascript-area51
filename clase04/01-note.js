///////////   Ejercicios con Funciones ///////////

//Retornar 5 veces hola, mediante funcion
function saludo(){
	return 'Hola';
}

for (var i = 0; i < 5; i++) {
	console.log(saludo());
}

//Mostrar firstName y lastName en consola
function fullName(firstName, lastName) {
	return(` ${firstName} ${lastName}`);
}
let name = fullName('Carlos', 'Perez')
console.log(name);

// -- Calcular Area de un Triangulo, Base oir Altura sobre 2 | (b + a) / 2

let base = 10;
let altura = 5;
function areaTriangulo(base, altura) {
	return(base * altura / 2);
}
let resp = areaTriangulo(base, altura);
console.log(resp);

// -- Calcular loop cantidad, con funcion
function calcular(total){
	let i;
	for (let i = 0; i < total ; i++) {
		console.log(i);
	}
}
calcular(3);

// -- Calcular la cantidad de caracteres de una palabra, mediante una funcion
let total;
function totalCaracteres(texto){
	//return(` ${texto.length}`); //esto devuelve string, asi que en este caso, como es string no es necesario usarlo, defrente
	return texto.length;
}
total = totalCaracteres('Carlos');
console.log(total);


// -- Mostrar el caracter e indice de una palabra;
//En los string, tambien se puede utilizar como array, 

let t;
function letra(texto, n){
	return texto[n];
}
t = letra('Area51', 3);
console.log(t); //a

t = letra('Luis', 2)
console.log(t) // i


//Objetos
const padre = {
  nombre: 'Juan',
  hijos: [
    {
      nombre: 'Pedro'
    },
    {
      nombre: 'Diana',
      hijos: [
        {
          nombre: 'Lucia'
        }
      ]
    }
  ]
}

const pattern = {
  nameb: 'Juan',
  sons: [
    {
      nombre: 'Pedro'
    },
    {
      nombre: 'Diana',
      hijos: [
        {
          nombre: 'Lucia'
        }
      ]
    }
  ]
}
//falta completar


//CLASE MANIPULANDO DOM
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

//Ejemplo: https://github.com/
//selecciono ul del  html nav responsive,  <ul class="text-bold list-style-none p-0 m-0"> | se activa $0  

//En consola
//comodin
$0

//Mostrar Nombre Tag
$0.tagName
"UL"

//Mostrar Nombre
$0.className
"d-lg-flex list-style-none"

//https://developers.google.com/web/tools/chrome-devtools/console/?hl=es
//https://developers.google.com/web/updates/2015/08/edit-html-in-the-console-panel
$0.children[0]
$0.children[0].children;
$0.children[0].children[0]

windows //es toda la pagina web
document //es solo la pantalla = window.document

//Listar HTML
document.getElementById
//Este método pertenece al objeto document, Con él obtendremos el objeto que hace referencia al elemento con un id concreto.

//document.getElementById('jorge').innerHTML //Muestra contenido
document.getElementsByClassName 

//Retorna un objecto similar a un array de los elementos hijos que tengan todos los nombres de clase indicados
document.getElementsByTagName
document.querySelector //Devuelve el primer elemento del documento
document.querySelectorAll // Devuelve una lista de elementos que conciden con el selector indicado


/*

HTMLCollection vs. NodeList
Cuando usamos .getElementsByClassName o .getElementsByTagName el tipo de datos retornado es HTMLCollection y cuando usamos .querySelectorAll el tipo de dato retornado es NodeList

*/

//Link Ejercicio
https://bit.ly/2QdSIHo

//Mostrar en ejercicio.html 
document.getElementById('menu-main')
document.querySelector('#menu-main')

//Mostrar los enlaces generales
document.querySelectorAll('a');
NodeList(3)
document.getElementsByTagName('a');
NHTMLCollection(3)

//Mostrar todos los p hijas de la clase content-primary 
document.querySelectorAll('.content-primary p')

//eEcorriendo un DOm marcando punto de partida
const contents = document.getElementsByClassName('content-primary');

//Mostrar Uno, dos, tress
document.querySelectorAll('.content-secondary li');

let listaHijos =  document.querySelectorAll('.content-secondary li');

listaHijos
for (let i = 0 ; i < listaHijos.length; ++i) {
	console.log(listaHijos[i]);
}
<li> Uno </li>
<li> Uno </li>
<li> Uno </li>

for (let i = 0 ; i < listaHijos.length; ++i) {
	console.log(listaHijos[i].textContent);
}
Uno
Dos
Tres 

//Obtener Cambios Profe
//https://bit.ly/2IrIFM6//


//Obtener estilos de id, clases con js: document.defaultView.getComputedStyle(progreso).getPropertyValue("font-size");
