console.log('ok');
const txtMensaje = document.querySelector('#txt-mensaje');
const btnMostrar = document.querySelector('#btn-mostrar');

//$0.value //obtiene valor del input

// .onclick = (/* Event */ event) => {};
// .click()

// .addEventListener(
//		/* string */ eventName,
//    /* callback Function */ (event) => { }
// )

// .dispatchEvent(/* Event */), escuchar y disparar

// Event | CustomEvent


// btnMostrar.onclick = event => {
// 	console.log('A) Click en Mostrar usando .onclick');
// };

// btnMostrar.onclick = event => {
// 	console.log('B) Click en Mostrar usando .onclick');
// };

// let nombre;

// nombre = 'Pedro';
// nombre = 'Julia';

// console.log(nombre); // 'Julia'



//Event | CustomEvent

//profe no recomienda usar eventos que comiencen con on
//solo se puede asignar un evento a la vez

btnMostrar.onclick = event => {
	console.log(" A) Click en Mostrar usando .onclick")
};


//recomienda, usar el addEventListener
// se puede asignar varios eventos
btnMostrar.addEventListener('click', event => {
	console.log(" A) Click en Mostrar usando addEventListener");
})

btnMostrar.addEventListener('click', event => {
    console.log(" A) Click en Mostrar usando addEventListener");
    console.log('txtMensaje.value',txtMensaje.value );
})


// ---- ***** lo ordenamos en variables:

const onClickMostrar1 = event => {
    //console.log(btnMostrar);
    //console.log(event.currentTarget)
    console.log('A) Click en Mostrar usando .addEventListener');
    if(txtMensaje.value.length > 0) {
        console.log('texto');
    }
};

btnMostrar.addEventListener('click', onClickMostrar1);


const onClickMostrar2 = event => {
	console.log('B) Click en Mostrar usando .addEventListener');
	console.log('txtMensaje.value:', txtMensaje.value);
};

btnMostrar.addEventListener('click', onClickMostrar2);

// ---- ***********************
 
//http://bit.ly/2yfIike
//code online http://bit.ly/2P0RWR0
//https://stackblitz.com/edit/js-njgar3?file=index.js

//-- EVENTO LINK 

//inspeccion elemento, rueda, active check preverse log, muestra console.log antes de abrir la web, por default abre link

const linkArea51 = document.querySelector('#link-area51');

//linkArea51.addEventListener('click', event => {
    //event.preventDefault(); 
    //console.log('link');
//})

// ---- ***** lo ordenamos en variables:

const onClickLink = event => {
    event.preventDefault(); 
    console.log('link'); // // evita que haga la accion por defecto, en este caso evita que abra link
    const link = event.currentTarget;
    console.log(link.href);
    console.log(link.getAttribute('href'));
    //cambiar url del navegador
    //window.location.href = link.href;
    window.location = link.href;
};

linkArea51.addEventListener('click', onClickLink);

// ---- ***********************
//const bubbling = true;
//linkArea51.addEventListener('click', onClickLink, bubbling) ;
//concepto conseptualizado sobre bubling

//bubling and caputing: indica si el evento se ejecuta direto o encima de su padre
//https://javascript.info/bubbling-and-capturing


//event.currentTarget o event.target, ver

//Nombre de convención



//--Creacion de elementos

//creamos elemento <div></div>
const contenedor = document.createElement('div')
//contenedor.innerHTML = '<h1 class="title">Soy contenedor</h1>';
// se agrega al final del body
document.body.appendChild(contenedor);

const titulo = document.createElement('h1')
//titulo.className = 'title1';
titulo.classList.add('title')
titulo.textContent = 'Soy un titulo';
contenedor.appendChild(titulo)


// Crear DIV,
// dentro crear <A>,
// propiedad href a google, pero te enviará a facebook (usar evento CLICK)

const contenedorLink = document.createElement('div');
const linkGoogle = document.createElement('a');
contenedorLink.appendChild(linkGoogle);

linkGoogle.textContent = 'Google -> Facebook';
linkGoogle.href = 'https://google.com';
// linkGoogle.setAttribute('href', 'https://google.com');

const onClickLinkGoogle = event => {
	event.preventDefault();
	window.location = 'https://facebook.com';
};

linkGoogle.addEventListener('click', onClickLinkGoogle, true);
document.body.appendChild(contenedorLink);