import connection from "./connection";
import { Request, Response } from "express";

export const getUserById = (req: Request, res: Response): void => {
  const result: country | undefined = countries.find(
    (country) => country.id.toString() === req.params.id
  );

  if (result) {
    res.send(result);
  } else {
    res.statusCode = 404;
    res.end();
  }
};
