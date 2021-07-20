CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES; -- mostra lista de databases/diretórios

SHOW TABLES;  --  mostra lista de tabelas existentes

DESCRIBE Actor;  -- mostra os campos da tabela

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Piresasd",
  1200000,
  "1963-08-23", 
  "female"
);
-- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' -> basicamente está falando que não pode ter key primária igual

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- Error Code: 1136. Column count doesn't match value count at row 1 --> basicamente vc ta com divergência entre numero de elementos em linha e coluna

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- Error Code: 1364. Field 'name' doesn't have a default value - precisa de nome e vc não deu, ai ele fala q nao tem um valor como default

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 --data precisa estar em string

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";

SELECT id, name from Actor WHERE gender = "female"; -- a

SELECT id, salary from Actor 
WHERE name LIKE "Tony Ramos";

SELECT id, name, salary from Actor 
WHERE salary <= 500000;

SELECT id, nome from Actor WHERE id = "002";
-- Error Code: 1054. Unknown column 'nome' in 'field list' errou por typo, duh

SELECT id, name, salary from Actor 
WHERE salary >= 300000 AND
(name like "A%" OR name like "J%");


DELETE from Actor
WHERE id = "002"