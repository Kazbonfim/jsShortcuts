class Produto {
  constructor(id, nome, preco) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  static criar(id, nome, preco) {
    return new Produto(id, nome, preco);
  }

  static obter(id) {
    // Lógica para obter um produto com base no ID, por exemplo, buscar no banco de dados
    // Retornar uma instância de Produto com os dados encontrados ou null se não encontrado
  }

  static atualizar(produto) {
    // Lógica para atualizar um produto, por exemplo, salvar no banco de dados
    // Retornar true se a atualização for bem-sucedida ou false caso contrário
  }

  static excluir(id) {
    // Lógica para excluir um produto com base no ID, por exemplo, remover do banco de dados
    // Retornar true se a exclusão for bem-sucedida ou false caso contrário
  }

  // Métodos adicionais conforme necessário
}

// Exemplo de uso:
const produto = Produto.criar(1, 'Camiseta', 29.99);
console.log(produto);

const produtoObtido = Produto.obter(1);
console.log(produtoObtido);

produto.nome = 'Camiseta Nova';
const atualizacaoSucesso = Produto.atualizar(produto);
console.log(atualizacaoSucesso);

const exclusaoSucesso = Produto.excluir(1);
console.log(exclusaoSucesso);
