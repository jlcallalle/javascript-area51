console.log('hola');
const inputEuro = document.querySelector('#input-euros');
const inputDolar = document.querySelector('#input-dolar');
const btnEnvio = document.querySelector('#btn-envio');


btnEnvio.addEventListener('click', event => {
  const valorEuro = inputEuro.value;
  const valorDolar = inputDolar.value;
  inputDolar.value = valorEuro;
})