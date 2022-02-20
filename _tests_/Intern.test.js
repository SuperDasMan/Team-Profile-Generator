// using Intern constructor
const Intern = require('../lib/Intern.js');

// creates Intern object
test('creates a Intern object', () => {
  const intern = new Intern('Samanthera', 69, 'kofefegurl@intern.com', 'University of Utah');

  expect(intern.school).toEqual(expect.any(String));
});

// gets school of Intern 
test('gets school of intern', () => {
  const intern = new Intern('Samanthera', 69, 'kofefegurl@intern.com', 'University of Utah');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role of Intern
test('gets role of Intern', () => {
  const intern = new Intern('Samanthera', 69, 'kofefegurl@intern.com', 'University of Utah');

  expect(intern.getRole()).toEqual('Intern');
});

// capitalizes role title
describe('Intern', () => {
  describe('capitalize', () => {
    it('should take a string and return a new string with the first letter of the string capitalized', () => {
      const str = 'capitalize the first letter of the string.';
      const capitalized = 'Capitalize the first letter of the string.';

      const result = new Intern().capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
});