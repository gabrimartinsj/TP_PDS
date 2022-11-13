import { Pool } from "pg";
import pool from "../../../bd";
import Produto from "../../domain/entities/Produto";
import IProdutoRepository from "./iprodutoRepository";

class ProdutoRepository implements IProdutoRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getProduto(id: number) {
    const produto: Produto = (await pool.query(`select * from public2."PRODUTO" where "ID_PRODUTO" = $1`, [id])).rows as unknown as Produto;

    return produto;
  }

  async getProdutos() {
    const produto: Produto[] = (await pool.query(`select * from public2."PRODUTO"`)).rows;

    return produto;
  }

  async getProdutosDeLoja(id: number) {
    const produto: Produto[] = (await pool.query(`SELECT B."ID_LOJA", A."ID_PRODUTO", "NOME_PRODUTO", "ID_CATEGORIA", "DESCRICAO", "DESCONTO", "ESTOQUE", "PRECO", "URL_PRODUTO"
    FROM public2."PRODUTO" A
    INNER JOIN public2."COLECAO" B
    ON A."ID_PRODUTO" = B."ID_PRODUTO" 
    WHERE B."ID_LOJA" = $1`, [id])).rows;

    return produto;
  }

  async getProdutosDeColecao(id: number) {
    const produto: Produto[] = (await pool.query(`SELECT B."ID_COLECAO", A."ID_PRODUTO", "NOME_PRODUTO", "ID_CATEGORIA", "DESCRICAO", "DESCONTO", "ESTOQUE", "PRECO", "URL_PRODUTO"
    FROM public2."PRODUTO" A
    INNER JOIN public2."COLECAO" B
    ON A."ID_PRODUTO" = B."ID_PRODUTO" 
    WHERE B."ID_COLECAO" = $1`, [id])).rows;

    return produto;
  }
}

export default ProdutoRepository;
