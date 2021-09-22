import { DeviceDatabase } from "../data/deviceDatabase";
import { BaseError } from "../error/BaseError";
import { Device, DeviceDTO } from "../model/deviceModel";

export class DeviceBusiness {
  constructor(private deviceDatabase: DeviceDatabase) {}

  async create(data: DeviceDTO) {
    if (!data.COLOR || !data.PART_NUMBER) {
      throw new Error(
        "Color and PartName must be provided to create a new device"
      );
    }
    const verifiedDevice = await this.deviceDatabase.searchByPartNumber(data);
    if (verifiedDevice.getId()) {
      throw new BaseError("Device with this PartNumber already exists", 400);
    }
    await this.deviceDatabase.create(data);
  }
  async getAll(): Promise<Device[]> {
    return this.deviceDatabase.getAll();
  }

  async delete(data: DeviceDTO) {
    if (!data.PART_NUMBER && Number(data.PART_NUMBER) > 0) {
      throw new Error("PartNumber must be provided to delete a category");
    }
    const dataToDB = {
      PART_NUMBER: Number(data.PART_NUMBER),
    };
    const verifyDevice = await this.deviceDatabase.searchByPartNumber(dataToDB);

    if (!verifyDevice.getId()) {
      throw new BaseError("Device with this PartNumber doesn't exists", 400);
    }
    await this.deviceDatabase.deleteByPartNumber(dataToDB);
  }
}
