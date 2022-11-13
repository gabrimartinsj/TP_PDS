import { Request, Response } from "express";
import { ClienteService } from "../domain/services/cliente/clienteService";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import IClienteService from "../domain/services/cliente/iclienteService";

class ClienteController {
    clienteService: IClienteService;

  constructor() {
    this.clienteService = new ClienteService();
  }

  getCliente = catchAsync(async (req: Request, res: Response, _next) => {
    const cliente = await this.clienteService.getCliente(parseInt(req.params.id));

    return sendResponse(res, 200, cliente);
  });
}

export default ClienteController;
