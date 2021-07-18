import { Request, Response } from "express";
import { clientList } from "../mockData";

export const getAllUsers = (req: Request, res: Response): void => {
  try {
    const response = clientList;
    if(response){
       res.send(response);
       res.status(204).end();

    }else {
      throw new Error("Clientlist Not Found")
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
