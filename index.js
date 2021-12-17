//let's take all inputs type
const inputs = document.querySelectorAll(
    'input[type = "text"], input[type = "password"]'
);

// functions that will check in real time if inputs are correctly entered
const agentChecker = (value) =>{

};

const coordinateChecker = (value) =>{

};

const agentSecurityChecker = (value) =>{

};

const agentConfirmChecker = (value) =>{

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