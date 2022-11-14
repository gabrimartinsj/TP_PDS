import { Pool } from "pg";
import pool from "../../../bd";
import Segmento from "../../domain/entities/Segmento";
import ISegmentoRepository from "./isegmentoRepository";

class SegmentoRepository implements ISegmentoRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getSegmento(id: number) {
    const segmento: Segmento = (await pool.query(`select * from public2."SEGMENTO" where "ID_SEGMENTO" = $1`, [id])).rows as unknown as Segmento;

    return segmento;
  }
}

export default SegmentoRepository;
