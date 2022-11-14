import Produto from "../../domain/entities/Produto";

interface IProdutoRepository {
  getProduto(id: number): Promise<Produto>;

  getProdutos(): Promise<Produto[]>;

  getProdutosDeLoja(id: number): Promise<Produto[]>;

  getProdutosDeColecao(id: number): Promise<Produto[]>;
}

export default IProdutoRepository;
