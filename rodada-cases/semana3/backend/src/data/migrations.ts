import { BaseDatabase } from "./baseDatabase";

export class Migrations extends BaseDatabase {
  public async createTableCategory() {
    await this.getConnection().raw(
      `CREATE TABLE category (
      ID INT AUTO_INCREMENT PRIMARY KEY,
      NAME VARCHAR(128) UNIQUE NOT NULL
      );`
    );
  }
  public async createTableDevices() {
    await this.getConnection().raw(
      `CREATE TABLE devices (
DEVICE_ID INT AUTO_INCREMENT PRIMARY KEY,
COLOR VARCHAR(16) NOT NULL,
PART_NUMBER INT NOT NULL
);`
    );
  }
  public async createTableCategoryDevices() {
    await this.getConnection().raw(
      `CREATE TABLE category_devices(
CD_ID     INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
CD_DEVICE INT NOT NULL,
CD_CATEGORY INT NOT NULL,
FOREIGN KEY (CD_DEVICE) REFERENCES devices (DEVICE_ID),
FOREIGN KEY (CD_CATEGORY) REFERENCES category (ID)
);`
    );
  }

  public async createView() {
    await this.getConnection().raw(
      `CREATE VIEW category_device_summary AS
  SELECT
    DEVICE_ID                                                                                              AS DEVICE_ID,
    max(PART_NUMBER)                                                                                       AS device_PART_NUMBER,
    max(COLOR)                                                                                       AS DEVICE_COLOR,
    cast(concat('[', group_concat(json_quote(NAME) ORDER BY NAME SEPARATOR ','), ']') as json) AS category_array
  FROM
    devices
    INNER JOIN category_devices
      ON devices.DEVICE_ID = category_devices.CD_DEVICE
    INNER JOIN category
      ON category_devices.CD_CATEGORY = category.id
  GROUP BY
    DEVICE_ID ;`
    );
  }
  public async viewTables() {
    await this.getConnection().raw(`select * from category_device_summary`);
  }
}

const migrations = new Migrations();

migrations.createTableCategory();
migrations.createTableDevices();
migrations.createTableCategoryDevices();
