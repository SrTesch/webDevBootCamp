/*
School Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

Primary (subclass of school) but one additional property:
pickupPolicy(string)

Middle (subclass of school) no additional property or method

High (subclass of school) but one additional property:
sportsTeams (array of strings)
*/

class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set changeNumber(value){
        if(isInteger(Number(value)))
            this._numberOfStudents = value;
        else
            console.log('Invalid input: numberOfStudents must be set to a Number.');
    }

    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers){
        let random = Math.floor(Math.random()*substituteTeachers.length);
        return substituteTeachers[random];
    }
}

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickUpPolicy){
        super(name, "primary", numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }

    get pickUpPolicy(){
        return this._pickUpPolicy;
    }
}

class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name, "high", numberOfStudents);
        this._sportTeams = sportsTeams;
    }

    get sportsTeams(){
        return this._sportTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Willians', 'J. R. Smith', 'James Harden', 'Jason Terry', "Manu Ginobli"]))

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'BasketBall', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);