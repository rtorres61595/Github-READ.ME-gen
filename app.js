const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const {questions} = require('./questions')

function promptUser() {
  return inquirer.prompt(questions);
}

function generateURL(github, projectTitle){
  const title = projectTitle.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${title}`;
}

function licenseGithub(license, github, projectTitle) {
  if  (license !== "none") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateURL(github, projectTitle)})`  
  } else {
    return " "
  }
}

function generateREADME(answers) {
  
return `
  ## Profile Img
  ❮img src="images/${answers.userPic}" width="100" ❯
  ## Project Name
  ## ${answers.projectTitle}.
  ### What you will need to install first
  \`\`\`
  ${answers.installation}
  \`\`\`
  ### A description of the project
  ${answers.projectDescrip}
  ### Project use
  \`\`\`
  // ${answers.usage}
  \`\`\`
  ## Running the tests
  \`\`\`
  // ${answers.test}
  \`\`\`
  ## Contributing
  \`\`\`
  // ${answers.contributing}
  \`\`\`
  ## GitHub Username
 
  \`\`\`
  // ${answers.github}
  \`\`\`
  ## License
  \`\`\`
  // This project is licensed under ${licenseGithub(answers.license, answers.github, answers.projectTitle)}
  \`\`\`
  ## Questions
  \`\`\`
  // ${answers.questions}
  \`\`\`
  `;
}
console.log(generateREADME.answers)
//the fuction that genorates everything once the user adds the last question 
async function init() {

  try {
    const answers = await promptUser();

    const md = generateREADME(answers);

    await writeFileAsync("build/README.md", md);

    console.log("Successfully wrote to READ.ME");
  } catch(err) {
    console.log(err);
    }
}

init();