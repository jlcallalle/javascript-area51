
fetch('http://data.fixer.io/api/latest?access_key=9e1910b221f5db999a84e0c82d049cf0')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    const precioDolar = json.rates.USD;
    //const listaTipos = json.rates;
    console.log(`El precio del Dolar es ${precioDolar}`)
    //console.log(listaTipos);

    const inputEuro = document.querySelector('#input-euros');
    const inputDolar = document.querySelector('#input-dolar');
    const btnEnvio = document.querySelector('#btn-envio');

    btnEnvio.addEventListener('click', event => {
      const valorEuro = inputEuro.value;
      const convertir = parseInt(valorEuro) * precioDolar;
      const resultadoDecimal = convertir.toFixed(2);
      inputDolar.value = resultadoDecimal;
      console.log(`La conversion de ${valorEuro} euros equivale a:  ${resultadoDecimal}`);
    })


  })


const lista = [
  {  
    "success":true,
    "timestamp":1539793148,
    "base":"EUR",
    "date":"2018-10-17",
    "rates":{  
        "AED":4.237317,
        "AFN":87.740761,
        "ALL":125.263407,
        "AMD":558.249306,
        "ZWL":371.88444
    }
  }
];

lista.forEach(function (alumno) {
  //console.log(alumno.rates);
});


const selectTipo = document.querySelector('#select-tipo');
const inputDolarSelect = document.querySelector('#input-dolar-select');
const btnEnvio = document.querySelector('#btn-envio-select');
const agregarSelect = lista[0].rates;
//console.log('array de objetos: ', agregarSelect);

//-- agregando array estatico
const tipo = ['1', '2', '3'];
//onsole.log(tipo);

let i;
for (i = 0; i < tipo.length; ++i) {
  var opt = tipo[i];
  //console.log(opt)
  selectTipo.innerHTML += `<option> ${tipo[i]} </option>`;
}

