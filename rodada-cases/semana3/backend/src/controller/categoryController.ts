import { Request, Response } from "express";
import { CategoryBusiness } from "../business/categoryBusiness";
import { BaseDatabase } from "../data/baseDatabase";
import { BaseError } from "../error/BaseError";
import { CategoryDTO } from "../model/categoryModel";

export class CategoryController {
  constructor(private categoryBusiness: CategoryBusiness) {}
  async create(req: Request, res: Response) {
    try {
      const createData: CategoryDTO = {
        name: req.body.name,
      };
      await this.categoryBusiness.create(createData);
      res.status(201).end();
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const getData = await this.categoryBusiness.getAll();

      res.status(200).send(getData);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const deleteData: CategoryDTO = {
        name: req.params.name,
      };
      await this.categoryBusiness.delete(deleteData);
      res.status(200).end();
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }
}
