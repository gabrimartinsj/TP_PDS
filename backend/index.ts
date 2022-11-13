import express from "express";
import pool from "./bd";
import marketplaceRouter from "./src/routes/marketplaceRoutes";

const app = express();

const port = 3003;

app.use("/api/v1/marketplace", marketplaceRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
