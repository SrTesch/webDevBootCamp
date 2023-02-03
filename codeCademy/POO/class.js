class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}
  
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(`Name: ${surgeonRomero.name}`);
console.log(`Department: ${surgeonRomero.department}`);
console.log(`Remaining Vacation days: ${surgeonRomero.remainingVacationDays}`);
surgeonRomero.takeVacationDays(3);
console.log("Taking 3 days off............\n");
console.log(`Name: ${surgeonRomero.name}`);
console.log(`Department: ${surgeonRomero.department}`);
console.log(`Remaining Vacation days: ${surgeonRomero.remainingVacationDays}`);