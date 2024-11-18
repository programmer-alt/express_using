const configPostgresConnect = {
    db: {
        user: "postgres",
        host: process.env.NODE_ENV === 'production' ? "PostgresDb" : "localhost",
        database: "my_users",
        password: "1",
        port: process.env.NODE_ENV === 'production' ? 5432 : 5433,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    }
};
export default configPostgresConnect;
