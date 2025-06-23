const n1 = parseFloat(prompt("Introduce el primer número:"));
const n2 = parseFloat(prompt("Introduce el segundo número:"));

let op;

do {
    op = parseFloat(prompt("Introduce la operación a realizar:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n0. Salir"));

    switch(op) {
        case 1:
            alert(`El resultado de la suma es: ${n1 + n2}`);
            break;
        case 2:
            alert(`El resultado de la resta es: ${n1 - n2}`);
            break;
        case 3:
            alert(`El resultado de la multiplicación es: ${n1 * n2}`);
            break;
        case 4:
            if (n2 === 0) {
                alert("No se puede dividir por cero.");
            } else {
                alert(`El resultado de la división es: ${n1 / n2}`);
            }
            break;
        case 0:
            alert("Saliendo del programa...");
            break;
        default:
            alert("Opción inválida. Intenta de nuevo.");
    }
} while(op !== 0);