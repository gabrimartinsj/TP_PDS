import express, { Router } from "express";
import compraController from "../controllers/compraController";

const compraRouter: Router = express.Router();

compraRouter.post("/getCompra", new compraController().getCompras);
compraRouter.post("/finalizarCompra", new compraController().finalizarCompra);

export default compraRouter;
