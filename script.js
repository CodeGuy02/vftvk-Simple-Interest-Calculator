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
    
    breakElement = document.createElement("br");
    
    document.getElementById("resultA").innerHTML = lineA;
    var resultA_highlight = document.getElementById("resultA_highlight");
    resultA_highlight.innerHTML = lineA_highlight;
    resultA_highlight.appendChild(breakElement);
    
    document.getElementById("resultB").innerHTML = lineB;
    var resultB_highlight = document.getElementById("resultB_highlight");
    resultB_highlight.innerHTML = lineB_highlight;
    resultB_highlight.appendChild(breakElement);
    
    document.getElementById("resultC").innerHTML = lineC;
    var resultC_highlight = document.getElementById("resultC_highlight");
    resultC_highlight.innerHTML = lineC_highlight;
    resultC_highlight.appendChild(breakElement);
    
    document.getElementById("resultD").innerHTML = lineD;
    var resultD_highlight = document.getElementById("resultD_highlight");
    resultD_highlight.innerHTML = lineD_highlight;
    resultD_highlight.appendChild(breakElement);
    
}

function sliderUpdate(value) {
    value = value.toFixed(1);
    newValue = value.toString() + "%";
    document.getElementById("currentSliderValue").innerHTML = newValue;
}
