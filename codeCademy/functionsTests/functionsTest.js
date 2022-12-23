function greetWorld(){
    return "Hello, World!";
}



function canIVote(age){
    if(age >= 18)
      return true;
    else
      return false;
}



const agreeOrDisagree = (str1, str2) => {
    if (str1 === str2)
      return "You agree!"
    else
      return "You disagree!"
}



const lifePhase = age => {

    if(age < 0 || age > 140)
      return 'This is not a valid age'
    else if(age >= 0 && age <= 3)
      return 'baby';
    else if(age <= 12)
      return 'child';
    else if (age <= 19)
      return 'teen';
    else if(age <= 64)
      return 'adult'
    else if(age <=140)
      return 'senior citizen'

}
console.log(`The Life Phase that you are with 22 years old is => ${lifePhase(22)}`); // should print 'Adult' 



const finalGrade = (num1, num2, num3) =>{
    if(num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100 || num3 < 0 || num3 > 100)
    return 'You have entered an invalid grade.'
    let average = (num1 + num2 + num3)/3;
    if (average <= 59)
      return 'F'
    else if (average <= 69)
      return 'D'
    else if(average <= 79)
      return 'C'
    else if(average <= 89)
      return 'B'
    else
      return 'A'
}
console.log(`Your final grade is => ${finalGrade(99,92,95)}`) // Should print 'A'



const calculateWeight = (earthWeight, planet) => {
    switch(planet){
      case 'Mercury':
        return earthWeight * 0.378;
      case 'Venus':
        return earthWeight * 0.907;
      case 'Mars':
        return earthWeight * 0.377;
      case 'Jupiter':
        return earthWeight * 2.36;
      case 'Saturn':
        return earthWeight * 0.916;
      default:
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}
console.log(calculateWeight(100, 'Jupiter')) // Should print 236



const howOld = (age, year) =>{
    const yearDifference = year - 2022
    const newAge = age + yearDifference
    if(newAge < 0)
      return `The year ${year} was ${newAge*-1} years before you were born`
    else if(newAge > age)
      return `You will be ${newAge} in the year ${year}`
    else
      return `You were ${newAge} in the year ${year}`
}




const tipCalculator = (quality, total) => {

    switch(quality){
      case 'bad':
        return total * 0.05;
      case 'ok':
        return total * 0.15;
      case 'good':
        return total * 0.2;
      case 'excellent':
        return total * 0.3;
      default:
        return total *0.18;
    }
}



const toEmoticon = str => {
    switch(str){
      case 'shrug':
        return '|_{"}_|'
      case 'smiley face':
        return ':)';
      case 'frowny face':
        return ':(';
      case 'winky face':
        return ';)';
      case 'heart':
        return '<3';
      default:
        return '|_(* ~ *)_|'
    }
}