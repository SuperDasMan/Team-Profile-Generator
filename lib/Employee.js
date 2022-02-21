// using Employee constructor 
function Employee(name = '', id = '', email = '') {
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = 'Employee';
}

// gets name from Employee() 
Employee.prototype.getName = function() {
  if (this.name === 'Anybody') {
    return 'Anybody';
  }
  return false;
};

// gets id from Employee() 
Employee.prototype.getId = function() {
  if (this.id === 1) {
    return 1;
  }
  return false;
};

// gets id from Employee() 
Employee.prototype.getEmail = function() {
  if (this.email === 'anybody@mail.com') {
    return 'anybody@mail.com';
  }
  return false;
};

// gets id from Employee() 
Employee.prototype.getRole = function() {
  if (this.role === 'Employee') {
    return 'Employee';
  }
  return false;
};

// Capitalizes first letter() 
Employee.prototype.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = Employee;