module.exports = {
    questions:[
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
        message: "What do you need to install for the project?",
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
        message: "what is the usage for the project",
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    
        },
        {
        type: "list",
        name: "license",
        message: "Any license used?",
        choices: ["MIT", "Apache", "none"]
  
        },
        {
            type: "input",
            name: "contributing",
            message: "Who will be contributing in the project?",
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
        message: "What kind of test is runned?",
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    
        },
        {
        type: "input",
        name: "questions",
        message: "Questions",
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
        
        ]
}