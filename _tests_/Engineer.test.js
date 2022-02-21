// using Engineer constructor
const Engineer = require('../lib/Engineer.js');

// creates Engineer object
test('creates a Engineer object', () => {
  const engineer = new Engineer('Billy', 25, 'bigbilly@engineer.com', 'BigBilly');

  expect(engineer.github).toEqual(expect.any(String));
});

// gets github username of Engineer 
test('gets github of engineer', () => {
  const engineer = new Engineer('Billy', 25, 'bigbilly@engineer.com', 'BigBilly');

  expect(engineer.getRole()).toEqual('Engineer');
});

// gets role of Engineer
test('gets role of Engineer', () => {
  const engineer = new Engineer('Billy', 25, 'bigbilly@engineer.com', 'BigBilly');

  expect(engineer.getRole()).toEqual('Engineer');
});

// capitalizes role title
describe('Engineer', () => {
  describe('capitalize', () => {
    it('should take a string and return a new string with the first letter of the string capitalized', () => {
      const str = 'capitalize the first letter of the string.';
      const capitalized = 'Capitalize the first letter of the string.';

      const result = new Engineer().capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
});