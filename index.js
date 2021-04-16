// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const writeFile  = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project: (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmInstall',
      message: 'Would you like to add installation instructions?',
      default: true
    },
    {
      type: 'input',
      name: 'install',
      message: 'Provide installation instructions:',
      when: ({ confirmInstall }) => confirmInstall
    },
    {
      type: 'confirm',
      name: 'confirmUsageInfo',
      message: 'Would you like to add usage instructions?',
      default: true
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage instructions:',
      when: ({ confirmUsageInfo }) => confirmUsageInfo
    },
    {
      type: 'confirm',
      name: 'confirmContribution',
      message: 'Would you like to add contribution guidelines?',
      default: true
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide contribution guidelines:',
      when: ({ confirmContribution }) => confirmContribution
    },
    {
    type: 'confirm',
    name: 'confirmTest',
    message: 'Would you like to add test instructions?',
    default: true
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide test instructions:',
    when: ({ confirmTest }) => confirmTest
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
