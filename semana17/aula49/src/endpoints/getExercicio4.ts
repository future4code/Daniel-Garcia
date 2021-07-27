import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getExercicio4 = async (
  req: Request,
  res: Response
): Promise<void> => {
   try {
      const name = req.query.name as string 
      const type = req.query.type as string
      const orderBy = req.query.orderBy as string || "name"
      const orderType = req.query.orderType as string || "DESC"
      const page = Number (req.query.page) || 1 
      const size = Number (req.query.size) || 5 
 
    
       const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       WHERE name LIKE "%${name}%" OR type LIKE "%${type}%"
       ORDER BY ${orderBy} ${orderType.toUpperCase()}
       LIMIT 5
       OFFSET ${size * (page-1 )};
       `);
 
       const users = result[0]
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("Exercicio 4")
       }
       res.status(200).send(users)
    } catch (err) {
       console.log(err)
       res.send(err.message || err.sqlMessage)
    }
 }
