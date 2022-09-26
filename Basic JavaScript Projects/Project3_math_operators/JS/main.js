function multiplication() {
    var multiply = 70*120;
    document.getElementById("math").innerHTML="70 times 120 equals "+multiply;
}

function subtraction() {
    var Sub = 82-70;
    document.getElementById("subtract").innerHTML="82 minus 70 equals "+Sub;
}

function division() {
    var div = 90/3;
    document.getElementById("divide").innerHTML="90 divided by 3 equals "+div;
}

function multiMath() {
    var math = ((2*10)+50)/7-2;
    document.getElementById("multi").innerHTML="2 times 10, plus 50, divided by 7, minus 2 equals "+math;
}

function modulusMath() {
    var modu = 20%3;
    document.getElementById("mod").innerHTML="The remainder of 20 divided by 3 is "+modu;
}

function negationMath() {
    var neg = 65;
    document.getElementById("negation").innerHTML="The negative form of 65 is "+-neg;
}

function incrementMath() {
    var inc = 15;
    inc++;
    document.getElementById("increment").innerHTML="15 incremented by 1 is "+inc;
}

function decrementMath() {
    var dec = 20;
    dec--;
    document.getElementById("decrement").innerHTML="20 decremented by 1 is "+dec;
}