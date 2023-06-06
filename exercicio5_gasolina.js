// Faça um programa para calcular o gasto de combustível em uma viagem;
// Você terá 3 variáveis, sendo elas: preço do combustível, valor médio gasto pelo carro, e distância percorrida em KM = 1000 metros;
// Imprima no console o valor que será gasto de combustível para realizar essa viagem;
// Agora vamos receber o tipo de combustível que está no carro;
var readlineSync = require('readline-sync');

const precoGasolina = 6.66;
const precoEtanol = 5.79;
const gastoCarro = 10;
const distanciaPercorrida = 100;

// let combustivelAtual = 'Etanol' // <== Editar conforme combustível!

function calcularConsumo(preco, gasto, distancia) {
    let gastoMedio = (distancia / gasto);
    let resultado = (gastoMedio * preco);
    return resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
};

const calculoFinal = (combustivelAtual) => {
    if (combustivelAtual === 'Etanol') {
        let resultado = calcularConsumo(precoGasolina, gastoCarro, distanciaPercorrida)
        return resultado
    } else if (combustivelAtual === 'Gasolina') {
        resultado = calcularConsumo(precoEtanol, gastoCarro,
            distanciaPercorrida)
        return resultado
    } else {
        console.log('Combustível incompatível com seu veículo!')
    }
};

// Criar lista válida no TERMINAL.
var requireCombustivel = ['Gasolina', 'Etanol'],
    index = readlineSync.keyInSelect(requireCombustivel, 'Qual combustivel esta usando?');
let combustivelAtual = requireCombustivel[index];
console.log(`O valor gasto de combustível para ${distanciaPercorrida}KM é: ${calculoFinal(combustivelAtual)}`), console.log('Escreva CLEAR para limpar o terminal.');