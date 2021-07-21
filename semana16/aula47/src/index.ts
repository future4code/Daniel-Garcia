import app from "./app";
import connection from "./connection";
import { Request, Response } from "express";

app.get("/", async (req, res) => {
  try {
    //usando o metodo raw
    // const result = await connection.raw(`
    //         SELECT * FROM Actor;
    //     `);

    //usando o query builder
    const result = await connection("Actor");

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});

app.post("/actor", async (req, res) => {
  try {
    const { name, salary, birth_date, gender } = req.body;

    const novoAtor = {
      id: Date.now().toString(),
      name,
      salary,
      birth_date,
      gender,
    };

    //usando o query builder
    await connection("Actor").insert(novoAtor);

    // await connection.raw(`
    //      INSERT INTO Actor
    //      (id, name, salary, birth_date, gender)
    //   VALUES (
    //      ${Date.now().toString()},
    //      "${req.body.name}",
    //      ${req.body.salary},
    //      "${req.body.birth_date}",
    //      "${req.body.gender}"
    //   );
    // `);

    res.status(200).send("dados enviados");
  } catch (error) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});

app.put("/actor/:id", async (req, res) => {
  try {
    //usando o query builder
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birth_date,
        gender: req.body.gender,
      })
      .where({ id: req.params.id });

    res.status(200).send("dados atualizados");
  } catch (error) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});

app.delete("/actor/:id", async (req, res) => {
  try {
    //usando o query builder
    await connection("Actor").delete().where({ id: req.params.id });

    res.status(200).send("o dado foi deletado");
  } catch (error) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});
//fim de template aula

// Ou então podemos chamá-la dentro de um endpoint

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  return result[0][0];
};
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));
    res.end();
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});
