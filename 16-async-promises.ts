/*
  🎓 CHAPTER 16: ASYNC & PROMISES
  --------------------------------
  Async is for code that "takes time".
  Think of it like ordering a pizza: you order it (the request), 
  then you do other things while you wait (the promise), 
  and finally, the pizza arrives (the result!).
*/

// 1. PROMISE: "I'll give you an answer later"
// Imagine a function that "fetches" a user's name from a database.
// We use Promise<string> to say "I will give you a string, just wait!"
function fetchUserName(): Promise<string> {
  return new Promise((resolve) => {
    // Wait 2 seconds...
    setTimeout(() => {
      resolve("Tushar");
    }, 2000);
  });
}

// 2. ASYNC / AWAIT: "The easiest way to wait"
// Use the 'async' keyword on functions that need to wait.
// Use 'await' to pause the code until the promise is done.
async function showGreeting() {
  console.log("Fetching name...");
  
  // PAUSE! Wait for the name to arrive.
  const name = await fetchUserName();
  
  console.log(`Hello, ${name}!`); // "Hello, Tushar!"
}

showGreeting();

// 3. ERROR HANDLING: "What if the pizza never arrives?"
// Use 'try/catch' for error handling!
async function tryToFetch() {
  try {
    const data = await fetchUserName();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong!");
  }
}

// SUMMARY:
// - Promise<T>: "I will eventually give you a T."
// - async: A function that can wait for things.
// - await: Pauses code execution until the value is ready.
