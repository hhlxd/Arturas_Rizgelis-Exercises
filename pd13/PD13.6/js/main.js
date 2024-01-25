// Funkcija, kuri nustato kuris dviženklio skaičiaus skaitmuo yra didesnis
function didesnisSkaitmuo(dvizenklisSkaicius) {
    // Konvertuojame skaičių į tekstą
    const skaiciausTekstas = dvizenklisSkaicius.toString();

    // Tikriname, ar skaitmuo pirmoje pozicijoje yra didesnis
    if (parseInt(skaiciausTekstas[0]) > parseInt(skaiciausTekstas[1])) {
        return `Pirmas skaitmuo (${skaiciausTekstas[0]}) yra didesnis.`;
    } else if (parseInt(skaiciausTekstas[1]) > parseInt(skaiciausTekstas[0])) {
        return `Antras skaitmuo (${skaiciausTekstas[1]}) yra didesnis.`;
    } else {
        return 'Skaitmenys yra lygūs.';
    }
}

// Pavyzdys: nustatome, kuris skaitmuo yra didesnis skaičiuje 47
const rezultatas = didesnisSkaitmuo(47);
console.log(rezultatas);
