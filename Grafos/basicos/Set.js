const set = new Set()

set.add('Hola')
set.add('Hola')
set.add('Hola')
set.add('Hola')
set.add('Adios')

if(set.has('Hola')){
    //  true
}

if(set.has('Antonio')){
    //  false
}

console.log(set) // Set(2) { 'Hola', 'Adios' }
console.log(set.size) // 2
console.log(set.entries()) // devuelve pares de cada uno de los ingresos [Set Entries] { [ 'Hola', 'Hola' ], [ 'Adios', 'Adios' ] }

set.forEach( a => {  // los sets son iterables con foreach
    console.log(a);
    
})