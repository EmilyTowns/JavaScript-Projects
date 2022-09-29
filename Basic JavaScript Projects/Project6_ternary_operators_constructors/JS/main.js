function Ride_Function() {   //Creates a new function called "Ride_Function"
    var Height, Can_ride;   //Lists the variables
    Height=document.getElementById("Height").value;   //Gets value from the HTML input box and assigns it to "height" 
    Can_ride=(Height<52)?"You are too short":"You are tall enough";   //Assigns a ternary operator to "Can_ride"
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";   //Get the element "Ride" and displays result
}

function Ride(Type, Speed, Age) {   //Creates the function "Ride" and makes it a constructor
    this.Ride_Type = Type;   //Defines constructor
    this.Ride_Speed = Speed;
    this.Ride_Age = Age;
}

var Flamer = new Ride("roller coaster", "fast", 12);   //Creates 3 instances of "Ride", assigning to a variable
var Hulk = new Ride("spinning", "medium", 8);
var Sway = new Ride("swinging ship", "slow", 6);

function newFunction() {   //Creates a new function called "newFunction"
    document.getElementById("New_and_This").innerHTML=   //Get the HTML element and displays results based on the defined instances
    "The Flamer is a " + Flamer.Ride_Type + " type ride. It is a " + Flamer.Ride_Speed +
    " speed ride, appropriate for ages " + Flamer.Ride_Age + " and up.";
}

function ticketsFunction() {   //Creates a new function called "ticketsFunction"
    document.getElementById("Nested_Function").innerHTML=Count();   //Gets the HTML element and refers to nested function
    function Count() {   //Creates a nested function
        var Starting_point=50;   //Assigns 50 to the variable "Starting_point"
        function Minus_one() {Starting_point -= 1;}   //Creates another nested function that takes one away from the variable
        Minus_one();   //Gets the result of the "Minus_one" function
        return Starting_point;   //Returns the result of the variable after the function has taken one away
    }
}