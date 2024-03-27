const maxNum = 10;

console.log("Results:");

for (let num = 1; num <= maxNum; num++) {
    var squareNum = num * num;
    var squareNumString = squareNum.toString();
    var reverseString = squareNumString.split("").reverse().join("");
    if (squareNumString == reverseString) {
        console.log(num, squareNum);
    }
}