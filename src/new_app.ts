// Экспорт пустого объекта для поддержки модульной системы
export {}; // Это нужно для поддержки модульной системы в Node.js

// Импорт необходимых типов из express
import express, { Request, Response } from "express"; // Импортируем Express и типы Request и Response
import pg from "pg"; // Импортируем библиотеку pg для работы с PostgreSQL
const { Pool } = pg; // Извлекаем класс Pool из pg

// Создание экземпляра приложения Express
const app = express(); // Создаем новый экземпляр приложения Express

// Установка порта для сервера
const port = 3020; // Устанавливаем порт, на котором будет работать наш сервер

// Подключение к базе данных
const pool = new Pool({
  user: "postgres", // Пользователь БД
  host: "localhost", // Хост БД
  database: "my_users", // Имя базы данных
  password: "1", // Пароль пользователя
  port: 5433, // Порт БД
});

// Определение обработчика GET-запросов для маршрута '/welcome/:city'
app.get("/welcome/:city", (req: Request, res: Response) => {
  const { city } = req.params; // Получаем параметр city из URL запроса
  
  if (!city) {
    return res.status(400).send("Необходимо указать город"); // Возвращаем ошибку 400, если город не указан
  }
  
   else {
    const greetingMessage = `Привет всем из, ${city}!`; // Формируем приветствие
    res.send({ message: greetingMessage }); // Отправляем ответ клиенту
  }
});

// маршшрут для вывода списка городов
app.get("/city/drop", async (req: Request, res: Response) => {
  try {
    const {rows} = await pool.query ('SELECT city_name FROM cities') // Выполняем SQL-запрос
    const citiesHtml = rows.map(row => `<li>${row.city_name}</li>`).join('') // Получаем список городов
    
    const html = `
    <ul>
      ${citiesHtml}
    </ul>
  `;
  res.send(html) // Отправляем HTML-код с списком городов
  } catch (err) {
    console.error(err); // Логируем ошибку
    res.status(500).send("Произошла ошибка"); // Возвращаем ошибку 500
  }
})

// Запуск сервера на порту 3020
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`); // Выводим сообщение об успешном запуске сервера
});
// Код связанный с базой данных