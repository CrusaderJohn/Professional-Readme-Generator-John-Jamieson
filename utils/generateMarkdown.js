// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)
{
    // Since the license question is a set list we don't need to check for an empty string with an "if"
    let badge = "";
    if (license === "MIT")
    {
        badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
    }
    else if (license === "Mozilla")
    {
        badge = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
    }
    else if (license === "GNU")
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
    if (license === "MIT")
    {
        link = "https://opensource.org/licenses/MIT";
    }
    else if (license === "Mozilla")
    {
        link = "https://opensource.org/licenses/MPL-2.0";
    }
    else if (license === "GNU")
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
    if (license !== "No Licence")
    {
        let section = `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
    }
    return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)
{
    return `# ${data.title}\n\n
    ## Description\n\n
    ${data.description}\n\n
    ## Table of Contents\n\n
    - [Installation](#installation)\n
    - [Usage](#usage)\n
    - [Contribution](#contribution)\n
    - [Testing](#testing)\n
    - [License](#license)\n
    ## Installation\n\n
    ${data.installation}\n\n
    ## Usage\n\n
    ${data.usage}\n\n
    ## Installation\n\n
    ${data.installation}\n\n
    ## Contribution\n\n
    ${data.usage}\n\n
    ## Testing\n\n
    ${data.test}\n\n
    ${renderLicenseSection(data.licence)}`;
}

module.exports = generateMarkdown;
