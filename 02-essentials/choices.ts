// enum Role {
//     Admin = 1,        // 0
//     Developer, // 2   // 1
//     Guest, // 3       // 2
// };
type Role = 'admin' | 'developer' | 'guest';
type user = {
    name: string;
    age: number;
    role: Role;
    permissions: string[];
}

const user1: user = {
    name: 'Max',
    age: 24,
    role: 'developer',
    permissions: ['Read', 'Write'],
};

// let userRole: Role = 0;
// let userRole: Role = 1;
// let userRole: 'admin' | 'developer' | 'guest' = "admin"; // more popular than enum;
let userRole: Role = 'admin';

//...
// userRole = Role.Guest;
userRole = 'developer';

let possibleResult: [1 | -1, 1 | -1];

possibleResult = [1, -1];
// possibleResult = [1, 2];

// function access(role: 'admin' | 'developer' | 'guest'){
//     //...
// }

function access(role: Role){
    //...
}

