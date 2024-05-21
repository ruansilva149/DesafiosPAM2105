function encontrarItensFaltantes(array) {
    const itensFaltantes = [];
    
    for (let i = 0; i < array.length - 1; i++) {
        let atual = array[i];
        let proximoEsperado = atual + 1;
        let proximo = array[i + 1];
        while (proximo !== proximoEsperado) {
    
            itensFaltantes.push(proximoEsperado);
            proximoEsperado++;
        }
    }
    return itensFaltantes;
}

const array = [1, 2, 3, 4, 5, 6, 7, 9, 10, 12];
const itensFaltantes = encontrarItensFaltantes(array);
console.log("Itens faltantes: ", itensFaltantes);
