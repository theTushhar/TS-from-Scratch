/*
  🎓 CHAPTER 18: INDEX SIGNATURES
  --------------------------------
  Sometimes you don't know the names of the properties in an object yet.
  Think of a "Dictionary" - you don't know which words will be added, 
  but you know every word will have a definition (a string).
*/

// 1. THE PROBLEM
// If we define an interface like this, we can ONLY have 'name'.
interface StrictUser {
  name: string;
}

// 2. THE SOLUTION: Index Signatures
// [key: string]: string means: "You can add ANY property name, 
// as long as the value is a string."
interface FlexibleUser {
  name: string; // This one is required
  [key: string]: string; // Any other properties must also be strings
}

const user: FlexibleUser = {
  name: "Tushar",
  twitter: "@tushar_codes",
  github: "tushar-github",
  // age: 25 // ❌ ERROR: "Wait! You said all extra values must be strings!"
};

// 3. DYNAMIC DICTIONARY EXAMPLE
interface Scoreboard {
  [playerName: string]: number;
}

const gameScores: Scoreboard = {
  "Alice": 10,
  "Bob": 15,
  "Charlie": 7
};

// SUMMARY:
// - Index signatures let you handle dynamic data.
// - Use them when you don't know the property names beforehand.
// - They make your objects act like flexible "Dictionaries" or "Maps".
