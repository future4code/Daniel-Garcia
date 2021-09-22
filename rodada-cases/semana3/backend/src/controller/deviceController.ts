import { Request, Response } from "express";
import { DeviceBusiness } from "../business/deviceBusiness";
import { BaseDatabase } from "../data/baseDatabase";
import { BaseError } from "../error/BaseError";
import { DeviceDTO } from "../model/deviceModel";

export class DeviceController {
  constructor(private deviceBusiness: DeviceBusiness) {}
  async create(req: Request, res: Response) {
    try {
      const createData: DeviceDTO = {
        COLOR: req.body.color,
        PART_NUMBER: req.body.partNumber,
      };
      await this.deviceBusiness.create(createData);
      res.status(201).end();
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      }
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getData = await this.deviceBusiness.getAll();

      res.status(200).send(getData);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      }
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const deleteData: DeviceDTO = {
        PART_NUMBER: req.params.partNumber,
      };
      await this.deviceBusiness.delete(deleteData);
      res.status(200).end();
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      }
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }
}
