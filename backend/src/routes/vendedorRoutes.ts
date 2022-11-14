import express, { Router } from "express";
import vendedorController from "../controllers/vendedorController";

const vendedorRouter: Router = express.Router();

vendedorRouter.get("/getVendedor/:id", new vendedorController().getVendedor);

export default vendedorRouter;
