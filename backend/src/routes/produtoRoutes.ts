import express, { Router } from "express";
import produtoController from "../controllers/produtoController";

const produtoRouter: Router = express.Router();

produtoRouter.get("/getProduto/:id", new produtoController().getProduto);
produtoRouter.get("/getProdutos", new produtoController().getProdutos);
produtoRouter.get("/getProdutosDeLoja/:id", new produtoController().getProdutosDeLoja);
produtoRouter.get("/getProdutosDeColecao/:id", new produtoController().getProdutosDeColecao);

export default produtoRouter;
