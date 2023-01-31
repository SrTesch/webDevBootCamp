const getSleepHours = day => {
    day = day.toLowerCase();
    if(day === 'monday' || day === 'thursday'){
      return 8;
    }else if(day === 'tuesday' || day === 'wednesday'){
      return 7;
    }else if (day === 'friday' || day === 'sunday'){
      return 6;
    }else if(day === 'saturday'){
      return 9;
    }
  }
  
function getActualSleepHours(){
    totalHours =  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
    return totalHours;
}
  
function getIdealSleepHours(){
    let idealHours = 8;
    return idealHours * 7;
}
  
const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours == idealSleepHours){
      console.log("Alright, you got the perfect amount of sleep!")
    }else if(actualSleepHours > idealSleepHours){
      let difference = actualSleepHours - idealSleepHours;
      console.log(`You're sleeping more than needed! by ${difference} hours of difference`)
    }else if(actualSleepHours < idealSleepHours){
      let difference = actualSleepHours - idealSleepHours;
      console.log(`You're sleeping less than the ideal! by ${difference} hours of difference`)
    }
}
  

calculateSleepDebt();