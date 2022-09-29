function Vehicle(Make, Model, Year, Colour) {   //Creates a function that is a constructor
    this.Vehicle_Make = Make;   //Assigns values for the constructor elements
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");   //Creates three instances of "Vehicle"
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {   //Creates a new function called "myFunction"
    document.getElementById("Keywords_and_Constructors").innerHTML=   //Gets the element from HTML and displays the results based on the instance named
    "Erik drives a " + Erik.Vehicle_Colour + "-coloured " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}