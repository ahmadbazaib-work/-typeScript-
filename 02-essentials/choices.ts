enum Role {
    Admin = 1,        // 0
    Developer, // 2   // 1
    Guest, // 3       // 2
};

// let userRole: Role = 0;
// let userRole: Role = 1;
let userRole: 'admin' | 'developer' | 'guest' = "admin"; // more popular than enum;

//...
// userRole = Role.Guest;
userRole = 'developer';

let possibleResult: [1 | -1, 1 | -1];

possibleResult = [1, -1];
// possibleResult = [1, 2];