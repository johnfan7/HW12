const util = require("util")
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "EmployeeTracker"

});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;

