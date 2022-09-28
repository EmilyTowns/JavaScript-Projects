function typeOfFunction() {   //Creates a function called "typeOfFunction"
    document.getElementById("typeOf").innerHTML=   //Gets "typeOf" from HTML and displays the type of data for each of the data
        "\"Emily\" is a " +
         typeof "Emily"+ "<br>" +
        "\"25\" is a " +
         typeof 25 + "<br>" +
        "\"False\" is a " +
         typeof false;
}

function yesNaN() {   //Creates a function called "yesNaN"
    document.getElementById("NaN").innerHTML=   //Gets "NaN" from HTML and displays if x is not a number
        "\"George\" is not a number: " + 
        isNaN('George');
}

function noNaN() {   //Creates a function called "noNaN"
    document.getElementById("notNaN").innerHTML=   //Gets "notNaN" from HTML and displays if x is not a number
        "\"506\" is not a number: " + 
        isNaN('506');
}

function infinityNumber() {   //Creates a function called "infinityNumber"
    var x = 2E+309;   //Assigns the value "2E+309" to the variable "x"
    document.getElementById("infinity").innerHTML=   //Gets "infinity" from HTML and displays that x is above the theshold for infinity
        "\"2E309\" is considered " +
        x;
}

function negativeInfinityNumber() {   //Creates a function called "negativeInfinityNumber"
    var x = -3E+310;   //Assigns the value "3E+310" to the variable "x"
    document.getElementById("negativeInfinity").innerHTML=   //Gets "negativeInfinity" from HTML and displays that x is above the theshold for negative infinity
        "\"-3E310\" is considered " +
        x;
}

function booleanLogicTrue() {   //Creates a function called "booleanLogicTrue"
    var x = 16<17;   //Assigns a boolean value to the variable "x"
    document.getElementById("booleanTrue").innerHTML=   //Gets "booleanTrue" from HTML and displays whether x is true or not
        "16 is less than 17: " +
        x;
}

function booleanLogicFalse() {   //Creates a function called "booleanLogicFalse"
    var x = 16>17;   //Assigns a boolean value to the variable "x"
    document.getElementById("booleanFalse").innerHTML=   //Gets "booleanFalse" from HTML and displays whether x is true or not
        "16 is greater than 17: " +
        x;
}

console.log(53*20);   //Logs the result of the math in the console

function typeCoercion() {   //Creates a function called "typeCoercion"
    var x = "2" + 56;   //Assigns the value to the variable "x"
    document.getElementById("coercion").innerHTML=   //Gets "coercion" from HTML and displays the result of x
        "To make the number 256, we can type \"2\" as a string and 56 as a number: " +
        x;
}

console.log(25>26);   //Logs the value "false" in the console

function doubleEqualTrue() {   //Creates a function called "doubleEqualTrue"
    var x = (15+5)==20;   //Assigns the value to the variable "x"
    document.getElementById('doubleTrue').innerHTML=   //Gets "doubleTrue" from HTML and displays whether x is true or false
        "15 plus 5, is equal to 20: " +
        x;
}

function doubleEqualFalse() {   //Creates a function called "doubleEqualFalse"
    var x = (10+6)==20;   //Assigns the value to the variable "x"
    document.getElementById('doubleFalse').innerHTML=   //Gets "doubleFalse" from HTML and displays whether x is true or false
        "10 plus 6, is equal to 20: " +
        x;
}

function tripleEqualTrue() {   //Creates a function called "tripleEqualTrue"
    var x = 6===6;   //Assigns the value to the variable "x"
    document.getElementById("tripleTrue").innerHTML=   //Gets "tripleTrue" from HTML and displays whether x is true or false
        "6 is equal to 6 in both data type and value: " +
        x;
}

function tripleFalseValueType() {   //Creates a function called "tripleFalseValueType"
    var x = 14==="15";   //Assigns the value to the variable "x"
    document.getElementById("tripleValueType").innerHTML=   //Gets "tripleValueType" from HTML and displays whether x is true or false
        "14 is equal to \"15\" in both data type and value: " +
        x;
}

function tripleFalseType() {   //Creates a function called "tripleFalseType"
    var x = 17==="17";   //Assigns the value to the variable "x"
    document.getElementById("tripleType").innerHTML=  //Gets "tripleType" from HTML and displays whether x is true or false
        "17 is equal to \"17\" in both data type and value: " +
        x;
}

function tripleFalseValue() {   //Creates a function called "tripleFalseValue"
    var x = 8===9;   //Assigns the value to the variable "x"
    document.getElementById("tripleValue").innerHTML=   //Gets "tripleValue" from HTML and displays whether x is true or false
        "8 is equal to 9 in both data type and value: " +
        x;
}

function ANDTrue() {   //Creates a function called "ANDTrue"
    var x = 60>40 && 10<13;   //Assigns the value to the variable "x"
    document.getElementById("ATrue").innerHTML=   //Gets "ATrue" from HTML and displays whether x is true or false
        "60 is greater than 40 AND 10 is less than 13: " +
        x;
}

function ANDFalse() {   //Creates a function called "ANDFalse"
    var x = 10>12 && 16<18;   //Assigns the value to the variable "x"
    document.getElementById("AFalse").innerHTML=   //Gets "AFalse" from HTML and displays whether x is true or false
        "10 is greater than 12 AND 16 is less than 18: " +
        x;
}

function ORTrue() {   //Creates a function called "ORTrue"
    var x = 2>1 || 9<8;   //Assigns the value to the variable "x"
    document.getElementById("OTrue").innerHTML=   //Gets "OTrue" from HTML and displays whether x is true or false
        "2 is greater than 1 OR 9 is less than 8: " +
        x;
}

function ORFalse() {   //Creates a function called "ORFalse"
    var x = 70>80 || 21<19;   //Assigns the value to the variable "x"
    document.getElementById("OFalse").innerHTML=   //Gets "OFalse" from HTML and displays whether x is true or false
        "70 is greater than 80 OR 21 is less than 19: " +
        x;
}

function NOTTrue() {   //Creates a function called "NOTTrue"
    var x = !(3>7);   //Assigns the value to the variable "x"
    document.getElementById("NTrue").innerHTML=   //Gets "NTrue" from HTML and displays whether x is true or false
        "3 is not greater than 7: " +
        x;
}

function NOTFalse() {   //Creates a function called "NOTFalse"
    var x = !(90>62);   //Assigns the value to the variable "x"
    document.getElementById("NFalse").innerHTML=   //Gets "NFalse" from HTML and displays the type of data for each of the data
        "90 is not greater than 62: " +
        x;
}