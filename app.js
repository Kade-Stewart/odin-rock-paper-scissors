const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'
const EMOJIS = ['✊', '✋', '✌️']

let userChoice
let computerChoice

let userScore = 0
let computerScore = 0
let roundWinner = null;
let roundComplete = false;

const computerChoiceIcon = document.querySelector('.computerChoiceIcon')
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const replayButton = document.querySelector('#replayButton')

let currentEmojiSelectionIndex = 0

setInterval(() => {
    if(roundComplete !== true) {
        computerChoiceIcon.textContent = EMOJIS[currentEmojiSelectionIndex]
        currentEmojiSelectionIndex++
    }
    if(currentEmojiSelectionIndex > EMOJIS.length - 1) {
        currentEmojiSelectionIndex = 0;
    }
}, 300)

const disableAllButtons = () => {
    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true
}

const enableAllButtons = () => {
    rockButton.disabled = false
    paperButton.disabled = false
    scissorsButton.disabled = false

    rockButton.style.background = '#202426'
    paperButton.style.background = '#202426'
    scissorsButton.style.background = '#202426'
}


const userButtonContainer = document.querySelector('.buttonContainer');

userButtonContainer.addEventListener('click', (event) => {
    const target = event.target;

    switch(target.id) {
        case 'rock':
            console.log('Rock was selected by user');
            userChoice = ROCK
            target.style.background = '#5f686c'
            break;
        case 'paper':
            console.log('Paper was selected by user');
            userChoice = PAPER
            target.style.background = '#5f686c'
            break;
        case 'scissors':
            console.log('Scissors was selected by user');
            userChoice = SCISSORS
            target.style.background = '#5f686c'
            break;
        default:
            return;
    }
    disableAllButtons()
    getComputerSelection();
});

const getComputerSelection = () => {
const computerRoll = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    switch (computerRoll) {
        case 1:
            computerChoice = ROCK
            console.log(`Computer selected ${computerChoice}!`)
            break
        case 2:
            computerChoice = PAPER
            console.log(`Computer selected ${computerChoice}!`)
            break
        case 3:
            computerChoice = SCISSORS
            console.log(`Computer selected ${computerChoice}!`)
            break
        default:
            console.log(`Computer Selection Invalid! Computer selection was: ${computerChoice}`)
            break
    }
    displayComputerSelection(computerRoll)
    determineRoundWinner()
}

const displayComputerSelection = (computerRoll) => {
    setTimeout(() => {
        roundComplete = true
        computerChoiceIcon.textContent = EMOJIS[computerRoll - 1]
        displayWinner()
        updateScores()
    }, 2000) 

    setTimeout(() => {
        replayButton.style.display = 'block'
    }, 2500)
}

const determineRoundWinner = () => {
    switch (userChoice) {
        case ROCK: 
            if(computerChoice === SCISSORS) {
                console.log('YOU WON!')
                roundWinner = 'player'
                userScore++
            } else if (computerChoice === ROCK) {
                console.log('YOU TIED!')
            } else {
                console.log('YOU LOST!')
                roundWinner = 'computer'
                computerScore++
            }
        break
        case PAPER:
            if(computerChoice === SCISSORS) {
                console.log('YOU LOST!')
                roundWinner = 'computer'
                computerScore++
            } else if (computerChoice === ROCK) {
                console.log('YOU WON!')
                roundWinner = 'player'
                userScore++
            } else {
                console.log('YOU TIED!')
            }   
        break
        case SCISSORS:
            if(computerChoice === SCISSORS) {
                console.log('YOU TIED!')
            } else if (computerChoice === ROCK) {
                console.log('YOU LOST!')
                roundWinner = 'computer'
                computerScore++
            } else {
                console.log('YOU WON!')
                roundWinner = 'player'
                userScore++
            }   
        break
    }
}

const computerScoreUI = document.querySelector('.computerScore')
const userScoreUI = document.querySelector('.userScore')
const updateScores = () => {
    computerScoreUI.textContent = computerScore.toString()
    userScoreUI.textContent = userScore.toString()
}

const roundWinnerText = document.querySelector('.roundWinnerText')
const displayWinner = () => {
    switch (roundWinner) {
        case 'computer': 
            roundWinnerText.textContent = 'YOU LOST!!!'
            break
        case 'player': 
            roundWinnerText.textContent = 'YOU WON!!!'
            break
        default:
            roundWinnerText.textContent = 'YOU TIED!!!'
            break
    }
    roundWinnerText.style.display = 'block'
    roundWinner = null
}

replayButton.addEventListener('click', () => {
    roundComplete = false
    replayButton.style.display = 'none'
    roundWinnerText.style.display = 'none'
    roundWinner = null;
    enableAllButtons()
})
// remove you won/tied/lost text
