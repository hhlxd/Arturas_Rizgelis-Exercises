/*JavaScript funkciją, kuri suranda eilutėje pirmąjį nepasikartojantį simbolį */


function findUnique(str) {
    let uniq = "";

    for (let i = 0; i < str.length; i++) {
        
        if (uniq.includes(str[i]) === false) {
            
            uniq += str[i]
        }
    }
    return uniq;
}
 
console.log(findUnique("Atostogos"))
console.log(findUnique("Atostogos yra brangu"))
