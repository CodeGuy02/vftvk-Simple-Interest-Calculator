function compute()
{
    principal = document.getElementById("principal").value;
    interest = document.getElementById("myRange").value;
    years = document.getElementById("years").value;
    
    interestCalculation = principal * interest * years; 
    lineA = "If you deposit " + principal.toString() + ", ";
    lineB = "at an interest rate of " + interest.toString() + "% ." 
    lineC = "You will receive an amount of " + interestCalculation.toString() + ",";
    currentYear = new Date().getFullYear();
    finalYear = currentYear.parseInt() + years;
    lineD = "in the year " + finalYear.toString();
    
    document.getElementById("resultA").innerHTML = lineA;
    document.getElementById("resultB").innerHTML = lineB;
    document.getElementById("resultC").innerHTML = lineC;
    document.getElementById("resultD").innerHTML = lineD;
    
}
        
