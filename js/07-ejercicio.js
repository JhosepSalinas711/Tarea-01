const numero = prompt("Introduce un número:");

const esPar = (numero % 2 === 0);

if (esPar) {
    alert("El número " + numero + " es par.");
}   else {
    alert("El número " + numero + " es impar.");
}