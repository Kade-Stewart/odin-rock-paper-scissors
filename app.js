const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

let userChoice
let computerChoice

let userScore = 0
let computerScore = 0
let gameComplete = false;

const getUserInput = () => {
    userChoice = null;
    userChoice = Number(prompt('Please input a number between 1-3 to select your play this round. (1)Rock, (2)Paper, (3)Scissors'))
    validateUserInput()
}

const validateUserInput = () => {
    switch (userChoice) {
        case 1:
            userChoice = ROCK
            console.log(`You selected ${userChoice}!`)
            break
        case 2:
            userChoice = PAPER
            console.log(`You selected ${userChoice}!`)
            break
        case 3:
            userChoice = SCISSORS
            console.log(`You selected ${userChoice}!`)
            break
        default:
        alert('Improper input, please try again')
        getUserInput()
    }
}

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
}

const determineRoundWinner = () => {
    switch (userChoice) {
        case ROCK: 
        if(computerChoice === SCISSORS) {
                console.log('YOU WON!')
                userScore++
            } else if (computerChoice === ROCK) {
                console.log('YOU TIED!')
            } else {
                console.log('YOU LOST!')
                computerScore++
            }
        break
        case PAPER:
            if(computerChoice === SCISSORS) {
                console.log('YOU LOST!')
                computerScore++
            } else if (computerChoice === ROCK) {
                console.log('YOU WON!')
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
                computerScore++
            } else {
                console.log('YOU WON!')
                userScore++
            }   
        break
    }
}

const determineCurrentScore = () => {
    if (userScore === 3) {
        alert('You won best out of 5! Game Over!')
        console.log('You won best out of 5! Game Over!')
        gameComplete = true
    } else if (computerScore === 3) {
        alert("You lost best out of 5!!! Better luck next time!")
        console.log("You lost best out of 5!!! Better luck next time!")
        gameComplete = true
    } else {
        gameComplete = false
        console.log(`Your score: ${userScore}/5. Computer score: ${computerScore}/5`)
    }
}

const playRound = () => {
    console.log("Rock Paper Scissors best out of 5!")
    do {
        getUserInput()
        getComputerSelection()
        determineRoundWinner()
        determineCurrentScore()
    } while (gameComplete == false)
}

playRound()

