//Método Reduce
const vendedores = [
    { nome: 'João', totalVenda: 4500 },
    { nome: 'Maria', totalVenda: 10000 },
    { nome: 'Pedro', totalVenda: 7500 },
];

let acumulador = 0

for (let i = 0; i < vendedores.length; i++) {
    acumulador = acumulador + vendedores[i].totalVenda
}

console.log(acumulador)

const totalVendedores = vendedores.reduce((acc, vendedor) => acc + vendedor.totalvenda, 0);
console.log(totalVendedores);


//Pesquisa(IndexOf)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.indexOf(10))
//saída = 9
console.log(numbers.indexOf(100))
//saída = -1


//Pesquisa(LastIndexOf)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,];
numbers.push(10)
console.log(numbers)
//saída = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 10]
console.log(numbers.lastIndexOf(10))
//saída = 15
console.log(numbers.lastIndexOf(100))
//saída = -1


//Pesquesa(Find)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multipleOf13(element, index, array) {
    return (element % 13 == 0);
}
console.log(numbers.find(multipleOf13));


//Pesquisa(FindIndex)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multipleOf13(element, index, array) {
    return (element % 13 == 0);
}
console.log(numbers.findIndex(multpleOf13));


//Pesquisa(FindI)
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);