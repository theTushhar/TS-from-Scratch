/*
  🎓 CHAPTER 22: 'unknown' vs 'any' (The Safe Way)
  -----------------------------------------------
  Think of 'any' as a "Free Pass" - TypeScript stops checking.
  Think of 'unknown' as a "Mystery Box" - TypeScript says: 
  "I don't know what's in there, so I won't let you use it until you check!"
*/

// 1. THE PROBLEM WITH 'any'
let myAny: any = "I'm a string";
myAny.toUpperCase(); // OK!
myAny = 10;
// myAny.toUpperCase(); // ❌ RUNTIME ERROR: "Numbers don't have .toUpperCase()"
// (TypeScript didn't warn us here!)

// 2. THE SOLUTION: 'unknown'
let myUnknown: unknown = "I'm a secret";
// myUnknown.toUpperCase(); // ❌ ERROR: "Wait! We don't know if it's a string!"

// 3. THE CHECK (Narrowing)
if (typeof myUnknown === "string") {
  // Now TypeScript knows it's safe!
  console.log(myUnknown.toUpperCase());
}

// 4. WHY IS THIS GOOD?
// It forces you to write safer code. You can't just guess what data is!
function processData(input: unknown) {
  if (Array.isArray(input)) {
    console.log(`Array length: ${input.length}`);
  } else if (typeof input === "number") {
    console.log(`Number: ${input.toFixed(2)}`);
  }
}

// SUMMARY:
// - any: "Trust me, I know what I'm doing." (Danger! 🧨)
// - unknown: "I'm not sure yet. Let's check first." (Safe! ✅)
// - Always prefer 'unknown' over 'any' for safer apps.
