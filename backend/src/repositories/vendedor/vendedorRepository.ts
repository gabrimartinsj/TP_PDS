import { Pool } from "pg";
import pool from "../../../bd";
import Vendedor from "../../domain/entities/Vendedor";
import IVendedorRepository from "./ivendedorRepository";

class VendedorRepository implements IVendedorRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getVendedor(id: number) {
    const vendedor: Vendedor = (await pool.query(`select * from public2."VENDEDOR" where "ID_VENDEDOR" = $1`, [id])).rows as unknown as Vendedor;

    return vendedor;
  }
}

export default VendedorRepository;
