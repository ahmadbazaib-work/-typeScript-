let hobbies = ['Games', 'Cooking'];
let activeHobby: string[];

// hobbies.push(10); // This will cause a type error because hobbies is an array of strings
activeHobby = ['valorant']; // No error, because activeHobby is an array of strings

// let users: (string|number)[]; // users can be an array of strings or numbers
let users: Array<string | number>;

users = ['Max', 38]; // No error, because users is an array of strings or numbers
users = ['Max', 38, 'Ahmad', 25];

// let possibleResults: number[];
let possibleResults: [number, number];

possibleResults = [1, -1];
// possibleResults = [1, 5, -1]; // this is also working but if we need fixed length array we use tuples

let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Max',
    age: 'Twenty-four',
    hobbies: ['Games', 'Reading'],
    role: {
        description: 'Software Development Intern',
        id: 0o101,
    },
};

console.log(user.role.id);

let val: {} = 'some text'; // it works because this means any non-null and undefined value, in type assignment.

let data: Record<string, number | string | boolean>;

data = {
    entry1: 1,
    entry2: '2',
    entry3: true,
};