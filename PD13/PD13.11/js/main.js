let box = 10000;
let capacity= 350;


if(box > capacity){
    let k = 0;
    do {
        box -= capacity;
        k = k + 1;
    } while (box >= 0);
    
    console.log(`Truck will go ${k} times to bring all boxes`);
} else if(box < capacity){
    console.log(`truck  will go once to bring all boxes`)
}