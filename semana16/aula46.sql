
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- 1. a) deleta coluna salário
-- 1. b) muda a coluna genero pra sex
-- 1. c) muda o genero pra genero tipo varchar

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

-- a
UPDATE Actor
SET name = "Trolei seu nome", birtDate = "2020-01-01"
WHERE id = "003";

-- b
UPDATE Actor
SET name = "JULIANA PAES"
WHERE NAME LIKE "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE NAME LIKE "JULIANA PAES";

-- c. coloca set tudo entre vírgulas where id=5
-- d. vai retornar erro por id não encontrado

-- 2.

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE  salary > 10000000;
-- 4.
SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;
-- a
SELECT max(salary) FROM Actor;
-- b
SELECT min(salary) FROM Actor
WHERE gender like "female";

SELECT COUNT(*) FROM Actor WHERE gender like "female";

SELECT sum(salary) FROM Actor;

-- 5
SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- a.retornou uma contagem através do agrupamento do genero

SELECT * FROM Actor
WHERE gender = 'male'
ORDER BY name DESC;
-- b.
-- c
SELECT * FROM Actor
ORDER BY salary ASC;

-- d
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
-- e
SELECT avg(salary), gender
FROM Actor
GROUP BY gender;

-- 6.playing_limit_date
ALTER TABLE Movies ADD playing_limit_date DATE;

SELECT * FROM Movies;
DESCRIBE Movies;
ALTER TABLE Movies CHANGE Avaliação Avaliação FLOAT;
-- c
UPDATE Movies
SET playing_limit_date = "2022-12-31"
WHERE id = "4";

UPDATE Movies
SET playing_limit_date = "2020-12-31"
WHERE id = "2";

SELECT COUNT(Avaliação)
FROM Movies
WHERE Avaliação > 7.5;

SELECT AVG(Avaliação)
FROM Movies;
-- mostra filme em cartaz
SELECT * FROM Movies
WHERE DATEDIFF(CURDATE(),playing_limit_date) < 0;
-- conta quantidade
SELECT COUNT(*) FROM Movies
WHERE DATEDIFF(CURDATE(),playing_limit_date) < 0;

SELECT * FROM Movies
ORDER BY Data_de_lançamento DESC
LIMIT 3;