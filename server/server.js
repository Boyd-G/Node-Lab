const path = require('path');
const fs = require('fs');

const chirps = [
  {
    id: 1,
    name: 'Boyd',
    text: 'Chirp Chirp',
  },
  {
    id: 2,
    name: 'William',
    text: 'Chirp Chirp',
  },
  {
    id: 3,
    name: 'Robert',
    text: 'Chirp Chirp"',
  },
  {
    id: 4,
    name: 'Melissa',
    text: 'Chirp Chirp',
  },
  {
    id: 5,
    name: 'Rebecca',
    text: 'Chirp Chirp',
  },
];

//write the array to a file in the root of the project called chirps.json
const dataPath = path.join(__dirname, './chirps.json');

const parsedChirps = JSON.stringify(chirps);

fs.writeFile(dataPath, parsedChirps, (err) => {
  if (err) throw err;
  console.log('file saved');
});

fs.readFile(dataPath, (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data));
});
