import express, { Request, Response } from "express";
import pool from "./db.js";
const app = express();

app.get("/welcome/:city", (req: Request, res: Response) => {
    const { city} = req.params;
   if (!city) {
    return res.status(400).send("Необходимо указать город");
   }
   const greetingMessage = ` Привет всем из ${city}!`;
   res.send({message: greetingMessage});
})

app.get("/city/drop", async (req: Request, res: Response) => {
    try {
        const { rows} = await pool.query('SELECT city_name From cities');
    const citiesHtml  = rows.map( row => `<li>${row.city_name}</li>`).join('');
 const html = `
 <ul>
 ${citiesHtml}
 </ul>`
res.send(html);
    } catch( err) {
        console.error(err);
        res.status(500).send("Произошла ошибка");
    }
})
export default app