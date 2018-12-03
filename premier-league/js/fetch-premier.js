
//fetch('https://api.myjson.com/bins/bv7f8')
//fetch('premier.json')
fetch('test.json')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    const listaNombre = json.name;
    console.log(listaNombre);

    const total = json;
    //console.log(total);

    const key = json.map(user => user.key);
    //console.log(key);

    const nombre = json.map(user => user.name);
    //console.log(nombre);

    const code = json.map(user => user.code);
    //console.log(code);

    document.getElementById("userId").innerHTML = json;



    //bucle
    let indice;
    for (indice in total) {
      //console.log(indice, total[indice]);
    }

    let alumno;
    for (alumno of total) {
      console.log(alumno);
      document.getElementById("userId").innerHTML = <p>aa</p>;
    }

    total.forEach(function (alumno, indice, arreglo) {
      //console.log( indice);
    });

    total.map(function (a) {
      return a.code;
    })



  })
