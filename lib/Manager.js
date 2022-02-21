const Employee = require('../lib/Employee.js');

// using Manager constructor 
function Manager(name = '', id = '', email = '', officeNumber = '') {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
  this.role = 'Manager';
}

// gets name from Manager()
Manager.prototype.getRole = function() {
  if (this.role === 'Manager') {
    return 'Manager';
  }
  return false;
};

// Capitalizes first letter()
Manager.prototype.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


module.exports = Manager;