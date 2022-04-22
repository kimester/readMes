// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown'); 
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter the title of your project",
    name: "Title",
  },
  {
    type: "input",
    message: "Enter the description for your project",
    name: "Description",
  },
  {
    type: "input",
    message: "Enter the table of contents for your project",
    name: "Table/Contents",
  },
  {
    type: "input",
    message: "Enter the installation for your project",
    name: "InstallationInstructions",
    default: "npm install"
  },
  {
    type: "input",
    message: "Enter the Usage for your project",
    name: "Usage",
  },
  {
    type: "list",
    message: "Enter the License for your project",
    name: "License",
    choices: ["MIT", "Apache 2.0", "Mozilla 2.0", "None"]
  },
  {
    type: "input",
    message: "Enter the tests for your project",
    name: "Tests",
    default: "npm run tests"
  },
  {
    type: "input",
    //add instructions on how to reach me with additional quiestions! 
    message: "Please enter your email address to reach you ?  ",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your github username ",
    name: "githubusername",
  },
  {
    type: "confirm",
    message: "Do you confirm",
    name: "description",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!", fileName));

}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) =>{
        console.log(answers); 
        //convert it into readme format 
const convertData = generateMarkdown(answers);
console.log(convertData);

        //write to to a file 
        writeToFile("README_1.md", convertData); 
    })

    .catch((error) => console.log(error));
}

// Function call to initialize app
init();
