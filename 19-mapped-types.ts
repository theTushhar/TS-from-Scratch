/*
  🎓 CHAPTER 19: MAPPED TYPES & keyof
  ------------------------------------
  Mapped types are like "Looping" through the properties of a blueprint.
  Think of a blueprint for a Car. What if you want to make EVERY part optional?
  You don't want to rewrite the whole thing manually!
*/

// 1. THE PROPERTY SCANNER: 'keyof'
interface Car {
  make: string;
  model: string;
  year: number;
}

// 'keyof Car' means: "make" | "model" | "year"
type CarProperties = keyof Car;

function getCarProperty(car: Car, property: CarProperties) {
  return car[property];
}

const myCar: Car = { make: "Toyota", model: "Corolla", year: 2022 };
getCarProperty(myCar, "make"); // ✅ OK!
// getCarProperty(myCar, "color"); // ❌ ERROR: "Color is not a property of Car!"

// 2. THE COPY MACHINE: Mapped Types
// Imagine you want to create a blueprint where every property is READONLY.
type ReadonlyCar = {
  readonly [P in keyof Car]: Car[P];
};

const myOldCar: ReadonlyCar = { make: "Ford", model: "Mustang", year: 1969 };
// myOldCar.make = "Tesla"; // ❌ ERROR: "This car is now readonly!"

// 3. ANOTHER MAPPED TYPE: "The Boolean Flags"
// What if you want to track which parts are broken?
type CarStatus = {
  [P in keyof Car]: boolean;
};

const myCarStatus: CarStatus = {
  make: true, // "The make is fine"
  model: true,
  year: false // "The year is wrong"
};

// SUMMARY:
// - keyof: Gets a list of all property names in an interface.
// - Mapped Types: Use [P in keyof T] to loop through properties.
// - This is advanced, but very powerful for building flexible libraries!
