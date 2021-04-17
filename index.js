// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
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
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Would you like to add a license?',
    default: true
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT','Apache', 'GNU', 'ISC'], 
    when: ({ confirmLicense }) => confirmLicense
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your Email address (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your Email address!');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('./README.Md', data, err => {
    if (err) {
      return console.log(err);
    } 
    return console.log('Your README has been created!');
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


