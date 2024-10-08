import express, { Request, Response } from "express";
import pool from "./db.js";
const app = express();
import cors from "cors";
app.use(cors());
app.get("/welcome/:city", (req: Request, res: Response) => {
  const { city } = req.params;
  if (!city) {
    return res.status(400).send("Необходимо указать город");
  }
  const greetingMessage = ` Привет всем из ${city}!`;
  res.send({ message: greetingMessage });
});
app.get("/city/list", async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query("SELECT id, city_name FROM cities");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Произошла ошибка");
  }
});
export default app;

app.delete('/cities/:id', async (req: Request, res: Response) => {
  
    const { id} = req.params;
    try {
      const deleteCity = await pool.query('DELETE FROM cities WHERE id = $1', [id])
    res.json(deleteCity)
    } catch (err) {
        console.error(err);
        res.status(500).send("Произошла ошибка");
    }
})