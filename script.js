let userscore = 0;
let computerscore = 0;

const choice = document.querySelectorAll('.option');
const scoreme=document.querySelector('#userScore');
const scorecomputer=document.querySelector('#compScore');

// Generating computer choice
const getcomputerchoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}
let winner = document.querySelector('#msg');
// Function to play the game and determine the winner
const playgame = (userchoice) => {
    console.log(`user choice is ${userchoice}`);
    const computerchoice = getcomputerchoice();
    console.log(`computer choice is ${computerchoice}`);
    if (userchoice === computerchoice) {
        console.log('Its a tie');
        winner.textContent = 'Its a Tie,Play Again';
        winner.style.backgroundColor = 'black';
    }
    else if (userchoice === 'rock' && computerchoice === 'scissors' || userchoice === 'paper' && computerchoice === 'rock' || userchoice === 'scissors' && computerchoice === 'paper') {
        userscore++;
        scoreme.textContent = userscore;
        console.log('You win');
        winner.textContent = 'You Won';
        winner.style.backgroundColor = 'green';
        
    }
    else {
        computerscore++;
        scorecomputer.textContent = computerscore;
        console.log('You lose');
        winner.textContent = 'You Lose';
        winner.style.backgroundColor = 'red';
       
    }
}
// this is a loop that will iterate over each element of the choice array
choice.forEach((option) => {
    option.addEventListener('click', () => {
        const userchoice = option.getAttribute("id"); // Get the ID of the clicked element
        playgame(userchoice);
    })
});