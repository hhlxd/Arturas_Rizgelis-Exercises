function rastiDalikliusIrSumas(a) {
    let dalikliai = [];
    let lyginiaiDalikliai = [];

    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            dalikliai.push(i);
            if (i % 2 === 0) {
                lyginiaiDalikliai.push(i);
            }
        }
    }

    const sumaDalikliu = dalikliai.reduce((sum, value) => sum + value, 0);
    const sumaLyginiuDalikliu = lyginiaiDalikliai.reduce((sum, value) => sum + value, 0);

    return {
        dalikliai: dalikliai,
        sumaDalikliu: sumaDalikliu,
        lyginiaiDalikliai: lyginiaiDalikliai,
        sumaLyginiuDalikliu: sumaLyginiuDalikliu
    };
}

// Pavyzdys naudojant funkciją
const a = parseInt(prompt("Įveskite skaičių a:"));
const rezultatai = rastiDalikliusIrSumas(a);

console.log(`Dalikliai skaičiaus ${a}: ${rezultatai.dalikliai}`);
console.log(`Daliklių suma: ${rezultatai.sumaDalikliu}`);
console.log(`Lyginių daliklių suma: ${rezultatai.sumaLyginiuDalikliu}`);
