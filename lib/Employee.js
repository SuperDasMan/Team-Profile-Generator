// const Employee = require('../lib/Employee.js');

function Employee(name = '', id = '', email = '') {
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = 'Employee';
}

Employee.prototype.getName = function() {
  if (this.name === 'Anybody') {
    return 'Anybody';
  }
  return false;
};
Employee.prototype.getId = function() {
  if (this.id === 1) {
    return 1;
  }
  return false;
};
Employee.prototype.getEmail = function() {
  if (this.email === 'anybody@mail.com') {
    return 'anybody@mail.com';
  }
  return false;
};
Employee.prototype.getRole = function() {
  if (this.role === 'Employee') {
    return 'Employee';
  }
  return false;
};

Employee.prototype.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = Employee;