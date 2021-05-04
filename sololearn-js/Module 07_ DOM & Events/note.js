//DOM y Events

// -  1) What is DOM?

// Cuando abre cualquier página web en un navegador, el HTML de la página se carga y se representa visualmente en la pantalla.
// Para lograr eso, el navegador construye un DOM (Document Object Model) en la página, que es un modelo orientado a objetos de su estructura lógica.
//The DOM en un HTML puede ser representado como un conjunto anidado de cajas:

// JavaScript se puede usar para manipular el DOM de una página dinámicamente para agregar, eliminar y modificar elementos.

//Arbol DOM
// El DOM representa un documento como una estructura de árbol.
// Los elementos HTML se convierten en nodos interrelacionados en el árbol.
// Todos esos "nodos" en el árbol tienen algún tipo de relación entre sí.
// Los nodos pueden tener nodos hijos. Los nodos en el mismo nivel de árbol se llaman "siblings".

//Por ejemplo, considere la siguiente estructura:

//<html> has two children (<head>, <body>);
//<head> has one child (<title>) and one parent (<html>);
//<title> has one parent (<head>) and no children;
//<body> has two children (<h1> and <a>) and one parent (<html>);

// The document Object
// Hay un objeto de document, predefinido en JavaScript, que se puede utilizar para acceder a todos los elementos en el DOM.

//En otras palabras, the "document" objects is the  owner (or root) propietario, de todos los objetos del a página web.
// Si deseas acceder a los objetos en HTML, you siempre empiezas accediendo al document object.

//Por ejemplo:

document.body.innerHTML = "Some Text";

//body, es un elemento del DOM, Nosotros podemos acceder a el, usando "object" y cambiar el contenido con la propiedad "innerHTML"

//La propiedad innerHTML se puede usar en casi todos los elementos HTML para cambiar su contenido.


// -  2) Selecting Elements

//Selecting Elements

getElementsByClassName() //es un metodo que busca todos los elementos con clase específica, y luego retorna un array.

var items = document.getElementsByClassName('demo');
//accediendo al segundo element
items[1].innerHTML = 'Hola';

//en ese ejemplo usamos length para recorrer todos los elementos seleccionaods.
for (var x = 0; items.length; x++) {
  items[x].innerHTML = 'Hola Friends';
}

//Trabajando con el DOM
// Cada elemento en el DOM tiene un conjunto de propiedades y métodos que proporcionan información sobre sus relaciones en el DOM:

element.childNodes retorna un array de los nodos hijos de un elemento.
element.firstChild retorna el primer nodo hijo de un elemento.
element.lastChild retorna el último nodo hijo de un elemento.
element.hasChildNodes retorna verdadero si un elemento tiene nodos hijos, de lo contrario es falso.
element.nextSibling retorna el siguiente nodo en el mismo nivel de árbol.
element.previousSibling retorna el nodo anterior en el mismo nivel de árbol.
element.parentNode retorna el nodo padre de un elemento.


// -  3) Cambiando Elementos
//Cambiando Atributos

//cambiar atricuto src y poner otro nombre
document.body.innerHTML = '<img id="myimg" src="orange.png" alt="" />';
var image = document.getElementById('myimg');
image.src = "apple.png";


var arr = document.getElementsByTagName("img");
for (var x = 0; x < arr.length; x++) {
  arr[x].src = "demo.jpg";
}

//cambiar atricuto url y cambiarlo
document.body.innerHTML = '<a href="http://www.example.com">Some link</a>';
var link = document.getElementsByTagName("a");
link[0].href
link[0].href = "http://www.sololearn.com";


//Cambiando Estilos
// El estilo de los elementos HTML también se puede cambiar utilizando JavaScript.
// Se puede acceder a todos los atributos de estilo utilizando el objeto de estilo del elemento.


document.body.innerHTML = '<div id="demo" style="width:200px">some text</div>';
var elemento = document.getElementById("demo");
elemento.style.color = "6600FF";
elemento.style.border = "2px solid orange";
elemento.style.width = "100px";
elemento.style.backgroundColor = 'rgba(0,255,0,0.1)';

//Todas las propiedades CSS se pueden configurar y modificar utilizando JavaScript. Solo recuerde que no puede usar guiones(-) en los nombres de propiedades: estos se reemplazan con versiones de camelCase, donde las palabras compuestas comienzan con una letra mayúscula.

//Por ejemplo: la propiedad background-color  deberia ser referenciado como backgroundColor.

//Aplicar background color a todos los span de la página

var s = document.getElementsByTagName("span");
  
for (var x = 0; x < s.length; x++) {
  s[x].style.backgroundColor = "#33EA73";
}

// --  4) Agregando y Eliminando Elementos
//Creando Elementos
// Use el siguiente método para crear nuevos nodos:

