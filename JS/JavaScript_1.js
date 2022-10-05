function foodFunction() {
    var Food_Output;
    var Food = document.getElementById("Input").value;
    var Food_String = ", yummy!";
    switch(Food) {
        case "Tacos":
            Food_Output = "Tacos" + Food_String;
        break;
        case "Chicken pot pie":
            Food_Output = "Chicken pot pie" + Food_String;
        break;
        case "Lasagna":
            Food_Output = "Lasagna" + Food_String;
        break;
        case "Roast chicken":
            Food_Output = "Roast chicken" + Food_String;
        break;
        case "Ham":
            Food_Output = "Ham" + Food_String;
        break;
        case "Salad":
            Food_Output = "Salad" + Food_String;
        break;
        default:
        Food_Output = "Please enter a food exactly as written in the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function winnerFunction() {
    var A = document.getElementsByClassName("Class");
    A[1].innerHTML="The winner is #1!";
}

function canvasFunction(){
    var c = document.getElementById("canvasID");   //Declares variable and assigns canvas element from HTML
    var ctx = c.getContext("2d");   //Declares another variable and defines the drawing context as 2d rendering

    var grd = ctx.createRadialGradient(250,125,20,250,125,230);   //Declares another variable as creating a radial gradient within the ctx context 
    grd.addColorStop(0,"blue");   //Defines a new color stop, which adds an offset and color
    grd.addColorStop(1,"green");   //Defines second color stop with a second color

    ctx.fillStyle = grd;   //States that the fill of the canvas should be the radial gradient
    ctx.fillRect(0,0,500,250);   //Creates a rectangle with x, y, height, and width that will fill according to the fillstyle
}

function canvasFunction2(){
    var c = document.getElementById("canvas2");   //Declares variable and assigns canvas element from HTML
    var ctx = c.getContext("2d");   //Declares another variable and defines the drawing context as 2d rendering

    var grd = ctx.createLinearGradient(0,0,250,0);   //Declares another variable as creating a radial gradient within the ctx context 
    grd.addColorStop(0,"pink");   //Defines a new color stop, which adds an offset and color
    grd.addColorStop(1,"purple");   //Defines second color stop with a second color

    ctx.fillStyle = grd;   //States that the fill of the canvas should be the radial gradient
    ctx.fillRect(0,0,500,250);   //Creates a rectangle with x, y, height, and width that will fill according to the fillstyle
}