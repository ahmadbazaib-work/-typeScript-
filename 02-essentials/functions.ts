function add1(a: number, b: number): number{ // this is return type but we don't need to write it here because of type inference
    return a + b;
}

function log(message: string): void{
    console.log(message);
}

function logAndThrow(errMessage: string): never{
    console.log(errMessage);
    throw new Error(errMessage);
}

const logMsg = (msg: string) => {
    console.log(msg);
}

// function performJob(cb: Function){
//     //..
// }

function performJob(cb: (msg: string) => void) {
    //...
    cb('Job Done');
}

performJob(log);

type User1 = {
    name: string;
    age: number;
    greet: () => void | string;
};

let user2 = {
    name: 'Max',
    age: 24,
    greet() {
        console.log(`Hello ${this.name}`);
    },
}

user2.greet();  