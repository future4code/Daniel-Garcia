import { Request, Response } from "express";
import { users } from "../index"

export const getUsers =(req: Request, res: Response):void => {
  let codeError: number = 400;
  try {
    res.send(users)
    res.status(204).end();
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).end();
    } else {
      res.statusMessage = error.message;
      res.end();
    }
  }
};
