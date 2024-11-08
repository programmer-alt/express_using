import App from "./app.js";
import * as http from 'http';

const port = 3000;
const server = http.createServer(App); 

server.listen(port, () => { 
    console.log(`Сервер запущен на порту ${port}`);
});

process.on('SIGINT', () => {
    console.log('Получен сигнал остановки');
    server.close(() => {
        console.log('Сервер остановлен');
        process.exit(0);
    });
});