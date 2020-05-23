const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const {questions} = require('./questions')

function promptUser() {
  return inquirer.prompt(questions);
}
//html tree to grab the results 
// ${answers. projectTitle}</h1>
//     <p class="lead">The project ${answers.projectDescrip}.</p>
//     <p class="lead"> ${answers.tableOfContent}.</p>
//     <p class="lead"> contributing team:  ${answers.contributing}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${answers.github}</li>
//         <li class="list-group-item">installation: ${answers.installation}</li>
//         <li class="list-group-item">usage: ${answers.usage}</li>
//         <li class="list-group-item">license: ${answers.license}</li>
//         <li class="list-group-item">test: ${answers.test}</li>
//         <li class="list-group-item">question: ${answers.questions}</li>
//         <li class="list-group-item">userPic: ${answers.userPic}</li>
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
  // ${answers.license}
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