import express, { Router } from "express";
import marketplaceController from "../controllers/marketplaceController";

const marketplaceRouter: Router = express.Router();

marketplaceRouter.get("/getLojas", new marketplaceController().getLojas);

export default marketplaceRouter;
