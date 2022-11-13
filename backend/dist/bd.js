"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "DB_TP_PDS",
    password: "Gigiofera4$",
    port: 5432,
});
exports.default = pool;
