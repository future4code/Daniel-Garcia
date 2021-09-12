1. a)strings permitem maior variedade de combinações possíveis, então é mais seguro.
2. a) cria um ambiente de conexão com knex e insere os dados de id, email e password na tabela User.
b)
CREATE TABLE User (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
  );

  3. O comando "as string" faz com que o typescript force a tipagem para ser entendida como string, por mais que a variável possa assumir outra tipagem. Precisamos dela pois a função retorna uma string, e caso o programa tentasse retornar outro tipo de dado o typescript acusaria o erro.
  
   