// let age: any = 36;
let age: string | number = 36; // age can be either a string or a number

age = '36'; // No error, because age is of type any
// age = true;
// age = { name: 'Max' }; 
age = 36; // No error, because age is of type union;