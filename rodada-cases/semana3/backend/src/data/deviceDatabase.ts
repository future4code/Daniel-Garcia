import { Device, DeviceDTO } from "../model/deviceModel";
import { BaseDatabase } from "./baseDatabase";

export class DeviceDatabase extends BaseDatabase {
  static TABLE_NAME = "devices";

  async create(data: DeviceDTO) {
    try {
      await this.getConnection()
        .insert({ PART_NUMBER: data.PART_NUMBER, COLOR: data.COLOR })
        .into(DeviceDatabase.TABLE_NAME);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async getAll(): Promise<Device[]> {
    let result;
    try {
      result = await this.getConnection()
        .select("*")
        .from(DeviceDatabase.TABLE_NAME);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    } finally {
      if (result instanceof Array) {
        return result.map((device: any) => {
          return Device.toDeviceModel(device);
        });
      }
      return [];
    }
  }

  async searchByPartNumber(data: DeviceDTO): Promise<Device> {
    const PART_NUMBER = data.PART_NUMBER;
    let result: any;
    try {
      result = await this.getConnection()
        .select("*")
        .from(DeviceDatabase.TABLE_NAME)
        .where({ PART_NUMBER });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    } finally {
      return Device.toDeviceModel(result[0]);
    }
  }
  async deleteByPartNumber(data: DeviceDTO) {
    const PART_NUMBER = data.PART_NUMBER;
    let result: any;
    try {
      result = await this.getConnection()
        .delete("*")
        .from(DeviceDatabase.TABLE_NAME)
        .where({ PART_NUMBER });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("FOREIGN KEY")) {
          //TODO-call delete relational table and delete data from it
          throw new Error(
            "First delete Devices that uses that Category, then delete the Category"
          );
        }
        throw new Error(error.message);
      }
    }
  }
}
