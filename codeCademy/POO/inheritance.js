class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  console.log(`Name: ${nurseOlynyk.name}`);
  console.log(`remaining vacation days: ${nurseOlynyk.remainingVacationDays}`)
  console.log(`Certifications: ${nurseOlynyk.certifications}`)
  nurseOlynyk.takeVacationDays(5);
  console.log("Taking 5 days off..............")
  console.log(`remaining vacation days: ${nurseOlynyk.remainingVacationDays}`)
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);