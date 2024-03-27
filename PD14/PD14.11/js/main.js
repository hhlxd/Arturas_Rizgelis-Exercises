let discount = 25;
let savings = 1500;
let phonePrice = 1799.99;

console.log("Austeja saved up",savings,"eur.");
console.log("The phone costs",phonePrice,"eur without a discount.");
console.log("The discount is",discount,"percent.");

let discountOff = (phonePrice / 100) * discount;
discountOff = discountOff.toFixed(2);

let priceWithDiscount = phonePrice - discountOff;

console.log("The phone costs",priceWithDiscount,"eur with the",discount,"percent discount.");

if (savings >= priceWithDiscount) {
    console.log("Austeja will be able to buy the phone.");
} else if (savings < priceWithDiscount) {
    console.log("Austeja won't be able to buy the phone.");
} 