let datos = {
    ubicaciones: [
        { nombre: "A", posX: 20, posY: 20 },
        
        { nombre: "B", posX: 45, posY: 60 },
        
        { nombre: "C", posX: 79, posY: 90 },
        
        { nombre: "D", posX: 56, posY: 79 }
    ],
    conexiones: [
        { ubicacion1: "A", ubicacion2: "B", peso: 20},

        { ubicacion1: "A", ubicacion2: "D", peso: 70}
    ],
    inicio: "D"
}



function trasnformador(datos){
    const grafo = {} // Aqui almacenaremos el grafo vacio
    datos.ubicaciones.forEach((ubicacion) => {
        grafo[ubicacion.nombre] = {} // {"nombre": "A",} inicializamos un objeto vacio para cada nodo, donde luego ingresaremos sus conexiones
    })

    datos.conexiones.forEach((conexion) => {
        const {ubicacion1, ubicacion2, peso} = conexion // Desestructuramos el objeto para extraer las conecciones y su peso
        grafo[ubicacion1][ubicacion2] = peso // A: { B: 20 } esto seria lo que nos retornaria
        grafo[ubicacion2][ubicacion1] = peso // Esto teniendo en cuenta que las conecciones sean no direccionadas
    })

    return grafo
}


let a = trasnformador(datos)
console.log(a)