var b1 = document.querySelector("#b1");
b1.addEventListener('click',start1);

function start1 (){
    start();
    var b2 = document.createElement("button");
    b2.textContent="restart";
    b2.id="b2";
    document.body.appendChild(b2);
    var div =document.querySelector(".b");
    b2.addEventListener('click',start);
    div.removeChild(b1);
}


function start(){
    var level = document.querySelector('input[name="choice"]:checked');
    if (!level) {
        alert("Please select a difficulty level.");
    }
    var l = level.value;
    var guess;
    function play(x, t) {
        var alea = Math.floor(Math.random() * x) + 1;
        
        guess = parseInt(prompt("Guess the number (between 1 and " + x + ")"));
        var j=t-1;
        if (isNaN(guess) || guess > x || guess < 1) {
            alert('Enter a valid number between 1 and ' + x);
            return;  // Exit the function if the input is invalid
        }

        while (j >0  && guess !== alea) {
            guess = parseInt(prompt("Guess the number (" + j + " attempts)"));
            j--;
        }

        if (guess === alea) {
            alert('You won!!!');
        } else {
            alert('Game over. The correct number was ' + alea);
        }
    }

    switch (l) {
        case "easy":
            play(10, 3);
            break;
        case "medium":
            play(100, 4);
            break;
        case "hard":
            play(1000, 3);
            break;
    }

}