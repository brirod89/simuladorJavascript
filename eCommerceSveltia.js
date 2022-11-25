class Equipo {
    constructor(id, nombre, precio, año, codigo, comprar) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.año = año
        this.codigo = codigo
        this.comprar = comprar
    }
}

const producto1 = new Equipo(1, "Criolipolisis Niza Doble Serie 2", 600000, "2019", "SVCL0011", true)
const producto2 = new Equipo(2, "Hammer Sveltia 2020", 300000, "2020", "SVOC0003", true)
const producto3 = new Equipo(3, "BodyGo Perform MT", 1500000, "2021", "SVMG0002", true)
const producto4 = new Equipo(4, "Dermolight Laser 1400W", 3500000, "2019", "SVLP0010", true)


const catalogo = [producto1, producto2, producto3, producto4]



//  ****DOM****



const divProducto = document.getElementById("divProducto")

catalogo.forEach(equipo => {
    divProducto.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div id="producto${equipo.id}" class="card-body">
    <h5 class="card-title">${equipo.nombre}</h5>
    <p class="card-text">Precio: S ${equipo.precio}</p>
    <p class="card-text">Año: ${equipo.año}</p>
    <p class="card-text">Código: ${equipo.codigo}</p>
    <button id="botonComprar" class="btn btn-dark"> Comprar </button>
  </div>
</div>    
    `
})


const botonComprar = document.getElementById("botonComprar")

catalogo.forEach ((producto) => {

    botonComprar.onclick = () => {
        alert("¡Gracias por tu compra!")
    }

}

)










/*let modelo = parseInt(
    prompt(
        "Escoger el producto que deseas comprar: 1. Criolipolisis - 2. Hammer Sveltia - 3. BodyGO Performance - 4. Dermolight Laser"
        )
)


let totalCompra = 0
let seguirComprando = true
let decision
*/


/*
while (seguirComprando === true) {

    const productoCliente = catalogo.find(producto => producto.id === modelo)

    if (productoCliente) {
        totalCompra = totalCompra + productoCliente.precio
    } else {
        modelo = parseInt(prompt(
            "Escoger el producto que deseas comprar: 1. Criolipolisis - 2. Hammer Sveltia - 3. BodyGO Performance - 4. Dermolight Laser"
        )
        )

        continue

    }

    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))

    if (decision === 1) {
        producto = parseInt(
            prompt(
                "Escoger el producto que deseas comprar: 1. Criolipolisis - 2. Hammer Sveltia - 3. BodyGO Performance - 4. Dermolight Laser"
            )
        )
    } else {
        seguirComprando = false
    }
}

alert(`El total de tu compra es ${totalCompra}`)

*/