const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./dist/utils/generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeArray = [];

const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Managers name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Managers ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Managers email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter Managers office number:",
      },
    ])
    .then((managerResponses) => {
      const { name, id, email, officeNumber } = managerResponses;
      const manager = new Manager(name, id, email, officeNumber);

      employeeArray.push(manager);
      console.log(manager);
    });
};

const createEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Enter Employees role:",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter Employees name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Employees ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Employees email:",
      },
      {
        when: (input) => input.role === "Engineer",
        type: "input",
        name: "github",
        message: "Enter Engineers Github:",
      },
      {
        when: (input) => input.role === "Intern",
        type: "input",
        name: "school",
        message: "Enter Interns school:",
      },
      {
        type: "confirm",
        name: "addORquit",
        message: "Enter another employee:",
        default: false,
      },
    ])
    .then((employeeResponses) => {
      let { name, id, email, role, github, school, addORquit } =
        employeeResponses;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      employeeArray.push(employee);
      if (addORquit) {
        return createEmployee(employeeArray);
      } else {
        return employeeArray;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("GeneratedTest.html", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
};

function init() {
  createManager()
    .then(createEmployee)
    .then((employeeArray) => {
      return generateHTML(employeeArray);
    })
    .then((newHTML) => {
      return writeFile(newHTML);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
