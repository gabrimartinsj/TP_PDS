"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const marketplaceRoutes_1 = __importDefault(require("./src/routes/marketplaceRoutes"));
const colecaoRoutes_1 = __importDefault(require("./src/routes/colecaoRoutes"));
const produtoRoutes_1 = __importDefault(require("./src/routes/produtoRoutes"));
const clienteRoutes_1 = __importDefault(require("./src/routes/clienteRoutes"));
const vendedorRoutes_1 = __importDefault(require("./src/routes/vendedorRoutes"));
const lojaRoutes_1 = __importDefault(require("./src/routes/lojaRoutes"));
const categoriaRoutes_1 = __importDefault(require("./src/routes/categoriaRoutes"));
const segmentoRoutes_1 = __importDefault(require("./src/routes/segmentoRoutes"));
const compraRoutes_1 = __importDefault(require("./src/routes/compraRoutes"));
const app = (0, express_1.default)();
const port = 3003;
app.use("/api/v1/marketplace", marketplaceRoutes_1.default);
app.use("/api/v1/colecao", colecaoRoutes_1.default);
app.use("/api/v1/produto", produtoRoutes_1.default);
app.use("/api/v1/cliente", clienteRoutes_1.default);
app.use("/api/v1/vendedor", vendedorRoutes_1.default);
app.use("/api/v1/loja", lojaRoutes_1.default);
app.use("/api/v1/categoria", categoriaRoutes_1.default);
app.use("/api/v1/segmento", segmentoRoutes_1.default);
app.use("/api/v1/compra", compraRoutes_1.default);
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
