import express from "express";
import pool from "./bd";
import marketplaceRouter from "./src/routes/marketplaceRoutes";
import colecaoRouter from "./src/routes/colecaoRoutes";
import produtoRouter from "./src/routes/produtoRoutes";
import clienteRouter from "./src/routes/clienteRoutes";
import vendedorRouter from "./src/routes/vendedorRoutes";
import lojaRouter from "./src/routes/lojaRoutes";
import categoriaRouter from "./src/routes/categoriaRoutes";
import segmentoRouter from "./src/routes/segmentoRoutes";
import compraRouter from "./src/routes/compraRoutes";

const app = express();

const port = 3003;

app.use("/api/v1/marketplace", marketplaceRouter);
app.use("/api/v1/colecao", colecaoRouter);
app.use("/api/v1/produto", produtoRouter);
app.use("/api/v1/cliente", clienteRouter);
app.use("/api/v1/vendedor", vendedorRouter); 
app.use("/api/v1/loja", lojaRouter); 
app.use("/api/v1/categoria", categoriaRouter); 
app.use("/api/v1/segmento", segmentoRouter); 
app.use("/api/v1/compra", compraRouter); 

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
