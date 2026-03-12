/*
  🎓 CHAPTER 21: ABSTRACT CLASSES
  --------------------------------
  An Abstract Class is like an "Unfinished Blueprint". 
  You cannot build a house directly from it, but you use it 
  to make sure every OTHER house follows the same rules.
*/

// 1. THE ABSTRACT CLASS
abstract class Appliance {
  constructor(public brand: string) {}

  // Regular method: Everyone gets this for free!
  turnOn() {
    console.log(`${this.brand} is now ON.`);
  }

  // Abstract method: "I don't know how this works yet, 
  // but YOU must figure it out!"
  abstract performTask(): void;
}

// 2. THE IMPLEMENTATION
class WashingMachine extends Appliance {
  performTask() {
    console.log("Washing clothes... 👕");
  }
}

class Refrigerator extends Appliance {
  performTask() {
    console.log("Keeping food cold... 🧊");
  }
}

// const myApp = new Appliance("Generic"); // ❌ ERROR: "Cannot create an instance of an abstract class."

const myWasher = new WashingMachine("LG");
myWasher.turnOn();      // "LG is now ON." (from parent)
myWasher.performTask(); // "Washing clothes..." (own logic)

// SUMMARY:
// - Abstract classes cannot be instantiated (no 'new Appliance()').
// - They are used as base classes for other classes.
// - 'abstract' methods MUST be implemented by the children.
