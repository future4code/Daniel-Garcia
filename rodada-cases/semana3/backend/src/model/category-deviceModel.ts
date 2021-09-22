export class CategoryDevice {
  constructor(private CD_DEVICE: number, private CD_CATEGORY: number) {}

  getCdDevice() {
    return this.CD_DEVICE;
  }

  getCDCategory() {
    return this.CD_CATEGORY;
  }

  static toCategoryDeviceModel(deviceModel?: any): CategoryDevice {
    return new CategoryDevice(deviceModel.CD_DEVICE, deviceModel.CD_CATEGORY);
  }
}
export interface CategoryDeviceDTO {
  CdDevice?: number;
  CdCategory?: number;
  PART_NUMBER?: string | number;
  name?: string;
}
