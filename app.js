const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


// questions for the user to grab there information
// At least one badge
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email 


function promptUser() {
  return inquirer.prompt([
    {
    type: "input",
    name: "projectTitle",
    message: "What is the name of your new project?",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    {
    type: "input",
    name: "projectDescrip",
    message: "Please describe the project?",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    {
    type: "input",
    name: "tableOfContent",
    message: "what is your projects table of contents?",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    {
    type: "input",
    name: "installation",
    message: "What did you instal?",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    {
    type: "input",
    name: "usage",
    message: "usage ",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    {
    type: "input",
    name: "license",
    message: "license",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    {
        type: "input",
        name: "contributing",
        message: "Who will be contributing in the project",
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
  
    },
    {
    type: "input",
    name: "test",
    message: "test",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    {
    type: "input",
    name: "Questions",
    message: "questions",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    {
    type: "input",
    name: "UserPic",
    message: "picture",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
    validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }

    },
    
    ]);
}
//html tree to grab the results 
// projectTitle
// projectDescrip
// tableOfContent
// installation
// usage
// license
// contributing
// test
// questions
// userPic
// github
function generateHTML(answers) {
return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-4"> ${answers. projectTitle}</h1>
    <p class="lead">The project ${answers.projectDescrip}.</p>
    <p class="lead"> ${answers.tableOfContent}.</p>
    <p class="lead"> contributing team:  ${answers.contributing}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">installation: ${answers.installation}</li>
        <li class="list-group-item">usage: ${answers.usage}</li>
        <li class="list-group-item">license: ${answers.license}</li>
        <li class="list-group-item">test: ${answers.test}</li>
        <li class="list-group-item">question: ${answers.questions}</li>
        <li class="list-group-item">userPic: ${answers.userPic}</li>
    </ul>
    </div>
    </div>
    </body>
    </html>`;
}
//the fuction that genorates everything once the user adds the last question 
async function init() {
console.log("hi")
try {
const answers = await promptUser();

const html = generateHTML(answers);

await writeFileAsync("index.html", html);

console.log("Successfully wrote to index.html");
} catch(err) {
console.log(err);
}
}

init();
