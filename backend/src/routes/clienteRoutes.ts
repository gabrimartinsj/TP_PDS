import express, { Router } from "express";
import clienteController from "../controllers/clienteController";

const clienteRouter: Router = express.Router();

clienteRouter.get("/getCliente/:id", new clienteController().getCliente);

export default clienteRouter;
