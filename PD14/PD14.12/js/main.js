let realNumber = 3;

console.log("Is",realNumber,"a prime number?");

var divisor = 2;
var isPrimeNumber = 0;
while (realNumber > divisor) {
    if (realNumber % divisor == 0) {
        console.log("No");
        isPrimeNumber++;
        break;
    }
    divisor++;
}

if (isPrimeNumber == 0) {
    console.log("Yes");
}