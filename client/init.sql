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


INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

insert into users (name, email, password, registration_date)
VALUES ('Daria', 'dddd@mail.ru', '12345', '22/01/2023');

insert into users (name, email, password, registration_date, is_active) 
VALUES ('Daniiar', 'test@mail', 'paw', '22/01/2023', false); 

insert into users (name, email, password, registration_date)
VALUES ('Max', 'tst', '123', '22/01/2023');

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

UPDATE users
SET is_active = true
WHERE email = 'test@mail';

DELETE FROM table_name WHERE condition;

DELETE FROM users WHERE email = 'tst';

ALTER TABLE Persons
ADD UNIQUE (ID);

ALTER TABLE users ADD UNIQUE (email);
