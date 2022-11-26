// const employee = require("./employee");

// class engineer {
//   constructor(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//   }

//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getRole() {
//     return "employee";
//   }
// }

// module.exports = employee;

// The application must include Employee, Manager, Engineer, and Intern classes. The tests for these classes (in the _tests_ directory) must ALL pass.

// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber

// getRole()—overridden to return 'Manager'

// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have the following:
// school

// getSchool()

// getRole()—overridden to return 'Intern'

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.