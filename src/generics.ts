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