//const numeros = document.querySelectorAll('.numeric');
let numeros = document.querySelectorAll('.numeric');

const num5 = document.querySelector('#num5');
const num6 = document.querySelector('#num6');
const btnSumar = document.querySelector('#sumar');
const mostrarResultado = document.querySelector('#resultado');


const valor5 = parseInt(num5.innerText);
const valor6 = parseInt(num6.innerText);
//const valorNumeros = parseInt(numeros.innerText);

for (let i = 0; i < numeros.length; ++i) {
  //console.log(numeros[i]);
  console.log(numeros[i].textContent);

}

function obtenerSumar () {
  const resultado = valor5 + valor6;
  console.log(resultado);
  mostrarResultado.value = resultado;
}
btnSumar.addEventListener('click', obtenerSumar);


/*
function mostrarNumero() {
  console.log('mostrar');
  for (let i = 0; i < numeros.length; ++i) {
    console.log(listaHijos[i]);
  }
}
numeros.addEventListener('click', mostrarNumero);
*/