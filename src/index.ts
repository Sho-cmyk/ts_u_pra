let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person:{
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}
console.log(person.age);

const personinfo = {
    name: {
        first:'Jack',
        family: 'Joe'
},
    age: 21
}

const fruits: string[] = ['Apple','Banana','Grape']
fruits.push('Strawberry');

const fruit = ['Apple','Banana','Grape', 1]

const book: [string, number, boolean] = ['business', 21, false]
book.push(21)
console.log(book[2]);

console.log(personinfo.name.first);

enum CoffeeSize  {
    SHORT= 'SHORT',
    TALL= 'TALL',
    GRANDE= 'GRANDE',
    VENTI= 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.jfajfa = 'faijfi';
let banana = 'banana';
banana = anything;

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello']
unionType = 'hello'
unionType.toUpperCase()

type　ClothSize = 'small' | 'medium' | 'large'
const apple = 'apple';
let clothSize: ClothSize = 'large';
const cloth : {
    color: string;
    size: ClothSize
} = {
    color: 'white',
    size: 'medium'
}

function add(num1: number, num2: number): number {
    return num1 + num2
}
add(2,3);

function sub(num1: number, num2: number) {
    return num1 - num2
}
sub(1,3);

function subs(num1, num2) {
    return num1 - num2
}

function sayHello(): void {
    console.log('Hello!');
    return;
}

console.log(sayHello);
// let tmp: undefined;

console.log(sayHello());
let tmp: undefined ;
let tampNull: null = undefined;

const anotherAdd: (n1: number, n2:number) => number = function (num1: number, num2: number): number {
    return num1 + num2
};
const doubleNumber = number => number *2;
const doubleNumbers = (number: number): number => number *2;
const doubleNumbe = (number: number) => number=number =number *2;

function doubleAndHandle(num: number, cb:(num: number) => number): void {
    const doubleNum = cb(num*2);
    console.log(num*2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum
});

let unKnownInput: unknown;
let anyInput: any;
let text: string;
unKnownInput = 'hello';
unKnownInput = 21;
unKnownInput = true;
// text = unKnownInput;
if (typeof unKnownInput === 'string') {
    text = unKnownInput;
}

function error(message: string):never {
    throw new Error(message);
}
