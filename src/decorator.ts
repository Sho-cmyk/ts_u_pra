function Logging(message) {
    return function (constructor: Function) {
        //無名関数
        console.log(message);
        console.log(constructor);
    }
}
//decoratorを返す関数をdecolator factoryという

@Logging('Loggingj User')
//後ろに()を書く必要がある
class User {
    name = 'Quil';
    constructor() {
        console.log('User was created!');
    }
}

