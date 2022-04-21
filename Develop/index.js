// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown'); 
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter the name for your project",
    name: "title",
  },
  {
    type: "input",
    message: "Enter the description for your project",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the description for your project",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the description for your project",
    name: "description",
  },
  {
    type: "confirm",
    message: "Enter Features",
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
        writeToFile("READMe.md", convertData); 
    })

    .catch((error) => console.log(error));
}

// Function call to initialize app
init();
