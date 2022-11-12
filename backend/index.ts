import express from "express";
import pool from "./bd";

const app = express();

const port = 3003;

const getUsers = app.get("/", async (request, response) => {
  const users = await pool.query("select * from USUARIO");

  console.log("users : ", users);

  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
