
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

// let stack = new Stack();
// console.log(stack.isEmpty());

// stack.push(5);
// stack.push(8);


// stack.print();
// console.log(stack.pop());
// stack.print();


// DECIMAL PARA BINÁRIO

function divideBy2(decNumber){

    var remStack = new Stack();
    var rem;
    var binaryString = '';

    while(decNumber > 0) {

        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while(!remStack.isEmpty()){
        binaryString+= remStack.pop().toString();
    }

    return binaryString;
}

// console.log('teste');
// console.log(divideBy2(233));

// CONVERSOR DE BASE

function baseConverter(decNumber, base) {

    var remStack = new Stack();
    var rem;
    var baseString = '';
    var digits = '0123456789ABCDEF';

    while(decNumber > 0) {

        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while(!remStack.isEmpty()){
        baseString+= digits[remStack.pop()];
    }

    return baseString;

}

// console.log(baseConverter(10,2));
