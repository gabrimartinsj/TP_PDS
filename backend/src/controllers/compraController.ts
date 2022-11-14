import { Request, Response } from "express";
import { CompraService } from "../domain/services/compra/compraService";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import ICompraService from "../domain/services/compra/icompraService";
import Compra from "../domain/entities/Compra";

class CompraController {
    compraService: ICompraService;

  constructor() {
    this.compraService = new CompraService();
  }

  finalizarCompra = catchAsync(async (req: Request, res: Response, _next) => {

    const compra = await this.compraService.finalizarCompra(req.body.compra);

    return sendResponse(res, 200, compra);
  });

  getCompras = catchAsync(async (req: Request, res: Response, _next) => {
    const compras = await this.compraService.getCompras(parseInt(req.params.id));

    return sendResponse(res, 200, compras);
  });
}

export default CompraController;
