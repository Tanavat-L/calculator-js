function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(num1, operand, num2){
    switch (operand){
        case '+':
            return add(num1,num2);
        
        case '-':
            return subtract(num1,num);

        case '*':
            return multiply(num1,num2);

        case '/':
            return divide(num1,num2);
    }
}

function display(num1,operator,num2){
    let display = document.querySelector(".display");
    display.textContent = `${num1}${operator}${num2}`;
}

function wireButtons(){
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    for(let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click", (e) =>{
            if(operator === ''){
                num1 += (i+1);
            }
            else{
                num2 += (i+1);
            }
            display(num1,operator, num2);
        });
    }

    for(let i = 0; i< operators.length; i++){
        operators[i].addEventListener("click", (e) => {
            if(num1){
                switch (i){
                    case 0:
                        operator = '/';
                        break;
                    case 1:
                        operator = '*';
                        break;
                    case 2:
                        operator = '-';
                        break;
                    case 3: 
                        operator = '+';
                        break;
                }    
            }
            display(num1,operator,num2);
        })
    }
}

let num1 ='';
let num2 ='';
let operator ='';
wireButtons();