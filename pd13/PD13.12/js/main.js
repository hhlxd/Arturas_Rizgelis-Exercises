function kiekKartuNuvažiuosVairuotojas(n, m) {
    
    let kartu = Math.ceil(n / m);
    return kartu;
}

let prekiuDezes = 35;
let masinosTalpa = 10;

let kartuNuvažiuos = kiekKartuNuvažiuosVairuotojas(prekiuDezes, masinosTalpa);
console.log(`Vairuotojas turės nuvažiuoti į sandėlį ${kartuNuvažiuos} kartus.`);