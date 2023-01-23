# Создание структуры бд

CREATE DATABASE users; создание бд пользователей

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(225) NOT NULL,
    email varchar(225) NOT NULL,
    password varchar(225) NOT NULL,
    registration_date varchar(225) NOT NULL,
    last_login_date varchar(225),
    is_active boolean DEFAULT true,

    PRIMARY KEY (id)
);