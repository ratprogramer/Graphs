function mergeSort(arr){
    if(arr.length <= 1 ){
        return arr
    }

    let mitad = Math.floor(arr.length / 2)
    let izquierdo = arr.slice(0, mitad)
    let derecha = arr.slice(mitad)
    
    return merge(mergeSort(izquierdo), mergeSort(derecha))
}

function merge(izqueda, derecha){
    let ordenado = []
    let i = 0 
    let j = 0

    while(i < izqueda.length && j < derecha.length){
        if(izqueda[i] <  derecha[j]){
            ordenado.push(izqueda[i])
            i++
        }else{
            ordenado.push(derecha[j])
            j++
        }
    }
    return [...ordenado, ...izqueda.slice(i), ...derecha.slice(j)]
}


let a = [61,3,6,8,2,3,7,2455,21]

console.log(mergeSort(a))