function compute()
{
    principal = document.getElementById("principal").value;
    interest = document.getElementById("myRange").value;
    years = document.getElementById("years").value;
    
    interestCalculation = principal * (interest / 100) * years; 
    lineA = "If you deposit ";
    lineA_highlight = principal.toString() + ", ";
    lineB = "at an interest rate of ";
    lineB_highlight = interest.toString() + "% .";
    lineC = "You will receive an amount of ";
    lineC_highlight = interestCalculation.toString() + ",";
    currentYear = new Date().getFullYear();
    finalYear = currentYear + parseInt(years);
    <!-- alert(" typeof currentYear: " + typeof currentYear + " typeof years: " + typeof years + " typeof finalYear: " + typeof finalYears); -->
    lineD = "in the year ";
    lineD_highlight = finalYear.toString();
    
    document.getElementById("resultA").innerHTML = lineA;
    document.getElementById("resultA_highlight").innerHTML = lineA_highlight;
    document.getElementById("resultB").innerHTML = lineB;
    document.getElementById("resultB_highlight").innerHTML = lineB_highlight;
    document.getElementById("resultC").innerHTML = lineC;
    document.getElementById("resultC_highlight").innerHTML = lineC_highlight;
    document.getElementById("resultD").innerHTML = lineD;
    document.getElementById("resultD_highlight").innerHTML = lineD_highlight;
    
}
