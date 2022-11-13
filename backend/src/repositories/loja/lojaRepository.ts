import { Pool } from "pg";
import pool from "../../../bd";
import Loja from "../../domain/entities/Loja";
import ILojaRepository from "./ilojaRepository";

class LojaRepository implements ILojaRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getLoja(id: number) {
    const loja: Loja = (await pool.query(`select * from public2."LOJA" where "ID_LOJA" = $1`, [id])).rows as unknown as Loja;

    return loja;
  }
}

export default LojaRepository;
