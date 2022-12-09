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
