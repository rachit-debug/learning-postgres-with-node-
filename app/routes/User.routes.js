const { Router } = require("express");
const {CreateUser, ViewUser, Delete, UserUpdate} = require("../controllers/UserController")

let UserRoutes = Router()

UserRoutes.post("/create", CreateUser)
UserRoutes.get("/view", ViewUser)
UserRoutes.delete("/delete/:id", Delete)
UserRoutes.put("/update/:id", UserUpdate)


module.exports={UserRoutes}
