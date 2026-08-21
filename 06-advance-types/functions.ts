function getLength(val: any[]): number;
function getLength(val: string): string;

function getLength(val: string | any[]) {
  // return val.length; // X words
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numOfWords} words`;
  }

  return val.length;
}

const numOfWords = getLength("does this work!");
// numOfWords.length; it will not work => after function overload it will work
const numItems = getLength(["Sports", "Cookies"]);
