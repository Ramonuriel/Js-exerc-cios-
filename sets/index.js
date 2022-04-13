const meuArray = [30, 30, 40, 80, 5, 223, 420, 87, 500, 2022, 4048];

function valoresunicos(arr){
    const myset = new Set(arr)

    return [...myset];
}

console.log(valoresunicos(meuArray));