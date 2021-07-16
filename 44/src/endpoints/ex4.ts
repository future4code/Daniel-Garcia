import { Request, Response } from "express";
import { users } from "../index"


export const createUser =(req: Request, res: Response):void => {
  let codeError: number = 400;
  try {
      
      //li a resposta e entendi, bacana =)

     
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).end();
    } else {
      res.statusMessage = error.message;
      res.end();
    }
  }
};