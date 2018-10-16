// https://jgthms.com/javascript-in-14-minutes/

alert('Hello World!')
alert(9 + 5 * 3)


//OBJETOS
//window is a JavaScript object.
// innerWidth is a property of the window

window.origin //which is a string
window.scrollY //which is a number
window.innerWidth //which is a number
window.location //which is an object
window.location.href //objeto location have propiedades

//METODOS
//When an object's property is a function, it's called a method instead.
//Actually, the alert() function we've been using so far is a method of the window object!
window.alert('OMG');

//ARRAYS
//contienen multiples valores
alert(['What', 'is', 'up'])
// An array can contain any type of values: strings, numbers, objects, other arrays, and more
alert([2 + 5, 'samurai', true])

//push
//include, verifica (comparison)  si existe contenido

alert(window.innerWidth > 400)

//Condicionales
if (window.location.hostname == 'jgthms.com') {
  alert('Welcome on my domain! 🤗')
}
if (window.location.hostname != 'jgthms.com') {
  alert('Please come back soon! 😉')
}

if (window.location.hostname == 'jgthms.com') {
  alert('Welcome on my domain! 🤗')
} else {
  alert('Please come back soon! 😉')
}


if (window.innerWidth > 2000) {
  alert('Big screen! 🔥')
} else if (window.innerWidth < 600) {
  alert('Probably a mobile phone 📱')
} else {
  alert('Decent size 👍')
}

//Loops

for (var i = 0; i < 3; i++) {
  alert(i);
}

//Iteration Value of i  Test  Trigger the alert ?
//1st 0 0 < 3 Yes
//2nd 1 1 < 3 Yes
//3rd 2 2 < 3 Yes
//4th 3 3 < 3 No!

// Buceando a través de matrices

var my_things = [2 + 5, 'samurai', true];
for (var i = 0; i < my_things.length; i++) {
  alert(my_things[i]);
}

//forEach loop
//Arrays actualmente tiene metodos llamados forEach(), que permiten realizar una tarea para cada elemento de la matriz.

var my_things = [2 + 5, 'samurai', true];
my_things.forEach(function (item) {
  alert(item);
});

//There is no i variable involved
//We don't need to access the array's length
//We don't need to use the index with my_thing[i] to access the item

//si miras bien,  forEach() tiene la misma sintaxis que forEach(parameter)

//--
//Hasta ahora, hemos usado algunas funciones y métodos:

/*
the alert() function (or window method)
the push() array method
the includes() array method
the forEach() array method
*/

// FUNCIONES 
//Creando una función personalizada
// El poder de los lenguajes de programación es la capacidad de crear sus propias funciones, que se ajusten a sus necesidades.

//Vamos a crear una función llamada greet (), con 1 parámetro llamado nombre, y luego llamémosla inmediatamente:

function greet(name) {
  var message = 'Hey there ' + name;
  alert(message);
}
greet('Alex');

//Es importante entender que las funciones son un proceso de 2 pasos: crearlo primero y luego llamarlo.


//Recursos
//http://eloquentjavascript.net/
//https://www.freecodecamp.org/
//https://javascript.info/
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript
//https://github.com/getify/You-Dont-Know-JS

//HTML
//https://htmlreference.io/

//CSS
//https://cssreference.io/

//Bulma 
//https://bulma.io/

