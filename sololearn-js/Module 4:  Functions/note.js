//-- 1) Funciones definidas por el usuario

//Una función de JavaScript es un bloque de código diseñado para realizar una tarea en particular
//Las principales ventajas de utilizar funciones: Reutilización del código: defina el código una vez y úselo muchas veces. 
//Use el mismo código muchas veces con diferentes argumentos para producir resultados diferentes.
//Una función de JavaScript se ejecuta cuando "algo" lo invoca, o lo llama

function name() {    
    //code to be executed
  }
// El código que debe ejecutar la función se coloca entre corchetes {}.
//Los nombres de funciones pueden contener letras, dígitos, subrayados y signos de dólar (las mismas reglas que las variables).

function myFunction() {
    alert("Calling a Function!");
}
 // Para llamar a una función, comience con el nombre de la función, luego sígala con los argumentos entre paréntesis.

 myFunction();
// También puede llamar a una función usando esta sintaxis: myFunction.call ()
// La diferencia es que al llamar de esta manera, está pasando la palabra clave 'this' a una función. Lo aprenderás más tarde.


//-- 2) Parametros Funciones
// Las funciones pueden tomar parámetros.
// Los parámetros de función son los nombres listados en la definición de la función.

functionName(param1, param2, param3) {
    // some code
 }

 //Después de definir los parámetros, puedes usarlos dentro de la función.

 function sayHello(name) {
    alert("Hola, " + name);
 }
 
 sayHello("Jorge");
//Alerts "Hola, Jorge"

//Esta función toma en un parámetro, que se llama nombre. Al llamar a la función, proporcione el valor del parámetro (argumento) dentro de los paréntesis.
//Los argumentos de función son los valores reales pasados ​​a (y recibidos por) la función.
//***Puede definir una sola función y pasarle diferentes valores de parámetros (argumentos)*** */

sayHello("David");
sayHello("Sarah");
sayHello("John");

//-- 3) Múltiples Parametros Funciones
// You can define multiple parameters for a function by comma-separating them. 

function myFunc(x, y) {
    // some code
 }

 function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
  }

 function test(x, y) {
    if(x>y) {
    document.write(x);
    }
    else {
    document.write(y);
    }
}
test(5, 8);

//When calling the function, provide the arguments in the same order in which you defined them.
function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
  }
  
  sayHello("John", 20)
  //Outputs "John is 20 years old."

  //If you pass more arguments than are defined, they will be assigned to an array called arguments. They can be used like this: arguments[0], arguments[1], etc.