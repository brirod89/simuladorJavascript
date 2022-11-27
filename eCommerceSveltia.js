class Equipo {
    constructor(id, nombre, precio, año, codigo) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.año = año
        this.codigo = codigo
    }
}

const producto1 = new Equipo(1, "Criolipolisis Niza Doble Serie 2", 600000, "2019", "SVCL0011")
const producto2 = new Equipo(2, "Hammer Sveltia 2020", 300000, "2020", "SVOC0003")
const producto3 = new Equipo(3, "BodyGo Perform MT", 1500000, "2021", "SVMG0002")
const producto4 = new Equipo(4, "Dermolight Laser 1400W", 3500000, "2019", "SVLP0010")


const catalogo = [
    producto1,
    producto2,
    producto3,
    producto4]


//  ****DOM****


const divProducto = document.getElementById("divProducto")

catalogo.forEach((equipo) => {
    divProducto.innerHTML += `
    <div id="${equipo.id}" class="card" style="width: 18rem;">
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
if(carritoStorage){
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
    alert("El total de su compra es de " + totalCompra)
}

