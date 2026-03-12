/*
  🎓 CHAPTER 6: CLASSES
  ----------------------
  If an Interface is a "Blueprint", a Class is the "Factory".
  It helps us create MANY objects that all have the same properties and methods.
*/

// 1. DEFINING A CLASS: "The Factory"
class InventoryItem {
  // These are the properties!
  name: string;
  price: number;

  // The constructor is like the "Initialize" button on our factory.
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  // A method is something the object can DO!
  buy(): this {
    console.log(`You bought a ${this.name} for $${this.price}!`);
    return this; // We return 'this' so we can chain methods!
  }
}

// Now we can make items using 'new'!
const item1 = new InventoryItem("Cool Shirt", 29.99);
item1.buy(); // "You bought a Cool Shirt for $29.99!"

// 2. CLASS INHERITANCE: "Building a Better Factory"
// Imagine we want a "Product" that is just like an "InventoryItem", but it also has a color.
// We use 'extends' to inherit everything from InventoryItem!
class Product extends InventoryItem {
  color: string = "red"; // Default color!

  // We don't need a new constructor if we're happy with the old one.
  // But we CAN add more properties here!
}

const newProduct = new Product("Amazing Jeans", 49.99);
newProduct.color = "blue"; // Changing the default color!
newProduct.buy(); // It still has the 'buy' method from the parent!

// 3. SUPER: "Calling the Parent"
// If we DID want a new constructor, we'd use 'super()' to talk to the parent.
class SpecialProduct extends InventoryItem {
  sku: string;

  constructor(name: string, price: number, sku: string) {
    super(name, price); // This calls the InventoryItem constructor!
    this.sku = sku;
  }
}

// SUMMARY:
// - Classes help you create objects with properties and methods.
// - 'extends' lets you build new classes based on old ones (Inheritance).
// - 'super' is how you talk to the parent class!
