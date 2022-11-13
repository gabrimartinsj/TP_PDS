import express, { Router } from "express";
import categoriaController from "../controllers/categoriaController";

const categoriaRouter: Router = express.Router();

categoriaRouter.get("/getCategoria/:id", new categoriaController().getCategoria);

export default categoriaRouter;
