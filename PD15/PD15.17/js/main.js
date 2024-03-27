const start = 9.5;
const end = 10.9;
const times = 513;
const array = [];
for (let i = 0; i < times; ++i) {
  const u = i / (times - 1);            // this will go from 0 to 1
  const v = start + (end - start) * u;  // this will go from 9.5 to 10.9
  array.push(v);
}
console.log(array);