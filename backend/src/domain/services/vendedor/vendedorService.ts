import VendedorRepository from "../../../repositories/vendedor/vendedorRepository";
import Vendedor from "../../entities/Vendedor";
import IVendedorService from "./ivendedorService";

export class VendedorService implements IVendedorService {
    vendedorRepository: VendedorRepository;

  constructor() {
    this.vendedorRepository = new VendedorRepository();
  }

  async getVendedor(id: number): Promise<Vendedor> {
    return this.vendedorRepository.getVendedor(id);
  }
}
