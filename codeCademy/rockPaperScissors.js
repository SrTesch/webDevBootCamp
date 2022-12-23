const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput
    }else{
      console.log("Please type Rock, Paper or Scissors");
    };
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
      case 0:
        return "rock";
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    };
  };
  
  function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return "Was a TIE! :(";
    }else if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer WINS!!!';
      }else{
        return 'User WINS!!!';
      }
    }else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer WINS!!!';
      }else{
        return 'User WINS!!!';
      }
    }else{
      if(computerChoice === 'rock'){
        return 'Computer WINS!!!';
      }else{
        return 'User WINS!!!';
      }
    }
  }
  
  user = getUserChoice('rock');
  computer = getComputerChoice();
  console.log(`User choice => ${user}`);
  console.log(`Computer choice => ${computer}`);
  console.log(determineWinner(user, computer));  