import app from "./app";
import { createTask } from "./endpoints/createTask";
import { createUser } from "./endpoints/createUser";
import { editUser } from "./endpoints/editUser";
import { getTaskById } from "./endpoints/getTaskById";
import { getUserById } from "./endpoints/getUserById";

app.get("/user/:id", getUserById);

app.post("/user", createUser);

app.put("/user/edit/:id", editUser);

app.post("/task", createTask);

app.get("/task/:id", getTaskById);
