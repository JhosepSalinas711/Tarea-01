const kmrecorridos = parseFloat(prompt("Introduce los kilómetros recorridos:"));
const gasolinaConsumida = parseFloat(prompt("Introduce los litros de gasolina consumidos:"));

const gasolinaPorKm = gasolinaConsumida / kmrecorridos;

console.log(`El consumo de gasolina es de ${gasolinaPorKm.toFixed(2)} litros por kilómetro.`);
