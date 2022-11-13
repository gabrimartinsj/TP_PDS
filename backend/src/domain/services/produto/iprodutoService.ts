import Produto from "../../entities/Produto";

interface IProdutoService {
  getProduto(id: number): Promise<Produto>;

  getProdutos(): Promise<Produto[]>;

  getProdutosDeLoja(id: number): Promise<Produto[]>;

  getProdutosDeColecao(id: number): Promise<Produto[]>;
}

export default IProdutoService;
