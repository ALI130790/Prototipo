/* SALUDO */
let nombre = "Alicia";
let apellido = "Alderete";
let saludo = "Hola";
console.log(`${saludo} ${nombre} ${apellido}, Bienvenida!`);

/*USUARIO*/ 
let usuario, contrasena;
do {
    usuario = prompt("Ingrese un nombre de usuario:");
    contrasena = prompt("Ingrese una contraseña:");
} while (!usuario || !contrasena);

alert("Usuario creado: " + usuario);
alert("Contraseña creada: " + contrasena);

/* CONTRASEÑA */
let contrasenia = "alicia720";
if (contrasenia === "alicia720") {
    console.log("Contraseña correcta");
} else {
    console.log("Usuario o contraseña incorrecto")
}

/*EDAD*/
let edad = 18;
if (edad >= 18) {
    console.log("Puedes ingresar a nuestro sitio");
} else {
    console.log("No estas autorizado a realizar compras");
}

/*TURNO PARA INGRESAR A NUESTRO SHOWROOM*/
for(let turno = 1; turno <= 10; turno++){
    let nombre = prompt("Ingrese su nombre para nuestros sorteos semanales");
    alert(`Turno #${turno} Nombre: ${nombre}`);
}
alert("Turnos agotados, proxima semana abrimos cupos nuevamente")

/*SORTEO POR UNA ORDEN DE COMPRA*/
function sorteoAleatorio(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo +1) + minimo);
}
for(let i = 1; i <= 30; ++i){
    console.log(sorteoAleatorio(1, 20));
}