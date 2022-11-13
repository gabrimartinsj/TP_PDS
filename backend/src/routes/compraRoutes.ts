import express, { Router } from "express";
import compraController from "../controllers/compraController";

const compraRouter: Router = express.Router();

compraRouter.get("/getCompras/:id", new compraController().getCompras);
compraRouter.post("/finalizarCompra", new compraController().finalizarCompra);

export default compraRouter;
