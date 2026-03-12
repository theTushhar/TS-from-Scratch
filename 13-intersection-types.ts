/*
  🎓 CHAPTER 13: INTERSECTION TYPES (&)
  --------------------------------------
  In Chapter 2, we learned about Unions (|) - which mean "This OR That".
  Intersections (&) are the opposite - they mean "This AND That".
  It's like making a smoothie: you take different ingredients and mix them into one!
*/

// 1. TWO DIFFERENT BLUEPRINTS
interface CanWalk {
  walk: () => void;
}

interface CanSwim {
  swim: () => void;
}

// 2. THE INTERSECTION: "The Super-Being"
// This type MUST be able to walk AND swim!
type Duck = CanWalk & CanSwim;

const donald: Duck = {
  walk: () => console.log("Waddle waddle..."),
  swim: () => console.log("Splish splash!")
};

// 3. COMBINING OBJECTS
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

// A "StaffMember" is a Person AND an Employee!
type StaffMember = Person & Employee;

const manager: StaffMember = {
  name: "Tushar",
  employeeId: 101
};

// SUMMARY:
// - Union (|) = "A or B" (Either one is fine).
// - Intersection (&) = "A and B" (Must have BOTH!).
// - It's great for combining small, simple blueprints into bigger, more complex ones.
