/*
  🎓 CHAPTER 8: ACCESS MODIFIERS
  -------------------------------
  Access modifiers let you control WHO can see or touch your class members.
  Think of it like a house: Some rooms are for everyone (Public),
  some are only for family members (Protected),
  and some are just for you (Private).
*/

// 1. PUBLIC: "The Living Room"
// Anyone can walk in! This is the default.
class Shoe {
  constructor(
    public color: string,
    public size: number
  ) {}
}

const myShoe = new Shoe("green", 42);
console.log(myShoe.color); // ✅ OK! It's public.

// 2. PROTECTED: "The Family Room"
// Only the family (the class and its children) can enter.
class Shoe2 {
  constructor(
    protected color: string,
    protected size: number
  ) {}
}

class GreenShoe2 extends Shoe2 {
  constructor(size: number) {
    super("green", size);
    console.log(this.color); // ✅ OK! 'GreenShoe2' is a child of 'Shoe2'.
  }
}

const myShoe2 = new Shoe2("red", 40);
// console.log(myShoe2.color); // ❌ ERROR: "Wait! You're not family!"

// 3. PRIVATE: "The Personal Safe"
// ONLY the class itself can see it. Even children are NOT allowed.
class Shoe3 {
  constructor(
    private secretKey: string,
    public size: number
  ) {}
}

class GreenShoe3 extends Shoe3 {
  constructor(size: number) {
    super("shh-secret", size);
    // console.log(this.secretKey); // ❌ ERROR: "Even children can't see private things!"
  }
}

// 4. READONLY: "The Trophy Case"
// You can LOOK at it, but you CAN'T CHANGE it!
class Shoe4 {
  constructor(
    public readonly id: number,
    public color: string
  ) {}
}

const myShoe4 = new Shoe4(12345, "white");
console.log(myShoe4.id); // ✅ OK to read!
// myShoe4.id = 54321; // ❌ ERROR: "No touching! It's readonly!"

// SUMMARY:
// - PUBLIC: Accessible from everywhere!
// - PROTECTED: Only for the class and its children.
// - PRIVATE: Only for the class itself!
// - READONLY: You can read it, but you can't change it!
