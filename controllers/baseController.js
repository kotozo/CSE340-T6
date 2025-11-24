const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
}

module.exports = baseController


/***Updated version of the code***/
/*
const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function(req, res){
  try {
    const nav = await utilities.getNav()
    res.render("index", { title: "Home", nav })
  } catch (err) {
    console.error("Home page error:", err)
    res.status(500).send("Server error loading home page")
  }
}

module.exports = baseController
*/
/*
baseController.buildHome = async function(req, res, next){
  try {
    const nav = await utilities.getNav()
    res.render("index", {title: "Home", nav})
  } catch (error) {
    next(error)
  }
}

*/
