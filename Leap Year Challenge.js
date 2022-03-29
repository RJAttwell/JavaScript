//Leap year challenge
//Check if a year is a leap year of not using If statements and modulo 

function isLeap(year) {
    var leapResult;
    
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                leapResult = year + " is a leap year";
            } else{
                leapResult = year + " is not a leap year";
            }
        }else{
            leapResult = year + " is a leap year";
        }

    }else{
       leapResult = year + " is not a leap year"; 
    }
    
    return leapResult;
}