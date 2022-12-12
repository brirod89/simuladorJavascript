const divProducto = document.getElementById("divProducto")

const consultarProductos = async () => {
    const response = await fetch('./json/productos.json')
    const productos = await response.json()
    return productos
}

consultarProductos().then(productos => {
    productos.forEach((equipo) => {
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

        const productoSeleccionado = productos.find(
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