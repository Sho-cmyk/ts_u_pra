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
// const upperHello = toUpperCase('hello');

interface TmpFunc {
    (x: string): number;
    (x: number): number;
}
const upperHello: TmpFunc = function (x: string | number) {return 0};
// interface FuncA {
//     (a: number, b: string): number;
//     (a: string, b: number): number;
// }
// interface FuncB {
//     (a:string): number;
// }
// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function(a: string | number, b?: number | string) {return 0};
// // FuncAもFuncBも両方満たす
interface FuncA {
    (a: number): number;
}
interface FuncB {
    (a:string): string;
}
let unionFunc: FuncA | FuncB;
//パラメータがnever、返り値がintersection型
unionFunc();
// FuncAもFuncBも両方満たす
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


interface DownloadedData {
    id: number;
    user?: {
    //?はundefinedかもしれない
        name?: {
            first: string;
            last: string;
        }
    }
}
const downloadedData: DownloadedData = {
    id: 1
}
console.log(downloadedData.user?.name?.first);

const userData = downloadedData.user ?? 'no-user'

//lookup型とは
//例）DownloadedDataというinterfaceの中のidが持っている型を探す時に使う

type id = DownloadedData["id"]


function advancedFn(...args: readonly [number, string, boolean, ...number[]]) {
}
advancedFn(0, 'hi', true, 3, 3, 3)
let milk = 'milk' as const;
//as constとすることでmilkがstringではなく、'milk'になる
const array = [10, 20] as const
//arrayはreadonly [10, 20]というtuple型になる
const peter = {
    name: 'Peter',
    age: 38
} as const;
//as costとすると定数になる
type PeterType = typeof peter;
//typeofを使うことでpeterの型を指定できる
