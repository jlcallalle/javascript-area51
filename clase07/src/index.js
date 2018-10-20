import { sumar } from './modules/utils';
const resultado = sumar(5, 2);

console.log('hola webpack clase 7');

//- server
const endpoint = "http://localhost:3000/empleados";

fetch(endpoint)
  .then(response => response.json())
  .then(json=> {
    console.log(json);

    const listaEmpleados = json;
    console.log(listaEmpleados);

    //const keynames2 = Object.keys(listaEmpleados);
    //console.log(nombreEmpleado);
    //console.log(keynames2);

    //UN OBJETO NO SE PUEDE RECORRER

    const keys = Object.keys(listaEmpleados);
    const value = Object.values(listaEmpleados);
    console.log(keys);
    console.log(value);

  })