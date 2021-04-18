// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
    (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2
}

type Nameable = {
    name?: string;
    nickName?: string;
}
const nameable: Nameable = {
    name: 'Quil'
}
interface Human extends Nameable {
    name?: string;
    age: number;
    greeting(message: string): void;
}

class Developer implements Human {
    constructor(public age: number, public experiments: number, public name?: string,) {}
    greeting(message: string = 'hello') {
        console.log(message);
    }
}

const tmpDeveloper = {
    name: 'Quil',
    age: 38,
    experience: 3,
    greeting(message: string) {
        console.log(message);
    }
}

const user: Human = tmpDeveloper;
let developer = new Developer(38, 3);
if (user.name) {
    user.name.toUpperCase()
}
console.log(user.name);
