import express from 'express';
const app = express();
const port = 3020;
app.get('/welcome/:city', (req, res) => {
    const { city } = req.params;
    if (!city) {
        return res.status(400).send('Необходимо указать город');
    }
    const greetingMessage = ` Привет всем, ${city}!`;
    res.send({ message: greetingMessage });
});
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
