const distance = [
    [0, 10, Infinity, Infinity, Infinity, 6, Infinity, 3, Infinity, Infinity],
    [7, 0, 9, Infinity, Infinity, Infinity, Infinity, 2, Infinity, Infinity],
    [Infinity, 9, 0, 5, Infinity, Infinity, Infinity, Infinity, 8, Infinity],
    [Infinity, Infinity, 5, 0, 2, Infinity, Infinity, Infinity, Infinity, 7],
    [Infinity, Infinity, Infinity, 2, 0, 4, Infinity, Infinity, Infinity, Infinity],
    [6, Infinity, Infinity, Infinity, 4, 0, 2, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, 2, 0, 1, Infinity, Infinity],
    [3, 2, Infinity, Infinity, Infinity, Infinity, 1, 0, Infinity, 5],
    [Infinity, Infinity, 8, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 3],
    [Infinity, Infinity, Infinity, 7, Infinity, Infinity, Infinity, 5, 3, 0]
];


function getPermutations(arr) {
    const result = [];

    function permute(subArr, perm = []) {
        if (subArr.length === 0) {
            result.push(perm);
            return;
        }

        for (let i = 0; i < subArr.length; i++) {
            const current = subArr.slice();
            const next = current.splice(i, 1);
            permute(current.slice(), perm.concat(next));
        }
    }

    permute(arr);
    return result;
}

function calculateTourCost(tour, distanceMatrix) {
    let cost = 0;
    for (let i = 0; i < tour.length - 1; i++) {
        cost += distanceMatrix[tour[i]][tour[i + 1]];
    }
    cost += distanceMatrix[tour[tour.length - 1]][tour[0]]; // Return to the start
    return cost;
}

function findOptimalTour(distanceMatrix) {
    const numCities = distanceMatrix.length;
    const cities = Array.from({ length: numCities }, (_, i) => i);
    const permutations = getPermutations(cities);
    
    let minCost = Infinity;
    let bestTour = null;

    for (const tour of permutations) {
        const cost = calculateTourCost(tour, distanceMatrix);
        if (cost < minCost) {
            minCost = cost;
            bestTour = tour;
        }
    }

    return { bestTour, minCost };
}

function printOptimalTourResult(distanceMatrix) {
    const { bestTour, minCost } = findOptimalTour(distanceMatrix);
    const tourString = bestTour.join('->') + '->' + bestTour[0];
    console.log(`Recorrido TSP:\n${tourString}`);
    console.log(`Costo mínimo: ${minCost}`);
}

printOptimalTourResult(distance);
