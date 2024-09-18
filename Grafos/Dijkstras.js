function tsp(graph) {
    const nodes = Object.keys(graph);
    const n = nodes.length;

    // Función para calcular el costo de una ruta
    function calculateCost(path) {
        let cost = 0;
        for (let i = 0; i < path.length - 1; i++) {
            cost += graph[path[i]][path[i + 1]] || Infinity;
        }
        cost += graph[path[path.length - 1]][path[0]] || Infinity; // Regresa al nodo inicial
        return cost;
    }

    // Función recursiva para generar todas las permutaciones
    function permute(array, start, end) {
        if (start === end) {
            // Calcular costo de la permutación actual
            const cost = calculateCost(array);
            if (cost < minCost) {
                minCost = cost;
                bestPath = [...array];
            }
        } else {
            for (let i = start; i <= end; i++) {
                [array[start], array[i]] = [array[i], array[start]]; // Intercambiar
                permute(array, start + 1, end); // Recursión
                [array[start], array[i]] = [array[i], array[start]]; // Volver a intercambiar
            }
        }
    }

    let minCost = Infinity;
    let bestPath = [];

    permute(nodes, 0, n - 1);

    return { tour: bestPath, cost: minCost };
}

// Ejemplo de uso
const graph = {
    A: { B: 1, C: 4, D: 3 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { A: 3, B: 5, C: 1 }
};

const result = tsp(graph);
console.log("Camino más corto:", result.tour);
console.log("Costo total:", result.cost);
