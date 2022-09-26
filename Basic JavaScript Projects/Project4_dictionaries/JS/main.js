function dictionary() {
    var Family={
        Name:"Ethan",
        Gender:"male",
        Age:4,
        EyeColour:"brown",
        HairColour:"light brown"
    };
    document.getElementById("Dictionary").innerHTML=Family.Name+"'s hair colour is "+Family.HairColour;
}