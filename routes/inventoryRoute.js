// Needed Resources
const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/inv/type/:classificationId", invController.buildByClassificationId)

// Route for single vehicle details
router.get("/inv/detail/:inv_id", invController.buildVehicleDetail)

module.exports = router

