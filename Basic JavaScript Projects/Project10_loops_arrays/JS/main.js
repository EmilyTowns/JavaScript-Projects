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