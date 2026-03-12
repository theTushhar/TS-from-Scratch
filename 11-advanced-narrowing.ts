/*
  🎓 CHAPTER 11: ADVANCED NARROWING
  ----------------------------------
  In Chapter 2, we used 'typeof' to narrow types.
  But what if you're dealing with Classes? 'typeof' won't help there.
  We use 'instanceof'!
*/

// 1. CLASS-BASED NARROWING: 'instanceof'
// Imagine we have two classes: 'Person' and 'Company'.
class Person {
  constructor(public name: string, public age: number) {}
}

class Company {
  constructor(public name: string) {}
}

function greet(entity: Person | Company) {
  // If we check 'typeof entity', both will just say "object".
  // So we use 'instanceof' to check which "factory" made them!
  if (entity instanceof Person) {
    // TypeScript now knows this is a Person!
    console.log(`Hello, ${entity.name}! You are ${entity.age} years old.`);
  } else if (entity instanceof Company) {
    // TypeScript knows it's a Company!
    console.log(`Welcome to ${entity.name}!`);
  }
}

const john = new Person("John", 30);
const acme = new Company("Acme Inc.");

greet(john); // "Hello, John! You are 30 years old."
greet(acme); // "Welcome to Acme Inc.!"

// 2. NARROWING WITH ARRAYS
function reverse(value: string | string[]) {
  if (typeof value === "string") {
    // Reverse a string: "hello" -> "olleh"
    return value.split("").reverse().join("");
  } else {
    // Reverse an array: ["h", "e"] -> ["e", "h"]
    return [...value].reverse();
  }
}

console.log(reverse("hello")); // "olleh"
console.log(reverse(["h", "e"])); // ["e", "h"]

// SUMMARY:
// - 'instanceof' is for classes.
// - 'typeof' is for basic types (string, number, boolean).
// - Type guards are the "detective work" that makes TypeScript smart!
