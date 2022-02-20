// using Manager constructor
const Manager = require('../lib/Manager.js');

// creates Manager object
test('creates a Manager object', () => {
  const manager = new Manager('Steve', 13, 'boss@manager.com', 404 );

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role of Manager 
test('gets role of Manager', () => {
  const manager = new Manager('Steve', 13, 'boss@manager.com', 404);

  expect(manager.getRole()).toEqual('Manager');
});

// capitalizes role title
describe('Manager', () => {
  describe('capitalize', () => {
    it('should take a string and return a new string with the first letter of the string capitalized', () => {
      const str = 'capitalize the first letter of the string.';
      const capitalized = 'Capitalize the first letter of the string.';

      const result = new Manager().capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
});