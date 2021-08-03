import connection from "./connection";
import { Request, Response } from "express";

export const createTask = (req: Request, res: Response) => {
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