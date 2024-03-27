
/**JavaScript funkciją, kuri grąžina pateiktą eilutę, kurioje raidės yra išdėstytos
abėcėlės tvarka */

function alphabet_order(str)

  {

return str.split('').sort().join('');

  }

console.log(alphabet_order("Lietuva"));