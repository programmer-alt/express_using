import pg from "pg";
import configPostgresConnect from "./configPostgresConnect.js";
const { Pool } = pg;

const pool = new Pool(configPostgresConnect.db);
export default pool;