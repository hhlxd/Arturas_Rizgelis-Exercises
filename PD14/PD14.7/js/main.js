let n = 1997;
let m = 2018;

for (let metai = n; metai <= m; metai++) {
  if ((metai % 4 === 0 && metai % 100 !== 0) || (metai % 400 === 0)) {
    console.log(metai);
  }
}
