//console.log("Im ready");


// Iteration 1: Names and Input
let hacker1 = "Tom";
let hacker2 = "Timothy";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
    
    if (hacker1.length > hacker2.length) {
    console.log(
      `the driver has the longest name, it has ${hacker1.length} characters`
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker1.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  }

// Iteration 3: Loops
let upperHacker1 = hacker1.toUpperCase();

let spacedHacker1 = "";
for (let i = 0; i < upperHacker1.length; i++) {
  spacedHacker1 += upperHacker1[i] + " ";
}
console.log(
  `Driver's name, separated by a space and in capitals --${spacedHacker1}--`
);