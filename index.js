//let's take all inputs type
const inputs = document.querySelectorAll(
    'input[type = "text"], input[type = "password"]'
);
//varibales to stcok values entered inputs
let agent, coordinate, agentSecurity, agentConfirmSecurity;
const progressBar = document.getElementById("progress-bar")

// functions that will check in real time if inputs are correctly entered
const agentChecker = (value) =>{
    if (value.length>0 && (value.length <3 || value.length>20)) {
        errorDisplay("pseudo","agent name must be between 3 and 20 characters",false);
        agent = null;
    } else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){/*used regex*/
        errorDisplay("pseudo","agent name must not contain special characters",false);
        agent = null;
    }else
    errorDisplay("pseudo", "",true);
    agent = value;
};

const coordinateChecker = (value) =>{
   if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {/*used a regex's mail*/
       errorDisplay("email","coordinate invalid",false);
       coordinate = null;
   } else {
       errorDisplay("email","", true);
       coordinate = value;
   } 
};

const agentSecurityChecker = (value) =>{ //regex for strong password
    progressBar.classList = "";
    if (!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)) {
      errorDisplay("password","Minimum of 8 characters, one uppercase, one number and one special character",false);
      progressBar.classList.add("progressRed");
      agentSecurity = null;
    } 
    else if (value.length < 12) {
      progressBar.classList.add("progressBlue");
      errorDisplay("password", "", true);
      agentSecurity = value;
    } 
    else{
        progressBar.classList.add("progressGreen");
        errorDisplay("password", "", true);
        agentSecurity = value;
    }
};

const agentConfirmChecker = (value) =>{

};

// function that will display errors while entering 
const errorDisplay = (tag, message, valid) =>{
    const container = document.querySelector("."+tag+"-container");
    const span = document.querySelector("."+tag+"-container > span");
    //this if clause shows us if
    if (!valid) {
        container.classList.add('error');
        span.textContent = message;
    }else{
        container.classList.remove('error');
        span.textContent = message;        
    }
}; 

// shows us which input we are typing on /*console.log(e.target.id);*/
inputs.forEach((input) =>{
    input.addEventListener("input", (e)=>{
        switch (e.target.id) {
            case "pseudo":
                
                agentChecker(e.target.value);
                break;
            case "email":
                coordinateChecker(e.target.value);
                break;
            case "password":
                agentSecurityChecker(e.target.value);
                break;
            case "confirm-password":
                agentConfirmChecker(e.target.value);
                break;
            default:
                break;
        }
    });
});