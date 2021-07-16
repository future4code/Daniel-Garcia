import { Request, Response } from "express";
import { users } from "../index"


export const getUsersByName=(req: Request, res: Response):void => {
  let codeError: number = 400;
  try {
    const name = req.params.name

        const response = users.filter(user => user.name===name)

        if(response.length > 0){
          res.send(response)
        }else{
          res.status(codeError)
          throw new Error("Nome não encontrado")
        }

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).end();
    } else {
      res.statusMessage = error.message;
      res.end();
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