let x = 5;
let y = 10;
let z = -12;

let number;

if (x === 0 || y === 0 || z === 0) {
  number = "Nulis (0)";
} else {
  let negatives = 0;

  if (x < 0) negatives++;
  if (y < 0) negatives++;
  if (z < 0) negatives++;

  if (negatives % 2 === 0) {
    number = "+";
  } else {
    number = "-";
  }
}

console.log("Sandaugos ženklas: " + number);