// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import mysql2 from 'serverless-mysql';
const mysql2 = require('mysql2/promise');

/*export default function getParkingData(req, res) {
  res.status(200).json({ name: "First api route" })
}*/

export default async function handler(req,res) {
  // Connection to database
  // Credentials are exposed right now and need to be hidden in next.config.js
  const db = await mysql2.createConnection({
    host: 'containers-us-west-65.railway.app',
    port: '7361',
    database: 'railway',
    user: 'root',
    password: 'scBwbA5XwEW7VOLpTfaB'
  });
  // Try block to query data from the database
  try {
    const query = "SELECT * FROM ParkingLot";
    const query2 = "SELECT MaxSpacesFaculty, MaxSpacesStudent, MaxSpacesHandicapped, MaxSpacesVisitor, CurrentSpacesFaculty, CurrentSpacesStudent, CurrentSpacesHandicapped, CurrentSpacesVisitor, cast(DT as date) ,cast(DT as time) AS time FROM ParkingLot;"
    const values = [];
    const [data] = await db.query(query2, values);
    await db.end();
    res.status(200).json({results: data})
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}