
CREATE TABLE `Address` (
  `AddressID` int NOT NULL AUTO_INCREMENT,
  `Street` varchar(100) DEFAULT NULL,
  `City` varchar(50) DEFAULT NULL,
  `State` varchar(50) DEFAULT NULL,
  `Country` varchar(50) DEFAULT NULL,
  `PostalCode` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`AddressID`)
);




CREATE TABLE `Customer` (
  `CustomerID` int NOT NULL AUTO_INCREMENT,
  `CustomerName` varchar(100) DEFAULT NULL,
  `ContactInfo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`CustomerID`)
);






CREATE TABLE `Product` (
  `ProductID` int NOT NULL,
  `ProductName` varchar(100) DEFAULT NULL,
  `Description` text,
  `Price` decimal(10,2) DEFAULT NULL,
  `TaxRate` decimal(4,2) DEFAULT NULL,
  `VendorID` int DEFAULT NULL,
  PRIMARY KEY (`ProductID`),
  KEY `FK_Vendor_Product` (`VendorID`),
  CONSTRAINT `FK_Vendor_Product` FOREIGN KEY (`VendorID`) REFERENCES `Vendor` (`VendorID`)
);


CREATE TABLE `Vendor` (
  `VendorID` int NOT NULL AUTO_INCREMENT,
  `VendorName` varchar(100) DEFAULT NULL,
  `ContactInfo` varchar(100) DEFAULT NULL,
  `City` varchar(50) DEFAULT NULL,
  `State` varchar(50) DEFAULT NULL,
  `Country` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`VendorID`)
);

