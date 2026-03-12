/*
  🎓 CHAPTER 30: DECORATORS (@)
  ------------------------------
  Decorators are like "Gift Wrap". 
  They are special functions that add "bonus features" 
  to a class or method. 
  (Note: You must enable "experimentalDecorators" in tsconfig!)
*/

// 1. THE CLASS DECORATOR: "The Label"
// A decorator is just a function that gets the class as an argument.
function Logger(constructor: Function) {
  console.log("Class was created!");
}

@Logger
class User {
  constructor(public name: string) {}
}

// 2. THE METHOD DECORATOR: "The Watcher"
// Let's create a decorator that logs every time a method is called.
function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${key} with args: ${args}`);
    return original.apply(this, args);
  };
}

class Database {
  @LogMethod
  save(data: string) {
    console.log(`Saving ${data} to disk...`);
  }
}

const db = new Database();
db.save("Tushar's Profile"); 
// Output: "Calling method: save with args: Tushar's Profile"
// Output: "Saving Tushar's Profile to disk..."

// SUMMARY:
// - Decorators are used to "decorate" classes and methods.
// - They are great for things like Logging, Validation, or Auto-Wiring.
// - This is a very common pattern in frameworks like Angular and NestJS.
