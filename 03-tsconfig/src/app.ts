import fs from 'node:fs';

// fs.readFileSync();

let userName: string;

userName = 'Max';

console.log(userName);

function add(a: number, b: number){ // here without annotation it shows error which was not the case earlier because we did not have
    return a + b;   // the tsconfig file then.
}

add(12, 32);
add(10, 20);