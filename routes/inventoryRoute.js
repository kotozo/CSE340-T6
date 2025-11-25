//Needed Ressources
const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")
// Route to build inventory by classification view

router.get("/type/:classificationId", invController.buildByClassificationId);

// New route for single vehicle details
/* This is the previous code 
router.get('/vehicles/:inv_id', invController.buildVehicleDetail);*/

router.get("/type/:classificationId", invController.buildByClassificationId);


module.exports = router;
