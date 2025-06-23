const contrasena = "admin123";

const verificarContrasena = prompt("Ingrese la contraseña:");
if (verificarContrasena === contrasena) {
    console.log("Contraseña correcta.");
}else {
    console.log("Contraseña incorrecta.");
}

