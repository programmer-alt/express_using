var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import pool from "./db.js";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.get("/welcome/:city", (req, res) => {
    const { city } = req.params;
    if (!city) {
        return res.status(400).send("Необходимо указать город");
    }
    const greetingMessage = ` Привет всем из ${city}!`;
    res.send({ message: greetingMessage });
});
app.get("/city/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield pool.query("SELECT id, city_name FROM cities");
        res.json(rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Произошла ошибка");
    }
}));
export default app;
app.delete("/cities/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deleteCity = yield pool.query("DELETE FROM cities WHERE id = $1", [
            id,
        ]);
        res.json(deleteCity);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Произошла ошибка");
    }
}));
app.post("/cities/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("получен запрос на добавление города");
    const { city_name } = req.body;
    try {
        const addCity = yield pool.query("INSERT INTO cities (city_name) Values ($1) RETURNING id", [city_name]);
        const newCity = addCity.rows[0];
        res.json(newCity);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Произошла ошибка");
    }
}));
