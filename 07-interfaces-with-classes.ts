/*
  🎓 CHAPTER 7: INTERFACES WITH CLASSES
  --------------------------------------
  We learned about Interfaces (blueprints) and Classes (factories).
  But how do we make sure a factory IS following a specific blueprint?
  We use the 'implements' keyword!
*/

// 1. THE BLUEPRINT: "The Contract"
interface IEmail {
  name: string;
  email: string;
}

// 2. THE CONTRACT: "You MUST have these!"
// When a class 'implements' an interface, it's like a legal contract.
// If the class is missing a property, TypeScript will complain!
class User implements IEmail {
  // Shortcut for creating properties: Use 'public' in the constructor!
  constructor(
    public name: string,
    public email: string
  ) {}
}

// 3. WHY IS THIS USEFUL?
// It lets us write functions that work for ANYTHING that follows the blueprint.
function sendEmail(person: IEmail) {
  console.log(`Sending email to ${person.name} at ${person.email}...`);
}

const user1 = new User("Alice", "alice@example.com");
sendEmail(user1); // ✅ Works, because 'User' implements 'IEmail'!

// Imagine another class like 'Customer' or 'Guest' that also has name/email.
// You could pass all of them into 'sendEmail' without rewriting any code!

// SUMMARY:
// - 'implements' makes a class follow a specific interface contract.
// - It's like saying: "This factory is GUARANTEED to make this kind of product!"
