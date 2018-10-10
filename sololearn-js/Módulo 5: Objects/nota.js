//JavaScript Objects

// 1.- Introducción de Objetos

//Las variables de JavaScript son contenedores de valores de datos.
//Los objetos también son variables, pero pueden contener muchos valores.
//Piense en un objeto como una lista de valores que se escriben como pares nombre: valor, con los nombres y los valores separados por dos puntos.

var person = {
  name: "John", age: 31,
  favColor: "green", height: 183
};

//Estos valores se denominan propiedades.
// Propiedades en este caso son name y favColor, Valor de propiedad es John y green

//Puede acceder a las propiedades del objeto de dos maneras.
var person = {
  name: "John", age: 31,
  favColor: "green", height: 183
};
var x = person.age;
var y = person['age'];

//La propiedad de longitud incorporada de JavaScript se utiliza para contar el número de caracteres en una propiedad o cadena.

var course = { name: "JS", lessons: 41 };
document.write(course.name.length);
//Outputs 2

/////* Los objetos son uno de los conceptos centrales en JavaScript.  */////

//Object Methods
// Un método de objeto es una propiedad que contiene una definición de función.

objectName.methodName()
// Cómo ya sabes, document.write() , la funcion write() es un metodo del objjecto document

document.write()
//Los métodos son funciones que se almacenan como propiedades de objeto.

//Acceder a la propiedad color del objeto hair
hair.color 