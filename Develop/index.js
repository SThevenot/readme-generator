/** @format */

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "What is the description of your project?",
  "What are the installation instructions?",
  "What is the usage information?",
  "What are the contribution guidelines?",
  "What are the test instructions?",
  "What is your GitHub username?",
  "What is your email address?",
  "Please choose a license from the list below",
];

inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "title",
    },
    {
      type: "input",
      message: questions[1],
      name: "description",
    },
    {
      type: "input",
      message: questions[2],
      name: "install",
    },
    {
      type: "input",
      message: questions[3],
      name: "usage",
    },
    {
        type: "checkbox",
        message: questions[8],
        options: [""],
        name: "license",
      },
    {
      type: "input",
      message: questions[4],
      name: "contribution",
    },
    {
      type: "input",
      message: questions[5],
      name: "test",
    },
    {
      type: "input",
      message: questions[6],
      name: "github",
    },
    {
      type: "input",
      message: questions[7],
      name: "title",
    },
  ])

  // TODO: Create a function to write README file
  .then((data) => {
    console.log(data);
    fs.writeFile("./readme.md", init(data), (error) => {
      if (error) throw error;
    });
  });

// TODO: Create a function to initialize app
function init(data) {
  console.log(data);
  return `# ${data.title}

  #### ${data.description}
  
  ## Table of Contents
  ----
  - [Installation Instructions](#installation-instructions)
  - [Usage Info](#usage-info)
  - [License Info](#license-info)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions?](#questions)
  
  ## Installation Instructions
  
  #### ${data.install}
  
  ----
  
  ## Usage Info
  
  #### ${data.usage}
  
  -----
  
    ## License Info

    #### ${data.license}

    -----

  ## Contribution Guidelines
  
  #### ${data.contribution}
  
  -----
  
  ## Test Instructions
  
  #### ${data.test}
  
  -----
  
  ## Questions?
  
  #### Reach out to my Github! ${data.github}
  
  #### Send me an email! ${data.email}`;
}
