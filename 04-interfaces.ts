/*
  🎓 CHAPTER 4: INTERFACES
  -------------------------
  Interfaces are like "blueprints" for objects.
  They tell the object: "You MUST have these fields!"
*/

// 1. DEFINING AN INTERFACE: "The Blueprint"
// An interface describes what an object should look like.
interface InventoryItem {
  name: string;
  price: number;
  quantity: number;
}

const shirt: InventoryItem = {
  name: "HRX T-Shirt",
  price: 3000,
  quantity: 5,
};

// 2. OPTIONAL PROPERTIES: "The 'Maybe' fields"
// Sometimes an item might have a color, and sometimes it doesn't.
// We use the question mark (?) to say it's optional!
interface Product extends InventoryItem {
  color?: string; // This can be a string OR undefined!
}

const redShirt: Product = {
  name: "Red HRX",
  price: 3000,
  quantity: 10,
  color: "red", // ✅ OK
};

const blueShirt: Product = {
  name: "Blue HRX",
  price: 3000,
  quantity: 10,
  // No color? Still fine!
};

// 3. EXTENDING INTERFACES: "Building on top"
// Imagine a service (like a photoshoot) also needs a name and price.
// Instead of rewriting everything, we can "extend" our base interface.
interface ServiceItem extends InventoryItem {
  startTime: Date;
  endTime: Date;
}

const photoshoot: ServiceItem = {
  name: "Wedding Photoshoot",
  price: 5000,
  quantity: 1,
  startTime: new Date(),
  endTime: new Date(),
};

// 4. WHY USE INTERFACES?
// They are great for functions. You can say: "This function takes ANY item that fits the InventoryItem blueprint!"
function purchaseItem(item: InventoryItem, quantity: number) {
  console.log(`Purchased ${quantity} of ${item.name} for $${item.price * quantity}`);
}

purchaseItem(redShirt, 2); // Works!
purchaseItem(photoshoot, 1); // Also works!

// SUMMARY:
// - Interfaces are blueprints for your data.
// - You can extend them to create more complex blueprints.
// - Optional (?) fields are like "bonus" information!
