// console.log("Hello World!");

let userName: string; 
// let userAge: number = 38;
let userAge = 38;

userName = 'Max';
// userAge = '38'; // This will cause a type error because userAge is declared as a number

function add(a: number, b = 5){
    return a + b;
}

add(2, 3); // Returns 5
add(2);    // Returns 7, because b defaults to 5
// add(2, '3'); // This will cause a type error because '3' is a string, not a number
