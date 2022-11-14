import { Request, Response } from "express";
import { CategoriaService } from "../domain/services/categoria/categoriaService";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import ICategoriaService from "../domain/services/categoria/icategoriaService";

class CategoriaController {
    categoriaService: ICategoriaService;

  constructor() {
    this.categoriaService = new CategoriaService();
  }

  getCategoria = catchAsync(async (req: Request, res: Response, _next) => {
    const categoria = await this.categoriaService.getCategoria(parseInt(req.params.id));

    return sendResponse(res, 200, categoria);
  });
}

export default CategoriaController;
