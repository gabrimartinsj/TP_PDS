import { Request, Response } from "express";
import { VendedorService } from "../domain/services/vendedor/vendedorService";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import IVendedorService from "../domain/services/vendedor/ivendedorService";

class VendedorController {
    vendedorService: IVendedorService;

  constructor() {
    this.vendedorService = new VendedorService();
  }

  getVendedor = catchAsync(async (req: Request, res: Response, _next) => {
    const vendedor = await this.vendedorService.getVendedor(parseInt(req.params.id));

    return sendResponse(res, 200, vendedor);
  });
}

export default VendedorController;
