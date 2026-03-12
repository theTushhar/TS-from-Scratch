/*
  🎓 CHAPTER 2: UNIONS & NARROWING
  ---------------------------------
  Imagine you have a box that can hold a "Book" OR a "Kindle".
  In TypeScript, we call this a "Union Type" because we're joining two types together!
*/

// 1. UNION TYPES: "It could be this OR that"
// Use the vertical bar or in general we call pipe (|) to list your options.
let myVar: string | boolean = "Tushar";
myVar = true; // Still fine, because it's a boolean!
// myVar = 10; // ❌ ERROR: "Hey, 10 is a number, you only said string or boolean!"

// 2. TYPE NARROWING: "Finding out exactly what's inside the box"
// Since myVar could be either a string or boolean, we have to check before using it.
if (typeof myVar === "string") {
  // Inside this block, TypeScript is 100% sure myVar is a string!
  console.log("Hey, it's a string:", myVar.toUpperCase());
} else {
  // Outside that block, TypeScript knows it MUST be the other option: boolean.
  console.log("It's a boolean:", myVar);
}

// 3. MORE NARROWING IN FUNCTIONS
// Let's create a function that takes an ID.
// An ID might be a number (like 123) OR a string (like "ABC-123").
function printId(id: number | string) {
  // We use a "Type Guard" (the 'if' check) to be safe.
  if (typeof id === "string") {
    // We can use string methods like .toUpperCase()
    console.log("Your ID as a string:", id.toUpperCase());
  } else {
    // If it's not a string, it MUST be a number!
    console.log("Your ID as a number:", id);
  }
}

printId(123); // Works!
printId("abc123"); // Works too!

// 4. ANOTHER COOL EXAMPLE: A "Combine" Function
// This function adds numbers or joins strings.
function combine(input1: string | number, input2: string | number) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2; // Math addition! 1 + 2 = 3
  }
  // If either is a string, let's just glue them together!
  return input1.toString() + input2.toString(); // 1 + "b" = "1b"
}

console.log(combine(1, 2)); // 3
console.log(combine("a", "b")); // "ab"
console.log(combine(1, "b")); // "1b"

// SUMMARY:
// - Union types are like "This OR That" (|).
// - Type Narrowing (using 'typeof') helps you use the right tools for the right type!
