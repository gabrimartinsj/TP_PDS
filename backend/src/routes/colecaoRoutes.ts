import express, { Router } from "express";
import colecaoController from "../controllers/colecaoController";

const colecaoRouter: Router = express.Router();

colecaoRouter.get("/getColecao/:id", new colecaoController().getColecao);

colecaoRouter.get("/getColecaoDeLoja/:id", new colecaoController().getColecaoDeLoja);

export default colecaoRouter;
