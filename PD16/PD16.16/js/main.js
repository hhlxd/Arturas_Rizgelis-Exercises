// Define a function named is_perfect that checks if a given number is a perfect number

function is_perfect(number) {

    var temp = 0;
  
    for (var i = 1; i <= number / 2; i++) {
     
      if (number % i === 0) {
    
        temp += i;
      }
    }
  
    if (temp === number && temp !== 0) {
   
      console.log("It is a perfect number.");
    } 
    
    else {
      console.log("It is not a perfect number.");
    }
  }
  
  is_perfect(28); 
  