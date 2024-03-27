/**JavaScript funkciją, kuri pateiktame šalių pavadinimų sąraše suranda ilgiausios
šalies pavadinimą */


function Longest_Country_Name(country_name) {
    return country_name.reduce(function(lname, country) {
  
      return lname.length > country.length ? lname : country;
    }, "");
  }
  

  console.log(Longest_Country_Name(["Lietuva", "Lenkija", "Jungtines Valstijos"]));