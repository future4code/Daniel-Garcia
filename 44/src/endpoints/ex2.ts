import { Request, Response } from "express";
import { users } from "../index"


export const getUsersByType =(req: Request, res: Response):void => {
  let codeError: number = 400;
  try {
    const type = req.query.type
      if (type=== UserType.ADMIN ||type=== UserType.NORMAL){
        const response = users.filter(user => user.type===type)
        res.send(response)
      } else{
        throw new Error("type inválido")
      }

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).end();
    } else {
      res.statusMessage = error.message;
      res.status(codeError).end();
    }
  }
};
type user = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}