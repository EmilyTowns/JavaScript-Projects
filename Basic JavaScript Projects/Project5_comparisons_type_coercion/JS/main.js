function typeOfFunction() {
    document.getElementById("typeOf").innerHTML=
        "\"Emily\" is a " +
         typeof "Emily"+ "<br>" +
        "\"25\" is a " +
         typeof 25 + "<br>" +
        "\"False\" is a " +
         typeof false;
}

function yesNaN() {
    document.getElementById("NaN").innerHTML=
        "\"George\" is not a number: " + 
        isNaN('George');
}

function noNaN() {
    document.getElementById("notNaN").innerHTML=
        "\"506\" is not a number: " + 
        isNaN('506');
}

function infinityNumber() {
    let x = 2E+309;
    document.getElementById("infinity").innerHTML=
        "\"2E309\" is considered " +
        x;
}

function negativeInfinityNumber() {
    let x = -3E+310;
    document.getElementById("negativeInfinity").innerHTML=
        "\"-3E310\" is considered " +
        x;
}

function booleanLogicTrue() {
    var x = 16<17;
    document.getElementById("booleanTrue").innerHTML=
        "16 is less than 17: " +
        x;
}

function booleanLogicFalse() {
    var x = 16>17;
    document.getElementById("booleanFalse").innerHTML=
        "16 is greater than 17: " +
        x;
}

console.log(53*20);

function typeCoercion() {
    var x = "2" + 56;
    document.getElementById("coercion").innerHTML=
        "To make the number 256, we can type \"2\" as a string and 56 as a number: " +
        x;
}

console.log(25>26);

function doubleEqualTrue() {
    var x = (15+5)==20;
    document.getElementById('doubleTrue').innerHTML=
        "15 plus 5, is equal to 20: " +
        x;
}

function doubleEqualFalse() {
    var x = (10+6)==20;
    document.getElementById('doubleFalse').innerHTML=
        "10 plus 6, is equal to 20: " +
        x;
}

function tripleEqualTrue() {
    var x = 6===6;
    document.getElementById("tripleTrue").innerHTML=
        "6 is equal to 6 in both data type and value: " +
        x;
}

function tripleFalseValueType() {
    var x = 14==="15";
    document.getElementById("tripleValueType").innerHTML=
        "14 is equal to \"15\" in both data type and value: " +
        x;
}

function tripleFalseType() {
    var x = 17==="17";
    document.getElementById("tripleType").innerHTML=
        "17 is equal to \"17\" in both data type and value: " +
        x;
}

function tripleFalseValue() {
    var x = 8===9;
    document.getElementById("tripleValue").innerHTML=
        "8 is equal to 9 in both data type and value: " +
        x;
}

function ANDTrue() {
    var x = 60>40 && 10<13;
    document.getElementById("ATrue").innerHTML=
        "60 is greater than 40 AND 10 is less than 13: " +
        x;
}

function ANDFalse() {
    var x = 10>12 && 16<18;
    document.getElementById("AFalse").innerHTML=
        "10 is greater than 12 AND 16 is less than 18: " +
        x;
}

function ORTrue() {
    var x = 2>1 || 9<8;
    document.getElementById("OTrue").innerHTML=
        "2 is greater than 1 OR 9 is less than 8: " +
        x;
}

function ORFalse() {
    var x = 70>80 || 21<19;
    document.getElementById("OFalse").innerHTML=
        "70 is greater than 80 OR 21 is less than 19: " +
        x;
}

function NOTTrue() {
    var x = !(3>7);
    document.getElementById("NTrue").innerHTML=
        "3 is not greater than 7: " +
        x;
}

function NOTFalse() {
    var x = !(90>62);
    document.getElementById("NFalse").innerHTML=
        "90 is not greater than 62: " +
        x;
}