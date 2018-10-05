
fetch('https://api.myjson.com/bins/bv7f8')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    //const nombres = json.map(user => user.name);
    //console.log(nombres);

    //const email = json.map(user => user.email);
    //console.log(email);

    //const empresa = json.map(user => user.company.name);
    //console.log(empresa);

  })
