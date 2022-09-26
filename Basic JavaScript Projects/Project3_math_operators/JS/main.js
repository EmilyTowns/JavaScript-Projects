function multiplication() {   //Creates a function called "multiplication"
    var multiply = 70*120;   //Assigns math using the "*" operator to the variable "multiply"
    document.getElementById("math").innerHTML="70 times 120 equals "+multiply;   //Gets the "multiplication" element from HTML and diplays the results
}

function subtraction() {   //Creates a function called "subtraction"
    var Sub = 82-70;    //Assigns math using the "-" operator to the variable "sub"
    document.getElementById("subtract").innerHTML="82 minus 70 equals "+Sub;   //Gets the "subtract" element from HTML and diplays the results
}

function division() {   //Creates a function called "division"
    var div = 90/3;   //Assigns math using the "/" operator to the variable "div"
    document.getElementById("divide").innerHTML="90 divided by 3 equals "+div;   //Gets the "divide" element from HTML and diplays the results
}

function multiMath() {   //Creates a function called "multiMath"
    var math = ((2*10)+50)/7-2;   //Assigns math using the "*", "+", "/", and "-" operators to the variable "math"
    document.getElementById("multi").innerHTML="2 times 10, plus 50, divided by 7, minus 2 equals "+math;   //Gets the "multi" element from HTML and diplays the results
}

function modulusMath() {   //Creates a function called "modulusMath"
    var modu = 20%3;   //Assigns math using the "%" operator to the variable "modu"
    document.getElementById("mod").innerHTML="The remainder of 20 divided by 3 is "+modu;   //Gets the "mod" element from HTML and diplays the results
}

function negationMath() {    //Creates a function called "negationMath"
    var neg = 65;   //Assigns the number 65 to the variable "neg"
    document.getElementById("negation").innerHTML="The negative form of 65 is "+-neg;   //Gets the "negation" element from HTML and diplays the results in the negative
}

function incrementMath() {   //Creates a function called "incrementMath"
    var inc = 15;   //Assigns the number 15 to the variable "inc"
    inc++;   //Increments the variable "inc" by one using the "++" operator
    document.getElementById("increment").innerHTML="15 incremented by 1 is "+inc;   //Gets the "increment" element from HTML and diplays the results
}

function decrementMath() {   //Creates a function called "decrementMath"
    var dec = 20;   //Assigns the number 20 to the variable "dec"
    dec--;   //Decrements the variable "dec" by one using the "--" operator
    document.getElementById("decrement").innerHTML="20 decremented by 1 is "+dec;   //Gets the "decrement" element from HTML and diplays the results
}

function randomMath() {   //Creates a function called "randomMath"
    var ran = Math.random() * 50;   //Assigns the value of a random number between 0 and 50 to the variable "ran"
    document.getElementById("random").innerHTML="The random number is "+ran;   //Gets the "random" element from HTML and diplays the results
}

function roundUp() {   //Creates a function called "roundUp"
    var up = Math.ceil(1.2345);   //Assigns the results of 1.2345 rounded up to the variable "up"
    document.getElementById("round").innerHTML="1.2345 rounded up is "+up;   //Gets the "round" element from HTML and diplays the results
}