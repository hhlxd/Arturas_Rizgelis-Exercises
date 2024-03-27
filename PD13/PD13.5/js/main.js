let apskritimoSpindulys = 6;
let kvadratoKrastine = 5;
let staciakampioIlgis = 8;
let staciakampioPlotis = 9;

const apskritimoPlotas = Math.PI * Math.pow(apskritimoSpindulys, 2);
const kvadratoPlotas = Math.pow(kvadratoKrastine, 2);
const staciakampioPlotas = staciakampioIlgis * staciakampioPlotis;

let didziausiasPlotas = Math.max(apskritimoPlotas, kvadratoPlotas, staciakampioPlotas);

console.log(`Apskritimo plotas: ${apskritimoPlotas.toFixed(2)}`);
console.log(`Kvadrato plotas: ${kvadratoPlotas.toFixed(2)}`);
console.log(`Stačiakampio plotas: ${staciakampioPlotas.toFixed(2)}`);
console.log(`Didžiausias plotas: ${didziausiasPlotas.toFixed(2)}`);