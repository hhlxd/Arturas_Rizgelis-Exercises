function test(arr_nums) 
 {
  return arr_nums.sort((x,y) => y - x)[arr_nums.length-3]
}

nums = [2, 3, 5, 7, 1]
console.log("maziausias trecias skaicius: "+test(nums));