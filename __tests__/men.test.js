const mmm = require('./mmm.js');

test('JSON server is running', () => {
    return fetch('http://localhost:3000')
      .then(response => {
        expect(response.status).toEqual(200);
    });
});

describe('fetching data', () => {
    it('fetches data from the correct URL', async () => {
      const response = await fetch('http://localhost:3000/Products');
      expect(response.url).toEqual('http://localhost:3000/Products');
    });
  });

describe('fetching data', () => {
    it('fetches valid JSON data', async () => {
        const response = await fetch('http://localhost:3000/Products');
        const data = await response.json();
        expect(Array.isArray(data)).toBe(true);
    });
});

