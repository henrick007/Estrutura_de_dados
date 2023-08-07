//Ordenando Elementos(pesonalizado)
const friends = [
    { nome: 'João', idade: 30 },
    { nome: 'Ana', idade: 20 },
    { nome: 'Chris', idade: 25 },
]
function comparePessoa(a, b) {
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePessoa))

//Ordenando Elementos - String
let names = ['Ana', 'Ane', 'João', 'João']
console.log(names.sort())
//Saída ["Ana", "João", "Ane", "João"]