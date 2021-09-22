import app from "./app";
import { categoryRouter } from "./router/categoryRouter";
import { deviceRouter } from "./router/deviceRouter";

app.use("/category", categoryRouter);
app.use("/device", deviceRouter);
