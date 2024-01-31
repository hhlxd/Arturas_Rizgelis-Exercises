// Funkcija, kuri tikrina, ar skaičius yra palindromas
function arPalindromas(skaicius) {
    const skaiciausTekstas = skaicius.toString();
    const atvirkstinisTekstas = skaiciausTekstas.split('').reverse().join('');
    return skaiciausTekstas === atvirkstinisTekstas;
}

// Funkcija, kuri randa pirmąją dešimtį natūraliųjų skaičių, kurių kvadratai yra palindromai
function rastiPalindrominiusKvadratus() {
    const palindrominiaiKvadratai = [];
    let skaitiklis = 1;

    while (palindrominiaiKvadratai.length < 10) {
        const kvadratas = skaitiklis ** 2;
        if (arPalindromas(kvadratas)) {
            palindrominiaiKvadratai.push(kvadratas);
        }
        skaitiklis++;
    }

    return palindrominiaiKvadratai;
}

// Rasti ir išvesti pirmąją dešimtį palindrominių kvadratų
const rezultatai = rastiPalindrominiusKvadratus();
console.log('Pirmoji dešimtis palindrominių kvadratų:', rezultatai);
