import Vendedor from "../../domain/entities/Vendedor";

interface IVendedorRepository {
  getVendedor(id: number): Promise<Vendedor>;
}

export default IVendedorRepository;
