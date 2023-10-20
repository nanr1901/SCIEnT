const rootController = require("../controller/root_controller")
const rootRouter = require("express").Router()
rootRouter.get("/ping",rootController.ping)
module.exports = rootRouter
