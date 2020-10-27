const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp('https://reddit.com/r/popular.json')
  .then((body) => {
    let bodyParsed = JSON.parse(body);

    bodyParsed.data.children.forEach((child) => {
      switch (path.extname(child.data.url)) {
        case '.jpg':
        case '.gif':
        case '.png':
          //if article is .jpg or .gif or .png
          //download media
          rp(child.data.url, { encoding: 'base64' })
            .then((image) => {
              let dataPath = path.join(
                __dirname,
                `downloads/${child.data.id}${path.extname(child.data.url)}`
              );
              fs.writeFile(dataPath, image, { encoding: 'base64' }, (err) => {
                if (err) console.log(err);
              });
            })
            .catch((err) => console.log(err));
      }
    });
  })
  .catch((err) => console.log(err));
