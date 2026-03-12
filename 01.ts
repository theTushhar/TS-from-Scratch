/*
  01.ts - Basic Typescript fundamentals with examples and comments.
*/

// boolean type
let isDone: boolean = false;
isDone = true; // reassigning is fine since type is boolean

// number type
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string type
let color: string = "blue";
color = 'red'; // can use single or double quotes

// template strings
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${fullName}.`;

// arrays (two syntaxes)
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];

// tuple type - fixed types and length
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error: wrong order

// enum - numeric by default starting at 0
enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green;
console.log(c); // 2

// any - disables type checking
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // ok, any accepts anything

// void - absence of any type
function warnUser(): void {
  console.log("This is my warning message");
}
warnUser();

// never - function that never returns (throws or infinite loop)
function error(message: string): never {
  throw new Error(message);
}
// error("Something went wrong"); // uncomment to test

// type assertion - telling compiler more information
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);
