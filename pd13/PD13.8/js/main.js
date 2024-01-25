// Funkcija, kuri patikrina nelygybę a < b < c arba b > a
function patikrinkNelygybe(a, b, c) {
    if ((a < b && b < c) || (b > a)) {
        return true;
    } else {
        return false;
    }
}

// Pavyzdys: nustatome, ar tenkinama nelygybė su skaičiais 3, 7, 10
const rezultatas = patikrinkNelygybe(3, 7, 10);

// Spausdiname rezultatą
console.log(rezultatas ? 'Nelygybė tenkinama.' : 'Nelygybė netenkinama.');
