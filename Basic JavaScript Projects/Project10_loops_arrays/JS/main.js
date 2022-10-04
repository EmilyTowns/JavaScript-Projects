function Call_Loop() {   //Creates a function
    var Number = "";   //Creates a variable with var
    var X = 1;   //Creates and assigns a variable with var   
    while (X < 21) {   //Starts a while loop while X is less than 21
        Number += "<br>" + X;   //Number plus a line break, plus X
        X++;   //Adds one to X, then loops until condition is met
    }
    document.getElementById("Loop").innerHTML = Number;   //Gets the HTML element and displays results
}

function for_Loop() {   //Creates a function
    var Family = ["Andrew", "Emily", "Reid", "Adrian", "Autumn", "Ethan"];   //Creates a variable using var and assigns an array
    var X = "";   //Creates a variable with var
    var Y;   //Creates a variable with var
    for (Y = 0; Y < Family.length; Y++) {   //Starts a for loop, where Y starts at 0, then if it it less then the number of values in the the array, adds one to Y
        X += Family[Y] + "<br>";   //X plus the value of ther family variable at index indicated by Y, plus a line break and loops
    }
    document.getElementById("List_of_Family").innerHTML = X;   //Gets the HTML element and displays the result of the loop
}

function array_Function() {   //Creates a function
    var Tree = [];   //Creates a variable with var to be an array
    Tree[0] = "maple";   //Assigns value at index 0 
    Tree[1] = "pine";   //Assigns value at index 1
    Tree[2] = "birch";   //Assigns value at index 2
    Tree[3] = "sumac";   //Assigns value at index 3
    document.getElementById("Array").innerHTML =    //Gets the HTML element and displays reuslts of the array value at index 0
    "My favourite tree is a " + Tree[0] + " tree.";
}

function constant_function() {   //Creates a function
    const Paint = {type:"water-based", colour:"white", location:"bedroom"};   //Creates a const with keywords
    Paint.type = "oil-based";   //Changes value at const keyword
    Paint.colour = "grey";   //Changes value at const keyword
    Paint.brand = "Behr";   //Creates new const keyword
    document.getElementById("Constant").innerHTML =    //Get HTML element and displays results
    "The paint we selected for the " + Paint.location + " is the " + Paint.brand + " " + Paint.type + " in the colour " + Paint.colour + ".";
}

function letFunction() {   //Creates a function
    var X = "This is assigning a variable using var, ";   //Creates and assigns a variable with var  
    document.getElementById("var").innerHTML = X + nestedFunction();   //Gets HTML element and displays results
    function nestedFunction() {   //Creates a nested function
        let X = " and this is assigning a variable using let.";   //Assigns X using let, does not effect var X
        return X;   //returns the value of X for the function
    }
}

function returnFunction() {   //Creates a function
    var X = "You can use the return statement to ";   //Creates and assigns a variable with var  
    document.getElementById("return").innerHTML = X + nestedFunction();   //Gets HTML element and displays results
    function nestedFunction() {   //Creates a nested function
        let X = " stop the execution of a function and return a value.";   //Assigns X using let, does not effect var X
        return X;   //returns the value of X for the function
    }
}

function objectFunction() {   //Creates a function
    let laptop = {   //Creates a variable using let
        brand: "Acer ",   //Assigns a value to keyword
        model: "Aspire 5 ",   //Assigns a value to keyword
        ram: "24 GB ",   //Assigns a value to keyword
        memory: "1 TB ",   //Assigns a value to keyword
        description: function() {   //Assigns a function to keyword
            return "The laptop is a(n) " + this.brand + this.model +"with " + this.ram + "of RAM and " + this.memory + "of memory.";   //Returns the values as noted
        } 
    }
    document.getElementById("Object").innerHTML = laptop.description();   //Gets the HTML element and displays results
}

function breakFunction() {   //Creates a function
    let text = "";   //Assigns the variable using let
    for (let i = 0; i < 20; i++) {   //Creates a for loop where i is 0, and if 1 is less than 20, add one to i
        if (i === 11) {break;}   //If i is equal to 11, break the loop - stop reiterating
        text += i + "<br>";   //Variable text plus i, plus a line break and repeat loop until conditions met (in this case the break)
    }
    document.getElementById("Break").innerHTML = text;   //Get the HTML element and display results
}

function continueFunction() {   //Creates a function
    let text = "";   //Assigns the variable using let
    for (let i = 0; i < 11; i++) {   //Creates a for loop where i is 0, if i is less than 11, add one to i
        if (i === 5) {continue;}   //If i is 5, continue (skip 5 in the loop)
        text += i + "<br>";   //Variable text plus i, plus a line break
    }
    document.getElementById("Continue").innerHTML = text;   //Gets the HTML element and displays results
}