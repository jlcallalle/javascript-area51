/* Snipet $$(Selector)*/
//Muestra todas las img de una web:
var images = $$('img');
for (each in images) {
  console.log(images[each].src);
}