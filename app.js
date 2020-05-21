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
#



## Getting Started

These instructions${answers.projectTitle} will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites


What things you need to install the software and how to install them

\`\`\`
// Give examples
\`\`\`

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

\`\`\`
// Give the example
\`\`\`

And repeat

\`\`\`
// until finished
\`\`\`

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

\`\`\`
// Give an example
\`\`\`

### And coding style tests

Explain what these tests test and why

\`\`\`
// Give an example
\`\`\`

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
`;
}
//the fuction that genorates everything once the user adds the last question 
async function init() {
console.log("hi")
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