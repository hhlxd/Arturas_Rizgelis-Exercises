let realNumber = 15;

console.log("The number is",realNumber);

var divisors = "";
var divisorSum = 0;
var evenDivisorSum = 0;

for (let i = 1; i <= realNumber; i++) {
    if (realNumber % i == 0) {
        divisors = divisors + i + " ";
        divisorSum = divisorSum + i;
        if (i % 2 == 0) {
            evenDivisorSum = evenDivisorSum + i;
        }
    }
}

console.log(realNumber,"is divisible by:",divisors);
console.log("The sum of divisors is:",divisorSum);
console.log("The sum of even divisors is:",evenDivisorSum);