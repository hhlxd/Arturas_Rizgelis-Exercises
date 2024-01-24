function arDaliklis(a, b) {
    if (b === 0) {
        return "Negalima dalinti iš nulio.";
    }

    if (a % b === 0) {
        return `${a} yra ${b} daliklis.`;
    } else {
        return `${a} nėra ${b} daliklis.`;
    }
}

let b = 14;
let a = 6;

let rezultatas = arDaliklis(a, b);
console.log(rezultatas);