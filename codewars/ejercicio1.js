//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.


const numeros = [1, -4, 7, 12];
//console.log(numeros);

//mostrarPositivos con For
for (i = 0; i < numeros.length; ++i) {
  if (numeros[i] > 0) {
    console.log(`${numeros[i]}`);
  }
}

//mostrarPositivos con forEach
numeros.forEach(function(numeros, indice, arreglo){
  if (numeros > 0) {
    //console.log(numeros);
    console.log(numeros += numeros);
  }
})

const numeros = [1, -4, 7, 12];

numeros.reduce(function (valorAnterior, valorActual) {
  console.log(valorActual);
  if (valorActual > 0 ) {
    console.log('2');
  }
  return valorAnterior + valorActual;

});