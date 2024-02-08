const pay = [824.25, 1225.12, 459.16, 1500];

function newPay(pay) {
    if(pay > 1000){
        return (pay * 1.05).toFixed(2);
    } else{
        return (pay * 1.1).toFixed(2);
    }
};

const allnewPay = [];

for (let i = 0; i < pay.length; i++) {
    allnewPay.push(newPay(pay[i]));
}

//Percentage formula:
// function percentage(partialValue, totalValue) {
//     return (100 * partialValue) / totalValue;
//  } 
// to comment multi lines: ctrl+k and ctrl+c.

console.log(`Atlyginimas iki: ${pay.join(", ")}`);
console.log(`Atlyginimas po: ${allnewPay.join(", ")}`);