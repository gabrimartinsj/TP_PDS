import { Pool } from "pg";
import pool from "../../../bd";
import Compra from "../../domain/entities/Compra";
import sendResponse from "../../utils/sendResponse";
import ICompraRepository from "./icompraRepository";

class CompraRepository implements ICompraRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getCompras(id: number) {
    const compra: Compra[] = (await pool.query(`SELECT "ID_COMPRA", "ID_PRODUTO", "ID_LOJA", "QTD_PRODUTO", "VLR_COMPRA", "ID_VENDEDOR", "ID_CLIENTE"
	FROM public2."COMPRA" where "ID_CLIENTE" = $1;`, [id])).rows;

    return compra;
  }

  async finalizarCompra(compra: Compra) {
    await pool.query(`INSERT INTO public2."COMPRA"(
        "ID_COMPRA", "ID_PRODUTO", "ID_LOJA", "QTD_PRODUTO", "VLR_COMPRA", "ID_VENDEDOR", "ID_CLIENTE")
        VALUES ($1, $2, $3, $4, $5, $6, $7);`, [compra.Id_Compra, compra.Id_Produto, compra.Id_Loja, compra.Qtd_Produto, compra.Vlr_Compra, compra.Id_Vendedor, compra.Id_Cliente]);

    return true;
  }
}

export default CompraRepository;
