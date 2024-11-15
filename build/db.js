var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pg from "pg";
import configPostgresConnect from "./configPostgresConnect.js";
const { Pool } = pg;
const pool = new Pool(configPostgresConnect.db);
const connectWithRetry = () => __awaiter(void 0, void 0, void 0, function* () {
    let retries = 5;
    while (retries) {
        try {
            yield pool.connect();
            console.log(' База данных успешно подключена');
            break;
        }
        catch (err) {
            retries -= 1;
            console.log(`Не удалось подключиться к базе данных, осталось попыток: ${retries}`);
            yield new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
});
connectWithRetry();
export default pool;
