import Vendedor from "../../entities/Vendedor";

interface IVendedorService {
  getVendedor(id:number): Promise<Vendedor>;
}

export default IVendedorService;
