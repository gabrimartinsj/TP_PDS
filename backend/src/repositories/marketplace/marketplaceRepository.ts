import { Pool } from "pg";
import pool from "../../../bd";
import Loja from "../../domain/entities/Loja";
import IMarketplaceRepository from "./imarketplaceRepository";

class MarketplaceRepository implements IMarketplaceRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getLojas() {
    const lojas: Loja[] = (await pool.query(`select * from public2."LOJA"`))
      .rows;

    return lojas;
  }
}

export default MarketplaceRepository;
