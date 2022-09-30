function countdown() {   //Creates the function "countdown"
    var seconds = document.getElementById("seconds").value;   //assigns the HTML element - input - to the variable "seconds"

    function tick() {   //Creates the nested function "tick"
        seconds = seconds - 1;   //Sets "seconds" as seconds minus 1
        timer.innerHTML = seconds;   //Assigns "seconds" to timer
        setTimeout(tick, 1000);   //Sets the countdown to the function tick with a delay of 1 second
    if (seconds == -1) {   //An if statement to indicate that when the time is up (at 0), to display an alert box
        alert("Time's up!");
    }
    }
    tick();   //Has the HTML element "seconds" display the results of the nested function "tick", making a countdown
}