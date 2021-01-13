
class Stack {
    constructor() {
        this.items = [];
    }

    push = function (element) {
        this.items.push(element);
    };

    pop = function () {
        return this.items.pop();
    };

    peek = function () {
        return this.items[this.items.length - 1];
    };

    isEmpty = function () {
        return this.items.length == 0;
    };

    size = function () {
        return this.items.length;
    };

    clear = function () {
        this.items = [];
    };

    print = function () {
        console.log(this.items.toString());
    };
}

let stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);


stack.print();
console.log(stack.pop());
stack.print();
