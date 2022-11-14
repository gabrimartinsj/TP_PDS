import Compra from "../../entities/Compra";

interface ICompraService {
  getCompras(id: number): Promise<Compra[]>;

  finalizarCompra(compra: Compra): Promise<boolean>;

}

export default ICompraService;
