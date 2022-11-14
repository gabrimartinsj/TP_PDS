import express, { Router } from "express";
import lojaController from "../controllers/lojaController";

const lojaRouter: Router = express.Router();

lojaRouter.get("/getLoja/:id", new lojaController().getLoja);

export default lojaRouter;
