import pg from "pg";
import configPostgresConnect from "./configPostgresConnect.js";
const { Pool } = pg;


const pool = new Pool(configPostgresConnect.db);
const connectWithRetry = async () => {
    let retries = 5;
    while (retries) {
try {
    await pool.connect()
    console.log(' База данных успешно подключена')
 break;
} catch (err) {
    retries -= 1
    console.log(`Не удалось подключиться к базе данных, осталось попыток: ${retries}`)
    await new Promise(resolve => setTimeout(resolve, 5000))
}
    }
    
}
connectWithRetry();
export default pool;