


//edit

let i = 0;
while (i <= 10) {
    let x = 0;
    let line = '';
    while (x <= 10) {
        line += `${i * x}\t`;
        x++;
    }
    console.log(line);
    i++;
}