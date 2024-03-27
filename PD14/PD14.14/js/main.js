var n = 30;
const m = 40;
const divisor = 2;
const forbiddenDigit = 2;

console.log("Interval:",n,m);

console.log("Applicable numbers:");

for (let i = n; i <= m; i++) {
    let lastDigit = i % n;
    let division = i % divisor;

    if (division == 0 && lastDigit != forbiddenDigit) {
        console.log(i);
    }
}