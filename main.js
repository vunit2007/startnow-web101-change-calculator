
function totalChangeForm(amountDue, amountReceived) {
    let res = (amountReceived * 100) - (amountDue * 100);
    console.log(res);
    return Math.round(res);
}

function exactChangeF(loggedAmount) {
    var res = {};
    [100, 25, 10, 5, 1].forEach(function (coin) {
        res[coin] = Math.floor(loggedAmount / coin);
        loggedAmount = loggedAmount % coin;
    });
    return res;
}
function handleClickEvent() {
    let amountDue = document.getElementById("amount-due").value;
    let amountReceived = document.getElementById("amount-received").value;
    let loggedAmount = totalChangeForm(amountDue, amountReceived); 
    console.log(loggedAmount);
    let result = exactChangeF(loggedAmount);
    console.log(result);
    document.getElementById("dollars-output").innerHTML=result["100"];
    document.getElementById("quarters-output").innerHTML=result["25"];
    document.getElementById("dimes-output").innerHTML=result["10"];
    document.getElementById("nickels-output").innerHTML=result["5"];
    document.getElementById("pennies-output").innerHTML=result["1"];
    }


   