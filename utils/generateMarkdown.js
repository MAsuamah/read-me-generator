// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  } else if (license === 'MIT') {
    
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if (license === 'Apache 2.0') {
    
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-brightgreen.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === 'BSD 3-Clause') {
    
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`

  } else if (license === 'GNU GPL v3') {
    
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-red.svg)](https://www.gnu.org/licenses/gpl-3.0)`

  } else if (license === 'ISC') {
    
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-lightblue.svg)](https://opensource.org/licenses/ISC)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  } else if (license === 'MIT') {
    
    return `Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.`

  } else if (license === 'Apache 2.0') {
    
    return `Licensed under the [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) license.`

  } else if (license === 'BSD 3-Clause') {
    
    return `Licensed under the [BSD 3-Clause](https://choosealicense.com/licenses/bsd-3-clause-clear/) license.`

  } else if (license === 'GNU GPL v3') {
    
    return `Licensed under the [GNU GPL v3](https://choosealicense.com/licenses/gpl-3.0/) license.`

  } else if (license === 'ISC') {
    
    return `Licensed under the [ISC](https://choosealicense.com/licenses/isc/ license.`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenseCheck)}
  ${renderLicenseLink(data.licenseCheck)}

`;
}

module.exports = generateMarkdown;
