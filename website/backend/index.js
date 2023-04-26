const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express()

app.use(cors());
app.use(express.json());

// DATABASE CONNECTION AREA
const db = mysql2.createConnection({
    host : 'db-mysql-nyc1-81589-do-user-13967640-0.b.db.ondigitalocean.com',
    user: 'doadmin',
    password: 'AVNS__qq7qufykMloptKIYs1',
    database : 'defaultdb',
	port: '25060',
});

app.get('/get', (req, res) => {
    // THIS GETS THE INFORMATION IF YOU WANT DIFFERENT INFO CHANGE THE SQL QUERY
    const SQL = "SHOW tables;"
    const SQL2 = "SELECT * from ParkingLot;"
    const SQL3 = "SELECT cast(Datetime as time) AS time, SUM(CurrentSpacesFaculty+CurrentSpacesStudent+CurrentSpacesHandicapped+CurrentSpacesVisitor) AS total FROM ParkingLot GROUP BY Datetime;"
    db.query(SQL3,function(err, result, fields) {
	    if (err){
		    console.log(err)
	    }
	    else{
	    	console.log(result)
	    	res.send(result);
	    }
    });
})

app.get('/current', (req, res) => {
    // THIS GETS THE INFORMATION IF YOU WANT DIFFERENT INFO CHANGE THE SQL QUERY
    const SQL = "SELECT CurrentSpacesFaculty, CurrentSpacesStudent, CurrentSpacesHandicapped, CurrentSpacesVisitor FROM ParkingLot;"
    db.query(SQL,function(err, result, fields) {
        if (err){
            console.log(err)
            res.sendStatus(500)
        }
        else{
            console.log(result)
            res.send(result);
        }
    });
})

app.listen(3001, () => console.log("server started on port 3001"))
