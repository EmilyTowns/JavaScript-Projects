function Person(Name, Age, Gender, Hair) {
    this.Person_Name = Name;
    this.Person_Age = Age;
    this.Person_Gender = Gender;
    this.Person_Hair = Hair;
}

var Father = new Person("Andrew", 37, "male", "brown");
var Mother = new Person("Emily", 33, "female", "brown");
var Kid1 = new Person("Reid", 9, "male", "blonde");
var Kid2 = new Person("Adrian", 9, "male", "brown");
var Kid3 = new Person("Autumn", 6, "female", "brown");
var Kid4 = new Person("Ethan", 4, "male", "brown");

function familyFunction() {
    document.getElementById("Constructors").innerHTML = 
    "There are 4 kids in our family. They are " + Kid1.Person_Name + ", " + Kid2.Person_Name + ", " + Kid3.Person_Name + ", and " + Kid4.Person_Name + "."
    + "They are ages " + Kid1.Person_Age + ", " + Kid2.Person_Age + ", " + Kid3.Person_Age + ", and " + Kid4.Person_Age + " respectively.";
}