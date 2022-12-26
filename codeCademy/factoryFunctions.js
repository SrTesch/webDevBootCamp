function robotFactory(model, mobile){ //property value shorthand
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop')
        }
    }
}

const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)



//As we can see, in the code block below we creat an robot manually and use a "destructured assignment" on the line 31
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const {functionality} = robot;
  functionality.beep();