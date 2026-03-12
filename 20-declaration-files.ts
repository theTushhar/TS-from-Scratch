/*
  🎓 CHAPTER 20: DECLARATION FILES (.d.ts)
  -----------------------------------------
  Declaration files are like "Type Translators".
  They don't contain real code, they just tell TypeScript what 
  kind of data is inside an old JavaScript file!
*/

// 1. THE PROBLEM
// Imagine you have a JavaScript file named 'old-tools.js' 
// with a function named 'sayHello(name)'.
// TypeScript doesn't know it exists!

// 2. THE SOLUTION: The .d.ts File
// You create a file named 'old-tools.d.ts' and write:
/*
  declare function sayHello(name: string): void;
  declare const PI: number;
*/

// 3. THE 'DECLARE' KEYWORD
// Use 'declare' to tell TypeScript: "This thing ALREADY exists 
// somewhere else (like in a script tag or a different library)."

declare const MY_SUPER_LIBRARY: {
  version: string;
  init: () => void;
};

// Now we can use it, and TypeScript won't complain!
console.log(MY_SUPER_LIBRARY.version);
MY_SUPER_LIBRARY.init();

// 4. WHY ARE THESE IMPORTANT?
// Most popular libraries (like React or Lodash) use these!
// You often install them using: npm install @types/react

// SUMMARY:
// - .d.ts files are "Blueprints for JavaScript code".
// - They help TypeScript understand code that wasn't written in TypeScript.
// - Use 'declare' for global variables or external functions.
