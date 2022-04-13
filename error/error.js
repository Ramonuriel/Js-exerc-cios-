function validaArrays(arr, num) {
    try {
            if (!arr && !num) throw new ReferenceError ('Envie os Parametros!');

            if (typeof arr !== 'object')
                throw new TypeError ('Envie um elemento do tipo Array!');

            if (typeof num !== 'number')
                throw new TypeError('Envie um elemento do tipo Numero');

            if (arr.length !== 'num')
                throw new RangeError('Tamanho do Array invalido');

        return arr;

    }catch (e) {
        if (e instanceof RangeError) {
            console.log('isso é um RangeError!');
            console.log(e.message);
            console.log(e.stack);
        } else if (e instanceof ReferenceError) {
            console.log('isso é um ReferenceError!');
            console.log(e.message);
            console.log(e.stack);

        } else if (e instanceof TypeError) {
            console.log('isso é um typerError');
            console.log(e.message);
            console.log(e.stack);
        } else {
            console.log('Erro não Listado!');
            console.log(e.stack);
        }

    }
}

console.log(validaArrays());