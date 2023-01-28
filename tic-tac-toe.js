// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This JS script is for the logical structure of the game:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~Code-Initiation~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Console particulars:
console.log("Welcome to Adarsh's Tic-Tac-Toe!");
console.info("This game is designed to be played by two players manually.");
console.info(`Winner will be declared automatically!`);
console.info(`Here is a request to the respective players to reset the game manually if the game is resulted as draw because the draw result won't get displayed!`);
console.log(`Font <link> for navigation bar: https://fonts.googleapis.com/css2?family=Alatsi&family=Anton&display=swap`);
console.log(`Font <link> for Leader-Board heading: https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed&family=Racing+Sans+One&family=Ramabhadra&family=Signika&display=swap`);
console.log(`Font <link> for Leader-Board turns: https://fonts.googleapis.com/css2?family=Alatsi&display=swap`);
console.log(`Font <link> for Reset Button: https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Secular+One&display=swap`);
console.log(`Font <link> for Footer: https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed&family=Ramabhadra&family=Signika&display=swap`);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Declaring Variables:
let turn = "X";
let gameover = false;

// Sound effects:
// Tapping sound clip:
let tapSound = new Audio("../Audio/tap.mp3");
// Winning sound clip:
let winnerSound_01 = new Audio("../Audio/winner.mp3");
let winnerSound_02 = new Audio("../Audio/Pikachu.mp3");
// Reset sound clip:
let reset = new Audio("../Audio/resetButton.wav");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Funtion for deciding turn:
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Function for verifying the winnner:
const checkWinner = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    // Possible combinations to win the game:
    let winner = [
        // Horizontal Win:
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical Win:
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal Win:
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Declaring Winner:
    winner.forEach(val => {
        if ((boxtext[val[0]].innerText === boxtext[val[1]].innerText) && (boxtext[val[1]].innerText === boxtext[val[2]].innerText) && (boxtext[val[0]].innerText !== "")) {

            let box = document.getElementsByClassName('box');
            // background color:
            box[val[0]].style.background = "rgba(255, 255, 0, 0.767)";
            box[val[1]].style.background = "rgba(255, 255, 0, 0.767)";
            box[val[2]].style.background = "rgba(255, 255, 0, 0.767)";
            // Text color:
            box[val[0]].style.color = "rgba(4, 0, 255, 0.767)";
            box[val[1]].style.color = "rgba(4, 0, 255, 0.767)";
            box[val[2]].style.color = "rgba(4, 0, 255, 0.767)";

            // Declaring winner through Audio:
            // Unmuting the sound clips:
            winnerSound_01.muted = false;
            winnerSound_02.muted = false;
            // Playing the sound clips:
            winnerSound_01.play();
            winnerSound_02.play();

            // Declaring Winner through Text:
            document.querySelector('.info').innerText = "Player " + boxtext[val[0]].innerText + " wins";
            document.querySelector('.info').style.color = "yellow";

            // Declaring Winner through Gif/Sticker:
            document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.gif').getElementsByTagName('img')[0].style.height = "200px";

            // Ending the game:
            gameover = true;
        }
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Logic handling:
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            tapSound.play();
            checkWinner();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for Player " + turn;
            }
        }
    });
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Reset the game:
document.querySelector('#reset').addEventListener('click', () => {
    // Playing Reset Audio:
    reset.play();

    setTimeout(() => {
        location.reload();
    }, 600);
    
    gameover = false;
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~Code-Termination~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~