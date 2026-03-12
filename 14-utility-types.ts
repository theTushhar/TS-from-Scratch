/*
  🎓 CHAPTER 14: UTILITY TYPES
  -----------------------------
  Utility types are like "Magic Tools" for your blueprints.
  They take an existing blueprint and quickly change it for you!
*/

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// 1. PARTIAL: "Make everything optional"
// Use this for "Update" functions where the user only changes ONE field.
type UserUpdate = Partial<User>; 

const updateEmail: UserUpdate = {
  email: "newemail@test.com"
  // We don't need 'id', 'name', or 'age' here!
};

// 2. PICK: "Just pick what you need"
// Sometimes you only want the 'name' and 'email' for a simple list.
type UserPreview = Pick<User, "name" | "email">;

const profile: UserPreview = {
  name: "Tushar",
  email: "tushar@test.com"
};

// 3. OMIT: "Everything EXCEPT these"
// You want all user info BUT the 'id' (maybe when creating a new user).
type NewUser = Omit<User, "id">;

const newUser: NewUser = {
  name: "Bob",
  email: "bob@test.com",
  age: 25
};

// SUMMARY:
// - Partial: "Everything is optional (?)"
// - Pick: "Take ONLY these fields"
// - Omit: "Take everything EXCEPT these fields"
// - These help you reuse your code instead of rewriting it!
