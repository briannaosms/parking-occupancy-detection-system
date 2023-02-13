CREATE DATABASE parkingLots;

use parkingLots;

CREATE TABLE parkingLots (
    lot_name VARCHAR(255) NOT NULL,
    spaceID VARCHAR(255) NOT NULL,
    type    VARCHAR(255) NOT NULL,
    availability INTEGER NOT NULL,
    PRIMARY KEY (spaceID)
);