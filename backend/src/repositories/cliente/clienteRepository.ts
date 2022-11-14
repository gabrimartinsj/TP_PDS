import { Pool } from "pg";
import pool from "../../../bd";
import Cliente from "../../domain/entities/Cliente";
import IClienteRepository from "./iclienteRepository";

class ClienteRepository implements IClienteRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getCliente(id: number) {
    const cliente: Cliente = (await pool.query(`select * from public2."CLIENTE" where "ID_CLIENTE" = $1`, [id])).rows as unknown as Cliente;

    return cliente;
  }
}

export default ClienteRepository;
