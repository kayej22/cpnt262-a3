'use strict'

const Array = [];

class Image {
  constructor(
    id,
    title,
    description,
    pathURL,
    linkURL,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.width = 1920;
    this.height = 1080; 
    this.pathURL = `./images/${pathURL}.jpg`;
    this.linkURL = `https://en.wikipedia.org/wiki/${linkURL}`;
    this.credit = 'Leeroy';
    this.creditURL = 'https://stocksnap.io/author/374'; 
  }
}

const addImage = (
    id,
    title,
    description,
    pathURL,
    linkURL) => {
  const image = new Image(id,title,description,pathURL,linkURL);
  Array.push(image);
}

Array[0] = new Image(
  1,
  'Hiking',
  'A lovely snowy day in the mountains',
  'StockSnap_M1G6NWULHL',
  'Hiking'
);

addImage(
  2,
  'Leaves',
  'a fallen leaf in snow',
  'StockSnap_QFVTG5T37V',
  'Leaf'
);

addImage(
  3,
  'Headphones',
  'StockSnap_DM8MFOGVFG',
  'Headphones'
);

addImage(
  4,
  'Architecture',
  'StockSnap_5CXNO08OHT',
  'Architecture'
);

addImage(
  5,
  'Water Taxi',
  'StockSnap_T56JW384MI',
  'Water_taxi'
);

addImage(
  6,
  'Observation Deck',
  'StockSnap_Q42LWDSRWX',
  'Observation_deck'
);

addImage(
  7,
  'Canada',
  'StockSnap_WUTL5UK6KU',
  'Canada'
);

addImage(
  8,
  'Lake',
  'StockSnap_RGFJ3WZQI1',
  'Lake'
);

addImage(
  9,
  'Satellite',
  'StockSnap_9O135EFRB2',
  'Satellite'
);

export {Array, addImage};