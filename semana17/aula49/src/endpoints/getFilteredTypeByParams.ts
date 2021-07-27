import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getFilteredTypeByParams = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { type } = req.params;
    const users = await filteredUsers(type as string);

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

async function filteredUsers(type: string): Promise<any> {
  const result = await connection.raw(`
      SELECT id, type, email, type
      FROM aula48_exercicio
      WHERE type like "%${type}%";
   `);

  return result[0];
}
