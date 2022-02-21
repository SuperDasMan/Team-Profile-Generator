// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Anybody', 1, 'anybody@mail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets name of employee 
test('gets employee name', () => {
    const employee = new Employee('Anybody', 1, 'anybody@mail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id of employee
test('gets employee ID', () => {
    const employee = new Employee('Anybody', 1, 'anybody@mail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets email of employee
test('gets employee email', () => {
    const employee = new Employee('Anybody', 1, 'anybody@mail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role of employee
test('gets role of employee', () => {
    const employee = new Employee('Anybody', 1, 'anybody@mail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

// capitalizes role title
describe('Employee', () => {
  describe('capitalize', () => {
    it('should take a string and return a new string with the first letter of the string capitalized', () => {
      const str = 'capitalize the first letter of the string.';
      const capitalized = 'Capitalize the first letter of the string.';

      const result = new Employee().capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
});