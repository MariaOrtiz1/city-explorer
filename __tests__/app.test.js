require('dotenv').config();

const fakeRequest = require('supertest');
const app = require('../lib/app');


describe('app routes', () => {
  describe('routes', () => {

    test('returns location data', async() => {

      const expectation = [
        {
          'formatted_query': 'Seattle, King County, Washington, USA',
          'latitude': '47.6038321',
          'longitude': '-122.3300624'
        }
      ];

      const data = await fakeRequest(app)
        .get('/location?search=seattle')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });
  });
});
