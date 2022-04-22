// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None") {
    return ``; 
  }else {
    return `![badge](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Inside markdown", data)
  return `# ${data.Title}

  ${renderLicenseBadge(data.License)}
  ## Description 
  ${data.Description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Questions](#questions)

    
  ---

  ## Installation
  
  To install, ensure that you have node.js installed and then run the commands 'npm init' followed by 'npm i inquirer'
   ${data.InstallationInstructions}
  ---
  ## Questions
        
  Feel free to contact me via one of the links below with any questions you may have.

  GitHub: [${data.githubusername}](https://github.com/${data.githubusername})

  Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
