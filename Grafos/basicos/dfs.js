// Depth first search // Stack, inicia por el ultimo que entro -> pop()
// Depth first search // Queue, inicia por el primero que entro -> shift()

let grafo = {
    A:['B','C'],
    B:['D'],
    C:[],
    D:['C']
}
function dft(grafo, inicial){ // el grafo que vamos a recorrer, y el nodo inicial 'A'
    const stack = [inicial] // creamos un array que de comienzo va a coentener el nodo inicial ['A']
    while(stack.length > 0){
        const current = stack.pop() // sacamos el ultimo que entro, en este momento 'A'
        console.log(current)
        for(let vecino of grafo[current]){ // Accedemos a los vecinos de 'A'
            stack.push(vecino)  // stack = ['B','C']
        }
    }
}

dft(grafo, 'A')
console.log('----------------------')
function dftRecurcivo(grafo, inicio){
    console.log(inicio)
    for(let vecino of grafo[inicio]){
        dftRecurcivo(grafo, vecino)
    }
}

dftRecurcivo(grafo, 'A')