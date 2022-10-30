function registro(){
    let equipo = prompt("Ingrese por favor el modelo de su equipo Sveltia")
    let numeroSerie = parseInt(prompt("Ingrese el nùmero de serie de su equipo, ubicado en la etiqueta que se encuentra adherida (8 dìgitos)"))
    let años = parseInt(prompt("ingrese la cantidad de años desde que compro el equipo"))
    
    
    if (años < 2) {
        alert(`El equipo ${equipo} cuyo numero de serie es ${numeroSerie} se encuentra en garantia`)
    } else {
        alert(`El equipo ${equipo} cuyo numero de serie es ${numeroSerie} no se encuentra en garantia`)
    }
    }
    
    let seguirCargando = parseInt(prompt("Bienvenido/a ingrese equipo 1.Si - 2.No"))
    
    while (seguirCargando === 1) {
    
        registro()
    
        seguirCargando = parseInt (prompt("¿Quiere añadir un nuevo equipo Sveltia? 1.Si - 2.No"))
        
        if (seguirCargando === 2){
            alert("Recuerde hacerle un service cada 6 meses")
        } else{
            seguirCargando === 1
        }
    }
    alert("Gracias por elegirnos")