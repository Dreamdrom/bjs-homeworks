// "use strict";   
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let n = (getTime(date) - (new Date(milliseconds)))/(1000*60*60*24*30)
        // console.log (getTime(date));
        // console.log (new Date(milliseconds));
        // console.log (n);
    let p = (percent/100) / 12;
    let monthlypayment = (amount - contribution)*(p+p/(((1+p)**n)-1));
    let totalAmount = (monthlypayment * n).toFixed(2);
    console.log (totalAmount);
    // код для задачи №1 писать здесь
    return totalAmount;
}
calculateTotalMortgage()




function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}