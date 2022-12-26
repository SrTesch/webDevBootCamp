let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (user, computer, secret) => {
    let differenceU = secret - user;
    let differceC = computer - secret;
    if(differenceU**2 >= differceC**2)
        return false;
    else
        return true;
}

const updateScore = value => {
    if (value === 'human')
        humanScore += 1;
    else if(value === 'computer')
        computerScore += 1;
}

const advanceRound = () => {
    currentRoundNumber += 1;
}