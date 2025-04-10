import { electrodomestico } from "./electrodomestico";
import { heladera } from "./heladera";
import { heladeraSmart } from "./heladeraSmart";
import { moduloWifi } from "./moduloWifi";

let moduloWifi1 = new moduloWifi(600,100);
let heladeraSmart1 = new heladeraSmart('electrolux','ggwp',false,0,moduloWifi1);

heladeraSmart1.mostrarInfo();
console.log("------------------------------------------------------");

console.log('encendido:');
console.log(heladeraSmart1.estaEncendido);
heladeraSmart1.encender();
console.log('encendido:');
console.log(heladeraSmart1.estaEncendido);

console.log("------------------------------------------------------");

console.log('temperatura:');
console.log(heladeraSmart1.temperatura);

heladeraSmart1.cambiarTemperatura();
console.log('temperatura:');
console.log(heladeraSmart1.temperatura);

console.log("------------------------------------------------------");

heladeraSmart1.conectarseWifi();

console.log("------------------------------------------------------");

heladeraSmart1.mostrarInfo();






