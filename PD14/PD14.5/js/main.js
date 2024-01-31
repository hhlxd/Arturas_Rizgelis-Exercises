let atlyginimai = [824.25, 1225.12, 459.16, 1500];

let naujasAtliginimas = (esamasAtlyginimas) =>
  (esamasAtlyginimas > 1000 ? esamasAtlyginimas * 1.05 : esamasAtlyginimas * 1.1).toFixed(2);

let naujiAtlyginimai = atlyginimai.map(naujasAtliginimas);

console.log("Atlyginimas iki:", atlyginimai.join(", "));
console.log("Atlyginimas po:", naujiAtlyginimai.join(", "));
