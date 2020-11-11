const connection = require("./connection");

class DB {

    constructor(connection) {
        this.connection = connection;
    }


findAllEmployees() {
    return this.connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
}

findAllPossibleManager(employeeId) {
    return this.connection.query(
        "SELECT id, first_name, last_name FROM employee WHERE id != ?",
        employeeId
    );
}

createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
}

removeEmployee(employeeId) {
    return this.connection.query(
        "DELETE FROM employee WHERE id = ?",
        employeeId
    );
}

updateEmployeeRole(employeeId, roleId) {
    return this.connection.query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [roleId, employeeId]
    );
}

updateEmployeeManager(employeeId, managerId) {
    return this.connection.query(
        "UPDATE employee SET manager_id = ? WHERE id = ?",
        [managerId, employeeId]
    );
}

findAllRoles() {
    return this.connection.query(
        "SELECT role.id, role.title, department.name AS department, role.salary"
    );
}

createRole(role) {
    return this.connection.query("INSERT INTO role SERT ?", role);
}

findAllDepartments() {
    return this.connection.query(
        "SELECT department.id, department.name"
    );
}

createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
}

removeDepartment(departmentId) {
    return this.connection.query (
        "DELETE FROM department WHERE id = ?",
        departmentId
    );
}

findAllEmployeesByDepartment(departmentId) {
    return this.connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title",
        departmentId

    );
}

findAllEmployeesByManager(managerId) {
    return this.connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name",
        managerId
    );
}

}

module.exports = new DB(connection);

