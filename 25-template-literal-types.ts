/*
  🎓 CHAPTER 25: TEMPLATE LITERAL TYPES
  --------------------------------------
  Template literal types are like "Building Words" with code.
  They let you create new types by combining strings together!
*/

// 1. THE STRING BUILDER
type EventType = "click" | "hover" | "scroll";

// We want to create "on-click", "on-hover", and "on-scroll".
// Instead of writing them manually, we can "build" them:
type EventHandler = `on-${EventType}`;

const myHandler: EventHandler = "on-click"; // ✅ OK!
// const badHandler: EventHandler = "on-touch"; // ❌ ERROR!

// 2. COMBINING TWO TYPES
// Imagine we're building a CSS layout system.
type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "middle" | "bottom";

// Combine them into "top-left", "middle-center", etc.!
type Position = `${Vertical}-${Horizontal}`;

const pos1: Position = "top-left";
const pos2: Position = "bottom-right";

// 3. WHY IS THIS USEFUL?
// It's like having a superpower for string manipulation.
// It catches typos in your dynamic strings before you even run the code!

// SUMMARY:
// - Template Literal Types let you use backticks (`) to build types.
// - It's extremely powerful for building flexible, type-safe APIs.
