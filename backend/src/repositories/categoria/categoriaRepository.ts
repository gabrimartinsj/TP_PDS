import { Pool } from "pg";
import pool from "../../../bd";
import Categoria from "../../domain/entities/Categoria";
import ICategoriaRepository from "./icategoriaRepository";

class CategoriaRepository implements ICategoriaRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getCategoria(id: number) {
    const categoria: Categoria = (await pool.query(`select * from public2."CATEGORIA" where "ID_CATEGORIA" = $1`, [id])).rows as unknown as Categoria;

    return categoria;
  }
}

export default CategoriaRepository;
