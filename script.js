function compute()
{
    principal = document.getElementById("principal").value;
    interest = document.getElementById("myRange").value;
    years = document.getElementById("years").value;
    
    interestCalculation = principal * interest * years; 
    lineA = "If you deposit " + principal ", ";
    lineB = "at an interest rate of " + interest + "% ." 
    lineC = "You will receive an amount of " + interestCalculation + ",";
    lineD = "in the year" + new Date().getFullYear();
    
    document.getElementById("resultA").innerHTML = lineA;
    document.getElementById("resultB").innerHTML = lineB;
    document.getElementById("resultC").innerHTML = lineC;
    document.getElementById("resultD").innerHTML = lineD;
    
}
        
