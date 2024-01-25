function didziausiasStaciakampioPlotas(s) {
    let krastinesIlgis = Math.floor(s / 2);
    let plotas = krastinesIlgis * krastinesIlgis;

    return plotas;
}

let virvesIlgis = 8;

let didziausiasPlotas = didziausiasStaciakampioPlotas(virvesIlgis);
console.log(`Didžiausias stačiakampio plotas, kurį gali pažymėti ūkininkas su ${virvesIlgis} metrų virve, yra ${didziausiasPlotas} kvadratiniai metrai.`);