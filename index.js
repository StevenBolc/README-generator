//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown.js");
const { writeFile } = fs;
const { prompt } = inquirer;

//Creates an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "Usage"
    },
    {
        type: "list",
        message: "Select license",
        name: "License",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "Contributors?",
        name: "Contributing"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "Tests"
    },
    
    {
        type: "input",
        message: "Contact info for further questions",
        name: "Questions"
    },
    {
        type: "input",
        message: "Your Github username",
        name: "Username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    },];

//Creates a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
}

//Creates a function to initialize app
function init() {
// passing the questions array into the inquirer package
    prompt(questions).then(answers => {
        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);
    })
}

    // Function call to initialize app
    init();
