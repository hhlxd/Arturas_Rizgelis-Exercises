const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { 
  array.splice(index, 1); 
}

console.log(array); 