// Funkcija, kuri išveda skaičius iš intervalo [n; m], kurių paskutinis skaitmuo nelygus 3 ir dalijasi iš 3
function isvestiSkaičius(n, m) {
    for (let skaicius = n; skaicius <= m; skaicius++) {
        // Tikriname, ar paskutinis skaitmuo nelygus 3 ir skaicius dalijasi iš 3 be liekanos
        if (skaicius % 3 === 0 && skaicius % 10 !== 3) {
            console.log(skaicius);
        }
    }
}

// Duomenys
const n = 30;
const m = 40;

// Išvedame rezultatus
isvestiSkaičius(n, m);
