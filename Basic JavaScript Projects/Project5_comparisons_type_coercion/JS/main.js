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