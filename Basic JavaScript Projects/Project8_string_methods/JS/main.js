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