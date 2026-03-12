/*
  🎓 CHAPTER 24: THE 'satisfies' OPERATOR (Modern TS)
  --------------------------------------------------
  The 'satisfies' operator is a cool new feature.
  It checks if an object follows a blueprint, 
  BUT it remembers the EXACT details of that object.
  It's "Best of Both Worlds".
*/

// 1. THE PROBLEM: Regular Interfaces
interface MyColor {
  hex: string;
  rgb: [number, number, number] | string;
}

const myColor: MyColor = {
  hex: "#ff0000",
  rgb: [255, 0, 0] // ❌ TypeScript only knows it's "one of two types"
};

// Even though we gave it an array, TypeScript says:
// "It COULD be a string, so I won't let you use .map()!"
// myColor.rgb.map(c => c); // ERROR: "Property 'map' does not exist on type 'string | [number, number, number]'"

// 2. THE SOLUTION: 'satisfies'
// We tell TypeScript: "Check if this follows 'MyColor', 
// BUT remember that rgb is currently an array!"
const red = {
  hex: "#ff0000",
  rgb: [255, 0, 0]
} satisfies MyColor;

// ✅ NOW it works! TypeScript knows 'red.rgb' is an array.
red.rgb.map(c => console.log(c));

// 3. WHY IS THIS USEFUL?
// It catches mistakes (like missing 'hex'), but keeps your data precise.
const badColor = {
  // hex: "#fff" // ❌ ERROR: "Property 'hex' is missing!"
  rgb: "red"
} satisfies Partial<MyColor>;

// SUMMARY:
// - satisfies: Validates an object against a type WITHOUT throwing away details.
// - It's great for configurations and complex objects!
