/*
  08.ts  literal types and type aliases
*/

let pi: 3.14 = 3.14; // only the number 3.14 is allowed
// pi = 123;         // error, not assignable

function setSize(size: "small" | "medium" | "large") {
  console.log(`Selected size: ${size}`);
}

// setSize("huge"); // error: not one of the allowed literals

// create a type alias for readability
type Sizes = "small" | "medium" | "large";
function setSizeAlias(size: Sizes) {
  console.log(`Alias size: ${size}`);
}

setSizeAlias("small");
