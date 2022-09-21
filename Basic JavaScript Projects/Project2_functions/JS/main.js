function Button_Function() {   //creates a function called "Button_Function"
    var str = "Now I'm red!";   //Assigns the string to the variable "str"
    var result = str.fontcolor("red");   //Assigns the "str" variable color of red to a new variable "result"
    document.getElementById("Red_Text") .innerHTML = result;   //Gets the "Red_Text" element from HTML and applies the colour change of the "result" variable on mouse click
}

function Mouse_Over_Function() {   //Creates a function called "Mouse_Over_Function"
    var str = "Now I'm blue!";   //Assigns the string to the variable "str" 
    var result = str.fontcolor("blue");   //Assigns the "str" variable color of blue to a new variable "result"
    document.getElementById("Paragraph") .innerHTML = result;   //Gets the "Paragraph" element from HTML and applies the colour change of the "result" variable on mouse over
}

function doubleClickFunction() {   //Creates a function called "doubleClickFunction"
    var sentence = "This sentence is ";   //Assigns the string to the variable "sentence"
    sentence += "concatenated!";   //Concatenates the string to the "sentence" variable
    document.getElementById("secondParagraph") .innerHTML = sentence;   //Get the "secondParagraph" element from HTML and changes the sentence to the new concatenated sentence
}