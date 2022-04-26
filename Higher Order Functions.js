//Higher Order Functions
//Functions that can use other functions as inputs are called higher order functions
//This feature is also present in Java, Python, Ruby, etc.

function add(num1, num2){
    return num1 + num2;
 }
 function multiply(num1, num2){
     return num1 * num2;
 }
 function divide(num1, num2){
     return num1 / num2;
 }
 function minus(num1, num2){
     return num1 - num2;
 }
 function calculator(num1, num2, operator){
     return operator(num1, num2);
 }