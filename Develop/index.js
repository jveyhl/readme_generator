// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license does your project use?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2", "BSD3", "None"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "Are there any dependencies to install?",
    default: "No",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to initiate tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe the usage of this repo",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("Generating README file...");
    writeToFile("./dist/README.md", generateMarkdown({ ...response }));
  });
}

// Function call to initialize app
init();
