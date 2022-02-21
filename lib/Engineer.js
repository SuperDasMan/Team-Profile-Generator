const Employee = require('../lib/Employee.js');

// using Engineer constructor 
class Engineer extends Employee {
  constructor (name, id, email, github) {
    super (name, id, email);
    this.github = github;
    this.role = 'Engineer';
  }

  // gets name from Engineer()
  getGithub() {
    return this.github;
  }

  // gets name from Engineer()
  getRole() {
    return this.role;
  }

  // Capitalizes first letter()
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

module.exports = Engineer;
