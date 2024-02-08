let lastTotal = 0;
let lastStr = "";

for(let i = 1; i<=100; ++i){
    let total = (lastTotal ?? 0) + i;
    console.log(`Iteration ${i}: ${total === 1 ? "" : total}`);
    lastTotal = total;
};