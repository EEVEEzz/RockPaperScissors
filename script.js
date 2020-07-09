// HUGE PROPS TO 'Dev Ed' FOR AMAZING JS TUTORIALS!!
const game = () => {
    let pScore = 0;
    let cScore = 0;  

    // START THE GAME
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
    
        playBtn.addEventListener("click", () => {
          introScreen.classList.add("fadeOut");
          match.classList.add("fadeIn");
        });
      };
    // PLAY MATCH
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");
    
        hands.forEach(hand => {
          hand.addEventListener("animationend", function() {
            this.style.animation = "";
          });
        });
        // Computer options
        const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
                // COMPUTER CHOICE
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log("computer chose: " + computerChoice);

                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(this.textContent, computerChoice);
                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                  }, 2000);
                  //Animation
                  playerHand.style.animation = "shakePlayer 2s ease";
                  computerHand.style.animation = "shakeComputer 2s ease";
                });
              });
            };
          

            const updateScore = () => {
                const playerScore = document.querySelector(".player-score p");
                const computerScore = document.querySelector(".computer-score p");
                playerScore.textContent = pScore;
                computerScore.textContent = cScore;
              };

              const compareHands = (playerChoice, computerChoice) => {
        //update text
        const winner = document.querySelector(".winner");
        //Check If It Is a Tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
          }
        //check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
              winner.textContent = "Player Wins";
              pScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Computer Wins";
              cScore++;
              updateScore();
              return;
            }
          }
        // Check for Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // Check for Scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    };

    // CALL ALL INNER FUNCTIONS
    startGame();
    playMatch();
};


// START GAME FUNCTION
game();