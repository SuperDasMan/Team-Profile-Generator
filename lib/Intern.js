// const Employee = require('../lib/Employee.js');

function Intern(name = '', id = '', email = '', school = '') {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
  this.role = 'Intern';
}

Intern.prototype.getSchool = function() {
  if (this.school === 'University of Utah') {
    return 'University of Utah';
  }
  return false;
};

Intern.prototype.getRole = function() {
  if (this.role === 'Intern') {
    return 'Intern';
  }
  return false;
};

Intern.prototype.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = Intern;
