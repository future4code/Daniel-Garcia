import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getFilteredUsersByQuery = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.query);
    const { name } = req.query;
    const users = await filteredUsers(name as string);

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

async function filteredUsers(name: string): Promise<any> {
  const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name like "%${name}%";
   `);

  return result[0];
}
