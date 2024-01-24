function skaiciuotiKainaSuNuolaida(t, p) {
    let kainaSuNuolaida = t * (1 - p / 100);
    return kainaSuNuolaida;
}

function arUztenkaPinigu(sutaupyti, kainaSuNuolaida) {
    return sutaupyti >= kainaSuNuolaida;
}

let telefonasKaina = 450;
let nuolaidaProcentais = 15;
let sutaupyti = 500;

let kainaSuNuolaida = skaiciuotiKainaSuNuolaida(telefonasKaina, nuolaidaProcentais);
console.log(`Išmanusis telefonas su ${nuolaidaProcentais}% nuolaida kainuos ${kainaSuNuolaida.toFixed(2)} eurų.`);

let pakankaPinigu = arUztenkaPinigu(sutaupyti, kainaSuNuolaida);
console.log(`Austėjos sutaupyti pinigai ${pakankaPinigu ? 'užtenka' : 'neužtenka'} įsigyti išmanųjį telefoną.`);