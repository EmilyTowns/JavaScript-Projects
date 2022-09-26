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