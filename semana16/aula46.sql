
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
- b
SELECT min(salary) FROM Actor
WHERE gender like "female";

SELECT COUNT(*) FROM Actor WHERE gender like "female";

SELECT sum(salary) FROM Actor;