import CompraRepository from "../../../repositories/compra/compraRepository";
import Compra from "../../entities/Compra";
import ICompraService from "./icompraService";

export class CompraService implements ICompraService {
  compraRepository: CompraRepository;

  constructor() {
    this.compraRepository = new CompraRepository();
  }

  async getCompras(id: number): Promise<Compra[]> {
    return this.compraRepository.getCompras(id);
  }

  async finalizarCompra(compra: Compra): Promise<boolean> {
    return this.compraRepository.finalizarCompra(compra);
  }
}
