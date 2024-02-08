


//edit

let cells = 1;

const laikoIntervalas = 3;

const laikoTarpai = [3, 6, 9, 12, 15, 18, 21, 24];

for (let time = 0; time <= 24; time++) {
    if (laikoTarpai.includes(time)) {
        console.log(`Po ${time} valandų bus ${cells} ląstelės.`);
    }
    if (time % laikoIntervalas === 0) {
        cells *= 2;
    }
}