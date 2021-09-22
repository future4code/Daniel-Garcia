import express from "express";
import { CategoryDeviceBusiness } from "../business/category-deviceBusiness";
import { DeviceBusiness } from "../business/deviceBusiness";
import { CategoryDeviceController } from "../controller/category-deviceController";
import { DeviceController } from "../controller/deviceController";
import { CategoryDeviceDatabase } from "../data/category-deviceDatabase";
import { CategoryDatabase } from "../data/categoryDatabase";
import { DeviceDatabase } from "../data/deviceDatabase";

export const deviceRouter = express.Router();

const deviceDatabase = new DeviceDatabase();
const deviceBusiness = new DeviceBusiness(deviceDatabase);
const deviceController = new DeviceController(deviceBusiness);
const categoryDatabase = new CategoryDatabase();
const categoryDeviceDatabase = new CategoryDeviceDatabase();
const categoryDeviceBusiness = new CategoryDeviceBusiness(
  categoryDeviceDatabase,
  deviceDatabase,
  categoryDatabase
);
const categoryDeviceController = new CategoryDeviceController(
  categoryDeviceBusiness
);

deviceRouter.get("/get-all", (req, res) => deviceController.getAll(req, res));
deviceRouter.get("/category-list/:partNumber", (req, res) =>
  categoryDeviceController.getCategoryListByDevice(req, res)
);

deviceRouter.post("/create", (req, res) => deviceController.create(req, res));

deviceRouter.delete("/delete/:partNumber", (req, res) =>
  deviceController.delete(req, res)
);
deviceRouter.delete("/remove-from-category/:partNumber", (req, res) =>
  categoryDeviceController.deleteDeviceFromCategory(req, res)
);
