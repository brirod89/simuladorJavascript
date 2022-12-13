const divProducto = document.getElementById("divProducto")
const divDolar = document.getElementById("divDolar")

fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({ solidario, ccl, mep, ccb, blue }) => {
        divDolar.innerHTML = `
            
            <h5> Cotizaciones del dolar </h5>
            <p> Solidario:$ ${solidario} </p>
            <p> Blue:$ ${blue} </p>
            <p> CCL:$ ${ccl} </p>
            <p> Mep:$ ${mep} </p>
            <p> CCB:$ ${ccb} </p>
            
            `
    })


class Equipo {
    constructor(id, nombre, precio, año, codigo, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.año = año
        this.codigo = codigo
        this.img = img
    }
}

const producto1 = new Equipo(1, "Criolipolisis Niza Doble Serie 2", 600000, "2019", "SVCL0011", "svcl0011.jpg")
const producto2 = new Equipo(2, "Hammer SL Dwin", 350000, "2021", "SVOC0003", "svoc0003.jpg")
const producto3 = new Equipo(3, "Crio-Fraxis Plus", 350000, "2020", "SVRF0016", "svrf0016.jpg")
const producto4 = new Equipo(4, "Liposhock", 1500000, "2019", "SVCO0002", "svco0002.jpg")
const producto5 = new Equipo(5, "Velakorper", 3500000, "2021", "SVCO0004", "svco0004.jpg")
const producto6 = new Equipo(6, "BodyGo Perform MS 2G MT", 3500000, "2022", "SVMG0005", "svmg0005.jpg")
const producto7 = new Equipo(7, "Roll Active", 2500000, "2022", "SVRF0018", "svrf0018.jpg")
const producto8 = new Equipo(8, "Dermolight Laser 1400W", 4500000, "2019", "SVLP0010", "svlp0010.jpg")


const catalogo = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,]


catalogo.forEach((equipo) => {
    divProducto.innerHTML += `
        <div id="${equipo.id}" class="card" style="width: 18rem;">
        <img src="./img/${equipo.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${equipo.nombre}</h5>
        <p class="card-text">Precio: S ${equipo.precio}</p>
        <p class="card-text">Año: ${equipo.año}</p>
        <p class="card-text">Código: ${equipo.codigo}</p>
        <button id="${equipo.id}" class="btn btn-primary"> AGREGAR </button>
      </div>
    </div>    
        `
})


let carrito
const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
if (carritoStorage) {
    carrito = carritoStorage
} else {
    carrito = []
}

console.log(carrito)


const botonesAgregar = document.querySelectorAll('.btn-primary')

botonesAgregar.forEach((boton) => {
    boton.onclick = () => {

        const productoSeleccionado = catalogo.find(
            (prod) => prod.id === parseInt(boton.id)
        )

        const productoCarrito = { ...productoSeleccionado, cantidad: 1 }

        const indexCarrito = carrito.findIndex(
            (prod) => prod.id === productoCarrito.id)

        if (indexCarrito === -1) {
            carrito.push(productoCarrito)
        } else {
            carrito[indexCarrito].cantidad++
        }

        localStorage.setItem('carrito', JSON.stringify(carrito))
        console.log(carrito)

    }
})

const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
    const valores = carrito.map((prod) => prod.precio * prod.cantidad)
    let totalCompra = 0
    valores.forEach((valor) => (
        totalCompra += valor
    ))
    console.log(totalCompra)
    console.log(valores)

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "El total de su compra es de " + totalCompra,
        showConfirmButton: false,
        timer: 1500
    })
}
