import app from "./app.js";


const port = 3000;
app.listen( port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})