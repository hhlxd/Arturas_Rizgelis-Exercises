function skaiciuotiKainas(p1, p2, p, s) {

    let nuolaida1 = p1 * (p / 100);
    let nuolaida2 = p2 * (p / 100);

    let kaina1 = p1 - nuolaida1;
    let kaina2 = p2 - nuolaida2;

    if (kaina1 + kaina2 <= s) {
        let visoKaina = kaina1 + kaina2;
        return `Pirkėjui užteks pinigų. Abi prekės kainuos ${visoKaina.toFixed(2)} eurų.`;
    } else {
        return "Pirkėjui nepakaks pinigų.";
    }
}

let preke1Kaina = 30;
let preke2Kaina = 20;
let nuolaidaProcentais = 10;
let pirkimoLimitas = 45;

let rezultatas = skaiciuotiKainas(preke1Kaina, preke2Kaina, nuolaidaProcentais, pirkimoLimitas);
console.log(rezultatas);