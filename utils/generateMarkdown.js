// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  } else if (license === 'MIT') {
    
    return `[![License](https://img.shields.io/badge/License-${license}-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

  } else if (license === 'Apache') {
    
    return `[![License](https://img.shields.io/badge/License-${license}%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === 'GNU') {
    
    return `[![License](https://img.shields.io/badge/License-${license}-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

  } else if (license === 'ISC') {
    
    return `[![License](https://img.shields.io/badge/License-${license}-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
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

`;
}

module.exports = generateMarkdown;
