console.log('run');

const txtMensaje = document.querySelector('#txtMensaje');
const btnAgregar = document.querySelector('#btnAgregar');
const contenido = document.querySelector('#contenido');

const onClickMostrar = event => {
    event.preventDefault(); 
    const palabra = txtMensaje.value;
    console.log(palabra);
    //contenido.innerHTML =   contenido.innerHTML +  ` <div> ${palabra} </div>`;   
    //contenido.innerHTML =   ` ${contenido.innerHTML} ${palabra} </br>`;   
    contenido.innerHTML +=   `${palabra} </br>`;  
};

btnAgregar.addEventListener('click', onClickMostrar);



//__ Pasar contenido a otro contenedor, usar areglo, queryelement all, array.
//const personas = ['pedro','juan','Daiana'];  //pop  //leng //removechild
//console.log( personas[personas.length - 1]);


const col1 = document.querySelector('#col1');
const col2 = document.querySelector('#col2');
//const col1Hijos = document.querySelectorAll('#col1 > div');
//const col1Hijos = document.querySelector('#col1').children;

const btnRegresar = document.querySelector('#btnRegresar');
const btnSiguiente = document.querySelector('#btnSiguiente');

const datos1 = ['Palabra1', 'Palabra2', 'Palabra3']
const onClickAgregar = event => {
    event.preventDefault(); 
    console.log('siguiente');

    const ultimoHijo = col1.lastElementChild.textContent;
    console.log(ultimoHijo);

    col2.innerHTML += `<div> ${ultimoHijo} </div>`;
    col1.removeChild;

    //const ultimo = col1.querySelector(' div > last-child')

    //const palabra = txtMensaje.value;
    //console.log(palabra);
    //contenido.innerHTML =   contenido.innerHTML +  ` <div> ${palabra} </div>`;   
    //contenido.innerHTML =   ` ${contenido.innerHTML} ${palabra} </br>`;   
    //contenido.innerHTML +=   `${palabra} </br>`;  
};

btnSiguiente.addEventListener('click', onClickAgregar);

const onClickRegresar = event => {
    event.preventDefault(); 
    console.log('regresar');

};

btnRegresar.addEventListener('click', onClickRegresar);


//dependenvia, que va a llegar js
//devdependencia, //utilitarios

// AXIOS es una libreria que usa fech, pero mas cositas
//es como envuelve al fech y lo hace mas facil de usar
