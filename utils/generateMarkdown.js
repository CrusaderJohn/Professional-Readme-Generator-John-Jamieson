// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)
{
    // Since the license question is a set list we don't need to check for an empty string with an "if"
    let badge = "";
    if (license == "MIT")
    {
        badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
    }
    else if (license == "Mozilla")
    {
        badge = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
    }
    else if (license == "GNU")
    {
        badge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)
{
    // Since the license question is a set list we don't need to check for an empty string with an "if"
    let link = "";
    if (license == "MIT")
    {
        link = "https://opensource.org/licenses/MIT";
    }
    else if (license == "Mozilla")
    {
        link = "https://opensource.org/licenses/MPL-2.0";
    }
    else if (license == "GNU")
    {
        link = "https://www.gnu.org/licenses/gpl-3.0";
    }
    return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)
{
    // Since the license question is a set list we don't need to check for an empty string with an "if"
    let section = "";
    if (license != "No Licence")
    {
        section = `
## License

[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})
        `;
    }
    return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)
{
return `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Installation

${data.installation}

## Contribution

${data.usage}

## Testing

${data.test}

${renderLicenseSection(data.license)}

## Questions

Email: ${data.email}

GitHub: ${data.username}`;
}

module.exports = generateMarkdown;
