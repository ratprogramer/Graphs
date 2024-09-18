function bubbleSort(arr){
    let n = arr.length // guardamos el largo del array para ser cuantas veces ejecutamos el bucle
    let desordenado  // con esta variable manejaremos un do while que parara de ejecutarse cuando no se hagan cambios
    do{
        desordenado = false // lo seteamos como falso, asi si no entra al if, el do while se rompe porque no hay mas por ordenar
        
        for(let i = 0 ; i < n ; i++){
            if(arr[i] > arr[i + 1]){  // si el primero de la pareja es mayor que el segundo
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] // se intercambian entre si
                desordenado = true // y cambiamos el estado a true, porque en cada iteracion se organiza el mayor
                // si este array entra [5,4,3,2,1]
                // en la primera iteracion queda asi [4,3,2,1,5]
                // ya organizamos el ultimo, falta el resto
            }
        }
        n-- // como en la posicion final ya esta el mayor, restamos uno cada ves para hace ciclos mas cortos
    }while(desordenado)
    console.log(arr)
}

let a = [6,1,4,8,2,4,9,1,10]
bubbleSort(a)