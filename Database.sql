drop database consola;

create database consola;

use consola;

SET sql_mode = "NO_AUTO_VALUE_ON_ZERO";

SET time_zone = "+00:00";

CREATE TABLE Status(
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL
);

CREATE TABLE Project(
                          id INT AUTO_INCREMENT  PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          shortName VARCHAR(255) DEFAULT NULL,
                          startDate date NOT NULL,
                          endDate date,
                          statusId INT NOT NULL,
                          CONSTRAINT fk_status FOREIGN KEY(statusId) REFERENCES Status(id)
);

CREATE TABLE Role(
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL
);

CREATE TABLE Employee(
                          username VARCHAR(255) PRIMARY KEY,
                          password VARCHAR(255) NOT NULL,
                          fullName VARCHAR(255) NOT NULL,
                          email VARCHAR(255) NOT NULL,
                          joinDate date NOT NULL,
                          leaveDate date,
                          initialBalance FLOAT NOT NULL,
                          currentBalance FLOAT NOT NULL,
                          roleId INT,
                          responsible VARCHAR(255),
                          CONSTRAINT fk_role FOREIGN KEY(roleId) REFERENCES Role(id),
                          CONSTRAINT fk_employee FOREIGN KEY(responsible) REFERENCES Employee(username)
);

CREATE TABLE Project_Employee(
                          projectId INT NOT NULL,
                          employeeId VARCHAR(255) NOT NULL,
                          CONSTRAINT fk_project FOREIGN KEY(projectId) REFERENCES Project(id),
                          CONSTRAINT fk_employee2 FOREIGN KEY(employeeId) REFERENCES Employee(username),
                          PRIMARY KEY(projectId, employeeId)
);

CREATE TABLE Vacation_Status(
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL
);

CREATE TABLE Vacation(
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          requestDate date NOT NULL,
                          startDate date NOT NULL,
                          endDate date NOT NULL,
                          duration FLOAT NOT NULL,
                          comment VARCHAR(300) DEFAULT NULL,
                          employeeId VARCHAR(255) NOT NULL,
                          CONSTRAINT fk_employee3 FOREIGN KEY(employeeId) REFERENCES Employee(username)
);

CREATE TABLE Vacation_Status_Vacation(
                          vacation_statusId INT NOT NULL,
                          vacationId INT NOT NULL,
                          date date NOT NULL,
                          CONSTRAINT fk_vacation_status FOREIGN KEY(vacation_statusId) REFERENCES Vacation_Status(id),
                          CONSTRAINT fk_vacation FOREIGN KEY(vacationId) REFERENCES Vacation(id),
                          PRIMARY KEY(vacation_statusId, vacationId)
);

CREATE TABLE Notification(
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          message VARCHAR(500) NOT NULL,
                          date date NOT NULL,
                          seen boolean NOT NULL,
                          vacationId INT NOT NULL,
                          CONSTRAINT fk_vacation2 FOREIGN KEY(vacationId) REFERENCES Vacation(id)
);
