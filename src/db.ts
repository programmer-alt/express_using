import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "my_users",
    password: "1",
    port: 5433,
});

export default pool;