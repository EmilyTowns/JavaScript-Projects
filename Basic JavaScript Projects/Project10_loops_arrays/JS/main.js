function Call_Loop() {
    var Number = "";
    var X = 1;
    while (X < 21) {
        Number += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Number;
}

function for_Loop() {
    var Family = ["Andrew", "Emily", "Reid", "Adrian", "Autumn", "Ethan"];
    var X = "";
    var Y;
    for (Y = 0; Y < Family.length; Y++) {
        X += Family[Y] + "<br>";
    }
    document.getElementById("List_of_Family").innerHTML = X;
}

function array_Function() {
    var Tree = [];
    Tree[0] = "maple";
    Tree[1] = "pine";
    Tree[2] = "birch";
    Tree[3] = "sumac";
    document.getElementById("Array").innerHTML = 
    "My favourite tree is a " + Tree[0] + " tree.";
}

function constant_function() {
    const Paint = {type:"water-based", colour:"white", location:"bedroom"};
    Paint.type = "oil-based";
    Paint.colour = "grey";
    Paint.brand = "Behr";
    document.getElementById("Constant").innerHTML = 
    "The paint we selected for the " + Paint.location + " is the " + Paint.brand + " " + Paint.type + " in the colour " + Paint.colour + ".";
}

function letFunction() {
    var X = "This is assigning a variable using var, ";
    document.getElementById("var").innerHTML = X + nestedFunction();
    function nestedFunction() {
        let X = " and this is assigning a variable using let.";
        return X;
    }
}