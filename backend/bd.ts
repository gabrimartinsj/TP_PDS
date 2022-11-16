import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "TP_BD_PDS",
  password: "****",
  port: 5432,
});

export default pool;
