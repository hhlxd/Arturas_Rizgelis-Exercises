const a = 20;
const b = 8;

let yraDaliklis = false;

for (let daliklis = 1; daliklis <= b; daliklis++) {
    if (a % daliklis === 0) {
        yraDaliklis = true;
        break;
    }
}

if (yraDaliklis) {
    console.log(`${a} yra ${b} daliklis.`);
} else {
    console.log(`${a} nėra ${b} daliklis.`);
}