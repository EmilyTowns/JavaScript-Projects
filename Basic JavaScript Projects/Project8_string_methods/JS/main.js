function sentenceFunction() {
    var sent1 = "This sentence ";
    var sent2 = "is in multiple parts ";
    var sent3 = "and is concatenated ";
    var sent4 = "to create the full sentence.";
    var sentence = sent1.concat(sent2, sent3, sent4);
    document.getElementById("concatenate").innerHTML=sentence;
}

function sliceFunction() {
    var Sentence = "This sentence needs some words cut out.";
    var Slice = Sentence.slice(20, 38);
    document.getElementById("slice").innerHTML = Slice;
}

function upperCaseFunction() {
    var Sentence = "this is a sentence.";
    var Case = Sentence.toUpperCase();
    document.getElementById("upperCase").innerHTML=Case;
}

function searchFunction() {
    var Sentence = "Today is a sunny day.";
    var Search = Sentence.search("sunny");
    document.getElementById("searchMethod").innerHTML=
    "In the sentence \"Today is a sunny day.\", the word \"sunny\" is in position "
    + Search;
}

function stringFunction() {
    var X = 94;
    document.getElementById("string").innerHTML=
    "The number 94, as a string, is " + X.toString();
}

function precisionFunction() {
    var X = 56.915845;
    document.getElementById("precision").innerHTML=
    "56.915845 redcued to 5 digits is " + X.toPrecision(5);
}

function fixedFunction() {
    var X = 6.9467;
    document.getElementById("fixed").innerHTML=
    "6.9467 in a string, reduced to one decimal place is " + X.toFixed(1);
}

function valueFunction() {
    var X = "A word";
    document.getElementById("valueOf").innerHTML=
    "Using the valueOf() method, \"A word\" is " + X.valueOf();
}