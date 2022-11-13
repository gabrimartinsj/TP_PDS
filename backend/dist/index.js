"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const marketplaceRoutes_1 = __importDefault(require("./src/routes/marketplaceRoutes"));
const app = (0, express_1.default)();
const port = 3003;
app.use("/api/v1/marketplace", marketplaceRoutes_1.default);
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
