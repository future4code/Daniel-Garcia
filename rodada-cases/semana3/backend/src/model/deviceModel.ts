export class Device {
  constructor(
    private DEVICE_ID: number,
    private COLOR: string,
    private PART_NUMBER: number
  ) {}

  getId() {
    return this.DEVICE_ID;
  }

  getColor() {
    return this.COLOR;
  }

  getPart_Number() {
    return this.PART_NUMBER;
  }

  static toDeviceModel(category?: any): Device {
    return new Device(
      category?.DEVICE_ID,
      category?.COLOR,
      category?.PART_NUMBER
    );
  }
}
export interface DeviceDTO {
  COLOR?: string;
  PART_NUMBER: string | number;
}
