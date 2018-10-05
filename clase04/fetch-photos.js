
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


/*
// ES6+
const saltar = function (metros) {
	console.log(`Salto ${metros} metros`);
};

// ES6+
const saltar = (metros) => {
	console.log(`Salto ${metros} metros`);
};

const saltar = metros => {
	console.log(`Salto ${metros} metros`);
};

*/

/* 
https://www.twitch.tv/videos/312655175
*/

// https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec
//call Stack

//modelo de concurrencia
//event loop: mira si la pila esta completamente vacia