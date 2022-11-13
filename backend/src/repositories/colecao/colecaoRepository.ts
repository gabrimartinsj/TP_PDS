import { Pool } from "pg";
import pool from "../../../bd";
import Colecao from "../../domain/entities/Colecao";
import IColecaoRepository from "./icolecaoRepository";

class ColecaoRepository implements IColecaoRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getColecao(id: number) {
    const colecao: Colecao = (await pool.query(`select * from public2."COLECAO" where "ID_COLECAO" = $1`, [id])).rows as unknown as Colecao;

    return colecao;
  }

  async getColecaoDeLoja(id: number) {
    const colecao: Colecao[] = (await pool.query(`select * from public2."COLECAO" where "ID_LOJA" = $1`, [id])).rows;

    return colecao;
  }
}

export default ColecaoRepository;
