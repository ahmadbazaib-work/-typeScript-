function generateError(msg?: string){
    throw new Error(msg);
}

generateError(); // no error - because msg becomes optional.

type User = {
    name: string;
    age: number;
    role?: 'admin' | 'user';
}

const user3 = {
    name: 'Jonas',
    age: 35,
    // no role and no error as we see that role is optional here by using optional chaining
}

// let input = null;
let input = '';
// const didProvideInput = input || false; // false will be stored;
const didProvideInput = input ?? false; // empty sting will be stored; nullish coalescing.