// import employee class
const employee = require("../lib/employeeClass");
// start test
test("test new employee", () => {
  expect(employee.name).toEqual(expect.any(string));
  expect(employee.id).toEqual(expect.any(number));
  expect(employee.email).toEqual(expect.any(string));
});

// class employee {
//     constructor(name, id, email) {
//       this.name = name;
//       this.id = id;
//       this.email = email;
//     }

//     getName() {
//       return this.name;
//     }
//     getId() {
//       return this.id;
//     }
//     getEmail() {
//       return this.email;
//     }
//     getRole() {
//       return "employee";
//     }
//   }
