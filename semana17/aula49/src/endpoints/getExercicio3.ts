import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getExercicio3 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
   const page = Number(req.params.page ) || 1
    const users = await exercicio3(page);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export default async function exercicio3(page:number): Promise<any> {
  const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      LIMIT 5
      OFFSET ${5*(page-1)};
   `);

  return result[0];
}
