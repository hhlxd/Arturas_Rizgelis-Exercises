/**JavaScript funkciją, kuri naudoja CallBack funkciją */


function greeting(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  function farewell() {
    console.log("Goodbye!");
  }
  
  greeting("Jonas", farewell);
  