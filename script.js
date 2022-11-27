function compute()
{
    var principal = document.getElementById("principal").value;
    
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML = "";
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var computInterest= "if you deposit "+ principal + ", <br/>" +
                        "at an interest rate of " + rate + "%. <br/>" +
                        "You will receive an amount of "+interest+",<br/>"+
                        "in the year "+ year;
    document.getElementById("result").innerHTML = computInterest;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        