/*
  🎓 CHAPTER 3: LITERALS & TYPE ALIASES
  --------------------------------------
  In Chapter 1, we saw types like 'string' or 'number'.
  But what if you want a value to be exactly ONE specific thing?
  Or what if you want to give a long, messy type a cool name?
*/

// 1. LITERAL TYPES: "Exactly this and nothing else!"
// You can say: "This variable can ONLY be 3.14".
let pi: 3.14 = 3.14; 
// pi = 123; // ❌ ERROR: "Hey! You said this box ONLY holds 3.14!"

// Literal types are extra cool with unions:
function setSize(size: "small" | "medium" | "large") {
  console.log(`Selected size: ${size}`);
}
// setSize("huge"); // ❌ ERROR: "Only 'small', 'medium', or 'large' allowed!"

// 2. TYPE ALIASES: "Giving types a cool nickname"
// Writing "small" | "medium" | "large" everywhere is tiring.
// Let's call it 'ShirtSize' instead!
type ShirtSize = "small" | "medium" | "large";

function orderTshirt(size: ShirtSize) {
  console.log(`Ordering a ${size} shirt!`);
}
orderTshirt("medium"); // ✅ OK

// 3. OBJECT TYPE ALIASES: "Defining the shape of an object"
// Instead of saying: { name: string, price: number }
// We can give it a name like 'Product'.
type Product = {
  name: string;
  price: number;
};

// Now we can use 'Product' just like 'string' or 'number'!
const tshirt: Product = {
  name: "HRX Brand",
  price: 3000,
};

function printProduct(item: Product) {
  console.log(`Item: ${item.name}, Price: ${item.price}`);
}
printProduct(tshirt);

// SUMMARY:
// - Literals let you pick the exact values that are allowed.
// - Type Aliases are like nicknames for your types, making your code easier to read!
