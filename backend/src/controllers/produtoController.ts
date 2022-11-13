import { Request, Response } from "express";
import { ProdutoService } from "../domain/services/produto/produtoService";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import IProdutoService from "../domain/services/produto/iprodutoService";

class ProdutoController {
    produtoService: IProdutoService;

  constructor() {
    this.produtoService = new ProdutoService();
  }

  getProduto = catchAsync(async (req: Request, res: Response, _next) => {
    const produto = await this.produtoService.getProduto(parseInt(req.params.id));

    return sendResponse(res, 200, produto);
  });

  getProdutosDeLoja = catchAsync(async (req: Request, res: Response, _next) => {
    const produto = await this.produtoService.getProdutosDeLoja(parseInt(req.params.id));

    return sendResponse(res, 200, produto);
  });

  getProdutos = catchAsync(async (req: Request, res: Response, _next) => {
    const produto = await this.produtoService.getProdutos();

    return sendResponse(res, 200, produto);
  });

  getProdutosDeColecao = catchAsync(async (req: Request, res: Response, _next) => {
    const produto = await this.produtoService.getProdutosDeColecao(parseInt(req.params.id));

    return sendResponse(res, 200, produto);
  });
}

export default ProdutoController;
