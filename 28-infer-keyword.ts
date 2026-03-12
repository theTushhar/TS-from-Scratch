/*
  🎓 CHAPTER 28: THE 'infer' KEYWORD
  -----------------------------------
  'infer' is like a "Secret Agent". 
  It lets you reach inside a complex type and "capture" 
  a specific piece of information.
*/

// 1. THE PROBLEM: "What's in the Promise?"
// Imagine you have a Promise<string>, and you want to extract 
// just the 'string' part. 
type MyPromise = Promise<string>;

// 2. THE SOLUTION: 'infer'
// We say: "If T is a Promise that contains 'U', please CAPTURE 'U'!"
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;

type Result = UnpackPromise<MyPromise>; // Result is 'string'!

// 3. ANOTHER EXAMPLE: "What's the return type of a function?"
// TypeScript has this built-in! (ReturnType<T>)
// But here is how it works under the hood:
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function greet() {
  return "Hello, Master!";
}

type GreetReturn = MyReturnType<typeof greet>; // "string"

// SUMMARY:
// - 'infer' lets you pull types out of other types.
// - You use it inside a conditional 'extends' check.
// - It's the ultimate "Type Detective" tool.
