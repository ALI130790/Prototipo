
/* SALUDO */
let nombre = "Alicia";
let apellido = "Alderete";
let saludo = "Hola";
console.log(`${saludo} ${nombre} ${apellido}, Bienvenida!`);

/*USUARIO*/
let usuario = ("Ingrese el usuario");
while(usuario != "Ingrese el usuario"){
    switch (usuario) {
        case "Alicia":
            alert("Hola Alicia");
            break;
    
        default:
            alert("Usuario incorrecto")
            break;
    }
usuario = ("Ingrese el usuario")
}
console.log("Siguiente paso")

/* CONTRASEÑA */
let contrasena = "alicia720";
if (contrasena === "alicia720") {
    console.log ("Contraseña correcta");
} else{ 
    console.log("Usuario o contraseña incorrecto")
}

/*EDAD*/
let edad = 18;
if(edad >= 18) {
    console.log("Puedes ingresar a nuestro sitio");
} else{
    console.log("No estas autorizado a realizar compras");
}

/*NUMERO PARA SORTEO*/
for (let numero = 1; numero <= 20; turno++) {
    let nombre = prompt("Ingrese su nombre para participar por una orden de compra")

    alert(`Numero: #${numero} Nombre: ${nombre}`);
}
alert("Numeros agotados,sorteamos por nuesto Instagram el 10/10/23")
