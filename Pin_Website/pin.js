//Create a function that asks for a 4 digit pin 4 times and returns yes or no

function pin() {
    let pin = 2468;
    let attempts = 0;

    let guess = prompt("What do you think my PIN is?");
    var itIsNumber = /^\d{4}$/.test(guess);
    if (itIsNumber) {
        attempts++;
    } else {
        guess = prompt("Please enter a four digit PIN");
    }    
    
    while (attempts < 4 && guess != pin) {
        guess = prompt("That's not my PIN! Try again!");
        itIsNumber = /^\d{4}$/.test(guess);
        while (!itIsNumber){
            guess = prompt("Please enter a four digit PIN");
            itIsNumber = /^\d{4}$/.test(guess);
        }
        attempts++; 
    }

    if (guess == pin) {
        document.write("<h1>Congrats! That's my PIN. Please don't use it.</h1>");
    } else {
        document.write("<h1>Sorry! None of those were my PIN.</h1>"); 
    }
}

pin();