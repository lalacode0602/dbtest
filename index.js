// Add packages
require("dotenv").config();
// Add database package and connection string
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
      rejectUnauthorized: false
  }
});

const getAll =  () => {
  console.log("--- STEP 2: Inside getAll() ---");
  sql = "SELECT * FROM product";
  // For illustration, not using try catch
  return pool.query(sql, []); 
};


console.log("--- STEP 1: Before call to getAll() ---");
getAll()
  .then(result => {
      console.log("--- STEP 3: No Error ---");
      console.log(result);
  })
  .catch(err => {
      console.log("--- STEP 3: Error ---");
      console.log(err.message);
  });
console.log("--- STEP 4: After call to getAll() ---");