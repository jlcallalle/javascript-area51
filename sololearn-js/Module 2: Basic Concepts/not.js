//-- 1) VARIABLES   
//Las variables son contenedores para almacenar valores de datos.
//El valor de una variable puede cambiar a lo largo del programa.
//Una variable puede ser declarada sin un valor.
//Si se declara sólo un variable, mostrará 'undefined'
//JavaScript is case sensitive.

var x = 10;

//se llama daclaración de variable
//el = es llamado 'assignment', operador de asignación

//-- Naming Variables
// El primer carácter debe ser una letra, un guión bajo o signo de $
// No se permiten números como primer carácter.
// Los nombres de variables no pueden incluir un operador matemático o lógico en el nombre
// Los nombres de JavaScript no deben contener espacios: my#num, num%
// No usar palabras reservadas *** Adjunto Imagen ***


//- 2) DATA TYPES
// A diferencia de muchos otros lenguajes de programación, JavaScript no define diferentes tipos de números, como i

numbers 
strings 
arrays 

//- 1) Numbers  
//always stored as double precision floating point numbers.  **** Averiguar

//- 2) String  
//Se utilizan para almacenar y manipular texto.
//se puede usar comas simples o comas dobles
//incluso usar comas dentro de otras comas
//se puede usar caracteres de scape : \" or \'  **** caracteres de escape imagen

var name = 'Jorge';
var text = "Mi nombre es Jorge";
var text2 = "Mi nombre es 'Jorge Luis' ";

// -3) Boolean
// Se puede tener uno de dos valores, ya sea verdadero o falso
// Son útiles cuando necesita un tipo de datos que solo puede tener uno de dos valores, como Yes/No, On/Off, True/False.
// the boolean de valor 0, es un string vacio es false
// toda cosa que es real es cierto

Boolean('');
false

Boolean('Hola');
true



//-- 3) OPERADORES MATEMÀTICOS
// Los operadores aritméticos realizan funciones aritméticas en números (literales o variables).

var x = 10 + 5;
document.write(x);

// Outputs 15
var x = 10;
var y = x + 5 + 22 + 45 + 6548;
document.write(y);

//Outputs 6630

//Si se suma una variable de tipo number y de tipo string, el resultado será un string

var textoNumber = eval("10 * 20 + 8"); //Eval

// Suma, Resta, Multiplicación, Modulus (%) // Devuelve el resto de la operación

var myVariable = 26 % 6;
//myVariable equals 2

//Nota: Las operaciones, se comportan como aritmetica, es decir 
var calculo1 = 100 + 50 * 3   // 250
var calculo2 = (100 + 50) * 3  // 450

// Incremento ++ (VER IMG)


//-- 4) OPERACIONES DE ASIGNACIÓN  
var result = 20;
result *= 5;
//100



//-- 5) OPERADORES DE COMPARACIÓN
var num = 10; 
// num == 8 retornará false

//Cuando utilice operadores, asegúrese de que los argumentos sean del mismo tipo de datos; Los números deben compararse con los números, cadenas con cadenas, etc.

val1 == val2 // son iguales
val1 != val2 // no son iguales
val1 < val2  // menor que
val1 === val1 // son estrictamente iguales (identical)



//-- 6) OPERADORES  LÓGICOS O BOOLEANOS 
// Los operadores lógicos, también conocidos como operadores booleanos, evalúan la expresión y devuelven verdadero o falso.

//&& //retorna true, si las 2 operaciones son true
//|| //retorna true, si 1 operador es tru∫
//!  //retorna true, si la operacion es falsa y falsa.

(4 > 2) && (10 > 15)
false
(4 > 2) && (10 > 15)
false

//Conditional (Ternary) Operator
// variable = (condition) ? value1: value2 

var edad = 15;
var esAdulto = (edad < 18) ? "Joven" : "Viejo";
// Joven


//-- 7) OPERACIONES STRING
//para concatenar se usa +
var mystring1 = "I am learning ";
var mystring2 = "JavaScript with SoloLearn.";
document.write(mystring1 + mystring2);

