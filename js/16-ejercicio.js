const atleta1m = parseInt(prompt("Ingresar minutos del atleta 1:"));
const atleta1s = parseInt(prompt("Ingresar segundos del atleta 1:"));
const atleta2m = parseInt(prompt("Ingresar minutos del atleta 2:"));
const atleta2s = parseInt(prompt("Ingresar segundos del atleta 2:"));

const atleta1 = (atleta1m * 60) + atleta1s;
const atleta2 = (atleta2m * 60) + atleta2s;

const tiempoTotal = atleta1 + atleta2;

const horas = Math.floor(tiempoTotal / 3600);
const minutos = Math.floor((tiempoTotal % 3600) / 60);
const segundos = tiempoTotal % 60;

const resultado = `El tiempo total de los dos atletas es: ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

alert(resultado);
