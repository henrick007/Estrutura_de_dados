//Exemplo 01
export default class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}

//Exemplo 02
enqueue(element) {
    this.items[this.count] = element;
    this.count++;
}

//Exemplo 03
dequeue() {
    if (this.isEmpty()) {
        return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
}

//Exemplo 04
peek() {
    if (this.isEmpty()) {
        return undefined;
    }
    return this.items[this.lowestCount];
}

//Exemplo 05
isEmpty() {
    return this.size() === 0;
}

clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
}

size() {
    return this.count - this.lowestCount;
}

//Exemplo 06
toString() {
    if (this.isEmpty()) {
        return '';
    }
    let objString = '${this.items[this.lowestCount]}';
    for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = '${objString}, ${this.items[i]}';
    }
    return objString;
}

//Exemplo 07
const filaImpressao = new Queue();

filaImpressao.enqueue("Documento01");
filaImpressao.enqueue("Documento01");
filaImpressao.enqueue("Documento01");

console.log("Tamanho da Fila:" + filaImpressao.size());

console.log("Proximo Documento a ser Impresso: " + filaImpressao.dequeue());
console.log("Proximo Documento a ser Impresso: " + filaImpressao.dequeue());
console.log("Proximo Documento a ser Impresso: " + filaImpressao.dequeue());

console.log("Tamanho da Fila:" + filaImpressao.size());

filaImpressao.clear()