const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

let dataPath = path.join(__dirname, 'popular-articles.json');

rp('https://reddit.com/r/popular.json')
  .then((body) => {
    let bodyParsed = JSON.parse(body);
    let articleArray = [];
    let tempObj;

    bodyParsed.data.children.forEach((child) => {
      tempObj = {};
      tempObj['title'] = child['data']['title'];
      tempObj['url'] = child['data']['url'];
      tempObj['author'] = child['data']['author'];
      articleArray.push(tempObj);
    });

    let strArray = JSON.stringify(articleArray);

    fs.writeFile(dataPath, strArray, (err) => {
      if (err) console.log(err);
    });
  })
  .catch((err) => console.log(err));
