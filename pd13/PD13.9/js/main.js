function arTelpaIVoka(a, b, c, d) {
    if ((c + 2) <= a) {
        if ((d + 2) <= b) {
            return true;
        }
    }
    return false;
}

let vokoIlgis = 20;
let vokoPlotis = 40;

let atvirukoIlgis = 10;
let atvirukoPlotis = 20;

if (arTelpaIVoka(vokoIlgis, vokoPlotis, atvirukoIlgis, atvirukoPlotis)) {
    console.log("Atvirukas telpa i voka Valiooo");
} else {
    console.log("Atvirukas netelpa i voka.");
}