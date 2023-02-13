CREATE DATABASE parkingLots;

use parkingLots;

CREATE TABLE parkingLots (
    lot_name VARCHAR(255) NOT NULL,
    spaceID VARCHAR(255) NOT NULL,
    type    VARCHAR(255) NOT NULL,
    availability INTEGER NOT NULL,
    PRIMARY KEY (spaceID)
);

INSERT INTO parkingLots
VALUES(
    "Nethkin",
    "6",
    "student",
    1
);

INSERT INTO parkingLots
VALUES(
    "Nethkin",
    "7",
    "student",
    1
);