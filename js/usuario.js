//USUARIO

const btnRegistrate = document.getElementById("btn__register")
const formRegister = document.getElementById("user__register")
const formLogin = document.getElementById("user__login")
const btnLogearse = document.getElementById("btn__logearse")

let usuarios = JSON.parse(localStorage.getItem("usuarios"))

class newUser {
    constructor(user, pass) {
        this.id = usuarios.length + 1
        this.user = user
        this.pass = pass
        this.admin = false
    }
}

btnLogearse.addEventListener("click", function(e) {
    e.preventDefault()

    const user = formLogin.children[0].children[1].value
    const pass = formLogin.children[1].children[1].value

    validarYLogear(user, pass);
})

const validarYLogear = (user, pass) => {
    const userExiste = usuarios.find((usuario) => usuario?.user === user)

    if (userExiste === undefined || userExiste.pass !== pass) {
        alert("Error al ingresar Usuario o Contraseña")
    } else {
        alert(`Bienvenido a nuestro sitio ${user}`)

        let usuario = {
            user: userExiste.user,
            pass: userExiste.pass,
            admin: userExiste.admin
        }
        sessionStorage.setItem("usuario", JSON.stringify(usuario))
        location.href = "../index.html"
        
    }
}

btnRegistrate.addEventListener("click", (e) => {
    e.preventDefault()

    const user = formRegister.children[0].children[1].value
    const pass = formRegister.children[1].children[1].value

    const nuevoUsuario = new newUser(user, pass)

    validarYRegistrar(nuevoUsuario)
})

const validarYRegistrar = (nuevoUsuario) => {
    const userNuevo = usuarios.find((usuario) => usuario?.user === nuevoUsuario.user)

    if (userNuevo === undefined) {
        usuarios.push(nuevoUsuario)  // Cambiado de userNuevo a nuevoUsuario
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario))  // Cambiado de usuario a nuevoUsuario
        alert(`Gracias ${nuevoUsuario.user} por registrarse... Usted será redirigido a la página principal`)
        location.href = "../index.html"
        
    } else {
        alert(`Este usuario ya está registrado`)

        sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario))  // Cambiado de usuario a nuevoUsuario
        location.href = "../inicio.html"
    }
}