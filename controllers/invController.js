/*
const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}
*/
/* ************************
 * Build inventory by classification view
 * ************************ */

/*
invCont.buildByClassificationId = async function (req, res, next) {
    const classification_id = req.params.classificationId 
    const data = await invModel.getInventoryByClassificationId(classification_id)
    const grid = await utilities.buildClassificationGrid(data)
    let nav = await utilities.getNav()
    const className = data[0].classification_name
    res.render("./inventory/classification", {
        title: className + " vehicles",
        nav,
        grid,
    })
} 

buildVehicleDetail = async (req, res) => {
    const inv_id = req.params.inv_id;
    try {
        const vehicle = await inventoryModel.getVehicleById(inv_id);

        if (!vehicle) {
            return res.status(404).render('errors/404', { message: "Vehicle not found" });
        }

        res.render('inventory/vehicleDetail', {
            title: `${vehicle.inv_make} ${vehicle.inv_model} Details`,
            vehicle: vehicle
        });
    } catch (error) {
        console.error(error);
        res.status(500).render('errors/500', { message: "Server error" });
    }
};

module.exports = { invCont, buildByClassificationId, buildVehiculeDetail }


*/



const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

/* ************************
 * Build inventory by classification view
 * ************************ */
async function buildByClassificationId(req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name

  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ************************
 * Build single vehicle detail page
 * ************************ */
async function buildVehicleDetail(req, res, next) {
  const inv_id = req.params.inv_id
  try {
    const vehicle = await invModel.getVehicleById(inv_id)
    let nav = await utilities.getNav()

    if (!vehicle) {
      return res.status(404).render("errors/404", { message: "Vehicle not found" })
    }

    res.render("inventory/vehicleDetail", {
      title: `${vehicle.inv_make} ${vehicle.inv_model} Details`,
      vehicle,
      nav
    })
  } catch (error) {
    console.error(error)
    res.status(500).render("errors/500", { message: "Server error" })
  }
}


/* ************************
 * Export functions
 * ************************ */
module.exports = {
  buildByClassificationId,
  buildVehicleDetail
}
