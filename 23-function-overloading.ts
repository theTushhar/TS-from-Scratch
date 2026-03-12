/*
  🎓 CHAPTER 23: FUNCTION OVERLOADING
  ------------------------------------
  Function Overloading is like a "Multi-Tool".
  One function name can do different things depending 
  on what you give it!
*/

// 1. THE SIGNATURES (What it looks like)
// We define the different ways to use the function.
function getInfo(id: number): string;
function getInfo(name: string): string;

// 2. THE IMPLEMENTATION (How it works)
// This is the actual code that handles everything!
function getInfo(value: any): string {
  if (typeof value === "number") {
    return `Looking for User with ID: ${value}`;
  } else if (typeof value === "string") {
    return `Looking for User with Name: ${value}`;
  }
  return "Unknown search.";
}

// 3. THE USAGE
const searchById = getInfo(101);     // "Looking for User with ID: 101"
const searchByName = getInfo("Tushar"); // "Looking for User with Name: Tushar"

// ❌ TypeScript won't let us pass anything else!
// getInfo(true); // ERROR: "No overload matches this call."

// 4. ANOTHER USEFUL EXAMPLE: 'Padding'
function pad(value: string, length: number): string;
function pad(value: number, length: number): string;

function pad(value: string | number, length: number): string {
  const str = value.toString();
  return str.padStart(length, "0");
}

console.log(pad("hello", 10)); // "00000hello"
console.log(pad(42, 10));      // "0000000042"

// SUMMARY:
// - Overloads tell TypeScript about all the valid ways to call a function.
// - It makes your functions much easier to use and more intuitive.
