/*
  🎓 CHAPTER 12: TSCONFIG SETUP
  ------------------------------
  'tsconfig.json' is the "Manual" for TypeScript.
  It tells the compiler exactly how you want your code to be treated.
*/

/*
  {
    "compilerOptions": {
      // 1. TARGET: "How old is the computer running this?"
      // 'esnext' means modern browsers. Use 'es5' for very old ones.
      "target": "esnext",

      // 2. MODULE: "How do we talk to other files?"
      // 'commonjs' is for Node.js. 'esnext' is for modern web.
      "module": "commonjs",

      // 3. STRICT: "How strict should we be?"
      // 'true' means TypeScript will be very careful and catch MORE bugs! (Highly recommended)
      "strict": true,

      // 4. OUTDIR: "Where should the finished JavaScript files go?"
      "outDir": "./dist",

      // 5. ROOTDIR: "Where are my original TypeScript files?"
      "rootDir": "./src",

      // 6. NOIMPLICITANY: "Don't let me use 'any' by accident!"
      "noImplicitAny": true
    }
  }
*/

// SUMMARY:
// - tsconfig.json is the brain of your project.
// - It transforms your beautiful .ts files into working .js files.
// - Use 'npx tsc --init' to create this file automatically!
