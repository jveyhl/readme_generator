// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeSource;

  switch (license) {
    case "MIT":
      badgeSource =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      badgeSource =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost 1.0":
      badgeSource =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "GNU GPL v3":
      badgeSource =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 2-Clause":
      badgeSource =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD 3-Clause":
      badgeSource =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "None":
      badgeSource = "";
  }

  return badgeSource;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License 
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderBadge(data.license)}
  ## Github URL 
  [${data.github}](https://github.com/${data.github}/)
  ## Description 
  ${data.description}
  ## Table of Contents 
  * [Installations](#dependencies)
  * [Usage](#usage)
  ${renderLink(data.license)}
  * [Contributors](#contributors)
  * [Test](#test)
  ## Installations (Dependencies) 
  Use the following commands to install dependencies:
  \`\`\`
  ${data.dependencies}
  \`\`\`
  ## Usage 
  ${data.usage}
  ${renderSection(data.license)}
  ## Contributors 
  ${data.contributors}
  Contact: ${data.email}
  ## Tests 
  Use the following commands to run tests:
  \`\`\`
  ${data.test}
  \`\`\`
`;
}

module.exports = generateMarkdown;
