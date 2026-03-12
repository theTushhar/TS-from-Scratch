/*
  🎓 CHAPTER 10: GENERICS
  -----------------------
  Generics are like "Variables for Types".
  They let you create a function or class that works with ANY type,
  but still remembers exactly what type you gave it!
*/

// 1. WHY DO WE NEED THEM?
// Imagine a function that just "identity" - it returns exactly what you give it.
// Without generics, you'd have to use 'any', but then you lose all the info!
// With Generics, we use <T> (T stands for "Type").
function identity<T>(arg: T): T {
  return arg;
}

// Now TypeScript KNOWS that if you give it a string, it returns a string!
let output1 = identity<string>("hello");
let output2 = identity(42); // TypeScript can even guess it's a number!

// 2. A PRACTICAL EXAMPLE: "The Cloner"
// Let's make a function that clones ANY object.
const clone = <T>(value: T): T => {
  const json = JSON.stringify(value);
  return JSON.parse(json);
};

interface Person {
  name: string;
  age: number;
}

const me: Person = { name: "John", age: 30 };
const clonedMe = clone(me); // TypeScript knows clonedMe is ALSO a Person!

// 3. GENERIC CLASSES: "The Box"
// A box that can hold anything!
class Box<T> {
  contents: T;

  constructor(item: T) {
    this.contents = item;
  }
}

const stringBox = new Box("A valuable ring"); // Box<string>
const numberBox = new Box(1000);              // Box<number>

// 4. GENERIC INTERFACES
interface GenericIdentityFn<T> {
  (arg: T): T;
}

// SUMMARY:
// - Generics (<T>) allow you to write reusable code that is still 100% type-safe.
// - It's like a placeholder for a type that gets filled in when you use it!
