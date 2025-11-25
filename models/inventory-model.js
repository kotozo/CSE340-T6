/*
const pool = require("../database/")

 ************************
 * Get all Classification data
 * ************************ 
async function getClassifications() {
  return await pool.query(
    "SELECT * FROM public.classification ORDER BY classification_name"
  )
}

 ************************
 * Get inventory by classification_id
 * ************************ 
async function getInventoryByClassificationId(classification_id) {
  try {
    const data = await pool.query(
      `SELECT * FROM public.inventory AS i
       JOIN public.classification AS c
       ON i.classification_id = c.classification_id
       WHERE i.classification_id = $1`,
      [classification_id]
    )
    return data.rows
  } catch (error) {
    console.error("getInventoryByClassificationId error " + error)
  }
}

 ************************
 * Get a single vehicle by ID
 * ************************ 
async function getVehicleById(inv_id) {
  try {
    const sql = "SELECT * FROM public.inventory WHERE inv_id = $1"
    const result = await pool.query(sql, [inv_id])
    return result.rows[0]
  } catch (error) {
    console.error("getVehicleById error " + error)
    return null
  }
}

 ************************
 * Export model functions
 * ************************ 
module.exports = {
  getClassifications,
  getInventoryByClassificationId,
  getVehicleById
}

*/



const pool = require("../database/")

/* Get all classifications */
async function getClassifications() {
  return await pool.query(
    "SELECT * FROM public.classification ORDER BY classification_name"
  )
}

/* Get inventory by classification_id */
async function getInventoryByClassificationId(classification_id) {
  try {
    const data = await pool.query(
      `SELECT * FROM public.inventory AS i
       JOIN public.classification AS c
       ON i.classification_id = c.classification_id
       WHERE i.classification_id = $1`,
      [classification_id]
    )
    return data.rows
  } catch (error) {
    console.error("getInventoryByClassificationId error " + error)
    return []
  }
}

/* Get a single vehicle by ID */
async function getVehicleById(inv_id) {
  try {
    const sql = "SELECT * FROM public.inventory WHERE inv_id = $1"
    const result = await pool.query(sql, [inv_id])
    return result.rows[0]
  } catch (error) {
    console.error("getVehicleById error " + error)
    return null
  }
}

module.exports = {
  getClassifications,
  getInventoryByClassificationId,
  getVehicleById
}
