# Используем базовый образ Node.js
FROM node:18

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
# Устанавливаем инструменты диагностики
RUN apt-get update && apt-get install -y netcat-traditional iputils-ping curl

# Устанавливаем рабочий каталог
WORKDIR /app

# Копируем зависимости
COPY package*.json ./

# Устанавливаем переменные среды
ENV NODE_ENV=production

# Устанавливаем зависимости
RUN npm install

# Копируем собранные файлы из папки build
COPY build ./build

# Копируем остальные файлы проекта
COPY . .

# Открываем порт
EXPOSE 3000

# Запускаем команду при запуске контейнера
CMD ["/bin/sh", "-c", "/wait-for-it.sh PostgresDb:5432 -- npm run start:prod"]