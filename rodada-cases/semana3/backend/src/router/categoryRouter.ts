import express from "express";
import { CategoryDeviceBusiness } from "../business/category-deviceBusiness";
import { CategoryBusiness } from "../business/categoryBusiness";
import { CategoryDeviceController } from "../controller/category-deviceController";
import { CategoryController } from "../controller/categoryController";
import { CategoryDeviceDatabase } from "../data/category-deviceDatabase";
import { CategoryDatabase } from "../data/categoryDatabase";
import { DeviceDatabase } from "../data/deviceDatabase";

export const categoryRouter = express.Router();

const categoryDatabase = new CategoryDatabase();
const categoryBusiness = new CategoryBusiness(categoryDatabase);
const categoryController = new CategoryController(categoryBusiness);
const deviceDatabase = new DeviceDatabase();
const categoryDeviceDatabase = new CategoryDeviceDatabase();
const categoryDeviceBusiness = new CategoryDeviceBusiness(
  categoryDeviceDatabase,
  deviceDatabase,
  categoryDatabase
);
const categoryDeviceController = new CategoryDeviceController(
  categoryDeviceBusiness
);

categoryRouter.get("/", (req, res) => categoryController.getAll(req, res));

categoryRouter.post("/create", (req, res) =>
  categoryController.create(req, res)
);
categoryRouter.post("/add-to-device", (req, res) =>
  categoryDeviceController.AddCategoryToDevice(req, res)
);

categoryRouter.delete("/delete/:name", (req, res) =>
  categoryController.delete(req, res)
);
categoryRouter.delete("/remove-from-device/:name", (req, res) =>
  categoryDeviceController.deleteCategoryFromDevices(req, res)
);
