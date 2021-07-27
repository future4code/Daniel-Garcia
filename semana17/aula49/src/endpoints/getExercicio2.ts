import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getExercicio2 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, type } = req.query;
    const orderBy = (req.query.orderBy as string) || "email";
    const orderType = (req.query.orderType as string) || "ASC";
    const users = await funcaoExercicio2(
      name as string,
      type as string,
      orderBy,
      orderType
    );

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

async function funcaoExercicio2(
  name: string,
  type: string,
  orderBy: string,
  orderType: string
): Promise<any> {
  const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       WHERE name = "${name}" OR type = "${type}"
       ORDER BY ${orderBy} ${orderType.toUpperCase()};
   `);

  return result[0];
}
