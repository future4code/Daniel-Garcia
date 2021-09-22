import { Request, Response } from "express";
import { CategoryDeviceBusiness } from "../business/category-deviceBusiness";
import { BaseDatabase } from "../data/baseDatabase";
import { BaseError } from "../error/BaseError";
import { CategoryDeviceDTO } from "../model/category-deviceModel";

export class CategoryDeviceController {
  constructor(private categoryDeviceBusiness: CategoryDeviceBusiness) {}

  async AddCategoryToDevice(req: Request, res: Response) {
    try {
      const data: CategoryDeviceDTO = {
        name: req.body.name,
        PART_NUMBER: req.body.partNumber,
      };

      await this.categoryDeviceBusiness.createCorrelation(data);

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

  async getCategoryListByDevice(req: Request, res: Response) {
    try {
      const data: CategoryDeviceDTO = {
        PART_NUMBER: req.params.partNumber,
      };
      const getData = await this.categoryDeviceBusiness.getCategoryListByDevice(
        data
      );

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

  async deleteCategoryFromDevices(req: Request, res: Response) {
    try {
      const deleteData: CategoryDeviceDTO = {
        name: req.params.name,
      };

      await this.categoryDeviceBusiness.deleteCategoryCorrelation(deleteData);
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

  async deleteDeviceFromCategory(req: Request, res: Response) {
    try {
      const deleteData: CategoryDeviceDTO = {
        PART_NUMBER: req.params.partNumber,
      };

      await this.categoryDeviceBusiness.deleteDeviceCorrelation(deleteData);
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
