const calculatorScreen = document.querySelector(".calculator-screen");
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const operators = ["*","/","+","-"];

let problem = ""


function resetCalculator() {
  calculatorScreen.value = "";
  problem = "";
}

function handleInput(event) {
    const value = event.target.value;
    if(numbers.includes(value) || operators.includes(value) || value === "."){
        problem += value;
        displayScreen(problem);
    }
    else if(value === "=" && problem !== ""){
        displayScreen(eval(problem));
        problem = "";        
    }
    else if(value === "clear"){
        problem = ""
        displayScreen(problem);
    }

}

function displayScreen(val){
    calculatorScreen.value = val; 
}

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", handleInput);
