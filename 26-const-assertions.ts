/*
  🎓 CHAPTER 26: CONST ASSERTIONS (as const)
  -----------------------------------------
  'as const' is like a "Freeze Ray". 
  It tells TypeScript: "This thing is PERMANENT. Don't change it, 
  and don't try to guess a wider type for it!"
*/

// 1. THE PROBLEM: Type Widening
// Usually, TypeScript thinks this is a string[].
let colors = ["red", "green", "blue"];
colors.push("yellow"); // ✅ OK!

// 2. THE SOLUTION: 'as const'
// Now, TypeScript treats this as a READONLY TUPLE.
const fixedColors = ["red", "green", "blue"] as const;
// fixedColors.push("yellow"); // ❌ ERROR: "Property 'push' does not exist on type 'readonly ["red", "green", "blue"]'"

// 3. OBJECTS WITH 'as const'
const config = {
  endpoint: "https://api.example.com",
  retries: 3
} as const;

// config.retries = 5; // ❌ ERROR: "Cannot assign to 'retries' because it is a read-only property."

// 4. WHY IS THIS USEFUL?
// It's perfect for things like Action Types in Redux or fixed configurations.
// It makes sure your values stay EXACTLY what you intended.

// SUMMARY:
// - 'as const' makes everything deeply readonly.
// - It prevents TypeScript from "widening" the type (turning "red" into 'string').
// - It's the ultimate tool for "Fixed Data".
