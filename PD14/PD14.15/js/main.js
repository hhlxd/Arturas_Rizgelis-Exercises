var s1 = 222;
const s2 = 245;

console.log("Lottery numbers: from",s1,"to",s2);

console.log("And the lucky numbers are...");

for (let i = s1; i <= s2; i++) {
    let digit1 = i / 100;
    let digit2 = (i % 100) / 10;
    let digit3 = i % 10;

    digit1 = Math.floor(digit1);
    digit2 = Math.floor(digit2);
    digit3 = Math.floor(digit3);

    if (digit2 == 0) {
        digit2 = 1;
    } else if (digit3 == 0) {
        digit3 = 1;
    }

    if (i % 3 == 0) {
        if (digit1 % 3 == 0 || digit2 % 3 == 0 || digit3 % 3 == 0) {
            console.log(i);
        }
    }
}