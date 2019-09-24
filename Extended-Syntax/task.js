// "use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
 
    let discriminant;
    let x = [];
discriminant = ((b**2) - (4*a*c));
if (discriminant < 0) {
    x = []
}
if (discriminant == 0) {
    x[0] = (-b/(2*a))
}
if (discriminant > 0) {
    x[0] = (-b + (Math.sqrt(discriminant)/(2*a)));
    x[1] = (-b - (Math.sqrt(discriminant)/(2*a)));
}
// getResult;
// Следующие три строки для контроля-проверки
console.log (`Корни уравнения ${x}`)
console.log (`Дискриминант ${discriminant}`)
return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    //return averageMark;  
    if (marks.length > 5) {
    console.log ('Количество оценок больше пяти');
    marks.splice (5)
    }
    console.log (`marks ${marks}`);  
    let sum = 0; 
    for(let i = 0; i < marks.length; i++){
            sum = sum + marks[i];
    }
    averageMark = sum / marks.length;

console.log ('Average' + averageMark);
console.log (`marks ${marks}`);
console.log(marks.length);
return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}  

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //return drink;
let age = (new Date().getFullYear() - dateOfBirthday.getFullYear());
// let ageyear = age.getFullYear();
console.log (age);
// console.log (ageyear);
if (age >= 18 ) {
    drink = `Не желаете ли олд-фэшн, ${name}?`
}else{
    drink = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу 
    предложить вам замечательный клюквенный компот!`
}

// для промежуточной проверки
    // console.log (`now ${now}`);
    console.log (dateOfBirthday);
    console.log (new Date());
    console.log (`drink ${drink}`);
    return drink;
}