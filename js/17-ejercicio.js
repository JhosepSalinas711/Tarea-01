const pies = parseFloat(prompt("Introduce la medida en pies:"));
const metro = parseFloat(prompt("Introduce la medida en metros:"));

const totalPies = pies + (metro * 3.28084);

const pulgadas = totalPies * 12;
const yardas = totalPies / 3;
const metros = totalPies / 3.28084;
const millas = totalPies / 5280;

alert(`Suma total convertida:
- Pulgadas: ${pulgadas.toFixed(2)}
- Yardas: ${yardas.toFixed(2)}
- Metros: ${metros.toFixed(2)}
- Millas: ${millas.toFixed(6)}`);