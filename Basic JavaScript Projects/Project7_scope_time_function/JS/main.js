var X = 50   //Assigns the integer 50 to the global variable "X"
function subtractFunction() {   //Creates a new function "subtractFunction"
    var sub = X - 10;   //Assigns the result of the equation to the variable "sub"
    document.getElementById("subtract").innerHTML=   //Gets the HTML element and diplays result
    "The variable X is 50. Minus 10 is " + sub;
}
function addFunction() {   //Creates a new function "addFunction"
    var add = X + 10;   //Assigns the result of the equation to the variable "add"
    document.getElementById("add").innerHTML=   //Gets the HTML element and diplays result
    "The same variable plus 10 is " + add;
}

function localSubtract() {   //Creates a new function "localSubtract"
    var Y = 40;   //Assigns the integer 40 to the local variable "Y"
    var sub = Y - 10;   //Assigns the result of the equation to the variable "sub"
    document.getElementById("lSub").innerHTML=   //Gets the HTML element and diplays result
    "The variable Y is 40. Minus 10 is " + sub;
}
function localAdd() {   //Creates a new function "localAdd"
    var add = Y + 10;   //Assigns the result of the equation to the variable "add"
    document.getElementById("lAdd").innerHTML=   //Gets the HTML element and attempts to diplay result
    "The same variable plus 10 is " + add;
    console.log(Y + 10);   //Displays an error in the console as the local variable Y is not accessible within this function
}

function get_Hours() {   //Creates a new function "get_Hours"
    if (new Date().getHours()<13) {   
        document.getElementById("Hours").innerHTML= "It is before 1pm.";   //An if statement that will display string results if the time is before 1pm
    }
}

function IFStatement() {   //Creates a new function "IFStatement"
    if (90>76) {
        document.getElementById("IF").innerHTML=   //An if statement that will display string results if the condition is met
        "90 is greater than 76.";
    }
}

function getAgeFunction() {   //Creates a new function "getAgeFunction"
    Age=document.getElementById("userAge").value;   //Assigns the results of the input box to "Age"
    if (Age <= 17) {
        Heart = "You are young.";   //An if statement that will assign string results to "Heart" if the condition is met
    }
    else {
        Heart = "You are young at heart!";   //An else statement that will assign string results to "Heart" if the if condition is not met
    }
    document.getElementById("yourAge").innerHTML = Heart;   //Gets HTML element and displays result
}

function Time_function() {   //Creates a new function "Time_function"
    var Time = new Date().getHours();   //Assigns the current hour to the variable "Time"
    var Reply;   //Creates the "Reply" variable
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";   //An if statement that will assign string results to "Reply" if conditions are met
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";   //An else if statement that will assign string results to "Reply" if different conditions are met
    }
    else {
        Reply = "It is evening time.";   //An else statement that will assign string results to "Reply" if other conditions are not met
    }
    document.getElementById("Time_of_day").innerHTML = Reply;   //Gets the HTML element and displays the results
}