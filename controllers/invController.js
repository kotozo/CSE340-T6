
const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

/* ************************
 * Build inventory by classification view
 * ************************ */
async function buildByClassificationId(req, res, next) {
  const classification_id = req.params.classificationId
  try {
    const data = await invModel.getInventoryByClassificationId(classification_id)
    const nav = await utilities.getNav()

    if (!data || data.length === 0) {
      return res.render("inventory/classification", {
        title: "No Vehicles Found",
        nav,
        grid: '<p class="notice">No vehicles exist for this classification.</p>'
      })
    }

    const grid = await utilities.buildClassificationGrid(data)
    const className = data[0].classification_name

    res.render("inventory/classification", {
      title: className + " vehicles",
      nav,
      grid
    })
  } catch (error) {
    console.error("buildByClassificationId error:", error)
    next(error)
  }
}

/* ************************
 * Build single vehicle detail page
 * ************************ */
async function buildVehicleDetail(req, res, next) {
  const inv_id = req.params.inv_id
  try {
    const vehicle = await invModel.getVehicleById(inv_id)
    const nav = await utilities.getNav()

    if (!vehicle) {
      return res.status(404).render("errors/404", { message: "Vehicle not found" })
    }

    res.render("inventory/vehicleDetail", {
      title: `${vehicle.inv_make} ${vehicle.inv_model} Details`,
      vehicle,
      nav
    })
  } catch (error) {
    console.error("buildVehicleDetail error:", error)
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
