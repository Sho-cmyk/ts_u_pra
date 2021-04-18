type Engineer = {
//interfaceでもOK
    name: string;
    role: string;
    afaf: string;
}
type Bloggler = {
    //interfaceでもOK
    name: string;
    follower: number;
}
// type EnginnerBlogger = Engineer & Bloggler;
interface EnginnerBlogger extends Engineer, Bloggler {}
// interfaceでも複数の型を継承できる
const quil: EnginnerBlogger = {
    name: 'Quil',
    role: 'front-end',
    follower: 1000,
    afaf: 'a'
}
type NumberBoolean = number | boolean;
type StrintNumber = string | number;
type Mix = NumberBoolean & StrintNumber;
// Mixの型は二つの共通の型であるnumberになる

function toUpperCase(x: string): string;
//パラメータがstringの場合は返り値はstringであるということを明示する
//こうすることで、いちいちas~と定義し直さなくてもよくなる
//関数のオーバーロード
function toUpperCase(x: number): number;
//numberも同じことが言える
function toUpperCase(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    //stringだったら大文字に
    return x;
    //numberだったらそのまま値を返す
}
// const upperHello = toUpperCase('hello');
//helloの大文字がupperHelloに格納されるが、型推論ではstringとnumberの両方になる
// const upperHello = toUpperCase('hello') as string;
//この場合に型アサーションを使う☝︎
//ただし、いろんなところでUpperCaseを使うこと考えるといちいち、as~と定義し直さないといけない
const upperHello = toUpperCase('hello');


type NomadWorker = Engineer | Bloggler;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    // EngineerとBloggerの共通のnameにだけアクセスできる
    // if (typeof nomadWorker ==='object')
    if ('role' in nomadWorker) {
        // nomadWorkerというobjectのなかにroleというKeyが存在した場合
        //今回の場合Engineerという型の中身を使えることになる
        console.log(nomadWorker.role);
        console.log(nomadWorker.afaf);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower)
    }
}
class Dog {
    kind: 'dog' = 'dog';
    //kindはinterfaceにも使える
    //あくまでリテラル型
    speak() {
        console.log('bow-wow');   
    }
}
class Bird {
    kind: 'bird' = 'bird'；
    //あくまでリテラル型
    speak() {
        console.log('tweeet-tweet')
    }
    fly() {
        console.log('flutter');
    }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
    // if ('fly' in pet) {
    pet.speak();
    switch (pet.kind) {
        //kindでswitchする
        case 'bird':
            //kindがbirdの場合型はBirdになるので、flyメソッドを使える
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());

const input = document.getElementById('input')!;
input.value = 'initial input value';

interface Designer {
    name: string;
    [index: string]: string;
    //インデックスシグネチャ
}
const designer: Designer = {
    name: 'Quil',
    role: 'afa',
    fafa: 'fa'
    //stringならなんでも追加できる
}
designer.role = 'web';
//外からでもなんでも追加できる

interface Design {
    name: string;
    [index: string]: string;
}
const design: Design = {
    name: 'Quil',
    role: 'afa',
    1: 'web'
    //インデックスシグネチャのkeyがstringの場合はstringもnumberもOK
}

interface Desig {
    name: string;
    [index: number]: string;
}
const desig: Desig = {
    name: 'Quil',
    role: 'afa',
    //インデックスシグネチャのkeyがnumberの場合はstringはだめ
    //エラー内容
    //型 '{ name: string; role: string; 1: string; }' を型 'Desig' に割り当てることはできません。
    //オブジェクト リテラルは既知のプロパティのみ指定できます。'role' は型 'Desig' に存在しません。
    1: 'web'
}

