import { Request, Response } from "express";
import { ColecaoService } from "../domain/services/colecao/colecaoService";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import IColecaoService from "../domain/services/colecao/icolecaoService";

class ColecaoController {
    colecaoService: IColecaoService;

  constructor() {
    this.colecaoService = new ColecaoService();
  }

  getColecao = catchAsync(async (req: Request, res: Response, _next) => {
    const colecao = await this.colecaoService.getColecao(parseInt(req.params.id));

    return sendResponse(res, 200, colecao);
  });

  getColecaoDeLoja = catchAsync(async (req: Request, res: Response, _next) => {
    const colecao = await this.colecaoService.getColecaoDeLoja(parseInt(req.params.id));

    return sendResponse(res, 200, colecao);
  });
}

export default ColecaoController;
