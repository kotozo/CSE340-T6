/*const pool = require("../database/")

************************
* Get all Classification date
* ************************ 
async function getClassifications() {
    return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")  
}

*/

/* ************************
 * Get all inventory items and classification_name by classification_id
 
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
     console.error("getclassificationbyid error " + error)
    }
}

// create a function to fetch a single vehicle:

exports.getVehicleById = async (inv_id) => {
    try {
        const sql = 'SELECT * FROM inventory WHERE inv_id = $1';
        const result = await pool.query(sql, [inv_id]);
        return result.rows[0];
    } catch (error) {
        console.error(error);
        return null;
    }
};


module.exports = { getClassifications, getInventoryByClassificationId}

*/



const pool = require("../database/")

/* ************************
 * Get all Classification data
 * ************************ */
async function getClassifications() {
  return await pool.query(
    "SELECT * FROM public.classification ORDER BY classification_name"
  )
}

/* ************************
 * Get inventory by classification_id
 * ************************ */
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

/* ************************
 * Get a single vehicle by ID
 * ************************ */
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

/* ************************
 * Export model functions
 * ************************ */
module.exports = {
  getClassifications,
  getInventoryByClassificationId,
  getVehicleById
}
