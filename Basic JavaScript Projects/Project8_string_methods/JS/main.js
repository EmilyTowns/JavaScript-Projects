function sentenceFunction() {   //Creates the function "sentenceFunction"
    var sent1 = "This sentence ";   //Assigns parts of a sentence to four variables
    var sent2 = "is in multiple parts ";
    var sent3 = "and is concatenated ";
    var sent4 = "to create the full sentence.";
    var sentence = sent1.concat(sent2, sent3, sent4);   //Assigns the concatenated sentence to the variable "sentence"
    document.getElementById("concatenate").innerHTML=sentence;   //Get the HTML element and displays the results
}

function sliceFunction() {   //Creates the function "sliceFunction"
    var Sentence = "This sentence needs some words cut out.";   //Assigns a string to the variable "Sentence"
    var Slice = Sentence.slice(20, 38);   //Assigns the sliced sentence to the variable "Slice"
    document.getElementById("slice").innerHTML = Slice;   //Gets the HTML element and displays the results
}

function upperCaseFunction() {   //Creates the function "upperCaseFunction"
    var Sentence = "this is a sentence.";   //Assigns a lowercase string to the variable "Sentence"
    var Case = Sentence.toUpperCase();   //Assigns the string, converted to uppercase, to the variable "Case"
    document.getElementById("upperCase").innerHTML=Case;   //Gets the HTML element and displays the results
}

function searchFunction() {   //Creates the function "searchFunction"
    var Sentence = "Today is a sunny day.";   //Assigns a string to the variable "Sentence"
    var Search = Sentence.search("sunny");   //Assigns the position number of the word "sunny" in the string to the variable "Search"
    document.getElementById("searchMethod").innerHTML=   //Gets the HTML element and displays the results
    "In the sentence \"Today is a sunny day.\", the word \"sunny\" is in position "
    + Search;
}

function stringFunction() {   //Creates the function "stringFunction"
    var X = 94;   //Assigns a value to the variable "X"
    document.getElementById("string").innerHTML=   //Gets the HTML element and displays the result of "X" converted to a string
    "The number 94, as a string, is " + X.toString();
}

function precisionFunction() {   //Creates the function "precisionFunction"
    var X = 56.915845;   //Assigns the value to the variable "X"
    document.getElementById("precision").innerHTML=   //Gets the HTML element and displays the result of "X" reduced to 5 places
    "56.915845 redcued to 5 digits is " + X.toPrecision(5);
}

function fixedFunction() {   //Creates the function "fixedFunction"
    var X = 6.9467;   //Assigns the value to the variable "X"
    document.getElementById("fixed").innerHTML=   //Gets the HTML element and displays the result of "x" as a string and reduced to 1 decimal place
    "6.9467 in a string, reduced to one decimal place is " + X.toFixed(1);
}

function valueFunction() {   //Creates the function "valueFunction"
    var X = "A word";   //Assigns the string to the variable "X"
    document.getElementById("valueOf").innerHTML=   //Gets the HTML element and displays "X" as its primitive value
    "Using the valueOf() method, \"A word\" is " + X.valueOf();
}