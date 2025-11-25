const invModel = require("../models/inventory-model")

const Util = {}

/* Build navigation menu */
Util.getNav = async function () {
  const data = await invModel.getClassifications()
  let list = "<ul>"
  list += '<li><a href="/" title="Home page">Home</a></li>'

  data.rows.forEach((row) => {
    list += "<li>"
    list +=
      '<a href="/inv/type/' +
      row.classification_id +
      '" title="See our inventory of ' +
      row.classification_name +
      ' vehicles">' +
      row.classification_name +
      "</a>"
    list += "</li>"
  })

  list += "</ul>"
  return list
}

/* Build Classification Grid HTML */
Util.buildClassificationGrid = async function (data) {
  if (!data || data.length === 0) {
    return '<p class="notice">Sorry, no matching vehicles could be found.</p>'
  }

  let grid = '<ul id="inv-display">'

  data.forEach((vehicle) => {
    grid += "<li>"

    // Vehicle detail links match route
    grid +=
      '<a href="/inv/detail/' +
      vehicle.inv_id +
      '" title="View ' +
      vehicle.inv_make +
      " " +
      vehicle.inv_model +
      ' details">' +
      '<img src="' +
      vehicle.inv_thumbnail +
      '" alt="Image of ' +
      vehicle.inv_make +
      " " +
      vehicle.inv_model +
      ' on CSE Motors"></a>'

    grid += '<div class="namePrice">'
    grid += "<hr />"

    grid += "<h2>"
    grid +=
      '<a href="/inv/detail/' +
      vehicle.inv_id +
      '" title="View ' +
      vehicle.inv_make +
      " " +
      vehicle.inv_model +
      ' details">' +
      vehicle.inv_make +
      " " +
      vehicle.inv_model +
      "</a>"
    grid += "</h2>"

    grid +=
      "<span>$" +
      new Intl.NumberFormat("en-US").format(vehicle.inv_price) +
      "</span>"

    grid += "</div>"
    grid += "</li>"
  })

  grid += "</ul>"
  return grid
}

/* Error Handling Wrapper */
Util.handleErrors = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)

module.exports = Util
