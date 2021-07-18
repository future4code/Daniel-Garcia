import { app } from "./app"
import { payment } from "./endpoints/payment"
import { verifyBalance } from "./endpoints/verifyBalance"
import { createAccount } from "./endpoints/createAccount"
import { addBalance } from "./endpoints/addBalance"
import { transfer } from "./endpoints/transfer"
import { getAllUsers } from "./endpoints/getAllUsers"


app.get("/users", getAllUsers)

app.post("/create-account", createAccount)

app.get("/verify-balance", verifyBalance)
app.post("/add-balance", addBalance) 

app.post("/payment", payment)
app.post("/transfer", transfer)