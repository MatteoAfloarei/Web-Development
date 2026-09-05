// while loop = repeat some code while a condition is true
// This example keeps asking for the user's name until they type something.

let username = ""; // Start with an empty string, so the loop runs at least once.

while (username === "") {
    // Condition: keep looping while the username is empty.
    username = window.prompt("Enter your name: ");
    // Each time the user enters a value, the condition is checked again.
}

console.log(`Hello, ${username}!`); // Once the input is not empty, the loop stops and we greet the user.