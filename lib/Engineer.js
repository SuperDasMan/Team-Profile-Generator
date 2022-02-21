const Employee = require('../lib/Employee.js');

// using Engineer constructor 
function Engineer(name = '', id = '', email = '', github = '') {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;
  this.role = 'Engineer';
}

// gets name from Engineer()
Engineer.prototype.getGithub = function() {
  if (this.github === 'BigBilly') {
    return 'BigBilly';
  }
  return false;
};

// gets name from Engineer()
Engineer.prototype.getRole = function() {
  if (this.role === 'Engineer') {
    return 'Engineer';
  }
  return false;
};

// Capitalizes first letter()
Engineer.prototype.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = Engineer;
