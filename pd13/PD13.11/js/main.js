function patikrintiPaskolosSalygas(tevoAtlyginimas, motinosAtlyginimas, k, n, s) {

    let seimosPajamos = tevoAtlyginimas + motinosAtlyginimas;
    
    if (seimosPajamos / n >= s && seimosPajamos - k >= 0) {
        return "Bankas suteiks paskolą";
    } else {
        return "Bankas paskolos nesuteiks";
    }
}

let tevoAtlyginimas = 4000;
let motinosAtlyginimas = 2500;
let k = 4000;
let n = 2;
let s = 3000;

let rezultatas = patikrintiPaskolosSalygas(tevoAtlyginimas, motinosAtlyginimas, k, n, s);
console.log(rezultatas);