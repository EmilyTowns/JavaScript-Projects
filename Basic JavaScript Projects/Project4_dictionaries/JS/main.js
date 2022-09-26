function dictionary() {   //Creates a function called "dictionary"
    var Family={   //Creates a variable called "Family" that will be the holder for a dictionary
        Name:"Ethan",   //Assigns the value "Ethan" to the key "Name"  
        Gender:"male",   //Assigns the value "male" to the key "Gender" 
        Age:4,   //Assigns the value "4" to the key "Age" 
        EyeColour:"brown",   //Assigns the value "brown" to the key "EyeColour" 
        HairColour:"light brown"   //Assigns the value "light brown" to the key "HairColour" 
    };
    delete Family.HairColour;   //Deletes the key-value pair with the id "HairColour" under the "Family" doctionary
    document.getElementById("Dictionary").innerHTML=Family.Name+"'s hair colour is "+Family.HairColour;   //Gets the "Dictionary" element from HTML and diplays the results - HairColour displays as "undefined" because it has been deleted
}