const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  // Array of questions for user input
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a short description for the project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the installation instructions for the project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please explain how to use the project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for the project:",
    choices: ["ISC", "MIT", "GNU GPLv3", "Apache 2.0", "None"],
  },
  {
    type: "input",
    name: "contribute",
    message: "Please explain how others can contribute to the project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please explain any tests you have for the project:",
  },
  {
    type: "input",
    name: "questions",
    message: "Are there any questions?",
  },
  {
    type: "input",
    name: "githuburl",
    message: "Please enter your GitHub URL:",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error generating the README.md file:", err);
    } else {
      console.log("README.md file generated successfully!");
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
      console.error("Error prompting user:", error);
    });
}

init();
