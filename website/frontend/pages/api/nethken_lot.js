// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import mysql2 from 'serverless-mysql';
const mysql2 = require('mysql2/promise');

/*export default function getParkingData(req, res) {
  res.status(200).json({ name: "First api route" })
}*/

export default async function handler(req,res) {
  const db = await mysql2.createConnection({
    host: 'containers-us-west-65.railway.app',
    port: '7361',
    database: 'railway',
    user: 'root',
    password: 'scBwbA5XwEW7VOLpTfaB'
  });
  
  try {
    const query = "SELECT * FROM ParkingLot";
    const values = [];
    const [data] = await db.query(query, values);
    await db.end();
    res.status(200).json({results: data})
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}