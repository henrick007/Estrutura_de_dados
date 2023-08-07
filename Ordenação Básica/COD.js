//Laço for...of
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd');
}

//Ordenando Elementos
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
numbers.reverse()
numbers.sort()
console.log(numbers)
//result -> [1,10,11,12,13,14,15,2,3,4,5,6,7,8,9]

//Ordenando Elementos(2)
numbers.sort((a, b) => a - b)
console.log(numbers)
//result ->[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    //a deve ser igual a b
    return 0;
}
numbers.sort(compare);
//result ->[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

