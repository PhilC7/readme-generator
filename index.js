const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of your project."
    },
    {
        type: "input",
        name: "install",
        message: "Add your installation details."
    },
    {
        type: "input",
        name: "useage",
        message: "Add your useage details."
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license",
        choices: ["MIT", "Apache", "Boost", "EPL 1.0", "None"],
    },

    {
        type: "input",
        name: "contribute",
        message: "Please add information to contribute to the project."
    },
    {
        type: "input",
        name: "test",
        message: "Please add your testing details.",
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter your questions details."
    },

];


// function to write README file
function writeToFile(fileName, data) {

    // write file method - check for error, if error log error / else log README is ready.
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(`Your README is ready!`);
    });
}


// function to initialize program
function init() {
    inquirer.prompt(questions).then((answer) => {
        const content = generateMarkdown(answer); // set variable to hold answers
        writeToFile("generated_README.md", content); // call writeToFile function
    });
}


// function call to initialize program
init();
