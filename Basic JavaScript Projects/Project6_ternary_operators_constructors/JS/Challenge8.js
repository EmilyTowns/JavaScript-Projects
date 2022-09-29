function voteFunction() {   //Creates a new function "voteFunction"
    var Age, canVote;   //Creates two variables
    Age=document.getElementById("Age").value;   //Assigns the HTML element value to the variable "Age"
    canVote=(Age<18)?"You are too young":"You are old enough";   //Assigns the ternary operator to the "canVote" variable
    document.getElementById("Vote").innerHTML=canVote +" to vote.";   //Gets the HTML element and displays the result
}