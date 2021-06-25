const { mungeLocationResponse } = require('../lib/munge.js');

require('dotenv').config();

describe('munge functions', () => {

  test('takes in location data and turns it into a better object to read to get infomation', async() => {

    const expectation = [
      {
        'formatted_query': 'Seattle, King County, Washington, USA',
        'latitude': '47.6038321',
        'longitude': '-122.3300624'
        
      },
    ];

    const input = [
      {
        'place_id': '235549103',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '237385',
        'boundingbox': [
          '47.4810022',
          '47.7341357',
          '-122.459696',
          '-122.224433'
        ],
        'lat': '47.6038321',
        'lon': '-122.3300624',
        'display_name': 'Seattle, King County, Washington, USA',
        'class': 'place',
        'type': 'city',
        'importance': 0.772979173564379,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
      },
      {
        'place_id': '55417079',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'node',
        'osm_id': '4836954932',
        'boundingbox': [
          '20.7199184',
          '20.7200184',
          '-103.3763786',
          '-103.3762786'
        ],
        'lat': '20.7199684',
        'lon': '-103.3763286',
        'display_name': 'Seattle, Villas de Guadalupe, Zapopan, Jalisco, 38901, Mexico',
        'class': 'place',
        'type': 'neighbourhood',
        'importance': 0.30000000000000004
      },
      {
        'place_id': '156976950',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'way',
        'osm_id': '291707810',
        'boundingbox': [
          '25.1837689',
          '25.1845505',
          '121.4465868',
          '121.4474398'
        ],
        'lat': '25.18415975',
        'lon': '121.446939985985',
        'display_name': 'Seattle, Lanweibu, Beitou Village, Danhai, Tamsui District, New Taipei, Taiwan',
        'class': 'landuse',
        'type': 'residential',
        'importance': 0.30000000000000004
      },
      {
        'place_id': '84138175',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'way',
        'osm_id': '10671266',
        'boundingbox': [
          '41.9611659',
          '41.9657274',
          '-121.9226362',
          '-121.9226043'
        ],
        'lat': '41.9641881',
        'lon': '-121.922629',
        'display_name': 'Seattle, Dorris, Siskiyou County, California, 96058, USA',
        'class': 'highway',
        'type': 'residential',
        'importance': 0.2
      },
      {
        'place_id': '90129562',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'way',
        'osm_id': '22919051',
        'boundingbox': [
          '14.6180684',
          '14.6213139',
          '121.0429669',
          '121.0448923'
        ],
        'lat': '14.6195488',
        'lon': '121.0440164',
        'display_name': 'Seattle, Kaunlaran, Cubao, 4th District, Quezon City, Eastern Manila District, Metro Manila, 1111, Philippines',
        'class': 'highway',
        'type': 'residential',
        'importance': 0.2
      },
      {
        'place_id': '160325077',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'way',
        'osm_id': '307770120',
        'boundingbox': [
          '28.8472264',
          '28.8487875',
          '-111.9789493',
          '-111.9780146'
        ],
        'lat': '28.8481394',
        'lon': '-111.9783605',
        'display_name': 'Seattle, Nuevo Kino, Bahía Kino, Hermosillo, Sonora, Mexico',
        'class': 'highway',
        'type': 'residential',
        'importance': 0.2
      },
      {
        'place_id': '95155603',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'way',
        'osm_id': '29546551',
        'boundingbox': [
          '14.4191845',
          '14.4193677',
          '120.9180883',
          '120.9187908'
        ],
        'lat': '14.4192428',
        'lon': '120.918312',
        'display_name': 'Seattle, ACM Woodstock Homes Ph9, Alapan 1-A, Bayan Luma VI, Imus, Cavite, Calabarzon, 4103, Philippines',
        'class': 'highway',
        'type': 'residential',
        'importance': 0.2
      },
      {
        'place_id': '203034631',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'way',
        'osm_id': '561843639',
        'boundingbox': [
          '47.4112544',
          '47.4112745',
          '-122.2621269',
          '-122.2608738'
        ],
        'lat': '47.4112602',
        'lon': '-122.260923',
        'display_name': 'Seattle, Kent, King County, Washington, 98032, USA',
        'class': 'highway',
        'type': 'service',
        'importance': 0.175
      },
      {
        'place_id': '312432623',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'way',
        'osm_id': '165271257',
        'boundingbox': [
          '14.6696649',
          '14.6703081',
          '121.0988688',
          '121.0994135'
        ],
        'lat': '14.6703081',
        'lon': '121.0994135',
        'display_name': 'Seattle, Vista Real Classica, Batasan Hills, 2nd District, Quezon City, Eastern Manila District, Metro Manila, 1808, Philippines',
        'class': 'highway',
        'type': 'service',
        'importance': 0.175
      },
      {
        'place_id': '6534059',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'node',
        'osm_id': '668442224',
        'boundingbox': [
          '47.6028456',
          '47.6029456',
          '-122.3398908',
          '-122.3397908'
        ],
        'lat': '47.6028956',
        'lon': '-122.3398408',
        'display_name': 'Seattle, Colman Dock, West Edge, Belltown, Seattle, King County, Washington, 98104, USA',
        'class': 'amenity',
        'type': 'ferry_terminal',
        'importance': 0.101
      }
    ];

    const actual = mungeLocationResponse(input);

    expect(actual).toEqual(expectation);
  });
});