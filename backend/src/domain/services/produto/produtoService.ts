import ProdutoRepository from "../../../repositories/produto/produtoRepository";
import Produto from "../../entities/Produto";
import IProdutoService from "./iprodutoService";

export class ProdutoService implements IProdutoService {
  produtoRepository: ProdutoRepository;

  constructor() {
    this.produtoRepository = new ProdutoRepository();
  }

  async getProduto(id: number): Promise<Produto> {
    return this.produtoRepository.getProduto(id);
  }

  async getProdutosDeLoja(id: number): Promise<Produto[]> {
    return this.produtoRepository.getProdutosDeLoja(id);
  }

  async getProdutos(): Promise<Produto[]> {
    return this.produtoRepository.getProdutos();
  }

  async getProdutosDeColecao(id: number): Promise<Produto[]> {
    return this.produtoRepository.getProdutosDeColecao(id);
  }
}
