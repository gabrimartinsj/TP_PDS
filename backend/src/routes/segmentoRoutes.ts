import express, { Router } from "express";
import segmentoController from "../controllers/segmentoController";

const segmentoRouter: Router = express.Router();

segmentoRouter.get("/getSegmento/:id", new segmentoController().getSegmento);

export default segmentoRouter;
