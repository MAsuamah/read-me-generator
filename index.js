// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project:'
  },
  {
    type: 'input',
    name: 'install',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions:',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'licenseCheck',
    message: 'Choose the license most relevant to your project:',
    choices: ['MIT','Apache 2.0','BSD 3-Clause','GNU GPL v3','ISC'], 
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your Email address:',
  }
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('./dist/README.Md', data, err => {
    if (err) {
      return console.log(err);
    } 
    return console.log('Success! Your README has been created. Check the dist folder! ');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(readMeData => {
    return generateMarkdown(readMeData);
  })
  .then(writeFileResponse => {
    return writeToFile(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
}

// Function call to initialize app
init();


