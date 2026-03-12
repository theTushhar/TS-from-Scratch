/*
  🎓 CHAPTER 15: MODULES (export & import)
  -----------------------------------------
  Imagine your code is a giant, messy book with 1,000 pages.
  Modules let you split that book into smaller, labeled chapters!
*/

// 1. EXPORT: "Sharing with others"
// You can put this in a file named 'math-tools.ts'.
export const pi = 3.14159;

export interface Shape {
  name: string;
}

export function calculateArea(radius: number): number {
  return pi * radius * radius;
}

// 2. IMPORT: "Using someone else's tools"
// In another file, you can "borrow" those tools!
// import { pi, Shape, calculateArea } from "./math-tools";

// 3. EXPORT DEFAULT: "The main tool"
// If a file has one MAIN thing it does, use 'default'.
export default class Calculator {
  add(a: number, b: number) {
    return a + b;
  }
}

// Then import it like this:
// import Calculator from "./calculator";

// SUMMARY:
// - Modules help you keep your files small and organized.
// - 'export' makes things available outside the file.
// - 'import' brings things inside from other files.
