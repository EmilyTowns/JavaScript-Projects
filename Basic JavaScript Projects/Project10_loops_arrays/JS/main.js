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