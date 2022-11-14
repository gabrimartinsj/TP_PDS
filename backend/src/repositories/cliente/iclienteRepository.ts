import Cliente from "../../domain/entities/Cliente";

interface IClienteRepository {
  getCliente(id: number): Promise<Cliente>;
}

export default IClienteRepository;
