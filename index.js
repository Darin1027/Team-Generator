const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
const employee = require("./lib/employeeClass");

// initial employee questions
const employeeQuestionsArray = [
  {
    type: "input",
    message: "Input employee name.",
    name: "Name",
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
];

const managerQuestion = [
  {
    type: "input",
    message: "Input managers office number.",
    name: "officeNum",
    // getRole()—overridden to return 'Manager'?????
  },
];

const engineerQuestion = [
  {
    type: "input",
    message: "Input Engineers github username.",
    name: "github",
    // getRole()—overridden to return 'Engineer'?????
  },
];

const internQuestion = [
  {
    type: "input",
    message: "Input Interns school.",
    name: "school",
    // getRole()—overridden to return 'Intern'?????
  },
];

//  function to write HTML file
function writeToFile(generateHTML, data) {
  fs.writeToFile(generateHTML, data, function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

//  function to initialize app
function init() {
  inquirer.prompt(employeeQuestionsArray).then(function (data) {
    writeToFile("generatedIndexFile.html", generateHTML(data));
    console.log(data);
  });
}

// Function call to initialize app
init();

module.exports = employeeQuestionsArray;
