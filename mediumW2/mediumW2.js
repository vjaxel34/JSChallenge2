//MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


const num1 = parseFloat(prompt ("Enter a number from 1-12 to indicate a month:")); 

let result;
if (num1 === 1){
    result = 'Jauary';
}else if(num1 == 2){
    result = 'Febuary';
}else if(num1 == 3){
    result = 'March';
}else if(num1 == 4){
    result = 'April';
}else if(num1 == 5){
    result = 'May';
}else if(num1 == 6){
    result = 'June';
}else if(num1 == 7){
    result = 'July';
}else if(num1 == 8){
    result = 'August';
}else if(num1 == 9){
    result = 'September';
}else if(num1 == 10){
    result = 'October';
}else if(num1 == 11){
    result = 'Novemebr';
}else if(num1 == 12){
    result = 'December';
}else{
    console.log('NaN');
}

window.alert('Result is ' + result);