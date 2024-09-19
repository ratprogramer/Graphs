function permutacinador(arr){
    const result = []
    function permutador(subArray, permutaciones = [] ){
        if(subArray.length == 0){
            result.push(permutaciones)
            return
        }
        for(let i = 0 ; i < subArray.length ; i++){
            const actual = subArray.slice()
            const siguiente = actual.splice(i,1)
            permutador(actual.slice(), permutaciones.concat(siguiente))
        }
    }
    permutador(arr)
    return result
}


function calculadorCosto(permutacion, matrizPesos){
    let costo = 0
    for(let i = 0 ; i < permutacion.length -1 ; i++){
        costo += matrizPesos[permutacion[i]][permutacion[i + 1]]
        
    }
    costo += matrizPesos[permutacion[permutacion.length - 1]][permutacion[0]] // desde la ultima posicion volvemos a la primera
    return costo
}


function caminoOptimo(matrizPesos){
    const numNodos = matrizPesos.length
    const nodos = Array.from({length: numNodos}, (_,i) => i) 
    // si el array tiene 3 nodos, se vera algo asi 
    // nodos = [ 0, 1, 2 ]
    const permutaciones = permutacinador(nodos)
    let costMin = Infinity
    let mejorCamino = null
    for(const permutacion of permutaciones){
        const costo = calculadorCosto(permutacion, matrizPesos)
        if(costo < costMin){
            costMin = costo
            mejorCamino = permutacion
        }
    }
    mejorCamino.push(mejorCamino[0])
    console.log("Mejor ruta:", mejorCamino )
    console.log("Costo:", costMin);

    return { mejorCamino, costMin}
}


const distance = [
    [0, 7, Infinity],
    [7, 0, 9],
    [1, 9, 0]
]

caminoOptimo(distance)





