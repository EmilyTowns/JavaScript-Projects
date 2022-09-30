function sentenceFunction() {
    var sent1 = "This sentence ";
    var sent2 = "is in multiple parts ";
    var sent3 = "and is concatenated ";
    var sent4 = "to create the full sentence.";
    var sentence = sent1.concat(sent2, sent3, sent4);
    document.getElementById("concatenate").innerHTML=sentence;
}