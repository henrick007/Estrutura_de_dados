//Exemplo 01
export default class Stack {
    construtor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}
//o primeiro q entra ultimo q sai (pilha)
//entra primeiro e sai primeiro (fila)

//Exemplo 02 adiciona na ultima casa 
push(element) {
    this.items[this.count] = element;
    this.count++;
}

//Exemplo 03 
pop() {
    if (this.isEmpty()) {
        return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
}

//Exemplo 04
peek() {
    if (this.isEmpty()) {
        return undefined;
    }
    return this.items[this.count - 1];
}

//Exemplo 05
size() {
    return this.count;
}

//Exemplo 06
isEmpty() {
    return this.count === 0;
}

//Exemplo 07
clear() {
    /*while (!this.isEmpty()) {
        this.pop();
    }*/
    this.items = {};
    this.count = 0;
}

//Exemplo 08
toString() {
    if (this.isEmpty()) {
        return '';
    }
    let onjString = '${this.items[0]}';
    for (let i = 1; i < this.count; i++) {
        objString = '${objString}, ${this.items[i]}';
    }
    return objString;
}

//Exemplo 09 nova instancia
const stack = new StackArray()
stack.push(8)
stack.push(5)