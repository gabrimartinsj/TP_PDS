"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "markletplace",
    password: "afafc7bb",
    port: 5432,
});
exports.default = pool;
