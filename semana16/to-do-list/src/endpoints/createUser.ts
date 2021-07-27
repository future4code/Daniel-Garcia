import connection from "./connection";
import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  let statusCode = 200
  try {
    const { user_id, nickname, email } = req.body;
    if(!user_id ||  !nickname || !email){
      statusCode = 400
      throw new Error("");
      
    }


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