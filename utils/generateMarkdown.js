// function to generate markdown for README
function generateMarkdown(data) {

  let badge;
  const license = data.license;

  switch (license) {
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Apache":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0))"
      break;
    case "Boost":
      badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
    case "EPL 1.0":
      badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      break;
    default:
      badge = "This project does not have a license."
      break;
  }

  return `
  ## License

  ${badge}

  # ${data.title}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Useage

  ${data.useage}

  ## Contributions

  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}
  `;
}

module.exports = generateMarkdown;
