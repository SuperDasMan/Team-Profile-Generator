const Employee = require('../lib/Employee.js');

// using Intern constructor 
function Intern(name = '', id = '', email = '', school = '') {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
  this.role = 'Intern';
}

// gets name from Intern()
Intern.prototype.getSchool = function() {
  if (this.school === 'University of Utah') {
    return 'University of Utah';
  }
  return false;
};

// gets name from Intern()
Intern.prototype.getRole = function() {
  if (this.role === 'Intern') {
    return 'Intern';
  }
  return false;
};

// Capitalizes first letter()
Intern.prototype.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = Intern;
