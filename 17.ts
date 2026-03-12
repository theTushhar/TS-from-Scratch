// In TypeScript, the access modifiers 'public', 'protected', and 'private' determine the accessibility of class members (properties and methods). Here's a brief explanation of each:

// 1. public: Members marked as 'public' are accessible from anywhere. This is the default access level if no modifier is specified.
// 2. protected: Members marked as 'protected' are accessible within the class they are defined in and in any subclass (derived class). They are not accessible from outside the class hierarchy.
// 3. private: Members marked as 'private' are only accessible within the class they are defined in. They cannot be accessed from outside the class or from subclasses.
class shoe {
  constructor(
    public color: string,
    public size: number,
  ) {}
}
class greenShoe extends shoe {
  constructor(size: number) {
    super("green", size);
    this.color; // OK: 'color' is public and accessible within subclass 'greenShoe'.
  }
}

const newshoe = new greenShoe(42);
console.log(newshoe.color); // OK: 'color' is public and accessible outside the class.

// Now let's see the difference with protected and private access modifiers.
class shoe2 {
  constructor(
    protected color: string,
    protected size: number,
  ) {}
}
class greenShoe2 extends shoe2 {
  constructor(size: number) {
    super("green", size);
    this.color; // OK: 'color' is protected and accessible within subclass 'greenShoe2'.
  }
}

// private members are not accessible outside the class, even in subclasses.
class shoe3 {
  constructor(
    private color: string,
    protected size: number,
  ) {}
}
class greenShoe3 extends shoe3 {
  constructor(size: number) {
    super("green", size);
    // this.color; // Error: Property 'color' is private and only accessible within class 'shoe3'.
  }
}

//readonly modifier
class shoe4 {
  constructor(
    public readonly color: string,
    public size: number,
  ) {}
}
const shoe5 = new shoe4("red", 40);
console.log(shoe5.color); // OK: 'color' is readonly and accessible outside the class.
