/*
  🎓 CHAPTER 27: CONDITIONAL TYPES (T extends U ? X : Y)
  -------------------------------------------------------
  Conditional Types are like "Logic Gates" for your code.
  They let you write "If/Else" statements inside your types!
*/

// 1. THE BASIC LOGIC: "Is T a string?"
type IsItString<T> = T extends string ? "YES" : "NO";

type Check1 = IsItString<string>; // "YES"
type Check2 = IsItString<number>; // "NO"

// 2. A PRACTICAL EXAMPLE: "The Type Cleaner"
// Imagine you have a function that returns a 'number' OR 'undefined'.
// You want a type that extracts ONLY the truthy part!
type NonNull<T> = T extends null | undefined ? never : T;

type Data = string | null | undefined;
type CleanData = NonNull<Data>; // Only 'string' remains!

// 3. NESTED LOGIC
// You can stack them just like 'else if' statements.
type TypeName<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "object";

type Name = TypeName<true>; // "boolean"

// SUMMARY:
// - Conditional types let you decide a type at "compile-time".
// - T extends U ? X : Y means "If T fits in U, use X, otherwise use Y".
// - This is the secret sauce for advanced libraries.
