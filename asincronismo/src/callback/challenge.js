// Implementación de una API con XMLHttpRquest

// Instanciando el request.
//Permite hacer peticiones a algun servidor en la nube : instalamos: npm install xmlhttprequest --save

// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//por ahora no usamos fech ya que es una implementacion ES6, y utiliza promesa por ello vamos haciendo primero de esta forma básica.
let API = 'https://rickandmortyapi.com/api/character/';

//trae información de la API
function fechData(url_api, callback) {
    // referencia al objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    /* 
    A nuestra referencia xhttp le pasamos un LLAMADO 'open'
    donde: parametro1 = el metodo, parametro2 = la url,
    parametro3 = verificación si es asincrono o no, valor por defecto true
    */
    xhttp.open('GET', url_api, true);
    //Cuando el estado del objeto cambia, ejecutar la función:
    xhttp.onreadystatechange = function(event) {
         /*
        los estados que puede tener son:
        estado 0: inicializado
        estado 1: cargando
        estado 2: ya se cargó
        estado 3: ya hay información
        estado 4: solicitud completa
        PD: recuerda estas trabajando con una API externa osea un servidor por lo que
        depende del servidor cuanto demore en cada estado haces un pedido por datos
        (request) y solo es aplicar lógica.
        */
       if(xhttp.readyState === 4) {
           //Verificar estado, aqui un resumen de los casos mas comunes:
            /*
            ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
           if(xhttp.status === 200) {
               //Estandar de node con callbacks, primer parametro error, segundo el resultado
               callback(null, JSON.parse(xhttp.responseText));
               //aqui tengo que parsear porque tengo un string y no podre accerder a los valores.
           } else {
                let error = new Error('Error: ' + url_api);
                return callback(error, null);
           }

       }

    }
    //Envio de la solicitud.
    xhttp.send();
}

//callback :mostrar datos resultantes de la petición
fechData(API, function(error1, data1) {
    //data1: se utliza esta funcion para realizar las 3 peticiones
    // si error, matamos retornando un error
    if(error1) return console.error(error1);
    //en api cuenta con results visto en postman
    fechData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.log(error2);
        fechData(data2.origin.url, function(error3, data3) {
            if (error3) return console.log(error3);

            // mostramos los resultados :) 
            console.log(data1.info.count); //cantidad personajes
            console.log(data2.name);
            console.log(data3.dimension); //obtener dimension

             // rutas de las peticiones en orden
            console.log(API);
            console.log(API + data1.results[0].id); 
            console.log(data2.origin.url); 
        })
    })

})