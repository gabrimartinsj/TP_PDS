import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "DB_TP_PDS",
  password: "Gigiofera4$",
  port: 5432,
});

export default pool;
