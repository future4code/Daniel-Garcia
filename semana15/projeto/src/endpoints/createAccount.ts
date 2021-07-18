import { Request, Response } from "express";
import { clientList } from "../mockData";

export const createAccount = (req: Request, res: Response): void => {
  let errorCode: number = 400;

  try {
    const { name, cpf, birthday } = req.body;
    if (!name || !cpf || !birthday) {
      res.statusCode = errorCode;
      throw new Error("Missing data in body to create user");
    }
    if (typeof name !== "string") {
      res.statusCode = errorCode;
      throw new Error("Invalid name");
    }

    if (typeof cpf === "number") {
      const indexOfCpf = clientList.findIndex((client) => client.cpf === cpf);
      if (indexOfCpf !== -1) {
        res.statusCode = errorCode;
        throw new Error("CPF Already exists");
      }
    } else {
      res.statusCode = errorCode;
      throw new Error("Invalid CPF");
    }

    if (typeof birthday === "number") {
      const dateDiff: number = Number(new Date()) - Number(new Date(birthday));
      const birthdayValidation: number =
        new Date(dateDiff).getFullYear() - 1970;
      if (birthdayValidation < 18) {
        res.statusCode = errorCode;
        throw new Error("Age must be higher than 18 yr");
      }
    } else {
      throw new Error("Invalid birthday");
    }
    const id = clientList.length + 1;
    const statement: any[] = [];
    clientList.push({ id, name, cpf, birthday, statement });

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
