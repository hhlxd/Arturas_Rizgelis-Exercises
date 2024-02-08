const Sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5];
const Vasaris = [-16, -14.5, -11, -10.3, -3.5, 0];
const Kovas = [-3, -2.5, 0, 5, 9.5, 11.2];

function vidtemp(array){
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
};

let bendrTemp = (Number(vidtemp(Sausis).toFixed(2)) + Number(vidtemp(Vasaris).toFixed(2)) + Number(vidtemp(Kovas).toFixed(2))) / 3;
console.log(typeof bendrTemp);

console.log(`Vid. Sausio temp.: ${vidtemp(Sausis).toFixed(2)}.`);
console.log(`Vid. Vasario temp.: ${vidtemp(Vasaris).toFixed(2)}.`);
console.log(`Vid. Kovo temp.: ${vidtemp(Kovas).toFixed(2)}.`);
console.log(`Bendr. atliktu matavimu vidurkis: ${bendrTemp.toFixed(2)}.`);