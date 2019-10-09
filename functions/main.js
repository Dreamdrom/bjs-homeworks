function getSolutions(a,b,c){
 
    let d = ((b**2) - (4*a*c));
    // let x = [];
if (d < 0) {
   return {D: d};
}
if (d == 0) {
    let x1 = (-b/(2*a))
    return { 
        roots: [x1],
        D: d}
    }
if (d > 0) {
        let x1 = (-b + (Math.sqrt(d)))/(2*a);
        let x2 = (-b - (Math.sqrt(d)))/(2*a);

    return {
        roots: [x1, x2], 
        D: d}
    }
}

function showSolutionMessage (a,b,c){
   let result = getSolutions(a,b,c);
console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
console.log (`Значение дискриминанта ${result.D}`);
if (result.D < 0) {
    console.log (`Уравнение не имеет вещественных корней`)
 }
 if (result.D == 0) {
    console.log (`Уравнение имеет один корень ${x1} = значение_корня`)
 }
 if (result.D > 0) {
    console.log (`Уравнение имеет два корня. ${X1} = значение_корня_1, ${X2} = значение_корня_2`)
}
}
// getSolutions(2,3,5);
showSolutionMessage (7,20,-3);


let data = {    
    algebra: [2,1,3,5,2,4],
    geometry: [2,4,3,4,5,4],
    russian: [2,5,3,5,5,4],
    english: [2,3,3,4,3,4],
    french: [2,3,5,2,4],
    music: [2,5,4],
    literature: [3,5,4],
    physic: [4,3,3,5,4,4],
    chemystry: [4,5,3,5,3,4],
}
let sumcomm = 0; 
let averageTotal;   
function getAverageScore( data ) {
    let valuecomm = 0; 
    for (let predmet in data) {
    let value = data[predmet];
    let sum = 0; 
    for(let i = 0; i < value.length; i++){
        sum = sum + value[i];      
    }
    averagePredmet = sum / value.length;   
    console.log (`${predmet}, ${averagePredmet}, Всего оценок по предмету - ${value.length}`);
   
    sumcomm = sumcomm + sum;
    valuecomm = valuecomm + value.length;
    // Промежуточные вычисления для проверки
    // console.log ("value.lenght" + value.length); 
    // console.log ("valuecomm" + valuecomm ); 
    // console.log ("valueeee" + value.length + sumcomm); 
    }

    
// console.log ("sumcomm" + sumcomm)
// console.log ("data.french.lenght" + data.french.length + data.french)
// console.log ("valuecomm" + valuecomm);    
averageTotal = sumcomm / valuecomm;

    console.log (`Средняя оценка по всем предметам ${averageTotal}`);
}
getAverageScore( data );



// Пример из лекции на обход всех значений
// let ivan = {
//     firstName: 'Иван',
//     lastName: 'Зайцев'} 
//     for ( let prop in ivan ) {
//     let value = ivan[ prop ];
//     console.log( `Свойство ${prop}, значение: ${value}` );
//     }

function getPersonData() {
let secretData = {
    aaa: 1,
    bbb: 0,
    }
    
    function pirate() {

        if (aaa == 0) {
        firstName = "Родриго";  
        } else {
        firstName = "Эмильо";   
        // return firstName;
        }

        if (bbb == 0) {
        lastName = "Родриго";  
        } else {
        lastName = "Эмильо";   
        // return lastName;
        }
        return {
            firstName,
            lastName
        };

        pirate();
      }


console.log (getPersonData (secretData));
console.log (`firstName:  ${firstName}, lastName: ${lastName}`);
}


