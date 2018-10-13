//exponer variable sumar para los que importan
// dentro del objeto, tenemos una propiedad llamda sumar y una funcion sumar

//cambiamos nombre a jsm: referido a modulos, para que se usen como modulo
export const sumar = (a, b) => a + b;
export const restar = (a,b) => a - b;
export const multiplicar = (a,b) => a * b;
export const dividir = (a,b) => a / b;

//tambien se puede
//import default { sumar, restar, multiplicar, dividir } from './modules/utils';
