const pool = require("../database/index.js")

/* ************************
* Get all Classification date
* ************************ */
async function getClassifications() {
    return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")  
}

module.exports = {getClassifications}
