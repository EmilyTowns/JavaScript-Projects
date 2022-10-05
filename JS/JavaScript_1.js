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