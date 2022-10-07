function getReceipt() {
    //This intializes our string so it can get passed from function to function, growing line by line into a full receipt
    var text1 = "<h3>Your Ordered:</h3>";
    var runningTotal = 0;   //Sets running total to 0
    var sizeTotal = 0;   //Sets size to 0
    var sizeArray = document.getElementsByClassName("size");   //Sets the size array equal to the HTML size elements
    for (var i = 0; i < sizeArray.length; i++) {   //Starts a for loop that loops through the pizza sizes and displays the selcted size
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {   //Assigns price numbers to the pizza sizes
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;   //Updates the running total to include the size total
    console.log(selectedSize+" = $"+sizeTotal+".00");   //Shows the price
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // these variables will get passed on the each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {   //A function to detirmine toppings and prices
    var toppingTotal = 0;   //Sets the variable toppingTotal to 0
    var selectedTopping = [];   //Defines that selectedTopping variable will contain an array
    var toppingArray = document.getElementsByClassName("toppings");   //Sets topping array as the elements within the HTML class "toppings"
    for (var j = 0; j < toppingArray.length; j++) {   //A for loop  the checks for which toppings in the array are selected
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");   //Logs the selected topping items to the console
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;   //Sets a variable that will count the total for toppings
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);   //Gives a discount for first free topping
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);   //Adds the topping total to the running total
    console.log("total selected topping items: "+toppingCount);   //Dislplays information on toppings to console
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;   //Gets HTML elements and displays the toppings and total cost
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};