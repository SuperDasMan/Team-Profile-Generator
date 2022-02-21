const Employee = require('../lib/Employee.js');

// using Manager constructor 
class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    super (name, id, email);
    this.officeNumber = officeNumber;
    this.role = 'Manager';
  }

  // gets name from Manager()
  getRole() {
    return this.role;
  }

  // Capitalizes first letter()
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

module.exports = Manager;