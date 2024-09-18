function rutaLaberinto(laberinto, inicio, salida){
    const visitados = new Set()
    const camino = []
    
    function dfs(posicion){
        if(posicion == salida){
            camino.push(posicion)
            return true
        }

        visitados.add(posicion)
        camino.push(posicion)

        for(let vecino of laberinto[posicion]){
            if(!visitados.has(vecino)){
                if(dfs(vecino)){
                    return true
                }
            }
        }
        camino.pop()
        return false
    }
    dfs(inicio)
    return camino
}

const laberintoComplejo = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B', 'H'],
    'E': ['B', 'I', 'J'],
    'F': ['C', 'K'],
    'G': ['C', 'L'],
    'H': ['D', 'M'],
    'I': ['E', 'N'],
    'J': ['E', 'O', 'P'],
    'K': ['F'],
    'L': ['G', 'Q'],
    'M': ['H', 'R'],
    'N': ['I', 'S'],
    'O': ['J', 'T'],
    'P': ['J'],
    'Q': ['L'],
    'R': ['M', 'U'],
    'S': ['N'],
    'T': ['O', 'V'],  // Salida
    'U': ['R'],
    'V': ['T']
};

let a = rutaLaberinto(laberintoComplejo, 'A', 'T')
console.log(a);
 