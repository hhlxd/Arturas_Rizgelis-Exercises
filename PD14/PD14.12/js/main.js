function arPirminisSkaicius(a) {
    if (a < 2) return false;
    for (let i = 2; i <= Math.sqrt(a); i++)
        if (a % i === 0) return false;
    return true;
}

const a = parseInt(prompt("Įveskite natūralųjį skaičių a:"));
console.log(`${a} ${arPirminisSkaicius(a) ? 'yra' : 'nėra'} pirminis skaičius.`);