element.cloneNode() //clona un elemento y devuelve el nodo resultante.
document.createElement(element) //crea un nuevo elemento nodo.
document.createTextNode(text) //crea un nuevo nodo de texto.

var node = document.createTextNode("Some new text");

//Esto creará un nuevo nodo de texto, pero no aparecerá en el documento hasta que lo agregue a un elemento existente con uno de los siguientes métodos:

element.appendChild(newNode) // agrega un nuevo nodo secundario a un elemento como el último nodo secundario.
element.insertBefore(node1, node2  // inserta node1 como hijo antes de node2.



document.body.innerHTML = "<div id ='demo'>some content</div>";

//creating a new paragraph
var p = document.createElement("p");
var node = document.createTextNode("Some new text");
//adding the text to the paragraph
p.appendChild(node);

var div = document.getElementById("demo");
//adding the paragraph to the div
div.appendChild(p);

// Esto crea un nuevo párrafo y lo agrega al elemento div existente en la página.


//ejercicio
// Drag and drop from the options below to add a new <li> element to the unordered list with id="list".

var el = document.createElement("li");
var txt = document.createTextNode("B");
el.appendChild(txt);
var ul = document.getElementById("list");
ul.appendChild(el);


//Removing Elements
<div id="demo">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

  <script>
    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.removeChild(child);
</script>

//Otra forma de remover
//var child = document.getElementById("p1");
//child.parentNode.removeChild(child);

var par = document.getElementById("par");
var node = document.getElementById("node");
par.removeChild(node);

//Replacing Elements

document.body.innerHTML = '<div id="demo" ><p id="p1">This is a paragraph.</p> <p id="p2">This is another paragraph.</p> </div>';

var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node); //<p> This is new </p>

var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);


//Creando Animaciones

/*
<style>
  #container {
    width: 200px;
  height: 200px;
  background: green;
  position: relative;
}
#box {
    width: 50px;
  height: 50px;
  background: red;
  position: absolute;
}
</style>
*/

<div id="container">
  <div id="box"> </div>
</div>


//Animations
//Para crear una animación, necesitamos cambiar las propiedades de un elemento en pequeños intervalos de tiempo. Podemos lograr esto usando el  "setInterval()"

var t = setInterval(move, 500); 
//Este código crea un temporizador que llama a una función move () cada 500 milisegundos.

//Ahora necesitamos definir la función move (), que cambia la posición del cuadro.


// starting position
var pos = 0;
//our box element
var box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos + "px"; //px = pixels
}

// La función incrementa la propiedad izquierda del elemento de cuadro en una cada vez que se llama.


//example 2
// Sin embargo, esto hace que nuestra caja se mueva hacia la derecha para siempre. Para detener la animación cuando el recuadro llega al final del contenedor, agregamos una simple comprobación a la función move () y usamos el método clearInterval () para detener el temporizador.

var t = setInterval(move, 10);

function move() {
  if (pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos + "px";
  }
}


//Handling Events ( Manejo de eventos )

//Eventos
// Puede escribir el código JavaScript que se ejecuta cuando ocurre un evento, como cuando un usuario hace clic en un elemento HTML, mueve el mouse o envía un formulario.

// Los eventos correspondientes se pueden agregar a los elementos HTML como atributos. por ejempplo

 <p onclick="someFunc()">some text</p>


 //Handling Events
// Mostremos una ventana emergente de alerta cuando el usuario haga clic en un botón específico:

document.body.innerHTML = '<button onclick="show()">Click Me</button>';
function show() {
  alert("Hi there");
}

//Los manejadores de eventos pueden ser asignados a elementos.
//Other
var x = document.getElementById("demo");
x.onclick = function () {
  document.body.innerHTML = Date();
}

// Events
// Los eventos onload y onunload se activan cuando el usuario entra o sale de la página. Estos pueden ser útiles cuando se realizan acciones después de cargar la página.

//<body onload = "doSomething()">

//De manera similar, el evento window.onload se puede usar para ejecutar código después de que se haya cargado toda la página.

window.onload = function () {
  //some code
}

// El evento onchange se utiliza principalmente en cuadros de texto. Se llama al controlador de eventos cuando el texto dentro del cuadro de texto cambia y el enfoque se pierde del elemento.

//Cambiar texto  onchage

document.body.innerHTML = '<input type="text" id="name" onchange="change()">';

function change() {
  var x = document.getElementById("name");
  x.value = x.value.toUpperCase();
}

//Es importante comprender los eventos, ya que son una parte esencial de las páginas web dinámicas.



// Event Listeners
// El método addEventListener () asocia un controlador de eventos a un elemento sin sobrescribir los controladores de eventos existentes. Puede agregar muchos controladores de eventos a un elemento.

addEventListener() : //adjunta un controlador de eventos a un elemento sin sobrescribir los controladores de eventos existentes

