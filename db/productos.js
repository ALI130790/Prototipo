
const productos = [
    {
        id: 1,
        articulo: "Remeras Blanca con aplique de lentejuelas",
        precio: 5500,
        imagen: "https://www.instagram.com/p/Cw6C8GKu7Nt/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==/TIENDA-ALBA/multimedia/Deportivo%20(1).jpg",
        categoria:"Remeras",
    },
    {
        id: 2,
        articulo: "Calza Azul",
        precio: 7500,
        imagen:"https://www.instagram.com/p/CvldJnhOqHY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==/Escritorio/TIENDA-ALBA/multimedia/Deportivo%20(2).jpg",
        categoria:"Calzas",
    },
    {
        id: 3,
        articulo: "Vestido largo con estampa",
        precio: 3500,
        imagen:"https://www.instagram.com/p/CywvHBcuW8j/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==/multimedia/Deportivo%20(3).jpg",
        categoria:"Vestido",
    },
    {
        id: 4,
        articulo: "Calza con Estampado",
        precio: 8900,
        imagen:"https://www.instagram.com/p/CymSIVWPf8e/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==MzRlODBiNWFlZA==",
        categoria:"Calzas",
    },
    {
        id: 5,
        articulo: "Body blanco",
        precio: 4500,
        imagen:"https://www.instagram.com/p/CxDWrRcOnzv/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        categoria:"Remeras",
    },
    {
        id: 6,
        articulo: "Buzo a cuadros",
        precio: 19500,
        imagen:"https://www.instagram.com/p/CvBgcWQtKCp/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        categoria:"Sweter",
    },
];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));