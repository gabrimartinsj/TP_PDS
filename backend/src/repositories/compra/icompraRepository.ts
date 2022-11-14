import Compra from "../../domain/entities/Compra";

interface ICompraRepository {
  getCompras(id: number): Promise<Compra[]>;

  finalizarCompra(compra: Compra): Promise<boolean>;
}

export default ICompraRepository;
