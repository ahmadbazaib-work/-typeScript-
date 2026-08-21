type DataStore = {
  [prop: string]: boolean | number;
};

let someObj: Record<string, boolean | number>; // exactly like the above but record is generic type?

let data: DataStore = {};

//...

data.id = 5;
data.flag = true;
// data.name = 'Max'; // Shows error

console.log(data);

let role = ["admin", "developer", "user"] as const;
// role.push("IT");
const firstRole = role[0];
console.log(role, firstRole);

const dataEntries = {
  entry1: 0.5,
  entry2: -1.2,
} satisfies Record<string, number>;

//...
// dataEntries.entry3
