//let's take all inputs type
const inputs = document.querySelectorAll(
    'input[type = "text"], input[type = "password"]'
);
//varibales to stcok values entered inputs
let agent, coordinate, agentSecurity, agentConfirmSecurity;

// functions that will check in real time if inputs are correctly entered
const agentChecker = (value) =>{
    if (value.length>0 && (value.length <3 || value.length>20)) {
        errorDisplay("pseudo","agent name must be between 3 and 20 characters",false);
        pseudo = null;
    } else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){/*used regex*/
        errorDisplay("pseudo","agent name must not contain special characters",false);
        pseudo = null;
    }else
    errorDisplay("pseudo", "",true);
    pseudo = value;
};

const coordinateChecker = (value) =>{

};

const agentSecurityChecker = (value) =>{

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