// Duomenys
const a = 96;
const z = 103;

// Funkcija, kuri skaičiuoja, kiek plokštelių reikės visų laiptinės butų numeriams
function skaiciuotiPloksteles(a, z) {
    let ploksteliuSkaicius = 0;

    for (let numeris = a; numeris <= z; numeris++) {
        ploksteliuSkaicius += numeris.toString().length;
    }

    return ploksteliuSkaicius;
}

// Apskaičiuoti ir išvesti rezultatus
const k = skaiciuotiPloksteles(a, z);
console.log(`Rezultatas k = ${k}`);
