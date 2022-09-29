function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function Ride(Type, Speed, Age) {
    this.Ride_Type = Type;
    this.Ride_Speed = Speed;
    this.Ride_Age = Age;
}

var Flamer = new Ride("roller coaster", "fast", 12);
var Hulk = new Ride("spinning", "medium", 8);
var Sway = new Ride("swinging ship", "slow", 6);

function newFunction() {
    document.getElementById("New_and_This").innerHTML=
    "The Flamer is a " + Flamer.Ride_Type + " type ride. It is a " + Flamer.Ride_Speed +
    " speed ride, appropriate for ages " + Flamer.Ride_Age + " and up.";
}