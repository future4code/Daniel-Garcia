import {
  CategoryDevice,
  CategoryDeviceDTO,
} from "../model/category-deviceModel";
import { BaseDatabase } from "./baseDatabase";

export class CategoryDeviceDatabase extends BaseDatabase {
  static TABLE_NAME = "category_devices";

  async createCorrelation(data: CategoryDeviceDTO) {
    try {
      await this.getConnection()
        .insert({
          CD_DEVICE: data.CdDevice,
          CD_CATEGORY: data.CdCategory,
        })
        .into(CategoryDeviceDatabase.TABLE_NAME);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async deleteDeviceCorrelation(data: CategoryDeviceDTO) {
    const CD_DEVICE = data.CdDevice!;
    let result: any;
    try {
      result = await this.getConnection()
        .delete("*")
        .from(CategoryDeviceDatabase.TABLE_NAME)
        .where({ CD_DEVICE });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  async deleteCategoryCorrelation(data: CategoryDeviceDTO) {
    const CD_CATEGORY = data.CdCategory!;
    let result: any;
    try {
      result = await this.getConnection()
        .delete("*")
        .from(CategoryDeviceDatabase.TABLE_NAME)
        .where({ CD_CATEGORY });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  async searchListByPartNumber(data: CategoryDeviceDTO) {
    let result: any;
    try {
      result = await this.getConnection().raw(
        `select * from devices
          join category_devices
          on DEVICE_ID = category_devices.CD_DEVICE
          join category
          on category_devices.CD_CATEGORY = category.ID
          where PART_NUMBER = ${data.PART_NUMBER}`
      );
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    } finally {
      return result[0];
    }
  }
}
