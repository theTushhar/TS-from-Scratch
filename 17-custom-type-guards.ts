/*
  🎓 CHAPTER 17: CUSTOM TYPE GUARDS (is)
  ---------------------------------------
  In Chapters 2 and 11, we used 'typeof' and 'instanceof' to guess types.
  But what if you're checking plain objects? TypeScript needs more help!
  We use the 'is' keyword to create our own "Type Detective".
*/

interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

// 1. THE PROBLEM
function move(animal: Fish | Bird) {
  // animal.swim(); // ❌ ERROR: "Wait! What if it's a bird?"
}

// 2. THE CUSTOM DETECTIVE
// We create a function that returns a "Type Predicate".
// 'pet is Fish' means: "If this function returns true, pet MUST be a Fish!"
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// 3. THE SOLUTION
function handleAnimal(animal: Fish | Bird) {
  if (isFish(animal)) {
    // Inside this block, TypeScript is 100% sure animal is a Fish!
    animal.swim();
  } else {
    // Since it's not a Fish, it MUST be a Bird!
    animal.fly();
  }
}

// SUMMARY:
// - Custom Type Guards help TypeScript with complex checks.
// - Use 'parameterName is TypeName' as the return type.
// - It's the ultimate "Detective Tool" for your code!
