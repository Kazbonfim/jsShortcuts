// Evitando que ID se repitam.
let id = 0 // Inicializador.

const usedIds = [] // Lista de Ids usadas.

const nextId = () => { 
    id++ 
    while (usedIds.includes(id)) { // Verifica se id já existe no array usedIds
        id++
    }

    usedIds.push(id)
    return id
};

console.log(nextId()) // Chamando e inicializando processo de criação de Id não-repetente. 
