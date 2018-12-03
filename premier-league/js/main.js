
//fetch('https://api.myjson.com/bins/bv7f8')
//fetch('premier.json')
fetch('premier.json')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    var key = Object.keys(json); // 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
    var keyuno = Object.keys(json[0]); //key,name,code
    var value = Object.values(json); // [object Object],[object Object],[object Object]
    var valueuno = Object.values(json[0]); //arsenal,Arsenal,ARS
    console.log(key);
    console.log(keyuno);
    console.log(value);
    console.log(valueuno);

    document.querySelector('#table').innerHTML = keyuno;



 

    // loop over values
    for (let value of Object.values(json)) {
      //alert(value); // John, then 30
    }

  })

  /* 
  Referencia
  https://codepen.io/travishorn/pen/qXvaKa
  
  */