let modelo = parseInt(
    prompt(
        "Escoger el producto que deseas comprar: 1. Criolipolisis - 2. Hammer Sveltia - 3. BodyGO Performance - 4. Dermolight Laser"
        )
)


let totalCompra = 0
let seguirComprando = true
let decision


class Equipo {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const criolipolisis = new Equipo(1, "Criolipolisis", 600000)

const hammer = new Equipo(2, "Hammer Sveltia", 300000)

const bodyGo = new Equipo(3, "BodyGo Perform", 1500000)

const laser = new Equipo(4, "Dermolight Laser", 3500000)


const precioLista = [criolipolisis, hammer, bodyGo, laser]


while (seguirComprando === true) {

    const productoCliente = precioLista.find(producto => producto.id === modelo)

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