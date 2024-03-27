var startingNum = 96;
const endNum = 103;
var tileSum = 0;

console.log("There are apartments which are numbered from",startingNum,"to",endNum);

for (; startingNum <= endNum; startingNum++) {
    let numText = startingNum.toString();
    tileSum = tileSum + numText.length;
}

console.log("We would need",tileSum,"tiles to cover all apartments");