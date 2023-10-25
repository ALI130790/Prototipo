
/* BIENVENIDO A NUESTRO SITIO */
let nombre = "Alicia";
let apellido = "Alderete";
let saludo = "Hola";
console.log(`${saludo} ${nombre} ${apellido}, Bienvenida!`);

/*CREA TU USUARIO*/
let usuario, contrasena;
do {
    usuario = prompt("Ingrese un nombre de usuario:");
    contrasena = prompt("Ingrese una contraseña:");
} while (!usuario || !contrasena);

alert("Usuario creado: " + usuario);
alert("Contraseña creada: " + contrasena);

/*CREA TU CONTRASEÑA */
let contrasenia = "alicia720";
if (contrasenia === "alicia720") {
    console.log("Contraseña correcta");
} else {
    console.log("Usuario o contraseña incorrecto")
}

/*INDICA TU EDAD*/
let edad = 18;
if (edad >= 18) {
    console.log("Puedes ingresar a nuestro sitio");
} else {
    console.log("No estas autorizado a realizar compras");
}

/*TURNO PARA VISITAR PERSONALMENTE NUESTRO SHOWROOM*/
for (let turno = 1; turno <= 10; turno++) {
    let nombre = prompt("Ingrese su nombre para nuestros sorteos semanales");
    alert(`Turno #${turno} Nombre: ${nombre}`);
}

alert("Turnos agotados, proxima semana abrimos cupos nuevamente")

/*SORTEO POR UNA ORDEN DE COMPRA*/
function sorteoAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
for (let i = 1; i <= 30; ++i) {
    console.log(sorteoAleatorio(1, 20));
}

/*PRENDAS DE STOCK*/
//BUSQUEDA DE PRENDAS, PRECIO Y STOCK:
class Prendas {
    constructor(nombre, stock, precio) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
    stock() {
        if (this.cantidad === 0) {
            console.log("Articulo sin stock");
        }
        else {
            console.log("Producto en stock");
            this.cantidad -= 1;
        }
    }
}
const prendas = []

prendas.push(new Prendas("Remeras", 15, 3500));
prendas.push(new Prendas("Camisas", 30, 5500));
prendas.push(new Prendas("Vestidos", 10, 9500));
prendas.push(new Prendas("Pantalones", 10, 8900));
prendas.push(new Prendas("Shorts", 15, 4500));
prendas.push(new Prendas("Conjuntos Deportivos", 20, 9500));

let nombre = prompt("BIENVENIDOS QUE BUSCAS?");
let prenda;

for (const item of prendas) {
    if (item.nombre.includes(nombre)) {
        prenda = item;
    }
}
if (prenda) {
    alert(`
        Nombre: ${prenda.nombre}
        Stock: ${prenda.stock}
        Precio: ${prenda.precio}
    `);
} else {
    alert("Producto sin stock");
}

/*FILTRO PARA BUSCAR OFERTAS*/
//muestra que prenda esta de oferta
const productos = [
    { id: 1, articulo: "Remeras Basicas", precio: 3500 },
    { id: 2, articulo: "Camisa de jeans", precio: 5500 },
    { id: 3, articulo: "Blusas con un hombro", precio: 3500 },
    { id: 4, articulo: "Pantalon de gabardina", precio: 8900 },
    { id: 5, articulo: "Short de fibrana", precio: 4500 },
    { id: 6, articulo: "Conjuntos Deportivos", precio: 9500 },
];

let articulo = prompt("TAMBIEN TENEMOS DESCUENTOS EN LA PRENDA QUE BUSQUES:");
let filtrados = productos.filter((item) => item.articulo === articulo);

if (filtrados.length === 0) {
    alert("producto no disponible");
} else {
    filtrados.forEach((item) => {
        alert(`
        Id: ${item.id}
        Nombre: ${item.articulo}
        Precio: ${item.precio}
    `);
    });
}

/*SIMULACION DE COMPRA Y APLICACION DE DESCUENTO*/
//muestra el monto de la venta con el descuento aplicado
const productosSeleccionados = [
    { id: 1, nombre: "Remera Jaspeada Color Gris", precio: 5500 },
    { id: 2, nombre: "Calza Negra Talle:3", precio: 6000 },
    { id: 3, nombre: "Sudadera", precio: 3500 },
    { id: 4, nombre: "Pantalon", precio: 8900 },
];

const descuentos = productosSeleccionados.map(item => {
    return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio - item.precio * 0.21,
    }
});
console.log(descuentos);

/*TOTAL DE COMPRA CON DESCUENTO APLICADO*/
//total
const numeros = [4345, 4740, 2765, 7031];

const total = numeros.reduce((acum, item) => acum + item, 0);
console.log(total);

/*COMPRA Y UNIDADES DISPONIBLES*/
//muestra descripcion de una prenda
class Producto {
    constructor(nombre, precio, imagen, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
    vender() {
        if (this.cantidad === 0) {
            console.log("No hay más disponibilidad de este producto");
        }
        else {
            console.log("Producto vendido");
            this.cantidad -= 1;
        }
    }
}

const producto1 = new Producto(
    "conjunto Barbie: Top y calza fucsia",
    10500,
    "file:///C:/Users/alici/OneDrive/Escritorio/TIENDA-ALBA/paginas/deportivo.html",
    5
);
console.log(producto1);
producto1.vender();
console.log(producto1);

const producto2 = new Producto(
    "conjunto Marina: Sudadera y calza Azul",
    12500,
    "file:///C:/Users/alici/OneDrive/Escritorio/TIENDA-ALBA/paginas/deportivo.html",
    4
);
console.log(producto2);
producto1.vender();
console.log(producto2);


