/*
  🎓 CHAPTER 5: ENUMS (Enumerations)
  -----------------------------------
  Enums are a way to give friendly names to a set of values.
  Think of them as a "Dropdown Menu" for your code.
*/

// 1. DEFINING AN ENUM: "The List of Choices"
// Imagine we're choosing sizes for a T-shirt.
// By default, TypeScript gives them numbers starting from 0.
enum Sizes {
  Small = 1, // Let's start from 1 instead of 0!
  Medium = 2,
  Large = 3,
}

// 2. USING ENUMS: "Picking an Option"
console.log(Sizes.Small);  // 1
console.log(Sizes.Medium); // 2
console.log(Sizes.Large);  // 3

// 3. WHY ARE THEY USEFUL?
// Enums help us avoid "Magic Numbers" or typos.
function setProductSize(size: Sizes) {
  if (size === Sizes.Small) {
    console.log("You picked a small shirt!");
  }
}

setProductSize(Sizes.Medium); // Valid!
// setProductSize(5); // ❌ ERROR: "5 is not in the list of Sizes!"

// 4. BEHIND THE SCENES
// Enums actually look like an object when you log them.
console.log(Sizes); // { Small: 1, Medium: 2, Large: 3, ... }

// 5. ENUMS AS DATA TYPES: "Describing something else"
// We can use an enum inside an object or class to track states.
enum Height {
  Small = 1,
  Medium = 2,
  Large = 3,
}

// SUMMARY:
// - Enums are a named list of options.
// - They make your code more readable by using names (Sizes.Small) instead of numbers (1).
// - Great for "states" like: TaskState (Pending, Done, Error).
