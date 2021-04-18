function copy<T extends { name: string}, U extends keyof T>(value: T, key: U):T {
    //extendsで型の中身を指定する
    //Uという型はTのkeyのunion型になる
    value[key]
    let user: T;
    return value;
}
console.log(copy({ name: 'Quil', age: 38}, 'age'));

class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
        //第一引数が何番目か、何個削るか
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
//生成する時に型を指定する
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Apple');
console.log(stringLightDatabase.get());
// interface TmpDatabase<T> {
//     id: number;
//     data: T[];
// }
// const tmpDatabase: TmpDatabase<number> = {
//     id: 3,
//     data: [32]
// }
//typeも使える
// type TmpDatabase<T> = {
//     id: number;
//     data: T[];
// }
// const tmpDatabase: TmpDatabase<number> = {
//     id: 3,
//     data: [32]
// }
interface Todo {
    title: string;
    text: string;
}
type Todoable = Partial<Todo>
//Partialは型の中のプロパティをoptionalにする
// type Todoable = {
//     title?: string;
//     text?: string;
// }
type ReadTodo = Readonly<Todo>
//取った引数の型を全部readonlyにする
//type ReadTodo = {
//     readonly title: string;
//     readonly text: string;
// }
const fetchData: Promise<string> = new Promise(resolve => {
    //型パラメータとしてstringをとる
    setTimeout(() => {
        resolve('hello');
    }, 3000);
})
fetchData.then(data => {
    data.toUpperCase();
})
// const vegetables: string[] = ['Tomato', 'Broccoli', 'Asparagus'];
//上記のように配列の型を指定できるが、TSでは下記のようにできる
const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

interface ResponseData<T extends { message: string } = any> {
    //= anyをつけるとdefaultになる
    //defaultの型パラメータを書くことができる
    data: T;
    status: number;
}
let tmp2: ResponseData;
// type MappedTypes = {
//     [P in 'tomato' | 'pumpkin']: string
// }
// type MappedTypes = {
//     tomato: string;
//     pumpkin: string;
// }

interface Vegetables {
    readonly tomato: string;
    pumpkin: string;
}
type MappedTypes = {
    -readonly [P in keyof Vegetables]?: string
}
//type MappedTypes = {
//     tomato?: string;
//     pumpkin?: string;
// }

type ConditionalTypes = 'tomato' extends string ? number : boolean
//'tomato'がstring型に代入できるならnumber、そうでなければboolean
//上記の場合
//type ConditionalTypes = number
type ConditionalTypesInfer = { tomato: 'tomato' } extends { tomato: infer R} ? R : boolean;
//infer Rはanyみたいなもの
//{ tomato: 'tomato' }は{ tomato: infer R}に代入できるかどうかの条件分岐
//今回は代入できる
//その場合、infer Rは'tomato'型の推論を行い、Rを'tomato'型にする
//type ConditionalTypesInfer = "tomato"
type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let tmp4: DistributiveConditionalTypes<'tomato' | 'pumpkin'>
//union型の場合値を順番に条件分岐に代入できるかどうかを確かめる
//その後それぞれの型をunionする
//let tmp4: number | boolean

ReadableStreamDefaultController
Node
StyleSheet