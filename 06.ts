/*
  06.ts  union types and type narrowing
*/

let myVar: string | boolean = "Tushar"; // can hold string or boolean
// myVar = true; // now a boolean

// union types require type guards when accessing members
if (typeof myVar === "string") {
  // within this block TypeScript knows myVar is string
  console.log("uppercased:", myVar.toUpperCase());
} else {
  // here it's boolean
  console.log("boolean value:", myVar);
}

// another example with function parameter
function combine(input1: string | number, input2: string | number) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2; // numeric addition
  }
  // convert both to string for concatenation
  return input1.toString() + input2.toString();
}

console.log(combine(1, 2)); // 3
console.log(combine("a", "b")); // "ab"
console.log(combine(1, "b")); // "1b"
