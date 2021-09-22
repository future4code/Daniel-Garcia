import { CategoryDeviceDatabase } from "../data/category-deviceDatabase";
import { CategoryDatabase } from "../data/categoryDatabase";
import { DeviceDatabase } from "../data/deviceDatabase";
import { BaseError } from "../error/BaseError";
import { CategoryDTO } from "../model/categoryModel";
import { CategoryDeviceDTO } from "../model/category-deviceModel";
import { DeviceDTO } from "../model/deviceModel";

export class CategoryDeviceBusiness {
  constructor(
    private categoryDeviceDatabase: CategoryDeviceDatabase,
    private deviceDatabase: DeviceDatabase,
    private categoryDatabase: CategoryDatabase
  ) {}

  async createCorrelation(data: CategoryDeviceDTO) {
    if (!data.name || !data.PART_NUMBER) {
      throw new Error(
        "Name and PartNumber must be provided to vinculate both entities"
      );
    }
    if (isNaN(Number(data.PART_NUMBER)) || Number(data.PART_NUMBER) < 0) {
      throw new Error(
        "Valid PartNumber must be provided to vinculate both entities"
      );
    }
    const dataToDB = {
      name: data.name,
      PART_NUMBER: Number(data.PART_NUMBER),
    };
    const verifiedCategory = await this.categoryDatabase.searchByName(
      dataToDB as CategoryDTO
    );
    if (!verifiedCategory.getId()) {
      throw new BaseError("Category not found", 400);
    }

    const verifiedDevice = await this.deviceDatabase.searchByPartNumber(
      dataToDB as unknown as DeviceDTO
    );
    if (!verifiedDevice.getId()) {
      throw new BaseError("Device not found", 400);
    }
    const dataToDatabase: CategoryDeviceDTO = {
      CdDevice: verifiedDevice.getId(),
      CdCategory: verifiedCategory.getId(),
    };
    return this.categoryDeviceDatabase.createCorrelation(dataToDatabase);
  }
  async getCategoryListByDevice(data: CategoryDeviceDTO): Promise<any> {
    if (!data.PART_NUMBER) {
      throw new Error("PartNumber must be provided");
    }
    if (isNaN(Number(data.PART_NUMBER)) || Number(data.PART_NUMBER) < 0) {
      throw new Error("Valid PartNumber must be provided");
    }
    const dataToDB: DeviceDTO = {
      PART_NUMBER: Number(data.PART_NUMBER),
    };
    const verifiedDevice = await this.deviceDatabase.searchByPartNumber(
      dataToDB
    );
    if (!verifiedDevice.getId()) {
      throw new BaseError("Device not found", 400);
    }
    const dataFromDB = await this.categoryDeviceDatabase.searchListByPartNumber(
      dataToDB
    );
    const categoryList = dataFromDB.map((result: any) => result.NAME);
    const returnData = {
      PartNumber: verifiedDevice.getPart_Number(),
      Color: verifiedDevice.getColor(),
      CategoryList: categoryList,
    };
    return returnData;
  }

  async deleteDeviceCorrelation(data: CategoryDeviceDTO) {
    if (!data.PART_NUMBER) {
      throw new Error("PartNumber must be provided to be deleted");
    }
    if (isNaN(Number(data.PART_NUMBER)) || Number(data.PART_NUMBER) < 0) {
      throw new Error(
        "Valid PartNumber must be provided to vinculate both entities"
      );
    }
    const dataToDB: DeviceDTO = {
      PART_NUMBER: Number(data.PART_NUMBER),
    };
    const verifiedDevice = await this.deviceDatabase.searchByPartNumber(
      dataToDB
    );
    if (!verifiedDevice.getId()) {
      throw new BaseError("Device not found", 400);
    }
    await this.categoryDeviceDatabase.deleteDeviceCorrelation({
      CdDevice: verifiedDevice.getId(),
    });
  }

  async deleteCategoryCorrelation(data: CategoryDeviceDTO) {
    if (!data.name) {
      throw new Error("Name must be provided to be deleted");
    }
    const verifiedCategory = await this.categoryDatabase.searchByName(
      data as CategoryDTO
    );
    if (!verifiedCategory.getId()) {
      throw new BaseError("Category not found", 400);
    }
    await this.categoryDeviceDatabase.deleteCategoryCorrelation({
      CdCategory: verifiedCategory.getId(),
    });
  }
}
