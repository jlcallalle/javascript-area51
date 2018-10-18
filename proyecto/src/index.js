console.log('start project');

fetch('http://data.fixer.io/api/latest?access_key=9e1910b221f5db999a84e0c82d049cf0')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    const precioDolar = json.rates.USD;
    const listaTipos = json.rates;
    const keynames = Object.keys(listaTipos);
    const valores = Object.values(listaTipos);
    //console.log(`El precio del Dolar es ${precioDolar}`)
    //console.log(`listaTipo ${listaTipos}`);
    //console.log(`keynames ${keynames}`);
    //console.log(`valores ${valores}`);

    const inputEuro = document.querySelector('#input-euros');
    const inputDolar = document.querySelector('#input-dolar');
    const btnEnvio = document.querySelector('#btn-envio');

    btnEnvio.addEventListener('click', event => {
      const valorEuro = inputEuro.value;
      const convertir = parseInt(valorEuro) * precioDolar;
      const resultadoDecimal = convertir.toFixed(2);

      if (!valorEuro == '') {
        inputDolar.value = resultadoDecimal;
        console.log(`La conversion de ${valorEuro} euros equivale a:  ${resultadoDecimal} USD`);
      } else {
        alert('Ingresar cantidad de euros');
      }

    })


    //Select
    const selectTipo = document.querySelector('#select-tipo');
    const inputMoneda = document.querySelector('#inputMoneda');
    const dolarSelect = document.querySelector('#dolarSelect');
    const btnEnvioSelect = document.querySelector('#btn-envio-select');

    //Mostrar listado del select
    for (i = 0; i < keynames.length; ++i) {
      var opt = keynames[i];
      selectTipo.innerHTML += `<option value = '${valores[i]}'> ${keynames[i]} </option>`;
    }

    //obtener valores del select
    selectTipo.addEventListener('change', event => {
      const valorSelect = event.target.value;
      console.log(valorSelect);
      const cantidad = document.querySelector('#cantidad');
      cantidad.innerHTML = valorSelect;

      const showPrecio = document.querySelector('#precio')
      showPrecio.style.display = 'block';

      if (valorSelect == 'Selecccione') {
        showPrecio.style.display = 'none';
      }
    })

    //calculo
    btnEnvioSelect.addEventListener('click', event => {
      const precioCantidad = document.querySelector('#cantidad').textContent;
      const valorMoneda = inputMoneda.value;
      const calculo = valorMoneda * precioCantidad;
      const calculoUSD = calculo * precioDolar;
      const calculoUSDFinal = calculoUSD.toFixed(2);
      //console.log('precio cantidad', precioCantidad);
      //console.log('valor moneda', valorMoneda);
      //console.log('calculo', calculo);
      //console.log('calculoUSD', calculoUSD);

      if (!valorMoneda == '') {
        dolarSelect.value = calculoUSDFinal;
      } else {
        alert('Ingresar cantidad moneda');
      }

    })

  })



console.log('fin project');
