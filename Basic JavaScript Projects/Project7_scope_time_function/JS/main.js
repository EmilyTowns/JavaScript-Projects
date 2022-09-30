var X = 50
function subtractFunction() {
    var sub = X - 10;
    document.getElementById("subtract").innerHTML=
    "The variable X is 50. Minus 10 is " + sub;
}
function addFunction() {
    var add = X + 10;
    document.getElementById("add").innerHTML=
    "The same variable plus 10 is " + add;
}

function localSubtract() {
    var Y = 40;
    var sub = Y - 10;
    document.getElementById("lSub").innerHTML=
    "The variable Y is 40. Minus 10 is " + sub;
}
function localAdd() {
    var add = Y + 10;
    document.getElementById("lAdd").innerHTML=
    "The same variable plus 10 is " + add;
    console.log(Y + 10);
}

function get_Hours() {
    if (new Date().getHours()<13) {
        document.getElementById("Hours").innerHTML= "It is before 1pm.";
    }
}

function IFStatement() {
    if (90>76) {
        document.getElementById("IF").innerHTML=
        "90 is greater than 76.";
    }
}