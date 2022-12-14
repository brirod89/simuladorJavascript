const divProducto = document.getElementById("divProducto")

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

const catalogo = [];

const extraeProductos = async () => {
    const datos = await fetch ('./json/productos.json');
    const productosExtraidos = await datos.json();
    return productosExtraidos;
}


let elemento;

const crearEventosCatalogo = () => {
    /* Selecting DOM nodelist */
    const buttons = document.querySelectorAll('button');
    
    /* Callback function */
    const alertButton = (evento) => {
        console.log('Añadiendo a Carrito', evento);
        elemento = evento.target.id;
        elemento=elemento.slice(5);
        elemento=parseInt(elemento);
        console.log(elemento);
        catalogo.forEach( producto => {
            if(parseInt(producto.id)===elemento)
            {
                carrito.push(producto);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto agregado al carrito',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        })
        console.log("quiero ver el carrito", carrito);
    }
     
    /* Event listeners */
    for (let button of buttons) {
          button.addEventListener('click', alertButton, false);         
    }
    
}


extraeProductos().then( paqueteDatos => {
    console.log(paqueteDatos);
    paqueteDatos.forEach( i => {
        catalogo.push(i);
    })
    llamarCatalogo();
    crearEventosCatalogo();
}
)

console.log("este es el ",catalogo);

const botones = []; //creo un array de botones

const llamarCatalogo = () => {
    catalogo.forEach((equipo) => {
        divProducto.innerHTML += `
            <div id="id${equipo.id}" class="card" style="width: 18rem;">
            <img src="./img/${equipo.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${equipo.nombre}</h5>
            <p class="card-text">Precio: S ${equipo.precio}</p>
            <p class="card-text">Año: ${equipo.año}</p>
            <p class="card-text">Código: ${equipo.codigo}</p>
            <button id="boton${equipo.id}" class="btn btn-primary"> AGREGAR </button>
          </div>
        </div>    
            `

    })
}

const carrito = [];
const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
if (carritoStorage) {
    carritoStorage.forEach( elementoCarrito =>
        carrito.push(elementoCarrito)
    )
}


const botonBorrar = document.querySelector('#borrar')
botonBorrar.onclick = () => {
    if (carrito.length !== 0) {
        const longFor = carrito.length;
        for (let i = 0; i < longFor; i++) {
            carrito.pop();
        }
    }

    Swal.fire({
        title: 'Carrito borado',
        icon: 'info',
        html:
          'Vuelva a agregar productos a su carrito y confirme con FINALIZAR COMPRA',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> OK',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i> No, gracias!',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}

console.log("mostrando carrito", carrito)

const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
    let totalCompra = 0
    carrito.forEach((valor) => (
        totalCompra += valor.precio
    ))
    console.log(totalCompra)

    Swal.fire({
        icon: 'success',
        title: 'El valor total de su compra es',
        text: '$ '+totalCompra,
        footer: 'Gracias por elegir Sveltia'
      })
}