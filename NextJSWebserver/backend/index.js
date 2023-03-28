const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json());

// DATABASE CONNECTION AREA
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'parkingLots',
});

app.get('/get', (req, res) => {
    // THIS GETS THE INFORMATION IF YOU WANT DIFFERENT INFO CHANGE THE SQL QUERY
    const SQL = "SELECT * FROM parkingLots;"
    db.query(SQL,(err, result) =>{
        res.send(result);
    })
})


app.listen(3001, () => console.log("server started on port 3001"))