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

function mod(num1,num2){
    return num1 % num2;
}

function operate(num1, operand, num2){
    switch (operand){
        case '+':
            return add(num1,num2);
        
        case '-':
            return subtract(num1,num2);

        case '*':
            return multiply(num1,num2);

        case '/':
            return divide(num1,num2);

        case "%":
            return mod(num1,num2);
    }
}

function display(num1,operator,num2){
    let display = document.querySelector(".display");
    display.textContent = `${num1}${operator}${num2}`;
}

function wireButtons(){
    wireNumbers();
    wireOperators();
    wireClear();
    wireEqual();
    wirePeriod();
    wireDelete();
    wirePolarity();
}

function wireNumbers(){
    let numbers = document.querySelectorAll(".number");
    for(let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click", (e) =>{
            if(operator === ''){
                num1 += (i+1)%10;
            }
            else{
                num2 += (i+1)%10;
            }
            display(num1,operator, num2);
        });
    }

}

function wireOperators(){
    let operators = document.querySelectorAll(".operator");
    for(let i = 0; i< operators.length; i++){
        operators[i].addEventListener("click", (e) => {
            if(num1 && !num2){
                switch (i){
                    case 0 :
                        operator = '%';
                        break;
                    case 1:
                        operator = '/';
                        break;
                    case 2:
                        operator = '*';
                        break;
                    case 3:
                        operator = '-';
                        break;
                    case 4: 
                        operator = '+';
                        break;
                }    
            }
            else if (num1 && operator && num2){
                num1 = operate(+num1,operator,+num2).toString();
                num2 = '';
                operator = '';
                display(num1,operator,num2);
                switch (i){
                    case 0 :
                        operator = '%';
                        break;
                    case 1:
                        operator = '/';
                        break;
                    case 2:
                        operator = '*';
                        break;
                    case 3:
                        operator = '-';
                        break;
                    case 4: 
                        operator = '+';
                        break;
                } 
            }
            else if (!num1 && operators[i].id === 'subtract'){
                num1 = "-";
            }   
            display(num1,operator,num2);
        })
    }
}

function wireClear(){
    let clear = document.querySelector(".clear");
    clear.addEventListener("click", (e) => {
        num1 = '';
        num2 = '';
        operator = '';
        display(num1,operator,num2);
    });
}

function wireEqual(){
    let equal = document.querySelector(".equal");
    equal.addEventListener("click", (e) =>{
        if(num1 && num2 && operator){
            num1 = (Math.round(operate(+num1,operator,+num2)*10000)/10000).toString();
            num2 = '';
            operator = '';
            display(num1,operator,num2);
        }
    });
}

function wirePeriod(){
    let period = document.querySelector(".period");
    period.addEventListener("click", (e) => {
        if(!num1){
            num1 += "0.";
        }
        else if(num1 && !num2 && !operator && !num1.includes(".")){
            num1 += ".";
        }
        else if (!num2 && operator){
            num2 += "0.";
        }
        else if (num2 && !num2.includes(".")){
            num2 += ".";
        }
        display(num1,operator,num2);
    })
}

function wireDelete(){
    let deleteButton = document.querySelector(".delete");
    deleteButton.addEventListener("click", (e) =>{
        if(num2){
           num2 = num2.slice(0,-1);
        }
        else if(operator){
            operator = '';
        }
        else if(num1){
            num1 = num1.slice(0,-1);
        }
        display(num1,operator,num2);
    });
}

function wirePolarity(){
    let polarity = document.querySelector(".polarity");
    polarity.addEventListener("click", (e) => {
        if(num1.charAt(0) === '-' && !num2){
            num1 = num1.slice(1);
        }
        else if(num1 && !num2){
            num1 = '-' + num1;
        }
        else if(num2.charAt(0) === '-'){
            num2 = num2.slice(1);
        }
        else if(num2){
            num2 = '-' + num2;
        }
        display(num1,operator,num2);
    });
}

let num1 ='';
let num2 ='';
let operator ='';
wireButtons();