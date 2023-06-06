// Faça um programa para calcular o gasto de combustível em uma viagem;
// Você terá 3 variáveis, sendo elas: preço do combustível, valor médio gasto pelo carro, e distância percorrida em KM = 1000 metros;
// Imprima no console o valor que será gasto de combustível para realizar essa viagem;

let precoCombustivel = 5.79;
let gastoCarro = 12;
let distanciaPercorrida = 1580;

function calcularConsumo(preco, gasto, distancia) {
    let gastoMedio = (distancia / gasto);
    let resultado = (gastoMedio * preco);
    return resultado.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
};

console.log(calcularConsumo(precoCombustivel, gastoCarro, distanciaPercorrida));