// type SumFn = (a: number, b: number) => number; // function type

interface SumFn {
  (a: number, b: number): number;
}

let sum: SumFn; // making sure sum can only store values of that function type

sum = (a, b) => a + b; // assigning a value that adheres to that function type
