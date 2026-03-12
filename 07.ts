/*
  07.ts  type narrowing inside functions
*/

function printId(id: number | string) {
  // TypeScript doesn't know which type id is,
  // so we use a type guard to narrow it.
  if (typeof id === "string") {
    console.log("ID as string:", id.toUpperCase());
  } else {
    console.log("ID as number:", id);
  }
}

// call the function with both types
printId(123);
printId("abc123");
