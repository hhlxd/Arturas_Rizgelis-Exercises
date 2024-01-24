function rastiDidziausiuSkaiciuSuma(a, b, c) {
    let skaiciai = [a, b, c];
    skaiciai.sort((x, y) => y - x);
    let sumaDidziausiu = skaiciai[0] + skaiciai[1];
    return sumaDidziausiu;
}
let a = 2;
let b = 4;
let c = 6;

let rezultatas = rastiDidziausiuSkaiciuSuma(a, b, c);
console.log(`Dviejų didžiausių skaičių suma yra: ${rezultatas}`);