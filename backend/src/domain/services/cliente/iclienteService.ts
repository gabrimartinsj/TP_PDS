import Cliente from "../../entities/Cliente";

interface IClienteService {
  getCliente(id:number): Promise<Cliente>;
}

export default IClienteService;
