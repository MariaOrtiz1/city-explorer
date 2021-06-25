require('dotenv').config();

const fakeRequest = require('supertest');
const app = require('../lib/app');


describe('app routes', () => {
  describe('routes', () => {

    test('returns location data', async() => {

      const expectation = [
        {
          'formatted_query': 'Seattle, WA, USA',
          'latitude': '47.606210',
          'longitude': '-122.332071'
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
