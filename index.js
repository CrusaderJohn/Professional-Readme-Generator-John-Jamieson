// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What would you like the description of your project to be?",
    "What would you like the installation instructions of your project to be?",
    "What would you like the usage information of your project to be?",
    "What would you like the contribution guidelines of your project to be?",
    "What would you like the test instructions of your project to be?",
    "What is your GitHub username?",
    "What is your email address?",
    "What would you like the license of your project to be?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
    fileName = fileName.replace(" ", "-");
    fs.writeFile(`./Output/${fileName}.md`, data,
        (error) => error ? console.error(error) : console.log("File saved."));
}

// TODO: Create a function to initialize app
// Use inquirer to make array with the answers, send array to gen markdown
function init()
{
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: questions[0],
            },
            {
                name: "description",
                type: "input",
                message: questions[1],
            },
            {
                name: "installation",
                type: "input",
                message: questions[2],
            },
            {
                name: "usage",
                type: "input",
                message: questions[3],
            },
            {
                name: "contribution",
                type: "input",
                message: questions[4],
            },
            {
                name: "test",
                type: "input",
                message: questions[5],
            },
            {
                name: "username",
                type: "input",
                message: questions[6],
            },
            {
                name: "email",
                type: "input",
                message: questions[7],
            },
            {
                type: 'list',
                message: questions[8],
                name: 'license',
                choices: ['MIT', 'Mozilla', 'GNU', 'No Licence'],
            },
        ])
        .then((data) => {
            let markdown = generateMarkdown(data);
            writeToFile(data.title, markdown);
        });
}

// Function call to initialize app
init();


