const precio = parseFloat(prompt("Introduce el precio del producto:"));
const iva = parseFloat(prompt("Introduce el IVA del producto: (en porcentaje):"));

const ivaCalculado = precio * (iva / 100);
const precioFinal = precio + ivaCalculado;

console.log(`El precio del producto es: ${precioFinal.toFixed(2)}L`);
