class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age}.`);
    }
}
class Teacher extends Person {
}
const teacher = new Teacher('Quil', 38);
teacher.greeting();
