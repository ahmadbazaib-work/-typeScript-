// class User{
//     // name;
//     // age;

//     name: string;
//     age: number;

//     constructor(n: string, a: number){
//         // this.name = 'Max';
//         this.name = n;
//         this.age = a;
//     };
// }

class User {
    public readonly hobbies: string[] = []; // by default if you don't write public it is still public.

    constructor(public name: string, private readonly age: number) { // age is only accessible inside the class due to private keyword
    }

    greet() {
        console.log(`Hello My name is ${this.name} and I am ${this.age} years old.`)
    }
};

const max = new User('Max', 24);
const fred = new User('Fred', 30);

// console.log(max.age); // will show error as age is only accessible inside the class.
// max.hobbies = []; // will not work as this is only read only but .push will work because arrays are objects in js
max.hobbies.push('sports');

console.log(max, fred);
max.greet();
