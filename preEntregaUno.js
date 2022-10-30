/*
El proyecto està orientado en el registro de equipos que ingresan al service. Para ello se le pide al cliente tres datos:
1. El Modelo
2. El Nùmero de Serie
3. El año de Antiguedad (este ùltimo para corroborar la garantía)

Si la cantidad de años es mayor a 2 la garantía queda obsoleta. 
Mientras que si el periodo es mejor a dos años, la garantía está vigente

Luego de corroborar los datos, el simulador nos vuelve a pedir registros. En el caso que el usuario tenga un equipo
más para ingresar lo podrá hacer, ingresando nuevos datos. Mientras que si no tiene otro equipo para ingresar, el simulador
se despide con un alert.
*/

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