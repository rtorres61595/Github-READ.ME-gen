const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const {questions} = require('./questions')

function promptUser() {
  return inquirer.prompt(questions);
}
//html tree to grab the results 
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