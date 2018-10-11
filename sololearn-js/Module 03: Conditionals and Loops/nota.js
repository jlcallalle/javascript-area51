//-- Conditionals and Loops

// 1)  IF condicional

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
  alert("JavaScript is easy to learn.");
}


// 2)  IF else condicional

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
  alert("This is my first condition");
}
else {
  alert("This is my second condition");
}

//Otra manera de hacer condicionales
var a = 5;
var b = 8;
a < b ? console.log('si') : console.log('no');


// 3)  IF else IF condicional

var course = 1;
if (course == 1) {
  document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
  document.write("<h1>CSS Tutorial</h1>");
} else {
  document.write("<h1>JavaScript Tutorial</h1>");
}

// 4)  Switch condicional

// En los casos en que necesite probar múltiples condiciones
// el valor de la expresion es comparado en cada caso
switch (expression) {
  case n1:
    statements
    break;
  case n2:
    statements
    break;
  default:
    statements
}

// Puede lograr el mismo resultado con varias declaraciones if ... else, pero la instrucción switch es más efectiva en tales situaciones.

var day = 2;
switch (day) {
  case 1:
    document.write("Monday");
    break;
  case 2:
    document.write("Tuesday");
    break;
  case 3:
    document.write("Wednesday");
    break;
  default:
    document.write("Another day");
}

// Outputs "Tuesday"

//The break Keyword
// Cuando el código de JavaScript alcanza una palabra clave break,
// se rompe fuera del bloque de conmutación.
//Por lo general, se debe poner un descanso en cada declaración de caso


// 5)  The For Loop

//js tiene 3 tipos de bucles: a)for, b) while y c) do while.

//a) for
for (element 1; element 2; element 3) {
  //code block to be executed
}

//element 1 : se ejecuta antes de que comience el bucle(el bloque de código).
//element 2 : Define la condición para ejecutar el bucle(el bloque de código).
//element 3 : se ejecuta cada vez que se ejecuta el bucle(el bloque de código)// Como puede ver, el clásico para bucle tiene 3 componentes o declaraciones.

//el siguiente ejemplo crea un bucle for que imprime los números del 1 al 5.

for (i = 1; i <= 5; i++) {
  document.write(i + "<br />");
}

//element1 : establece una variable antes de que comience el bucle (var i = 1).
//element2 : define la condición para que el bucle se ejecute
//element3: aumenta un valor (i ++) cada vez que se ejecuta el bloque de código en el bucle

//declaracion 1 es opcional, puede ser omitido, si sus valores se establecen antes de que comience el ciclo.

var i = 1;
for (; i <= 5; i++) {
  document.write(i + "<br />");
}

//Además, puede iniciar más de un valor en la declaración 1, utilizando comas para separarlos.

for (i = 1, text = ""; i <= 5; i++) {
  text = i;
  document.write(i + "<br />");
}

//ES6 introduce otros tipos de bucle; Puedes aprender sobre ellos en el curso de ES6 más adelante

//Imprimir suma resultado en bucle
var i = 1;
for (k=1; k<10; k++){
  i+=k; //i=i +k
}

//imprimir valores pares de 0 a 20 utilizando un bucle for
var x=0;
for (; x<=20; x+= 2) {
  document.write(x);
}

// 6) While Loop
//El bucle while se repite a través de un bloque de código, siempre que una condición especificada sea verdadera.

while (condition) {
  //code block
}
//El resultado de la condicion es siempre: valor booleano (true, false)
//La condición puede ser cualquier declaración condicional que devuelva verdadero o falso.

var i = 0;
while (i <= 10) {
  document.write(i + "<br />");
  i++;
}

// Ten cuidado con las condiciones de escritura. 
// Si una condición es siempre cierta, el bucle se ejecutará para siempre.
// Asegúrese de que la condición en un bucle while eventualmente se vuelva falsa.

//Imprimir los valores de 1 al 5
var x = 1;
while (x <= 5) {
  document.write(x + "<br/>");
  x = x + 1;
}


// 7) Do White Loop
//El bucle do ... while es una variante del bucle while.Este bucle ejecutará el bloque de código una vez, antes de verificar si la condición es verdadera, y luego repetirá el bucle mientras la condición sea verdadera.

var i=20;
do {  
  document.write(i + "<br />");
  i++;  
}
while (i<=25); 

//El bucle siempre se ejecutará al menos una vez, incluso si la condición es falsa, porque el bloque de código se ejecuta antes de que se pruebe la condición.


// 8) Brak y Continue

//Continue: La instrucción continue solo interrumpe una iteración en el bucle y continúa con la siguiente iteración.
// El valor 5 no se imprime, porque continuar omite esa iteración del bucle.

for (i = 0; i <= 10; i++) {
  if (i == 5) {
     continue; 
  }
  document.write(i + "<br />");
}

var sum=0; 
for(i=4; i<8; i++) {
  if (i == 6) {
    continue; 
  }
  sum += i;
}
document.write(sum);