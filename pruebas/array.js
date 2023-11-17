let frutas = ["Banana", "Manzana", "Uva"];
frutas.push("Pera"); // Añadimos un elemento al final de la lista  
// Banana Manzana Uva Pera 
frutas.pop(); // Eliminamos el ultimo elemento de la lista  
// Banana Manzana
frutas.shift(); // Eliminamos el primero elemento de la lista  
// Manzana Uva 
frutas.unshift("Pera"); // Añadimos un elemento al inicio de la lista
// Pera Banana Manzana Uva

//concatenar arrays
const numeros = [1, 2, 3, 4, 5, 6];
const numeros2 = [7, 8, 9, 10];

const nuevosNumeros = numeros.concat(numeros2);
// nuevosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tambien podemos concatenar arrays asi
const nuevosNumeros2 = [...numeros,...numeros2];
// nuevosNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/// recorrer arrays
// Forma sencilla de obtener los elementos de un array
for(let num of numeros) {
    console.log(num);
}
// Nos permite ejecutar una función en cada elemento de un array
numeros.forEach( (num) => {
    num = num * 2;
    console.log(num);
})
//
const emojis = ['✨', '🥑', '😍']
const posicionCorazon = emojis.indexOf('😍')

console.log(posicionCorazon) // -> 2
const tieneCorazon = emojis.includes('😍')

console.log(tieneCorazon) // -> true

const tieneCorazon2 = emojis.some(emoji => emoji === '😍')
console.log(tieneCorazon2) // -> true

const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false

const emojis2 = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

const numbers = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find(number => number < 0)

const numbers2 = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers2.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> 3

const numbers3 = [13, 27, 44, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex2 = number3s.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex2) // -> -1

