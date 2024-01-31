let Sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5];
let Vasaris = [-16, -14.5, -11, -10.3, -3.5, 0];
let Kovas = [-3, -2.5, 0, 5, 9.5, 11.2];

let vidutineTemperatura = (menTemperaturos) => {
    let suma = 0;
    for (let i = 0; i < menTemperaturos.length; i++) {
        suma += menTemperaturos[i];
    }
    return suma / menTemperaturos.length;
};

let vidutineSausioTemperatura = vidutineTemperatura(Sausis);
let vidutineVasarioTemperatura = vidutineTemperatura(Vasaris);
let vidutineKovoTemperatura = vidutineTemperatura(Kovas);

let bendrasVidurkis = (vidutineSausioTemperatura + vidutineVasarioTemperatura + vidutineKovoTemperatura) / 3;

console.log(`Vidutinė sausio temperatūra: ${vidutineSausioTemperatura.toFixed(2)}.`);
console.log(`Vidutinė vasario temperatūra: ${vidutineVasarioTemperatura.toFixed(2)}.`);
console.log(`Vidutinė kovo temperatūra: ${vidutineKovoTemperatura.toFixed(2)}.`);
console.log(`Bendras atliktų matavimų vidurkis: ${bendrasVidurkis.toFixed(2)}.`);