//Puede agregar muchos controladores de eventos a un elemento.
// También puede agregar muchos controladores de eventos del mismo tipo a un elemento, es decir, dos eventos de "clic". ******

element.addEventListener(event, function, useCapture);
// El primer parámetro es el tipo de evento. (como "click" or "mousedown")
// El segundo parámetro es la función a la que queremos llamar cuando ocurre el evento.
// El tercer parámetro es un valor booleano que especifica si se debe utilizar la propagación de eventos o la captura de eventos. Este parámetro es opcional y se describirá en la siguiente lección.


//NOTA: Tenga en cuenta que no utiliza el prefijo "on" para este evento; use "clic" en lugar de "onclick".

element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}

// Esto agrega dos escuchas de eventos al elemento.
// Podemos eliminar a uno de los oyentes:

element.removeEventListener("mouseover", myFunction);

//Vamos a crear un controlador de eventos que se elimine después de ejecutarse:
document.body.innerHTML = '<button id="demo">Start</button>';

var btn = document.getElementById("demo");
function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction);
}
btn.addEventListener("click", myFunction);

// Después de hacer clic en el botón, se muestra una alerta con un número aleatorio y se elimina el detector de eventos.

// Internet Explorer versión 8 y versiones anteriores no son compatibles con los métodos addEventListener () y removeEventListener (). 
//Sin embargo, puede usar el método document.attachEvent () para adjuntar controladores de eventos en Internet Explorer.


// -- Event Propagation

// Hay dos formas de propagación de eventos en el DOM de HTML
// bubbling and capturing.
// La propagación de eventos permite la definición del orden de los elementos cuando ocurre un evento. Si tiene un elemento <p> dentro de un elemento <div> y el usuario hace clic en el elemento <p>, ¿qué evento de "clic" se debe manejar primero?

//a) bubbling
//In bubbling, the innermost element's event is handled first and then the outer element's event is handled.The < p > element's click event is handled first, followed by the <div> element's click event.

//b) capturing
// El evento del elemento más externo se maneja primero y luego el interno. El evento de clic del elemento <div> se maneja primero, seguido del evento de clic del elemento <p>.

//Capturing va debajo the DO
//Bubbling va arriba the DOM.


//Capturing vs. Bubbling
//The addEventListener() method, le permite especificar el tipo de propagación con el parámetro "useCapture".

addEventListener(event, function, useCapture)
// El valor predeterminado es falso, lo que significa que se utiliza la propagación de propagación; cuando el valor se establece en verdadero, el evento utiliza la propagación de captura.

//Capturing propagation
elem1.addEventListener("click", myFunction, true);

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);

//Esto es particularmente útil cuando se maneja el mismo evento para múltiples elementos en la jerarquía DOM.




//Creando una imagen Slider
// Ahora podemos crear un proyecto deslizante de imagen de muestra. Las imágenes se cambiarán utilizando los botones "Siguiente" y "Anterior".

//Ahora, creemos nuestro HTML, que incluye una imagen y los dos botones de navegación:


<div>
  <button> Prev </button>
  <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg"
    width="200px" height="100px" />
  <button> Next </button>
</div>

var images = [
  "http://www.sololearn.com/uploads/slider/1.jpg",
  "http://www.sololearn.com/uploads/slider/2.jpg",
  "http://www.sololearn.com/uploads/slider/3.jpg"
];

//Ahora necesitamos manejar los clics Siguiente y Anterior y llamar a las funciones correspondientes para cambiar la imagen.

<div>
  <button onclick="prev()"> Prev </button>
  <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg"
    width="200px" height="100px" />
  <button onclick="next()"> Next </button>
</div>

var images = [
  "http://www.sololearn.com/uploads/slider/1.jpg",
  "http://www.sololearn.com/uploads/slider/2.jpg",
  "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}


//- Form Validation
// HTML5 agrega algunos atributos que permiten la validación de formularios. Por ejemplo, el atributo "required" se puede agregar a un campo de entrada para que sea obligatorio rellenar.

// Se puede realizar una validación de formularios más compleja utilizando JavaScript.

//El elemento de formulario tiene onsubmit evento, que se puede manejar para realizar validación

//Vamos a crear un formulario con dos entradas y un botón. El texto en ambos campos debe ser el mismo y no en blanco para pasar la validación.


<form onsubmit="return validate()" method="post">
  Number: <input type="text" name="num1" id="num1" />
  <br />
  Repeat: <input type="text" name="num2" id="num2" />
  <br />
  <input type="submit" value="Submit" />
</form>

//Validar que Los 2 imput deben de ser iguales
function validate() {
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  if (n1.value != "" && n2.value != "") {
    if (n1.value == n2.value) {
      return true;
    }
  }
  alert("The values should be equal and not blank");
  return false;
}

// Devolvemos verdadero solo cuando los valores no están en blanco y son iguales.

//El formulario no se enviará si su evento onsubmit devuelve falso.
