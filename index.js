const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
let manager = [];
let engineer = [];
let intern = [];
let employeeArray = { manager, engineer, intern };

function init() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Input employee name.",
        name: "name",
      },
      {
        type: "input",
        message: "Input employee ID number.",
        name: "id",
      },
      {
        type: "input",
        message: "Input employee email.",
        name: "email",
      },
      {
        type: "list",
        message: "Input employee role.",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
      },
    ])
    .then(({ name, id, email, role }) => {
      if (role === manager) {
        return inquirer
          .prompt([
            {
              type: "input",
              message: "Input Managers office number.",
              name: "officeNum",
            },
            {
              type: "list",
              message: "Add another employee?",
              choices: ["yes", "no"],
              name: "addEmployee",
            },
          ])
          .then(({ officeNum, addEmployee }) => {
            manager.push(new manager(name, id, email, officeNum));
            if (addEmployee) {
              return prompt();
            }
          });
      } else if (role === "engineer") {
        return inquirer
          .prompt([
            {
              type: "input",
              message: "Input Engineers github username.",
              name: "github",
            },
            {
              type: "list",
              message: "Add another employee?",
              choices: ["yes", "no"],
              name: "addEmployee",
            },
          ])
          .then(({ github, addEmployee }) => {
            engineer.push(new engineer(name, id, email, github));
            if (addEmployee) {
              return prompt();
            }
          });
      } else if (role === "intern") {
        return inquirer
          .prompt([
            {
              type: "input",
              message: "Input Interns school name.",
              name: "school",
            },
            {
              type: "list",
              message: "Add another employee?",
              choices: ["yes", "no"],
              name: "addEmployee",
            },
          ])
          .then(({ school, addEmployee }) => {
            intern.push(new intern(name, id, email, school));
            if (addEmployee) {
              return prompt();
            }
          });
      }
    });
}

//  function to write README file
function writeToFile(generateHTML, data) {
  fs.writeFile(generateHTML, data, function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

//  function to initialize app
function init() {
  inquirer.prompt(employeeArray).then(function (data) {
    writeToFile("generatedIndexFile.html", generateHTML(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
