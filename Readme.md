# TypeScript From Scratch: The Complete 30-Chapter Masterclass

Welcome, future TypeScript Master!

This repository is the **ultimate step-by-step guide** to mastering TypeScript. It takes you from "Hello World" to Expert level features used by top-tier library creators. Everything is written in an **ELI5 (Explain Like I'm Five)** friendly tone with clear, commented examples.

---

## Why TypeScript?

Imagine you're building a LEGO set. JavaScript is like having all the pieces in a giant, unlabeled bag. TypeScript is like having the instruction manual and boxes that only fit the _right_ pieces. It helps you catch mistakes before you even try to snap the pieces together!

---

## Prerequisites

Before you start, make sure you have:

- A basic understanding of **JavaScript**.
- **Node.js** installed on your computer. (Download it at [nodejs.org](https://nodejs.org/))

---

## How to setup TypeScript

To run the examples in this repository on your own computer, follow these 5 easy steps:

1.  **Install TypeScript globally:**
    Open your terminal/command prompt and run:

    ```bash
    npm install -g typescript
    ```

2.  **Check the version:**
    Verify it's installed by running:

    ```bash
    tsc -v
    ```

3.  **Initialize a configuration (Optional but recommended):**
    In your project folder, run this to create a `tsconfig.json` file:

    ```bash
    tsc --init
    ```

4.  **Compile a file:**
    To turn a TypeScript file into a JavaScript file, run:

    ```bash
    tsc 01-basic-types.ts
    ```

5.  **Run your code:**
    Now you can run the generated JavaScript file using Node:
    ```bash
    node 01-basic-types.js
    ```

---

## Table of Contents

| Chapter | Level           | Topic                                                      |
| :------ | :-------------- | :--------------------------------------------------------- |
| **01**  | 🟢 Beginner     | [Basic Types](./01-basic-types.ts)                         |
| **02**  | 🟢 Beginner     | [Unions & Narrowing](./02-unions-and-narrowing.ts)         |
| **03**  | 🟢 Beginner     | [Aliases & Literals](./03-aliases-and-literals.ts)         |
| **04**  | 🟢 Beginner     | [Interfaces](./04-interfaces.ts)                           |
| **05**  | 🟢 Beginner     | [Enums](./05-enums.ts)                                     |
| **06**  | 🟡 Intermediate | [Classes](./06-classes.ts)                                 |
| **07**  | 🟡 Intermediate | [Interfaces with Classes](./07-interfaces-with-classes.ts) |
| **08**  | 🟡 Intermediate | [Access Modifiers](./08-access-modifiers.ts)               |
| **09**  | 🟡 Intermediate | [Type Assertions](./09-type-assertions.ts)                 |
| **10**  | 🟡 Intermediate | [Generics](./10-generics.ts)                               |
| **11**  | 🟠 Advanced     | [Advanced Narrowing](./11-advanced-narrowing.ts)           |
| **12**  | 🟠 Advanced     | [TSConfig Setup](./12-tsconfig.ts)                         |
| **13**  | 🟠 Advanced     | [Intersection Types](./13-intersection-types.ts)           |
| **14**  | 🟠 Advanced     | [Utility Types](./14-utility-types.ts)                     |
| **15**  | 🟠 Advanced     | [Modules](./15-modules.ts)                                 |
| **16**  | 🔵 Professional | [Async & Promises](./16-async-promises.ts)                 |
| **17**  | 🔵 Professional | [Custom Type Guards](./17-custom-type-guards.ts)           |
| **18**  | 🔵 Professional | [Index Signatures](./18-index-signatures.ts)               |
| **19**  | 🔵 Professional | [Mapped Types](./19-mapped-types.ts)                       |
| **20**  | 🔵 Professional | [Declaration Files](./20-declaration-files.ts)             |
| **21**  | 🔴 Expert       | [Abstract Classes](./21-abstract-classes.ts)               |
| **22**  | 🔴 Expert       | [Unknown vs Any](./22-unknown-vs-any.ts)                   |
| **23**  | 🔴 Expert       | [Function Overloading](./23-function-overloading.ts)       |
| **24**  | 🔴 Expert       | [Satisfies Operator](./24-satisfies-operator.ts)           |
| **25**  | 🔴 Expert       | [Template Literals](./25-template-literal-types.ts)        |
| **26**  | 🔴 Expert       | [Const Assertions](./26-const-assertions.ts)               |
| **27**  | 🔴 Expert       | [Conditional Types](./27-conditional-types.ts)             |
| **28**  | 🔴 Expert       | [The `infer` Keyword](./28-infer-keyword.ts)               |
| **29**  | 🔴 Expert       | [Recursive Types](./29-recursive-types.ts)                 |
| **30**  | 🔴 Expert       | [Decorators](./30-decorators.ts)                           |

---

## How to use this guide

1. **Read the files in order:** Start from `01-basic-types.ts`.
2. **Read the comments:** I've added lots of ELI5 explanations inside the code.
3. **Play with the code:** Try changing values and see what errors TypeScript gives you!
4. **Publish & Share:** Feel free to fork this and share it with your friends!

## A Note from the Teacher

Learning TypeScript is like learning a new language. At first, it might feel like it's "getting in your way" with errors. But soon, you'll realize those errors are actually **helpful hints** that save you from hours of debugging later.

Happy Coding! 💻✨
