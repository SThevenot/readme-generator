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
  "Which technologies listed below did you use?",
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
        choices: ["MIT", "Apache", "ISC", "GNU GPLv3"],
        name: "license",
      },
      {
        type: "checkbox",
        message: questions[9],
        choices: ["HTML", "CSS", "JavaScript", "Node.js", "APIs", "React", "Express.js"],
        name: "technology",
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
      name: "email",
    },
  ])

  // TODO: Create a function to write README file
  .then((data) => {
    fs.writeFile("./readme.md", init(data), (error) => {
      if (error) throw error;
    });
  });

// TODO: Create a function to initialize app
function init(data) {
  console.log(data);
  if (data.title == '') {
    data.title = "N/A";
  }
  if (data.description == '') {
    data.description = "N/A";
  }
  if (data.install == '') {
    data.install = "N/A";
  }
  if (data.usage == '') {
    data.usage = "N/A";
  }
  if (data.license == ['']) {
    data.license = "N/A";
  }
  if (data.contribution == '') {
    data.contribution = "N/A";
  }
  if (data.test == '') {
    data.test = "N/A";
  }
  if (data.github == '') {
    data.github = "N/A";
  }
  if (data.email == '') {
    data.email = "N/A";
  }
  return `# ${data.title} 
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)

  #### ${data.description}
  
  ## Table of Contents
  ----
  - [Installation Instructions](#installation-instructions)
  - [Usage Info](#usage-info)
  - [License Info](#license-info)
  - [Technology Used](#technology-used)
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

  #### This project is under the ${data.license} license. 

  -----
  
  ## Technology Used

  #### This project used ${data.technology}. 

  -----

  ## Contribution Guidelines
  
  #### ${data.contribution}
  
  -----
  
  ## Test Instructions
  
  #### ${data.test}
  
  -----
  
  ## Questions?
  
  #### Reach out to my Github! 

  #### https://github.com/${data.github}
  

  #### Send me an email! 

  #### ${data.email}`;
}

  // } for (var i = 1; i < data.technology.length; i++) {
  //   shields 
  //   console.log(data.technology.length);
  //   console.log(shields);
  // }
  // var shields = "https://img.shields.io/badge/";
  // var colorArr = ["yellow", "orange","red", "blue", "success", "green", "blueviolet", "ff69b4", "inactive"];
  // var color = colorArr[Math.floor(Math.random()* colorArr.length)];
  // data.technology += "-";
  // console.log(color);
  //[${data.technology}](${shields}${data.technology}${color})