console.log('aaa 12 aa');

const output = document.querySelector('#output');
const url = 'https://jsonplaceholder.typicode.com/photos';

//las promesas se caracterizan
fetch(url)
    .then(response => response.json())  //de texto convierte a json
    //.then(json => {console.log(json)})
    //.then(json => output.textContent = JSON.stringify.json); //de  json a html
    
    /*
    .then(json => {
        //const templateITem = document.querySelector('#');
    })
    */


//Angular // angular/http
//ReacJS, Vue, Vanilla, usamos AXIOS

//JSON.stri
/*
    1.
    const divElement = document.createElement('div');
    output.appendChild(divElement);

    2.
    output.innerHTML = '<div></div'>

*/


/* Clases  */
class Empleado {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    nombreCoompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

const empelado1 = new Empleado('Pedro', 'Lopez')
const nombreCompleto = empelado1.nombreCoompleto();
console.log(nombreCompleto);


//Herencia 

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Empleado  extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido);
    }
    nombreCoompleto() {
        return ` Sr. ${super.nombreCompleto()}`;
    }
}

const empelado1 = new Empleado('Pedro', 'Lopez')
const nombreCompleto = empelado1.nombreCoompleto();
console.log(nombreCompleto);