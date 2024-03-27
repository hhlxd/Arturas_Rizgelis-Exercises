/**JavaScript funkciją, kuri grąžina n eilučių ir n stulpelių matricą */


function identity_matrix(n) {
    let imatrix = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        if (i === j){
          row.push(1);
        } else {
          row.push(0);
        }
      }
      imatrix.push(row);
    }
    return imatrix;
  }
  console.log(identity_matrix(4));
  