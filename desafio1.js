let { get, print } = require('./funcoes-auxiliares') // Não será necessário para a execução final, por favor desconsiderem. 

const numeros = [5, 3, 4, 1, 10, 8];

let maiorNumeroPar = null;
let menorNumeroImpar = null;

// Laço para comparar automaticamente os valores contidos em números e de forma orgânica.
for (let i = 0; i < numeros.length; i++) {
    let auxiliar = numeros[i]; // Variável auxiliar que armazena os dados conforme repetições do laço.

    if (auxiliar % 2 === 0) { // Resto da divisão, para definir os valores pares & ímpares.
        if (auxiliar > maiorNumeroPar) { // Se os valores em 'auxiliar' forem maiores que os dados nulos contidos em 'maiorNumeroPar', então atribuímos esses valores na saída.
            maiorNumeroPar = auxiliar;
            //******DEBUG console.log(maiorNumeroPar);
        } else if (auxiliar < maiorNumeroPar) { // Depois de termos definido os valores maiores, podemos usar como parâmetro de comparação para encontrar os menores.
            menorNumeroImpar = auxiliar; // E eis que atribuímos eles á variável 'menorNumeroImpar' na saída.
            //*******DEBUG console.log(menorNumeroImpar);
        }
    }
} // Fim!

console.log('O maior valor par do Array é: ' + maiorNumeroPar)
console.log('O menor valor dos ímpares é: ' + menorNumeroImpar);
// print(maiorNumeroPar);
// print(menorNumeroImpar);
