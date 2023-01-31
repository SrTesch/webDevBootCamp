let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 0;

if(runnerAge >= 18 && registeredEarly){
  raceNumber += 1000;
}

if(runnerAge >= 18 && registeredEarly){
  console.log(`${raceNumber}, your race starts at 9:30!`);
}else if(runnerAge >= 18 && !registeredEarly){
  console.log("Late adults run at 11:00 am")
}else {
  console.log("Youth regstrants run at 12:30 pm (regardless of registration)");
}