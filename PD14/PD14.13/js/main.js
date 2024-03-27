const maxNumber = 300;
const maxDivisors = 5;
var number = 1;

console.log("Numbers that only have",maxDivisors,"divisors:");

while (number <= maxNumber) {
    var divisorCount = 0;

    for (let divisor = 1; divisor <= number; divisor++) {
        if (number % divisor == 0) {
            divisorCount++;
        }
    }

    if (divisorCount == maxDivisors) {
        console.log(number)
    }

    number++;
}