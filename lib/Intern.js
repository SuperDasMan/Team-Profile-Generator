const Employee = require('../lib/Employee.js');

// using Intern constructor 
class Intern extends Employee {
  constructor (name, id, email, school) {
    super (name, id, email);
    this.school = school;
    this.role = 'Intern';
  }

  // gets name from Intern()
  getSchool() {
    return this.school;
  }
  

  // gets name from Intern()
  getRole() {
    return this.role;
  }

  // Capitalizes first letter()
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

module.exports = Intern;
