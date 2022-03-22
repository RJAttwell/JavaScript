//BMI Calculator Challenge
//Told to create BMI calculator with formula of weight (kg) divided by height (m^2)

function bmiCalculator(weight, height) {
    var bmi = weight/Math.pow(height, 2); //Math.pow squares first parameter by the second
    return Math.round(bmi); //Math.round rounds the number to the nearest possible round number opposed to Math.floor that rounds it down only
}
