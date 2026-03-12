/*
  🎓 CHAPTER 1: THE BASICS 
  ---------------------------------------
  Welcome to TypeScript! Think of TypeScript as a "superpower" for JavaScript.
  It helps us catch mistakes before we even run our code.

  In JavaScript, we just say 'let name = "Tushar"'.
  In TypeScript, we say 'let name: string = "Tushar"'.
  That ': string' is us telling the computer exactly what kind of "box" we need.
*/

// 1. BOOLEAN: True or False. Like a light switch!
let isDone: boolean = false;
isDone = true; // This is fine!
// isDone = "yes"; // ❌ ERROR: TypeScript will say "Hey! You said this was a light switch, not a word!"

// 2. NUMBER: Whole numbers, decimals, or even hex!
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 3. STRING: Words and sentences.
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
// Template strings are like filling in blanks in a story:
let sentence: string = `Hello, my name is ${fullName}.`;

// 4. ARRAY: A list of things of the SAME type.
// You can write it two ways:
let list1: number[] = [1, 2, 3]; // "A list of numbers"
let list2: Array<number> = [4, 5, 6]; // Same thing, just different style.

// 5. TUPLE: A list with a FIXED size and SPECIFIC types.
// Imagine a name tag that MUST have [Name, ID Number].
let x: [string, number];
x = ["hello", 10]; // ✅ OK
// x = [10, "hello"]; // ❌ ERROR: The name must come first!

// 6. ANY: The "I don't care" type.
// Use this ONLY when you're not sure what's coming. It's like regular JavaScript.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // TypeScript won't complain here.

// 7. VOID: Used for functions that DON'T return anything.
// Like a person giving a warning - they talk, but they don't give you back a gift.
function warnUser(): void {
  console.log("This is my warning message");
}

// 8. NEVER: For things that... well, NEVER happen.
// Like a function that always crashes or runs forever.
function error(message: string): never {
  throw new Error(message);
}

// SUMMARY:
// - TypeScript makes sure you don't accidentally put a "string" into a "number" box.
// - It's like having a helpful friend checking your work while you write it!
