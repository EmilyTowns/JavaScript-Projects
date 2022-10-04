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

function returnFunction() {
    var X = "You can use the return statement to ";
    document.getElementById("return").innerHTML = X + nestedFunction();
    function nestedFunction() {
        let X = " stop the execution of a function and return a value.";
        return X;
    }
}

function objectFunction() {
    let laptop = {
        brand: "Acer ",
        model: "Aspire 5 ",
        ram: "24 GB ",
        memory: "1 TB ",
        description: function() {
            return "The laptop is a(n) " + this.brand + this.model +"with " + this.ram + "of RAM and " + this.memory + "of memory.";
        } 
    }
    document.getElementById("Object").innerHTML = laptop.description();
}

function breakFunction() {
    let text = "";
    for (let i = 0; i < 20; i++) {
        if (i === 11) {break;}
        text += i + "<br>";
    }
    document.getElementById("Break").innerHTML = text;
}

function continueFunction() {
    let text = "";
    for (let i = 0; i < 11; i++) {
        if (i === 5) {continue;}
        text += i + "<br>";
    }
    document.getElementById("Continue").innerHTML = text;
}