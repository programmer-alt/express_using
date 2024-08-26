export {}
import express, { Request, Response } from 'express';
const app =  express();
const port = 3020;

app.get('/welcome/:city', (req: Request, res: Response) => {
    const { city } = req.params;
    if (!city) {
        return res.status(400).send('Необходимо указать город');
    }
   
    const greetingMessage = ` Привет Катя, ${city}!`
    res.send({message: greetingMessage});
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});