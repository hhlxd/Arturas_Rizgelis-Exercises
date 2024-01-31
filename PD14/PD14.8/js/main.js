let i = 1;
while (i <= 10) {
    let j = 1;
    let eilute = '';
    while (j <= 10) {
        eilute += `${i * j}\t`;
        j++;
    }
    console.log(eilute);
    i++;
}
