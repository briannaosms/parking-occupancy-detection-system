CREATE DATABASE ParkingLot;
USE ParkingLot;

CREATE TABLE ParkingLot (
    LotName VARCHAR(255),
    ID int,
    MaxSpacesFaculty int,
    MaxSpacesStudent int,
    MaxSpacesHandicapped int,
    MaxSpacesVisitor int,
    CurrentSpacesFaculty int,
    CurrentSpacesStudent int,
    CurrentSpacesHandicapped int,
    CurrentSpacesVisitor int,
    Datetime datetime
);