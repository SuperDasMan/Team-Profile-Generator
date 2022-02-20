// const Employee = require('../lib/Employee.js');

function Manager(name = '', id = '', email = '', officeNumber = '') {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
  this.role = 'Manager';
}

Manager.prototype.getRole = function() {
  if (this.role === 'Manager') {
    return 'Manager';
  }
  return false;
};

Manager.prototype.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = Manager;