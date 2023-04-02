let upperOutput = document.getElementById("upperOutput"),
    lowerOutput = document.getElementById("lowerOutput"),
    deleteButton = document.getElementById("deleteButton"),
    allClearButton = document.getElementById("allClearButton"),
    equalsToButton = document.getElementsByClassName("equalsToButton"),
    number = Array.from(document.querySelectorAll('.number')),
    operation = Array.from(document.querySelectorAll('.operation'));
let workingNumber1 = 0;
let workingNumber2 = "";
let operator = "";
let inputNumber = "";
let outputNumber;

allClearButton.onclick = function(){
    lowerOutput.innerHTML = "";
    upperOutput.innerHTML = "";
    inputNumber = "";
    operator = "";
}

deleteButton.onclick = function(){
    let len = length.inputNumber;
    console.log(len);
}

number.forEach(getNumber);
operation.forEach(addOperation);


function addOperation (element) {
    element.onclick = function (){
        if(operator == ""){
            workingNumber1 = Number(inputNumber);
            upperOutput.innerHTML = workingNumber1;
            inputNumber += element.innerHTML;
            lowerOutput.innerHTML = inputNumber;
            operator = element.innerHTML;
            workingNumber2 = "";
        }
        else if(operator == "+"){
            workingNumber2 = Number(workingNumber2);
            workingNumber1 += workingNumber2;
            workingNumber2 = "";
            upperOutput.innerHTML = workingNumber1;
            inputNumber += element.innerHTML;
            lowerOutput.innerHTML = inputNumber;
            operator = element.innerHTML;
        }
        else if(operator == "-"){
            workingNumber2 = Number(workingNumber2);
            workingNumber1 -= workingNumber2;
            workingNumber2 = "";
            upperOutput.innerHTML = workingNumber1;
            inputNumber += element.innerHTML;
            lowerOutput.innerHTML = inputNumber;
            operator = element.innerHTML;
        }
        else if(operator == "*"){
            workingNumber2 = Number(workingNumber2);
            workingNumber1 *= workingNumber2;
            workingNumber2 = "";
            upperOutput.innerHTML = workingNumber1;
            inputNumber += element.innerHTML;
            lowerOutput.innerHTML = inputNumber;
            operator = element.innerHTML;
        }
        else if(operator == "/"){
            workingNumber2 = Number(workingNumber2);
            workingNumber1 /= workingNumber2;
            workingNumber2 = "";
            upperOutput.innerHTML = workingNumber1;
            inputNumber += element.innerHTML;
            lowerOutput.innerHTML = inputNumber;
            operator = element.innerHTML;
        }
    }
}

function getNumber(element) {
    element.onclick = function(){
    inputNumber += element.innerHTML;
    workingNumber2 += element.innerHTML;
    lowerOutput.innerHTML = inputNumber;
}
}