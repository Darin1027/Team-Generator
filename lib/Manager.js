// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  getofficeNum() {
    return this.officeNum;
  }
  getRole() {
    return "manager";
  }
}

module.exports = Manager;
