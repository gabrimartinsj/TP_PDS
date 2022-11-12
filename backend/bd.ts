import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "markletplace",
  password: "afafc7bb",
  port: 5432,
});

export default pool;
