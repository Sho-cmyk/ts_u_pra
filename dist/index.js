let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
const person = {
    name: 'Jack',
    age: 21
};
console.log(person.age);
const personinfo = {
    name: {
        first: 'Jack',
        family: 'Joe'
    },
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape'];
fruits.push('Strawberry');
const fruit = ['Apple', 'Banana', 'Grape', 1];
const book = ['business', 21, false];
book.push(21);
console.log(book[2]);
console.log(personinfo.name.first);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.jfajfa = 'faijfi';
let banana = 'banana';
banana = anything;
let unionType = 10;
let unionTypes = [21, 'hello'];
unionType = 'hello';
unionType.toUpperCase();
const apple = 'apple';
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
function sub(num1, num2) {
    return num1 - num2;
}
sub(1, 3);
function subs(num1, num2) {
    return num1 - num2;
}
function sayHello() {
    console.log('Hello!');
    return;
}
console.log(sayHello);
// let tmp: undefined;
console.log(sayHello());
let tmp;
let tampNull = undefined;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = number => number * 2;
const doubleNumbers = (number) => number * 2;
const doubleNumbe = (number) => number = number = number * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unKnownInput;
let anyInput;
let text;
unKnownInput = 'hello';
unKnownInput = 21;
unKnownInput = true;
// text = unKnownInput;
if (typeof unKnownInput === 'string') {
    text = unKnownInput;
}
function error(message) {
    throw new Error(message);
}
