import App from "./app.js";



const port = 3000;
App.listen( port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})