const tanque1 = parseFloat(prompt("Ingrese la cantidad de litros del tanque 1:"));
const tanque2 = parseFloat(prompt("Ingrese la cantidad de yardas cúbicas del tanque 2:"));

const L_MetrosCubicos = tanque1 / 1000;
const y_metrosCubicos = tanque2 * 0.7641;  

const totalMetrosCubicos = L_MetrosCubicos + y_metrosCubicos;

const consumo = totalMetrosCubicos * 0.75;
const riego = totalMetrosCubicos * 0.25;

const consumo_metrosCubicos = consumo.toFixed(2);
const riego_metrosCubicos = riego.toFixed(2);
const consumo_piesCubicos = (consumo / 0.0283).toFixed(2);
const riego_piesCubicos = (riego / 0.0283).toFixed(2);

console.log(`El total de metros cúbicos es de ${totalMetrosCubicos.toFixed(2)} m³.`);
console.log(`El consumo de agua es de ${consumo_metrosCubicos} metros cúbicos (${consumo_piesCubicos} pies cúbicos) y el riego es de ${riego_metrosCubicos} metros cúbicos (${riego_piesCubicos} pies cúbicos).`);
