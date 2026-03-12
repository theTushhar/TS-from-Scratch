/*
  🎓 CHAPTER 9: TYPE ASSERTIONS
  ------------------------------
  Sometimes YOU know more than TypeScript.
  It's like saying: "Trust me, I know this is a string!"
*/

// 1. THE 'AS' SYNTAX: "I'm sure it's this!"
// Imagine you have a variable of type 'any'.
let someValue: any = "this is a string";

// TypeScript thinks it's 'any', but we KNOW it's a string!
// So we use 'as string' to use string methods:
let strLength: number = (someValue as string).length;
console.log(strLength);

// 2. THE ANGLE-BRACKET SYNTAX: "<type>Value"
// You can also write it like this:
function getNetPrice(
  price: number,
  discount: number,
  format: boolean
): number | string {
  const netPrice = price - (price * discount) / 100;
  return format ? `$${netPrice.toFixed(2)}` : netPrice;
}

// We KNOW this call will return a string because 'format' is true!
const netQuote1 = <string>getNetPrice(100, 20, true);
console.log(netQuote1); // "$80.00"

// We KNOW this call will return a number!
const netQuote2 = <number>getNetPrice(100, 20, false);
console.log(netQuote2); // 80

// ⚠️ BE CAREFUL:
// Assertions don't change the data. They only change what TypeScript "believes".
// If you tell it a string is a number, it will still crash at runtime!

// SUMMARY:
// - Type assertions let you override what TypeScript thinks.
// - Use 'as type' or '<type>'.
// - Use it ONLY when you're 100% sure!
