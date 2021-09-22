Olimpíadas

## Primeiros Passos

- Clonar este repositório
- Executar `npm install` para adicionar as dependências
- Executar `npm run migrations` para criação das tabelas
- Criar um arquivo .env na raiz do projeto e preencher as chaves a seguir com os valores apropriados:
  ```
  DB_HOST =
  DB_USER =
  DB_PASSWORD =
  DB_DATABASE_NAME =
  ```

## Entidaddes: Devices e Categorias

## Categorias

Possuem:

- ID numérico
- nome

## Devices

Possuem

- ID numérico
- Color
- partNumber
- lista de Categorias associadas

Deve-se vincular cada device a um ou mais categorias

## Documentação dos endpoints no Postman

https://documenter.getpostman.com/view/15825766/UUxwBoPt
