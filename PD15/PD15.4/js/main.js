let charArray = ["ab", "ba", "aa", "ac", "a"]
let searchChar = "a";
let counter = 0;
for(let i = 0; i< charArray.length; i++){
    if (charArray [i] == searchChar){
        counter++;
    }
}
console.log(counter)