const { Router } = require("express");
const { UserRoutes } = require("./User.routes");

let FrontendRoutes = Router()

FrontendRoutes.use("/web",UserRoutes)
 

module.exports = {FrontendRoutes}
