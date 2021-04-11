class Person {
    
    constructor(public name: string, protected age: number) {
    }
    incrementAge() {
        this.age += 1;
    }
    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age}.`);
    }
}

class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age}. I teach ${this.subject}.`);
    }
}
const teacher = new Teacher('Quil', 38, 'Math');
teacher.greeting();
