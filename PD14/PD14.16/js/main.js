// Duomenys
const n = 3; // Pacientų skaičius
const laikai = [18, 10, 10]; // Pacientų vizitų trukmės

// Vidutinė vizito trukmė
const vidutineTrukme = laikai.reduce((sum, trukme) => sum + trukme, 0) / n;

// Skaičiuojame kiek kartų vizitas užtrunka ilgiau nei 20 minučių
const ilgesniUz20Min = laikai.filter(trukme => trukme > 20).length;

// Rezultatai
console.log(`Vidutinė vizito trukmė: ${vidutineTrukme.toFixed(1)} min.`);
console.log(`Vizitai, ilgesni nei 20 min.: ${ilgesniUz20Min}`);
