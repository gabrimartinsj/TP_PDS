import ClienteRepository from "../../../repositories/cliente/clienteRepository";
import Cliente from "../../entities/Cliente";
import IClienteService from "./iclienteService";

export class ClienteService implements IClienteService {
    clienteRepository: ClienteRepository;

  constructor() {
    this.clienteRepository = new ClienteRepository();
  }

  async getCliente(id: number): Promise<Cliente> {
    return this.clienteRepository.getCliente(id);
  }
}
