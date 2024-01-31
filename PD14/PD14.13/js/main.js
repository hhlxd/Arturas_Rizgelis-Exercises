// Funkcija, kuri randa skaičius nuo 1 iki 300 su tik penkiais dalikliais
function rastiSkaičiusSuPenkiaisDalikliais() {
    const rezultatai = [];

    for (let skaicius = 1; skaicius <= 300; skaicius++) {
        let dalikliuSkaicius = 0;

        // Tikriname, kiek skaičius turi daliklių
        for (let daliklis = 1; daliklis <= skaicius; daliklis++) {
            if (skaicius % daliklis === 0) {
                dalikliuSkaicius++;
            }
        }

        // Jei skaičius turi tik penkis daliklius, pridedame jį prie rezultatų
        if (dalikliuSkaicius === 5) {
            rezultatai.push(skaicius);
        }
    }

    return rezultatai;
}

// Pavyzdys: rasti skaičius nuo 1 iki 300 su tik penkiais dalikliais
const rezultatai = rastiSkaičiusSuPenkiaisDalikliais();

// Spausdiname rezultatus
console.log('Skaičiai nuo 1 iki 300 su tik penkiais dalikliais:', rezultatai);
