var firstNum = 0
var secondNum = 0
var operator = -1
var isDecimal = false
var i = -1;
var displayValue = 0
const display = document.getElementById("display")

function toDisplay(num){
    num = +(Math.round(num + "e+10")  + "e-10");
   display.innerText = num
    
}

function operate(operator, num1 ,num2){
    switch (operator){
        case 0:
            value = add(num1,num2)
            break;
        case 1:
            value = subtract(num1,num2)
            break;
        case 2:
            value = multiply(num1,num2)
            break;
        case 3:
            value = divide(num1,num2)
            break;
        default:
            alert("Error")
    }
    return value;   
}

function startDecimal(){
    isDecimal = true;
}

function pop(){
    displayValue = Math.floor(displayValue/10)
    display.innerText = displayValue
}

function clean(){
    displayValue = 0
    display.innerText = displayValue
    firstNum = 0 
    secondNum = 0
    operator = -1
    i = -1
    isDecimal = false
}

function populate(num){
    if(isDecimal){
        displayValue += num * Math.pow(10,i)
        i -= 1;
        display.innerText=displayValue
    }
    else{
        displayValue *= 10
        displayValue += num
        display.innerText=displayValue
    }    
}

function eval(oper){
    if(firstNum){
        secondNum = displayValue 
        firstNum = operate(operator,firstNum,displayValue)
        secondNum = 0
        displayValue = 0
        isDecimal = false
        i = -1
    }
    else{
        firstNum = displayValue
        displayValue = 0
        isDecimal = false
        i = -1
    }
    operator = oper
    display.innerText = displayValue
}

function compute(){
    secondNum = displayValue 
    toDisplay(operate(operator,firstNum,secondNum))
}


function add(num1 ,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1, num2){
    if(num2 == 0){
        alert("Error: Not Defined")
    }
    return num1/num2
}