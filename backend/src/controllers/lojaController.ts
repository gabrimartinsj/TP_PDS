import { Request, Response } from "express";
import { LojaService } from "../domain/services/loja/lojaService";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import ILojaService from "../domain/services/loja/ilojaService";

class LojaController {
    lojaService: ILojaService;

  constructor() {
    this.lojaService = new LojaService();
  }

  getLoja = catchAsync(async (req: Request, res: Response, _next) => {
    const loja = await this.lojaService.getLoja(parseInt(req.params.id));

    return sendResponse(res, 200, loja);
  });
}

export default LojaController;
