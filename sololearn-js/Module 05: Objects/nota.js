//JavaScript Objects

// 1.- Introducción de Objetos

//Las variables de JavaScript son contenedores de valores de datos. Los objetos también son variables, pero pueden contener muchos valores.
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
// Un método de objeto es una propiedad que contiene una "definición de función"

objectName.methodName()
// Cómo ya sabes, document.write(), la funcion write() es un metodo del objjecto document

document.write()
//Los métodos son funciones que se almacenan como propiedades de objeto.

//Acceder a la propiedad color del objeto hair
hair.color 


// 2.- Creando tu propio Objeto

function person(name, age) {
  this.name = name;
  this.age = age;
}
var John = new person("John", 25);
var James = new person("James", 21);


// 3.- Object Initialization / Inicialización de objetos
// Use el objeto literal o la sintaxis del inicializador para crear objetos individuales

var John = { name: "John", age: 25 };
var James = { name: "James", age: 21 };

// Los objetos consisten en propiedades, que se utilizan para describir un objeto.
// Los valores de las propiedades de los objetos pueden contener tipos de datos primitivos u otros objetos.

simba =
  {
    category: "lion",
    gender: "male"
  }
//Mostrar la propiedad category del objeto Simba
document.write(simba.category);

// Usando inicializadores de objetos
// Los espacios y saltos de línea no son importantes. Una definición de objeto puede abarcar varias líneas.

var John = {
  name: "John",
  age: 25
};
var James = {
  name: "James",
  age: 21
};

// No importa cómo se crea el objeto, la sintaxis para acceder a las propiedades y los métodos no cambia.
document.write(John.age);



// 4.- Agregando Methods

// Los métodos son funciones que se almacenan como propiedades de objeto.

//Usar la siguiente sintaxis para crear un methodo de objeto
methodName: function() { code lines }

//Acceda a un "método" de objeto utilizando la siguiente sintaxis:
objectName.methodName()

//Un "Método" es una función, perteneciente a un "objeto", Puede ser referenciado usando la palabra clave this.
// La palabra clave this se usa como una referencia a la actual "objeto", lo que significa que puede acceder a las propiedades de los objetos y métodos que lo utilizan.

//La definición de los métodos se realiza dentro de la función "Constructor".

function person(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  }
}

var p = new person("David", 21);
p.changeName("John");
//Now p.name equals to "John"

//En el ejemplo anterior, hemos definido un "metodo" llamado changeName para nuestra persona, que es una función, que toma un nombre de parámetro y lo asigna a la propiedad de nombre del objeto.this.name se refiere a la propiedad de nombre del objeto.

//El método changeName cambia la propiedad del nombre del objeto a su argumento.
//También puede definir la función fuera de la función de constructor y asociarla con el objeto.


//Methods
//You can also define the function outside of the constructor function and associate it with the object.

function person(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}

// Como puede ver, hemos asignado la propiedad yearOfBirth del objeto a la función bornYear.
// La palabra clave this se usa para acceder a la propiedad age del objeto, que llamará al método.
// Tenga en cuenta que no es necesario escribir los paréntesis de la función al asignarla a un objeto.

//Llame al método como de costumbre.

function person(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}

var p = new person("A", 22);
document.write(p.yearOfBirth());
// Outputs 1994

//Llame al método por el nombre de la propiedad que especificó en la función constructora, en lugar del nombre de la función.
//Para usar las propiedades del objeto dentro de una función, use: ?

// 5.- Quiz
//Las propiedades de objetos son similares a las variables, los metodos son similares a funciones
// Complete la expresión para crear un constructor de objetos, teniendo en cuenta que "altura" y "peso" son propiedades y "calcular" es un método para el objeto dado:

function mathCalc(height, weight) {
  this.height =height;
  this.weight =weight;
  this.sampleCalc =calculate;
}