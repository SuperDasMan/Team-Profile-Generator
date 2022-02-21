// using Employee constructor 
class Employee {
  constructor (name = '', id = '', email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  // gets name from Employee() 
  getName() {
    return this.name;
  }

  // gets id from Employee() 
  getId() {
      return this.id;
  }

  // gets id from Employee() 
  getEmail() {
      return this.email;
  }

  // gets id from Employee() 
  getRole() {
      return this.role;
  }

  // Capitalizes first letter() 
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

module.exports = Employee;