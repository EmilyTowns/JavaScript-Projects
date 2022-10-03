function Call_Loop() {
    var Number = "";
    var X = 1;
    while (X < 21) {
        Number += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Number;
}