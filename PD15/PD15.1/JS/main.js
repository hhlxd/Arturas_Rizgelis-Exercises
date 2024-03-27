'use Strict'
let isArray = function(inputValue){
    if (toString.call(inputValue) === "[object Array]"){
        return true;
    }
    return false;
};
console.log(isArray ("Hello world"));
console.log(isArray ([1, 2, 3, 4, 5]));