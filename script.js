function compute()
{
    principal = document.getElementById("principal").value;
    
    if (principal <= 0) {
       alert("Please enter a positive number.");
       clearPreviousResults();
       document.getElementById("principal").focus();
       return;
    }

    interest = document.getElementById("myRange").value;
    years = document.getElementById("years").value;
    
    interestCalculation = principal * (interest / 100) * years; 
    lineA = "If you deposit ";
    lineA_highlight = principal.toString() + ", ";
    lineB = "at an interest rate of ";
    lineB_highlight = interest.toString() + " % .";
    lineC = "You will receive an amount of ";
    interestCalculation = interestCalculation.toFixed(2); // from Stack Overflow - "You're not assigning the parsed float back to your value var:"
    lineC_highlight = interestCalculation.toString() + ",";
    currentYear = new Date().getFullYear();
    finalYear = currentYear + parseInt(years);
    <!-- alert(" typeof currentYear: " + typeof currentYear + " typeof years: " + typeof years + " typeof finalYear: " + typeof finalYears); -->
    lineD = "in the year ";
    lineD_highlight = finalYear.toString();
    
    breakElementA = document.createElement("br");
    breakElementB = document.createElement("br");
    breakElementC = document.createElement("br");
    breakElementD = document.createElement("br");
    
    document.getElementById("resultA").innerHTML = lineA;
    var resultA_highlight = document.getElementById("resultA_highlight");
    resultA_highlight.innerHTML = lineA_highlight;
    resultA_highlight.appendChild(breakElementA);
    
    document.getElementById("resultB").innerHTML = lineB;
    var resultB_highlight = document.getElementById("resultB_highlight");
    resultB_highlight.innerHTML = lineB_highlight;
    resultB_highlight.appendChild(breakElementB);
    
    document.getElementById("resultC").innerHTML = lineC;
    var resultC_highlight = document.getElementById("resultC_highlight");
    resultC_highlight.innerHTML = lineC_highlight;
    resultC_highlight.appendChild(breakElementC);
    
    document.getElementById("resultD").innerHTML = lineD;
    var resultD_highlight = document.getElementById("resultD_highlight");
    resultD_highlight.innerHTML = lineD_highlight;
    resultD_highlight.appendChild(breakElementD);
    
}

function sliderUpdate(value) {
    // alert("slider update");
    // alert("value typeof: " + typeof(value)); // returns type string
    //value = value.toFixed(1);
    newValue = Number(value);
    // console.log(" typeof newValue : " + typeof(newValue));
    newValue = value.toString() + "%";
    document.getElementById("currentSliderValue").innerHTML = newValue;
}

function clearPreviousResults() {
    document.getElementById("resultA").innerHTML = "";
    var resultA_highlight = document.getElementById("resultA_highlight");
    resultA_highlight.innerHTML = "";
    
    document.getElementById("resultB").innerHTML = "";
    var resultB_highlight = document.getElementById("resultB_highlight");
    resultB_highlight.innerHTML = "";
    
    document.getElementById("resultC").innerHTML = "";
    var resultC_highlight = document.getElementById("resultC_highlight");
    resultC_highlight.innerHTML = "";
    
    document.getElementById("resultD").innerHTML = "";
    var resultD_highlight = document.getElementById("resultD_highlight");
    resultD_highlight.innerHTML = "";
    
    return;
}
