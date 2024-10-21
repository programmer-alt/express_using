# Используем базовый образ Node.js
FROM node:18

# Устанавливаем рабочий каталог
WORKDIR /app

# Копируем зависимости
COPY package*.json ./

# Устанавливаем переменные среды
ENV NODE_ENV=production

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY src/*.js ./src/

# Открываем порт
EXPOSE 3000

# Запускаем команду при запуске контейнера
CMD ["npm", "run", "start:prod"]