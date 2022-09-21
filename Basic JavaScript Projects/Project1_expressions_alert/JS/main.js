window.alert("Hello, World!");  //Brings up pop up window with text

document.write('Hello, World!');   //Displays the text on the screen

var A = " This is a string.<br><br>";   //Assigns a string to variable "A"
var A = A.fontcolor("purple");   //Applies the colour purple to variable "A"
document.write (A);   //Displays the text assigned to vaiable "A" on screen

document.write ("If you ask, \"What is the purpose of this page?\" <br> I would say, \"There is no purpose. And yet there is.\" ");   //Writes a quote, using backslash preceeding quotation marks so they will display

document.write("<br><br>\"If life were predictable" + " it would cease to be life," + " and would be without flavor.\"" + " -Eleanor Roosevelt");   //concatenates text using "+" and backslashes for quotation marks

var text = "<br><br>This text is" + " concatenated," + " although you can\'t really tell.";   //Assigns a concatenated string to variable "text" 
var text = text.fontcolor("orange");   //Sets font colour of string assigned to variable "text"
document.write(text);   //Displays string assigned to variable "text" in window

var weather = "<br><br>Today, the weather is ", rain = "rainy.", sun = "sunny.", cloud = "cloudy.", mix = "a mix of sun and cloud.";   //Assigns multple variables in one statment
var rain = rain.fontcolor("blue");   //Assigns font colour for variable "rain"
var sun = sun.fontcolor("yellow");   //Assigns font colour for variable "sun"
var cloud = cloud.fontcolor("grey");   //Assigns font colour for variable "cloud"
var mix = mix.fontcolor("red");   //Assigns font colour for variable "mix"
document.write(weather);   //Displays string assigned to variable "weather"
document.write(mix);   //Displays string assigned to variable "mix"

document.write("<br><br>");   //Creates a space between lines of text

document.write(15-5);   //Displays the result of an expression that is written within a statement

document.write("<br><br>");   //Creates a space between lines

function bigImg(x) {   //JS event to make picture larger on mouseover
    x.style.height = "250px";
    x.style.width = "250px";
  }
  
  function normalImg(x) {   //JS event to make picture back to original size on mouse out
    x.style.height = "200px";
    x.style.width = "200px";
  }