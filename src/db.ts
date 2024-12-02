import pg from "pg";
import configPostgresConnect from "./configPostgresConnect.js";
const { Pool } = pg;

class DatabaseCities {
    private static instance: DatabaseCities;
      pool: InstanceType<typeof Pool>;

constructor() {
 this.pool = new Pool(configPostgresConnect.db)
}
public static getInstance(): DatabaseCities {
 if (!DatabaseCities.instance) {
    DatabaseCities.instance = new DatabaseCities();
}
return DatabaseCities.instance;
}
 public async connectWithRetry():Promise<void> {
    let retries = 5;
    while(retries) {
        try {
            await this.pool.connect();
            console.log(' База данных успешно подключена')
            break;
        } catch (err) { 
            retries -= 1
            console.log(`Ошибка подключения к базе данных. Попытка ${retries}`)
            await new Promise(resolve => setTimeout(resolve, 5000))
        }
 }
 throw new Error(' Не удалось подключиться к базе данных после 5 попыток')
}
}

export default DatabaseCities.getInstance();